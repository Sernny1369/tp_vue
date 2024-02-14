<template>
    <base-button 
        :disabled="isPending"
        :color="color"
        @click.stop.prevent="handleClick"
    >
    <p v-if="isPending"
    :icon="['fas', 'circle-notch']"
    pulse />
		<slot></slot>
	</base-button>
</template>
            
<script>

import BaseButton from './buttonClique.vue'

export default {
    name: 'AsyncButton',
    components:{ BaseButton },
    inheritAttrs:false,

    props:{
        color: {
            type: String,
            default: 'primary'
        }
    },

    data () {
        return {
            isPending: false
        }
    },

    methods: {
        handleClick(){
            const originalOnClick= /**@type {()=> Promise<void>} */ (this.$attrs)
            this.isPending = true
            originalOnClick().finally(()=>{this.isPending= false})
        }
    }
}
</script>
<style>
.primary {
	background-color: #42b983;
}
</style>