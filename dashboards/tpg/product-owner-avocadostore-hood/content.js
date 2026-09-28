// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Product Owner / Product Manager E-Commerce<br>The Platform Group · Avocadostore &amp; Hood",
      role: "Product Owner / Product Manager E-Commerce",
      location: "offen",
      interviewDate: "29. September 2026",
      salaryAd: "offen",
      salaryAsk: "72.000 €",
      salaryMin: "offen",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde technische Tiefe mit der Fähigkeit, <mark>unterschiedliche Interessen in eine klare Reihenfolge</mark> und umsetzbare Arbeit für das Team zu übersetzen.'
    },
    en: {
      roleSubtitle: "Product Owner / Product Manager E-Commerce<br>The Platform Group · Avocadostore &amp; Hood",
      role: "Product Owner / Product Manager E-Commerce",
      location: "TBD",
      interviewDate: "September 29, 2026",
      salaryAd: "TBD",
      salaryAsk: "€72,000",
      salaryMin: "TBD",
      introTitle: "Interview Prep",
      introText: 'I combine technical depth with the ability to <mark>translate different interests into a clear order</mark> of workable tasks for the team.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"TPG – Geschäftsmodell & Zielrolle", en:"TPG – Business Model & Target Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Nachfragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Plan für die ersten 90 Tage", en:"First 90 Days Plan"},
    8: {de:"Eigene Fragen an den Arbeitgeber", en:"Questions for the Employer"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich verbinde technische Tiefe mit der Fähigkeit, <mark>unterschiedliche Interessen in eine klare Reihenfolge</mark> und umsetzbare Arbeit für das Team zu übersetzen.</div>' +
    '<p>Ich komme nicht aus einem rein strategischen Produktumfeld. Ich kenne digitale Produkte aus der Umsetzung. Dadurch kann ich Anforderungen fachlich hinterfragen, technische Abhängigkeiten früh erkennen und mit Entwicklerinnen und Entwicklern auf Augenhöhe entscheiden. Gleichzeitig habe ich über Jahre Kunden, Design, Frontend, Backend und externe Partner zusammengebracht und Projekte bis zum Go-live begleitet.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Offene Lücke</p>' +
    '<div class="lead">Mein stärkstes Argument ist die Verbindung aus mehr als zehn Jahren technischer E-Commerce-Praxis, Erfahrung an den Schnittstellen und einem realistischen Blick auf Delivery. Meine offene Lücke ist der fehlende formale Product-Owner-Titel. Ich spreche sie selbstbewusst an und zeige anhand meiner Projekte, welche Teile der Rolle ich längst praktisch übernommen habe.</div>';

  CONTENT.en[1] = '<div class="lead">I combine technical depth with the ability to <mark>translate different interests into a clear order</mark> of workable tasks for the team.</div>' +
    '<p>I don\'t come from a purely strategic product environment. I know digital products from hands-on delivery. That lets me question requirements from a technical angle, spot dependencies early, and make decisions with developers as an equal. At the same time, I\'ve brought clients, design, frontend, backend, and external partners together for years and carried projects through to go-live.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Open Gap</p>' +
    '<div class="lead">My strongest argument is the combination of more than ten years of technical e-commerce practice, interface experience, and a realistic view of delivery. My open gap is the missing formal Product Owner title. I address it confidently and show, through my projects, which parts of the role I\'ve already practically taken on.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre lang E-Commerce-Projekte, Websites und Relaunches umgesetzt. Bei deepblue habe ich an einer modularen Plattform für mehr als zehn Unilever-Marken gearbeitet. Später habe ich bei Patrick &amp; Friends Shop- und Website-Projekte von der Anforderungsklärung bis zum Go-live begleitet, unter anderem im Umfeld von Shopify, Shopware und Spryker.</p>' +
       '<p>Mit der Zeit lag mein Schwerpunkt immer stärker an den Schnittstellen. Ich habe Anforderungen mit Kunden und Design geklärt, technische Abhängigkeiten mit Frontend, Backend und externen Partnern abgestimmt und Qualitätssicherung sowie Releases begleitet. Dabei habe ich gemerkt, dass meine größte Stärke darin liegt, <mark>Komplexität zu reduzieren</mark> und dafür zu sorgen, dass ein Team auf einer klaren Entscheidungsgrundlage arbeiten kann.</p>' +
       '<p>Den Wechsel in Richtung Product Ownership habe ich deshalb bewusst vorbereitet und durch meine Weiterbildung im AI Project Management um Product Lifecycle, Requirements Engineering, agile Methoden und Business Cases ergänzt.</p>' +
       '<p>An der Rolle bei Avocadostore und Hood finde ich besonders spannend, dass zwei unterschiedliche Marktplätze technologisch weiterentwickelt werden. Ich bringe die technische Erfahrung und die strukturierte Arbeitsweise mit, um Anforderungen zu bewerten, einen belastbaren Backlog aufzubauen und das Entwicklungsteam durch die Umsetzung zu führen.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich verbinde mehr als zehn Jahre E-Commerce und Softwareentwicklung mit Erfahrung in Anforderungsklärung, Koordination und Delivery. Ich habe Shop-, Website- und Plattformprojekte von der ersten Klärung bis zum Go-live begleitet und weiß, welche Informationen Entwickler für gute Entscheidungen brauchen.</p>' +
       '<p>Jetzt möchte ich diese Erfahrung in einer <mark>Product-Owner-Rolle bündeln</mark> und für die Weiterentwicklung von Avocadostore und Hood einsetzen.</p>' +
     '</div>' +
     '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Sprechhinweis</p>' +
     '<div class="lead">Der Pitch braucht vier sichere Punkte: Herkunft aus der technischen Umsetzung, gewachsene Schnittstellenverantwortung, bewusster Rollenwechsel und konkreter Nutzen für zwei Marktplätze. Langsam sprechen. Nach jedem Abschnitt kurz Luft holen.</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from frontend development and spent more than ten years delivering e-commerce projects, websites, and relaunches. At deepblue, I worked on a modular platform for more than ten Unilever brands. Later, at Patrick &amp; Friends, I accompanied shop and website projects from requirements clarification through to go-live, including work with Shopify, Shopware, and Spryker.</p>' +
       '<p>Over time, my focus increasingly shifted to the interfaces. I clarified requirements with clients and design, aligned technical dependencies with frontend, backend, and external partners, and accompanied QA and releases. I noticed that my biggest strength lies in <mark>reducing complexity</mark> and making sure a team can work from a clear decision basis.</p>' +
       '<p>I deliberately prepared the shift toward product ownership, rounding it out with my AI Project Management training in product lifecycle, requirements engineering, agile methods, and business cases.</p>' +
       '<p>What I find especially exciting about the role at Avocadostore and Hood is that two different marketplaces are being developed technologically. I bring the technical experience and structured way of working needed to assess requirements, build a solid backlog, and lead the development team through delivery.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I combine more than ten years of e-commerce and software development with experience in requirements clarification, coordination, and delivery. I\'ve accompanied shop, website, and platform projects from initial clarification through to go-live, and I know what information developers need to make good decisions.</p>' +
       '<p>Now I want to bundle this experience into a <mark>Product Owner role</mark> and put it to work developing Avocadostore and Hood.</p>' +
     '</div>' +
     '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Delivery Notes</p>' +
     '<div class="lead">The pitch needs four solid points: origin in technical delivery, grown interface responsibility, a deliberate role shift, and concrete value for two marketplaces. Speak slowly. Take a short breath after each section.</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Technische Machbarkeit früh einordnen</div><div class="b">Ich erkenne Abhängigkeiten und Plattformgrenzen, bevor ein Wunsch als einfache Aufgabe im Backlog landet. Beleg: Patrick &amp; Friends, Anforderungen in Projekten mit Shopify, Shopware und Spryker geklärt. Wirkung: Alternativen lassen sich mit Aufwand, Folgen und offenen Fragen erklären.</div></div>' +
    '<div class="c"><div class="t">Anforderungen verständlich und umsetzbar machen</div><div class="b">Ich reiche Anforderungen nicht einfach weiter, sondern kläre Ziel, Nutzungssituation und technische Voraussetzungen. Beleg: Vermittlung zwischen Kunden, Design, Frontend, Backend und externen Partnern bei Shop- und Relaunch-Projekten. Wirkung: Entwickler erhalten eine verlässlichere Grundlage.</div></div>' +
    '<div class="c"><div class="t">Komplexität über mehrere Beteiligte zusammenhalten</div><div class="b">Beleg: deepblue — Websites, Relaunches und Promotions für mehr als zehn Unilever-Marken auf einer modularen Plattform. Wirkung: Ich unterscheide wiederkehrende Anforderungen von echten Sonderfällen.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Schwächen und sichere Antworten</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Ich spreche Unklarheiten und Risiken meist direkt an. Das kann in einer neuen Runde härter wirken als beabsichtigt. Deshalb achte ich bewusst auf Zeitpunkt und Formulierung — mein Ziel ist eine klare Entscheidung, nicht das Rechthaben.</li>' +
    '<li><b>Trockener Humor:</b> Mein Humor ist manchmal sehr trocken und gelegentlich sarkastisch. In einem vertrauten Team kann das verbinden; in neuen oder angespannten Situationen halte ich mich damit zurück.</li>' +
    '<li><b>Locker bei passender Gesprächsatmosphäre:</b> Meine ungefährlichste Schwäche ist Kinderschokolade. Die gefährdet höchstens den Vorrat im Büro.</li>' +
    '<li><b>Fachliche Lücke nur auf ausdrückliche Nachfrage:</b> Ich hatte bisher keinen formalen Product-Owner-Titel und noch keine alleinige Roadmap- oder Budgetverantwortung. Für Produktmetriken und die wirtschaftliche Bewertung will ich zu Beginn bewusst eng mit Management, Marketing und Analytics arbeiten.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Assessing technical feasibility early</div><div class="b">I spot dependencies and platform limits before a request lands in the backlog as a simple task. Evidence: Patrick &amp; Friends — clarified requirements on Shopify, Shopware, and Spryker projects. Impact: I can explain alternatives with their effort, consequences, and open questions.</div></div>' +
    '<div class="c"><div class="t">Making requirements understandable and actionable</div><div class="b">I don\'t just pass requirements along — I clarify goal, usage context, and technical prerequisites. Evidence: mediating between clients, design, frontend, backend, and external partners on shop and relaunch projects. Impact: developers get a more reliable basis.</div></div>' +
    '<div class="c"><div class="t">Holding complexity together across stakeholders</div><div class="b">Evidence: deepblue — websites, relaunches, and promotions for more than ten Unilever brands on a modular platform. Impact: I can tell recurring requirements apart from genuine edge cases.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Weaknesses and Safe Answers</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> I usually address ambiguity and risk directly. That can land harder than intended in a new group, so I\'m deliberate about timing and phrasing — my goal is a clear decision, not being right.</li>' +
    '<li><b>Dry humor:</b> my humor is sometimes very dry and occasionally sarcastic. With a team I trust it can be a connector; in new or tense situations I hold back.</li>' +
    '<li><b>The light answer, when the mood fits:</b> my least dangerous weakness is Kinderschokolade (chocolate) — it endangers, at most, the office supply.</li>' +
    '<li><b>A domain gap, only on explicit request:</b> I haven\'t had a formal Product Owner title so far, nor sole roadmap or budget ownership. For product metrics and commercial assessment, I want to deliberately work closely with management, marketing, and analytics at the start.</li>' +
    '</ul>';

  // ===== 4 · Business Model & Target Role =====
  CONTENT.de[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">The Platform Group</p>' +
    '<p>The Platform Group beschreibt sich als Softwareunternehmen für Plattformlösungen. Nach eigenen Angaben betreibt die Gruppe 33 Plattformen in 28 Branchen; angeschlossene Händler und Hersteller können ihre Produkte über mehr als 50 Onlinekanäle anbieten. Zur Leistung gehören Software, Marketing, Logistik, Payment und Kundenservice.</p>' +
    '<p>Für die Product-Owner-Rolle bedeutet das: Produktentscheidungen müssen nicht nur Nutzerbedürfnisse berücksichtigen, sondern auch Händlerprozesse, technische Wiederverwendung, Betriebskosten und die wirtschaftlichen Ziele der Gruppe.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Avocadostore</p>' +
    '<p>Gegründet 2010 in Hamburg, Marktplatz für nachhaltige Produkte. TPG übernahm 2024 die Mehrheit; zum Übernahmezeitpunkt rund 1.500 Händler und Marken angebunden. Für das Produkt sind Wachstum und Vertrauen gleichzeitig wichtig — neue Funktionen dürfen die Nachhaltigkeitskriterien und die Markenglaubwürdigkeit nicht verwässern.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Hood</p>' +
    '<p>Gegründet 1999, 2024 vollständig von TPG übernommen; zum Übernahmezeitpunkt mehr als 4.900 aktive Händler in über 20 Warenkategorien. Positioniert sich als günstiger, fairer Marktplatz für kleine und mittlere Händler. Produktseitig wahrscheinlich relevant: Händler-Onboarding, Artikeldaten, Suche und Filter, Zahlungs- und Bestellprozesse, Schnittstellen zu Warenwirtschaft und Multichannel-Systemen sowie Vertrauen und Sicherheit.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Warum ein gemeinsamer Verbund interessant ist</p>' +
    '<p>Beide Unternehmen sind Marktplätze, aber ihre Produktversprechen unterscheiden sich. Gemeinsame technische Grundlagen können sinnvoll sein, wenn die jeweilige Marke und Nutzerführung erhalten bleiben.</p>' +
    '<div class="lead">Arbeitshypothese fürs Gespräch: Der Verbund sucht eine Person, die operative Produktarbeit stabilisiert und gleichzeitig prüft, wo Prozesse oder technische Komponenten gemeinsam genutzt werden können. Als Frage formulieren, nicht als Tatsache darstellen.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Anforderungen der Stelle und meine Belege</p>' +
    '<table class="info">' +
    '<tr><th>Gesucht</th><th>Mein belastbarer Bezug</th></tr>' +
    '<tr><td class="k">Entwicklungsprozess von der Idee bis zum Go-live steuern</td><td>Shop-, Website- und Relaunch-Projekte bei Patrick &amp; Friends von der Klärung bis zum Go-live begleitet.</td></tr>' +
    '<tr><td class="k">Anforderungen sammeln, bewerten und priorisieren</td><td>Kunden, Design und technische Beteiligte zusammengebracht und Anforderungen in umsetzbare Pakete übersetzt.</td></tr>' +
    '<tr><td class="k">Software Engineering Team funktional führen</td><td>Keine formale Führungsrolle; belastbar sind fachliche Orientierung, technische Klärung, Reviews, Mentoring und Koordination.</td></tr>' +
    '<tr><td class="k">Produktstrategie und Roadmap mit dem Management entwickeln</td><td>Noch keine vollständige Roadmap-Verantwortung; Erfahrung mit Machbarkeit, Abhängigkeiten und schrittweiser Delivery ist anschlussfähig.</td></tr>' +
    '<tr><td class="k">Backlog und User Stories pflegen</td><td>In der Umsetzung mit Jira und Confluence gearbeitet; Weiterbildung vertiefte Requirements Engineering, User Stories und agile Delivery.</td></tr>' +
    '<tr><td class="k">Ganzheitliche Sicht auf Kundin, Markt und Technologie</td><td>E-Commerce-Erfahrung aus Agentur, Plattform und Shop-Projekten; Markt- und Geschäftszahlen will ich systematischer einbeziehen.</td></tr>' +
    '<tr><td class="k">Technische und fachliche Sparringspartnerin sein</td><td>Langjährige Frontend-Erfahrung sowie Abstimmung mit Backend, Design, Kunden und externen Partnern.</td></tr>' +
    '</table>';

  CONTENT.en[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">The Platform Group</p>' +
    '<p>The Platform Group describes itself as a software company for platform solutions. By its own account, the group operates 33 platforms across 28 industries; affiliated merchants and manufacturers can offer their products across more than 50 online channels. Its services include software, marketing, logistics, payment, and customer service.</p>' +
    '<p>For the Product Owner role, that means: product decisions have to consider not just user needs, but also merchant processes, technical reuse, operating costs, and the group\'s commercial goals.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Avocadostore</p>' +
    '<p>Founded in 2010 in Hamburg, a marketplace for sustainable products. TPG took a majority stake in 2024; at the time of acquisition, around 1,500 merchants and brands were connected. For the product, growth and trust matter equally — new features must not dilute the sustainability criteria or brand credibility.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Hood</p>' +
    '<p>Founded in 1999, fully acquired by TPG in 2024; at acquisition, more than 4,900 active merchants across more than 20 product categories. Positions itself as an affordable, fair marketplace for small and mid-sized merchants. Likely product priorities: merchant onboarding, product data, search and filtering, payment and order processes, interfaces to inventory and multichannel systems, and trust and safety.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Why the Combined Group Is Interesting</p>' +
    '<p>Both companies are marketplaces, but their product promises differ. Shared technical foundations can make sense as long as each brand and its user experience stay intact.</p>' +
    '<div class="lead">Working hypothesis for the interview: the combined group is looking for someone who stabilizes operational product work while also checking where processes or technical components can be shared. Phrase it as a question, not a stated fact.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Evidence</p>' +
    '<table class="info">' +
    '<tr><th>Requirement</th><th>My Solid Track Record</th></tr>' +
    '<tr><td class="k">Steer the development process from idea to go-live</td><td>Accompanied shop, website, and relaunch projects at Patrick &amp; Friends from clarification through go-live.</td></tr>' +
    '<tr><td class="k">Gather, assess, and prioritize requirements</td><td>Brought clients, design, and technical stakeholders together and translated requirements into actionable packages.</td></tr>' +
    '<tr><td class="k">Functionally lead the software engineering team</td><td>No formal leadership role; solid track record in subject-matter guidance, technical clarification, reviews, mentoring, and coordination.</td></tr>' +
    '<tr><td class="k">Develop product strategy and roadmap with management</td><td>No full roadmap ownership yet; experience with feasibility, dependencies, and incremental delivery is directly transferable.</td></tr>' +
    '<tr><td class="k">Maintain backlog and user stories</td><td>Worked with Jira and Confluence in delivery; further training deepened requirements engineering, user stories, and agile delivery.</td></tr>' +
    '<tr><td class="k">Holistic view of customer, market, and technology</td><td>E-commerce experience from agency, platform, and shop projects; want to bring market and business figures in more systematically.</td></tr>' +
    '<tr><td class="k">Be a technical and subject-matter sparring partner</td><td>Years of frontend experience plus alignment with backend, design, clients, and external partners.</td></tr>' +
    '</table>';

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Kein erfundener Erfolgsbericht: Wenn Ergebnis oder Kennzahl nicht dokumentiert sind, bleibt die Wirkung qualitativ.</div>' +
    '<div class="macc"><button class="macc-head">1 · Wie gehen Sie mit unklaren Anforderungen um <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich kläre zuerst Ziel, Nutzer und technische Voraussetzungen. Erst danach wird eine Anforderung zu einer umsetzbaren Aufgabe.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends kamen Anforderungen für Shop-, Website- und Relaunch-Projekte teilweise aus Kundenbriefings oder Designs. Technische Voraussetzungen und Abhängigkeiten waren darin nicht immer vollständig beschrieben.</div>' +
    '<div class="row"><b>Aufgabe:</b> Ich musste sicherstellen, dass Frontend, Backend und weitere Beteiligte dasselbe Verständnis hatten und die Umsetzung belastbar einschätzen konnten.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe offene Punkte gesammelt, die gewünschte Wirkung geklärt und Annahmen kenntlich gemacht. Anschließend habe ich die Abhängigkeiten mit den zuständigen Personen geprüft und die Anforderung in nachvollziehbare Arbeitspakete überführt.</div>' +
    '<div class="row"><b>Ergebnis:</b> Das Team arbeitete mit einem gemeinsamen Verständnis. Offene Entscheidungen waren sichtbar, technische Rückfragen entstanden früher statt erst in der Umsetzung.</div>' +
    '<div class="erg">Vor dem Gespräch ergänzen: ein konkretes Projekt, zwei typische Rückfragen und die gewählte Lösung.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Wie priorisieren Sie Anforderungen verschiedener Stakeholder <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich mache Kriterien und Zielkonflikte sichtbar. Die lauteste Stimme entscheidet nicht automatisch.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei der Arbeit für mehrere Unilever-Marken trafen individuelle Markenwünsche auf eine gemeinsame modulare Plattform.</div>' +
    '<div class="row"><b>Aufgabe:</b> Sonderwünsche mussten gegen Wiederverwendbarkeit, technische Konsistenz und den Nutzen für die jeweilige Marke abgewogen werden.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe zuerst geklärt, welches Problem die Anforderung löst. Danach habe ich geprüft, ob sie als wiederverwendbares Modul sinnvoll ist oder tatsächlich einen begründeten Sonderfall darstellt. Auswirkungen auf andere Marken und die Wartbarkeit habe ich transparent gemacht.</div>' +
    '<div class="row"><b>Ergebnis:</b> Anforderungen konnten in eine gemeinsame Plattformlogik eingeordnet werden. Die modulare Grundlage blieb nutzbar, während unterschiedliche Markenauftritte möglich waren.</div>' +
    '<div class="erg">Übertragung auf die Rolle: Für Avocadostore und Hood würde ich zusätzlich Kundennutzen, Händlernutzen, wirtschaftlichen Beitrag, Risiko und Aufwand als gemeinsame Kriterien nutzen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Wie führen Sie ein Entwicklungsteam ohne disziplinarische Verantwortung <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Funktionale Führung braucht Klarheit, nachvollziehbare Entscheidungen und Respekt vor der Expertise des Teams.</mark></div>' +
    '<div class="row"><b>Situation:</b> In meinen Projekten arbeiteten Frontend, Backend, Design, Kunden und externe Partner zusammen. Ich hatte nicht für alle Beteiligten eine formale Weisungsbefugnis.</div>' +
    '<div class="row"><b>Aufgabe:</b> Trotzdem mussten Zuständigkeiten, offene Fragen und die Reihenfolge der Arbeit klar sein.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe fachliche Ziele und Rahmenbedingungen verständlich gemacht, technische Einschätzungen aktiv eingeholt und Entscheidungen dokumentiert. Bei Risiken habe ich nicht vorgegeben, wie Entwickler eine Lösung bauen sollen, sondern gemeinsam geklärt, welche Option unter den gegebenen Bedingungen sinnvoll ist.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Beteiligten konnten eigenständig arbeiten und wussten, wann eine Entscheidung oder Abstimmung nötig war.</div>' +
    '<div class="erg">Wichtig: nicht behaupten, bereits ein komplettes Engineering-Team geführt zu haben.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Wie reagieren Sie auf einen Zielkonflikt zwischen Termin, Qualität und Umfang <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich zerlege den Konflikt und mache die Folgen jeder Option entscheidbar.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Shop- und Relaunch-Projekten mussten Wünsche, technische Abhängigkeiten und ein geplanter Go-live zusammengebracht werden.</div>' +
    '<div class="row"><b>Aufgabe:</b> Wenn nicht alles gleichzeitig umsetzbar war, brauchte das Team eine klare Entscheidung über Umfang oder Reihenfolge.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich habe den unverzichtbaren Kern von ergänzenden Wünschen getrennt, mit den technischen Beteiligten Risiken und Abhängigkeiten bewertet und die Optionen mit ihren Folgen dargestellt. Die Entscheidung wurde dokumentiert, zurückgestellte Punkte blieben sichtbar.</div>' +
    '<div class="row"><b>Ergebnis:</b> Das Team konnte auf einen klaren Umfang hinarbeiten. Qualitätsfragen und spätere Ergänzungen gingen nicht zwischen mündlichen Absprachen verloren.</div>' +
    '<div class="erg">Vor dem Gespräch ergänzen: ein echtes Beispiel mit Termin, reduziertem Umfang und späterem Schritt.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Wie würden Sie die Roadmap für zwei Plattformen aufbauen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich würde zuerst Ziele, gemeinsame Grundlagen und markenspezifische Bedürfnisse trennen.</mark></div>' +
    '<div class="row"><b>Situation:</b> Avocadostore und Hood sind beide Marktplätze, bedienen aber unterschiedliche Erwartungen von Kundinnen, Kunden und Händlern.</div>' +
    '<div class="row"><b>Aufgabe:</b> Eine gemeinsame Roadmap muss Synergien nutzen, ohne die Produktidentität einer Plattform zu verwässern.</div>' +
    '<div class="row"><b>Vorgehen:</b> In den ersten Wochen bestehende Ziele, Kennzahlen, technische Systeme und laufende Verpflichtungen verstehen. Danach Themen in drei Gruppen sortieren: gemeinsame Plattformgrundlagen, Avocadostore-spezifische und Hood-spezifische Anforderungen. Priorisiert würde anhand von Nutzer- und Händlernutzen, wirtschaftlichem Beitrag, Risiko, Aufwand und strategischer Relevanz.</div>' +
    '<div class="erg">Das ist ein Vorgehensvorschlag, kein bereits erzieltes Ergebnis.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Erzählen Sie von einer Veränderung oder einem neuen Standard <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Standards funktionieren, wenn sie an echter Arbeit erklärt und gemeinsam angewendet werden.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends habe ich Kolleginnen und Kollegen eingearbeitet und Wissen zu Frontend-Komponenten, Qualität und Projektabläufen weitergegeben.</div>' +
    '<div class="row"><b>Aufgabe:</b> Neue Teammitglieder sollten bestehende Strukturen verstehen und verlässlich damit arbeiten können.</div>' +
    '<div class="row"><b>Vorgehen:</b> Nicht nur Dokumentation übergeben, sondern Entscheidungen und Qualitätsanforderungen an konkreten Beispielen erklärt; Rückfragen und Abweichungen direkt am Projekt geklärt.</div>' +
    '<div class="row"><b>Ergebnis:</b> Wissen und Arbeitsweisen wurden nachvollziehbarer und weniger von einzelnen Personen abhängig.</div>' +
    '<div class="erg">Im Gespräch ein konkretes Beispiel nennen, damit die Antwort nicht abstrakt bleibt.</div>' +
    '</div></div></div>';

  CONTENT.en[5] = '<div class="lead">Not an invented success story: when a result or metric isn\'t documented, the impact stays qualitative.</div>' +
    '<div class="macc"><button class="macc-head">1 · How do you handle unclear requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I clarify the goal, users, and technical prerequisites first. Only then does a requirement become an actionable task.</mark></div>' +
    '<div class="row"><b>Situation:</b> at Patrick &amp; Friends, requirements for shop, website, and relaunch projects sometimes came from client briefs or designs. Technical prerequisites and dependencies weren\'t always fully described in them.</div>' +
    '<div class="row"><b>Task:</b> I had to make sure frontend, backend, and other stakeholders shared the same understanding and could reliably assess delivery.</div>' +
    '<div class="row"><b>Action:</b> I collected open points, clarified the intended effect, and flagged assumptions. Then I checked dependencies with the responsible people and turned the requirement into traceable work packages.</div>' +
    '<div class="row"><b>Result:</b> the team worked from a shared understanding. Open decisions were visible, and technical follow-up questions surfaced earlier instead of only during delivery.</div>' +
    '<div class="erg">Add before the interview: one concrete project, two typical follow-up questions, and the solution chosen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · How do you prioritize requirements from different stakeholders <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I make criteria and trade-offs visible. The loudest voice doesn\'t automatically win.</mark></div>' +
    '<div class="row"><b>Situation:</b> working across several Unilever brands, individual brand requests met a shared modular platform.</div>' +
    '<div class="row"><b>Task:</b> special requests had to be weighed against reusability, technical consistency, and the benefit to the specific brand.</div>' +
    '<div class="row"><b>Action:</b> I first clarified which problem the requirement solved. Then I checked whether it made sense as a reusable module or was genuinely a justified edge case, and made the impact on other brands and maintainability transparent.</div>' +
    '<div class="row"><b>Result:</b> requirements could be placed into a shared platform logic. The modular foundation stayed usable while different brand experiences remained possible.</div>' +
    '<div class="erg">Applied to this role: for Avocadostore and Hood, I\'d additionally use customer value, merchant value, commercial contribution, risk, and effort as shared criteria.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · How do you lead a development team without disciplinary authority <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>Functional leadership needs clarity, traceable decisions, and respect for the team\'s expertise.</mark></div>' +
    '<div class="row"><b>Situation:</b> in my projects, frontend, backend, design, clients, and external partners worked together. I didn\'t have formal authority over every stakeholder.</div>' +
    '<div class="row"><b>Task:</b> ownership, open questions, and the order of work still had to be clear.</div>' +
    '<div class="row"><b>Action:</b> I made subject-matter goals and constraints understandable, actively gathered technical assessments, and documented decisions. On risk, I didn\'t dictate how developers should build a solution — I clarified together which option made sense given the constraints.</div>' +
    '<div class="row"><b>Result:</b> stakeholders could work independently and knew when a decision or alignment was needed.</div>' +
    '<div class="erg">Important: don\'t claim to have already led a complete engineering team.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · How do you respond to a trade-off between deadline, quality, and scope <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I break the conflict apart and make the consequences of each option decidable.</mark></div>' +
    '<div class="row"><b>Situation:</b> on shop and relaunch projects, requests, technical dependencies, and a planned go-live had to be reconciled.</div>' +
    '<div class="row"><b>Task:</b> when not everything was feasible at once, the team needed a clear decision on scope or order.</div>' +
    '<div class="row"><b>Action:</b> I separated the indispensable core from nice-to-have requests, assessed risks and dependencies with the technical stakeholders, and presented the options with their consequences. The decision was documented, and deferred points stayed visible.</div>' +
    '<div class="row"><b>Result:</b> the team could work toward a clear scope. Quality questions and later additions didn\'t get lost between verbal agreements.</div>' +
    '<div class="erg">Add before the interview: a real example with a deadline, reduced scope, and a later step.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · How would you build the roadmap for two platforms <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I\'d first separate goals, shared foundations, and brand-specific needs.</mark></div>' +
    '<div class="row"><b>Situation:</b> Avocadostore and Hood are both marketplaces, but they serve different expectations from customers and merchants.</div>' +
    '<div class="row"><b>Task:</b> a shared roadmap has to capture synergies without diluting either platform\'s product identity.</div>' +
    '<div class="row"><b>Action:</b> in the first weeks, understand existing goals, metrics, technical systems, and current commitments. Then sort topics into three groups: shared platform foundations, Avocadostore-specific requirements, and Hood-specific requirements. Prioritize by customer and merchant value, commercial contribution, risk, effort, and strategic relevance.</div>' +
    '<div class="erg">This is a proposed approach, not an already-achieved result.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Tell me about a change or a new standard <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>Standards work when they\'re explained on real work and applied together.</mark></div>' +
    '<div class="row"><b>Situation:</b> at Patrick &amp; Friends, I onboarded colleagues and passed on knowledge about frontend components, quality, and project workflows.</div>' +
    '<div class="row"><b>Task:</b> new team members needed to understand existing structures and work with them reliably.</div>' +
    '<div class="row"><b>Action:</b> instead of just handing over documentation, I explained decisions and quality requirements using concrete examples, and resolved questions and deviations directly on the project.</div>' +
    '<div class="row"><b>Result:</b> knowledge and ways of working became more traceable and less dependent on individual people.</div>' +
    '<div class="erg">Name a concrete example in the interview so the answer doesn\'t stay abstract.</div>' +
    '</div></div></div>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Sie waren noch nie offiziell Product Owner. Warum sollten wir Ihnen die Rolle geben?“</div>' +
    '<p>Der Titel ist neu, große Teile der Arbeit nicht. Ich kläre seit Jahren Anforderungen, bewerte technische Machbarkeit, koordiniere Beteiligte und begleite Umsetzung und Go-lives. Als Entwicklerin weiß ich außerdem, wie stark die Qualität von Delivery davon abhängt, ob Ziele und Entscheidungen klar sind. Neu sind für mich die formale Gesamtverantwortung für Backlog und Roadmap sowie die stärkere Arbeit mit Produktkennzahlen. Genau diesen nächsten Verantwortungsbereich suche ich bewusst.</p>' +
    '<div class="lead">„Haben Sie schon ein Engineering-Team geführt?“</div>' +
    '<p>Nicht als disziplinarische Führungskraft und nicht unter dem Titel Product Owner. Ich habe Entwickler, Design, Kunden und externe Partner fachlich zusammengebracht, technische Entscheidungen vorbereitet und Kolleginnen und Kollegen eingearbeitet. Mein Führungsverständnis ist klar: Ziele und Prioritäten erklären, Expertise einbeziehen, Entscheidungen treffen und Hindernisse aus dem Weg räumen.</p>' +
    '<div class="lead">„Wie strategisch haben Sie bisher gearbeitet?“</div>' +
    '<p>Mein Schwerpunkt lag bisher näher an Umsetzung und Delivery. Strategisch relevant waren Entscheidungen über Plattformstrukturen, Wiederverwendbarkeit, technische Machbarkeit und die Reihenfolge von Arbeit. Eine vollständige Produktstrategie habe ich bisher nicht allein verantwortet, bringe aber die technische und operative Grundlage mit und möchte die Arbeit mit Markt, Kennzahlen und Management systematisch erweitern.</p>' +
    '<div class="lead">„Welche Produktkennzahlen würden Sie beobachten?“</div>' +
    '<p>Ich würde nicht mit einer fertigen Liste starten, ohne das aktuelle Ziel zu kennen. Für einen Marktplatz können Conversion Rate, Abbruchraten im Kaufprozess, aktive Händler, Time to First Listing, Qualität und Vollständigkeit von Produktdaten, Sucherfolg, Wiederkaufrate, Retouren, Supportkontakte und technische Stabilität relevant sein. Entscheidend ist, welche Kennzahl zum jeweiligen Problem passt und ob die Daten verlässlich sind.</p>' +
    '<div class="lead">„Wie würden Sie mit Nachhaltigkeit und Wachstum umgehen?“</div>' +
    '<p>Bei Avocadostore ist Nachhaltigkeit Teil des Produktversprechens. Wachstum darf dieses Vertrauen nicht beschädigen. Ich würde bei neuen Händlern, Sortimenten oder Funktionen prüfen, welche Kriterien unverhandelbar sind und wie sie für Kundinnen und Kunden verständlich sichtbar bleiben. Wirtschaftliche Ziele gehören trotzdem in die Entscheidung — die Aufgabe besteht darin, Auswirkungen transparent zu machen, nicht so zu tun, als gäbe es keinen Zielkonflikt.</p>' +
    '<div class="lead">„Warum Avocadostore und Hood?“</div>' +
    '<p>Mich interessiert die Kombination aus E-Commerce-Produktarbeit und echter Plattformkomplexität. Beide Marktplätze verbinden Käufer und Händler, haben aber unterschiedliche Positionierungen. Es geht nicht nur um einzelne Features, sondern um die Frage, welche technischen Grundlagen gemeinsam funktionieren und wo die jeweilige Marke eine eigene Lösung braucht. Meine Erfahrung mit modularen Strukturen und unterschiedlichen Markenanforderungen passt genau zu dieser Aufgabe.</p>';

  CONTENT.en[6] = '<div class="lead">"You\'ve never officially been a Product Owner. Why should we give you the role?"</div>' +
    '<p>The title is new, most of the work isn\'t. I\'ve clarified requirements, assessed technical feasibility, coordinated stakeholders, and accompanied delivery and go-lives for years. As a developer, I also know how much delivery quality depends on clear goals and decisions. What\'s new for me is formal overall ownership of backlog and roadmap, plus deeper work with product metrics — that\'s exactly the next scope of responsibility I\'m deliberately going for.</p>' +
    '<div class="lead">"Have you led an engineering team before?"</div>' +
    '<p>Not as a disciplinary manager, and not under the Product Owner title. I\'ve brought developers, design, clients, and external partners together on subject matter, prepared technical decisions, and onboarded colleagues. My understanding of leadership is clear: explain goals and priorities, bring in expertise, make decisions, and remove obstacles.</p>' +
    '<div class="lead">"How strategically have you worked so far?"</div>' +
    '<p>My focus so far has been closer to delivery. Strategically relevant were decisions about platform structures, reusability, technical feasibility, and work sequencing. I haven\'t owned a full product strategy alone so far, but I bring the technical and operational foundation and want to systematically expand my work with market, metrics, and management.</p>' +
    '<div class="lead">"Which product metrics would you track?"</div>' +
    '<p>I wouldn\'t start with a ready-made list without knowing the current goal. For a marketplace, conversion rate, checkout drop-off, active merchants, time to first listing, product data quality and completeness, search success, repeat purchase rate, returns, support contacts, and technical stability can all be relevant. What matters is which metric fits the problem at hand, and whether the data is reliable.</p>' +
    '<div class="lead">"How would you balance sustainability and growth?"</div>' +
    '<p>At Avocadostore, sustainability is part of the product promise. Growth must not damage that trust. For new merchants, assortments, or features, I\'d check which criteria are non-negotiable and how they stay understandably visible to customers. Commercial goals still belong in the decision — the job is to make the trade-offs transparent, not pretend there isn\'t one.</p>' +
    '<div class="lead">"Why Avocadostore and Hood?"</div>' +
    '<p>I\'m interested in the combination of e-commerce product work and genuine platform complexity. Both marketplaces connect buyers and merchants but have different positioning. It\'s not just about individual features — it\'s about which technical foundations work well shared, and where each brand needs its own solution. My experience with modular structures and differing brand requirements fits this task exactly.</p>';

  // ===== 7 · First 90 Days Plan =====
  CONTENT.de[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Erste 30 Tage · verstehen</p>' +
    '<ul class="tight">' +
    '<li>Gespräche mit Management, Entwicklung, UX, Marketing, Kundenservice und Händlerbetreuung.</li>' +
    '<li>Bestehende Roadmap, Backlog, Kennzahlen und technische Architektur verstehen.</li>' +
    '<li>Aktuelle Verpflichtungen, Störungen und wiederkehrende Supportthemen erfassen.</li>' +
    '<li>Unterschiede und Gemeinsamkeiten zwischen Avocadostore und Hood sichtbar machen.</li>' +
    '<li>Entscheidungswege und Verantwortlichkeiten klären.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 31–60 · ordnen</p>' +
    '<ul class="tight">' +
    '<li>Backlog nach nachvollziehbaren Kriterien prüfen.</li>' +
    '<li>Ziele und Erfolgskriterien für die wichtigsten Themen schärfen.</li>' +
    '<li>Abhängigkeiten und technische Risiken transparent machen.</li>' +
    '<li>Gemeinsame Plattformthemen von markenspezifischen Themen trennen.</li>' +
    '<li>Arbeitsrhythmus mit Entwicklung und Stakeholdern stabilisieren.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 61–90 · fokussieren</p>' +
    '<ul class="tight">' +
    '<li>Eine belastbare Priorisierung mit Management und Team abstimmen.</li>' +
    '<li>Erste Verbesserungen mit klarem Nutzen umsetzen oder vorbereiten.</li>' +
    '<li>Produktkennzahlen und Entscheidungsgrundlagen vereinbaren.</li>' +
    '<li>Roadmap so aufbereiten, dass Ziele, Reihenfolge und Abhängigkeiten verständlich sind.</li>' +
    '</ul>';

  CONTENT.en[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">First 30 Days · Understand</p>' +
    '<ul class="tight">' +
    '<li>Conversations with management, development, UX, marketing, customer service, and merchant support.</li>' +
    '<li>Understand the existing roadmap, backlog, metrics, and technical architecture.</li>' +
    '<li>Capture current commitments, incidents, and recurring support topics.</li>' +
    '<li>Surface differences and commonalities between Avocadostore and Hood.</li>' +
    '<li>Clarify decision paths and ownership.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 31–60 · Organize</p>' +
    '<ul class="tight">' +
    '<li>Review the backlog against traceable criteria.</li>' +
    '<li>Sharpen goals and success criteria for the most important topics.</li>' +
    '<li>Make dependencies and technical risks transparent.</li>' +
    '<li>Separate shared platform topics from brand-specific ones.</li>' +
    '<li>Stabilize the working rhythm with development and stakeholders.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 61–90 · Focus</p>' +
    '<ul class="tight">' +
    '<li>Align a solid prioritization with management and the team.</li>' +
    '<li>Implement or prepare initial improvements with clear value.</li>' +
    '<li>Agree on product metrics and decision-making basis.</li>' +
    '<li>Prepare the roadmap so goals, sequencing, and dependencies are understandable.</li>' +
    '</ul>';

  // ===== 8 · Questions for the Employer =====
  CONTENT.de[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Zur Rolle</p>' +
    '<ul class="tight">' +
    '<li>Woran würden Sie nach sechs Monaten erkennen, dass die Person in dieser Rolle erfolgreich ist?</li>' +
    '<li>Welche Entscheidungen trifft der Product Owner selbst und welche gemeinsam mit dem Management?</li>' +
    '<li>Wie groß ist das Entwicklungsteam und welche Rollen gehören dazu?</li>' +
    '<li>Was bedeutet funktionale Führung in Ihrem Alltag konkret?</li>' +
    '<li>Warum wird die Rolle gerade jetzt für den Verbund ausgeschrieben?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Zu Avocadostore und Hood</p>' +
    '<ul class="tight">' +
    '<li>Arbeiten beide Plattformen bereits mit einem gemeinsamen Entwicklungsteam oder gemeinsamen technischen Komponenten?</li>' +
    '<li>Welche Gemeinsamkeiten sollen bewusst genutzt werden, und wo sollen die Plattformen getrennt bleiben?</li>' +
    '<li>Was sind derzeit die wichtigsten Probleme für Händler, und was die wichtigsten für Käufer?</li>' +
    '<li>Welche Rolle spielen die Nachhaltigkeitskriterien bei Produkt- und Roadmap-Entscheidungen?</li>' +
    '<li>Welche größeren Produkt- oder Technologieentscheidungen stehen in den nächsten zwölf Monaten an?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Zu Arbeitsweise und Kennzahlen</p>' +
    '<ul class="tight">' +
    '<li>Wie entstehen heute Roadmap und Prioritäten?</li>' +
    '<li>Welche Kennzahlen nutzen Sie aktuell für Produktentscheidungen?</li>' +
    '<li>Wie arbeiten Product, UX, Entwicklung, Marketing und Kundenservice zusammen?</li>' +
    '<li>Wie viel des Backlogs entfällt auf neue Funktionen, technische Weiterentwicklung und laufenden Betrieb?</li>' +
    '<li>Wie sind Hybridarbeit und gemeinsame Teamtage konkret organisiert?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gehalt</p>' +
    '<div class="lead">In der Bewerbung habe ich 72.000 Euro brutto jährlich genannt — diese Zahl sollte ich konsistent vertreten. Formulierung: „Meine Gehaltsvorstellung liegt wie in meiner Bewerbung angegeben bei 72.000 Euro brutto jährlich. Für mich zählt das Gesamtpaket aus Verantwortung, Entwicklungsmöglichkeiten und Rahmenbedingungen. Auf dieser Grundlage halte ich die Größenordnung weiterhin für passend.“</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">Falls nach dem Mindestgehalt gefragt wird: nicht spontan nach unten verhandeln. Erst nach Aufgabenbreite, Team und Gesamtpaket fragen.</p>';

  CONTENT.en[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">About the Role</p>' +
    '<ul class="tight">' +
    '<li>What would tell you, after six months, that the person in this role is succeeding?</li>' +
    '<li>Which decisions does the Product Owner make alone, and which jointly with management?</li>' +
    '<li>How big is the development team, and which roles are on it?</li>' +
    '<li>What does functional leadership actually mean day to day here?</li>' +
    '<li>Why is the role being opened for the combined group right now?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">About Avocadostore and Hood</p>' +
    '<ul class="tight">' +
    '<li>Do both platforms already share a development team or shared technical components?</li>' +
    '<li>Which commonalities should be deliberately leveraged, and where should the platforms stay separate?</li>' +
    '<li>What are currently the biggest problems for merchants, and the biggest for buyers?</li>' +
    '<li>What role do the sustainability criteria play in product and roadmap decisions?</li>' +
    '<li>What major product or technology decisions are coming up in the next twelve months?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">About Ways of Working and Metrics</p>' +
    '<ul class="tight">' +
    '<li>How is the roadmap and prioritization created today?</li>' +
    '<li>Which metrics do you currently use for product decisions?</li>' +
    '<li>How do product, UX, development, marketing, and customer service work together?</li>' +
    '<li>How much of the backlog is new features versus technical improvement versus keeping the lights on?</li>' +
    '<li>How are hybrid work and shared team days actually organized?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary</p>' +
    '<div class="lead">I stated €72,000 gross per year in my application — I should hold that number consistently. Phrasing: "My salary expectation, as stated in my application, is €72,000 gross per year. For me, what counts is the total package of responsibility, development opportunities, and working conditions. On that basis, I still consider this range appropriate."</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">If asked about a minimum: don\'t negotiate down spontaneously. Ask about scope, team, and the total package first.</p>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<div class="lead">Diese Unterlage bereitet mich auf die Rolle im Verbund von Avocadostore und Hood vor. Mein stärkstes Argument ist die Verbindung aus mehr als zehn Jahren technischer E-Commerce-Praxis, Erfahrung an den Schnittstellen und einem realistischen Blick auf Delivery.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Letzte Vorbereitung am Abend</p>' +
    '<ul class="tight checklist">' +
    '<li>Einen konkreten Fall für eine unklare Anforderung festlegen.</li>' +
    '<li>Einen echten Zielkonflikt mit reduziertem Umfang oder verschobener Arbeit auswählen.</li>' +
    '<li>Ein Beispiel für Mentoring oder einen eingeführten Standard vorbereiten.</li>' +
    '<li>Zwei Fragen zur Verbindung von Avocadostore und Hood markieren.</li>' +
    '<li>Stellenanzeige und eigenen Lebenslauf noch einmal lesen.</li>' +
    '<li><mark>Langsam antworten und zuerst den Kern der Frage beantworten.</mark></li>' +
    '<li><mark>Keine Ergebnisse oder Zahlen behaupten, die ich nicht belegen kann.</mark></li>' +
    '</ul>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Stellenanzeige The Platform Group, Job ID 2789940, abgerufen 28. September 2026; TPG Unternehmensprofil und Kennzahlen; TPG-Übernahme Avocadostore (16. Januar 2024) und Hood (16. Februar 2024); Hood „Über Hood"; versendeter Lebenslauf, Anschreiben und Stellenbewertung.</p>';

  CONTENT.en[9] = '<div class="lead">This document prepares me for the role across the Avocadostore and Hood group. My strongest argument is the combination of more than ten years of technical e-commerce practice, interface experience, and a realistic view of delivery.</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Final Prep the Evening Before</p>' +
    '<ul class="tight checklist">' +
    '<li>Settle on one concrete case of an unclear requirement.</li>' +
    '<li>Pick a real trade-off with reduced scope or deferred work.</li>' +
    '<li>Prepare one example of mentoring or a standard I introduced.</li>' +
    '<li>Flag two questions about the Avocadostore/Hood connection.</li>' +
    '<li>Re-read the job posting and my own CV.</li>' +
    '<li><mark>Answer slowly, and address the core of the question first.</mark></li>' +
    '<li><mark>Don\'t claim results or numbers I can\'t back up.</mark></li>' +
    '</ul>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: The Platform Group job posting, Job ID 2789940, retrieved September 28, 2026; TPG company profile and key figures; TPG acquisitions of Avocadostore (January 16, 2024) and Hood (February 16, 2024); Hood "About Hood"; submitted CV, cover letter, and role assessment.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · The Platform Group · Product Owner/Product Manager E-Commerce",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
