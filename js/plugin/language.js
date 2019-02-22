/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: language
 */
import base from '../model/base';

const __ = {
  locale: Symbol('locale')
};


export default class language extends base {
  install () {
    this.getEngine().registerPlugin('$lang', this);
  }

  setLocale (locale) {
    this[__.locale] = locale;
  }

  getLang (key, replace = null, D = null) {
    let lang = this[__.locale][key] || D;
    if (replace) {
      replace.forEach((v, k) => {
        let replaceKey = `{${k}}`;
        lang = lang.replace(new RegExp(replaceKey, 'g'), v);
      });
    }
    return lang;
  }
}