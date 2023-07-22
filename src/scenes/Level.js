// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import KahootGame from "./kahoot/KahootGame";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("games-pack", "assets/content/global/games/games-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// kahootGame
		const kahootGame = new KahootGame(this, 0, 0);
		this.add.existing(kahootGame);

		this.kahootGame = kahootGame;

		this.events.emit("scene-awake");
	}

	/** @type {KahootGame} */
	kahootGame;

	/* START-USER-CODE */

    // Write your code here


    create() {

        this.editorCreate();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here