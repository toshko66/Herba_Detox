<template>
  <div class="nav-break:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <template v-for="link in links" :key="link.name">
      <a :href="link.href" class="block font-ptsansRegular font-bold ml-7 text-smallFont hover:text-primary">{{ link.name }}</a>
    </template>
    <slot></slot>
    <ButtonElement variant="navButton">КУПИ СЕГА</ButtonElement>
  </div>
</template>

<script setup>
import ButtonElement from '../elements/button-element.vue';

defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>
