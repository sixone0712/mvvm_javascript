import Binder from "./Binder";
import BinderItem from "./BinderItem";
import { typeChecker } from "./utils/type";

const Scanner = class {
  scan(el, _ = typeChecker(el, HTMLElement)) {
    const binder = new Binder();
    this.checkItem(binder, el);
    const stack = [el.firstElementChild];
    let target;

    while ((target = stack.pop())) {
      this.checkItem(binder, target);
      if (target.firstElementChild) {
        stack.push(target.firstElementChild);
      }
      if (target.nextElementSibling) {
        stack.push(target.nextElementSibling);
      }
    }

    return binder;
  }

  checkItem(binder, el) {
    const vm = el.getAttribute("data-viewmodel");
    if (vm) {
      binder.add(new BinderItem(el, vm));
    }
  }
};

export default Scanner;
