/* ==========================================================================
   A3CEND UX Script — Scroll Reveal, Counters, FAQ, Nav, Parallax, Counters
   ========================================================================== */

(function () {
  'use strict';

  /* ---- Scroll-reveal (IntersectionObserver + Instant Viewport Check) ---- */
  function initReveal() {
    function checkVisibility(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight + 400 && rect.bottom > -200) {
        el.classList.add('is-visible');
        return true;
      }
      return false;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '200px 0px 200px 0px' });

    function scan() {
      const elements = document.querySelectorAll('.a3-reveal:not([data-a3-observed]), .a3-stagger:not([data-a3-observed])');
      elements.forEach(el => {
        el.setAttribute('data-a3-observed', '1');
        if (!checkVisibility(el)) {
          obs.observe(el);
          setTimeout(() => { el.classList.add('is-visible'); }, 150);
        }
      });
    }

    // Run scan immediately
    scan();

    // Attach listeners for hydration, load, scroll, resize, and mutations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', scan);
    }
    window.addEventListener('load', scan);
    window.addEventListener('scroll', scan, { passive: true });
    window.addEventListener('resize', scan, { passive: true });
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });

    // Safety fallback: reveal ALL elements on the page after 200ms
    setTimeout(() => {
      document.querySelectorAll('.a3-reveal, .a3-stagger').forEach(el => el.classList.add('is-visible'));
    }, 200);
  }

  /* ---- Animated number counter ---- */
  function initCounters() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count-to'), 10);
        const suffix = el.getAttribute('data-count-suffix') || '';
        if (isNaN(target)) return;

        obs.unobserve(el);
        const duration = 1600;
        const start = performance.now();
        const initialText = el.textContent;

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          const value = Math.round(eased * target);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      });
    }, { threshold: 0.3 });

    function scan() {
      document.querySelectorAll('[data-count-to]:not([data-a3-observed])').forEach(el => {
        el.setAttribute('data-a3-observed', '1');
        obs.observe(el);
      });
    }

    scan();
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  }

  /* ---- FAQ Accordion ---- */
  function initFaq() {
    document.querySelectorAll('.a3-faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.a3-faq-item');
        if (!item) return;
        const wrap = item.querySelector('.a3-faq-a-wrap');
        const isOpen = item.classList.contains('is-open');

        // Close all
        document.querySelectorAll('.a3-faq-item.is-open').forEach(i => {
          i.classList.remove('is-open');
          const w = i.querySelector('.a3-faq-a-wrap');
          if (w) w.style.maxHeight = '0';
        });

        if (!isOpen) {
          item.classList.add('is-open');
          if (wrap) wrap.style.maxHeight = wrap.scrollHeight + 'px';
        }
      });
    });
  }

  /* ---- Sticky nav scroll class ---- */
  function initNav() {
    const header = document.querySelector('.a3-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 12) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile toggle
    const toggle = header.querySelector('.a3-nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // Close mobile on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        header.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Hero mouse parallax tilt ---- */
  function initParallax() {
    const heroVisual = document.querySelector('.a3-hero-parallax');
    if (!heroVisual) return;

    document.addEventListener('mousemove', (e) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 14;
      const my = (e.clientY / window.innerHeight - 0.5) * 8;
      heroVisual.style.transform = `perspective(900px) rotateY(${mx * 0.5}deg) rotateX(${-my * 0.5}deg) translateZ(0)`;
    }, { passive: true });
  }

  /* ---- Progress bars animate on reveal ---- */
  function initProgressBars() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        const fill = entry.target.querySelector('.a3-progress-fill');
        if (fill) {
          const w = fill.getAttribute('data-width') || '0%';
          setTimeout(() => { fill.style.width = w; }, 80);
        }
      });
    }, { threshold: 0.3 });

    function scan() {
      document.querySelectorAll('.a3-progress-track:not([data-a3-observed])').forEach(el => {
        el.setAttribute('data-a3-observed', '1');
        obs.observe(el);
      });
    }

    scan();
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  }

  /* ---- Floating badge micro-animation ---- */
  function initFloatingBadges() {
    document.querySelectorAll('.a3-float-badge').forEach((el, i) => {
      const delay = i * 1800;
      const dur = 5000 + i * 900;
      el.style.animation = `a3float-sm ${dur}ms ease-in-out ${delay}ms infinite`;
    });
  }

  /* ---- Section number watermarks ---- */
  function initSectionNums() {
    document.querySelectorAll('[data-section-num]').forEach(el => {
      const num = el.getAttribute('data-section-num');
      const span = document.createElement('span');
      span.className = 'a3-section-num';
      span.textContent = num;
      span.style.top = '0';
      span.style.right = '24px';
      el.style.position = 'relative';
      el.appendChild(span);
    });
  }

  /* ---- Init all ---- */
  function init() {
    initReveal();
    initCounters();
    initFaq();
    initNav();
    initParallax();
    initProgressBars();
    initFloatingBadges();
    initSectionNums();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Support the dc.html custom renderer (runs after DOM is built)
    setTimeout(init, 0);
  }
})();
