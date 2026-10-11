/* Shared prototype logic. Placeholder content only. */
(function(){
var LANGS = {
 es:{name:'Spanish',flag:'🇪🇸',tutor:'Sofía',hello:'¡Hola!',
  lines:[['¡Hola! Soy Sofía, tu tutora. ¿Qué hiciste el fin de semana?','Hi! I am Sofía, your tutor. What did you do on the weekend?'],
         ['¡Qué bien! ¿Con quién fuiste a la playa?','Great! Who did you go to the beach with?'],
         ['Perfecto. Ahora dime: ¿qué comiste allí?','Perfect. Now tell me: what did you eat there?'],
         ['Muy bien. Vamos a practicar el pretérito con verbos irregulares.','Very good. Let us practice the preterite with irregular verbs.']],
  err:{pre:'Yo ',wrong:'fue',right:'fui',post:' a la playa con mis amigos.',why:'"Fue" is for él or ella. With "yo", the past tense of "ir" is "fui".'},
  sugg:['Fui con mi familia.','Comí paella.','¿Puedes repetir, por favor?'],
  replies:[['¡Muy bien! ¿Y qué más hiciste?','Very good! And what else did you do?'],['Interesante. Cuéntame más, por favor.','Interesting. Tell me more, please.'],['¡Excelente! Intenta usar el pasado otra vez.','Excellent! Try using the past tense again.']],
  dict:{'como':'cómo','estas':'estás','esta':'está','tambien':'también','mas':'más','adios':'adiós','fue':'fui','ingles':'inglés','espanol':'español','manana':'mañana'}},
 fr:{name:'French',flag:'🇫🇷',tutor:'Camille',hello:'Bonjour !',
  lines:[['Bonjour ! Je suis Camille. Qu\'est-ce que tu as fait ce week-end ?','Hello! I am Camille. What did you do this weekend?'],['Super ! Avec qui es-tu allé au marché ?','Great! Who did you go to the market with?'],['Très bien. Qu\'est-ce que tu as acheté ?','Very good. What did you buy?']],
  err:{pre:'Je ',wrong:'suis allé avec',right:'suis allé au marché avec',post:' mes amis.',why:'Say where you went: "aller" needs a place, like "au marché".'},
  sugg:['J\'ai acheté du pain.','Avec ma sœur.','Tu peux répéter ?'],
  replies:[['Très bien ! Et ensuite ?','Very good! And then?'],['Intéressant. Raconte-moi plus.','Interesting. Tell me more.']],
  dict:{'ca':'ça','tres':'très','etes':'êtes','francais':'français','ete':'été'}},
 de:{name:'German',flag:'🇩🇪',tutor:'Lena',hello:'Hallo!',
  lines:[['Hallo! Ich bin Lena. Was hast du am Wochenende gemacht?','Hi! I am Lena. What did you do on the weekend?'],['Toll! Mit wem bist du ins Kino gegangen?','Great! Who did you go to the cinema with?'],['Sehr gut. Welchen Film hast du gesehen?','Very good. Which film did you see?']],
  err:{pre:'Ich ',wrong:'habe',right:'bin',post:' ins Kino gegangen.',why:'Verbs of movement like "gehen" use "sein" in the perfect tense.'},
  sugg:['Mit meinem Bruder.','Ich habe einen Krimi gesehen.','Noch einmal, bitte?'],
  replies:[['Super! Und dann?','Great! And then?'],['Interessant. Erzähl mir mehr.','Interesting. Tell me more.']],
  dict:{'fur':'für','schon':'schön','uber':'über','mochte':'möchte','gross':'groß'}},
 it:{name:'Italian',flag:'🇮🇹',tutor:'Giulia',hello:'Ciao!',
  lines:[['Ciao! Sono Giulia. Cosa hai fatto nel fine settimana?','Hi! I am Giulia. What did you do on the weekend?'],['Che bello! Con chi sei andato al mare?','How nice! Who did you go to the sea with?']],
  err:{pre:'Io ',wrong:'ho andato',right:'sono andato',post:' al mare.',why:'"Andare" takes "essere" in the passato prossimo.'},
  sugg:['Con i miei amici.','Ho mangiato la pizza.','Puoi ripetere?'],
  replies:[['Bravo! E poi?','Well done! And then?'],['Interessante. Dimmi di più.','Interesting. Tell me more.']],
  dict:{'perche':'perché','citta':'città','e':'è'}},
 pt:{name:'Portuguese',flag:'🇧🇷',tutor:'Ana',hello:'Olá!',
  lines:[['Olá! Eu sou a Ana. O que você fez no fim de semana?','Hi! I am Ana. What did you do on the weekend?'],['Que legal! Com quem você foi à praia?','Cool! Who did you go to the beach with?']],
  err:{pre:'Eu ',wrong:'foi',right:'fui',post:' à praia com meus amigos.',why:'With "eu", the past tense of "ir" is "fui".'},
  sugg:['Fui com minha família.','Comi peixe.','Pode repetir?'],
  replies:[['Muito bem! E depois?','Very good! And then?']],
  dict:{'voce':'você','nao':'não','entao':'então'}},
 ja:{name:'Japanese',flag:'🇯🇵',tutor:'Yuki',hello:'こんにちは！',
  lines:[['こんにちは！ユキです。週末は何をしましたか？','Hello! I am Yuki. What did you do on the weekend?'],['いいですね！誰と行きましたか？','Nice! Who did you go with?']],
  err:{pre:'友達',wrong:'を',right:'と',post:'海に行きました。',why:'Use "と" to mean "with" a person.'},
  sugg:['家族と行きました。','すしを食べました。','もう一度お願いします。'],
  replies:[['すごいですね！それから？','Amazing! And then?']],dict:{}},
 ko:{name:'Korean',flag:'🇰🇷',tutor:'Minji',hello:'안녕하세요!',
  lines:[['안녕하세요! 저는 민지예요. 주말에 뭐 했어요?','Hello! I am Minji. What did you do on the weekend?'],['좋아요! 누구랑 갔어요?','Nice! Who did you go with?']],
  err:{pre:'친구',wrong:'를',right:'랑',post:' 바다에 갔어요.',why:'Use "랑" to say "with" someone in casual speech.'},
  sugg:['가족이랑 갔어요.','다시 말해 주세요.'],replies:[['잘했어요! 그리고요?','Well done! And then?']],dict:{}},
 zh:{name:'Mandarin',flag:'🇨🇳',tutor:'Lin',hello:'你好！',
  lines:[['你好！我是林老师。你周末做了什么？','Hello! I am Teacher Lin. What did you do on the weekend?'],['真好！你和谁一起去的？','Nice! Who did you go with?']],
  err:{pre:'我',wrong:'去海边了和朋友',right:'和朋友去海边了',post:'。',why:'Put "和朋友" (with friends) before the verb.'},
  sugg:['我和家人一起去的。','请再说一遍。'],replies:[['很好！然后呢？','Very good! And then?']],dict:{}},
 hi:{name:'Hindi',flag:'🇮🇳',tutor:'Priya',hello:'नमस्ते!',
  lines:[['नमस्ते! मैं प्रिया हूँ। आपने सप्ताहांत में क्या किया?','Hello! I am Priya. What did you do on the weekend?']],
  err:{pre:'मैं दोस्तों के साथ समुद्र ',wrong:'गई थी',right:'गया था',post:'।',why:'Placeholder: match the verb ending to the speaker.'},
  sugg:['मैं परिवार के साथ गया।','फिर से कहिए।'],replies:[['बहुत अच्छा! और फिर?','Very good! And then?']],dict:{}},
 ar:{name:'Arabic',flag:'🇸🇦',tutor:'Layla',hello:'مرحبا!',
  lines:[['مرحبا! أنا ليلى. ماذا فعلت في عطلة نهاية الأسبوع؟','Hello! I am Layla. What did you do on the weekend?']],
  err:{pre:'',wrong:'ذهب',right:'ذهبتُ',post:' إلى البحر مع أصدقائي.',why:'With "I", the verb takes the ending "تُ".'},
  sugg:['ذهبت مع عائلتي.','أعد من فضلك.'],replies:[['ممتاز! وبعد ذلك؟','Excellent! And then?']],dict:{}},
 ru:{name:'Russian',flag:'🇷🇺',tutor:'Olga',hello:'Привет!',
  lines:[['Привет! Я Ольга. Что ты делал на выходных?','Hi! I am Olga. What did you do on the weekend?']],
  err:{pre:'Я ходил на море с ',wrong:'друзья',right:'друзьями',post:'.',why:'After "с" (with), use the instrumental case.'},
  sugg:['Я ездил с семьёй.','Повтори, пожалуйста.'],replies:[['Отлично! А потом?','Great! And then?']],dict:{}},
 en:{name:'English',flag:'🇺🇸',tutor:'Emma',hello:'Hi!',
  lines:[['Hi! I am Emma. What did you do last weekend?','(English)'],['Nice! Who did you go with?','(English)']],
  err:{pre:'I ',wrong:'goed',right:'went',post:' to the beach with my friends.',why:'"Go" is irregular: the past tense is "went".'},
  sugg:['I went with my family.','Could you repeat that?'],replies:[['Great job! What happened next?','(English)']],
  dict:{'goed':'went','buyed':'bought','i':'I','dont':'don\'t','im':'I\'m'}}
};
var LEVELS={beginner:'Beginner',intermediate:'Intermediate',advanced:'Advanced'};
window.PROTO={LANGS:LANGS,LEVELS:LEVELS};
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function get(k,d){try{return localStorage.getItem('lt_'+k)||d}catch(e){return d}}
function set(k,v){try{localStorage.setItem('lt_'+k,v)}catch(e){}}

/* ---------- Onboarding ---------- */
function initOnboarding(){
  var grid=$('#langGrid'); if(!grid) return;
  var sel={lang:get('lang','es'),level:get('level','beginner'),goal:get('goal','')};
  Object.keys(LANGS).forEach(function(k){
    var b=document.createElement('button');b.type='button';b.className='lang-card';b.dataset.v=k;
    b.innerHTML='<span class="flag">'+LANGS[k].flag+'</span><span class="lname">'+LANGS[k].name+'</span><span class="lhello">'+esc(LANGS[k].hello)+'</span>';
    grid.appendChild(b);
  });
  function sync(){
    $$('.lang-card').forEach(function(b){b.classList.toggle('selected',b.dataset.v===sel.lang)});
    $$('.level-card').forEach(function(b){b.classList.toggle('selected',b.dataset.v===sel.level)});
    $$('.goal-chip').forEach(function(b){b.classList.toggle('selected',b.dataset.v===sel.goal)});
    var s=$('#summary'); if(s) s.textContent=LANGS[sel.lang].flag+' '+LANGS[sel.lang].name+' · '+LEVELS[sel.level]+(sel.goal?' · '+sel.goal:'');
  }
  document.addEventListener('click',function(e){
    var t=e.target.closest('.lang-card,.level-card,.goal-chip'); if(!t) return;
    if(t.classList.contains('lang-card')) sel.lang=t.dataset.v;
    if(t.classList.contains('level-card')) sel.level=t.dataset.v;
    if(t.classList.contains('goal-chip')) sel.goal=(sel.goal===t.dataset.v?'':t.dataset.v);
    sync();
  });
  $('#startBtn').addEventListener('click',function(){set('lang',sel.lang);set('level',sel.level);set('goal',sel.goal);location.href='practice.html';});
  sync();
}

/* ---------- Speech (Web Speech API, free, in-browser) ---------- */
var BCP={es:'es-ES',fr:'fr-FR',de:'de-DE',it:'it-IT',pt:'pt-BR',ja:'ja-JP',ko:'ko-KR',zh:'zh-CN',hi:'hi-IN',ar:'ar-SA',ru:'ru-RU',en:'en-US'};
var Speech=(function(){
  var synth=window.speechSynthesis, ok=!!(synth&&window.SpeechSynthesisUtterance);
  var voices=[], unlocked=false, muted=get('muted','0')==='1', slow=get('slow','0')==='1', token=0, listeners=[];
  function load(){ if(!ok) return; voices=synth.getVoices()||[]; }
  if(ok){ load(); if('onvoiceschanged' in synth) synth.addEventListener?synth.addEventListener('voiceschanged',load):(synth.onvoiceschanged=load); setTimeout(load,500); setTimeout(load,2000); }
  function score(v,lang){
    var s=0, vl=(v.lang||'').replace('_','-').toLowerCase(), want=lang.toLowerCase(), pre=want.split('-')[0];
    if(vl===want) s+=100; else if(vl.split('-')[0]===pre) s+=60; else return -1;
    if(/google|natural|neural|premium|enhanced/i.test(v.name)) s+=10;
    if(v.localService) s+=2; if(v['default']) s+=1;
    return s;
  }
  function pick(lang){
    load(); var best=null,bs=-1;
    voices.forEach(function(v){var s=score(v,lang); if(s>bs){bs=s;best=v}});
    return best; // null => browser picks from utt.lang (or default voice)
  }
  function emit(){listeners.forEach(function(f){f()})}
  function unlock(){
    if(unlocked||!ok) return; unlocked=true;
    try{ var u=new SpeechSynthesisUtterance(' '); u.volume=0; synth.speak(u); }catch(e){}
    emit();
  }
  function cancel(){ token++; if(ok) try{synth.cancel()}catch(e){} }
  // speak a queue of [text, lang] items; callbacks per item. Returns false if it cannot speak (caller falls back to timers)
  function speakSeq(items,cb){
    cb=cb||{}; cancel(); var my=token;
    if(!ok||muted||!unlocked){ if(cb.blocked) cb.blocked(); return false; }
    var i=0;
    function next(){
      if(my!==token) return;
      if(i>=items.length){ if(cb.done) cb.done(); return; }
      var it=items[i++], text=it[0], lang=it[1]||'en-US', started=false, ended=false, wd, wd2;
      var u=new SpeechSynthesisUtterance(text); u.lang=lang; var v=pick(lang); if(v){ try{u.voice=v}catch(e){} }
      u.rate=slow?0.7:0.95; u.pitch=1;
      function finish(err){ if(ended) return; ended=true; clearTimeout(wd); clearTimeout(wd2); if(my!==token) return; if(cb.end) cb.end(it,i-1,err); if(err){ if(cb.fail) cb.fail(err); return; } setTimeout(next,250); }
      u.onstart=function(){ started=true; clearTimeout(wd); if(my!==token) return; if(cb.start) cb.start(it,i-1);
        wd2=setTimeout(function(){finish('timeout')}, 4000+text.length*(slow?160:110)); };
      u.onend=function(){ finish(started?undefined:'no-start'); }; // ended without ever starting = no usable voice
      u.onerror=function(e){ finish(e&&e.error||'error'); };
      u.onboundary=function(e){ if(my===token&&cb.boundary) cb.boundary(it,e.charIndex,e.charLength); };
      // watchdog: some browsers/OSes have no voices and never fire onstart
      wd=setTimeout(function(){ if(!started){ try{synth.cancel()}catch(e){} finish('no-start'); } },4000);
      try{ synth.speak(u); if(synth.paused) synth.resume(); }catch(e){ finish('throw'); }
    }
    next(); return true;
  }
  return {ok:ok,pick:pick,unlock:unlock,cancel:cancel,speakSeq:speakSeq,
    isUnlocked:function(){return unlocked}, isMuted:function(){return muted}, isSlow:function(){return slow},
    setMuted:function(m){muted=m;set('muted',m?'1':'0');if(m)cancel();emit()},
    setSlow:function(s){slow=s;set('slow',s?'1':'0');emit()},
    onChange:function(f){listeners.push(f)}, voices:function(){load();return voices}};
})();
window.PROTO.Speech=Speech;

/* ---------- Practice ---------- */
function initPractice(){
  var chat=$('#chat'); if(!chat) return;
  var qs=new URLSearchParams(location.search);
  var code=qs.get('lang')||get('lang','es'); if(!LANGS[code]) code='es';
  var L=LANGS[code], level=LEVELS[get('level','beginner')]||'Beginner', TL=BCP[code]||'es-ES';
  $$('.js-lang').forEach(function(n){n.textContent=L.name});
  $$('.js-flag').forEach(function(n){n.textContent=L.flag});
  $$('.js-level').forEach(function(n){n.textContent=level});
  $$('.js-tutor').forEach(function(n){n.textContent=L.tutor});
  $$('.js-tutor-init').forEach(function(n){n.textContent=L.tutor.charAt(0)});
  var xp=120, words=86, acc=91, lesson=40, corrections=[], lastTutor=L.lines[0];
  var stage=$('#stage');
  function mode(){return stage.dataset.mode}

  function tutorMsg(line){
    var d=document.createElement('div');d.className='msg tutor';
    d.innerHTML='<div class="avatar-sm">'+L.tutor.charAt(0)+'</div><div class="bubble"><div class="txt">'+esc(line[0])+'</div><div class="msg-tools"><button class="say-btn" type="button" title="Play audio" aria-label="Play audio">🔊</button>'+(line[1]&&line[1]!=='(English)'?'<button class="tr-btn" type="button">Translate</button>':'')+'</div>'+(line[1]&&line[1]!=='(English)'?'<div class="tr">'+esc(line[1])+'</div>':'')+'</div>';
    d._line=line; lastTutor=line;
    chat.appendChild(d);scroll();return d;
  }
  function correctionHtml(c){
    return '<div class="correction"><div class="c-head">✏️ Gentle correction <button class="say-btn c-say" type="button" title="Hear the correction" aria-label="Hear the correction" data-fixed="'+esc(c.pre+c.right+c.post)+'" data-why="'+esc(c.why)+'">🔊</button></div>'+
      '<div class="c-row"><span class="c-lbl">You wrote</span><span>'+esc(c.pre)+'<del>'+esc(c.wrong)+'</del>'+esc(c.post)+'</span></div>'+
      '<div class="c-row"><span class="c-lbl">Better</span><span>'+esc(c.pre)+'<ins>'+esc(c.right)+'</ins>'+esc(c.post)+'</span></div>'+
      '<div class="c-why">💡 '+esc(c.why)+'</div></div>';
  }
  function learnerMsg(text,c){
    var d=document.createElement('div');d.className='msg learner';
    d.innerHTML='<div class="bubble"><div class="txt">'+esc(text)+'</div>'+(c?correctionHtml(c):'')+'</div>';
    chat.appendChild(d);scroll();return d;
  }
  function typing(){var d=document.createElement('div');d.className='msg tutor typing';d.innerHTML='<div class="avatar-sm">'+L.tutor.charAt(0)+'</div><div class="bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';chat.appendChild(d);scroll();return d}
  function scroll(){chat.scrollTop=chat.scrollHeight}

  function fakeCorrect(text){
    var words=text.split(/(\s+)/);
    for(var i=0;i<words.length;i++){
      var w=words[i], m=w.match(/^([¿¡"']*)([^\s.,!?;:]+)(.*)$/); if(!m) continue;
      var key=m[2].toLowerCase();
      if(L.dict[key]&&L.dict[key]!==m[2]){
        var rep=L.dict[key]; if(m[2][0]===m[2][0].toUpperCase()&&m[2][0]!==m[2][0].toLowerCase()) rep=rep.charAt(0).toUpperCase()+rep.slice(1);
        return {pre:words.slice(0,i).join('')+m[1],wrong:m[2],right:rep,post:m[3]+words.slice(i+1).join(''),why:'Small spelling fix: "'+rep+'" needs its accent or correct form. Placeholder explanation.'};
      }
    }
    var first=text.charAt(0), endP=/[.!?。！？]$/.test(text);
    if(first!==first.toUpperCase()||!endP){
      var fixed=first.toUpperCase()+text.slice(1)+(endP?'':'.');
      return {pre:'',wrong:text,right:fixed,post:'',why:'Start with a capital letter and end with punctuation. Small thing, great habit!'};
    }
    return {pre:'',wrong:text,right:text.replace(/\.$/,'')+(code==='es'?', ¡claro!':'!'),post:'',why:'Already correct! A native speaker might add a little emphasis like this. Placeholder tip.'};
  }
  var ri=0;
  function send(text){
    text=text.trim(); if(!text) return;
    var c=fakeCorrect(text); learnerMsg(text,c); addFeedback(c);
    var t=typing();
    setTimeout(function(){
      t.remove(); var reply=L.replies[ri++%L.replies.length]; tutorMsg(reply); bump();
      if(mode()==='voice') voiceSpeak([[c.pre+c.right+c.post,TL],[reply[0],TL]]);
    },900);
  }
  function bump(){xp+=10;words+=2;lesson=Math.min(100,lesson+12);acc=Math.max(80,Math.min(98,acc+(Math.random()>.5?1:-1)));renderStats()}
  function renderStats(){
    $$('.js-xp').forEach(function(n){n.textContent=xp});
    $$('.js-words').forEach(function(n){n.textContent=words});
    $$('.js-acc').forEach(function(n){n.textContent=acc+'%'});
    $$('.js-lesson').forEach(function(n){n.textContent=lesson+'%'});
    $$('.js-lessonbar').forEach(function(n){n.style.width=lesson+'%'});
    var pct=Math.min(1,xp/200);
    $$('.ring-fg').forEach(function(n){n.style.strokeDashoffset=String(283*(1-pct))});
  }
  function addFeedback(c){
    corrections.unshift(c);
    var list=$('#feedbackList'); if(!list) return;
    list.innerHTML=corrections.slice(0,5).map(correctionHtml).join('');
  }

  // seed conversation
  tutorMsg(L.lines[0]);
  var seed=L.err; learnerMsg(seed.pre+seed.wrong+seed.post,seed); addFeedback(seed);
  if(L.lines[1]) tutorMsg(L.lines[1]);
  renderStats();

  var sg=$('#suggestions');
  L.sugg.forEach(function(s){var b=document.createElement('button');b.type='button';b.className='sugg';b.textContent=s;b.onclick=function(){send(s)};sg.appendChild(b)});
  var input=$('#msgInput');
  $('#composer').addEventListener('submit',function(e){e.preventDefault();send(input.value);input.value='';});

  // speaker buttons (chat + feedback panel)
  function playing(btn,on){ $$('.say-btn.on').forEach(function(b){b.classList.remove('on')}); if(btn&&on) btn.classList.add('on'); }
  document.addEventListener('click',function(e){
    var b=e.target.closest('.say-btn'); if(!b) return;
    Speech.unlock();
    var items;
    if(b.classList.contains('c-say')) items=[[b.dataset.fixed,TL],[b.dataset.why,'en-US']];
    else { var m=b.closest('.msg'); items=[[m._line[0],TL]]; }
    if(Speech.isMuted()) { flashHint('Sound is muted. Turn it on with the 🔇 button.'); return; }
    var ok=Speech.speakSeq(items,{start:function(){playing(b,true)},done:function(){playing(b,false)},end:function(it,i,err){if(err&&err!=='interrupted'&&err!=='canceled') flashHint('No voice available for this language on this device.')}});
    if(!ok&&!Speech.ok) flashHint('Your browser does not support speech audio.');
  });
  chat.addEventListener('click',function(e){var b=e.target.closest('.tr-btn');if(b){var bub=b.closest('.bubble');bub.classList.toggle('show-tr');b.textContent=bub.classList.contains('show-tr')?'Hide':'Translate';}});

  /* sound controls + hint */
  var hint=$('#soundHint'), sndBtn=$('#soundToggle'), slowBtn=$('#slowToggle'), vcSound=$('#vcSound');
  var hintTimer;
  function flashHint(msg){ hint.textContent=msg; hint.classList.add('show','info'); clearTimeout(hintTimer); hintTimer=setTimeout(function(){hint.classList.remove('show','info');syncSound()},3500); }
  function syncSound(){
    var m=Speech.isMuted();
    sndBtn.textContent=m?'🔇 Muted':'🔊 Sound'; sndBtn.classList.toggle('off',m); sndBtn.setAttribute('aria-pressed',String(!m));
    slowBtn.classList.toggle('on',Speech.isSlow()); slowBtn.setAttribute('aria-pressed',String(Speech.isSlow()));
    if(vcSound){ vcSound.classList.toggle('off',m); vcSound.firstChild.nodeValue=m?'🔇':'🔊'; }
    if(hint.classList.contains('info')) return;
    var need=Speech.ok&&!Speech.isUnlocked()&&!m&&(mode()==='voice'||mode()==='video');
    hint.textContent='🔈 Tap to enable sound'; hint.classList.toggle('show',need);
    if(!Speech.ok&&(mode()==='voice'||mode()==='video')){hint.textContent='Speech audio is not supported in this browser';hint.classList.add('show')}
  }
  Speech.onChange(syncSound);
  sndBtn.onclick=function(){Speech.unlock();Speech.setMuted(!Speech.isMuted());afterSoundChange()};
  if(vcSound) vcSound.onclick=function(){Speech.unlock();Speech.setMuted(!Speech.isMuted());afterSoundChange()};
  slowBtn.onclick=function(){Speech.unlock();Speech.setSlow(!Speech.isSlow());};
  function afterSoundChange(){ if(mode()==='video'){ restartVideoLine(); } else if(mode()==='voice'&&!Speech.isMuted()){ voiceSpeak([[lastTutor[0],TL]]); } else { stopTutorSpeech(); } }
  hint.onclick=function(){ if(hint.classList.contains('info')) return; Speech.unlock(); kick(); };
  // first gesture anywhere unlocks audio; if we were waiting in voice/video, start speaking
  function firstGesture(e){
    if(Speech.isUnlocked()) return;
    Speech.unlock();
    var t=e.target; if(t.closest&&t.closest('.mode-btn,#micBig,#playBtn,#soundToggle,#vcSound,.say-btn,#vcEnd')) return; // those handlers speak themselves
    kick();
  }
  document.addEventListener('pointerdown',firstGesture,true);
  document.addEventListener('keydown',firstGesture,true);
  function kick(){ if(mode()==='video') restartVideoLine(); else if(mode()==='voice') voiceSpeak([[lastTutor[0],TL]]); }

  /* modes */
  function setMode(m){
    var prev=stage.dataset.mode; stage.dataset.mode=m;
    $$('.mode-btn').forEach(function(b){b.classList.toggle('active',b.dataset.mode===m);b.setAttribute('aria-selected',b.dataset.mode===m)});
    if(m!=='voice') stopListen();
    if(prev!==m) stopTutorSpeech();
    if(m==='video') startVideo(); else stopVideo();
    if(m==='voice'&&prev!=='voice'&&Speech.isUnlocked()) voiceSpeak([[lastTutor[0],TL]]);
    syncSound();
  }
  $$('.mode-btn').forEach(function(b){b.onclick=function(){Speech.unlock();setMode(b.dataset.mode)}});
  $$('.js-to-voice').forEach(function(b){b.onclick=function(){Speech.unlock();setMode('voice')}});
  function stopTutorSpeech(){ Speech.cancel(); stage.classList.remove('tutor-speaking'); tile.classList.remove('speaking'); playing(null,false); }

  /* voice mode */
  var listening=false, lt, rec=null;
  var micBig=$('#micBig'), vStatus=$('#voiceStatus'), IDLE='Tap the mic and speak';
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  function voiceSpeak(items){
    var ok=Speech.speakSeq(items,{
      start:function(){stage.classList.add('tutor-speaking');vStatus.textContent=L.tutor+' is speaking...'},
      end:function(){stage.classList.remove('tutor-speaking')},
      done:function(){vStatus.textContent=IDLE},
      fail:function(err){ if(err!=='interrupted'&&err!=='canceled'){ fakeSpeak(); flashHint('No voice available for '+L.name+' on this device.'); } },
      blocked:function(){}
    });
    if(!ok) fakeSpeak();
  }
  function fakeSpeak(){
    { // no audio: fake the speaking waveform briefly so it still feels alive
      stage.classList.add('tutor-speaking'); vStatus.textContent=L.tutor+' replied (sound off)';
      setTimeout(function(){stage.classList.remove('tutor-speaking');vStatus.textContent=IDLE},2200);
    }
  }
  function stopListen(){listening=false;clearTimeout(lt);stage.classList.remove('listening');if(rec){try{rec.abort()}catch(e){} rec=null;} if(vStatus&&!stage.classList.contains('tutor-speaking')) vStatus.textContent=IDLE;}
  function fakeListen(){
    lt=setTimeout(function(){
      var said=L.sugg[0];vStatus.textContent='Heard: "'+said+'" (demo transcript)';
      listening=false;stage.classList.remove('listening');
      setTimeout(function(){send(said)},700);
    },2600);
  }
  function fakeListenNow(){ var said=L.sugg[0]; vStatus.textContent='Heard: "'+said+'" (demo transcript)'; listening=false; stage.classList.remove('listening'); setTimeout(function(){send(said)},700); }
  function startListen(){
    stopTutorSpeech(); listening=true; stage.classList.add('listening'); vStatus.textContent='Listening...';
    var useReal=SR&&qs.get('fakemic')!=='1'&&location.protocol!=='file:';
    if(!useReal){ fakeListen(); return; }
    var heard='', gotAny=false;
    try{
      rec=new SR(); rec.lang=TL; rec.interimResults=true; rec.maxAlternatives=1; rec.continuous=false;
      rec.onresult=function(e){ gotAny=true; heard=''; for(var i=0;i<e.results.length;i++) heard+=e.results[i][0].transcript; vStatus.textContent='Listening... "'+heard+'"'; };
      rec.onerror=function(e){ var r=rec; rec=null; if(!listening) return;
        if(e.error==='no-speech'){ listening=false; stage.classList.remove('listening'); vStatus.textContent='Did not catch that. Tap the mic and try again.'; return; }
        fakeListen(); flashHint('Mic unavailable ('+e.error+'). Using a demo transcript.'); };
      rec.onend=function(){ if(!listening||!rec) return; rec=null; listening=false; stage.classList.remove('listening');
        if(heard.trim()){ vStatus.textContent='Heard: "'+heard.trim()+'"'; setTimeout(function(){send(heard)},400); }
        else vStatus.textContent='Did not catch that. Tap the mic and try again.'; };
      rec.start();
      // safety net: if the mic never produces anything (no device, blocked silently), fall back to the demo transcript
      lt=setTimeout(function(){ if(listening&&rec&&!gotAny){ var r=rec; rec=null; try{r.abort()}catch(e){} fakeListenNow(); flashHint('No mic input detected. Using a demo transcript.'); } },7000);
    }catch(err){ rec=null; fakeListen(); }
  }
  micBig.onclick=function(){ Speech.unlock(); if(listening){stopListen();return} startListen(); };
  if(qs.get('listen')==='1'){setTimeout(function(){listening=true;stage.classList.add('listening');vStatus.textContent='Listening...';},50)}

  /* video mode: speech-driven subtitles + avatar */
  var vi=0, vt=null, videoOn=false, trOn=false, warned=false;
  var vid=$('#tutorVideo'), tile=$('#tutorTile'), subText=$('#subText'), subTr=$('#subTr');
  var script=L.lines.concat(L.replies);
  if(vid){
    vid.addEventListener('loadeddata',function(){tile.classList.add('has-video')});
    var src=vid.querySelector('source'); if(src) src.addEventListener('error',function(){tile.classList.remove('has-video')});
    vid.addEventListener('play',function(){tile.classList.add('playing');stopTutorSpeech();clearTimeout(vt)});
    vid.addEventListener('pause',function(){tile.classList.remove('playing')});
    vid.addEventListener('ended',function(){tile.classList.remove('playing')});
    $('#playBtn').onclick=function(){Speech.unlock();vid.muted=Speech.isMuted();vid.play().catch(function(){})};
    vid.onclick=function(){if(!vid.paused) vid.pause()};
  }
  function setSub(line,hl){
    var t=line[0];
    if(hl){ subText.innerHTML=esc(t.slice(0,hl[0]))+'<mark>'+esc(t.slice(hl[0],hl[0]+hl[1]))+'</mark>'+esc(t.slice(hl[0]+hl[1])); }
    else subText.textContent=t;
    subTr.textContent=line[1]==='(English)'?'':line[1];
  }
  function playLine(){
    clearTimeout(vt); if(!videoOn) return;
    if(tile.classList.contains('playing')) return;
    if(vi>=script.length){ subText.textContent='Your turn! Answer out loud, then switch to Voice mode to keep talking.'; subTr.textContent=''; tile.classList.remove('speaking'); return; }
    var line=script[vi++]; setSub(line);
    var spoke=Speech.speakSeq([[line[0],TL]],{
      start:function(){tile.classList.add('speaking')},
      boundary:function(it,ci,cl){ if(cl==null||!cl){ var rest=line[0].slice(ci), m=rest.match(/^\S+/); cl=m?m[0].length:1; } setSub(line,[ci,cl]); },
      end:function(it,i,err){ tile.classList.remove('speaking'); setSub(line);
        if(err&&err!=='interrupted'&&err!=='canceled'){ timedLine(line,true); if(!warned){warned=true;flashHint(err==='not-allowed'?'Tap anywhere to enable sound':'No voice available for '+L.name+' on this device. Subtitles only.');} } },
      done:function(){ vt=setTimeout(playLine,1400); }
    });
    if(!spoke) timedLine(line,false);
  }
  // silent fallback: fake mouth animation for a duration based on text length
  function timedLine(line,already){
    tile.classList.add('speaking');
    var dur=Math.min(5000,1200+line[0].length*55);
    vt=setTimeout(function(){tile.classList.remove('speaking');vt=setTimeout(playLine,1200)},dur);
  }
  function restartVideoLine(){ if(!videoOn) return; Speech.cancel(); clearTimeout(vt); vi=Math.max(0,vi-1); playLine(); }
  function startVideo(){ if(videoOn) return; videoOn=true; vi=0; $('#endModal').classList.remove('open'); playLine(); }
  function stopVideo(){ videoOn=false; clearTimeout(vt); tile.classList.remove('speaking'); if(vid&&!vid.paused) vid.pause(); }
  function toggle(btn,cb){btn.onclick=function(){var on=btn.classList.toggle('off');if(cb)cb(!on)}}
  toggle($('#vcMic'),function(on){$('#vcMic').title=on?'Mute your mic':'Unmute your mic';$('#vcMic').firstChild.nodeValue=on?'🎙️':'🚫'});
  toggle($('#vcCam'),function(on){$('#selfTile').classList.toggle('cam-off',!on);$('#selfCamToggle').textContent=on?'📷 Turn off':'📷 Turn on'});
  $('#selfCamToggle').onclick=function(){$('#vcCam').click()};
  toggle($('#vcCc'),function(on){$('#subs').classList.toggle('hidden',!on)});
  $('#trToggle').onclick=function(){trOn=!trOn;$('#subs').classList.toggle('show-tr',trOn);this.classList.toggle('on',trOn);this.textContent=trOn?'Translation on':'Translate'};
  $('#vcEnd').onclick=function(){stopVideo();stopTutorSpeech();$('#endModal').classList.add('open')};
  $('#endClose').onclick=function(){$('#endModal').classList.remove('open');setMode('chat')};

  setMode(qs.get('mode')||'chat');
  syncSound();
}
document.addEventListener('DOMContentLoaded',function(){initOnboarding();initPractice();
  var mt=document.querySelector('.menu-toggle');if(mt)mt.onclick=function(){document.body.classList.toggle('nav-open')};
});
})();
