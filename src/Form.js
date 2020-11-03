import React from 'react';
import { withFormik} from 'formik';
import FillOut from './FillOut';
import { navigate } from "@reach/router";

function MyForm({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  }) {
    return (
      <>
        <FillOut
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          values={values}
        />
      </>
    );
  }
  
const Form = withFormik({
  mapPropsToValues: ({ initialValues }) => {
      return {
        ...initialValues,
      };
    },

  validate: (values, { validate }) =>
    Object.keys(values).reduce((errors, field) => {
      const error = validate[field](values[field]);
      return {
        ...errors,
        ...(error && { [field]: error }),
      };
    }, {}),

  handleSubmit: async (values, { setSubmitting }) => {
    const url = "http://localhost:5000/results";
    const response = await fetch(url);
    const body = await response.json();
    
    const results = body.results.filter(result =>  result.age < values.maxAge && result.breed === values.breed && result.location === values.zipCode);
    setSubmitting(false);
    navigate("/result", {state: {results}});
  },

  validateOnChange: false,

  displayName: 'Form',
})(MyForm);
  
export default Form;