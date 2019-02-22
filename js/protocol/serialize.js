/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: serialize
 */
export default {
  toArray () {
    let arr = {};
    let map = this.getSerializeMap();
    if (map === null) {
      return arr;
    }
    Object.keys(map).forEach((v) => {
      arr[v] = this[map[v]];
    });
    return arr;
  }
}