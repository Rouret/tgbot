const Player = require("./Player")
class Game {
    ROW = 5
    COL = 8
    constructor() {
        console.log("Games created !")
        this.player = new Player(this.ROW, this.COL)
        this.mapText = ""
        this.mapData = []
        this.update();

    }
    update() {
        this.initData()
        this.updatePlayer()
        this.mapText = this.mapData.join("\n").replace(/,/g, "")
    }
    initData() {
        for (let y = 0; y < this.ROW; y++) {
            this.mapData[y] = []
            for (let x = 0; x < this.COL; x++) {
                this.mapData[y].push(":blue_square:")
            }
        }
    }
    updatePlayer() {
        const playerPos = this.player.getPos();
        this.mapData[playerPos.y][playerPos.x] = this.player.style
    }
    move(key) {
        switch (key) {
            case "q":
                this.player.moveLeft()
                break;
            case "z":
                this.player.moveTop()
                break;
            case "d":
                this.player.moveRight()
                break;
            case "s":
                this.player.moveBot()
                break;
        }
    }

    addToMap(string) {
        this.map += string
    }

}

module.exports = Game