<template>
  <section class="relative py-24 mt-1 bg-white">
    <div class="flex flex-col items-center justify-center gap-4 mx-auto lg:flex-row nav-break:gap-28">
      <div class="flex">
        <img
          class="absolute left-0 bottom-0 z-30 w-auto opacity-50 sm:opacity-100"
          src="../../assets/images/blured-bag-left-hero.png"
          alt="Decorative Bag"
        />
        <img
          class="absolute right-0 bottom-0 z-30 w-auto opacity-50 sm:opacity-100"
          src="../../assets/images/blured-bag-right-hero.png"
          alt="Decorative Bag"
        />
        <img
          class="relative z-10 w-auto mx-auto lg:mx-0"
          src="../../assets/images/girl-hero-section.png"
          alt="Main Image"
        />
      </div>

      <div class="flex flex-col items-start z-40 min-h-full">
        <img class=" h-20" src="../../assets/icons/hero-logo.svg" alt="Decorative Bag" />
        <p class="my-14 mx-auto mt-4 text-center text-2xl text-fontColor font-ptsansRegular lg:text-start nav-break:text-[42px]">
          Health and effective <br /><span class="font-ptsansBold font-bold">slimming</span>
        </p>
      </div>
    </div>

    <div>
      <Pugination />
      <img
        class="absolute bottom-0 left-1/2 z-40 transform -translate-x-1/2 hidden lg:block"
        src="../../assets/images/scroll-down-bag.png"
        alt="Decorative Bag"
      />
    </div>
  </section>
</template>

<script setup>
import Pugination from '../elements/pug-arrows.vue';
</script>
