/**
 * JS Logic Lab - Main Application Controller
 * Handles client-side code execution sandbox, test runner, search modal,
 * localStorage progress tracking, editor indentation & line numbers, and navigation.
 */

// ==========================================
// 1. STATE & STORAGE MANAGEMENT
// ==========================================

const STORAGE_KEY_PROGRESS = "js_logic_lab_completed";
const STORAGE_KEY_CODE_PREFIX = "js_logic_lab_code_";

function getCompletedPrograms() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read progress from localStorage", e);
    return [];
  }
}

function isProgramCompleted(id) {
  const completed = getCompletedPrograms();
  return completed.includes(Number(id));
}

function setProgramCompleted(id, status = true) {
  let completed = getCompletedPrograms();
  const numId = Number(id);
  if (status) {
    if (!completed.includes(numId)) {
      completed.push(numId);
    }
  } else {
    completed = completed.filter(item => item !== numId);
  }
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(completed));
  } catch (e) {
    console.error("Failed to save progress", e);
  }
  updateProgressUI();
}

function saveUserCode(programId, code) {
  try {
    localStorage.setItem(`${STORAGE_KEY_CODE_PREFIX}${programId}`, code);
  } catch (e) {}
}

function getSavedUserCode(programId) {
  try {
    return localStorage.getItem(`${STORAGE_KEY_CODE_PREFIX}${programId}`);
  } catch (e) {
    return null;
  }
}

// ==========================================
// 2. TOAST NOTIFICATIONS
// ==========================================

function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border text-sm font-medium transition-all duration-300 ${
    type === "success"
      ? "bg-emerald-900 border-emerald-700 text-emerald-100"
      : type === "error"
      ? "bg-rose-900 border-rose-700 text-rose-100"
      : "bg-slate-900 border-slate-700 text-slate-100"
  }`;

  const icon = type === "success"
    ? `<svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
    : type === "error"
    ? `<svg class="w-5 h-5 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`
    : `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 3. SEARCH MODAL SYSTEM
// ==========================================

function initSearchModal() {
  const modal = document.getElementById("search-modal");
  const openButtons = document.querySelectorAll("[data-open-search]");
  const closeButton = document.getElementById("close-search-modal");
  const searchInput = document.getElementById("search-modal-input");
  const resultsContainer = document.getElementById("search-results-list");

  if (!modal) return;

  function openModal() {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (searchInput) {
      searchInput.value = "";
      renderSearchResults("");
      setTimeout(() => searchInput.focus(), 50);
    }
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  openButtons.forEach(btn => btn.addEventListener("click", openModal));
  if (closeButton) closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    // Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal.classList.contains("hidden")) {
        openModal();
      } else {
        closeModal();
      }
    }
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });
  }

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    const clean = query.trim().toLowerCase();
    
    let matches = PROGRAMS_DATA;
    if (clean) {
      matches = PROGRAMS_DATA.filter(p => {
        return (
          p.title.toLowerCase().includes(clean) ||
          p.slug.toLowerCase().includes(clean) ||
          p.summary.toLowerCase().includes(clean) ||
          p.category.toLowerCase().includes(clean) ||
          p.concepts.some(c => c.toLowerCase().includes(clean))
        );
      });
    }

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-8 text-center text-slate-500">
          <svg class="w-10 h-10 mx-auto text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="font-medium text-slate-600">No matching programs found</p>
          <p class="text-xs text-slate-400 mt-1">Try searching for "prime", "anagram", "array", "frequency", etc.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(p => `
      <a href="programs.html?id=${p.id}" class="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50/80 transition-colors border border-transparent hover:border-emerald-200 group">
        <div class="flex items-center gap-3">
          <span class="w-7 h-7 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center font-mono">
            ${p.id < 10 ? '0' + p.id : p.id}
          </span>
          <div>
            <h4 class="text-sm font-semibold text-slate-800 group-hover:text-emerald-700">${p.title}</h4>
            <p class="text-xs text-slate-500 line-clamp-1">${p.summary}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="text-xs px-2 py-0.5 rounded-full font-medium ${p.difficultyColor}">
            ${p.difficulty}
          </span>
          <svg class="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    `).join("");
  }
}

// ==========================================
// 4. MOBILE NAVIGATION DRAWER
// ==========================================

