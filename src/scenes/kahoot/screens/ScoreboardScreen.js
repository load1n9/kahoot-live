// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerScore from "./scoreboard_screen/PlayerScore";
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
		this.add(kahoot_game_safe_area);

		// playerScore
		const playerScore = new PlayerScore(scene, 369, 645);
		this.add(playerScore);

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
		question_txt.setStyle({
			"align": "center",
			"color": "#333333",
			"fontFamily": "Montserrat",
			"fontSize": "70px",
			"fontStyle": "bold",
			"stroke": "#333333",
			"strokeThickness": 3
		});
		question_txt.setWordWrapWidth(820);
		title_container.add(question_txt);

		// rectangle_1 (components)
		const rectangle_1RoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1);
		rectangle_1RoundedRectangleComponent.radius = 20;

		// question_txt (components)
		const question_txtAutoSizeTextComponent = new AutoSizeTextComponent(question_txt);
		question_txtAutoSizeTextComponent.maxWidth = 820;
		question_txtAutoSizeTextComponent.maxHeight = 200;

		this.playerScore = playerScore;
		this.rectangle_1 = rectangle_1;
		this.question_txt = question_txt;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {PlayerScore} */
	playerScore;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Text} */
	question_txt;

	/* START-USER-CODE */

	// Write your code here.

	renderScoreboard() {
		const players = {
			"its_gravix": {streak: 0, score: 0, displayName: "Gravix"},
			"playjos": {streak: 0, score: 0, displayName: "PlayJos TV"}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
