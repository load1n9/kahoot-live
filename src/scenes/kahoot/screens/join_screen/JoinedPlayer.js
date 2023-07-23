
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../../components/ui_components/RoundedRectangleComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class JoinedPlayer extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container_2
		const container_2 = scene.add.container(-225.75930786132812, -64);
		this.add(container_2);

		// round_rect
		const round_rect = scene.add.rectangle(225.75930786132812, 64, 128, 128);
		round_rect.scaleX = 2.891520563173371;
		round_rect.scaleY = 0.8689002362039443;
		round_rect.isFilled = true;
		container_2.add(round_rect);

		// v_center
		const v_center = scene.add.container(0, 0);
		this.add(v_center);

		// name_txt
		const name_txt = scene.add.text(-66, 1, "", {});
		name_txt.setOrigin(0, 0.5);
		name_txt.text = "Gravix is cool";
		name_txt.setStyle({ "color": "#333333", "fontFamily": "Montserrat", "fontSize": "52px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":1,"shadow.color": "#333333" });
		v_center.add(name_txt);

		// pfp_placeholder
		const pfp_placeholder = scene.add.image(-119, 0, "kahoot_game@4x", "kahoot_game/test_pfp.jpeg");
		pfp_placeholder.scaleX = 0.7976676342067159;
		pfp_placeholder.scaleY = 0.7976676342067159;
		v_center.add(pfp_placeholder);

		// round_rect (components)
		new RoundedRectangleComponent(round_rect);

		this.round_rect = round_rect;
		this.name_txt = name_txt;
		this.pfp_placeholder = pfp_placeholder;
		this.v_center = v_center;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this._init();
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	round_rect;
	/** @type {Phaser.GameObjects.Text} */
	name_txt;
	/** @type {Phaser.GameObjects.Image} */
	pfp_placeholder;
	/** @type {Phaser.GameObjects.Container} */
	v_center;

	/* START-USER-CODE */

	// Write your code here.

	_init() {
		this.pfpImage = this.scene.add.rexCircleMaskImage(this.pfp_placeholder.x, this.pfp_placeholder.y, "kahoot_game@4x", "kahoot_game/test_pfp.jpeg", {
			maskType: 0,
		});
		this.pfpImage.setScale(this.pfp_placeholder.scaleX, this.pfp_placeholder.scaleY);
		this.pfp_placeholder.setVisible(false);
		this.v_center.add(this.pfpImage);
	}

	/**
	 * Main function to render the joined player.
	 * @param player
	 * @param profilePic
	 */
	renderPlayer(player, profilePic) {
		this.name_txt.setText(name);

		if (this.scene.kahootGame.loadedProfilePictures.includes()) {

		}

		// Load the image
		this.scene.load.image('dynamicImage', 'https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7f144a3653feea59c03465cd69da0bf0~c5_100x100.webp?x-expires=1690164000&x-signature=lLqsiOP3Bl%2FUQTZn%2FzWt%2BBE1I0I%3D');
		this.scene.load.start();
		this.scene.load.once('complete', function () {
			//const dynamicImage = this.scene.add.image(400, 300, 'dynamicImage');
		}, this);

		this.centerContainerAtZero(this.v_center);
		this.setRectangleSize();
	}

	setRectangleSize() {
		const roundRect = this.round_rect["__RoundedRectangleComponent"].roundRectangle;
		const containerWidth = this.v_center.getBounds().width + 40;

		roundRect.width = containerWidth;
	}

	centerContainerAtZero(container) {
		const containerWidth = container.getBounds().width;
		const containerCenterX = containerWidth / 2;
		const containerCenterY = container.getBounds().height / 2;

		// Move the container to place its center at (0, 0)
		container.x = -containerCenterX + 160;
		//container.y = -containerCenterY;
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
