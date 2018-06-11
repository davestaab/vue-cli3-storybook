import { configure } from "@storybook/vue";

import "vue";

function loadStories() {
  // You can require as many stories as you need.
  require("../src/components/HelloWorld.story");
}

configure(loadStories, module);
