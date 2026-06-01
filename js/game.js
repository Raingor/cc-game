/**
 * 🚪 任意门的回忆问答 — 哆啦A梦主题问答闯关游戏
 * 献给 CC 💕
 */

// ============================================
// 问答数据 — 基于 love-project 故事
// ============================================
const QUIZ_DATA = [
    {
        id: 1,
        question: '我们是在哪个App上相遇的？',
        options: ['探探', '二狗App', 'Soul', '陌陌'],
        answer: 1,
        icon: '📱',
        memory: {
            date: '2026年3月24日',
            title: '相遇',
            photo: 'images/4_11_confession.webp',
            snippet: '那个三月，二狗App的随机匹配让我们相遇。她带着好奇而来，我抱着忐忑再试。谁也没想到，两个平行世界就这样悄然交汇，命运的齿轮悄然转动... 🌸'
        }
    },
    {
        id: 2,
        question: '我第一次去中山找你的借口是什么？',
        options: ['问你中山有什么好吃的', '约你看电影', '说顺路经过', '请你吃饭'],
        answer: 0,
        icon: '🎯',
        memory: {
            date: '2026年3月28日',
            title: '第一次聊天',
            photo: 'images/3_28_snack.webp',
            snippet: '"粤ba"的赛事，广州队不敌中山队，给了我一个完美的借口——问CC中山有什么好吃的。她耐心地推荐，而我，借着这份闲聊，踏上了开往中山的列车。'
        }
    },
    {
        id: 3,
        question: '第一次见面，我们吃了什么？',
        options: ['火锅', '乳鸽', '拉面', '烧烤'],
        answer: 1,
        icon: '🍽️',
        memory: {
            date: '2026年3月28日',
            title: '第一次见面',
            photo: 'images/3_28_snack.webp',
            snippet: '傍晚时分，终于见到了她。一起吃了念念不忘的乳鸽，在孙文西步行街慢慢走着，聊不完的话。那一刻才发现，这个女孩，和我如此同频 💫'
        }
    },
    {
        id: 4,
        question: '第一次见面的宵夜，我们去了哪家店？',
        options: ['大墩荣记', '黄姨甜品店', '德记猪腰汤', '慢顿顿'],
        answer: 0,
        icon: '🍜',
        memory: {
            date: '2026年3月28日',
            title: '宵夜时光',
            photo: 'images/3_28_snack.webp',
            snippet: '临别前，去了大墩荣记吃宵夜。其实已经很饱了，但那晚的美食与欢声笑语，让一切都刚刚好。这家店，真的很好吃～ 🍜'
        }
    },
    {
        id: 5,
        question: '清明假期我们去了哪里玩？',
        options: ['江门', '厦门', '顺德', '广州'],
        answer: 2,
        icon: '🗺️',
        memory: {
            date: '2026年4月4日',
            title: '顺德寻味',
            photo: 'images/4_4_1.webp',
            snippet: '清明假期，我们一起去了顺德。吃了念念不忘的排骨饭，逛了金榜街，尝了双皮奶等甜品。那晚，我悄悄记住了——她喜欢双皮奶这件事 🍮'
        }
    },
    {
        id: 6,
        question: '在商场里，CC盯着什么东西看了很久，眼神里透着喜欢？',
        options: ['一只玩偶', '旋转木马的木制工艺品', '一条裙子', '一个包包'],
        answer: 1,
        icon: '🎠',
        memory: {
            date: '2026年4月4日',
            title: '心有所属',
            snippet: '在商场里，我注意到她盯着旋转木马的木制工艺品，眼神里透着喜欢。那一刻我也看进去了，心里默默想着——以后一定要送给她 🎠'
        }
    },
    {
        id: 7,
        question: '表白那天，我送了什么礼物给CC？',
        options: ['一束花', '一个沙漏', '一串项链', '哆啦A梦公仔'],
        answer: 1,
        icon: '⏳',
        memory: {
            date: '2026年4月11日',
            title: '表白 ❤️',
            photo: 'images/4_11_confession.webp',
            snippet: '表白前，我就为她准备了一份礼物——沙漏。因为她说她经常发呆，看着沙漏流沙发呆的样子一定很美，我想帮她留住那些美好的发呆时光。'
        }
    },
    {
        id: 8,
        question: '我们是在哪里表白的？',
        options: ['摩天轮上', '宁徽园', '孙文西步行街', '她家楼下'],
        answer: 1,
        icon: '💕',
        memory: {
            date: '2026年4月11日',
            title: '表白 ❤️',
            photo: 'images/4_11_confession.webp',
            snippet: '早上约她喝早茶，心情紧张得不行。逛到宁徽园时，一直在找时机，终于鼓起勇气表白，表明了心意。这一天，我们确认了关系，正式成为男女朋友 ❤️'
        }
    },
    {
        id: 9,
        question: '第一次以情侣身份出行，我们去了哪里？',
        options: ['广州动物园', '顺德的陈村花卉世界', '中山影视城', '珠海长隆'],
        answer: 1,
        icon: '🌿',
        memory: {
            date: '2026年4月18日',
            title: '花世界里的约会',
            photo: 'images/4_18_dora_1.webp',
            snippet: '第一次以情侣身份出行！我们去了顺德的陈村花卉世界，看到了各种各样的兰花。空气好清新，好安静，好舒服，充满氧气的一天 🌿'
        }
    },
    {
        id: 10,
        question: '在潭州98时光街，我们本来是奔着什么去的？',
        options: ['一家网红餐厅', '一群哆啦A梦', '一片花海', '一个复古集市'],
        answer: 1,
        icon: '🐱',
        memory: {
            date: '2026年4月18日',
            title: '时光街的哆啦A梦',
            photo: 'images/4_18_dora_1.webp',
            snippet: '走了一圈没找到，问了本地阿姨，又凭着CC的感觉走进更深的巷子——终于找到了那群哆啦A梦！🐱'
        }
    },
    {
        id: 11,
        question: '黄姨甜品店里，我们吃了什么？',
        options: ['双皮奶、炖蛋、凉拌鱼皮', '姜撞奶、芝麻糊', '红豆沙、绿豆沙', '杨枝甘露'],
        answer: 0,
        icon: '🍮',
        memory: {
            date: '2026年4月18日',
            title: '黄姨甜品店',
            snippet: '点了双皮奶、炖蛋、凉拌鱼皮，味道都很不错，就是偏甜了点。或许是恋爱的味道吧，显得更甜了～ 🍮'
        }
    },
    {
        id: 12,
        question: '旋转木马最后是在哪里买到的？',
        options: ['中山万象汇', '广州北京路', '顺德的万象汇', '小榄大信'],
        answer: 2,
        icon: '🎠',
        memory: {
            date: '2026年4月18日',
            title: '旋转木马的约定',
            snippet: '还记得在商场里，CC盯着旋转木马木制工艺品喜欢的样子吗？那天晚上我们来到了顺德的万象汇。运气超好，目标只有一个——把那个旋转木马带回家给她 🎠'
        }
    },
    {
        id: 13,
        question: '买旋转木马那晚，我们一起看了什么球赛？',
        options: ['CBA', '粤BA — 中山队对佛山队', 'NBA', '中超足球'],
        answer: 1,
        icon: '🏀',
        memory: {
            date: '2026年4月18日',
            title: '一起看球赛',
            snippet: '我顺手打开了粤BA直播——刚好是中山队对佛山队！CC是中山人，我们一起紧张地看完了整场，最后中山队赢了，我们一起欢呼 🏀'
        }
    },
    {
        id: 14,
        question: 'CC喜欢的那个自嘲熊盲盒，我是去哪里买的？',
        options: ['小榄的店', '广州北京路店', '网上代购', '中山的MINISO'],
        answer: 1,
        icon: '🎁',
        memory: {
            date: '2026年4月19日',
            title: '悄悄准备的惊喜',
            snippet: '她喜欢自嘲熊，上次还给我转发过广州北京路门店的自嘲熊活动。我立马出发去排队，随机抽了两个盲盒，等着和她一起拆 🎁'
        }
    },
    {
        id: 15,
        question: '我们的第一次合照是在哪里拍的？',
        options: ['花卉世界', '摩天轮上', '宁徽园', '时光街'],
        answer: 1,
        icon: '📸',
        memory: {
            date: '2026年4月25日',
            title: '第一次合照',
            photo: 'images/4_25_ferris_1.webp',
            snippet: '后来我们去了兴中广场的摩天轮，坐了一圈，欣赏着夜景。那一刻，我们迎来了第一次合照，定格了这个夜晚的浪漫 🎡'
        }
    },
    {
        id: 16,
        question: '第一次接CC下班后，我们去了哪里吃饭？',
        options: ['樱花里吃Party泰', '大墩荣记', '德记猪腰汤', '拉面店'],
        answer: 0,
        icon: '🍛',
        memory: {
            date: '2026年4月26日',
            title: '第一次接她下班',
            photo: 'images/4_26_sweet_1.webp',
            snippet: '这天，我去接CC下班，晚上一起去了樱花里吃Party泰。第一次接她下班，心里有种说不出的甜蜜感～ 💕'
        }
    },
    {
        id: 17,
        question: '五月份我们去了江门茶坑，主要是做什么？',
        options: ['爬山', '寻访陈皮之乡', '逛古镇', '吃海鲜'],
        answer: 1,
        icon: '🍊',
        memory: {
            date: '2026年5月2日',
            title: '江门茶坑寻陈皮',
            photo: 'images/5_2_jm_1.webp',
            snippet: '我们一起去了江门！第一站是茶坑，造访陈皮之乡。在茶坑吃了陈皮糯米糍、陈皮饼，喝了陈皮水、陈皮红豆糖水，浑身都是陈皮味了 🍊'
        }
    },
    {
        id: 18,
        question: '江门Citywalk途中，我们吃的那家超好吃的牛杂店有什么特点？',
        options: ['装修很豪华', '门面不起眼却挤满本地人', '在商场里面', '是网红店'],
        answer: 1,
        icon: '🍲',
        memory: {
            date: '2026年5月2日',
            title: '街角的牛杂小铺',
            snippet: '经过一家超级小的牛杂店，门面不起眼，却挤满了本地人。端上来一碗热腾腾的牛杂，那个浓郁的汤底和软糯的口感，真的绝了！🍲'
        }
    },
    {
        id: 19,
        question: '5月3日那天下大雨，我们撑着一把小伞走了多远的路？',
        options: ['500米', '1.5公里', '3公里', '800米'],
        answer: 1,
        icon: '🌧️',
        memory: {
            date: '2026年5月3日',
            title: '1.5公里的风雨路',
            snippet: '雨太大了，我故意把伞的位置尽可能靠过去给她，我的右臂全都在淋着雨，只想着不能让她淋到。其实总共就1.5公里路，但因为下大雨，这段路显得好漫长好漫长……我能和CC共晴天共风雨 💕'
        }
    },
    {
        id: 20,
        question: 'CC在车里说她好像给不了我什么，我是怎么回答的？',
        options: ['没关系我不在乎', '两个人在一起不是论公平付出和回报的', '你在我身边就够了', '以后慢慢还'],
        answer: 1,
        icon: '💕',
        memory: {
            date: '2026年5月3日',
            title: '车里的悄悄话',
            snippet: '她说她好像给不了我什么，我直白告诉她——两个人在一起，不是论公平付出和回报的。互相鼓励、互相扶持，不开心一起扛，开心一起分享。我会一直在她身边 💕'
        }
    },
    {
        id: 21,
        question: 'CC从厦门回来，特意绕道哪里只为见我一面？',
        options: ['中山', '广州', '深圳', '佛山'],
        answer: 1,
        icon: '🚄',
        memory: {
            date: '2026年5月9日',
            title: '跨越山海的相见',
            photo: 'images/5_10_4.webp',
            snippet: 'CC从厦门回来，特意绕道广州，只为见我一面。在广州南站的地下停车场，一切都刚刚好——巧到连车位都连在一起，连车牌号都像冥冥中的注定 🌸'
        }
    },
    {
        id: 22,
        question: '5月10日那天，CC在毫无准备的情况下见了谁？',
        options: ['我的朋友', '我的老爸', '我的同事', '我的老板'],
        answer: 1,
        icon: '👨‍👩‍👧‍👦',
        memory: {
            date: '2026年5月10日',
            title: '命中注定家长会',
            photo: 'images/5_10_4.webp',
            snippet: '在茶楼里偶遇了我老爸——CC就这样在毫无准备的情况下见了我的家长。同一天，我也见了她的家人。命运这个编剧，真的很懂浪漫 💕'
        }
    },
    {
        id: 23,
        question: '520那天，我给CC的惊喜是什么？',
        options: ['一束花', '记录着我们点点滴滴的时间轴', '一个包包', '一顿烛光晚餐'],
        answer: 1,
        icon: '💌',
        memory: {
            date: '2026年5月20日',
            title: '520的惊喜',
            photo: 'images/5_10_4.webp',
            snippet: '其实我已经准备已久了——这个记录着我们点点滴滴的时间轴，是我悄悄为你写下的情书。她说"太用心了吧"、"感动"、"好细致" 💕'
        }
    },
    {
        id: 24,
        question: '雨夜奔赴那晚，CC在哪里做着什么事的时候被老板训了？',
        options: ['在家里看电视', '在做美甲', '在逛街', '在吃饭'],
        answer: 1,
        icon: '💅',
        memory: {
            date: '2026年5月25日',
            title: '一小时奔赴，只为抱住你',
            snippet: '晚上CC在做美甲的时候，她老板一个电话打过来，把她训得想哭。我立马回家，扒了两口面，抓起车钥匙就冲出门，一小时就赶到了中山。第一件事，就是搂住她 💕'
        }
    },
    {
        id: 25,
        question: '小酒馆那晚，我们是怎么了解彼此的？',
        options: ['各自刷手机', '打开小红书一起看', '玩桌游', '看电影'],
        answer: 1,
        icon: '🍸',
        memory: {
            date: '2026年5月30日',
            title: '小酒馆里的真心话',
            photo: 'images/5_30_2.webp',
            snippet: '晚上和CC去了小酒馆喝酒。我们没有各自刷手机，而是打开小红书，一起认真了解对方——聊聊彼此的喜好、过往、想法……这种慢慢走近彼此内心的感觉，我们俩都很喜欢 🍸💕'
        }
    },
    {
        id: 26,
        question: '去CC家里送见面礼，我买了什么？',
        options: ['水果篮', '一斤陈皮', '茶叶', '红酒'],
        answer: 1,
        icon: '🎁',
        memory: {
            date: '2026年5月31日',
            title: '陈皮与见面礼',
            snippet: '心心念念要给CC家里人送见面礼。带上CC一起去江门，买了一斤陈皮，想着陈皮泡茶可以让CC的爸爸咳嗽缓下来。终于亲手把见面礼送到他们家了 ❤️'
        }
    },
    {
        id: 27,
        question: '我说过，CC一个电话给我，我承诺多久内必到？',
        options: ['半小时', '一小时内', '两小时内', '第二天'],
        answer: 1,
        icon: '🚗',
        memory: {
            date: '2026年5月3日',
            title: '车里的悄悄话',
            snippet: '想要陪伴，一个电话给我，一小时内必到。虽然我在广州、她在中山，但其实并不远，我愿意为她付出一切。我会一直在她身边，喜欢着她，爱着她，CC！'
        }
    },
    {
        id: 28,
        question: '我们是在几月几号相遇的？',
        options: ['3月24日', '3月28日', '4月4日', '4月11日'],
        answer: 0,
        icon: '📅',
        memory: {
            date: '2026年3月24日',
            title: '相遇',
            snippet: '那个三月，二狗App的随机匹配让我们相遇。她带着好奇而来，我抱着忐忑再试。谁也没想到，两个平行世界就这样悄然交汇，命运的齿轮悄然转动... 🌸'
        }
    },
    {
        id: 29,
        question: '我们正式成为男女朋友是哪一天？',
        options: ['3月28日', '4月4日', '4月11日', '4月18日'],
        answer: 2,
        icon: '💕',
        memory: {
            date: '2026年4月11日',
            title: '表白 ❤️',
            photo: 'images/4_11_confession.webp',
            snippet: '这一天，我们确认了关系，正式成为男女朋友 ❤️ 从那一刻起，我的世界多了一个你，我再也不需要羡慕别人了。'
        }
    },
    {
        id: 30,
        question: '那天我们在石岐买了两个盲盒手办，拆开后发现什么？',
        options: ['抽到了隐藏款', '两个一模一样', '都是不喜欢的', '一个都没抽到'],
        answer: 1,
        icon: '🎁',
        memory: {
            date: '2026年5月24日',
            title: '花鸟市场的水族馆奇遇',
            snippet: '在石岐买了CC最爱的自嘲熊手办、抱枕和两个盲盒手办。回到小榄才想起来拆——两个竟然是一模一样的款式！我们明明是错开来抽的，这样都能抽到一样的，真的太有默契了。于是，一人一个，刚刚好～ 🎁'
        }
    }
];

