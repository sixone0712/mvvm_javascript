import { typeChecker } from "./utils/type";
import BinderItem from "./BinderItem";
import ViewModal from "./ViewModal";

const Binder = class {
  #items = new Set();

  add(binderItem, _ = typeChecker(binderItem, BinderItem)) {
    this.#items.add(binderItem);
  }

  render(viewmodal, _ = typeChecker(viewmodal, ViewModal)) {
    this.#items.forEach((item) => {
      const vm = typeChecker(viewmodal[item.viewmodel], ViewModal);
      const el = item.el;

      Object.entries(vm.styles).forEach(([key, style]) => {
        el.style[key] = style;
      });
      Object.entries(vm.attributes).forEach(([key, attr]) => {
        el.setAttribute(key, attr);
      });
      Object.entries(vm.properties).forEach(([key, property]) => {
        el[key] = property;
      });
      Object.entries(vm.events).forEach(([key, event]) => {
        el[`on${key}`] = (e) => event.call(el, e, viewmodal);
      });
    });
  }
};

export default Binder;
