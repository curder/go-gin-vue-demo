import request from '../utils/request';

// 用户注册
const register = ({ name, phone, password }) => request.post('auth/register', {
  name,
  phone,
  password,
});

// 用户登录
const login = ({ phone, password }) => request.post('auth/login', {
  phone,
  password,
});

// 获取用户信息
const info = () => request.get('auth/info');


export default {
  login,
  register,
  info,
};