// ============================================
// 游戏状态
// ============================================
const state = {
    level: 'easy',
    count: 8,
    questions: [],
    currentIndex: 0,
    correctCount: 0,
    answered: false,
    isComplete: false
};

// ============================================
// DOM 引用
// ============================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const screens = {
    start: $('#screenStart'),
    game: $('#screenGame'),
    complete: $('#screenComplete')
};

const els = {
    startBtn: $('#startGameBtn'),
    diffBtns: $$('.diff-card'),
    backBtn: $('#backToMenuBtn'),

    // Quiz
    qIcon: $('#qIcon'),
    qText: $('#qText'),
    options: $('#options'),
    qpLabel: $('#qpLabel'),
    correctCount: $('#correctCount'),
    totalQuestions: $('#totalQuestions'),
    accuracyDisplay: $('#accuracyDisplay'),
    progressBar: $('#progressBar'),

    // Memory reveal
    memoryPlaceholder: $('#memoryPlaceholder'),
    memoryReveal: $('#memoryReveal'),
    mrPhotoImg: $('#mrPhotoImg'),
    mrDate: $('#mrDate'),
    mrTitle: $('#mrTitle'),
    mrSnippet: $('#mrSnippet'),
    autoCountdown: $('#autoCountdown'),
    countdownBar: $('#countdownBar'),
    countdownText: $('#countdownText'),

    // Complete
    completeTitle: $('#completeTitle'),
    scoreNumber: $('#scoreNumber'),
    scoreRing: $('#scoreRing'),
    completeMessage: $('#completeMessage'),
    gradeBadge: $('#gradeBadge'),
    replayBtn: $('#replayBtn'),
    menuBtn: $('#menuBtn'),

    // Lightbox
    lightbox: $('#lightbox'),
    lightboxImg: $('#lightboxImg'),
    lightboxClose: $('#lightboxClose')
};

