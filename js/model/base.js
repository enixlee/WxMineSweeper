/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: base
 */
import {default as serialize} from '../protocol/serialize';

const __ = {
  engine: Symbol('engine')
};
export default class base {
  constructor (engine = null) {
    this[__.engine] = engine;
    this.registerProtocol(serialize);
    this.init();
  }

  getEngine () {
    return GameGlobal.$engine || this[__.engine];
  }

  registerProtocol (protocol) {
    Object.keys(protocol).forEach((v, k) => {
      Object.defineProperty(this, v, {
        configurable: false,
        value: protocol[v]
      });
    });
  }

  init () {
  }

  install () {
  }

  getSerializeMap () {
    return null;
  }
};