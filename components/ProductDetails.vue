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
            <p>Category: <span>{{ product.productCategory.name }}</span></p>
            <p>Active: <span>{{ product.active ? "Active." : "Not active." }}</span></p>
            <p>Claimable: <span>{{ product.claimable ? "Yes, Claimable." : "No, Not claimable." }}</span></p>
            <p>Renewable: <span>{{ product.renewable ? "Yes, Renewable." : "No, Not Renewable." }}</span></p>
            <p>Created On: <span>{{ formatDate(product.created_at) }}</span></p>
            <p>Updated On: <span>{{ formatDate(product.updated_at) }}</span></p>
        </div>

        <NuxtLink :to="`/products/${product.id}`" class="product__details-link d-block">
            View full details
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.product__details {
    &-description {
        @include font(1.8rem, 100%);
        margin: 1.4rem 0;
    }

    &-meta {

        p {
            width: 100%;
            padding: 1.3rem 0;
            border-top: 0.1rem solid var(--deep-grey);
            @include font(1.6rem, 100%);

            &:last-child {
                border-bottom: 0.1rem solid var(--deep-grey);
            }

            span {
                @include font(1.4rem, 100%);
                color: var(--deep-grey);
            }
        }
    }

    &-link {
        padding-top: 3rem;
    }
}
</style>
