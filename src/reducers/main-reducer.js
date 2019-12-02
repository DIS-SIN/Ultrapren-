import { LOGIN } from '../actions/main-actions';
import { initialState } from '../';

export function mainReducer(state = initialState.mainReducer, action) {
	switch(action.type) {
		case LOGIN:
			return {
				...state,
				username: action.payload.username,
				fullName: action.payload.fullName,
				businessLine: action.payload.businessLine
			};
		default:
			return state;
	}
}
