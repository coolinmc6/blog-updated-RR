import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
		case DELETE_POST:
			// use Lodash's omit.  Because our payload is an id, we are telling lodash to remove it
			return _.omit(state, action.payload)
		case FETCH_POST:
			// why ".data"?  Axios
			// ES5 code
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post;
			// return newState;

			// ES6 code
			return { ...state, [action.payload.data.id]: action.payload.data }

		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id')
		default:
			return state;
	}
}