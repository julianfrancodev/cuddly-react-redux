import axios from 'axios';

const clientAxios = axios.create({
    baseURL:"http://localhost:7001"
});

export default clientAxios;