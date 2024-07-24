/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import {AuthValueType ,ErrorType} from './type';

export const registerValidate = async (values: AuthValueType) => {
  const error: any = emailVerify({}, values.email);
  passwordVerify(error, values.password);
  confirmpassVaidate(error, values)
  return error;
};

export const loginValidate = async (values: AuthValueType) => {
  const error: ErrorType = emailVerify({}, values.email);
  passwordVerify(error, values.password);
  return error;
};

export const confirmpassVaidate = async (error: ErrorType, values: AuthValueType) => {
  if (values.password !== values.confirmPwd) {
    error.confirmPwd = toast.error("Password doesn't match");
  }
  return error;
};

const passwordVerify = (error: ErrorType, value: string) => {
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!value) {
    error.password = toast.error("Password is required");
  } else if (value.includes(" ")) {
    error.password = toast.error("Invalid Password");
  } else if (value.length < 6) {
    error.password = toast.error("Password must be at least 6 characters");
  } else if (!specialChars.test(value)) {
    error.password = toast.error(
      "Password must contain at least one special character"
    );
  }
  return error;
};

const emailVerify = (error: ErrorType, value: string) => {
  if (!value) {
    error.email = toast.error("Email is required");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error.email = toast.error("Invalid email address");
  } else if (value.includes(" ")) {
    error.email = toast.error("Invalid email address");
  }
  return error;
};
