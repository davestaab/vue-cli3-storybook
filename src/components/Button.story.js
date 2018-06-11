import "vue";

import { storiesOf } from "@storybook/vue";

import MyButton from "./Button.vue";

storiesOf("MyButton", module).add("story as a component", () => ({
  components: { MyButton },
  template: "<my-button></my-button>"
}));
