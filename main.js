// Soal Edukasi: Besaran dan Satuan
const quizData = [
    // Soal 1-10: Besaran Pokok & Satuan
    { question: "Apa satuan Sistem Internasional (SI) untuk besaran Gaya?", options: ["Newton", "Joule", "Pascal", "Watt"], answerIndex: 0 },
    { question: "Besaran yang memiliki nilai dan arah disebut?", options: ["Besaran Skalar", "Besaran Pokok", "Besaran Vektor", "Besaran Turunan"], answerIndex: 2 },
    { question: "Manakah yang merupakan satuan dari besaran pokok Massa?", options: ["Gram", "Kilogram", "Ton", "Kuintal"], answerIndex: 1 },
    { question: "Alat ukur yang digunakan untuk mengukur kuat arus listrik adalah?", options: ["Voltmeter", "Amperemeter", "Ohmmeter", "Termometer"], answerIndex: 1 },
    { question: "Besaran turunan Kecepatan diturunkan dari besaran pokok?", options: ["Panjang dan Waktu", "Massa dan Panjang", "Waktu dan Suhu", "Massa dan Waktu"], answerIndex: 0 },
    { question: "Satuan SI untuk Suhu adalah?", options: ["Celcius", "Fahrenheit", "Kelvin", "Reamur"], answerIndex: 2 },
    { question: "Manakah yang BUKAN merupakan besaran pokok?", options: ["Suhu", "Intensitas Cahaya", "Volume", "Jumlah Zat"], answerIndex: 2 },
    { question: "Satuan Internasional untuk Intensitas Cahaya adalah?", options: ["Candela", "Lumen", "Lux", "Watt"], answerIndex: 0 },
    { question: "Satuan Internasional untuk besaran Jumlah Zat adalah?", options: ["Kilogram", "Mol", "Molar", "Atom"], answerIndex: 1 },
    { question: "Besaran pokok yang memiliki satuan Ampere adalah?", options: ["Kuat Arus Listrik", "Tegangan Listrik", "Daya Listrik", "Hambatan Listrik"], answerIndex: 0 },

    // Soal 11-20: Besaran Turunan
    { question: "Massa jenis diturunkan dari besaran pokok?", options: ["Massa dan Waktu", "Panjang dan Suhu", "Massa dan Panjang", "Massa dan Kuat Arus"], answerIndex: 2 },
    { question: "Satuan dari besaran Tekanan (Pascal) setara dengan?", options: ["N/m", "N/m²", "kg.m/s", "Joule/s"], answerIndex: 1 },
    { question: "Daya adalah usaha per satuan waktu, satuannya adalah?", options: ["Joule", "Newton", "Watt", "Pascal"], answerIndex: 2 },
    { question: "Satuan energi dalam Sistem Internasional (SI) adalah?", options: ["Newton", "Watt", "Pascal", "Joule"], answerIndex: 3 },
    { question: "Percepatan adalah perubahan kecepatan per satuan waktu. Satuannya adalah?", options: ["m/s", "m/s²", "km/jam", "m²/s"], answerIndex: 1 },
    { question: "Volume ruang balok termasuk besaran turunan yang diturunkan dari besaran pokok?", options: ["Massa", "Waktu", "Panjang", "Suhu"], answerIndex: 2 },
    { question: "Besaran Gaya diturunkan dari besaran pokok?", options: ["Massa, Panjang, Waktu", "Massa dan Panjang", "Panjang dan Waktu", "Massa dan Waktu"], answerIndex: 0 },
    { question: "Satu Joule setara dengan?", options: ["1 N.m", "1 N/m", "1 kg.m/s", "1 Watt/s"], answerIndex: 0 },
    { question: "Usaha (Work) diturunkan dari besaran fisika?", options: ["Gaya dan Jarak", "Gaya dan Waktu", "Massa dan Kecepatan", "Massa dan Waktu"], answerIndex: 0 },
    { question: "Frekuensi memiliki satuan Hertz, yang secara matematis setara dengan?", options: ["s", "1/s", "m/s", "rad/s"], answerIndex: 1 },

    // Soal 21-30: Dimensi Besaran
    { question: "Dimensi dari besaran Panjang adalah?", options: ["[M]", "[L]", "[T]", "[I]"], answerIndex: 1 },
    { question: "Dimensi dari besaran Kecepatan adalah?", options: ["[L][T]^-1", "[M][L][T]^-2", "[L][T]^-2", "[M][L]^-3"], answerIndex: 0 },
    { question: "Dimensi dari besaran Gaya adalah?", options: ["[M][L][T]^-1", "[M][L][T]^-2", "[M][L]^2[T]^-2", "[M][L]^-1[T]^-2"], answerIndex: 1 },
    { question: "Dimensi dari besaran Energi (Usaha) adalah?", options: ["[M][L][T]^-2", "[M][L]^2[T]^-2", "[M][L]^-1[T]^-2", "[M][L]^2[T]^-3"], answerIndex: 1 },
    { question: "Dimensi [M][L]^-3 menunjukkan dimensi dari besaran?", options: ["Kecepatan", "Massa Jenis", "Gaya", "Percepatan"], answerIndex: 1 },
    { question: "Dimensi dari besaran Daya adalah?", options: ["[M][L]^2[T]^-2", "[M][L]^2[T]^-3", "[M][L][T]^-2", "[M][L][T]^-3"], answerIndex: 1 },
    { question: "Dimensi [M][L]^-1[T]^-2 merupakan dimensi dari besaran?", options: ["Usaha", "Tekanan", "Gaya", "Massa Jenis"], answerIndex: 1 },
    { question: "Dimensi dari besaran Momentum adalah?", options: ["[M][L][T]^-1", "[M][L][T]^-2", "[M][L]^2[T]^-1", "[M][T]^-1"], answerIndex: 0 },
    { question: "Jika [θ] adalah dimensi suhu, maka besaran pokok Suhu memiliki simbol dimensi?", options: ["[T]", "[θ]", "[K]", "[S]"], answerIndex: 1 },
    { question: "Sistem dimensi dapat digunakan untuk memeriksa kebenaran suatu?", options: ["Eksperimen", "Data pengamatan", "Rumus fisika", "Hasil percobaan"], answerIndex: 2 },

    // Soal 31-40: Konversi & Awalan Satuan
    { question: "Satu milisekon sama dengan berapa sekon?", options: ["0,1 s", "0,01 s", "0,001 s", "1000 s"], answerIndex: 2 },
    { question: "Berapa nilai 1 kilometer dalam satuan meter?", options: ["10 m", "100 m", "1000 m", "10000 m"], answerIndex: 2 },
    { question: "1 mega (M) setara dengan kelipatan?", options: ["10^3", "10^6", "10^9", "10^-6"], answerIndex: 1 },
    { question: "1 mikrometer setara dengan berapa meter?", options: ["10^-3 m", "10^-6 m", "10^-9 m", "10^-12 m"], answerIndex: 1 },
    { question: "Nano memiliki faktor pengali sebesar?", options: ["10^-3", "10^-6", "10^-9", "10^-12"], answerIndex: 2 },
    { question: "Kecepatan 36 km/jam setara dengan berapa m/s?", options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"], answerIndex: 1 },
    { question: "Kecepatan 72 km/jam setara dengan berapa m/s?", options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"], answerIndex: 2 },
    { question: "1 liter setara dengan?", options: ["1 m³", "1 dm³", "1 cm³", "1 mm³"], answerIndex: 1 },
    { question: "Satu jam terdiri dari berapa detik?", options: ["360", "60", "3600", "36000"], answerIndex: 2 },
    { question: "Awalan 'Giga' (G) mewakili pengali sebesar?", options: ["10^3", "10^6", "10^9", "10^12"], answerIndex: 2 },

    // Soal 41-50: Alat Ukur Fisika
    { question: "Alat yang digunakan untuk mengukur massa suatu benda adalah?", options: ["Termometer", "Neraca", "Amperemeter", "Jangka Sorong"], answerIndex: 1 },
    { question: "Jangka sorong sangat akurat untuk mengukur?", options: ["Waktu", "Tegangan", "Diameter dalam botol", "Massa jenis"], answerIndex: 2 },
    { question: "Batas ketelitian jangka sorong pada umumnya adalah?", options: ["1 mm", "0,1 mm", "0,01 mm", "0,001 mm"], answerIndex: 1 },
    { question: "Alat untuk mengukur ketebalan selembar kertas yang paling tepat adalah?", options: ["Penggaris", "Jangka Sorong", "Mikrometer Sekrup", "Roll Meter"], answerIndex: 2 },
    { question: "Batas ketelitian mikrometer sekrup adalah?", options: ["0,1 mm", "0,01 mm", "0,001 mm", "1 mm"], answerIndex: 1 },
    { question: "Alat pengukur kelajuan pada kendaraan bermotor disebut?", options: ["Tachometer", "Speedometer", "Odometer", "Altimeter"], answerIndex: 1 },
    { question: "Stopwatch digunakan untuk mengukur besaran?", options: ["Kecepatan", "Massa", "Suhu", "Waktu"], answerIndex: 3 },
    { question: "Alat untuk mengukur tegangan listrik adalah?", options: ["Voltmeter", "Amperemeter", "Ohmmeter", "Wattmeter"], answerIndex: 0 },
    { question: "Dynamometer (neraca pegas) digunakan untuk mengukur?", options: ["Massa", "Gaya/Berat", "Tekanan", "Kecepatan"], answerIndex: 1 },
    { question: "Besaran fisika yang hanya memiliki nilai saja disebut?", options: ["Besaran Skalar", "Besaran Vektor", "Besaran Turunan", "Besaran Utama"], answerIndex: 0 }
];

// Arsitektur Level Dasar (Menangani semua logika fisika dan UI)
class BaseLevel extends Phaser.Scene {
    constructor(key) {
        super({ key: key });
        this.maxEnergy = 100;
    }

    init() {
        this.currentEnergy = this.maxEnergy;
        this.isGamePaused = false;
        this.currentCapsule = null;
        this.isInvulnerable = false;
        this.capsulesCollected = 0;
        this.totalCapsules = 0;
    }

    preload() {
        this.load.image('player', 'assets/Players/Player Blue/playerBlue_stand.png');
        this.load.image('finish', 'assets/Other/doorGreen.png');

        // Items & Decorations
        this.load.image('gemYellow', 'assets/Items/yellowGem.png');
        this.load.image('gemGreen', 'assets/Items/greenGem.png');
        this.load.image('gemBlue', 'assets/Items/blueGem.png');
        this.load.image('plantBrown', 'assets/Other/plantDark_1.png');
        this.load.image('plantGreen', 'assets/Other/plantGreen_1.png');
        this.load.image('plantBlue', 'assets/Other/plantBlue_1.png');

        // Audio
        this.load.audio('bgm', 'assets/sound/backsound-game.mp3');
        this.load.audio('sfx_hit', 'assets/sound/lowDown.ogg');
    }

    setupLevel(bgKey, tileKey, enemyKey, crystalKey, plantKey, layoutArray, nextLevel) {
        this.nextLevel = nextLevel;

        // Background TileSprite untuk parallax scrolling
        this.bg = this.add.tileSprite(0, 0, 5120, 720, bgKey).setOrigin(0, 0);
        this.bg.setScrollFactor(0.2); // Parallax effect

        // Mainkan BGM global jika belum main
        if (!this.sound.get('bgm')) {
            let bgMusic = this.sound.add('bgm', { loop: true, volume: 0.5 });
            bgMusic.play();
        }

        // Atur Batas Fisika dan Kamera
        this.physics.world.setBounds(0, 0, 5120, 720);
        this.cameras.main.setBounds(0, 0, 5120, 720);

        this.enemies = this.physics.add.group();
        this.capsules = this.physics.add.group();
        this.platforms = this.physics.add.staticGroup();

        let playerX = 100, playerY = 300;
        let finishX = 5000, finishY = 300;

        // Parse layout
        for (let y = 0; y < layoutArray.length; y++) {
            for (let x = 0; x < layoutArray[y].length; x++) {
                const char = layoutArray[y][x];
                const px = x * 32 + 16;
                const py = y * 32 + 16;

                if (char === 'X') {
                    let tile = this.platforms.create(px, py, tileKey);
                    tile.setScale(0.5);
                    tile.refreshBody();
                } else if (char === 'P') {
                    playerX = px;
                    playerY = py;
                } else if (char === 'F') {
                    finishX = px;
                    finishY = py;
                } else if (char === 'C') {
                    let cap = this.capsules.create(px, py, crystalKey);
                    cap.setVelocity(Phaser.Math.Between(-30, 30), Phaser.Math.Between(-30, 30));
                    cap.setBounce(1);
                    cap.setCollideWorldBounds(true);
                } else if (char === 'T') {
                    let plant = this.add.image(px, py + 16, plantKey);
                    plant.setOrigin(0.5, 1); // Agar pangkal tanaman pas menempel di atas tanah
                } else if (char === 'E') {
                    let enemy = this.enemies.create(px, py, enemyKey);
                    enemy.setCollideWorldBounds(true);
                    enemy.setBounce(1);
                    enemy.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(-100, 100));
                    enemy.rotationSpeed = Phaser.Math.FloatBetween(-0.05, 0.05);
                }
            }
        }

        this.totalCapsules = this.capsules.getChildren().length;

        // Setup Player
        this.player = this.physics.add.sprite(playerX, playerY, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setDrag(150);
        this.player.setMaxVelocity(400);

        // Kamera mengikuti player
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

        // Setup Finish Portal
        this.finishPortal = this.physics.add.sprite(finishX, finishY, 'finish');
        this.finishPortal.setImmovable(true);
        this.finishPortal.setAlpha(0.5);

        // Collisions
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.capsules, this.platforms);

        this.physics.add.collider(this.player, this.enemies, this.hitEnemy, null, this);
        this.physics.add.overlap(this.player, this.capsules, this.collectCapsule, null, this);
        this.physics.add.overlap(this.player, this.finishPortal, this.reachFinish, null, this);
        this.physics.add.collider(this.enemies, this.enemies);

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('W,S,A,D');

        // UI Text
        this.capsuleText = this.add.text(350, 15, `Permata: 0/${this.totalCapsules} | ${this.scene.key}`, {
            fontFamily: 'Orbitron',
            fontSize: '18px',
            fill: '#00ffcc',
            stroke: '#000000',
            strokeThickness: 3
        });
        this.capsuleText.setScrollFactor(0); // Tetap diam di layar saat kamera bergerak

        this.updateEnergyBar();

        // Update reference for UI buttons
        window.activeLevel = this;
    }

    update() {
        if (this.isGamePaused) return;

        const accel = 600;

        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.player.setAccelerationX(-accel);
            this.player.setFlipX(true);
        } else if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.player.setAccelerationX(accel);
            this.player.setFlipX(false);
        } else {
            this.player.setAccelerationX(0);
        }

        if (this.cursors.up.isDown || this.keys.W.isDown) {
            this.player.setAccelerationY(-accel);
        } else if (this.cursors.down.isDown || this.keys.S.isDown) {
            this.player.setAccelerationY(accel);
        } else {
            this.player.setAccelerationY(0);
        }

        this.player.setRotation(this.player.body.velocity.x * 0.001);

        this.enemies.children.iterate((enemy) => {
            if (enemy) enemy.rotation += enemy.rotationSpeed || 0.02;
        });
    }

    hitEnemy(player, enemy) {
        if (this.isGamePaused || this.isInvulnerable) return;

        // Jeda BGM sejenak agar efek tumbukan lebih mendominasi
        let bgm = this.sound.get('bgm');
        if (bgm && bgm.isPlaying) bgm.pause();

        const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, player.x, player.y);
        const knockbackForce = 350;
        player.setVelocity(Math.cos(angle) * knockbackForce, Math.sin(angle) * knockbackForce);

        this.currentEnergy -= 20;
        this.updateEnergyBar();

        // Mainkan SFX
        this.sound.play('sfx_hit');

        if (this.currentEnergy <= 0) {
            if (bgm) bgm.stop(); // Hentikan BGM sepenuhnya jika Game Over
            this.gameOver("Energi kamu habis! Game Over.");
            return;
        }

        this.isInvulnerable = true;
        this.tweens.add({
            targets: player,
            alpha: 0.2,
            duration: 150,
            yoyo: true,
            repeat: 5,
            onComplete: () => {
                this.isInvulnerable = false;
                player.setAlpha(1);
                // Lanjutkan BGM setelah masa kebal selesai
                if (bgm && bgm.isPaused) bgm.resume();
            }
        });
    }

    collectCapsule(player, capsule) {
        if (this.isGamePaused) return;
        this.physics.pause();
        this.isGamePaused = true;
        this.currentCapsule = capsule;

        // Matikan BGM sementara agar pemain fokus menjawab soal
        let bgm = this.sound.get('bgm');
        if (bgm && bgm.isPlaying) bgm.pause();

        this.showQuizModal();
    }

    reachFinish(player, portal) {
        if (this.isGamePaused) return;

        if (this.capsulesCollected >= this.totalCapsules) {
            if (this.nextLevel) {
                // Sembunyikan semua fisika
                this.physics.pause();
                // Transisi ke level selanjutnya
                this.scene.start(this.nextLevel);
            } else {
                this.gameOver("Selamat! Kamu berhasil menamatkan petualangan ini!", true);
            }
        } else {
            const angle = Phaser.Math.Angle.Between(portal.x, portal.y, player.x, player.y);
            player.setVelocity(Math.cos(angle) * 200, Math.sin(angle) * 200);

            this.tweens.add({
                targets: this.capsuleText,
                scaleX: 1.2,
                scaleY: 1.2,
                duration: 100,
                yoyo: true,
                repeat: 2
            });
        }
    }

    updateEnergyBar() {
        this.currentEnergy = Phaser.Math.Clamp(this.currentEnergy, 0, this.maxEnergy);
        const fillPercent = (this.currentEnergy / this.maxEnergy) * 100;

        const barFill = document.getElementById('energy-bar-fill');
        barFill.style.width = fillPercent + '%';

        if (fillPercent < 30) {
            barFill.style.background = 'linear-gradient(90deg, #ff0055, #ff3333)';
        } else {
            barFill.style.background = 'linear-gradient(90deg, #00ffcc, #00b3ff)';
        }
    }

    updateCapsuleUI() {
        this.capsuleText.setText(`Permata: ${this.capsulesCollected}/${this.totalCapsules} | ${this.scene.key}`);

        if (this.capsulesCollected >= this.totalCapsules) {
            this.finishPortal.setAlpha(1);
            this.tweens.add({
                targets: this.finishPortal,
                scaleX: 1.1,
                scaleY: 1.1,
                duration: 500,
                yoyo: true,
                repeat: -1
            });
        }
    }

    showQuizModal() {
        const modal = document.getElementById('quiz-modal');
        const questionText = document.getElementById('quiz-question');
        const optionsContainer = document.getElementById('quiz-options');

        const randomQuestion = Phaser.Utils.Array.GetRandom(quizData);

        questionText.textContent = randomQuestion.question;
        optionsContainer.innerHTML = '';

        randomQuestion.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = opt;
            btn.onclick = () => window.activeLevel.handleAnswer(index === randomQuestion.answerIndex);
            optionsContainer.appendChild(btn);
        });

        modal.classList.remove('hidden');
    }

    handleAnswer(isCorrect) {
        const modal = document.getElementById('quiz-modal');
        modal.classList.add('hidden');

        // Lanjutkan BGM
        let bgm = this.sound.get('bgm');
        if (bgm && bgm.isPaused) bgm.resume();

        if (isCorrect) {
            this.currentEnergy = this.maxEnergy;
            this.updateEnergyBar();
            this.currentCapsule.destroy();
            this.capsulesCollected++;
            this.updateCapsuleUI();
        } else {
            const angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, this.currentCapsule.x, this.currentCapsule.y);
            this.player.setVelocity(Math.cos(angle + Math.PI) * 200, Math.sin(angle + Math.PI) * 200);
        }

        this.isGamePaused = false;
        this.physics.resume();
    }

    gameOver(message, isWin = false) {
        this.physics.pause();
        this.isGamePaused = true;

        const modal = document.getElementById('end-modal');
        const titleText = document.getElementById('end-title');
        const msgText = document.getElementById('end-message');
        const btn = document.getElementById('restart-btn');

        titleText.textContent = isWin ? "Tamat!" : "Game Over!";
        titleText.style.color = isWin ? "#00ffcc" : "#ff3366";
        msgText.textContent = message;

        btn.onclick = () => {
            modal.classList.add('hidden');
            this.scene.start('Level1'); // Reset dari awal Level 1
        };

        modal.classList.remove('hidden');
    }
}

