import { shallowMount } from "@vue/test-utils";
import BaseTable from "../../components/Base/Table.vue";

describe("table component", () => {
    const wrapper = shallowMount(BaseTable, {
        props: {
            header: ["One", "Two", "Three"],
        },
        slots: {
            default: "This is a slot content",
        },
    });

    it("correct header prop is passed", async () => {
        expect(wrapper.getComponent(BaseTable).vm.header).to.deep.equal(["One", "Two", "Three"]);
    });

    it("slot is rendered correctly", async () => {
        expect(wrapper.find("tbody").text()).to.equal("This is a slot content");
    });
});
