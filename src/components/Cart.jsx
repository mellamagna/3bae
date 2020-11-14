import React from 'react';
import CartListing from './CartListing';

const Cart = props => {
	return (
		<div className="container">
			<h1>Your Cart</h1>
			<table cellPadding="10">
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
						/>
					)
				})}
			</table>
		</div>
	);
};

export default Cart;