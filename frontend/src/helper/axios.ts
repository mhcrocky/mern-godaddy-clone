import axios, { AxiosInstance } from 'axios';
const instance: AxiosInstance = axios.create();
const token: string | undefined = Cookies.get('_token');
import Cookies from "js-cookie";

instance.defaults.headers.common['_token'] = token;

export default instance;