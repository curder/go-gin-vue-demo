<template>
  <b-card title="注册" class="mt-5">
    <b-row>
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-form @submit.prevent="register">
          <b-form-group label="用户名" label-for="user-name">
            <b-form-input
              id="user-name"
              v-model="$v.user.name.$model"
              type="text"
              required placeholder="用户名"></b-form-input>
          </b-form-group>

          <b-form-group
            label="手机号"
            label-for="user-phone"
          >
            <b-form-input
              id="user-phone"
              v-model="$v.user.phone.$model"
              type="number"
              required
              placeholder="手机号"
              :state="validateState('phone')"
            ></b-form-input>
            <b-form-invalid-feedback :state="validateState('phone')">
              手机号输入有误
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="密码"
            label-for="user-password"
          >
            <b-form-input
              id="user-password"
              v-model="$v.user.password.$model"
              type="password"
              required
              placeholder="密码"
              :state="validateState('password')"
            ></b-form-input>
            <b-form-invalid-feedback :state="validateState('password')">
              密码输入有误
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" block variant="outline-primary">注册</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

import customValidator from '../helpers/validators';
import storageService from '../services/storageService';
import userService from '../services/userService';

export default {
  data() {
    return {
      user: {
        name: 'curder',
        phone: '13800138000',
        password: 'aaaaaa',
      },
    };
  },

  validations: {
    user: {
      name: {},
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        phone: customValidator.phoneValidator,
      },
      password: {
        required,
        minLength: minLength(4),
      },
    },
  },

  methods: {
    register() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) { // 验证数据
        return;
      }

      // 发起请求
      userService.register({ ...this.user })
        .then(({ data }) => {
          storageService.set(storageService.USER_TOKEN, data.data.token);

          userService.info()
            // eslint-disable-next-line no-shadow
            .then(({ data }) => {
              // 保存用户信息
              storageService.set(storageService.USER_INFO, JSON.stringify(data.data.user));
              this.$router.replace({ name: 'Home' }); // 跳转到首页
            });
        })
        .catch((err) => {
          this.$bvToast.toast(err.response.data.message, {
            title: '数据验证失败',
            variant: 'danger',
            solid: true,
            autoHideDelay: 4000,
          });
        });
    },

    validateState(field) {
      const { $dirty, $error } = this.$v.user[field];
      return $dirty ? !$error : null;
    },
  },

};
</script>
