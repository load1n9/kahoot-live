// You can write more code here
import PlayerScore from "./scoreboard_screen/PlayerScore";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../components/ui_components/RoundedRectangleComponent";
import AutoSizeTextComponent from "../../../components/ui_components/AutoSizeTextComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScoreboardScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// kahoot_game_study_background
		const kahoot_game_study_background = scene.add.image(513, 967, "kahoot_game@4x", "kahoot_game/study_background");
		kahoot_game_study_background.scaleX = 1.6318017983590587;
		kahoot_game_study_background.scaleY = 1.6318017983590587;
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
		rectangle_1.scaleX = 0.8883434456468009;
		rectangle_1.scaleY = 1.0077639062574946;
		rectangle_1.isFilled = true;
		container_2.add(rectangle_1);

		// question_txt
		const question_txt = scene.add.text(-17, 415, "", {});
		question_txt.setOrigin(0.5, 0.5);
		question_txt.text = "Scoreboard";
		question_txt.setStyle({ "align": "center", "color": "#333333", "fontFamily": "Montserrat", "fontSize": "70px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":3});
		question_txt.setWordWrapWidth(820);
		title_container.add(question_txt);

		// v_list
		const v_list = scene.add.container(0, 0);
		this.add(v_list);

		// v_list_elements
		const v_list_elements = scene.add.container(0, 0);
		v_list.add(v_list_elements);

		// mask_rect
		const mask_rect = scene.add.rectangle(69.9999771118164, 577.0000305175781, 950, 800);
		mask_rect.setOrigin(0, 0);
		mask_rect.visible = false;
		mask_rect.isFilled = true;
		this.add(mask_rect);

		// rectangle_1 (components)
		const rectangle_1RoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1);
		rectangle_1RoundedRectangleComponent.radius = 20;

		// question_txt (components)
		const question_txtAutoSizeTextComponent = new AutoSizeTextComponent(question_txt);
		question_txtAutoSizeTextComponent.maxWidth = 820;
		question_txtAutoSizeTextComponent.maxHeight = 200;

		this.rectangle_1 = rectangle_1;
		this.question_txt = question_txt;
		this.v_list_elements = v_list_elements;
		this.v_list = v_list;
		this.mask_rect = mask_rect;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this._init();
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Text} */
	question_txt;
	/** @type {Phaser.GameObjects.Container} */
	v_list_elements;
	/** @type {Phaser.GameObjects.Container} */
	v_list;
	/** @type {Phaser.GameObjects.Rectangle} */
	mask_rect;

	/* START-USER-CODE */

	// Write your code here.

	_init() {
		this.renderMask();
	}

	renderScoreboard() {
		const players = this.scene.kahootGame.gameData.players;
		let i = 0;

		for (const username in players) {
			const player = players[username];
			const scorePrefab = new PlayerScore(this.scene, 366, 630);
			const y = 630 + (i * 130);

			scorePrefab.renderScore(player.displayName, player.score, 'https://');
			scorePrefab.setY(y);
			this.v_list_elements.add(scorePrefab);

			i++;
		}

		const lastY = (Math.max(0, Object.keys(players).length-5)) * 130;

		this.v_list_elements.setY(-lastY);

		setTimeout(() => {
			this.scene.tweens.add({
				targets: this.v_list_elements,
				y: 0,
				duration: 3000,
				ease: 'Linear',
				onComplete: function () {
					setTimeout(() => {
						this.goToNextQuestion();
					}, 1000);
				}.bind(this)
			});
		}, 1000);
	}

	goToNextQuestion() {
		// Next question!
		console.log('[ScoreboardScene] Next question!');

		this.scene.kahootGame.showNextQuestion();
	}

	renderMask() {
		const maskGraphics = this.scene.make.graphics();
		maskGraphics.fillStyle(0xffffff); // Set the color of the mask (white in this case)
		maskGraphics.fillRect(this.mask_rect.x, this.mask_rect.y, this.mask_rect.width, this.mask_rect.height);
		const geometryMask = new Phaser.Display.Masks.GeometryMask(this.scene, maskGraphics);

		this.v_list.setMask(geometryMask);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
