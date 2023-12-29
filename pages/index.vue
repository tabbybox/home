<template>
  <!-- page container -->
  <div class="bg-slate-900 text-white p-3 w-screen h-screen font-mono">
    <!-- the tabbybox, don't touch -->
    <pre style="line-height: 1;">
  ^ ^________
 /'w'--\ ** /|
+----------+ |  ▀█▀ ▄▀█ █▄▄ █▄▄ █▄█ █▄▄ █▀█ ▀▄▀
| >_       | /  ░█░ █▀█ █▄█ █▄█ ░█░ █▄█ █▄█ █░█
+----------+       
  </pre>
    <hr class="my-2" />
    <nav>
      <!-- <span class="mx-2 my-1">
        "home"
      </span>
      <span class="mx-2 my-1">
        "about"
      </span> -->

    </nav>
    <p>{{ quote() }}</p>
  </div>
</template>
<script setup>
const quotePool = [
  'hello, i like dubstep.',
  'headshot GG noob',
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