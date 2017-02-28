import React, { Component } from 'react';
export  class BugItem extends Component{
	onBugNameClick(){
		this.props.toggle(this.props.bug);
	}
	render() {
		var bug = this.props.bug;

		var bugNameItem = bug.isClosed ? <span onClick={this.onBugNameClick.bind(this)} className="bugname closed">{bug.name}</span> : <span onClick={this.onBugNameClick.bind(this)} className="bugname">{bug.name}</span>;

		return (
				<li>
					{bugNameItem}	
					<div className="datetime">[CreatedAt]</div>
				</li>
			)
	}
}
