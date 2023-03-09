<template>
  <div
    v-for="(data, i) in info"
  >
    <p :class="data.class">{{data.title}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [
        {
          title: "Who we are?",
          class: "py-4"
        },
        {
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          class: "py-4 text-h5"
        },
      ]
    }
  },
}
</script>