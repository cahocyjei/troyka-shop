import {useState} from 'react';

const initialState= {
    cart:[],
    email:"",
    toggle:false,
    jwToken: {}
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
           jwToken:tweb
       })

   }
  return {
      state,
      addTocart,
      removeFromCart,
      logEmail,
      toggleOrder,
      loadToken
  };
};

export default useInitialState;