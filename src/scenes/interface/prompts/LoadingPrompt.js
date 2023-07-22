import BaseContainer from '@scenes/base/BaseContainer'

import { Animation, Button, Interactive, NineSlice } from '@components/components'


/* START OF COMPILED CODE */

export default class LoadingPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Container} */
        this.bar;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.progress;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(0, -40, 500, 250);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // bar
        const bar = scene.add.container(0, -21);
        bar.visible = false;
        this.add(bar);

        // outline
        const outline = scene.add.rectangle(0, 0, 200, 40);
        outline.isStroked = true;
        outline.strokeColor = 26265;
        outline.lineWidth = 4;
        bar.add(outline);

        // progress
        const progress = scene.add.rectangle(-90, 0, 180, 20);
        progress.scaleX = 0;
        progress.setOrigin(0, 0.5);
        progress.isFilled = true;
        bar.add(progress);

        // text
        const text = scene.add.text(-6, -20, "", {});
        text.setOrigin(0.5, 0);
        text.visible = false;
        text.setStyle({ "align": "center", "fixedWidth":800,"fixedHeight":40,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(text);

        // loadbar
        const loadbar = scene.add.sprite(-6, -43, "components@4x", "components/container/blue");
        this.add(loadbar);

        // load
        const load = scene.add.sprite(-92, -43, "components@4x", "components/container/blue");
        load.scaleX = 0.3;
        load.scaleY = 0.3;
        this.add(load);

        this.bg = bg;
        this.bar = bar;
        this.progress = progress;
        this.text = text;

        /* START-USER-CTR-CODE */

        this.scene = scene

        // Attached scene
        this.externalScene

        this.tween = scene.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(scene, progress = 0) {
        // Can't start without attached scene
        if (!scene) return

        this.externalScene = scene

        // Updates prompt content
        this.text.text = this.getString('loading', scene.sys.config)
        this.progress.scaleX = progress

        // Removes create event if it was previously added by close
        scene.events.off('create')

        scene.load.on('progress', (progress) => this.progress.scaleX = progress)

        scene.events.once('create', () => {
            this.visible = false
            this.scene.bringToTop()
        })

        this.visible = true
    }

    showText(text, progress = 0.15) {
        // Updates prompt content
        this.text.text = text;
        this.progress.scaleX = progress

        this.visible = true;
    }

    close() {
        this.visible = false;

        let scene = this.externalScene;
        if (!scene) return;

        scene.events.once('create', () => scene.scene.stop());
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
