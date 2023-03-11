<template>
  <!-- dialog -->
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text class="text-h6">Pongase en contacto al (+52)961-297-8513</v-card-text>
        <v-card-actions>
          <v-btn color="blue" block @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- main contain -->
  <v-container class="text-center text-h4 text-grey-darken-3">
    <v-img src="/public/images/message.png" width="110px" class="mx-auto"></v-img>
    <div class="text-h5 my-6">
      <p class="font-weight-bold">Personaliza tu experiencia agendando una cita</p>
      <p>No lo pienses más, contactanos de inmediato</p>
    </div>
    <div>
      <v-btn width="300px" class="mr-4" color="blue" prepend-icon="mdi-phone" @click="callUs()">Llamanos</v-btn>
      <v-btn width="300px" class="ml-4" color="green" prepend-icon="mdi-whatsapp" @click="redirectWA()">Mensaje WhatsApp</v-btn>
    </div>
    <v-divider class="my-8"></v-divider>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    callUs() {
      this.dialog = true
    },
    redirectWA() {
      console.log('redirecting...')
    }
  },
}
</script>