// ============================================
// 工具
// ============================================
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ============================================
// 画面切换
// ============================================
function showScreen(name) {
    Object.keys(screens).forEach(key => {
        screens[key].style.display = key === name ? '' : 'none';
    });
}

// ============================================
// 难度选择
// ============================================
els.diffBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        els.diffBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.level = btn.dataset.level;
        state.count = parseInt(btn.dataset.count);
    });
});

// ============================================
// 开始游戏
// ============================================
els.startBtn.addEventListener('click', startQuiz);
els.backBtn.addEventListener('click', () => showScreen('start'));
els.replayBtn.addEventListener('click', startQuiz);
els.menuBtn.addEventListener('click', () => showScreen('start'));

function startQuiz() {
    // Reset state
    state.currentIndex = 0;
    state.correctCount = 0;
    state.answered = false;
    state.isComplete = false;

    // Select & shuffle questions
    state.questions = shuffle(QUIZ_DATA).slice(0, state.count);

    // Update stats
    els.totalQuestions.textContent = state.count;
    els.correctCount.textContent = '0';
    els.accuracyDisplay.textContent = '0%';

    showScreen('game');
    renderQuestion();
}

// ============================================
// 渲染题目
// ============================================
function renderQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    state.answered = false;

    // UI
    els.qIcon.textContent = q.icon || '💕';
    els.qText.textContent = q.question;
    els.qpLabel.textContent = `第 ${state.currentIndex + 1} / ${state.questions.length} 题`;
    els.countdownText.textContent = '选择一个答案 💭';

    // Hide memory reveal & countdown, show placeholder
    els.memoryReveal.style.display = 'none';
    els.autoCountdown.style.display = 'none';
    if (els.memoryPlaceholder) els.memoryPlaceholder.style.display = '';

    // Render options
    const labels = ['A', 'B', 'C', 'D'];
    let html = '';
    q.options.forEach((opt, i) => {
        html += `
            <button class="q-opt" data-index="${i}">
                <span class="q-opt-label">${labels[i]}</span>
                <span class="q-opt-text">${opt}</span>
            </button>
        `;
    });
    els.options.innerHTML = html;

    // Bind option clicks
    els.options.querySelectorAll('.q-opt').forEach(btn => {
        btn.addEventListener('click', () => onOptionClick(btn));
    });

    // Update progress
    updateProgress();
}

