import { mount } from "@vue/test-utils";

import PrimaryNav from "@/components/PrimaryNav.vue";

describe("test primary nav", () => {
  it("display the correct brand name", () => {
    const wrapper = mount(PrimaryNav);
    const brand = wrapper.find("[data-test='brand']");
    expect(brand.text()).toEqual("Tech Jobs");
  });

  it("display menu items", () => {
    const wrapper = mount(PrimaryNav);
    const menus = wrapper.findAll("[data-test='menu']").map((it) => it.text());
    expect(menus).toEqual([
      "Teams",
      "Location",
      "Career in Tech",
      "Students",
      "Jobs",
    ]);
  });
});
