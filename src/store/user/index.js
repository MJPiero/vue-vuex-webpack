import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const state = {
	// 登录状态
	isLogin: true,
	// 用户信息
	userInfo: {
		nickName: '团子',
		headIcon: './images/headicon.png'
	}
}

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}