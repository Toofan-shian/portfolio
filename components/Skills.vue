<template>
  <v-container
    id="skills"
    class="bg-grey-darken-3 pa-0 ma-0 "
    fluid
  >
    <v-parallax
      src="/code3.jpg"
      class=""
      style="max-height: 350px;"
    >
      <v-row class="skills-row flex-column justify-center  ma-0  h-100">
  
        <h3
          class=" text-center text-h4 text-md-h3 align-center mb-sm-3 mb-md-1 py-7"
        >
          Technologies I Work With
        </h3>
        
        <div
          class=" d-flex justify-center flex-wrap"
        >
          <!-- NUXT -->
          <div class="logo-container d-flex flex-column justify-center align-center mb-5">
            <svg :style="{width: iconSize, height: iconSize}" viewBox="0 0 60.6 39.539" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.9971 39.539H56.5247C57.2402 39.539 57.9432 39.3564 58.5628 39.0093C59.1825 38.6623 59.697 38.1631 60.0546 37.5619C60.4122 36.9608 60.6003 36.2789 60.6 35.5849C60.5997 34.8908 60.411 34.2091 60.0528 33.6083L44.9239 8.1904C44.5663 7.5894 44.0519 7.09032 43.4324 6.74332C42.8129 6.39632 42.1101 6.21363 41.3947 6.21363C40.6793 6.21363 39.9766 6.39632 39.357 6.74332C38.7375 7.09032 38.2231 7.5894 37.8655 8.1904L33.9971 14.6939L26.4338 1.97648C26.0759 1.37553 25.5613 0.876518 24.9416 0.52958C24.3219 0.182643 23.619 0 22.9035 0C22.188 0 21.4851 0.182643 20.8654 0.52958C20.2457 0.876518 19.7311 1.37553 19.3732 1.97648L0.547184 33.6083C0.189033 34.2091 0.00031171 34.8908 3.85805e-07 35.5849C-0.000310938 36.2789 0.187799 36.9608 0.54541 37.5619C0.903021 38.1631 1.41752 38.6623 2.03717 39.0093C2.65681 39.3564 3.35975 39.539 4.07528 39.539H18.2162C23.819 39.539 27.9509 37.1518 30.794 32.4945L37.6965 20.8993L41.3936 14.6939L52.4895 33.3335H37.6965L33.9971 39.539ZM17.9857 33.3272L8.11711 33.325L22.9101 8.47362L30.2912 20.8993L25.3492 29.2044C23.4611 32.2262 21.3162 33.3272 17.9857 33.3272Z" fill="#00DC82"/>
            </svg>

            
            <p class="mt-1">Nuxt</p>
          </div>
          
          <!-- VUE -->
          <div class="logo-container d-flex flex-column justify-center align-center mb-5 ">
            <svg :style="{width: iconSize, height: iconSize}" class="larger-svg" viewBox="0 0 256 221" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
              <g>
                <path d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z" fill="#41B883"></path>
                <path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" fill="#41B883"></path>
                <path d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z" fill="#35495E"></path>
              </g>
            </svg>
            <p class="mt-1">Vue</p>
          </div>
    
          <!-- VUETIFY -->
          <div class="logo-container d-flex flex-column justify-center align-center mb-5">
            <svg :style="{width: iconSize, height: iconSize}" class="larger-svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 293" xmlns="http://www.w3.org/2000/svg">
              <path d="m128 0h-60l60 141.816367" fill="#1697f6"/>
              <path d="m128 0h60l-60 141.816367" fill="#1867c0"/>
              <path d="m128 182.743732v109.715707l-128-249.9019196h67.0490402" fill="#7bc6ff"/>
              <path d="m128 182.746214v109.715707l128-249.9019196h-67.04904" fill="#aeddff"/>
            </svg>
            <p class="mt-1">Vuetify</p>
          </div>
    
          <!-- JAVASCRIPT -->
          <div class="logo-container d-flex flex-column justify-center align-center mb-5">
            <svg :style="{width: iconSize, height: iconSize}" class="larger-svg" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M0 0h256v256H0V0z" fill="#F7DF1E"></path>
                <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path>
              </g>
            </svg>
            <p class="mt-1">Javascript</p>
          </div>
    
          <!-- HTML -->
          <div class="logo-container d-flex flex-column justify-center align-center mb-5">
            <svg :style="{width: iconSize, height: iconSize}" class="larger-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>
                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>
                <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path>
              </g>
            </svg>
            <p class="mt-1">HTML</p>
          </div>
    
          <!-- CSS -->
          <div class="logo-container d-flex flex-column justify-center align-center mb-5">
            <svg :style="{width: iconSize, height: iconSize}" class="larger-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>file_type_css</title>
                <polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#1572b6"></polygon>
                <polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#33a9dc"></polygon>
                <polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style="fill:#fff"></polygon>
                <polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style="fill:#ebebeb"></polygon>
                <polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style="fill:#fff"></polygon>
                <polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style="fill:#ebebeb"></polygon>
                <polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style="fill:#ebebeb"></polygon>
              </g>
            </svg>
            <p class="mt-1">CSS</p>
          </div>
        </div>
  
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script setup>
import {useDisplay} from 'vuetify'

let display = useDisplay()

let iconSize = ref('70px')

let changeIconSize = () => {
  switch (display.name.value) {
    case 'xs':
      iconSize.value = '55px'
      break;
    
    case 'sm':
      iconSize.value = '60px'
      break;
    
    case 'md':
      iconSize.value = '70px'
      break;
    
    case 'lg':
      iconSize.value = '80px'
      break;
    
    default:
      iconSize.value = '55px'
      break;
  }
}
changeIconSize()
watch(display.name, changeIconSize)

</script>

<style scoped>
.st0{fill:#4DBA87;}
.st1{fill:#425466;}

.logo-container {
  margin: 0 20px;
  /* padding: 10px; */
}
.skills-row {
  background-color: rgba(34, 34, 34, 0.91);
}
.larger-svg {
  padding: 6px;
}
</style>