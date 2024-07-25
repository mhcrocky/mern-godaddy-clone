/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import styles from "./Username.module.css";
import toast from "react-hot-toast";

import { useFormik } from "formik";
import { registerValidate } from "../helper/validate";
import { AuthValueType } from "../helper/type";
import cn from "classnames";
import axios from '../helper/axios';
import { useNavigate } from "react-router-dom";
import Layout from "../layout";

const Register = () => {
  const navigate = useNavigate();
  const initialValues: AuthValueType = {
    email: "",
    password: "",
    confirmPwd: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      axios.post('/api/register', values).then((res: any) => {
        toast.success(res.data?.success);
        navigate('/login');
      }).catch((err: any) => {
        console.log(err.response.data.error)
        toast.error(err?.response?.data?.error ? err.response.data.error : 'Network Error')
      })
    },
  });
  const inputclass = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelclass = "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
  return (
    <Layout>
      <div className="containemx-auto h-full m-auto">
        <div className="flex items-center justify-center">
        <div>
            <div className="flex flex-col items-center title sm:w-[500px] w-screen px-10 py-30">
              <h4 className="text-5xl font-bold py-10">Register</h4>
            </div>
            <form className="p-8" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col items-center gap-6 textbox">
                <div className="relative z-0 w-full mb-5 group">
                  <input {...formik.getFieldProps("email")}
                    type="text"
                    placeholder=" "
                    className={inputclass}
                  />
                  <label htmlFor="floating_email" className={labelclass}>Email</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    {...formik.getFieldProps("password")}
                    type="password"
                    placeholder=" "
                    className={inputclass}
                  />
                  <label htmlFor="floating_email" className={labelclass}>Password</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input {...formik.getFieldProps("confirmPwd")}
                    type="password"
                    placeholder=" "
                    className={inputclass}
                  />
                  <label htmlFor="floating_email" className={labelclass}>Confirm Password</label>
                </div>

                <button className={styles.btn} type="submit">
                  Register
                </button>
              </div>
              <div className="py-4 text-center">
                <span className="text-gray-500">
                  {"Already have an account? "}
                  <Link className="text-red-500" to="/login">
                    Login now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
