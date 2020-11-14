import React from 'react';
import { Button } from 'react-bootstrap';

const Listing = props => {

	const handleClick = () => {
		console.log(props.id);
		props.addToCart(props.id);
	}

	const AddToCart = props => {
		const check = props.cart.filter(entry => entry.id === props.id);
		if(check.length === 0) {
			return <Button variant="primary" onClick={handleClick}>Add&nbsp;to&nbsp;Cart</Button>;
		} else {
			return <Button variant="secondary" disabled>In&nbsp;Cart</Button>;
		}
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
			<td><AddToCart cart={props.cart} id={props.id}/></td>
		</tr>
	);
};

export default Listing;