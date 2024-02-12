<template>
  <div>
    <base-header/>
    <base-layout>
      <home-page />
    </base-layout>
    <base-button>Click me</base-button>
    <base-button disabled>Click me</base-button>
    <base-footer/>
  </div>

</template>

<script>

import HomePage from './pages/HomePage.vue'
import BaseHeader from './components/header.vue'
import BaseFooter from './components/footer.vue'
import BaseLayout from './components/layout.vue'
import BaseButton from './components/buttonClique.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    HomePage,
    BaseLayout,
    BaseFooter,
    BaseButton
  }
}
</script>