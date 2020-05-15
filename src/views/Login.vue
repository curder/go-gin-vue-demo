<template>
  <b-card title="登录" class="mt-5">
    <b-row>
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-form @submit.prevent="login">
          <b-form-group label="手机号" label-for="user-phone">
            <b-form-input id="user-phone" v-model="$v.user.phone.$model" type="number" required
                          placeholder="手机号" :state="validateState('phone')"></b-form-input>
            <b-form-invalid-feedback :state="validateState('phone')">手机号输入有误
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label="密码" label-for="user-password">
            <b-form-input id="user-password" v-model="$v.user.password.$model" type="password"
                          required placeholder="密码"
                          :state="validateState('password')"></b-form-input>
            <b-form-invalid-feedback :state="validateState('password')">密码输入有误
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" block variant="outline-primary">登录</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

import { mapActions } from 'vuex';
import customValidator from '../helpers/validators';

export default {
  data() {
    return {
      user: {
        phone: '13800138000',
        password: 'aaaaaa',
      },
    };
  },

  validations: {
    user: {
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

    ...mapActions('userModule', { userLogin: 'login' }),

    login() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) { // 验证数据
        return;
      }
      this.userLogin(this.user)
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          // 跳转到首页
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    validateState(field) {
      const { $dirty, $error } = this.$v.user[field];
      return $dirty ? !$error : null;
    },
  },
};
</script>
