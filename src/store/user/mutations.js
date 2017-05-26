import * as types from './mutation-types'

export default {
	[types.SETLOGININ](state, messages) {
		console.log(messages);
		Object.assign(state.userInfo,messages);
		state.isLogin = true;
	},
	[types.SETLOGINOUT](state) {
		state.isLogin = false;
	},
}