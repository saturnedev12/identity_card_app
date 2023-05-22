<template>
  <!-- Contenu du template -->
</template>

<script lang="ts">
import { Vue, Component } from 'vue';

@Component
export default class HelloWorld extends Vue {
  // Déclarations de propriétés avec les types
  message: string = 'Hello, TypeScript!';

  // Déclarations de méthodes avec les types
  logMessage(): void {
    console.log(this.message);
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
