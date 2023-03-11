<template>
  <ContactTitle />
  <ContactSources />
  <Questions />
  <SocialMedia />
  <Email />
</template>
<script>
import ContactTitle from '@/components/Contact/ContactTitle.vue'
import ContactSources from '@/components/Contact/ContactSources.vue'
import Questions from '@/components/Contact/Questions.vue'
import SocialMedia from '@/components/Contact/SocialMedia.vue'
import Email from '@/components/Contact/Email.vue'

export default {
  components: {
    ContactTitle,
    ContactSources,
    Questions,
    SocialMedia,
    Email
  }  
}
</script>