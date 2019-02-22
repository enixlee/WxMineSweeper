import contains from "./contains";

export default class containsDrawable extends contains {
    constructor() {
        super();

        this.visible = true
    }

    /**
     * 将精灵图绘制在canvas上
     */
    drawToCanvas(ctx) {
        if (!this.visible) {
            return;
        }

        //绘制自身
        this._drawToCanvas(ctx);

        let child = this.getChild();

        child.forEach(function (v, k) {
            //绘制子控件
            v.drawToCanvas(ctx);

        });
    }

    _drawToCanvas(ctx) {

    }
}