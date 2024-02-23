<template id="page">
  <div id="page">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/conversation" v-if="$store.usernom==null"> </router-link>
    <signiButton />
  </nav>
  <router-view/>
<BaseFooter />
  </div>
</template>

<script>

import signiButton from './components/signiButton.vue';
import BaseFooter from './components/footer.vue';

export default{
  components:{
    signiButton,
    BaseFooter,
    LogoutButton,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#page {
  background: #021634;
  color:#e7ae2f;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
