import axios from 'axios'

const baseAPIURL: string = "https://api.themoviedb.org/3";
const instance = axios.create({
    baseURL: baseAPIURL,
});

export default instance;
