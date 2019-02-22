/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: engine
 */
import Includes from './includes';

const __ = {
  plugins: Symbol('plugins')
};

export default class engine {
  constructor () {
    this[__.plugins] = [];
    this.registerPlugin('basePlugins', new Includes(this));
  }

  registerPlugin (name, plugin) {
    this[__.plugins][name] = plugin;

    if (!this.hasOwnProperty(name)) {
      this[name] = plugin;
    }
  }

  use (obj, ...arg) {
    obj.install(...arg);
  }
}