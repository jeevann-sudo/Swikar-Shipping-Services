const P=[['index.html','Home'],['about.html','About'],['services.html','Services'],['contact.html','Contact']];
const cur=location.pathname.split('/').pop()||'index.html';
document.getElementById('nav').innerHTML=`<div class="wrap"><a class="logo" href="index.html">SWIKAR<b>/</b>SHIPPING</a><ul>${P.map(([h,t])=>`<li><a href="${h}" class="${h==cur?'on':''}">${t}</a></li>`).join('')}<li><a class="btn" href="contact.html#quote">Get a quote</a></li></ul></div>`;
document.getElementById('foot').innerHTML=`<div class="wrap"><span>&copy; ${new Date().getFullYear()} Swikar Shipping Services</span><span>Mundra, Kandla, Ahmedabad (ICD/Airport), Nhava Sheva</span></div>`;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const n=+e.target.dataset.n,s=e.target.dataset.s||'';let t0;const f=t=>{t0??=t;const p=Math.min((t-t0)/1500,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}));
document.querySelectorAll('[data-n]').forEach(el=>io.observe(el));
const tf=document.getElementById('tf');
tf&&tf.addEventListener('submit',e=>{e.preventDefault();
  const v=tf.ref.value.trim();if(!v)return;
  // TODO: replace this demo timeline with a real tracking API call
  const S=['Booked','Picked up','At origin hub','In transit','Customs clearance','Delivered'];
  const o=document.getElementById('tr');o.style.display='block';
  o.innerHTML=`<p>Reference <b></b> (demo data)</p><ol class="steps">${S.map(s=>`<li>${s}</li>`).join('')}</ol>`;
  o.querySelector('b').textContent=v;
  o.querySelectorAll('li').forEach((li,i)=>setTimeout(()=>li.classList.add('done'),400*(i+1)));
});
const qf=document.getElementById('qf');
qf&&qf.addEventListener('submit',e=>{e.preventDefault();
  const d=Object.fromEntries(new FormData(qf));
  const EMAIL='info@example.com'; // TODO: put the company's real email here
  location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Quote request: '+d.service)}&body=${encodeURIComponent(Object.entries(d).map(([k,v])=>k+': '+v).join('\n'))}`;
  qf.querySelector('.ok').hidden=false;
});
