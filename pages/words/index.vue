<template>
    <h2 class="text-2xl">WORDS</h2>

    <ul class="mt-4">
        <li v-for="post in result" class="list-disc ml-4">
            {{ post.title }} - {{ post.authors }}</li>
    </ul>
</template>

<script lang="ts" setup>
interface Post {
    title: string
    content: string
    created: string
    updated: string
    id: string
    authors: string
    hotLevel: number,
    basedLevel: number,
    nsfw: boolean
}
import { usePbStore } from '#imports';
const pbStore = usePbStore()

const result = ref<Post[]>([])

onMounted(async () => {
    result.value = await pbStore.pb.collection("posts").getFullList()
})

</script>