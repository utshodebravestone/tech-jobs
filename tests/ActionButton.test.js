import { mount } from "@vue/test-utils";

import ActionButton from "@/components/shared/ActionButton.vue";

describe("action button", () => {
  it("render correct text", () => {
    const wrapper = mount(ActionButton, { props: { text: "Whatever" } });
    expect(wrapper.text()).toEqual("Whatever");
  });

  it("apply correct style", () => {
    const wrapper = mount(ActionButton, {
      props: { text: "Whatever", type: "primary" },
    });
    expect(wrapper.find("button").classes("primary")).toBe(true);
  });
});
