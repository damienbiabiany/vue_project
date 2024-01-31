import axios from 'axios'

const instance = axios.create({
    baseURL: 'json',
    timeout: 1000
});

export default instance
