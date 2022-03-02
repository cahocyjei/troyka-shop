import {useState} from 'react';


const initialState= {
    cart:[],
    email:"",
    toggle:false,
    token:{
        username:"omar",
        password:"troyka"
    }
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
  return {
      state,
      addTocart,
      removeFromCart,
      logEmail,
      toggleOrder
  };
};

export default useInitialState;