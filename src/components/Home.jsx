import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ThreeBae from './ThreeBae';

const Home = () => {

	const url = "https://aws.random.cat/meow";

	const [image, setImage] = useState([]);

	const getApiAxios = url => {
		axios.get(url)
			.then(response => {
				console.log(response);
				setImage({
					backgroundImage: "url(" + response.data.file + ")",
					backgroundSize: "cover"
				});
			})
	}

	useEffect(() => {
		getApiAxios(url);
	},[]);

	return (
		<div>

			<div className="jumbotron jumbotron-fluid" id="banner" style={ image }>
				<div className="container translayer">
					<h1 className="display-4">Welcome to <ThreeBae />!</h1>
					<p className="lead">We sell an assortment of items listed by our user(s)!<br/>We even have permits to sell food and live animals!</p>
					<p className="fineprint">*3bae is not responsible for any health issues caused by listed products</p>
				</div>
			</div>

			<div className="container">
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat inventore nesciunt sunt id voluptas, aperiam voluptatem consequatur laborum. Fugit adipisci reiciendis error totam sed sapiente qui, dolore amet nulla? Ratione!</p>
			</div>

		</div>
	);
};

export default Home;