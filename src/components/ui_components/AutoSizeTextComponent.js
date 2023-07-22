
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "../UserComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AutoSizeTextComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__AutoSizeTextComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @returns {AutoSizeTextComponent} */
	static getComponent(gameObject) {
		return gameObject["__AutoSizeTextComponent"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;
	/** @type {number} */
	maxWidth = 500;
	/** @type {number} */
	minTextSize = 16;
	/** @type {number} */
	maxHeight = 128;

	/* START-USER-CODE */

	// Write your code here.

	start() {
		this.refreshCalculations();
	}

	refreshCalculations() {
		this.adjustFontSizeToScreenWidth(this.gameObject, this.maxWidth, this.maxHeight, this.minTextSize);
	}

	adjustFontSizeToScreenWidth(text, width = 1000, height = 300, minSize=16) {
		if (!text.defaultFontSize) {
			text.defaultFontSize = parseInt(text.style.fontSize);
		}

		var size = text.defaultFontSize;

		text.style.setFontSize(size);

		if (text.wordWrap) {
			//width = text.wordWrapWidth;
		}

		//console.log(size, text.width, width, parseInt(text.style.fontSize))
		//console.log(text.text, text.height, height)

		while ((text.width > width || text.height > height) && parseInt(text.style.fontSize) > minSize) {
			text.style.setFontSize(--size);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
