import * as api from 'api/user'
import * as types from './mutation-types'

/*
	用户登录
 */
export const setLoginIn = ({commit}, params) => {
	// api.postLogin(params).then(resp => {
	// 	commit(types.ISLOGIN, resp)
	// })
	let resp = api.postLogin(params);
	commit(types.SETLOGININ, resp);
}

/*
	用户注销
 */
export const setLoginOut = ({commit}) => {
	commit(types.SETLOGINOUT);
}