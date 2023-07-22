
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../components/ui_components/RoundedRectangleComponent";
import JoinedPlayerList from "./join_screen/JoinedPlayerList";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class JoinScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// kahoot_game_study_background
		const kahoot_game_study_background = scene.add.image(519, 965, "kahoot_game@4x", "kahoot_game/study_background");
		kahoot_game_study_background.scaleX = 1.6318017983590587;
		kahoot_game_study_background.scaleY = 1.6318017983590587;
		kahoot_game_study_background.visible = false;
		this.add(kahoot_game_study_background);

		// kahoot_game_kahoot_logo_white
		const kahoot_game_kahoot_logo_white = scene.add.image(540, 488, "kahoot_game@4x", "kahoot_game/kahoot_logo_white");
		kahoot_game_kahoot_logo_white.scaleX = 0.25114910156892595;
		kahoot_game_kahoot_logo_white.scaleY = 0.25114910156892595;
		this.add(kahoot_game_kahoot_logo_white);

		// kahoot_game_safe_area
		const kahoot_game_safe_area = scene.add.image(540, 960, "kahoot_game@4x", "kahoot_game/safe_area");
		kahoot_game_safe_area.visible = false;
		this.add(kahoot_game_safe_area);

		// v_top_rectangle
		const v_top_rectangle = scene.add.container(540, 306);
		this.add(v_top_rectangle);

		// container_2
		const container_2 = scene.add.container(0, 0);
		v_top_rectangle.add(container_2);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 39, 500, 128);
		rectangle_1.scaleX = 1.829790613068126;
		rectangle_1.scaleY = 0.832015484335328;
		rectangle_1.isFilled = true;
		container_2.add(rectangle_1);

		// text_1
		const text_1 = scene.add.text(-3, 38, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Chat to join the game!";
		text_1.setStyle({ "color": "#333333", "fontFamily": "Montserrat", "fontSize": "48px", "stroke": "#333333", "strokeThickness":2});
		v_top_rectangle.add(text_1);

		// joinedPlayerList
		const joinedPlayerList = new JoinedPlayerList(scene, 234, 808);
		this.add(joinedPlayerList);

		// rectangle_1 (components)
		new RoundedRectangleComponent(rectangle_1);

		this.rectangle_1 = rectangle_1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
