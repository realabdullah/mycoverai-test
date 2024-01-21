<template>
    <header class="header w-100 d-flex items-center content-between">
        <NuxtLink class="header__logo col-white weight-bold" to="/">
            COMPANY
        </NuxtLink>

        <NuxtLink class="header__nav col-white weight-medium" to="/products">
            Products
        </NuxtLink>

        <div class="header__ctas d-flex items-center">
            <button class="col-white"><IconLoader name="message" /></button>
            <button class="col-white"><IconLoader name="notification" /></button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    height: 7rem;
    padding: 3rem;
    border-bottom: 1px solid var(--slate-two);

    &__logo {
        @include font(2.4rem, 100%);

        @include respond-to("medium") {
            @include font(2rem, 100%);
        }
    }

    &__nav {
        @include font(2rem, 100%);
    }

    &__ctas {
        @include gap(2rem);
    }
}
</style>
