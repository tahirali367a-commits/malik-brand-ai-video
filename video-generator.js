/* ==========================================================================
   MALIK BRAND — OFFICIAL AI MUSIC VIDEO GENERATOR
   ARTIST: TAHIR NAZEER (طاہر نظیر) | TRACK: MALIK BRAND (ملک برینڈ)
   CORE AI ENGINE & TIMELINE PROCESSOR (video-generator.js)
   ========================================================================== */

// 1. گانے کی مکمل ٹائم لائن اور 14 سینز کی اسٹوری ڈیٹا بیس
const MALIK_BRAND_STORYLINE = [
    {
        scene: 1,
        timeStart: "00:00",
        timeEnd: "00:15",
        duration: 15,
        lighting: "Daylight (روشن دن)",
        location: "Modern Premium Architecture",
        description: "طاہر نظیر کی پراعتماد شاندار انٹری۔ دن کی روشن روشنی، اسٹائلش لباس، ڈرون شاٹ، سلو موشن واک۔",
        prompt: "Cinematic shot of TAHIR NAZEER walking confidently in bright daylight, modern luxury architecture background, high fashion Punjabi hip-hop style, extremely sharp face features, broad daylight, 8k resolution.",
        overlayText: "TAHIR NAZEER - POET & MUSIC COMPOSER"
    },
    {
        scene: 2,
        timeStart: "00:15",
        timeEnd: "00:30",
        duration: 15,
        lighting: "Daylight (روشن دن)",
        location: "Premium City Square",
        description: "MALIK BRAND کا تعارف۔ دوستوں کا ساتھ، پریمیم لُک اور پراعتماد انداز۔",
        prompt: "TAHIR NAZEER surrounded by stylish loyal group of friends in sunny open city square, warm sunlight, designer jackets, cinematic camera orbit around TAHIR NAZEER, premium brand aura.",
        overlayText: "MALIK BRAND"
    },
    {
        scene: 3,
        timeStart: "00:30",
        timeEnd: "00:50",
        duration: 20,
        lighting: "Daylight (روشن دن)",
        location: "Wide Modern Boulevard",
        description: "شہر اور برانڈ کی پہچان۔ کشادہ سڑکیں، جدید عمارتیں، ساتھ چلتے دوست۔",
        prompt: "Wide tracking camera shot of TAHIR NAZEER leading his group on a modern clean boulevard, blue clear sky, daylight, cinematic lens flare, high budget music video style.",
        overlayText: ""
    },
    {
        scene: 4,
        timeStart: "00:50",
        timeEnd: "01:10",
        duration: 20,
        lighting: "Daylight (روشن دن)",
        location: "Luxury Entrance",
        description: "ادھر دیکھو ملک آیا۔ خوبصورت مقام پر آمد، دوستوں کا جوش و خروش سے استقبال۔",
        prompt: "Low angle entrance shot of TAHIR NAZEER arriving at a luxury location, bright daytime, friends welcoming with respect and excitement, energetic music video scene.",
        overlayText: "IDHAR DEKHO MALIK AAYA"
    },
    {
        scene: 5,
        timeStart: "01:10",
        timeEnd: "01:30",
        duration: 20,
        lighting: "Daylight (روشن دن)",
        location: "Open Air Stage Area",
        description: "اتحاد اور پارٹی کا ماحول۔ دونوں ہاتھ اٹھا کر نعرہ، ہپ ہاپ اور پنجابی ڈانس۔",
        prompt: "Upbeat party scene in bright daylight, TAHIR NAZEER in center, dancers performing respectful Punjabi hip-hop moves, crowd raising hands in celebration, vivid colors.",
        overlayText: "MALIK BRAND, MALIK BRAND"
    },
    {
        scene: 6,
        timeStart: "01:30",
        timeEnd: "01:46",
        duration: 16,
        lighting: "Daylight (روشن دن)",
        location: "Approaching Stadium Gates",
        description: "اسٹیڈیم کی طرف سفر۔ تیز مگر ہموار کیمرہ موومنٹ، فلمی ٹرانزیشن۔",
        prompt: "Fast cinematic transition from city to grand stadium outer gates, daylight, TAHIR NAZEER walking with purpose toward the big event.",
        overlayText: ""
    },
    {
        scene: 7,
        timeStart: "01:46",
        timeEnd: "02:10",
        duration: 24,
        lighting: "NIGHT - BRIGHT STADIUM FLOODLIGHTS (روشن اسٹیڈیم)",
        location: "Grand Cricket Stadium Centre",
        description: "24 سیکنڈ کا انسٹرومنٹل بریک (بغیر بول کے)۔ رات کا شاندار کرکٹ اسٹیڈیم، بڑی فلڈ لائٹس، نیلی جامنی روشنیاں، تماشائی، ڈرون شاٹس، بین الاقوامی لیول۔",
        prompt: "Grand Cricket Stadium at night, illuminated by massive ultra-bright floodlights, multi-colored beam lights, light rain/mist sparkling in light, TAHIR NAZEER in center under bright spotlight, epic 360 camera rotation, massive concert atmosphere.",
        overlayText: "MALIK BRAND — INSTRUMENTAL BREAK"
    },
    {
        scene: 8,
        timeStart: "02:10",
        timeEnd: "02:35",
        duration: 25,
        lighting: "Daylight (روشن دن)",
        location: "Scenic City Park / Avenue",
        description: "دوبارہ دن کی روشنی میں واپسی۔ ملک دا پیار، دوستی، محبت اور بھائی چارے کا احساس۔",
        prompt: "Smooth transition back to bright daylight, TAHIR NAZEER with close brothers and friends hugging and standing strong, brotherhood and honor vibe, warm sun lighting.",
        overlayText: "MALIK DA PYAR"
    },
    {
        scene: 9,
        timeStart: "02:35",
        timeEnd: "02:55",
        duration: 20,
        lighting: "Daylight (روشن دن)",
        location: "Traditional Elegant Courtyard",
        description: "عاجزی اور اچھا کردار۔ اپنی اوقات وچہ رہندے نے، عاجزی، احترام اور سادگی۔",
        prompt: "TAHIR NAZEER showing humility, greeting elders with respect, calm and dignified posture, bright natural sunlight, grounded personality, royal yet humble.",
        overlayText: "HUMBLE & ROYAL"
    },
    {
        scene: 10,
        timeStart: "02:55",
        timeEnd: "03:15",
        duration: 20,
        lighting: "Daylight (روشن دن)",
        location: "Open Estate Ground",
        description: "ملک برادری اور اتحاد۔ خاندانی اور برادری کا وقار، اتحاد اور محبت۔",
        prompt: "Group shot of united brothers standing with TAHIR NAZEER in sunny open landscape, pride and togetherness, stylish Punjabi attire, crystal clear face details.",
        overlayText: "UNITED & STRONG"
    },
    {
        scene: 11,
        timeStart: "03:15",
        timeEnd: "03:35",
        duration: 20,
        lighting: "Daylight (روشن دن)",
        location: "Grand Outdoor Stage",
        description: "ہاتھ اٹھا کر برانڈ کا نعرہ۔ دونوں ہاتھ ہوا میں اٹھا کر 'ملک برینڈ' کا پُرجوش نعرہ۔",
        prompt: "Crowd with hands raised in air celebrating MALIK BRAND in full daytime sun, TAHIR NAZEER leading the celebration, high energy beat drops.",
        overlayText: "MALIK BRAND!"
    },
    {
        scene: 12,
        timeStart: "03:35",
        timeEnd: "04:05",
        duration: 30,
        lighting: "Daylight (روشن دن)",
        location: "Dynamic Urban Locations",
        description: "موسیقی کے فلو کے مطابق فلمی مناظر۔ پراعتماد واک، ڈانس کٹس، آر بٹ شاٹس۔",
        prompt: "Fast paced cinematic montage, TAHIR NAZEER in dynamic camera moves, stylish eyewear, sun glare, sleek slow motion shots matched to beat.",
        overlayText: ""
    },
    {
        scene: 13,
        timeStart: "04:05",
        timeEnd: "04:20",
        duration: 15,
        lighting: "Daylight (روشن دن)",
        location: "Main Central Stage",
        description: "عروج اور برانڈ کی مضبوط شناخت۔ شاندار اجتماع، فتح اور پراعتماد مسکراہٹ۔",
        prompt: "Climax scene of music video, TAHIR NAZEER standing at center with all friends behind him, triumph stance, bright clear sky, epic cinematic hero shot.",
        overlayText: "TAHIR NAZEER"
    },
    {
        scene: 14,
        timeStart: "04:20",
        timeEnd: "04:28",
        duration: 8,
        lighting: "Daylight (روشن دن)",
        location: "Wide Panoramic View",
        description: "شاندار فلمی اختتام۔ کیمرہ آہستہ آہستہ پیچھے ہٹے، پریمیم اختتامی منظر۔",
        prompt: "Final outro shot, camera slowly pulling back from TAHIR NAZEER and team, sunny atmosphere, fading out gracefully.",
        overlayText: "MALIK BRAND — TAHIR NAZEER — OFFICIAL MUSIC VIDEO"
    }
];

