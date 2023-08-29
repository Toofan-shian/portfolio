<template>
  <v-app-bar class="bg-grey-darken-3">
    <v-toolbar-items class="mx-auto">
      <v-btn
        class=""
        v-for="section in sections"
        :key="section.name"
      >
        {{ section.name }}
      </v-btn>
      <v-btn class="">{{ display.name }}</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>



<script setup>
import {useDisplay} from 'vuetify'

let display = useDisplay();

let sections = ref([
  {name: 'Skills', link: ''},
  {name: 'Projects', link: ''},
  {name: 'About', link: ''},
  {name: 'Contact Me', link: ''},
])
</script>




<style scoped>

</style>