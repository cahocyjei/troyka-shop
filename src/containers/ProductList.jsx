import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';
import AuthLogin from '../hooks/authLogin';



const API = 'https://api.escuelajs.co/api/v1/products';
	const AUTH = 'https://troykamarket.herokuapp.com/troyka/api/auth/authenticate';
const ProductList = () => {
	const products = useGetProducts(API);
	const login = AuthLogin(AUTH,{username:"omar",password:"troyka"});
	console.log(login);
	
	return (
		<section className="main-container">
			<Header />
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key = {product.id} />	
				))}
			</div>
		</section>
	);
}

export default ProductList;