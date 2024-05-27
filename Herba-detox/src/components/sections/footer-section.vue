<template>
    <footer class="">
        <div class="flex flex-col items-center w-full justify-evenly space-y-8">
            <div class="flex flex-col items-center pt-10">
                <p class="font-ptsansRegular text-center text-[10px] pb-4 mx-auto">
                    * Резултатите от приема на Detox чай са индивидуални за различните потребители и зависят от техните
                    физически показатели и навици!
                </p>
                <NavLinks :links="links" class="flex flex-wrap gap-10 justify-center md:justify-start  text-sm text-gray-300 mx-auto" />
            </div>
            
            <div>
                <p class="text-center font-ptsansRegular font-bold text-sm mb-2">Начин на плащане</p>
                <LogoList :logos="logos" Class="flex flex-wrap justify-center md:justify-start gap-4" />
            </div>

            <div>
                <p class="text-center font-ptsansRegular font-bold text-sm mb-2">Начин на плащане</p>
                <LogoList :logos="LogosRowTwo" Class="flex flex-wrap justify-center md:justify-start gap-4" />
            </div>

            <div>
                <LogoList :logos="SocialLogos" Class="flex flex-wrap justify-center md:justify-start gap-4  scursor-pointer" />
            </div>

            <p class="font-ptsansRegular text-gray-300 text-center text-sm">Copyright © 2018. All rights reserved.</p>
        </div>
        
    </footer>


</template>

<script setup>
import NavLinks from '../elements/nav-links.vue';
import LogoList from '../elements/logo-list.vue';

const links = [
    { name: 'Начало', href: '/' },
    { name: 'Поръчай', href: '/' },
    { name: 'Въпроси', href: '/' },
    { name: 'Доставка', href: '/' },
    { name: 'Плащане', href: '/' },
    { name: 'Лични данни', href: '/' },
    { name: 'Общи условия', href: '/' },
];

const logos = [
    { src: 'src/assets/icons/Footer/mastercard.svg' },
    { src: 'src/assets/icons/Footer/maestro.svg' },
    { src: 'src/assets/icons/Footer/visa.svg' },
    { src: 'src/assets/icons/Footer/diners-club-pay-logo.svg' },
    { src: 'src/assets/icons/Footer/Verified-by-visa-logo.svg' },
    { src: 'src/assets/icons/Footer/MasterCard_SecureCode.svg' },
    { src: 'src/assets/icons/Footer/paypal.svg' },
    { src: 'src/assets/icons/Footer/norton-by-symantec-vector-logo.svg' },
];

const LogosRowTwo = [
    { src: '/src/assets/icons/Footer/DHL_Logo.svg' },
    { src: '/src/assets/icons/Footer/brt-it.svg' },
    { src: '/src/assets/icons/Footer/speedy.svg' },
];

const SocialLogos = [
    { src: '/src/assets/icons/Footer/facebook-logo.svg' },
    { src: '/src/assets/icons/Footer/instagram.svg' },
    { src: '/src/assets/icons/Footer/google-plus.svg' },
]
</script>

<style scoped></style>