<template>
  <!-- page container -->
  <div class="">





    <!-- Actual content goes here -->
    <!-- <ClientOnly>
      <p>{{ quote() }}</p>
    </ClientOnly> -->

    <span class="text-4xl absolute animate-ping">We make loud music</span>
    <span class="text-4xl relative">We make loud music</span>


    <!-- <p class="h-1 w-1 animate-spin">e</p>
     -->

    <div class="w-screen flex tems-center">
      <!-- <a href="https://www.youtube.com/watch?v=VRgjHQ5GeW0&list=PLAtYPsQONdO1qPntI33WcPTX6sOHunFqZ&index=1"
        target="_blank" rel="noopener noreferrer"> -->
        <img src="~/assets/sun.svg" id="shakunetu" alt="Become MASS MAD" title="click to become DJ Mass MAD Izm*"
          class="w-40 h-40 cursor-pointer" @click="yo" @dblclick="learnScratch">
      <!-- </a> -->
    </div>
    <p class="text-xs text-gray-400">Yes, it spins at 33 rpm, try touching it</p>

    <p>{{ quote() }}</p>


    <!-- Footer -->

  </div>
</template>

<script setup>
const quotePool = [
  'hello, i like dubstep.',
  'headshot GG noob!',
  'i.e., the tissuebox',
  'we make loud music',
  'under heavy construction work',
  '33/45'
]
function quote() {
  const i = Math.floor(Math.random() * quotePool.length)
  return quotePool[i];
}

async function yo(){
  const yo = await import("~/assets/yo.mp3")
  const audio = new Audio(yo.default)
  audio.play()
}

function learnScratch(){
  window.open("https://www.youtube.com/watch?v=VRgjHQ5GeW0&list=PLAtYPsQONdO1qPntI33WcPTX6sOHunFqZ&index=1","_blank")
}
</script>

<style>
#shakunetu {
  animation: spin 1.8000001s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359.99999deg);
  }
}
</style>