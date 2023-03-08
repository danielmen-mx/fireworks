<template>
  <v-sheet class="text-h4 py-4 px-6 text-center font-weight-bold">Show animado para Baby Shower, Fiestas de Cumpleaños y más.</v-sheet>
  <v-divider></v-divider>
  <v-sheet class="py-4 px-6">
    <v-list-subheader class="text-h6">Paquete incluye:</v-list-subheader>
    <v-list lines="one" disabled>
      <v-list-item
        v-for="item in content"
        :key="item"
        :title="item"
      >
      </v-list-item>
    </v-list>
  </v-sheet>
  <v-divider></v-divider>
</template>
<script>
export default {
  data() {
    return {
      content: [
        'Animadora',
        'DJ (Auxiliar)',
        'Equipo de sonido',
        'Concursos dinámicos',
        'Apertura de regalos',
        '2 horas de animación',
        'Diversión 100% garantizada'
      ]
    }
  },
}
</script>