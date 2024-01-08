<template>
  <!-- page container -->
  <div class="bg-slate-900 text-white py-3 px-5 w-screen h-screen font-mono">
    <!-- the tabbybox, don't touch -->
    <pre style="line-height: 1;">
  ^ ^________
 /'w'--\ ** /|
+----------+ |  ▀█▀ ▄▀█ █▄▄ █▄▄ █▄█ █▄▄ █▀█ ▀▄▀
| >_       | /  ░█░ █▀█ █▄█ █▄█ ░█░ █▄█ █▄█ █░█
+----------+       
  </pre>
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

     <div class="w-screen flex justify-center items-center">
      <img src="~/assets/sun.svg" alt="" class="w-40 h-40 animate-spin">
     </div>



    <!-- Footer -->
    <div class="fixed bottom-0 left-0 w-full text-center py-3">
      <span class="mx-2 text-xs text-slate-400">tabbybox.art (c) 2024 </span>
    </div>
  </div>
</template>
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