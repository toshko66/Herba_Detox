<template>
  <div :class="'shadow-xl gap-10 rounded-lg hover:border-primary border-4 border-transparent flex flex-col justify-center max-w-64 h-64 ' + margin">
    <img class="h-20" :src="image" alt="Card image">
    <div :class=" pmargin"> <!-- Apply margin to the parent div -->
      <p class="text-gray-700 text-base text-center font-ptsansRegular" v-html="text"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    pmargin: {
      type: String,
      default: 'mx-0 my-0'
    },
  }
}
</script>

<style scoped>
</style>
