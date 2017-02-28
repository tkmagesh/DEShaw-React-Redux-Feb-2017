import React, { Component } from 'react';
import { BugStats } from './BugStats';
import { BugSort } from './BugSort';
import { NewBug } from './NewBug';
import { BugItem } from './BugItem';
import { connect } from 'react-redux';

function mapStateToProps(state){
	return { bugs : state.bugsReducer };
}

function mapDispatchToProps(dispatch){
	return {
		actions : {
			createBug : function(newBugName){
				var action = {
					type : 'ADD_NEW',
					payload : {
						bugName : newBugName
					}
				};
				dispatch(action);
			},
			removeClosed : function(){
				var action = {
					type : 'REMOVE_CLOSED'
				};
				dispatch(action);
			},
			toggle : function(bug){
				var toggleAction = {
					type : 'TOGGLE',
					payload : {
						bug : bug
					}
				};
				dispatch(toggleAction);
			},
			load : function(){
				dispatch({
					type : 'ASYNC_START'
				});
				fetch('http://localhost:8000/bugs')
					.then(response => response.json())
					.then(bugs => {
						dispatch({
							type : 'INIT_BUGS',
							payload : {
								bugs : bugs
							}
						});
						dispatch({
							type : 'ASYNC_STOP'
						});
					});
			}
		}
	}
}

class BugTracker extends Component{
	componentDidMount(){
		this.props.actions.load();
	}
	addClick(newBugName){
		this.props.actions.createBug(newBugName);
	}
	removeClosedClick(){
		this.props.actions.removeClosed();
	}
	render(){
		var list = this.props.bugs;
	
		var bugItems = list.map((bug,index) => {
			return (<BugItem bug={bug} toggle={this.props.actions.toggle} key={index}></BugItem>)
		});
		return (
			<div>
				<BugStats bugs={list}></BugStats>
				<BugSort></BugSort>
				<NewBug onAdd={this.addClick.bind(this)}></NewBug>
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" onClick={this.removeClosedClick.bind(this)} />
				</section>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);




