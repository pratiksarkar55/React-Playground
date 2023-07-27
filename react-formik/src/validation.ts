import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._-]+@google\.com$/;
yup.addMethod(yup.string, "email", function (message) {
  return this.matches(emailRegex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

export const yupSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be of 3 characters minimum"),
  email: yup
    .string()
    .email("Email should be of specfic format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be 8 characters minimum")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Password must match")
    .required("Confirm password is required"),
});

export const formikSchema = yup.object().shape({
  jobName: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be of 3 characters minimum"),
});
