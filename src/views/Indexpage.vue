<template>
  <div>
    <section class="min-h-[35rem] bg-cover bg-no-repeat bg-[url('@/assets/image/image.png')] flex items-center w-full">
     <div class="leading-[2rem] p-2 m-[60px]">
        <div class="">
          <h1 class="text-[#343f52] text-[4rem] leading-[4.5rem] pb-7 font-arial text-4xl font-bold">We bring solutions <br> to make life easier</h1>
          <p class="text-[1.7rem] pb-8">We are a creative company that focuses on <br> long term relationships with customers.</p>
          <a href="#" class="bg-[#343f52] p-[10px] text-white rounded-md ">Read more</a> 
        </div>
      </div>
    </section>
  </div>
  <section>
    <div class="flex justify-center mt-30 mb-2">
      <p>WHAT WE DO</p>
    </div> 
    <div class="text-[#343f52] font-arial font-bold text-4xl">
      <div class="flex justify-center">
      <h1 class=""> The service we offer is specifically</h1>
    </div>
    <div class="flex justify-center">designed to meet your needs.</div>
    </div>
  </section>

<section class="gap-8 mt-10 grid grid-cols-3">
<div v-for="data in serData" :key="data" > 
    <card :icons="data.icons" :heading="data.heading" :desc="data.desc" />
  </div>
</section>
</template>

<script setup>
import serData from '@/components/serData.js'
import Card from '@/components/Card.vue';
</script>

<style scoped></style>
