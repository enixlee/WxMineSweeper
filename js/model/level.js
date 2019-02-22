/**
 * Auth: lijiang
 * Date: 2019/2/22
 * Description: level
 */
import base from './base';

const __ = {
  /**
   * 等级ID
   * 为了区分自定义设置和系统难度的
   */
  levelId: Symbol('levelId'),
  /**
   * 游戏区域宽度
   */
  gameWidth: Symbol('gameWidth'),
  /**
   * 游戏区域高度
   */
  gameHeight: Symbol('gameHeight'),
  /**
   * 当前等级雷数量
   */
  mineNum: Symbol('mineNum')
};

export default class level extends base {
  constructor (levelId, gameWidth, gameHeight, mineNum) {
    super(null);
    if (gameHeight < 9) {
      gameHeight = 9;
    } else if (gameHeight > 24) {
      gameHeight = 24;
    }
    if (gameWidth < 9) {
      gameWidth = 9;
    } else if (gameWidth > 30) {
      gameWidth = 30;
    }
    let countMineNum = (gameHeight - 1) * (gameWidth - 1);
    if (mineNum < 10) {
      mineNum = 10;
    } else if (mineNum > countMineNum) {
      mineNum = countMineNum;
    }
    this[__.levelId] = levelId;
    this[__.gameHeight] = gameHeight;
    this[__.gameWidth] = gameWidth;
    this[__.mineNum] = mineNum;
  }

  isLevelObj () {
    return true;
  }

  static EASY () {
    return new level(0, 9, 9, 10);
  }

  static NORMAL () {
    return new level(1, 16, 16, 40);
  }

  static HARD () {
    return new level(2, 30, 16, 99);
  }

  getLevelId () {
    return this[__.levelId];
  }

  setLevelId (levelId) {
    this[__.levelId] = levelId;
  }

  getGameWidth () {
    return this[__.gameWidth];
  }

  setGameWidth (gameWidth) {
    this[__.gameWidth] = gameWidth;
  }

  getGameHeight () {
    return this[__.gameHeight];
  }

  setGameHeight (gameHeight) {
    this[__.gameHeight] = gameHeight;
  }

  getMineNum () {
    return this[__.mineNum];
  }

  setMineNum (mineNum) {
    this[__.mineNum] = mineNum;
  }

  /**
   *
   * @param level
   * @returns {boolean}
   */
  equalTo (level) {
    if (level === this) {
      return true;
    }
    if (obj === null || !obj.isLevelObj) {
      return false;
    }
    return this[__.levelId] === level.getLevelId()
      && this[__.gameWidth] === level.getGameWidth()
      && this[__.gameHeight] === level.getGameHeight()
      && this[__.mineNum] === level.getMineNum();
  }

  getSerializeMap () {
    return __;
  }
}