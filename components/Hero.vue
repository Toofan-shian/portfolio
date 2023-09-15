<template>
  <v-container
    class="bg-grey-darken-4 py-8 py-md-16 "
  >
    <v-row
      class="py-8 py-md-16 py-lg-14 py-xl-16"
    >

      <v-col
        class=" d-flex flex-column justify-center justify-md-center align-center align-md-start align-xl-center"
        cols="12"
        order="1"
        order-md="first"
        md="7"
        lg="5"
        offset-lg="1"
        xl="4"
        offset-xl="2"
      >
        <div
          class="d-flex flex-column align-center align-md-start "
        >
          <h1
            class="text-h3 text-md-h2 text-xl-h2 mb-4"
          >
            {{ hello }}
          </h1>
        
          <h3
            class="text-h4 mb-1 ml-md-4"
          >
            I'm a FrontEnd Developer
          </h3>
        
          <p class="text-h6 ml-md-4">
            Passionate About Building Cool Interfaces
          </p>
          <v-btn
            class="my-5 my-md-6 mx-auto mx-md-0 ml-md-4"
            variant="outlined"
            color="orange"
            @click="() => scrollTo('skills')"
          >
            explore
          </v-btn>
        </div>
      </v-col>

      <v-col
        class="pa-0 mb-6 mb-md-0 pa-lg-8 pa-xl-16"
        cols="6"
        sm="4"
        md="5"
        lg="5"
        xl="4"
        offset="3"
        offset-sm="4"
        offset-md="0"
      >
        <v-img
          src="/responsive.png"
          class="w-100"
        ></v-img>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import {useDisplay} from 'vuetify'
let hello = ref('< Hello World />')
let display = useDisplay()

let scrollTo = targetId => {
  let targetEl = document.getElementById(targetId)
  let offset = 50;
  let targetTop = targetEl.getBoundingClientRect().top
  let finalPos = targetTop + window.scrollY - offset

  window.scrollTo({
    top: finalPos,
    behavior: 'smooth'
  })
}
</script>

<style scoped>

</style>