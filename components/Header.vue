<template>
  <v-app-bar
    class="bg-grey-darken-3"
  >
    <v-toolbar-items class="mx-auto">
      <v-btn
        class=""
        v-for="section in sections"
        :key="section.name"
        :size="display.smAndUp.value ? 'default' : 'small'"
        @click="() => scrollTo(section.name)"
      >
        {{ section.name }}
      </v-btn>
    </v-toolbar-items>
    <!-- <span>{{ display.name }}</span> -->
  </v-app-bar>
</template>



<script setup>
import {useDisplay} from 'vuetify'

let display = useDisplay();
let buttonSize = ref('default')

watch(display.name, () => {
  if(display.xs.value) {
    buttonSize.value = 'x-small'
  } else {
    buttonSize.value ='default'
  }
})


let sections = ref([
  {name: 'skills', link: ''},
  {name: 'projects', link: ''},
  {name: 'about', link: ''},
  {name: 'contact', link: ''},
])

let scrollTo = target => {
  let targetEl = document.getElementById(target)
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