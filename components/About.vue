<template>
  <v-container
    id="about"
    class="mb-16 d-flex justify-center"
    max-width="1100"
  >
    <div
      class=""
      style="max-width: 1200px;"
    >

      <!-- TITLE -->
      <v-row
        class=""
      >
        <h2
          class="text-h3 text-center w-100 py-8 pb-lg-12"
        >
          About Me
        </h2>
      </v-row>
  
      <!-- TEXT & Illustration -->
      <v-row
        class=""
      >
        <v-col
          class="px-4 px-sm-8 px-md-4"
        >
          <p class="text-body-1">
            Hi, my name is Toofan, I’m a frontend developer who loves creating beautiful and functional web based platforms.<br/>
            Until two years ago, I was a musician and an English teacher,
            until I found my passion in programming and decided to pursue this career.<br/> 
            I love learning new things every day and keeping up with the latest trends and technologies in web development. 
            I enjoy working in a team environment and collaborating with other developers.<br/> 
            I am an on-time person and I care about time and punctuality. <br/>
            I have experience in using Nuxt, Vue, and Vuetify to build responsive and user-friendly websites. 
          </p>
        </v-col>
  
        <v-col
          v-if="display.mdAndUp.value"
          class="pa-0 d-flex flex-column align-center justify-center"
          cols="3"
          lg="4"
        >
          <div
            class=" w-100 mt-md-n4 mt-lg-0"
            style=""
          >
            <AboutIllustration ></AboutIllustration>
          </div>
          <v-btn
            variant="outlined"
            color="orange"
            class="mx-auto mt-4"
            @click="emitFocus"
          >
            let's talk
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- ACTION -->
      <v-row
        class="px-4 mt-8 px-16"
        v-if="display.smAndDown.value"
      >
        <v-btn
          variant="outlined"
          color="orange"
          class="w-50 mx-auto"
          @click="emitFocus"
        >
          let's talk
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import {useDisplay} from 'vuetify'
import eventBus from '~/eventBus';

let display = useDisplay()
let showIll = ref(true)

watch(display.name, () => {
  if (display.mdAndUp.value) {
    showIll.value = true
  } else showIll.value = false;
})

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

let emitFocus = () => {
  eventBus.emit('focus')
  scrollTo('contact')
}
</script>

<style scoped>

</style>