<script lang="ts" setup>
defineProps<{
    text: string;
}>();
</script>

<template>
    <div class="empty w-100 bg-slate-three d-flex items-center content-center">
        <p class="col-white">
            {{ text }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.empty {
    height: 40rem;
    padding: 2rem;
    margin: 0 auto;

    p {
        @include font(2rem, 100%);
    }
}
</style>
