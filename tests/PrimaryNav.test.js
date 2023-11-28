import { mount } from "@vue/test-utils";

import PrimaryNav from "@/components/PrimaryNav.vue";

describe("test primary nav", () => {
  it("display the correct brand name", () => {
    const wrapper = mount(PrimaryNav);
    expect(wrapper.text()).toMatch("Tech Jobs");
  });
});
