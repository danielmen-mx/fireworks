<template>
  <v-app-bar
    color="purple-lighten-1"
    class="elevation-2"
  >
    <template v-slot:prepend>
      <v-img
        src="/public/logos/main-logo.png"
        class="ml-auto mt-1"
        width="150px"
      ></v-img>
    </template>
    <template v-slot:append>
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          <v-app-bar-title>{{ link }}</v-app-bar-title>
        </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      links: [
        'Inicio',
        'Quienes Somos',
        'Servicios',
        'FAQs',
        'Contáctanos',
        'Enviar msj a WhatsApp'
      ]
    }
  },
}
</script>