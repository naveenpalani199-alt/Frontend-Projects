/**
 * MotoVerse - Core Application Engine
 * Pure Vanilla JavaScript implementation for Search, Filters, Compare Matrix, 
 * Wishlist, Gallery, Reviews, EMI Calculator, Theme Toggle and Storage.
 */

document.addEventListener('DOMContentLoaded', () => {
  MotoApp.init();
});

const MotoApp = {
  // Global State
  wishlist: [],
  compareList: [],
  customReviews: [],
  theme: 'dark',

  init() {
    this.loadStorage();
    this.initTheme();
    this.initNavbar();
    this.initBackToTop();
    this.initQuickSearch();
    this.initWishlistModal();
    this.renderCompareFloatingTray();
    this.updateNavBadges();

    // Page Specific Initialization
    const path = window.location.pathname.toLowerCase();
    if (path.includes('explore') || document.getElementById('explore-page-root')) {
      this.initExplorePage();
    } else if (path.includes('details') || document.getElementById('details-page-root')) {
      this.initDetailsPage();
    } else if (path.includes('compare') || document.getElementById('compare-page-root')) {
      this.initComparePage();
    } else if (path.includes('reviews') || document.getElementById('reviews-page-root')) {
      this.initReviewsPage();
    } else if (path.includes('brands') || document.getElementById('brands-page-root')) {
      this.initBrandsPage();
    } else if (path.includes('about') || document.getElementById('about-page-root')) {
      this.initAboutPage();
    } else {
      // Default to Home page
      this.initHomePage();
    }
  },

  // Storage Handlers
  loadStorage() {
    try {
      this.wishlist = JSON.parse(localStorage.getItem('motoverse_wishlist')) || [];
      this.compareList = JSON.parse(localStorage.getItem('motoverse_compare')) || [];
      this.customReviews = JSON.parse(localStorage.getItem('motoverse_custom_reviews')) || [];
      this.theme = localStorage.getItem('motoverse_theme') || 'dark';
    } catch (e) {
      console.warn('Storage read error, resetting defaults', e);
      this.wishlist = [];
      this.compareList = [];
      this.customReviews = [];
      this.theme = 'dark';
    }
  },

  saveWishlist() {
    localStorage.setItem('motoverse_wishlist', JSON.stringify(this.wishlist));
    this.updateNavBadges();
  },

  saveCompareList() {
    localStorage.setItem('motoverse_compare', JSON.stringify(this.compareList));
    this.updateNavBadges();
    this.renderCompareFloatingTray();
  },

  saveCustomReviews() {
    localStorage.setItem('motoverse_custom_reviews', JSON.stringify(this.customReviews));
  },

  // Theme Toggle Engine
  initTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.innerHTML = this.theme === 'dark' ? '<i class="bi bi-sun-fill text-amber"></i>' : '<i class="bi bi-moon-stars-fill text-cyan"></i>';
      btn.addEventListener('click', () => this.toggleTheme());
    });
  },

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('motoverse_theme', this.theme);
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.innerHTML = this.theme === 'dark' ? '<i class="bi bi-sun-fill text-amber"></i>' : '<i class="bi bi-moon-stars-fill text-cyan"></i>';
    });
    this.showToast(`Switched to ${this.theme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  },

  // Navbar & Sticky Behaviour
  initNavbar() {
    const navbar = document.querySelector('.motoverse-navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  },

  updateNavBadges() {
    const wishlistBadges = document.querySelectorAll('.nav-wishlist-count');
    wishlistBadges.forEach(b => {
      b.textContent = this.wishlist.length;
      b.style.display = this.wishlist.length > 0 ? 'flex' : 'none';
    });

    const compareBadges = document.querySelectorAll('.nav-compare-count');
    compareBadges.forEach(b => {
      b.textContent = this.compareList.length;
      b.style.display = this.compareList.length > 0 ? 'flex' : 'none';
    });

    // Update any active wishlist buttons in the current DOM
    document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
      const bikeId = btn.dataset.bikeId;
      if (bikeId && this.wishlist.includes(bikeId)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="bi bi-heart-fill text-danger"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="bi bi-heart"></i>';
      }
    });
  },

  // Toast System
  showToast(message, type = 'primary', icon = 'bi-info-circle-fill') {
    let container = document.getElementById('moto-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'moto-toast-container';
      container.className = 'toast-container-custom';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `moto-toast ${type === 'success' ? 'toast-success' : type === 'info' ? 'toast-info' : ''}`;
    
    let iconClass = 'bi-bell-fill';
    if (type === 'success') iconClass = 'bi-check-circle-fill text-emerald';
    else if (type === 'info') iconClass = 'bi-info-circle-fill text-cyan';
    else if (type === 'danger') iconClass = 'bi-exclamation-triangle-fill text-danger';

    toast.innerHTML = `
      <i class="bi ${iconClass} fs-5"></i>
      <div class="flex-grow-1 text-white" style="font-size: 0.92rem; font-weight: 600;">${message}</div>
      <button type="button" class="btn-close btn-close-white ms-2" style="font-size: 0.7rem;" aria-label="Close"></button>
    `;

    const closeBtn = toast.querySelector('.btn-close');
    closeBtn.addEventListener('click', () => toast.remove());

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(50px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }
    }, 3500);
  },

  // Wishlist Actions
  toggleWishlist(bikeId, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const bike = getBikeById(bikeId);
    if (!bike) return;

    const index = this.wishlist.indexOf(bikeId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.saveWishlist();
      this.showToast(`Removed <strong>${bike.name}</strong> from Wishlist`, 'info');
    } else {
      this.wishlist.push(bikeId);
      this.saveWishlist();
      this.showToast(`Added <strong>${bike.name}</strong> to Wishlist!`, 'success');
    }
    this.renderWishlistModalContent();
  },

  // Compare Actions
  toggleCompare(bikeId, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const bike = getBikeById(bikeId);
    if (!bike) return;

    const index = this.compareList.indexOf(bikeId);
    if (index > -1) {
      this.compareList.splice(index, 1);
      this.saveCompareList();
      this.showToast(`Removed <strong>${bike.name}</strong> from Compare`, 'info');
    } else {
      if (this.compareList.length >= 3) {
        this.showToast('You can compare up to 3 bikes at once. Please remove one first.', 'danger');
        return;
      }
      this.compareList.push(bikeId);
      this.saveCompareList();
      this.showToast(`Added <strong>${bike.name}</strong> to Compare!`, 'success');
    }
  },

  // Compare Floating Tray
  renderCompareFloatingTray() {
    let tray = document.getElementById('moto-compare-floating-tray');
    if (!tray) {
      tray = document.createElement('div');
      tray.id = 'moto-compare-floating-tray';
      tray.className = 'compare-floating-tray';
      document.body.appendChild(tray);
    }

    if (this.compareList.length === 0) {
      tray.classList.remove('show');
      return;
    }

    const bikes = this.compareList.map(id => getBikeById(id));
    
    tray.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <div class="compare-tray-thumbs">
          ${bikes.map(b => `
            <div class="compare-tray-thumb-item" title="${b.name}">
              <img src="${b.primaryImage}" alt="${b.name}">
              <span class="compare-tray-thumb-remove" onclick="MotoApp.toggleCompare('${b.id}', event)">&times;</span>
            </div>
          `).join('')}
        </div>
        <div class="d-none d-sm-block">
          <div class="text-white fw-bold" style="font-size: 0.85rem;">Comparing ${bikes.length} / 3 Bikes</div>
          <div class="text-muted" style="font-size: 0.75rem;">${bikes.map(b => b.name.split(' ')[0]).join(' vs ')}</div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-2">
        <a href="compare.html" class="btn-moto-primary py-2 px-3 text-white" style="font-size: 0.85rem;">
          <i class="bi bi-arrow-left-right"></i> Compare Now
        </a>
        <button class="btn btn-sm btn-outline-secondary text-white rounded-circle p-1" onclick="MotoApp.clearCompareList(event)" title="Clear All">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;

    tray.classList.add('show');
  },

  clearCompareList(event) {
    if (event) event.stopPropagation();
    this.compareList = [];
    this.saveCompareList();
    this.showToast('Cleared comparison list', 'info');
  },

  // Wishlist Modal
  initWishlistModal() {
    const trigger = document.querySelectorAll('.wishlist-modal-trigger');
    trigger.forEach(t => {
      t.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = new bootstrap.Modal(document.getElementById('wishlistModal'));
        this.renderWishlistModalContent();
        modal.show();
      });
    });
  },

  renderWishlistModalContent() {
    const container = document.getElementById('wishlistModalItems');
    if (!container) return;

    if (this.wishlist.length === 0) {
      container.innerHTML = `
        <div class="text-center py-5">
          <div class="why-icon-box mx-auto mb-3" style="width: 60px; height: 60px;">
            <i class="bi bi-heart fs-3"></i>
          </div>
          <h5 class="fw-bold text-white mb-2">Your Wishlist is Empty</h5>
          <p class="text-muted small mb-4">Explore our motorcycle lineup and save your dream rides for quick access.</p>
          <a href="explore.html" class="btn-moto-primary" data-bs-dismiss="modal">Explore Bikes</a>
        </div>
      `;
      return;
    }

    const bikes = this.wishlist.map(id => getBikeById(id));
    container.innerHTML = `
      <div class="row g-3">
        ${bikes.map(b => `
          <div class="col-12">
            <div class="p-3 glass-card d-flex align-items-center justify-content-between gap-3">
              <img src="${b.primaryImage}" alt="${b.name}" class="rounded" style="width: 70px; height: 50px; object-fit: cover;">
              <div class="flex-grow-1">
                <div class="fw-bold text-white" style="font-size: 0.95rem;">${b.name}</div>
                <div class="text-accent fw-bold small">${b.priceFormatted} <span class="text-muted fw-normal ms-2">${b.engine.displacementFormatted}</span></div>
              </div>
              <div class="d-flex gap-2">
                <a href="details.html?id=${b.id}" class="btn btn-sm btn-outline-light rounded-pill px-3" style="font-size: 0.78rem;">View</a>
                <button class="btn btn-sm btn-outline-danger rounded-circle p-1" onclick="MotoApp.toggleWishlist('${b.id}', event)">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  // Quick Search Modal (Ctrl+K)
  initQuickSearch() {
    const backdrop = document.getElementById('quickSearchBackdrop');
    const input = document.getElementById('quickSearchInput');
    const results = document.getElementById('quickSearchResults');
    const triggers = document.querySelectorAll('.search-modal-trigger');

    if (!backdrop || !input) return;

    const openSearch = () => {
      backdrop.classList.add('show');
      input.focus();
      renderQuickResults('');
    };

    const closeSearch = () => {
      backdrop.classList.remove('show');
      input.value = '';
    };

    triggers.forEach(t => t.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    }));

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape' && backdrop.classList.contains('show')) {
        closeSearch();
      }
    });

    const renderQuickResults = (q) => {
      const term = q.trim().toLowerCase();
      const matched = MOTO_BIKES.filter(b => 
        !term || 
        b.name.toLowerCase().includes(term) || 
        b.brand.toLowerCase().includes(term) || 
        b.category.toLowerCase().includes(term)
      );

      if (matched.length === 0) {
        results.innerHTML = `
          <div class="text-center py-4 text-muted small">
            No bikes found matching "<strong>${q}</strong>"
          </div>
        `;
        return;
      }

      results.innerHTML = matched.slice(0, 6).map(b => `
        <div class="search-result-item" onclick="window.location.href='details.html?id=${b.id}'">
          <img src="${b.primaryImage}" alt="${b.name}" style="width: 54px; height: 38px; object-fit: cover; border-radius: 6px;">
          <div class="flex-grow-1">
            <div class="fw-bold text-white" style="font-size: 0.9rem;">${b.name}</div>
            <div class="small text-muted">${b.brand} &bull; ${b.category} &bull; ${b.engine.displacementFormatted}</div>
          </div>
          <div class="fw-bold text-accent" style="font-size: 0.9rem;">${b.priceFormatted}</div>
        </div>
      `).join('');
    };

    input.addEventListener('input', (e) => renderQuickResults(e.target.value));
  },

  // Back to Top
  initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  // =========================================================================
  // PAGE INITIALIZERS
  // =========================================================================

  // 1. HOME PAGE
  initHomePage() {
    // Render Featured Bikes
    const featuredGrid = document.getElementById('featured-bikes-grid');
    if (featuredGrid) {
      const featured = MOTO_BIKES.filter(b => b.featured).slice(0, 6);
      featuredGrid.innerHTML = featured.map(b => this.generateBikeCardHTML(b)).join('');
    }

    // Render Popular Brands
    const brandsGrid = document.getElementById('popular-brands-grid');
    if (brandsGrid) {
      const topBrands = MOTO_BRANDS.slice(0, 8);
      brandsGrid.innerHTML = topBrands.map(br => {
        const count = getBikesByBrand(br.name).length;
        return `
          <div class="col-6 col-md-4 col-lg-3">
            <a href="explore.html?brand=${encodeURIComponent(br.name)}" class="brand-card">
              <div class="brand-logo-pill">${br.logoText}</div>
              <h5 class="fw-bold text-white mb-1" style="font-size: 1.1rem;">${br.name}</h5>
              <div class="text-muted small">${count} Model${count === 1 ? '' : 's'} Available</div>
            </a>
          </div>
        `;
      }).join('');
    }

    // Render Latest Launches
    const latestGrid = document.getElementById('latest-bikes-grid');
    if (latestGrid) {
      const latest = MOTO_BIKES.filter(b => b.isNew || b.launchYear >= 2024).slice(0, 4);
      latestGrid.innerHTML = latest.map(b => this.generateBikeCardHTML(b)).join('');
    }

    this.updateNavBadges();
  },

  // 2. EXPLORE PAGE
  initExplorePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const initialBrand = urlParams.get('brand') || '';
    const initialCategory = urlParams.get('category') || 'all';
    const initialSearch = urlParams.get('search') || '';

    let state = {
      search: initialSearch,
      brand: initialBrand,
      category: initialCategory,
      maxPrice: 3500000,
      ccFilter: 'all',
      sortBy: 'featured',
      viewMode: 'grid'
    };

    const searchInput = document.getElementById('explore-search-input');
    const priceSlider = document.getElementById('explore-price-slider');
    const priceValDisplay = document.getElementById('explore-price-val');
    const sortSelect = document.getElementById('explore-sort-select');
    const resultsContainer = document.getElementById('explore-results-grid');
    const countDisplay = document.getElementById('explore-count-display');
    const resetBtn = document.getElementById('explore-reset-btn');
    const categoryPills = document.querySelectorAll('.explore-cat-pill');
    const brandCheckboxes = document.querySelectorAll('.explore-brand-check');
    const ccRadios = document.querySelectorAll('.explore-cc-radio');
    const viewModeBtns = document.querySelectorAll('.view-mode-btn');

    if (searchInput) searchInput.value = state.search;
    if (initialCategory) {
      categoryPills.forEach(p => {
        if (p.dataset.category.toLowerCase() === state.category.toLowerCase()) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    const applyFilters = () => {
      let filtered = [...MOTO_BIKES];

      // Search text
      if (state.search.trim()) {
        const q = state.search.toLowerCase();
        filtered = filtered.filter(b => 
          b.name.toLowerCase().includes(q) || 
          b.brand.toLowerCase().includes(q) || 
          b.category.toLowerCase().includes(q) ||
          b.tagline.toLowerCase().includes(q)
        );
      }

      // Brand filter
      if (state.brand) {
        filtered = filtered.filter(b => b.brand.toLowerCase() === state.brand.toLowerCase());
      }

      // Category filter
      if (state.category && state.category !== 'all') {
        filtered = filtered.filter(b => b.category.toLowerCase() === state.category.toLowerCase());
      }

      // Price slider
      filtered = filtered.filter(b => b.price <= state.maxPrice);

      // Engine CC
      if (state.ccFilter === 'under200') {
        filtered = filtered.filter(b => b.engine.displacement < 200);
      } else if (state.ccFilter === '200to400') {
        filtered = filtered.filter(b => b.engine.displacement >= 200 && b.engine.displacement <= 400);
      } else if (state.ccFilter === '400to800') {
        filtered = filtered.filter(b => b.engine.displacement > 400 && b.engine.displacement <= 800);
      } else if (state.ccFilter === 'above800') {
        filtered = filtered.filter(b => b.engine.displacement > 800);
      }

      // Sorting
      if (state.sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (state.sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (state.sortBy === 'power') {
        filtered.sort((a, b) => b.engine.maxPower - a.engine.maxPower);
      } else if (state.sortBy === 'mileage') {
        filtered.sort((a, b) => b.performance.mileage - a.performance.mileage);
      } else if (state.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      // Render
      if (countDisplay) {
        countDisplay.innerHTML = `Showing <strong class="text-white">${filtered.length}</strong> of ${MOTO_BIKES.length} Bikes`;
      }

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="why-icon-box mx-auto mb-3">
              <i class="bi bi-search fs-3"></i>
            </div>
            <h4 class="fw-bold text-white mb-2">No Matching Bikes Found</h4>
            <p class="text-muted small mb-4">Try adjusting your filters or price range to discover available models.</p>
            <button class="btn-moto-primary" id="empty-reset-btn">Reset All Filters</button>
          </div>
        `;
        document.getElementById('empty-reset-btn')?.addEventListener('click', resetFilters);
        return;
      }

      if (state.viewMode === 'list') {
        resultsContainer.innerHTML = filtered.map(b => this.generateBikeListHTML(b)).join('');
      } else {
        resultsContainer.innerHTML = filtered.map(b => `
          <div class="col-12 col-md-6 col-lg-4 mb-4">
            ${this.generateBikeCardHTML(b)}
          </div>
        `).join('');
      }

      this.updateNavBadges();
    };

    const resetFilters = () => {
      state = {
        search: '',
        brand: '',
        category: 'all',
        maxPrice: 3500000,
        ccFilter: 'all',
        sortBy: 'featured',
        viewMode: state.viewMode
      };
      if (searchInput) searchInput.value = '';
      if (priceSlider) priceSlider.value = 3500000;
      if (priceValDisplay) priceValDisplay.textContent = '₹35,00,000+';
      if (sortSelect) sortSelect.value = 'featured';
      categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
      brandCheckboxes.forEach(cb => cb.checked = false);
      ccRadios.forEach(r => r.checked = r.value === 'all');
      applyFilters();
    };

    // Listeners
    searchInput?.addEventListener('input', (e) => {
      state.search = e.target.value;
      applyFilters();
    });

    priceSlider?.addEventListener('input', (e) => {
      state.maxPrice = Number(e.target.value);
      if (priceValDisplay) {
        priceValDisplay.textContent = state.maxPrice >= 3500000 ? '₹35,00,000+' : `₹${(state.maxPrice / 100000).toFixed(1)} Lakh`;
      }
      applyFilters();
    });

    sortSelect?.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFilters();
    });

    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.category = pill.dataset.category;
        applyFilters();
      });
    });

    brandCheckboxes.forEach(cb => {
      if (initialBrand && cb.value.toLowerCase() === initialBrand.toLowerCase()) {
        cb.checked = true;
      }
      cb.addEventListener('change', () => {
        const checked = Array.from(brandCheckboxes).find(c => c.checked);
        state.brand = checked ? checked.value : '';
        applyFilters();
      });
    });

    ccRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.ccFilter = e.target.value;
        applyFilters();
      });
    });

    viewModeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        viewModeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.view;
        applyFilters();
      });
    });

    resetBtn?.addEventListener('click', resetFilters);

    applyFilters();
  },

  // 3. BIKE DETAILS PAGE
  initDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const bikeId = urlParams.get('id') || 'yamaha-r15-v4';
    const bike = getBikeById(bikeId);

    document.title = `${bike.name} - Specifications, Price & Features | MotoVerse`;

    // Dynamic Title & Breadcrumbs
    const bikeNameEls = document.querySelectorAll('.detail-bike-name');
    bikeNameEls.forEach(el => el.textContent = bike.name);

    const brandNameEls = document.querySelectorAll('.detail-brand-name');
    brandNameEls.forEach(el => el.textContent = bike.brand);

    const priceEls = document.querySelectorAll('.detail-bike-price');
    priceEls.forEach(el => el.textContent = bike.priceFormatted);

    const taglineEl = document.getElementById('detail-tagline');
    if (taglineEl) taglineEl.textContent = bike.tagline;

    const descEl = document.getElementById('detail-desc');
    if (descEl) descEl.textContent = bike.description;

    const ratingEl = document.getElementById('detail-rating');
    if (ratingEl) ratingEl.textContent = bike.rating;

    const reviewsCountEl = document.getElementById('detail-reviews-count');
    if (reviewsCountEl) reviewsCountEl.textContent = `(${bike.reviewsCount} reviews)`;

    const categoryBadge = document.getElementById('detail-category-badge');
    if (categoryBadge) categoryBadge.textContent = bike.category;

    // Gallery and Color Swatch Logic
    const mainImg = document.getElementById('detail-main-image');
    const thumbsContainer = document.getElementById('detail-gallery-thumbs');
    const colorsContainer = document.getElementById('detail-color-swatches');
    const colorNameDisplay = document.getElementById('detail-color-name');

    if (mainImg) mainImg.src = bike.primaryImage;

    if (thumbsContainer) {
      thumbsContainer.innerHTML = bike.gallery.map((imgUrl, idx) => `
        <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-img="${imgUrl}">
          <img src="${imgUrl}" alt="${bike.name} view ${idx + 1}">
        </div>
      `).join('');

      thumbsContainer.querySelectorAll('.gallery-thumb').forEach(th => {
        th.addEventListener('click', () => {
          thumbsContainer.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
          th.classList.add('active');
          if (mainImg) {
            mainImg.style.opacity = '0.3';
            setTimeout(() => {
              mainImg.src = th.dataset.img;
              mainImg.style.opacity = '1';
            }, 150);
          }
        });
      });
    }

    if (colorsContainer && bike.colors) {
      if (colorNameDisplay) colorNameDisplay.textContent = bike.colors[0].name;
      colorsContainer.innerHTML = bike.colors.map((c, idx) => `
        <div class="color-swatch-circle ${idx === 0 ? 'active' : ''}" 
             style="background-color: ${c.hex};" 
             data-color="${c.name}"
             title="${c.name}">
        </div>
      `).join('');

      colorsContainer.querySelectorAll('.color-swatch-circle').forEach(sw => {
        sw.addEventListener('click', () => {
          colorsContainer.querySelectorAll('.color-swatch-circle').forEach(s => s.classList.remove('active'));
          sw.classList.add('active');
          if (colorNameDisplay) colorNameDisplay.textContent = sw.dataset.color;
          this.showToast(`Selected Color: ${sw.dataset.color}`, 'info');
        });
      });
    }

    // Action Buttons
    const wishlistBtn = document.getElementById('detail-wishlist-btn');
    if (wishlistBtn) {
      wishlistBtn.dataset.bikeId = bike.id;
      wishlistBtn.addEventListener('click', (e) => this.toggleWishlist(bike.id, e));
    }

    const compareBtn = document.getElementById('detail-compare-btn');
    if (compareBtn) {
      compareBtn.addEventListener('click', (e) => this.toggleCompare(bike.id, e));
    }

    // Key Highlights Bar
    const specCc = document.getElementById('detail-spec-cc');
    if (specCc) specCc.textContent = bike.engine.displacementFormatted;
    const specPower = document.getElementById('detail-spec-power');
    if (specPower) specPower.textContent = `${bike.engine.maxPower} PS`;
    const specTorque = document.getElementById('detail-spec-torque');
    if (specTorque) specTorque.textContent = `${bike.engine.maxTorque} Nm`;
    const specMileage = document.getElementById('detail-spec-mileage');
    if (specMileage) specMileage.textContent = `${bike.performance.mileage} km/l`;
    const specTopSpeed = document.getElementById('detail-spec-topspeed');
    if (specTopSpeed) specTopSpeed.textContent = `${bike.performance.topSpeed} km/h`;
    const specWeight = document.getElementById('detail-spec-weight');
    if (specWeight) specWeight.textContent = `${bike.performance.kerbWeight} kg`;

    // Key Features Badges
    const featuresList = document.getElementById('detail-features-list');
    if (featuresList && bike.features) {
      featuresList.innerHTML = bike.features.map(f => `
        <div class="col-12 col-md-6 mb-2">
          <div class="d-flex align-items-center gap-2 p-2 glass-card rounded-3">
            <i class="bi bi-check2-circle text-emerald fs-5"></i>
            <span class="text-white" style="font-size: 0.9rem; font-weight: 600;">${f}</span>
          </div>
        </div>
      `).join('');
    }

    // Pros & Cons
    const prosList = document.getElementById('detail-pros-list');
    if (prosList && bike.pros) {
      prosList.innerHTML = bike.pros.map(p => `
        <li class="mb-2 d-flex align-items-start gap-2 text-white">
          <i class="bi bi-plus-circle-fill text-emerald mt-1"></i>
          <span>${p}</span>
        </li>
      `).join('');
    }

    const consList = document.getElementById('detail-cons-list');
    if (consList && bike.cons) {
      consList.innerHTML = bike.cons.map(c => `
        <li class="mb-2 d-flex align-items-start gap-2 text-white">
          <i class="bi bi-dash-circle-fill text-danger mt-1"></i>
          <span>${c}</span>
        </li>
      `).join('');
    }

    // Full Technical Specs Table Rendering
    const specsContainer = document.getElementById('detail-full-specs-table');
    if (specsContainer) {
      specsContainer.innerHTML = `
        <div class="mb-4">
          <h5 class="fw-bold text-accent mb-3"><i class="bi bi-gear-wide-connected me-2"></i> Engine & Transmission</h5>
          <table class="table-custom">
            <tbody>
              <tr><td class="text-muted" style="width: 40%;">Displacement</td><td class="fw-bold text-white">${bike.engine.displacementFormatted}</td></tr>
              <tr><td class="text-muted">Max Power</td><td class="fw-bold text-white">${bike.engine.maxPowerFormatted}</td></tr>
              <tr><td class="text-muted">Max Torque</td><td class="fw-bold text-white">${bike.engine.maxTorqueFormatted}</td></tr>
              <tr><td class="text-muted">No. of Cylinders</td><td class="fw-bold text-white">${bike.engine.cylinders}</td></tr>
              <tr><td class="text-muted">Valves per Cylinder</td><td class="fw-bold text-white">${bike.engine.valves}</td></tr>
              <tr><td class="text-muted">Cooling System</td><td class="fw-bold text-white">${bike.engine.cooling}</td></tr>
              <tr><td class="text-muted">Fuel Delivery System</td><td class="fw-bold text-white">${bike.engine.fuelSystem}</td></tr>
              <tr><td class="text-muted">Transmission & Clutch</td><td class="fw-bold text-white">${bike.engine.transmission}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="mb-4">
          <h5 class="fw-bold text-accent mb-3"><i class="bi bi-speedometer2 me-2"></i> Performance & Dimensions</h5>
          <table class="table-custom">
            <tbody>
              <tr><td class="text-muted" style="width: 40%;">Top Speed</td><td class="fw-bold text-white">${bike.performance.topSpeedFormatted}</td></tr>
              <tr><td class="text-muted">0-60 km/h Acceleration</td><td class="fw-bold text-white">${bike.performance.accel0to60Formatted}</td></tr>
              <tr><td class="text-muted">Certified Mileage</td><td class="fw-bold text-white">${bike.performance.mileageFormatted}</td></tr>
              <tr><td class="text-muted">Fuel Tank Capacity</td><td class="fw-bold text-white">${bike.performance.fuelCapacityFormatted}</td></tr>
              <tr><td class="text-muted">Kerb Weight</td><td class="fw-bold text-white">${bike.performance.kerbWeightFormatted}</td></tr>
              <tr><td class="text-muted">Seat Height</td><td class="fw-bold text-white">${bike.performance.seatHeightFormatted}</td></tr>
              <tr><td class="text-muted">Ground Clearance</td><td class="fw-bold text-white">${bike.performance.groundClearanceFormatted}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="mb-4">
          <h5 class="fw-bold text-accent mb-3"><i class="bi bi-shield-check me-2"></i> Brakes, Suspension & Wheels</h5>
          <table class="table-custom">
            <tbody>
              <tr><td class="text-muted" style="width: 40%;">ABS System</td><td class="fw-bold text-white">${bike.brakesSuspension.absType}</td></tr>
              <tr><td class="text-muted">Front Brake</td><td class="fw-bold text-white">${bike.brakesSuspension.frontBrake}</td></tr>
              <tr><td class="text-muted">Rear Brake</td><td class="fw-bold text-white">${bike.brakesSuspension.rearBrake}</td></tr>
              <tr><td class="text-muted">Front Suspension</td><td class="fw-bold text-white">${bike.brakesSuspension.frontSuspension}</td></tr>
              <tr><td class="text-muted">Rear Suspension</td><td class="fw-bold text-white">${bike.brakesSuspension.rearSuspension}</td></tr>
              <tr><td class="text-muted">Front Tyre</td><td class="fw-bold text-white">${bike.brakesSuspension.frontTyre}</td></tr>
              <tr><td class="text-muted">Rear Tyre</td><td class="fw-bold text-white">${bike.brakesSuspension.rearTyre}</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h5 class="fw-bold text-accent mb-3"><i class="bi bi-cpu me-2"></i> Electricals & Advanced Tech</h5>
          <table class="table-custom">
            <tbody>
              <tr><td class="text-muted" style="width: 40%;">Headlight</td><td class="fw-bold text-white">${bike.electricals.headlight}</td></tr>
              <tr><td class="text-muted">Instrument Console</td><td class="fw-bold text-white">${bike.electricals.display}</td></tr>
              <tr><td class="text-muted">Bluetooth Connectivity</td><td class="fw-bold text-white">${bike.electricals.bluetooth}</td></tr>
              <tr><td class="text-muted">Riding Modes</td><td class="fw-bold text-white">${bike.electricals.ridingModes}</td></tr>
              <tr><td class="text-muted">Quickshifter</td><td class="fw-bold text-white">${bike.electricals.quickshifter}</td></tr>
              <tr><td class="text-muted">Traction Control</td><td class="fw-bold text-white">${bike.electricals.tractionControl}</td></tr>
            </tbody>
          </table>
        </div>
      `;
    }

    // Interactive EMI Calculator Widget
    this.initEmiCalculator(bike.price);

    // Render Related Bikes
    const relatedContainer = document.getElementById('detail-related-bikes');
    if (relatedContainer) {
      const related = MOTO_BIKES.filter(b => b.id !== bike.id && (b.category === bike.category || b.brand === bike.brand)).slice(0, 3);
      relatedContainer.innerHTML = related.map(b => `
        <div class="col-12 col-md-4 mb-3">
          ${this.generateBikeCardHTML(b)}
        </div>
      `).join('');
    }

    this.updateNavBadges();
  },

  // Interactive EMI Calculator
  initEmiCalculator(bikePrice) {
    const loanSlider = document.getElementById('emi-loan-slider');
    const loanValDisplay = document.getElementById('emi-loan-val');
    const rateSlider = document.getElementById('emi-rate-slider');
    const rateValDisplay = document.getElementById('emi-rate-val');
    const tenureSlider = document.getElementById('emi-tenure-slider');
    const tenureValDisplay = document.getElementById('emi-tenure-val');

    const emiOutput = document.getElementById('emi-monthly-output');
    const totalInterestOutput = document.getElementById('emi-interest-output');
    const totalAmountOutput = document.getElementById('emi-total-output');

    if (!loanSlider || !emiOutput) return;

    // Set defaults based on bike price
    const defaultLoan = Math.round(bikePrice * 0.8);
    loanSlider.max = bikePrice;
    loanSlider.value = defaultLoan;

    const calculate = () => {
      const P = Number(loanSlider.value);
      const r = Number(rateSlider.value) / 12 / 100;
      const n = Number(tenureSlider.value);

      if (loanValDisplay) loanValDisplay.textContent = `₹${P.toLocaleString('en-IN')}`;
      if (rateValDisplay) rateValDisplay.textContent = `${rateSlider.value}%`;
      if (tenureValDisplay) tenureValDisplay.textContent = `${n} Months (${(n/12).toFixed(1)} Yrs)`;

      // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayable = emi * n;
      const totalInterest = totalPayable - P;

      emiOutput.textContent = `₹${Math.round(emi).toLocaleString('en-IN')}`;
      if (totalInterestOutput) totalInterestOutput.textContent = `₹${Math.round(totalInterest).toLocaleString('en-IN')}`;
      if (totalAmountOutput) totalAmountOutput.textContent = `₹${Math.round(totalPayable).toLocaleString('en-IN')}`;
    };

    loanSlider.addEventListener('input', calculate);
    rateSlider?.addEventListener('input', calculate);
    tenureSlider?.addEventListener('input', calculate);

    calculate();
  },

  // 4. COMPARE BIKES PAGE
  initComparePage() {
    const urlParams = new URLSearchParams(window.location.search);
    let bike1Id = urlParams.get('bike1') || (this.compareList[0] || 'yamaha-r15-v4');
    let bike2Id = urlParams.get('bike2') || (this.compareList[1] || 'ktm-390-duke');
    let bike3Id = urlParams.get('bike3') || (this.compareList[2] || '');

    const slot1Select = document.getElementById('compare-select-1');
    const slot2Select = document.getElementById('compare-select-2');
    const slot3Select = document.getElementById('compare-select-3');
    const highlightWinnerToggle = document.getElementById('compare-highlight-winner-toggle');
    const diffOnlyToggle = document.getElementById('compare-diff-only-toggle');
    const tableContainer = document.getElementById('compare-matrix-container');

    const populateDropdown = (selectEl, selectedId) => {
      if (!selectEl) return;
      selectEl.innerHTML = `
        <option value="">-- Choose a Bike --</option>
        ${MOTO_BIKES.map(b => `
          <option value="${b.id}" ${b.id === selectedId ? 'selected' : ''}>
            ${b.brand} ${b.name} (${b.priceFormatted})
          </option>
        `).join('')}
      `;
    };

    populateDropdown(slot1Select, bike1Id);
    populateDropdown(slot2Select, bike2Id);
    populateDropdown(slot3Select, bike3Id);

    const renderComparison = () => {
      const b1 = getBikeById(slot1Select ? slot1Select.value : bike1Id);
      const b2 = getBikeById(slot2Select ? slot2Select.value : bike2Id);
      const b3Id = slot3Select ? slot3Select.value : bike3Id;
      const b3 = b3Id ? getBikeById(b3Id) : null;

      const activeBikes = [b1, b2, b3].filter(Boolean);

      if (activeBikes.length < 2) {
        if (tableContainer) {
          tableContainer.innerHTML = `
            <div class="text-center py-5 glass-panel">
              <i class="bi bi-arrow-left-right text-accent display-4 mb-3"></i>
              <h4 class="fw-bold text-white">Select At Least 2 Bikes to Compare</h4>
              <p class="text-muted">Use the dropdowns above to select two or three motorcycles side-by-side.</p>
            </div>
          `;
        }
        return;
      }

      const showWinner = highlightWinnerToggle ? highlightWinnerToggle.checked : true;
      const diffOnly = diffOnlyToggle ? diffOnlyToggle.checked : false;

      // Smart Winner Evaluator
      const getWinnerClass = (key, bikeItem) => {
        if (!showWinner) return 'text-white';
        if (activeBikes.length < 2) return 'text-white';

        if (key === 'price') {
          const minPrice = Math.min(...activeBikes.map(b => b.price));
          return bikeItem.price === minPrice ? 'text-emerald fw-bold' : 'text-white';
        } else if (key === 'power') {
          const maxPower = Math.max(...activeBikes.map(b => b.engine.maxPower));
          return bikeItem.engine.maxPower === maxPower ? 'text-emerald fw-bold' : 'text-white';
        } else if (key === 'torque') {
          const maxTorque = Math.max(...activeBikes.map(b => b.engine.maxTorque));
          return bikeItem.engine.maxTorque === maxTorque ? 'text-emerald fw-bold' : 'text-white';
        } else if (key === 'displacement') {
          const maxDisplacement = Math.max(...activeBikes.map(b => b.engine.displacement));
          return bikeItem.engine.displacement === maxDisplacement ? 'text-emerald fw-bold' : 'text-white';
        } else if (key === 'topSpeed') {
          const maxSpeed = Math.max(...activeBikes.map(b => b.performance.topSpeed));
          return bikeItem.performance.topSpeed === maxSpeed ? 'text-emerald fw-bold' : 'text-white';
        } else if (key === 'mileage') {
          const maxMileage = Math.max(...activeBikes.map(b => b.performance.mileage));
          return bikeItem.performance.mileage === maxMileage ? 'text-emerald fw-bold' : 'text-white';
        } else if (key === 'weight') {
          const minWeight = Math.min(...activeBikes.map(b => b.performance.kerbWeight));
          return bikeItem.performance.kerbWeight === minWeight ? 'text-emerald fw-bold' : 'text-white';
        } else if (key === 'fuelCapacity') {
          const maxTank = Math.max(...activeBikes.map(b => b.performance.fuelCapacity));
          return bikeItem.performance.fuelCapacity === maxTank ? 'text-emerald fw-bold' : 'text-white';
        }
        return 'text-white';
      };

      const winnerBadge = '<span class="compare-winner-badge"><i class="bi bi-trophy-fill"></i> Best</span>';

      const specsRows = [
        { label: 'Ex-Showroom Price', key: 'price', render: (b) => `<span class="${getWinnerClass('price', b)}">${b.priceFormatted} ${getWinnerClass('price', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: 'Category / Style', key: 'category', render: (b) => `<span class="badge bg-secondary text-white">${b.category}</span>` },
        { label: 'Engine Displacement', key: 'displacement', render: (b) => `<span class="${getWinnerClass('displacement', b)}">${b.engine.displacementFormatted} ${getWinnerClass('displacement', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: 'Max Power', key: 'power', render: (b) => `<span class="${getWinnerClass('power', b)}">${b.engine.maxPowerFormatted} ${getWinnerClass('power', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: 'Max Torque', key: 'torque', render: (b) => `<span class="${getWinnerClass('torque', b)}">${b.engine.maxTorqueFormatted} ${getWinnerClass('torque', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: 'Mileage / Fuel Economy', key: 'mileage', render: (b) => `<span class="${getWinnerClass('mileage', b)}">${b.performance.mileageFormatted} ${getWinnerClass('mileage', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: 'Top Speed', key: 'topSpeed', render: (b) => `<span class="${getWinnerClass('topSpeed', b)}">${b.performance.topSpeedFormatted} ${getWinnerClass('topSpeed', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: '0-60 km/h Accel', key: 'accel0to60', render: (b) => `<span class="text-white">${b.performance.accel0to60Formatted}</span>` },
        { label: 'Kerb Weight', key: 'weight', render: (b) => `<span class="${getWinnerClass('weight', b)}">${b.performance.kerbWeightFormatted} ${getWinnerClass('weight', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: 'Fuel Tank Capacity', key: 'fuelCapacity', render: (b) => `<span class="${getWinnerClass('fuelCapacity', b)}">${b.performance.fuelCapacityFormatted} ${getWinnerClass('fuelCapacity', b).includes('emerald') ? winnerBadge : ''}</span>` },
        { label: 'Seat Height', key: 'seatHeight', render: (b) => `<span class="text-white">${b.performance.seatHeightFormatted}</span>` },
        { label: 'Ground Clearance', key: 'groundClearance', render: (b) => `<span class="text-white">${b.performance.groundClearanceFormatted}</span>` },
        { label: 'Cooling System', key: 'cooling', render: (b) => `<span class="text-white">${b.engine.cooling}</span>` },
        { label: 'Braking / ABS System', key: 'abs', render: (b) => `<span class="text-white">${b.brakesSuspension.absType}</span>` },
        { label: 'Front Suspension', key: 'frontSusp', render: (b) => `<span class="text-white">${b.brakesSuspension.frontSuspension}</span>` },
        { label: 'Riding Modes', key: 'modes', render: (b) => `<span class="text-white">${b.electricals.ridingModes}</span>` },
        { label: 'Quickshifter Fitment', key: 'quickshifter', render: (b) => `<span class="text-white">${b.electricals.quickshifter}</span>` },
        { label: 'Traction Control', key: 'tcs', render: (b) => `<span class="text-white">${b.electricals.tractionControl}</span>` },
        { label: 'Digital Console / Bluetooth', key: 'console', render: (b) => `<span class="text-white">${b.electricals.display} (${b.electricals.bluetooth})</span>` }
      ];

      tableContainer.innerHTML = `
        <!-- Sticky Bike Overview Cards -->
        <div class="row g-3 mb-4">
          ${activeBikes.map(b => `
            <div class="col-12 col-md-${12 / activeBikes.length}">
              <div class="glass-card p-3 text-center h-100 position-relative">
                <img src="${b.primaryImage}" alt="${b.name}" class="rounded-3 mx-auto mb-3" style="width: 100%; height: 160px; object-fit: cover;">
                <div class="bike-brand-label">${b.brand}</div>
                <h5 class="fw-bold text-white mb-1">${b.name}</h5>
                <div class="text-accent fw-bold fs-5 mb-2">${b.priceFormatted}</div>
                <div class="d-flex justify-content-center gap-2">
                  <a href="details.html?id=${b.id}" class="btn btn-sm btn-outline-light rounded-pill px-3">View Details</a>
                  <button class="btn btn-sm btn-outline-danger rounded-circle p-1" onclick="MotoApp.toggleWishlist('${b.id}', event)">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Detailed Comparison Table -->
        <div class="table-responsive glass-panel">
          <table class="table-custom compare-table">
            <thead>
              <tr>
                <th style="width: 25%;">Specification</th>
                ${activeBikes.map(b => `<th style="width: ${75 / activeBikes.length}%; text-align: center;" class="text-white">${b.name}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${specsRows.map(row => {
                const values = activeBikes.map(b => row.render(b));
                const isDifferent = new Set(values).size > 1;
                if (diffOnly && !isDifferent) return '';

                return `
                  <tr class="${isDifferent ? 'compare-diff-highlight' : ''}">
                    <td class="fw-bold text-muted">${row.label}</td>
                    ${activeBikes.map(b => `<td style="text-align: center;">${row.render(b)}</td>`).join('')}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    };

    slot1Select?.addEventListener('change', renderComparison);
    slot2Select?.addEventListener('change', renderComparison);
    slot3Select?.addEventListener('change', renderComparison);
    highlightWinnerToggle?.addEventListener('change', renderComparison);
    diffOnlyToggle?.addEventListener('change', renderComparison);

    renderComparison();
  },

  // 5. REVIEWS PAGE
  initReviewsPage() {
    const filterSelect = document.getElementById('reviews-bike-filter');
    const reviewsListContainer = document.getElementById('reviews-list-container');
    const reviewForm = document.getElementById('new-review-form');
    const formBikeSelect = document.getElementById('review-bike-select');
    const starRatingInput = document.getElementById('star-rating-input');

    // Populate bike selectors
    if (filterSelect) {
      filterSelect.innerHTML = `
        <option value="all">All Motorcycles</option>
        ${MOTO_BIKES.map(b => `<option value="${b.id}">${b.name}</option>`).join('')}
      `;
    }

    if (formBikeSelect) {
      formBikeSelect.innerHTML = `
        <option value="">Select Motorcycle</option>
        ${MOTO_BIKES.map(b => `<option value="${b.id}">${b.name}</option>`).join('')}
      `;
    }

    // Star rating picker in form
    let selectedRating = 5;
    if (starRatingInput) {
      const stars = starRatingInput.querySelectorAll('i');
      stars.forEach(s => {
        s.addEventListener('click', () => {
          selectedRating = Number(s.dataset.val);
          stars.forEach(st => {
            if (Number(st.dataset.val) <= selectedRating) {
              st.classList.add('active');
            } else {
              st.classList.remove('active');
            }
          });
        });
      });
    }

    const getAllReviews = () => {
      return [...this.customReviews, ...MOTO_REVIEWS];
    };

    const renderReviews = (filterBikeId = 'all') => {
      const all = getAllReviews();
      const filtered = filterBikeId === 'all' ? all : all.filter(r => r.bikeId === filterBikeId);

      if (reviewsListContainer) {
        if (filtered.length === 0) {
          reviewsListContainer.innerHTML = `
            <div class="text-center py-5 glass-panel">
              <i class="bi bi-chat-square-text text-muted display-4 mb-3"></i>
              <h5 class="fw-bold text-white">No Reviews Yet for this Bike</h5>
              <p class="text-muted small">Be the first to share your riding experience and impressions!</p>
            </div>
          `;
          return;
        }

        reviewsListContainer.innerHTML = filtered.map(r => `
          <div class="review-card">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="d-flex align-items-center gap-3">
                <img src="${r.userAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'}" 
                     alt="${r.userName}" class="rounded-circle" style="width: 48px; height: 48px; object-fit: cover;">
                <div>
                  <div class="fw-bold text-white">${r.userName} ${r.verified ? '<span class="badge bg-success small ms-1"><i class="bi bi-patch-check-fill"></i> Verified Rider</span>' : ''}</div>
                  <div class="text-muted small">${r.date} &bull; Reviewed <a href="details.html?id=${r.bikeId}" class="text-accent fw-bold">${r.bikeName}</a></div>
                </div>
              </div>
              <div class="text-amber">
                ${Array(5).fill(0).map((_, i) => `<i class="bi ${i < r.rating ? 'bi-star-fill' : 'bi-star'}"></i>`).join('')}
              </div>
            </div>
            <h6 class="fw-bold text-white mb-2">${r.title || 'Exceptional Machine!'}</h6>
            <p class="text-muted mb-3" style="font-size: 0.95rem;">${r.review}</p>
            ${r.pros ? `
              <div class="d-flex flex-wrap gap-2 mb-2">
                <span class="badge bg-emerald text-white"><i class="bi bi-plus-circle me-1"></i> Pros: ${r.pros}</span>
                ${r.cons ? `<span class="badge bg-secondary text-white"><i class="bi bi-dash-circle me-1"></i> Cons: ${r.cons}</span>` : ''}
              </div>
            ` : ''}
          </div>
        `).join('');
      }
    };

    filterSelect?.addEventListener('change', (e) => renderReviews(e.target.value));

    // Handle Form Submission
    reviewForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const bikeId = formBikeSelect.value;
      const userName = document.getElementById('review-name-input').value.trim();
      const title = document.getElementById('review-title-input').value.trim();
      const reviewText = document.getElementById('review-text-input').value.trim();
      const pros = document.getElementById('review-pros-input')?.value.trim() || '';
      const cons = document.getElementById('review-cons-input')?.value.trim() || '';

      if (!bikeId || !userName || !reviewText) {
        this.showToast('Please fill all required fields.', 'danger');
        return;
      }

      const targetBike = getBikeById(bikeId);

      const newReview = {
        id: `custom-rev-${Date.now()}`,
        bikeId: targetBike.id,
        bikeName: targetBike.name,
        userName: userName,
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        rating: selectedRating,
        date: 'Today',
        verified: true,
        title: title || 'Rider Experience',
        review: reviewText,
        pros: pros,
        cons: cons,
        helpfulCount: 0
      };

      this.customReviews.unshift(newReview);
      this.saveCustomReviews();

      // Close modal
      const modalEl = document.getElementById('writeReviewModal');
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();

      reviewForm.reset();
      this.showToast('Review submitted successfully!', 'success');
      renderReviews(filterSelect ? filterSelect.value : 'all');
    });

    renderReviews('all');
  },

  // 6. BRANDS PAGE
  initBrandsPage() {
    const brandsGrid = document.getElementById('brands-showcase-grid');
    const brandDetailSection = document.getElementById('brand-detail-section');

    if (!brandsGrid) return;

    brandsGrid.innerHTML = MOTO_BRANDS.map(br => {
      const count = getBikesByBrand(br.name).length;
      return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="glass-card p-4 h-100 d-flex flex-column text-center">
            <div class="brand-logo-pill mx-auto mb-3">${br.logoText}</div>
            <h4 class="fw-bold text-white mb-1">${br.name}</h4>
            <div class="text-accent small fw-bold mb-2">"${br.tagline}"</div>
            <p class="text-muted small mb-3 flex-grow-1">${br.description}</p>
            <div class="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-25 mt-auto">
              <span class="badge bg-surface-elevated text-muted">${br.origin} &bull; Est. ${br.founded}</span>
              <button class="btn-moto-outline py-1 px-3 small" onclick="MotoApp.showBrandDetail('${br.id}')">
                View ${count} Bike${count === 1 ? '' : 's'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  showBrandDetail(brandId) {
    const brand = getBrandById(brandId);
    const bikes = getBikesByBrand(brand.name);
    const target = document.getElementById('brand-detail-section');

    if (!target) return;

    target.innerHTML = `
      <div class="glass-panel p-4 p-md-5 mb-5">
        <div class="row align-items-center mb-4">
          <div class="col-auto">
            <div class="brand-logo-pill" style="width: 76px; height: 76px; font-size: 1rem;">${brand.logoText}</div>
          </div>
          <div class="col">
            <h3 class="fw-bold text-white mb-1">${brand.name} Lineup</h3>
            <div class="text-muted small">${brand.origin} &bull; ${brand.description}</div>
          </div>
        </div>
        <div class="row g-4">
          ${bikes.map(b => `
            <div class="col-12 col-md-6 col-lg-4">
              ${this.generateBikeCardHTML(b)}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    target.scrollIntoView({ behavior: 'smooth' });
    this.updateNavBadges();
  },

  // 7. ABOUT PAGE
  initAboutPage() {
    // Animated Counters on scroll
    const counters = document.querySelectorAll('.stat-counter');
    let animated = false;

    const runCounters = () => {
      if (animated) return;
      counters.forEach(c => {
        const target = Number(c.dataset.target);
        let count = 0;
        const speed = target / 40;
        const update = () => {
          count += speed;
          if (count < target) {
            c.textContent = Math.ceil(count);
            requestAnimationFrame(update);
          } else {
            c.textContent = target;
          }
        };
        update();
      });
      animated = true;
    };

    window.addEventListener('scroll', () => {
      const section = document.getElementById('about-stats-section');
      if (section) {
        const pos = section.getBoundingClientRect();
        if (pos.top < window.innerHeight - 100) {
          runCounters();
        }
      }
    });

    // Contact Form
    const contactForm = document.getElementById('about-contact-form');
    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.showToast('Thank you for your message! Our team will get back to you shortly.', 'success');
      contactForm.reset();
    });
  },

  // =========================================================================
  // HTML GENERATION TEMPLATES
  // =========================================================================

  generateBikeCardHTML(bike) {
    const isWishlisted = this.wishlist.includes(bike.id);
    const isCompared = this.compareList.includes(bike.id);

    return `
      <div class="bike-card">
        <div class="bike-card-image-wrap">
          <img src="${bike.primaryImage}" alt="${bike.name}" loading="lazy">
          <div class="bike-card-badges">
            ${bike.badge ? `<span class="bike-badge">${bike.badge}</span>` : ''}
            <span class="bike-badge bike-badge-category">${bike.category}</span>
          </div>
          <div class="bike-card-wishlist">
            <button class="btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                    data-bike-id="${bike.id}" 
                    onclick="MotoApp.toggleWishlist('${bike.id}', event)" 
                    title="Add to Wishlist">
              <i class="bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
            </button>
          </div>
        </div>

        <div class="bike-card-body">
          <div class="bike-brand-label">${bike.brand}</div>
          <h4 class="bike-title">
            <a href="details.html?id=${bike.id}" class="text-white">${bike.name}</a>
          </h4>

          <div class="bike-price-wrap">
            <span class="bike-price text-white">${bike.priceFormatted}</span>
            <span class="bike-price-sub text-muted">Ex-Showroom</span>
          </div>

          <div class="bike-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Engine</span>
              <span class="spec-value">${bike.engine.displacementFormatted}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Power</span>
              <span class="spec-value">${bike.engine.maxPower} PS</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Mileage</span>
              <span class="spec-value">${bike.performance.mileage} kmpl</span>
            </div>
          </div>

          <div class="bike-card-actions">
            <a href="details.html?id=${bike.id}" class="btn-moto-primary">
              View Details <i class="bi bi-arrow-right"></i>
            </a>
            <button class="btn-moto-outline ${isCompared ? 'border-primary text-primary' : ''}" 
                    onclick="MotoApp.toggleCompare('${bike.id}', event)" 
                    title="Add to Compare">
              <i class="bi bi-arrow-left-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  generateBikeListHTML(bike) {
    const isWishlisted = this.wishlist.includes(bike.id);

    return `
      <div class="col-12 mb-3">
        <div class="glass-card p-3 d-flex flex-column flex-md-row align-items-center gap-4">
          <div style="width: 100%; max-width: 240px; height: 160px; border-radius: 12px; overflow: hidden; position: relative;">
            <img src="${bike.primaryImage}" alt="${bike.name}" style="width: 100%; height: 100%; object-fit: cover;">
            <span class="bike-badge position-absolute top-2 start-2" style="font-size: 0.65rem;">${bike.category}</span>
          </div>

          <div class="flex-grow-1">
            <div class="bike-brand-label">${bike.brand}</div>
            <h4 class="fw-bold text-white mb-1">
              <a href="details.html?id=${bike.id}" class="text-white">${bike.name}</a>
            </h4>
            <p class="text-muted small mb-3">${bike.tagline}</p>
            <div class="d-flex flex-wrap gap-3 small text-muted">
              <span><i class="bi bi-lightning-charge text-accent"></i> ${bike.engine.displacementFormatted}</span>
              <span><i class="bi bi-speedometer text-cyan"></i> ${bike.engine.maxPower} PS</span>
              <span><i class="bi bi-fuel-pump text-emerald"></i> ${bike.performance.mileage} kmpl</span>
              <span><i class="bi bi-star-fill text-amber"></i> ${bike.rating} / 5</span>
            </div>
          </div>

          <div class="text-md-end d-flex flex-column gap-2" style="min-width: 180px;">
            <div class="bike-price fs-4 text-white">${bike.priceFormatted}</div>
            <div class="d-flex gap-2">
              <a href="details.html?id=${bike.id}" class="btn-moto-primary flex-grow-1 py-2 px-3 small">Details</a>
              <button class="btn-moto-outline py-2 px-3" onclick="MotoApp.toggleCompare('${bike.id}', event)">
                <i class="bi bi-arrow-left-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
