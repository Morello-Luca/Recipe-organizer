/* CARTE - Michelin Culinary Guide - Compact, High-Density Application Engine */

// Local Vector Art Generator for 100% Offline & Reliable Visuals
function getLocalCulinarySvg(type, title) {
  var accentColor = "var(--text-accent)";
  var bgColor = "var(--bg-input)";

  if (type === "duck") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="250" fill="#18110f"/>
      <circle cx="200" cy="125" r="90" fill="#241916" stroke="#e6a15c" stroke-width="1.5" stroke-dasharray="4 2"/>
      <path d="M140 135 C170 100, 230 100, 260 135 C240 160, 160 160, 140 135 Z" fill="#63251e" stroke="#e6a15c" stroke-width="2"/>
      <path d="M150 128 L250 128 M160 138 L240 138 M170 148 L230 148" stroke="#d4af37" stroke-width="1" opacity="0.6"/>
      <circle cx="170" cy="110" r="12" fill="#8c2323"/>
      <circle cx="195" cy="105" r="10" fill="#a82828"/>
      <path d="M130 165 Q200 185 270 165" stroke="#e6a15c" stroke-width="3" fill="none" opacity="0.8"/>
      <text x="200" y="225" text-anchor="middle" fill="#e6a15c" font-family="sans-serif" font-size="11" letter-spacing="2">PAN-SEARED DUCK BREAST</text>
    </svg>`;
  }

  if (type === "scallop") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="250" fill="#0d1424"/>
      <circle cx="200" cy="125" r="95" fill="#131e36" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="150" cy="110" r="22" fill="#f8fafc" opacity="0.9"/>
      <circle cx="210" cy="100" r="20" fill="#f8fafc" opacity="0.9"/>
      <circle cx="250" cy="130" r="22" fill="#f8fafc" opacity="0.9"/>
      <circle cx="180" cy="145" r="24" fill="#f8fafc" opacity="0.9"/>
      <circle cx="155" cy="110" r="4" fill="#ef4444"/>
      <circle cx="215" cy="100" r="4" fill="#ef4444"/>
      <circle cx="255" cy="130" r="4" fill="#ef4444"/>
      <path d="M140 90 Q200 160 260 110" stroke="#22c55e" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
      <text x="200" y="225" text-anchor="middle" fill="#38bdf8" font-family="sans-serif" font-size="11" letter-spacing="2">HOKKAIDO SCALLOP CARPACCIO</text>
    </svg>`;
  }

  if (type === "souffle") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="250" fill="#1a120b"/>
      <path d="M150 140 L250 140 L240 200 L160 200 Z" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
      <path d="M140 140 C140 90, 260 90, 260 140 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
      <path d="M170 115 Q200 100 230 115" stroke="#d97706" stroke-width="2" fill="none"/>
      <text x="200" y="232" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="11" letter-spacing="2">GRAND MARNIER SOUFFLÉ</text>
    </svg>`;
  }

  if (type === "sear") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="100%" height="100%">
      <rect width="200" height="120" fill="#1a1412"/>
      <circle cx="100" cy="60" r="40" fill="#2d211e" stroke="#e6a15c" stroke-width="2"/>
      <path d="M80 60 L120 60 M90 50 L110 70 M90 70 L110 50" stroke="#f97316" stroke-width="2"/>
      <text x="100" y="110" text-anchor="middle" fill="#bbaaa0" font-size="9" font-family="sans-serif">SEARING TECHNIQUE</text>
    </svg>`;
  }

  if (type === "knife") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="100%" height="100%">
      <rect width="200" height="120" fill="#101726"/>
      <path d="M40 60 L140 50 C160 50, 160 70, 140 70 L40 60 Z" fill="#94a3b8" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="20" y="55" width="25" height="10" fill="#334155" rx="2"/>
      <text x="100" y="110" text-anchor="middle" fill="#8a99ad" font-size="9" font-family="sans-serif">PRECISION CUT</text>
    </svg>`;
  }

  if (type === "bake") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="100%" height="100%">
      <rect width="200" height="120" fill="#18130e"/>
      <rect x="50" y="30" width="100" height="60" fill="none" stroke="#f59e0b" stroke-width="2" rx="4"/>
      <path d="M60 75 Q100 45 140 75" stroke="#fbbf24" stroke-width="3" fill="none"/>
      <text x="100" y="110" text-anchor="middle" fill="#bbaaa0" font-size="9" font-family="sans-serif">OVEN BAKE</text>
    </svg>`;
  }

  // Generic fallback SVG icon
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="100%" height="100%">
    <rect width="200" height="120" fill="var(--bg-input)"/>
    <circle cx="100" cy="50" r="25" fill="none" stroke="var(--text-accent)" stroke-width="1.5"/>
    <path d="M85 50 L115 50 M100 35 L100 65" stroke="var(--text-accent)" stroke-width="1.5"/>
    <text x="100" y="98" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-family="sans-serif">${esc(title || "CULINARY ART")}</text>
  </svg>`;
}

// Default Seed Library with Integrated Local Visual Art
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
      { text: "Score duck skin in a crosshatch pattern without piercing flesh, season generously, and rest at room temperature for 20 minutes.", visualType: "knife" },
      { text: "Cut potatoes into neat cylinders, sear in butter, then braise with veal stock and thyme for 25 minutes [timer: 25m] until tender.", visualType: "sear" },
      { text: "Place duck skin-side down in a cold skillet. Render over medium-low heat for 12 minutes [timer: 12m] until dark golden brown, flipping to finish for 2 minutes.", visualType: "sear" },
      { text: "Simmer cherries, red wine vinegar, and sugar in a small saucepan for 15 minutes [timer: 15m] until thick, glossy gastrique forms.", visualType: "bake" },
      { text: "Sear endive halves cut-side down in duck fat for 4 minutes [timer: 4m] until caramelized. Rest duck 8 minutes before slicing.", visualType: "knife" }
    ],
    chefNote: "Ensure the cast-iron pan starts completely cold when rendering duck skin for maximum crispiness.",
    tags: ["Signature", "French Classic", "Poularde"],
    visualType: "duck"
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
      "12 fresh sashimi-grade Hokkaido scallops",
      "2 finger limes",
      "30ml yuzu juice",
      "40ml extra virgin olive oil",
      "2 watermelon radishes, thinly shaved",
      "Fresh chives and microgreens",
      "Fleur de sel"
    ],
    steps: [
      { text: "Freeze scallops for 10 minutes [timer: 10m] to firm up, then slice paper-thin with a sharp knife.", visualType: "knife" },
      { text: "Whisk yuzu juice with olive oil and a pinch of fleur de sel.", visualType: "knife" },
      { text: "Arrange scallop slices in a single overlapping layer on chilled porcelain plates.", visualType: "knife" },
      { text: "Garnish with finger lime pearls, shaved radish ribbons, and drizzle with chive oil right before serving.", visualType: "knife" }
    ],
    chefNote: "Keep porcelain plates in the freezer for 15 minutes before plating to maintain scallop temperature.",
    tags: ["Raw", "Seafood", "Japanese Fusion"],
    visualType: "scallop"
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
      { text: "Brush ramekins with softened butter using upward vertical strokes, then coat thoroughly with sugar.", visualType: "bake" },
      { text: "Prepare pastry cream base with milk, vanilla bean, egg yolks, flour, and Grand Marnier. Cool slightly.", visualType: "bake" },
      { text: "Whip egg whites with 60g sugar to glossy medium peaks.", visualType: "bake" },
      { text: "Fold 1/3 of whipped whites into pastry cream to lighten, then gently fold remaining whites.", visualType: "bake" },
      { text: "Fill ramekins, level top with a spatula, and bake at 190°C for 14 minutes [timer: 14m] without opening oven door.", visualType: "bake" }
    ],
    chefNote: "Do not open oven door during the first 12 minutes of baking to prevent soufflés from collapsing.",
    tags: ["Pastry", "French Dessert"],
    visualType: "souffle"
  }
];

// State Architecture
var state = {
  theme: localStorage.getItem("carte_theme") || "chocolate-nero",
  recipes: loadStoredRecipes(),
  activeCategory: "All",
  activeId: null,
  searchQuery: "",
  unitSystem: "metric",
  servingMultiplier: 1,
  view: "list",
  activeTab: "ingredients", // 'ingredients', 'method', 'equipment'
  draft: null,
  cookingStepIdx: 0,
  activeTimer: null
};

function loadStoredRecipes() {
  try {
    var stored = localStorage.getItem("carte_recipes_v3");
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return JSON.parse(JSON.stringify(DEFAULT_LIBRARY));
}

function saveStoredRecipes() {
  localStorage.setItem("carte_recipes_v3", JSON.stringify(state.recipes));
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
    var matchSearch = !q || r.title.toLowerCase().includes(q) || (r.description && r.description.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });
}

function convertQuantityUnit(text, toSystem) {
  if (!text || toSystem === "metric") return text;
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

function scaleIngredient(text, multiplier) {
  if (multiplier === 1 || !text) return text;
  return text.replace(/(\d+(?:\.\d+)?)/g, function(match, num) {
    var val = parseFloat(num);
    return Math.round(val * multiplier * 10) / 10;
  });
}

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
      }
      updateTimerWidgetDOM();
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

// App Rendering
function renderApp() {
  document.documentElement.setAttribute("data-theme", state.theme);
  var root = document.getElementById("app-root");
  if (!root) return;

  var html = '<div class="sidebar">';
  html += '  <div class="brand">';
  html += '    <div class="brand-title">Carte <span>★★★</span></div>';
  html += '    <div class="brand-subtitle">Michelin Culinary Guide</div>';
  html += '  </div>';

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
  html += '</div>';

  html += '<div class="main-content">';
  if (state.view === "detail") {
    html += renderCompactDetailView();
  } else if (state.view === "edit") {
    html += renderEditView();
  } else if (state.view === "cooking") {
    html += renderCookingView();
  } else {
    html += renderListView();
  }
  html += '</div>';

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
  html += '  <h2 style="font-family:var(--font-serif); font-size:18px; letter-spacing:2px; text-transform:uppercase; color:var(--text-accent);">' + esc(state.activeCategory) + '</h2>';
  html += '</div>';

  html += '<div class="recipe-grid">';
  recipes.forEach(function(r) {
    html += '<div class="recipe-card" data-action="open-detail" data-id="' + r.id + '">';
    html += '  <div class="card-img-wrap">';
    html += getLocalCulinarySvg(r.visualType, r.title);
    html += '  </div>';
    html += '  <div class="card-body">';
    html += '    <div class="card-category"><span>' + esc(r.category || "Main") + '</span><span>' + "★".repeat(r.stars || 3) + '</span></div>';
    html += '    <h3 class="card-title">' + esc(r.title) + '</h3>';
    html += '    <p class="card-desc">' + esc(r.description) + '</p>';
    html += '    <div class="card-meta"><span>Serves ' + (r.servings || 2) + '</span><span>⏱ ' + esc(r.time || "30m") + '</span></div>';
    html += '  </div>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}

// Compact, Non-Dispersed Single-Screen Recipe Detail Layout
function renderCompactDetailView() {
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

  html += '    <div class="dropdown" id="export-dropdown">';
  html += '      <button class="dropdown-trigger" data-action="toggle-dropdown" data-target="export-dropdown">Export ▾</button>';
  html += '      <div class="dropdown-menu">';
  html += '        <button class="dropdown-item" data-action="export-pdf">📄 Export as PDF</button>';
  html += '        <button class="dropdown-item" data-action="export-png">🖼 Export as PNG</button>';
  html += '        <button class="dropdown-item" data-action="export-text">📝 Export Plain Text</button>';
  html += '      </div>';
  html += '    </div>';

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

  html += '<div class="compact-detail-container">';

  // Left Column: Recipe Visual + Servings + Wine + Equipment Summary
  html += '  <div class="detail-summary-card">';
  html += '    <div class="detail-cover-wrapper">' + getLocalCulinarySvg(r.visualType, r.title) + '</div>';
  html += '    <div class="detail-header-compact">';
  html += '      <div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--text-accent);">' + esc(r.category) + ' • ★★★</div>';
  html += '      <h1>' + esc(r.title) + '</h1>';
  html += '      <p>' + esc(r.description) + '</p>';
  html += '    </div>';

  html += '    <div class="portion-bar">';
  html += '      <span>Servings: <strong>' + currentServings + '</strong></span>';
  html += '      <div>';
  html += '        <button class="portion-btn" data-action="dec-servings">-</button>';
  html += '        <button class="portion-btn" data-action="inc-servings">+</button>';
  html += '      </div>';
  html += '    </div>';

  if (r.wine) {
    html += '    <div class="info-badge-card">';
    html += '      <div class="info-badge-title">🍷 Sommelier Pairing</div>';
    html += '      <div style="font-size:12px; font-style:italic;">' + esc(r.wine) + '</div>';
    html += '    </div>';
  }

  if (r.equipment && r.equipment.length) {
    html += '    <div class="info-badge-card">';
    html += '      <div class="info-badge-title">🍳 Mise-en-place</div>';
    r.equipment.forEach(function(eq) {
      html += '      <div style="font-size:11px; margin-bottom:4px; color:var(--text-muted);">• ' + esc(eq) + '</div>';
    });
    html += '    </div>';
  }
  html += '  </div>';

  // Right Column: Integrated Method & Ingredients View
  html += '  <div class="detail-main-pane">';
  html += '    <div class="compact-tab-header">';
  html += '      <button class="tab-btn ' + (state.activeTab === "ingredients" ? "active" : "") + '" data-action="set-tab" data-tab="ingredients">Ingredients (' + (r.ingredients || []).length + ')</button>';
  html += '      <button class="tab-btn ' + (state.activeTab === "method" ? "active" : "") + '" data-action="set-tab" data-tab="method">Method Steps (' + (r.steps || []).length + ')</button>';
  html += '    </div>';

  if (state.activeTab === "ingredients") {
    html += '    <div class="ing-grid-compact">';
    (r.ingredients || []).forEach(function(ing) {
      var scaled = scaleIngredient(ing, state.servingMultiplier);
      var converted = convertQuantityUnit(scaled, state.unitSystem);
      html += '      <div class="ing-pill"><span>' + esc(converted) + '</span></div>';
    });
    html += '    </div>';
  } else {
    html += '    <div class="step-compact-list">';
    (r.steps || []).forEach(function(s, idx) {
      var stepText = typeof s === "string" ? s : s.text;
      var vType = typeof s === "object" && s.visualType ? s.visualType : "sear";
      html += '      <div class="step-compact-card">';
      html += '        <div class="step-num-pill">' + (idx + 1) + '</div>';
      html += '        <div class="step-compact-body">';
      html += '          <div>' + esc(stepText) + '</div>';

      var timerMatch = stepText.match(/\[timer:\s*(\d+)(m|s)?\]/i);
      if (timerMatch) {
        var num = parseInt(timerMatch[1]);
        var unit = timerMatch[2] ? timerMatch[2].toLowerCase() : "m";
        var sec = unit === "s" ? num : num * 60;
        html += '          <button class="step-timer-badge" data-action="start-step-timer" data-sec="' + sec + '" data-label="Step ' + (idx + 1) + '">⏱ Start ' + num + unit + ' Timer</button>';
      }
      html += '        </div>';
      html += '        <div class="step-compact-thumb">' + getLocalCulinarySvg(vType, "Step " + (idx + 1)) + '</div>';
      html += '      </div>';
    });
    html += '    </div>';
  }

  if (r.chefNote) {
    html += '    <div style="margin-top:20px; padding:12px; background:var(--badge-bg); border-left:3px solid var(--text-accent); border-radius:6px; font-size:11px; color:var(--text-muted); font-style:italic;">';
    html += '      <strong>Chef Note:</strong> ' + esc(r.chefNote);
    html += '    </div>';
  }

  html += '  </div>'; // End Right Column
  html += '</div>'; // End Container

  return html;
}

function renderCookingView() {
  var r = findRecipe(state.activeId);
  if (!r) return '<div>No recipe selected.</div>';

  var steps = r.steps || [];
  var currentStep = steps[state.cookingStepIdx] || { text: "No instruction" };
  var stepText = typeof currentStep === "string" ? currentStep : currentStep.text;
  var vType = typeof currentStep === "object" && currentStep.visualType ? currentStep.visualType : "sear";

  var html = '<div class="cooking-overlay">';
  html += '  <div class="cooking-header">';
  html += '    <div>';
  html += '      <div style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--text-accent);">CHEF FOCUS MODE • ' + esc(r.title) + '</div>';
  html += '      <div style="font-size:11px; color:var(--text-muted);">Step ' + (state.cookingStepIdx + 1) + ' of ' + steps.length + '</div>';
  html += '    </div>';
  html += '    <button class="tbtn" data-action="exit-cooking">✕ Exit Mode</button>';
  html += '  </div>';

  html += '  <div class="cooking-step-container">';
  html += '    <div class="cooking-step-img">' + getLocalCulinarySvg(vType, "Step " + (state.cookingStepIdx + 1)) + '</div>';
  html += '    <div class="cooking-step-num">STEP ' + (state.cookingStepIdx + 1) + '</div>';
  html += '    <div class="cooking-step-text">' + esc(stepText) + '</div>';

  var timerMatch = stepText.match(/\[timer:\s*(\d+)(m|s)?\]/i);
  if (timerMatch) {
    var num = parseInt(timerMatch[1]);
    var unit = timerMatch[2] ? timerMatch[2].toLowerCase() : "m";
    var sec = unit === "s" ? num : num * 60;
    html += '    <button class="step-timer-badge" style="font-size:13px; padding:6px 16px; margin:0 auto;" data-action="start-step-timer" data-sec="' + sec + '" data-label="Step ' + (state.cookingStepIdx + 1) + '">⏱ Start ' + num + unit + ' Timer</button>';
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
  html += '  <h2 style="font-family:var(--font-serif); font-size:18px; color:var(--text-accent); margin-bottom:16px;">' + (d.id ? "Edit Recipe" : "New Recipe") + '</h2>';

  html += '  <div class="form-field">';
  html += '    <label>Recipe Title</label>';
  html += '    <input class="form-input" id="f-title" type="text" value="' + esc(d.title) + '">';
  html += '  </div>';

  html += '  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:16px;">';
  html += '    <div><label>Category</label><input class="form-input" id="f-category" type="text" value="' + esc(d.category || "Mains") + '"></div>';
  html += '    <div><label>Servings</label><input class="form-input" id="f-servings" type="number" value="' + (d.servings || 2) + '"></div>';
  html += '    <div><label>Time</label><input class="form-input" id="f-time" type="text" value="' + esc(d.time || "30 min") + '"></div>';
  html += '  </div>';

  html += '  <div class="form-field"><label>Short Description</label><input class="form-input" id="f-description" type="text" value="' + esc(d.description) + '"></div>';
  html += '  <div class="form-field"><label>Sommelier Wine</label><input class="form-input" id="f-wine" type="text" value="' + esc(d.wine) + '"></div>';

  html += '  <div class="form-field">';
  html += '    <label>Equipment Items</label>';
  html += '    <div id="equip-container">';
  (d.equipment || [""]).forEach(function(eq) {
    html += '    <div class="row-group"><input class="form-input equip-input" type="text" value="' + esc(eq) + '"><button class="row-remove-btn" data-action="remove-row">✕</button></div>';
  });
  html += '    </div>';
  html += '    <button class="add-item-btn" data-action="add-equip">+ Add Item</button>';
  html += '  </div>';

  html += '  <div class="form-field">';
  html += '    <label>Ingredients</label>';
  html += '    <div id="ing-container">';
  (d.ingredients || [""]).forEach(function(ing) {
    html += '    <div class="row-group"><input class="form-input ing-input" type="text" value="' + esc(ing) + '"><button class="row-remove-btn" data-action="remove-row">✕</button></div>';
  });
  html += '    </div>';
  html += '    <button class="add-item-btn" data-action="add-ingredient">+ Add Ingredient</button>';
  html += '  </div>';

  html += '  <div class="form-field">';
  html += '    <label>Method Steps</label>';
  html += '    <div id="steps-container">';
  (d.steps || [{text:""}]).forEach(function(s, idx) {
    var txt = typeof s === "string" ? s : (s ? s.text : "");
    html += '    <div class="step-card-edit">';
    html += '      <div class="step-card-edit-header"><span>Step ' + (idx + 1) + '</span><button class="row-remove-btn" data-action="remove-step-card">✕</button></div>';
    html += '      <textarea class="form-textarea step-text-input" rows="2">' + esc(txt) + '</textarea>';
    html += '    </div>';
  });
  html += '    </div>';
  html += '    <button class="add-item-btn" data-action="add-step">+ Add Step</button>';
  html += '  </div>';

  html += '</div>';
  return html;
}

// Global Event Delegation
document.addEventListener("click", function(e) {
  var target = e.target.closest("[data-action]");
  if (!target) {
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
  } else if (action === "set-tab") {
    state.activeTab = target.getAttribute("data-tab");
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
  } else if (action === "add-equip") {
    var container = document.getElementById("equip-container");
    if (container) {
      var div = document.createElement("div");
      div.className = "row-group";
      div.innerHTML = '<input class="form-input equip-input" type="text" placeholder="Item"><button class="row-remove-btn" data-action="remove-row">✕</button>';
      container.appendChild(div);
    }
  } else if (action === "add-ingredient") {
    var container = document.getElementById("ing-container");
    if (container) {
      var div = document.createElement("div");
      div.className = "row-group";
      div.innerHTML = '<input class="form-input ing-input" type="text" placeholder="Ingredient"><button class="row-remove-btn" data-action="remove-row">✕</button>';
      container.appendChild(div);
    }
  } else if (action === "add-step") {
    var container = document.getElementById("steps-container");
    if (container) {
      var stepNum = container.querySelectorAll(".step-card-edit").length + 1;
      var div = document.createElement("div");
      div.className = "step-card-edit";
      div.innerHTML = '<div class="step-card-edit-header"><span>Step ' + stepNum + '</span><button class="row-remove-btn" data-action="remove-step-card">✕</button></div><textarea class="form-textarea step-text-input" rows="2" placeholder="Step instructions..."></textarea>';
      container.appendChild(div);
    }
  } else if (action === "remove-row") {
    var row = target.closest(".row-group");
    if (row) row.remove();
  } else if (action === "remove-step-card") {
    var card = target.closest(".step-card-edit");
    if (card) card.remove();
  } else if (action === "new-recipe") {
    state.draft = { title: "", category: "Mains", servings: 2, time: "30 min", description: "", wine: "", visualType: "sear", equipment: [""], ingredients: [""], steps: [{text:"", visualType:"sear"}] };
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

    var stepCards = Array.from(document.querySelectorAll(".step-card-edit"));
    var steps = stepCards.map(function(card) {
      var txtInput = card.querySelector(".step-text-input");
      return { text: txtInput ? txtInput.value : "", visualType: "sear" };
    }).filter(function(s){ return s.text; });

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
        title: title, category: cat, servings: serv, time: time, description: desc, wine: wine, visualType: "sear", equipment: equip, ingredients: ing, steps: steps, stars: 3
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
    if (confirm("Delete recipe?")) {
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
  } else if (action === "export-png") {
    var detailEl = document.querySelector(".compact-detail-container");
    if (detailEl && window.html2canvas) {
      window.html2canvas(detailEl, { scale: 2, backgroundColor: "#0c0807" }).then(function(canvas) {
        var link = document.createElement("a");
        link.download = (state.activeId || "recipe") + ".png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  } else if (action === "export-pdf") {
    var detailEl = document.querySelector(".compact-detail-container");
    if (detailEl && window.html2canvas && window.jspdf) {
      window.html2canvas(detailEl, { scale: 2, backgroundColor: "#0c0807" }).then(function(canvas) {
        var imgData = canvas.toDataURL("image/png");
        var pdf = new window.jspdf.jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, (canvas.height * 210) / canvas.width);
        pdf.save((state.activeId || "recipe") + ".pdf");
      });
    }
  }
});

document.addEventListener("input", function(e) {
  if (e.target && e.target.id === "search-box") {
    state.searchQuery = e.target.value;
    if (state.view === "list") {
      var container = document.querySelector(".main-content");
      if (container) container.innerHTML = renderListView();
    }
  }
});

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

document.addEventListener("DOMContentLoaded", function() {
  renderApp();
});
