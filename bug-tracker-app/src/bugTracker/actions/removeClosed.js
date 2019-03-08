import bugServer from '../services/bugServer';
function removeClosed(bugs){
	return function(dispatch){
		bugServer
		.delete(toggledBugData)
		.then(toggledBug => {
			let closedBugs = bugs.filter(bug => bug.isClosed);		
			let action = { type : 'REMOVE', payload : closedBugs};
			dispatch(action);		
		});
	}
}
export default removeClosed;