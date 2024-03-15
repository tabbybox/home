<template>
  <div class="h-screen bg-slate-900 text-white py-3 px-5 font-mono bg-cover">
    <div>


      <!-- the tabbybox, don't touch -->
      <div class="flex flex-wrap">
        <pre style="line-height: 1;">
  ^ ^________
 /'w'--\ ** /|
+----------+ |
| >_       | /
+----------+  
  </pre>
        <!-- <pre style="line-height: 1;" class="mt-5 ml-3">
▀█▀ ▄▀█ █▄▄ █▄▄ █▄█ █▄▄ █▀█ ▀▄▀
░█░ █▀█ █▄█ █▄█ ░█░ █▄█ █▄█ █░█
  </pre> -->
      </div>
      <!-- Navbar -->

      <nav>
        $ <span class="text-green-500">ls </span><br />
        <NuxtLink to="/" class="mr-2 text-teal-400">home</NuxtLink>
        <NuxtLink to="/sound" class="mx-2 text-blue-300">sound</NuxtLink>
        <NuxtLink to="/tech" class="mx-2 text-blue-300">tech</NuxtLink>
        <NuxtLink to="/words" class="mx-2 text-blue-300">words</NuxtLink>
        <NuxtLink to="https://github.com/tabbybox" class="mx-2 text-teal-400" target="_blank">repo</NuxtLink>
        <!-- <span class="mx-2 my-1">
        "home"
      </span>
      <span class="mx-2 my-1">
        "about"
      </span> -->

      </nav>
      <hr class="my-2" />
      <NuxtPage></NuxtPage>
      <div class="fixed bottom-0 left-0 w-full text-center py-3">
        <span class="mx-2 text-xs text-slate-400">tabbybox.art (c) 2024</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// Solely here to stop the flash
// const loaded = ref(false)
// onMounted(() => {
//   loaded.value = true
// })


</script>