// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Senior Project Manager<br>Experience &amp; Engineering · DEPT®",
      role: "Senior Project Manager, Experience & Engineering",
      location: "Hamburg/Berlin · hybrid",
      interviewDate: "noch offen",
      salaryAd: "offen",
      salaryAsk: "72.000 €",
      salaryMin: "65.000 €",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde mehr als zehn Jahre kundennahe Agentur- und E-Commerce-Erfahrung mit technischem Tiefgang und der Fähigkeit, <mark>komplexe Anforderungen in klare Arbeitspakete</mark>, Entscheidungen und verlässliche Delivery zu übersetzen.'
    },
    en: {
      roleSubtitle: "Senior Project Manager<br>Experience &amp; Engineering · DEPT®",
      role: "Senior Project Manager, Experience & Engineering",
      location: "Hamburg/Berlin · hybrid",
      interviewDate: "TBD",
      salaryAd: "TBD",
      salaryAsk: "€72,000",
      salaryMin: "€65,000",
      introTitle: "Interview Prep",
      introText: 'I combine more than ten years of client-facing agency and e-commerce experience with technical depth and the ability to <mark>translate complex requirements into clear work packages</mark>, decisions, and reliable delivery.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"DEPT® – Geschäftsmodell & Zielrolle", en:"DEPT® – Business Model & Target Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Nachfragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Begriffe & Steuerungslogik", en:"Terms & Governance Logic"},
    8: {de:"Eigene Fragen an den Arbeitgeber", en:"Questions for the Employer"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich verbinde mehr als zehn Jahre kundennahe Agentur- und E-Commerce-Erfahrung mit technischem Tiefgang und der Fähigkeit, <mark>komplexe Anforderungen in klare Arbeitspakete</mark>, Entscheidungen und verlässliche Delivery zu übersetzen.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Was DEPT® mit mir gewinnt</p>' +
    '<ul class="tight">' +
    '<li><b>Direkter Agentur-Fit:</b> mehr als zehn Jahre Arbeit an digitalen Produkten, Websites, Relaunches und E-Commerce-Projekten im Kundenumfeld.</li>' +
    '<li><b>Technische Urteilskraft:</b> Ich erkenne Machbarkeit, Abhängigkeiten und Risiken früh und kann sie ohne Fachjargon entscheidbar machen.</li>' +
    '<li><b>Schnittstellenstärke:</b> Kunden, Design, Frontend, Backend und externe Partner auf ein gemeinsames Ziel und einen belastbaren nächsten Schritt bringen.</li>' +
    '<li><b>Delivery-Nähe:</b> Anforderungen, Tests, Korrekturen, Releases und Go-lives nicht getrennt betrachten, sondern als zusammenhängenden Ablauf.</li>' +
    '<li><b>Realistische Entwicklung:</b> Kostenübersichten, Angebotserstellung und formale kommerzielle Gesamtverantwortung sind die wesentlichen Lernfelder.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Passungsurteil</p>' +
    '<div class="lead">Hohe inhaltliche Passung, aber kein Selbstläufer. Die Aufgaben entsprechen zu großen Teilen meiner tatsächlichen Praxis. Die größte Interviewfrage ist nicht, ob ich digitale Projekte verstehe, sondern ob ich die Senior-Verantwortung für Angebot, Budget, KPI, Plan und Team verbindlich übernehmen kann. Meine Antwort muss Belege liefern und Grenzen sauber benennen.</div>';

  CONTENT.en[1] = '<div class="lead">I combine more than ten years of client-facing agency and e-commerce experience with technical depth and the ability to <mark>translate complex requirements into clear work packages</mark>, decisions, and reliable delivery.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">What DEPT® Gains From Me</p>' +
    '<ul class="tight">' +
    '<li><b>Direct agency fit:</b> more than ten years working on digital products, websites, relaunches, and e-commerce projects in a client environment.</li>' +
    '<li><b>Technical judgment:</b> I spot feasibility, dependencies, and risk early and can make them decidable without jargon.</li>' +
    '<li><b>Interface strength:</b> bringing clients, design, frontend, backend, and external partners to a shared goal and a solid next step.</li>' +
    '<li><b>Close to delivery:</b> I don\'t treat requirements, testing, fixes, releases, and go-lives as separate — they\'re one connected flow.</li>' +
    '<li><b>Realistic growth areas:</b> cost estimates, proposal writing, and formal commercial ownership are the main areas to learn.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Fit Assessment</p>' +
    '<div class="lead">High substantive fit, but not a given. The tasks largely match my actual practice. The biggest interview question isn\'t whether I understand digital projects, but whether I can credibly own senior responsibility for proposals, budget, KPIs, planning, and the team. My answer needs to bring evidence and name boundaries cleanly.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
      '<button class="mtab" data-tab="en">English Backup</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme aus der technischen Umsetzung und habe über mehr als zehn Jahre in Agenturen digitale Produkte, Relaunches und E-Commerce-Projekte im direkten Kundenumfeld begleitet. Dabei hat sich meine Rolle zunehmend von der reinen Umsetzung zur verbindenden Schnittstelle entwickelt: Ich habe Anforderungen mit Kunden und Design geklärt, Machbarkeit und Abhängigkeiten mit Frontend, Backend und externen Partnern eingeordnet, Arbeitspakete strukturiert und Qualität bis Test, Release und Go-live begleitet. Mein Entwicklungshintergrund hilft mir, Risiken früh zu erkennen und technische Themen so zu übersetzen, dass Entscheidungen möglich werden.</p>' +
       '<p>Mein Team hat mich einmal als <mark>„Social Glue“</mark> bezeichnet, weil ich merke, wenn Informationen fehlen oder Erwartungen auseinanderlaufen, und die richtigen Menschen zur Klärung zusammenbringe. Genau diese Verbindung aus Kundenberatung, technischer Delivery und interdisziplinärer Koordination sehe ich bei DEPT®.</p>' +
       '<p>Neu ist für mich vor allem die formale End-to-End-Verantwortung für Angebote, Kostenübersichten und Budgetcontrolling. Diesen Schritt möchte ich bewusst gehen und meine vorhandene Delivery-Erfahrung um die <mark>kommerzielle Steuerung erweitern</mark>.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich bringe mehr als zehn Jahre kundennahe Agentur- und E-Commerce-Erfahrung mit und verbinde technisches Verständnis mit strukturierter Projektkoordination. Ich übersetze Anforderungen, mache Abhängigkeiten und Risiken sichtbar und bringe Kunden, Design und Entwicklung zu klaren Entscheidungen.</p>' +
       '<p>Bei DEPT® möchte ich diese Praxis in eine <mark>formale Senior-PM-Verantwortung</mark> überführen und mich gezielt in Angebot, Budget und Controlling vertiefen.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="en" data-group="pitch">' +
       '<p>I have more than ten years of client-facing agency experience in digital products and e-commerce. My background in frontend development helps me identify feasibility, dependencies and delivery risks early. Over time, I became the connecting point between clients, design, backend, frontend and external partners. I now want to take formal end-to-end project ownership, while deliberately strengthening my experience in proposals, budgets and commercial controlling.</p>' +
     '</div>' +
     '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Merksatz</p>' +
     '<div class="lead">Nicht „Ich will aus der Entwicklung raus“, sondern: „Ich möchte meine technische Delivery-Erfahrung in eine umfassendere Projektverantwortung überführen.“</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
      '<button class="mtab" data-tab="en">Backup Script</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I come from technical delivery and, over more than ten years at agencies, worked on digital products, relaunches, and e-commerce projects in direct client environments. Over time, my role increasingly evolved from pure delivery into a connecting interface: I clarified requirements with clients and design, assessed feasibility and dependencies with frontend, backend, and external partners, structured work packages, and accompanied quality through testing, release, and go-live. My development background helps me spot risks early and translate technical topics so decisions become possible.</p>' +
       '<p>My team once called me <mark>"social glue"</mark> because I notice when information is missing or expectations diverge, and I bring the right people together to sort it out. That\'s exactly the combination of client advisory, technical delivery, and cross-disciplinary coordination I see at DEPT®.</p>' +
       '<p>What\'s new for me is the formal end-to-end ownership of proposals, cost overviews, and budget controlling. I want to deliberately take that step and extend my existing delivery experience into <mark>commercial steering</mark>.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I bring more than ten years of client-facing agency and e-commerce experience, combining technical understanding with structured project coordination. I translate requirements, surface dependencies and risks, and bring clients, design, and development to clear decisions.</p>' +
       '<p>At DEPT®, I want to carry this practice into <mark>formal senior PM ownership</mark> and deliberately build depth in proposals, budget, and controlling.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="en" data-group="pitch">' +
       '<p>I have more than ten years of client-facing agency experience in digital products and e-commerce. My background in frontend development helps me identify feasibility, dependencies and delivery risks early. Over time, I became the connecting point between clients, design, backend, frontend and external partners. I now want to take formal end-to-end project ownership, while deliberately strengthening my experience in proposals, budgets and commercial controlling.</p>' +
     '</div>' +
     '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Reminder</p>' +
     '<div class="lead">Not "I want out of development," but: "I want to carry my technical delivery experience into a broader project responsibility."</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Stärke 1 · Übersetzen mit technischer Substanz</div><div class="b">Aussage: Ich mache aus unterschiedlichen Anforderungen eine umsetzbare Arbeitsgrundlage. Beleg: Patrick &amp; Friends — Kunden, Design, Frontend, Backend und externe Partner abgestimmt. Wirkung für DEPT®: Re-Briefings, Scope und Entscheidungen werden belastbarer.</div></div>' +
    '<div class="c"><div class="t">Stärke 2 · Risiken und Abhängigkeiten früh erkennen</div><div class="b">Aussage: Durch meine Entwicklungserfahrung erkenne ich, wo eine kleine Änderung größere Folgen hat. Beleg: Plattformarbeit mit Shopify, Shopware, Spryker und WordPress sowie Release- und Go-live-Begleitung. Wirkung: realistischere Planung, bessere Kommunikation und weniger späte Überraschungen.</div></div>' +
    '<div class="c"><div class="t">Stärke 3 · Komplexität über Teams hinweg reduzieren</div><div class="b">Aussage: Ich halte offene Entscheidungen, Zuständigkeiten und nächste Schritte sichtbar. Beleg: wiederkehrende digitale Vorhaben für mehr als zehn Unilever-Marken in einem modularen Umfeld. Wirkung: mehrere Projekte und Stakeholder bleiben steuerbar.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Persönliche Schwächen — unverändert und authentisch</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Wenn etwas unklar, unrealistisch oder technisch riskant ist, spreche ich es offen an. Ich achte bewusst stärker auf Kontext und Ton und verbinde Kritik mit einer konkreten Option oder Entscheidungsfrage.</li>' +
    '<li><b>Trockener, manchmal sarkastischer Humor:</b> Im vertrauten Team kann mein Humor verbinden. In neuen Konstellationen, schriftlich und in angespannten Situationen setze ich ihn bewusst zurückhaltend ein.</li>' +
    '<li><b>Lockere dritte Antwort:</b> Kinderschokolade. Die sollte man in meiner Nähe nicht unbeaufsichtigt lassen — nur verwenden, wenn die Atmosphäre passt.</li>' +
    '<li><b>Fachliches Entwicklungsfeld:</b> Eigenständige Kostenübersichten, Angebote und Budgetcontrolling waren bisher nicht mein nachweisbarer Schwerpunkt. Ich bringe Aufwandseinschätzung, Transparenz und Delivery-Denken mit, würde aber die kaufmännischen Standards, Freigaben und Kennzahlen von DEPT® gezielt lernen.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Strength 1 · Translating with technical substance</div><div class="b">Claim: I turn different requirements into a workable basis for delivery. Evidence: Patrick &amp; Friends — aligned clients, design, frontend, backend, and external partners. Impact for DEPT®: re-briefings, scope, and decisions become more solid.</div></div>' +
    '<div class="c"><div class="t">Strength 2 · Spotting risks and dependencies early</div><div class="b">Claim: my development background means I notice where a small change has bigger consequences. Evidence: platform work with Shopify, Shopware, Spryker, and WordPress, plus accompanying releases and go-lives. Impact: more realistic planning, better communication, fewer late surprises.</div></div>' +
    '<div class="c"><div class="t">Strength 3 · Reducing complexity across teams</div><div class="b">Claim: I keep open decisions, ownership, and next steps visible. Evidence: recurring digital initiatives for more than ten Unilever brands in a modular environment. Impact: multiple projects and stakeholders stay manageable.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Personal Weaknesses — Unfiltered and Honest</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> when something is unclear, unrealistic, or technically risky, I say so openly. I\'m deliberately more mindful of context and tone, and pair criticism with a concrete option or decision to make.</li>' +
    '<li><b>Dry, occasionally sarcastic humor:</b> with a team I trust, my humor can be a connector. In new settings, in writing, and in tense situations, I deliberately hold it back.</li>' +
    '<li><b>The light third answer:</b> Kinderschokolade (chocolate). Best not left unattended near me — only bring this one up if the mood genuinely fits.</li>' +
    '<li><b>Domain-specific growth area:</b> owning cost overviews, proposals, and budget controlling independently hasn\'t been a proven focus of mine so far. I bring effort estimation, transparency, and delivery thinking, but would deliberately learn DEPT®\'s commercial standards, approvals, and metrics.</li>' +
    '</ul>';

  // ===== 4 · Business Model & Target Role =====
  CONTENT.de[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Aktuelles Unternehmensbild</p>' +
    '<ul class="tight">' +
    '<li>DEPT® beschreibt sich als „Growth Invention company“ an der Schnittstelle von Technologie und Marketing.</li>' +
    '<li>Mehr als 4.000 Spezialist:innen, über 30 Büros auf fünf Kontinenten und mehr als 85 Nationalitäten.</li>' +
    '<li>Das Modell ist laut DEPT® ungefähr 50/50 Tech und Marketing und auf integrierte, internationale Teams ausgerichtet.</li>' +
    '<li>Die Rolle gehört zur Business Unit Experience &amp; Engineering: Strategie, Full-Funnel, Kampagnen, E-Commerce, Data &amp; Analytics und Content greifen zusammen.</li>' +
    '<li>DEPT® ist seit 2021 B-Corp-zertifiziert und betont die Werte „better together“, „relentlessly curious“ und „get sh*t done“.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Was diese konkrete Rolle wirklich verlangt</p>' +
    '<p>Nicht nur Meetings organisieren. Gesucht wird eine Person, die komplexe Online- und E-Commerce-Projekte von der Angebotserstellung bis zur KPI- und Budgetkontrolle steuert, Projektpläne mit Meilensteinen und Abhängigkeiten erstellt, Anforderungen re-brieft, Termine dokumentiert, Risiken und Reporting verantwortet und das interdisziplinäre Team im Alltag führt.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Warum mein Plattformwissen passt</p>' +
    '<p>DEPT® nennt für Commerce unter anderem Spryker und Shopify Plus. Ich bringe praktische Erfahrung mit Spryker, Shopify, Shopware und WordPress mit. Das ist kein Beleg für Erfahrung in der konkreten DEPT®-Architektur, verkürzt aber die Einarbeitung in typische Plattformlogik, Integrationen, Abhängigkeiten und Release-Risiken.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Was „Senior“ hier bedeutet</p>' +
    '<ul class="tight">' +
    '<li>proaktiv führen statt auf Informationen warten;</li>' +
    '<li>Scope, Termin, Budget und Qualität gemeinsam steuern;</li>' +
    '<li>Kund:innen beraten und auch unangenehme Folgen transparent machen;</li>' +
    '<li>interdisziplinäre Teams ohne fachliche Detailsteuerung arbeitsfähig halten;</li>' +
    '<li>mehrere Projekte und kommerzielle Kennzahlen verlässlich überblicken.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Abgleich der Stellenanforderungen mit meinem Profil</p>' +
    '<table class="info">' +
    '<tr><th>Anforderung</th><th>Mein realistischer Bezug</th></tr>' +
    '<tr><td class="k">5+ Jahre client-facing Agency/Consulting</td><td>Sehr hohe Passung: mehr als zehn Jahre kundennahe Agenturerfahrung.</td></tr>' +
    '<tr><td class="k">Komplexe Online-/E-Commerce-Projekte</td><td>Sehr hohe Passung: Websites, Relaunches, Shops und digitale Produkte.</td></tr>' +
    '<tr><td class="k">Technische Umsetzung</td><td>Sehr hohe Passung: langjährige Frontend- und Plattformpraxis.</td></tr>' +
    '<tr><td class="k">Multi-Projektmanagement, klassisch/agil, Jira</td><td>Gute Passung: parallele Vorhaben, Jira, Scrum/Kanban; formaler PM-Titel bisher nicht der Schwerpunkt.</td></tr>' +
    '<tr><td class="k">Angebote und Kostenübersichten</td><td>Größte Lücke: bisher nicht als eigenständige Kernverantwortung belegt.</td></tr>' +
    '<tr><td class="k">Projektpläne, Meilensteine, Abhängigkeiten</td><td>Gute Passung bei Struktur und Abhängigkeiten; belastbares Beispiel vorbereiten.</td></tr>' +
    '<tr><td class="k">Re-Briefings und Kundentermine</td><td>Hohe Passung aus Anforderungsklärung und Kundenkommunikation.</td></tr>' +
    '<tr><td class="k">Stakeholder, Risiko, Controlling, Reporting</td><td>Stakeholder/Risiko stark; kaufmännisches Controlling gezielt ausbauen.</td></tr>' +
    '<tr><td class="k">Tägliche Führung Strategy/UX/UI/Dev/QA</td><td>Koordinative Führung von Design/Dev/Partnern belegt; formale Führung und Strategy/QA nicht überhöhen.</td></tr>' +
    '<tr><td class="k">Deutsch und Englisch fließend</td><td>Deutsch muttersprachlich, Englisch fließend laut CV; englische Kurzvorstellung üben.</td></tr>' +
    '<tr><td class="k">Hybrid Hamburg/Berlin</td><td>Hamburg passt; laut Anzeige 1-2 Bürotage abhängig vom Standort.</td></tr>' +
    '</table>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Meine glaubwürdige Senior-Linie</p>' +
    '<div class="lead">Ich habe nicht erst jetzt begonnen, Projekte zu koordinieren. Ich habe diese Verantwortung über Jahre aus einer technischen Rolle heraus praktisch übernommen. Der nächste Schritt ist, diese Delivery-Verantwortung formal zu erweitern: kommerzielle Steuerung, verbindliche Projektplanung und alltägliche Führung des gesamten Projektteams.</div>';

  CONTENT.en[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Current Company Snapshot</p>' +
    '<ul class="tight">' +
    '<li>DEPT® describes itself as a "Growth Invention company" at the intersection of technology and marketing.</li>' +
    '<li>More than 4,000 specialists, over 30 offices across five continents, and more than 85 nationalities.</li>' +
    '<li>The model is roughly 50/50 tech and marketing, per DEPT®, and built around integrated, international teams.</li>' +
    '<li>The role sits in the Experience &amp; Engineering business unit: strategy, full-funnel, campaigns, e-commerce, data &amp; analytics, and content work together.</li>' +
    '<li>DEPT® has been B-Corp certified since 2021 and emphasizes the values "better together," "relentlessly curious," and "get sh*t done."</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">What This Specific Role Actually Requires</p>' +
    '<p>Not just organizing meetings. They\'re looking for someone who steers complex online and e-commerce projects from proposal writing through KPI and budget control, builds project plans with milestones and dependencies, re-briefs requirements, documents deadlines, owns risk and reporting, and leads the interdisciplinary team day to day.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Why My Platform Knowledge Fits</p>' +
    '<p>DEPT® names Spryker and Shopify Plus, among others, for commerce. I bring hands-on experience with Spryker, Shopify, Shopware, and WordPress. That\'s not proof of experience in DEPT®\'s specific architecture, but it shortens onboarding into typical platform logic, integrations, dependencies, and release risk.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">What "Senior" Means Here</p>' +
    '<ul class="tight">' +
    '<li>leading proactively instead of waiting for information;</li>' +
    '<li>steering scope, timeline, budget, and quality together;</li>' +
    '<li>advising clients and being transparent about unwelcome consequences too;</li>' +
    '<li>keeping interdisciplinary teams able to work without micromanaging the details;</li>' +
    '<li>reliably overseeing multiple projects and commercial metrics.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Profile</p>' +
    '<table class="info">' +
    '<tr><th>Requirement</th><th>My Realistic Fit</th></tr>' +
    '<tr><td class="k">5+ years client-facing agency/consulting</td><td>Very high fit: more than ten years of client-facing agency experience.</td></tr>' +
    '<tr><td class="k">Complex online/e-commerce projects</td><td>Very high fit: websites, relaunches, shops, and digital products.</td></tr>' +
    '<tr><td class="k">Technical delivery</td><td>Very high fit: years of frontend and platform practice.</td></tr>' +
    '<tr><td class="k">Multi-project management, classic/agile, Jira</td><td>Good fit: parallel initiatives, Jira, Scrum/Kanban; a formal PM title hasn\'t been the focus so far.</td></tr>' +
    '<tr><td class="k">Proposals and cost overviews</td><td>Biggest gap: not yet proven as an independent core responsibility.</td></tr>' +
    '<tr><td class="k">Project plans, milestones, dependencies</td><td>Good fit on structure and dependencies; prepare a solid example.</td></tr>' +
    '<tr><td class="k">Re-briefings and client meetings</td><td>High fit from requirements clarification and client communication.</td></tr>' +
    '<tr><td class="k">Stakeholders, risk, controlling, reporting</td><td>Stakeholders/risk are strong; deliberately build out commercial controlling.</td></tr>' +
    '<tr><td class="k">Day-to-day leadership of Strategy/UX/UI/Dev/QA</td><td>Coordinative leadership of design/dev/partners is proven; don\'t overstate formal leadership or Strategy/QA.</td></tr>' +
    '<tr><td class="k">Fluent German and English</td><td>German is native, English fluent per CV; practice the short English introduction.</td></tr>' +
    '<tr><td class="k">Hybrid Hamburg/Berlin</td><td>Hamburg fits; per the ad, 1–2 office days depending on location.</td></tr>' +
    '</table>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">My Credible Senior Line</p>' +
    '<div class="lead">I haven\'t just started coordinating projects now — I\'ve practically carried that responsibility for years out of a technical role. The next step is to formally extend that delivery responsibility: commercial steering, binding project planning, and day-to-day leadership of the whole project team.</div>';

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Kennzahlen oder Ergebnisse nur nennen, wenn sie sicher belegt sind. Wirkung sonst qualitativ beschreiben.</div>' +
    '<div class="macc"><button class="macc-head">1 · Unklare Anforderungen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Anforderungen kamen aus Kunden-, Design- und technischen Perspektiven.</div>' +
    '<div class="row"><b>Aufgabe:</b> ein gemeinsames Verständnis vor der Umsetzung schaffen.</div>' +
    '<div class="row"><b>Vorgehen:</b> Annahmen sichtbar machen, Fragen bündeln, Machbarkeit mit Frontend/Backend klären, Arbeitspakete und Entscheidungen dokumentieren.</div>' +
    '<div class="row"><b>Ergebnis:</b> eine belastbare Arbeitsgrundlage.</div>' +
    '<div class="erg">DEPT®-Transfer: Genau daraus entstehen Re-Briefing, Scope, Abhängigkeiten und Plan.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Mehrere Projekte parallel steuern <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> Bei deepblue liefen digitale Vorhaben für mehr als zehn Unilever-Marken in einem modularen Umfeld.</div>' +
    '<div class="row"><b>Vorgehen:</b> nach Dringlichkeit, Abhängigkeit und benötigter Entscheidung strukturieren; Status, Besitzer und nächsten Termin sichtbar halten; wiederkehrende Anforderungen standardisieren.</div>' +
    '<div class="row"><b>Ergebnis:</b> weniger Informationsverlust und nachvollziehbare Priorisierung.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Umgang mit einem gefährdeten Termin <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Vorgehen:</b> Früh klären, was konkret fehlt, welchen Meilenstein es betrifft und welche Folge entsteht. Dann Optionen formulieren: Scope anpassen, Reihenfolge ändern, zusätzliche Kapazität prüfen oder Termin neu verhandeln. Entscheidung mit Verantwortlichen und Datum dokumentieren.</div>' +
    '<div class="erg">Rechtzeitig eskalieren — nicht erst, wenn der Termin bereits gerissen ist.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Führen ohne disziplinarische Macht <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Vorgehen:</b> Ziel, Rollen, Entscheidungen und Zusagen klar machen. Fachleute nicht mikromanagen, sondern Hindernisse entfernen und Verbindlichkeit herstellen. Unterschiedliche Sichtweisen zuerst übersetzen, dann die notwendige Entscheidung benennen.</div>' +
    '<div class="erg">Bei wiederholten Blockaden sachlich eskalieren.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Ein Risiko, das früh erkannt wurde <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Vorgehen:</b> Ein echtes Beispiel aus Patrick &amp; Friends auswählen: technische Abhängigkeit, fehlende Entscheidung oder Übergaberisiko. Erklären: Signal erkannt, Auswirkung übersetzt, richtige Personen zusammengebracht, Option entschieden, Umsetzung/Test nachgehalten.</div>' +
    '<div class="erg">Keine erfundene Kennzahl.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Unterschiedliche Interessen von Kunde, Design und Entwicklung <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Vorgehen:</b> Zuerst gemeinsames Ziel und nicht verhandelbare Randbedingungen klären. Danach Optionen mit Aufwand, Risiko und Nutzerwirkung darstellen. Nicht die technisch eleganteste Lösung „gewinnen“ lassen, sondern eine bewusste Entscheidung ermöglichen und dokumentieren.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">7 · Qualität unter Zeitdruck <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Vorgehen:</b> Akzeptanzkriterien und kritischste Nutzerwege priorisieren, Testverantwortung klären, bekannte Risiken transparent machen und eine bewusste Go-/No-go-Entscheidung herbeiführen.</div>' +
    '<div class="erg">Qualität nicht pauschal versprechen, sondern konkret absichern.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">8 · Wie würden Sie ein DEPT®-Projekt starten? <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Vorgehen:</b> Ziel und Erfolgskriterien klären; Scope und Nicht-Scope festhalten; Stakeholder und Entscheidungswege definieren; Team, Kapazität und kommerziellen Rahmen prüfen; Meilensteine und Abhängigkeiten planen; Risiken und Kommunikationsrhythmus aufsetzen; Kick-off mit gemeinsamem Verständnis abschließen.</div>' +
    '</div></div></div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Vor dem Interview mit echten Details füllen</p>' +
    '<ul class="tight">' +
    '<li>ein Relaunch oder Shop-Projekt mit Ziel, Team, Konflikt und Go-live;</li>' +
    '<li>ein Fall mit externer Abhängigkeit;</li>' +
    '<li>ein Fall, in dem eine Kundenanforderung re-brieft werden musste;</li>' +
    '<li>ein Qualitäts- oder Release-Risiko;</li>' +
    '<li>eine Situation, in der „Social Glue“ konkret sichtbar wurde.</li>' +
    '</ul>';

  CONTENT.en[5] = '<div class="lead">Only cite figures or results when they\'re solidly documented. Otherwise describe the impact qualitatively.</div>' +
    '<div class="macc"><button class="macc-head">1 · Unclear requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> requirements came in from client, design, and technical perspectives.</div>' +
    '<div class="row"><b>Task:</b> establish a shared understanding before delivery.</div>' +
    '<div class="row"><b>Action:</b> surfaced assumptions, bundled questions, clarified feasibility with frontend/backend, documented work packages and decisions.</div>' +
    '<div class="row"><b>Result:</b> a solid working basis.</div>' +
    '<div class="erg">DEPT® transfer: this is exactly where re-briefing, scope, dependencies, and the plan come from.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Steering several projects in parallel <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Situation:</b> at deepblue, digital initiatives ran in parallel for more than ten Unilever brands in a modular environment.</div>' +
    '<div class="row"><b>Action:</b> structured by urgency, dependency, and the decision needed; kept status, owner, and next date visible; standardized recurring requirements.</div>' +
    '<div class="row"><b>Result:</b> less information loss and traceable prioritization.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Handling a deadline at risk <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Action:</b> clarify early exactly what\'s missing, which milestone it affects, and what the consequence is. Then formulate options: adjust scope, reorder, check additional capacity, or renegotiate the deadline. Document the decision with the owners and the date.</div>' +
    '<div class="erg">Escalate in time — not only once the deadline is already missed.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Leading without formal authority <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Action:</b> make the goal, roles, decisions, and commitments clear. Don\'t micromanage specialists — remove obstacles and create commitment. Translate differing views first, then name the decision that\'s needed.</div>' +
    '<div class="erg">Escalate factually if blockers repeat.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · A risk I spotted early <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Action:</b> pick a real example from Patrick &amp; Friends — a technical dependency, a missing decision, or a handover risk. Explain: noticed the signal, translated the impact, brought the right people together, decided on an option, followed through on delivery/testing.</div>' +
    '<div class="erg">No invented figure.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Conflicting interests between client, design, and development <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Action:</b> clarify the shared goal and non-negotiable constraints first. Then present options with effort, risk, and user impact. Don\'t let the technically most elegant solution "win" by default — enable and document a deliberate decision instead.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">7 · Quality under time pressure <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Action:</b> prioritize acceptance criteria and the most critical user journeys, clarify testing ownership, make known risks transparent, and drive a deliberate go/no-go decision.</div>' +
    '<div class="erg">Don\'t promise quality in general terms — secure it concretely.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">8 · How would you kick off a DEPT® project? <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="row"><b>Action:</b> clarify the goal and success criteria; capture scope and out-of-scope; define stakeholders and decision paths; check team, capacity, and the commercial frame; plan milestones and dependencies; set up risk tracking and a communication rhythm; close the kick-off with a shared understanding.</div>' +
    '</div></div></div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Fill In With Real Details Before the Interview</p>' +
    '<ul class="tight">' +
    '<li>a relaunch or shop project with goal, team, conflict, and go-live;</li>' +
    '<li>a case with an external dependency;</li>' +
    '<li>a case where a client requirement had to be re-briefed;</li>' +
    '<li>a quality or release risk;</li>' +
    '<li>a situation where "social glue" was concretely visible.</li>' +
    '</ul>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Ihr Titel war Senior Frontend Developer. Warum Senior Project Manager?“</div>' +
    '<p>Der Titel beschreibt meinen technischen Ursprung, aber nicht die ganze tatsächliche Rolle. Über Jahre habe ich Anforderungen strukturiert, Kunden und Teams abgestimmt, Abhängigkeiten sichtbar gemacht sowie Tests, Korrekturen und Releases begleitet. Ich bewerbe mich nicht ohne Projektpraxis, sondern auf den nächsten konsequenten Verantwortungsumfang. Angebot und Budget sind dabei bewusst benannte Entwicklungsfelder.</p>' +
    '<div class="lead">„Welche Budgetverantwortung hatten Sie konkret?“</div>' +
    '<p>Ich möchte das präzise beantworten: Eigenständige Budget- und Angebotsverantwortung war bisher nicht mein nachweisbarer Schwerpunkt. Vertraut sind mir Aufwand, Abhängigkeiten, Priorisierung und transparente Folgen von Scope-Änderungen. Bei DEPT® müsste ich die Kalkulationslogik, Margen, Freigaben und Reportingstandards lernen und zunächst eng spiegeln.</p>' +
    '<div class="lead">„Haben Sie interdisziplinäre Teams geführt?“</div>' +
    '<p>Ich habe Teams und Partner koordinativ geführt: Anforderungen geklärt, Abhängigkeiten abgestimmt, Entscheidungen herbeigeführt und Delivery nachgehalten. Disziplinarische Führung behaupte ich nicht. Für Projektführung sind für mich Klarheit, Verbindlichkeit, Schutz der Fachrollen und rechtzeitige Eskalation entscheidend.</p>' +
    '<div class="lead">„Wie beraten Sie einen Kunden, der Unmögliches fordert?“</div>' +
    '<p>Zuerst das zugrunde liegende Ziel verstehen. Dann technische oder zeitliche Grenze klar erklären und zwei bis drei umsetzbare Optionen mit Folgen für Scope, Termin, Budget und Qualität anbieten. Direkt sein, ohne den Kunden bloßzustellen.</p>' +
    '<div class="lead">„Warum DEPT®?“</div>' +
    '<p>Weil DEPT® Technologie, Design, E-Commerce und Kundenwirkung in integrierten Teams verbindet. Genau an dieser Schnittstelle habe ich gearbeitet. Besonders relevant sind für mich Experience &amp; Engineering, die Plattformnähe und die internationale Skalierung — verbunden mit dem nächsten Schritt in formale End-to-End-Verantwortung.</p>' +
    '<div class="lead">„What is your main development area?“</div>' +
    '<p>My main development area is commercial project ownership. I understand effort, scope, dependencies and delivery risks, but I have not yet owned proposals and budget controlling as my core responsibility. I would learn DEPT®’s commercial framework deliberately and make progress transparent.</p>';

  CONTENT.en[6] = '<div class="lead">"Your title was Senior Frontend Developer. Why Senior Project Manager?"</div>' +
    '<p>The title describes my technical origin, but not the full actual role. Over the years I\'ve structured requirements, aligned clients and teams, surfaced dependencies, and accompanied testing, fixes, and releases. I\'m not applying without project practice — I\'m applying for the next consistent scope of responsibility. Proposals and budget are deliberately named as growth areas.</p>' +
    '<div class="lead">"What budget responsibility did you actually have?"</div>' +
    '<p>I want to answer this precisely: independent budget and proposal ownership hasn\'t been a proven focus of mine so far. What I do know well is effort, dependencies, prioritization, and the transparent consequences of scope changes. At DEPT®, I\'d need to learn the calculation logic, margins, approvals, and reporting standards, and closely mirror them at first.</p>' +
    '<div class="lead">"Have you led interdisciplinary teams?"</div>' +
    '<p>I\'ve led teams and partners coordinatively: clarified requirements, aligned dependencies, driven decisions, and tracked delivery. I don\'t claim disciplinary leadership. For project leadership, what matters to me is clarity, commitment, protecting specialist roles, and timely escalation.</p>' +
    '<div class="lead">"How do you advise a client asking for the impossible?"</div>' +
    '<p>Understand the underlying goal first. Then clearly explain the technical or time constraint and offer two to three workable options with their consequences for scope, deadline, budget, and quality. Be direct without putting the client on the spot.</p>' +
    '<div class="lead">"Why DEPT®?"</div>' +
    '<p>Because DEPT® connects technology, design, e-commerce, and client impact in integrated teams. That\'s exactly the interface I\'ve worked at. Experience &amp; Engineering, the closeness to platforms, and international scale are especially relevant to me — combined with the next step into formal end-to-end ownership.</p>' +
    '<div class="lead">"What is your main development area?"</div>' +
    '<p>My main development area is commercial project ownership. I understand effort, scope, dependencies and delivery risks, but I have not yet owned proposals and budget controlling as my core responsibility. I would learn DEPT®\'s commercial framework deliberately and make progress transparent.</p>';

  // ===== 7 · Terms & Governance Logic =====
  CONTENT.de[7] = '<table class="info">' +
    '<tr><th>Begriff</th><th>Arbeitsdefinition</th></tr>' +
    '<tr><td class="k">Re-Briefing</td><td>Anforderung in Ziel, Scope, Annahmen, offene Fragen und Akzeptanz übersetzen.</td></tr>' +
    '<tr><td class="k">Milestone</td><td>Entscheidungs- oder Lieferpunkt mit klarer Definition, Termin und Verantwortung.</td></tr>' +
    '<tr><td class="k">Dependency</td><td>Voraussetzung, ohne die eine Aufgabe oder ein Termin nicht belastbar ist.</td></tr>' +
    '<tr><td class="k">Risk Register</td><td>Risiko, Wahrscheinlichkeit, Auswirkung, Maßnahme, Besitzer und Review-Datum.</td></tr>' +
    '<tr><td class="k">Change Request</td><td>Bewertete Scope-Änderung mit Folgen für Termin, Aufwand, Budget und Qualität.</td></tr>' +
    '<tr><td class="k">KPI/Controlling</td><td>Gemeinsam vereinbarte Steuerungsgrößen; projektabhängig etwa Budgetverbrauch, Forecast, Marge, Meilensteine und Qualität.</td></tr>' +
    '<tr><td class="k">RAID</td><td>Risks, Assumptions, Issues, Dependencies als kompakte Steuerungsübersicht.</td></tr>' +
    '<tr><td class="k">Go-live Readiness</td><td>Prüfung von Scope, Tests, offenen Fehlern, Betrieb, Kommunikation und Rückfalloption.</td></tr>' +
    '</table>';

  CONTENT.en[7] = '<table class="info">' +
    '<tr><th>Term</th><th>Working Definition</th></tr>' +
    '<tr><td class="k">Re-briefing</td><td>Translating a requirement into goal, scope, assumptions, open questions, and acceptance criteria.</td></tr>' +
    '<tr><td class="k">Milestone</td><td>A decision or delivery point with a clear definition, date, and ownership.</td></tr>' +
    '<tr><td class="k">Dependency</td><td>A precondition without which a task or deadline isn\'t reliable.</td></tr>' +
    '<tr><td class="k">Risk register</td><td>Risk, likelihood, impact, mitigation, owner, and review date.</td></tr>' +
    '<tr><td class="k">Change request</td><td>An assessed scope change with consequences for deadline, effort, budget, and quality.</td></tr>' +
    '<tr><td class="k">KPI/controlling</td><td>Jointly agreed steering metrics; project-dependent, e.g. budget burn, forecast, margin, milestones, and quality.</td></tr>' +
    '<tr><td class="k">RAID</td><td>Risks, Assumptions, Issues, Dependencies as a compact steering overview.</td></tr>' +
    '<tr><td class="k">Go-live readiness</td><td>Checking scope, tests, open defects, operations, communication, and a fallback option.</td></tr>' +
    '</table>';

  // ===== 8 · Questions for the Employer =====
  CONTENT.de[8] = '<ul class="tight">' +
    '<li>Wie sieht ein typisches Projekt in Experience &amp; Engineering hinsichtlich Dauer, Budget, Teamgröße und Plattform aus?</li>' +
    '<li>Wie viele parallele Projekte verantwortet ein Senior Project Manager typischerweise?</li>' +
    '<li>Welche kommerziellen Kennzahlen steuert die Rolle selbst, und wo unterstützen Client Service oder Finance?</li>' +
    '<li>Wie entstehen Angebote und Kostenübersichten, und wie sieht die Freigabe aus?</li>' +
    '<li>Ist die Rolle stärker Delivery-, Account- oder Consulting-orientiert?</li>' +
    '<li>Wie verteilen sich Strategy, UX, UI, Dev und QA über Standorte und Partner?</li>' +
    '<li>Wo entstehen aktuell die häufigsten Projektprobleme: Scope, Ressourcen, Entscheidungen, Plattformabhängigkeiten oder Kundenseite?</li>' +
    '<li>Woran messen Sie Erfolg nach drei und sechs Monaten?</li>' +
    '<li>Wie wird die Einarbeitung in kommerzielle Steuerung gestaltet?</li>' +
    '<li>Was unterscheidet bei Ihnen einen guten von einem sehr guten Senior Project Manager?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Rahmenbedingungen klären</p>' +
    '<ul class="tight">' +
    '<li>Hamburg als vertraglicher Standort und konkrete 1-2-Tage-Regel;</li>' +
    '<li>Reiseanteil und standortübergreifende Zusammenarbeit;</li>' +
    '<li>Überstunden-/Zeitausgleich und Phasen rund um Go-lives;</li>' +
    '<li>variable Vergütung, Benefits und betriebliche Altersvorsorge;</li>' +
    '<li>Projektportfolio, Umsatz-/Margenverantwortung und Eskalationswege;</li>' +
    '<li>Entwicklungsweg in Richtung Program/Account/Delivery Leadership.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gesprächsstrategie zum Gehalt</p>' +
    '<div class="lead">Orientierung aus der aktualisierten Stellenbewertung: 72.000 Euro brutto pro Jahr nennen; Zielkorridor 70.000 bis 75.000 Euro. Die persönliche Untergrenze von 65.000 Euro nicht ungefragt offenlegen.</div>' +
    '<div class="lead">Formulierung: „Auf Basis meiner mehr als zehnjährigen kundenorientierten Agentur- und E-Commerce-Erfahrung, meines technischen Hintergrunds und des Umfangs der Senior-Verantwortung liegt meine Gehaltsvorstellung bei 72.000 Euro brutto pro Jahr. Entscheidend sind für mich daneben der konkrete Verantwortungsumfang und das Gesamtpaket.“</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">Wenn Budgetverantwortung als Lücke adressiert wird, den eigenen Wert nicht kleinreden: Die Gehaltsvorstellung bezieht sich auf die gesamte relevante Erfahrung; die Einarbeitung ist ein klar umrissener Teilbereich.</p>';

  CONTENT.en[8] = '<ul class="tight">' +
    '<li>What does a typical Experience &amp; Engineering project look like in terms of duration, budget, team size, and platform?</li>' +
    '<li>How many parallel projects does a Senior Project Manager typically own?</li>' +
    '<li>Which commercial metrics does the role steer directly, and where do Client Service or Finance support?</li>' +
    '<li>How are proposals and cost overviews created, and what does approval look like?</li>' +
    '<li>Is the role more delivery-, account-, or consulting-oriented?</li>' +
    '<li>How is work split across Strategy, UX, UI, Dev, and QA across locations and partners?</li>' +
    '<li>Where do the most frequent project problems occur today: scope, resources, decisions, platform dependencies, or the client side?</li>' +
    '<li>What do you measure success against after three and six months?</li>' +
    '<li>How is onboarding into commercial steering structured?</li>' +
    '<li>What separates a good Senior Project Manager from a great one, in your view?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Terms to Clarify</p>' +
    '<ul class="tight">' +
    '<li>Hamburg as the contractual location and the exact 1–2-day rule;</li>' +
    '<li>travel share and cross-location collaboration;</li>' +
    '<li>overtime/time-off-in-lieu and phases around go-lives;</li>' +
    '<li>variable pay, benefits, and company pension;</li>' +
    '<li>project portfolio, revenue/margin responsibility, and escalation paths;</li>' +
    '<li>development path toward Program/Account/Delivery Leadership.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary Conversation Strategy</p>' +
    '<div class="lead">Guidance from the updated role assessment: state €72,000 gross per year; target range €70,000–75,000. Don\'t disclose the personal floor of €65,000 unprompted.</div>' +
    '<div class="lead">Phrasing: "Based on my more than ten years of client-oriented agency and e-commerce experience, my technical background, and the scope of senior responsibility, my salary expectation is €72,000 gross per year. Beyond that, the concrete scope of responsibility and the total package matter to me."</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">If budget ownership is raised as a gap, don\'t undersell my own value: the salary expectation reflects the full relevant experience — onboarding is a clearly scoped sub-area.</p>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<ul class="tight checklist">' +
    '<li>Erst die Frage beantworten, dann das Beispiel.</li>' +
    '<li><mark>Senioriät durch Entscheidungen und Verantwortung zeigen, nicht durch große Worte.</mark></li>' +
    '<li>Budgetlücke klar benennen und direkt mit Lernplan verbinden.</li>' +
    '<li>Technische Tiefe als Nutzen darstellen, nicht in Lösungsdetails abtauchen.</li>' +
    '<li>Nicht jede Anforderung zu 100 Prozent erfüllen wollen.</li>' +
    '<li>Auch prüfen, ob Verantwortung, Teamsetup und kommerzieller Rahmen wirklich passen.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Am Abend vorher</p>' +
    '<ul class="tight">' +
    '<li>zwei STAR-Beispiele mit echten Details laut sprechen;</li>' +
    '<li>eine Scope-Änderung inklusive Auswirkung auf Zeit/Aufwand erklären;</li>' +
    '<li>englische Vorstellung und Budgetlücke einmal laut üben;</li>' +
    '<li>drei eigene Fragen priorisieren;</li>' +
    '<li>Ansprechpersonen, Gesprächsformat und Technik prüfen.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Mein Schlussgedanke</p>' +
    '<div class="lead">DEPT® gewinnt mit mir keine klassische Projektmanagerin, die seit Jahren ausschließlich Budgets und Angebote verwaltet. Das wäre nicht glaubwürdig. DEPT® gewinnt eine sehr erfahrene Agentur- und E-Commerce-Fachfrau, die digitale Delivery aus der Umsetzung heraus versteht, Risiken und Abhängigkeiten früh erkennt und zwischen Kunden, Design, Entwicklung und Partnern verlässlich übersetzt. Ich habe große Teile der Projektrolle bereits praktisch ausgeübt. Der nächste Schritt besteht darin, diese Erfahrung in eine formale End-to-End-Verantwortung zu überführen und die kommerzielle Steuerung gezielt zu vervollständigen. Meine stärkste Botschaft im Interview: Ich reduziere Komplexität, ohne sie kleinzureden, und schaffe Klarheit, damit Teams liefern und Kunden entscheiden können.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 4px;">Kernsatz</p>' +
    '<p>„Komplexität reduzieren. Entscheidungen ermöglichen. Delivery verlässlich führen.“</p>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Aktuelle DEPT®-Stellenanzeige 8076896, geprüft am 7. September 2026; DEPT® About Us, Unternehmensangaben und Positionierung; DEPT® Commerce Platforms, Plattform- und E-Commerce-Kontext; Daniela-Klein-CV.pdf, Daniela-Klein_CL.pdf und Stellenbewertung.md aus dem Bewerbungsordner; persönliche Stärken und Schwächen aus der finalen ABOUT-YOU-Interviewvorbereitung.</p>';

  CONTENT.en[9] = '<ul class="tight checklist">' +
    '<li>Answer the question first, then tell the example.</li>' +
    '<li><mark>Show seniority through decisions and responsibility, not big words.</mark></li>' +
    '<li>Name the budget gap clearly and connect it directly to a learning plan.</li>' +
    '<li>Present technical depth as a benefit — don\'t dive into solution details.</li>' +
    '<li>Don\'t try to meet every requirement 100%.</li>' +
    '<li>Also use the conversation to check whether the responsibility, team setup, and commercial frame really fit.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">The Evening Before</p>' +
    '<ul class="tight">' +
    '<li>say two STAR examples out loud with real details;</li>' +
    '<li>explain one scope change including its impact on time/effort;</li>' +
    '<li>practice the English introduction and the budget-gap answer out loud once;</li>' +
    '<li>prioritize three of my own questions;</li>' +
    '<li>check contacts, interview format, and tech setup.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">My Closing Thought</p>' +
    '<div class="lead">DEPT® doesn\'t gain a classic project manager who\'s spent years exclusively managing budgets and proposals with me — that wouldn\'t be credible. DEPT® gains a very experienced agency and e-commerce professional who understands digital delivery from hands-on execution, spots risks and dependencies early, and reliably translates between clients, design, development, and partners. I\'ve already practically carried out large parts of this project role. The next step is to formally extend that experience into end-to-end ownership and deliberately round out the commercial steering side. My strongest message in the interview: I reduce complexity without downplaying it, and I create clarity so teams can deliver and clients can decide.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 4px;">Core Line</p>' +
    '<p>"Reduce complexity. Enable decisions. Lead delivery reliably."</p>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: current DEPT® job posting 8076896, checked September 7, 2026; DEPT® About Us, company facts and positioning; DEPT® Commerce Platforms, platform and e-commerce context; Daniela-Klein-CV.pdf, Daniela-Klein_CL.pdf, and Stellenbewertung.md from the application folder; personal strengths and weaknesses from the final ABOUT YOU interview prep.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · DEPT® · Senior Project Manager",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
