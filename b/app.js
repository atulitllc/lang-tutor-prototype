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

/* ---------- Practice ---------- */
function initPractice(){
  var chat=$('#chat'); if(!chat) return;
  var qs=new URLSearchParams(location.search);
  var code=qs.get('lang')||get('lang','es'); if(!LANGS[code]) code='es';
  var L=LANGS[code], level=LEVELS[get('level','beginner')]||'Beginner';
  $$('.js-lang').forEach(function(n){n.textContent=L.name});
  $$('.js-flag').forEach(function(n){n.textContent=L.flag});
  $$('.js-level').forEach(function(n){n.textContent=level});
  $$('.js-tutor').forEach(function(n){n.textContent=L.tutor});
  $$('.js-tutor-init').forEach(function(n){n.textContent=L.tutor.charAt(0)});
  var xp=120, words=86, acc=91, lesson=40, corrections=[];

  function tutorMsg(line){
    var d=document.createElement('div');d.className='msg tutor';
    d.innerHTML='<div class="avatar-sm">'+L.tutor.charAt(0)+'</div><div class="bubble"><div class="txt">'+esc(line[0])+'</div>'+(line[1]&&line[1]!=='(English)'?'<button class="tr-btn" type="button">Translate</button><div class="tr">'+esc(line[1])+'</div>':'')+'</div>';
    chat.appendChild(d);scroll();return d;
  }
  function correctionHtml(c){
    return '<div class="correction"><div class="c-head">✏️ Gentle correction</div>'+
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
    setTimeout(function(){t.remove();tutorMsg(L.replies[ri++%L.replies.length]);bump();},900);
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

  // suggestions
  var sg=$('#suggestions');
  L.sugg.forEach(function(s){var b=document.createElement('button');b.type='button';b.className='sugg';b.textContent=s;b.onclick=function(){send(s)};sg.appendChild(b)});
  var input=$('#msgInput');
  $('#composer').addEventListener('submit',function(e){e.preventDefault();send(input.value);input.value='';});
  chat.addEventListener('click',function(e){var b=e.target.closest('.tr-btn');if(b){b.parentNode.classList.toggle('show-tr');b.textContent=b.parentNode.classList.contains('show-tr')?'Hide':'Translate';}});

  // modes
  var stage=$('#stage');
  function setMode(m){
    stage.dataset.mode=m;
    $$('.mode-btn').forEach(function(b){b.classList.toggle('active',b.dataset.mode===m);b.setAttribute('aria-selected',b.dataset.mode===m)});
    if(m!=='voice') stopListen();
    if(m==='video') startVideo(); else stopVideo();
  }
  $$('.mode-btn').forEach(function(b){b.onclick=function(){setMode(b.dataset.mode)}});
  $$('.js-to-voice').forEach(function(b){b.onclick=function(){setMode('voice')}});

  // voice
  var listening=false, lt;
  var micBig=$('#micBig');
  function stopListen(){listening=false;clearTimeout(lt);stage.classList.remove('listening');var s=$('#voiceStatus');if(s)s.textContent='Tap the mic and speak';}
  micBig.onclick=function(){
    if(listening){stopListen();return}
    listening=true;stage.classList.add('listening');$('#voiceStatus').textContent='Listening...';
    lt=setTimeout(function(){
      var said=L.sugg[0];$('#voiceStatus').textContent='Heard: "'+said+'"';
      listening=false;stage.classList.remove('listening');
      setTimeout(function(){send(said);$('#voiceStatus').textContent='Tap the mic and speak';},700);
    },2600);
  };
  if(qs.get('listen')==='1'){setTimeout(function(){listening=true;stage.classList.add('listening');$('#voiceStatus').textContent='Listening...';},50)}

  // video
  var vi=0, vt, captionsOn=true, trOn=false;
  var vid=$('#tutorVideo'), tile=$('#tutorTile');
  if(vid){
    vid.addEventListener('loadeddata',function(){tile.classList.add('has-video')});
    vid.addEventListener('error',function(){tile.classList.remove('has-video')},true);
    var src=vid.querySelector('source'); if(src) src.addEventListener('error',function(){tile.classList.remove('has-video')});
    vid.addEventListener('play',function(){tile.classList.add('playing')});
    vid.addEventListener('pause',function(){tile.classList.remove('playing')});
    vid.addEventListener('ended',function(){tile.classList.remove('playing')});
    $('#playBtn').onclick=function(){vid.muted=false;vid.play().catch(function(){})};
    vid.onclick=function(){if(!vid.paused) vid.pause()};
  }
  function showLine(){
    var line=L.lines[vi%L.lines.length];
    $('#subText').textContent=line[0];
    $('#subTr').textContent=line[1]==='(English)'?'':line[1];
    tile.classList.add('speaking');
    clearTimeout(tile._t);tile._t=setTimeout(function(){tile.classList.remove('speaking')},3000);
    vi++;
  }
  function startVideo(){if(vt) return;showLine();vt=setInterval(showLine,4200)}
  function stopVideo(){clearInterval(vt);vt=null;if(vid&&!vid.paused)vid.pause()}
  function toggle(btn,cls,cb){btn.onclick=function(){var on=btn.classList.toggle('off');if(cb)cb(!on)}}
  toggle($('#vcMic'),'off',function(on){$('#vcMic').title=on?'Mute':'Unmute'});
  toggle($('#vcCam'),'off',function(on){$('#selfTile').classList.toggle('cam-off',!on);$('#selfCamToggle').textContent=on?'📷 Turn off':'📷 Turn on'});
  $('#selfCamToggle').onclick=function(){$('#vcCam').click()};
  toggle($('#vcCc'),'off',function(on){$('#subs').classList.toggle('hidden',!on)});
  $('#trToggle').onclick=function(){trOn=!trOn;$('#subs').classList.toggle('show-tr',trOn);this.classList.toggle('on',trOn);this.textContent=trOn?'Translation on':'Translate'};
  $('#vcEnd').onclick=function(){stopVideo();$('#endModal').classList.add('open')};
  $('#endClose').onclick=function(){$('#endModal').classList.remove('open');setMode('chat')};

  setMode(qs.get('mode')||'chat');
}
document.addEventListener('DOMContentLoaded',function(){initOnboarding();initPractice();
  var mt=document.querySelector('.menu-toggle');if(mt)mt.onclick=function(){document.body.classList.toggle('nav-open')};
});
})();
