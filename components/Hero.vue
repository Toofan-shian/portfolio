<template>
  <v-container
    class="bg-grey-darken-4 py-8 "
    fluid
  >
    <v-row
      class="d-flex align-center py-8 "
    >

      <v-col
        class=" d-flex flex-column justify-center align-center"
        cols="12"
        order="2"
      >
        <h1
          class="text-h3 mb-4"
        >
          {{ hello }}
        </h1>
      
        <h3
          class="text-h4 mb-1"
        >
          I'm a FrontEnd Developer
        </h3>
      
        <p class="text-h6">
          I Love Building Cool Interfaces
        </p>
        <v-btn
          class="my-5 mx-auto "
          variant="outlined"
          color="orange"
        >
          more about me
        </v-btn>
      </v-col>

      <v-col
        class=" pa-0 "
        cols="12"
      >
        <HeroIllustration></HeroIllustration>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
let hello = ref('< Hello World />')
</script>

<style scoped>

</style>