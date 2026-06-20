/* ===== AI insights configuration =====
   In the Claude.ai artifact runtime, calls to the Anthropic API are handled
   automatically with no key. When self-hosting (e.g. GitHub Pages), the browser
   cannot call the Anthropic API directly. Deploy a small proxy that injects your
   API key and set AI_CONFIG.endpoint to its URL. See README -> 'AI insights'. */
const AI_CONFIG = {
  endpoint: "https://api.anthropic.com/v1/messages",
  model: "claude-sonnet-4-6"
};

/* ============ APP ============ */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];

/* tabs */
$$('.tab').forEach(t=>t.addEventListener('click',()=>{
  $$('.tab').forEach(x=>x.classList.remove('active'));
  $$('.view').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  $('#view-'+t.dataset.view).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}));
function goTo(view){$$('.tab').forEach(x=>x.classList.toggle('active',x.dataset.view===view));$$('.view').forEach(x=>x.classList.remove('active'));$('#view-'+view).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}

/* overview unit map */
$('#unitMap').innerHTML=UNITS.map(u=>`
  <div class="unit-line" data-u="${u.n-1}">
    <span class="un">${String(u.n).padStart(2,'0')}</span>
    <span class="ut">${u.t}</span>
    <span class="uh">${u.h}</span>
  </div>`).join('');
$$('#unitMap .unit-line').forEach(el=>el.addEventListener('click',()=>{goTo('plans');selectPlan(+el.dataset.u);}));

/* session plans */
$('#spList').innerHTML=UNITS.map((u,i)=>`
  <button class="sp-item${i===0?' active':''}" data-i="${i}">
    <span class="spn">${String(u.n).padStart(2,'0')}</span><span>${u.t}</span>
  </button>`).join('');
function selectPlan(i){
  $$('.sp-item').forEach(b=>b.classList.toggle('active',+b.dataset.i===i));
  const u=UNITS[i],p=PLANS[i];
  $('#planDetail').innerHTML=`
   <div class="plan">
    <div class="plan-head">
      <div class="pk">
        <span class="chip time">${p.time}</span>
        ${p.chips.map(c=>`<span class="chip">${c}</span>`).join('')}
      </div>
      <h3>${String(u.n).padStart(2,'0')} · ${u.t}</h3>
      <div class="aim">${p.aim}</div>
    </div>
    <div class="plan-body">
      <div class="blk"><div class="blk-label">Learning objectives</div>
        <ul class="obj">${p.obj.map(o=>`<li>${o}</li>`).join('')}</ul></div>
      <div class="blk"><div class="blk-label">Session flow</div>
        <div class="flow">${p.flow.map(f=>`
          <div class="flow-step"><div class="ft">${f[0]}</div>
            <div><span class="fname">${f[1]}</span><span class="fdesc">${f[2]}</span></div></div>`).join('')}</div></div>
      <div class="blk"><div class="blk-label">Coaching prompts</div>
        <ul class="prompts">${p.prompts.map(q=>`<li>${q}</li>`).join('')}</ul></div>
      <div class="blk"><div class="blk-label">Watch for</div>
        <div class="watch"><b>Sensitivity —</b> ${p.watch}</div></div>
      <div class="blk"><div class="mission"><div class="ml">This week's micro-mission</div><div class="mt">${p.mission}</div></div></div>
    </div>
   </div>`;
}
$$('.sp-item').forEach(b=>b.addEventListener('click',()=>selectPlan(+b.dataset.i)));
selectPlan(0);

/* scenarios */
const THEMES=['All',...[...new Set(SCENARIOS.map(s=>s.theme))]];
let activeTheme='All';
$('#filters').innerHTML=THEMES.map(t=>`<button class="fchip${t==='All'?' active':''}" data-t="${t}">${t}</button>`).join('');
function renderScenarios(){
  const list=activeTheme==='All'?SCENARIOS:SCENARIOS.filter(s=>s.theme===activeTheme);
  $('#scount').textContent=`${list.length} scenario${list.length!==1?'s':''}${activeTheme!=='All'?' in '+activeTheme:''} — you play the other person; the student practises.`;
  $('#scenGrid').innerHTML=list.map(s=>`
   <div class="scen">
    <div class="stag">${s.theme}</div>
    <h4>${s.title}</h4>
    <div class="setup">${s.setup}</div>
    <div class="roles"><b>Setup —</b> ${s.roles}</div>
    <div class="debrief-t">Debrief</div>
    <ul class="debrief">${s.debrief.map(d=>`<li>${d}</li>`).join('')}</ul>
   </div>`).join('');
}
$$('#filters .fchip').forEach(c=>c.addEventListener('click',()=>{
  activeTheme=c.dataset.t;$$('#filters .fchip').forEach(x=>x.classList.toggle('active',x===c));renderScenarios();
}));
renderScenarios();

/* self-assessment */
const answers={}; let qIndex=0;
const flat=[];
DIMS.forEach((d,di)=>d.items.forEach((q,qi)=>flat.push({di,qi,d,q})));
const TOTAL=flat.length;
const SCALE=[["1","Not me"],["2","Rarely"],["3","Sometimes"],["4","Often"],["5","Very me"]];
$('#saForm').innerHTML=DIMS.map((d,di)=>`
  <div class="sa-dim">
    <div class="sa-dim-h"><span class="dn">${String(di+1).padStart(2,'0')}</span><h4>${d.name}</h4></div>
    ${d.items.map((q,qi)=>`
      <div class="sa-q" data-di="${di}" data-qi="${qi}">
        <div class="qt">${q}</div>
        <div class="scale">${SCALE.map(s=>`<button data-v="${s[0]}">${s[0]}<span class="lbl">${s[1]}</span></button>`).join('')}</div>
      </div>`).join('')}
  </div>`).join('')
