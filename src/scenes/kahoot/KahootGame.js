// You can write more code here
import KahootNetwork from "./KahootNetwork";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import JoinScreen from "./screens/JoinScreen";
import QuestionScreen from "./screens/QuestionScreen";
import ContentScreen from "./screens/ContentScreen";
import QuizScreen from "./screens/QuizScreen";
import ScoreboardScreen from "./screens/ScoreboardScreen";
import PodiumScreen from "./screens/podium_screen/PodiumScreen";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class KahootGame extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// game_background
		const game_background = scene.add.image(513, 963, "kahoot_game@4x", "kahoot_game/study_background");
		game_background.scaleX = 1.6318017983590587;
		game_background.scaleY = 1.6318017983590587;
		this.add(game_background);

		// joinScreen
		const joinScreen = new JoinScreen(scene, 0, 0);
		joinScreen.visible = false;
		this.add(joinScreen);

		// questionScreen
		const questionScreen = new QuestionScreen(scene, 0, 0);
		questionScreen.visible = false;
		this.add(questionScreen);

		// contentScreen
		const contentScreen = new ContentScreen(scene, 0, 0);
		contentScreen.visible = false;
		this.add(contentScreen);

		// quizScreen
		const quizScreen = new QuizScreen(scene, 0, 0);
		quizScreen.visible = false;
		this.add(quizScreen);

		// scoreboardScreen
		const scoreboardScreen = new ScoreboardScreen(scene, 0, 0);
		scoreboardScreen.visible = false;
		this.add(scoreboardScreen);

		// podiumScreen
		const podiumScreen = new PodiumScreen(scene, 0, 0);
		podiumScreen.visible = false;
		this.add(podiumScreen);

		this.game_background = game_background;
		this.questionScreen = questionScreen;
		this.contentScreen = contentScreen;
		this.quizScreen = quizScreen;
		this.scoreboardScreen = scoreboardScreen;
		this.podiumScreen = podiumScreen;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this._init();
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	game_background;
	/** @type {QuestionScreen} */
	questionScreen;
	/** @type {ContentScreen} */
	contentScreen;
	/** @type {QuizScreen} */
	quizScreen;
	/** @type {ScoreboardScreen} */
	scoreboardScreen;
	/** @type {PodiumScreen} */
	podiumScreen;

	/* START-USER-CODE */

	// Write your code here.

	_init() {
		this.loadedProfilePictures = [];

		this.kahootNetwork = new KahootNetwork(this);
		this.kahootNetwork.connect();

		this.gameData;
		this.music = {
			kahoot_podium: this.scene.sound.add('kahoot_podium', {loop:true}),
			kahoot_gong: this.scene.sound.add('kahoot_gong', {loop:false}),
			kahoot_lobby: this.scene.sound.add('kahoot_lobby', {loop:true}),
			kahoot_quiz_20: this.scene.sound.add('kahoot_quiz_20', {loop:false}),
			kahoot_quiz_30: this.scene.sound.add('kahoot_quiz_30', {loop:false}),
		}

		this.resetGame();
		this.music.kahoot_lobby.play();
	}

	stopAllMusic() {
		this.music.kahoot_lobby.stop();
		this.music.kahoot_podium.stop();
		this.music.kahoot_quiz_20.stop();
		this.music.kahoot_quiz_30.stop();
	}

	resetGame() {
		this.quizJSON = undefined;
		this.gameData = {
			currentQuestionId: 0,
			currentAnswerCount: 0,
			currentAnswers: {a: 0, b: 0, c: 0, d: 0},
			currentOpenEndedAnswers: [],
			players: {}
		}
	}

	getCurrentQuestion() {
		return this.quizJSON.kahoot.questions[this.gameData.currentQuestionId]
	}

	isFinalQuestion() {
		const maxQuestions = this.quizJSON.kahoot.questions.length;

		return (this.gameData.currentQuestionId + 1) >= maxQuestions;
	}

	startNewGame(quizJSON) {
		this.resetGame();

		this.quizJSON = quizJSON;

		this.showCurrentQuestion();
	}

	hideScreens() {
		this.quizScreen.setVisible(false);
		this.contentScreen.setVisible(false);
		this.questionScreen.setVisible(false);
		this.scoreboardScreen.setVisible(false);
		this.podiumScreen.setVisible(false);
	}

	showNextQuestion() {
		if (this.scene.kahootGame.isFinalQuestion()) {
			console.log('[KahootGame] Actually, it is the last question. Podium!');
			this.showPodium();
			return;
		}

		this.gameData.currentQuestionId++;
		console.log('Showing next question.', this.gameData.currentQuestionId);
		this.showCurrentQuestion();
	}

	showPodium() {
		this.hideScreens();
		this.podiumScreen.renderPodium();
		this.podiumScreen.setVisible(true);
	}

	showCurrentQuestion() {
		return this.showPodium()
		const question = this.getCurrentQuestion();

		console.log(question);

		this.gameData.currentAnswers = {a: 0, b: 0, c: 0, d: 0};
		this.gameData.currentAnswerCount = 0;
		this.hideScreens();

		switch (question.type) {
			case 'content': {
				this.contentScreen.setVisible(true);
				this.contentScreen.renderScreen(this, this.getCurrentQuestion());
				break;
			}
			case 'quiz': {
				this.questionScreen.setVisible(true);
				this.questionScreen.renderScreen(this, this.getCurrentQuestion(), question.type);
				break;
			}
			case 'open_ended': {
				this.questionScreen.setVisible(true);
				this.questionScreen.renderScreen(this, this.getCurrentQuestion(), question.type);
				break;
			}
			default: {
				// unsupported question type
				console.error('[KahootGame] Removing unsupported question type:', question.type);
				this.removeUnsupportedQuestionType(question.type);
			}
		}
	}

	/**
	 * We are removing unsupported question types as we go.
	 * At the end, any question types that are unsupported will be gone from the working JSON.
	 * This looks like something that would break something two months from now.
	 * @param type
	 */
	removeUnsupportedQuestionType(type) {
		const questions = this.quizJSON.kahoot.questions;

		for (let i = 0; i < questions.length; i++) {
			const question = questions[i];

			if (question.type === type) {
				// Remove question from the array
				questions.splice(i, 1);
				i--;
			}
		}
	}

	handleChatAnswer(username, displayName, answer) {
		// Spawn Player
		if (!this.gameData.players[username]) {
			this.gameData.players[username] = {streak: 0, score: 0, displayName}
		}

		if (!this.quizScreen.visible) {
			return;
		}
		if (this.quizScreen.timerTime <= 0) {
			return;
		}

		answer = answer.toLowerCase();

		const letters = ['a', 'b', 'c', 'd'];

		if (!letters.includes(answer)) {
			return console.log('Invalid answer ', answer, username);
		}

		this.gameData.currentAnswerCount++;
		this.gameData.currentAnswers[answer]++;

		// Faster than num.toString().length
		const oldCounterLength = Math.ceil(Math.log10(this.gameData.currentAnswerCount));
		const newCounterLength = Math.ceil(Math.log10(this.gameData.currentAnswerCount + 1));

		this.quizScreen.answers_txt.setText(this.gameData.currentAnswerCount);

		// Only refresh text size calculations when needed
		if (newCounterLength > oldCounterLength) {
			this.quizScreen.answers_txt["__AutoSizeTextComponent"].refreshCalculations();
		}

		let isCorrect = false;

		// Calculate Player Score
		const player = this.gameData.players[username];
		const currentQuestion = this.getCurrentQuestion();
		const choices = currentQuestion.choices;
		// Get Choice JSON
		const choiceIndex = letters.indexOf(answer);
		const choice = choices[choiceIndex];

		/**
		 * todo: Single-select questions offer up to 1000 points when a player responds correctly.
		 * Multi-select questions offer up to 500 points per correct answer.
		 */
		switch (currentQuestion.type) {
			case 'open_ended': {
				for (let i = 0; i < choices.length; i++) {
					if (choices[i].answer.toLowerCase() === answer) {
						isCorrect = true; 
					}
				}
				break;
			}
			default: {
				isCorrect = choice.correct;
			}
		}

		if (isCorrect) {
			player.streak++;

			const timerTime = this.quizScreen.timerTime / 1000;
			const responseTime = (currentQuestion.time / 1000) - timerTime;

			// Kahoot Score Calculation
			// https://support.kahoot.com/hc/en-us/articles/115002303908-How-points-work
			const POINTS_POSSIBLE = 1000;
			let points = Math.max(0, (1 - ((responseTime / timerTime) / 2)) * POINTS_POSSIBLE);

			//points += this.calculatePointsForStreak(player.streak);
			player.score += points;
		} else {
			player.streak = 0;
		}
	}

	calculatePointsForStreak(streak) {
		const maxBonusPoints = 500;

		// Calculate bonus points based on the streak level
		let bonusPoints = 0;
		if (streak >= 2 && streak <= 4) {
			bonusPoints = (streak - 1) * 100;
		} else if (streak >= 5) {
			bonusPoints = maxBonusPoints;
		}

		return bonusPoints;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
