<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand @click="$router.replace({name: 'Home'})">Go Gin Vue Demo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="$router.replace({name: 'login'})">登录</b-nav-item>
            <b-nav-item @click="$router.replace({name: 'register'})">注册</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
</template>
