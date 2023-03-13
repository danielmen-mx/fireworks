<template>
  <v-container class="text-center text-h4 text-grey-darken-2 mx-auto">
    <v-carousel
      cycle
      interval="3500"
      height="100"
      hide-delimiters
      :show-arrows="false"
      class="rounded-lg"
    >
      <v-carousel-item
        v-for="(e, i) in eventos"
        :key="i"
      >
        <v-sheet
          :color="e.color"
          height="100%"
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ e.title }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      eventos: [
        {
          title: "Fiesta infantil",
          color: "orange-darken-2"
        },
        {
          title: "Baby shower",
          color: "blue-darken-2"
        },
        {
          title: "Despedida de soltera",
          color: "purple-darken-3"
        },
        {
          title: "Show para adultos/adolescentes",
          color: "red-accent-4"
        },
      ],
    }
  },
}
</script>