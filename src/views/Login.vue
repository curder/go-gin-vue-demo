<template>
  <b-card
    title="登录"
    class="mt-5"
  >
    <b-row>
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      >
        <b-form @submit.prevent="login">

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
            <b-button
              type="submit"
              block
              variant="outline-primary"
            >登录</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

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
    login() {
      console.log(this.user);
    },

    validateState(field) {
      const { $dirty, $error } = this.$v.user[field];
      return $dirty ? !$error : null;
    },
  },
};
</script>
