<template>
<p>Ex 6: create BaseLayout that use slot API</p>
</template>
        
<script>
export default {
    name: 'BaseLayout',
}

</script>

<style scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Au moins la hauteur de la fenêtre visible */
}

main {
  flex-grow: 1; /* Le contenu principal prendra l'espace disponible restant */
}

</style>
