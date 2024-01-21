<script lang="ts" setup>
definePageMeta({
    name: "product",
    layout: "default",
});

const { product, getProduct } = useProducts();

await getProduct();
</script>

<template>
    <div v-if="product" class="product">
        <div class="product__header d-flex flex-column items-start">
            <div class="product__header-detail d-flex items-start">
                <img src="https://picsum.photos/id/119/367/267" :alt="product.name">
                <div>
                    <h3>{{ product.name }}</h3>
                    <p>{{ product.description }}</p>
                </div>
            </div>
            <div class="product__header-meta d-flex items-center">
                <p>Active: {{ product.active ? "Active" : "Not active" }}</p> <span class="col-deep-grey">|</span>
                <ClientOnly>
                    <p>Last updated: {{ formatDate(product.updated_at) }}</p> <span class="col-deep-grey">|</span>
                    <p>Created: {{ formatDate(product.created_at) }}</p>
                </ClientOnly>
            </div>
        </div>

        <div class="product__content bg-white w-100 h-100">
            <div class="product__content-numbers d-grid">
                <div v-for="(value, key) in product.meta.mca_price" :key="key" class="card bg-grey d-flex items-center">
                    <IconLoader name="currency" />
                    <div class="frequency d-flex flex-column">
                        <span class="type weight-medium text-capitalize col-deep-grey">{{ key }}</span>
                        <span class="amount weight-regular col-black">{{ formatAmount(value) }}</span>
                    </div>
                </div>
            </div>

            <div class="product__content-details d-flex flex-column">
                <p class="title text-nowrap weight-medium d-flex">
                    Benefits: <span v-if="product.full_benefits" class="weight-regular text-normal" v-html="product.full_benefits" />
                    <span v-else>Data not available</span>
                </p>
                <p class="title text-nowrap weight-medium d-flex">
                    How it works: <span v-if="product.how_it_works" class="weight-regular text-normal" v-html="product.how_it_works" />
                    <span v-else>Data not available</span>
                </p>
                <p class="title text-nowrap weight-medium d-flex">
                    How to claim: <span v-if="product.how_to_claim" class="weight-regular text-normal" v-html="product.how_to_claim" />
                    <span v-else>Data not available</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product {
    margin-top: 5rem;

    &__header {
        @include gap(2rem);

        &-detail {
            @include gap(1.5rem);

            img {
                width: 10rem;
                height: 10rem;
                object-fit: cover;
                border-radius: 0.5rem;
            }

            h3 {
                @include font(2rem, 100%);
                margin-bottom: 1rem;
            }
        }

        &-meta {
            @include gap(1rem);

            p {
                @include font(1.5rem, 100%);
                color: var(--black);
            }
        }
    }

    &__content {
        margin-top: 3rem;
        padding: 2rem;
        border-radius: 1rem;

        &-numbers {
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
            @include gap(1.3rem);

            .card {
                border-radius: 1rem;
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

            .title {
                @include gap(2rem);
                @include font(1.7rem, 100%);

                span {
                    @include font(1.5rem, 100%);
                }
            }
        }
    }
}
</style>
