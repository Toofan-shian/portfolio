<template>
  <v-row
    class="mb-8"
    no-gutters
  >
    <v-card
      class="project-card  w-100 rounded-lg pa-4 pa-md-8 pa-lg-10 text-white "
  
    >
      <v-row
        class="d-flex"
      >
        <v-col
          class="d-flex flex-column justify-center"
          order="2"
          cols="12"
          sm="6"

        >
          <div
            class=""
          >
            <v-card-title
              class="pb-3 px-1 mt-n2 text-wrap text-lg-h5 pb-lg-4"
            >
              Full Stack Full Responsive Online Shop
            </v-card-title>
  
            <v-card-text
              class="text-lg-subtitle-1"
            >
              <ul class="ml-4 ml-sm-2">
                <li class="pb-lg-1">Vue 2</li>
                <li class="pb-lg-1">Vuetify 2</li>
                <li class="pb-lg-1">Vuex</li>
                <li class="pb-lg-1">Vue Router</li>
                <li class="pb-lg-1">Node (express)</li>
                <li class="pb-lg-1">MongoDB</li>
              </ul>
            </v-card-text>
  
            <v-card-actions class="d-flex justify-center">
              <v-btn
                class="w-25 mr-2 flex-1-1"
                size="small"
                color="orange"
                variant="outlined"
              >
                <v-icon class="mr-2" size="large">mdi-github</v-icon>
                code
              </v-btn>
  
              <v-btn
                class="w-25 ml-2 flex-1-1"
                size="small"
                variant="outlined"
                color="orange"
              >
                <v-icon class="mr-2">mdi-monitor</v-icon>
                live
              </v-btn>
            </v-card-actions>
          </div>
        </v-col>
  
        <v-col
          class=" d-flex justify-center align-center"
          cols-sm="6"
        >
          <v-img
            src="/guitar-shop-hero.png"
            class="rounded-lg"
            style="max-height: 222px;"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script setup lang="ts">

</script>

<style scoped>
.project-card {
  /* border: 1px solid rgb(126, 82, 1); */
  background-color: rgb(59, 59, 59);
}
</style>