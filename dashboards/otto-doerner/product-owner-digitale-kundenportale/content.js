// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Product Owner Digitale Kundenportale<br>OTTO DÖRNER Entsorgung GmbH",
      role: "Product Owner Digitale Kundenportale",
      location: "offen",
      interviewDate: "noch offen",
      salaryAd: "offen",
      salaryAsk: "72.000 €",
      salaryMin: "offen",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde technische E-Commerce-Erfahrung mit einem klaren Blick für <mark>Anforderungen, Abhängigkeiten und verlässliche Delivery</mark>.'
    },
    en: {
      roleSubtitle: "Product Owner, Digital Customer Portals<br>OTTO DÖRNER Entsorgung GmbH",
      role: "Product Owner, Digital Customer Portals",
      location: "TBD",
      interviewDate: "TBD",
      salaryAd: "TBD",
      salaryAsk: "€72,000",
      salaryMin: "TBD",
      introTitle: "Interview Prep",
      introText: 'I combine technical e-commerce experience with a clear eye for <mark>requirements, dependencies, and reliable delivery</mark>.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"OTTO DÖRNER – Geschäftsmodell & Zielrolle", en:"OTTO DÖRNER – Business Model & Target Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Nachfragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Plan für die ersten 90 Tage", en:"First 90 Days Plan"},
    8: {de:"Eigene Fragen an den Arbeitgeber", en:"Questions for the Employer"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich verbinde technische E-Commerce-Erfahrung mit einem klaren Blick für <mark>Anforderungen, Abhängigkeiten und verlässliche Delivery</mark>.</div>' +
    '<p>Ich komme aus der technischen Umsetzung und habe mehr als zehn Jahre an Websites, Shops und digitalen Plattformen gearbeitet. Mit der Zeit habe ich immer mehr Verantwortung an den Schnittstellen übernommen: Anforderungen klären, technische Abhängigkeiten einordnen, Kunden und Entwicklung zusammenbringen sowie Tests und Releases begleiten.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Wo komme ich her und wo will ich hin</p>' +
    '<p>Die Entwicklungserfahrung bleibt mein Fundament. Mein Schwerpunkt verschiebt sich auf Produktentscheidungen, Priorisierung und die verlässliche Begleitung von Partnern und Entwicklung.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Fit</p>' +
    '<div class="lead">Mein stärkstes Argument ist die direkte Verbindung zwischen meiner bisherigen Arbeit und dem Produktmodell von OTTO DÖRNER: Ich habe viele Jahre an E-Commerce-Portalen und modularen White-Label-Strukturen gearbeitet, Anforderungen verschiedener Beteiligter übersetzt und digitale Vorhaben bis zum Go-live begleitet. Die Entsorgungsbranche ist neu für mich. Die Produkt- und Schnittstellenlogik ist es nicht.</div>';

  CONTENT.en[1] = '<div class="lead">I combine technical e-commerce experience with a clear eye for <mark>requirements, dependencies, and reliable delivery</mark>.</div>' +
    '<p>I come from technical delivery and have spent more than ten years working on websites, shops, and digital platforms. Over time, I\'ve taken on increasing responsibility at the interfaces: clarifying requirements, assessing technical dependencies, bringing clients and development together, and accompanying testing and releases.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Where I Come From and Where I\'m Headed</p>' +
    '<p>My development background remains my foundation. My focus is shifting toward product decisions, prioritization, and reliably accompanying partners and development.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Fit</p>' +
    '<div class="lead">My strongest argument is the direct link between my previous work and OTTO DÖRNER\'s product model: I\'ve spent many years working on e-commerce portals and modular white-label structures, translating requirements from different stakeholders, and carrying digital initiatives through to go-live. The waste management industry is new to me. The product and interface logic isn\'t.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre lang E-Commerce-Projekte, Websites und Relaunches umgesetzt. Bei deepblue habe ich an einer modularen Plattform für mehr als zehn Unilever-Marken gearbeitet. Später habe ich bei Patrick &amp; Friends Shop- und Website-Projekte von der Anforderungsklärung bis zum Go-live begleitet, unter anderem mit Shopify, Shopware und Spryker.</p>' +
       '<p>Mit der Zeit lag mein Schwerpunkt immer stärker an den Schnittstellen. Ich habe fachliche und gestalterische Anforderungen geklärt, technische Abhängigkeiten mit Frontend, Backend und externen Partnern abgestimmt und Qualitätssicherung sowie Releases begleitet. Dabei habe ich gemerkt, dass meine besondere Stärke darin liegt, <mark>unterschiedliche Perspektiven zusammenzubringen</mark> und daraus eine Arbeitsgrundlage zu machen, mit der ein Entwicklungsteam wirklich arbeiten kann.</p>' +
       '<p>Den Wechsel in Richtung Product Ownership habe ich deshalb bewusst vorbereitet und meine Praxiserfahrung durch eine Weiterbildung im AI Project Management ergänzt — Product Lifecycle, Requirements Engineering, agile Delivery und Business Cases.</p>' +
       '<p>An der Position bei OTTO DÖRNER reizt mich besonders die Verbindung aus digitalen Kundenportalen, White-Label-Lösung und Partner-Onboarding. Ich kenne modulare Plattformen und die Herausforderung, gemeinsame technische Grundlagen mit individuellen Anforderungen zu verbinden.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich verbinde mehr als zehn Jahre technische Erfahrung mit E-Commerce-Portalen und modularen Plattformen mit langjähriger Arbeit an Anforderungen, Abstimmung und Delivery. Ich weiß, welche Informationen ein Entwicklungsteam für gute Entscheidungen braucht und wie man unterschiedliche Partnerwünsche auf eine <mark>gemeinsame technische Grundlage</mark> bringt.</p>' +
       '<p>Genau diese Erfahrung möchte ich als Product Owner für die Kundenportale von OTTO DÖRNER einsetzen.</p>' +
     '</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from frontend development and spent more than ten years delivering e-commerce projects, websites, and relaunches. At deepblue, I worked on a modular platform for more than ten Unilever brands. Later, at Patrick &amp; Friends, I accompanied shop and website projects from requirements clarification through to go-live, including with Shopify, Shopware, and Spryker.</p>' +
       '<p>Over time, my focus increasingly shifted to the interfaces. I clarified business and design requirements, aligned technical dependencies with frontend, backend, and external partners, and accompanied QA and releases. I noticed that my particular strength lies in <mark>bringing different perspectives together</mark> and turning them into a basis a development team can actually work with.</p>' +
       '<p>I deliberately prepared the shift toward product ownership, rounding out my hands-on experience with AI Project Management training — product lifecycle, requirements engineering, agile delivery, and business cases.</p>' +
       '<p>What especially appeals to me about the position at OTTO DÖRNER is the combination of digital customer portals, a white-label solution, and partner onboarding. I know modular platforms and the challenge of connecting shared technical foundations with individual requirements.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I combine more than ten years of technical experience with e-commerce portals and modular platforms with years of work on requirements, alignment, and delivery. I know what information a development team needs to make good decisions, and how to bring different partner requests onto a <mark>shared technical foundation</mark>.</p>' +
       '<p>That\'s exactly the experience I want to bring as Product Owner for OTTO DÖRNER\'s customer portals.</p>' +
     '</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">White Label und Plattformlogik verstehen</div><div class="b">Bei deepblue arbeitete ich an einer modularen Plattform für mehr als zehn Unilever-Marken. Gemeinsame technische Grundlagen mussten unterschiedliche Markenanforderungen tragen. Passt direkt zu den individualisierten Partnerportalen von Container GO und Schüttgut GO.</div></div>' +
    '<div class="c"><div class="t">Anforderungen für Entwicklung nutzbar machen</div><div class="b">Ich reiche Wünsche nicht einfach weiter. Ich kläre Ziel, Nutzungssituation und technische Voraussetzungen. Bei Patrick &amp; Friends habe ich Kunden, Design, Frontend, Backend und externe Partner zusammengebracht.</div></div>' +
    '<div class="c"><div class="t">Technische Abhängigkeiten früh erkennen</div><div class="b">Durch meine Entwicklungserfahrung erkenne ich Schnittstellen, Plattformgrenzen und Qualitätsrisiken früh. Ich kann mit Entwicklerinnen und Entwicklern auf Augenhöhe sprechen und Folgen für Aufwand, Termin und Nutzer erklären.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Schwächen und sichere Antworten</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Ich spreche Unklarheiten und Risiken meist direkt an. Das hilft in technischen Projekten, kann aber in einer neuen Runde härter wirken als beabsichtigt. Deshalb achte ich bewusst auf Zeitpunkt und Formulierung. Mein Ziel ist eine klare Entscheidung, nicht das Rechthaben.</li>' +
    '<li><b>Trockener Humor:</b> Mein Humor ist manchmal sehr trocken und gelegentlich sarkastisch. In einem vertrauten Team kann das verbinden. In neuen oder angespannten Situationen halte ich mich damit zurück.</li>' +
    '<li><b>Locker bei passender Gesprächsatmosphäre:</b> Meine ungefährlichste Schwäche ist Kinderschokolade. Die gefährdet höchstens den Vorrat im Büro.</li>' +
    '<li><b>Fachliche Lücke nur bei konkreter Nachfrage:</b> Die Entsorgungsbranche und ihre ERP-Prozesse sind für mich neu. Ich würde deshalb am Anfang bewusst Zeit mit Partnern, Fachbereichen, Disposition und Kundenservice verbringen. Die zugrunde liegende Aufgabe kenne ich: komplexe Prozesse verstehen, Unterschiede sichtbar machen und Anforderungen so strukturieren, dass Entwicklung und Fachseite dieselbe Grundlage haben.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Understanding white label and platform logic</div><div class="b">At deepblue, I worked on a modular platform for more than ten Unilever brands. Shared technical foundations had to carry differing brand requirements. This fits directly with the individualized partner portals of Container GO and Schüttgut GO.</div></div>' +
    '<div class="c"><div class="t">Making requirements usable for development</div><div class="b">I don\'t just pass requests along — I clarify goal, usage context, and technical prerequisites. At Patrick &amp; Friends, I brought clients, design, frontend, backend, and external partners together.</div></div>' +
    '<div class="c"><div class="t">Spotting technical dependencies early</div><div class="b">My development background means I notice interfaces, platform limits, and quality risks early. I can talk with developers as an equal and explain the consequences of a technical decision for effort, timeline, and users.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Weaknesses and Safe Answers</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> I usually address ambiguity and risk directly. That helps in technical projects, but can land harder than intended in a new group. So I\'m deliberate about timing and phrasing — my goal is a clear decision, not being right.</li>' +
    '<li><b>Dry humor:</b> my humor is sometimes very dry and occasionally sarcastic. With a team I trust it can be a connector. In new or tense situations I hold back.</li>' +
    '<li><b>The light answer, when the mood fits:</b> my least dangerous weakness is Kinderschokolade (chocolate) — it endangers, at most, the office supply.</li>' +
    '<li><b>A domain gap, only on explicit request:</b> the waste management industry and its ERP processes are new to me. I\'d deliberately spend time early on with partners, business units, dispatch, and customer service. The underlying task I do know: understanding complex processes, surfacing differences, and structuring requirements so development and the business side share the same ground.</li>' +
    '</ul>';

  // ===== 4 · Business Model & Target Role =====
  CONTENT.de[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">OTTO DÖRNER</p>' +
    '<p>Hamburger Familienunternehmen in dritter Generation. Die Gruppe arbeitet in den Bereichen Entsorgung, Kies und Sand, Deponien sowie Wertstoffhandel. Nach eigenen Angaben rund 1.300 Beschäftigte an 35 Standorten in Norddeutschland. Das Unternehmen verbindet Kreislaufwirtschaft mit operativer Logistik und digitalen Services — Digitalisierung ist kein Zusatzthema: digitale Bestellungen, Dokumente, Mengen- und Abfallbilanzen sowie effizientere Disposition wirken direkt auf Kundenservice, Kosten und Ressourceneinsatz.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">DÖRNER GO</p>' +
    '<p>Eigenes B2B-Kundenportal für Gewerbekunden: Container und Schüttgüter bestellen, Aufträge verfolgen, Lieferorte verwalten, Rechnungen, Lieferscheine und Bilanzen abrufen.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Container GO und Schüttgut GO</p>' +
    '<p>Container GO ist eine White-Label-Lösung für andere Entsorgungsunternehmen — Partner betreiben ein Kundenportal im eigenen Design mit Anbindung an ihr Warenwirtschaftssystem; laut Stellenanzeige mehr als 30 Entsorgungspartner in Deutschland. Schüttgut GO überträgt das Plattformmodell auf Baustoffunternehmen und Schüttgutbestellungen.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Was an dem Produkt anspruchsvoll ist</p>' +
    '<p>Die Plattform muss gemeinsame Funktionen zuverlässig bereitstellen und gleichzeitig Partnerunterschiede abbilden. Ein individueller Wunsch darf die Wartbarkeit der gemeinsamen Lösung nicht unnötig verschlechtern. Hinzu kommen ERP-Anbindungen, Fachbegriffe, Rollen und Berechtigungen sowie operative Abläufe im Hintergrund. Der Product Owner muss vier Perspektiven zusammenbringen:</p>' +
    '<ul class="tight">' +
    '<li>Gewerbekunden, die Aufträge einfach und zuverlässig erledigen wollen</li>' +
    '<li>Partnerunternehmen, die ihr eigenes Portal erfolgreich am Markt etablieren möchten</li>' +
    '<li>Fachbereiche und interne IT bei OTTO DÖRNER</li>' +
    '<li>das externe Software-Entwicklungsteam, das klare Prioritäten und Anforderungen braucht</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Anforderungen der Stelle und meine Belege</p>' +
    '<table class="info">' +
    '<tr><th>Gesucht</th><th>Mein belastbarer Bezug</th></tr>' +
    '<tr><td class="k">Partnerportale erfolgreich am Markt etablieren</td><td>Erfahrung mit E-Commerce-Projekten und digitalen Plattformen; Marktetablierung noch nicht allein verantwortet.</td></tr>' +
    '<tr><td class="k">Partnerindividuelle und übergreifende Anforderungen erkennen</td><td>Deepblue: mehr als zehn Marken auf einer modularen Plattform; P&amp;F: unterschiedliche Kunden- und Projektanforderungen.</td></tr>' +
    '<tr><td class="k">Anforderungen analysieren und Aufgaben erstellen</td><td>Fachliche, gestalterische und technische Anforderungen geklärt und in umsetzbare Arbeitspakete übersetzt.</td></tr>' +
    '<tr><td class="k">Interne IT und externe Entwicklung koordinieren</td><td>Langjährige Abstimmung mit Frontend, Backend, Design, Kunden und externen Partnern.</td></tr>' +
    '<tr><td class="k">Roadmap und Backlog pflegen</td><td>Priorisierung und deliverynahe Backlog-Arbeit aus Projekten; formale Gesamtverantwortung ist der nächste Schritt.</td></tr>' +
    '<tr><td class="k">Partner-Onboarding als Projekt leiten</td><td>Onboarding und Mentoring aus der Teamarbeit; Partner-Onboarding in diesem Geschäftsmodell ist neu.</td></tr>' +
    '<tr><td class="k">Sprint-Planung, Refinement und Reviews unterstützen</td><td>Agile Delivery, Jira und Confluence aus Praxis und Weiterbildung; Reviews und technische Rückfragen sind vertraut.</td></tr>' +
    '<tr><td class="k">Termine, Aufwand und Qualität sichern</td><td>Projektbegleitung, Qualitätssicherung und Releases; keine unbelegten Kennzahlen behaupten.</td></tr>' +
    '<tr><td class="k">Eigenständig entscheiden und Nein sagen können</td><td>Technische Risiken und Grenzen direkt ansprechen und Alternativen mit ihren Folgen erklären.</td></tr>' +
    '</table>';

  CONTENT.en[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">OTTO DÖRNER</p>' +
    '<p>A Hamburg family business in its third generation. The group operates in waste management, gravel and sand, landfills, and recyclable materials trading. By its own account, roughly 1,300 employees across 35 locations in northern Germany. The company connects circular economy with operational logistics and digital services — digitalization isn\'t a side topic: digital orders, documents, volume and waste balances, and more efficient dispatch directly affect customer service, cost, and resource use.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">DÖRNER GO</p>' +
    '<p>The company\'s own B2B customer portal for commercial clients: order containers and bulk materials, track orders, manage delivery locations, retrieve invoices, delivery notes, and balances.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Container GO and Schüttgut GO</p>' +
    '<p>Container GO is a white-label solution for other waste management companies — partners run a customer portal in their own design, connected to their inventory system; per the job ad, more than 30 waste management partners in Germany. Schüttgut GO applies the platform model to construction material companies and bulk material orders.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">What Makes the Product Challenging</p>' +
    '<p>The platform has to reliably provide shared functionality while also accommodating partner differences. An individual request can be reasonable, but shouldn\'t needlessly hurt the maintainability of the shared solution. On top of that: ERP connections, domain terminology, roles and permissions, and operational processes running in the background. The Product Owner has to bring four perspectives together:</p>' +
    '<ul class="tight">' +
    '<li>commercial clients who want to get orders done simply and reliably</li>' +
    '<li>partner companies who want to establish their own portal successfully in the market</li>' +
    '<li>business units and internal IT at OTTO DÖRNER</li>' +
    '<li>the external software development team, which needs clear priorities and requirements</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Evidence</p>' +
    '<table class="info">' +
    '<tr><th>Requirement</th><th>My Solid Track Record</th></tr>' +
    '<tr><td class="k">Establish partner portals successfully in the market</td><td>Experience with e-commerce projects and digital platforms; haven\'t yet owned market establishment alone.</td></tr>' +
    '<tr><td class="k">Recognize partner-specific vs. cross-cutting requirements</td><td>deepblue: more than ten brands on a modular platform; P&amp;F: differing client and project requirements.</td></tr>' +
    '<tr><td class="k">Analyze requirements and create tasks</td><td>Clarified business, design, and technical requirements and translated them into actionable work packages.</td></tr>' +
    '<tr><td class="k">Coordinate internal IT and external development</td><td>Years of alignment with frontend, backend, design, clients, and external partners.</td></tr>' +
    '<tr><td class="k">Maintain roadmap and backlog</td><td>Prioritization and delivery-close backlog work from projects; formal overall ownership is the next step.</td></tr>' +
    '<tr><td class="k">Lead partner onboarding as a project</td><td>Onboarding and mentoring from team work; partner onboarding in this business model is new.</td></tr>' +
    '<tr><td class="k">Support sprint planning, refinement, and reviews</td><td>Agile delivery, Jira, and Confluence from practice and training; reviews and technical follow-up questions are familiar.</td></tr>' +
    '<tr><td class="k">Secure deadlines, effort, and quality</td><td>Project support, QA, and releases; won\'t claim unsubstantiated metrics.</td></tr>' +
    '<tr><td class="k">Decide independently and say no when needed</td><td>Address technical risks and limits directly, and explain alternatives with their consequences.</td></tr>' +
    '</table>';

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Keine unbelegten Ergebnisse oder Kennzahlen behaupten. Wirkung sonst qualitativ beschreiben.</div>' +
    '<div class="macc"><button class="macc-head">1 · Wie gehen Sie mit unterschiedlichen Partneranforderungen um <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich kläre zuerst das zugrunde liegende Problem und prüfe dann, ob eine gemeinsame Lösung oder ein begründeter Sonderfall sinnvoll ist.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei deepblue arbeitete ich an einer modularen Plattform für mehr als zehn Unilever-Marken. Jede Marke hatte eigene Gestaltungs- und Inhaltsanforderungen, während die technische Grundlage gemeinsam bleiben sollte.</div>' +
    '<div class="row"><b>Aufgabe:</b> Individuelle Wünsche mussten eingeordnet werden, ohne die Wiederverwendbarkeit und Wartbarkeit der Plattform aus dem Blick zu verlieren.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe geklärt, welches Ziel hinter einer Anforderung stand, und geprüft, ob es sich als wiederverwendbares Modul abbilden ließ. Technische Folgen und Abhängigkeiten habe ich mit den Beteiligten sichtbar gemacht. Erst danach wurde zwischen gemeinsamer Lösung und begründetem Sonderfall entschieden.</div>' +
    '<div class="row"><b>Ergebnis:</b> Unterschiedliche Markenauftritte konnten auf einer gemeinsamen Plattform umgesetzt werden. Die technische Grundlage blieb modular und für weitere Anforderungen nutzbar.</div>' +
    '<div class="erg">Übertragung: Bei Container GO würde ich ebenso zwischen partnerübergreifendem Produktbedarf, konfigurierbarer Individualisierung und echtem Sonderfall unterscheiden.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Wie machen Sie aus einer unklaren Anforderung eine umsetzbare Aufgabe <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Eine Aufgabe ist erst bereit für die Umsetzung, wenn Ziel, Nutzer, Rahmenbedingungen und offene Entscheidungen geklärt sind.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends kamen Anforderungen für Shop-, Website- und Relaunch-Projekte teilweise aus Kundenbriefings oder Designs. Technische Voraussetzungen waren darin nicht immer vollständig beschrieben.</div>' +
    '<div class="row"><b>Aufgabe:</b> Frontend, Backend und weitere Beteiligte brauchten ein gemeinsames Verständnis und eine belastbare Grundlage für die Einschätzung.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe offene Punkte gesammelt, die gewünschte Wirkung geklärt und Annahmen kenntlich gemacht. Anschließend habe ich Abhängigkeiten mit den zuständigen Personen geprüft und die Anforderung in nachvollziehbare Arbeitspakete überführt.</div>' +
    '<div class="row"><b>Ergebnis:</b> Offene Entscheidungen und technische Rückfragen wurden früher sichtbar. Das Team arbeitete mit einem gemeinsamen Verständnis.</div>' +
    '<div class="erg">Vor dem Gespräch ergänzen: ein konkretes Projekt und zwei typische Rückfragen nennen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Wie priorisieren Sie Roadmap und Backlog <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich priorisiere nicht nach Lautstärke, sondern nach gemeinsam vereinbarten Kriterien und sichtbaren Abhängigkeiten.</mark></div>' +
    '<div class="row"><b>Situation:</b> In Agentur- und Plattformprojekten liefen größere Relaunches, Websites, Promotions und wiederkehrende Aufgaben teilweise parallel.</div>' +
    '<div class="row"><b>Aufgabe:</b> Das Team brauchte eine nachvollziehbare Reihenfolge, obwohl mehrere Beteiligte ihre Themen als dringend bewerteten.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe zuerst geklärt, was blockiert oder einen festen Termin hat. Danach habe ich Nutzen, Risiko, Aufwand und Abhängigkeiten betrachtet. Wiederkehrende Aufgaben wurden früh eingeplant; Folgen einer Verschiebung habe ich transparent gemacht.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Beteiligten konnten die Reihenfolge nachvollziehen. Offene Zielkonflikte wurden als Entscheidung behandelt und nicht verdeckt an das Entwicklungsteam weitergegeben.</div>' +
    '<div class="erg">Übertragung: Für die Portale würde ich zusätzlich Partnerreichweite, Kundennutzen, strategischen Beitrag und die Wirkung auf die gemeinsame Plattform berücksichtigen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Wie führen Sie ein Onboarding-Projekt <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ein Onboarding braucht einen klaren Standardprozess und zugleich eine frühe Prüfung der partnerspezifischen Abweichungen.</mark></div>' +
    '<div class="row"><b>Situation:</b> Das konkrete Onboarding eines Entsorgungsunternehmens habe ich noch nicht durchgeführt. Vergleichbar sind meine Erfahrungen mit neuen Projekten, externen Partnern sowie dem Onboarding und Mentoring von Kolleginnen und Kollegen.</div>' +
    '<div class="row"><b>Aufgabe:</b> Für einen neuen GO-Partner müssten fachliche Prozesse, Portal-Konfiguration, ERP-Anbindung, Rollen, Daten, Tests und Go-live koordiniert werden.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich würde zuerst Ziele, Verantwortlichkeiten und technische Voraussetzungen klären. Danach Standardumfang und Abweichungen erfassen, Meilensteine und Abnahmen vereinbaren und Risiken sichtbar halten. Vor dem Go-live wären End-to-End-Tests, Nutzerkommunikation und eine klare Übergabe in den Betrieb entscheidend.</div>' +
    '<div class="erg">Das ist ein Vorgehensvorschlag, kein bereits erzieltes Ergebnis.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Wie gehen Sie mit einem Termin-Umfang-Qualität-Konflikt um <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich zerlege den Konflikt und mache die Folgen jeder Option entscheidbar.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Shop- und Relaunch-Projekten mussten Kundenwünsche, technische Abhängigkeiten und ein geplanter Go-live zusammengebracht werden.</div>' +
    '<div class="row"><b>Aufgabe:</b> Wenn nicht alles gleichzeitig umsetzbar war, brauchte das Team eine klare Entscheidung über Umfang oder Reihenfolge.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe den unverzichtbaren Kern von ergänzenden Wünschen getrennt, mit den technischen Beteiligten Risiken und Abhängigkeiten bewertet und die Optionen mit ihren Folgen dargestellt. Entscheidung und zurückgestellte Punkte wurden dokumentiert.</div>' +
    '<div class="row"><b>Ergebnis:</b> Das Team konnte auf einen klaren Umfang hinarbeiten. Qualitätsfragen und spätere Ergänzungen gingen nicht zwischen mündlichen Absprachen verloren.</div>' +
    '<div class="erg">Vor dem Gespräch ergänzen: ein echtes Projekt mit konkretem Termin oder reduziertem Umfang auswählen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Wie arbeiten Sie mit einem externen Entwicklungsteam <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Externe Entwicklung funktioniert gut, wenn Ziele, Entscheidungsspielraum und Rückfragenwege eindeutig sind.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends arbeitete ich mit internen Teams, Kunden und externen Partnern. Informationen und Entscheidungen lagen dadurch nicht automatisch an einer Stelle.</div>' +
    '<div class="row"><b>Aufgabe:</b> Die Umsetzung musste trotz verteilter Verantwortlichkeiten nachvollziehbar bleiben.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe Anforderungen und Akzeptanzkriterien geklärt, Zuständigkeiten sichtbar gemacht und technische Einschätzungen früh eingeholt. In Reviews habe ich auch Abhängigkeiten und erwartetes Verhalten geprüft, nicht nur die Oberfläche. Offene Fragen und Entscheidungen wurden dokumentiert.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Beteiligten hatten eine gemeinsame Arbeitsgrundlage und wussten, wann eine Rückfrage oder Entscheidung erforderlich war.</div>' +
    '</div></div></div>';

  CONTENT.en[5] = '<div class="lead">Don\'t claim unsubstantiated results or metrics. Otherwise describe the impact qualitatively.</div>' +
    '<div class="macc"><button class="macc-head">1 · How do you handle different partner requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I clarify the underlying problem first, then check whether a shared solution or a justified edge case makes sense.</mark></div>' +
    '<div class="row"><b>Situation:</b> at deepblue, I worked on a modular platform for more than ten Unilever brands. Each brand had its own design and content requirements, while the technical foundation was meant to stay shared.</div>' +
    '<div class="row"><b>Task:</b> individual requests had to be placed without losing sight of the platform\'s reusability and maintainability.</div>' +
    '<div class="row"><b>Action:</b> I clarified the goal behind a requirement and checked whether it could be modeled as a reusable module. I made technical consequences and dependencies visible with the stakeholders. Only then was a decision made between a shared solution and a justified edge case.</div>' +
    '<div class="row"><b>Result:</b> different brand experiences could be delivered on a shared platform. The technical foundation stayed modular and usable for further requirements.</div>' +
    '<div class="erg">Transfer: at Container GO, I\'d similarly distinguish between cross-partner product needs, configurable customization, and genuine edge cases.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · How do you turn an unclear requirement into an actionable task <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>A task is only ready for delivery once the goal, users, constraints, and open decisions are clarified.</mark></div>' +
    '<div class="row"><b>Situation:</b> at Patrick &amp; Friends, requirements for shop, website, and relaunch projects sometimes came from client briefs or designs. Technical prerequisites weren\'t always fully described.</div>' +
    '<div class="row"><b>Task:</b> frontend, backend, and other stakeholders needed a shared understanding and a solid basis for estimation.</div>' +
    '<div class="row"><b>Action:</b> I collected open points, clarified the intended effect, and flagged assumptions. Then I checked dependencies with the responsible people and turned the requirement into traceable work packages.</div>' +
    '<div class="row"><b>Result:</b> open decisions and technical follow-up questions surfaced earlier. The team worked from a shared understanding.</div>' +
    '<div class="erg">Add before the interview: name a concrete project and two typical follow-up questions.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · How do you prioritize roadmap and backlog <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I don\'t prioritize by volume — by jointly agreed criteria and visible dependencies.</mark></div>' +
    '<div class="row"><b>Situation:</b> in agency and platform projects, larger relaunches, websites, promotions, and recurring tasks sometimes ran in parallel.</div>' +
    '<div class="row"><b>Task:</b> the team needed a traceable order even though several stakeholders rated their topics as urgent.</div>' +
    '<div class="row"><b>Action:</b> I first clarified what was blocking or had a fixed date. Then I looked at value, risk, effort, and dependencies. Recurring tasks were planned in early; I made the consequences of any deferral transparent.</div>' +
    '<div class="row"><b>Result:</b> stakeholders could follow the order. Open trade-offs were treated as a decision, not quietly passed on to the development team.</div>' +
    '<div class="erg">Transfer: for the portals, I\'d additionally weigh partner reach, customer value, strategic contribution, and the impact on the shared platform.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · How do you run an onboarding project <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>Onboarding needs a clear standard process alongside early review of partner-specific deviations.</mark></div>' +
    '<div class="row"><b>Situation:</b> I haven\'t yet run the specific onboarding of a waste management company. Comparable are my experiences with new projects, external partners, and onboarding and mentoring colleagues.</div>' +
    '<div class="row"><b>Task:</b> for a new GO partner, business processes, portal configuration, ERP integration, roles, data, testing, and go-live would need coordinating.</div>' +
    '<div class="row"><b>Action:</b> I\'d first clarify goals, ownership, and technical prerequisites. Then capture standard scope and deviations, agree milestones and sign-offs, and keep risks visible. Before go-live, end-to-end testing, user communication, and a clean handover into operations would be critical.</div>' +
    '<div class="erg">This is a proposed approach, not an already-achieved result.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · How do you handle a deadline/scope/quality conflict <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I break the conflict apart and make the consequences of each option decidable.</mark></div>' +
    '<div class="row"><b>Situation:</b> on shop and relaunch projects, client requests, technical dependencies, and a planned go-live had to be reconciled.</div>' +
    '<div class="row"><b>Task:</b> when not everything was feasible at once, the team needed a clear decision on scope or order.</div>' +
    '<div class="row"><b>Action:</b> I separated the indispensable core from nice-to-have requests, assessed risks and dependencies with the technical stakeholders, and presented the options with their consequences. The decision and deferred points were documented.</div>' +
    '<div class="row"><b>Result:</b> the team could work toward a clear scope. Quality questions and later additions didn\'t get lost between verbal agreements.</div>' +
    '<div class="erg">Add before the interview: pick a real project with a concrete deadline or reduced scope.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · How do you work with an external development team <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>External development works well when goals, decision latitude, and channels for questions are unambiguous.</mark></div>' +
    '<div class="row"><b>Situation:</b> at Patrick &amp; Friends, I worked with internal teams, clients, and external partners — information and decisions didn\'t automatically sit in one place.</div>' +
    '<div class="row"><b>Task:</b> delivery had to stay traceable despite distributed ownership.</div>' +
    '<div class="row"><b>Action:</b> I clarified requirements and acceptance criteria, made ownership visible, and gathered technical assessments early. In reviews, I also checked dependencies and expected behavior, not just the surface. Open questions and decisions were documented.</div>' +
    '<div class="row"><b>Result:</b> stakeholders had a shared working basis and knew when a question or decision was needed.</div>' +
    '</div></div></div>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Sie waren noch nie offiziell Product Owner. Warum sollten wir Ihnen die Rolle geben?“</div>' +
    '<p>Der Titel ist neu, viele Teile der Arbeit nicht. Ich kläre seit Jahren Anforderungen, bewerte technische Machbarkeit, koordiniere Beteiligte und begleite Umsetzung, Tests und Go-lives. Als Entwicklerin weiß ich außerdem, wie stark gute Delivery davon abhängt, dass Prioritäten und Entscheidungen klar sind. Neu sind für mich die formale Gesamtverantwortung für Roadmap und Backlog sowie die Partnerverantwortung. Genau diesen nächsten Verantwortungsbereich suche ich bewusst.</p>' +
    '<div class="lead">„Haben Sie schon eine Roadmap verantwortet?“</div>' +
    '<p>Noch nicht als alleinige Product Ownerin. Ich habe Anforderungen, Abhängigkeiten und Reihenfolgen in Projekten mit vorbereitet und die Umsetzung über mehrere Phasen begleitet. Für eine Roadmap würde ich Ziele, Partner- und Kundennutzen, technische Abhängigkeiten, Aufwand und strategische Relevanz zusammenbringen. Wichtig wäre mir am Anfang zu verstehen, wie die Produktvision und Entscheidungsrechte heute verteilt sind.</p>' +
    '<div class="lead">„Kennen Sie die Entsorgungsbranche?“</div>' +
    '<p>Noch nicht aus eigener Berufspraxis. Ich bringe dafür Erfahrung mit komplexen digitalen Prozessen, E-Commerce-Portalen und White-Label-Plattformen mit. Ich würde die Fachlichkeit nicht vorschnell vereinfachen, sondern gezielt von Disposition, Partnern, Kundenservice und IT lernen. Mein technischer Hintergrund hilft mir, die Zusammenhänge schnell in Systemgrenzen, Datenflüsse und konkrete Anforderungen zu übersetzen.</p>' +
    '<div class="lead">„Können Sie auch Nein sagen?“</div>' +
    '<p>Ja, wenn ich das Nein begründen kann. Ich würde zuerst klären, welches Problem hinter einem Wunsch steht. Danach kann die Antwort lauten: jetzt nicht, anders lösen oder als Partnerkonfiguration statt als Kernfunktion umsetzen. Entscheidend ist, die Folgen verständlich zu machen und eine sinnvolle Alternative anzubieten.</p>' +
    '<div class="lead">„Wie würden Sie den Erfolg der Portale messen?“</div>' +
    '<p>Ich würde mit den aktuellen Produktzielen beginnen. Mögliche Kennzahlen wären aktive Partner und Nutzer, digitale Bestellquote, erfolgreiche Erstbestellung, Nutzungsrate zentraler Funktionen, Abbruch- und Fehlerraten, Supportkontakte, Bearbeitungszeit, Portalverfügbarkeit sowie Zeit und Aufwand eines Partner-Onboardings. Entscheidend ist, ob eine Kennzahl eine konkrete Produktentscheidung unterstützt und ob die Daten verlässlich sind.</p>' +
    '<div class="lead">„Warum OTTO DÖRNER?“</div>' +
    '<p>Mich überzeugt, dass die digitalen Portale ein reales operatives Problem lösen. Bestellungen, Dokumente, Bilanzen und Auftragsstatus werden für Gewerbekunden und Partner einfacher zugänglich. Gleichzeitig ist Container GO eine White-Label-Plattform mit mehr als 30 Partnerunternehmen. Diese Verbindung aus konkretem Kundennutzen, Plattformlogik und nachhaltigerem Ressourceneinsatz passt sehr gut zu meiner bisherigen Erfahrung und zu dem Verantwortungsbereich, den ich übernehmen möchte.</p>';

  CONTENT.en[6] = '<div class="lead">"You\'ve never officially been a Product Owner. Why should we give you the role?"</div>' +
    '<p>The title is new, most of the work isn\'t. I\'ve clarified requirements, assessed technical feasibility, coordinated stakeholders, and accompanied delivery, testing, and go-lives for years. As a developer, I also know how much good delivery depends on priorities and decisions being clear. What\'s new for me is formal overall ownership of roadmap and backlog, plus partner responsibility — that\'s exactly the next scope I\'m deliberately going for.</p>' +
    '<div class="lead">"Have you owned a roadmap before?"</div>' +
    '<p>Not yet as the sole Product Owner. I\'ve helped prepare requirements, dependencies, and sequencing in projects, and accompanied delivery across several phases. For a roadmap, I\'d bring together goals, partner and customer value, technical dependencies, effort, and strategic relevance. Early on, it would matter to me to understand how the product vision and decision rights are currently distributed.</p>' +
    '<div class="lead">"Do you know the waste management industry?"</div>' +
    '<p>Not from hands-on professional practice yet. What I bring instead is experience with complex digital processes, e-commerce portals, and white-label platforms. I wouldn\'t oversimplify the domain — I\'d deliberately learn from dispatch, partners, customer service, and IT. My technical background helps me quickly translate the context into system boundaries, data flows, and concrete requirements.</p>' +
    '<div class="lead">"Can you say no?"</div>' +
    '<p>Yes, if I can justify the no. I\'d first clarify the problem behind a request. Then the answer can be: not now, solve it differently, or implement it as partner configuration instead of a core feature. What matters is making the consequences understandable and offering a sensible alternative.</p>' +
    '<div class="lead">"How would you measure the portals\' success?"</div>' +
    '<p>I wouldn\'t start with a ready-made list without knowing the current product goals. Active partners and users, digital order rate, successful first orders, usage of core features, drop-off and error rates, support contacts, handling time, portal availability, and partner onboarding time/effort could all be relevant. What matters is whether a metric supports a concrete product decision and whether the data is reliable.</p>' +
    '<div class="lead">"Why OTTO DÖRNER?"</div>' +
    '<p>What convinces me is that the digital portals solve a real operational problem. Orders, documents, balances, and order status become easier to access for commercial clients and partners. At the same time, Container GO is a white-label platform with more than 30 partner companies. This combination of concrete customer value, platform logic, and more sustainable resource use fits very well with my experience and with the scope of responsibility I want to take on.</p>';

  // ===== 7 · First 90 Days Plan =====
  CONTENT.de[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Erste 30 Tage · verstehen</p>' +
    '<ul class="tight">' +
    '<li>Produktvision, Roadmap, Backlog und aktuelle Verpflichtungen kennenlernen.</li>' +
    '<li>DÖRNER GO, Container GO und Schüttgut GO selbst aus Nutzer- und Partnersicht durchspielen.</li>' +
    '<li>Gespräche mit Fachbereichen, interner IT, externem Entwicklungsteam, Kundenservice und Partnerbetreuung führen.</li>' +
    '<li>Standardprozess und typische Abweichungen im Partner-Onboarding verstehen.</li>' +
    '<li>ERP-Anbindungen, Rollen, Datenflüsse und kritische Betriebsprozesse grob kartieren.</li>' +
    '<li>Bestehende Kennzahlen und Entscheidungswege klären.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 31–60 · ordnen</p>' +
    '<ul class="tight">' +
    '<li>Backlog nach transparenten Kriterien prüfen.</li>' +
    '<li>Partnerübergreifende Anforderungen von Konfiguration und Sonderfällen trennen.</li>' +
    '<li>Ziele und Akzeptanzkriterien der wichtigsten Themen schärfen.</li>' +
    '<li>Technische Abhängigkeiten und Risiken sichtbar machen.</li>' +
    '<li>Arbeitsrhythmus für Refinement, Sprint-Planung und Reviews stabilisieren.</li>' +
    '<li>Wiederkehrende Support- und Onboarding-Probleme auf Produktursachen prüfen.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 61–90 · fokussieren</p>' +
    '<ul class="tight">' +
    '<li>Prioritäten und nächste Roadmap-Entscheidungen mit den Verantwortlichen abstimmen.</li>' +
    '<li>Erste Verbesserung mit klarem Partner- oder Kundennutzen vorbereiten oder umsetzen.</li>' +
    '<li>Messbare Erfolgskriterien für zentrale Themen vereinbaren.</li>' +
    '<li>Onboarding-Ablauf und offene Entscheidungspunkte nachvollziehbar dokumentieren.</li>' +
    '<li>Produktwissen zwischen Fachseite, IT und Entwicklung weniger personenabhängig machen.</li>' +
    '</ul>';

  CONTENT.en[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">First 30 Days · Understand</p>' +
    '<ul class="tight">' +
    '<li>Get to know product vision, roadmap, backlog, and current commitments.</li>' +
    '<li>Walk through DÖRNER GO, Container GO, and Schüttgut GO myself from a user and partner perspective.</li>' +
    '<li>Have conversations with business units, internal IT, the external development team, customer service, and partner support.</li>' +
    '<li>Understand the standard process and typical deviations in partner onboarding.</li>' +
    '<li>Roughly map ERP integrations, roles, data flows, and critical operational processes.</li>' +
    '<li>Clarify existing metrics and decision paths.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 31–60 · Organize</p>' +
    '<ul class="tight">' +
    '<li>Review the backlog against transparent criteria.</li>' +
    '<li>Separate cross-partner requirements from configuration and edge cases.</li>' +
    '<li>Sharpen goals and acceptance criteria for the most important topics.</li>' +
    '<li>Make technical dependencies and risks visible.</li>' +
    '<li>Stabilize the working rhythm for refinement, sprint planning, and reviews.</li>' +
    '<li>Check recurring support and onboarding issues for underlying product causes.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 61–90 · Focus</p>' +
    '<ul class="tight">' +
    '<li>Align priorities and upcoming roadmap decisions with those responsible.</li>' +
    '<li>Prepare or implement a first improvement with clear partner or customer value.</li>' +
    '<li>Agree on measurable success criteria for key topics.</li>' +
    '<li>Document the onboarding process and open decision points so they\'re traceable.</li>' +
    '<li>Make product knowledge less dependent on individual people across business, IT, and development.</li>' +
    '</ul>';

  // ===== 8 · Questions for the Employer =====
  CONTENT.de[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Zur Rolle</p>' +
    '<ul class="tight">' +
    '<li>Woran würdet ihr nach sechs Monaten erkennen, dass die Person in der Rolle erfolgreich ist?</li>' +
    '<li>Warum wird die Rolle gerade jetzt besetzt?</li>' +
    '<li>Welche Entscheidungen trifft der Product Owner selbst und welche gemeinsam mit Management oder Fachbereichen?</li>' +
    '<li>Wie groß ist das externe Entwicklungsteam und welche Rollen gehören dazu?</li>' +
    '<li>Wer trägt heute die Produktvision für Container GO und Schüttgut GO?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Zu Produkt und Partnern</p>' +
    '<ul class="tight">' +
    '<li>Was unterscheidet DÖRNER GO, Container GO und Schüttgut GO technisch und organisatorisch?</li>' +
    '<li>Welche Anforderungen treten bei vielen Partnern wiederkehrend auf?</li>' +
    '<li>Wo endet die konfigurierbare White-Label-Lösung und wo beginnen echte Sonderentwicklungen?</li>' +
    '<li>Was sind aktuell die häufigsten Hürden beim Onboarding eines neuen Partners?</li>' +
    '<li>Welche ERP-Systeme oder Schnittstellen verursachen den größten Abstimmungsbedarf?</li>' +
    '<li>Welche Portal-Funktionen werden von Kunden besonders intensiv oder überraschend wenig genutzt?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Zu Arbeitsweise und Prioritäten</p>' +
    '<ul class="tight">' +
    '<li>Wie entstehen Roadmap und Prioritäten heute?</li>' +
    '<li>Wie verteilen sich neue Funktionen, Partneranforderungen, technische Weiterentwicklung und laufender Betrieb im Backlog?</li>' +
    '<li>Welche Kennzahlen nutzt ihr aktuell für Produktentscheidungen?</li>' +
    '<li>Wie laufen Refinement, Sprint-Planung und Reviews mit dem externen Entwicklungsteam konkret ab?</li>' +
    '<li>Wie werden Support-Rückmeldungen und Erfahrungen aus Partner-Onboardings in die Produktarbeit zurückgeführt?</li>' +
    '<li>Wie sind Präsenz, mobiles Arbeiten und gemeinsame Teamtage organisiert?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gehalt</p>' +
    '<div class="lead">In der Bewerbung habe ich 72.000 Euro brutto jährlich genannt — diese Zahl sollte ich konsistent vertreten. Formulierung: „Meine Gehaltsvorstellung liegt wie in meiner Bewerbung angegeben bei 72.000 Euro brutto jährlich. Die Aufgaben umfassen Produktverantwortung, Partnerprojekte und die Koordination der Entwicklung. Auf dieser Grundlage halte ich die Größenordnung weiterhin für passend.“</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">Falls nach dem Mindestgehalt gefragt wird: nicht spontan nach unten verhandeln. Erst Aufgabenbreite, Verantwortungsumfang, mobiles Arbeiten und Gesamtpaket klären.</p>';

  CONTENT.en[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">About the Role</p>' +
    '<ul class="tight">' +
    '<li>What would tell you, after six months, that the person in the role is succeeding?</li>' +
    '<li>Why is the role being filled right now?</li>' +
    '<li>Which decisions does the Product Owner make alone, and which jointly with management or business units?</li>' +
    '<li>How big is the external development team, and which roles are on it?</li>' +
    '<li>Who currently owns the product vision for Container GO and Schüttgut GO?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">About Product and Partners</p>' +
    '<ul class="tight">' +
    '<li>What distinguishes DÖRNER GO, Container GO, and Schüttgut GO technically and organizationally?</li>' +
    '<li>Which requirements come up recurringly across many partners?</li>' +
    '<li>Where does the configurable white-label solution end, and where do genuine custom developments begin?</li>' +
    '<li>What are currently the most common hurdles in onboarding a new partner?</li>' +
    '<li>Which ERP systems or interfaces cause the most coordination effort?</li>' +
    '<li>Which portal features are used especially heavily, or surprisingly little, by customers?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">About Ways of Working and Priorities</p>' +
    '<ul class="tight">' +
    '<li>How is the roadmap and prioritization created today?</li>' +
    '<li>How are new features, partner requirements, technical improvements, and ongoing operations split across the backlog?</li>' +
    '<li>Which metrics do you currently use for product decisions?</li>' +
    '<li>How do refinement, sprint planning, and reviews with the external development team actually work?</li>' +
    '<li>How is feedback from support and partner onboardings fed back into product work?</li>' +
    '<li>How are on-site presence, remote work, and shared team days organized?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary</p>' +
    '<div class="lead">I stated €72,000 gross per year in my application — I should hold that number consistently. Phrasing: "My salary expectation, as stated in my application, is €72,000 gross per year. The responsibilities include product ownership, partner projects, and coordinating development. On that basis, I still consider this range appropriate."</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">If asked about a minimum: don\'t negotiate down spontaneously. Clarify scope of tasks, scope of responsibility, remote work, and the total package first.</p>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Meine drei Kernbotschaften</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>Ich kenne White-Label- und Plattformlogik aus der Praxis.</mark></li>' +
    '<li>Ich übersetze Anforderungen so, dass Entwicklung damit arbeiten kann.</li>' +
    '<li>Ich spreche technische Risiken früh an und halte Entscheidungen nachvollziehbar.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Drei ehrliche Grenzen</p>' +
    '<ul class="tight">' +
    '<li>Kein bisheriger Product-Owner-Titel</li>' +
    '<li>Keine alleinige Roadmap-Verantwortung</li>' +
    '<li>Entsorgungsfachlichkeit und ERP-Landschaft noch neu</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Drei Fragen, die ich sicher stellen möchte</p>' +
    '<ul class="tight">' +
    '<li>Woran erkennt ihr nach sechs Monaten Erfolg in der Rolle?</li>' +
    '<li>Wo endet Konfiguration und wo beginnen Sonderentwicklungen für Partner?</li>' +
    '<li>Was ist aktuell die größte Hürde im Partner-Onboarding?</li>' +
    '</ul>' +
    '<div class="lead">Letzter Gedanke: Langsam antworten. Erst die Frage beantworten, dann das Beispiel. Keine Ergebnisse oder Zahlen behaupten, die ich nicht belegen kann. Eine Lernlücke ist in Ordnung, wenn ich zeige, wie ich sie strukturiert schließe.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Stellenanzeige OTTO DÖRNER Product Owner Digitale Kundenportale, abgerufen 1. Oktober 2026; OTTO DÖRNER Digitale Services, Unternehmensprofil und Nachhaltigkeit; DÖRNER GO Kundenportal; versendeter Lebenslauf, Anschreiben und Stellenbewertung.</p>';

  CONTENT.en[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">My Three Core Messages</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>I know white-label and platform logic from hands-on practice.</mark></li>' +
    '<li>I translate requirements so development can actually work with them.</li>' +
    '<li>I raise technical risks early and keep decisions traceable.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Three Honest Limits</p>' +
    '<ul class="tight">' +
    '<li>No prior formal Product Owner title</li>' +
    '<li>No sole roadmap ownership so far</li>' +
    '<li>Waste management expertise and the ERP landscape are still new</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Three Questions I Want to Ask Confidently</p>' +
    '<ul class="tight">' +
    '<li>What tells you, after six months, that someone is succeeding in this role?</li>' +
    '<li>Where does configuration end and custom development for partners begin?</li>' +
    '<li>What is currently the biggest hurdle in partner onboarding?</li>' +
    '</ul>' +
    '<div class="lead">Final thought: answer slowly. Answer the question first, then tell the example. Don\'t claim results or numbers I can\'t back up. A knowledge gap is fine as long as I show how I close it in a structured way.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: OTTO DÖRNER Product Owner Digitale Kundenportale job posting, retrieved October 1, 2026; OTTO DÖRNER Digital Services, company profile, and sustainability; DÖRNER GO customer portal; submitted CV, cover letter, and role assessment.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · OTTO DÖRNER · Product Owner Digitale Kundenportale",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
