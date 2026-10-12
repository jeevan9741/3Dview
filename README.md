# Tech Lab 3D

Interactive 3D lessons that teach children (classes 4–8) how technology works, plus a **Biology Lab** (botany and zoology, beginner to advanced).
Each topic has a 3D model to rotate and take apart, explanations with real-life comparisons, a quiz, and stars for progress.
Every screen works in **Hinglish, English, हिंदी, मराठी and ಕನ್ನಡ**, and a 🔊 button reads the text aloud.
Biology topics are written in English, हिंदी, मराठी and ಕನ್ನಡ (in Hinglish they show in English); technology topics show in English when ಕನ್ನಡ is chosen.

## Open it

Double-click `index.html`. You don't need a server or an install, and it works offline.
Three.js is in `js/lib/`. The Baloo 2 font loads from Google Fonts when online and falls back to the system font offline.

To host it, copy the whole folder to any static host, such as GitHub Pages or Netlify. Camera, AR and install need **https**, which these hosts provide.
After changing any file, bump `VERSION` in `sw.js` so phones pick up the new files.

## Features

- **10 topics** with 3D models, explanations, real-life comparisons and a quiz.
- **4 languages** (Hinglish, English, हिंदी, मराठी) that switch instantly, plus 🔊 read-aloud.
- **Child profiles:** several children can share one device, and each has their own stars and **9 badges**.
- **Teacher dashboard** (`teacher.html`): shows each child's parts seen and first quiz score → best score, a class average, and a CSV download.
- **AR:** on Android Chrome with ARCore, "📷 View in AR" places the model on a real table. On other devices, "📷 Camera view" shows the model over the live camera.
- **Install and offline:** once online, the app can be added to the home screen and works without internet after the first visit.
- **Large text** (Aa button), light and dark themes, and keyboard controls (arrow keys, + and −).
- **Chiku 🤖, the helper robot:** cheers right answers, comforts wrong ones, gives tips when a child is idle, and tells them to try the quiz once every part is seen. Tap Chiku for read-aloud, sound on/off and the tour.
- **First-time tour:** on the first visit, the home page and the first topic page highlight each control step by step. Chiku's menu replays it.
- **💡 Quiz hint:** crosses out one wrong answer, once per question.
- **Sounds and confetti:** short tones made by the browser (no sound files, works offline) and confetti for full marks, new stars, new badges and seeing every part. Confetti is skipped when the device asks for reduced motion.

## Biology Lab (`biology.html`)

The home page has a banner that opens the Biology Lab. It has:

- **Botany 🌿 and Zoology 🐾 sections** with progress bars, a **search box** (searches the current language, English and keywords), **level filters** (Beginner / Intermediate / Advanced), and a "Show upcoming topics" switch.
- A **learning path** grouped by level. Each card shows its level, **"Learn first"** prerequisites (with ✓ when done), its status (Not started / In progress / ✓ Completed) and stars. "⭐ Learn this next" recommends the first unfinished topic whose prerequisites are done.
- The full 24-topic curriculum lives in `js/bio.js`. **8 topics are built**; the other 16 are marked "Coming soon" and are not clickable.

A topic is **completed** when every part has been seen and the quiz score is at least half.

Every biology topic page adds the following to the usual Learn and Quiz tabs:

- **Floating 3D labels** on every structure (🏷️ button to hide or show; they start hidden on narrow phones).
- **🔬 Deeper science**: an advanced explanation for every part (it stays open once opened).
- A **Revise** tab with 8 key words, 4 practice questions with hidden answers, the level and prerequisites.
- 8 MCQs with explanations, and a "Next topic →" link after the quiz.

