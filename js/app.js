/* CARTE - Michelin Culinary Guide - Modular JavaScript Application Engine */

// Default Seed Library with 3-Star Michelin Flagship Dishes
var DEFAULT_LIBRARY = [
  {
    id: "duck-breast-michelin",
    title: "Pan-Seared Duck Breast",
    description: "Cherry gastrique, charred endive, potato fondant",
    category: "Mains",
    stars: 3,
    servings: 2,
    time: "50 min",
    wine: "2018 Domaine Dujac Morey-Saint-Denis Premier Cru",
    equipment: ["Heavy cast-iron skillet", "Chef knife", "Ring mold cutter", "Fine chinois strainer"],
    ingredients: [
      "2 duck breasts, skin on",
      "300g cherries, pitted",
      "60ml red wine vinegar",
      "50g sugar",
      "2 endives, halved",
      "2 large potatoes",
      "100g duck fat or butter",
      "200ml veal stock",
      "Fresh thyme and rosemary",
      "Maldon sea salt"
    ],
    steps: [
      { text: "Score duck skin in a crosshatch pattern without piercing flesh, season generously, and rest at room temperature for 20 minutes." },
      { text: "Cut potatoes into neat cylinders, sear in butter, then braise with veal stock and thyme for 25 minutes [timer: 25m] until tender." },
      { text: "Place duck skin-side down in a cold skillet. Render over medium-low heat for 12 minutes [timer: 12m] until dark golden brown, flipping to finish for 2 minutes." },
      { text: "Simmer cherries, red wine vinegar, and sugar in a small saucepan for 15 minutes [timer: 15m] until thick, glossy gastrique forms." },
      { text: "Sear endive halves cut-side down in duck fat for 4 minutes [timer: 4m] until caramelized. Rest duck 8 minutes before slicing." }
    ],
    chefNote: "Ensure the cast-iron pan starts completely cold when rendering duck skin for maximum crispiness.",
    tags: ["Signature", "French Classic", "Poularde"],
    photo: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "scallop-carpaccio",
    title: "Hokkaido Scallop Carpaccio",
    description: "Yuzu vinaigrette, finger lime pearls, radish ribbons & chive oil",
    category: "Starters",
    stars: 3,
    servings: 4,
    time: "20 min",
    wine: "2020 Domaine Leflaive Puligny-Montrachet",
    equipment: ["Mandoline slicer", "Plating tweezers", "Squeeze bottle for chive oil"],
    ingredients: [
      "12 fresh sashmimi-grade Hokkaido scallops",
      "2 finger limes",
      "30ml yuzu juice",
      "40ml extra virgin olive oil",
      "2 watermelon radishes, thinly shaved",
      "Fresh chives and microgreens",
      "Fleur de sel"
    ],
    steps: [
      { text: "Freeze scallops for 10 minutes [timer: 10m] to firm up, then slice paper-thin with a sharp knife." },
      { text: "Whisk yuzu juice with olive oil and a pinch of fleur de sel." },
      { text: "Arrange scallop slices in a single overlapping layer on chilled porcelain plates." },
      { text: "Garnish with finger lime pearls, shaved radish ribbons, and drizzle with chive oil right before serving." }
    ],
    chefNote: "Keep porcelain plates in the freezer for 15 minutes before plating to maintain scallop temperature.",
    tags: ["Raw", "Seafood", "Japanese Fusion"],
    photo: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "souffle-grand-marnier",
    title: "Grand Marnier Soufflé",
    description: "Crème anglaise, candied orange peel & vanilla bean dust",
    category: "Desserts",
    stars: 3,
    servings: 4,
    time: "45 min",
    wine: "2015 Château d'Yquem Sauternes",
    equipment: ["Copper soufflé ramekins", "Stand mixer with whisk attachment", "Pastry brush"],
    ingredients: [
      "4 egg yolks",
      "6 egg whites",
      "50g unsalted butter, softened",
      "60g sugar + extra for dusting ramekins",
      "45ml Grand Marnier liqueur",
      "30g all-purpose flour",
      "250ml whole milk",
      "1 vanilla bean, split & scraped"
    ],
    steps: [
      { text: "Brush ramekins with softened butter using upward vertical strokes, then coat thoroughly with sugar." },
      { text: "Prepare pastry cream base with milk, vanilla bean, egg yolks, flour, and Grand Marnier. Cool slightly." },
      { text: "Whip egg whites with 60g sugar to glossy medium peaks." },
      { text: "Fold 1/3 of whipped whites into pastry cream to lighten, then gently fold remaining whites." },
      { text: "Fill ramekins, level top with a spatula, and bake at 190°C for 14 minutes [timer: 14m] without opening oven door." }
    ],
    chefNote: "Do not open oven door during the first 12 minutes of baking to prevent soufflés from collapsing.",
    tags: ["Pastry", "French Dessert"],
    photo: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=80"
  }
];

