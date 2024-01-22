<script lang="ts" setup>
definePageMeta({
    name: "product",
    layout: "default",
});

const { product, getProduct } = useProducts();
const currentTab = ref("Full benefits");

await getProduct();
</script>

<template>
    <div class="w-100">
        <NuxtLink to="/products" class="back d-flex items-center content-center bg-blue col-white">
            <IconLoader name="arrow-back" /> Go back
        </NuxtLink>
        <div v-if="product" class="product__page">
            <div class="product__page-header d-flex flex-column items-start">
                <div class="product__page-header-detail">
                    <h3 class="col-grey weight-medium">
                        {{ product.name }}
                    </h3>
                    <p class="col-grey weight-regular">
                        {{ product.description }}
                    </p>
                </div>
                <div class="product__page-header-meta d-flex flex-column items-start">
                    <p class="col-grey weight-medium text-nowrap">
                        Active: {{ product.active ? "Active" : "Not active" }}
                    </p>
                    <ClientOnly>
                        <p class="col-grey weight-medium text-nowrap">
                            Last updated: {{ formatDate(product.updated_at) }}
                        </p>
                        <p class="col-grey weight-medium text-nowrap">
                            Created: {{ formatDate(product.created_at) }}
                        </p>
                    </ClientOnly>
                </div>
            </div>

            <div class="product__page-content w-100 h-100">
                <div class="product__page-content-numbers d-grid">
                    <div v-for="(value, key) in product.meta.mca_price" :key="key" class="card bg-grey d-flex items-center">
                        <IconLoader name="currency" />
                        <div class="frequency d-flex flex-column">
                            <span class="type weight-medium text-capitalize col-deep-grey">{{ key }}</span>
                            <span class="amount weight-regular col-black">{{ formatAmount(value) }}</span>
                        </div>
                    </div>
                </div>

                <div class="product__page-content-details d-flex flex-column">
                    <BaseTabs v-model="currentTab" :tabs="['Full benefits', 'Key benefits', 'How it works', 'How to claim']" />
                    <ClientOnly>
                        <p v-show="currentTab === 'Full benefits'" class="content weight-regular">
                            <ul v-if="Array.isArray(product.full_benefits)">
                                <li v-for="benefit in product.full_benefits" :key="benefit.name">
                                    {{ benefit.name }}: {{ benefit.description }}
                                </li>
                            </ul>
                            <span v-else-if="product.full_benefits" v-html="product.full_benefits" />
                            <span v-else>Data not available</span>
                        </p>
                        <p v-show="currentTab === 'Key benefits'" class="content weight-regular">
                            <span v-if="product.how_it_works" v-html="product.key_benefits" />
                            <span v-else>Data not available</span>
                        </p>
                        <p v-show="currentTab === 'How it works'" class="content weight-regular">
                            <span v-if="product.how_it_works" v-html="product.how_it_works" />
                            <span v-else>Data not available</span>
                        </p>
                        <p v-show="currentTab === 'How to claim'" class="content weight-regular">
                            <span v-if="product.how_to_claim" v-html="product.how_to_claim" />
                            <span v-else>Data not available</span>
                        </p>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.back {
    @include gap(1rem);
    width: 13rem;
    padding: 1.5rem;
}

.product__page {
    margin-top: 5rem;

    &-header {
        @include gap(3rem);
        border: 0.1rem solid var(--slate-five);
        padding: 2.4rem;

        &-detail {
            h3 {
                @include font(2.4rem, 100%);
                margin-bottom: 2rem;
            }

            p {
                @include font(2rem, 100%);
            }
        }

        &-meta {
            @include gap(1rem);

            p {
                @include font(1.2rem, 100%);
            }
        }
    }

    &-content {
        margin-top: 3rem;
        border: 0.1rem solid var(--slate-five);
        padding: 2.4rem;

        &-numbers {
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
            @include gap(1.3rem);

            .card {
                padding: 1.5rem;
                @include gap(1.5rem);

                .frequency {
                    @include gap(1rem);

                    .type {
                        @include font(1.4rem, 100%);
                    }

                    .amount {
                        @include font(1.6rem, 100%);
                    }
                }
            }
        }

        &-details {
            margin-top: 3rem;
            @include gap(2rem);

            .content {
                @include font(1.6rem, 130%);
                color: var(--grey) !important;
            }
        }
    }
}
</style>
