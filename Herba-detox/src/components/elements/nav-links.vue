<template>
    <div :class="customClass">
      <template v-for="link in links" :key="link.name">
        <a :href="link.href" class=" hover:text-primary  font-ptsansBold ">{{ link.name }}</a>
      </template>
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  defineProps({
    customClass: String,
    links: {
      type: Array,
      required: true,
    },
  });
  </script>
  