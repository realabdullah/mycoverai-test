import { shallowMount } from "@vue/test-utils";
import BaseModal from "../../components/Base/Modal.vue";

describe("modal component", () => {
    const wrapper = shallowMount(BaseModal, {
        props: {
            title: "Modal title",
        },
        slots: {
            default: "<h1>Slot element</h1>",
        },
    });

    it("title prop is passed", async () => {
        expect(wrapper.getComponent(BaseModal).vm.title).to.equal("Modal title");
    });

    it("event is emitted when clicked", async () => {
        await wrapper.get("button").trigger("click");
        expect(wrapper.emitted()).toHaveProperty("closeModal");
    });

    it("slot content is rendered", async () => {
        expect(wrapper.find('.modal__content').html()).toContain('Slot element')
    });
});
