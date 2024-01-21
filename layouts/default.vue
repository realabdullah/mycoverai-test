<template>
    <NuxtLoadingIndicator />
    <TheHeader />
    <main class="d-flex items-start">
        <slot />
    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 110rem;
    margin: 0 auto;
    padding: 5rem;

    @include respond-to("medium") {
        padding: 1.5rem;
    }
}
</style>
