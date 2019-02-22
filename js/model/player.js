/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: player
 */
import base from './base';

const __ = {
  uName: Symbol('uName'),
  time: Symbol('time')
};

export default class player extends base {
  constructor (uName = null, time = null) {
    super(null);
    this[__.uName] = uName || this.getEngine().$lang.getLang('stringDefaultUName');
    this[__.time] = time || 999;
  }

  getuName () {
    return this[__.uName];
  }

  setuName (uName) {
    this[__.uName] = uName;
  }

  getTime () {
    return this[__.time];
  }

  setTime (time) {
    this[__.time] = time;
  }

  getSerializeMap () {
    return __;
  }
}