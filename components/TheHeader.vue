<script lang="ts" setup>
defineEmits(["openSidebar"]);
</script>

<template>
    <header class="header w-100 d-flex items-center content-between">
        <div class="d-flex items-center" style="gap: 1rem">
            <button class="close d-none" @click="$emit('openSidebar')">
                <IconLoader name="hamburger" />
            </button>
            <h3 class="header__title text-capitalize">
                {{ $route.path.replace("/", "") }}
            </h3>
        </div>

        <div class="header__ctas d-flex items-center">
            <button><IconLoader name="message" /></button>
            <button><IconLoader name="notification" /></button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    .close {
        @include respond-to("medium") {
            display: block
        }
    }

    &__title {
        @include font(2.4rem, 100%);
    }

    &__ctas {
        @include gap(2rem);

        button {
            transition: color 0.5s ease-in;

            &:hover {
                color: var(--blue);
            }
        }
    }
}
</style>
