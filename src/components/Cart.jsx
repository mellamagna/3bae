import React, { Fragment } from 'react';
import CartListing from './CartListing';
import { Link } from 'react-router-dom';
import CheckoutButton from './CheckoutButton';

const Cart = props => {

	const PluralS = props => {
		if(props.num > 1) {
			return <Fragment>s</Fragment>;
		} else {
			return null;
		}
	}

	if(props.cart.length > 0) {
		return (
			<div className="container">
				<div className="row" id="checkouttopbar">
					<div className="col-8">
						<h1>Your Cart ({props.cart.length} item<PluralS num={props.cart.length}/>)</h1>
					</div>
					<div className="col">
						<CheckoutButton />
					</div>
				</div>
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