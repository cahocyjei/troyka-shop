import axios from 'axios';

function InitInterceptorsToken(token){
    axios.interceptors.request.use(function(config){    
            config.headers.Authorization = `Bearer ${token}`
    return config;    
    }) 
}

export { InitInterceptorsToken };