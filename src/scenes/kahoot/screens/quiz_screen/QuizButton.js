
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../../components/ui_components/RoundedRectangleComponent";
import AutoSizeTextComponent from "../../../../components/ui_components/AutoSizeTextComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class QuizButton extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// btn
		const btn = scene.add.container(0, 0);
		this.add(btn);

		// text_1
		const text_1 = scene.add.text(-43, 1.5, "", {});
		text_1.setOrigin(0, 0.5);
		text_1.text = "New text";
		btn.add(text_1);

		// rectangle
		const rectangle = scene.add.rectangle(0, 0, 390, 128);
		rectangle.scaleY = 1.8632045836753912;
		rectangle.isFilled = true;
		rectangle.fillColor = 15797812;
		btn.add(rectangle);

		// triangle
		const triangle = scene.add.triangle(-159, -3, 0, 128, 64, 0, 128, 128);
		triangle.scaleX = 0.20825986285899373;
		triangle.scaleY = 0.20825986285899373;
		triangle.isFilled = true;
		this.add(triangle);

		// diamond
		const diamond = scene.add.rectangle(-159, -2, 128, 128);
		diamond.scaleX = 0.14965033204746947;
		diamond.scaleY = 0.14965033204746947;
		diamond.angle = 45;
		diamond.visible = false;
		diamond.isFilled = true;
		this.add(diamond);

		// circle
		const circle = scene.add.ellipse(-159, -1, 128, 128);
		circle.scaleX = 0.18121060248148646;
		circle.scaleY = 0.18121060248148646;
		circle.visible = false;
		circle.isFilled = true;
		this.add(circle);

		// square
		const square = scene.add.rectangle(-159, -2, 128, 128);
		square.scaleX = 0.18121060731302335;
		square.scaleY = 0.18121060731302335;
		square.visible = false;
		square.isFilled = true;
		this.add(square);

		// answer_txt
		const answer_txt = scene.add.text(-127, 0, "", {});
		answer_txt.setOrigin(0, 0.5);
		answer_txt.text = "By sending";
		answer_txt.setStyle({ "color": "#FFFFFF", "fontFamily": "Montserrat", "fontSize": "70px", "fontStyle": "bold", "stroke": "#c6c6c6ff", "shadow.offsetY":4,"shadow.color": "#414040ff", "shadow.blur":2,"shadow.fill":true});
		answer_txt.setLineSpacing(-4);
		answer_txt.setWordWrapWidth(330);
		this.add(answer_txt);

		// answer_img
		const answer_img = scene.add.image(23, 0, "kahoot_game@4x", "kahoot_game/test_content");
		this.add(answer_img);

		// rectangle (components)
		const rectangleRoundedRectangleComponent = new RoundedRectangleComponent(rectangle);
		rectangleRoundedRectangleComponent.radius = 20;

		// answer_txt (components)
		const answer_txtAutoSizeTextComponent = new AutoSizeTextComponent(answer_txt);
		answer_txtAutoSizeTextComponent.maxWidth = 300;
		answer_txtAutoSizeTextComponent.maxHeight = 200;

		this.rectangle = rectangle;
		this.triangle = triangle;
		this.diamond = diamond;
		this.circle = circle;
		this.square = square;
		this.answer_txt = answer_txt;
		this.answer_img = answer_img;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.GameObjects.Triangle} */
	triangle;
	/** @type {Phaser.GameObjects.Rectangle} */
	diamond;
	/** @type {Phaser.GameObjects.Ellipse} */
	circle;
	/** @type {Phaser.GameObjects.Rectangle} */
	square;
	/** @type {Phaser.GameObjects.Text} */
	answer_txt;
	/** @type {Phaser.GameObjects.Image} */
	answer_img;
	/** @type {string} */
	btnFillColor = "#ffffff";
	/** @type {string} */
	answerLetter = "";

	/* START-USER-CODE */

	// Write your code here.

	renderButton(choiceIndex, choiceJSON) {
		const colorNumber = parseInt(this.btnFillColor.substring(1, 7), 16);

		this.rectangle.roundedRect.setFillStyle(colorNumber, 1);

		this.triangle.setVisible(false);
		this.diamond.setVisible(false);
		this.circle.setVisible(false);
		this.square.setVisible(false);

		// answer, image, correct
		switch (choiceIndex) {
			case 0:
				this.triangle.setVisible(true);
				break;
			case 1:
				this.diamond.setVisible(true);
				break;
			case 2:
				this.circle.setVisible(true);
				break;
			case 3:
				this.square.setVisible(true);
				break;
		}

		this.answer_txt.setVisible(choiceJSON.answer);
		this.answer_img.setVisible(choiceJSON.image);

		if (choiceJSON.answer) {
			this.answer_txt.setText(choiceJSON.answer);
			this.answer_txt["__AutoSizeTextComponent"].refreshCalculations();
			return;
		}
		if (choiceJSON.image) {
			// Load the image
			const dynamicId = `quiz-button-img-${choiceJSON.image.id}`;

			this.scene.load.image(dynamicId, `https://images-cdn.kahoot.it/${choiceJSON.image.id}?auto=webp&quality=10`);
			this.scene.load.start();
			this.scene.load.once('complete', function () {
				this.answer_img.setTexture(dynamicId);
				this.answer_img.setDisplaySize(300, 200);
			}, this);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
