<template>
  <v-card-text class="text-center mt-6">
    <p class="text-h4 font-weight-bold text-grey-darken-3">Contrata ahora</p>
    <p class="text-h6">Dudas?</p>
    <v-card-item v-for="(button, i) in buttons">
      <v-btn
        class="rounded-pill elevation-2 ma-1 px-4"
        :color="button.color"
        @click="action(button)"
      >
        <v-icon>{{button.icon}}</v-icon>
        <span>{{button.title}}</span>
      </v-btn>
    </v-card-item>
  </v-card-text>
  <v-divider></v-divider>
  <Dialog :open_form="dialog" @close-form="closeDialog"/>
</template>
<script>
import Dialog from '@/components/Home/Dialog.vue'
export default {
  components: {
    Dialog
  },
  data() {
    return {
      buttons: [
        {
          title: "Llamar por teléfono",
          name: "phone",
          icon: "mdi-cellphone",
          color: "#FFA726",
          action: ""
        },
        {
          title: "Enviar msj a WhatsApp",
          name: "whats",
          icon: "mdi-whatsapp",
          color: "#26A69A",
          action: "https://wa.me/message/WZQZJUBNRUFYF1"
        },
        {
          title: "Enviar e-mail",
          name: "email",
          icon: "mdi-email",
          color: "#2196F3",
          action: ""
        }
      ],
      dialog: false,
      message: "Pongase en contacto al (+52)",
      phone: "961-297-8513"
    }
  },
  methods: {
    action(data) {
      if (data.name == 'whats') window.location = data.action
      if (data.name == 'email') {
        this.dialog = true
      }
      if (data.name == 'phone') {
        this.emitter.emit('openDialog', { message: this.message + this.phone })
        navigator.clipboard.writeText(this.phone)
        this.emitter.emit('snackbarNotify', {message: "Número telefónico copiado al portapapeles", color: "success"})
      }
    },
    closeDialog() {
      this.dialog = false
    }
  },
}
</script>