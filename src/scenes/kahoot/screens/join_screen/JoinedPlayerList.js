// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import JoinedPlayer from "./JoinedPlayer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class JoinedPlayerList extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this._init();
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	_init() {
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this._start, this);
	}

	_start() {
		const joinedPlayer = new JoinedPlayer(this.scene, 100, 100);
		this.add(joinedPlayer);

		joinedPlayer.renderPlayer('asasdf', '')
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
