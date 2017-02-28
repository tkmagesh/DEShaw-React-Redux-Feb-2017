import React, { Component } from 'react';

export class BugStats extends Component{
	render(){
		var closedCount = this.props.bugs.filter(bug => bug.isClosed).length;
		return (
			<section className="stats">
				<span className="closed">{closedCount}</span>
				<span> / </span>
				<span>{this.props.bugs.length}</span>
			</section>
		)
	}
}