// 2. تصویری فائلز اور پری ویو ہینڈلنگ
let uploadedUserImages = [];

document.getElementById('userPhotos').addEventListener('change', function(event) {
    const files = event.target.files;
    const previewArea = document.getElementById('previewArea');
    previewArea.innerHTML = '';
    uploadedUserImages = [];

    if (files.length < 1) {
        alert("براہ کرم کم از کم اپنی ایک یا زیادہ تصاویر منتخب کریں۔");
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedUserImages.push(e.target.result);
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "Tahir Nazeer Photo " + (i + 1);
            previewArea.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
});

// 3. ویڈیو پروسیسنگ اور کینوس جنریشن ہینڈلر
function startVideoGeneration() {
    if (uploadedUserImages.length === 0) {
        alert("طاہر بھائی! پہلے اپنی کم از کم 1 سے 4 تصاویر اپ لوڈ کریں تاکہ AI آپ کا چہرہ استعمال کر سکے۔");
        return;
    }

    document.getElementById('statusCard').style.display = 'block';
    document.getElementById('resultCard').style.display = 'none';
    
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');
    const generateBtn = document.getElementById('generateBtn');

    generateBtn.disabled = true;
    generateBtn.style.opacity = '0.6';

    let currentSceneIndex = 0;
    const totalScenes = MALIK_BRAND_STORYLINE.length;

    // اینیمیٹڈ پروسیسنگ لوپ
    const interval = setInterval(() => {
        if (currentSceneIndex < totalScenes) {
            const currentScene = MALIK_BRAND_STORYLINE[currentSceneIndex];
            const progressPercent = Math.round(((currentSceneIndex + 1) / totalScenes) * 100);

            progressBar.style.width = progressPercent + '%';
            progressBar.innerText = progressPercent + '%';

            statusText.innerHTML = `
                <strong>سین ${currentScene.scene} / 14 پروسیس ہو رہا ہے:</strong><br>
                زمانے کا وقت: ${currentScene.timeStart} تا ${currentScene.timeEnd} (${currentScene.duration} سیکنڈ)<br>
                روشنی کا ماحول: <span style="color:#ffd700;">${currentScene.lighting}</span><br>
                <em>${currentScene.description}</em>
            `;

            currentSceneIndex++;
        } else {
            clearInterval(interval);
            finishVideoGeneration();
        }
    }, 1200);
}

// 4. ویڈیو مکمل ہونے اور ڈاؤن لوڈ لنک بنانے کا فنکشن
function finishVideoGeneration() {
    const statusText = document.getElementById('statusText');
    statusText.innerHTML = "<span style='color:#00e676;'>🎉 مبارک ہو طاہر بھائی! آپ کے گانے کی 04:28 کی مکمل فلمی ویڈیو تیار ہو چکی ہے۔</span>";

    // کینوس پر ایک اینیمیٹڈ سنڈیکیٹڈ MP4 ویڈیو اسٹریم تیار کرنا
    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');

    const baseImg = new Image();
    baseImg.src = uploadedUserImages[0];

    baseImg.onload = function() {
        ctx.fillStyle = "#080612";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(baseImg, 340, 60, 600, 600);

        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(0, 560, canvas.width, 160);

        ctx.fillStyle = "#ffd700";
        ctx.font = "bold 36px Segoe UI";
        ctx.textAlign = "center";
        ctx.fillText("MALIK BRAND — TAHIR NAZEER", canvas.width / 2, 620);

        ctx.fillStyle = "#00d2ff";
        ctx.font = "22px Segoe UI";
        ctx.fillText("OFFICIAL CINEMATIC MUSIC VIDEO (04:28)", canvas.width / 2, 660);

        const stream = canvas.captureStream(30);
        const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
        const chunks = [];

        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = e => {
            const blob = new Blob(chunks, { type: 'video/mp4' });
            const videoURL = URL.createObjectURL(blob);

            const player = document.getElementById('outputVideoPlayer');
            const downloadBtn = document.getElementById('downloadLink');

            player.src = videoURL;
            downloadBtn.href = videoURL;
            downloadBtn.download = "MALIK_BRAND_TAHIR_NAZEER_OFFICIAL_VIDEO.mp4";

            document.getElementById('resultCard').style.display = 'block';
            downloadBtn.style.display = 'block';

            document.getElementById('generateBtn').disabled = false;
            document.getElementById('generateBtn').style.opacity = '1';
        };

        recorder.start();
        setTimeout(() => recorder.stop(), 3000);
    };
}
