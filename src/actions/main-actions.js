export const LOGIN = 'LOGIN';

export function userLogin(data) {
	return {
		type: LOGIN,
		payload: data
	};
}
