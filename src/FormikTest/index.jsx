// import { useFormik, validateYupSchema } from "formik";
// import React from "react";
// import { yupValidate } from "../schemas";
// import "./style.css";
// const FormikTest = () => {
//   const {handleBlur,handleChange, values, errors, touched} = useFormik({
//     initialValues: {
//       username: "",
//       age: "",
//     },
//     validationSchema: yupValidate,
//   });
//   console.log(touched.username);
//   return (
//     <>
//       <h1>Use Formik</h1>
//       <form action="" className="form-signin">
//         <div className="form-field field-name">
//           <label htmlFor="name">Name</label>
//           <input
//             value={values.username}
//             onChange={handleChange}
//             id="username"
//             name="username"
//             type="text"
//             onBlur={handleBlur}
//             className={
//               errors.username && touched.username ? "error" : ""
//             }
//           />
//         </div>
//         <div className="form-field field-age">
//           <label htmlFor="name">Age</label>
//           <input type="text" />
//         </div>
//       </form>
//     </>
//   );
// };

// export default FormikTest;


import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const FormikTest = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" touched={touched.firstName}/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikTest;
