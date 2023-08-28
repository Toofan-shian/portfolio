<template>
  <v-container
    class="bg-grey-darken-4 py-16"
    fluid
  >
    <v-row
      class="d-flex flex-column align-center py-8"
    >
      <h1 class="text-h1 mb-4">
        {{ hello }}
      </h1>
    
      <h3 class="text-h4 mb-1">
        I'm a FrontEnd Developer
      </h3>
    
      <p>
        & I Love Building Cool Interfaces
      </p>
      <v-btn
        class="my-5"
        variant="outlined"
        color="orange"
      >
        more about me
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
let hello = ref('< Hello World />')
</script>

<style scoped>

</style>