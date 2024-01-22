<script lang="ts" setup>
defineProps<{
    product: Product;
}>();
</script>

<template>
    <div class="product__details">
        <p class="product__details-description">
            {{ product.description }}
        </p>
        <div class="product__details-meta">
            <p class="weight-medium d-flex items-center content-between">
                Name: <span class="weight-regular">{{ product.name }}</span>
            </p>
            <p class="weight-medium d-flex items-center content-between">
                Category: <span class="weight-regular">{{ product.productCategory.name }}</span>
            </p>
            <p class="weight-medium d-flex items-center content-between">
                Status: <span class="weight-regular" :class="product.active ? 'active' : 'not-active'">{{ product.active ? "Active." : "Not active." }}</span>
            </p>
            <p class="weight-medium d-flex items-center content-between">
                Claimable: <span class="weight-regular">{{ product.claimable ? "Yes, Claimable." : "No, Not claimable." }}</span>
            </p>
            <p class="weight-medium d-flex items-center content-between">
                Renewable: <span class="weight-regular">{{ product.renewable ? "Yes, Renewable." : "No, Not Renewable." }}</span>
            </p>
            <p class="weight-medium d-flex items-center content-between">
                Created On: <span class="weight-regular">{{ formatDate(product.created_at) }}</span>
            </p>
            <p class="weight-medium d-flex items-center content-between">
                Updated On: <span class="weight-regular">{{ formatDate(product.updated_at) }}</span>
            </p>
        </div>

        <NuxtLink :to="`/products/${product.id}`" class="product__details-link d-flex items-center content-center bg-blue col-white">
            View full details
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.product__details {
    &-description {
        @include font(2rem, 100%);
        margin: 1.4rem 0;
    }

    &-meta {

        p {
            width: 100%;
            padding: 2rem 0;
            border-bottom: 0.1rem solid var(--grey);
            @include font(1.6rem, 100%);

            &:last-child {
                border-bottom: 0.1rem solid var(--grey);
            }

            span {
                @include font(1.4rem, 100%);
                color: var(--slate-one);

                &.active {
                    background-color: var(--blue);
                    color: var(--grey);
                    padding: 1rem;
                }

                &.not-active {
                    @extend .active;
                    background-color: var(--red);
                }
            }
        }
    }

    &-link {
        margin-top: 3rem;
        width: 15rem;
        height: 5rem;
    }
}
</style>
