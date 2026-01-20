// Checklist app

// Capitoli - desc e item.desc sono opzionali
const chapters = [
    {
        id: "colors",
        title: "1. Colori",
        desc: "Palette, regole d'uso e mappature semantiche.",
        items: [
            {
                id: "colors_1",
                title: "Color palette",
                desc: "Colori base del progetto: primari, secondari e neutri. Includi almeno valori HEX e un esempio di combinazioni corrette.",
            },
            {
                id: "colors_2",
                title: "Mappatura semantica dei colori",
                desc: "Quando usare un colore e per quali elementi (es. primary = azioni principali, danger = errori). Evita scelte 'a gusto'.",
            },
        ],
    },
    {
        id: "typography",
        title: "2. Tipografia",
        desc: "Famiglie font, pesi, stili, letter spacing, line height, case, ecc.",
        items: [
            {
                id: "typography_1",
                title: "Heading",
                desc: "Stili dei titoli (H1–H6 o livelli equivalenti): dimensione, peso, line-height, spacing prima/dopo e regole d'uso.",
            },
            {
                id: "typography_2",
                title: "Body",
                desc: "Testo corrente: dimensione base, line-height, varianti (small, caption) e regole di leggibilità (lunghezza riga, gerarchie).",
            },
            {
                id: "typography_3",
                title: "Links styles",
                desc: "Aspetto e comportamento dei link nei diversi contesti: in un paragrafo, in una navbar, su sfondo scuro. Indica hover/focus/visited.",
            },
            {
                id: "typography_4",
                title: "Altro",
                desc: "Testi speciali del progetto: label di form, helper/error text, quote, code, badge text, ecc.",
            },
        ],
    },
    {
        id: "layout",
        title: "3. Layout & responsive",
        desc: "Layout, spaziature, griglie, bordi, breakpoints, ecc.",
        items: [
            {
                id: "layout_1",
                title: "Layout a colonne",
                desc: "Griglia: numero colonne, gutter/gap, margini laterali e comportamento del contenuto (stretch, left, right, center).",
            },
            {
                id: "layout_2",
                title: "Breakpoints",
                desc: "Soglie di larghezza che attivano cambi di layout. Specifica cosa cambia (colonne, spaziature, tipografia) e non solo i numeri.",
            },
            {
                id: "layout_3",
                title: "Spaziatura",
                desc: "Scala di spacing (es. 4/8/12/16...) e uso semantico: padding, margin, gap tra componenti. L'obiettivo è coerenza, non 'a occhio'.",
            },
            {
                id: "layout_4",
                title: "Borders",
                desc: "Spessore dei bordi e raggi (radius) consentiti. Indica anche quando usare bordi vs separatori vs background.",
            },
        ],
    },
    {
        id: "ui_kit",
        title: "4. UI kit",
        desc: "Tutti gli elementi della User Interface.",
        items: [
            {
                id: "ui_kit_1",
                title: "Icons sets",
                desc: "Set di icone usato e regole base: dimensioni (16/24/32), stile (outline/filled), spessore e quando è obbligatoria un'etichetta testuale.",
            },
            {
                id: "ui_kit_2",
                title: "Bottoni",
                desc: "Tipi di button (primary/secondary/tertiary), dimensioni e uso. Specifica anche quando NON usare un button (es. per un link).",
            },
            {
                id: "ui_kit_3",
                title: "Inputs",
                desc: "Campi di testo e varianti: placeholder, label, helper text, errore, successo. Indica spacing e allineamenti standard.",
            },
            {
                id: "ui_kit_4",
                title: "Menu",
                desc: "Componenti di navigazione (navbar, menu laterale, menu contestuale): struttura, gerarchie e comportamento su mobile.",
            },
            {
                id: "ui_kit_5",
                title: "Menu items",
                desc: "Singola voce di menu: stati (attivo, hover, disabilitato), con/senza icona, livelli (sub-menu) e lunghezze testo gestite.",
            },
            {
                id: "ui_kit_6",
                title: "Checkboxes",
                desc: "Selezione multipla: dimensioni, allineamento con testo, stati (checked/indeterminate) e regola pratica: una checkbox = un'opzione indipendente.",
            },
            {
                id: "ui_kit_7",
                title: "Radio buttons",
                desc: "Scelta singola tra opzioni: layout (verticale/orizzontale), spaziatura e regola: radio = una sola scelta possibile.",
            },
            {
                id: "ui_kit_8",
                title: "Switches",
                desc: "On/off immediato: quando usarlo (azioni reversibili), testo associato, stato attivo e feedback immediato del cambiamento.",
            },
            {
                id: "ui_kit_9",
                title: "Dropdowns",
                desc: "Selettori a lista: quando preferirli rispetto a radio, gestione di molte opzioni, placeholder e stato selezionato.",
            },
            {
                id: "ui_kit_10",
                title: "Controls",
                desc: "Controlli vari (slider, stepper, controlli dei player audio/video). Definisci l'aspetto minimo e come comunicano il valore.",
            },
            {
                id: "ui_kit_11",
                title: "Cards",
                desc: "Contenitori di contenuti: padding standard, gerarchia interna (titolo/testo/azioni), clickability (card cliccabile vs con bottoni).",
            },
            {
                id: "ui_kit_12",
                title: "Widgets",
                desc: "Elementi compositi (es. Key Performance Indicator, tile, summary box). Definisci struttura, spaziature e regole per non creare mille varianti incompatibili.",
            },
            {
                id: "ui_kit_13",
                title: "Dialogs",
                desc: "Finestre di conferma o scelta: struttura (titolo, testo, azioni), dimensione, chiusura e regola: poche info, decisione chiara.",
            },
            {
                id: "ui_kit_14",
                title: "Toast / snackbar",
                desc: "Messaggi brevi non bloccanti: durata, posizione, tono (success/warn/error) e quando evitare (se serve attenzione → dialog/alert).",
            },
            {
                id: "ui_kit_15",
                title: "Tooltip",
                desc: "Micro-aiuto contestuale: testo breve, attivazione (hover/focus), quando usarlo (chiarire un'icona) e quando no (non sostituisce un label).",
            },
            {
                id: "ui_kit_16",
                title: "Modals",
                desc: "Overlay più ricchi dei dialog: contenuti più lunghi o form. Definisci dimensioni, scroll interno, chiusura e cosa succede su mobile.",
            },
            {
                id: "ui_kit_17",
                title: "Tabs",
                desc: "Navigazione tra sezioni correlate: numero massimo consigliato, comportamento su mobile (scroll orizzontale o conversione in dropdown).",
            },
            {
                id: "ui_kit_18",
                title: "Tables",
                desc: "Tabelle dati: intestazioni, allineamenti (numeri a destra), righe zebra opzionali, stato empty/loading e gestione overflow su mobile.",
            },
            {
                id: "ui_kit_19",
                title: "Breadcrumbs",
                desc: "Traccia di navigazione gerarchica: quando mostrarla, come gestire titoli lunghi e qual è l'elemento cliccabile vs corrente.",
            },
            {
                id: "ui_kit_20",
                title: "Pagination",
                desc: "Navigazione tra pagine: componenti (prev/next, numeri), comportamento su mobile e alternativa (load more / infinite scroll) se prevista.",
            },
            {
                id: "ui_kit_21",
                title: "Sidebar / Navbar",
                desc: "Strutture di navigazione principali: cosa contiene, stati (attivo), comportamento responsive (hamburger, collapse) e priorità dei link.",
            },
            {
                id: "ui_kit_22",
                title: "Carousel",
                desc: "Slider di contenuti: quando usarlo (pochi contenuti, storytelling) e quando evitarlo. Indica controlli (dots/frecce) e swipe su mobile.",
            },
            {
                id: "ui_kit_23",
                title: "Lists",
                desc: "Liste di elementi (testo o cards): densità (comoda/compatta), separatori, elementi cliccabili, icone/azioni secondarie coerenti.",
            },
            {
                id: "ui_kit_24",
                title: "Altro",
                desc: "Qualsiasi UI del progetto che non rientra nelle categorie sopra. Se esiste spesso, merita una categoria dedicata.",
            },
        ],
    },
    {
        id: "component_anatomy",
        title: "5. Anatomia dei componenti",
        desc: "Stati, feedback visivi e comportamenti degli elementi interattivi.",
        items: [
            {
                id: "component_1",
                title: "Stati",
                desc: "Definisci come cambia un componente nei principali stati: default, hover, active, focus, disabled, loading, error. (Se manca focus, la navigazione da tastiera si <em>rompe</em>.)",
            },
            {
                id: "component_2",
                title: "Varianti",
                desc: "Regole per varianti controllate (dimensione, tono, con/senza icona). Poche varianti e utili.",
            },
        ],
    },
    {
        id: "guidelines",
        title: "6. Linee guida",
        desc: "Istruzioni scritte e dettagliate sull'utilizzo del design system.",
        items: [
            {
                id: "guide_1",
                title: "Istruzioni testuali",
                desc: "Regole semplici e operative: quando usare cosa, cosa evitare, errori frequenti.",
            },
            {
                id: "guide_2",
                title: "Do/Don't",
                desc: "Esempi visivi rapidi: 1–2 casi corretti e 1–2 sbagliati. L'obiettivo è far capire in 10 secondi, non fare un trattato.",
            },
        ],
    },
];