// ============================================
// 选项点击
// ============================================
function onOptionClick(btn) {
    if (state.answered || state.isComplete) return;

    state.answered = true;
    const q = state.questions[state.currentIndex];
    const selected = parseInt(btn.dataset.index);
    const isCorrect = selected === q.answer;

    // Disable all options
    els.options.querySelectorAll('.q-opt').forEach(b => {
        b.style.pointerEvents = 'none';
    });

    // Highlight correct / wrong
    const allBtns = els.options.querySelectorAll('.q-opt');
    allBtns.forEach((b, i) => {
        if (i === q.answer) {
            b.classList.add('correct');
        } else if (i === selected && !isCorrect) {
            b.classList.add('wrong');
        }
    });

    if (isCorrect) {
        state.correctCount++;
        els.countdownText.textContent = '✅ 答对了！好棒！';
    } else {
        els.countdownText.textContent = '❌ 没关系，让我告诉你这个回忆吧～';
    }

    // Update stats
    els.correctCount.textContent = state.correctCount;
    const total = state.questions.length;
    const answeredCount = state.currentIndex + 1;
    const accuracy = Math.round((state.correctCount / answeredCount) * 100);
    els.accuracyDisplay.textContent = `${accuracy}%`;

    // Show memory reveal
    showMemoryReveal(q.memory);

    // Auto advance with countdown bar — 回忆展示5秒
    const delay = 5000;
    els.autoCountdown.style.display = '';
    els.countdownText.textContent = isCorrect
        ? '✅ 答对了！好好看看这段回忆吧 💕'
        : '💭 没关系，看看这段回忆吧～';
    els.countdownBar.style.transition = 'none';
    els.countdownBar.style.width = '100%';
    // Trigger reflow
    void els.countdownBar.offsetHeight;
    els.countdownBar.style.transition = `width ${delay}ms linear`;
    els.countdownBar.style.width = '0%';

    setTimeout(() => {
        els.autoCountdown.style.display = 'none';
        if (state.currentIndex < state.questions.length - 1) {
            state.currentIndex++;
            renderQuestion();
        } else {
            completeQuiz();
        }
    }, delay);
}

