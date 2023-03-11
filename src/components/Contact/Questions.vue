<template>
  <v-container class="text-h4 text-grey-darken-3 mx-auto py-10">
    <v-divider></v-divider>
    <div class="text-center pa-4">
      <p class="text-h3">Preguntas frecuentes</p>
      <p class="text-h6">(Si aun tienes dudas contactanos en alguno de nuestros medios para ayudarte).</p>
    </div>
    <div v-for="(data, i) in information" class="pa-2">
      <p class="text-h5 font-weight-bold pa-4">{{data.question}}</p>
      <p class="text-h5 px-8">{{data.answer}}</p>
    </div>
    <v-divider class="my-6"></v-divider>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      information: [
        {
          question: "¿Momentos mágicos cuenta con salón de fiestas?",
          answer: "El servicio que ofrecemos para nuestros super clientes es a domicilio. Llevamos todo hasta las puertas de su hogar"
        },
        {
          question: "¿Ofrecen sus servicios en cualquier estado de la república mexicana?",
          answer: "Aunque nos encanta ir a dónde nuestros clientes nos inviten, nuestra zona frecuente de operación es Tuxtla Gutierrez"
        },
        {
          question: "¿Con qué formas de pago cuentan?",
          answer: "Efectivo, transferencias y/o depositos"
        },
      ]
    }
  },
}
</script>