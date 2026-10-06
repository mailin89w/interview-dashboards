// Shared "Cheat Sheet" quick-reference modal, injected into the topbar on every page
// (homepage + every dashboard). Content lives here, not per-job, since it's general
// Scrum/Product vocabulary rather than job-specific prep.
//
// UI pattern deliberately reuses existing site primitives so it looks native:
// .seg button for the trigger (same as the DE/EN and Light/Dark toggles),
// .overlay/.modal for the panel, .macc accordion for categories, table.info for terms.
(function(){
  'use strict';

  if (window.__authGateOk === false) { return; }

  var CHEATSHEET = [
    {
      title: 'Rollen',
      terms: [
        ['Product Owner (PO)', 'Verantwortet was gebaut wird und warum. Priorisiert Backlog, formuliert Produktziele, maximiert Produktwert.'],
        ['Projektmanager', 'Verantwortet stärker wie, wann, mit wem und in welchem Rahmen geliefert wird. Plant Zeit, Budget, Risiken, Abhängigkeiten und Kommunikation.'],
        ['Scrum Master', 'Verantwortet den Prozess, beseitigt Hindernisse, coacht Team und Organisation in Scrum.'],
        ['Product Manager', 'Strategischer als PO; Markt, Vision, Business Case, Zielgruppen, Roadmap. PO oft stärker operativ am Entwicklungsteam.'],
        ['Stakeholder', 'Personen/Gruppen, die Einfluss auf oder Interesse am Projekt/Produkt haben.']
      ]
    },
    {
      title: 'Backlog &amp; Anforderungen',
      terms: [
        ['Product Backlog', 'Priorisierte Gesamtliste aller Anforderungen/Ideen.'],
        ['Sprint Backlog', 'Was das Team im aktuellen Sprint umsetzen will.'],
        ['User Story', 'Anforderung aus Nutzersicht, z. B. „Als … möchte ich …, damit …“'],
        ['Acceptance Criteria', 'Bedingungen, wann eine Story fachlich erfüllt ist.'],
        ['Definition of Done', 'Allgemeingültige Kriterien dafür, wann Arbeit wirklich „fertig“ ist.']
      ]
    },
    {
      title: 'Scrum-Events',
      terms: [
        ['Sprint Goal', 'Gemeinsames Ziel eines Sprints.'],
        ['Refinement', 'Anforderungen vorbereiten, klären, schneiden und grob schätzen.'],
        ['Sprint Planning', 'Was nehmen wir in den Sprint und wie gehen wir es an?'],
        ['Daily', 'Kurzer täglicher Abgleich.'],
        ['Review', 'Ergebnis zeigen und Feedback einsammeln.'],
        ['Retrospektive', 'Zusammenarbeit und Prozess verbessern.']
      ]
    },
    {
      title: 'Produktversionen &amp; Phasen',
      terms: [
        ['MVP · Minimum Viable Product', 'Kleinste sinnvolle Produktversion, mit der echter Nutzen getestet werden kann.'],
        ['MMP · Minimum Marketable Product', 'Kleinste Version, die sinnvoll vermarktet/verkauft werden kann.'],
        ['Post-MVP', 'Kein streng definierter Scrum-Begriff; bezeichnet meist die Weiterentwicklung nach dem MVP.'],
        ['Iteration', 'Schrittweise Verbesserung des Produkts.'],
        ['Increment', 'Nutzbares Ergebnis eines Sprints.'],
        ['Go-Live', 'Produkt/Feature geht produktiv.'],
        ['Post-Go-Live / Hypercare', 'Phase direkt nach dem Launch mit verstärktem Monitoring und schneller Fehlerbehebung.'],
        ['BAU · Business as Usual', 'Übergang vom Projekt-/Launch-Modus in den normalen Betrieb.']
      ]
    },
    {
      title: 'Priorisierung',
      terms: [
        ['MoSCoW', 'Must / Should / Could / Won’t.'],
        ['RICE', 'Reach × Impact × Confidence ÷ Effort.'],
        ['Business Value', 'Welchen Nutzen bringt die Anforderung?'],
        ['Effort', 'Wie viel Aufwand kostet sie?'],
        ['Dependency', 'Abhängigkeit zu anderen Aufgaben/Systemen.'],
        ['Technical Debt', 'Technische Schulden durch kurzfristige oder nicht optimale Lösungen.']
      ],
      extra: '<p style="font-weight:800;color:var(--ink);margin:12px 0 6px;">Gute Interview-Antwort bei Termindruck</p>' +
        '<p>Nicht einfach mehr Druck auf das Team geben, sondern transparent priorisieren.</p>' +
        '<p><b>Kurzschema:</b> 1. Ursache klären → 2. Auswirkungen prüfen → 3. Must-haves identifizieren → 4. Scope reduzieren → 5. Abhängigkeiten prüfen → 6. Entscheidung transparent machen</p>' +
        '<p style="margin-bottom:4px;"><b>Typische Hebel:</b></p>' +
        '<ul class="tight"><li>Scope reduzieren</li><li>Features in MVP / später aufteilen</li><li>Reihenfolge ändern</li><li>Abhängigkeiten entfernen</li><li>Zusätzliche Ressourcen prüfen</li><li>Termin verschieben, wenn Scope unverzichtbar ist</li></ul>' +
        '<p><mark>Wichtig: Zeit, Scope und Ressourcen sind nicht beliebig gleichzeitig fixierbar.</mark></p>'
    },
    {
      title: 'Feature-Zerlegung',
      terms: [],
      extra: '<p>Große Features möglichst in kleinere, unabhängig lieferbare Teile zerlegen.</p>' +
        '<p><b>Nicht:</b> „Kompletter neuer Checkout“</p>' +
        '<p><b>Sondern z. B.:</b> Checkout Basis → Zahlungsart → Gutscheine → Komfortfunktionen</p>' +
        '<p>Ziel: früher Wert liefern und Risiken reduzieren.</p>'
    },
    {
      title: 'Schätzung',
      terms: [
        ['Story Points', 'Relative Komplexität, Risiko und Aufwand.'],
        ['Planning Poker', 'Team-basierte Schätzmethode.'],
        ['Velocity', 'Durchschnittlich erledigte Story Points pro Sprint.']
      ],
      extra: '<p><mark>Wichtig im Interview: Story Points ≠ Stunden.</mark></p>'
    },
    {
      title: 'Zeit, Risiko &amp; Abhängigkeiten',
      terms: [
        ['Milestone', 'Wichtiger Meilenstein.'],
        ['Critical Path', 'Vorgänge, deren Verzögerung direkt den Gesamttermin verschiebt.'],
        ['Risk', 'Mögliches zukünftiges Problem.'],
        ['Issue', 'Problem ist bereits eingetreten.'],
        ['Dependency', 'Eine Aufgabe hängt von einer anderen ab.'],
        ['Blocker', 'Etwas verhindert aktuell die Weiterarbeit.'],
        ['RAID', 'Risks, Assumptions, Issues, Dependencies.']
      ]
    },
    {
      title: 'Scope',
      terms: [
        ['Scope', 'Was gehört zum Projekt/Feature – und was nicht?'],
        ['Scope Creep', 'Anforderungen werden während des Projekts immer mehr, ohne Zeit/Budget entsprechend anzupassen.']
      ],
      extra: '<p style="font-weight:800;color:var(--ink);margin:12px 0 6px;">Gute Reaktion auf Scope Creep</p>' +
        '<p>Auswirkung sichtbar machen und bewusst neu priorisieren.</p>'
    },
    {
      title: 'Release &amp; Deployment',
      terms: [
        ['Deployment', 'Software technisch ausrollen.'],
        ['Release', 'Funktion für Nutzer verfügbar machen.'],
        ['Feature Flag', 'Funktion technisch vorhanden, aber gezielt aktivierbar.'],
        ['Rollback', 'Zur vorherigen Version zurückkehren.'],
        ['Hotfix', 'Dringende Fehlerbehebung in Produktion.']
      ]
    },
    {
      title: 'Kennzahlen',
      terms: [
        ['KPI · Key Performance Indicator', 'Zentrale Erfolgskennzahl.'],
        ['OKR · Objectives and Key Results', 'Ziel + messbare Ergebnisse.'],
        ['Conversion Rate', 'Anteil Nutzer, die gewünschte Aktion durchführen.'],
        ['Retention', 'Wie viele Nutzer bleiben/wiederkommen?'],
        ['Adoption', 'Wie viele Nutzer verwenden das neue Feature?'],
        ['Output vs. Outcome', 'Output: „Wir haben fünf Features gebaut.“ Outcome: „Durch das Feature steigt die Conversion um 10 %.“ In Produktarbeit ist Outcome meistens wichtiger als reiner Output.']
      ]
    },
    {
      title: 'Sichere Formulierungen fürs Interview',
      terms: [],
      extra: '<p><b>Bei Priorisierung:</b> „Ich würde zuerst Business Value, Dringlichkeit, Abhängigkeiten und Aufwand gegeneinander abwägen.“</p>' +
        '<p><b>Bei Problemen:</b> „Ich würde das Problem früh transparent machen und mit den Beteiligten konkrete Handlungsoptionen inklusive Auswirkungen vorbereiten.“</p>' +
        '<p><b>Bei engem Termin:</b> „Ich würde zuerst prüfen, ob wir den Scope sinnvoll reduzieren und trotzdem den wichtigsten Nutzerwert liefern können.“</p>'
    }
  ];

  var tbRight = document.querySelector('.tb-right');
  if (!tbRight) return;

  var seg = document.createElement('div');
  seg.className = 'seg';
  seg.id = 'cheatsheetSeg';
  seg.innerHTML = '<button type="button" id="cheatsheetBtn">Cheat Sheet</button>';
  tbRight.insertBefore(seg, tbRight.firstChild);

  function renderCategory(cat, idx) {
    var count = cat.terms && cat.terms.length
      ? ' <span style="font-weight:700;color:var(--muted);">(' + cat.terms.length + ')</span>'
      : '';
    var html = '<div class="macc" data-cs-cat="' + idx + '">' +
      '<button class="macc-head">' + cat.title + count + '<span class="chev">▾</span></button>' +
      '<div class="macc-body"><div class="macc-body-inner">';
    if (cat.terms && cat.terms.length) {
      html += '<table class="info"><tr><th>Begriff</th><th>Definition</th></tr>';
      cat.terms.forEach(function(t){
        html += '<tr><td class="k">' + t[0] + '</td><td>' + t[1] + '</td></tr>';
      });
      html += '</table>';
    }
    if (cat.extra) { html += cat.extra; }
    html += '</div></div></div>';
    return html;
  }

  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.id = 'csOverlay';
  overlay.style.zIndex = '150';
  overlay.innerHTML =
    '<div class="modal" style="max-width:760px;">' +
      '<div class="modal-head">' +
        '<h2>Cheat Sheet · Scrum &amp; Produkt-Begriffe</h2>' +
        '<button class="modal-close" id="csModalClose">✕</button>' +
      '</div>' +
      '<div class="modal-body" id="csModalBody">' +
        '<input type="text" id="csSearch" placeholder="Suchen … z. B. Velocity, MVP, RICE" autocomplete="off" ' +
          'style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:8px;border:1.5px solid var(--border);background:var(--card);color:var(--ink);font-size:13px;margin-bottom:14px;">' +
        '<div id="csList"></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  var csList = overlay.querySelector('#csList');
  csList.innerHTML = CHEATSHEET.map(renderCategory).join('');

  var csSearch = overlay.querySelector('#csSearch');
  var csModalClose = overlay.querySelector('#csModalClose');
  var cheatsheetBtn = document.getElementById('cheatsheetBtn');

  function openCs(){
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    csSearch.value = '';
    filterCs('');
    setTimeout(function(){ csSearch.focus(); }, 50);
  }
  function closeCs(){
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  function filterCs(query){
    query = query.trim().toLowerCase();
    var maccEls = csList.querySelectorAll('.macc');
    maccEls.forEach(function(el){
      var idx = parseInt(el.getAttribute('data-cs-cat'), 10);
      var cat = CHEATSHEET[idx];
      if (!query) {
        el.style.display = '';
        return;
      }
      var matched = cat.title.toLowerCase().indexOf(query) !== -1 ||
        (cat.extra && cat.extra.toLowerCase().indexOf(query) !== -1) ||
        cat.terms.some(function(t){
          return t[0].toLowerCase().indexOf(query) !== -1 || t[1].toLowerCase().indexOf(query) !== -1;
        });
      if (matched) {
        el.style.display = '';
        el.classList.add('open');
      } else {
        el.style.display = 'none';
      }
    });
  }

  cheatsheetBtn.addEventListener('click', openCs);
  csModalClose.addEventListener('click', closeCs);
  overlay.addEventListener('click', function(e){ if (e.target === overlay) closeCs(); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && overlay.classList.contains('show')) closeCs();
  });
  csSearch.addEventListener('input', function(){ filterCs(csSearch.value); });

  csList.addEventListener('click', function(e){
    var head = e.target.closest('.macc-head');
    if (head) {
      head.closest('.macc').classList.toggle('open');
    }
  });
})();