// App State Architecture
var state = {
  theme: localStorage.getItem("carte_theme") || "chocolate-nero",
  recipes: loadStoredRecipes(),
  activeCategory: "All",
  activeId: null,
  searchQuery: "",
  unitSystem: "metric", // metric or imperial
  servingMultiplier: 1,
  view: "list", // list, detail, edit, cooking
  draft: null,
  cookingStepIdx: 0,
  activeTimer: null // { label, secRemaining, totalSec, isRunning, intervalId }
};

function loadStoredRecipes() {
  try {
    var stored = localStorage.getItem("carte_recipes_v2");
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return JSON.parse(JSON.stringify(DEFAULT_LIBRARY));
}

function saveStoredRecipes() {
  localStorage.setItem("carte_recipes_v2", JSON.stringify(state.recipes));
}

function esc(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function allCategories() {
  var set = {};
  state.recipes.forEach(function(r) {
    if (r.category) set[r.category] = true;
  });
  return Object.keys(set).sort();
}

function findRecipe(id) {
  return state.recipes.find(function(r) { return r.id === id; });
}

function filteredRecipes() {
  var q = state.searchQuery.toLowerCase().trim();
  return state.recipes.filter(function(r) {
    var matchCat = (state.activeCategory === "All" || r.category === state.activeCategory);
    var matchSearch = !q || r.title.toLowerCase().includes(q) || (r.description && r.description.toLowerCase().includes(q)) || (r.ingredients && r.ingredients.some(function(i){ return i.toLowerCase().includes(q); }));
    return matchCat && matchSearch;
  });
}

// Unit Conversion Logic (Metric <-> Imperial)
function convertQuantityUnit(text, toSystem) {
  if (!text) return "";
  if (toSystem === "metric") return text;

  return text.replace(/(\d+(?:\.\d+)?)\s*(g|kg|ml|l|cm|°c)\b/gi, function(match, num, unit) {
    var val = parseFloat(num);
    var u = unit.toLowerCase();
    if (u === "g") return Math.round(val * 0.035274 * 10) / 10 + " oz";
    if (u === "kg") return Math.round(val * 2.20462 * 10) / 10 + " lbs";
    if (u === "ml") return Math.round(val * 0.033814 * 10) / 10 + " fl oz";
    if (u === "l") return Math.round(val * 33.814 * 10) / 10 + " fl oz";
    if (u === "cm") return Math.round(val * 0.393701 * 10) / 10 + " in";
    if (u === "°c") return Math.round((val * 9/5) + 32) + "°F";
    return match;
  });
}

// Portion Scaling Logic
function scaleIngredient(text, multiplier) {
  if (multiplier === 1 || !text) return text;
  return text.replace(/(\d+(?:\.\d+)?)/g, function(match, num) {
    var val = parseFloat(num);
    var scaled = Math.round(val * multiplier * 10) / 10;
    return scaled;
  });
}

// Non-Flickering Timer Engine
function startTimer(seconds, label) {
  if (state.activeTimer && state.activeTimer.intervalId) {
    clearInterval(state.activeTimer.intervalId);
  }

  state.activeTimer = {
    label: label || "Timer",
    secRemaining: seconds,
    totalSec: seconds,
    isRunning: true,
    intervalId: null
  };

  state.activeTimer.intervalId = setInterval(function() {
    if (state.activeTimer && state.activeTimer.isRunning) {
      state.activeTimer.secRemaining--;
      if (state.activeTimer.secRemaining <= 0) {
        state.activeTimer.secRemaining = 0;
        state.activeTimer.isRunning = false;
        clearInterval(state.activeTimer.intervalId);
        playTimerBellSound();
      }
      updateTimerWidgetDOM(); // TARGETED DOM UPDATE ONLY (NO FLICKER!)
    }
  }, 1000);

  updateTimerWidgetDOM();
}

function toggleTimer() {
  if (!state.activeTimer) return;
  state.activeTimer.isRunning = !state.activeTimer.isRunning;
  updateTimerWidgetDOM();
}

function resetTimer() {
  if (!state.activeTimer) return;
  state.activeTimer.secRemaining = state.activeTimer.totalSec;
  updateTimerWidgetDOM();
}

function stopTimer() {
  if (state.activeTimer && state.activeTimer.intervalId) {
    clearInterval(state.activeTimer.intervalId);
  }
  state.activeTimer = null;
  var el = document.getElementById("timer-floating-widget");
  if (el) el.classList.add("hidden");
}

function updateTimerWidgetDOM() {
  var el = document.getElementById("timer-floating-widget");
  if (!el) return;

  if (!state.activeTimer) {
    el.classList.add("hidden");
    return;
  }

  el.classList.remove("hidden");
  var m = Math.floor(state.activeTimer.secRemaining / 60);
  var s = state.activeTimer.secRemaining % 60;
  var timeStr = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);

  var labelEl = el.querySelector(".timer-label");
  var digitsEl = el.querySelector(".timer-digits");
  var toggleBtn = el.querySelector("[data-action='timer-toggle']");

  if (labelEl) labelEl.textContent = state.activeTimer.label;
  if (digitsEl) digitsEl.textContent = timeStr;
  if (toggleBtn) toggleBtn.textContent = state.activeTimer.isRunning ? "Pause" : "Start";
}

function playTimerBellSound() {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.5);
  } catch(e) {}
}