class Level1 extends BaseLevel {
    constructor() { super('Level1'); }
    preload() {
        super.preload();
        this.load.image('bg1', 'assets/Backgrounds/set1_background.png');
        this.load.image('tileBrown', 'assets/Tiles/Brown tiles/tileBrown_02.png');
        this.load.image('enemy1', 'assets/Enemies/enemyFloating_1.png');
    }
    create() {
        const L1 = [
            '................................................................................................................................................................',
            '................................................................................................................................................................',
            '................................................................................................................................................................',
            '....C...........................................................................................................................................................',
            '..XXXXX...........XXXXX...................C.....................................................................................................................',
            '.........E..............................XXXXX...........XXXXX...................C...............................................................................',
            '.......XXXXX...............C...................E..............................XXXXX...........XXXXX...................E.......................................',
            '.........................XXXXX...............XXXXX...............C...................E..............................XXXXX.....................................',
            '...............................................................XXXXX...............XXXXX...............C.............................C........................',
            '.....................................................................................................XXXXX.........................XXXX.....................',
            '...P..E............................XX.......................................................................................................................',
            '.XXXXXXX...........................XX.......E............................XX...............................................................E...............',
            '.........XXXXX......E..............XX.....XXXXXXX........................XX.......E............................XX.......................XXXXX.............',
            '...................................................XXXXX......E..........XX.....XXXXXXX........................XX.........................................',
            '................C........................................................................XXXXX......E..........XX...........C.............................',
            '.......E.......XXX.......................................C.................................................................XXX............................',
            '.................................................E.......XXX.....................................C..........................................................',
            '.......................................................................................E.......XXX...........................................F............',
            '..........................E.......................................E......................................................................XXXXXX...........',
            '.........................XXX.....................................XXX.......................................E............................................',
            '..XX......T...................T...........XX..........T.......................T...XX......................XXX...........T.................................',
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        ];
        this.setupLevel('bg1', 'tileBrown', 'enemy1', 'gemYellow', 'plantBrown', L1, 'Level2');
    }
}

