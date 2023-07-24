import Phaser from "phaser";
import Level from "./scenes/Level";
import Preload from "./scenes/Preload";
import RoundRectanglePlugin from 'phaser3-rex-plugins/plugins/roundrectangle-plugin.js';
import WebFontLoaderPlugin from 'phaser3-rex-plugins/plugins/webfontloader-plugin.js';
import CircleMaskImagePlugin from 'phaser3-rex-plugins/plugins/circlemaskimage-plugin.js';


class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");
	}

	preload() {
		this.load.rexWebFont({
			google: {
				families: ['Montserrat']
			},
			// testString: undefined,
			// testInterval: 20,
		});

		this.load.on('webfontactive', (fileObj, familyName) => {
			console.log('webfontactive', fileObj, familyName)
			this.fontActive = true;

			if (this.hasCreated) {
				setTimeout(() => {
					this.scene.start("Preload");
				}, 1000)
			}
		});

		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {
		this.hasCreated = true;

		if (this.fontActive) {
			setTimeout(() => {
				this.scene.start("Preload");
			}, 1000)
		}
	}
}

const game = new Phaser.Game({
	width: 1080,
	height: 1920,
	maxWidth: 1080,
	maxHeight: 1920,
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
		global: [{
			key: 'rexRoundRectanglePlugin',
			plugin: RoundRectanglePlugin,
			start: true
		},
			{
				key: 'rexWebFontLoader',
				plugin: WebFontLoaderPlugin,
				start: true
			},
			{
				key: 'rexCircleMaskImagePlugin',
				plugin: CircleMaskImagePlugin,
				start: true
			},
			// ...
		]
	},
	scene: [Boot, Preload, Level]
});

game.canvas.id = 'game-client'
game.scene.start("Boot");


