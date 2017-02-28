import React, { Component } from 'react';

export class BugSort extends Component{
	render(){
		return (
			<section className="sort">
					<label >Order By :</label>
					<input type="text" />
					<label >Descending ? :</label>
					<input type="checkbox" />
				</section>
		)
	}
}