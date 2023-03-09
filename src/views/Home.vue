<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        class="pa-2"
        sm="5"
        md="6"
      >
        <MainImage />
        <!-- <v-divider class="my-4"></v-divider> -->
        <FeaturesInfo />
      </v-col>
      <v-col sm="5" md="6">
        <MainInfo />
        <Prices />
        <MainContact />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MainImage from "@/components/Home/MainImage.vue"
import FeaturesInfo from "@/components/Home/FeaturesInfo.vue"

import MainInfo from "@/components/Home/MainInfo.vue"
import Prices from "@/components/Home/Prices.vue"
import MainContact from "@/components/Home/MainContact.vue"

export default {
  components: {
    MainImage,
    FeaturesInfo,

    MainInfo,
    Prices,
    MainContact
  },
  data() {
    return {
      
    }
  },
}
</script>