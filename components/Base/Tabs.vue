<script lang="ts" setup>
const { tabs } = defineProps<{
    tabs: string[];
}>();

const activeTab = defineModel<string>();
</script>

<template>
    <div class="tabs d-flex">
        <button
            v-for="tab in tabs" :key="tab" class="bg-transparent weight-medium"
            :class="activeTab === tab ? 'col-white' : 'col-slate-five'" @click="activeTab = tab"
        >
            {{ tab }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.tabs {
    @include gap(1.3rem);

    button {
        @include font(1.6rem, 1.6rem);
        padding: 0.8rem 0;
    }
}
</style>
