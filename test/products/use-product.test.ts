import { useProducts } from "../../composables/useProducts";

describe("useProduct composable", () => {
    vi.stubGlobal("useNuxtApp", () => {});
    vi.stubGlobal("useRoute", () => {});

    const { search, categories, product, products } = useProducts();

    it("search is initialized as an empty string", () => {
        expect(search.value).to.equal("");
    });

    it("categories is initialized as an empty array", () => {
        expect(categories.value).to.deep.equal([]);
    });

    it("product is initialized as null", () => {
        expect(product.value).to.equal(null);
    });

    it("products is initialized as []", () => {
        expect(products.value).to.deep.equal([]);
    });
});
