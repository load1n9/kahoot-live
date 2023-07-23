
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PodiumPrefab from "./PodiumPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PodiumScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// kahoot_game_background_desert
		const kahoot_game_background_desert = scene.add.image(543, 975, "kahoot_game@4x", "kahoot_game/background_desert");
		kahoot_game_background_desert.scaleX = 2.072206123909567;
		kahoot_game_background_desert.scaleY = 2.4925556412304135;
		kahoot_game_background_desert.tintTopLeft = 14323950;
		kahoot_game_background_desert.tintTopRight = 11759600;
		kahoot_game_background_desert.tintBottomLeft = 3351845;
		kahoot_game_background_desert.tintBottomRight = 4131427;
		this.add(kahoot_game_background_desert);

		// kahoot_game_safe_area
		const kahoot_game_safe_area = scene.add.image(540, 960, "kahoot_game@4x", "kahoot_game/safe_area");
		kahoot_game_safe_area.visible = false;
		this.add(kahoot_game_safe_area);

		// v_anim
		const v_anim = scene.add.container(0, 0);
		this.add(v_anim);

		// podium1
		const podium1 = new PodiumPrefab(scene, 0, 0);
		podium1.scaleX = 1;
		podium1.scaleY = 1;
		podium1.visible = true;
		v_anim.add(podium1);

		// podium2
		const podium2 = new PodiumPrefab(scene, -276, 109);
		podium2.visible = true;
		v_anim.add(podium2);

		// podium3
		const podium3 = new PodiumPrefab(scene, 280, 200);
		podium3.visible = true;
		v_anim.add(podium3);

		this.podium1 = podium1;
		this.podium2 = podium2;
		this.podium3 = podium3;

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @type {PodiumPrefab} */
	podium1;
	/** @type {PodiumPrefab} */
	podium2;
	/** @type {PodiumPrefab} */
	podium3;

	/* START-USER-CODE */

	// Write your code here.

	renderPodium() {
		// Play Music
		this.scene.kahootGame.stopAllMusic();
		this.scene.kahootGame.music.kahoot_podium.play();

		this.podium1.finalPos = {x: this.podium1.x, y: this.podium1.y, scale: this.podium1.scaleX};
		this.podium2.finalPos = {x: this.podium2.x, y: this.podium2.y, scale: this.podium2.scaleX};
		this.podium3.finalPos = {x: this.podium3.x, y: this.podium3.y, scale: this.podium3.scaleX};

		this.podium1.setY(1407);
		this.podium2.setY(1407);
		this.podium3.setY(1407);

		this.podiumToPraise(this.podium1);
	}

	podiumToPraise(podium) {
		const praise = {x: -328, y: -616, scale: 1.64}

		setTimeout(async () => {
			const chain = this.scene.tweens.chain({
				targets: podium,
				tweens: [
					{
						x: praise.x,
						y: praise.y,
						scale: { value: praise.scale, duration: 1000 },
						ease: 'power3',
						duration: 750
					},
					{
						scale: { value: praise.scale, duration: 2000, ease: 'power2' },
						onComplete: function() {
							console.log('GIVE NAME')
						}.bind(this)
					},
					{
						scale: { value: praise.scale, duration: 1000, ease: 'power2' },
						onComplete: function() {

						}.bind(this)
					},
					{
						scale: { value: podium.finalPos.scale, duration: 550, ease: 'power2' },
						x: { value: podium.finalPos.x, duration: 550, ease: 'power2' },
						y: { value: podium.finalPos.y, duration: 550, ease: 'power2' }
					},
				]
			});
		}, 1000);
	}

	podiumToHumble() {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
