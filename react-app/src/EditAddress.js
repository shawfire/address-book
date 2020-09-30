import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function EditAddress({ address, setAddress }) {
  const formik = useFormik({
    initialValues: {
      ...address,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2))
      setAddress(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  )
}

EditAddress.displayName = 'EditAddress'

export { EditAddress }
