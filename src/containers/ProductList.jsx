import React,{ useContext,useState,useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
//
const ProductList = () => {
	const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')));
	const {state} = useContext(AppContext);
	//

	return (
		<React.Fragment>
		<Header />
		{/*<section className="main-container">
				<div className="ProductList">
				{products.map(product =>(
				<ProductItem product={product} key = {product.id} />	
				))}
				</div>
		</section>*/}
		</React.Fragment>
	);
}

export default ProductList;
