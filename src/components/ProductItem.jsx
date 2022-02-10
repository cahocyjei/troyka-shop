import React,{ useContext} from 'react';
import '../styles/ProductItem.scss';
import addToCartImage from '../asset/icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
	const {addTocart} = useContext(AppContext);

	const handleClick = ()=> {
		addTocart(product);
		
	};

	return (
		<div className="ProductItem">
			<img src= {product.images[0]} alt= {product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src= {addToCartImage} alt="ToCart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;