+`<div class="sa-actions">
    <div class="progress"><div class="ptrack"><div class="pfill" id="pfill"></div></div>
      <div class="ptext" id="ptext">0 of ${TOTAL} answered</div></div>
    <button class="btn" id="seeBtn" disabled>See my snapshot</button>
  </div>`;

$$('#saForm .sa-q').forEach(qEl=>{
  const di=+qEl.dataset.di,qi=+qEl.dataset.qi;
  $$('.scale button',qEl).forEach(btn=>btn.addEventListener('click',()=>{
    $$('.scale button',qEl).forEach(b=>b.classList.remove('sel'));
    btn.classList.add('sel');
    answers[di+'-'+qi]=+btn.dataset.v;
    const n=Object.keys(answers).length;
    $('#pfill').style.width=(n/TOTAL*100)+'%';
    $('#ptext').textContent=`${n} of ${TOTAL} answered`;
    $('#seeBtn').disabled=n<TOTAL;
  }));
});
$('#seeBtn').addEventListener('click',showResults);

let radarChart=null, dimScores=[];
function showResults(){
  dimScores=DIMS.map((d,di)=>{
    let sum=0;d.items.forEach((q,qi)=>sum+=answers[di+'-'+qi]||0);
    return +(sum/d.items.length).toFixed(2);
  });
  // bars
  const color=v=>v>=4?'var(--teal)':v>=3?'var(--gold)':'var(--coral)';
  $('#bars').innerHTML=DIMS.map((d,i)=>`
    <div class="bar-row"><div class="brt"><b>${d.short}</b><span class="sc">${dimScores[i].toFixed(1)}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${dimScores[i]/5*100}%;background:${color(dimScores[i])}"></div></div></div>`).join('');
  // radar
  const ctx=$('#radar');
  if(radarChart)radarChart.destroy();
  radarChart=new Chart(ctx,{type:'radar',data:{labels:DIMS.map(d=>d.short),
    datasets:[{label:'You',data:dimScores,fill:true,
      backgroundColor:'rgba(226,101,74,.18)',borderColor:'#E2654A',borderWidth:2,
      pointBackgroundColor:'#2E7D72',pointBorderColor:'#fff',pointRadius:4,pointHoverRadius:6}]},
    options:{responsive:true,maintainAspectRatio:true,
      scales:{r:{min:0,max:5,ticks:{stepSize:1,backdropColor:'transparent',color:'#8B9893',font:{size:10}},
        grid:{color:'#E8DDD0'},angleLines:{color:'#E8DDD0'},
        pointLabels:{color:'#23322E',font:{size:11,weight:'600',family:'Inter'}}}},
      plugins:{legend:{display:false},tooltip:{enabled:true}}}});
  $('#results').classList.add('show');
  $('#aiOut').innerHTML='';
  $('#aiBtn').style.display='';
  $('#results').scrollIntoView({behavior:'smooth'});
}

$('#retakeBtn').addEventListener('click',()=>{
  for(const k in answers)delete answers[k];
  $$('#saForm .scale button').forEach(b=>b.classList.remove('sel'));
  $('#pfill').style.width='0';$('#ptext').textContent=`0 of ${TOTAL} answered`;
  $('#seeBtn').disabled=true;$('#results').classList.remove('show');
  $('#view-assess').scrollIntoView({behavior:'smooth'});
});

/* AI insights */
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function mdToHtml(t){
  return esc(t).split(/\n{2,}/).map(block=>{
    block=block.trim();
    if(!block)return'';
    if(/^##\s+/.test(block))return'<h4>'+block.replace(/^##\s+/,'').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')+'</h4>';
    return'<p>'+block.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')+'</p>';
  }).join('');
}
$('#aiBtn').addEventListener('click',async()=>{
  $('#aiBtn').style.display='none';
  $('#aiOut').innerHTML=`<div class="ai-loading">Reading your profile<span class="ai-dots"><i></i><i></i><i></i></span></div>`;
  const profile=DIMS.map((d,i)=>`${d.name}: ${dimScores[i].toFixed(1)}/5`).join('\n');
  const prompt=`You are a warm, encouraging teen coach in India speaking directly to a teenage student about their social-skills self-assessment. Here are their averages out of 5:\n\n${profile}\n\nWrite a short, friendly, specific reflection addressed to the student as "you". Use this exact structure with these headings:\n\n## Where you're strong\nName their two highest areas and what each one looks like in real, everyday life. Be specific and genuinely appreciative.\n\n## Worth growing\nName their two lowest areas. Frame them as skills they can build, never as flaws. Give one concrete, doable idea for each.\n\n## Try this one thing\nOne tiny experiment to run this week, tied to their lowest area.\n\nRules: under 230 words, second person, encouraging but honest, no bullet symbols, plain paragraphs under each heading. Don't restate the numbers back as a list.`;
  try{
    const res=await fetch(AI_CONFIG.endpoint,{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({model:AI_CONFIG.model,max_tokens:1000,
        messages:[{role:"user",content:prompt}]})});
    if(!res.ok)throw new Error("status "+res.status);
    const data=await res.json();
    const text=(data.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n").trim();
    if(!text)throw new Error("empty");
    $('#aiOut').innerHTML=mdToHtml(text);
  }catch(e){
    $('#aiOut').innerHTML=`<div class="ai-err">Couldn't generate insights just now — the connection to the AI didn't come through. Check the network and try again.</div>`;
    $('#aiBtn').style.display='';$('#aiBtn').textContent='Try again';
  }
});
