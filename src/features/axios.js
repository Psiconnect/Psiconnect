import axios from 'axios';


const instance = axios.create({
    baseURL: "http://localhost:5000/" //modifique la ruta que decia 5000 en vez de 3001
});

export default instance;
