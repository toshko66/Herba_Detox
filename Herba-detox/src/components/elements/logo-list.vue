<template>
    <div :class="customClass">
      <img v-for="logo in logos" :key="logo.src" :src="logo.src" alt="logo">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  defineProps({
    customClass: {
      type: String,
      default: ''
    },
    logos: {
      type: Array,
      required: true,
    }
  });
  </script>
  
  <style scoped>
  .logo-image {
    max-width: 100px; /* Adjust the size as needed */
    margin: 0.5rem;
  }
  </style>
  