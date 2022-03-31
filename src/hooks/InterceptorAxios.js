import axios from 'axios';


function InitInterceptorsToken(){
    axios.interceptors.request.use(function(config){
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
          config.headers.Authorization= `Bearer ${token}`  
        }    
    return config;    
    }) 
}

export { InitInterceptorsToken };