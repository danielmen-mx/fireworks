<template>
  <v-card-text class="text-center mt-6">
    <p class="text-h4 font-weight-bold">Contrata ahora</p>
    <p class="text-h6">Dudas?</p>
    <v-card-item v-for="(button, i) in buttons">
      <v-btn
        class="rounded-pill elevation-2 ma-1 px-4"
      >
        <v-icon>{{button.icon}}</v-icon>
        {{button.title}}
      </v-btn>
    </v-card-item>
  </v-card-text>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          title: "Llamar por teléfono",
          icon: "mdi-cellphone",
          action: ""
        },
        {
          title: "Enviar msj a WhatsApp",
          icon: "mdi-whatsapp",
          action: ""
        },
        {
          title: "Enviar e-mail",
          icon: "mdi-email",
          action: ""
        }
      ]
    }
  },
}
</script>