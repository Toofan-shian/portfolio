<template>
  <v-container
    class="bg-grey-darken-4 py-8 py-md-16 "
  >
    <v-row
      class="py-8 py-md-16 py-lg-10 py-xl-16"
    >

      <v-col
        class=" d-flex flex-column justify-center justify-md-center align-center align-md-start align-lg-center align-xl-center pl-lg-16"
        cols="12"
        order="1"
        order-md="first"
        md="7"
        lg="6"
        xl="4"
        offset-xl="2"
      >
        <div
          class=" d-flex flex-column align-center align-md-start "
        >
          <h1
            class="hello text-h5 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4  mb-4"
          >
            {{ hello }}
          </h1>
        
          <h3
            class="text-h5 mb-1 ml-md-4 body"
          >
            I'm a FrontEnd Developer
          </h3>
        
          <p class="text-subtitle-1 ml-md-4 body">
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
        class="pa-0 mb-6 mb-md-0 pa-lg-16 pa-xl-16"
        cols="6"
        sm="4"
        md="5"
        lg="6"
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
let hello = ref('<Hello World/>')
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
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.body {
  /* font-family: 'Cutive Mono', monospace !important;  */
}
.hello {
  font-family: 'Press Start 2P', cursive !important;
}
</style>