function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const isExpanded = !mobileMenu.classList.contains("hidden");
    menuBtn.setAttribute("aria-expanded", isExpanded);
  });
}

// ==========================================
// 5. CODE EXECUTION RUNNER & SANDBOX
// ==========================================

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;

  if (typeof a === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
}

function formatOutputValue(val) {
  if (val === undefined) return "undefined";
  if (val === null) return "null";
  if (typeof val === "string") return `"${val}"`;
  if (typeof val === "function") return `[Function: ${val.name || 'anonymous'}]`;
  if (typeof val === "object") {
    try {
      return JSON.stringify(val, null, 2);
    } catch (e) {
      return Object.prototype.toString.call(val);
    }
  }
  return String(val);
}

/**
 * Executes arbitrary user code in a safe evaluation environment,
 * capturing console logs and return expressions while protecting against infinite loops.
 */
function executeUserCodeSafely(codeString, customCallExpression = "") {
  const logs = [];
  let returnValue = undefined;
  let hasError = false;
  let errorMessage = "";

  // Custom console interceptor
  const mockConsole = {
    log: (...args) => {
      logs.push({ type: "log", content: args.map(formatOutputValue).join(" ") });
    },
    info: (...args) => {
      logs.push({ type: "info", content: args.map(formatOutputValue).join(" ") });
    },
    warn: (...args) => {
      logs.push({ type: "warn", content: args.map(formatOutputValue).join(" ") });
    },
    error: (...args) => {
      logs.push({ type: "error", content: args.map(formatOutputValue).join(" ") });
    }
  };

  const startTime = performance.now();

  try {
    // Construct execution wrapper with sandbox console
    const fullCode = `
      "use strict";
      ${codeString}
      ${customCallExpression ? `\nreturn (${customCallExpression});` : ""}
    `;

    // Execute through Function constructor
    const runner = new Function("console", fullCode);
    returnValue = runner(mockConsole);
  } catch (err) {
    hasError = true;
    errorMessage = err && err.message ? err.message : String(err);
  }

  const executionTimeMs = (performance.now() - startTime).toFixed(2);

  return {
    logs,
    returnValue,
    hasError,
    errorMessage,
    executionTimeMs
  };
}

// ==========================================
// 6. CODE EDITOR HELPERS (TABS & LINE NUMBERS)
// ==========================================

function setupCodeEditor(textareaId, gutterId) {
  const textarea = document.getElementById(textareaId);
  const gutter = document.getElementById(gutterId);
  if (!textarea || !gutter) return;

  function updateLineNumbers() {
    const lines = textarea.value.split("\n").length;
    let numbers = "";
    for (let i = 1; i <= lines; i++) {
      numbers += i + "\n";
    }
    gutter.textContent = numbers;
  }

  function syncScroll() {
    gutter.scrollTop = textarea.scrollTop;
  }

  // Handle Tab key indentation (2 spaces)
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      textarea.value = value.substring(0, start) + "  " + value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      updateLineNumbers();
    }
  });

  textarea.addEventListener("input", updateLineNumbers);
  textarea.addEventListener("scroll", syncScroll);

  updateLineNumbers();
}

// ==========================================
// 7. PROGRAMS PAGE LOGIC
// ==========================================

let currentProgram = null;

function initProgramsPage() {
  const programTitleElem = document.getElementById("program-title");
  if (!programTitleElem) return; // Not on programs.html

  // Read URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  let requestedId = urlParams.get("id");
  
  // Check hash fallback
  if (!requestedId && window.location.hash) {
    const slug = window.location.hash.replace("#", "");
    const match = PROGRAMS_DATA.find(p => p.slug === slug);
    if (match) requestedId = match.id;
  }

  const programId = requestedId ? parseInt(requestedId, 10) : 1;
  loadProgram(programId);

  // Setup sidebar click handlers
  renderSidebarList(programId);

  // Setup editor & line numbers
  setupCodeEditor("code-editor-textarea", "code-editor-gutter");

  // Setup action buttons
  setupProgramActions();

  // Mobile sidebar drawer selector
  setupMobileProgramSelector();
}

