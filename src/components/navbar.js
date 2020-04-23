import React, { Component } from 'react';

// Stateless Functional Component - cannot use lifecycle hooks for SFC
const Navbar = ({ totalCounters}) => {
	return (
		// Copy the markup from Bootstrap here
		<nav className="navbar navbar-light bg-light">
		<a className="navbar-brand" href="#">Navbar
		<span className="badge badge-pill badge-secondary">
		{totalCounters}
		</span>
		</a>
		</nav> 
	);
};


export default Navbar;