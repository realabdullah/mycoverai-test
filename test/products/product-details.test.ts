import { shallowMount } from "@vue/test-utils";
import product from "../../assets/js/mock-data";
import { formatAmount, formatDate } from "../../utils/index";
import ProductDetails from "../../components/ProductDetails.vue";

describe("product details component", () => {
    const wrapper = shallowMount(ProductDetails, {
        props: {
            product,
        },
        global: {
            mocks: {
                formatAmount,
                formatDate,
            },
        },
    });

    it("data prop is passed", () => {
        expect(wrapper.getComponent(ProductDetails).vm.product).to.deep.equal(product);
    });

    it("product link leads to appropriate route", async () => {
        expect(wrapper.find(".product__details-link").attributes("to")).to.equal(`/products/${product.id}`);
    });
});
