import * as api from 'api/user'
import * as types from './mutation-types'


export const loginIn = ({commit}, params) => {
	// api.postLogin(params).then(resp => {
	// 	commit(types.ISLOGIN, resp)
	// })
	let resp = api.postLogin(params);
	commit(types.LOGININ, resp);
}