| Topic | Level | What children do in 3D |
|---|---|---|
| 🌱 Parts of a plant | Beginner | Water the plant (drops travel root → stem → leaf → vapour); grow it from seed |
| 🟩 The plant cell | Intermediate | Cut-open cell; cytoplasmic streaming moves the chloroplasts; salt water causes plasmolysis |
| 🍃 Photosynthesis | Intermediate | Real CO₂, H₂O, O₂ and glucose molecules flow in and out of a leaf and a magnified chloroplast; bright, dim and dark light change the rate |
| 🌸 Reproduction in flowering plants | Advanced | A bee pollinates the flower, a pollen tube grows to an ovule, and the ovary becomes a fruit with seeds |
| 🐾 Animal kingdom | Beginner | 8 animal groups on vertebrate and invertebrate stands; X-ray shows backbones; warm- and cold-blooded rings |
| 🔵 The animal cell | Intermediate | Cut-open cell; mitochondria make ATP; a protein travels ribosome → ER → Golgi → out of the cell |
| ❤️ The human heart | Intermediate | Heart cut open from the front; chambers beat, valves open and close, blue and red blood flow; rest or exercise heart rate |
| 🧬 DNA and genetics | Advanced | Double helix with A-T and G-C pairs; unzip and copy (semi-conservative replication); one-pair mutation; chromosome with a gene |

**Add a biology topic:** set `ready: true` for it in `js/bio.js` and create `js/topics/<id>.js` (copy `plant-parts.js`). Shared 3D pieces (cut spheres, tubes, leaves, molecules, particle flows) are in `js/bio-kit.js`, and a biology topic page loads it automatically.

Note for teachers: the Hindi, Marathi and Kannada science text was written carefully with standard textbook terms. Please have a native-speaking science teacher review it before classroom use, especially the Kannada.

## Topics

| Topic | What children do |
|---|---|
| 🖥️ Computer parts | Tap parts, take the computer apart, watch the fans spin |
| 🌐 How the internet works | Send a message and follow it from phone → router → cable → ISP → server and back |
| 💡 Electric circuit | Switch the bulb on and off, cut the wire to see why the bulb goes out |
| 🤖 Robots and sensors | Drive the robot; its sensor stops it at walls; "drive itself" mode avoids obstacles |
| 🧩 Coding basics | Join command blocks to reach the star in 3 levels; the AI helper finds the shortest path |
| 🛰️ Satellites and GPS | Satellites orbit the Earth; 3 of them find a phone in India |
| 📱 Inside a mobile phone | Take the phone apart, make a call (radio waves to a tower), take a photo with the flash |
| ☀️ Solar energy | Sunlight to panel, inverter, battery and home; bring clouds or night and watch the battery charge and drain |
| 🚁 How a drone flies | Fly and land; "Turn" speeds up 2 propellers so the drone spins the other way |
| 🚀 Rockets and space | Countdown and liftoff; the empty first stage drops away and stars appear in space |

## Files

```
index.html          home menu with topic cards and stars
topic.html          one page for every topic (topic.html?t=robot)
css/app.css         all styles, light and dark theme
js/common.js        languages + button/menu words, topic list, progress, theme, read-aloud
js/engine.js        shared 3D stage, camera, tap-to-pick, info panel, quiz
js/ar.js            AR (WebXR) and camera-view mode
js/fun.js           Chiku helper, tour, quiz hint words, sounds, confetti (its words in 4 languages are at the top)
teacher.html        teacher dashboard
sw.js, manifest.webmanifest, icon.svg   offline + install
js/topics/*.js      one file per topic: text in 4 languages + 3D model + animation
biology.html        Biology Lab: Botany/Zoology sections, search, level filters, learning path
js/bio.js           biology curriculum (24 topics, levels, prerequisites) + its page words
js/bio-kit.js       shared 3D pieces for biology models (molecules, cells, tubes, flows)
```

## Change the words or quiz

Open the topic file in `js/topics/` and edit the `text` block for that language.
Quiz options must stay in the **same order in every language**, because the correct answer (`a`) is set once, at the top of the file.

## Add a language

1. `js/common.js`: add an entry to `TL.LANGS` (label and speech voice) and a block to `TL.UI` with the button and menu words.
2. In each topic file, add a block for the new language to `text`.

Any text that is missing in a language falls back to English, then Hinglish, so you can translate one topic at a time.

## Add a topic

1. `js/common.js`: add an entry to `TL.TOPICS` (id, emoji, title, desc).
2. Create `js/topics/<id>.js` that calls `TL.start({...})`. `computer.js` is the simplest example, and the comment at the top of `js/engine.js` lists every option.

## Progress and privacy

Profiles, stars, badges and quiz scores are saved **only in this browser** (localStorage). Nothing is sent to any server.
"Clear progress" resets the current child, and the teacher page can remove a child.
