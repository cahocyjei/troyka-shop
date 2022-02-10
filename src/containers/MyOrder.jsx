import React,{ useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext';
import Flechita from '../asset/icons/flechita.svg'

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumaTotal = state.cart.reduce((accumulator,currentValue) => {
		return accumulator + currentValue.price
	},0);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={Flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
					{state.cart.map(product => (
						<OrderItem product={product} key= {`OrdeItem-${product.id}`} />
					))}
					
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumaTotal}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;