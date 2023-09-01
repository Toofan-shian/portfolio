<template>
  <v-container
    class=""
  >
    <v-row
      class=""
    >
      <h2
        class="text-h3 text-center w-100 py-8"
      >
        About Me
      </h2>
    </v-row>

    <v-row
      class=""
    >
      <v-col
        class="px-4 px-sm-8 px-md-4"
      >
        <p>
          Hi, I’m a frontend developer who loves creating beautiful and functional web based platforms.
          Until two years ago, I was a musician and an English teacher, 
          until I found my passion in programming and decided to pursue this career. 
          I love learning new things every day and keeping up with the latest trends and technologies in web development. 
          I enjoy working in a team environment and collaborating with other developers. 
          I am an on-time person and I care about time and punctuality. 
          I have experience in using Nuxt, Vue, and Vuetify to build responsive and user-friendly websites. 
          You can check out some of my projects below. 
          Thank you for visiting my portfolio website and feel free to contact me if you have any questions or feedback.
        </p>
      </v-col>

      <v-col
        v-if="display.mdAndUp.value"
        class="pa-0 d-flex align-center"
        cols="3"
      >
        <div
          class=" w-100 "
          style=""
        >
          <AboutIllustration ></AboutIllustration>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useDisplay} from 'vuetify'

let display = useDisplay()
let showIll = ref(true)

watch(display.name, () => {
  console.log(display.name.value)
  console.log('xs:', display.mdAndUp.value)
  if (display.mdAndUp.value) {
    showIll.value = true
  } else showIll.value = false;

  console.log(showIll.value)
})

</script>

<style scoped>

</style>