class Level2 extends BaseLevel {
    constructor() { super('Level2'); }
    preload() {
        super.preload();
        this.load.image('bg2', 'assets/Backgrounds/set4_background.png');
        this.load.image('tileGreen', 'assets/Tiles/Green tiles/tileGreen_02.png');
        this.load.image('enemy2', 'assets/Enemies/enemyFloating_3.png'); // Varian musuh lain
    }
    create() {
        const L2 = [
            '................................................................................................................................................................',
            '................................................................................................................................................................',
            '................................................................................................................................................................',
            '................................................................................................................................................................',
            '...................C............................................................................................................................................',
            '..................XXX...................................C.......................................................................................................',
            '......E................................................XXX...................................C..................................................................',
            '....XXXXX.......................C..........E................................................XXX...............................................................',
            '...............................XXX.......XXXXX.......................C..........E................................................F............................',
            '....................................................................XXX.......XXXXX.......................C..........E...........XX...........................',
            '...P...................E.................................................................................XXX.......XXXXX.........XX...........................',
            '.XXXXXXX.............XXXXX.............................E.......................................................................XX...........................',
            '.........XXXXX...........................E...........XXXXX.............................E......................................................................',
            '...........................C...........XXXXX...........................E...........XXXXX......................................................................',
            '..........................XXX........................................XXXXX...................................................E..............................',
            '............................................................................................................................XXX.............................',
            '.......................................................C......................................................C.............................................',
            '......................................................XXX....................................................XXX............................................',
            '..........................E................................................................E................................................................',
            '..XX.....................XXX...............................................XX.............XXX...............................................................',
            '..XX...........T..........................XX.........T.....................XX.................T........................XX.............T.....................',
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        ];
        this.setupLevel('bg2', 'tileGreen', 'enemy2', 'gemGreen', 'plantGreen', L2, 'Level3');
    }
}

