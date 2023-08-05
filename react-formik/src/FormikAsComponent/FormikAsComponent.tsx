import React from "react";
import { Field, Formik, Form } from "formik";
import { CustomInput } from "./CustomInput";
import { formikSchema } from "../validation";

export const FormikAsComponent = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ jobName: "", jobType: "", isAccepted: false }}
      onSubmit={(values, actions) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   actions.setSubmitting(false);
        // }, 1000);
      }}
      validationSchema={formikSchema}
    >
      {(props) => (
        <Form>
          <Field name="name">
            <CustomInput name="jobName" type="text" label="Job Name" />
          </Field>
        </Form>
      )}
    </Formik>
  </div>
);
