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