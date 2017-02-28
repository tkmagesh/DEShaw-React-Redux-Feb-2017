import React, { Component } from 'react';

export class NewBug extends Component{
	onAddClick(){
		var bugName = this.refs.txtBugName.value;
		this.props.onAdd(bugName);
	}
	render(){
		return (
			<section className="edit">
					<label >New Bug :</label>
					<input type="text" ref="txtBugName"/>
					<input type="button" value="Add" onClick={this.onAddClick.bind(this)}/>
				</section>
		)
	}
}