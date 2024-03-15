// Base de URL : https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=18ac60a1e90496a0a46c07cb7e6755de

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;