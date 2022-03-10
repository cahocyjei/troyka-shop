import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import UseGetProducts from '../hooks/useGetProducts';
import UseGetUsers from '../hooks/useGetUsers';


	const AUTH = 'https://troykamarket.herokuapp.com/troyka/api/auth/authenticate';
	const API = 'https://api.escuelajs.co/api/v1/products'
const ProductList = () => {
	const products = UseGetProducts(API);
	const token = UseGetUsers(AUTH,JSON.stringify({username:"omar",password:"troyka"}));
	console.log(token);
	return (
		<section className="main-container">
			<Header />
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key = {product.id} />	
				))};
			</div>
				</section>
	);
}

export default ProductList;