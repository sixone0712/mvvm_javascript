import { typeChecker } from "./utils/type";

const BinderItem = class {
  el;
  viewmodel;

  constructor(
    el,
    viewmodel,
    _0 = typeChecker(el, HTMLElement),
    _1 = typeChecker(viewmodel, "string")
  ) {
    this.el = el;
    this.viewmodel = viewmodel;
    Object.freeze(this);
  }
};

export default BinderItem;