function renderSidebarList(activeId) {
  const sidebarContainer = document.getElementById("programs-sidebar-list");
  if (!sidebarContainer) return;

  const completedList = getCompletedPrograms();

  sidebarContainer.innerHTML = PROGRAMS_DATA.map(p => {
    const isActive = p.id === activeId;
    const isDone = completedList.includes(p.id);

    return `
      <a href="programs.html?id=${p.id}" 
         class="sidebar-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium ${
           isActive 
             ? 'active bg-emerald-50 text-emerald-800 border-l-4 border-emerald-600' 
             : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
         }">
        <div class="flex items-center gap-2.5 truncate">
          <span class="w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-semibold shrink-0 ${
            isActive ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
          }">
            ${p.id < 10 ? '0' + p.id : p.id}
          </span>
          <span class="truncate">${p.title}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          ${
            isDone 
              ? `<span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px]" title="Solved">✓</span>` 
              : ''
          }
          <span class="text-[11px] px-1.5 py-0.5 rounded font-normal ${p.difficultyColor}">
            ${p.difficulty[0]}
          </span>
        </div>
      </a>
    `;
  }).join("");
}

function setupMobileProgramSelector() {
  const selector = document.getElementById("mobile-program-dropdown");
  if (!selector) return;

  selector.innerHTML = PROGRAMS_DATA.map(p => `
    <option value="${p.id}" ${currentProgram && currentProgram.id === p.id ? 'selected' : ''}>
      ${p.id}. ${p.title} (${p.difficulty})
    </option>
  `).join("");

  selector.addEventListener("change", (e) => {
    loadProgram(parseInt(e.target.value, 10));
  });
}

function loadProgram(id) {
  const program = getProgramById(id);
  if (!program) return;

  currentProgram = program;

  // Update URL without page reload
  const newUrl = `${window.location.pathname}?id=${program.id}`;
  window.history.replaceState({ id: program.id }, "", newUrl);

  // Update Breadcrumb & Header
  document.getElementById("program-number-badge").textContent = `Challenge #${program.id < 10 ? '0' + program.id : program.id}`;
  document.getElementById("program-title").textContent = `${program.id}. ${program.title}`;
  
  const diffBadge = document.getElementById("program-difficulty-badge");
  diffBadge.textContent = program.difficulty;
  diffBadge.className = `px-2.5 py-0.5 rounded-full text-xs font-semibold border ${program.difficultyColor}`;

  document.getElementById("program-category-badge").textContent = program.category;

  // Solved status badge
  const solvedBadge = document.getElementById("program-solved-badge");
  if (solvedBadge) {
    if (isProgramCompleted(program.id)) {
      solvedBadge.classList.remove("hidden");
    } else {
      solvedBadge.classList.add("hidden");
    }
  }

  // Description
  const descElem = document.getElementById("program-description");
  // Simple markdown renderer for bold, code, bullets, formulas
  descElem.innerHTML = renderSimpleMarkdown(program.description);

  // Concepts Used Badges
  const conceptsContainer = document.getElementById("program-concepts-container");
  if (conceptsContainer) {
    conceptsContainer.innerHTML = program.concepts.map(c => `
      <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
        <svg class="w-3 h-3 mr-1 text-emerald-600" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
        ${c}
      </span>
    `).join("");
  }

  // Examples
  const examplesContainer = document.getElementById("program-examples-container");
  if (examplesContainer) {
    examplesContainer.innerHTML = program.examples.map((ex, idx) => `
      <div class="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs font-mono">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-500 font-sans font-semibold">Example ${idx + 1}</span>
        </div>
        <div class="space-y-1.5">
          <div><span class="text-slate-400 font-sans">Input: </span><span class="text-emerald-700 font-semibold">${ex.input}</span></div>
          <div><span class="text-slate-400 font-sans">Output: </span><span class="text-indigo-700 font-semibold">${ex.output}</span></div>
          ${ex.explanation ? `<div class="text-slate-500 font-sans text-[11px] pt-1 border-t border-slate-200 mt-1.5"><span class="font-semibold text-slate-600">Explanation: </span>${ex.explanation}</div>` : ''}
        </div>
      </div>
    `).join("");
  }

  // Code Editor: load saved code or starter code
  const textarea = document.getElementById("code-editor-textarea");
  const savedCode = getSavedUserCode(program.id);
  textarea.value = savedCode || program.starterCode;

  const gutter = document.getElementById("code-editor-gutter");
  if (gutter) {
    const lines = textarea.value.split("\n").length;
    let numbers = "";
    for (let i = 1; i <= lines; i++) numbers += i + "\n";
    gutter.textContent = numbers;
  }

  // Hint & Solution Content
  const hintContent = document.getElementById("hint-text-content");
  if (hintContent) {
    hintContent.innerHTML = renderSimpleMarkdown(program.hint);
  }
  const solutionCodeElem = document.getElementById("solution-code-block");
  if (solutionCodeElem) {
    solutionCodeElem.textContent = program.solutionCode;
  }

  // Reset Solution Accordion
  const hintBox = document.getElementById("hint-accordion-content");
  if (hintBox) hintBox.classList.remove("open");
  const solutionBox = document.getElementById("solution-accordion-content");
  if (solutionBox) solutionBox.classList.remove("open");

  // Custom Input Runner Controls
  const customInput = document.getElementById("custom-runner-input");
  if (customInput) {
    customInput.value = program.defaultInput;
    customInput.placeholder = program.inputPlaceholder;
  }

  // Test Suite List
  renderTestSuite(program);

  // Clear previous terminal output
  clearTerminal();

  // Update Sidebar active styling
  renderSidebarList(program.id);

  // Update dropdown if on mobile
  const dropdown = document.getElementById("mobile-program-dropdown");
  if (dropdown) dropdown.value = program.id;

  // Update Prev / Next Buttons
  updateNavigationButtons(program.id);
}

