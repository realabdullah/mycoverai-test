import { shallowMount } from "@vue/test-utils";
import BaseInput from "../../components/Base/Input.vue";

describe("base input component", () => {
    const wrapper = shallowMount(BaseInput, {
        props: {
            "id": "name",
            "type": "text",
            "placeholder": "Enter name",
            "modelValue": "Abd",
            "onUpdate:modelValue": (e: string) => wrapper.setProps({ modelValue: e }),
        },
    });

    it("correct props are passed", async () => {
        expect(wrapper.getComponent(BaseInput).vm.id).to.equal("name");
        expect(wrapper.getComponent(BaseInput).vm.type).to.equal("text");
        expect(wrapper.getComponent(BaseInput).vm.placeholder).to.equal("Enter name");
    });

    it("value is set properly", async () => {
        await wrapper.find("input").setValue("test");
        expect(wrapper.props("modelValue")).to.equal("test");
    });

    it("attribute is accurate", async () => {
        expect(wrapper.attributes("for")).to.equal("name");
    });
});