// Storage keys
const STORAGE_KEY_CHECKED = "checklist:v3:checked";
const STORAGE_KEY_UI = "checklist:v3:ui";

const $chapters = document.getElementById("chapters");
const $progress = document.getElementById("progress");
const $lastSaved = document.getElementById("lastSaved");

const $checkAll = document.getElementById("checkAll");
const $uncheckAll = document.getElementById("uncheckAll");
const $reset = document.getElementById("reset");

function allItemsFlat() {
    const all = [];
    for (const ch of chapters) {
        for (const it of ch.items) {
            all.push(it);
        }
    }
    return all;
}

function loadCheckedState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_CHECKED);
        if (!raw) return { checked: {}, lastSaved: null };

        const parsed = JSON.parse(raw);

        return {
            checked: parsed.checked || {},
            lastSaved: parsed.lastSaved || null,
        };
    } catch {
        return { checked: {}, lastSaved: null };
    }
}

function saveCheckedState(state) {
    const payload = {
        checked: state.checked,
        lastSaved: Date.now(),
    };

    localStorage.setItem(STORAGE_KEY_CHECKED, JSON.stringify(payload));
    return payload.lastSaved;
}

function loadUIState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_UI);
        if (!raw) return { collapsed: {} };

        const parsed = JSON.parse(raw);

        return {
            collapsed: parsed.collapsed || {},
        };
    } catch {
        return { collapsed: {} };
    }
}

