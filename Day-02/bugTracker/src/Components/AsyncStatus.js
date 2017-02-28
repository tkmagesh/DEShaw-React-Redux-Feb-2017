import React, { Component } from 'react';
import { connect } from 'react-redux';

class AsyncStatus extends Component{
	render(){
		return this.props.state === 'Start' ? <div>Loading...</div> : <div></div>
	}
}
export default connect(function(state){
	//console.log(state);
	return { state : state.asyncOpsReducer }

})(AsyncStatus);