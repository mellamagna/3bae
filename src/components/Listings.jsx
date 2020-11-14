import React from 'react';
import Listing from './Listing';
import NextPageIndex from './NextPageIndex';

const Listings = props => {
	return (
		<div className="container">
			<h1>Listings</h1>
			<table cellPadding="10">
				<tr>
					<th>ID</th>
					<th>Image</th>
					<th>Item&nbsp;Name / Description</th>
					<th>Actions</th>
				</tr>
				{props.products.map(item => {
					return(
						<Listing 
							id={item.id}
							name={item.name}
							image={item.image}
							price={item.price}
							desc={item.desc}
						/>
					)
				})}
			</table>
			<NextPageIndex />
		</div>
	);
};

export default Listings;