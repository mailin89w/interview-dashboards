// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Agile Project Manager<br>marketoolz.com GmbH · Gespräch mit Falko Willers (Geschäftsführer), Hamburg",
      role: "Agile Project Manager",
      location: "Hamburg",
      interviewDate: "16. Oktober 2026, 16:30 Uhr (online)",
      salaryAd: "in der Anzeige nicht angegeben",
      salaryAsk: "70.000 € (bereits in der Bewerbung genannt)",
      salaryMin: "offen",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde technische Projekterfahrung mit klarer Kundenkommunikation und sorge dafür, dass aus Anforderungen ein <mark>realistischer, transparenter Arbeitsfluss</mark> wird.'
    },
    en: {
      roleSubtitle: "Agile Project Manager<br>marketoolz.com GmbH · Conversation with Falko Willers (Managing Director), Hamburg",
      role: "Agile Project Manager",
      location: "Hamburg",
      interviewDate: "Oct 16, 2026, 4:30 PM (online)",
      salaryAd: "not stated in the ad",
      salaryAsk: "€70,000 (already stated in my application)",
      salaryMin: "TBD",
      introTitle: "Interview Prep",
      introText: 'I combine technical project experience with clear client communication, turning requirements into a <mark>realistic, transparent workflow</mark>.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"marketoolz & die Rolle", en:"marketoolz & the Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Fragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Plan für die ersten 90 Tage", en:"First 90 Days Plan"},
    8: {de:"Eigene Fragen an Falko Willers", en:"Questions for Falko Willers"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich verbinde technische Projekterfahrung mit klarer Kundenkommunikation und sorge dafür, dass aus Anforderungen ein realistischer, transparenter Arbeitsfluss wird.</div>' +
    '<p>Ich komme aus der technischen Umsetzung und habe mehr als zehn Jahre lang digitale Kundenprojekte, Websites, Shops und modulare Plattformen begleitet. Dabei habe ich zunehmend Aufgaben übernommen, die über die reine Entwicklung hinausgingen: Anforderungen klären, Aufwände und Abhängigkeiten einordnen, Arbeitspakete priorisieren, unterschiedliche Beteiligte zusammenbringen sowie Tests und Go-lives begleiten.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Wo komme ich her und wo will ich hin</p>' +
    '<p>Ich kenne den Projektalltag aus der Perspektive des Entwicklungsteams. Ich möchte künftig stärker dafür verantwortlich sein, dass Anforderungen, Prioritäten und Rahmenbedingungen vor und während der Umsetzung klar bleiben. Meine technische Erfahrung bleibt mein Fundament. Mein Schwerpunkt verschiebt sich auf Kundenkommunikation, Projektsteuerung, Flow und verlässliche Delivery.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Mehrwert</p>' +
    '<div class="lead">Ich verstehe Devs und technische Abhängigkeiten, kann Auswirkungen für Kunden verständlich machen und halte Scope, Prioritäten und Qualität zusammen.</div>';

  CONTENT.en[1] = '<div class="lead">I combine technical project experience with clear client communication, turning requirements into a realistic, transparent workflow.</div>' +
    '<p>I come from technical delivery and have spent more than ten years accompanying digital client projects, websites, shops, and modular platforms. Along the way, I took on increasing responsibility beyond pure development: clarifying requirements, assessing effort and dependencies, prioritizing work packages, bringing different stakeholders together, and accompanying testing and go-lives.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Where I Come From and Where I\'m Headed</p>' +
    '<p>I know project reality from the development team\'s perspective. Going forward, I want to take stronger ownership of keeping requirements, priorities, and framework conditions clear before and during delivery. My technical background stays my foundation. My focus is shifting to client communication, project steering, flow, and reliable delivery.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Value I Bring</p>' +
    '<div class="lead">I understand devs and technical dependencies, can make the impact for clients understandable, and hold scope, priorities, and quality together.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre an Websites, Shops und technischen Plattformen gearbeitet. Bei deepblue war ich an einer modularen Plattform für mehr als zehn Unilever-Marken beteiligt. Später habe ich bei Patrick &amp; Friends E-Commerce-, Website- und Relaunch-Projekte von der Anforderungsklärung bis zum Go-live begleitet, unter anderem mit Shopify, Shopware, Spryker und WordPress.</p>' +
       '<p>Mit der Zeit lag mein Schwerpunkt immer stärker an den Schnittstellen. Ich habe Anforderungen strukturiert, Aufwand und technische Abhängigkeiten mit Frontend, Backend, Design und externen Partnern abgestimmt, Arbeitspakete priorisiert und Tests sowie Releases begleitet. Dabei habe ich gemerkt, dass meine besondere Stärke darin liegt, <mark>Kundenrahmen und Entwicklungsrealität so zusammenzubringen, dass Entscheidungen transparent und die nächsten Schritte für alle Beteiligten klar sind</mark>.</p>' +
       '<p>Den Wechsel ins agile Projektmanagement habe ich bewusst vorbereitet und meine Praxiserfahrung durch eine Weiterbildung im AI Project Management ergänzt. Dort ging es unter anderem um Product Lifecycle, agile Delivery, Business Cases sowie Daten- und MLOps-Grundlagen.</p>' +
       '<p>An marketoolz reizen mich besonders der Kanban-Fokus, die Nähe zur Entwicklung und die individuellen Portal- und Datenprojekte. Dass ihr beispielsweise Container GO für OTTO DÖRNER entwickelt habt, macht die Verbindung zu meiner E-Commerce-, Plattform- und White-Label-Erfahrung sehr konkret. Ich möchte diese Erfahrung einsetzen, um Kundenanforderungen sauber einzuordnen, den Flow für das Team zu verbessern und Projekte verlässlich bis zum Go-live zu begleiten.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich verbinde mehr als zehn Jahre technische Erfahrung in digitalen Kunden- und E-Commerce-Projekten mit praktischer Arbeit an Anforderungen, Priorisierung, Tests und Go-lives. Ich kenne die Perspektive der Devs und kann Kunden transparent erklären, was realistisch ist, welche Abhängigkeiten bestehen und welche Entscheidung gebraucht wird.</p>' +
       '<div class="lead">Genau diese Brückenfunktion möchte ich bei marketoolz als Agile Project Manager übernehmen.</div>' +
     '</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from frontend development and spent more than ten years working on websites, shops, and technical platforms. At deepblue, I was part of a modular platform for more than ten Unilever brands. Later, at Patrick &amp; Friends, I accompanied e-commerce, website, and relaunch projects from requirements clarification through to go-live, among other things with Shopify, Shopware, Spryker, and WordPress.</p>' +
       '<p>Over time, my focus increasingly shifted to the interfaces. I structured requirements, aligned effort and technical dependencies with frontend, backend, design, and external partners, prioritized work packages, and accompanied testing and releases. That\'s how I noticed that my particular strength lies in <mark>bringing client constraints and development reality together so that decisions are transparent and the next steps are clear for everyone involved</mark>.</p>' +
       '<p>I deliberately prepared the shift into agile project management, rounding out my hands-on experience with AI Project Management training — covering product lifecycle, agile delivery, business cases, plus data and MLOps foundations.</p>' +
       '<p>What appeals to me about marketoolz is especially the Kanban focus, the closeness to development, and the individual portal and data projects. The fact that you built Container GO for OTTO DÖRNER makes the connection to my e-commerce, platform, and white-label experience very concrete. I want to use that experience to structure client requirements cleanly, improve flow for the team, and reliably accompany projects through to go-live.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I combine more than ten years of technical experience in digital client and e-commerce projects with hands-on work on requirements, prioritization, testing, and go-lives. I know the devs\' perspective and can transparently explain to clients what\'s realistic, which dependencies exist, and which decision is needed.</p>' +
       '<div class="lead">That\'s exactly the bridging function I want to take on at marketoolz as Agile Project Manager.</div>' +
     '</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Technische und fachliche Perspektiven verbinden</div><div class="b">Ich kann mit Entwicklerinnen und Entwicklern konkret über Machbarkeit und Abhängigkeiten sprechen und diese Folgen für Kunden verständlich einordnen. Bei Patrick &amp; Friends habe ich Kunden, Design, Frontend, Backend und externe Partner zusammengebracht.</div></div>' +
    '<div class="c"><div class="t">Anforderungen in einen klaren Arbeitsfluss übersetzen</div><div class="b">Ich reiche Wünsche nicht einfach weiter. Ich kläre Ziel, Nutzungssituation, Rahmenbedingungen und offene Entscheidungen, bevor eine Anforderung priorisiert, geschätzt und getestet wird.</div></div>' +
    '<div class="c"><div class="t">Technische Risiken früh erkennen</div><div class="b">Durch meine Entwicklungserfahrung erkenne ich häufig früh, wenn eine Schnittstelle, ein Datenfluss oder eine Plattformgrenze relevant wird, und kann die richtigen Personen frühzeitig einbeziehen.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Schwächen und sichere Antworten</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Ich spreche Unklarheiten und Risiken meistens direkt an. Das hilft in technischen Projekten, kann in einer neuen Runde aber härter wirken als beabsichtigt. Deshalb achte ich bewusst auf Zeitpunkt und Formulierung. Mein Ziel ist eine klare Entscheidung, nicht das Rechthaben.</li>' +
    '<li><b>Trockener Humor:</b> Mein Humor ist manchmal sehr trocken und gelegentlich sarkastisch. In einem vertrauten Team kann das verbinden. In neuen oder angespannten Situationen halte ich mich damit zurück, bis ich Menschen und Situation besser einschätzen kann.</li>' +
    '<li><b>Locker nur bei passender Gesprächsatmosphäre:</b> Meine ungefährlichste Schwäche ist Kinderschokolade. Die gefährdet höchstens den Vorrat im Büro.</li>' +
    '<li><b>Fachliche Grenze bei konkreter Nachfrage:</b> Ich habe Projekte nicht unter dem offiziellen Titel Agile Project Manager geführt und keine belegbare Gesamtbudgetverantwortung. Außerdem bin ich keine Spring-Boot- oder Hosting-Architektin. Ich bringe aber viele Teile der Rolle aus der Praxis mit: Anforderungsarbeit, Priorisierung, Aufwandsschätzung, technische Abstimmung, Qualitätssicherung und Go-live-Begleitung. Den formalen Verantwortungsumfang möchte ich jetzt bewusst übernehmen.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Connecting technical and business perspectives</div><div class="b">I can discuss feasibility and dependencies concretely with developers and frame the consequences understandably for clients. At Patrick &amp; Friends, I brought together clients, design, frontend, backend, and external partners.</div></div>' +
    '<div class="c"><div class="t">Translating requirements into a clear workflow</div><div class="b">I don\'t just pass on requests. I clarify the goal, usage context, framework conditions, and open decisions before a requirement gets prioritized, estimated, and tested.</div></div>' +
    '<div class="c"><div class="t">Spotting technical risks early</div><div class="b">Thanks to my development background, I often notice early when an interface, data flow, or platform boundary becomes relevant, and can bring in the right people early.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Weaknesses and Safe Answers</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> I usually address ambiguity and risk directly. That helps in technical projects, but can land harder than intended in a new group. So I\'m deliberate about timing and phrasing — my goal is a clear decision, not being right.</li>' +
    '<li><b>Dry humor:</b> my humor is sometimes very dry and occasionally sarcastic. With a team I trust it can be a connector. In new or tense situations I hold back until I can read the people and situation better.</li>' +
    '<li><b>The light answer, when the mood fits:</b> my least dangerous weakness is Kinderschokolade (chocolate) — it endangers, at most, the office supply.</li>' +
    '<li><b>A domain gap, only on explicit request:</b> I haven\'t run projects under the official title of Agile Project Manager and have no documented overall budget ownership. I\'m also not a Spring Boot or hosting architect. But I bring many parts of the role from hands-on practice: requirements work, prioritization, effort estimation, technical alignment, quality assurance, and go-live support. I now want to deliberately take on the formal scope of responsibility.</li>' +
    '</ul>';

  // ===== 4 · marketoolz & the Role =====
  CONTENT.de[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Das Unternehmen marketoolz</p>' +
    '<p>marketoolz ist ein inhabergeführtes Hamburger Softwarehaus, das im Jahr 2000 gegründet wurde. Das Unternehmen entwickelt und betreibt individuelle webbasierte Informationssysteme, Dashboards, Datenmanagement-Plattformen, B2B-Portale und E-Commerce-Lösungen. Die Leistungen reichen von Anforderungsanalyse und Konzeption über Entwicklung, Systemintegration und Hosting bis zu Schulung, Support und laufendem Betrieb.</p>' +
    '<p>Das Geschäftsmodell ist damit kein klassisches Produktunternehmen und keine reine Entwicklungsagentur. marketoolz verbindet individuelle Softwareentwicklung mit eigenen wiederverwendbaren Bausteinen und langfristiger Kundenbetreuung.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Verbindung zu OTTO DÖRNER und Container GO</p>' +
    '<p>marketoolz hat Container GO ursprünglich als Kundenportal für OTTO DÖRNER entwickelt. Die Plattform ermöglicht Entsorgungsunternehmen, eigene B2B-Portale aufzusetzen und unter anderem Aufträge, Dokumente und ERP-Prozesse digital abzubilden. Diese Verbindung ist für mich ein starker Anknüpfungspunkt: Ich kenne modulare Plattformen und White-Label-Strukturen aus der Praxis und habe mich im Rahmen der Vorbereitung auf OTTO DÖRNER bereits intensiv mit DÖRNER GO, Container GO, Partneranforderungen und Portal-Onboarding beschäftigt.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Die Rolle und das Gespräch</p>' +
    '<ul class="tight">' +
    '<li><b>Rolle:</b> Brücke zwischen Kunden und Devs, Kanban-Flow, Reviews und Retros, externe Partner sowie technische Themen wie Hosting, SSO und Spring Boot.</li>' +
    '<li><b>Gespräch:</b> Direkt mit Geschäftsführer Falko Willers am 16. Oktober 2026 um 16:30 Uhr online — wahrscheinlich persönlich, pragmatisch und mit Fokus auf Motivation, Arbeitsweise und beiderseitigen Fit.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Kultur und Werte aus der Anzeige</p>' +
    '<ul class="tight">' +
    '<li>Kleines dynamisches Team und flache Hierarchien</li>' +
    '<li>Hohe Eigenverantwortung und direkter Kundenkontakt</li>' +
    '<li>Pragmatische agile Arbeit statt starrer Methodengläubigkeit</li>' +
    '<li>Kanban, Flow und Selbstorganisation</li>' +
    '<li>Offenheit für KI, Agentic Coding und neue Geschäftsmodelle</li>' +
    '<li>Ein monatlicher offener Freitag für eigene Projekte oder Weiterbildung</li>' +
    '<li>Kurze Wege, regelmäßige Team-Events und Gestaltungsspielraum</li>' +
    '<li>Flexible Arbeits- und Präsenzzeiten</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Anforderungen der Stelle und meine Belege</p>' +
    '<table class="info">' +
    '<tr><th>Gesucht</th><th>Mein belastbarer Bezug</th></tr>' +
    '<tr><td class="k">Brücke zwischen Kunden und Softwareentwicklung</td><td>Langjährige Abstimmung zwischen Kunden, Design, Frontend, Backend und externen Partnern.</td></tr>' +
    '<tr><td class="k">Feste Kundenrahmen mit agiler Entwicklung verbinden</td><td>Aufwandsschätzungen, Priorisierung, Scope-Klärung und Delivery; keine erfundene Gesamtbudgetverantwortung.</td></tr>' +
    '<tr><td class="k">Kanban und Flow optimieren</td><td>Praxis in Kanban-, Scrum- und Scrumban-Kontexten; Arbeitspakete und Blocker transparent machen.</td></tr>' +
    '<tr><td class="k">Anforderungen übersetzen und greifbar machen</td><td>Fachliche, gestalterische und technische Anforderungen in umsetzbare Arbeitspakete überführt.</td></tr>' +
    '<tr><td class="k">Agile Formate moderieren</td><td>Reviews, Abstimmungen und technische Klärungen vertraut; Umfang eigenständiger Retrospektiven ehrlich einordnen.</td></tr>' +
    '<tr><td class="k">Kommunikation mit externen Partnern und ERP-Betreibern</td><td>Abstimmung mit externen Dienstleistern und technischen Beteiligten aus Kundenprojekten.</td></tr>' +
    '<tr><td class="k">Technische Architekturthemen einordnen</td><td>Breites Web-, Shop- und Entwicklungsverständnis; Spring Boot, SSO und Hosting nicht als Spezialexpertise behaupten.</td></tr>' +
    '<tr><td class="k">Roadmap und Steckbriefe erstellen</td><td>Priorisierung, Abhängigkeiten und Quick Wins aus Projektpraxis; formale Roadmap-Gesamtverantwortung ist nächster Schritt.</td></tr>' +
    '<tr><td class="k">Innovation und KI-gestützte Prozesse</td><td>Weiterbildung im AI Project Management, AI Agents und Workflows; Interesse an verantwortungsvollem Praxiseinsatz.</td></tr>' +
    '</table>' +
    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Technische Begriffe aus der Anzeige</p>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Spring Boot</p>' +
    '<ul class="tight">' +
    '<li>Java-Framework fürs Backend</li>' +
    '<li>Baut Web-Anwendungen und REST-APIs schnell auf</li>' +
    '<li>Viel Vorkonfiguration, Webserver eingebaut</li>' +
    '<li>Bei marketoolz: wahrscheinlich Basis für Portale und Schnittstellen (z. B. ERP)</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>Spring Boot baut auf dem Spring Framework auf, dem verbreitetsten Java-Ökosystem für Unternehmensanwendungen. Es nimmt Entwicklern viel Konfigurationsarbeit ab („Convention over Configuration“): Über sogenannte <b>Starter</b> (z. B. für Web, Datenbank oder Security) bindet man Funktionen einfach als Abhängigkeit ein. Ein Webserver (meist Tomcat) ist eingebaut, die Anwendung läuft als eigenständige Datei und lässt sich deshalb gut in Docker-Containern betreiben.</p>' +
    '<p><b>Typische Einsätze:</b> REST-APIs, Backends für B2B-Portale, Microservices, Anbindung an ERP-Systeme, Datenbankzugriff über Spring Data/JPA, Login und Rechte über Spring Security.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> Aufwände für Schnittstellen realistisch einschätzen, Abhängigkeiten zu Versions-Upgrades (z. B. Spring Boot 2 → 3 mit neuer Java-Version) und Sicherheitsupdates in Roadmap und Wartung einplanen.</p>' +
    '<div class="erg">Vergleich aus meiner Welt: Was Laravel oder Symfony für PHP sind, ist Spring Boot für Java.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">SSO (Single Sign-On)</p>' +
    '<ul class="tight">' +
    '<li>Einmal anmelden, Zugriff auf mehrere Anwendungen</li>' +
    '<li>Zentrale Identität beim Identity Provider (z. B. Microsoft Entra ID, Keycloak, Okta)</li>' +
    '<li>Standards: SAML 2.0, OpenID Connect / OAuth 2.0</li>' +
    '<li>Im B2B-Portal: Kunden-Mitarbeitende nutzen ihren Firmen-Login</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Ablauf:</b> Nutzer öffnet die Anwendung → wird zum Identity Provider (IdP) weitergeleitet → meldet sich dort an, ggf. mit Zwei-Faktor → der IdP schickt ein signiertes Token zurück → die Anwendung vertraut diesem Token und lässt den Nutzer rein. Ein Passwort muss die Anwendung selbst gar nicht kennen.</p>' +
    '<p><b>Vorteile:</b> weniger Passwörter, zentrale Rechteverwaltung, Offboarding an einer Stelle, höhere Sicherheit. <b>Abgrenzung:</b> OAuth 2.0 regelt Berechtigungen (was darf eine App), OpenID Connect ergänzt die Anmeldung (wer ist der Nutzer); SAML ist der ältere, in Konzernen verbreitete Standard.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> Früh klären, welchen IdP und welches Protokoll der Kunde nutzt, wie Gruppen auf Rollen im Portal abgebildet werden und wer Testzugänge stellt. Die Abstimmung mit der Kunden-IT hat oft langen Vorlauf und gehört deshalb früh in den Plan.</p>' +
    '<div class="erg">Alltagsbeispiel: „Mit Google anmelden“ ist SSO über OpenID Connect.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Hosting</p>' +
    '<ul class="tight">' +
    '<li>Bereitstellung und Betrieb von Anwendungen auf Servern</li>' +
    '<li>Varianten: eigene Server, Managed Hosting, Cloud (z. B. AWS, Azure, Hetzner)</li>' +
    '<li>Umfasst Verfügbarkeit, Backups, Updates, Monitoring, Sicherheit</li>' +
    '<li>marketoolz bietet Hosting selbst an → Teil des laufenden Betriebs</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Ausführlicher erklärt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Modelle:</b> Shared Hosting (mehrere Kunden auf einem Server), virtuelle oder dedizierte Server, Managed Hosting (der Anbieter kümmert sich um Betriebssystem und Patches), Cloud (skalierbar, nutzungsbasiert abgerechnet) oder On-Premise im Rechenzentrum des Kunden.</p>' +
    '<p><b>Wichtige Fragen bei B2B-Kunden:</b> Serverstandort und DSGVO (EU/Deutschland), SLA mit Verfügbarkeit (z. B. 99,9 %) und Reaktionszeiten, Backup- und Wiederherstellungskonzept, getrennte Umgebungen (Entwicklung, Staging, Produktion), Deployment über CI/CD und Docker, Monitoring, Kosten.</p>' +
    '<p><b>Was das für die Projektrolle heißt:</b> Go-live und Wartungsfenster planen, Kommunikation bei Störungen steuern, Betriebsanforderungen früh im Angebot und in der Roadmap berücksichtigen.</p>' +
    '<div class="erg">Brücke zu mir: Docker-Erfahrung und Go-live-Begleitung aus Kundenprojekten.</div>' +
    '</div></div></div>';

  CONTENT.en[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">The Company marketoolz</p>' +
    '<p>marketoolz is an owner-managed software house based in Hamburg, founded in 2000. The company develops and operates individual web-based information systems, dashboards, data management platforms, B2B portals, and e-commerce solutions. Services range from requirements analysis and conception through development, system integration, and hosting, to training, support, and ongoing operations.</p>' +
    '<p>The business model is therefore neither a classic product company nor a pure development agency. marketoolz combines bespoke software development with its own reusable building blocks and long-term client care.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Connection to OTTO DÖRNER and Container GO</p>' +
    '<p>marketoolz originally developed Container GO as a client portal for OTTO DÖRNER. The platform lets waste-management companies set up their own B2B portals and digitally map orders, documents, and ERP processes, among other things. This connection is a strong anchor point for me: I know modular platforms and white-label structures from practice, and as part of preparing for OTTO DÖRNER I already engaged intensively with DÖRNER GO, Container GO, partner requirements, and portal onboarding.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">The Role and the Conversation</p>' +
    '<ul class="tight">' +
    '<li><b>Role:</b> bridge between clients and devs, Kanban flow, reviews and retros, external partners, plus technical topics like hosting, SSO, and Spring Boot.</li>' +
    '<li><b>Conversation:</b> directly with managing director Falko Willers on October 16, 2026 at 4:30 PM, online — likely personal, pragmatic, and focused on motivation, working style, and mutual fit.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Culture and Values From the Ad</p>' +
    '<ul class="tight">' +
    '<li>Small, dynamic team and flat hierarchies</li>' +
    '<li>High ownership and direct client contact</li>' +
    '<li>Pragmatic agile work instead of rigid adherence to methodology</li>' +
    '<li>Kanban, flow, and self-organization</li>' +
    '<li>Openness to AI, agentic coding, and new business models</li>' +
    '<li>A monthly open Friday for own projects or further training</li>' +
    '<li>Short paths, regular team events, and room to shape things</li>' +
    '<li>Flexible working hours and on-site presence</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Evidence</p>' +
    '<table class="info">' +
    '<tr><th>Requirement</th><th>My Solid Track Record</th></tr>' +
    '<tr><td class="k">Bridge between clients and software development</td><td>Years of alignment between clients, design, frontend, backend, and external partners.</td></tr>' +
    '<tr><td class="k">Connect fixed client constraints with agile development</td><td>Effort estimation, prioritization, scope clarification, and delivery; no invented overall budget ownership.</td></tr>' +
    '<tr><td class="k">Optimize Kanban and flow</td><td>Practice in Kanban, Scrum, and Scrumban contexts; making work packages and blockers transparent.</td></tr>' +
    '<tr><td class="k">Translate requirements and make them tangible</td><td>Turned business, design, and technical requirements into actionable work packages.</td></tr>' +
    '<tr><td class="k">Facilitate agile formats</td><td>Comfortable with reviews, alignments, and technical clarifications; honestly scoping independent retrospective experience.</td></tr>' +
    '<tr><td class="k">Communication with external partners and ERP operators</td><td>Alignment with external vendors and technical stakeholders from client projects.</td></tr>' +
    '<tr><td class="k">Frame technical architecture topics</td><td>Broad web, shop, and development understanding; won\'t claim Spring Boot, SSO, or hosting as specialist expertise.</td></tr>' +
    '<tr><td class="k">Build roadmaps and briefs</td><td>Prioritization, dependencies, and quick wins from project practice; formal end-to-end roadmap ownership is the next step.</td></tr>' +
    '<tr><td class="k">Innovation and AI-supported processes</td><td>AI Project Management training, AI agents, and workflows; interest in responsible practical use.</td></tr>' +
    '</table>' +
    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Technical Terms From the Ad</p>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Spring Boot</p>' +
    '<ul class="tight">' +
    '<li>Java framework for the backend</li>' +
    '<li>Gets web applications and REST APIs up and running fast</li>' +
    '<li>Lots of preconfiguration, built-in web server</li>' +
    '<li>At marketoolz: likely the basis for portals and interfaces (e.g. ERP)</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p>Spring Boot builds on the Spring Framework, the most widespread Java ecosystem for enterprise applications. It takes a lot of configuration work off developers\' hands ("convention over configuration"): via so-called <b>starters</b> (e.g. for web, database, or security) you add features simply as a dependency. A web server (usually Tomcat) is built in, and the application runs as a self-contained file, which makes it easy to run in Docker containers.</p>' +
    '<p><b>Typical uses:</b> REST APIs, backends for B2B portals, microservices, ERP integrations, database access via Spring Data/JPA, login and permissions via Spring Security.</p>' +
    '<p><b>What it means for the project role:</b> realistically estimating effort for interfaces, and planning dependencies on version upgrades (e.g. Spring Boot 2 → 3 with a new Java version) and security updates into the roadmap and maintenance.</p>' +
    '<div class="erg">Comparison from my world: what Laravel or Symfony are for PHP, Spring Boot is for Java.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">SSO (Single Sign-On)</p>' +
    '<ul class="tight">' +
    '<li>Log in once, access several applications</li>' +
    '<li>Central identity at an identity provider (e.g. Microsoft Entra ID, Keycloak, Okta)</li>' +
    '<li>Standards: SAML 2.0, OpenID Connect / OAuth 2.0</li>' +
    '<li>In a B2B portal: client employees use their company login</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Flow:</b> the user opens the application → is redirected to the identity provider (IdP) → logs in there, possibly with two-factor → the IdP sends back a signed token → the application trusts that token and lets the user in. The application itself never needs to know a password.</p>' +
    '<p><b>Benefits:</b> fewer passwords, central permission management, offboarding in one place, better security. <b>Distinction:</b> OAuth 2.0 handles authorization (what an app may do), OpenID Connect adds authentication (who the user is); SAML is the older standard common in large enterprises.</p>' +
    '<p><b>What it means for the project role:</b> clarify early which IdP and protocol the client uses, how groups map to roles in the portal, and who provides test accounts. Alignment with the client\'s IT often has a long lead time, so it belongs early in the plan.</p>' +
    '<div class="erg">Everyday example: "Sign in with Google" is SSO via OpenID Connect.</div>' +
    '</div></div></div>' +

    '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">Hosting</p>' +
    '<ul class="tight">' +
    '<li>Providing and running applications on servers</li>' +
    '<li>Options: own servers, managed hosting, cloud (e.g. AWS, Azure, Hetzner)</li>' +
    '<li>Covers availability, backups, updates, monitoring, security</li>' +
    '<li>marketoolz offers hosting itself → part of ongoing operations</li>' +
    '</ul>' +
    '<div class="macc"><button class="macc-head">Explained in more detail <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<p><b>Models:</b> shared hosting (several clients on one server), virtual or dedicated servers, managed hosting (the provider handles the operating system and patches), cloud (scalable, usage-based billing), or on-premise in the client\'s data center.</p>' +
    '<p><b>Key questions for B2B clients:</b> server location and GDPR (EU/Germany), SLA with availability (e.g. 99.9%) and response times, backup and recovery concept, separate environments (development, staging, production), deployment via CI/CD and Docker, monitoring, cost.</p>' +
    '<p><b>What it means for the project role:</b> planning go-live and maintenance windows, steering communication during incidents, factoring operational requirements into proposals and the roadmap early.</p>' +
    '<div class="erg">Bridge to me: Docker experience and go-live support from client projects.</div>' +
    '</div></div></div>';

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Kennzahlen oder Ergebnisse nur nennen, wenn sie belegt sind. Wirkung sonst qualitativ beschreiben.</div>' +
    '<div class="macc"><button class="macc-head">1 · Wie machen Sie aus einem Kundenwunsch eine umsetzbare Aufgabe <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich kläre zuerst Ziel und Rahmen, bevor ich über eine Lösung oder Schätzung spreche.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends kamen Anforderungen für Shop-, Website- und Relaunch-Projekte häufig aus Kundenbriefings oder Designs. Technische Voraussetzungen und Randfälle waren darin nicht immer vollständig beschrieben.</div>' +
    '<div class="row"><b>Aufgabe:</b> Das Team brauchte eine gemeinsame und belastbare Grundlage für Einschätzung und Umsetzung.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich sammelte offene Punkte, klärte die gewünschte Wirkung und machte Annahmen sichtbar. Anschließend prüfte ich technische Abhängigkeiten mit den zuständigen Personen und strukturierte die Anforderung in nachvollziehbare Arbeitspakete und prüfbare Ergebnisse.</div>' +
    '<div class="row"><b>Ergebnis:</b> Offene Entscheidungen wurden früher sichtbar. Das Team konnte mit einem gemeinsamen Verständnis arbeiten, und Tests bezogen sich auf geklärte Erwartungen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Wie vermitteln Sie zwischen festem Kundenrahmen und agiler Entwicklung <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ein fester Rahmen funktioniert nur, wenn Scope, Annahmen und Entscheidungspunkte transparent bleiben.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Shop- und Relaunch-Projekten trafen geplante Go-live-Termine auf zusätzliche Kundenwünsche und technische Abhängigkeiten.</div>' +
    '<div class="row"><b>Aufgabe:</b> Das Team brauchte einen realistischen Umfang, ohne das eigentliche Kundenziel aus dem Blick zu verlieren.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich trennte den unverzichtbaren Kern von ergänzenden Wünschen, holte technische Einschätzungen ein und stellte Optionen mit ihren Folgen für Termin, Aufwand und Qualität gegenüber. Zurückgestellte Punkte und Annahmen wurden nachvollziehbar festgehalten.</div>' +
    '<div class="row"><b>Ergebnis:</b> Das Team konnte auf einen klaren Umfang hinarbeiten. Offene Wünsche gingen nicht zwischen mündlichen Absprachen verloren.</div>' +
    '<div class="erg">Ehrliche Grenze: Ich habe keine Gesamtbudgethöhe eigenständig verantwortet. Meine Erfahrung liegt in Scope-, Aufwand- und Priorisierungsklärung innerhalb der Projekte.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Wie verbessern Sie den Flow in einem Kanban-Team <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich beginne mit der tatsächlichen Arbeit im System und nicht mit zusätzlichen Regeln.</mark></div>' +
    '<div class="row"><b>Situation:</b> In Agenturprojekten liefen größere Vorhaben, wiederkehrende Aufgaben, Fehlerbehebungen und kurzfristige Kundenanfragen teilweise parallel.</div>' +
    '<div class="row"><b>Aufgabe:</b> Blocker, Prioritäten und zu viele gleichzeitig begonnene Arbeiten mussten sichtbar werden.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich achtete auf klare Arbeitspakete, nachvollziehbare Prioritäten und sichtbare Abhängigkeiten. Blockierte Aufgaben wurden nicht nur verschoben, sondern mit einer konkreten offenen Entscheidung oder Zuständigkeit verbunden. Neue Dringlichkeiten wurden gegen bereits laufende Arbeit eingeordnet.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Beteiligten konnten Reihenfolge und Blocker besser nachvollziehen. Zielkonflikte wurden als Entscheidung behandelt und nicht verdeckt an das Entwicklungsteam weitergegeben.</div>' +
    '<div class="erg">Bei marketoolz ergänzen: Zuerst bestehendes Board und echte Engpässe verstehen. WIP-Limits, Durchlaufzeit oder Serviceklassen nur einführen oder verändern, wenn sie ein konkretes Problem lösen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Wie gehen Sie mit einem Konflikt zwischen Kunde und Entwicklung um <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich übersetze beide Perspektiven in Optionen und Folgen, statt eine Seite zu verteidigen.</mark></div>' +
    '<div class="row"><b>Situation:</b> In Kundenprojekten waren gewünschte Funktionen oder Termine nicht immer ohne technische Risiken oder zusätzlichen Aufwand umsetzbar.</div>' +
    '<div class="row"><b>Aufgabe:</b> Der Kunde brauchte eine verständliche Entscheidung, während das Team einen realistischen und qualitativ vertretbaren Rahmen benötigte.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich klärte das eigentliche Kundenziel, ließ die technische Einschätzung konkretisieren und übersetzte sie in verständliche Auswirkungen. Danach stellte ich Alternativen vor, zum Beispiel reduzierter Umfang, schrittweise Umsetzung oder ein anderer Lösungsweg.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Entscheidung wurde auf Basis der Folgen getroffen. Die Devs mussten nicht allein ein unverständliches Nein vertreten, und der Kunde erhielt eine handlungsfähige Alternative.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Wie arbeiten Sie mit unterschiedlichen Plattformanforderungen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich unterscheide gemeinsame Produktlogik, konfigurierbare Unterschiede und echte Sonderfälle.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei deepblue arbeitete ich an einer modularen Plattform für mehr als zehn Unilever-Marken. Jede Marke hatte eigene Anforderungen, während die technische Grundlage gemeinsam bleiben sollte.</div>' +
    '<div class="row"><b>Aufgabe:</b> Individuelle Wünsche mussten eingeordnet werden, ohne Wiederverwendbarkeit und Wartbarkeit zu verlieren.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich klärte den Bedarf hinter der Anforderung und prüfte, ob er als gemeinsames oder konfigurierbares Modul abgebildet werden konnte. Technische Abhängigkeiten und Auswirkungen auf weitere Marken wurden sichtbar gemacht.</div>' +
    '<div class="row"><b>Ergebnis:</b> Unterschiedliche Markenauftritte konnten auf einer gemeinsamen modularen Grundlage umgesetzt werden. Die Lösung blieb für weitere Anforderungen nutzbar.</div>' +
    '<div class="erg">Übertragung: Genau diese Logik ist für kundenindividuelle Portale, Container GO und weitere SaaS-Lösungen relevant.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Wie gehen Sie mit einem Problem kurz vor dem Release um <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich trenne Auswirkung, Ursache und Entscheidungsbedarf und halte den Release nicht künstlich grün.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Shop- und Website-Projekten mussten Fehler vor einem geplanten Release eingeordnet und mit den zuständigen technischen Beteiligten bearbeitet werden.</div>' +
    '<div class="row"><b>Aufgabe:</b> Es musste entschieden werden, ob eine Korrektur vor dem Release notwendig war, ein Workaround vertretbar war oder der Umfang angepasst werden musste.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich dokumentierte erwartetes und tatsächliches Verhalten, Reproduktionsschritte, betroffene Nutzer und technische Abhängigkeiten. Gemeinsam mit den zuständigen Personen bewertete ich Risiko und Optionen und machte die Folgen für Termin und Qualität transparent.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Entscheidung basierte auf einem nachvollziehbaren Fehlerbild. Korrekturen und erneute Tests wurden bis zur Freigabe verfolgt.</div>' +
    '</div></div></div>';

  CONTENT.en[5] = '<div class="lead">Only name figures or results when they\'re documented. Otherwise describe the impact qualitatively.</div>' +
    '<div class="macc"><button class="macc-head">1 · How do you turn a client request into an actionable task <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I clarify the goal and framework first, before talking about a solution or estimate.</mark></div>' +
    '<div class="row"><b>Situation:</b> at Patrick &amp; Friends, requirements for shop, website, and relaunch projects often came from client briefs or designs. Technical prerequisites and edge cases weren\'t always fully described.</div>' +
    '<div class="row"><b>Task:</b> the team needed a shared, solid basis for estimation and delivery.</div>' +
    '<div class="row"><b>Action:</b> I collected open points, clarified the intended effect, and surfaced assumptions. I then checked technical dependencies with the responsible people and structured the requirement into traceable work packages and verifiable outcomes.</div>' +
    '<div class="row"><b>Result:</b> open decisions surfaced earlier. The team could work from a shared understanding, and tests referenced the clarified expectations.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · How do you mediate between a fixed client framework and agile development <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>A fixed framework only works if scope, assumptions, and decision points stay transparent.</mark></div>' +
    '<div class="row"><b>Situation:</b> on shop and relaunch projects, planned go-live dates met additional client requests and technical dependencies.</div>' +
    '<div class="row"><b>Task:</b> the team needed a realistic scope without losing sight of the actual client goal.</div>' +
    '<div class="row"><b>Action:</b> I separated the essential core from additional requests, gathered technical assessments, and contrasted options with their consequences for timeline, effort, and quality. Deferred points and assumptions were recorded traceably.</div>' +
    '<div class="row"><b>Result:</b> the team could work toward a clear scope. Open requests didn\'t get lost between verbal agreements.</div>' +
    '<div class="erg">Honest limit: I haven\'t independently owned an overall budget figure. My experience lies in clarifying scope, effort, and prioritization within projects.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · How do you improve flow in a Kanban team <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I start with the actual work in the system, not with additional rules.</mark></div>' +
    '<div class="row"><b>Situation:</b> in agency projects, larger initiatives, recurring tasks, bug fixes, and short-notice client requests sometimes ran in parallel.</div>' +
    '<div class="row"><b>Task:</b> blockers, priorities, and too much work in progress needed to become visible.</div>' +
    '<div class="row"><b>Action:</b> I made sure work packages were clear, priorities traceable, and dependencies visible. Blocked tasks weren\'t just pushed back — they were tied to a concrete open decision or owner. New urgencies were weighed against work already underway.</div>' +
    '<div class="row"><b>Result:</b> stakeholders could better follow the order and the blockers. Trade-offs were treated as decisions instead of being quietly passed on to the development team.</div>' +
    '<div class="erg">To add at marketoolz: first understand the existing board and the real bottlenecks. Only introduce or change WIP limits, lead time, or service classes when they solve a concrete problem.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · How do you handle a conflict between client and development <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I translate both perspectives into options and consequences, instead of defending one side.</mark></div>' +
    '<div class="row"><b>Situation:</b> on client projects, desired features or deadlines weren\'t always deliverable without technical risk or extra effort.</div>' +
    '<div class="row"><b>Task:</b> the client needed an understandable decision, while the team needed a realistic, quality-defensible scope.</div>' +
    '<div class="row"><b>Action:</b> I clarified the client\'s actual goal, had the technical assessment made concrete, and translated it into understandable impact. I then presented alternatives — for example, reduced scope, phased delivery, or a different approach.</div>' +
    '<div class="row"><b>Result:</b> the decision was made based on the consequences. The devs didn\'t have to defend an incomprehensible "no" alone, and the client got an actionable alternative.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · How do you work with differing platform requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I distinguish shared product logic, configurable differences, and genuine edge cases.</mark></div>' +
    '<div class="row"><b>Situation:</b> at deepblue, I worked on a modular platform for more than ten Unilever brands. Each brand had its own requirements, while the technical foundation was meant to stay shared.</div>' +
    '<div class="row"><b>Task:</b> individual requests had to be categorized without losing reusability and maintainability.</div>' +
    '<div class="row"><b>Action:</b> I clarified the need behind each requirement and checked whether it could be represented as a shared or configurable module. Technical dependencies and the impact on other brands were made visible.</div>' +
    '<div class="row"><b>Result:</b> different brand experiences could be delivered on a shared, modular foundation. The solution stayed usable for further requirements.</div>' +
    '<div class="erg">Transfer: this exact logic is relevant for client-specific portals, Container GO, and other SaaS solutions.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · How do you handle a problem right before release <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I separate impact, cause, and the decision that\'s needed, and don\'t artificially keep a release "green."</mark></div>' +
    '<div class="row"><b>Situation:</b> on shop and website projects, defects had to be assessed before a planned release and worked on with the responsible technical stakeholders.</div>' +
    '<div class="row"><b>Task:</b> it had to be decided whether a fix was necessary before release, a workaround was acceptable, or scope needed adjusting.</div>' +
    '<div class="row"><b>Action:</b> I documented expected vs. actual behavior, reproduction steps, affected users, and technical dependencies. Together with the responsible people, I assessed risk and options and made the consequences for timeline and quality transparent.</div>' +
    '<div class="row"><b>Result:</b> the decision was based on a traceable defect picture. Fixes and retests were tracked through to sign-off.</div>' +
    '</div></div></div>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Sie waren bisher Entwicklerin und keine offizielle Projektmanagerin.“</div>' +
    '<p>Der Titel ist neu, viele Teile der Arbeit nicht. Ich kläre seit Jahren Anforderungen, stimme Machbarkeit und Aufwände ab, priorisiere Arbeitspakete und begleite Tests, Releases und Go-lives. Als Entwicklerin weiß ich außerdem, wie stark verlässliche Delivery von klaren Entscheidungen und realistischen Zusagen abhängt. Neu ist für mich die formale Gesamtverantwortung. Genau diesen nächsten Verantwortungsbereich suche ich bewusst.</p>' +
    '<div class="lead">„Wie viel Kanban-Erfahrung haben Sie wirklich?“</div>' +
    '<p>Ich habe in Kanban-, Scrum- und Scrumban-Kontexten gearbeitet und Anforderungen, Prioritäten, Blocker und laufende Arbeit transparent gemacht. Ich würde nicht behaupten, bereits jede Kanban-Metrik oder jede organisatorische Transformation allein verantwortet zu haben. Mein Ansatz ist pragmatisch: das reale System verstehen, Engpässe sichtbar machen und nur die Regeln oder Metriken einsetzen, die dem Team tatsächlich helfen.</p>' +
    '<div class="lead">„Können Sie Festpreise und Budgets steuern?“</div>' +
    '<p>Ich habe Aufwandsschätzungen, Priorisierung und Scope-Entscheidungen begleitet, aber keine Gesamtbudgethöhen eigenständig verantwortet. Ich kenne die zugrunde liegende Aufgabe: Annahmen transparent halten, Änderungen früh erkennen und Optionen mit ihren Folgen darstellen. Ich würde gern verstehen, wie Angebote, Festpreise, Change Requests und kaufmännische Verantwortung bei marketoolz heute verteilt sind.</p>' +
    '<div class="lead">„Können Sie Reviews und Retrospektiven moderieren?“</div>' +
    '<p>Reviews, Abstimmungen, technische Klärungen und Wissenstransfer kenne ich aus der Praxis. Bei einer Retrospektive würde ich Ziel und Rahmen klar setzen, Beobachtungen von Bewertungen trennen und dafür sorgen, dass am Ende wenige konkrete Maßnahmen mit Verantwortlichen entstehen. Wenn nach der Zahl eigenständig moderierter Retrospektiven gefragt wird, bleibe ich ehrlich und behaupte keine Routine, die ich nicht belegen kann.</p>' +
    '<div class="lead">„Kennen Sie Spring Boot, SSO und Hosting?“</div>' +
    '<p>Ich habe ein breites technisches Fundament aus Web-, Shop- und Entwicklungsprojekten sowie Erfahrung mit PHP, MySQL und Docker. Spring Boot, SSO und tiefere Hosting-Architektur sind keine Spezialgebiete, die ich als eigene Expertise verkaufen würde. Für die Projektrolle muss ich aber Zusammenhänge, Risiken und Abhängigkeiten verstehen, die richtigen Fachleute einbeziehen und Auswirkungen für Kunde, Scope und Roadmap übersetzen können. Das kann ich aus meiner technischen Basis heraus gut leisten.</p>' +
    '<div class="lead">„Was bedeutet Agentic Coding für Sie?“</div>' +
    '<p>Agentic Coding bedeutet für mich nicht, Entwicklung ungeprüft an KI abzugeben. Es geht darum, klar definierte Aufgaben in geeigneten Schritten durch KI-Agenten unterstützen zu lassen und Ergebnisse weiterhin durch Reviews, Tests, Sicherheitsanforderungen und menschliche Verantwortung abzusichern. Aus meiner Weiterbildung kenne ich AI Agents, automatisierte Workflows, Responsible AI und den Produktlebenszyklus. Mich würde interessieren, an welchen konkreten Stellen marketoolz Agentic Coding heute einsetzt und welche Qualitätsregeln dabei gelten.</p>' +
    '<div class="lead">„Warum marketoolz?“</div>' +
    '<p>Mich überzeugt die Verbindung aus individuellem Softwarehaus, direktem Kundenkontakt und technischer Tiefe. Eure Projekte verbinden Portale, Daten, E-Commerce, ERP-Schnittstellen und langfristigen Betrieb. Das ist nah an meiner bisherigen Erfahrung und zugleich der richtige Schritt in mehr Projektverantwortung. Besonders konkret ist für mich Container GO: Die Kombination aus White-Label-Plattform, unterschiedlichen Kundenanforderungen und technischer Weiterentwicklung kenne ich aus vergleichbaren Strukturen.</p>' +
    '<div class="lead">„Warum gerade jetzt der Wechsel?“</div>' +
    '<p>In den letzten Jahren habe ich gemerkt, dass meine größte Wirkung häufig vor und zwischen den Umsetzungsschritten liegt: Anforderungen schärfen, Abhängigkeiten sichtbar machen, Beteiligte zusammenbringen und Qualität absichern. Die Weiterbildung hat diesen Wechsel methodisch ergänzt. Jetzt suche ich bewusst eine Rolle, in der diese Verantwortung nicht nur neben der Entwicklung läuft, sondern mein eigentlicher Schwerpunkt ist.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Das erste Gespräch mit Falko Willers</p>' +
    '<p>Falko Willers ist Geschäftsführer und damit kein vorgelagerter Recruiter. Das spontane Kennenlernen dürfte prüfen, ob die Zusammenarbeit menschlich und fachlich grundsätzlich passt. Wahrscheinlich wird er direkt über Projekte, Kunden, Arbeitsweise, Erwartungen, Gehalt und Verfügbarkeit sprechen.</p>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Ich sollte deshalb:</p>' +
    '<ul class="tight">' +
    '<li>Freundlich und unkompliziert einsteigen</li>' +
    '<li>Meinen Wechsel in zwei bis drei klaren Sätzen erklären</li>' +
    '<li>Beispiele statt Methodenbegriffe verwenden</li>' +
    '<li>Offen sagen, was ich kann und wo ich Einarbeitung brauche</li>' +
    '<li>Interesse am tatsächlichen Projektalltag zeigen</li>' +
    '<li>Nicht versuchen, die ganze Stellenanzeige im ersten Gespräch abzuarbeiten</li>' +
    '</ul>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Wahrscheinliche Fragen:</p>' +
    '<ol class="tight">' +
    '<li>Erzähl doch einmal etwas über dich und deinen Hintergrund.</li>' +
    '<li>Warum möchtest du aus der Entwicklung ins Projektmanagement wechseln?</li>' +
    '<li>Was hat dich an marketoolz und der Stelle angesprochen?</li>' +
    '<li>Wie viel Projektsteuerung hast du bisher tatsächlich übernommen?</li>' +
    '<li>Wie gehst du mit schwierigen oder wechselnden Kundenanforderungen um?</li>' +
    '<li>Welche Erfahrung hast du mit Kanban?</li>' +
    '<li>Wie priorisierst du, wenn mehrere Kunden etwas dringend brauchen?</li>' +
    '<li>Wie technisch möchtest und kannst du weiterhin arbeiten?</li>' +
    '<li>Was bringst du bei KI und Agentic Coding mit?</li>' +
    '<li>Welche Gehaltsvorstellung und welchen Starttermin hast du?</li>' +
    '</ol>' +
    '<div class="erg">Gesprächseinstieg: „Vielen Dank, dass das so kurzfristig klappt. Ich habe mich sehr über deine Nachricht gefreut. Bei der Vorbereitung ist mir noch einmal aufgefallen, wie konkret die Verbindung zwischen euren Portalprojekten und meiner bisherigen Erfahrung ist – besonders bei modularen Plattformen, E-Commerce und der Übersetzung zwischen Kunden und Entwicklung.“</div>';

  CONTENT.en[6] = '<div class="lead">"You\'ve been a developer so far, not an official project manager."</div>' +
    '<p>The title is new, but a lot of the work isn\'t. I\'ve been clarifying requirements for years, aligning feasibility and effort, prioritizing work packages, and accompanying testing, releases, and go-lives. As a developer, I also know how strongly reliable delivery depends on clear decisions and realistic commitments. What\'s new for me is the formal, end-to-end responsibility. That\'s exactly the next scope of responsibility I\'m deliberately looking for.</p>' +
    '<div class="lead">"How much Kanban experience do you really have?"</div>' +
    '<p>I\'ve worked in Kanban, Scrum, and Scrumban contexts and made requirements, priorities, blockers, and work in progress transparent. I wouldn\'t claim to have already owned every Kanban metric or every organizational transformation on my own. My approach is pragmatic: understand the real system, surface bottlenecks, and only introduce the rules or metrics that actually help the team.</p>' +
    '<div class="lead">"Can you steer fixed prices and budgets?"</div>' +
    '<p>I\'ve accompanied effort estimation, prioritization, and scope decisions, but haven\'t independently owned overall budget figures. I know the underlying task: keeping assumptions transparent, spotting changes early, and presenting options with their consequences. I\'d like to understand how quotes, fixed prices, change requests, and commercial responsibility are currently distributed at marketoolz.</p>' +
    '<div class="lead">"Can you facilitate reviews and retrospectives?"</div>' +
    '<p>Reviews, alignments, technical clarifications, and knowledge transfer I know from practice. In a retrospective, I\'d set a clear goal and framework, separate observations from judgments, and make sure a few concrete actions with owners come out of it. If asked how many retrospectives I\'ve independently facilitated, I\'ll stay honest and not claim a routine I can\'t back up.</p>' +
    '<div class="lead">"Do you know Spring Boot, SSO, and hosting?"</div>' +
    '<p>I have a broad technical foundation from web, shop, and development projects, plus experience with PHP, MySQL, and Docker. Spring Boot, SSO, and deeper hosting architecture aren\'t specialist areas I\'d sell as my own expertise. But for the project role, I need to understand the connections, risks, and dependencies, bring in the right experts, and translate the impact for the client, scope, and roadmap. That I can deliver well from my technical base.</p>' +
    '<div class="lead">"What does agentic coding mean to you?"</div>' +
    '<p>Agentic coding doesn\'t mean, to me, handing off development to AI unchecked. It\'s about letting AI agents support clearly defined tasks in suitable steps, while still securing results through reviews, tests, security requirements, and human accountability. From my training, I know AI agents, automated workflows, responsible AI, and the product lifecycle. I\'d be interested to learn where exactly marketoolz uses agentic coding today and what quality rules apply.</p>' +
    '<div class="lead">"Why marketoolz?"</div>' +
    '<p>What convinces me is the combination of a bespoke software house, direct client contact, and technical depth. Your projects connect portals, data, e-commerce, ERP interfaces, and long-term operations. That\'s close to my previous experience and, at the same time, the right step into more project responsibility. Container GO is especially concrete for me: I know the combination of a white-label platform, differing client requirements, and ongoing technical development from comparable structures.</p>' +
    '<div class="lead">"Why the shift right now?"</div>' +
    '<p>Over the last few years, I\'ve noticed that my biggest impact often lies before and between the delivery steps: sharpening requirements, surfacing dependencies, bringing stakeholders together, and securing quality. My further training complemented this shift methodically. Now I\'m deliberately looking for a role where this responsibility isn\'t just running alongside development, but is my actual focus.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">The First Conversation With Falko Willers</p>' +
    '<p>Falko Willers is the managing director, not a recruiter further up the chain. This spontaneous get-to-know-you conversation is likely checking whether the collaboration fits on a human and professional level. He\'ll probably talk directly about projects, clients, working style, expectations, salary, and availability.</p>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">So I should:</p>' +
    '<ul class="tight">' +
    '<li>Start friendly and uncomplicated</li>' +
    '<li>Explain my career shift in two to three clear sentences</li>' +
    '<li>Use examples instead of methodology jargon</li>' +
    '<li>Openly say what I can do and where I need ramp-up time</li>' +
    '<li>Show genuine interest in day-to-day project reality</li>' +
    '<li>Not try to work through the entire job ad in the first conversation</li>' +
    '</ul>' +
    '<p style="font-weight:700;color:var(--muted);margin:10px 0 4px;">Likely questions:</p>' +
    '<ol class="tight">' +
    '<li>Tell me a bit about yourself and your background.</li>' +
    '<li>Why do you want to move from development into project management?</li>' +
    '<li>What appealed to you about marketoolz and this role?</li>' +
    '<li>How much project steering have you actually taken on so far?</li>' +
    '<li>How do you handle difficult or changing client requirements?</li>' +
    '<li>What experience do you have with Kanban?</li>' +
    '<li>How do you prioritize when several clients urgently need something?</li>' +
    '<li>How technical do you want to, and can you, keep working?</li>' +
    '<li>What do you bring on AI and agentic coding?</li>' +
    '<li>What\'s your salary expectation, and what start date?</li>' +
    '</ol>' +
    '<div class="erg">Opening line: "Thank you so much for making this work on such short notice. I was really glad to get your message. While preparing, it struck me again how concrete the connection is between your portal projects and my previous experience — especially around modular platforms, e-commerce, and translating between clients and development."</div>';

  // ===== 7 · First 90 Days Plan =====
  CONTENT.de[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Erste 30 Tage · verstehen</p>' +
    '<ul class="tight">' +
    '<li>Team, Rollen, Projekte und Kunden kennenlernen.</li>' +
    '<li>Bestehendes Kanban-System und tatsächlichen Arbeitsfluss beobachten.</li>' +
    '<li>Aktuelle Verpflichtungen, Blocker und Eskalationen verstehen.</li>' +
    '<li>Container GO und weitere zentrale Systeme aus Kunden- und Nutzersicht kennenlernen.</li>' +
    '<li>Angebots-, Budget-, Scope- und Change-Prozess verstehen.</li>' +
    '<li>Technische Landschaft und Zuständigkeiten grob kartieren.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 31–60 · ordnen</p>' +
    '<ul class="tight">' +
    '<li>Anforderungen und Entscheidungspunkte in priorisierten Projekten schärfen.</li>' +
    '<li>Blocker und Abhängigkeiten nachvollziehbar machen.</li>' +
    '<li>Kundenkommunikation und interne Rückfragenwege stabilisieren.</li>' +
    '<li>Erste Reviews oder Abstimmungen strukturiert vorbereiten und moderieren.</li>' +
    '<li>Wiederkehrende Ursachen für Wartezeit oder Nacharbeit identifizieren.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 61–90 · verbessern</p>' +
    '<ul class="tight">' +
    '<li>Erste konkrete Flow-Verbesserung gemeinsam mit dem Team umsetzen.</li>' +
    '<li>Transparenz über Scope, Status, Risiken und offene Entscheidungen erhöhen.</li>' +
    '<li>Ein Projekt oder Teilprojekt verlässlich in eigener Verantwortung steuern.</li>' +
    '<li>Sinnvolle Kennzahlen wie Durchlaufzeit oder Blockierungsdauer nur dort etablieren, wo sie Entscheidungen verbessern.</li>' +
    '<li>Erste praktische Idee für KI-gestützte Projekt- oder Entwicklungsabläufe bewerten.</li>' +
    '</ul>';

  CONTENT.en[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">First 30 Days · Understand</p>' +
    '<ul class="tight">' +
    '<li>Get to know the team, roles, projects, and clients.</li>' +
    '<li>Observe the existing Kanban system and the actual workflow.</li>' +
    '<li>Understand current commitments, blockers, and escalations.</li>' +
    '<li>Get to know Container GO and other central systems from a client and user perspective.</li>' +
    '<li>Understand the quoting, budget, scope, and change process.</li>' +
    '<li>Roughly map the technical landscape and ownership.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 31–60 · Organize</p>' +
    '<ul class="tight">' +
    '<li>Sharpen requirements and decision points on prioritized projects.</li>' +
    '<li>Make blockers and dependencies traceable.</li>' +
    '<li>Stabilize client communication and internal follow-up channels.</li>' +
    '<li>Structure and facilitate the first reviews or alignments.</li>' +
    '<li>Identify recurring causes of wait time or rework.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 61–90 · Improve</p>' +
    '<ul class="tight">' +
    '<li>Implement a first concrete flow improvement together with the team.</li>' +
    '<li>Increase transparency on scope, status, risks, and open decisions.</li>' +
    '<li>Reliably steer one project or sub-project under my own responsibility.</li>' +
    '<li>Only establish meaningful metrics like lead time or blocked time where they improve decisions.</li>' +
    '<li>Evaluate a first practical idea for AI-supported project or development workflows.</li>' +
    '</ul>';

  // ===== 8 · Questions for Falko Willers =====
  CONTENT.de[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Die wichtigsten Fragen für das erste Gespräch</p>' +
    '<ul class="tight">' +
    '<li>Was ist der konkrete Anlass für die Besetzung der Rolle?</li>' +
    '<li>Woran würdest du nach sechs Monaten erkennen, dass ich in der Rolle erfolgreich bin?</li>' +
    '<li>Wie sieht ein typischer Projektmix für den Agile Project Manager aus?</li>' +
    '<li>Welche Kunden oder Produkte würden am Anfang voraussichtlich im Mittelpunkt stehen?</li>' +
    '<li>Wie groß ist das Team und welche Rollen arbeiten im Alltag eng zusammen?</li>' +
    '<li>Wie verteilen sich Kundenkommunikation, interne Steuerung und eigene fachliche Mitarbeit?</li>' +
    '<li>Wo liegt aktuell der größte Engpass: Anforderungen, Priorisierung, Kundenabstimmung oder Team-Flow?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Fachlich vertiefende Fragen</p>' +
    '<ul class="tight">' +
    '<li>Wie arbeitet ihr heute mit Kanban, und welche Teile des Flows möchtet ihr verbessern?</li>' +
    '<li>Wie verbindet ihr Festpreise oder feste Budgets mit Änderungen während der Umsetzung?</li>' +
    '<li>Wer verantwortet Angebot, Budget, Scope und Change Requests?</li>' +
    '<li>Wie laufen Reviews, Retrospektiven und Roadmap-Entscheidungen konkret ab?</li>' +
    '<li>Wie stark wäre ich in Container GO oder andere OTTO-DÖRNER-Projekte eingebunden?</li>' +
    '<li>Welche Architekturthemen muss der Agile Project Manager selbst verstehen, und wo unterstützen Tech Leads oder Devs?</li>' +
    '<li>Wie setzt ihr Claude Code oder Agentic Coding aktuell ein?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Rahmenbedingungen</p>' +
    '<ul class="tight">' +
    '<li>Wie sind flexible Präsenzzeiten und mobiles Arbeiten praktisch organisiert?</li>' +
    '<li>Ist die Stelle unbefristet, und wie ist die Probezeit geregelt?</li>' +
    '<li>Gibt es regelmäßige Kundentermine vor Ort oder einen relevanten Reiseanteil?</li>' +
    '<li>Wie geht der Prozess nach unserem Kennenlernen weiter?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gehalt und Verfügbarkeit</p>' +
    '<div class="lead">In der Bewerbung habe ich 70.000 Euro brutto jährlich genannt. Diese Zahl sollte ich konsistent vertreten. Formulierung: „Meine Gehaltsvorstellung liegt wie in meiner Bewerbung angegeben bei 70.000 Euro brutto jährlich. Für mich passt diese Größenordnung zur Verbindung aus Kundenverantwortung, technischer Projektsteuerung und agiler Delivery. Natürlich möchte ich auch verstehen, wie der genaue Verantwortungsumfang und das Gesamtpaket aussehen.“</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">Ein kurzfristiger Einstieg ist laut Bewerbung möglich. Wenn nach einem konkreten Datum gefragt wird, nur ein Datum nennen, das tatsächlich realistisch ist.</p>';

  CONTENT.en[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">The Most Important Questions for the First Conversation</p>' +
    '<ul class="tight">' +
    '<li>What\'s the concrete reason the role is open?</li>' +
    '<li>What would tell you, after six months, that I\'m succeeding in the role?</li>' +
    '<li>What does a typical project mix look like for the Agile Project Manager?</li>' +
    '<li>Which clients or products would likely be the focus at the start?</li>' +
    '<li>How big is the team, and which roles work closely together day to day?</li>' +
    '<li>How is client communication, internal steering, and my own hands-on contribution split?</li>' +
    '<li>Where is the biggest bottleneck right now: requirements, prioritization, client alignment, or team flow?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Deeper, Domain-Specific Questions</p>' +
    '<ul class="tight">' +
    '<li>How do you work with Kanban today, and which parts of the flow do you want to improve?</li>' +
    '<li>How do you connect fixed prices or fixed budgets with changes during delivery?</li>' +
    '<li>Who owns quotes, budget, scope, and change requests?</li>' +
    '<li>How do reviews, retrospectives, and roadmap decisions actually work?</li>' +
    '<li>How involved would I be in Container GO or other OTTO DÖRNER projects?</li>' +
    '<li>Which architecture topics does the Agile Project Manager need to understand themselves, and where do tech leads or devs support?</li>' +
    '<li>How do you currently use Claude Code or agentic coding?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Terms and Conditions</p>' +
    '<ul class="tight">' +
    '<li>How are flexible on-site hours and remote work practically organized?</li>' +
    '<li>Is the position permanent, and how is the probation period handled?</li>' +
    '<li>Are there regular on-site client meetings or a relevant travel share?</li>' +
    '<li>What happens next after our conversation?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary and Availability</p>' +
    '<div class="lead">In my application, I stated €70,000 gross per year. I should represent that figure consistently. Phrasing: "As stated in my application, my salary expectation is €70,000 gross per year. For me, that figure fits the combination of client responsibility, technical project steering, and agile delivery. Of course, I\'d also like to understand the exact scope of responsibility and the overall package."</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">A short-notice start is possible per the application. If asked for a concrete date, only name a date that\'s actually realistic.</p>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Meine drei Kernbotschaften</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>Ich kenne Kundenprojekte und technische Umsetzung aus mehr als zehn Jahren Praxis.</mark></li>' +
    '<li>Ich übersetze Anforderungen so, dass Kunden und Devs mit derselben Grundlage arbeiten.</li>' +
    '<li>marketoolz verbindet genau meine Themen: Portale, E-Commerce, Daten, Kanban und technische Kundennähe.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Drei ehrliche Grenzen</p>' +
    '<ul class="tight">' +
    '<li>Bisher kein offizieller Project-Manager-Titel</li>' +
    '<li>Keine belegte Gesamtbudgetverantwortung</li>' +
    '<li>Spring Boot, SSO und Hosting nicht als eigene Architektur-Spezialgebiete</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Drei Fragen, die ich sicher stellen möchte</p>' +
    '<ul class="tight">' +
    '<li>Was ist der konkrete Anlass für die Rolle, und woran misst du Erfolg nach sechs Monaten?</li>' +
    '<li>Welche Projekte und Kunden würden am Anfang im Mittelpunkt stehen?</li>' +
    '<li>Wie verteilt sich die Verantwortung für Kunde, Scope, Budget und technische Entscheidungen?</li>' +
    '</ul>' +
    '<div class="lead">Letzter Gedanke: Es ist ein Kennenlernen mit dem Geschäftsführer, keine Methodenprüfung. Ruhig, direkt und neugierig bleiben. Erst die Frage beantworten, dann ein konkretes Beispiel geben. Nicht kleiner machen als nötig, aber auch keine formale PM-, Budget- oder Architekturverantwortung behaupten, die ich nicht belegen kann.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Stellenanzeige marketoolz Agile Project Manager (ohne Referenznummer), abgerufen 15. Oktober 2026; marketoolz Unternehmensprofil, Dienstleistungen, B2B-Portal- und E-Commerce-Seiten, abgerufen 15. Oktober 2026; versendeter Lebenslauf, Anschreiben und Stellenbewertung.</p>';

  CONTENT.en[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">My Three Core Messages</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>I know client projects and technical delivery from more than ten years of practice.</mark></li>' +
    '<li>I translate requirements so that clients and devs work from the same foundation.</li>' +
    '<li>marketoolz connects exactly my topics: portals, e-commerce, data, Kanban, and technical closeness to clients.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Three Honest Limits</p>' +
    '<ul class="tight">' +
    '<li>No official project manager title so far</li>' +
    '<li>No documented overall budget ownership</li>' +
    '<li>Spring Boot, SSO, and hosting aren\'t my own architecture specialties</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Three Questions I Want to Ask Confidently</p>' +
    '<ul class="tight">' +
    '<li>What\'s the concrete reason for the role, and what will success be measured against after six months?</li>' +
    '<li>Which projects and clients would be the focus at the start?</li>' +
    '<li>How is responsibility for client, scope, budget, and technical decisions distributed?</li>' +
    '</ul>' +
    '<div class="lead">Final thought: this is a get-to-know-you conversation with the managing director, not a methodology exam. Stay calm, direct, and curious. Answer the question first, then give a concrete example. Don\'t undersell myself, but also don\'t claim formal PM, budget, or architecture responsibility I can\'t back up.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: marketoolz Agile Project Manager job posting (no reference number), retrieved October 15, 2026; marketoolz company profile, services, B2B portal, and e-commerce pages, retrieved October 15, 2026; submitted CV, cover letter, and role assessment.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · marketoolz · Agile Project Manager",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
