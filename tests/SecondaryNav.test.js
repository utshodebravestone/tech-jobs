import { mount } from "@vue/test-utils";

import SecondaryNav from "@/components/SecondaryNav.vue";

describe("secondary nav", () => {
  it("display jobs count on jobs page", () => {
    const wrapper = mount(SecondaryNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data: () => ({
        onJobsPage: true,
      }),
    });
    const jobsCount = wrapper.find("[data-test='jobs-count']");
    expect(jobsCount.exists()).toBe(true);
  });

  it("does not display jobs count on other pages", () => {
    const wrapper = mount(SecondaryNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data: () => ({
        onJobsPage: false,
      }),
    });
    const jobsCount = wrapper.find("[data-test='jobs-count']");
    expect(jobsCount.exists()).toBe(false);
  });
});
