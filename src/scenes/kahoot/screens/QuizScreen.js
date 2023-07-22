
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import RoundedRectangleComponent from "../../../components/ui_components/RoundedRectangleComponent";
import AutoSizeTextComponent from "../../../components/ui_components/AutoSizeTextComponent";
import QuizButton from "./quiz_screen/QuizButton";
import Percentage from "./quiz_screen/Percentage";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class QuizScreen extends Phaser.GameObjects.Container {

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

		// kahoot_game_kahoot_logo_white
		const kahoot_game_kahoot_logo_white = scene.add.image(549, 460, "kahoot_game@4x", "kahoot_game/kahoot_logo_white");
		kahoot_game_kahoot_logo_white.scaleX = 0.61120847277933;
		kahoot_game_kahoot_logo_white.scaleY = 0.61120847277933;
		kahoot_game_kahoot_logo_white.visible = false;
		this.add(kahoot_game_kahoot_logo_white);

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

		// v_answer_buttons
		const v_answer_buttons = scene.add.container(0, 0);
		this.add(v_answer_buttons);

		// layout2
		const layout2 = scene.add.container(0, 0);
		v_answer_buttons.add(layout2);

		// btn2_1
		const btn2_1 = new QuizButton(scene, 337, 1066);
		layout2.add(btn2_1);

		// btn2_2
		const btn2_2 = new QuizButton(scene, 744, 1066);
		layout2.add(btn2_2);

		// layout3
		const layout3 = scene.add.container(0, 0);
		layout3.visible = false;
		v_answer_buttons.add(layout3);

		// btn_1
		const btn_1 = new QuizButton(scene, 752, 1072);
		layout3.add(btn_1);

		// btn_2
		const btn_2 = new QuizButton(scene, 345, 1072);
		btn_2.scaleX = 1;
		btn_2.scaleY = 1;
		layout3.add(btn_2);

		// v_question_active
		const v_question_active = scene.add.container(0, 0);
		v_question_active.visible = false;
		this.add(v_question_active);

		// question_image
		const question_image = scene.add.image(536, 756, "kahoot_game@4x", "kahoot_game/test_content");
		question_image.scaleX = 1.7658733585045037;
		question_image.scaleY = 1.7658733585045037;
		v_question_active.add(question_image);

		// v_answer_count
		const v_answer_count = scene.add.container(0, 19);
		v_question_active.add(v_answer_count);

		// container22
		const container22 = scene.add.container(929, 465);
		v_answer_count.add(container22);

		// rectangle_1222
		const rectangle_1222 = scene.add.rectangle(-22, 355, 820, 128);
		rectangle_1222.scaleX = 0.26349424979442865;
		rectangle_1222.scaleY = 0.4906609168710798;
		rectangle_1222.isFilled = true;
		rectangle_1222.fillColor = 4065682;
		container22.add(rectangle_1222);

		// ellipse_1
		const ellipse_1 = scene.add.ellipse(907, 695, 128, 128);
		ellipse_1.scaleX = 1.2177405076526764;
		ellipse_1.scaleY = 1.2177405076526764;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 4065682;
		v_answer_count.add(ellipse_1);

		// answers_txt
		const answers_txt = scene.add.text(908, 693, "", {});
		answers_txt.setOrigin(0.5, 0.5);
		answers_txt.text = "99";
		answers_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "75px", "fontStyle": "bold", "stroke": "#ffffffff", "strokeThickness":3});
		answers_txt.setWordWrapWidth(820);
		v_answer_count.add(answers_txt);

		// question_txt_2
		const question_txt_2 = scene.add.text(908, 819, "", {});
		question_txt_2.setOrigin(0.5, 0.5);
		question_txt_2.text = "Answers";
		question_txt_2.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "35px", "fontStyle": "bold", "stroke": "#333333" });
		question_txt_2.setWordWrapWidth(820);
		v_answer_count.add(question_txt_2);

		// v_timer
		const v_timer = scene.add.container(0, 0);
		v_question_active.add(v_timer);

		// ellipse
		const ellipse = scene.add.ellipse(186, 757, 128, 128);
		ellipse.scaleX = 1.2177405076526764;
		ellipse.scaleY = 1.2177405076526764;
		ellipse.isFilled = true;
		ellipse.fillColor = 4065682;
		v_timer.add(ellipse);

		// timer_txt
		const timer_txt = scene.add.text(187, 755, "", {});
		timer_txt.setOrigin(0.5, 0.5);
		timer_txt.text = "99";
		timer_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "75px", "fontStyle": "bold", "stroke": "#ffffffff", "strokeThickness":3});
		timer_txt.setWordWrapWidth(820);
		v_timer.add(timer_txt);

		// v_percentages
		const v_percentages = scene.add.container(0, 0);
		this.add(v_percentages);

		// p_layout2
		const p_layout2 = scene.add.container(0, 0);
		v_percentages.add(p_layout2);

		// percentage2_1
		const percentage2_1 = new Percentage(scene, 446, 872);
		p_layout2.add(percentage2_1);

		// percentage2_2
		const percentage2_2 = new Percentage(scene, 636, 872);
		p_layout2.add(percentage2_2);

		// p_layout4
		const p_layout4 = scene.add.container(0, 0);
		p_layout4.visible = false;
		v_percentages.add(p_layout4);

		// percentage4_1
		const percentage4_1 = new Percentage(scene, 253, 872);
		p_layout4.add(percentage4_1);

		// percentage4_2
		const percentage4_2 = new Percentage(scene, 443, 872);
		p_layout4.add(percentage4_2);

		// percentage4_3
		const percentage4_3 = new Percentage(scene, 633, 872);
		p_layout4.add(percentage4_3);

		// percentage4_4
		const percentage4_4 = new Percentage(scene, 823, 872);
		p_layout4.add(percentage4_4);

		// rectangle_1 (components)
		const rectangle_1RoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1);
		rectangle_1RoundedRectangleComponent.radius = 20;

		// question_txt (components)
		const question_txtAutoSizeTextComponent = new AutoSizeTextComponent(question_txt);
		question_txtAutoSizeTextComponent.maxWidth = 820;
		question_txtAutoSizeTextComponent.maxHeight = 200;

		// btn2_1 (prefab fields)
		btn2_1.btnFillColor = "#F10E34";

		// btn2_2 (prefab fields)
		btn2_2.btnFillColor = "#0565daff";

		// btn_1 (prefab fields)
		btn_1.btnFillColor = "#0565DA";

		// btn_2 (prefab fields)
		btn_2.btnFillColor = "#F10E34";

		// rectangle_1222 (components)
		const rectangle_1222RoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1222);
		rectangle_1222RoundedRectangleComponent.radius = 30;

		// answers_txt (components)
		const answers_txtAutoSizeTextComponent = new AutoSizeTextComponent(answers_txt);
		answers_txtAutoSizeTextComponent.maxWidth = 110;

		// timer_txt (components)
		const timer_txtAutoSizeTextComponent = new AutoSizeTextComponent(timer_txt);
		timer_txtAutoSizeTextComponent.maxWidth = 110;

		// percentage2_1 (prefab fields)
		percentage2_1.fillColor = "#F10E34";

		// percentage2_2 (prefab fields)
		percentage2_2.fillColor = "#0565daff";

		this.rectangle_1 = rectangle_1;
		this.question_txt = question_txt;
		this.btn2_1 = btn2_1;
		this.btn2_2 = btn2_2;
		this.layout2 = layout2;
		this.btn_1 = btn_1;
		this.btn_2 = btn_2;
		this.layout3 = layout3;
		this.v_answer_buttons = v_answer_buttons;
		this.question_image = question_image;
		this.rectangle_1222 = rectangle_1222;
		this.answers_txt = answers_txt;
		this.question_txt_2 = question_txt_2;
		this.timer_txt = timer_txt;
		this.v_question_active = v_question_active;
		this.percentage2_1 = percentage2_1;
		this.percentage2_2 = percentage2_2;
		this.p_layout2 = p_layout2;
		this.percentage4_1 = percentage4_1;
		this.percentage4_2 = percentage4_2;
		this.percentage4_3 = percentage4_3;
		this.percentage4_4 = percentage4_4;
		this.p_layout4 = p_layout4;
		this.v_percentages = v_percentages;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Text} */
	question_txt;
	/** @type {QuizButton} */
	btn2_1;
	/** @type {QuizButton} */
	btn2_2;
	/** @type {Phaser.GameObjects.Container} */
	layout2;
	/** @type {QuizButton} */
	btn_1;
	/** @type {QuizButton} */
	btn_2;
	/** @type {Phaser.GameObjects.Container} */
	layout3;
	/** @type {Phaser.GameObjects.Container} */
	v_answer_buttons;
	/** @type {Phaser.GameObjects.Image} */
	question_image;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1222;
	/** @type {Phaser.GameObjects.Text} */
	answers_txt;
	/** @type {Phaser.GameObjects.Text} */
	question_txt_2;
	/** @type {Phaser.GameObjects.Text} */
	timer_txt;
	/** @type {Phaser.GameObjects.Container} */
	v_question_active;
	/** @type {Percentage} */
	percentage2_1;
	/** @type {Percentage} */
	percentage2_2;
	/** @type {Phaser.GameObjects.Container} */
	p_layout2;
	/** @type {Percentage} */
	percentage4_1;
	/** @type {Percentage} */
	percentage4_2;
	/** @type {Percentage} */
	percentage4_3;
	/** @type {Percentage} */
	percentage4_4;
	/** @type {Phaser.GameObjects.Container} */
	p_layout4;
	/** @type {Phaser.GameObjects.Container} */
	v_percentages;

	/* START-USER-CODE */

	// Write your code here.

	renderScreen(kahootGame, questionJSON) {
		this.kahootGame = kahootGame;
		this.questionJSON = questionJSON;

		console.log('renderScreen() text:', questionJSON.title)
		// use questionJSON.title for content type questions
		this.question_txt.setText(questionJSON.question);

		const choices = questionJSON.choices;

		console.log('choices', choices, choices.length)

		const layoutNumber = 2; //todo: choices.length;

		this[`layout${layoutNumber}`].setVisible(true);

		for (let i = 0; i < layoutNumber; i++) {
			const button = this[`btn${layoutNumber}_${i+1}`];
			const choice = choices[i];

			button.renderButton(i, choice);
		}

		this.v_question_active.setVisible(true);
		this.v_percentages.setVisible(false);
		this.startTimer(questionJSON.time);
	}

	startTimer(timeMS) {
		this.timerTime = timeMS - 28000; // todo

		this.timer_txt.setText((this.timerTime/1000).toString());
		this.stopTimer();

		this.timer = setInterval(() => {
			this.timerTime -= 1000;

			this.timer_txt.setText((this.timerTime/1000).toString());

			if (this.timerTime <= 0) {
				this.stopTimer();
				this.onTimerFinished();
			}
		}, 1000)
	}

	stopTimer() {
		clearInterval(this.timer);
	}

	onTimerFinished() {
		// Show final answer percentages
		this.v_percentages.setVisible(true);
		this.v_question_active.setVisible(false);

		// Calculate Percentages
		const currentAnswers = this.kahootGame.gameData.currentAnswers;
		const percentages = this.calculateOptionPercentages(currentAnswers, 200);

		// Render Percentages
		const choices = this.questionJSON.choices;
		const layoutNumber = 2; //todo: choices.length;

		this[`p_layout${layoutNumber}`].setVisible(true);

		for (let i = 0; i < layoutNumber; i++) {
			const percentage = this[`percentage${layoutNumber}_${i+1}`];
			const choice = choices[i];

			percentage.renderPercentage(i, choice, percentages);
		}
	}

	calculateOptionPercentages(answers, maxValue = 100) {
		// Calculate the total number of answers
		const totalAnswers = Object.values(answers).reduce((acc, val) => acc + val, 0);

		// Calculate the percentage for each option
		const optionPercentages = {};
		for (const key in answers) {
			optionPercentages[key] = (answers[key] / totalAnswers) * maxValue;
		}

		return optionPercentages;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
