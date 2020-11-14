import React from 'react';

const RandomConf = () => {

	const randomDigit = () => {
		return Math.floor(Math.random() * 10).toString();
	}

	const confConcat = () => {
		let result = "";
		for(let i = 0; i < 10; i++){
			result += randomDigit();
		}
		return result;
	}

	return (
		<span>{confConcat()}</span>
	);
};

export default RandomConf;