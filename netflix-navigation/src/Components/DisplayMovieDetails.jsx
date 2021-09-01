import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Moviecard from './Moviecard';
import { Card, Button } from 'react-bootstrap';
class DisplayMovieDetails extends Component {
	breakPoints = [
		{ width: 500, itemsToShow: 2 },
		{ width: 700, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 5 },
		{ width: 1500, itemsToShow: 6 },
	];
	state = {
		// initial value?
		movies: {},
		isLoading: true,
		isError: false,
		selected: false,
	};
	fetch = async () => {
		console.log(this.props.match.params.movieId);
		// here things happen AFTER the initial render
		// this is the PERFECT PLACE for a get request
		// because the user is already watching your "static" part of the jsx
		// now we're going to perform here the fetch (a get request)
		// it's somewhat like window.onload()

		// componentDidMount will always happen JUST ONCE!!!
		try {
			let response = await fetch(
				'http://www.omdbapi.com/?i=tt3896198&apikey=caa9d684&i' +
					this.props.match.params.movieId,
			);
			// console.log(response)

			if (response.ok) {
				let moviesResult = await response.json();
				console.log(moviesResult);
				this.setState({
					isLoading: false,
					movies: moviesResult,
					// this is equal to reservations: reservations
				});
			} else {
				console.log('something went wrong with the server');
				this.setState({
					isLoading: false,
					isError: true,
				});
			}
		} catch (error) {
			console.log(error);
			this.setState({
				isLoading: false,
				isError: true,
			});
		}
	};
	componentDidMount = async () => {
		this.fetch();
	};

	render() {
		console.log(this.state.movies);
		return (
			<div style={{ width: '30rem', margin: '20px auto' }}>
				<img
					variant='top'
					src={this.state.movies.Poster}
					style={{ width: '300px' }}
				/>
				<div>
					<Card.Title>Title: {this.state.movies.Title}</Card.Title>
					<Card.Text> Year: {this.state.movies.Year}</Card.Text>
					<p>Actors: {this.state.movies.Actors}</p>
					<p>Lang: {this.state.movies.Langauges}</p>
					<p>Country: {this.state.movies.Country}</p>
					<p>Plot: {this.state.movies.Plot}</p>
					<Button variant='primary'>Go Home</Button>
				</div>
			</div>
		);
	}
}

export default DisplayMovieDetails;
