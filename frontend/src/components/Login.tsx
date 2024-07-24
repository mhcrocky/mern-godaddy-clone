import styles from "../styles/Username.module.css";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { loginValidate } from "../helper/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Layout from "../layout";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: loginValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      axios.post('http://localhost:5000/api/login', values).then((res) => {
        toast.success(res.data?.success);
        Cookies.set('_token', res.data.token)
        navigate('/');
      }).catch((err) => {
        console.log(err.response.data.error)
        toast.error(err?.response?.data?.error ? err.response.data.error : 'Network Error')
      })
    },
  });
  return (
    <Layout>
      <div className="containemx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold"></h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500 ">
                Login
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
                <button className={styles.btn} type="submit">
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
