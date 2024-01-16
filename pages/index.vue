<template>
  <!-- page container -->
  <div class="w-screen h-screen min-w-max bg-slate-900 text-white py-3 px-5 font-mono">
    <!-- the tabbybox, don't touch -->
    <div class="flex flex-wrap">
      <pre style="line-height: 1;">
  ^ ^________
 /'w'--\ ** /|
+----------+ |
| >_       | /
+----------+  
  </pre>
  <pre style="line-height: 1;" class="mt-5 ml-3">
▀█▀ ▄▀█ █▄▄ █▄▄ █▄█ █▄▄ █▀█ ▀▄▀
░█░ █▀█ █▄█ █▄█ ░█░ █▄█ █▄█ █░█
  </pre>
    </div>


    <!-- Navbar -->

    <nav>
      $ <span class="text-green-300">ls </span><br/>
      <a href="https://tabbybox.art" class="mr-2 text-teal-400">home</a>
      <a href="https://tabbybox.art/about" class="mx-2 text-blue-300">lo-res</a>
      <a href="https://github.com/tabbybox" class="mx-2 text-blue-300">repo</a>
      <!-- <span class="mx-2 my-1">
        "home"
      </span>
      <span class="mx-2 my-1">
        "about"
      </span> -->

    </nav>
    <hr class="my-2" />

    <!-- Actual content goes here -->
    <!-- <ClientOnly>
      <p>{{ quote() }}</p>
    </ClientOnly> -->

    <span class="text-4xl absolute animate-ping">We make loud music</span>
    <span class="text-4xl relative">We make loud music</span>


    <!-- <p class="h-1 w-1 animate-spin">e</p>
     -->

     <div class="w-screen flex tems-center">
      <img src="~/assets/sun.svg" id="shakunetu" alt="" class="w-40 h-40">
     </div>
     <p class="text-xs text-gray-400">Yes, it spins at 33 rpm</p>



    <!-- Footer -->
    
  </div>
</template>
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
<script setup>
const quotePool = [
  'hello, i like dubstep.',
  'headshot GG noob!',
  'i.e., the tissuebox',
  'we make loud music',
  'under heavy construction work',
  '404 is not an error, it\'s your skill issue'
]
function quote() {
  const i = Math.floor(Math.random() * quotePool.length)
  return quotePool[i];
}
</script>