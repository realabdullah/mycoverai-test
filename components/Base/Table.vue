<script lang="ts" setup>
defineProps<{
    header: string[];
}>();
</script>

<template>
    <div class="wrapper overflow-auto">
        <table class="table w-100 border-none text-nowrap bg-transparent">
            <thead>
                <tr>
                    <th v-for="head in header" :key="head" class="text-left bg-grey col-deep-grey">
                        {{ head }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <slot />
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
.wrapper {
    .table {
        border-radius: 0.5rem;
        @include font(1.5rem, 100%);

        td,
        th {
            padding: 2rem;
            height: 5rem;
            @include font(1.5rem, 100%);
        }

        td {
            border-right: 0.1rem solid var(--white);
            @include font(1.5rem, 100%);
        }
    }
}
</style>
