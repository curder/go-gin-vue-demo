<template>
  <div class="home container text-center mt-5">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Go Gin Vue Demo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
