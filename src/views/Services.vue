<template>
  <EventsTitle />
  <Carousel />
  <InformationEvents />
</template>
<script>
import EventsTitle from "@/components/Services/EventsTitle.vue"
import InformationEvents from "@/components/Services/InformationEvents.vue"
import Carousel from "@/components/Services/Carousel.vue"

export default {
  components: {
    EventsTitle,
    InformationEvents,
    Carousel
  }
}
</script>