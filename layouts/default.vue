<script lang="ts" setup>
const navs = ref([{ name: "Dashboard", path: "/" }, { name: "Products", path: "/products" }]);
const hideSidebar = ref(false);
const deviceWidth = ref();

watch(() => deviceWidth.value, () => {
    if (deviceWidth.value > 768)
        hideSidebar.value = false;
});

onMounted(() => window.addEventListener("resize", () => deviceWidth.value = window.innerWidth));
onUnmounted(() => window.removeEventListener("resize", () => deviceWidth.value = null));
</script>

<template>
    <NuxtLoadingIndicator />
    <main class="d-flex items-start">
        <div v-show="!hideSidebar">
            <TheSidebar :navs="navs" @close-sidebar="hideSidebar = true" />
        </div>

        <div class="container w-100 overflow-hidden" :class="{ 'adjust-margin': !hideSidebar }">
            <TheHeader @open-sidebar="hideSidebar = false" />
            <br>
            <slot />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    .container {
        max-width: 150rem;
        margin: 0 auto;
        padding: 5rem;

        @include respond-to("medium") {
            padding: 3rem;
        }

        &.adjust-margin {
            @media screen and (min-width: 768px) {
                margin-left: 30rem;
            }
        }
    }
}
</style>
