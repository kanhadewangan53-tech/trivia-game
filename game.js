// ============================================
// QUIZ MASTER — game.js
// ============================================

// ---- QUESTIONS DATABASE ----
const questions = {
  hi: {
    gk: [
      { q: "भारत की राजधानी क्या है?", opts: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], ans: 1 },
      { q: "भारत का राष्ट्रीय पक्षी कौन सा है?", opts: ["गौरैया", "बाज", "मोर", "तोता"], ans: 2 },
      { q: "भारत में कितने राज्य हैं?", opts: ["25", "28", "29", "30"], ans: 1 },
      { q: "भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?", opts: ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"], ans: 2 },
      { q: "भारत का राष्ट्रगान किसने लिखा?", opts: ["महात्मा गांधी", "रवींद्रनाथ टैगोर", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"], ans: 1 },
      { q: "भारत की सबसे लंबी नदी कौन सी है?", opts: ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"], ans: 3 },
      { q: "ताजमहल कहाँ स्थित है?", opts: ["दिल्ली", "जयपुर", "आगरा", "लखनऊ"], ans: 2 },
      { q: "भारत का राष्ट्रीय खेल क्या है?", opts: ["क्रिकेट", "हॉकी", "कबड्डी", "बैडमिंटन"], ans: 1 },
      { q: "भारत को आज़ादी कब मिली?", opts: ["1945", "1946", "1947", "1948"], ans: 2 },
      { q: "भारत का सबसे ऊँचा पर्वत शिखर कौन सा है?", opts: ["K2", "कंचनजंगा", "एवरेस्ट", "नंदा देवी"], ans: 1 },
    ],
    bollywood: [
      { q: "शाहरुख खान की पहली फिल्म कौन सी थी?", opts: ["DDLJ", "बाज़ीगर", "दीवाना", "डर"], ans: 2 },
      { q: "'दंगल' फिल्म में किस पहलवान की कहानी है?", opts: ["पूजा ढांडा", "गीता फोगाट", "विनेश फोगाट", "साक्षी मलिक"], ans: 1 },
      { q: "सबसे ज्यादा कमाई करने वाली हिंदी फिल्म कौन सी है?", opts: ["Baahubali 2", "Dangal", "RRR", "KGF 2"], ans: 0 },
      { q: "फिल्म 'शोले' किस साल रिलीज़ हुई?", opts: ["1973", "1975", "1977", "1979"], ans: 1 },
      { q: "'3 इडियट्स' का निर्देशन किसने किया?", opts: ["करण जोहर", "राजकुमार हिरानी", "संजय लीला भंसाली", "ज़ोया अख्तर"], ans: 1 },
      { q: "AR रहमान का मूल नाम क्या है?", opts: ["दिलीप कुमार", "AS दिलीप", "दिलीप कुमार रासुल", "AN रासुल"], ans: 2 },
      { q: "भारत को Oscar दिलाने वाली पहली फिल्म?", opts: ["Mother India", "Lagaan", "Salaam Bombay", "Guide"], ans: 0 },
      { q: "'बाजीराव मस्तानी' में बाजीराव का किरदार किसने निभाया?", opts: ["ऋतिक रोशन", "अक्षय कुमार", "रणवीर सिंह", "रणबीर कपूर"], ans: 2 },
      { q: "प्रियंका चोपड़ा की पहली बॉलीवुड फिल्म?", opts: ["अंदाज़", "हीरो", "मुझसे शादी करोगी", "ऐतराज़"], ans: 0 },
      { q: "Oscar जीतने वाला गाना 'Jai Ho' किस फिल्म का है?", opts: ["Slumdog Millionaire", "Black", "Devdas", "Lagaan"], ans: 0 },
    ],
    sports: [
      { q: "क्रिकेट में एक ओवर में कितनी गेंद होती हैं?", opts: ["4", "5", "6", "8"], ans: 2 },
      { q: "भारत ने पहला क्रिकेट विश्व कप कब जीता?", opts: ["1975", "1979", "1983", "1987"], ans: 2 },
      { q: "सचिन तेंदुलकर ने कितने टेस्ट शतक लगाए?", opts: ["47", "49", "51", "53"], ans: 2 },
      { q: "IPL की शुरुआत किस साल हुई?", opts: ["2006", "2007", "2008", "2009"], ans: 2 },
      { q: "टेनिस में 'Grand Slam' कितने टूर्नामेंट होते हैं?", opts: ["2", "3", "4", "5"], ans: 2 },
      { q: "ओलंपिक खेल कितने साल में एक बार होते हैं?", opts: ["हर 2 साल", "हर 3 साल", "हर 4 साल", "हर 5 साल"], ans: 2 },
      { q: "विराट कोहली का जन्म किस शहर में हुआ?", opts: ["मुंबई", "दिल्ली", "चंडीगढ़", "जयपुर"], ans: 1 },
      { q: "फुटबॉल में एक टीम में कितने खिलाड़ी होते हैं?", opts: ["9", "10", "11", "12"], ans: 2 },
      { q: "बैडमिंटन में एक गेम कितने पॉइंट का होता है?", opts: ["15", "18", "21", "25"], ans: 2 },
      { q: "कबड्डी में एक तरफ कितने खिलाड़ी होते हैं?", opts: ["5", "6", "7", "8"], ans: 2 },
    ],
    science: [
      { q: "पानी का रासायनिक सूत्र क्या है?", opts: ["H2O2", "HO2", "H2O", "H3O"], ans: 2 },
      { q: "सूर्य से पृथ्वी तक प्रकाश पहुँचने में कितना समय लगता है?", opts: ["4 मिनट", "8 मिनट", "12 मिनट", "16 मिनट"], ans: 1 },
      { q: "DNA का पूरा नाम क्या है?", opts: ["Deoxyribose Nucleic Acid", "Deoxyribonucleic Acid", "Diribose Nucleic Acid", "Deoxyribose Nuclear Acid"], ans: 1 },
      { q: "प्रकाश की गति लगभग कितनी है?", opts: ["2 लाख km/s", "3 लाख km/s", "4 लाख km/s", "1 लाख km/s"], ans: 1 },
      { q: "मानव शरीर में कितनी हड्डियाँ होती हैं?", opts: ["196", "206", "216", "226"], ans: 1 },
      { q: "सबसे बड़ा ग्रह कौन सा है?", opts: ["शनि", "नेप्च्यून", "बृहस्पति", "यूरेनस"], ans: 2 },
      { q: "पेड़ कौन सी गैस ग्रहण करते हैं?", opts: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"], ans: 2 },
      { q: "इलेक्ट्रॉन की खोज किसने की?", opts: ["रदरफोर्ड", "JJ थॉमसन", "न्यूटन", "बोर"], ans: 1 },
      { q: "मनुष्य में कितने गुणसूत्र (chromosomes) होते हैं?", opts: ["23", "44", "46", "48"], ans: 2 },
      { q: "सोने का रासायनिक प्रतीक क्या है?", opts: ["Ag", "Au", "Gd", "Go"], ans: 1 },
    ]
  },
  en: {
    gk: [
      { q: "What is the capital of India?", opts: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], ans: 1 },
      { q: "Which is India's national bird?", opts: ["Sparrow", "Eagle", "Peacock", "Parrot"], ans: 2 },
      { q: "How many states are there in India?", opts: ["25", "28", "29", "30"], ans: 1 },
      { q: "Which is the largest Indian state by area?", opts: ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"], ans: 2 },
      { q: "Who wrote India's national anthem?", opts: ["Mahatma Gandhi", "Rabindranath Tagore", "Subhas Chandra Bose", "Jawaharlal Nehru"], ans: 1 },
      { q: "Which is India's longest river?", opts: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"], ans: 3 },
      { q: "Where is the Taj Mahal located?", opts: ["Delhi", "Jaipur", "Agra", "Lucknow"], ans: 2 },
      { q: "What is India's national sport?", opts: ["Cricket", "Hockey", "Kabaddi", "Badminton"], ans: 1 },
      { q: "In which year did India gain independence?", opts: ["1945", "1946", "1947", "1948"], ans: 2 },
      { q: "Which is India's highest mountain peak?", opts: ["K2", "Kangchenjunga", "Everest", "Nanda Devi"], ans: 1 },
    ],
    bollywood: [
      { q: "Which was Shah Rukh Khan's debut film?", opts: ["DDLJ", "Baazigar", "Deewana", "Darr"], ans: 2 },
      { q: "Whose story is depicted in 'Dangal'?", opts: ["Pooja Dhanda", "Geeta Phogat", "Vinesh Phogat", "Sakshi Malik"], ans: 1 },
      { q: "What is the highest-grossing Hindi film?", opts: ["Baahubali 2", "Dangal", "RRR", "KGF 2"], ans: 0 },
      { q: "In which year was 'Sholay' released?", opts: ["1973", "1975", "1977", "1979"], ans: 1 },
      { q: "Who directed '3 Idiots'?", opts: ["Karan Johar", "Rajkumar Hirani", "Sanjay Leela Bhansali", "Zoya Akhtar"], ans: 1 },
      { q: "AR Rahman's birth name is:", opts: ["Dilip Kumar", "AS Dileep", "Dileep Kumar Rasool", "AN Rasool"], ans: 2 },
      { q: "India's first Oscar-nominated film?", opts: ["Mother India", "Lagaan", "Salaam Bombay", "Guide"], ans: 0 },
      { q: "Who played Bajirao in 'Bajirao Mastani'?", opts: ["Hrithik Roshan", "Akshay Kumar", "Ranveer Singh", "Ranbir Kapoor"], ans: 2 },
      { q: "What was Priyanka Chopra's debut Bollywood film?", opts: ["Andaaz", "Hero", "Mujhse Shaadi Karogi", "Aitraaz"], ans: 0 },
      { q: "The Oscar-winning song 'Jai Ho' is from which film?", opts: ["Slumdog Millionaire", "Black", "Devdas", "Lagaan"], ans: 0 },
    ],
    sports: [
      { q: "How many balls in one cricket over?", opts: ["4", "5", "6", "8"], ans: 2 },
      { q: "When did India win their first Cricket World Cup?", opts: ["1975", "1979", "1983", "1987"], ans: 2 },
      { q: "How many Test centuries did Sachin Tendulkar score?", opts: ["47", "49", "51", "53"], ans: 2 },
      { q: "In which year did IPL start?", opts: ["2006", "2007", "2008", "2009"], ans: 2 },
      { q: "How many Grand Slam tournaments are there in tennis?", opts: ["2", "3", "4", "5"], ans: 2 },
      { q: "How often are Olympic Games held?", opts: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"], ans: 2 },
      { q: "Virat Kohli was born in which city?", opts: ["Mumbai", "Delhi", "Chandigarh", "Jaipur"], ans: 1 },
      { q: "How many players are in a football team?", opts: ["9", "10", "11", "12"], ans: 2 },
      { q: "What is the winning score in badminton?", opts: ["15", "18", "21", "25"], ans: 2 },
      { q: "How many players per side in Kabaddi?", opts: ["5", "6", "7", "8"], ans: 2 },
    ],
    science: [
      { q: "What is the chemical formula of water?", opts: ["H2O2", "HO2", "H2O", "H3O"], ans: 2 },
      { q: "How long does sunlight take to reach Earth?", opts: ["4 minutes", "8 minutes", "12 minutes", "16 minutes"], ans: 1 },
      { q: "What does DNA stand for?", opts: ["Deoxyribose Nucleic Acid", "Deoxyribonucleic Acid", "Diribose Nucleic Acid", "Deoxyribose Nuclear Acid"], ans: 1 },
      { q: "What is the speed of light?", opts: ["200,000 km/s", "300,000 km/s", "400,000 km/s", "150,000 km/s"], ans: 1 },
      { q: "How many bones are in the adult human body?", opts: ["196", "206", "216", "226"], ans: 1 },
      { q: "Which is the largest planet in our solar system?", opts: ["Saturn", "Neptune", "Jupiter", "Uranus"], ans: 2 },
      { q: "Which gas do trees absorb from atmosphere?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: 2 },
      { q: "Who discovered the electron?", opts: ["Rutherford", "JJ Thomson", "Newton", "Bohr"], ans: 1 },
      { q: "How many chromosomes do humans have?", opts: ["23", "44", "46", "48"], ans: 2 },
      { q: "What is the chemical symbol for Gold?", opts: ["Ag", "Au", "Gd", "Go"], ans: 1 },
    ]
  }
};

const categories = {
  gk:        { icon: "🌍", hi: "सामान्य ज्ञान", en: "General Knowledge" },
  bollywood: { icon: "🎬", hi: "बॉलीवुड",       en: "Bollywood" },
  sports:    { icon: "⚽", hi: "खेल",            en: "Sports" },
  science:   { icon: "🔬", hi: "विज्ञान",        en: "Science" },
};

const ui = {
  hi: {
    homeTitle: "Category चुनें और खेलना शुरू करें!",
    homeSub: "10 सवाल • टाइमर • Points System",
    startLabel: "Quiz शुरू करें",
    howtoTitle: "कैसे खेलें?",
    steps: ["Category चुनो", "Quiz शुरू करो", "15 सेकंड में जवाब दो", "Score देखो!"],
    againLabel: "फिर खेलो",
    homeLabel: "होम पर जाएं",
    shareLabel: "Score शेयर करो",
    scoreLbl: "स्कोर",
    timeout: "⏰ समय खत्म! सही उत्तर देखें",
    catLabel: "10 सवाल",
  },
  en: {
    homeTitle: "Choose a category and start playing!",
    homeSub: "10 Questions • Timer • Points System",
    startLabel: "Start Quiz",
    howtoTitle: "How to play?",
    steps: ["Choose category", "Start quiz", "Answer in 15 seconds", "See your score!"],
    againLabel: "Play Again",
    homeLabel: "Go Home",
    shareLabel: "Share Score",
    scoreLbl: "Score",
    timeout: "⏰ Time up! See correct answer",
    catLabel: "10 Questions",
  }
};

// ---- STATE ----
let lang = 'hi';
let selectedCat = null;
let quizQuestions = [];
let currentQ = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let timerInterval = null;
let timeLeft = 15;
let answered = false;
let adCallback = null;
let adSkipTimer = null;
let timerBarEl = null;

// ---- INIT ----
window.addEventListener('DOMContentLoaded', () => {
  timerBarEl = document.getElementById('timer-bar');
  buildCatGrid();
  applyLangUI();
});

// ---- LANGUAGE ----
function setLang(l) {
  lang = l;
  document.getElementById('btn-hi').classList.toggle('active', l === 'hi');
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  applyLangUI();
  buildCatGrid();
}

function applyLangUI() {
  const t = ui[lang];
  document.getElementById('home-title').textContent = t.homeTitle;
  document.getElementById('home-sub').textContent = t.homeSub;
  document.getElementById('start-label').textContent = t.startLabel;
  document.getElementById('howto-title').textContent = t.howtoTitle;
  ['step1','step2','step3','step4'].forEach((id, i) => {
    document.getElementById(id).textContent = t.steps[i];
  });
  document.getElementById('again-label').textContent = t.againLabel;
  document.getElementById('home-label').textContent = t.homeLabel;
  document.getElementById('share-label').textContent = t.shareLabel;
  document.getElementById('score-lbl').textContent = t.scoreLbl;
}

// ---- CATEGORIES ----
function buildCatGrid() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = '';
  Object.entries(categories).forEach(([key, val]) => {
    const div = document.createElement('div');
    div.className = 'cat-card' + (selectedCat === key ? ' selected' : '');
    div.onclick = () => selectCat(key);
    div.innerHTML = `
      <div class="cat-icon">${val.icon}</div>
      <div class="cat-name">${val[lang]}</div>
      <div class="cat-count">${ui[lang].catLabel}</div>`;
    grid.appendChild(div);
  });
}

function selectCat(key) {
  selectedCat = key;
  buildCatGrid();
  document.getElementById('start-btn').disabled = false;
}

// ---- QUIZ ----
function startQuiz() {
  quizQuestions = shuffle([...questions[lang][selectedCat]]).slice(0, 10);
  currentQ = 0; score = 0; correctCount = 0; wrongCount = 0;
  showScreen('screen-quiz');
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  clearInterval(timerInterval);
  timeLeft = 15;

  const q = quizQuestions[currentQ];
  document.getElementById('q-counter').textContent = `Q ${currentQ + 1} / ${quizQuestions.length}`;
  document.getElementById('cat-badge').textContent = categories[selectedCat][lang];
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('timer-num').textContent = '15';
  setTimerBar(100);

  const opts = document.getElementById('options-container');
  opts.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => checkAnswer(i, q.ans);
    opts.appendChild(btn);
  });

  startTimer();
}

function setTimerBar(pct) {
  if (!timerBarEl) return;
  const style = timerBarEl.style;
  style.setProperty('--timer-pct', pct + '%');
  timerBarEl.innerHTML = `<div style="height:100%;width:${pct}%;background:${
    pct > 60 ? '#6C47FF' : pct > 30 ? '#FF6B35' : '#DC2626'
  };border-radius:4px;transition:width 0.1s linear;"></div>`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft = Math.max(0, timeLeft - 0.1);
    const pct = (timeLeft / 15) * 100;
    setTimerBar(pct);
    document.getElementById('timer-num').textContent = Math.ceil(timeLeft);
    if (timeLeft <= 0) { clearInterval(timerInterval); if (!answered) timeOut(); }
  }, 100);
}

function timeOut() {
  answered = true;
  const q = quizQuestions[currentQ];
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.ans) btn.classList.add('correct');
  });
  const fb = document.getElementById('feedback');
  fb.textContent = ui[lang].timeout;
  fb.className = 'feedback wrong-msg';
  wrongCount++;
  setTimeout(nextQuestion, 1800);
}