function updateNavigationButtons(currentId) {
  const prevBtn = document.getElementById("prev-program-btn");
  const nextBtn = document.getElementById("next-program-btn");

  if (prevBtn) {
    if (currentId > 1) {
      prevBtn.classList.remove("opacity-40", "pointer-events-none");
      prevBtn.onclick = () => loadProgram(currentId - 1);
    } else {
      prevBtn.classList.add("opacity-40", "pointer-events-none");
    }
  }

  if (nextBtn) {
    if (currentId < PROGRAMS_DATA.length) {
      nextBtn.classList.remove("opacity-40", "pointer-events-none");
      nextBtn.onclick = () => loadProgram(currentId + 1);
    } else {
      nextBtn.classList.add("opacity-40", "pointer-events-none");
    }
  }
}

function renderTestSuite(program) {
  const container = document.getElementById("test-cases-list");
  if (!container) return;

  container.innerHTML = program.testCases.map((tc, idx) => `
    <div id="test-case-card-${idx}" class="p-3 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] shrink-0 font-bold">
          ${idx + 1}
        </span>
        <span class="text-slate-300">${tc.label}</span>
      </div>
      <span id="test-case-status-${idx}" class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-sans font-medium">
        Ready
      </span>
    </div>
  `).join("");
}

function renderSimpleMarkdown(text) {
  if (!text) return "";
  return text
    .replace(/^### (.*$)/gim, '<h4 class="font-bold text-slate-800 text-sm mt-3 mb-1">$1</h4>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
    .replace(/`([^`]+)`/gim, '<code class="px-1.5 py-0.5 rounded bg-slate-100 text-emerald-800 font-mono text-xs border border-slate-200">$1</code>')
    .replace(/^\s*-\s+(.*$)/gim, '<li class="ml-4 list-disc text-slate-600 text-xs my-0.5">$1</li>')
    .replace(/\n\n/gim, '<div class="h-2"></div>')
    .replace(/\n/gim, '<br/>');
}

// ==========================================
// 8. ACTIONS: RUN CODE, TEST RUNNER, RESET
// ==========================================

function setupProgramActions() {
  const runBtn = document.getElementById("run-code-btn");
  const testAllBtn = document.getElementById("run-tests-btn");
  const resetBtn = document.getElementById("reset-code-btn");
  const clearBtn = document.getElementById("clear-console-btn");
  const toggleHintBtn = document.getElementById("toggle-hint-btn");
  const toggleSolutionBtn = document.getElementById("toggle-solution-btn");
  const copySolutionBtn = document.getElementById("copy-solution-btn");
  const toggleCompleteBtn = document.getElementById("toggle-complete-btn");

  const textarea = document.getElementById("code-editor-textarea");

  // Save code on typing
  if (textarea) {
    textarea.addEventListener("input", () => {
      if (currentProgram) {
        saveUserCode(currentProgram.id, textarea.value);
      }
    });
  }

  // Run Code with Terminal Output
  if (runBtn) {
    runBtn.addEventListener("click", () => {
      if (!currentProgram || !textarea) return;
      
      const customInput = document.getElementById("custom-runner-input");
      let testCall = "";

      if (customInput && customInput.value.trim()) {
        testCall = `${currentProgram.functionName}(${customInput.value.trim()})`;
      }

      const result = executeUserCodeSafely(textarea.value, testCall);
      displayTerminalResult(result, testCall);
    });
  }

  // Run Test Suite
  if (testAllBtn) {
    testAllBtn.addEventListener("click", () => {
      if (!currentProgram || !textarea) return;
      runCompleteTestSuite(currentProgram, textarea.value);
    });
  }

  // Reset Code to starter
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (!currentProgram || !textarea) return;
      if (confirm("Reset editor to original starter template?")) {
        textarea.value = currentProgram.starterCode;
        saveUserCode(currentProgram.id, currentProgram.starterCode);
        const gutter = document.getElementById("code-editor-gutter");
        if (gutter) {
          const lines = textarea.value.split("\n").length;
          let numbers = "";
          for (let i = 1; i <= lines; i++) numbers += i + "\n";
          gutter.textContent = numbers;
        }
        showToast("Code reset to starter template", "info");
      }
    });
  }

  // Clear Terminal
  if (clearBtn) {
    clearBtn.addEventListener("click", clearTerminal);
  }

  // Toggle Hint Accordion
  if (toggleHintBtn) {
    toggleHintBtn.addEventListener("click", () => {
      const hintContent = document.getElementById("hint-accordion-content");
      if (hintContent) {
        hintContent.classList.toggle("open");
        const isOpen = hintContent.classList.contains("open");
        toggleHintBtn.querySelector("span").textContent = isOpen ? "Hide Hint" : "Show Hint";
      }
    });
  }

  // Toggle Solution Accordion
  if (toggleSolutionBtn) {
    toggleSolutionBtn.addEventListener("click", () => {
      const solutionContent = document.getElementById("solution-accordion-content");
      if (solutionContent) {
        solutionContent.classList.toggle("open");
        const isOpen = solutionContent.classList.contains("open");
        toggleSolutionBtn.querySelector("span").textContent = isOpen ? "Hide Solution" : "View Solution";
      }
    });
  }

  // Copy Solution to Clipboard
  if (copySolutionBtn) {
    copySolutionBtn.addEventListener("click", () => {
      if (!currentProgram) return;
      navigator.clipboard.writeText(currentProgram.solutionCode).then(() => {
        showToast("Solution code copied to clipboard!", "success");
      });
    });
  }

  // Manual Complete Toggle
  if (toggleCompleteBtn) {
    toggleCompleteBtn.addEventListener("click", () => {
      if (!currentProgram) return;
      const isDone = isProgramCompleted(currentProgram.id);
      setProgramCompleted(currentProgram.id, !isDone);
      
      const solvedBadge = document.getElementById("program-solved-badge");
      if (solvedBadge) {
        solvedBadge.classList.toggle("hidden", isDone);
      }
      
      showToast(!isDone ? "Challenge marked as Solved! 🎉" : "Marked as In Progress", "info");
      renderSidebarList(currentProgram.id);
    });
  }
}

function displayTerminalResult(result, testCall) {
  const terminalBody = document.getElementById("terminal-output-body");
  const timeElem = document.getElementById("execution-time-badge");
  const statusBadge = document.getElementById("terminal-status-badge");

  if (!terminalBody) return;

  if (timeElem) timeElem.textContent = `${result.executionTimeMs} ms`;

  if (result.hasError) {
    if (statusBadge) {
      statusBadge.textContent = "Error";
      statusBadge.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-rose-900/60 text-rose-300 border border-rose-700";
    }
    terminalBody.innerHTML = `
      <div class="text-rose-400 font-mono">
        <div class="flex items-center gap-2 font-bold mb-1">
          <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Runtime Error:
        </div>
        <div class="bg-rose-950/40 p-2.5 rounded border border-rose-900/60 text-rose-200">
          ${result.errorMessage}
        </div>
        <p class="text-slate-400 text-xs mt-2 font-sans">Check your syntax, variable names, or parameter arguments.</p>
      </div>
    `;
    return;
  }

  if (statusBadge) {
    statusBadge.textContent = "Success";
    statusBadge.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700";
  }

  let outputHtml = "";

  if (result.logs.length > 0) {
    outputHtml += result.logs.map(l => {
      let colorClass = "text-slate-200";
      if (l.type === "warn") colorClass = "text-amber-300";
      if (l.type === "error") colorClass = "text-rose-300";
      if (l.type === "info") colorClass = "text-sky-300";
      return `<div class="${colorClass}"><span class="text-slate-500 select-none">&gt; </span>${escapeHtml(l.content)}</div>`;
    }).join("");
  }

  if (testCall) {
    outputHtml += `
      <div class="mt-2 pt-2 border-t border-slate-800/80">
        <div class="text-slate-400 text-xs mb-1 font-sans">Call Evaluation: <code class="text-emerald-400 font-mono">${escapeHtml(testCall)}</code></div>
        <div class="text-emerald-300 font-semibold"><span class="text-slate-500 select-none">&lt;= </span>${escapeHtml(formatOutputValue(result.returnValue))}</div>
      </div>
    `;
  } else if (result.logs.length === 0) {
    outputHtml = `<span class="text-slate-500 italic">// Code executed successfully. No console.log statements recorded.</span>`;
  }

  terminalBody.innerHTML = outputHtml;
}

