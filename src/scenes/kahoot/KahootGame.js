// You can write more code here
import KahootNetwork from "./KahootNetwork";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import JoinScreen from "./screens/JoinScreen";
import QuestionScreen from "./screens/QuestionScreen";
import ContentScreen from "./screens/ContentScreen";
import QuizScreen from "./screens/QuizScreen";
import ScoreboardScreen from "./screens/ScoreboardScreen";
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
		this.add(contentScreen);

		// quizScreen
		const quizScreen = new QuizScreen(scene, 0, 0);
		quizScreen.visible = true;
		this.add(quizScreen);

		// scoreboardScreen
		const scoreboardScreen = new ScoreboardScreen(scene, 0, 0);
		this.add(scoreboardScreen);

		this.game_background = game_background;
		this.questionScreen = questionScreen;
		this.contentScreen = contentScreen;
		this.quizScreen = quizScreen;
		this.scoreboardScreen = scoreboardScreen;

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

	/* START-USER-CODE */

	// Write your code here.

	_init() {
		this.loadedProfilePictures = [];

		this.kahootNetwork = new KahootNetwork(this);
		this.kahootNetwork.connect();

		this.gameData;

		this.resetGame();
	}

	resetGame() {
		this.quizJSON = undefined;
		this.gameData = {
			currentQuestionId: 0,
			currentAnswerCount: 0,
			currentAnswers: {a: 0, b: 0, c: 0, d: 0},
			players: {}
		}
	}

	getCurrentQuestion() {
		return this.quizJSON.kahoot.questions[this.gameData.currentQuestionId]
	}

	startNewGame(quizJSON) {
		this.resetGame();

		this.quizJSON = quizJSON;

		this.showCurrentQuestion();
		this.scoreboardScreen.renderScoreboard();
	}

	hideScreens() {
		this.quizScreen.setVisible(false);
		this.contentScreen.setVisible(false);
		this.questionScreen.setVisible(false);
	}

	showNextQuestion() {
		this.gameData.currentQuestionId++;
		console.log('Showing next question.', this.gameData.currentQuestionId);
		this.showCurrentQuestion();
	}

	showCurrentQuestion() {
		const question = this.getCurrentQuestion();

		console.log(question);

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
				this.questionScreen.renderScreen(this, this.getCurrentQuestion());
				break;
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

		// Calculate Player Score
		const player = this.gameData.players[username];
		const currentQuestion = this.getCurrentQuestion();
		const choices = currentQuestion.choices;
		const choiceIndex = letters.indexOf(answer);
		const choice = choices[choiceIndex];

		/**
		 * todo: Single-select questions offer up to 1000 points when a player responds correctly.
		 * Multi-select questions offer up to 500 points per correct answer.
		 */

		if (choice.correct) {
			player.streak++;

			const timerTime = this.quizScreen.timerTime / 1000;
			const responseTime = (currentQuestion.time / 1000) - timerTime;

			// Kahoot Score Calculation
			// https://support.kahoot.com/hc/en-us/articles/115002303908-How-points-work
			const POINTS_POSSIBLE = 1000;
			let points = (1 - ((responseTime / timerTime) / 2)) * POINTS_POSSIBLE;

			points += this.calculatePointsForStreak(player.streak);
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
