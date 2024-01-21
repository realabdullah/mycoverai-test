<script lang="ts" setup>
interface Filter {
    id: string;
    name: string;
}

const { filters } = defineProps<{
    filters: Filter[];
}>();

const showFilters = ref(false);

const selectedFilters = defineModel<string[]>({ default: [] });

function selectFilter(filter: string) {
    showFilters.value = false;
    if (!selectedFilters.value.includes(filter))
        selectedFilters.value.push(filter);
    else selectedFilters.value = selectedFilters.value.filter(fltr => fltr !== filter);
};
</script>

<template>
    <div class="filter d-flex items-center">
        <template v-if="selectedFilters.length > 0">
            <button v-for="selectedFilter in selectedFilters.slice(0, 3)" :key="selectedFilter" class="filter__selected bg-white col-black d-flex items-center" @click="selectFilter(selectedFilter)">
                {{ selectedFilter }} <IconLoader name="close" />
            </button>
            <button v-if="selectedFilters.length > 3" class="filter__selected bg-white col-black d-flex items-center" @click="showFilters = !showFilters">
                <IconLoader name="more" />
            </button>
        </template>

        <div class="position-relative">
            <button class="filter__cta d-flex items-center bg-white col-black" @click="showFilters = !showFilters">
                <IconLoader name="filter" /> Filters
            </button>

            <Transition name="fade" mode="out-in" appear>
                <div v-show="showFilters" class="filter__options d-flex flex-column items-start bg-white position-absolute z-3">
                    <label v-for="filter in filters" :key="filter.id" :for="filter.name" class="d-flex items-center cursor-pointer">
                        <input :id="filter.name" type="checkbox" :name="filter.name" :checked="selectedFilters.includes(filter.name)" @change="selectFilter(filter.name)">
                        {{ filter.name }}
                    </label>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter {
    @include gap(1.5rem);

    &__selected {
        @include gap(1.5rem);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
    }

    &__cta {
        @extend .filter__selected;
    }

    .filter__options {
        padding: 1.5rem;
        border-radius: 0.5rem;
        top: 5rem;
        left: 0;
        @include gap(2rem);
        width: 15rem;
        box-shadow: #959da533 0px 8px 24px;

        label {
            @include gap(1.5rem);
        }
    }
}
</style>
