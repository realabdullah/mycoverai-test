<script lang="ts" setup>
defineProps<{
    navs: {
        name: string;
        path: string;
    }[];
}>();

defineEmits(["closeSidebar"]);
</script>

<template>
    <aside class="sidebar position-fixed d-flex flex-column bg-white z-2">
        <NuxtLink to="/" class="logo col-black">
            Company
        </NuxtLink>

        <nav class="sidebar__navs d-flex flex-column">
            <NuxtLink v-for="nav in navs" :key="nav.name" :to="nav.path" class="d-flex items-center content-between w-100 col-deep-grey" :class="{ 'bg-blue col-white': $route.path === nav.path }">
                <div class="link d-flex items-center">
                    <IconLoader :name="nav.name.toLowerCase()" />
                    {{ nav.name }}
                </div>
                <IconLoader name="arrow-right" />
            </NuxtLink>
        </nav>
    </aside>
    <Transition name="fade" mode="out-in" appear>
        <div class="modal-overlay" @click="$emit('closeSidebar')" />
    </Transition>
</template>

<style lang="scss" scoped>
.sidebar {
    top: 0;
    left: 0;
    bottom: 0;
    padding: 2.8rem;
    width: 30rem;
    @include gap(6.5rem);

    @include respond-to("medium") {
        width: 24rem;
        padding: 3rem 1rem;
    }

    .logo {
        @include font(2.6rem, 100%);
    }

    &__navs {
        @include gap(3rem);

        a {
            padding: 1.3rem 1.1rem;
            @include gap(1.4rem);
            border-radius: 0.8rem;

            .link {
                @include gap(1.4rem);
            }
        }
    }
}

.modal-overlay {
    @include respond-to("medium") {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: #c6c8c985;
    }
}
</style>
