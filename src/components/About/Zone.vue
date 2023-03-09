<template>
  <div
    v-for="(text, i) in texts"
    class="py-2" 
  >
    <span :class="text.class">{{text.title}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      texts: [
        {
          title: "Ciudad de Tuxtla Gutierrez & alrededores(...)",
          class: "text-grey-darken-3 mx-16"
        },
        {
          title: "Momentos de diversión y animación para ese momento especial en tu vida para baby shower y cumpleaños.",
          class: "text-grey-darken-2 mx-16 text-h6 font-italic"
        }
      ]
    }
  },
}
</script>