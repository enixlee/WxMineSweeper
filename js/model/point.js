/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: point
 */
const __ = {
  x: Symbol('x'),
  y: Symbol('y')
};

export default class point {
  point (x, y) {
    this[__.x] = x;
    this[__.y] = y;
  }

  get isPoint () {
    return true;
  }

  getX () {
    return this[__.x];
  }

  getY () {
    return this[__.y];
  }

  equalTo (point) {
    if (!point.isPoint) {
      return false;
    }

    return this[__.x] === point.getX() && this[__.y] === point.getY();
  }
}