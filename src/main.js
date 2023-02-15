import Phaser from "phaser"
import Level from "./scenes/Level";
import Preload from "./scenes/Preload";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {

       this.scene.start("Preload");
    }
}

const game = new Phaser.Game({
    width: 1520,
    height: 960,
    maxWidth: 1520,
    maxHeight: 960,
    backgroundColor: "#2f2f2f",
    clearBeforeRender: true,
    roundPixels: true,
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH,
        autoRound: true
    },
    dom: {
        createContainer: true
    },
    fps: {
        forceSetTimeOut: false
    },
    render: {
        roundPixels: true,
        antialias: true,
        antialiasGL: false,
        clearBeforeRender: true,
        transparent: false,
        powerPreference: 'high-performance',
    },
    physics: {
        default: "matter",
        matter: {
            debug: window.location.hostname === 'localhost',
        }
    },
    plugins: {
        global: [],
    },
    scene: [Boot, Preload, Level]
});

game.canvas.id = 'game-client'
game.scene.start("Boot");


