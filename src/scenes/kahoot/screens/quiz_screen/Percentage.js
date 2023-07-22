
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../../components/ui_components/RoundedRectangleComponent";
import AutoSizeTextComponent from "../../../../components/ui_components/AutoSizeTextComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Percentage extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container_2
		const container_2 = scene.add.container(0, 0);
		this.add(container_2);

		// rectangle1
		const rectangle1 = scene.add.rectangle(0, 0, 150, 50);
		rectangle1.isFilled = true;
		rectangle1.fillColor = 15797812;
		container_2.add(rectangle1);

		// square
		const square = scene.add.rectangle(-45, 1, 128, 128);
		square.scaleX = 0.18121060731302335;
		square.scaleY = 0.18121060731302335;
		square.visible = false;
		square.isFilled = true;
		this.add(square);

		// circle
		const circle = scene.add.ellipse(-45, 2, 128, 128);
		circle.scaleX = 0.18121060248148646;
		circle.scaleY = 0.18121060248148646;
		circle.visible = false;
		circle.isFilled = true;
		this.add(circle);

		// diamond
		const diamond = scene.add.rectangle(-45, 1, 128, 128);
		diamond.scaleX = 0.14965033204746947;
		diamond.scaleY = 0.14965033204746947;
		diamond.angle = 45;
		diamond.visible = false;
		diamond.isFilled = true;
		this.add(diamond);

		// triangle
		const triangle = scene.add.triangle(-45, 0, 0, 128, 64, 0, 128, 128);
		triangle.scaleX = 0.20825986285899373;
		triangle.scaleY = 0.20825986285899373;
		triangle.isFilled = true;
		this.add(triangle);

		// container2
		const container2 = scene.add.container(0, -56);
		this.add(container2);

		// rectangle2
		const rectangle2 = scene.add.rectangle(0, 25, 150, 200);
		rectangle2.setOrigin(0.5, 1);
		rectangle2.isFilled = true;
		rectangle2.fillColor = 15797812;
		container2.add(rectangle2);

		// count_txt
		const count_txt = scene.add.text(-24, 0, "", {});
		count_txt.setOrigin(0, 0.5);
		count_txt.text = "1392";
		count_txt.setStyle({ "color": "#FFFFFF", "fontFamily": "Montserrat", "fontSize": "30px", "fontStyle": "bold", "stroke": "#c6c6c6ff", "shadow.offsetY":4,"shadow.color": "#414040ff", "shadow.blur":2,"shadow.fill":true});
		count_txt.setLineSpacing(-4);
		count_txt.setWordWrapWidth(330);
		this.add(count_txt);

		// checkmark
		const checkmark = scene.add.image(1, -88, "kahoot_game@4x", "kahoot_game/checkmark-64");
		checkmark.scaleX = 0.853587639347312;
		checkmark.scaleY = 0.853587639347312;
		checkmark.visible = false;
		this.add(checkmark);

		// rectangle1 (components)
		const rectangle1RoundedRectangleComponent = new RoundedRectangleComponent(rectangle1);
		rectangle1RoundedRectangleComponent.radius = 20;

		// rectangle2 (components)
		const rectangle2RoundedRectangleComponent = new RoundedRectangleComponent(rectangle2);
		rectangle2RoundedRectangleComponent.radius = 20;

		// count_txt (components)
		const count_txtAutoSizeTextComponent = new AutoSizeTextComponent(count_txt);
		count_txtAutoSizeTextComponent.maxWidth = 70;
		count_txtAutoSizeTextComponent.maxHeight = 200;

		this.rectangle1 = rectangle1;
		this.square = square;
		this.circle = circle;
		this.diamond = diamond;
		this.triangle = triangle;
		this.rectangle2 = rectangle2;
		this.count_txt = count_txt;
		this.checkmark = checkmark;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle1;
	/** @type {Phaser.GameObjects.Rectangle} */
	square;
	/** @type {Phaser.GameObjects.Ellipse} */
	circle;
	/** @type {Phaser.GameObjects.Rectangle} */
	diamond;
	/** @type {Phaser.GameObjects.Triangle} */
	triangle;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle2;
	/** @type {Phaser.GameObjects.Text} */
	count_txt;
	/** @type {Phaser.GameObjects.Image} */
	checkmark;
	/** @type {string} */
	fillColor = "#ffffff";

	/* START-USER-CODE */

	// Write your code here.

	renderPercentage(choiceIndex, choiceJSON, percentages) {
		const colorNumber = parseInt(this.fillColor.substring(1, 7), 16);

		this.rectangle1.roundedRect.setFillStyle(colorNumber, 1);
		this.rectangle2.roundedRect.setFillStyle(colorNumber, 1);

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

		const choiceLetters = ['a','b','c','d'];
		const answerCount = this.scene.kahootGame.gameData.currentAnswers[choiceLetters[choiceIndex]];
		let percentage = percentages[choiceLetters[choiceIndex]];
		percentage = Math.max(percentage, 30);

		this.count_txt.setText(answerCount);
		this.count_txt["__AutoSizeTextComponent"].refreshCalculations();
		this.rectangle2.roundedRect.height = percentage;

		this.checkmark.setVisible(choiceJSON.correct);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
