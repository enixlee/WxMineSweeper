/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: includes
 */
import base from '../model/base';
import Log from './log';
import Storage from './storage';
import {default as locale} from '../config/lang';
import Language from './language';

export default class includes extends base {
  init () {
    this.getEngine().use(new Log(this.getEngine()));
    this.getEngine().use(new Storage(this.getEngine()));
    this.getEngine().use(new Language(this.getEngine()));

    this.getEngine().$lang.setLocale(locale);
  }
}