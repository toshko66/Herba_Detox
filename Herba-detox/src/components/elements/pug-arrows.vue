<template>
    <div id="ArrowParent" class="flex flex-col lg:flex-row items-center mx-auto justify-center gap-20 cursor-pointer pb-4">
        <div class="relative flex flex-col items-center mt-8">
            <div class="arrows flex flex-col items-center space-y-1">
                <div class="arrow w-2.5 h-2.5 border-b-2 border-r-2 border-fontColorSecondary transform rotate-45">
                </div>
                <div class="arrow w-2.5 h-2.5 border-b-2 border-r-2 border-fontColorSecondary transform rotate-45">
                </div>
                <div class="arrow w-2.5 h-2.5 border-b-2 border-r-2 border-fontColorSecondary transform rotate-45">
                </div>
            </div>
            <p class="text-sm font-bold text-fontColorSecondary mt-2">LEARN MORE</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.arrow {
    animation: arrow-move 1s infinite;
    animation-play-state: paused;
}

.arrow:nth-child(1) {
    animation-delay: 0s;
}

.arrow:nth-child(2) {
    animation-delay: 0.2s;
}

.arrow:nth-child(3) {
    animation-delay: 0.4s;
}

#ArrowParent:hover .arrow {
    animation-play-state: running;
}

@keyframes arrow-move {

    0%,
    100% {
        transform: translateY(0) rotate(45deg);
        opacity: 1;
    }

    50% {
        transform: translateY(5px) rotate(45deg);
        opacity: 0.5;
    }
}
</style>