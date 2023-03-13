<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="50%"
    >
      <v-card>
        <v-card-text class="text-center text-h4 pb-0">Contactanos</v-card-text>
        <v-card-text class="text-center text-grey-darken-2 pt-0">Envianos tus datos y nosotros nos comunicaremos contigo lo antes posible</v-card-text>
        <v-card class="ma-4">
          <Form />
        </v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red-darken-1"
            variant="text"
            @click="closeDialog()"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import Form from '@/components/Contact/Form.vue'

export default {
  props: {
    open_form: {
      type: Boolean
    }
  },
  components: {
    Form
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
      this.$emit('close-form')
    }
  },
  watch: {
    'open_form': function (value) {
      this.dialog = value
    }
  }
}
</script>