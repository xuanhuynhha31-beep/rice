document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelectorAll('.menu-toggle');
  const navMenus = document.querySelectorAll('.nav-menu');
  toggle.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('nav-open');
      // toggle aria-expanded
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });
  // close on link click (mobile)
  navMenus.forEach(menu => {
    menu.addEventListener('click', (e) => {
      if(e.target.tagName === 'A'){
        document.documentElement.classList.remove('nav-open');
        toggle.forEach(b=>b.setAttribute('aria-expanded','false'));
      }
    });
  });
});
