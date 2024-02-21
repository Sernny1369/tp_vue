<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <home-page />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/pages/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage
  }
}
</script>
