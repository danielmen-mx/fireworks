<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
      persistent
    >
      <v-card>
        <v-card-text class="text-h6">{{ text }}</v-card-text>
        <v-card-actions>
          <v-btn color="blue" block @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      text: ''
    }
  },
  mounted() {
    this.emitter.on('openDialog', (data) => {
      this.text = data.message
      this.$nextTick(() => {
        this.dialog = true
      })
    })
  },
}
</script>