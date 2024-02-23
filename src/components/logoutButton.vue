<template>
    <BaseButton :disabled="isSignIn || disabled" @click="logout">
        logout
    </BaseButton>
</template>
    

<script>

import { signOutUser } from "../lib/microsoftGraph";   
import BaseButton from './buttonClique.vue';

export default {
    name: 'LogoutButton',
    components:{
        BaseButton,
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
        username:'username',
      visible: false
    }
    },
    methods: {
        async logout() {
            try {
                    const user = await signOutUser()
                    this.username = ''
                    console.log('Utilisateur déconnecté:', user)
                } catch (error) {
                    console.error('Erreur de déconnexion:', error)
                }
            }
            }

}
    </script>