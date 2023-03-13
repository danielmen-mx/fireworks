
<template>
  <v-card class="pa-0 ma-3 elevation-0">
    <v-form
      v-model="form_complete"
      @submit.prevent
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="form.name"
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
            :readonly="loading"
            :rules="[rules.required]"
            type="date"
            clearable
            label="Fecha del evento"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn
        :disabled="!form_complete"
        :loading="loading"
        type="submit"
        color="success"
        @click="submit"
      >
        <v-icon icon="mdi-send" start></v-icon>
        enviar
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      form_complete: false,
      form: {
        name: null,
        phone: null,
        email: null,
        state: null,
        date: null,
      },
      rules: {
        required: value => !!value || 'Campo requerido',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
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
      console.log('el formulario es:', this.form)
      try {
        this.loading = true

        // const resp = await axios.post('', this.form) // test request

      } catch (error) {
        console.log(error)
      }

      this.loading = false
    },
  },
}
</script>