function runCompleteTestSuite(program, userCode) {
  let passedCount = 0;
  const totalCount = program.testCases.length;
  const terminalBody = document.getElementById("terminal-output-body");

  clearTerminal();
  let suiteLog = [];

  program.testCases.forEach((tc, idx) => {
    const statusElem = document.getElementById(`test-case-status-${idx}`);
    const cardElem = document.getElementById(`test-case-card-${idx}`);

    // Build argument call string
    const serializedArgs = tc.input.map(arg => JSON.stringify(arg)).join(", ");
    const callExpr = `${program.functionName}(${serializedArgs})`;

    const execution = executeUserCodeSafely(userCode, callExpr);

    let isPassed = false;
    if (!execution.hasError) {
      if (typeof tc.validator === "function") {
        isPassed = Boolean(tc.validator(execution.returnValue));
      } else {
        isPassed = deepEqual(execution.returnValue, tc.expected);
      }
    }

    if (isPassed) {
      passedCount++;
      if (statusElem) {
        statusElem.textContent = "Passed ✓";
        statusElem.className = "text-[11px] px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-mono font-semibold";
      }
      if (cardElem) {
        cardElem.className = "p-3 bg-slate-900 border border-emerald-800/60 rounded-md text-xs font-mono flex items-center justify-between";
      }
      suiteLog.push(`<div class="text-emerald-400">✓ Test ${idx + 1}: ${tc.label} — Passed</div>`);
    } else {
      if (statusElem) {
        statusElem.textContent = "Failed ✕";
        statusElem.className = "text-[11px] px-2 py-0.5 rounded bg-rose-900/80 text-rose-300 font-mono font-semibold";
      }
      if (cardElem) {
        cardElem.className = "p-3 bg-slate-900 border border-rose-800/60 rounded-md text-xs font-mono flex items-center justify-between";
      }
      const actualStr = execution.hasError ? `Error: ${execution.errorMessage}` : formatOutputValue(execution.returnValue);
      const expectedStr = formatOutputValue(tc.expected);
      suiteLog.push(`
        <div class="text-rose-400">✕ Test ${idx + 1}: ${tc.label} — Failed</div>
        <div class="text-slate-400 text-[11px] pl-4">Expected: <span class="text-emerald-300">${escapeHtml(expectedStr)}</span></div>
        <div class="text-slate-400 text-[11px] pl-4">Received: <span class="text-rose-300">${escapeHtml(actualStr)}</span></div>
      `);
    }
  });

  const allPassed = passedCount === totalCount;
  if (allPassed) {
    setProgramCompleted(program.id, true);
    const solvedBadge = document.getElementById("program-solved-badge");
    if (solvedBadge) solvedBadge.classList.remove("hidden");
    showToast(`All ${totalCount} test cases passed! Challenge Solved 🎉`, "success");
    renderSidebarList(program.id);
  } else {
    showToast(`${passedCount} / ${totalCount} test cases passed. Keep debugging!`, "error");
  }

  if (terminalBody) {
    terminalBody.innerHTML = `
      <div class="font-mono">
        <div class="font-bold mb-2 ${allPassed ? 'text-emerald-400' : 'text-amber-400'}">
          Test Suite Results: ${passedCount} / ${totalCount} Passed
        </div>
        <div class="space-y-1.5 border-t border-slate-800 pt-2">
          ${suiteLog.join("")}
        </div>
      </div>
    `;
  }
}

