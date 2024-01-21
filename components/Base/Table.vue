<script lang="ts" setup>
defineProps<{
    header: string[];
}>();
</script>

<template>
    <div class="wrapper overflow-auto">
        <table class="table w-100 border-none text-nowrap bg-slate-one">
            <thead class="bg-slate-four">
                <tr>
                    <th v-for="head in header" :key="head" class="text-left col-white">
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
        @include font(1.5rem, 100%);
        border-collapse: collapse;

        td,
        th {
            padding: 2rem;
            height: 5rem;
            @include font(1.5rem, 100%);
        }

        td {
            @include font(1.5rem, 100%);
        }

        tr {
            color: var(--grey);
            border-right: 0.1rem solid var(--slate-two);
            border-bottom: 0.1rem solid var(--slate-two);
            border-left: 0.1rem solid var(--slate-two);

            &:nth-child(even) {
                background-color: var(--slate-three);
            }
        }
    }
}
</style>
