<template>
  <button :class="computedClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    computedClasses() {
      const variantClasses = {
        primary: 'w-44 bg-white border-2 border-primary text-primary font-bold font-ptsansBold  hidden nav-break:block py-2 ml-5 lg:ml-10 hover:scale-105 hover:shadow-lg focus:outline-none transition-transform transform duration-300 ease-in-out',
        secondary: ' bg-primary border-2 border-primary text-white font-bold  font-ptsansBold px-12 py-2 h-fit hover:scale-105 hover:shadow-lg focus:outline-none transition-transform transform duration-300 ease-in-out',
        navButton: 'w-44 bg-white border-2 border-primary text-primary font-bold font-ptsansBold ml-5 lg:ml-10 hover:scale-105 hover:shadow-lg focus:outline-none transition-transform transform duration-300 ease-in-out',
      };

      return [
        'rounded-full',
        variantClasses[this.variant]
      ];
    }
  }
};
</script>

<style scoped>
/* Additional styling specific to this component */
</style>