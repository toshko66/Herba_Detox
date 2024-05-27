<template>
  <section class="py-20">
    <h3 class="my-14 mx-auto text-center text-2xl nav-break:text-[40px] text-smallFont leading-relaxed font-ptsansRegular">
      Причини да консумираш <br> 
      <span class="font-ptsansBold font-bold">Detox</span>
    </h3>
    <div class="flex flex-wrap justify-center gap-5">
      <Card
        v-for="(card, index) in cards" 
        :key="index" 
        :title="card.title" 
        :text="card.text" 
        :image="card.image"
        :pmargin="card.pmargin" 
      />
    </div>
  </section>
</template>


<script>
import Card from '../elements/benefit-card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          text: 'СЪДЪРЖА <span class="font-bold">100%</span> ЧИСТИ БИЛКИ',
          image: '/src/assets/icons/why-to-consume-leaf.svg',
          pmargin: 'mx-10'
        },
        {
          text: ' <span class="font-bold">ЗАСИЛВА</span> И  <span class="font-bold">УКРЕПВА</span>  ИМУННАТА СИСТЕМА',
          image: '/src/assets/icons/why-to-consume-muscle.svg',
          pmargin: 'mx-10'
        },
        {
          text: 'БОГАТ НА ВАЖНИ <span class="font-bold">ВИТАМИНИ</span> И  <span class="font-bold">МИНЕРАЛИ</span>',
          image: '/src/assets/icons/why-to-consume-vitamins.svg',
          pmargin: 'mx-4'
        },
        {
          text: ' <span class="font-bold">ХИДРАТИРА И ИЗГЛАЖДА</span>  КОЖАТА',
          image: '/src/assets/icons/why-to-consume-skin-treatment.svg',
          pmargin: 'mx-4'
        }
      ]
    };
  }
}
</script>

