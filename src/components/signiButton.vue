<template>
    <BaseButton :disabled="isSignIn || disabled" @click="signIn">
        <span v-if="username===''">connecte toi</span>
        <span v-else>{{ username }}</span>
    </BaseButton>
</template>

<script>
import { signInAndGetUser } from "../lib/microsoftGraph";
import BaseButton from './buttonClique.vue';

export default {
  name: 'SignInButton',
  components: {
    BaseButton
  },
  props: {
    onClick: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
    },
    data() {
    return {
      username: ''
    }
    },
    methods: {
        async signIn() {
            try {
                    const user = await signInAndGetUser()
                    this.username = user.account.name
                    console.log('Utilisateur connecté:', user)
                } catch (error) {
                    console.error('Erreur de connexion:', error)
                }
            }
            }
}

</script>