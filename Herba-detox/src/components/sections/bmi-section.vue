<template>
  <section class="relative flex flex-col items-center py-40 max-w-screen-desktop mx-auto nav-break:items-start">
    <div class="relative flex flex-col items-center justify-center bg-div-pattern bg-cover bg-center bg-no-repeat mx-auto min-h-96 max-w-5xl rounded-3xl nav-break:items-start nav-break:justify-normal nav-break:mx-6 small-desktop:ml-28 md:min-h-full px-4 md:px-0 text-center nav-break:text-start  after:content-[''] after:z-0 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-overlay after:rounded-3xl ">
      <div class="relative w-2/3 max-w-[75%] h-full xl:w-3/4 pl-0 py-6 nav-break:pt-14 nav-break:pl-20 z-20">
        <h3 class="mb-6 text-2xl text-smallFont font-ptsansBold z-40">
          Разбери <span class="text-2xl text-smallFont font-bold">индекс на телесна маса (BMI)</span>
        </h3>
        <p class="mb-8 text-smallFont font-ptsansRegular">
          BMI (ИТМ) се изчислява спрямо вашите пол, години, ръст и тегло. Това показва дали според вашите физически показатели имате Поднормено, Нормално, Наднормено тегло или сте със Затлъстяване.
        </p>
        <ButtonElement variant="secondary" class="custom-break:px-0 text-sm md:text-md">
          ОТВОРИ КАЛКУЛАТОРА
        </ButtonElement>
      </div>
    </div>
    <img src="../../assets/images/bmi-calculator-man.png" alt="man" class="relative nav-break:absolute top-16 nav-break:right-0 desktop:right-20 mx-auto">
  </section>
</template>

<script setup>
import ButtonElement from '../elements/button-element.vue';
</script>

