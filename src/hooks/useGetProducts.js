import { useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts =  (API,post)=>{
    const [products,setProducts] = useState([]);
    useEffect(async ()=>{
        const response = await axios.post(API,post);
           setProducts(response.data); 
    },[])
    return products;
}

export default useGetProducts;