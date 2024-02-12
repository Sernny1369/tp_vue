<template>
  <div>
    <base-header/>
    <base-layout>
      <home-page />
    </base-layout>
    <base-footer/>
  </div>

</template>

<script>
import HomePage from './pages/HomePage.vue'
import BaseHeader from './components/header.vue'
import BaseFooter from './components/footer.vue'
import BaseLayout from './components/layout.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    HomePage,
    BaseLayout,
    BaseFooter
  }
}
</script>