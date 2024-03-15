<template>
    Welcome to lo-tech division
    <p>{{ sum }}</p>
    <button @click="addNumber">some number</button>
</template>

<script lang="ts" setup>
const someArr = ref([1,2,3])

let sum = computed(() => {
    return someArr.value.reduce((a, b) => a + b, 0)
})

function addNumber(){
    someArr.value.push(someArr.value.length)
}
</script>