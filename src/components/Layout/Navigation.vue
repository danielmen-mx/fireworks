<template>
  <v-app-bar
    color="white"
    class="elevation-2"
  >
    <template v-slot:prepend>
      <v-img
        src="/public/logos/main-logo.png"
        class="ml-2 mt-1"
        width="150px"
      ></v-img>
    </template>
    <template v-slot:append>
      <v-btn
          v-for="link in links"
          :key="link"
          color="black"
          variant="text"
          class="mx-2"
          rounded="xl"
        >{{ link }}
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