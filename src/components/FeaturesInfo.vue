<template>
  <v-card-text class="text-h6">Caracteristicas:</v-card-text>
  <v-card-item
    v-for="info in information"
  >
    <v-card-text class="pa-0 text-h6">{{info.title}}</v-card-text>
    <v-card-text class="text--primary pa-0">{{info.info}}</v-card-text>
  </v-card-item>
</template>
<script>
export default {
  data() {
    return {
      information: [
        {
          title: 'Fiestas Infantiles',
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: 'Baby Shower',
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: 'Despedida de Soltera',
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: 'Show adultos',
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
      ]
    }
  },
}
</script>