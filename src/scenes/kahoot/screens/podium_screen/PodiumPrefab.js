
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

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(539, 716, 250, 128);
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// v_names
		const v_names = scene.add.container(541.0754284521582, 595.7348543996383);
		this.add(v_names);

		// display_name_txt
		const display_name_txt = scene.add.text(-1.075428452158235, -24.734854399638266, "", {});
		display_name_txt.setOrigin(0.5, 0.5);
		display_name_txt.text = "Gravix";
		display_name_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "50px", "fontStyle": "bold", "stroke": "#ffffffff", "shadow.stroke":true});
		display_name_txt.setWordWrapWidth(820);
		v_names.add(display_name_txt);

		// username_txt
		const username_txt = scene.add.text(-1.075428452158235, 32.265145600361734, "", {});
		username_txt.setOrigin(0.5, 0.5);
		username_txt.text = "@calebja";
		username_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "30px", "fontStyle": "bold", "stroke": "#ffffffff", "shadow.stroke":true});
		username_txt.setWordWrapWidth(820);
		v_names.add(username_txt);

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

		// display_name_txt (components)
		const display_name_txtAutoSizeTextComponent = new AutoSizeTextComponent(display_name_txt);
		display_name_txtAutoSizeTextComponent.maxWidth = 230;
		display_name_txtAutoSizeTextComponent.maxHeight = 100;

		// username_txt (components)
		const username_txtAutoSizeTextComponent = new AutoSizeTextComponent(username_txt);
		username_txtAutoSizeTextComponent.maxWidth = 230;
		username_txtAutoSizeTextComponent.maxHeight = 100;

		this.rectangle1 = rectangle1;
		this.question_txt = question_txt;
		this.question_txt_1 = question_txt_1;
		this.pfp_placeholder = pfp_placeholder;
		this.display_name_txt = display_name_txt;
		this.username_txt = username_txt;
		this.v_names = v_names;

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
	display_name_txt;
	/** @type {Phaser.GameObjects.Text} */
	username_txt;
	/** @type {Phaser.GameObjects.Container} */
	v_names;

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

	playNameAnimation1() {
		this.v_names.setScale(0.8, 0.8);

		const chain = this.scene.tweens.chain({
			targets: [this.v_names],
			tweens: [
				{
					scale: { value: 0.8, duration: 1 },
					ease: 'power3',
					duration: 1
				},
				{
					scale: { value: 1.05, duration: 400 },
					ease: Phaser.Math.Easing.Quartic.InOut,
					duration: 300
				},
				{
					scale: { value: 1, duration: 300 },
					ease: Phaser.Math.Easing.Quartic.InOut,
					duration: 300
				},
			]
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
