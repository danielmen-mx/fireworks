<template>
  <v-card class="pa-0 ma-3 elevation-0">
    <form
      ref="form"
      @submit.prevent
      @mouseover="checkForm()"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="form.name"
            name="name"
            clearable
            :readonly="loading"
            :rules="[rules.required]"
            label="Nombre"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <!-- <VuePhoneNumberInput v-model="form.phone" /> -->
          <v-text-field
            v-model="form.phone"
            name="phone"
            :readonly="loading"
            :rules="[rules.required, rules.numberRule]"
            clearable
            prefix="+52"
            label="Teléfono"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        v-model="form.email"
        name="email"
        :readonly="loading"
        :rules="[rules.required, rules.email]"
        label="Email"
        clearable
      ></v-text-field>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="form.state"
            name="state"
            :readonly="loading"
            :rules="[rules.required]"
            clearable
            label="Estado"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="form.date"
            name="date"
            :readonly="loading"
            :rules="[rules.required]"
            type="date"
            clearable
            label="Fecha del evento"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn
        :disabled="!formComplete"
        :loading="loading"
        type="submit"
        color="success"
        @click="submit"
      >
        <v-icon icon="mdi-send" start></v-icon>
        enviar
      </v-btn>
    </form>
  </v-card>
</template>
<script>
import emailjs from 'emailjs-com'
import {ref} from 'vue'
// import emailjs from '@emailjs/browser'

export default {
  data() {
    return {
      loading: false,
      formComplete: false,
      form: {
        name: null,
        phone: null,
        email: null,
        state: null,
        date: null
      },
      snackbar: {
        message: 'Correo enviado con éxito',
        color: 'success'
      },
      rules: {
        required: value => !!value || 'Campo requerido',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo no válido.'
        },
        numberRule: value  => {
          if (!value.trim()) return true;
          if (!isNaN(parseFloat(value)) && value >= 0 && value <= 9999999999) return true;
          return 'Tu número telefonico debe estar mal';
        },
      }
    }
  },
  methods: {
    async submit() {
      try {
        this.loading = true

        let serviceId = import.meta.env.VITE_SERVICE_ID
        let templateId = import.meta.env.VITE_TEMPLATE_ID
        let userId = import.meta.env.VITE_USER_ID

        emailjs.sendForm(serviceId, templateId, this.$refs.form, userId).then(() => {
          this.emitter.emit('snackbarNotify', this.snackbar)
          this.form = {}
          this.loading = false
          this.emitter.emit('closeDialog')
        })
      } catch (error) {
        console.log(error)
        this.emitter.emit('snackbarNotify', {message: error, color: 'red'})
      }
    },
    checkForm() {
      if (this.form.name && this.form.phone && this.form.email && this.form.state && this.form.date) {
        this.formComplete = true
      }
    }
  },
  watch: {
    
  }
}
</script>