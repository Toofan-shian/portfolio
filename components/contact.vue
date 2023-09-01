<template>
  <v-container
    class="mt-4 mb-10"
  >

    <!-- TITLE -->
    <v-row
      class=""
    >
      <h2
        class="text-h3 text-center w-100 py-2"
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
        class=""
        cols="12"
      >
        <v-row
          class="d-flex justify-start px-4 align-center"
        >
          <h2
            class="text-subtitle-2 text-center mr-2 w-100 mb-5"
          >
            I am happy you have visited my website<br/>
            I hope I will hear from you
          </h2>
          <!-- <ContactIllustration style="max-width: 60px;"></ContactIllustration> -->

          <!-- <v-col
            class="align-center d-flex "
          >
            <h2
              class="text-h6 border-r"
            >
              Lets Get In Touch
            </h2>
          </v-col>

          <v-col

          >
            <ContactIllustration></ContactIllustration>
          </v-col> -->
        </v-row>
      </v-col>

      <v-col
        class=""
      >
        <v-form
          class="px-4 "
        >
          <v-text-field
            variant="outlined"
            label="Your name or your company"
          ></v-text-field>

          <v-textarea
            variant="outlined"
            label="Your message"
            placeholder=""
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