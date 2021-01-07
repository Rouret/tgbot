class Player {
    constructor(ROW, COL) {
        this.ROW = ROW
        this.COL = COL
        this.x = 0;
        this.y = 0;
        this.lx = this.x;
        this.ly = this.y;
        this.style = ":squid:"
    }
    moveLeft() {
        const temp = { x: this.x - 1, y: this.y }
        if (!this.canMove(temp)) return
        this.move(temp)
    }
    moveRight() {
        const temp = { x: this.x + 1, y: this.y }
        if (!this.canMove(temp)) return
        this.move(temp)
    }
    moveTop() {
        const temp = { x: this.x, y: this.y - 1 }
        if (!this.canMove(temp)) return
        this.move(temp)
    }
    moveBot() {
        const temp = { x: this.x, y: this.y + 1 }
        if (!this.canMove(temp)) return
        this.move(temp)
    }
    canMove(nextPos) {
        if (nextPos.y < 0 || nextPos.y >= this.ROW || nextPos.x < 0 || nextPos.x >= this.COL) return false
        return true
    }
    move(pos) {
        this.x = pos.x;
        this.y = pos.y;
    }
    getPos() {
        return { x: this.x, y: this.y }
    }
}

module.exports = Player