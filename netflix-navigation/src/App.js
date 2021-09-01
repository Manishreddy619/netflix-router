import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Movierow1 from './Components/Movierow1';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplayMovieDetails from './Components/DisplayMovieDetails';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Movierow1 />
			<Router>
				<Route path='/details/:movieId' exact>
					<DisplayMovieDetails />
				</Route>
			</Router>
		</div>
	);
}

export default App;
