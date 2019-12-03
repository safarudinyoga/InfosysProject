import axios from "axios";
import { API_URL } from "../config";

// API_URL += '/3/movie/550?api_key=9ba639c7c8d42e4b827058a99fb728e5'

export const request = axios.create({ baseURL: API_URL, timeout: 3000 });