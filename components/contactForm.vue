<template>
    <v-form
      class=" "
      @submit.prevent="submitForm"
    >
      <v-text-field
        id="textField"
        v-model="name"
        name="email"
        placeholder="example@gmail.com"
        variant="outlined"
        label="Your Email"
      ></v-text-field>

      <v-textarea
        v-model="message"
        name="message"
        variant="outlined"
        label="Your Message"
        placeholder=""
      ></v-textarea>

      <v-btn
        type="submit"
        class="w-100"
        color="orange"
        variant="outlined"
      >
        Submit
      </v-btn>
  </v-form>



  <v-snackbar
    v-model="feedback"
    :color="feedbackColor"
    class="mb-4"
  >
    {{ feedbackMessage }}

    <template v-slot:actions>
      <v-btn
        variant="plain"
        @click="feedback = false"
        size="small"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>






<script setup lang="ts">
import eventBus from '~/eventBus';

let feedback = ref(true)
let feedbackMessage = ref('')
let feedbackColor = ref('')
let name = ref('')
let message = ref('')
let actionLink = "https://formspree.io/f/xyyqpeyd"

let submitForm = async () => {
  try {
    let formData = new FormData()
    formData.append('name', name.value)
    formData.append('message', message.value)

    let { data } = await useFetch(actionLink, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (data.value.ok) {
      name.value = ''
      message.value = ''
      showFeedback('Your message was sent successfully', 'success')
    }
  } catch (error) {
    console.error('An error occurred:', error)
    showFeedback('An error occurred while submitting the form.', 'deep-orange-darken-4')
  }
}

let showFeedback = (msg: string, color: string) => {
  feedback.value = true;
  feedbackMessage.value = msg
  feedbackColor.value = color
  setTimeout(() => {
    feedback.value = false;
  }, 3000)
}

let focus = () => {
  let field = document.getElementById('textField')
  field.focus()
  console.log('event run')
}

onMounted(() => {
  eventBus.on('focus', focus)
})
</script>