class Level3 extends BaseLevel {
    constructor() { super('Level3'); }
    preload() {
        super.preload();
        this.load.image('bg3', 'assets/Backgrounds/set3_background.png');
        this.load.image('tileBlue', 'assets/Tiles/Blue tiles/tileBlue_02.png');
        this.load.image('enemyFlying', 'assets/Enemies/enemyFlying_1.png');
    }
    create() {
        const L3 = [
            '................................................................................................................................................................',
            '................................................................................................................................................................',
            '................................................................................................................................................................',
            '.......E..........................................C.............................................................................................................',
            '.....XXXX.......................................XXXXXX..........................................................................................................',
            '.......................C......................................E.....................................C...........................................................',
            '.....................XXXXX..................................XXXX..................................XXXXX.........................................................',
            '..........................................E.......................................................................E........................F....................',
            '..C.....................................XXXX.........................................E..........................XXXXXX...................XXXXX..................',
            'XXXXX................E.............................................................XXXXX.................................................XXXXX..................',
            '...................XXXXX.................................................................................................................XXXXX..................',
            '...P..........................................................C.................................................................................................',
            '..XXX.......................................E...............XXXXXX.............................C................................................................',
            '..........................................XXXXX..............................................XXXXX..............................................................',
            '................................................................................................................................................................',
            '...................C.....................................................................................................E......................................',
            '.................XXXXX........................................................E........................................XXXXX....................................',
            '............................................................................XXXXXX..............................................................................',
            '..................................................E.............................................................................................................',
            '................................................XXXXX....................................................XX.....................................................',
            '.............T................T..............................T.......................T...................XX..........T.......................T................',
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        ];
        this.setupLevel('bg3', 'tileBlue', 'enemyFlying', 'gemBlue', 'plantBlue', L3, null); // Tamat setelah ini
    }
}

