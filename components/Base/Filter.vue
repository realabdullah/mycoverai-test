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
        <div v-if="selectedFilters.length > 0" class="selected-filters">
            <button v-for="selectedFilter in selectedFilters.slice(0, 3)" :key="selectedFilter" class="filter__selected bg-blue col-white d-flex items-center" @click="selectFilter(selectedFilter)">
                {{ selectedFilter }} <IconLoader name="close" />
            </button>
            <button v-if="selectedFilters.length > 3" class="filter__selected bg-blue col-white d-flex items-center" @click="showFilters = !showFilters">
                <IconLoader name="more" />
            </button>
        </div>

        <div class="position-relative">
            <button class="filter__cta d-flex items-center content-center bg-blue col-white" @click="showFilters = !showFilters">
                <IconLoader name="filter" /> Filters
            </button>

            <Transition name="fade" mode="out-in" appear>
                <div v-show="showFilters" class="filter__options d-flex flex-column items-start bg-white position-absolute z-3">
                    <label v-for="filter in filters" :key="filter.id" :for="filter.name" class="w-100 d-flex items-center cursor-pointer text-nowrap col-slate-three">
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

    .selected-filters {
        @include respond-to("small") {
            display: none;
        }
    }

    &__selected {
        @include gap(1.5rem);
        padding: 1rem 1.5rem;
    }

    &__cta {
        @extend .filter__selected;
        width: 13rem;
    }

    .filter__options {
        top: 5rem;
        left: 0;
        width: auto;
        max-width: 30rem;
        box-shadow: 0 0.4rem 1.6rem 0 #00000059;

        label {
            @include gap(1.5rem);
            padding: 1.5rem;
            border-bottom: 0.1rem solid var(--grey);
        }
    }
}
</style>
