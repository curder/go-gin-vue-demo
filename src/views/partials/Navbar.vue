<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
      <b-navbar-brand @click="$router.push({name: 'Home'})">Go Gin Vue Demo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="userInfo">
            <template v-slot:button-content>
              <em>{{ userInfo.name }}</em>
            </template>
            <b-dropdown-item href="#">个人中心</b-dropdown-item>
            <b-dropdown-item @click="logout" href="#">退出登录</b-dropdown-item>
          </b-nav-item-dropdown>

          <template v-if="!userInfo">
            <b-nav-item v-if="$route.name != 'login'" @click="$router.replace({name: 'login'})">登录
            </b-nav-item>
            <b-nav-item v-if="$route.name != 'register'"
                        @click="$router.replace({name: 'register'})">注册
            </b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),

  methods: {

    ...mapActions('userModule', {
      userLogout: 'logout',
    }),

    logout() {
      this.userLogout();
    },
  },
};
</script>
