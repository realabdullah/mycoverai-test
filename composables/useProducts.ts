export function useProducts() {
    const categories = ref<ProductCategory[]>([]);
    const products = ref<Product[]>([]);
    const selectedProduct = ref();
    const search = ref("");
    const selectedCategories = ref<string[]>([]);

    const filteredProducts = computed(() => {
        if (selectedCategories.value.length > 0) {
            const result = products.value.filter(product => selectedCategories.value.includes(product.productCategory.name));
            if (search.value)
                return result?.filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()));
            else return result;
        }
        else if (search.value) { return products.value.filter(product => product.name.toLowerCase().includes(search.value.toLowerCase())); }
        else { return products.value; }
    });

    return {
        categories,
        selectedCategories,
        selectedProduct,
        search,
        products,
        filteredProducts
    };
}
