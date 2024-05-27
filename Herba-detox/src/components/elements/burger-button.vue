<template>
    <div class="flex nav-break:hidden">
      <button @click="$emit('toggleMenu')" class="text-smallFont hover:text-primary focus:outline-none">
        <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  </script>
  