<template>
  <v-container
    class=" my-4"
  >

  <v-row
    class=""
  >
    <h2
      class="text-h3 text-center w-100 py-8"
    >
      Contact Me
    </h2>
  </v-row>

  <v-row
    class=""
  >
    <v-col
      class=""
      cols="5"
    >
      <ContactIllustration></ContactIllustration>
      <h2
        class="text-h5 "
      >
        Thanks for visiting<br/>
      </h2>

    </v-col>

    <v-col
      class=""
    >
      <v-form
        class="px-8"
      >
        <v-text-field
          variant="outlined"
        ></v-text-field>

        <v-textarea
          variant="outlined"
        ></v-textarea>

        <v-btn
          class="w-100"
          color="orange"
          variant="outlined"
        >
          Submit
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>