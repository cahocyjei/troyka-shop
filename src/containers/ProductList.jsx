import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import UseGetProducts from '../hooks/useGetProducts';
import { AuthLogin } from '../hooks/authLogin';


	//const AUTH = 'https://troykamarket.herokuapp.com/troyka/api/auth/authenticate';
	const API = 'https://api.escuelajs.co/api/v1/products'
const ProductList = () => {
	const products = UseGetProducts(API);
	//const token = AuthLogin(AUTH,JSON.stringify({username:"omar",password:"troyka"}));
	//console.log(token);
	return (
		<React.Fragment>
			<Header />
			<section className="main-container">
				<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key = {product.id} />	
				))};
				</div>
			</section>
		</React.Fragment>
	);
}

export default ProductList;