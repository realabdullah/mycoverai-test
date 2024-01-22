<script lang="ts" setup>
definePageMeta({
    name: "products",
    layout: "default",
});

const { categories, selectedCategories, selectedProduct, search, filteredProducts, getProducts, getCategories } = useProducts();

await getProducts();
await getCategories();
</script>

<template>
    <div class="products w-100">
        <div class="products__header d-flex items-center content-between">
            <BaseFilter v-model="selectedCategories" :filters="categories" />
            <BaseInput id="search" v-model="search" class="search" placeholder="Search..." type="search" />
        </div>

        <div class="products__container bg-white">
            <BaseTable v-if="filteredProducts && filteredProducts.length > 0" :header="['Name', 'Provider', 'Price', 'Category', 'Status']" description="Products table">
                <tr v-for="product in filteredProducts" :key="product.id" class="cursor-pointer" @click="selectedProduct = product">
                    <td>{{ product.name }}</td>
                    <td>{{ product.provider.company_name }}</td>
                    <td>{{ formatAmount(product.price) }}</td>
                    <td>{{ product.productCategory.name }}</td>
                    <td :class="product.active ? 'col-blue' : 'col-red'">{{ product.active ? "Active" : "Not active" }}</td>
                </tr>
            </BaseTable>
            <EmptyState v-else text="No products available" />
        </div>

        <BaseModal v-if="selectedProduct" title="Product Details" @close-modal="selectedProduct = null">
            <ProductDetails :product="selectedProduct" />
        </BaseModal>
    </div>
</template>

<style lang="scss" scoped>
.products {
    margin-top: 5rem;

    &__header {

        @include respond-to("medium") {
            flex-direction: column;
            align-items: flex-start;
            @include gap(1.4rem);
        }

        .search {
            width: 40rem;

            @include respond-to("medium") {
                width: 100%;
            }
        }
    }

    &__container {
        margin-top: 3rem;
    }
}
</style>