function saveUIState(ui) {
    const payload = { collapsed: ui.collapsed };
    localStorage.setItem(STORAGE_KEY_UI, JSON.stringify(payload));
}

function formatLastSaved(ts) {
    if (!ts) return "";
    return `Ultimo salvataggio: ${new Date(ts).toLocaleString("it-IT", {
        dateStyle: "medium",
        timeStyle: "short",
    })}`;
}

function computeChapterProgress(chapter, checkedState) {
    const total = chapter.items.length;
    const done = chapter.items.reduce((acc, it) => acc + (checkedState.checked[it.id] ? 1 : 0), 0);
    return { done, total };
}

function computeGlobalProgress(checkedState) {
    const items = allItemsFlat();
    const total = items.length;
    const done = items.reduce((acc, it) => acc + (checkedState.checked[it.id] ? 1 : 0), 0);
    return { done, total };
}

function createChapterHeader(chapter, chapterProgressText, isCollapsed) {
    const $btn = document.createElement("button");
    $btn.type = "button";
    $btn.className = "chapter-header";
    $btn.dataset.chapterToggle = chapter.id;

    const $row = document.createElement("div");
    $row.className = "chapter-title-row";

    const $title = document.createElement("h2");
    $title.className = "chapter-title";
    $title.textContent = chapter.title;

    const $chev = document.createElement("span");
    $chev.className = "chapter-chevron";
    // $chev.textContent = isCollapsed ? "▶" : "▼";
    $chev.innerHTML = isCollapsed
        ? '<i class="ph ph-caret-right"></i>'
        : '<i class="ph ph-caret-down"></i>';

    const $prog = document.createElement("div");
    $prog.className = "chapter-progress";
    $prog.dataset.chapterProgress = chapter.id;
    $prog.textContent = chapterProgressText;

    $row.appendChild($chev);
    $row.appendChild($title);
    $row.appendChild($prog);

    $btn.appendChild($row);

    if (chapter.desc) {
        const $desc = document.createElement("div");
        $desc.className = "chapter-desc";
        $desc.textContent = chapter.desc;
        $btn.appendChild($desc);
    }

    return $btn;
}