// Konfigurasi Phaser: Resolusi 1280x720
const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'game-container',
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Level1, Level2, Level3]
};

const game = new Phaser.Game(config);

// Logika UI HTML (Menu Start & Pause)
document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const startScreen = document.getElementById('start-screen');
    const btnPause = document.getElementById('btn-pause');

    // Pause game di awal agar tidak berjalan di belakang layar start
    game.events.once('step', () => {
        if (window.activeLevel) {
            window.activeLevel.scene.pause();
        }
    });

    btnStart.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        if (window.activeLevel) {
            window.activeLevel.scene.resume();
        }
    });

    btnPause.addEventListener('click', () => {
        if (!window.activeLevel) return;

        // Cek jika sedang memunculkan kuis/gameover, tidak boleh pause ulang
        if (window.activeLevel.isGamePaused && btnPause.textContent === '|| Pause') return;

        let bgm = window.activeLevel.sound.get('bgm');

        if (btnPause.textContent === '|| Pause') {
            window.activeLevel.scene.pause();
            if (bgm && bgm.isPlaying) bgm.pause();
            btnPause.textContent = '▶ Resume';
        } else {
            window.activeLevel.scene.resume();
            if (bgm && bgm.isPaused) bgm.resume();
            btnPause.textContent = '|| Pause';
        }
    });
});
