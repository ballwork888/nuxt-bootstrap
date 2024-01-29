
<script setup lang="ts">

const lotteries = [
  { name: '/images/lotto/Lotto-banner1.png' },
  { name: '/images/lotto/Lotto-banner2.png' },
  { name: '/images/lotto/Lotto-banner3.png' },
  { name: '/images/lotto/Lotto-banner4.png' },
  { name: '/images/lotto/Lotto-banner5.png' }

]
</script>

<template>
  <div class="row mt-2 d-none d-lg-block">

      <carousel :itemsToShow="4" :wrapAround="true" :transition="500" :autoplay="1500">
        <slide v-for="slide in lotteries" :key="slide">

          <div class="card carousel__item">
            <NuxtImg :src="slide.name" class="rounded" />

          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
 
  </div>

  <div class="row mt-2 d-block d-lg-none">

    <carousel :itemsToShow="1.7" :wrapAround="true" :transition="500" :autoplay="1500">
      <slide v-for="slide in lotteries" :key="slide">

        <div class="card carousel__item">
          <NuxtImg :src="slide.name" class="rounded" />

        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

</div>
</template>


<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>