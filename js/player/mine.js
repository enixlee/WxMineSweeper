import Sprite from '../base/sprite'

const MINE_IMG_SRC = 'images/mine48.png'
const MINE_WIDTH = 16;
const MINE_HEIGHT = 16;

export default class Mine extends Sprite {
  constructor () {
    super(MINE_IMG_SRC, MINE_WIDTH, MINE_HEIGHT)
  }

  enableClick () {
    return true;
  }

  clicked () {
    if (!this.count) {
      this.count = 0;
    }
  }

  update () {
  }
}