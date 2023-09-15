<template>
  <v-app class="bg-grey-darken-4">
    <Header></Header>
    <v-main>
      <Hero></Hero>  
      <skills></skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </v-main>
    <FooterSec></FooterSec>
  </v-app>
</template>

<script setup>


</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');

body {
  font-family: 'Cutive Mono', monospace !important; 
}
.border-r {
  border: 1px solid red;
}
.border-g {
  border: 1px solid green;
}
</style>