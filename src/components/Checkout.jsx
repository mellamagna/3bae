import React from 'react';
import CheckoutListing from './CheckoutListing';
import PaymentButton from './PaymentButton';

const Checkout = props => {

	return (
		<div className="container">
			<h1>Checkout</h1>
			<div className="row">

				<div className="col-8">
					<table className="productlist" cellPadding="10">
						<tr>
							<th>ID</th>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
						</tr>
						{props.cart.map(item => {
							return(
								<CheckoutListing 
									id={item.id}
									name={item.name}
									image={item.image}
									price={item.price}
								/>
							)
						})}
					</table>
				</div>

				<div className="col-4">
					<div id="totalbox">
						<h3>Total</h3>
						<hr/>
						<h5>${props.calculateTotal()}</h5>
						<PaymentButton />
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Checkout;