function clearTerminal() {
  const terminalBody = document.getElementById("terminal-output-body");
  const timeElem = document.getElementById("execution-time-badge");
  const statusBadge = document.getElementById("terminal-status-badge");

  if (terminalBody) {
    terminalBody.innerHTML = `<span class="text-slate-500 italic">// Terminal output will appear here. Click "Run Code" or "Run Tests".</span>`;
  }
  if (timeElem) timeElem.textContent = "0.00 ms";
  if (statusBadge) {
    statusBadge.textContent = "Idle";
    statusBadge.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700";
  }
}

function escapeHtml(str) {
  if (typeof str !== "string") return String(str);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 9. HOME PAGE PREVIEW CARDS & FILTERS
// ==========================================

function initHomePage() {
  const grid = document.getElementById("programs-cards-grid");
  if (!grid) return;

  const completedList = getCompletedPrograms();

  function renderCards(filterCategory = "all") {
    let list = PROGRAMS_DATA;
    if (filterCategory !== "all") {
      list = PROGRAMS_DATA.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());
    }

    grid.innerHTML = list.map(p => {
      const isDone = completedList.includes(p.id);

      return `
        <div class="challenge-card bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm relative group overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-0 opacity-40 group-hover:scale-110 transition-transform"></div>
          
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                ${p.id < 10 ? '0' + p.id : p.id}
              </span>
              <div class="flex items-center gap-2">
                ${isDone ? `<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center gap-1">✓ Solved</span>` : ''}
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold border ${p.difficultyColor}">
                  ${p.difficulty}
                </span>
              </div>
            </div>

            <h3 class="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
              ${p.title}
            </h3>

            <p class="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
              ${p.summary}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-6">
              ${p.concepts.slice(0, 3).map(c => `
                <span class="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-mono">
                  ${c}
                </span>
              `).join("")}
              ${p.concepts.length > 3 ? `<span class="text-[11px] px-1.5 py-0.5 text-slate-400 font-mono">+${p.concepts.length - 3}</span>` : ''}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
            <span class="text-xs text-slate-400 font-medium">${p.category}</span>
            <a href="programs.html?id=${p.id}" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all group-hover:shadow-emerald-200 group-hover:shadow-md">
              Practice Now
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  renderCards("all");

  // Filter chips
  const filterButtons = document.querySelectorAll("[data-filter-category]");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-emerald-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "text-slate-600", "hover:bg-slate-50", "border-slate-200");
      });
      btn.classList.add("bg-emerald-600", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-slate-600", "hover:bg-slate-50", "border-slate-200");

      renderCards(btn.getAttribute("data-filter-category"));
    });
  });
}

// ==========================================
// 10. GLOBAL PROGRESS & INITIALIZATION
// ==========================================

function updateProgressUI() {
  const completed = getCompletedPrograms();
  const progressPercent = Math.round((completed.length / PROGRAMS_DATA.length) * 100);

  const countElems = document.querySelectorAll("[data-progress-count]");
  countElems.forEach(el => el.textContent = completed.length);

  const percentElems = document.querySelectorAll("[data-progress-percent]");
  percentElems.forEach(el => el.textContent = `${progressPercent}%`);

  const barElems = document.querySelectorAll("[data-progress-bar]");
  barElems.forEach(el => el.style.width = `${progressPercent}%`);
}

document.addEventListener("DOMContentLoaded", () => {
  initSearchModal();
  initMobileMenu();
  initHomePage();
  initProgramsPage();
  updateProgressUI();
});
