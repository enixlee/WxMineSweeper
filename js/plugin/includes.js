/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: includes
 */
import base from '../model/base';
import Log from './log';
import Storage from './storage';

export default class includes extends base {
  init () {
    this.getEngine().use(new Log(this.getEngine()));
    this.getEngine().use(new Storage(this.getEngine()));
  }
}