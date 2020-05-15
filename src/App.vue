<template>
  <div id="app">
    <navbar />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
import Navbar from './views/partials/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
</style>
