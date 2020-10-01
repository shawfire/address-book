import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function EditAddress({ address, setAddress }) {
  const formik = useFormik({
    initialValues: {
      ...address,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2))
      setAddress(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input id="firstName" type="text" {...formik.getFieldProps("firstName")} />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <DatePicker
        id="dob"
        selected={formik.values.dob}
        {...formik.getFieldProps("dob")}
        onChange={(date) => {
          console.log(date)
          console.log(date.toUTCString())
          formik.setFieldValue("dob", date)
        }}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
      />
      {formik.touched.dob && formik.errors.dob ? (
        <div>{formik.errors.dob}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  )
}

EditAddress.displayName = "EditAddress"

export { EditAddress }
