<template>
  <v-container class="text-center text-h4 text-grey-darken-3">
    <div>
      <v-row>
        <v-col>
          <p>Envienos un e-mail</p>
          <div class="py-16">
            <v-icon size="x-large" icon="mdi-rotate-180 mdi-weather-windy"></v-icon>
            <v-icon size="x-large" icon="mdi-gmail"></v-icon>
          </div>
          <p class="text-subtitle-1 mx-16 px-16">Envienos un mensaje de correo electrónico si tienes alguna pregunta o deseas cotizar tu evento, nosotros nos comunicaremos en breve</p>
        </v-col>
        <v-col>
          <p class="text-subtitle-2 text-left mx-16">Tu mensaje será enviado a example@hotmail.com, o si gustas puedes usar la dirección desde tu app</p>
          <Form />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import Form from '@/components/Contact/Form.vue'

export default {
  components: {
    Form
  }
}
</script>