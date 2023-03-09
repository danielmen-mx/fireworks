<template>
  <v-card-text class="text-center mt-6">
    <p class="text-h4 font-weight-bold text-grey-darken-3">Contrata ahora</p>
    <p class="text-h6">Dudas?</p>
    <v-card-item v-for="(button, i) in buttons">
      <v-btn
        class="rounded-pill elevation-2 ma-1 px-4"
        :color="button.color"
      >
        <v-icon>{{button.icon}}</v-icon>
        {{button.title}}
      </v-btn>
    </v-card-item>
  </v-card-text>
  <v-divider></v-divider>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          title: "Llamar por teléfono",
          icon: "mdi-cellphone",
          color: "#FFA726",
          action: ""
        },
        {
          title: "Enviar msj a WhatsApp",
          icon: "mdi-whatsapp",
          color: "#26A69A",
          action: ""
        },
        {
          title: "Enviar e-mail",
          icon: "mdi-email",
          color: "#2196F3",
          action: ""
        }
      ]
    }
  },
  methods: {
    // add method when click button: contact by phonecall, whatsapp, email
  },
}
</script>