import axios from 'axios'



export const api = axios.create(
    {
        baseURL: "https://nevesade-dscatalog.herokuapp.com",
    }
);