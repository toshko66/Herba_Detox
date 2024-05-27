<template>
  <section class="flex flex-col items-center justify-evenly max-w-screen-desktop mx-auto py-20 small-desktop:flex-row gap-10">
    <div>
      <div class="w-52 h-52  sm:w-80 sm:h-80 custom-break:w-36 custom-break:h-36 md:w-[396px] md:h-[396px] lg:w-[496px] lg:h-[496px] xl:w-[596px] xl:h-[596px] shrink-1 grow-0 rounded-full bg-secondary flex items-center justify-center">
        <img src="../../assets/images/about-product-bag.png" alt="tea" class="w-2/3 h-2/3 object-contain">
      </div>
    </div>
    <div class="flex flex-col items-center small-desktop:items-start text-center small-desktop:text-left">
      <div class="flex flex-col items-center gap-2 mb-4 sm:flex-row sm:gap-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-ptsansBold mr-0 sm:mr-6">За Продукта</h2>
        <div class="flex gap-2 sm:gap-4">
          <span><img src="../../assets/icons/about-task-bowl.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8"></span>
          <span><img src="../../assets/icons/about-task-body-clock.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8"></span>
          <span><img src="../../assets/icons/about-task-detox.svg" alt="" class="w-6 h-6 sm:w-8 sm:h-8"></span>
        </div>
      </div>
      <span class="block w-full h-[0.5px] bg-black "></span>
      <div>
        <ul class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 overflow-x-auto">
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="{
              'text-black font-ptsansBold font-bold text-base border-t-4 border-solid border-primary': activeIndex === index,
              'text-gray-400 font-ptsansBold font-bold': activeIndex !== index
            }"
            class="py-2 sm:py-4 cursor-pointer whitespace-nowrap"
            @click="setActive(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mx-10 md:mx-0 md:w-[28rem] lg:w-[33rem] mt-4">
        <p class="text-smallFont font-ptsansRegular text-sm" v-html="itemTexts[activeIndex]"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: ['Прочиства и Ефектен', 'Натурален', 'Потвърден от нашите '],
      activeIndex: 0,
      itemTexts: [
        'Помага на организма да се освободи от натрупаните токсини, Спомага за усвояването на полезните вещества, Засилва имунната система и защитава от алергии, Ефикасен и здравословен метод за възвръщане на хармонията в тялото. <br> <br> <br>  Изгаря мазнините дори в най-трудните за отслабване зони. Подобрява храносмилането и нормализира метаболизма. Премахва паласките, коремните мазнини и целулита. Без нужда от диети и тежки натоварвания. Подобрява фигурата без йо-йо ефект',
        'Назначете ме ',
        'Моля'
      ],
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
/* Additional styling if needed */
</style>