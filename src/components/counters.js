import React, { Component } from 'react';
import Counter from "./counter.js";

class Counters extends Component {

    render() {
    	// object destructuring
    	const  {onReset, counters, onDelete, onIncrement} = this.props;

    	return (
    		<div>
    		<button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>

    		{counters.map(counter => 
    			(<Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter}>
    				<h4>Title</h4>
    				</Counter>
    			))}
    		</div>
    	);
    }
}

	

export default Counters;