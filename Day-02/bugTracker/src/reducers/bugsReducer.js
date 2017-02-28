export function bugsReducer(state = [], action){
  switch(action.type){
    
    case 'ADD_NEW':
      var newBug = {
        name : action.payload.bugName,
        isClosed : false
      };
      return state.concat([newBug]);
      

    case 'TOGGLE':
      var bugToToggle = action.payload.bug;
      return state.map(bug => {
        if (bug === bugToToggle){
          return {
            name : bug.name,
            isClosed : !bug.isClosed
          } 
        } else {
          return bug;
        }
      });
    
    case 'REMOVE_CLOSED':
      return state.filter(bug => !bug.isClosed);
    
    default:
      return state;
  }
}