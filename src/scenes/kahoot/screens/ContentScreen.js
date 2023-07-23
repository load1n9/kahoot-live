
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../components/ui_components/RoundedRectangleComponent";
import AutoSizeTextComponent from "../../../components/ui_components/AutoSizeTextComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ContentScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// kahoot_game_background_desert
		const kahoot_game_background_desert = scene.add.image(498, 961, "kahoot_game@4x", "kahoot_game/background_desert");
		kahoot_game_background_desert.scaleX = 2.406439323480412;
		kahoot_game_background_desert.scaleY = 2.406439323480412;
		this.add(kahoot_game_background_desert);

		// kahoot_game_study_background
		const kahoot_game_study_background = scene.add.image(513, 967, "kahoot_game@4x", "kahoot_game/study_background");
		kahoot_game_study_background.scaleX = 1.6318017983590587;
		kahoot_game_study_background.scaleY = 1.6318017983590587;
		kahoot_game_study_background.visible = false;
		this.add(kahoot_game_study_background);

		// kahoot_game_safe_area
		const kahoot_game_safe_area = scene.add.image(540, 960, "kahoot_game@4x", "kahoot_game/safe_area");
		kahoot_game_safe_area.visible = false;
		this.add(kahoot_game_safe_area);

		// title_container
		const title_container = scene.add.container(559, 51);
		this.add(title_container);

		// container_2
		const container_2 = scene.add.container(0, 0);
		title_container.add(container_2);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-19, 415, 820, 128);
		rectangle_1.scaleY = 1.7110375531315227;
		rectangle_1.isFilled = true;
		container_2.add(rectangle_1);

		// question_txt
		const question_txt = scene.add.text(-17, 415, "", {});
		question_txt.setOrigin(0.5, 0.5);
		question_txt.text = "Loading Content";
		question_txt.setStyle({ "align": "center", "color": "#333333", "fontFamily": "Montserrat", "fontSize": "70px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":3});
		question_txt.setWordWrapWidth(820);
		title_container.add(question_txt);

		// kahoot_game_kahoot_logo_white
		const kahoot_game_kahoot_logo_white = scene.add.image(549, 460, "kahoot_game@4x", "kahoot_game/kahoot_logo_white");
		kahoot_game_kahoot_logo_white.scaleX = 0.61120847277933;
		kahoot_game_kahoot_logo_white.scaleY = 0.61120847277933;
		kahoot_game_kahoot_logo_white.visible = false;
		this.add(kahoot_game_kahoot_logo_white);

		// v_load
		const v_load = scene.add.container(570, 675);
		v_load.scaleY = 0.6551982029952197;
		this.add(v_load);

		// load_rect
		const load_rect = scene.add.rectangle(-439, 426, 30, 50);
		load_rect.setOrigin(0, 0.5);
		load_rect.isFilled = true;
		load_rect.fillColor = 4593551;
		v_load.add(load_rect);

		// kahoot_game_test_content
		const kahoot_game_test_content = scene.add.image(536, 756, "kahoot_game@4x", "kahoot_game/test_content");
		kahoot_game_test_content.scaleX = 1.7658733585045037;
		kahoot_game_test_content.scaleY = 1.7658733585045037;
		this.add(kahoot_game_test_content);

		// desc_container
		const desc_container = scene.add.container(559, 677);
		this.add(desc_container);

		// container_22
		const container_22 = scene.add.container(0, 0);
		desc_container.add(container_22);

		// rectangle_12
		const rectangle_12 = scene.add.rectangle(-19, 415, 820, 128);
		rectangle_12.scaleY = 1.7110375531315227;
		rectangle_12.isFilled = true;
		container_22.add(rectangle_12);

		// desc_txt
		const desc_txt = scene.add.text(-17, 415, "", {});
		desc_txt.setOrigin(0.5, 0.5);
		desc_txt.text = "Choose the image that shows the correct computer part or device.";
		desc_txt.setStyle({ "align": "center", "color": "#333333", "fontFamily": "Montserrat", "fontSize": "70px", "stroke": "#333333", "strokeThickness":2});
		desc_txt.setLineSpacing(-2);
		desc_txt.setWordWrapWidth(820);
		desc_container.add(desc_txt);

		// rectangle_1 (components)
		const rectangle_1RoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1);
		rectangle_1RoundedRectangleComponent.radius = 20;

		// question_txt (components)
		const question_txtAutoSizeTextComponent = new AutoSizeTextComponent(question_txt);
		question_txtAutoSizeTextComponent.maxWidth = 820;
		question_txtAutoSizeTextComponent.maxHeight = 200;

		// load_rect (components)
		const load_rectRoundedRectangleComponent = new RoundedRectangleComponent(load_rect);
		load_rectRoundedRectangleComponent.radius = 20;

		// rectangle_12 (components)
		const rectangle_12RoundedRectangleComponent = new RoundedRectangleComponent(rectangle_12);
		rectangle_12RoundedRectangleComponent.radius = 20;

		// desc_txt (components)
		const desc_txtAutoSizeTextComponent = new AutoSizeTextComponent(desc_txt);
		desc_txtAutoSizeTextComponent.maxWidth = 800;
		desc_txtAutoSizeTextComponent.maxHeight = 190;

		this.rectangle_1 = rectangle_1;
		this.question_txt = question_txt;
		this.load_rect = load_rect;
		this.rectangle_12 = rectangle_12;
		this.desc_txt = desc_txt;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Text} */
	question_txt;
	/** @type {Phaser.GameObjects.Rectangle} */
	load_rect;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_12;
	/** @type {Phaser.GameObjects.Text} */
	desc_txt;

	/* START-USER-CODE */

	// Write your code here.

	renderScreen(kahootGame, questionJSON) {
		this.kahootGame = kahootGame;

		console.log('renderScreen() text:', questionJSON.title)
		// use questionJSON.title for content type questions
		this.question_txt.setText(questionJSON.title);
		this.question_txt["__AutoSizeTextComponent"].refreshCalculations();
		this.desc_txt.setText(questionJSON.description);
		this.desc_txt["__AutoSizeTextComponent"].refreshCalculations();

		this.scene.tweens.add({
			targets: this.load_rect.roundedRect,
			width: {from: 30, to: 820},
			duration: 3000,
			ease: 'Linear',
			repeat: 0, // Set to 0 if you don't want to repeat the tween
			yoyo: false, // Set to true if you want the tween to reverse after reaching the end,
			onComplete: function() {
				this.kahootGame.showNextQuestion();
			}.bind(this)
		});
	}

	adjustFontSizeToScreenWidth(text) {
		if (!text.defaultFontSize) {
			text.defaultFontSize = parseInt(text.style.fontSize);
		}

		let width = 1000;

		var size = text.defaultFontSize;

		if (text.wordWrap) {
			width = text.wordWrapWidth;
		}

		console.log(size, text.width, width, text.style.fontSize)

		while ((text.width > width) && parseInt(text.style.fontSize) > 16) {
			console.log(size)

			text.style.setFontSize(--size);
		}
	}


	fitText(content, max_width) {
		const scene = this.scene;
		let text = this.question_txt;

		// decrease font size until the text fits
		while (text.width > max_width) {
			let fontSize = parseInt(text.style.fontSize) - 2; // decrease by 2px
			text.setFontSize(fontSize + 'px');

			// you might want to set a lower limit to prevent the text from getting too small
			if (fontSize <= 8) {
				break;
			}
		}

		return text;
	}


	updateTextFontSize(text) {
		const MAX_WIDTH = 1080; // The maximum allowed width
		const MIN_FONT_SIZE = 16; // The minimum font size you want to set
		const MAX_FONT_SIZE = 48; // The maximum font size you want to set

		// Calculate the maximum font size that fits the text inside the MAX_WIDTH
		console.log('fontsize2', text.style.fontSize)
		const maxAllowedFontSize = (MAX_WIDTH / text.displayWidth) * text.style.fontSize;

		// Make sure the new font size stays within the defined bounds
		const newFontSize = Math.min(Math.max(maxAllowedFontSize, MIN_FONT_SIZE), MAX_FONT_SIZE);

		console.log('size', newFontSize)
		// Update the text's font size
		text.style.setFontSize(newFontSize);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
