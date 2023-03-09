<template>
  <v-container class="text-center text-h4 text-grey-darken-2 mx-auto">
    <Presentation />
    <WhoIs />
    <v-divider class="mt-6 mb-6"></v-divider>
    <Subtitle />
    <Zone />
  </v-container>
</template>
<script>
import Presentation from '@/components/About/Presentation.vue'
import WhoIs from '@/components/About/WhoIs.vue'
import Subtitle from '@/components/About/Subtitle.vue'
import Zone from '@/components/About/Zone.vue'

export default {
  components: {
    Presentation,
    WhoIs,
    Subtitle,
    Zone
  }
}
</script>