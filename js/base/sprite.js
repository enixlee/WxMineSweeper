/**
 * 游戏基础的精灵类
 */
import containsDrawable from "./containsDrawable";

const __ = {
    touched: Symbol('touched')
};

export default class Sprite extends containsDrawable {
    constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
        super();
        this.img = new Image();
        this.img.src = imgSrc;

        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;

        this.visible = true;

        this.imgTextureSrc = {};
        this.imgTextureSrc.x = 0;
        this.imgTextureSrc.y = 0;
        this.imgTextureSrc.width = 0;
        this.imgTextureSrc.height = 0;

        if (this.enableClick()) {
            this.initEvent();
        }
    }

    enableClick() {
        return false;
    }

    /**
     * 将精灵图绘制在canvas上
     */
    _drawToCanvas(ctx) {
        if (!this.visible)
            return;


        if (this.imgTextureSrc.width === 0 &&
            this.imgTextureSrc.height === 0) {
            ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
        else {
            ctx.drawImage(
                this.img,
                this.imgTextureSrc.x,
                this.imgTextureSrc.y,
                this.imgTextureSrc.width,
                this.imgTextureSrc.height,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }


    }

    /**
     * 简单的碰撞检测定义：
     * 另一个精灵的中心点处于本精灵所在的矩形内即可
     * @param{Sprite} sp: Sptite的实例
     */
    isCollideWith(sp) {
        let spX = sp.x + sp.width / 2
        let spY = sp.y + sp.height / 2

        if (!this.visible || !sp.visible)
            return false

        return !!(spX >= this.x
            && spX <= this.x + this.width
            && spY >= this.y
            && spY <= this.y + this.height);
    }

    /**
     * 设置贴图区域
     * @param x
     * @param y
     * @param width
     * @param height
     */
    setTextureRect(x, y, width, height) {
        this.imgTextureSrc.x = x;
        this.imgTextureSrc.y = y;
        this.imgTextureSrc.width = width;
        this.imgTextureSrc.height = height;
    }

    /**
     * 当手指触摸屏幕的时候
     * @param {Number} x: 手指的X轴坐标
     * @param {Number} y: 手指的Y轴坐标
     * @return {Boolean}: 是否点中
     */
    checkIsFingerOnSprite(x, y) {
        const deviation = 30;

        return !!(x >= this.x - deviation
            && y >= this.y - deviation
            && x <= this.x + this.imgTextureSrc.width + deviation
            && y <= this.y + this.imgTextureSrc.height + deviation)
    }

    initEvent() {
        canvas.addEventListener('touchstart', ((e) => {
            e.preventDefault();

            let x = e.touches[0].clientX;
            let y = e.touches[0].clientY;

            //
            if (this.checkIsFingerOnSprite(x, y)) {
                this[__.touched] = true;
            }
        }).bind(this));

        canvas.addEventListener('touchmove', ((e) => {
            // e.preventDefault()
            //
            // let x = e.touches[0].clientX
            // let y = e.touches[0].clientY
            //
            // if (this[__.touched]){
            //   // do sth
            // }

        }).bind(this));

        canvas.addEventListener('touchend', ((e) => {
            e.preventDefault();
            if (this[__.touched]) {
                this.clicked();
            }
            this[__.touched] = false;
        }).bind(this));
    }

    clicked() {
        // do sth
    }
}
