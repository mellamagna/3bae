import React from 'react';
import CartListing from './CartListing';
import { Link } from 'react-router-dom';

const Cart = props => {
	if(props.cart.length > 0) {
		return (
			<div className="container">
				<h1>Your Cart</h1>
				<table className="productlist" cellPadding="10">
					<tr>
						<th>ID</th>
						<th>Image</th>
						<th>Item&nbsp;Name / Description</th>
						<th>Actions</th>
					</tr>
					{props.cart.map(item => {
						return(
							<CartListing 
								id={item.id}
								name={item.name}
								image={item.image}
								price={item.price}
								desc={item.desc}
								removeFromCart={props.removeFromCart}
							/>
						)
					})}
				</table>
			</div>
		);
	} else {
		return(
			<div className="container" id="emptycartmsg">
				<p>Your cart is currently empty. Please add <Link to="/listings">one or more items</Link> to proceed.</p>
			</div>
		);
	}
};

export default Cart;