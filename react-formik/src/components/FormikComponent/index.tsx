import React, { useEffect, useState } from "react";
import "./formikComponent.css";
import {
  Field,
  Form,
  Formik,
  ErrorMessage,
  FieldAttributes,
  FastField,
  FieldArray,
} from "formik";
import { userSchema } from "./yupValidation";
export const YoutubeFormComponent = () => {
  const [phCount, setPhCount] = useState<number>(1);
  const [ph, setPh] = useState<string[]>([""]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const phoneValidation = (value: any, index: number) => {
    // console.log("values " + value + " and index is " + index);
    let error;
    if (!value) {
      error = "Enter phpne number";
    }
    return error;
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          comments: "",
          address: "",
          social: {
            selected: "",
          },
          phone: [""],
        }}
        onSubmit={(values, actions) => {}}
        validationSchema={userSchema}
        validateOnMount={false}
        validateOnBlur={false}
        validateOnChange={true}
      >
        {(formik) => {
          // console.log("Formik", formik);
          const {
            isValid,
            isSubmitting,
            setTouched,
            validateForm,
            setFieldError,
            values,
          } = formik;
          console.log(formik);
          return (
            <Form>
              <div>YouTube Form</div>

              <div className="formContainer">
                <div className="labelContainer">
                  <label htmlFor="name">Name</label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (formik.values.name === "Pratik") {
                        console.log("Inside");
                        formik.setErrors({
                          ...formik.errors,
                          name: "Name already exists",
                        });
                        // formik.validateForm();
                      }
                      formik.handleChange(e);
                      console.log(e.target.value);
                    }}
                  />

                  {/* <ErrorMessage name="name" /> */}
                  {formik.errors.name && formik.touched.name ? (
                    <p style={{ color: "red" }}>{formik.errors.name}</p>
                  ) : (
                    ""
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      if (formik.values.name === "Pratik") {
                        console.log("Inside");
                        formik.setErrors({
                          ...formik.errors,
                          name: "Name already exists",
                        });
                        formik.setTouched({
                          name: true,
                        });
                        // formik.validateForm();
                      }
                    }}
                  >
                    Check age
                  </button>
                </div>

                <div className="labelContainer">
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" type="email" />
                  <ErrorMessage name="email" />
                </div>

                <div className="labelContainer">
                  <label htmlFor="password">Password</label>
                  <Field id="password" name="password" type="password" />
                  <ErrorMessage name="password" />
                </div>

                <div className="labelContainer">
                  <label htmlFor="confirmPassword">Confrim Password</label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                  />
                  <ErrorMessage name="confirmPassword">
                    {(errorMessage: string) => (
                      <p style={{ color: "red" }}>{errorMessage}</p>
                    )}
                  </ErrorMessage>
                </div>

                <div className="labelContainer">
                  <label htmlFor="comments">Comments</label>
                  <FastField
                    id="comments"
                    name="comments"
                    type="text"
                    as="textarea"
                  />
                  <ErrorMessage name="comments" />
                </div>

                <div className="labelContainer">
                  <label htmlFor="address">Address</label>
                  <FastField name="address">
                    {(props: FieldAttributes<any>) => {
                      const { field, form, meta } = props;
                      //   console.log("props inside address", props);
                      return (
                        <>
                          <input type="text" id="address" {...field} />
                          {meta.touched && meta.error ? (
                            <p>{meta.error}</p>
                          ) : null}
                        </>
                      );
                    }}
                  </FastField>
                </div>

                <div className="labelContainer">
                  <label htmlFor="facebook">Facebook</label>
                  <Field
                    id="facebook"
                    name="social.selected"
                    type="radio"
                    value="Facebook"
                  />
                  <ErrorMessage name="social.facebook" />
                </div>
                <div className="labelContainer">
                  <label htmlFor="twitter">Twitter</label>
                  <Field
                    id="twitter"
                    name="social.selected"
                    type="radio"
                    value="Twitter"
                  />
                  <ErrorMessage name="social.twitter" />
                </div>

                <div className="labelContainer">
                  <FieldArray name="phone">
                    {(props: any) => {
                      const { form, pop, push } = props;
                      const { phone } = form.values;
                      //   console.log("fieldArrayProps", props);
                      return (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              let dummy = [...ph];
                              dummy.push("");
                              push("");
                              setPhCount(phCount + 1);
                              setPh(dummy);
                            }}
                          >
                            Add Phone
                          </button>
                          {phCount > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                let dummy = [...ph];
                                // console.log(dummy);
                                dummy = dummy.slice(0, dummy.length - 1);
                                pop();
                                setPhCount(phCount - 1);
                                setPh(dummy);
                              }}
                            >
                              Delete Phone
                            </button>
                          )}
                        </>
                      );
                    }}
                  </FieldArray>
                </div>

                <div className="labelContainer">
                  {ph.map((obj, index) => {
                    let indexStr = index.toString();
                    return (
                      <>
                        <Field
                          key={indexStr}
                          id="phone"
                          name={"phone[" + indexStr + "]"}
                          type="text"
                          validate={(value: any) => {
                            return phoneValidation(value, index);
                          }}
                        />
                        <ErrorMessage name={"phone[" + indexStr + "]"} />
                      </>
                    );
                  })}
                </div>

                <button
                  className="submitButton"
                  type="submit"
                  disabled={formik.isSubmitting}
                  onClick={() => {
                    let arr = {};
                    values.phone.map((obj: string, index: number) => {
                      arr = { ...arr, ["phone[" + index + "]"]: true };
                    });
                    // console.log("clicked", formik);
                    setTouched({
                      name: true,
                      email: true,
                      password: true,
                      confirmPassword: true,
                      address: true,
                      phone: true,
                    });
                    validateForm();

                    // console.log("isSUbmitting", isSubmitting);
                    if (isValid) {
                      setDisabled(true);
                      //   formik.setSubmitting(true);
                      setTimeout(() => {
                        //    formik.setSubmitting(false);
                        formik.resetForm();
                        setDisabled(false);
                      }, 3000);
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
