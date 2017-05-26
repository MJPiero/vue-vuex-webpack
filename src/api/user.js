
// 模拟数据
import * as mock from 'mock/user'

export const postLogin = data => {
    let res = mock.UserLogin;
    res.nickName = data.loginId;
    return res;
}