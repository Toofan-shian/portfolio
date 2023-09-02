<template>
  <v-app-bar
    class="bg-grey-darken-3"
    scroll-behavior="hide"
  >
    <v-toolbar-items class="mx-auto">
      <v-btn
        class=""
        v-for="section in sections"
        :key="section.name"
        :size="buttonSize"
      >
        {{ section.name }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>



<script setup>
import {useDisplay} from 'vuetify'

let display = useDisplay();
let buttonSize = ref('default')

watch(display.name, () => {
  if(display.xs.value) {
    buttonSize.value = 'small'
    console.log('smalled')
  } else {
    buttonSize.value ='default'
  }
})

console.log(display.xs.value ? 'small' : 'regular')

let sections = ref([
  {name: 'Skills', link: ''},
  {name: 'Projects', link: ''},
  {name: 'About', link: ''},
  {name: 'Contact', link: ''},
])
</script>




<style scoped>

</style>