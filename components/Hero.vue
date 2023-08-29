<template>
  <v-container
    class="bg-grey-darken-4 py-8 py-md-16 border-r"
    fluid
  >
    <v-row
      class="py-8 "
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
          more about me {{ display.name }}
        </v-btn>
      </v-col>

      <v-col
        class=" pa-0 "
        cols="12"
        md="4"
        lg="3"
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
console.log(display.name)
</script>

<style scoped>

</style>