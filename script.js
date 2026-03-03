// ── Loader ──
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2300);
  });

  // ── Cursor ──
  const cur = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
  (function tick(){ cur.style.left=mx+'px'; cur.style.top=my+'px'; rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(tick); })();
  document.querySelectorAll('a,button,.proj-card,.service-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.width='20px'; cur.style.height='20px'; ring.style.width='50px'; ring.style.height='50px'; });
    el.addEventListener('mouseleave', () => { cur.style.width='12px'; cur.style.height='12px'; ring.style.width='36px'; ring.style.height='36px'; });
  });

  // ── Page Switching ──
  let currentPage = 1;
  const pages = { 1: document.getElementById('page1'), 2: document.getElementById('page2'), 3: document.getElementById('page3') };
  const sideBtns = document.querySelectorAll('.side-btn');
  const indicator = document.getElementById('sideIndicator');

  function goTo(n) {
    if (n === currentPage) return;
    const prev = pages[currentPage];
    const next = pages[n];
    prev.classList.add('exit-left');
    setTimeout(() => { prev.classList.remove('active','exit-left'); }, 500);
    next.classList.add('active');
    // scroll new page to top
    next.scrollTop = 0;
    currentPage = n;
    sideBtns.forEach(b => b.classList.toggle('active', +b.dataset.page === n));
    indicator.textContent = '0'+n+' / 03';
    // trigger reveals on new page
    setTimeout(() => triggerReveals(next), 100);
    // trigger skill bars if page 2
    if (n === 2) setTimeout(() => triggerSkillBars(next), 300);
  }

  // Wire all data-goto buttons
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goTo(+btn.dataset.goto));
  });
  sideBtns.forEach(btn => btn.addEventListener('click', () => goTo(+btn.dataset.page)));

  // ── Scroll Reveal ──
  function triggerReveals(scope) {
    const els = scope.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px', root: scope });
    els.forEach(el => obs.observe(el));
  }
  // Init page 1 on load
  setTimeout(() => triggerReveals(pages[1]), 2400);

  // ── Skill Bars ──
  function triggerSkillBars(scope) {
    scope.querySelectorAll('.skill-group').forEach((grp, gi) => {
      grp.querySelectorAll('.skill-fill').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, gi * 150 + i * 80);
      });
    });
  }

  // ── Contact Form ──
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.cssText = 'background:rgba(78,205,196,.15);border-color:#4ecdc4;color:#4ecdc4;';
      setTimeout(() => { btn.textContent='Send Message →'; btn.disabled=false; btn.style.cssText=''; e.target.reset(); }, 3000);
    }, 1200);
  });
