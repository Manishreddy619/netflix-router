import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
const NavBar = () => {
	return (
		<>
			<Router>
				<Navbar bg='dark' variant='dark'>
					<Container>
						<Link to='/'>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
								alt=''
								style={{ width: 100 }}
							/>
						</Link>

						<Nav className='me-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#features'>Tv shows</Nav.Link>
							<Nav.Link href='#pricing'>popular</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</Router>
		</>
	);
};

export default NavBar;
