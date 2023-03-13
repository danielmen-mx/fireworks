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
          @click="pushRoute(link)"
        >{{ link.title }}
        </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Inicio',
          path: '/',
          name: 'home'
        },
        {
          title: 'Quienes Somos',
          path: '/quienes-somos',
          name: 'about'
        },
        {
          title: 'Servicios',
          path: '/servicios',
          name: 'services'
        },
        // {
        //   title: 'FAQs',
        //   path: '/preguntas',
        //   name: 'asks',
        // },
        {
          title: 'Contáctanos',
          path: '/contacto',
          name: 'contact'
        },
        {
          title: 'Enviar msj a WhatsApp',
          path: "https://wa.me/message/WZQZJUBNRUFYF1",
          name: 'whats'
        }
      ]
    }
  },
  methods: {
    pushRoute(link) {
      if (link.name != 'whats') this.$router.push({ path: link.path})
      if (link.name == 'whats') window.location = link.path
    }
  },
}
</script>