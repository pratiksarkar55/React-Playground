import * as yup from "yup";

export const userSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should contain minimum 3 characters"),
  email: yup.string().required("Email is required").email(),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should contain minimum 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Password doesn't match")
    .required("Confirm Password is required"),
  address: yup.string().required("Address is required"),
});
