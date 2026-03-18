/**
 * Java Learn — Voice Player PRO
 * Amazon Polly (Neural + Generativa) via Puter.js
 * 100% gratuito | sem API key | sem cadastro
 *
 * INSTALAR — adicione no index.html antes do </body>:
 *   <script src="https://js.puter.com/v2/"></script>
 *   <script src="voice-player.js"></script>
 */

(function () {
    'use strict';

    /* ── CATÁLOGO COMPLETO DE VOZES ──────────────────────────────
       engine: 'generative' = melhor qualidade (nível Gemini/GPT)
               'neural'     = ótima qualidade
               'standard'   = boa qualidade, mais rápida
               'browser'    = fallback offline
    ─────────────────────────────────────────────────────────── */
    const VOICES = [
        // ═══ PORTUGUÊS BRASILEIRO ═══
        { id:'Camila-gen',   name:'Camila',   lang:'pt-BR', engine:'generative', provider:'aws-polly', gender:'♀', style:'Narradora · Generativa',      badge:'✦ Gen',  bclass:'bg',  desc:'Máxima naturalidade · nível podcast' },
        { id:'Camila-neu',   name:'Camila',   lang:'pt-BR', engine:'neural',     provider:'aws-polly', gender:'♀', style:'Profissional · Neural',        badge:'⚡ Neu', bclass:'bn',  desc:'Clara, fluente, tom profissional' },
        { id:'Vitoria-neu',  name:'Vitória',  lang:'pt-BR', engine:'neural',     provider:'aws-polly', gender:'♀', style:'Apresentadora · Neural',       badge:'⚡ Neu', bclass:'bn',  desc:'Dicção perfeita, apresentadora TV' },
        { id:'Ricardo-std',  name:'Ricardo',  lang:'pt-BR', engine:'standard',   provider:'aws-polly', gender:'♂', style:'Locutor · Standard',           badge:'● Std',  bclass:'bs',  desc:'Voz masculina, locutor de rádio' },
        // ═══ INGLÊS — GENERATIVAS (as melhores vozes do mundo) ═══
        { id:'Joanna-gen',   name:'Joanna',   lang:'en-US', engine:'generative', provider:'aws-polly', gender:'♀', style:'Jornalista · Generativa',      badge:'✦ Gen',  bclass:'bg',  desc:'Âncora de telejornal, autoridade' },
        { id:'Matthew-gen',  name:'Matthew',  lang:'en-US', engine:'generative', provider:'aws-polly', gender:'♂', style:'Narrador · Generativa',        badge:'✦ Gen',  bclass:'bg',  desc:'Documentário, narração épica' },
        { id:'Ruth-gen',     name:'Ruth',     lang:'en-US', engine:'generative', provider:'aws-polly', gender:'♀', style:'Professora · Generativa',      badge:'✦ Gen',  bclass:'bg',  desc:'Didática, paciente, pedagógica' },
        { id:'Stephen-gen',  name:'Stephen',  lang:'en-US', engine:'generative', provider:'aws-polly', gender:'♂', style:'Podcast Host · Generativa',    badge:'✦ Gen',  bclass:'bg',  desc:'Descontraído, host de podcast' },
        { id:'Gregory-gen',  name:'Gregory',  lang:'en-US', engine:'generative', provider:'aws-polly', gender:'♂', style:'Notícias · Generativa',        badge:'✦ Gen',  bclass:'bg',  desc:'Locutor de notícias, impactante' },
        { id:'Danielle-gen', name:'Danielle', lang:'en-US', engine:'generative', provider:'aws-polly', gender:'♀', style:'Corporativa · Generativa',     badge:'✦ Gen',  bclass:'bg',  desc:'Formal, confiante, corporativa' },
        // ═══ INGLÊS — NEURAIS ═══
        { id:'Kendra-neu',   name:'Kendra',   lang:'en-US', engine:'neural',     provider:'aws-polly', gender:'♀', style:'Executiva · Neural',           badge:'⚡ Neu', bclass:'bn',  desc:'Tom executivo, seguro' },
        { id:'Kevin-neu',    name:'Kevin',    lang:'en-US', engine:'neural',     provider:'aws-polly', gender:'♂', style:'Narrador · Neural',            badge:'⚡ Neu', bclass:'bn',  desc:'Narrador claro, masculino' },
        { id:'Ivy-neu',      name:'Ivy',      lang:'en-US', engine:'neural',     provider:'aws-polly', gender:'♀', style:'Jovem · Neural',               badge:'⚡ Neu', bclass:'bn',  desc:'Energia jovem, casual' },
        { id:'Justin-neu',   name:'Justin',   lang:'en-US', engine:'neural',     provider:'aws-polly', gender:'♂', style:'Jovem Masc. · Neural',         badge:'⚡ Neu', bclass:'bn',  desc:'Descontraído, jovem' },
        { id:'Salli-neu',    name:'Salli',    lang:'en-US', engine:'neural',     provider:'aws-polly', gender:'♀', style:'Assistente · Neural',          badge:'⚡ Neu', bclass:'bn',  desc:'Tom de assistente virtual' },
        { id:'Joey-neu',     name:'Joey',     lang:'en-US', engine:'neural',     provider:'aws-polly', gender:'♂', style:'Casual Masc. · Neural',        badge:'⚡ Neu', bclass:'bn',  desc:'Natural, bate-papo casual' },
        // ═══ UK INGLÊS ═══
        { id:'Amy-gen',      name:'Amy (UK)', lang:'en-GB', engine:'generative', provider:'aws-polly', gender:'♀', style:'Britânica · Generativa',       badge:'✦ Gen',  bclass:'bg',  desc:'Sotaque britânico elegante' },
        { id:'Brian-neu',    name:'Brian (UK)',lang:'en-GB', engine:'neural',    provider:'aws-polly', gender:'♂', style:'Britânico · Neural',           badge:'⚡ Neu', bclass:'bn',  desc:'BBC, narrador britânico' },
        // ═══ ESPANHOL ═══
        { id:'Lupe-neu',     name:'Lupe (ES)',lang:'es-US', engine:'neural',     provider:'aws-polly', gender:'♀', style:'Espanhol · Neural',            badge:'⚡ Neu', bclass:'bn',  desc:'Espanhol neutro, profissional' },
        { id:'Pedro-neu',    name:'Pedro (ES)',lang:'es-US', engine:'neural',    provider:'aws-polly', gender:'♂', style:'Espanhol Masc. · Neural',      badge:'⚡ Neu', bclass:'bn',  desc:'Espanhol masculino, claro' },
        // ═══ FALLBACK OFFLINE ═══
        { id:'browser',      name:'Sistema',  lang:'pt-BR', engine:'browser',    provider:'browser',   gender:'●', style:'Fallback · Offline',          badge:'○ Off',  bclass:'bx',  desc:'Voz do navegador, funciona offline' },
    ];

    /* ── ESTADO ──────────────────────────────────────────────── */
    const VP = {
        voice: VOICES[0],
        chunks: [], idx: 0, total: 0,
        playing: false,
        rate: parseFloat(localStorage.getItem('vp-rate') || '1.0'),
        audio: null,
        frame: null,
        bars: [], targets: [], N: 44,
        title: '',
    };

    /* ── CSS ─────────────────────────────────────────────────── */
    document.head.insertAdjacentHTML('beforeend', `<style>
    .vpw{margin:0 0 40px;border-radius:22px;overflow:hidden;border:1px solid rgba(245,110,15,.2);background:linear-gradient(150deg,#0d0d12 0%,#13100a 100%);box-shadow:0 12px 50px rgba(0,0,0,.6);font-family:'Inter',sans-serif;position:relative;transition:all .3s ease;}
    .vpw::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,#F56E0F 30%,#ff4d00 70%,transparent);opacity:.65;z-index:2;transition:all .5s ease;}
    .vpw.vpw-active::before{height:4px;opacity:1;box-shadow:0 0 15px rgba(245,110,15,0.4);animation:vpw-tp 2s ease-in-out infinite;}
    @keyframes vpw-tp{0%{opacity:.6;transform:scaleX(.95)}50%{opacity:1;transform:scaleX(1)}100%{opacity:.6;transform:scaleX(.95)}}
    .vph{display:flex;align-items:center;gap:14px;padding:18px 22px 14px;border-bottom:1px solid rgba(255,255,255,.04);}
    .vpava{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#F56E0F,#c03a00);display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0;box-shadow:0 0 18px rgba(245,110,15,.3);position:relative;}
    .vpava.vpp::after{content:'';position:absolute;inset:-5px;border-radius:50%;border:2px solid rgba(245,110,15,.5);animation:vppa 1.5s ease-out infinite;}
    @keyframes vppa{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.5);opacity:0}}
    .vphi{flex:1;min-width:0;}
    .vpsl{font-size:.6rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F56E0F;margin-bottom:3px;opacity:.85;}
    .vptl{font-size:.9rem;font-weight:600;color:rgba(255,255,255,.88);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:'Outfit',sans-serif;}
    .vpvi{margin-top:5px;display:flex;align-items:center;gap:7px;flex-wrap:wrap;}
    .bg{background:rgba(245,110,15,.18);color:#ff8c3a;border:1px solid rgba(245,110,15,.35);}
    .bn{background:rgba(99,179,237,.14);color:#63b3ed;border:1px solid rgba(99,179,237,.3);}
    .bs{background:rgba(255,255,255,.07);color:rgba(255,255,255,.45);border:1px solid rgba(255,255,255,.12);}
    .bx{background:rgba(255,255,255,.05);color:rgba(255,255,255,.3);border:1px solid rgba(255,255,255,.08);}
    .vpqb{font-size:.58rem;font-weight:700;padding:2px 7px;border-radius:20px;letter-spacing:.5px;}
    .vpvd{font-size:.62rem;color:rgba(255,255,255,.3);font-style:italic;}
    .vpb{padding:16px 22px 20px;display:flex;flex-direction:column;gap:13px;}
    .vpwr{display:flex;align-items:center;gap:13px;}
    .vppb{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#F56E0F,#c83a00);border:none;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(245,110,15,.45);transition:transform .15s;position:relative;overflow:hidden;}
    .vppb::before{content:'';position:absolute;inset:0;border-radius:50%;background:rgba(255,255,255,.12);opacity:0;transition:opacity .2s;}
    .vppb:hover::before{opacity:1;}.vppb:active{transform:scale(.92);}
    .vppb svg{width:20px;height:20px;fill:#fff;position:relative;}
    .vppb.ipl svg{left:2px;}
    .vpwf{flex:1;display:flex;flex-direction:column;gap:6px;cursor:pointer;}
    canvas.vpvc{width:100%;height:56px;display:block;border-radius:6px;}
    .vpsk{height:3px;background:rgba(255,255,255,.07);border-radius:3px;cursor:pointer;position:relative;}
    .vpskf{height:100%;background:linear-gradient(90deg,#F56E0F,#ff6a00);border-radius:3px;width:0%;transition:width .22s linear;position:relative;}
    .vpskf::after{content:'';position:absolute;right:-5px;top:50%;transform:translateY(-50%);width:11px;height:11px;border-radius:50%;background:#F56E0F;box-shadow:0 0 8px rgba(245,110,15,.7);opacity:0;transition:opacity .2s;}
    .vpsk:hover .vpskf::after{opacity:1;}
    .vptm{display:flex;justify-content:space-between;align-items:center;}
    .vptc{font-size:.64rem;font-weight:600;letter-spacing:.5px;color:rgba(245,110,15,.85);font-family:monospace;min-width:34px;}
    .vptt{font-size:.64rem;font-weight:600;letter-spacing:.5px;color:rgba(255,255,255,.3);font-family:monospace;}
    .vpst{font-size:.64rem;color:rgba(255,255,255,.28);text-align:center;font-weight:500;}
    .vpst span{color:rgba(245,110,15,.65);}
    .vpld{display:none;align-items:center;gap:8px;font-size:.72rem;color:rgba(245,110,15,.7);justify-content:center;padding:4px 0;}
    .vpld.on{display:flex;}
    .vpspin{width:14px;height:14px;border:2px solid rgba(245,110,15,.2);border-top-color:#F56E0F;border-radius:50%;animation:vpsp .7s linear infinite;}
    @keyframes vpsp{to{transform:rotate(360deg)}}
    .vpctr{display:flex;align-items:center;justify-content:space-between;gap:8px;}
    .vpcg{display:flex;align-items:center;gap:6px;}
    .vpcb{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:10px;padding:6px 11px;color:rgba(255,255,255,.5);cursor:pointer;font-size:.71rem;font-weight:600;font-family:'Inter',sans-serif;display:flex;align-items:center;gap:4px;transition:all .18s;white-space:nowrap;}
    .vpcb:hover{background:rgba(245,110,15,.15);color:#F56E0F;border-color:rgba(245,110,15,.3);}
    .vpcb svg{width:13px;height:13px;fill:currentColor;flex-shrink:0;}
    .vpspd{background:rgba(245,110,15,.08);border:1px solid rgba(245,110,15,.22);border-radius:20px;padding:5px 11px;color:rgba(245,110,15,.75);cursor:pointer;font-size:.69rem;font-weight:700;font-family:'Outfit',sans-serif;letter-spacing:.5px;transition:all .18s;}
    .vpspd:hover{background:rgba(245,110,15,.2);color:#F56E0F;}
    .vperr{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:10px;padding:10px 14px;font-size:.71rem;color:rgba(239,68,68,.8);line-height:1.5;}
    .vperr code{background:rgba(0,0,0,.3);padding:2px 5px;border-radius:4px;font-size:.67rem;}
    .vp-vp{border-top:1px solid rgba(255,255,255,.04);padding:14px 22px 18px;}
    .vp-vt{font-size:.6rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.22);margin-bottom:10px;}
    .vp-vg{display:grid;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));gap:7px;}
    .vp-vc{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:10px 12px;cursor:pointer;transition:all .18s;display:flex;flex-direction:column;gap:4px;}
    .vp-vc:hover{background:rgba(245,110,15,.08);border-color:rgba(245,110,15,.25);}
    .vp-vc.sel{background:rgba(245,110,15,.12);border-color:rgba(245,110,15,.5);box-shadow:0 0 0 1px rgba(245,110,15,.2) inset;}
    .vp-vct{display:flex;align-items:flex-start;justify-content:space-between;gap:6px;}
    .vp-vcn{font-size:.8rem;font-weight:600;color:rgba(255,255,255,.82);font-family:'Outfit',sans-serif;}
    .vp-vcs{font-size:.61rem;font-weight:500;color:rgba(255,255,255,.3);margin-top:1px;line-height:1.3;}
    .vp-vcd{font-size:.6rem;color:rgba(255,255,255,.2);font-style:italic;line-height:1.4;margin-top:3px;}
    .vp-vck{font-size:.9rem;color:#F56E0F;display:none;}
    .vp-vc.sel .vp-vck{display:block;}
    .vp-hl{background:rgba(245,110,15,.08)!important;border-left:3px solid rgba(245,110,15,.6)!important;padding-left:14px!important;border-radius:0 8px 8px 0!important;transition:background .3s!important;margin:2px 0!important;}
    </style>`);

    /* ── SVG ──────────────────────────────────────────────────── */
    const IC = {
        play:  `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`,
        pause: `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`,
        stop:  `<svg viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>`,
        back:  `<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>`,
        fwd:   `<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zm2.5-6L16 6v12z"/></svg>`,
    };

    /* ── WAVEFORM ────────────────────────────────────────────── */
    function initBars() {
        const n = VP.N;
        VP.targets = Array.from({length:n},(_,i)=>{
            const t=i/n;
            return .18+.65*Math.abs(Math.sin(t*Math.PI*4.2+.6))*(0.5+0.5*Math.abs(Math.sin(t*Math.PI*1.8)));
        });
        VP.bars = VP.targets.map(v=>v*(.4+Math.random()*.6));
    }

    function drawWave(prog){
        const cv=document.getElementById('vp-cv');
        if(!cv) return;
        const dpr=window.devicePixelRatio||1,W=cv.clientWidth,H=cv.clientHeight;
        if(!W||!H) return;
        if(cv.width!==W*dpr||cv.height!==H*dpr){cv.width=W*dpr;cv.height=H*dpr;}
        const ctx=cv.getContext('2d');
        ctx.setTransform(dpr,0,0,dpr,0,0);
        ctx.clearRect(0,0,W,H);
        const n=VP.N,bw=Math.floor((W-(n-1)*2)/n),cx=H/2,filled=Math.floor(prog*n);
        for(let i=0;i<n;i++){
            VP.bars[i]+=(VP.targets[i]-VP.bars[i])*.14;
            const x=i*(bw+2),h=Math.max(3,VP.bars[i]*H*.84),y=cx-h/2,r=Math.min(bw/2,3);
            if(i===filled&&VP.playing){ctx.fillStyle='#ffe066';ctx.shadowColor='rgba(255,200,50,.9)';ctx.shadowBlur=9;}
            else if(i<filled){ctx.fillStyle=`rgba(245,110,15,${.5+.45*VP.bars[i]})`;ctx.shadowBlur=0;}
            else{ctx.fillStyle=`rgba(255,255,255,${.06+.1*VP.bars[i]})`;ctx.shadowBlur=0;}
            ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+bw-r,y);ctx.quadraticCurveTo(x+bw,y,x+bw,y+r);ctx.lineTo(x+bw,y+h-r);ctx.quadraticCurveTo(x+bw,y+h,x+bw-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();ctx.fill();
        }
        ctx.shadowBlur=0;
    }

    function startAnim(){
        cancelAnimationFrame(VP.frame);
        const tick=()=>{
            if(VP.playing&&Math.random()<.07) for(let i=0;i<VP.N;i++) VP.targets[i]=Math.random()*.85+.08;
            drawWave(VP.total>0?VP.idx/VP.total:0);
            if(VP.playing) VP.frame=requestAnimationFrame(tick);
        };
        tick();
    }
    function stopAnim(){cancelAnimationFrame(VP.frame);drawWave(VP.total>0?VP.idx/VP.total:0);}

    /* ── TEXTO ───────────────────────────────────────────────── */
    function clean(md){
        return md
            .replace(/```[\s\S]*?```/g,'')
            .replace(/`([^`]+)`/g,'$1')
            .replace(/^#{1,6}\s+/gm,'')
            .replace(/\*{1,3}([^*\n]+)\*{1,3}/g,'$1')
            .replace(/!\[.*?\]\(.*?\)/g,'')
            .replace(/\[([^\]]+)\]\([^)]+\)/g,'$1')
            .replace(/^[-*+]\s+/gm,'')
            .replace(/^\d+\.\s+/gm,'')
            .replace(/^>\s+/gm,'')
            .replace(/^---+$/gm,'')
            .replace(/\n{3,}/g,'\n\n').trim();
    }
    function chunks(t){return t.split(/\n\n+/).map(p=>p.replace(/\n/g,' ').trim()).filter(p=>p.length>8);}
    function estSec(c,r){return Math.round(c.join(' ').split(/\s+/).length/(r*2.5));}
    function fmt(s){return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;}

    /* ── REPRODUÇÃO (Polly via Puter) ────────────────────────── */
    async function runChunks(){
        while(VP.idx < VP.chunks.length && VP.playing){
            const text = VP.chunks[VP.idx];
            setLoad(true);
            hlPara(VP.idx);
            try {
                if(VP.voice.provider==='browser'){
                    await doBrowser(text);
                } else {
                    const voiceName = VP.voice.name.replace(/\s*\(.*\)$/, '');
                    const audio = await puter.ai.txt2speech(text, {
                        provider: 'aws-polly',
                        voice: voiceName,
                        engine: VP.voice.engine,
                        language: VP.voice.lang
                    });
                    VP.audio = audio;
                    setLoad(false);
                    audio.playbackRate = VP.rate;
                    audio.play();
                    startAnim(); updateUI();
                    await new Promise(res => {
                        const t = setInterval(()=>{ if(!VP.playing){audio.pause();clearInterval(t);res();} },200);
                        audio.onended = ()=>{ clearInterval(t); res(); };
                        audio.onerror = ()=>{ clearInterval(t); res(); };
                    });
                }
            } catch(e){
                console.warn('[VP] erro chunk',VP.idx,e);
                await doBrowser(text).catch(()=>{});
            }
            if(!VP.playing) break;
            VP.idx++;
            updateProg();
        }
        if(VP.idx>=VP.chunks.length) onEnd();
        setLoad(false);
    }

    function doBrowser(text){
        return new Promise(res=>{
            if(!window.speechSynthesis){res();return;}
            const u=new SpeechSynthesisUtterance(text);
            u.lang='pt-BR'; u.rate=VP.rate;
            const vs=window.speechSynthesis.getVoices();
            const pt=vs.find(v=>/pt.*BR/i.test(v.lang))||vs.find(v=>/pt/i.test(v.lang));
            if(pt) u.voice=pt;
            u.onend=res; u.onerror=res;
            window.speechSynthesis.speak(u);
        });
    }

    function stopAll(){
        VP.playing=false;
        if(VP.audio){VP.audio.pause();VP.audio=null;}
        if(window.speechSynthesis) window.speechSynthesis.cancel();
        VP.idx=0;
        clrHL(); updateUI(); updateProg(); stopAnim(); setLoad(false);
    }

    function seek(d){
        const was=VP.playing; VP.playing=false;
        if(VP.audio){VP.audio.pause();VP.audio=null;}
        if(window.speechSynthesis) window.speechSynthesis.cancel();
        VP.idx=Math.max(0,Math.min(VP.chunks.length-1,VP.idx+d));
        updateProg();
        if(was){VP.playing=true;runChunks();}
    }

    function onEnd(){VP.playing=false;clrHL();updateUI();stopAnim();}

    /* ── HIGHLIGHT ───────────────────────────────────────────── */
    let paras=[];
    function buildParas(){const v=document.getElementById('markdown-viewer');if(!v)return;paras=Array.from(v.querySelectorAll('p,li,h2,h3,h4,blockquote'));}
    function hlPara(i){clrHL();const el=paras[Math.min(i,paras.length-1)];if(el){el.classList.add('vp-hl');el.scrollIntoView({behavior:'smooth',block:'center'});}}
    function clrHL(){document.querySelectorAll('.vp-hl').forEach(e=>e.classList.remove('vp-hl'));}

    /* ── UI ──────────────────────────────────────────────────── */
    function updateUI(){
        const b=document.getElementById('vp-pb'); const a=document.getElementById('vp-av'); const w=document.getElementById('vpw');
        if(!b) return;
        if(VP.playing){
            b.innerHTML=IC.pause; b.classList.remove('ipl');
            if(a)a.classList.add('vpp');
            if(w)w.classList.add('vpw-active');
        } else {
            b.innerHTML=IC.play; b.classList.add('ipl');
            if(a)a.classList.remove('vpp');
            if(w)w.classList.remove('vpw-active');
        }
    }

    function updateProg(){
        const f=document.getElementById('vp-sf'),tc=document.getElementById('vp-tc'),st=document.getElementById('vp-st');
        const n=VP.chunks.length,i=VP.idx,pct=n>0?(i/n)*100:0;
        if(f) f.style.width=pct+'%';
        const tot=estSec(VP.chunks,VP.rate),cur=Math.round((i/Math.max(n,1))*tot);
        if(tc) tc.textContent=fmt(cur);
        if(st&&n>0) st.innerHTML=`Parágrafo <span>${Math.min(i+1,n)}</span> de <span>${n}</span> — <span>${Math.round(pct)}%</span>`;
    }

    function setLoad(on){const e=document.getElementById('vp-ld');if(e)e.classList.toggle('on',on);if(on)stopAnim();}

    function selectVoice(id){
        VP.voice=VOICES.find(v=>v.id===id)||VOICES[0];
        localStorage.setItem('vp-vid',id);
        document.querySelectorAll('.vp-vc').forEach(c=>c.classList.toggle('sel',c.dataset.vid===id));
        const qb=document.getElementById('vp-qb'),vd=document.getElementById('vp-vd');
        if(qb){qb.className=`vpqb ${VP.voice.bclass}`;qb.textContent=VP.voice.badge;}
        if(vd) vd.textContent=`${VP.voice.name} · ${VP.voice.desc}`;
        if(VP.playing){
            VP.playing=false;
            if(VP.audio){VP.audio.pause();VP.audio=null;}
            if(window.speechSynthesis) window.speechSynthesis.cancel();
            VP.idx=Math.max(0,VP.idx-1);
            VP.playing=true; runChunks();
        }
    }

    /* ── BUILD HTML ──────────────────────────────────────────── */
    function voiceGrid(){
        return VOICES.map(v=>`
        <div class="vp-vc${v.id===VP.voice.id?' sel':''}" data-vid="${v.id}" onclick="window.__vps('${v.id}')">
            <div class="vp-vct">
                <div>
                    <div class="vp-vcn">${v.gender} ${v.name}</div>
                    <div class="vp-vcs">${v.style}</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
                    <span class="vpqb ${v.bclass}">${v.badge}</span>
                    <span class="vp-vck">✓</span>
                </div>
            </div>
            <div class="vp-vcd">${v.desc}</div>
        </div>`).join('');
    }

    function buildHTML(title){
        const v=VP.voice, tot=estSec(VP.chunks,VP.rate);
        const warn = typeof puter==='undefined' ? `
        <div class="vperr">
            ⚠️ <strong>Puter.js não carregado!</strong> Adicione no <code>&lt;head&gt;</code> do index.html:<br>
            <code>&lt;script src="https://js.puter.com/v2/"&gt;&lt;/script&gt;</code><br>
            Sem isso só a voz do sistema funcionará.
        </div>` : '';
        return `
        <div class="vpw" id="vpw">
          <div class="vph">
            <div class="vpava" id="vp-av">☕</div>
            <div class="vphi">
              <div class="vpsl">Áudio do Capítulo</div>
              <div class="vptl">${title}</div>
              <div class="vpvi">
                <span class="vpqb ${v.bclass}" id="vp-qb">${v.badge}</span>
                <span class="vpvd" id="vp-vd">${v.name} · ${v.desc}</span>
              </div>
            </div>
          </div>
          <div class="vpb">
            ${warn}
            <div class="vpwr">
              <button class="vppb ipl" id="vp-pb">${IC.play}</button>
              <div class="vpwf" id="vp-wf">
                <canvas class="vpvc" id="vp-cv" height="56"></canvas>
                <div class="vpsk"><div class="vpskf" id="vp-sf"></div></div>
              </div>
            </div>
            <div class="vptm">
              <span class="vptc" id="vp-tc">0:00</span>
              <span class="vpst" id="vp-st">Pressione ▶ para ouvir</span>
              <span class="vptt" id="vp-tt">${fmt(tot)}</span>
            </div>
            <div class="vpld" id="vp-ld"><div class="vpspin"></div>Gerando áudio de alta qualidade…</div>
            <div class="vpctr">
              <div class="vpcg">
                <button class="vpcb" onclick="window.__vpbk()">${IC.back} −10s</button>
                <button class="vpcb" onclick="window.__vpfw()">+10s ${IC.fwd}</button>
                <button class="vpcb" onclick="window.__vpst()">${IC.stop} Parar</button>
              </div>
              <div class="vpcg">
                <button class="vpspd" id="vp-spd" onclick="window.__vpsp()">${VP.rate}×</button>
              </div>
            </div>
          </div>
          <div class="vp-vp">
            <div class="vp-vt">Escolha a Voz (${VOICES.length} disponíveis)</div>
            <div class="vp-vg">${voiceGrid()}</div>
          </div>
        </div>`;
    }

    /* ── INJETAR ─────────────────────────────────────────────── */
    function inject(){
        stopAll();
        const viewer=document.getElementById('markdown-viewer');
        if(!viewer) return;
        document.getElementById('vpw')?.remove();

        const ch=(typeof flatChapters!=='undefined'&&typeof currentChapterIndex!=='undefined')
            ?flatChapters[currentChapterIndex]:null;
        if(!ch) return;

        const saved=localStorage.getItem('vp-vid');
        if(saved) VP.voice=VOICES.find(v=>v.id===saved)||VOICES[0];

        VP.chunks=chunks(clean(ch.content));
        VP.total=VP.chunks.length; VP.idx=0;
        VP.title=ch.title||'Capítulo';

        viewer.insertAdjacentHTML('afterbegin',buildHTML(VP.title));

        document.getElementById('vp-pb').addEventListener('click',()=>{
            if(!VP.playing){
                if(typeof puter==='undefined'&&VP.voice.provider!=='browser'){
                    alert('Puter.js não carregado! Adicione:\n<script src="https://js.puter.com/v2/"></script>\nno <head> do index.html antes deste script.');
                    return;
                }
                buildParas(); initBars();
                VP.playing=true; updateUI(); runChunks();
            } else {
                VP.playing=false;
                if(VP.audio) VP.audio.pause();
                if(window.speechSynthesis) window.speechSynthesis.pause();
                updateUI(); stopAnim();
            }
        });

        document.getElementById('vp-wf').addEventListener('click',e=>{
            const cv=document.getElementById('vp-cv');
            if(!cv||!VP.chunks.length) return;
            const r=cv.getBoundingClientRect(),ratio=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
            const was=VP.playing; VP.playing=false;
            if(VP.audio){VP.audio.pause();VP.audio=null;}
            if(window.speechSynthesis) window.speechSynthesis.cancel();
            VP.idx=Math.floor(ratio*VP.chunks.length);
            updateProg();
            if(was){VP.playing=true;runChunks();}
        });

        initBars(); setTimeout(()=>drawWave(0),80);
        updateProg();
    }

    /* ── GLOBALS ─────────────────────────────────────────────── */
    window.__vps  = selectVoice;
    window.__vpst = stopAll;
    window.__vpbk = ()=>seek(-3);
    window.__vpfw = ()=>seek(3);
    window.__vpsp = ()=>{
        const S=[0.75,1.0,1.25,1.5,1.75,2.0];
        const i=S.indexOf(VP.rate);
        VP.rate=S[(i+1)%S.length];
        localStorage.setItem('vp-rate',VP.rate);
        const b=document.getElementById('vp-spd');
        if(b) b.textContent=VP.rate+'×';
        if(VP.audio) VP.audio.playbackRate=VP.rate;
    };

    /* ── OBSERVER ────────────────────────────────────────────── */
    const observer = new MutationObserver((mutations) => {
        const hasContentChange = mutations.some(m => {
            if (m.addedNodes.length > 0) {
                return Array.from(m.addedNodes).some(node => 
                    node.nodeType === 1 && !node.classList.contains('vpw')
                );
            }
            return false;
        });
        if (hasContentChange) setTimeout(inject, 80);
    });

    function init(){
        const v=document.getElementById('markdown-viewer');
        if(v) observer.observe(v,{childList:true,subtree:false});
        document.addEventListener('keydown',e=>{
            if(e.target.tagName==='TEXTAREA'||e.target.tagName==='INPUT') return;
            if(!document.getElementById('vpw')) return;
            if(e.code==='Space'){e.preventDefault();document.getElementById('vp-pb')?.click();}
            if(e.altKey&&e.code==='ArrowLeft') seek(-3);
            if(e.altKey&&e.code==='ArrowRight') seek(3);
        });
    }

    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
    else init();

    window.__VP=VP;
})();