function checkAnswer(selected, correctIdx) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.add('disabled'));
  const btns = document.querySelectorAll('.option-btn');
  const fb = document.getElementById('feedback');

  if (selected === correctIdx) {
    btns[selected].classList.add('correct');
    const pts = Math.max(10, Math.ceil((timeLeft / 15) * 100));
    score += pts;
    correctCount++;
    document.getElementById('score-live').textContent = score;
    fb.textContent = lang === 'hi' ? `✅ बिल्कुल सही! +${pts} points` : `✅ Correct! +${pts} points`;
    fb.className = 'feedback correct-msg';
  } else {
    btns[selected].classList.add('wrong');
    btns[correctIdx].classList.add('correct');
    wrongCount++;
    fb.textContent = lang === 'hi' ? '❌ गलत जवाब!' : '❌ Wrong answer!';
    fb.className = 'feedback wrong-msg';
  }
  setTimeout(nextQuestion, 1600);
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizQuestions.length) {
    showAd(() => showResult());
  } else if (currentQ === 5) {
    showAd(() => loadQuestion());
  } else {
    loadQuestion();
  }
}

// ---- RESULT ----
function showResult() {
  showScreen('screen-result');
  const pct = Math.round((correctCount / quizQuestions.length) * 100);
  document.getElementById('result-pct').textContent = pct + '%';
  document.getElementById('r-correct').textContent = correctCount;
  document.getElementById('r-wrong').textContent = wrongCount;
  document.getElementById('r-points').textContent = score;

  // Animate score arc
  const arc = document.getElementById('score-arc');
  const circumference = 326.7;
  const offset = circumference - (pct / 100) * circumference;
  setTimeout(() => { arc.style.transition = 'stroke-dashoffset 1s ease'; arc.style.strokeDashoffset = offset; }, 100);

  let emoji, title;
  if (pct >= 90)      { emoji = '🏆'; title = lang === 'hi' ? 'शानदार! उस्ताद हो आप!' : "Outstanding! You're a Master!"; }
  else if (pct >= 70) { emoji = '🎉'; title = lang === 'hi' ? 'बहुत बढ़िया!'           : 'Great Job!'; }
  else if (pct >= 50) { emoji = '👍'; title = lang === 'hi' ? 'ठीक-ठाक!'              : 'Not Bad!'; }
  else                { emoji = '📚'; title = lang === 'hi' ? 'और पढ़ाई करो!'          : 'Keep Learning!'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
}

function playAgain() { startQuiz(); }

function goHome() {
  selectedCat = null;
  document.getElementById('start-btn').disabled = true;
  buildCatGrid();
  showScreen('screen-home');
}

function shareScore() {
  const pct = Math.round((correctCount / quizQuestions.length) * 100);
  const cat = categories[selectedCat][lang];
  const text = lang === 'hi'
    ? `मैंने Quiz Master पर ${cat} quiz में ${pct}% score किया! 🎯 ${score} points!\nखुद खेलो: https://yourusername.github.io/quiz-master`
    : `I scored ${pct}% on ${cat} quiz on Quiz Master! 🎯 ${score} points!\nPlay now: https://yourusername.github.io/quiz-master`;
  if (navigator.share) {
    navigator.share({ title: 'Quiz Master Score', text });
  } else {
    navigator.clipboard.writeText(text).then(() => alert(lang === 'hi' ? 'Score copy हो गया! Paste करके share करें।' : 'Score copied! Paste it to share.'));
  }
}

// ---- INTERSTITIAL AD ----
function showAd(callback) {
  adCallback = callback;
  const overlay = document.getElementById('interstitial');
  const btn = document.getElementById('close-int-btn');
  overlay.classList.add('show');
  btn.disabled = true;
  let secs = 5;
  btn.textContent = `Skip ${secs}s`;
  adSkipTimer = setInterval(() => {
    secs--;
    if (secs <= 0) {
      clearInterval(adSkipTimer);
      btn.disabled = false;
      btn.textContent = '✕ Close Ad';
    } else {
      btn.textContent = `Skip ${secs}s`;
    }
  }, 1000);
}

function closeInterstitial() {
  document.getElementById('interstitial').classList.remove('show');
  clearInterval(adSkipTimer);
  if (adCallback) { adCallback(); adCallback = null; }
}

// ---- UTILS ----
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
