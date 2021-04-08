import { createToolbar } from "@/components/toolbar/toolbar.template";
import { $ } from "@core/dom";
import { defaultStyle } from "../../constants";
import { ExcelState } from "../../core/ExcelState";

export class Toolbar extends ExcelState {
  static className = "excel__toolbar";

  constructor($root, options) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
      subscribe: ["currentStyle"],
      ...options,
    });
  }
  prepare() {
    this.initState(defaultStyle);
  }
  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }
  storeChanged(changes) {
    this.setState(changes.currentStyle);
    console.log(changes);
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === "button") {
      const value = JSON.parse($target.data.value);
      this.$emit("toolbar:appStyle", value);
    }
  }
}
