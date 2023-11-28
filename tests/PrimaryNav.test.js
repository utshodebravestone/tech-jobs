import { mount } from "@vue/test-utils";

import PrimaryNav from "@/components/PrimaryNav.vue";
import { data } from "autoprefixer";

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

  it("show sign in button", () => {
    const wrapper = mount(PrimaryNav);
    const signInButton = wrapper.find("[data-test='sign-in-button']");
    expect(signInButton.exists()).toBe(true);
  });

  it("sign in user and show profile image", async () => {
    const wrapper = mount(PrimaryNav);
    let signInButton = wrapper.find("[data-test='sign-in-button']");
    let profileImage = wrapper.find("[data-test='profile-image']");
    expect(signInButton.exists()).toBe(true);
    expect(profileImage.exists()).toBe(false);

    await signInButton.trigger("click");

    signInButton = wrapper.find("[data-test='sign-in-button']");
    profileImage = wrapper.find("[data-test='profile-image']");
    expect(signInButton.exists()).toBe(false);
    expect(profileImage.exists()).toBe(true);
  });
});
