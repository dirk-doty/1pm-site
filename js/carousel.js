(function () {
  function initCarousel(root, slides, intervalMs) {
    var slideLayer = root.querySelector('[data-slides]');
    var dotsLayer = root.querySelector('[data-dots]');
    var kickEl = root.querySelector('[data-kick]');
    var titleEl = root.querySelector('[data-title]');
    var prevBtn = root.querySelector('[data-prev]');
    var nextBtn = root.querySelector('[data-next]');

    var slideEls = slides.map(function (s) {
      var el = document.createElement('div');
      el.className = 'slide';
      el.style.backgroundImage = 'url(' + s.img + ')';
      slideLayer.appendChild(el);
      return el;
    });

    var dotEls = slides.map(function (s, i) {
      var btn = document.createElement('button');
      btn.className = 'dot';
      btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      btn.addEventListener('click', function () { goTo(i); });
      dotsLayer.appendChild(btn);
      return btn;
    });

    var active = 0;
    var timer = null;

    function render() {
      slideEls.forEach(function (el, i) {
        el.style.opacity = i === active ? '1' : '0';
        el.style.zIndex = i === active ? '2' : '1';
      });
      dotEls.forEach(function (el, i) {
        el.className = i === active ? 'dot on' : 'dot';
      });
      var s = slides[active];
      if (kickEl) kickEl.textContent = (s.l1 ? s.l1 + ' ' + s.l2 : s.kick || '');
      if (titleEl) titleEl.textContent = s.title || '';
    }

    function goTo(i) {
      active = ((i % slides.length) + slides.length) % slides.length;
      render();
      resetTimer();
    }

    function step(d) { goTo(active + d); }

    function resetTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () { step(1); }, intervalMs);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { step(1); });

    render();
    resetTimer();
  }

  window.initCarousel = initCarousel;
})();
