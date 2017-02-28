export function asyncOpsReducer(state = 'Stop', action){
	switch(action.type){
		case 'ASYNC_START':
			return 'Start';
		case 'ASYNC_STOP' :
			return 'Stop';
		default :
			return state;
	}
}