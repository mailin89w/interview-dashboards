// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Projektmanagerin Digital · Web &amp; E-Commerce · Referenz 2426831<br>Moltomedia · Videointerview mit Nicole Bernhard (ca. 30 Minuten, Teams)",
      role: "Projektmanagerin Digital",
      location: "Saarbrücken · Büro + Homeoffice („Remote“ im Titel – klären; ich: Hamburg)",
      interviewDate: "3. November 2026, 15:00 Uhr · Microsoft Teams",
      salaryAd: "nicht angegeben · Markt ca. 55.000–70.000 €",
      salaryAsk: "65.000 €",
      salaryMin: "60.000 € (strategische Untergrenze ca. 55.000 €)",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich komme nicht fachfremd ins Projektmanagement. Ich verbinde langjährige technische Agenturpraxis mit Struktur, <mark>verständlicher Kommunikation und einem realistischen Blick</mark> auf digitale Projekte.'
    },
    en: {
      roleSubtitle: "Digital Project Manager · Web &amp; E-Commerce · Ref. 2426831<br>Moltomedia · Video interview with Nicole Bernhard (approx. 30 minutes, Teams)",
      role: "Digital Project Manager",
      location: "Saarbrücken · office + home office (\"Remote\" in the title – to clarify; me: Hamburg)",
      interviewDate: "Nov 3, 2026, 3:00 PM · Microsoft Teams",
      salaryAd: "not stated · market approx. €55,000–70,000",
      salaryAsk: "€65,000",
      salaryMin: "€60,000 (strategic floor approx. €55,000)",
      introTitle: "Interview Prep",
      introText: 'I\'m not coming into project management from outside. I combine many years of technical agency practice with structure, <mark>clear communication, and a realistic view</mark> of digital projects.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"Moltomedia & die Rolle", en:"Moltomedia & the Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Fragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Plan für die ersten 90 Tage", en:"First 90 Days Plan"},
    8: {de:"Eigene Fragen an Nicole", en:"Questions for Nicole"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var H = function(t, first){ return '<p style="font-weight:800;color:var(--ink);margin:' + (first ? '0 0 6px' : '14px 0 6px') + ';">' + t + '</p>'; };
  var TERM = function(t){ return '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">' + t + '</p>'; };
  var MORE = function(label, body){ return '<div class="macc"><button class="macc-head">' + label + ' <span class="chev">▾</span></button><div class="macc-body"><div class="macc-body-inner">' + body + '</div></div></div>'; };
  var STAR = function(head, kern, kLabel, rows){
    return '<div class="macc"><button class="macc-head">' + head + ' <span class="chev">▾</span></button>' +
      '<div class="macc-body"><div class="macc-body-inner">' +
      '<div class="kern"><b>' + kLabel + ':</b> <mark>' + kern + '</mark></div>' +
      rows.map(function(r){ return '<div class="row"><b>' + r[0] + ':</b> ' + r[1] + '</div>'; }).join('') +
      '</div></div></div>';
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich komme nicht fachfremd ins Projektmanagement. Ich habe viele Aufgaben an der Schnittstelle zwischen Kunden, Design und Entwicklung bereits praktisch übernommen und mache diese Arbeit jetzt bewusst zu meinem Schwerpunkt.</div>' +
    '<p>Moltomedia hat das Gespräch ausdrücklich als erstes Kennenlernen angekündigt. In 30 Minuten geht es deshalb vor allem um vier Fragen: Wer bin ich, warum wechsle ich bewusst ins Projektmanagement, warum passt Moltomedia zu mir und stimmen die Rahmenbedingungen.</p>' +
    '<p>Mein Ziel ist nicht, jede Station aufzuzählen. Nicole soll nach dem Gespräch ein klares Bild haben: Ich verbinde langjährige technische Agenturpraxis mit Struktur, verständlicher Kommunikation und einem realistischen Blick auf digitale Projekte.</p>' +
    H('Meine Positionierung') +
    '<ul class="tight">' +
    '<li><b>Herkunft:</b> Mehr als zehn Jahre Frontend, Agentur, Web und E-Commerce.</li>' +
    '<li><b>Entwicklung:</b> Zunehmend Anforderungen, Aufwand, Prioritäten, Abstimmung, Tests, Releases und Go-lives begleitet.</li>' +
    '<li><b>Ziel:</b> Projektsteuerung bewusst zum Schwerpunkt machen und Verantwortung schrittweise ausbauen.</li>' +
    '<li><b>Nutzen:</b> Ich verstehe Devs, erkenne technische Folgen und mache Kundenwünsche für Design und Entwicklung umsetzbar.</li>' +
    '</ul>' +
    H('Fokus im Gespräch') +
    '<div class="lead">Kurz und konkret antworten. Erst Aussage, dann ein Beispiel. Keine alleinige Gesamtprojekt- oder Budgetverantwortung erfinden.</div>';

  CONTENT.en[1] = '<div class="lead">I\'m not coming into project management from outside. I\'ve already taken on many tasks at the interface between clients, design, and development in practice, and I\'m now deliberately making this work my focus.</div>' +
    '<p>Moltomedia explicitly announced the conversation as a first get-to-know-you. So the 30 minutes are mainly about four questions: who I am, why I\'m deliberately moving into project management, why Moltomedia fits me, and whether the conditions work.</p>' +
    '<p>My goal isn\'t to list every position. After the conversation, Nicole should have a clear picture: I combine many years of technical agency practice with structure, clear communication, and a realistic view of digital projects.</p>' +
    H('My Positioning') +
    '<ul class="tight">' +
    '<li><b>Origin:</b> More than ten years of frontend, agency, web, and e-commerce.</li>' +
    '<li><b>Development:</b> Increasingly accompanied requirements, effort, priorities, alignment, testing, releases, and go-lives.</li>' +
    '<li><b>Goal:</b> Deliberately make project steering my focus and expand responsibility step by step.</li>' +
    '<li><b>Value:</b> I understand devs, spot technical consequences, and make client requests actionable for design and development.</li>' +
    '</ul>' +
    H('Focus in the Conversation') +
    '<div class="lead">Answer short and concrete. Statement first, then an example. Don\'t invent sole end-to-end project or budget ownership.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
      '<button class="mtab" data-tab="weg">Woher · wohin</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre in Agenturen an Websites, Shops, Relaunches und digitalen Plattformen gearbeitet. Dabei hat sich mein Schwerpunkt mit der Zeit deutlich erweitert: Ich habe Anforderungen geklärt, Arbeitspakete und Abhängigkeiten strukturiert, Aufwandseinschätzungen begleitet, zwischen Kunden, Design und Devs vermittelt und Projekte bis zu Tests, Release und Go-live unterstützt.</p>' +
       '<p>Genau diese verbindende Arbeit liegt mir besonders. Ich verstehe, was technisch hinter einer Anforderung steckt, kann Risiken früh erkennen und gleichzeitig dafür sorgen, <mark>dass alle Beteiligten wissen, was entschieden ist und was als Nächstes passiert</mark>. Mit meiner Weiterbildung im AI Project Management habe ich diesen Rollenwechsel zusätzlich methodisch geschärft.</p>' +
       '<p>An Moltomedia reizt mich, dass ihr komplexe Web-, E-Commerce- und Schnittstellenprojekte ganzheitlich begleitet und Projektmanagement ausdrücklich als Schlüsselrolle zwischen Kunden, Design, Devs und Geschäftsführung versteht. Dafür bringe ich die technische Tiefe, Agenturerfahrung und die nötige Klarheit in der Zusammenarbeit mit.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich komme aus der Frontend-Entwicklung und habe mehr als zehn Jahre in Agenturen an Websites, Shops, Relaunches und Plattformen gearbeitet. Mein Schwerpunkt hat sich immer stärker auf Anforderungen, Abstimmung, Aufwand, Priorisierung, Tests und Go-lives verlagert. Ich verstehe die technische Seite und kann gleichzeitig dafür sorgen, dass Kunden, Design und Devs mit einer klaren Grundlage arbeiten.</p>' +
       '<div class="lead">Genau diese verbindende Rolle möchte ich bei Moltomedia zum Schwerpunkt machen.</div>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="weg" data-group="pitch">' +
       '<p style="font-weight:800;color:var(--ink);margin:0 0 6px;">Wo ich herkomme</p>' +
       '<ul class="tight">' +
       '<li>Mehr als zehn Jahre Frontend-, Web- und E-Commerce-Erfahrung in Digitalagenturen.</li>' +
       '<li>Projekte mit Shopify, Shopware, Spryker, WordPress sowie Vue, React und klassischen Webtechnologien.</li>' +
       '<li>Anforderungen von Briefing und Design bis zur technischen Umsetzung verstehen.</li>' +
       '<li>Kunden, Design, Backend, Frontend und externe Beteiligte zusammenbringen.</li>' +
       '<li>Tests, Korrekturen, Releases und Go-lives strukturiert begleiten.</li>' +
       '</ul>' +
       '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Wo ich hinwill</p>' +
       '<ul class="tight">' +
       '<li>Projektsteuerung als klaren beruflichen Schwerpunkt übernehmen.</li>' +
       '<li>Verantwortung für Struktur, Prioritäten, Kommunikation, Risiken und verlässliche nächste Schritte tragen.</li>' +
       '<li>Meine technische Erfahrung nutzen, ohne selbst wieder die Hauptverantwortung für den Code zu übernehmen.</li>' +
       '<li>Digitale Projekte von Kickoff bis Go-live und darüber hinaus zunehmend eigenständig steuern.</li>' +
       '</ul>' +
     '</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
      '<button class="mtab" data-tab="weg">Where from · where to</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from frontend development and spent more than ten years in agencies working on websites, shops, relaunches, and digital platforms. Over time my focus broadened considerably: I clarified requirements, structured work packages and dependencies, accompanied effort estimates, mediated between clients, design, and devs, and supported projects through testing, release, and go-live.</p>' +
       '<p>That bridging work suits me especially well. I understand what\'s technically behind a requirement, can spot risks early, and at the same time make sure <mark>everyone knows what\'s been decided and what happens next</mark>. My AI Project Management training has sharpened this role change methodically.</p>' +
       '<p>What appeals to me about Moltomedia is that you accompany complex web, e-commerce, and integration projects holistically and explicitly see project management as a key role between clients, design, devs, and management. For that I bring technical depth, agency experience, and the clarity collaboration needs.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I come from frontend development and spent more than ten years in agencies on websites, shops, relaunches, and platforms. My focus has shifted more and more to requirements, alignment, effort, prioritization, testing, and go-lives. I understand the technical side and can at the same time make sure clients, design, and devs work from a clear basis.</p>' +
       '<div class="lead">That bridging role is what I want to make my focus at Moltomedia.</div>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="weg" data-group="pitch">' +
       '<p style="font-weight:800;color:var(--ink);margin:0 0 6px;">Where I Come From</p>' +
       '<ul class="tight">' +
       '<li>More than ten years of frontend, web, and e-commerce experience in digital agencies.</li>' +
       '<li>Projects with Shopify, Shopware, Spryker, WordPress, plus Vue, React, and classic web technologies.</li>' +
       '<li>Understanding requirements from brief and design through technical delivery.</li>' +
       '<li>Bringing together clients, design, backend, frontend, and external parties.</li>' +
       '<li>Accompanying testing, fixes, releases, and go-lives in a structured way.</li>' +
       '</ul>' +
       '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Where I Want to Go</p>' +
       '<ul class="tight">' +
       '<li>Take on project steering as my clear professional focus.</li>' +
       '<li>Own structure, priorities, communication, risks, and reliable next steps.</li>' +
       '<li>Use my technical experience without taking main responsibility for the code again.</li>' +
       '<li>Increasingly steer digital projects independently from kickoff through go-live and beyond.</li>' +
       '</ul>' +
     '</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Technische und fachliche Anforderungen übersetzen</div><div class="b">Ich kann Kundenwünsche und Designs so strukturieren, dass Devs damit arbeiten können. Bei Patrick &amp; Friends habe ich Anforderungen, offene Zustände, technische Abhängigkeiten und Prüfkriterien früh geklärt. Dadurch wurden Rückfragen und Risiken sichtbar, bevor sie kurz vor dem Go-live teuer wurden.</div></div>' +
    '<div class="c"><div class="t">Komplexität in handhabbare Schritte bringen</div><div class="b">Ich trenne Ziele, Muss-Anforderungen, Optionen und offene Entscheidungen. Bei Relaunches und E-Commerce-Projekten habe ich daraus Arbeitspakete, Prioritäten und realistische nächste Schritte abgeleitet. Das schafft Orientierung für Kunden und Team.</div></div>' +
    '<div class="c"><div class="t">Qualität und Umsetzung zusammen denken</div><div class="b">Durch meinen Entwicklungsbackground erkenne ich, wo ein visuell einfacher Wunsch technische Folgen hat. Ich begleite Anforderungen, Tests, Korrekturen und Release nicht als getrennte Inseln, sondern als zusammenhängenden Ablauf.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Schwächen, die zu mir passen</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Ich spreche Unklarheiten und Risiken eher direkt an. Das ist in Projekten nützlich, kann aber je nach Situation härter wirken als beabsichtigt. Deshalb achte ich bewusst auf Zeitpunkt, Kontext und Formulierung: klar in der Sache, respektvoll gegenüber der Person.</li>' +
    '<li><b>Trockener Humor und Sarkasmus:</b> Gehört zu mir und kann Spannung aus einer Situation nehmen. Bei neuen Kontakten oder in einer angespannten Lage halte ich ihn zunächst zurück, bis ich die Menschen und den Rahmen einschätzen kann.</li>' +
    '<li><b>Nur bei lockerer Atmosphäre:</b> Meine harmloseste Schwäche ist Kinderschokolade. Die gefährdet höchstens den Bürovorrat, nicht das Projekt. Nur als kurzen menschlichen Abschluss nutzen, nicht als einzige Schwäche.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Translating technical and business requirements</div><div class="b">I can structure client requests and designs so devs can work with them. At Patrick &amp; Friends, I clarified requirements, open states, technical dependencies, and acceptance criteria early. That surfaced questions and risks before they became expensive right before go-live.</div></div>' +
    '<div class="c"><div class="t">Breaking complexity into manageable steps</div><div class="b">I separate goals, must-haves, options, and open decisions. In relaunches and e-commerce projects, I derived work packages, priorities, and realistic next steps from that. It gives clients and the team orientation.</div></div>' +
    '<div class="c"><div class="t">Thinking quality and delivery together</div><div class="b">Thanks to my development background, I see where a visually simple request has technical consequences. I treat requirements, testing, fixes, and release not as separate islands but as one connected flow.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Weaknesses That Fit Me</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> I tend to address ambiguity and risk directly. Useful in projects, but depending on the situation it can land harder than intended. So I\'m deliberate about timing, context, and phrasing: clear on the matter, respectful toward the person.</li>' +
    '<li><b>Dry humor and sarcasm:</b> part of who I am and can take tension out of a situation. With new contacts or in a tense moment I hold it back until I can read the people and the setting.</li>' +
    '<li><b>Only when the mood is relaxed:</b> my most harmless weakness is Kinderschokolade. It endangers, at most, the office supply — not the project. Use only as a short human closer, never as the only weakness.</li>' +
    '</ul>';

  // ===== 4 · Moltomedia & the Role =====
  CONTENT.de[4] = H('Was Moltomedia macht', true) +
    '<p>Moltomedia ist ein inhabergeführtes IT- und Digitalunternehmen aus Saarbrücken und arbeitet seit 1995 an digitalen Lösungen für mittelständische Unternehmen. Das Angebot reicht von IT-Strategieberatung und Prozessdigitalisierung über Webentwicklung, E-Commerce und Individualsoftware bis zu Schnittstellen, Cloud-Lösungen und UI/UX.</p>' +
    '<p>Der eigene Ablauf wird als flexibel und agil beschrieben: <b>Analyse, Beratung, Umsetzung und anschließender Support.</b> Moltomedia betont individuelle, herstellerunabhängige Lösungen sowie langfristige Betreuung statt einer vorgegebenen Standardlösung.</p>' +
    '<p><b>Referenzen</b> (Auswahl): DCON, Hape, Ledlenser, Villeroy &amp; Boch, Rudloff, Raab Verlag.</p>' +
    H('Warum Moltomedia – drei Punkte') +
    '<ol class="tight">' +
    '<li><b>Technische Substanz:</b> Nicht nur Websites, sondern auch Webshops, individuelle Plattformen und Schnittstellen. Hier hilft mein technischer Hintergrund unmittelbar.</li>' +
    '<li><b>Direkte Zusammenarbeit:</b> Laut Anzeige sitzen Projektmanagement, Entwicklung, Design und Geschäftsführung an einem Tisch. Das entspricht meiner Arbeitsweise: offene Fragen früh klären und Entscheidungen verständlich machen.</li>' +
    '<li><b>Pragmatische Methodenwahl:</b> Scrum, Kanban und klassische Planung werden nicht dogmatisch, sondern passend zum Projekt eingesetzt.</li>' +
    '</ol>' +
    H('Die Rolle Projektmanagerin Digital') +
    '<p>Digitale Projekte von Kickoff bis Go-live und darüber hinaus steuern; Kunden beraten; Roadmaps, Timelines, Backlogs und Reporting pflegen; Risiken und Qualität sichern. Projektmanagement wird ausdrücklich als Schlüsselrolle zwischen Kunden, Design, Devs und Geschäftsführung verstanden.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Anforderungen der Stelle und meine Belege</p>' +
    '<table class="info">' +
    '<tr><th>Erwartung der Stelle</th><th>Was ich glaubwürdig mitbringe</th></tr>' +
    '<tr><td class="k">Digitale Projekte von Kickoff bis Go-live</td><td>Erfahrung mit Anforderungen, Arbeitspaketen, Abhängigkeiten, Tests, Releases und Go-lives in Web- und E-Commerce-Projekten</td></tr>' +
    '<tr><td class="k">Vermittlung zwischen Kunden, Devs, Design und Management</td><td>Langjährige Agenturpraxis genau an diesen Schnittstellen</td></tr>' +
    '<tr><td class="k">Roadmaps, Timelines, Backlogs und Reporting</td><td>Strukturierte Planung, Jira, Confluence, Priorisierung und nachvollziehbare nächste Schritte</td></tr>' +
    '<tr><td class="k">Technisches Verständnis</td><td>Senior-Frontend-Hintergrund; Shopsysteme, CMS, Schnittstellen und responsive Anwendungen</td></tr>' +
    '<tr><td class="k">Scrum, Kanban und pragmatisches Vorgehen</td><td>Praxis mit Scrum, Kanban und Scrumban sowie Weiterbildung im Projektmanagement</td></tr>' +
    '<tr><td class="k">Qualität, Risiken und Abhängigkeiten</td><td>Technische Auswirkungen früh erkennen, Prüfkriterien klären, Releases strukturiert absichern</td></tr>' +
    '<tr><td class="k">Eigenständigkeit und klare Kommunikation</td><td>Direkte, lösungsorientierte Abstimmung; Entscheidungen und Folgen transparent machen</td></tr>' +
    '</table>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;"><b>Lernfelder:</b> formale End-to-End-Verantwortung, alleinige Budgetverantwortung und Moltomedias interne Abläufe.</p>' +

    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Begriffe, die ich für dieses Gespräch kennen sollte</p>' +

    TERM('Schnittstellen (APIs, ERP, PIM)') +
    '<ul class="tight">' +
    '<li>Verbindung zwischen Systemen, z. B. Shop ↔ Warenwirtschaft (ERP) ↔ Produktdaten (PIM)</li>' +
    '<li>Typisch im Mittelstand: Bestellungen, Lagerbestand, Preise, Kunden synchronisieren</li>' +
    '<li>Häufigste Quelle versteckter Aufwände und Risiken in E-Commerce-Projekten</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p>Eine <b>API</b> definiert, wie zwei Systeme Daten austauschen (meist REST/JSON, teilweise SOAP, Dateiexporte oder Middleware). Ein <b>ERP</b> (z. B. SAP, Microsoft Dynamics, weclapp) führt Aufträge, Lager und Buchhaltung; ein <b>PIM</b> verwaltet Produktdaten zentral für mehrere Kanäle.</p>' +
      '<p><b>Was das für die Projektrolle heißt:</b> früh klären, welches System „führend“ für welche Daten ist, wie oft synchronisiert wird, was bei Fehlern passiert und wer auf Kundenseite das Fremdsystem verantwortet. Testdaten und Testumgebungen der Gegenseite rechtzeitig einplanen.</p>' +
      '<div class="erg">Brücke zu mir: Shopware- und Spryker-Projekte mit Backend- und externen Beteiligten – Abhängigkeiten sichtbar machen ist genau meine Stärke.</div>') +

    TERM('Herstellerunabhängig / Individualsoftware') +
    '<ul class="tight">' +
    '<li>Moltomedia wählt die Technologie passend zum Kunden, nicht umgekehrt</li>' +
    '<li>Individualsoftware = maßgeschneiderte Lösung statt Standardprodukt</li>' +
    '<li>Für PM: Systemauswahl und Anforderungsanalyse werden wichtiger</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p>Bei Standardsoftware (z. B. Shopify) passt man Prozesse an das System an; bei Individualsoftware baut man das System um die Prozesse herum. Das bietet Flexibilität, erhöht aber Anforderungs-, Test- und Wartungsaufwand.</p>' +
      '<p><b>Was das für die Projektrolle heißt:</b> saubere Analyse vor der Umsetzung, klare Abnahmekriterien und ein Plan für Support und Weiterentwicklung nach dem Go-live – passt zu Moltomedias Phasen Analyse, Beratung, Umsetzung, Support.</p>' +
      '<div class="erg">Im Gespräch: Interesse zeigen, wie die Analysephase bei Moltomedia läuft und wer die Systemauswahl verantwortet.</div>') +

    TERM('Change Request') +
    '<ul class="tight">' +
    '<li>Formale Änderung am vereinbarten Projektumfang</li>' +
    '<li>Wird bewertet: Aufwand, Termin, Kosten, Risiko</li>' +
    '<li>Erst nach Freigabe durch den Kunden umsetzen</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p><b>Ablauf:</b> Wunsch aufnehmen → gegen den Scope prüfen → Auswirkungen mit Design und Entwicklung schätzen → Optionen oder Nachtragsangebot → Freigabe → in die Planung aufnehmen. Alternativ etwas anderes dafür verschieben.</p>' +
      '<div class="erg">Brücke zu mir: STAR 2 (Zusatzwünsche bei festem Termin) – Muss und Kann trennen, Optionen mit Folgen zeigen.</div>') +

    TERM('Festpreis vs. Time &amp; Material') +
    '<ul class="tight">' +
    '<li>Festpreis: fester Umfang zum festen Preis, Risiko bei der Agentur</li>' +
    '<li>Time &amp; Material: Abrechnung nach Aufwand, Risiko beim Kunden</li>' +
    '<li>Für Support nach Go-live oft Wartungsvertrag oder Stundenkontingent</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p><b>Angebotskalkulation grob:</b> Anforderungen in Arbeitspakete zerlegen → Aufwand je Gewerk schätzen → PM und Risikopuffer ergänzen → mit Tagessätzen multiplizieren → Annahmen und Ausschlüsse dokumentieren. Budget laufend Ist gegen Plan verfolgen.</p>' +
      '<div class="erg">Ehrlich bleiben: Aufwandsschätzung und Scope-Klärung habe ich gemacht, alleinige Budgetverantwortung nicht.</div>');

  CONTENT.en[4] = H('What Moltomedia Does', true) +
    '<p>Moltomedia is an owner-managed IT and digital company from Saarbrücken that has been building digital solutions for mid-sized companies since 1995. Services range from IT strategy consulting and process digitalization through web development, e-commerce, and custom software to integrations, cloud solutions, and UI/UX.</p>' +
    '<p>Their own process is described as flexible and agile: <b>analysis, consulting, delivery, and ongoing support.</b> Moltomedia emphasizes individual, vendor-independent solutions and long-term care rather than a prescribed standard solution.</p>' +
    '<p><b>References</b> (selection): DCON, Hape, Ledlenser, Villeroy &amp; Boch, Rudloff, Raab Verlag.</p>' +
    H('Why Moltomedia – Three Points') +
    '<ol class="tight">' +
    '<li><b>Technical substance:</b> not just websites, but web shops, custom platforms, and integrations. My technical background helps directly here.</li>' +
    '<li><b>Direct collaboration:</b> per the ad, project management, development, design, and management sit at one table. That matches how I work: clarify open questions early and make decisions understandable.</li>' +
    '<li><b>Pragmatic choice of method:</b> Scrum, Kanban, and classic planning are used to fit the project, not dogmatically.</li>' +
    '</ol>' +
    H('The Digital Project Manager Role') +
    '<p>Steer digital projects from kickoff through go-live and beyond; advise clients; maintain roadmaps, timelines, backlogs, and reporting; secure risks and quality. Project management is explicitly seen as a key role between clients, design, devs, and management.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Evidence</p>' +
    '<table class="info">' +
    '<tr><th>Expectation</th><th>What I credibly bring</th></tr>' +
    '<tr><td class="k">Digital projects from kickoff to go-live</td><td>Experience with requirements, work packages, dependencies, testing, releases, and go-lives in web and e-commerce projects</td></tr>' +
    '<tr><td class="k">Mediating between clients, devs, design, and management</td><td>Many years of agency practice exactly at these interfaces</td></tr>' +
    '<tr><td class="k">Roadmaps, timelines, backlogs, reporting</td><td>Structured planning, Jira, Confluence, prioritization, and traceable next steps</td></tr>' +
    '<tr><td class="k">Technical understanding</td><td>Senior frontend background; shop systems, CMS, integrations, and responsive applications</td></tr>' +
    '<tr><td class="k">Scrum, Kanban, pragmatic approach</td><td>Hands-on Scrum, Kanban, and Scrumban, plus project management training</td></tr>' +
    '<tr><td class="k">Quality, risks, dependencies</td><td>Spot technical impact early, clarify acceptance criteria, secure releases in a structured way</td></tr>' +
    '<tr><td class="k">Independence and clear communication</td><td>Direct, solution-oriented alignment; make decisions and consequences transparent</td></tr>' +
    '</table>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;"><b>Learning areas:</b> formal end-to-end ownership, sole budget ownership, and Moltomedia\'s internal processes.</p>' +

    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Terms I Should Know for This Conversation</p>' +

    TERM('Integrations (APIs, ERP, PIM)') +
    '<ul class="tight">' +
    '<li>Connections between systems, e.g. shop ↔ ERP ↔ product data (PIM)</li>' +
    '<li>Typical for mid-sized companies: syncing orders, stock, prices, customers</li>' +
    '<li>Most common source of hidden effort and risk in e-commerce projects</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p>An <b>API</b> defines how two systems exchange data (usually REST/JSON, sometimes SOAP, file exports, or middleware). An <b>ERP</b> (e.g. SAP, Microsoft Dynamics, weclapp) handles orders, stock, and accounting; a <b>PIM</b> manages product data centrally for several channels.</p>' +
      '<p><b>What it means for the project role:</b> clarify early which system "leads" for which data, how often it syncs, what happens on errors, and who owns the third-party system on the client side. Plan test data and test environments from the other side in good time.</p>' +
      '<div class="erg">Bridge to me: Shopware and Spryker projects with backend and external parties — making dependencies visible is exactly my strength.</div>') +

    TERM('Vendor-independent / custom software') +
    '<ul class="tight">' +
    '<li>Moltomedia picks the technology to fit the client, not the other way round</li>' +
    '<li>Custom software = tailor-made solution instead of a standard product</li>' +
    '<li>For PM: system selection and requirements analysis matter more</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p>With standard software (e.g. Shopify) you adapt processes to the system; with custom software you build the system around the processes. That gives flexibility but raises requirements, testing, and maintenance effort.</p>' +
      '<p><b>What it means for the project role:</b> clean analysis before delivery, clear acceptance criteria, and a plan for support and further development after go-live — fits Moltomedia\'s phases of analysis, consulting, delivery, support.</p>' +
      '<div class="erg">In the conversation: show interest in how the analysis phase works at Moltomedia and who owns system selection.</div>') +

    TERM('Change Request') +
    '<ul class="tight">' +
    '<li>Formal change to the agreed project scope</li>' +
    '<li>Assessed for effort, timeline, cost, risk</li>' +
    '<li>Only implemented after client approval</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p><b>Flow:</b> capture the request → check against scope → estimate impact with design and development → options or supplementary quote → approval → add to planning. Alternatively, move something else out instead.</p>' +
      '<div class="erg">Bridge to me: STAR 2 (extra requests with a fixed deadline) — separate must from nice-to-have, show options with consequences.</div>') +

    TERM('Fixed Price vs. Time &amp; Material') +
    '<ul class="tight">' +
    '<li>Fixed price: fixed scope at a fixed price, risk with the agency</li>' +
    '<li>Time &amp; material: billed by effort, risk with the client</li>' +
    '<li>Post-launch support often via maintenance contract or hour contingent</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p><b>Rough quote calculation:</b> break requirements into work packages → estimate effort per discipline → add PM and risk buffer → multiply by day rates → document assumptions and exclusions. Track budget actual vs. plan continuously.</p>' +
      '<div class="erg">Stay honest: I\'ve done effort estimation and scope clarification, not sole budget ownership.</div>');

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Für 30 Minuten zwei Beispiele parat haben: <b>1 Anforderungen klären</b> und <b>2 Zusatzwünsche priorisieren</b>. Kennzahlen nur nennen, wenn sie belegt sind.</div>' +
    STAR('1 · Kundenwunsch in eine umsetzbare Aufgabe übersetzen', 'Ich kläre zuerst Ziel und Rahmen, bevor ich über Lösung oder Aufwand spreche.', 'Kernaussage', [
      ['Situation', 'In Web- und E-Commerce-Projekten waren Briefings oder Designs teilweise noch offen, während bereits Aufwand und Umsetzung geplant werden sollten.'],
      ['Aufgabe', 'Eine belastbare Grundlage für Devs, Design und Kunden schaffen.'],
      ['Vorgehen', 'Ich habe Ziel, Nutzerfall, Zustände und Abhängigkeiten geklärt, Annahmen markiert und daraus Arbeitspakete sowie Prüfkriterien formuliert.'],
      ['Ergebnis', 'Offene Entscheidungen wurden früher sichtbar und alle Beteiligten arbeiteten mit derselben Grundlage.']
    ]) +
    STAR('2 · Zusatzwünsche bei festem Termin priorisieren', 'Eine nachvollziehbare Entscheidung statt eines stillen Ja.', 'Kernaussage', [
      ['Situation', 'Vor einem geplanten Go-live kamen weitere Wünsche hinzu, während technische Abhängigkeiten bereits bestanden.'],
      ['Aufgabe', 'Den notwendigen Umfang schützen und trotzdem nachvollziehbar mit den Wünschen umgehen.'],
      ['Vorgehen', 'Ich habe Muss und Kann getrennt, Aufwand und Risiken mit den Devs geprüft und Optionen mit Folgen für Termin, Qualität und Umfang dargestellt.'],
      ['Ergebnis', 'Der Go-live konnte auf einen klaren Kern ausgerichtet werden; weitere Wünsche blieben sauber dokumentiert und planbar.']
    ]) +
    STAR('3 · Design und technische Umsetzung verbinden', 'Design und Technik nicht als Übergabe, sondern als gemeinsame Klärung.', 'Kernaussage', [
      ['Situation', 'Visuelle Konzepte mussten zu Daten, CMS, responsivem Verhalten und technischen Grenzen passen.'],
      ['Aufgabe', 'Gestalterische Qualität und realistische Umsetzung zusammenbringen.'],
      ['Vorgehen', 'Ich habe Designs auf Zustände, Inhalte und Abhängigkeiten geprüft, offene Punkte mit Design und Devs geklärt und Entscheidungen in umsetzbare Aufgaben übertragen.'],
      ['Ergebnis', 'Technische Fragen wurden früher erkannt und Nacharbeit in der Umsetzung reduziert.']
    ]) +
    STAR('4 · Gemeinsame Plattform für viele Marken (deepblue)', 'Gemeinsame Logik, konfigurierbare Unterschiede und echte Sonderfälle trennen.', 'Kernaussage', [
      ['Situation', 'Bei deepblue wurde eine modulare Plattform für mehr als zehn Unilever-Marken im DACH-Raum weiterentwickelt.'],
      ['Aufgabe', 'Unterschiedliche Markenanforderungen mit Wiederverwendbarkeit und konsistenter Qualität verbinden.'],
      ['Vorgehen', 'Ich habe gemeinsame Logik, konfigurierbare Unterschiede und echte Sonderfälle voneinander getrennt und Anforderungen entsprechend strukturiert.'],
      ['Ergebnis', 'Unterschiedliche Markenauftritte konnten auf einer gemeinsamen technischen Grundlage umgesetzt werden.']
    ]) +
    STAR('5 · Risiko vor einem Release bewerten', 'Entscheidungen auf Basis eines klaren Fehlerbilds.', 'Kernaussage', [
      ['Situation', 'Kurz vor einem geplanten Release musste ein Fehler hinsichtlich Auswirkung und Dringlichkeit bewertet werden.'],
      ['Aufgabe', 'Eine belastbare Entscheidung zwischen Korrektur, Workaround und Verschiebung ermöglichen.'],
      ['Vorgehen', 'Ich habe Soll und Ist, Reproduktionsschritte, betroffene Bereiche und Abhängigkeiten dokumentiert und die Optionen transparent gemacht.'],
      ['Ergebnis', 'Das Team konnte auf Basis eines klaren Fehlerbilds entscheiden; Korrektur und Retest wurden nachvollziehbar verfolgt.']
    ]) +
    STAR('6 · Pragmatische Methodenwahl', 'Genug Struktur, ohne den Ablauf unnötig schwer zu machen.', 'Kernaussage', [
      ['Situation', 'Agenturprojekte hatten feste Kundentermine, laufende Änderungswünsche und unterschiedlich gut planbare Arbeit.'],
      ['Aufgabe', 'Genug Struktur schaffen, ohne den Ablauf unnötig schwer zu machen.'],
      ['Vorgehen', 'Ich habe feste Meilensteine und Entscheidungszeitpunkte mit einem priorisierten Backlog und kurzen Abstimmungen kombiniert.'],
      ['Ergebnis', 'Termine und Abhängigkeiten blieben sichtbar, während das Team auf Änderungen reagieren konnte.']
    ]);

  CONTENT.en[5] = '<div class="lead">For 30 minutes, have two examples ready: <b>1 clarifying requirements</b> and <b>2 prioritizing extra requests</b>. Only name figures when documented.</div>' +
    STAR('1 · Turning a client request into an actionable task', 'I clarify the goal and framework first, before talking about solution or effort.', 'Core message', [
      ['Situation', 'In web and e-commerce projects, briefs or designs were sometimes still open while effort and delivery were already being planned.'],
      ['Task', 'Create a solid basis for devs, design, and clients.'],
      ['Action', 'I clarified the goal, use case, states, and dependencies, flagged assumptions, and derived work packages and acceptance criteria.'],
      ['Result', 'Open decisions surfaced earlier and everyone worked from the same basis.']
    ]) +
    STAR('2 · Prioritizing extra requests with a fixed deadline', 'A traceable decision instead of a silent yes.', 'Core message', [
      ['Situation', 'Before a planned go-live, more requests came in while technical dependencies already existed.'],
      ['Task', 'Protect the necessary scope and still handle the requests transparently.'],
      ['Action', 'I separated must from nice-to-have, checked effort and risk with the devs, and laid out options with consequences for timeline, quality, and scope.'],
      ['Result', 'Go-live could focus on a clear core; further requests stayed cleanly documented and plannable.']
    ]) +
    STAR('3 · Connecting design and technical delivery', 'Design and tech not as a handover, but as a joint clarification.', 'Core message', [
      ['Situation', 'Visual concepts had to fit data, CMS, responsive behavior, and technical limits.'],
      ['Task', 'Bring design quality and realistic delivery together.'],
      ['Action', 'I checked designs for states, content, and dependencies, clarified open points with design and devs, and turned decisions into actionable tasks.'],
      ['Result', 'Technical questions were spotted earlier and rework during delivery was reduced.']
    ]) +
    STAR('4 · One platform for many brands (deepblue)', 'Separate shared logic, configurable differences, and genuine edge cases.', 'Core message', [
      ['Situation', 'At deepblue, a modular platform for more than ten Unilever brands in DACH was being developed further.'],
      ['Task', 'Combine different brand requirements with reusability and consistent quality.'],
      ['Action', 'I separated shared logic, configurable differences, and genuine edge cases and structured requirements accordingly.'],
      ['Result', 'Different brand experiences could be delivered on a shared technical foundation.']
    ]) +
    STAR('5 · Assessing risk before a release', 'Decisions based on a clear defect picture.', 'Core message', [
      ['Situation', 'Shortly before a planned release, a defect had to be assessed for impact and urgency.'],
      ['Task', 'Enable a solid decision between fix, workaround, and postponement.'],
      ['Action', 'I documented expected vs. actual, reproduction steps, affected areas, and dependencies and made the options transparent.'],
      ['Result', 'The team could decide on a clear defect picture; fix and retest were tracked traceably.']
    ]) +
    STAR('6 · Pragmatic choice of method', 'Enough structure without making the process heavy.', 'Core message', [
      ['Situation', 'Agency projects had fixed client dates, ongoing change requests, and work of varying predictability.'],
      ['Task', 'Create enough structure without making the process unnecessarily heavy.'],
      ['Action', 'I combined fixed milestones and decision points with a prioritized backlog and short alignments.'],
      ['Result', 'Dates and dependencies stayed visible while the team could react to changes.']
    ]);

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Sie waren bisher Senior Frontend Developerin. Warum Projektmanagement?“</div>' +
    '<p>Der Jobtitel war bisher technisch, meine Arbeit schon lange breiter. Ich habe zunehmend Anforderungen geklärt, Aufwand und Abhängigkeiten eingeordnet, Beteiligte koordiniert, Entscheidungen vorbereitet und Releases begleitet. Dabei habe ich gemerkt, dass mir genau diese verbindende und strukturierende Rolle besonders liegt. Der Wechsel ist deshalb bewusst, aber kein Sprung in ein völlig fremdes Feld.</p>' +
    '<div class="lead">„Haben Sie bereits mehrere Jahre vollständige Projektverantwortung?“</div>' +
    '<p>Ich habe viele zentrale Aufgaben der Projektsteuerung praktisch übernommen, aber noch nicht über mehrere Jahre unter dem formalen Titel Projektmanagerin jedes Projekt allein kaufmännisch verantwortet. Das stelle ich nicht größer dar, als es ist. Meine Stärke ist, dass ich den operativen und technischen Projektalltag sehr gut kenne und die formale Gesamtverantwortung jetzt gezielt ausbauen möchte.</p>' +
    '<div class="lead">„Wie sieht es mit Budgetverantwortung aus?“</div>' +
    '<p>Ich kenne den Zusammenhang zwischen Scope, Aufwand, Termin und Qualität und habe Aufwandseinschätzungen sowie Priorisierungsentscheidungen begleitet. Eine alleinige kaufmännische Gesamtbudgetverantwortung würde ich nicht behaupten. Mir ist wichtig zu verstehen, wie Kalkulation, Freigaben, Controlling und Change Requests bei Moltomedia verteilt sind.</p>' +
    '<div class="lead">„Können Sie sich durchsetzen?“</div>' +
    '<p>Für mich bedeutet Durchsetzungsfähigkeit nicht, lauter zu sein. Ich mache Ziel, Entscheidungsbedarf und Folgen transparent. Wenn ein Termin und zusätzliche Wünsche nicht gleichzeitig realistisch sind, benenne ich die Optionen klar und führe eine Entscheidung herbei.</p>' +
    '<div class="lead">„Führerschein Klasse B?“</div>' +
    '<p>Vor dem Gespräch den eigenen Status prüfen und ehrlich antworten. Falls kein Führerschein vorhanden ist: nicht ausweichen, sondern direkt klären, wie häufig Kunden- oder Vor-Ort-Termine tatsächlich vorkommen und welche Mobilitätsanforderung dahintersteht.</p>' +
    '<div class="lead">„Saarbrücken, Remote oder Homeoffice?“</div>' +
    '<p>Die Anzeige ist mit Saarbrücken und Remote überschrieben, nennt im Text aber ein zentrales Büro in Saarbrücken kombiniert mit Homeoffice-Möglichkeiten. Deshalb nicht von einer vollständig ortsunabhängigen Stelle ausgehen. Klar fragen, welche regelmäßige Präsenz und welche Reisetätigkeit für eine Person mit Wohnort Hamburg erwartet werden.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Wahrscheinliche Fragen im ersten Gespräch</p>' +
    '<div class="lead">„Warum möchten Sie zu Moltomedia?“</div>' +
    '<p>Weil sich meine Erfahrung sehr konkret mit euren Projekten überschneidet: Agentur, Web, E-Commerce, Plattformen, Schnittstellen und die direkte Zusammenarbeit mit Design und Devs. Gleichzeitig ist die Rolle klar auf Struktur, Kundenkommunikation und Verantwortung ausgerichtet. Genau diesen Schwerpunkt möchte ich weiter ausbauen.</p>' +
    '<div class="lead">„Was erwarten Sie von Ihrer nächsten Rolle?“</div>' +
    '<p>Ich möchte Verantwortung für den Ablauf digitaler Projekte übernehmen: Anforderungen klären, Prioritäten und Abhängigkeiten sichtbar machen, Entscheidungen vorbereiten und für verlässliche Kommunikation sorgen. Wichtig ist mir ein Umfeld, in dem Projektmanagement, Design und Devs direkt zusammenarbeiten.</p>' +
    '<div class="lead">„Wie gehen Sie mit unklaren Anforderungen um?“</div>' +
    '<p>Ich beginne mit dem Ziel: Was soll für Nutzer oder Unternehmen besser werden. Danach trenne ich bekannte Anforderungen, Annahmen, offene Fragen und Abhängigkeiten. Erst wenn die entscheidenden Punkte geklärt sind, wird daraus ein belastbares Arbeitspaket mit Prüfkriterien.</p>' +
    '<div class="lead">„Wie reagieren Sie auf zusätzliche Wünsche kurz vor dem Go-live?“</div>' +
    '<p>Ich prüfe zunächst Nutzen, Dringlichkeit, Aufwand, Risiko und Abhängigkeiten. Danach zeige ich Optionen: aufnehmen und etwas anderes verschieben, nach dem Go-live einplanen oder bewusst Termin beziehungsweise Budget anpassen. Wichtig ist eine nachvollziehbare Entscheidung statt eines stillen Ja.</p>' +
    '<div class="lead">„Was ist Ihnen in der Zusammenarbeit wichtig?“</div>' +
    '<p>Direkte Kommunikation, klare Zuständigkeiten und Entscheidungen, die dokumentiert und verständlich sind. Menschen müssen nicht immer derselben Meinung sein, aber sie sollten wissen, was entschieden wurde und warum.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">30-Minuten-Ablauf</p>' +
    '<table class="info">' +
    '<tr><th>Minute</th><th>Inhalt</th></tr>' +
    '<tr><td class="k">0–5</td><td>Begrüßung und Rahmen. Ruhig ankommen.</td></tr>' +
    '<tr><td class="k">5–15</td><td>Pitch, Motivation, Rollenwechsel und ein konkretes Beispiel.</td></tr>' +
    '<tr><td class="k">15–23</td><td>Rückfragen zu Erfahrung, Arbeitsweise, Gehalt und Start.</td></tr>' +
    '<tr><td class="k">23–30</td><td>Zwei eigene Fragen und nächster Schritt.</td></tr>' +
    '</table>';

  CONTENT.en[6] = '<div class="lead">"You were a Senior Frontend Developer. Why project management?"</div>' +
    '<p>My job title was technical, but my work had long been broader. I increasingly clarified requirements, assessed effort and dependencies, coordinated stakeholders, prepared decisions, and accompanied releases. That\'s how I noticed this bridging, structuring role suits me especially well. So the move is deliberate, but not a leap into a completely unfamiliar field.</p>' +
    '<div class="lead">"Do you already have several years of full project ownership?"</div>' +
    '<p>I\'ve taken on many core project-steering tasks in practice, but I haven\'t yet owned every project alone commercially for several years under the formal title of project manager. I don\'t make it bigger than it is. My strength is that I know day-to-day operational and technical project work very well and now want to expand formal overall responsibility deliberately.</p>' +
    '<div class="lead">"What about budget responsibility?"</div>' +
    '<p>I know how scope, effort, timeline, and quality relate and have accompanied effort estimates and prioritization decisions. I wouldn\'t claim sole commercial ownership of overall budgets. It\'s important to me to understand how calculation, approvals, controlling, and change requests are split at Moltomedia.</p>' +
    '<div class="lead">"Can you assert yourself?"</div>' +
    '<p>For me, assertiveness doesn\'t mean being louder. I make the goal, the need for a decision, and the consequences transparent. If a deadline and extra requests aren\'t realistic together, I name the options clearly and bring about a decision.</p>' +
    '<div class="lead">"Driving licence class B?"</div>' +
    '<p>Check my own status before the conversation and answer honestly. If there\'s no licence: don\'t dodge, but clarify directly how often client or on-site appointments actually happen and what mobility requirement lies behind it.</p>' +
    '<div class="lead">"Saarbrücken, remote, or home office?"</div>' +
    '<p>The ad is headed Saarbrücken and Remote, but the text names a central office in Saarbrücken combined with home-office options. So don\'t assume a fully location-independent role. Ask clearly what regular presence and travel are expected for someone living in Hamburg.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Likely Questions in the First Conversation</p>' +
    '<div class="lead">"Why do you want to join Moltomedia?"</div>' +
    '<p>Because my experience overlaps very concretely with your projects: agency, web, e-commerce, platforms, integrations, and direct collaboration with design and devs. At the same time, the role is clearly focused on structure, client communication, and responsibility. That\'s exactly the focus I want to expand.</p>' +
    '<div class="lead">"What do you expect from your next role?"</div>' +
    '<p>I want to own the flow of digital projects: clarify requirements, make priorities and dependencies visible, prepare decisions, and ensure reliable communication. An environment where project management, design, and devs work together directly matters to me.</p>' +
    '<div class="lead">"How do you handle unclear requirements?"</div>' +
    '<p>I start with the goal: what should get better for users or the business. Then I separate known requirements, assumptions, open questions, and dependencies. Only once the key points are clarified does it become a solid work package with acceptance criteria.</p>' +
    '<div class="lead">"How do you react to extra requests shortly before go-live?"</div>' +
    '<p>First I check value, urgency, effort, risk, and dependencies. Then I show options: take it in and move something else, plan it after go-live, or deliberately adjust timeline or budget. What matters is a traceable decision instead of a silent yes.</p>' +
    '<div class="lead">"What matters to you in collaboration?"</div>' +
    '<p>Direct communication, clear responsibilities, and decisions that are documented and understandable. People don\'t always have to agree, but they should know what was decided and why.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">30-Minute Flow</p>' +
    '<table class="info">' +
    '<tr><th>Minute</th><th>Content</th></tr>' +
    '<tr><td class="k">0–5</td><td>Welcome and framing. Settle in calmly.</td></tr>' +
    '<tr><td class="k">5–15</td><td>Pitch, motivation, role change, and one concrete example.</td></tr>' +
    '<tr><td class="k">15–23</td><td>Follow-ups on experience, working style, salary, and start.</td></tr>' +
    '<tr><td class="k">23–30</td><td>Two of my own questions and next step.</td></tr>' +
    '</table>';

  // ===== 7 · First 90 Days Plan =====
  CONTENT.de[7] = H('Erste 30 Tage · verstehen', true) +
    '<p>Team, Kunden, laufende Projekte, Methoden und Entscheidungswege verstehen. Jira- und Confluence-Strukturen, Reporting, Kalkulation und Qualitätsstandards kennenlernen. Bei Terminen zuhören und Muster erkennen.</p>' +
    H('Tag 31–60 · übernehmen') +
    '<p>Erste klar abgegrenzte Projekte oder Teilbereiche eigenständig strukturieren. Risiken, Abhängigkeiten und offene Entscheidungen transparent halten. Abstimmungen und Statuskommunikation übernehmen.</p>' +
    H('Tag 61–90 · steuern') +
    '<p>Ein Projekt oder einen definierten Kundenbereich verlässlich steuern, Verbesserungen im Ablauf vorschlagen und gemeinsam mit dem Team festlegen, wo weitere Verantwortung sinnvoll übernommen wird.</p>';

  CONTENT.en[7] = H('First 30 Days · Understand', true) +
    '<p>Understand the team, clients, running projects, methods, and decision paths. Learn Jira and Confluence structures, reporting, calculation, and quality standards. Listen in meetings and spot patterns.</p>' +
    H('Days 31–60 · Take Over') +
    '<p>Independently structure first clearly scoped projects or sub-areas. Keep risks, dependencies, and open decisions transparent. Take over alignments and status communication.</p>' +
    H('Days 61–90 · Steer') +
    '<p>Reliably steer one project or a defined client area, suggest process improvements, and agree with the team where taking on further responsibility makes sense.</p>';

  // ===== 8 · Questions for Nicole =====
  CONTENT.de[8] = H('Für das erste Gespräch priorisieren', true) +
    '<ul class="tight">' +
    '<li>Welche Projekte und Kunden würden in den ersten Monaten voraussichtlich im Mittelpunkt stehen?</li>' +
    '<li>Was bedeutet Remote in dieser Ausschreibung konkret für regelmäßige Präsenz in Saarbrücken und Kundentermine?</li>' +
    '<li>Wie verteilt sich die Verantwortung zwischen Projektmanagement, Devs, Design und Geschäftsführung?</li>' +
    '<li>Woran würden Sie nach sechs Monaten erkennen, dass die Besetzung erfolgreich ist?</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">Für 30 Minuten zwei bis drei Fragen auswählen. Remote/Präsenz unbedingt klären.</p>' +
    H('Weitere Fragen') +
    '<ul class="tight">' +
    '<li>Wie ist das erste Gespräch aufgebaut und was ist Ihnen bei der Besetzung besonders wichtig?</li>' +
    '<li>Wie werden Budgetplanung, Controlling und Change Requests bei Ihnen organisiert?</li>' +
    '<li>Wie sieht der weitere Auswahlprozess aus?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gehalt</p>' +
    '<table class="info">' +
    '<tr><th>Gehalt</th><th>Brutto jährlich</th></tr>' +
    '<tr><td class="k">Klare Zielgröße</td><td><b>65.000 €</b></td></tr>' +
    '<tr><td class="k">Plausible Spanne für die Rolle</td><td>ca. 55.000–70.000 €</td></tr>' +
    '<tr><td class="k">Unter 60.000 €</td><td>nur bei überzeugendem Gesamtpaket, Entwicklungsperspektive und Arbeitsmodell</td></tr>' +
    '<tr><td class="k">Strategische Untergrenze</td><td>ca. 55.000 €</td></tr>' +
    '</table>' +
    '<div class="lead">Formulierung: „Auf Basis der Verantwortung und meiner langjährigen Digital- und Agenturerfahrung stelle ich mir 65.000 Euro brutto im Jahr vor. Entscheidend ist für mich aber auch, wie Gesamtverantwortung, Entwicklung und Arbeitsmodell konkret ausgestaltet sind.“</div>' +
    '<div class="erg">Ruhig nennen und nicht sofort selbst relativieren. Untergrenze nicht nennen.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Standort und Arbeitsmodell</p>' +
    '<ul class="tight">' +
    '<li><b>Titel der Anzeige:</b> Saarbrücken und Remote</li>' +
    '<li><b>Text der Anzeige:</b> zentrales Büro in Saarbrücken mit Homeoffice-Möglichkeiten</li>' +
    '<li><b>Ich:</b> Wohnort Hamburg → regelmäßige Präsenz und Reisetätigkeit konkret klären</li>' +
    '<li><b>Führerschein Klasse B:</b> eigenen Status vorher prüfen, ehrlich antworten</li>' +
    '</ul>' +
    '<div class="lead">Formulierung: „Ich lebe in Hamburg. Die Anzeige nennt Saarbrücken und Remote, im Text ist von einem zentralen Büro mit Homeoffice-Möglichkeiten die Rede. Wie sieht das für diese Rolle konkret aus – welche regelmäßige Präsenz in Saarbrücken und welche Kundentermine vor Ort wären vorgesehen?“</div>' +
    '<div class="erg">Vorher ein eigenes Wunschmodell für Hamburg, Remote und Saarbrücken festlegen. Nicht automatisch von Full Remote ausgehen.</div>';

  CONTENT.en[8] = H('Prioritize for the First Conversation', true) +
    '<ul class="tight">' +
    '<li>Which projects and clients would likely be the focus in the first months?</li>' +
    '<li>What does "remote" in this ad mean concretely for regular presence in Saarbrücken and client appointments?</li>' +
    '<li>How is responsibility split between project management, devs, design, and management?</li>' +
    '<li>How would you know after six months that the hire was successful?</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">Pick two or three for 30 minutes. Definitely clarify remote/presence.</p>' +
    H('More Questions') +
    '<ul class="tight">' +
    '<li>How is the first conversation structured, and what matters most to you in this hire?</li>' +
    '<li>How are budget planning, controlling, and change requests organized?</li>' +
    '<li>What does the rest of the selection process look like?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary</p>' +
    '<table class="info">' +
    '<tr><th>Salary</th><th>Gross per year</th></tr>' +
    '<tr><td class="k">Clear target</td><td><b>€65,000</b></td></tr>' +
    '<tr><td class="k">Plausible range for the role</td><td>approx. €55,000–70,000</td></tr>' +
    '<tr><td class="k">Below €60,000</td><td>only with a convincing overall package, growth path, and working model</td></tr>' +
    '<tr><td class="k">Strategic floor</td><td>approx. €55,000</td></tr>' +
    '</table>' +
    '<div class="lead">Phrasing: "Based on the responsibility and my many years of digital and agency experience, I\'m thinking of €65,000 gross per year. What also matters to me is how overall responsibility, development, and the working model are shaped concretely."</div>' +
    '<div class="erg">State it calmly and don\'t qualify it right away. Don\'t mention the floor.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Location and Working Model</p>' +
    '<ul class="tight">' +
    '<li><b>Ad title:</b> Saarbrücken and Remote</li>' +
    '<li><b>Ad text:</b> central office in Saarbrücken with home-office options</li>' +
    '<li><b>Me:</b> living in Hamburg → clarify regular presence and travel concretely</li>' +
    '<li><b>Driving licence class B:</b> check my own status beforehand, answer honestly</li>' +
    '</ul>' +
    '<div class="lead">Phrasing: "I live in Hamburg. The ad says Saarbrücken and Remote, while the text mentions a central office with home-office options. What does that look like for this role — what regular presence in Saarbrücken and which on-site client appointments would be expected?"</div>' +
    '<div class="erg">Decide my own preferred model for Hamburg, remote, and Saarbrücken beforehand. Don\'t automatically assume full remote.</div>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = H('Letzter Check vor dem Gespräch', true) +
    '<ul class="tight checklist">' +
    '<li>Teams-Link, Kamera, Mikrofon und ruhigen Hintergrund prüfen.</li>' +
    '<li>Pitch einmal laut sprechen, nicht auswendig herunterbeten.</li>' +
    '<li>Führerscheinstatus und realistische Reisebereitschaft klären.</li>' +
    '<li>Wunschmodell für Hamburg, Remote und Saarbrücken klar formulieren.</li>' +
    '<li>Gehaltsziel 65.000 € ruhig nennen und nicht sofort selbst relativieren.</li>' +
    '<li>Zwei STAR-Beispiele auswählen: Anforderungen klären und Zusatzwünsche priorisieren.</li>' +
    '<li>Zwei eigene Fragen markieren.</li>' +
    '</ul>' +
    H('Ehrliche Grenzen') +
    '<ul class="tight">' +
    '<li>Bisher kein formaler Titel als Projektmanagerin, keine mehrjährige alleinige Gesamtverantwortung</li>' +
    '<li>Keine alleinige kaufmännische Budgetverantwortung</li>' +
    '<li>Moltomedias interne Abläufe noch unbekannt</li>' +
    '</ul>' +
    '<div class="lead">Nicht kleiner machen als nötig: Die formale Rolle ist neu, der digitale Projektalltag nicht. Ehrlich bleiben, aber den Wert aus Technik, Agenturpraxis und verbindender Arbeit klar benennen.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Stellenanzeige Projektmanagerin Digital, Referenz 2426831; Lebenslauf und Anschreiben für Moltomedia; Moltomedia Website (Über uns, Leistungen, Referenzen), abgerufen am 2. November 2026; Einladung von Nicole Bernhard zum Videointerview am 3. November 2026.</p>';

  CONTENT.en[9] = H('Final Check Before the Conversation', true) +
    '<ul class="tight checklist">' +
    '<li>Check Teams link, camera, microphone, and a quiet background.</li>' +
    '<li>Say the pitch out loud once — don\'t recite it.</li>' +
    '<li>Clarify driving licence status and realistic travel willingness.</li>' +
    '<li>Formulate my preferred model for Hamburg, remote, and Saarbrücken.</li>' +
    '<li>State the €65,000 target calmly and don\'t qualify it right away.</li>' +
    '<li>Pick two STAR examples: clarifying requirements and prioritizing extra requests.</li>' +
    '<li>Mark two of my own questions.</li>' +
    '</ul>' +
    H('Honest Limits') +
    '<ul class="tight">' +
    '<li>No formal project manager title so far, no multi-year sole overall ownership</li>' +
    '<li>No sole commercial budget ownership</li>' +
    '<li>Moltomedia\'s internal processes still unknown</li>' +
    '</ul>' +
    '<div class="lead">Don\'t undersell myself: the formal role is new, day-to-day digital project work isn\'t. Stay honest, but name the value of tech, agency practice, and bridging work clearly.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: job posting Projektmanagerin Digital, ref. 2426831; CV and cover letter for Moltomedia; Moltomedia website (About, Services, References), accessed November 2, 2026; invitation from Nicole Bernhard to the video interview on November 3, 2026.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · Moltomedia · Projektmanagerin Digital",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
