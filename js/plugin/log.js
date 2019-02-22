/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: log
 */
import base from '../model/base';

const __ = {
  isProduct: Symbol('isProduct')
};

export default class log extends base {
  printf () {
    console.info(this);
    if (this[__.isProduct]) {
      return;
    }

    let args = Array.prototype.slice.call(arguments);
    args.unshift('color:#3ebcca');
    args.unshift(`%c[Bala]`);

    // let err = new Error();
    // let stack = err.stack.split('\n')[2].trim();
    // stack = `                       print ${stack}`;
    // args.push(stack);

    console.log.apply(console, args);
  }

  install () {
    this.getEngine().registerPlugin('printf', this.printf);
  }
}