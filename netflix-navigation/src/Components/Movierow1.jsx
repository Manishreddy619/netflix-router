import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Moviecard from './Moviecard';
import { Alert, ListGroup, Spinner } from 'react-bootstrap';
class Movierow1 extends Component {
	breakPoints = [
		{ width: 500, itemsToShow: 2 },
		{ width: 700, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 5 },
		{ width: 1500, itemsToShow: 6 },
	];
	state = {
		// initial value?
		movies: [],
		isLoading: true,
		isError: false,
		selected: false,
	};
	fetch = async () => {
		console.log("I'm componentDidMount");
		// here things happen AFTER the initial render
		// this is the PERFECT PLACE for a get request
		// because the user is already watching your "static" part of the jsx
		// now we're going to perform here the fetch (a get request)
		// it's somewhat like window.onload()

		// componentDidMount will always happen JUST ONCE!!!
		try {
			let response = await fetch(
				'http://www.omdbapi.com/?i=tt3896198&apikey=caa9d684&s=harry',
			);
			// console.log(response)

			if (response.ok) {
				let moviesResult = await response.json();
				console.log(moviesResult.Search);
				this.setState({
					isLoading: false,
					movies: moviesResult.Search,
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
		return (
			<div>
				{this.state.isLoading && ( // this is called the SHORT-CIRCUIT operator
					<Spinner animation='border' variant='success' className='mx-auto' />
				)}
				{this.state.isError && (
					<Alert variant='danger'>An error occurred!</Alert>
				)}
				{this.state.movies.length === 0 && !this.state.isLoading}?({' '}
				<h3 className='ml-4' style={{ color: 'white', textAlign: 'left' }}>
					Action
				</h3>
				<Carousel breakPoints={this.breakPoints}>
					{this.state.movies.map((movie) => {
						return <Moviecard movie={movie} />;
					})}
				</Carousel>
			</div>
		);
	}
}

export default Movierow1;
