const __ = {
    parent: Symbol('parent'),
    children: Symbol('children')
};

export default class contains {
    constructor() {
        this[__.parent] = null;
        this[__.children] = [];

    }


    /**
     *
     * @param contain
     */
    add(contain) {
        let parent = this.getParent();
        if (parent !== null) {
            this.delete();
        }

        this[__.children].add(contain);
        contain.setParent(this);
    }

    /**
     *
     * @returns {*}
     */
    delete() {
        let parent = this.getParent();
        if (parent === null) {
            return false;
        }
        return parent.removeChild(this);

    }

    /**
     *
     * @param child
     * @returns {boolean}
     */
    removeChild(child) {
        if (child.getParent() === null) {
            return false;
        }
        let parent = child.getParent();
        if (parent !== this) {
            return false;
        }

        //删除父对象中的子对象
        let childIdx = this[__.children].indexOf(child);
        if (childIdx !== -1) {
            this[__.children].remove(childIdx);
        }
        //删除父对象
        child[__.parent] = null;


        return true;
    }

    setParent(parent) {
        this[__.parent] = parent;
    }

    getParent() {
        return this[__.parent];
    }

    getChild() {
        return this[__.children];
    }


}