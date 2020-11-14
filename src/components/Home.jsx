import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ThreeBae from './ThreeBae';
import ThreeBaeLogo from './ThreeBaeLogo';

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
					<h1 className="display-4">Welcome to <ThreeBaeLogo style={{verticalAlign: "baseline"}} />!</h1>
					<p className="lead">We sell an assortment of items listed by our user(s)!<br/>We even have permits to sell food and livestock!</p>
					<p className="fineprint">*<ThreeBae /> is not responsible for any health issues caused by listed products</p>
				</div>
			</div>

			<div className="container">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros varius dui blandit posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus orci, condimentum in blandit sed, mollis id mi. Pellentesque at blandit est. Vestibulum ullamcorper orci augue, eget facilisis turpis accumsan vel. Pellentesque sit amet bibendum ante. Praesent id maximus massa. In velit risus, tempor vitae lacinia vel, scelerisque vel ex. Nulla tristique in urna at scelerisque. Maecenas purus sem, pharetra ut enim non, pellentesque condimentum nibh. Sed egestas tincidunt ante quis venenatis.</p>

				<p>Duis ac tellus nec elit bibendum fermentum eu a leo. Morbi gravida aliquet neque. Nam a dui eget arcu tristique sollicitudin bibendum non nisl. Donec leo nibh, semper et cursus at, luctus vitae massa. Nulla lorem justo, sagittis in mauris vel, porta aliquam tellus. Mauris pellentesque augue ut cursus pellentesque. In faucibus metus quis arcu lacinia sagittis. Vestibulum elit ipsum, sodales eget ornare vitae, cursus eget elit. Quisque pulvinar sed magna non tempus.</p>

				<p>Donec at maximus enim. Phasellus molestie dui mi, consequat porttitor libero sodales sed. Sed placerat, enim in malesuada pellentesque, felis neque porta ex, non pretium ligula justo condimentum eros. Nam ultrices velit non lacus tincidunt, quis congue ligula luctus. Etiam erat magna, molestie ut vulputate sit amet, fringilla eu mauris. Duis euismod lorem nec arcu auctor dignissim. Donec bibendum erat sem, elementum dapibus augue maximus bibendum. Morbi vitae consequat nisi, vel pellentesque ante. Cras ac dolor congue, pulvinar justo in, pulvinar nunc.</p>

				<p>Nulla id risus ex. Nullam dapibus lorem sed sapien suscipit tristique. Donec vel euismod eros. In posuere augue ex, non vulputate nulla varius laoreet. Sed eget gravida sapien. Nam ante mauris, molestie at sagittis sit amet, congue ullamcorper mauris. Phasellus at mi lacus.</p>

				<p>Nunc pellentesque dignissim sem consectetur rutrum. Nam sed maximus mi. Nam pulvinar vehicula purus, et tempor nibh cursus at. Sed iaculis, arcu nec pulvinar fermentum, ante nulla tincidunt sapien, ac malesuada lacus lacus eleifend erat. Phasellus accumsan ex blandit ultrices condimentum. In porta lorem ut neque varius feugiat. In non nunc felis. Morbi facilisis felis vel justo dapibus, vitae hendrerit ipsum tempus. Maecenas porttitor tortor mauris, non vulputate libero egestas eu. Morbi nec orci odio. Sed sed pharetra justo. Pellentesque vitae tincidunt purus. Integer et tempor nunc. Vestibulum sed dolor dui. Suspendisse vel nisi eu augue tempus maximus nec vel ipsum.</p>
			</div>

		</div>
	);
};

export default Home;