// ============================================
// 展示回忆
// ============================================
function showMemoryReveal(memory) {
    els.mrDate.textContent = memory.date || '';
    els.mrTitle.textContent = memory.title || '';
    els.mrSnippet.textContent = memory.snippet || '';

    // Hide placeholder
    if (els.memoryPlaceholder) els.memoryPlaceholder.style.display = 'none';

    if (memory.photo) {
        els.mrPhotoImg.src = memory.photo;
        els.mrPhotoImg.alt = memory.title || '';
        els.mrPhotoImg.parentElement.style.display = '';
        // Click to lightbox
        els.mrPhotoImg.onclick = () => {
            els.lightboxImg.src = memory.photo;
            els.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
    } else {
        els.mrPhotoImg.parentElement.style.display = 'none';
    }

    els.memoryReveal.style.display = '';
}

// ============================================
// 更新进度
// ============================================
function updateProgress() {
    const total = state.questions.length;
    const progress = total > 0 ? ((state.currentIndex) / total) * 100 : 0;
    els.progressBar.style.width = `${progress}%`;
}

// ============================================
// 完成
// ============================================
function completeQuiz() {
    state.isComplete = true;
    const total = state.questions.length;
    const correct = state.correctCount;
    const accuracy = Math.round((correct / total) * 100);

    // Score ring
    const circumference = 2 * Math.PI * 60;
    const offset = circumference - (accuracy / 100) * circumference;

    els.scoreRing.innerHTML = `
        <svg class="score-ring-svg" viewBox="0 0 140 140">
            <circle class="score-ring-bg" cx="70" cy="70" r="60"
                fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="10"/>
            <circle class="score-ring-fill" cx="70" cy="70" r="60"
                fill="none" stroke="url(#scoreGrad)" stroke-width="10"
                stroke-linecap="round"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${offset}"
                transform="rotate(-90 70 70)"/>
            <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#FFD700"/>
                    <stop offset="100%" stop-color="#FF6B6B"/>
                </linearGradient>
            </defs>
        </svg>
        <div class="end-score-inner">
            <span class="end-score-num">${accuracy}</span>
            <span class="end-score-unit">分</span>
        </div>
    `;

    els.scoreNumber.textContent = accuracy;

    // Grade & message
    let grade, message;
    if (accuracy === 100) {
        grade = '🏆 满分！你是最了解我们故事的人！';
        message = 'CC，你竟然全都记得！这些回忆不只是我一个人的珍宝，也是你的。谢谢你把这些点点滴滴都放在心上，我好爱你 💕';
    } else if (accuracy >= 80) {
        grade = '🌟 太棒了！你对这段时光记忆深刻！';
        message = '你好厉害！这些属于我们的故事，你都记得清清楚楚。每一题答对都是对我们回忆的珍视，我好开心 💕';
    } else if (accuracy >= 60) {
        grade = '💪 还不错哦！大部分都记得！';
        message = '有些细节可能模糊了，没关系呀。这些回忆是我们共同创造的，往后的日子我们还要一起制造更多更多。我会一直陪在你身边 ✨';
    } else if (accuracy >= 40) {
        grade = '🌱 慢慢来，回忆会越来越深的';
        message = '嘿嘿，答对的题目不多没关系！这些故事才刚刚开始，我们的未来还有很长很长的路要走。慢慢来，一起创造更多回忆吧 💕';
    } else {
        grade = '🥰 没关系，重要的是我们一起经历了';
        message = '分数不重要，重要的是——这些事都是我们一起走过的。未来的每一天，我都会陪在你身边，让我们的故事越来越精彩 🎈';
    }

    els.gradeBadge.textContent = grade;
    els.completeMessage.textContent = message;
    els.completeTitle.textContent = accuracy === 100 ? '🎉 满分通关！' : '✨ 挑战完成！';

    showScreen('complete');

    // Fireworks if good score
    if (accuracy >= 80) {
        setTimeout(createFireworks, 300);
        setTimeout(createFireworks, 1000);
        setTimeout(createFireworks, 2000);
    }
}

// ============================================
// 🎆 烟花
// ============================================
function createFireworks() {
    const container = $('#fireworks');
    if (!container) return;

    const colors = ['#FFD700', '#FF6B6B', '#22D3EE', '#FFE082', '#A5F3FC', '#FF9FF3'];
    const burstX = Math.random() * container.offsetWidth * 0.6 + container.offsetWidth * 0.2;
    const burstY = Math.random() * container.offsetHeight * 0.5 + container.offsetHeight * 0.1;
    const count = 30 + Math.floor(Math.random() * 20);

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'firework-particle';
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
        const dist = 60 + Math.random() * 120;
        const size = 4 + Math.random() * 6;
        const color = colors[Math.floor(Math.random() * colors.length)];

        p.style.cssText = `
            left:${burstX}px; top:${burstY}px; width:${size}px; height:${size}px;
            background:${color}; --tx:${Math.cos(angle)*dist}px; --ty:${Math.sin(angle)*dist}px;
            animation-duration:${1.2+Math.random()*0.8}s; animation-delay:${Math.random()*0.2}s;
            box-shadow:0 0 ${size+2}px ${color};
        `;
        container.appendChild(p);
        setTimeout(() => p.remove(), 2500);
    }
}

// ============================================
// 灯箱
// ============================================
els.lightboxClose.addEventListener('click', () => {
    els.lightbox.classList.remove('active');
    els.lightboxImg.src = '';
    document.body.style.overflow = '';
});
els.lightbox.addEventListener('click', (e) => {
    if (e.target === els.lightbox) {
        els.lightbox.classList.remove('active');
        els.lightboxImg.src = '';
        document.body.style.overflow = '';
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        els.lightbox.classList.remove('active');
        els.lightboxImg.src = '';
        document.body.style.overflow = '';
    }
});

// ============================================
// 初始化
// ============================================
showScreen('start');
