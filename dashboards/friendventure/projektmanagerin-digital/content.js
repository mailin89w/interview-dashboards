// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Projektmanagerin Digital · Web &amp; E-Commerce<br>Friendventure GmbH · Erstgespräch mit Natalie Wetzel (20 Minuten)",
      role: "Projektmanagerin Digital",
      location: "Berlin / Köln laut Anzeige (ich: Hamburg – klären)",
      interviewDate: "21. Oktober 2026, 11:00–11:20 Uhr",
      salaryAd: "nicht angegeben · Markt ca. 55.000–70.000 €",
      salaryAsk: "65.000 € (bereits in der Bewerbung genannt)",
      salaryMin: "60.000 € (absolute Untergrenze 55.000 €)",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde langjährige technische Agentur- und E-Commerce-Erfahrung mit strukturierter Projektarbeit und sorge dafür, dass Kundenwünsche für Design und Entwicklung <mark>verständlich, realistisch und umsetzbar</mark> werden.'
    },
    en: {
      roleSubtitle: "Digital Project Manager · Web &amp; E-Commerce<br>Friendventure GmbH · First conversation with Natalie Wetzel (20 minutes)",
      role: "Digital Project Manager",
      location: "Berlin / Cologne per the ad (me: Hamburg – to clarify)",
      interviewDate: "Oct 21, 2026, 11:00–11:20 AM",
      salaryAd: "not stated · market approx. €55,000–70,000",
      salaryAsk: "€65,000 (already stated in my application)",
      salaryMin: "€60,000 (absolute floor €55,000)",
      introTitle: "Interview Prep",
      introText: 'I combine many years of technical agency and e-commerce experience with structured project work, making sure client requests become <mark>understandable, realistic, and actionable</mark> for design and development.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"Friendventure & die Rolle", en:"Friendventure & the Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Fragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Plan für die ersten 90 Tage", en:"First 90 Days Plan"},
    8: {de:"Eigene Fragen an Natalie Wetzel", en:"Questions for Natalie Wetzel"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich verbinde langjährige technische Agentur- und E-Commerce-Erfahrung mit strukturierter Projektarbeit und sorge dafür, dass Kundenwünsche für Design und Entwicklung verständlich, realistisch und umsetzbar werden.</div>' +
    '<p>Ich komme aus der technischen Umsetzung und kenne den Alltag von Agenturprojekten aus der Perspektive der Entwicklung. In den vergangenen Jahren lag mein Beitrag zunehmend dort, wo Kundenwünsche, Design und technische Machbarkeit zusammengebracht werden mussten: Anforderungen klären, offene Entscheidungen sichtbar machen, Arbeit strukturieren, Aufwand einschätzen und Qualität bis zum Go-live absichern.</p>' +
    '<p>Genau diese verbindende Rolle möchte ich jetzt zum klaren Schwerpunkt machen. Friendventure sucht keine Projektmanagerin, die nur Termine verwaltet. Die Rolle soll Kunden beraten, Konzepte mitentwickeln, Design, Marketing und Entwicklung koordinieren und gleichzeitig Budget, Sprintplanung und Qualität im Blick behalten.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Mein stärkster Bezug zur Stelle</p>' +
    '<p>Mehr als zehn Jahre technische Praxis in Web- und E-Commerce-Projekten. Bei Patrick &amp; Friends habe ich Anforderungen geklärt, Aufwand und Abhängigkeiten eingeordnet, Beteiligte koordiniert sowie Tests und Go-lives begleitet. <b>Shopify ist belegt.</b> <b>Webflow ist eine echte Lücke</b>, die ich offen benenne und über mein breites Webverständnis und meine Erfahrung mit unterschiedlichen Systemen einordne.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Ziel der 20 Minuten</p>' +
    '<div class="lead">Natalie soll schnell verstehen: technischer Agenturhintergrund, bewusster Wechsel ins Projektmanagement, glaubwürdiger Fit zu Web und E-Commerce.</div>';

  CONTENT.en[1] = '<div class="lead">I combine many years of technical agency and e-commerce experience with structured project work, making sure client requests become understandable, realistic, and actionable for design and development.</div>' +
    '<p>I come from technical delivery and know day-to-day agency projects from the development side. Over the past years, my contribution increasingly sat where client requests, design, and technical feasibility had to come together: clarifying requirements, surfacing open decisions, structuring work, estimating effort, and securing quality through go-live.</p>' +
    '<p>That bridging role is what I now want to make my clear focus. Friendventure isn\'t looking for a project manager who just manages dates. The role is meant to advise clients, help shape concepts, coordinate design, marketing, and development, and keep budget, sprint planning, and quality in view at the same time.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">My Strongest Link to the Role</p>' +
    '<p>More than ten years of hands-on practice in web and e-commerce projects. At Patrick &amp; Friends, I clarified requirements, assessed effort and dependencies, coordinated stakeholders, and accompanied testing and go-lives. <b>Shopify is documented.</b> <b>Webflow is a real gap</b>, which I name openly and frame through my broad web understanding and experience with many different systems.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Goal of the 20 Minutes</p>' +
    '<div class="lead">Natalie should quickly understand: technical agency background, a deliberate move into project management, and a credible fit for web and e-commerce.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
      '<button class="mtab" data-tab="weg">Woher · wohin</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre in Digitalagenturen an Websites, Shops und technischen Plattformen gearbeitet. Bei deepblue war ich an einer modularen Plattform für mehr als zehn Unilever-Marken beteiligt. Danach habe ich bei Patrick &amp; Friends E-Commerce-, Website- und Relaunch-Projekte von der Anforderungsklärung bis zum Go-live begleitet, unter anderem mit Shopify, Shopware, Spryker und WordPress.</p>' +
       '<p>Mit der Zeit lag mein Schwerpunkt immer stärker an den Schnittstellen. Ich habe Kundenanforderungen strukturiert, technische Abhängigkeiten mit Frontend, Backend und Design abgestimmt, Arbeitspakete priorisiert und Tests sowie Releases begleitet. Dabei habe ich gemerkt, dass meine größte Stärke darin liegt, <mark>unterschiedliche Perspektiven so zusammenzubringen, dass das Team arbeitsfähig bleibt und Kunden nachvollziehen können, was realistisch ist</mark>.</p>' +
       '<p>Den Wechsel ins digitale Projektmanagement habe ich deshalb bewusst vorbereitet und meine Praxiserfahrung durch eine Weiterbildung im AI Project Management ergänzt. An Friendventure spricht mich besonders an, dass ihr Web, E-Commerce, Design, Entwicklung und Marketing gemeinsam denkt. Shopify und Agenturprojekte kenne ich aus der Praxis. Webflow habe ich bisher nicht produktiv eingesetzt, bringe aber ein breites technisches Fundament mit und kann mich in neue Plattformen strukturiert einarbeiten.</p>' +
       '<p>Ich möchte bei euch meine technische Erfahrung nicht hinter mir lassen, sondern sie früher im Projekt einsetzen: für klare Anforderungen, realistische Planung, gute Kundenkommunikation und verlässliche Projekte bis zum Livegang.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich bringe mehr als zehn Jahre Erfahrung aus digitalen Agentur-, Web- und E-Commerce-Projekten mit. Mein Ursprung ist die Frontend-Entwicklung, mein Schwerpunkt hat sich aber immer stärker auf Anforderungen, Abstimmung, Aufwand, Priorisierung, Tests und Go-lives verlagert. Ich verstehe die Perspektive der Entwicklung und kann gleichzeitig Kundenwünsche so strukturieren, dass Design und Devs damit arbeiten können.</p>' +
       '<div class="lead">Genau diese Verbindung möchte ich bei Friendventure als Projektmanagerin zum Schwerpunkt machen.</div>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="weg" data-group="pitch">' +
       '<p>Ich komme aus der technischen Umsetzung und kenne Shops, Websites und Plattformen nicht nur aus Präsentationen, sondern aus dem Projektalltag. Ich will künftig stärker dafür verantwortlich sein, dass vor und während der Umsetzung Ziele, Anforderungen, Aufwand, Prioritäten und Entscheidungen klar bleiben.</p>' +
       '<div class="lead">Mein technisches Fundament bleibt ein Vorteil. Der Schwerpunkt verschiebt sich auf Kundenberatung, Koordination, Projektsteuerung und verlässliche Delivery.</div>' +
     '</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
      '<button class="mtab" data-tab="weg">Where from · where to</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from frontend development and spent more than ten years in digital agencies working on websites, shops, and technical platforms. At deepblue, I was part of a modular platform for more than ten Unilever brands. After that, at Patrick &amp; Friends, I accompanied e-commerce, website, and relaunch projects from requirements clarification through to go-live, among other things with Shopify, Shopware, Spryker, and WordPress.</p>' +
       '<p>Over time, my focus shifted more and more to the interfaces. I structured client requirements, aligned technical dependencies with frontend, backend, and design, prioritized work packages, and accompanied testing and releases. That\'s how I noticed my biggest strength lies in <mark>bringing different perspectives together so the team stays able to work and clients can follow what\'s realistic</mark>.</p>' +
       '<p>So I deliberately prepared the move into digital project management and rounded out my hands-on experience with AI Project Management training. What especially appeals to me about Friendventure is that you think web, e-commerce, design, development, and marketing together. I know Shopify and agency projects from practice. I haven\'t used Webflow productively yet, but I bring a broad technical foundation and can get into new platforms in a structured way.</p>' +
       '<p>I don\'t want to leave my technical experience behind — I want to use it earlier in the project: for clear requirements, realistic planning, good client communication, and reliable projects through to launch.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I bring more than ten years of experience from digital agency, web, and e-commerce projects. My origin is frontend development, but my focus has increasingly shifted to requirements, alignment, effort, prioritization, testing, and go-lives. I understand the development perspective and can at the same time structure client requests so that design and devs can work with them.</p>' +
       '<div class="lead">That\'s exactly the connection I want to make my focus at Friendventure as a project manager.</div>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="weg" data-group="pitch">' +
       '<p>I come from technical delivery and know shops, websites, and platforms not just from presentations but from day-to-day project work. Going forward, I want to be more responsible for keeping goals, requirements, effort, priorities, and decisions clear before and during delivery.</p>' +
       '<div class="lead">My technical foundation stays an advantage. The focus shifts to client advisory, coordination, project steering, and reliable delivery.</div>' +
     '</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Technik und Kundenperspektive verbinden</div><div class="b">Ich kann mit Devs konkret über Machbarkeit, Abhängigkeiten und Qualität sprechen und die Folgen für Kunden verständlich einordnen. Dadurch erkenne ich früh, wenn ein scheinbar kleiner Wunsch Folgen für Schnittstellen, Daten, Tests oder Termine hat.</div></div>' +
    '<div class="c"><div class="t">Anforderungen in arbeitsfähige Aufgaben übersetzen</div><div class="b">Ich reiche Wünsche nicht nur weiter. Ich kläre Ziel, Nutzungssituation, offene Entscheidungen und Randbedingungen. Danach lassen sich Aufwand, Priorität und Prüfkriterien sinnvoll besprechen.</div></div>' +
    '<div class="c"><div class="t">Qualität bis zum Go-live im Blick</div><div class="b">Durch meinen Entwicklungshintergrund denke ich Anforderungen, Umsetzung und Tests zusammen. Das ist besonders wertvoll, wenn Shops und Websites nach dem Launch weiterentwickelt werden.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Schwächen und sichere Antworten</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Ich spreche Unklarheiten und Risiken meist direkt an. Das ist in Projekten hilfreich, kann in einer neuen Runde aber härter wirken als beabsichtigt. Deshalb achte ich bewusst auf Zeitpunkt, Kontext und Formulierung. Mein Ziel ist eine klare Entscheidung und nicht das Rechthaben.</li>' +
    '<li><b>Trockener Humor und Sarkasmus:</b> In einem vertrauten Team kann das verbinden. In neuen oder angespannten Situationen halte ich mich damit zurück, bis ich Menschen und Atmosphäre besser einschätzen kann.</li>' +
    '<li><b>Nur bei lockerer Atmosphäre:</b> Meine ungefährlichste Schwäche ist Kinderschokolade. Die gefährdet höchstens den Vorrat im Büro. In einer streng fachlichen Situation weglassen.</li>' +
    '<li><b>Fachliche Grenze:</b> Webflow habe ich bisher nicht produktiv eingesetzt. Außerdem hatte ich bislang keinen offiziellen Titel als Projektmanagerin und keine belegte alleinige Gesamtbudgetverantwortung. Ich bringe aber viele zentrale Teile der Rolle aus der Praxis mit: Anforderungsarbeit, Aufwandsschätzung, Priorisierung, technische Abstimmung, Tests, Releases und Kundenprojekte. Genau diesen Verantwortungsumfang möchte ich jetzt systematisch erweitern.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Connecting tech and client perspective</div><div class="b">I can discuss feasibility, dependencies, and quality concretely with devs and frame the consequences understandably for clients. That way I notice early when a seemingly small request affects interfaces, data, tests, or deadlines.</div></div>' +
    '<div class="c"><div class="t">Turning requirements into workable tasks</div><div class="b">I don\'t just pass requests on. I clarify the goal, usage context, open decisions, and constraints. Then effort, priority, and acceptance criteria can be discussed meaningfully.</div></div>' +
    '<div class="c"><div class="t">Keeping quality in view through go-live</div><div class="b">Thanks to my development background, I think requirements, delivery, and testing together. That\'s especially valuable when shops and websites keep evolving after launch.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Weaknesses and Safe Answers</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> I usually address ambiguity and risk directly. That helps in projects, but can land harder than intended in a new group. So I\'m deliberate about timing, context, and phrasing — my goal is a clear decision, not being right.</li>' +
    '<li><b>Dry humor and sarcasm:</b> with a team I trust it can be a connector. In new or tense situations I hold back until I can read the people and the mood better.</li>' +
    '<li><b>Only when the mood is relaxed:</b> my least dangerous weakness is Kinderschokolade (chocolate) — it endangers, at most, the office supply. Leave it out in a strictly professional setting.</li>' +
    '<li><b>Domain gap:</b> I haven\'t used Webflow productively yet. I also haven\'t held an official project manager title and have no documented sole overall budget ownership. But I bring many core parts of the role from practice: requirements work, effort estimation, prioritization, technical alignment, testing, releases, and client projects. That\'s exactly the scope of responsibility I now want to expand systematically.</li>' +
    '</ul>';

  // ===== 4 · Friendventure & the Role =====
  CONTENT.de[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Was Friendventure macht</p>' +
    '<p>Friendventure ist eine 2012 gegründete Digitalagentur mit mehr als 70 Spezialistinnen und Spezialisten. Die Agentur arbeitet an Corporate Websites, E-Commerce-Lösungen, Plattformen, Portalen, digitaler Strategie und Online-Marketing. Die Projekte verbinden Beratung, UX und Design, Entwicklung, Content, SEO und Marketing.</p>' +
    '<p>Im E-Commerce begleitet Friendventure Unternehmen von Positionierung und Systemauswahl über UX und Shopentwicklung bis zu Conversion-Optimierung, Betrieb und Weiterentwicklung. Genannte Systeme: Shopify, Shopware, WordPress, TYPO3, Craft CMS, Webflow, Storyblok, Laravel und Vue.js.</p>' +
    '<p>Das Geschäftsmodell ist klassische digitale Projektarbeit mit langfristiger Betreuung: Beratung, Konzeption, Design, Entwicklung, Marketing und kontinuierliche Optimierung. Für die PM-Rolle heißt das viel Kundenkontakt und die Verantwortung, unterschiedliche Fachrichtungen auf ein gemeinsames Ziel auszurichten.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Neue Friends Digital Group</p>' +
    '<p>Seit September 2026 ist Friendventure Teil der neu gegründeten Friends Digital Group: sechs spezialisierte Agenturmarken mit zusammen mehr als 150 Mitarbeitenden. Friendventure bleibt als Marke und Team bestehen und verantwortet innerhalb der Gruppe insbesondere Websites, CMS, SEO, GEO und AI-Ready Websites. Bei größeren Projekten können Spezialisten aus der Gruppe hinzukommen. PM koordiniert also künftig womöglich auch zwischen Agenturen – gute Frage für eine spätere Runde.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Kultur und Werte</p>' +
    '<ul class="tight">' +
    '<li>Freundschaftliches Miteinander, offene Kommunikation</li>' +
    '<li>Zuverlässigkeit, Qualität, Wertschätzung, Weiterentwicklung</li>' +
    '<li>Flexible Wahl von Arbeitszeit und Arbeitsort, Homeoffice, Workation</li>' +
    '<li>Work-Life-Balance und Team-Events</li>' +
    '<li>Status quo darf hinterfragt werden</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">Außendarstellung bewusst locker und emotional → professionell, aber nicht steif auftreten. Nicht nur über Prozesse sprechen, sondern zeigen, dass ich gern mit Kunden und interdisziplinären Teams arbeite.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Die Rolle Projektmanagerin Digital</p>' +
    '<p>Zentrale Anlaufstelle für Kunden und interne Teams: Shopify- und Webflow-Projekte strategisch weiterentwickeln, Anforderungen in technisch umsetzbare Konzepte übersetzen, Workshops und Kundenabstimmungen moderieren, Aufwände und Angebote kalkulieren, Sprints planen, Budgets und Termine verfolgen, Qualität und Weiterentwicklung nach dem Go-live sichern. Breiter als reine Koordination: Kundenberatung, Account-Verantwortung, Konzeption, Delivery und ein kaufmännischer Anteil.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Anforderungen der Stelle und meine Belege</p>' +
    '<table class="info">' +
    '<tr><th>Gesucht</th><th>Mein belastbarer Bezug</th></tr>' +
    '<tr><td class="k">Web- und E-Commerce-Projekte bis zum Livegang</td><td>Mehr als zehn Jahre Agenturpraxis; Shop-, Website- und Relaunch-Projekte von Konzeption bis Go-live begleitet.</td></tr>' +
    '<tr><td class="k">Kundenanforderungen in Konzepte übersetzen</td><td>Anforderungen geklärt, technische Fragen und Abhängigkeiten sichtbar gemacht, Arbeitspakete strukturiert.</td></tr>' +
    '<tr><td class="k">Kunden, Marketing, Entwicklung und Design koordinieren</td><td>Kunden, Design, Frontend, Backend und externe Partner zusammengebracht; Marketingbezug vorhanden, Verantwortung nicht überhöhen.</td></tr>' +
    '<tr><td class="k">Shopify-Praxis</td><td>Shopify-Projekte und Shopify Certified Liquid Storefronts belegt.</td></tr>' +
    '<tr><td class="k">Webflow-Praxis</td><td>Bisher keine produktive Erfahrung – als klare Lernkurve benennen.</td></tr>' +
    '<tr><td class="k">Mindestens drei Jahre Projektmanagement</td><td>Langjährige praktische Projektsteuerung, aber kein offizieller PM-Titel und keine erfundene alleinige Gesamtprojektleitung.</td></tr>' +
    '<tr><td class="k">Aufwand, Sprintplanung, Priorisierung</td><td>Aufwandsschätzungen, Arbeitspakete, Abhängigkeiten, Priorisierung; Scrum-, Kanban- und Scrumban-Kontexte.</td></tr>' +
    '<tr><td class="k">Angebote und Budgets verantworten</td><td>Einfluss von Scope und Aufwand verstanden; eigenständige Angebots- und Budgetverantwortung nur behaupten, wenn belegbar.</td></tr>' +
    '</table>' +

    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Begriffe, die ich für dieses Gespräch kennen sollte</p>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Webflow</p>' +
    '<ul class="tight">' +
    '<li>Visueller Website-Builder mit integriertem CMS und Hosting</li>' +
    '<li>Design direkt im Browser, erzeugt sauberes HTML/CSS</li>' +
    '<li>Stark für Marketing- und Corporate-Websites, schwächer bei komplexem E-Commerce</li>' +
    '<li>Meine offene Lücke → Konzepte kenne ich, das Tool nicht</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>Webflow ist eine Low-Code-Plattform: Im <b>Designer</b> baut man Layouts visuell, arbeitet dabei aber mit echten Web-Konzepten wie Box-Model, Flexbox, Grid, Klassen und Breakpoints. Wiederverwendbare Bausteine heißen <b>Components</b>, strukturierte Inhalte (z. B. Blogartikel, Referenzen, Jobs) liegen in <b>CMS Collections</b>. Kunden pflegen Inhalte später im vereinfachten <b>Editor</b>, ohne das Layout zu zerstören. Animationen laufen über <b>Interactions</b>, Hosting kommt direkt von Webflow.</p>' +
    '<p><b>Stärken:</b> schnelle Umsetzung von Designs, Marketing-Teams können selbst pflegen, gute Performance und SEO-Grundlagen. <b>Grenzen:</b> keine eigene Server-Logik, Item-Limits im CMS je Tarif, E-Commerce eher einfach. Bei größeren Shops wird oft Webflow für die Marke und Shopify für den Shop kombiniert. Für Sonderfälle braucht es Custom Code oder externe Tools.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> früh klären, ob ein Kundenwunsch „Webflow-nativ“ geht oder Custom Code braucht, Tarif- und CMS-Grenzen ins Angebot einbeziehen, Redaktionsrechte und Schulung für den Kunden einplanen.</p>' +
    '<div class="erg">Brücke zu mir: Komponenten, CMS-Strukturen, responsive Verhalten, SEO und QA kenne ich aus Frontend- und Shopify-Projekten – Webflow ist dafür ein neues Werkzeug, kein neues Denken.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Headless CMS (z. B. Storyblok)</p>' +
    '<ul class="tight">' +
    '<li>Inhalte werden getrennt vom Frontend verwaltet</li>' +
    '<li>Auslieferung per API an Website, App oder Shop</li>' +
    '<li>Frontend frei wählbar, z. B. Vue.js / Nuxt</li>' +
    '<li>Gegenstück: klassisches CMS wie WordPress oder TYPO3</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>Ein klassisches CMS liefert Inhalte und Darstellung aus einer Hand (Templates im System). Ein <b>Headless CMS</b> hat „keinen Kopf“: Es speichert nur strukturierte Inhalte und stellt sie per API bereit. Das Frontend wird separat entwickelt. <b>Storyblok</b> ist ein Headless CMS mit visuellem Editor: Redakteure bauen Seiten aus vordefinierten Bausteinen (Blocks) und sehen eine Live-Vorschau. <b>Craft CMS</b> kann beides, klassisch und headless.</p>' +
    '<p><b>Vorteile:</b> ein Inhalt für mehrere Kanäle, freie Technologiewahl, oft bessere Performance. <b>Nachteile:</b> mehr Entwicklungsaufwand, zwei Systeme zu betreiben, Vorschau und Redaktionskomfort müssen bewusst gebaut werden.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> Content-Modell (welche Bausteine, welche Felder) früh mit Kunde, Design und Entwicklung festlegen – Änderungen daran sind später teuer.</p>' +
    '<div class="erg">Brücke zu mir: Bei deepblue habe ich mit modularen Bausteinen für viele Marken gearbeitet – dieselbe Logik.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">GEO &amp; AI-Ready Websites</p>' +
    '<ul class="tight">' +
    '<li>GEO = Generative Engine Optimization</li>' +
    '<li>Ziel: in KI-Antworten (ChatGPT, Perplexity, Google AI Overviews) genannt werden</li>' +
    '<li>Ergänzt SEO, ersetzt es nicht</li>' +
    '<li>Friendventures Schwerpunkt innerhalb der Friends Digital Group</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>Immer mehr Menschen suchen nicht mehr über Linklisten, sondern lassen sich von KI-Assistenten eine Antwort zusammenfassen. <b>SEO</b> zielt auf gute Rankings in Suchergebnissen, <b>GEO</b> darauf, dass die eigene Marke in generierten Antworten als Quelle auftaucht und korrekt dargestellt wird.</p>' +
    '<p><b>Typische Hebel für eine „AI-Ready Website“:</b> sauberes semantisches HTML, strukturierte Daten (schema.org), klar formulierte Fakten und FAQ-Inhalte, schnelle und für Crawler gut lesbare Seiten, eindeutige Aussagen zu Produkten, Preisen und Unternehmen. Teilweise kommen neue Konventionen wie eine <code>llms.txt</code> dazu. „AI-Ready Website“ ist dabei eher ein Marketingbegriff als ein fester Standard.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> Content, SEO und Technik müssen früher zusammenarbeiten; Erfolg ist schwerer messbar als klassische Rankings – Kennzahlen mit dem Kunden bewusst vereinbaren.</p>' +
    '<div class="erg">Im Gespräch: Interesse zeigen und fragen, wie Friendventure GEO heute in Projekten umsetzt – keine eigene Expertise behaupten.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Change Request</p>' +
    '<ul class="tight">' +
    '<li>Formale Änderung am vereinbarten Projektumfang</li>' +
    '<li>Wird bewertet: Aufwand, Termin, Kosten, Risiko</li>' +
    '<li>Erst nach Freigabe durch den Kunden umsetzen</li>' +
    '<li>Schutz gegen Scope Creep</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Ablauf:</b> Wunsch aufnehmen → gegen den vereinbarten Scope prüfen („ist das neu oder schon enthalten?“) → Auswirkungen mit Design und Entwicklung schätzen → Nachtragsangebot oder Optionen an den Kunden → Freigabe → in die Planung aufnehmen. Alternativ kann ein anderer Punkt dafür entfallen (Tausch statt Mehraufwand).</p>' +
    '<p><b>Warum wichtig:</b> Ohne sauberen Change-Prozess wachsen Projekte unbemerkt, Budgets laufen aus dem Ruder und am Ende streitet man über die Abnahme. Mit Change Requests bleibt nachvollziehbar, was wann beauftragt wurde.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> freundlich, aber konsequent sein – nicht jeden Wunsch reflexartig ablehnen, sondern Folgen transparent machen und den Kunden entscheiden lassen.</p>' +
    '<div class="erg">Brücke zu mir: STAR 2 (Zusatzwünsche bei festem Termin) – Muss und Kann trennen, Optionen mit Folgen zeigen.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Festpreis vs. Time &amp; Material</p>' +
    '<ul class="tight">' +
    '<li>Festpreis: fester Umfang zum festen Preis, Risiko bei der Agentur</li>' +
    '<li>Time &amp; Material: Abrechnung nach tatsächlichem Aufwand, Risiko beim Kunden</li>' +
    '<li>Mischformen: Budgetrahmen, Stundenkontingent, Retainer</li>' +
    '<li>Relevant, weil die Rolle Angebote kalkulieren soll</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Festpreis</b> passt, wenn der Umfang gut beschreibbar ist (z. B. Relaunch mit klarem Konzept). Er braucht ein präzises Pflichtenheft und einen sauberen Change-Prozess. <b>Time &amp; Material</b> passt zu agiler Weiterentwicklung, bei der sich Prioritäten laufend ändern. Häufig in Agenturen: <b>Retainer</b> oder monatliches Kontingent für Betreuung und Optimierung nach dem Launch.</p>' +
    '<p><b>Angebotskalkulation grob:</b> Anforderungen in Arbeitspakete zerlegen → Aufwand je Gewerk schätzen (Konzept, Design, Frontend, Backend, Content, QA) → Projektmanagement und Puffer für Risiken ergänzen → mit Tagessätzen multiplizieren → Annahmen und Ausschlüsse dokumentieren.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> Budget laufend gegen den Fortschritt verfolgen (Ist vs. Plan) und Abweichungen früh kommunizieren, nicht erst bei Projektende.</p>' +
    '<div class="erg">Ehrlich bleiben: Aufwandsschätzung und Scope-Klärung habe ich gemacht, alleinige Angebots- und Budgetverantwortung nicht.</div>' +
    '</div></div></div>';

  CONTENT.en[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">What Friendventure Does</p>' +
    '<p>Friendventure is a digital agency founded in 2012 with more than 70 specialists. The agency works on corporate websites, e-commerce solutions, platforms, portals, digital strategy, and online marketing. Projects combine consulting, UX and design, development, content, SEO, and marketing.</p>' +
    '<p>In e-commerce, Friendventure supports companies from positioning and system selection through UX and shop development to conversion optimization, operations, and ongoing development. Systems named: Shopify, Shopware, WordPress, TYPO3, Craft CMS, Webflow, Storyblok, Laravel, and Vue.js.</p>' +
    '<p>The business model is classic digital project work with long-term client care: consulting, conception, design, development, marketing, and continuous optimization. For the PM role, that means lots of client contact and the responsibility to align different disciplines on a shared goal.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">New Friends Digital Group</p>' +
    '<p>Since September 2026, Friendventure has been part of the newly founded Friends Digital Group: six specialized agency brands with more than 150 employees combined. Friendventure stays as a brand and team and is responsible within the group especially for websites, CMS, SEO, GEO, and AI-ready websites. On larger projects, specialists from the group can join. So PM may soon coordinate across agencies too — a good question for a later round.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Culture and Values</p>' +
    '<ul class="tight">' +
    '<li>Friendly collaboration, open communication</li>' +
    '<li>Reliability, quality, appreciation, growth</li>' +
    '<li>Flexible choice of working hours and location, home office, workation</li>' +
    '<li>Work-life balance and team events</li>' +
    '<li>Questioning the status quo is welcome</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">Public image is deliberately casual and emotional → come across professional but not stiff. Don\'t only talk about processes; show that I enjoy working with clients and interdisciplinary teams.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">The Digital Project Manager Role</p>' +
    '<p>Central point of contact for clients and internal teams: strategically develop Shopify and Webflow projects, translate requirements into technically feasible concepts, facilitate workshops and client alignments, estimate effort and calculate quotes, plan sprints, track budgets and deadlines, and secure quality and further development after go-live. Broader than pure coordination: client advisory, account responsibility, conception, delivery, and a commercial share.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Evidence</p>' +
    '<table class="info">' +
    '<tr><th>Requirement</th><th>My Solid Track Record</th></tr>' +
    '<tr><td class="k">Web and e-commerce projects through launch</td><td>More than ten years of agency practice; shop, website, and relaunch projects accompanied from conception to go-live.</td></tr>' +
    '<tr><td class="k">Translate client requirements into concepts</td><td>Clarified requirements, surfaced technical questions and dependencies, structured work packages.</td></tr>' +
    '<tr><td class="k">Coordinate clients, marketing, development, and design</td><td>Brought together clients, design, frontend, backend, and external partners; marketing exposure exists, don\'t overstate ownership.</td></tr>' +
    '<tr><td class="k">Shopify practice</td><td>Shopify projects and Shopify Certified Liquid Storefronts documented.</td></tr>' +
    '<tr><td class="k">Webflow practice</td><td>No productive experience yet — name it as a clear learning curve.</td></tr>' +
    '<tr><td class="k">At least three years of project management</td><td>Many years of hands-on project steering, but no official PM title and no invented sole end-to-end project lead.</td></tr>' +
    '<tr><td class="k">Effort, sprint planning, prioritization</td><td>Effort estimates, work packages, dependencies, prioritization; Scrum, Kanban, and Scrumban contexts.</td></tr>' +
    '<tr><td class="k">Own quotes and budgets</td><td>Understand how scope and effort drive cost; only claim independent quote and budget ownership where documented.</td></tr>' +
    '</table>' +

    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Terms I Should Know for This Conversation</p>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Webflow</p>' +
    '<ul class="tight">' +
    '<li>Visual website builder with built-in CMS and hosting</li>' +
    '<li>Design right in the browser, outputs clean HTML/CSS</li>' +
    '<li>Strong for marketing and corporate sites, weaker for complex e-commerce</li>' +
    '<li>My open gap → I know the concepts, not the tool</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>Webflow is a low-code platform: in the <b>Designer</b> you build layouts visually, but with real web concepts like the box model, flexbox, grid, classes, and breakpoints. Reusable building blocks are called <b>Components</b>; structured content (e.g. blog posts, case studies, jobs) lives in <b>CMS Collections</b>. Clients later maintain content in the simplified <b>Editor</b> without breaking the layout. Animations run via <b>Interactions</b>, and hosting comes directly from Webflow.</p>' +
    '<p><b>Strengths:</b> fast implementation of designs, marketing teams can maintain content themselves, good performance and SEO basics. <b>Limits:</b> no custom server logic, CMS item limits per plan, fairly basic e-commerce. For larger shops, Webflow for the brand plus Shopify for the shop is a common combination. Edge cases need custom code or external tools.</p>' +
    '<p><b>What it means for the project role:</b> clarify early whether a client request works "Webflow-native" or needs custom code, factor plan and CMS limits into the quote, and plan editor permissions and client training.</p>' +
    '<div class="erg">Bridge to me: components, CMS structures, responsive behavior, SEO, and QA I know from frontend and Shopify projects — Webflow is a new tool for that, not a new way of thinking.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Headless CMS (e.g. Storyblok)</p>' +
    '<ul class="tight">' +
    '<li>Content is managed separately from the frontend</li>' +
    '<li>Delivered via API to website, app, or shop</li>' +
    '<li>Frontend freely chosen, e.g. Vue.js / Nuxt</li>' +
    '<li>Counterpart: classic CMS like WordPress or TYPO3</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>A classic CMS delivers content and presentation from one system (templates inside the CMS). A <b>headless CMS</b> has "no head": it only stores structured content and serves it via API. The frontend is developed separately. <b>Storyblok</b> is a headless CMS with a visual editor: editors build pages from predefined building blocks (blocks) with a live preview. <b>Craft CMS</b> can do both, classic and headless.</p>' +
    '<p><b>Benefits:</b> one piece of content for several channels, free choice of technology, often better performance. <b>Drawbacks:</b> more development effort, two systems to run, preview and editor comfort must be built deliberately.</p>' +
    '<p><b>What it means for the project role:</b> define the content model (which blocks, which fields) early with client, design, and development — changing it later is expensive.</p>' +
    '<div class="erg">Bridge to me: at deepblue I worked with modular building blocks for many brands — the same logic.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">GEO &amp; AI-Ready Websites</p>' +
    '<ul class="tight">' +
    '<li>GEO = Generative Engine Optimization</li>' +
    '<li>Goal: get mentioned in AI answers (ChatGPT, Perplexity, Google AI Overviews)</li>' +
    '<li>Complements SEO, doesn\'t replace it</li>' +
    '<li>Friendventure\'s focus within the Friends Digital Group</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>More and more people no longer search through lists of links but let AI assistants summarize an answer. <b>SEO</b> aims for good rankings in search results; <b>GEO</b> aims for the brand to appear as a source in generated answers and be represented correctly.</p>' +
    '<p><b>Typical levers for an "AI-ready website":</b> clean semantic HTML, structured data (schema.org), clearly stated facts and FAQ content, fast pages that crawlers can read easily, unambiguous statements about products, prices, and the company. Sometimes new conventions like an <code>llms.txt</code> file come in. "AI-ready website" is more of a marketing term than a fixed standard.</p>' +
    '<p><b>What it means for the project role:</b> content, SEO, and tech have to work together earlier; success is harder to measure than classic rankings — agree on metrics with the client deliberately.</p>' +
    '<div class="erg">In the conversation: show interest and ask how Friendventure does GEO in projects today — don\'t claim expertise of my own.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Change Request</p>' +
    '<ul class="tight">' +
    '<li>Formal change to the agreed project scope</li>' +
    '<li>Assessed for effort, timeline, cost, risk</li>' +
    '<li>Only implemented after client approval</li>' +
    '<li>Protection against scope creep</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Flow:</b> capture the request → check it against the agreed scope ("is this new or already included?") → estimate impact with design and development → supplementary quote or options to the client → approval → add to planning. Alternatively, something else can be dropped instead (swap rather than extra effort).</p>' +
    '<p><b>Why it matters:</b> without a clean change process, projects grow unnoticed, budgets get out of hand, and acceptance ends in arguments. With change requests, it stays traceable what was ordered when.</p>' +
    '<p><b>What it means for the project role:</b> be friendly but consistent — don\'t reflexively reject every request, but make the consequences transparent and let the client decide.</p>' +
    '<div class="erg">Bridge to me: STAR 2 (extra requests with a fixed deadline) — separate must from nice-to-have, show options with consequences.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Fixed Price vs. Time &amp; Material</p>' +
    '<ul class="tight">' +
    '<li>Fixed price: fixed scope at a fixed price, risk sits with the agency</li>' +
    '<li>Time &amp; material: billed by actual effort, risk sits with the client</li>' +
    '<li>Hybrids: budget cap, hour contingent, retainer</li>' +
    '<li>Relevant because the role is meant to calculate quotes</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Fixed price</b> fits when scope can be described well (e.g. a relaunch with a clear concept). It needs a precise specification and a clean change process. <b>Time &amp; material</b> fits agile ongoing development where priorities keep changing. Common in agencies: a <b>retainer</b> or monthly contingent for support and optimization after launch.</p>' +
    '<p><b>Rough quote calculation:</b> break requirements into work packages → estimate effort per discipline (concept, design, frontend, backend, content, QA) → add project management and a risk buffer → multiply by day rates → document assumptions and exclusions.</p>' +
    '<p><b>What it means for the project role:</b> track budget continuously against progress (actual vs. plan) and communicate deviations early, not at project end.</p>' +
    '<div class="erg">Stay honest: I\'ve done effort estimation and scope clarification, not sole ownership of quotes and budgets.</div>' +
    '</div></div></div>';

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Kennzahlen oder Ergebnisse nur nennen, wenn sie belegt sind. Wirkung sonst qualitativ beschreiben.</div>' +
    '<div class="macc"><button class="macc-head">1 · Wie machen Sie aus einem Kundenwunsch eine umsetzbare Aufgabe <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich kläre zuerst Ziel und Rahmen, bevor ich über Lösung oder Aufwand spreche.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends kamen Anforderungen für Shop-, Website- und Relaunch-Projekte häufig aus Kundenbriefings oder Designs. Technische Voraussetzungen und Randfälle waren darin nicht immer vollständig beschrieben.</div>' +
    '<div class="row"><b>Aufgabe:</b> Das Team brauchte eine gemeinsame Grundlage, auf deren Basis Aufwand, Priorität und Umsetzung beurteilt werden konnten.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich sammelte offene Punkte, klärte die gewünschte Wirkung und machte Annahmen sichtbar. Danach prüfte ich technische Abhängigkeiten mit den zuständigen Personen und strukturierte die Anforderung in nachvollziehbare Arbeitspakete und prüfbare Ergebnisse.</div>' +
    '<div class="row"><b>Ergebnis:</b> Offene Entscheidungen wurden früher sichtbar. Kunden, Design und Entwicklung arbeiteten mit einem gemeinsamen Verständnis, und Tests bezogen sich auf geklärte Erwartungen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Wie priorisieren Sie bei zusätzlichen Wünschen und festem Termin <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich mache aus Dringlichkeit eine nachvollziehbare Entscheidung über Ziel, Umfang und Folgen.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Shop- und Relaunch-Projekten trafen geplante Go-live-Termine auf zusätzliche Wünsche und technische Abhängigkeiten.</div>' +
    '<div class="row"><b>Aufgabe:</b> Der unverzichtbare Kern musste geschützt werden, ohne neue Anforderungen einfach zu verlieren.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich trennte Muss und Kann, holte technische Einschätzungen ein und stellte Optionen mit ihren Auswirkungen auf Aufwand, Termin und Qualität gegenüber. Zurückgestellte Punkte und Annahmen wurden festgehalten.</div>' +
    '<div class="row"><b>Ergebnis:</b> Das Team konnte auf einen klaren Umfang hinarbeiten. Der Kunde erhielt eine nachvollziehbare Entscheidung, und zusätzliche Wünsche blieben für die Weiterentwicklung erhalten.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Wie koordinieren Sie Design und Entwicklung <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich behandle Design und Technik nicht als Übergabe, sondern als gemeinsame Klärung.</mark></div>' +
    '<div class="row"><b>Situation:</b> In Website- und Shopprojekten mussten visuelle Konzepte mit vorhandenen Systemen, responsivem Verhalten, Inhalten und technischen Grenzen zusammenpassen.</div>' +
    '<div class="row"><b>Aufgabe:</b> Gestalterische Qualität sollte erhalten bleiben, ohne Umsetzbarkeit und Wartbarkeit aus dem Blick zu verlieren.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich prüfte Designs früh auf offene Zustände, Varianten, Datenabhängigkeiten und responsive Anforderungen. Unklare Punkte brachte ich mit Design und Entwicklung zusammen und übersetzte die Entscheidung in konkrete Aufgaben.</div>' +
    '<div class="row"><b>Ergebnis:</b> Technische Fragen wurden nicht erst kurz vor der Abnahme sichtbar. Design und Entwicklung arbeiteten mit einer klareren gemeinsamen Grundlage.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Wie gehen Sie mit mehreren Plattformen und Markenanforderungen um <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich unterscheide gemeinsame Logik, konfigurierbare Unterschiede und echte Sonderfälle.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei deepblue arbeitete ich an einer modularen Plattform für mehr als zehn Unilever-DACH-Marken. Jede Marke hatte eigene Anforderungen, während die technische Grundlage gemeinsam bleiben sollte.</div>' +
    '<div class="row"><b>Aufgabe:</b> Individuelle Wünsche mussten eingeordnet werden, ohne Wiederverwendbarkeit und konsistente Qualität zu verlieren.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich klärte den Bedarf hinter der Anforderung und prüfte, ob er über ein gemeinsames oder konfigurierbares Modul abgebildet werden konnte. Auswirkungen auf weitere Marken wurden sichtbar gemacht.</div>' +
    '<div class="row"><b>Ergebnis:</b> Unterschiedliche Markenauftritte konnten auf einer gemeinsamen technischen Grundlage umgesetzt werden. Die Lösung blieb für weitere Anforderungen nutzbar.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Wie sichern Sie Qualität vor und nach dem Livegang <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich leite Tests aus geklärten Anforderungen ab und halte Probleme nicht künstlich grün.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Shop- und Website-Projekten mussten Fehler vor Releases eingeordnet und mit verschiedenen technischen Beteiligten bearbeitet werden.</div>' +
    '<div class="row"><b>Aufgabe:</b> Es musste entschieden werden, ob eine Korrektur vor dem Release nötig war, ein Workaround vertretbar war oder der Umfang angepasst werden musste.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich dokumentierte erwartetes und tatsächliches Verhalten, Reproduktionsschritte, betroffene Nutzer und Abhängigkeiten. Gemeinsam mit den zuständigen Personen bewertete ich Risiko und Optionen und verfolgte Korrektur und Retest.</div>' +
    '<div class="row"><b>Ergebnis:</b> Entscheidungen basierten auf einem nachvollziehbaren Fehlerbild. Abweichungen wurden strukturiert bearbeitet, und die Freigabe bezog sich auf geklärte Erwartungen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Wie würden Sie sich in Webflow einarbeiten <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich lerne ein neues System über reale Aufgaben, vorhandene Standards und gezielte technische Grundlagen.</mark></div>' +
    '<div class="row"><b>Situation:</b> Webflow ist für mich ein neues Werkzeug, während mir Webentwicklung, CMS-Logik, Komponenten, responsive Umsetzung, SEO und Qualitätssicherung vertraut sind.</div>' +
    '<div class="row"><b>Aufgabe:</b> Ich müsste schnell so viel Plattformverständnis aufbauen, dass ich Anforderungen, Aufwand, Risiken und Qualitätsfragen im Projektmanagement sicher einordnen kann.</div>' +
    '<div class="row"><b>Vorgehen:</b> Zuerst Friendventures typische Projektarten, Komponentenbibliotheken und Qualitätsstandards verstehen. Parallel einen kleinen Webflow-Case selbst nachvollziehen und mit Design und Entwicklung klären, wo die Plattform stark ist, wo Custom Code nötig wird und welche Grenzen für Kunden relevant sind.</div>' +
    '<div class="row"><b>Ergebnis:</b> Erwartet: Ich kann früh belastbar mitreden, ohne mich als Webflow-Entwicklerin auszugeben, und baue meine Plattformkenntnis an echten Projektfragen weiter aus.</div>' +
    '<div class="erg">Das ist eine Zukunfts-STAR – klar als Plan formulieren, nicht als erledigte Erfahrung.</div>' +
    '</div></div></div>';

  CONTENT.en[5] = '<div class="lead">Only name figures or results when they\'re documented. Otherwise describe the impact qualitatively.</div>' +
    '<div class="macc"><button class="macc-head">1 · How do you turn a client request into an actionable task <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I clarify the goal and framework first, before talking about a solution or effort.</mark></div>' +
    '<div class="row"><b>Situation:</b> at Patrick &amp; Friends, requirements for shop, website, and relaunch projects often came from client briefs or designs. Technical prerequisites and edge cases weren\'t always fully described.</div>' +
    '<div class="row"><b>Task:</b> the team needed a shared basis for judging effort, priority, and delivery.</div>' +
    '<div class="row"><b>Action:</b> I collected open points, clarified the intended effect, and surfaced assumptions. I then checked technical dependencies with the responsible people and structured the requirement into traceable work packages and verifiable outcomes.</div>' +
    '<div class="row"><b>Result:</b> open decisions surfaced earlier. Client, design, and development worked from a shared understanding, and tests referenced clarified expectations.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · How do you prioritize with extra requests and a fixed deadline <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I turn urgency into a traceable decision about goal, scope, and consequences.</mark></div>' +
    '<div class="row"><b>Situation:</b> on shop and relaunch projects, planned go-live dates met additional requests and technical dependencies.</div>' +
    '<div class="row"><b>Task:</b> the essential core had to be protected without simply losing new requirements.</div>' +
    '<div class="row"><b>Action:</b> I separated must-haves from nice-to-haves, gathered technical assessments, and contrasted options with their impact on effort, timeline, and quality. Deferred points and assumptions were recorded.</div>' +
    '<div class="row"><b>Result:</b> the team could work toward a clear scope. The client got a traceable decision, and extra requests were kept for further development.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · How do you coordinate design and development <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I treat design and tech not as a handover, but as a joint clarification.</mark></div>' +
    '<div class="row"><b>Situation:</b> in website and shop projects, visual concepts had to fit existing systems, responsive behavior, content, and technical limits.</div>' +
    '<div class="row"><b>Task:</b> design quality had to be preserved without losing sight of feasibility and maintainability.</div>' +
    '<div class="row"><b>Action:</b> I checked designs early for missing states, variants, data dependencies, and responsive requirements. I brought unclear points together with design and development and translated the decision into concrete tasks.</div>' +
    '<div class="row"><b>Result:</b> technical questions didn\'t only surface right before acceptance. Design and development worked from a clearer shared basis.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · How do you handle multiple platforms and brand requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I distinguish shared logic, configurable differences, and genuine edge cases.</mark></div>' +
    '<div class="row"><b>Situation:</b> at deepblue, I worked on a modular platform for more than ten Unilever DACH brands. Each brand had its own requirements, while the technical foundation was meant to stay shared.</div>' +
    '<div class="row"><b>Task:</b> individual requests had to be categorized without losing reusability and consistent quality.</div>' +
    '<div class="row"><b>Action:</b> I clarified the need behind each requirement and checked whether it could be covered by a shared or configurable module. The impact on other brands was made visible.</div>' +
    '<div class="row"><b>Result:</b> different brand experiences could be delivered on a shared technical foundation. The solution stayed usable for further requirements.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · How do you secure quality before and after launch <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I derive tests from clarified requirements and don\'t artificially keep problems "green."</mark></div>' +
    '<div class="row"><b>Situation:</b> on shop and website projects, defects had to be assessed before releases and worked on with various technical stakeholders.</div>' +
    '<div class="row"><b>Task:</b> it had to be decided whether a fix was needed before release, a workaround was acceptable, or scope had to be adjusted.</div>' +
    '<div class="row"><b>Action:</b> I documented expected vs. actual behavior, reproduction steps, affected users, and dependencies. Together with the responsible people, I assessed risk and options and tracked the fix and retest.</div>' +
    '<div class="row"><b>Result:</b> decisions were based on a traceable defect picture. Deviations were handled in a structured way, and sign-off referenced clarified expectations.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · How would you get up to speed in Webflow <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I learn a new system through real tasks, existing standards, and targeted technical basics.</mark></div>' +
    '<div class="row"><b>Situation:</b> Webflow is a new tool for me, while web development, CMS logic, components, responsive implementation, SEO, and quality assurance are familiar.</div>' +
    '<div class="row"><b>Task:</b> I\'d need to build enough platform understanding quickly to confidently assess requirements, effort, risks, and quality questions as a PM.</div>' +
    '<div class="row"><b>Action:</b> first understand Friendventure\'s typical project types, component libraries, and quality standards. In parallel, rebuild a small Webflow case myself and clarify with design and development where the platform is strong, where custom code is needed, and which limits matter to clients.</div>' +
    '<div class="row"><b>Result:</b> expected: I can contribute solidly early on without posing as a Webflow developer, and keep building platform knowledge on real project questions.</div>' +
    '<div class="erg">This is a forward-looking STAR — phrase it clearly as a plan, not as completed experience.</div>' +
    '</div></div></div>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Du erfüllst die geforderten drei Jahre Projektmanagement nicht eindeutig.“</div>' +
    '<p>Der offizielle Titel ist für mich neu, viele Aufgaben sind es nicht. Ich habe über Jahre Anforderungen geklärt, Aufwände und Abhängigkeiten eingeordnet, Arbeitspakete priorisiert, unterschiedliche Beteiligte koordiniert und Tests sowie Go-lives begleitet. Ich würde deshalb nicht behaupten, bereits drei Jahre alleinige Gesamtprojektleitung zu haben. Ich bringe aber ein sehr praxisnahes Fundament mit und suche bewusst den nächsten Schritt in die formale Projektverantwortung.</p>' +
    '<div class="lead">„Du hast keine Webflow-Erfahrung.“</div>' +
    '<p>Das stimmt. Webflow gehört bisher nicht zu den Plattformen, die ich produktiv eingesetzt habe. Ich kenne dafür Shopify, Shopware, Spryker, WordPress und unterschiedliche Frontend-Stacks. Dadurch kann ich neue Systeme technisch einordnen und verstehe Konzepte wie Komponenten, CMS-Strukturen, responsives Verhalten, SEO, Accessibility und Qualitätssicherung. Ich würde Webflow gezielt anhand eurer Projektstandards und realer Cases lernen und nicht so tun, als wäre die Erfahrung bereits vorhanden.</p>' +
    '<div class="lead">„Kannst du Angebote und Budgets verantworten?“</div>' +
    '<p>Ich habe Aufwandsschätzungen, Priorisierung und Scope-Entscheidungen begleitet und kenne die Auswirkungen von Anforderungen auf Aufwand und Termin. Eine alleinige kaufmännische Gesamtverantwortung für Angebote und Budgets würde ich nicht behaupten. Ich kann die zugrunde liegende Projektlogik gut einordnen und möchte verstehen, wie Kalkulation, Freigabe und kaufmännische Verantwortung bei euch verteilt sind.</p>' +
    '<div class="lead">„Wie sicher bist du im Kundenkontakt?“</div>' +
    '<p>Ich kenne Kundenabstimmungen und technische Klärungen aus der Agenturpraxis. Meine Stärke ist, konkret und verständlich zu erklären, was technisch möglich ist, wo Entscheidungen fehlen und welche Optionen bestehen. In der neuen Rolle möchte ich diese Kommunikation häufiger selbst führen und die Verantwortung vom Briefing bis zur Entscheidung durchgängig übernehmen.</p>' +
    '<div class="lead">„Kannst du Workshops moderieren?“</div>' +
    '<p>Ich bin mit Abstimmungen, technischen Klärungen, Wissensvermittlung und Workshop-Moderation vertraut. Ich strukturiere einen Workshop über Ziel, Entscheidungsfragen und gewünschtes Ergebnis, trenne Beobachtungen von Bewertungen und halte offene Punkte mit Verantwortlichen fest. Den genauen Umfang meiner bisherigen eigenständigen Moderation beschreibe ich ehrlich und erfinde keine Routine.</p>' +
    '<div class="lead">„Wie gut ist dein Englisch?“</div>' +
    '<p>Ich arbeite fließend auf Englisch und kann technische sowie projektbezogene Themen besprechen. Wenn mit verhandlungssicher gemeint ist, komplexe Vertrags- oder Eskalationsgespräche vollständig auf Englisch zu führen, würde ich gern verstehen, wie häufig und in welchem Kontext das in der Rolle vorkommt.</p>' +
    '<div class="lead">„Warum Friendventure?“</div>' +
    '<p>Friendventure verbindet genau die Themen, aus denen ich komme: Agenturprojekte, Websites, E-Commerce, Design und technische Umsetzung. Gleichzeitig ist die Rolle breiter als meine bisherige Entwicklerinnenposition und gibt mir die Möglichkeit, Kundenberatung und Projektverantwortung bewusst auszubauen. Dass ihr Shopify-Projekte langfristig weiterentwickelt, AI praktisch einbezieht und verschiedene Disziplinen im Team verbindet, macht die Aufgabe für mich besonders passend.</p>' +
    '<div class="lead">„Warum gerade jetzt der Wechsel?“</div>' +
    '<p>In den letzten Jahren habe ich gemerkt, dass meine größte Wirkung häufig vor und zwischen den Umsetzungsschritten liegt: Anforderungen schärfen, Abhängigkeiten sichtbar machen, Beteiligte zusammenbringen und Qualität absichern. Die Weiterbildung hat diesen Wechsel methodisch ergänzt. Jetzt suche ich bewusst eine Rolle, in der diese Verantwortung mein Schwerpunkt ist und nicht nur neben der Entwicklung läuft.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Das erste Gespräch mit Natalie Wetzel</p>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Wahrscheinlicher Ablauf der 20 Minuten:</p>' +
    '<ol class="tight">' +
    '<li>Kurze Begrüßung und Einordnung des Gesprächs</li>' +
    '<li>Meine Vorstellung in etwa 60 bis 90 Sekunden</li>' +
    '<li>Motivation für Friendventure und den Rollenwechsel</li>' +
    '<li>Abgleich der wichtigsten Muss-Kriterien</li>' +
    '<li>Rahmenbedingungen wie Standort, Remote-Arbeit, Gehalt und Starttermin</li>' +
    '<li>Meine ein bis zwei wichtigsten Fragen</li>' +
    '<li>Nächster Schritt im Prozess</li>' +
    '</ol>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Ich sollte deshalb:</p>' +
    '<ul class="tight">' +
    '<li>Kurz antworten und zuerst die Kernfrage beantworten</li>' +
    '<li>Nicht den gesamten Lebenslauf chronologisch erzählen</li>' +
    '<li>Den Rollenwechsel positiv erklären: hin zu mehr Verantwortung, nicht weg von Entwicklung</li>' +
    '<li>Webflow offen und ruhig einordnen</li>' +
    '<li>Praktische Projektsteuerung belegen, ohne einen früheren offiziellen PM-Titel zu erfinden</li>' +
    '<li>Bei Budget und Angeboten klar zwischen Mitwirkung und Gesamtverantwortung unterscheiden</li>' +
    '<li>Interesse an Friendventures tatsächlicher Arbeitsweise zeigen</li>' +
    '<li>Die 20 Minuten nicht mit zu vielen Detailfragen überladen</li>' +
    '</ul>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Wahrscheinliche Fragen:</p>' +
    '<ol class="tight">' +
    '<li>Erzähl mir kurz etwas über dich und deinen bisherigen Weg.</li>' +
    '<li>Warum möchtest du aus der Frontend-Entwicklung ins Projektmanagement wechseln?</li>' +
    '<li>Was hat dich an Friendventure und dieser Stelle angesprochen?</li>' +
    '<li>Wie viel Projektmanagement hast du bisher tatsächlich gemacht?</li>' +
    '<li>Wie viel Shopify- und Webflow-Erfahrung bringst du mit?</li>' +
    '<li>Wie gehst du mit Kundenanforderungen um, die technisch oder zeitlich schwierig sind?</li>' +
    '<li>Wie sicher bist du im direkten Kundenkontakt und in Workshops?</li>' +
    '<li>Hast du bereits Angebote und Budgets verantwortet?</li>' +
    '<li>Wie nutzt du AI oder Automatisierung in deiner Arbeit?</li>' +
    '<li>Welcher Standort kommt für dich infrage und wie stellst du dir Remote-Arbeit vor?</li>' +
    '<li>Wie hoch ist deine Gehaltsvorstellung?</li>' +
    '<li>Wann könntest du starten?</li>' +
    '</ol>' +
    '<div class="erg">Gesprächseinstieg: „Hallo Natalie, vielen Dank für die Einladung und die schnelle Rückmeldung. Ich freue mich, euch kennenzulernen. Bei der Vorbereitung ist mir noch einmal aufgefallen, wie gut die Verbindung aus Web, E-Commerce, Design und technischer Umsetzung zu meiner bisherigen Agenturerfahrung passt.“</div>';

  CONTENT.en[6] = '<div class="lead">"You don\'t clearly meet the required three years of project management."</div>' +
    '<p>The official title is new for me; many of the tasks aren\'t. For years I\'ve clarified requirements, assessed effort and dependencies, prioritized work packages, coordinated different stakeholders, and accompanied testing and go-lives. So I wouldn\'t claim three years of sole end-to-end project leadership. But I bring a very practical foundation and am deliberately looking for the next step into formal project responsibility.</p>' +
    '<div class="lead">"You have no Webflow experience."</div>' +
    '<p>That\'s right. Webflow isn\'t one of the platforms I\'ve used productively so far. Instead, I know Shopify, Shopware, Spryker, WordPress, and various frontend stacks. That lets me assess new systems technically, and I understand concepts like components, CMS structures, responsive behavior, SEO, accessibility, and quality assurance. I\'d learn Webflow specifically from your project standards and real cases, and not pretend the experience is already there.</p>' +
    '<div class="lead">"Can you own quotes and budgets?"</div>' +
    '<p>I\'ve accompanied effort estimates, prioritization, and scope decisions and know how requirements affect effort and timeline. I wouldn\'t claim sole commercial ownership of quotes and budgets. I can assess the underlying project logic well and would like to understand how calculation, approval, and commercial responsibility are split at your agency.</p>' +
    '<div class="lead">"How confident are you in client contact?"</div>' +
    '<p>I know client alignments and technical clarifications from agency practice. My strength is explaining concretely and understandably what\'s technically possible, where decisions are missing, and which options exist. In the new role, I want to lead this communication myself more often and take responsibility end-to-end from brief to decision.</p>' +
    '<div class="lead">"Can you facilitate workshops?"</div>' +
    '<p>I\'m familiar with alignments, technical clarifications, knowledge transfer, and workshop facilitation. I structure a workshop around the goal, decision questions, and desired outcome, separate observations from judgments, and record open points with owners. I describe the actual extent of my independent facilitation honestly and don\'t invent a routine.</p>' +
    '<div class="lead">"How good is your English?"</div>' +
    '<p>I work fluently in English and can discuss technical and project topics. If "business fluent" means running complex contract or escalation conversations fully in English, I\'d like to understand how often and in which context that comes up in the role.</p>' +
    '<div class="lead">"Why Friendventure?"</div>' +
    '<p>Friendventure combines exactly the topics I come from: agency projects, websites, e-commerce, design, and technical delivery. At the same time, the role is broader than my previous developer position and lets me deliberately build up client advisory and project responsibility. That you develop Shopify projects long-term, use AI practically, and connect different disciplines in one team makes the role a particularly good fit for me.</p>' +
    '<div class="lead">"Why the shift right now?"</div>' +
    '<p>Over the last few years I\'ve noticed that my biggest impact often lies before and between the delivery steps: sharpening requirements, surfacing dependencies, bringing stakeholders together, and securing quality. My training complemented this shift methodically. Now I\'m deliberately looking for a role where this responsibility is my focus and not just running alongside development.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">The First Conversation With Natalie Wetzel</p>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Likely flow of the 20 minutes:</p>' +
    '<ol class="tight">' +
    '<li>Short welcome and framing of the conversation</li>' +
    '<li>My introduction in about 60 to 90 seconds</li>' +
    '<li>Motivation for Friendventure and the role change</li>' +
    '<li>Check of the key must-have criteria</li>' +
    '<li>Terms like location, remote work, salary, and start date</li>' +
    '<li>My one or two most important questions</li>' +
    '<li>Next step in the process</li>' +
    '</ol>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">So I should:</p>' +
    '<ul class="tight">' +
    '<li>Keep answers short and answer the core question first</li>' +
    '<li>Not narrate my whole CV chronologically</li>' +
    '<li>Frame the role change positively: toward more responsibility, not away from development</li>' +
    '<li>Address Webflow openly and calmly</li>' +
    '<li>Show hands-on project steering without inventing a previous official PM title</li>' +
    '<li>On budgets and quotes, clearly distinguish contribution from overall ownership</li>' +
    '<li>Show interest in how Friendventure actually works</li>' +
    '<li>Not overload the 20 minutes with too many detailed questions</li>' +
    '</ul>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Likely questions:</p>' +
    '<ol class="tight">' +
    '<li>Tell me briefly about yourself and your path so far.</li>' +
    '<li>Why do you want to move from frontend development into project management?</li>' +
    '<li>What appealed to you about Friendventure and this role?</li>' +
    '<li>How much project management have you actually done so far?</li>' +
    '<li>How much Shopify and Webflow experience do you bring?</li>' +
    '<li>How do you handle client requirements that are technically or time-wise difficult?</li>' +
    '<li>How confident are you in direct client contact and workshops?</li>' +
    '<li>Have you owned quotes and budgets before?</li>' +
    '<li>How do you use AI or automation in your work?</li>' +
    '<li>Which location works for you, and how do you picture remote work?</li>' +
    '<li>What\'s your salary expectation?</li>' +
    '<li>When could you start?</li>' +
    '</ol>' +
    '<div class="erg">Opening line: "Hi Natalie, thank you for the invitation and the quick reply. I\'m glad to get to know you. While preparing, it struck me again how well the combination of web, e-commerce, design, and technical delivery fits my agency experience."</div>';

  // ===== 7 · First 90 Days Plan =====
  CONTENT.de[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Erste 30 Tage · verstehen</p>' +
    '<ul class="tight">' +
    '<li>Team, Rollen, Kunden und laufende Projekte kennenlernen.</li>' +
    '<li>Typische Shopify- und Webflow-Projektarten verstehen.</li>' +
    '<li>Projektablauf von Angebot und Kick-off bis Launch und Weiterentwicklung nachvollziehen.</li>' +
    '<li>Vorhandene Templates, Kalkulationslogik, Boards und Qualitätsstandards kennenlernen.</li>' +
    '<li>Webflow-Grundlagen anhand eines realen internen Beispiels aufbauen.</li>' +
    '<li>Erwartungen an Kundenkommunikation, Workshop-Moderation und Reporting klären.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 31–60 · übernehmen</p>' +
    '<ul class="tight">' +
    '<li>Erste klar abgegrenzte Kunden- und Projektaufgaben eigenständig übernehmen.</li>' +
    '<li>Anforderungen und offene Entscheidungen strukturiert dokumentieren.</li>' +
    '<li>Sprintplanung, Abstimmungen und Statuskommunikation aktiv vorbereiten.</li>' +
    '<li>Aufwand, Risiken, Scope und Terminfolgen transparent machen.</li>' +
    '<li>Qualitäts- und Abnahmeprozesse sicher anwenden.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 61–90 · stabilisieren</p>' +
    '<ul class="tight">' +
    '<li>Ein Projekt oder Teilprojekt verlässlich in eigener Verantwortung steuern.</li>' +
    '<li>Kundenkommunikation und interne Abstimmungswege stabilisieren.</li>' +
    '<li>Erste Verbesserung im Projektablauf gemeinsam mit dem Team umsetzen.</li>' +
    '<li>Webflow-Stärken und -Grenzen für typische Kundenfragen sicher einordnen.</li>' +
    '<li>Einen sinnvollen AI- oder Automatisierungsansatz für einen wiederkehrenden Arbeitsschritt bewerten.</li>' +
    '</ul>';

  CONTENT.en[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">First 30 Days · Understand</p>' +
    '<ul class="tight">' +
    '<li>Get to know the team, roles, clients, and running projects.</li>' +
    '<li>Understand typical Shopify and Webflow project types.</li>' +
    '<li>Follow the project flow from quote and kick-off through launch and further development.</li>' +
    '<li>Learn existing templates, calculation logic, boards, and quality standards.</li>' +
    '<li>Build Webflow basics on a real internal example.</li>' +
    '<li>Clarify expectations for client communication, workshop facilitation, and reporting.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 31–60 · Take Over</p>' +
    '<ul class="tight">' +
    '<li>Independently take over the first clearly scoped client and project tasks.</li>' +
    '<li>Document requirements and open decisions in a structured way.</li>' +
    '<li>Actively prepare sprint planning, alignments, and status communication.</li>' +
    '<li>Make effort, risks, scope, and timeline consequences transparent.</li>' +
    '<li>Apply quality and acceptance processes confidently.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 61–90 · Stabilize</p>' +
    '<ul class="tight">' +
    '<li>Reliably steer one project or sub-project under my own responsibility.</li>' +
    '<li>Stabilize client communication and internal alignment channels.</li>' +
    '<li>Implement a first improvement to the project flow together with the team.</li>' +
    '<li>Confidently frame Webflow strengths and limits for typical client questions.</li>' +
    '<li>Evaluate a sensible AI or automation approach for a recurring work step.</li>' +
    '</ul>';

  // ===== 8 · Questions for Natalie Wetzel =====
  CONTENT.de[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Für das erste Gespräch priorisieren</p>' +
    '<ul class="tight">' +
    '<li>Wie ist die Rolle organisatorisch zwischen Köln, Berlin und dem Hamburger Standort aufgehängt?</li>' +
    '<li>Ist dauerhaftes Arbeiten aus Hamburg beziehungsweise überwiegend remote für diese konkrete Stelle vorgesehen?</li>' +
    '<li>Was ist der wichtigste Grund für die Besetzung, und was soll die Person in den ersten sechs Monaten erreichen?</li>' +
    '<li>Wie sieht der weitere Auswahlprozess nach diesem Kennenlernen aus?</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">Für 20 Minuten reichen ein bis zwei dieser Fragen. Standort und Remote früh klären, weil die Anzeige Köln und Berlin nennt, Friendventure aber auch einen Hamburger Standort hat.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Für eine fachliche zweite Runde</p>' +
    '<ul class="tight">' +
    '<li>Wie verteilen sich Kundenberatung, operative Projektsteuerung und kaufmännische Verantwortung?</li>' +
    '<li>Welche Projektarten würden am Anfang voraussichtlich im Mittelpunkt stehen?</li>' +
    '<li>Wie groß sind die typischen Teams, und wie arbeiten PM, Design, Entwicklung und Marketing zusammen?</li>' +
    '<li>Wie werden Angebote kalkuliert, und wer gibt Budgets und Change Requests frei?</li>' +
    '<li>Mit welchem agilen Ablauf arbeitet ihr in Shopify- und Webflow-Projekten konkret?</li>' +
    '<li>Wie viel Webflow-Tiefe erwartet ihr vom Projektmanagement vom ersten Tag an?</li>' +
    '<li>Wie werden Qualität und Erfolg nach dem Livegang gemessen?</li>' +
    '<li>Welche Veränderungen ergeben sich für das Projektmanagement durch die Friends Digital Group?</li>' +
    '<li>Wie nutzt ihr AI heute konkret in Projekten und internen Abläufen?</li>' +
    '<li>In welchen Situationen wird verhandlungssicheres Englisch benötigt?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gehalt, Verfügbarkeit und Standort</p>' +
    '<table class="info">' +
    '<tr><th>Gehalt</th><th>Brutto jährlich</th></tr>' +
    '<tr><td class="k">In der Bewerbung genannt</td><td><b>65.000 €</b></td></tr>' +
    '<tr><td class="k">Geschätzte marktgerechte Spanne</td><td>ca. 55.000–70.000 €</td></tr>' +
    '<tr><td class="k">Empfohlene Forderung</td><td><b>65.000 €</b></td></tr>' +
    '<tr><td class="k">Reguläres Mindestziel</td><td>60.000 €</td></tr>' +
    '<tr><td class="k">Nur bei besonders überzeugendem Gesamtpaket</td><td>55.000–60.000 €</td></tr>' +
    '<tr><td class="k">Absolute Untergrenze</td><td>55.000 €</td></tr>' +
    '</table>' +
    '<div class="lead">Im Gespräch konsistent bei 65.000 € bleiben: „Meine Gehaltsvorstellung liegt, wie in meiner Bewerbung angegeben, bei 65.000 Euro brutto jährlich. Für mich passt diese Größenordnung zur Verbindung aus Kundenberatung, technischer Projektsteuerung und meiner langjährigen Web- und E-Commerce-Erfahrung. Natürlich möchte ich im Prozess noch verstehen, wie der konkrete Verantwortungsumfang und das Gesamtpaket aussehen.“</div>' +
    '<div class="erg">Nicht vorsorglich relativieren oder von mir aus nach unten korrigieren: Die Stelle umfasst neben Projektsteuerung auch Kundenberatung, Aufwandskalkulation, Angebote sowie Budget- und Terminverantwortung. Mindestziel und Untergrenze nicht nennen.</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">Ein kurzfristiger Einstieg ist laut Bewerbung möglich. Wenn nach einem konkreten Datum gefragt wird, nur ein Datum nennen, das tatsächlich realistisch ist.</p>' +
    '<div class="lead">Standort: „Ich lebe in Hamburg. Auf eurer Website habe ich gesehen, dass ihr einen Hamburger Standort und ein flexibles Arbeitsmodell habt, während die Stelle mit Berlin und Köln ausgeschrieben ist. Deshalb würde ich gern verstehen, wie ihr die Standortzuordnung und mögliche Präsenztage für diese Rolle konkret handhabt.“</div>';

  CONTENT.en[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Prioritize for the First Conversation</p>' +
    '<ul class="tight">' +
    '<li>How is the role organized across Cologne, Berlin, and the Hamburg office?</li>' +
    '<li>Is working permanently from Hamburg, or mostly remote, intended for this specific role?</li>' +
    '<li>What\'s the main reason for filling the role, and what should the person achieve in the first six months?</li>' +
    '<li>What does the rest of the selection process look like after this conversation?</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">One or two of these are enough for 20 minutes. Clarify location and remote early, since the ad names Cologne and Berlin but Friendventure also has a Hamburg office.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">For a Second, In-Depth Round</p>' +
    '<ul class="tight">' +
    '<li>How are client advisory, operational project steering, and commercial responsibility split?</li>' +
    '<li>Which project types would likely be the focus at the start?</li>' +
    '<li>How big are typical teams, and how do PM, design, development, and marketing work together?</li>' +
    '<li>How are quotes calculated, and who approves budgets and change requests?</li>' +
    '<li>Which agile process do you actually use in Shopify and Webflow projects?</li>' +
    '<li>How much Webflow depth do you expect from project management on day one?</li>' +
    '<li>How are quality and success measured after launch?</li>' +
    '<li>What changes for project management through the Friends Digital Group?</li>' +
    '<li>How do you use AI today in projects and internal processes?</li>' +
    '<li>In which situations is business-fluent English needed?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary, Availability, and Location</p>' +
    '<table class="info">' +
    '<tr><th>Salary</th><th>Gross per year</th></tr>' +
    '<tr><td class="k">Stated in my application</td><td><b>€65,000</b></td></tr>' +
    '<tr><td class="k">Estimated market range</td><td>approx. €55,000–70,000</td></tr>' +
    '<tr><td class="k">Recommended ask</td><td><b>€65,000</b></td></tr>' +
    '<tr><td class="k">Regular minimum target</td><td>€60,000</td></tr>' +
    '<tr><td class="k">Only with an especially convincing overall package</td><td>€55,000–60,000</td></tr>' +
    '<tr><td class="k">Absolute floor</td><td>€55,000</td></tr>' +
    '</table>' +
    '<div class="lead">Stay consistently at €65,000 in the conversation: "As stated in my application, my salary expectation is €65,000 gross per year. For me, that figure fits the combination of client advisory, technical project steering, and my many years of web and e-commerce experience. Of course, I\'d still like to understand the concrete scope of responsibility and the overall package during the process."</div>' +
    '<div class="erg">Don\'t pre-emptively qualify it or correct it downward myself: besides project steering, the role includes client advisory, effort calculation, quotes, and budget and deadline responsibility. Don\'t mention the minimum target or the floor.</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">A short-notice start is possible per the application. If asked for a concrete date, only name a date that\'s actually realistic.</p>' +
    '<div class="lead">Location: "I live in Hamburg. I saw on your website that you have a Hamburg office and a flexible working model, while the role is advertised for Berlin and Cologne. So I\'d like to understand how you handle location assignment and possible on-site days for this role."</div>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Meine drei Kernbotschaften</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>Ich kenne digitale Agentur-, Web- und E-Commerce-Projekte seit mehr als zehn Jahren aus der Praxis.</mark></li>' +
    '<li>Ich verbinde Kundenwünsche, Design und technische Umsetzung und mache daraus eine arbeitsfähige Grundlage.</li>' +
    '<li>Der formale Rollenwechsel ist neu, die zentralen Aufgaben rund um Anforderungen, Aufwand, Priorisierung, Tests und Go-lives sind es nicht.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Drei ehrliche Grenzen</p>' +
    '<ul class="tight">' +
    '<li>Bisher kein offizieller Projektmanagerinnen-Titel und keine erfundene alleinige Gesamtprojektleitung</li>' +
    '<li>Keine produktive Webflow-Erfahrung</li>' +
    '<li>Keine belegte alleinige Angebots- und Gesamtbudgetverantwortung</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Zwei Fragen, die ich sicher stellen möchte</p>' +
    '<ul class="tight">' +
    '<li>Wie ist die Rolle organisatorisch zwischen Köln, Berlin, Hamburg und Remote-Arbeit aufgehängt?</li>' +
    '<li>Was soll die Person in den ersten sechs Monaten konkret erreichen?</li>' +
    '</ul>' +
    '<div class="lead">Letzter Gedanke: Es ist ein 20-minütiges Kennenlernen, keine vollständige Fachprüfung. Ruhig, klar und freundlich bleiben. Zuerst die Frage beantworten, dann ein kurzes Beispiel geben. Die Lücken nicht verstecken, aber auch nicht zum Mittelpunkt machen. Nicht kleiner machen als nötig: Mein Wert liegt in der ungewöhnlich breiten Verbindung aus Technik, Designverständnis, Agenturpraxis und E-Commerce.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Friendventure Stellenanzeige Projektmanager Digital (m/w/d); Friendventure Unternehmensprofil, Werte, Expertise, Shopify-Agentur- und Karriereseiten; Pressemitteilung „Friendventure ist jetzt Teil der Friends Digital Group“ vom 4. September 2026; eingereichter Lebenslauf und Anschreiben vom 18. Oktober 2026; Gesprächseinladung für den 21. Oktober 2026.</p>';

  CONTENT.en[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">My Three Core Messages</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>I\'ve known digital agency, web, and e-commerce projects from practice for more than ten years.</mark></li>' +
    '<li>I connect client requests, design, and technical delivery and turn them into a workable foundation.</li>' +
    '<li>The formal role change is new; the core tasks around requirements, effort, prioritization, testing, and go-lives are not.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Three Honest Limits</p>' +
    '<ul class="tight">' +
    '<li>No official project manager title so far, and no invented sole end-to-end project leadership</li>' +
    '<li>No productive Webflow experience</li>' +
    '<li>No documented sole ownership of quotes and overall budgets</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Two Questions I Want to Ask Confidently</p>' +
    '<ul class="tight">' +
    '<li>How is the role organized across Cologne, Berlin, Hamburg, and remote work?</li>' +
    '<li>What should the person concretely achieve in the first six months?</li>' +
    '</ul>' +
    '<div class="lead">Final thought: this is a 20-minute get-to-know-you, not a full technical exam. Stay calm, clear, and friendly. Answer the question first, then give a short example. Don\'t hide the gaps, but don\'t make them the centerpiece either. Don\'t undersell myself: my value lies in the unusually broad combination of tech, design sense, agency practice, and e-commerce.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: Friendventure job posting Projektmanager Digital (m/f/d); Friendventure company profile, values, expertise, Shopify agency, and careers pages; press release "Friendventure is now part of the Friends Digital Group" of September 4, 2026; submitted CV and cover letter of October 18, 2026; interview invitation for October 21, 2026.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · Friendventure · Projektmanagerin Digital",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
