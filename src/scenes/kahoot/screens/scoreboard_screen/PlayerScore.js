
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../../components/ui_components/RoundedRectangleComponent";
import AutoSizeTextComponent from "../../../../components/ui_components/AutoSizeTextComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerScore extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container_2
		const container_2 = scene.add.container(-225.75930786132812, -64);
		this.add(container_2);

		// round_rect
		const round_rect = scene.add.rectangle(4.876708984375, 64, 128, 128);
		round_rect.scaleX = 6.187082000375847;
		round_rect.scaleY = 0.8689002362039443;
		round_rect.setOrigin(0, 0.5);
		round_rect.isFilled = true;
		round_rect.fillColor = 4065682;
		container_2.add(round_rect);

		// v_center
		const v_center = scene.add.container(0, 0);
		this.add(v_center);

		// name_txt
		const name_txt = scene.add.text(-83, 1, "", {});
		name_txt.setOrigin(0, 0.5);
		name_txt.text = "Gravix";
		name_txt.setStyle({ "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "45px", "fontStyle": "bold", "stroke": "#ffffffff", "strokeThickness":1,"shadow.color": "#333333" });
		v_center.add(name_txt);

		// pfp_placeholder
		const pfp_placeholder = scene.add.image(-150, 0, "kahoot_game@4x", "kahoot_game/test_pfp.jpeg");
		pfp_placeholder.scaleX = 0.7976676342067159;
		pfp_placeholder.scaleY = 0.7976676342067159;
		v_center.add(pfp_placeholder);

		// points_txt
		const points_txt = scene.add.text(550, 1, "", {});
		points_txt.setOrigin(1, 0.5);
		points_txt.text = "14823";
		points_txt.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "45px", "fontStyle": "bold", "stroke": "#ffffffff", "strokeThickness":1,"shadow.color": "#333333" });
		v_center.add(points_txt);

		// round_rect (components)
		const round_rectRoundedRectangleComponent = new RoundedRectangleComponent(round_rect);
		round_rectRoundedRectangleComponent.radius = 30;

		// name_txt (components)
		const name_txtAutoSizeTextComponent = new AutoSizeTextComponent(name_txt);
		name_txtAutoSizeTextComponent.maxWidth = 430;

		this.round_rect = round_rect;
		this.name_txt = name_txt;
		this.pfp_placeholder = pfp_placeholder;
		this.points_txt = points_txt;
		this.v_center = v_center;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	round_rect;
	/** @type {Phaser.GameObjects.Text} */
	name_txt;
	/** @type {Phaser.GameObjects.Image} */
	pfp_placeholder;
	/** @type {Phaser.GameObjects.Text} */
	points_txt;
	/** @type {Phaser.GameObjects.Container} */
	v_center;

	/* START-USER-CODE */

	// Write your code here.

	renderScore() {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
