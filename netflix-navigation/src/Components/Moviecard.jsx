import React from 'react';
import './Moviecard.css';
import { useState } from 'react';
import DisplayMovieDetails from './DisplayMovieDetails';
import Movierow1 from './Movierow1';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Moviecard = ({ movie }) => {
	const [selected, setselected] = useState(false);
	console.log(movie.imdbID);
	return (
		<>
			<div className='card'>
				<img
					src={movie.Poster}
					alt='moviecard'
					onClick={() => setselected(!selected)}
				/>
			</div>
		</>
	);
};

export default Moviecard;
