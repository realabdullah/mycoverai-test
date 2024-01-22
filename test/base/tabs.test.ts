import { shallowMount } from "@vue/test-utils";
import BaseTabs from "../../components/Base/Tabs.vue";

describe("tabs component", () => {
    const wrapper = shallowMount(BaseTabs, {
        props: {
            "tabs": ["One", "Two", "Three"],
            "modelValue": "",
            "onUpdate:modelValue": (e: string) => wrapper.setProps({ modelValue: e }),
        },
    });

    it("correct header prop is passed", async () => {
        expect(wrapper.getComponent(BaseTabs).vm.tabs).to.deep.equal(["One", "Two", "Three"]);
    });

    it("active tab is set properly", async () => {
        expect(wrapper.get("button").text()).to.be.equal("One");

        await wrapper.get("button").trigger("click");
        expect(wrapper.getComponent(BaseTabs).vm.modelValue).to.be.equal("One");
    });
});
