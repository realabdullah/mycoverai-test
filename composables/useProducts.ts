import { computed, ref } from "vue";

export function useProducts() {
    const nuxtApp = useNuxtApp();
    const route = useRoute();

    const categories = ref<ProductCategory[]>([]);
    const products = ref<Product[]>([]);
    const product = ref<Product | null>(null);
    const selectedProduct = ref<Product | null>(null);
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

    async function getCategories() {
        try {
            const { data, error } = await useFetch("/api/products/categories", {
                getCachedData(key) {
                    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
                },
            });
            if (error.value || !data.value)
                throw new Error("Error getting categories");

            categories.value = data.value;
        }
        catch (error) {}
    };

    async function getProducts() {
        try {
            const { data, error } = await useFetch("/api/products", {
                getCachedData(key) {
                    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
                },
            });
            if (error.value || !data.value)
                throw new Error("Error getting products");

            products.value = data.value;
        }
        catch (error) {
            throw createError({
                statusCode: 404,
                fatal: true,
                message: "Error getting products",
            });
        }
    };

    async function getProduct() {
        try {
            const { data, error } = await useFetch(`/api/products/${route.params.id}`, {
                getCachedData(key) {
                    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
                },
            });
            if (error.value || !data.value)
                throw new Error("Error getting the product");

            product.value = data.value;
        }
        catch (error) {
            throw createError({
                statusCode: 404,
                fatal: true,
                message: "Error getting the product",
            });
        }
    };

    return {
        categories,
        selectedCategories,
        selectedProduct,
        search,
        product,
        products,
        filteredProducts,
        getCategories,
        getProducts,
        getProduct,
    };
}
