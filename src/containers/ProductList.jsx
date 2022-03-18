import React,{ useContext,useState,useEffect } from 'react';
//import ProductItem from '../components/ProductItem';
//import '../styles/ProductList.scss';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import { InitInterceptorsToken } from '../hooks/InterceptorAxios'
import axios from 'axios';
	//
const API = 'https://troykamarket.herokuapp.com/troyka/api/products/all';
const ProductList = () => {
	const [products,setProducts] = useState([]);
	const {state} = useContext(AppContext);
	//
	InitInterceptorsToken(state.jwToken.jwt);
	useEffect(()=>{
		async function loadProducts(){
			try {
				setProducts(await axios.get(API));
			} catch (error) {
				console.error(error);
			}
		}
	loadProducts()	
	
	},[])
	
	console.log(state.jwToken.jwt);
	return (
		<React.Fragment>
		<Header />
		{/*<section className="main-container">
			<div className="ProductList">
				{products.length != 0? products.map(product =>(
					<ProductItem product={product} key = {product.id} />	
				)):null}
			</div>
				</section>*/}
		</React.Fragment>
	)
}

export default ProductList;
