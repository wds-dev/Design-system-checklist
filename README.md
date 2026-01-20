# Design system checklist

Una checklist per non tralasciare nulla durante la progettazione di un design system per piccoli progetti.
Pagina statica, solo HTML/CSS/JS con:

- ✅ Checkbox con **salvataggio automatico** in `localStorage`
- ✅ **Capitoli/Sezioni** con progresso per capitolo + totale
- ✅ Capitoli **collassabili** (accordion) con stato salvato
- ✅ Pubblicabile in 2 click con **GitHub Pages**
- ❌ Nessun backend, nessun database, zero dipendenze obbligatorie

---

## Come funziona

Lo stato viene salvato nel browser tramite `localStorage`.

- ✅ Vantaggio: funziona offline, non serve login, è veloce
- ❌ Limite: **non sincronizza** tra dispositivi / browser diversi
- ❌ Se l’utente cancella i dati del browser, perde i progressi

---

## Come modificare la checklist

Apri `index.html` e modifica la variabile `chapters`:

```js
const chapters = [
  {
    id: "setup",
    title: "Setup",
    desc: "Descrizione del capitolo (opzionale)",
    items: [
      { id: "setup_1", title: "Installare strumenti" },
      { id: "setup_2", title: "Configurare progetto", desc: "Descrizione item (opzionale)" },
    ],
  },
];
```

### Proprietà disponibili

**Capitolo**
- `id` *(obbligatorio)* → stringa unica
- `title` *(obbligatorio)* → titolo del capitolo
- `desc` *(opzionale)* → descrizione sotto al titolo
- `items` *(obbligatorio)* → array di task

**Item**
- `id` *(obbligatorio)* → stringa unica
- `title` *(obbligatorio)* → testo della checkbox
- `desc` *(opzionale)* → descrizione dell’item

> Se ometti `desc`, semplicemente non viene mostrata.

---

## Storage (localStorage)

Il progetto salva 2 cose:

- Stato checkbox (spuntate o no)
- Stato UI dei capitoli (collassati o aperti)

Nel codice trovi le chiavi:

```js
const STORAGE_KEY_CHECKED = "checklist:v3:checked";
const STORAGE_KEY_UI      = "checklist:v3:ui";
```

Se fai cambiamenti grossi alla struttura, puoi cambiare `v3` in `v4` per resettare automaticamente lo stato salvato.

---

## Requisiti

Nessuno.

Funziona con:
- GitHub Pages
- Qualsiasi hosting statico
- Anche in locale aprendo `index.html`

---

## Idee per miglioramenti futuri

- Search / filtro
- Seleziona / deselect per singolo capitolo
- Import / export JSON
- Percentuale completamento (oltre al 7/12)
- Supporto a più checklist nella stessa pagina

---

## Licenza

Questa checklist è rilasciata con licenza WTFPL (http://www.wtfpl.net/)