<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        class="pa-2"
        sm="5"
        md="6"
      >
        <MainImage />
        <FeaturesInfo />
      </v-col>
      <v-col sm="5" md="6">
        <MainInfo />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MainImage from "@/components/MainImage.vue"
import MainInfo from "@/components/MainInfo.vue"
import FeaturesInfo from "@/components/FeaturesInfo.vue"

export default {
  components: {
    MainImage,
    MainInfo,
    FeaturesInfo
  },
  data() {
    return {
      
    }
  },
}
</script>