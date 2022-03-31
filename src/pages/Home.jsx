import React,{useContext} from 'react';
import ProductList from '../containers/ProductList';
import AppContext from '../context/AppContext';
import SpinnerLoad from '../components/Spinner';

const Home = () => {
const { state } = useContext(AppContext);
    return (
        <React.Fragment>
          {state.loading?<SpinnerLoad />:<ProductList />}  
        </React.Fragment> 
    );
}

export default Home;