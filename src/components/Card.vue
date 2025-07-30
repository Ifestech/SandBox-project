<template>
    <div class="flex items-start space-x-4 max-w-md mx-[60px]">
        <img :src="icons" alt="" class="w-13 h-13 mt-1 text-bold pr-3" />
        <div class="flex flex-col">
          <h1 class="text-[#343f52] font-bold text-[20px] mb-1 font-arial text-bold pb-3">{{ heading }}</h1>
          <p class="text-gray-600  text-[15px]    leading-relaxed font-arial text-bold">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['icons', 'heading', 'desc']);
</script>

<style scoped>

</style>