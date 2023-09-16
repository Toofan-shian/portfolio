<template>
  <v-container
    id="contact"
    class="mt-4 mt-sm-16 mb-10 justify-center d-flex"
  >
    <div
      class="w-100"
      style="max-width: 1200px;"
    >

      <!-- TITLE -->
      <v-row
        class=""
      >
        <h2
          class="text-h3 text-center w-100 py-2 mb-sm-9 mb-lg-10 pb-lg-4 pt-sm-8"
        >
          Contact Me
        </h2>
      </v-row>

      <!-- CONTENT -->
      <v-row
        class=""
      >
        <!-- TEXT & ILL -->
        <v-col
          class="pa-0  pl-sm-8 pr-sm-4 pa-md-3 d-flex flex-column align-start align-md-center justify-start"
          cols="12"
          sm="5"
          md="6"
        >
          <div
            class="w-100"
          >
            <h2
              class="text-subtitle-2 text-md-h6 text-center text-sm-start w-100 mb-5"
            >
              I am happy you have visited my website<br/>
              I hope I will hear from you
            </h2>
    
            <ContactIllustration
              v-if="display.smAndUp.value"
            ></ContactIllustration>

          </div>
        </v-col>

        <v-col
          class="px-6 px-sm-0 pr-sm-8 pt-sm-0 pa-md-3"
        >

          <contactForm></contactForm>
        </v-col>
      </v-row>

      
    </div>
  </v-container>
</template>

<script setup lang="ts">
import {useDisplay} from 'vuetify'


let display = useDisplay()
</script>

<style scoped>

</style>