// Rendering Logic
function renderApp() {
  document.documentElement.setAttribute("data-theme", state.theme);
  var root = document.getElementById("app-root");
  if (!root) return;

  var html = '<div class="sidebar">';
  html += '  <div class="brand">';
  html += '    <div class="brand-title">Carte <span>★★★</span></div>';
  html += '    <div class="brand-subtitle">Michelin Culinary Guide</div>';
  html += '  </div>';

  // Theme Switcher (Chocolate/Nero vs Midnight Navy/Titanium)
  html += '  <div class="theme-switcher">';
  html += '    <button class="theme-btn ' + (state.theme === "chocolate-nero" ? "active" : "") + '" data-action="set-theme" data-theme="chocolate-nero">🍫 Chocolate</button>';
  html += '    <button class="theme-btn ' + (state.theme === "metal-navy" ? "active" : "") + '" data-action="set-theme" data-theme="metal-navy">⚡ Navy Steel</button>';
  html += '  </div>';

  html += '  <input class="search-input" id="search-box" type="text" placeholder="Search culinary guide..." value="' + esc(state.searchQuery) + '">';
  html += '  <button class="new-recipe-btn" data-action="new-recipe">+ New Recipe</button>';

  html += '  <div class="nav-categories">';
  html += '    <div class="nav-item ' + (state.activeCategory === "All" ? "active" : "") + '" data-action="set-cat" data-cat="All">';
  html += '      <span>All Creations</span>';
  html += '      <span class="cat-count">' + state.recipes.length + '</span>';
  html += '    </div>';

  allCategories().forEach(function(c) {
    var cnt = state.recipes.filter(function(r){ return r.category === c; }).length;
    html += '    <div class="nav-item ' + (state.activeCategory === c ? "active" : "") + '" data-action="set-cat" data-cat="' + esc(c) + '">';
    html += '      <span>' + esc(c) + '</span>';
    html += '      <span class="cat-count">' + cnt + '</span>';
    html += '    </div>';
  });
  html += '  </div>';
  html += '</div>'; // End Sidebar

  // Main Content Area
  html += '<div class="main-content">';
  if (state.view === "detail") {
    html += renderDetailView();
  } else if (state.view === "edit") {
    html += renderEditView();
  } else if (state.view === "cooking") {
    html += renderCookingView();
  } else {
    html += renderListView();
  }
  html += '</div>';

  // Floating Timer Bar Widget Structure
  html += '<div id="timer-floating-widget" class="' + (state.activeTimer ? "" : "hidden") + '">';
  html += '  <div>';
  html += '    <div class="timer-label">' + esc(state.activeTimer ? state.activeTimer.label : "") + '</div>';
  html += '    <div class="timer-digits">00:00</div>';
  html += '  </div>';
  html += '  <button class="tbtn" data-action="timer-toggle">Pause</button>';
  html += '  <button class="tbtn" data-action="timer-reset">Reset</button>';
  html += '  <button class="tbtn" data-action="timer-stop">✕</button>';
  html += '</div>';

  root.innerHTML = html;
  if (state.activeTimer) updateTimerWidgetDOM();
}

