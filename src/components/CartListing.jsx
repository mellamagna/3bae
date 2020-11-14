import React from 'react';
import { Button } from 'react-bootstrap';

const CartListing = props => {

	const handleClick = () => {
		props.removeFromCart(props.id);
	}

	return (
		<tr>
			<td>{props.id}</td>
			<td><img src={props.image} width="256" alt={props.name} /></td>
			<td>
				<h4>{props.name}</h4>
				<p>{props.desc}</p>
				<h5>${props.price.toFixed(2)}</h5>
				<p className="freeship">+FREE Shipping</p>
			</td>
			<td><Button variant="danger" onClick={handleClick}>Delete</Button></td>
		</tr>
	);
};

export default CartListing;