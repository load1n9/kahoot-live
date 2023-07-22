import { io } from "socket.io-client";

export default class KahootNetwork {
	constructor(kahootGame) {
		this.kahootGame = kahootGame;
	}

	connect() {
		this.socket = io("ws://localhost:3070", {
			reconnectionDelayMax: 10000
		});

		this.socket.on("connect", () => {
			console.log("Connected to the server.");

			this.socket.on('get_random_quiz', (quizJSON) => {
				console.log('recv > get_random_quiz', quizJSON);

				this.kahootGame.startNewGame(quizJSON);
			});
			this.socket.on('chat_answer', (username, displayName, answer) => {
				console.log('recv > chat_answer', username, displayName, answer);

				this.kahootGame.handleChatAnswer(username, displayName, answer);
			});

			this.socket.emit("get_random_quiz", "");
		});
	}
}