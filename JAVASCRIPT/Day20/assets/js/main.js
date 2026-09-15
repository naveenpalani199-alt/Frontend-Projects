/**
 * THE IT INDUSTRY IN 2030 - PUBLICATION JAVASCRIPT
 * Author: Naveen P | Published: September 2026
 * Interactive Features: Reading Progress, Scrollspy TOC, Role Filter,
 * Roadmap Tracker, Theme Switching, Text Size Adjuster, and Back-to-Top.
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initThemeToggle();
  initFontSizeAdjuster();
  initMobileNavigation();
  initSmoothScroll();
  initScrollspy();
  initJobRolesFilter();
  initRoadmapTracker();
  initBackToTop();
  initShareFeatures();
});

/* --------------------------------------------------------------------------
   1. Reading Progress Bar
-------------------------------------------------------------------------- */
function initReadingProgressBar() {
  const progressBar = document.getElementById('reading-progress-bar');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

/* --------------------------------------------------------------------------
   2. Theme Switcher (Dark / Light) with LocalStorage
-------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('it2030_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
  }

  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('it2030_theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
    showToast(isLight ? 'Switched to Light Reading Mode' : 'Switched to Cyber Dark Mode');
  });

  function updateThemeIcon(isLight) {
    themeToggleBtn.innerHTML = isLight
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    themeToggleBtn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    themeToggleBtn.setAttribute('aria-label', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
  }
}

/* --------------------------------------------------------------------------
   3. Font Size Adjuster (Accessibility)
-------------------------------------------------------------------------- */
function initFontSizeAdjuster() {
  const fontBtn = document.getElementById('font-size-btn');
  if (!fontBtn) return;

  fontBtn.addEventListener('click', () => {
    const isLarge = document.body.classList.toggle('font-large');
    showToast(isLarge ? 'Font Size: Large Reader' : 'Font Size: Default');
  });
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation Toggle
-------------------------------------------------------------------------- */
function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking outside or on a link
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });

  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   5. Smooth Scroll for Anchor Links
-------------------------------------------------------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');
  const headerHeight = header ? header.offsetHeight : 70;

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 20);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Scrollspy for Navigation and Table of Contents
-------------------------------------------------------------------------- */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id], article[id]');
  const tocLinks = document.querySelectorAll('.toc-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-90px 0px -70% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        activateLink(id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  function activateLink(id) {
    tocLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
        // Ensure active link is visible in sidebar scroll
        const sidebar = document.querySelector('.toc-sidebar');
        if (sidebar) {
          const linkTop = link.offsetTop;
          const sidebarTop = sidebar.scrollTop;
          const sidebarHeight = sidebar.clientHeight;
          if (linkTop < sidebarTop || linkTop > sidebarTop + sidebarHeight - 50) {
            sidebar.scrollTo({ top: linkTop - 80, behavior: 'smooth' });
          }
        }
      } else {
        link.classList.remove('active');
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   7. IT Job Roles Filter and Search
-------------------------------------------------------------------------- */
function initJobRolesFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const roleCards = document.querySelectorAll('.role-card');
  const searchInput = document.getElementById('role-search');
  const countDisplay = document.getElementById('roles-count-display');

  if (!filterBtns.length || !roleCards.length) return;

  let currentCategory = 'all';
  let currentSearchQuery = '';

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }

  function filterCards() {
    let visibleCount = 0;

    roleCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category') || '';
      const textContent = card.innerText.toLowerCase();

      const matchesCategory = currentCategory === 'all' || cardCategory.includes(currentCategory);
      const matchesSearch = !currentSearchQuery || textContent.includes(currentSearchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${visibleCount} of ${roleCards.length} roles`;
    }
  }
}

/* --------------------------------------------------------------------------
   8. Interactive 12-Step Student Roadmap Tracker
-------------------------------------------------------------------------- */
function initRoadmapTracker() {
  const checkboxes = document.querySelectorAll('.step-checkbox');
  const counterEl = document.getElementById('roadmap-completed-count');
  const progressPercentEl = document.getElementById('roadmap-percent-count');

  if (!checkboxes.length) return;

  const storageKey = 'it2030_roadmap_progress';
  let savedProgress = JSON.parse(localStorage.getItem(storageKey) || '[]');

  // Restore saved state
  checkboxes.forEach((box, idx) => {
    const card = box.closest('.roadmap-step-card');
    if (savedProgress.includes(idx)) {
      box.checked = true;
      if (card) card.classList.add('completed');
    }

    box.addEventListener('change', () => {
      if (box.checked) {
        if (card) card.classList.add('completed');
        if (!savedProgress.includes(idx)) savedProgress.push(idx);
      } else {
        if (card) card.classList.remove('completed');
        savedProgress = savedProgress.filter((i) => i !== idx);
      }

      localStorage.setItem(storageKey, JSON.stringify(savedProgress));
      updateProgressDisplay();

      if (savedProgress.length === checkboxes.length) {
        showToast('🎉 Outstanding! You completed the 2030 Roadmap preparation checklist!');
      }
    });
  });

  function updateProgressDisplay() {
    const total = checkboxes.length;
    const completed = savedProgress.length;
    const percent = Math.round((completed / total) * 100);

    if (counterEl) counterEl.textContent = `${completed}/${total}`;
    if (progressPercentEl) progressPercentEl.textContent = `${percent}%`;
  }

  updateProgressDisplay();
}

/* --------------------------------------------------------------------------
   9. Floating Back to Top Button
-------------------------------------------------------------------------- */
function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  }, { passive: true });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

/* --------------------------------------------------------------------------
   10. Share & Toast Utilities
-------------------------------------------------------------------------- */
function initShareFeatures() {
  const shareBtn = document.getElementById('share-btn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    const title = 'The IT Industry in 2030 by Naveen P';
    const text = 'Explore opportunities, challenges, and future software engineering trends for 2030.';
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        // Fallback to clipboard
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  });

  function copyToClipboard(url) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast('📋 Article link copied to clipboard!');
      });
    } else {
      showToast('Article URL: ' + url);
    }
  }
}

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
