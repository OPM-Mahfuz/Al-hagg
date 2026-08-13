const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){
  toggle.setAttribute('aria-expanded','false');
  toggle.addEventListener('click',()=>{
    const open=links.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'✕':'☰';
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.textContent='☰';
  }));
  document.addEventListener('click',(e)=>{
    if(links.classList.contains('open')&&!links.contains(e.target)&&!toggle.contains(e.target)){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.textContent='☰';
    }
  });
}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.portfolio-card').forEach(card=>card.style.display=f==='all'||card.dataset.category===f?'block':'none')}));
const form=document.querySelector('#contactForm');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const s=document.querySelector('#formStatus');s.textContent='Thank you. Your enquiry has been captured for review. Connect this form to your email/API before production deployment.';form.reset()});