function render(checkedState, uiState) {
    $chapters.innerHTML = "";

    for (const chapter of chapters) {
        const $chapter = document.createElement("section");
        $chapter.className = "chapter";
        $chapter.dataset.chapterId = chapter.id;

        const isCollapsed = Boolean(uiState.collapsed[chapter.id]);

        if (isCollapsed) {
            $chapter.classList.add("is-collapsed");
        }

        const { done, total } = computeChapterProgress(chapter, checkedState);
        const headerText = `${done}/${total}`;

        const $headerBtn = createChapterHeader(chapter, headerText, isCollapsed);

        const $body = document.createElement("div");
        $body.className = "chapter-body";

        const $list = document.createElement("ul");
        $list.dataset.chapterList = chapter.id;

        for (const item of chapter.items) {
            const li = document.createElement("li");

            const label = document.createElement("label");

            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.dataset.id = item.id;
            cb.checked = Boolean(checkedState.checked[item.id]);

            const title = document.createElement("span");
            title.textContent = item.title;

            label.appendChild(cb);
            label.appendChild(title);
            li.appendChild(label);

            if (item.desc) {
                const p = document.createElement("div");
                p.className = "desc";
                p.textContent = item.desc;
                li.appendChild(p);
            }

            $list.appendChild(li);
        }

        $body.appendChild($list);

        $chapter.appendChild($headerBtn);
        $chapter.appendChild($body);

        $chapters.appendChild($chapter);
    }

    updateUI(checkedState);
}

function updateUI(checkedState) {
    // Global progress
    const global = computeGlobalProgress(checkedState);
    $progress.textContent = `${global.done}/${global.total}`;

    // Chapter progress (aggiorno i numeri senza rifare tutto il render)
    for (const chapter of chapters) {
        const { done, total } = computeChapterProgress(chapter, checkedState);
        const el = document.querySelector(`[data-chapter-progress="${chapter.id}"]`);
        if (el) el.textContent = `${done}/${total}`;
    }

    // Last saved
    $lastSaved.textContent = formatLastSaved(checkedState.lastSaved);
}

// Init
let checkedState = loadCheckedState();
let uiState = loadUIState();

render(checkedState, uiState);

// Checkbox change
$chapters.addEventListener("change", (e) => {
    const el = e.target;
    if (!(el instanceof HTMLInputElement)) return;
    if (el.type !== "checkbox") return;

    const id = el.dataset.id;
    checkedState.checked[id] = el.checked;

    checkedState.lastSaved = saveCheckedState(checkedState);
    updateUI(checkedState);
});

// Toggle collapse (click sul bottone capitolo)
$chapters.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const btn = target.closest("[data-chapter-toggle]");
    if (!btn) return;

    const chapterId = btn.getAttribute("data-chapter-toggle");
    if (!chapterId) return;

    const section = document.querySelector(`[data-chapter-id="${chapterId}"]`);
    if (!section) return;

    const isCollapsed = section.classList.toggle("is-collapsed");
    uiState.collapsed[chapterId] = isCollapsed;

    saveUIState(uiState);

    // aggiorna freccia
    const chev = btn.querySelector(".chapter-chevron");
    // if (chev) chev.textContent = isCollapsed ? "▶" : "▼";
    if (chev) {
        chev.innerHTML = isCollapsed
            ? '<i class="ph ph-caret-right"></i>'
            : '<i class="ph ph-caret-down"></i>';
    }

});

// Bulk actions
$checkAll.addEventListener("click", () => {
    for (const it of allItemsFlat()) checkedState.checked[it.id] = true;
    checkedState.lastSaved = saveCheckedState(checkedState);
    render(checkedState, uiState);
});

$uncheckAll.addEventListener("click", () => {
    for (const it of allItemsFlat()) checkedState.checked[it.id] = false;
    checkedState.lastSaved = saveCheckedState(checkedState);
    render(checkedState, uiState);
});

$reset.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY_CHECKED);
    localStorage.removeItem(STORAGE_KEY_UI);

    checkedState = { checked: {}, lastSaved: null };
    uiState = { collapsed: {} };

    render(checkedState, uiState);
});