package com.serverless.dal;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig.TableNameOverride;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBRangeKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.PaginatedQueryList;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;

@DynamoDBTable(tableName = "PLACEHOLDER_ADDRESSES_TABLE_NAME")
public class Address {

    // get the table name from env. var. set in serverless.yml
    private static final String ADDRESSES_TABLE_NAME = System.getenv("ADDRESSES_TABLE_NAME");

    private static DynamoDBAdapter db_adapter;
    private final AmazonDynamoDB client;
    private final DynamoDBMapper mapper;

    private Logger logger = Logger.getLogger(this.getClass());

    private String id;
    private String bookName;
    private String name;
    private String mobile;

    @DynamoDBHashKey(attributeName = "id")
    @DynamoDBAutoGeneratedKey
    public String getId() {
        return this.id;
    }
    public void setId(String id) {
        this.id = id;
    }

    @DynamoDBRangeKey(attributeName = "bookName")
    public String getBookName() {
        return this.bookName;
    }
    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    @DynamoDBRangeKey(attributeName = "name")
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @DynamoDBRangeKey(attributeName = "mobile")
    public String getMobile() {
        return this.mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Address() {
        // build the mapper config
        DynamoDBMapperConfig mapperConfig = DynamoDBMapperConfig.builder()
            .withTableNameOverride(new DynamoDBMapperConfig.TableNameOverride(ADDRESSES_TABLE_NAME))
            .build();
        // get the db adapter
        this.db_adapter = DynamoDBAdapter.getInstance();
        this.client = this.db_adapter.getDbClient();
        // create the mapper with config
        this.mapper = this.db_adapter.createDbMapper(mapperConfig);
    }

    public String toString() {
        return String.format("Address [id=%s, bookName=%s, name=%s, mobile=%s]", this.id, this.bookName, this.name, this.mobile);
    }

    // methods
    public Boolean ifTableExists() {
        return this.client.describeTable(ADDRESSES_TABLE_NAME).getTable().getTableStatus().equals("ACTIVE");
    }

    public List<Address> list() throws IOException {
      DynamoDBScanExpression scanExp = new DynamoDBScanExpression();
      List<Address> results = this.mapper.scan(Address.class, scanExp);
      for (Address p : results) {
        logger.info("Addresses - list(): " + p.toString());
      }
      return results;
    }

    public Address get(String id) throws IOException {
        Address address = null;

        HashMap<String, AttributeValue> av = new HashMap<String, AttributeValue>();
        av.put(":v1", new AttributeValue().withS(id));

        DynamoDBQueryExpression<Address> queryExp = new DynamoDBQueryExpression<Address>()
            .withKeyConditionExpression("id = :v1")
            .withExpressionAttributeValues(av);

        PaginatedQueryList<Address> result = this.mapper.query(Address.class, queryExp);
        if (result.size() > 0) {
          address = result.get(0);
          logger.info("Addresses - get(): address - " + address.toString());
        } else {
          logger.info("Addresses - get(): address - Not Found.");
        }
        return address;
    }

    public void save(Address address) throws IOException {
        logger.info("Addresses - save(): " + address.toString());
        this.mapper.save(address);
    }

    public Boolean delete(String id) throws IOException {
        Address address = null;

        // get address if exists
        address = get(id);
        if (address != null) {
          logger.info("Addresses - delete(): " + address.toString());
          this.mapper.delete(address);
        } else {
          logger.info("Addresses - delete(): address - does not exist.");
          return false;
        }
        return true;
    }

}