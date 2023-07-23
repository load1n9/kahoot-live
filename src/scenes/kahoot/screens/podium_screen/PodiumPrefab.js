
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../../components/ui_components/RoundedRectangleComponent";
import AutoSizeTextComponent from "../../../../components/ui_components/AutoSizeTextComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PodiumPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// kahoot_game_background_desert
		const kahoot_game_background_desert = scene.add.image(567, 962, "kahoot_game@4x", "kahoot_game/background_desert");
		kahoot_game_background_desert.scaleX = 2.072206123909567;
		kahoot_game_background_desert.scaleY = 2.4925556412304135;
		kahoot_game_background_desert.visible = false;
		kahoot_game_background_desert.tintTopLeft = 14323950;
		kahoot_game_background_desert.tintTopRight = 11759600;
		kahoot_game_background_desert.tintBottomLeft = 3351845;
		kahoot_game_background_desert.tintBottomRight = 4131427;
		this.add(kahoot_game_background_desert);

		// container_2
		const container_2 = scene.add.container(493, 1486);
		this.add(container_2);

		// rectangle1
		const rectangle1 = scene.add.rectangle(44, 689, 820, 128);
		rectangle1.scaleX = 0.35658812935429957;
		rectangle1.scaleY = 11.580091929876478;
		rectangle1.setOrigin(0.5, 1);
		rectangle1.isFilled = true;
		rectangle1.fillColor = 8935619;
		container_2.add(rectangle1);

		// question_txt
		const question_txt = scene.add.text(540, 982, "", {});
		question_txt.setOrigin(0.5, 0.5);
		question_txt.text = "13429";
		question_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "50px", "fontStyle": "bold", "stroke": "#ffffffff" });
		question_txt.setWordWrapWidth(820);
		this.add(question_txt);

		// question_txt_1
		const question_txt_1 = scene.add.text(540, 1042, "", {});
		question_txt_1.setOrigin(0.5, 0.5);
		question_txt_1.text = "13 out of 25";
		question_txt_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "40px", "fontStyle": "bold", "stroke": "#ffffffff" });
		question_txt_1.setWordWrapWidth(820);
		this.add(question_txt_1);

		// pfp_placeholder
		const pfp_placeholder = scene.add.image(540, 837, "kahoot_game@4x", "kahoot_game/test_pfp.jpeg");
		pfp_placeholder.scaleX = 1.3359882178385085;
		pfp_placeholder.scaleY = 1.3359882178385085;
		this.add(pfp_placeholder);

		// question_txt_2
		const question_txt_2 = scene.add.text(540, 571, "", {});
		question_txt_2.setOrigin(0.5, 0.5);
		question_txt_2.text = "Gravix";
		question_txt_2.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "50px", "fontStyle": "bold", "stroke": "#ffffffff", "shadow.stroke":true});
		question_txt_2.setWordWrapWidth(820);
		this.add(question_txt_2);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(539, 716, 250, 128);
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// question_txt_3
		const question_txt_3 = scene.add.text(540, 628, "", {});
		question_txt_3.setOrigin(0.5, 0.5);
		question_txt_3.text = "@calebja";
		question_txt_3.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "30px", "fontStyle": "bold", "stroke": "#ffffffff", "shadow.stroke":true});
		question_txt_3.setWordWrapWidth(820);
		this.add(question_txt_3);

		// rectangle1 (components)
		const rectangle1RoundedRectangleComponent = new RoundedRectangleComponent(rectangle1);
		rectangle1RoundedRectangleComponent.radius = 20;

		// question_txt (components)
		const question_txtAutoSizeTextComponent = new AutoSizeTextComponent(question_txt);
		question_txtAutoSizeTextComponent.maxWidth = 790;
		question_txtAutoSizeTextComponent.maxHeight = 115;

		// question_txt_1 (components)
		const question_txt_1AutoSizeTextComponent = new AutoSizeTextComponent(question_txt_1);
		question_txt_1AutoSizeTextComponent.maxWidth = 790;
		question_txt_1AutoSizeTextComponent.maxHeight = 115;

		// question_txt_2 (components)
		const question_txt_2AutoSizeTextComponent = new AutoSizeTextComponent(question_txt_2);
		question_txt_2AutoSizeTextComponent.maxWidth = 230;
		question_txt_2AutoSizeTextComponent.maxHeight = 100;

		// question_txt_3 (components)
		const question_txt_3AutoSizeTextComponent = new AutoSizeTextComponent(question_txt_3);
		question_txt_3AutoSizeTextComponent.maxWidth = 230;
		question_txt_3AutoSizeTextComponent.maxHeight = 100;

		this.rectangle1 = rectangle1;
		this.question_txt = question_txt;
		this.question_txt_1 = question_txt_1;
		this.pfp_placeholder = pfp_placeholder;
		this.question_txt_2 = question_txt_2;
		this.question_txt_3 = question_txt_3;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this._init();
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle1;
	/** @type {Phaser.GameObjects.Text} */
	question_txt;
	/** @type {Phaser.GameObjects.Text} */
	question_txt_1;
	/** @type {Phaser.GameObjects.Image} */
	pfp_placeholder;
	/** @type {Phaser.GameObjects.Text} */
	question_txt_2;
	/** @type {Phaser.GameObjects.Text} */
	question_txt_3;

	/* START-USER-CODE */

	// Write your code here.

	_init() {
		this.pfpImage = this.scene.add.rexCircleMaskImage(this.pfp_placeholder.x, this.pfp_placeholder.y, "kahoot_game@4x", "kahoot_game/test_pfp.jpeg", {
			maskType: 0,
		});
		this.pfpImage.setScale(this.pfp_placeholder.scaleX, this.pfp_placeholder.scaleY);
		this.pfp_placeholder.setVisible(false);
		this.add(this.pfpImage);

		// slow as fuck
		//var effect = this.rectangle1.roundedRect.postFX.addGlow(0x000000, 0.6, 0, false, 0.1, 50);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
