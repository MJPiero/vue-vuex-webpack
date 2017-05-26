import Mock from 'mockjs';

export const UserLogin = Mock.mock({
    'id': '@id',
    'token': '@guid',
    'nickName': '@cname(2)',
    'email': '@EMAIL',
    'headIcon': '@image(100x100)'
});