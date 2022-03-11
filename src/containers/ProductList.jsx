import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';


	const API = 'https://api.escuelajs.co/api/v1/products';
const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<React.Fragment>
		<Header />
			<section className="main-container">
				<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key = {product.id} />	
				))}
				</div>
			</section>
		</React.Fragment>
	);
}

export default ProductList;