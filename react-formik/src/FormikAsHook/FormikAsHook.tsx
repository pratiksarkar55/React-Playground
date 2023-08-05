import React from "react";
import { useFormik } from "formik";
import { yupSchema } from "../validation";
export const FormikAsHook = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(async () => {
        await Promise.resolve(values);
        actions.resetForm();
      }, 2000);
    },
    validationSchema: yupSchema,
  });
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    dirty,
    touched,
    isSubmitting,
  } = formik;
  //Dirty is when an element is changed.Can be reverted
  //Touched can't be reverted.Touched is chnaged only after we submit.
  console.log(errors);
  console.log("dirty", dirty);
  console.log("touched", touched);
  return (
    <>
      <div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && touched.name ? (
            <p style={{ color: "red" }}>{errors.name}</p>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && touched.email ? (
            <p style={{ color: "red" }}>{errors.email}</p>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
            />
          </div>
          {errors.confirm_password && touched.confirm_password ? (
            <p style={{ color: "red" }}>{errors.confirm_password}</p>
          ) : (
            ""
          )}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
