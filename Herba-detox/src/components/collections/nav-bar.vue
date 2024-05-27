<template>
    <nav class="fixed top-0 left-0 z-50 w-full bg-white border-b-2 border-gray-200">
      <div class="max-w-screen-desktop mx-auto px-10 sm:px-28 custom-break:px-0">
        <div class="flex justify-between h-20">
          <Logo />
          <div class="flex items-center">
            <NavLinks :links="links" class="hidden space-x-4 font-bold nav-break:flex font-smallFont" />
            <ButtonElement varient="primary">КУПИ СЕГА</ButtonElement>
            <BurgerButton @toggleMenu="toggleMenu" />
          </div>
        </div>
      </div>
      <Transition
        enter-active-class="transition transform duration-300 ease"
        leave-active-class="transition transform duration-300 ease"
        enter-from-class="-translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="-translate-x-full opacity-0"
      >
        <MobileMenu v-if="isOpen" :links="links" />
      </Transition>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Logo from '../elements/logo.vue';
  import NavLinks from '../elements/nav-links.vue';
  import BurgerButton from '../elements/burger-button.vue';
  import MobileMenu from './burger-menu.vue';
  import ButtonElement from '../elements/button-element.vue';
  
  const isOpen = ref(false);
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
  
  const links = [
    { name: 'За Чая', href: '/' },
    { name: 'Програми', href: '/' },
    { name: 'Блог', href: '/' },
    { name: 'BMI Калкулатор', href: '/' },
  ];
  </script>
  
  <style scoped></style>
  