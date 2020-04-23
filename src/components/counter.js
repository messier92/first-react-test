import React, { Component } from 'react';

class Counter extends Component {

    styles = {
    fontSize: 30,
    fontWeight: "bold"
    };

	componentDidUpdate(prevProps, prevState) {
		console.log("Optimization - prevProps", prevProps);
		console.log("Optimization - prevStates", prevState);
		if (prevProps.counter.value !== this.props.counter.value) {

		}
	}

	componentWillUnmount() {
		console.log('Counter - Unmount');
	}


	render() {
	 let classes = this.determineStyle();
	 console.log(this.props);

	return (
	 	<div>
	 	   <span style={this.styles} className= {classes}>{this.formatCount()}</span>

	 	   <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>

	 	   <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>


	
	    </div>
	       );
	   	}

	determineStyle() {
	     let classes = "badge m-2 badge-";
	     classes += (this.props.counter.value === 0) ? "warning" : "primary";
	     return classes;
	}

	formatCount() {
	   const { value } = this.props.counter;
	   return value === 0 ? "Zero" : value;
	}

	renderTags() {
	  if (this.state.tags.length === 0) 
	      return <p>There are no tags!</p>;

	  return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;
	}
}

export default Counter;