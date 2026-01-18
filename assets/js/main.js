(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();

/* Scroll reveal animations */
(function(){
  const els = document.querySelectorAll('[data-animate]');
  if(!('IntersectionObserver' in window)){
    els.forEach(e=>e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){
        ent.target.classList.add('in');
        io.unobserve(ent.target);
      }
    });
  }, {threshold: 0.12});
  els.forEach(e=>io.observe(e));
})();