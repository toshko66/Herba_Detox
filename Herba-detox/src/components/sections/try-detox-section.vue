<template>
    <section class="w-full py-20 bg-secondary">
        <div
            class="flex flex-col items-center justify-center max-w-screen-desktop gap-10 mx-auto px-4 nav-break:flex-row">
            <div
                class="relative flex flex-col px-6 py-8 bg-white rounded-3xl shadow-xl max-w-xl md:flex-row sm:px-10 sm:py-16">
                <div class="relative w-full md:w-64">
                    <img src="../../assets/images/try-detox-bag.png" alt="detox bag"
                        class="absolute w-2/3 bottom-0 left-1/2 transform -translate-x-1/2 md:w-auto md:bottom-[-2rem] md:transform-none md:left-0" />
                </div>
                <div class="flex flex-col items-start justify-center mt-10 md:mt-0">
                    <ul class="flex gap-3 pb-5 pl-2">
                        <li><img class="h-6" src="../../assets/icons/try-detox-14-days.svg" alt="14 days" /></li>
                        <li><img class="h-6" src="../../assets/icons/try-detox-delivery.svg" alt="delivery" /></li>
                        <li><img class="h-7" src="../../assets/icons/try-detox-payment.svg" alt="payment" /></li>
                    </ul>
                    <div>
                        <img class="h-8 pb-2 pl-1" src="../../assets/icons/Footer/logo.svg" alt="" />
                        <p class="pl-1 text-sm font-ptsansBold font-bold">
                            Pack for 1 month <span class="text-gray-300">/ 170gr.</span>
                        </p>
                        <p class="pr-2 text-[40px] font-bold">109.00 лв.</p>
                        <i class="pl-1 line-through text-customBrown">119.60 лв.</i>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col items-center justify-center max-w-md px-4 text-center nav-break:items-start md:px-0 nav-break:text-start">
                <h3 class="mb-7 text-2xl font-ptsansRegular">
                    Изпробвай <span class="font-ptsansBold font-bold">Detox</span>
                </h3>
                <p class="mb-7 font-ptsansRegular">
                    Detox подпомага нормалното протичане на метаболизма и обмяната на веществата, стимулира работата на
                    храносмилателната и отделителната система.
                </p>
                <Button variant="secondary">КУПИ СЕГА</Button>
            </div>
        </div>
    </section>
</template>

<script setup>
import Button from '../elements/button-element.vue';
</script>

<style scoped></style>