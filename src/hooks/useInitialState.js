import {useState} from 'react';

const initialState= {
    cart:[],
    email:"",
    toggle:false,
    token:{},
    loading:true,
    error:false,
    products:[],
}
const useInitialState = ()=>{
   const [state, setState] = useState(initialState);
   const addTocart = (payload)=>{
    setState({
        ...state,
        ...state.cart.push(payload),
    });
   };
   const removeFromCart = (payload)=>{
       setState({
           ...state,
           cart:[...state.cart.filter(item => item.id !== payload.id)],
       })
   }
   const logEmail = (Email)=>{
       setState({
           ...state,
            email:Email
       })
   }
   const toggleOrder = (bolean)=>{
        setState({
            ...state,
            toggle:bolean
        })
   }
   const loadToken = (tweb)=>{
       setState({
        ...state,
        token:tweb,      
       })
   }
   const loadError = (err)=>{
       setState({
           ...state,
           error:err
       })
   }
   const loadProducts = (payload)=>{
       setState({
           ...state,
           products:payload
       })
   }
   const loadLoading = (st)=>{
       setState({
           ...state,
           loading:st
       })
   }
   
  return {
      state,
      addTocart,
      removeFromCart,
      logEmail,
      toggleOrder,
      loadToken,
      loadError,
      loadProducts,
      loadLoading,
  };
};

export default useInitialState;