import {useState} from 'react';


const initialState= {
    cart:[],
    email:""
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
  return {
      state,
      addTocart,
      removeFromCart,
      logEmail,
  };
};

export default useInitialState;