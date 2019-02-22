/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: storage
 */
import base from '../model/base';

export default class storage extends base {
  isEnableEncrypt () {
    return false;
  }

  getCrypto () {
    return {
      MD5: null,
      stringifyBase64: null,
      parseBase64: null
    };
  }

  /**
   * 存储器实例
   * @returns {*}
   */
  getStorageIns () {
    return wx;
  }

  /**
   * 加密key
   * @param key
   * @returns {*}
   */
  encodeStorageKey (key) {
    return this.isEnableEncrypt() ? this.getCrypto().MD5(key) : key;
  }

  /**
   * 加密存储的value
   * @param value
   * @returns {string}
   */
  encodeStorageValue (value) {
    let jsonData = JSON.stringify(value);
    return this.isEnableEncrypt() ? this.getCrypto().stringifyBase64(jsonData) : jsonData;
  }

  /**
   * 解密存储的value
   * @param storageValue
   * @returns {*}
   */
  decodeStorageValue (storageValue) {
    return this.isEnableEncrypt() ? JSON.parse(this.getCrypto().parseBase64(storageValue)) : JSON.parse(storageValue);
  }

  getItem (key, D = null) {
    try {
      let value = this.getStorageIns().getStorageSync(this.encodeStorageKey(key));
      // 不处理boolean值
      value = this.decodeStorageValue(value);
      return (value !== null || value !== undefined) ? value : D;
    } catch (e) {
      return D;
    }
  }

  setItem (key, value) {
    try {
      this.getStorageIns().setStorageSync(this.encodeStorageKey(key), this.encodeStorageValue(value));
    } catch (e) {
      // 输出错误
    }
  }

  clearItem (key) {
    this.getStorageIns().removeStorageSync(this.encodeStorageKey(key));
  }

  clearAll () {
    this.getStorageIns().clearStorageSync();
  }
};