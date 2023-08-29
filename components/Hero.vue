<template>
  <v-container
    class="bg-grey-darken-4 py-8 py-md-16 border-r"
    fluid
  >
    <v-row
      class="py-8 py-md-10 py-lg-14 py-xl-16"
    >

      <v-col
        class=" d-flex flex-column justify-center justify-md-start align-center align-md-start"
        cols="12"
        order="1"
        order-md="first"
        md="6"
        lg="5"
        offset-md="1"
        offset-lg="2"
      >
        <h1
          class="text-h3 text-md-h2 text-xl-h1 mb-4"
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
          class="my-5 my-md-6 mx-auto mx-md-0"
          variant="outlined"
          color="orange"
        >
          more about me
        </v-btn>
      </v-col>

      <v-col
        class="pa-0 mb-6 mb-md-0"
        cols="6"
        sm="4"
        md="4"
        lg="3"
        offset="3"
        offset-sm="4"
        offset-md="0"
      >
        <HeroIllustration></HeroIllustration>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import {useDisplay} from 'vuetify'
let hello = ref('< Hello World />')
let display = useDisplay()
</script>

<style scoped>

</style>