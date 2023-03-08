<template>
  <v-card-text class="py-4 px-6">
    <v-row>
      <v-col>
        <p class="text--primary mb-2">Precio:</p>
        <p class="text-h4">$ 2,500 MXN</p>
      </v-col>
      <v-col>
        <p class="text--primary mb-2">Duración del servicio:</p>
        <p class="text-h4">2 Horas</p>
      </v-col>
    </v-row>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-text class="py-4 px-6">
    <p>Formas de pago:</p>
    <v-list
      :items="payments"
    >
    </v-list>
  </v-card-text>
  <v-divider></v-divider>
</template>
<script>
export default {
  data() {
    return {
      payments: [
        {
          title: "Depósito bancario o transferencia",
          props: {
            prependIcon: "mdi-credit-card"
          }
        },
        {
          title: "Efectivo",
          props: {
            prependIcon: "mdi-cash"
          }
        }
      ]
    }
  },
}
</script>