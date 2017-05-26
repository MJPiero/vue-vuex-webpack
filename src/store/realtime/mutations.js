import * as types from './mutation-types'

export default {
	[types.LOGININ](state, messages) {
		console.log(messages);
		state.userInfo.loginid = messages.nickName;
		state.isLogin = true;
	}
}