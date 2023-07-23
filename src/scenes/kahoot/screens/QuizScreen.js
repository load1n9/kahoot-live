
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
		kahoot_game_safe_area.visible = false;
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
		question_txt.text = "QuizScreen";
		question_txt.setStyle({ "align": "center", "color": "#333333", "fontFamily": "Montserrat", "fontSize": "70px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":3});
		question_txt.setWordWrapWidth(820);
		title_container.add(question_txt);

		// v_answer_buttons
		const v_answer_buttons = scene.add.container(0, 0);
		v_answer_buttons.visible = false;
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
		const v_question_active = scene.add.container(0, 68);
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
		v_percentages.visible = false;
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

		// title_container_bigger
		const title_container_bigger = scene.add.container(557.0685424804688, 48.74837875366211);
		title_container_bigger.visible = false;
		this.add(title_container_bigger);

		// container_233
		const container_233 = scene.add.container(0, 0);
		title_container_bigger.add(container_233);

		// rectangle_1222x
		const rectangle_1222x = scene.add.rectangle(-19, 469, 820, 128);
		rectangle_1222x.scaleY = 2.5808821763745464;
		rectangle_1222x.isFilled = true;
		container_233.add(rectangle_1222x);

		// question_big_txt
		const question_big_txt = scene.add.text(-17, 460, "", {});
		question_big_txt.setOrigin(0.5, 0.5);
		question_big_txt.text = "Loading Content";
		question_big_txt.setStyle({ "align": "center", "color": "#333333", "fontFamily": "Montserrat", "fontSize": "70px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":3});
		question_big_txt.setWordWrapWidth(820);
		title_container_bigger.add(question_big_txt);

		// v_type_in_chat
		const v_type_in_chat = scene.add.container(559, 668);
		v_type_in_chat.visible = false;
		this.add(v_type_in_chat);

		// container_233g
		const container_233g = scene.add.container(0, 0);
		v_type_in_chat.add(container_233g);

		// rectangle_1222xa
		const rectangle_1222xa = scene.add.rectangle(-19, 469, 820, 128);
		rectangle_1222xa.scaleY = 1.2617045062934324;
		rectangle_1222xa.isFilled = true;
		rectangle_1222xa.fillColor = 1272014;
		container_233g.add(rectangle_1222xa);

		// question_big_txta
		const question_big_txta = scene.add.text(-17, 460, "", {});
		question_big_txta.setOrigin(0.5, 0.5);
		question_big_txta.text = "Type your answer!";
		question_big_txta.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "70px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":3});
		question_big_txta.setWordWrapWidth(820);
		v_type_in_chat.add(question_big_txta);

		// v_open_ended_results
		const v_open_ended_results = scene.add.container(0, 0);
		v_open_ended_results.visible = false;
		this.add(v_open_ended_results);

		// containerxd
		const containerxd = scene.add.container(561, 479);
		v_open_ended_results.add(containerxd);

		// rectangle_1222xxdx
		const rectangle_1222xxdx = scene.add.rectangle(-19, 474.4155578613281, 820, 128);
		rectangle_1222xxdx.scaleY = 2.2994474597166916;
		rectangle_1222xxdx.isFilled = true;
		rectangle_1222xxdx.fillColor = 2459404;
		containerxd.add(rectangle_1222xxdx);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(-18, 418, 0, 128);
		rectangle_2.isFilled = true;
		containerxd.add(rectangle_2);

		// question_big_txt_1
		const question_big_txt_1 = scene.add.text(540, 747, "", {});
		question_big_txt_1.setOrigin(0.5, 0.5);
		question_big_txt_1.text = "The correct answer(s) were";
		question_big_txt_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "50px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":8});
		question_big_txt_1.setWordWrapWidth(820);
		v_open_ended_results.add(question_big_txt_1);

		// oe_correct_txt
		const oe_correct_txt = scene.add.text(540, 948, "", {});
		oe_correct_txt.setOrigin(0.5, 0.5);
		oe_correct_txt.text = "...";
		oe_correct_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "130px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":8,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.stroke":true});
		oe_correct_txt.setWordWrapWidth(820);
		v_open_ended_results.add(oe_correct_txt);

		// question_big_txt_3
		const question_big_txt_3 = scene.add.text(536, 1151, "", {});
		question_big_txt_3.setOrigin(0.5, 0.5);
		question_big_txt_3.text = "(no one lost their streak)";
		question_big_txt_3.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Montserrat", "fontSize": "40px", "fontStyle": "bold", "stroke": "#333333", "strokeThickness":7});
		question_big_txt_3.setWordWrapWidth(820);
		v_open_ended_results.add(question_big_txt_3);

		// rectangle_1 (components)
		const rectangle_1RoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1);
		rectangle_1RoundedRectangleComponent.radius = 20;

		// question_txt (components)
		const question_txtAutoSizeTextComponent = new AutoSizeTextComponent(question_txt);
		question_txtAutoSizeTextComponent.maxWidth = 800;
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

		// rectangle_1222x (components)
		const rectangle_1222xRoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1222x);
		rectangle_1222xRoundedRectangleComponent.radius = 20;

		// question_big_txt (components)
		const question_big_txtAutoSizeTextComponent = new AutoSizeTextComponent(question_big_txt);
		question_big_txtAutoSizeTextComponent.maxWidth = 800;
		question_big_txtAutoSizeTextComponent.maxHeight = 300;

		// rectangle_1222xa (components)
		const rectangle_1222xaRoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1222xa);
		rectangle_1222xaRoundedRectangleComponent.radius = 20;

		// rectangle_1222xxdx (components)
		const rectangle_1222xxdxRoundedRectangleComponent = new RoundedRectangleComponent(rectangle_1222xxdx);
		rectangle_1222xxdxRoundedRectangleComponent.radius = 20;

		// question_big_txt_1 (components)
		const question_big_txt_1AutoSizeTextComponent = new AutoSizeTextComponent(question_big_txt_1);
		question_big_txt_1AutoSizeTextComponent.maxWidth = 820;
		question_big_txt_1AutoSizeTextComponent.maxHeight = 320;

		// oe_correct_txt (components)
		const oe_correct_txtAutoSizeTextComponent = new AutoSizeTextComponent(oe_correct_txt);
		oe_correct_txtAutoSizeTextComponent.maxWidth = 750;
		oe_correct_txtAutoSizeTextComponent.maxHeight = 100;

		// question_big_txt_3 (components)
		const question_big_txt_3AutoSizeTextComponent = new AutoSizeTextComponent(question_big_txt_3);
		question_big_txt_3AutoSizeTextComponent.maxWidth = 820;
		question_big_txt_3AutoSizeTextComponent.maxHeight = 320;

		this.rectangle_1 = rectangle_1;
		this.question_txt = question_txt;
		this.title_container = title_container;
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
		this.rectangle_1222x = rectangle_1222x;
		this.question_big_txt = question_big_txt;
		this.title_container_bigger = title_container_bigger;
		this.rectangle_1222xa = rectangle_1222xa;
		this.v_type_in_chat = v_type_in_chat;
		this.rectangle_1222xxdx = rectangle_1222xxdx;
		this.question_big_txt_1 = question_big_txt_1;
		this.oe_correct_txt = oe_correct_txt;
		this.question_big_txt_3 = question_big_txt_3;
		this.v_open_ended_results = v_open_ended_results;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Text} */
	question_txt;
	/** @type {Phaser.GameObjects.Container} */
	title_container;
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
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1222x;
	/** @type {Phaser.GameObjects.Text} */
	question_big_txt;
	/** @type {Phaser.GameObjects.Container} */
	title_container_bigger;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1222xa;
	/** @type {Phaser.GameObjects.Container} */
	v_type_in_chat;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1222xxdx;
	/** @type {Phaser.GameObjects.Text} */
	question_big_txt_1;
	/** @type {Phaser.GameObjects.Text} */
	oe_correct_txt;
	/** @type {Phaser.GameObjects.Text} */
	question_big_txt_3;
	/** @type {Phaser.GameObjects.Container} */
	v_open_ended_results;

	/* START-USER-CODE */

	// Write your code here.

	renderScreen(kahootGame, questionJSON, quizType = 'quiz') {
		this.kahootGame = kahootGame;
		this.questionJSON = questionJSON;
		this.quizType = quizType;

		console.log('renderScreen() text:', questionJSON.title)
		// use questionJSON.title for content type questions
		this.question_txt.setText(questionJSON.question);
		this.question_txt["__AutoSizeTextComponent"].refreshCalculations();
		this.answers_txt.setText('0');
		this.answers_txt["__AutoSizeTextComponent"].refreshCalculations();
		this.v_open_ended_results.setVisible(false);

		const choices = questionJSON.choices;
		console.log('choices', choices, choices.length)

		const layoutNumber = 2; //todo: choices.length;

		console.log('TYPE', this.quizType)

		if (this.quizType === 'open_ended') {
			this.v_answer_buttons.setVisible(false);
			this.title_container.setVisible(false);
			this.title_container_bigger.setVisible(true);
			this.v_question_active.setY(99);
			this.v_percentages.setY(99);
			this.v_type_in_chat.setVisible(true);

			this.question_big_txt.setText(questionJSON.question);
			this.question_big_txt["__AutoSizeTextComponent"].refreshCalculations();
		} else {
			// Show buttons
			this[`layout${layoutNumber}`].setVisible(true);
			this.v_answer_buttons.setVisible(true);
			this.title_container.setVisible(true);
			this.title_container_bigger.setVisible(false);
			this.v_question_active.setY(0);
			this.v_percentages.setY(0);
			this.v_type_in_chat.setVisible(false);

			for (let i = 0; i < layoutNumber; i++) {
				const button = this[`btn${layoutNumber}_${i+1}`];
				const choice = choices[i];

				button.renderButton(i, choice);
			}
		}

		this.v_question_active.setVisible(true);
		this.v_percentages.setVisible(false);
		this.startTimer(questionJSON.time);

		// Play Music
		// todo: 20s, 30s, 60s
		this.kahootGame.stopAllMusic();
		this.kahootGame.music.kahoot_quiz_30.play();
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
		this.v_question_active.setVisible(false);

		// Calculate Percentages
		const currentAnswers = this.kahootGame.gameData.currentAnswers;
		const percentages = this.calculateOptionPercentages(currentAnswers, 200);

		// Render Percentages
		const choices = this.questionJSON.choices;
		const layoutNumber = 2; //todo: choices.length;

		const allAnswers = [];

		// Loop through the choices array and extract the answer strings
		for (const choice of choices) {
			allAnswers.push(choice.answer);
		}

		if (this.quizType === 'open_ended') {
			this.v_open_ended_results.setVisible(true);
			this.v_type_in_chat.setVisible(false);
			this.oe_correct_txt.setText(allAnswers.join('/'));
		} else {
			this[`p_layout${layoutNumber}`].setVisible(true);
			this.v_percentages.setVisible(true);

			for (let i = 0; i < layoutNumber; i++) {
				const percentage = this[`percentage${layoutNumber}_${i+1}`];
				const choice = choices[i];

				percentage.renderPercentage(i, choice, percentages);
			}
		}

		// Show scoreboard
		setTimeout(() => {
			this[`p_layout${layoutNumber}`].setVisible(false);
			this.kahootGame.hideScreens();
			this.kahootGame.scoreboardScreen.renderScoreboard();
			this.kahootGame.scoreboardScreen.setVisible(true);
		}, 3000);
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
