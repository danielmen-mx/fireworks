<template>
  <!-- Carousel -->
  <v-card class="elevation-2 rounded">
    <v-carousel
      cycle
      interval="5500"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item
        v-for="(n) in 17"
        :key="n"
      >
        <v-parallax
          :src="`/events_photos/${n}.jpeg`"
          height="800"
        >
        </v-parallax>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>