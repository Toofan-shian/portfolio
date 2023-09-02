<template>
  <v-container
    class="bg-grey-darken-4 py-8 py-md-16 "
  >
    <v-row
      class="py-8 py-md-16 py-lg-14 py-xl-16"
    >

      <v-col
        class=" d-flex flex-column justify-center justify-md-center align-center align-md-start "
        cols="12"
        order="1"
        order-md="first"
        md="7"
        lg="5"
        offset-lg="1"
      >
        <div
          class="d-flex flex-column align-center align-md-start "
        >
          <h1
            class="text-h3 text-md-h2 text-xl-h1 mb-4"
          >
            {{ hello }}
          </h1>
        
          <h3
            class="text-h4 mb-1 ml-md-4"
          >
            I'm a FrontEnd Developer
          </h3>
        
          <p class="text-h6 ml-md-4">
            I Love Building Cool Interfaces
          </p>
          <v-btn
            class="my-5 my-md-6 mx-auto mx-md-0 ml-md-4"
            variant="outlined"
            color="orange"
          >
            more about me
          </v-btn>
        </div>
      </v-col>

      <v-col
        class="pa-0 mb-6 mb-md-0 "
        cols="6"
        sm="4"
        md="5"
        lg="5"
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