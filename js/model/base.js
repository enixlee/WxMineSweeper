/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: base
 */
const __ = {
  engine: Symbol('engine')
};
export default class base {
  constructor (engine = null) {
    this[__.engine] = engine;
    this.init();
  }

  getEngine () {
    return GameGlobal.$engine || this[__.engine];
  }

  init () {
  }

  install () {
  }
};