function renderListView() {
  var recipes = filteredRecipes();
  var html = '<div class="toolbar">';
  html += '  <h2 style="font-family:var(--font-serif); font-size:22px; letter-spacing:2px; text-transform:uppercase; color:var(--text-accent);">' + esc(state.activeCategory) + '</h2>';
  html += '</div>';

  html += '<div class="recipe-grid">';
  recipes.forEach(function(r) {
    html += '<div class="recipe-card" data-action="open-detail" data-id="' + r.id + '">';
    html += '  <div class="card-img-wrap">';
    if (r.photo) {
      html += '    <img src="' + esc(r.photo) + '" alt="' + esc(r.title) + '">';
    } else {
      html += '    <div style="display:flex; align-items:center; justify-content:center; height:100%; color:var(--text-muted); font-size:12px;">NO PHOTO</div>';
    }
    html += '  </div>';
    html += '  <div class="card-body">';
    html += '    <div class="card-category"><span>' + esc(r.category || "Uncategorized") + '</span><span>' + "★".repeat(r.stars || 3) + '</span></div>';
    html += '    <h3 class="card-title">' + esc(r.title) + '</h3>';
    html += '    <p class="card-desc">' + esc(r.description) + '</p>';
    html += '    <div class="card-meta"><span>Serves ' + (r.servings || 2) + '</span><span>⏱ ' + esc(r.time || "30m") + '</span></div>';
    html += '  </div>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}

function renderDetailView() {
  var r = findRecipe(state.activeId);
  if (!r) return '<div>Recipe not found.</div>';

  var baseServings = r.servings || 2;
  var currentServings = Math.round(baseServings * state.servingMultiplier);

  var html = '<div class="toolbar">';
  html += '  <button class="tbtn" data-action="back-to-list">← Back to Library</button>';
  html += '  <div class="btn-group">';
  html += '    <div class="unit-toggle">';
  html += '      <button class="unit-btn ' + (state.unitSystem === "metric" ? "active" : "") + '" data-action="set-unit" data-unit="metric">Metric</button>';
  html += '      <button class="unit-btn ' + (state.unitSystem === "imperial" ? "active" : "") + '" data-action="set-unit" data-unit="imperial">Imperial</button>';
  html += '    </div>';
  html += '    <button class="tbtn primary" data-action="start-cooking">👨‍🍳 Start Chef Mode</button>';

  // Stylish Dropdown Menu 1: Export Menu
  html += '    <div class="dropdown" id="export-dropdown">';
  html += '      <button class="dropdown-trigger" data-action="toggle-dropdown" data-target="export-dropdown">Export ▾</button>';
  html += '      <div class="dropdown-menu">';
  html += '        <button class="dropdown-item" data-action="export-pdf">📄 Export as PDF</button>';
  html += '        <button class="dropdown-item" data-action="export-png">🖼 Export as PNG</button>';
  html += '        <button class="dropdown-item" data-action="export-text">📝 Export Plain Text</button>';
  html += '      </div>';
  html += '    </div>';

  // Stylish Dropdown Menu 2: Actions / Options Menu
  html += '    <div class="dropdown" id="options-dropdown">';
  html += '      <button class="dropdown-trigger" data-action="toggle-dropdown" data-target="options-dropdown">Actions ▾</button>';
  html += '      <div class="dropdown-menu">';
  html += '        <button class="dropdown-item" data-action="edit-recipe">✎ Edit Recipe</button>';
  html += '        <button class="dropdown-item" data-action="duplicate-recipe">📋 Duplicate Recipe</button>';
  html += '        <div class="dropdown-divider"></div>';
  html += '        <button class="dropdown-item danger" data-action="delete-recipe">🗑 Delete Recipe</button>';
  html += '      </div>';
  html += '    </div>';

  html += '  </div>';
  html += '</div>';

  // Detailed Recipe Card
  html += '<div class="detail-card">';
  html += '  <div class="detail-header">';
  html += '    <div style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--text-accent); margin-bottom:8px;">' + esc(r.category || "Main") + ' • ' + "★".repeat(r.stars || 3) + '</div>';
  html += '    <h1 class="detail-title">' + esc(r.title) + '</h1>';
  if (r.description) html += '    <div class="detail-subtitle">' + esc(r.description) + '</div>';

  html += '    <div class="detail-controls">';
  html += '      <span>Servings: <strong>' + currentServings + '</strong></span>';
  html += '      <button class="portion-btn" data-action="dec-servings">-</button>';
  html += '      <button class="portion-btn" data-action="inc-servings">+</button>';
  html += '      <span style="margin-left:12px;">Total Time: <strong>' + esc(r.time || "45m") + '</strong></span>';
  html += '    </div>';
  html += '  </div>';

  // Sections Grid: Wine Pairing & Equipment
  html += '  <div class="detail-sections">';
  if (r.wine) {
    html += '    <div class="info-box">';
    html += '      <div class="info-box-title">🍷 Sommelier Wine Pairing</div>';
    html += '      <div style="font-size:13px; color:var(--text-main); font-style:italic;">' + esc(r.wine) + '</div>';
    html += '    </div>';
  }
  if (r.equipment && r.equipment.length) {
    html += '    <div class="info-box">';
    html += '      <div class="info-box-title">🍳 Equipment & Mise-en-place</div>';
    r.equipment.forEach(function(eq) {
      html += '      <label class="checklist-item"><input type="checkbox"> <span>' + esc(eq) + '</span></label>';
    });
    html += '    </div>';
  }
  html += '  </div>';

  // Ingredients & Method Body Grid
  html += '  <div class="recipe-body-grid">';
  html += '    <div>';
  html += '      <h3 class="section-heading">Ingredients</h3>';
  html += '      <ul class="ing-list">';
  (r.ingredients || []).forEach(function(ing) {
    var scaled = scaleIngredient(ing, state.servingMultiplier);
    var converted = convertQuantityUnit(scaled, state.unitSystem);
    html += '        <li class="ing-item"><span>' + esc(converted) + '</span></li>';
  });
  html += '      </ul>';
  html += '    </div>';

  html += '    <div>';
  html += '      <h3 class="section-heading">Method & Execution</h3>';
  html += '      <ol class="step-list">';
  (r.steps || []).forEach(function(s, idx) {
    var stepText = typeof s === "string" ? s : s.text;
    html += '        <li class="step-item">';
    html += '          <div>' + esc(stepText) + '</div>';

    // Auto-detect timer bracket e.g. [timer: 15m]
    var timerMatch = stepText.match(/\[timer:\s*(\d+)(m|s)?\]/i);
    if (timerMatch) {
      var num = parseInt(timerMatch[1]);
      var unit = timerMatch[2] ? timerMatch[2].toLowerCase() : "m";
      var sec = unit === "s" ? num : num * 60;
      html += '          <button class="step-timer-badge" data-action="start-step-timer" data-sec="' + sec + '" data-label="Step ' + (idx + 1) + ' Timer">⏱ Start ' + num + unit + ' Timer</button>';
    }
    html += '        </li>';
  });
  html += '      </ol>';

  if (r.chefNote) {
    html += '      <div style="margin-top:24px; padding:16px; background:var(--badge-bg); border-left:3px solid var(--text-accent); border-radius:6px; font-size:12px; color:var(--text-muted); font-style:italic;">';
    html += '        <strong>Chef\'s Secret Note:</strong> ' + esc(r.chefNote);
    html += '      </div>';
  }
  html += '    </div>';
  html += '  </div>';

  html += '</div>'; // End Detail Card
  return html;
}

function renderCookingView() {
  var r = findRecipe(state.activeId);
  if (!r) return '<div>No recipe selected for cooking.</div>';

  var steps = r.steps || [];
  var currentStep = steps[state.cookingStepIdx] || { text: "No instruction" };
  var stepText = typeof currentStep === "string" ? currentStep : currentStep.text;

  var html = '<div class="cooking-overlay">';
  html += '  <div class="cooking-header">';
  html += '    <div>';
  html += '      <div style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--text-accent);">CHEF FOCUS MODE • ' + esc(r.title) + '</div>';
  html += '      <div style="font-size:12px; color:var(--text-muted);">Step ' + (state.cookingStepIdx + 1) + ' of ' + steps.length + '</div>';
  html += '    </div>';
  html += '    <button class="tbtn" data-action="exit-cooking">✕ Exit Mode</button>';
  html += '  </div>';

  html += '  <div class="cooking-step-container">';
  html += '    <div class="cooking-step-num">STEP ' + (state.cookingStepIdx + 1) + '</div>';
  html += '    <div class="cooking-step-text">' + esc(stepText) + '</div>';

  var timerMatch = stepText.match(/\[timer:\s*(\d+)(m|s)?\]/i);
  if (timerMatch) {
    var num = parseInt(timerMatch[1]);
    var unit = timerMatch[2] ? timerMatch[2].toLowerCase() : "m";
    var sec = unit === "s" ? num : num * 60;
    html += '    <button class="step-timer-badge" style="font-size:14px; padding:8px 18px; margin:0 auto;" data-action="start-step-timer" data-sec="' + sec + '" data-label="Step ' + (state.cookingStepIdx + 1) + ' Timer">⏱ Start ' + num + unit + ' Timer</button>';
  }
  html += '  </div>';

  html += '  <div class="cooking-nav">';
  html += '    <button class="tbtn" data-action="prev-cooking-step" ' + (state.cookingStepIdx === 0 ? "disabled style='opacity:0.4;'" : "") + '>← Previous Step</button>';
  html += '    <button class="tbtn primary" data-action="next-cooking-step">' + (state.cookingStepIdx === steps.length - 1 ? "Finish Cooking ✓" : "Next Step →") + '</button>';
  html += '  </div>';
  html += '</div>';

  return html;
}

function renderEditView() {
  var d = state.draft || {};
  var html = '<div class="toolbar">';
  html += '  <button class="tbtn" data-action="cancel-edit">← Cancel</button>';
  html += '  <button class="tbtn primary" data-action="save-recipe">Save Recipe</button>';
  html += '</div>';

  html += '<div class="form-wrap">';
  html += '  <h2 style="font-family:var(--font-serif); font-size:20px; color:var(--text-accent); margin-bottom:24px;">' + (d.id ? "Edit Culinary Creation" : "New Culinary Creation") + '</h2>';

  html += '  <div class="form-field">';
  html += '    <label>Recipe Title</label>';
  html += '    <input class="form-input" id="f-title" type="text" value="' + esc(d.title) + '" placeholder="e.g. Pan-Seared Duck Breast">';
  html += '  </div>';

  html += '  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:20px;">';
  html += '    <div>';
  html += '      <label style="font-size:11px; letter-spacing:1px; text-transform:uppercase; color:var(--text-accent); display:block; margin-bottom:6px;">Category</label>';
  html += '      <input class="form-input" id="f-category" type="text" value="' + esc(d.category || "Mains") + '">';
  html += '    </div>';
  html += '    <div>';
  html += '      <label style="font-size:11px; letter-spacing:1px; text-transform:uppercase; color:var(--text-accent); display:block; margin-bottom:6px;">Servings</label>';
  html += '      <input class="form-input" id="f-servings" type="number" value="' + (d.servings || 2) + '">';
  html += '    </div>';
  html += '    <div>';
  html += '      <label style="font-size:11px; letter-spacing:1px; text-transform:uppercase; color:var(--text-accent); display:block; margin-bottom:6px;">Total Time</label>';
  html += '      <input class="form-input" id="f-time" type="text" value="' + esc(d.time || "45 min") + '">';
  html += '    </div>';
  html += '  </div>';

  html += '  <div class="form-field">';
  html += '    <label>Short Description</label>';
  html += '    <input class="form-input" id="f-description" type="text" value="' + esc(d.description) + '">';
  html += '  </div>';

  html += '  <div class="form-field">';
  html += '    <label>Sommelier Wine Pairing</label>';
  html += '    <input class="form-input" id="f-wine" type="text" value="' + esc(d.wine) + '">';
  html += '  </div>';

  html += '  <div class="form-field">';
  html += '    <label>Equipment / Mise-en-place (One per input)</label>';
  (d.equipment || [""]).forEach(function(eq, idx) {
    html += '    <div class="row-group"><input class="form-input equip-input" type="text" value="' + esc(eq) + '"></div>';
  });
  html += '  </div>';

  html += '  <div class="form-field">';
  html += '    <label>Ingredients (One per input e.g. 300g Carnaroli rice)</label>';
  (d.ingredients || [""]).forEach(function(ing, idx) {
    html += '    <div class="row-group"><input class="form-input ing-input" type="text" value="' + esc(ing) + '"></div>';
  });
  html += '  </div>';

  html += '  <div class="form-field">';
  html += '    <label>Method Steps (Include e.g. [timer: 15m] for auto timers)</label>';
  (d.steps || [{text:""}]).forEach(function(s, idx) {
    var txt = typeof s === "string" ? s : s.text;
    html += '    <div class="row-group"><textarea class="form-textarea step-input" rows="2">' + esc(txt) + '</textarea></div>';
  });
  html += '  </div>';

  html += '</div>';
  return html;
}

// Global Event Listeners & Delegates
document.addEventListener("click", function(e) {
  var target = e.target.closest("[data-action]");
  if (!target) {
    // Close dropdowns if clicked outside
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.open").forEach(function(d){ d.classList.remove("open"); });
    }
    return;
  }

  var action = target.getAttribute("data-action");

  if (action === "set-theme") {
    state.theme = target.getAttribute("data-theme");
    localStorage.setItem("carte_theme", state.theme);
    renderApp();
  } else if (action === "set-cat") {
    state.activeCategory = target.getAttribute("data-cat");
    state.view = "list";
    renderApp();
  } else if (action === "open-detail") {
    state.activeId = target.getAttribute("data-id");
    state.servingMultiplier = 1;
    state.view = "detail";
    renderApp();
  } else if (action === "back-to-list") {
    state.view = "list";
    renderApp();
  } else if (action === "set-unit") {
    state.unitSystem = target.getAttribute("data-unit");
    renderApp();
  } else if (action === "inc-servings") {
    state.servingMultiplier += 0.5;
    renderApp();
  } else if (action === "dec-servings") {
    if (state.servingMultiplier > 0.5) {
      state.servingMultiplier -= 0.5;
      renderApp();
    }
  } else if (action === "toggle-dropdown") {
    var targetId = target.getAttribute("data-target");
    var dropEl = document.getElementById(targetId);
    if (dropEl) {
      var isOpen = dropEl.classList.contains("open");
      document.querySelectorAll(".dropdown.open").forEach(function(d){ d.classList.remove("open"); });
      if (!isOpen) dropEl.classList.add("open");
    }
  } else if (action === "start-step-timer") {
    var sec = parseInt(target.getAttribute("data-sec"));
    var label = target.getAttribute("data-label");
    startTimer(sec, label);
  } else if (action === "timer-toggle") {
    toggleTimer();
  } else if (action === "timer-reset") {
    resetTimer();
  } else if (action === "timer-stop") {
    stopTimer();
  } else if (action === "start-cooking") {
    state.cookingStepIdx = 0;
    state.view = "cooking";
    renderApp();
  } else if (action === "exit-cooking") {
    state.view = "detail";
    renderApp();
  } else if (action === "next-cooking-step") {
    var r = findRecipe(state.activeId);
    if (r && state.cookingStepIdx < (r.steps.length - 1)) {
      state.cookingStepIdx++;
      renderApp();
    } else {
      state.view = "detail";
      renderApp();
    }
  } else if (action === "prev-cooking-step") {
    if (state.cookingStepIdx > 0) {
      state.cookingStepIdx--;
      renderApp();
    }
  } else if (action === "new-recipe") {
    state.draft = { title: "", category: "Mains", servings: 2, time: "30 min", description: "", wine: "", equipment: [""], ingredients: [""], steps: [{text:""}] };
    state.view = "edit";
    renderApp();
  } else if (action === "edit-recipe") {
    var r = findRecipe(state.activeId);
    if (r) {
      state.draft = JSON.parse(JSON.stringify(r));
      state.view = "edit";
      renderApp();
    }
  } else if (action === "cancel-edit") {
    state.view = state.activeId ? "detail" : "list";
    renderApp();
  } else if (action === "save-recipe") {
    var title = document.getElementById("f-title").value || "Untitled Creation";
    var cat = document.getElementById("f-category").value || "Mains";
    var serv = parseInt(document.getElementById("f-servings").value) || 2;
    var time = document.getElementById("f-time").value || "30 min";
    var desc = document.getElementById("f-description").value || "";
    var wine = document.getElementById("f-wine").value || "";

    var equip = Array.from(document.querySelectorAll(".equip-input")).map(function(i){ return i.value; }).filter(Boolean);
    var ing = Array.from(document.querySelectorAll(".ing-input")).map(function(i){ return i.value; }).filter(Boolean);
    var steps = Array.from(document.querySelectorAll(".step-input")).map(function(i){ return { text: i.value }; }).filter(function(s){ return s.text; });

    if (state.draft && state.draft.id) {
      var idx = state.recipes.findIndex(function(x){ return x.id === state.draft.id; });
      if (idx !== -1) {
        state.recipes[idx] = Object.assign(state.recipes[idx], {
          title: title, category: cat, servings: serv, time: time, description: desc, wine: wine, equipment: equip, ingredients: ing, steps: steps
        });
      }
    } else {
      var newR = {
        id: "recipe-" + Date.now(),
        title: title, category: cat, servings: serv, time: time, description: desc, wine: wine, equipment: equip, ingredients: ing, steps: steps, stars: 3
      };
      state.recipes.unshift(newR);
      state.activeId = newR.id;
    }

    saveStoredRecipes();
    state.view = "detail";
    renderApp();
  } else if (action === "duplicate-recipe") {
    var r = findRecipe(state.activeId);
    if (r) {
      var dup = JSON.parse(JSON.stringify(r));
      dup.id = "recipe-" + Date.now();
      dup.title += " (Copy)";
      state.recipes.unshift(dup);
      state.activeId = dup.id;
      saveStoredRecipes();
      renderApp();
    }
  } else if (action === "delete-recipe") {
    if (confirm("Are you sure you want to delete this recipe?")) {
      state.recipes = state.recipes.filter(function(x){ return x.id !== state.activeId; });
      saveStoredRecipes();
      state.activeId = null;
      state.view = "list";
      renderApp();
    }
  } else if (action === "export-text") {
    var r = findRecipe(state.activeId);
    if (r) {
      var txt = "CARTE MICHELIN RECIPE: " + r.title.toUpperCase() + "\n\n";
      txt += "Category: " + r.category + " | Servings: " + r.servings + " | Time: " + r.time + "\n";
      if (r.wine) txt += "Wine Pairing: " + r.wine + "\n";
      txt += "\nINGREDIENTS:\n" + (r.ingredients || []).join("\n") + "\n\n";
      txt += "METHOD:\n" + (r.steps || []).map(function(s, i){ return (i+1) + ". " + (typeof s === "string" ? s : s.text); }).join("\n");

      var blob = new Blob([txt], { type: "text/plain" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = r.title.toLowerCase().replace(/\s+/g, "-") + ".txt";
      a.click();
    }
  }
});

// Search Box Live Binding
document.addEventListener("input", function(e) {
  if (e.target && e.target.id === "search-box") {
    state.searchQuery = e.target.value;
    if (state.view === "list") renderListViewDOM();
  }
});

function renderListViewDOM() {
  var container = document.querySelector(".main-content");
  if (container && state.view === "list") {
    container.innerHTML = renderListView();
  }
}

// Keybindings for Focus Mode
document.addEventListener("keydown", function(e) {
  if (state.view === "cooking") {
    if (e.key === "ArrowRight" || e.key === " ") {
      var r = findRecipe(state.activeId);
      if (r && state.cookingStepIdx < (r.steps.length - 1)) {
        state.cookingStepIdx++;
        renderApp();
      }
    } else if (e.key === "ArrowLeft") {
      if (state.cookingStepIdx > 0) {
        state.cookingStepIdx--;
        renderApp();
      }
    } else if (e.key === "Escape") {
      state.view = "detail";
      renderApp();
    }
  }
});

// Initial App Boot
document.addEventListener("DOMContentLoaded", function() {
  renderApp();
});
