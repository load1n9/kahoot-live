
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "../UserComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RoundedRectangleComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__RoundedRectangleComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.setVisible(false);
		this.roundRectangle = this.scene.add.rexRoundRectangle(this.gameObject.x, this.gameObject.y, this.gameObject.displayWidth, this.gameObject.displayHeight, this.radius, this.gameObject.fillColor, this.gameObject.fillAlpha);
		this.roundRectangle.setOrigin(this.gameObject.originX, this.gameObject.originY);
		this.gameObject.parentContainer.add(this.roundRectangle);
		this.gameObject.roundedRect = this.roundRectangle;

		/* END-USER-CTR-CODE */
	}

	/** @returns {RoundedRectangleComponent} */
	static getComponent(gameObject) {
		return gameObject["__RoundedRectangleComponent"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;
	/** @type {number} */
	radius = 10;

	/* START-USER-CODE */

	// Write your code here.

	start() {
		this.roundRectangle.setRadius(this.radius);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
