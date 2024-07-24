/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import toast from "react-hot-toast";

import { useFormik } from "formik";
import { registerValidate } from "../helper/validate";
import { AuthValueType } from "../helper/type";
import cn from "classnames";
import axios from "axios";
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
      axios.post('/api/register', values).then((res) => {
        toast.success(res.data?.success);
        navigate('/login');
      }).catch((err) => {
        console.log(err.response.data.error)
        toast.error(err?.response?.data?.error ? err.response.data.error : 'Network Error')
      })
    },
  });
  return (
    <Layout>
      <div className="containemx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className={(cn(styles.glass), "w-1/2")}>
            <div className="flex flex-col items-center title">
              <h4 className="text-5xl font-bold">Register</h4>
              <span className="w-2/3 py-4 text-xl text-center text-gray-500 ">
                {"Join with us now and enjoy our services"}
              </span>
            </div>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col items-center gap-6 textbox">
                <input
                  {...formik.getFieldProps("email")}
                  className={styles.textbox}
                  type="text"
                  placeholder="email"
                />
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="password"
                  placeholder="password"
                />
                <input
                  {...formik.getFieldProps("confirmPwd")}
                  className={styles.textbox}
                  type="password"
                  placeholder="Confirm Passowrd"
                />
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
