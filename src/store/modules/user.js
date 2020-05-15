import storageService from '../../services/storageService';
import userService from '../../services/userService';

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: JSON.parse(storageService.get(storageService.USER_INFO)),
  },

  mutations: {
    setToken(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      state.token = token;
    },
    setUserInfo(state, user) {
      // 更新本地缓存
      storageService.set(storageService.USER_INFO, user);
      state.userInfo = JSON.parse(user);
    },
  },

  actions: {
    // 注册
    register(context, { name, phone, password }) {
      return new Promise((resolve, reject) => {
        userService.register({
          name,
          phone,
          password,
        })
          .then(({ data }) => {
            // 保存用户token
            context.commit('setToken', data.data.token);
            return userService.info();
          })
          .then(({ data }) => {
            // 保存用户信息
            context.commit('setUserInfo', JSON.stringify(data.data.user));
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 登录
    login(context, { phone, password }) {
      return new Promise((resolve, reject) => {
        userService.login({
          phone,
          password,
        })
          .then(({ data }) => {
            context.commit('setToken', data.data.token);
            return userService.info();
          })
          .then(({ data }) => {
            // 保存用户信息
            context.commit('setUserInfo', JSON.stringify(data.data.user));
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default userModule;
