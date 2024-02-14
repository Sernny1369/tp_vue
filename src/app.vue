<template>
  <div>
    <base-header/>
    <base-layout>
      <home-page />
    </base-layout>
    <async-button >TEST</async-button>
    <sign-in-button />
    <base-button class="button">Base Boutton</base-button>
    <base-button class="disabled" disabled>Base Boutton disable</base-button>
    <base-button class="primary">Base Boutton </base-button>
    <base-button class="warn">Base Boutton</base-button>
    <base-button class="danger">Base Boutton</base-button>
    <base-footer/>
  </div>

</template>

<script>

import HomePage from './pages/HomePage.vue'
import BaseHeader from './components/header.vue'
import BaseFooter from './components/footer.vue'
import BaseLayout from './components/layout.vue'
import BaseButton from './components/buttonClique.vue'
import AsyncButton from './components/asyncBoutton.vue'
import SignInButton from './components/signiButton.vue'


export default {
  name: 'App',
  components: {
    BaseHeader,
    HomePage,
    BaseLayout,
    BaseFooter,
    AsyncButton,
    BaseButton,
    SignInButton
  }
}
</script>

