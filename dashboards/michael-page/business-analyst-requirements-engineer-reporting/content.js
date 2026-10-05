// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Business Analyst / Requirements Engineer<br>Michael Page · Team Reporting (Finanzdienstleistung, Hamburg)",
      role: "Business Analyst / Requirements Engineer, Team Reporting",
      location: "Hamburg",
      interviewDate: "noch offen",
      salaryAd: "81.000–99.000 €",
      salaryAsk: "88.000 €",
      salaryMin: "offen",
      introTitle: "Interviewvorbereitung",
      introText: 'Ich verbinde langjährige technische Umsetzungserfahrung mit sauberer Anforderungsarbeit, nachvollziehbarer Dokumentation und einem klaren Blick für <mark>Qualität und Abhängigkeiten</mark>.'
    },
    en: {
      roleSubtitle: "Business Analyst / Requirements Engineer<br>Michael Page · Reporting Team (Financial Services, Hamburg)",
      role: "Business Analyst / Requirements Engineer, Reporting Team",
      location: "Hamburg",
      interviewDate: "TBD",
      salaryAd: "€81,000–99,000",
      salaryAsk: "€88,000",
      salaryMin: "TBD",
      introTitle: "Interview Prep",
      introText: 'I combine years of hands-on technical delivery experience with clean requirements work, traceable documentation, and a clear eye for <mark>quality and dependencies</mark>.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"Michael Page & die Rolle", en:"Michael Page & the Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische Nachfragen & sichere Antworten", en:"Tough Questions & Safe Answers"},
    7: {de:"Plan für die ersten 90 Tage", en:"First 90 Days Plan"},
    8: {de:"Eigene Fragen an Michael Page", en:"Questions for Michael Page"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich verbinde langjährige technische Umsetzungserfahrung mit sauberer Anforderungsarbeit, nachvollziehbarer Dokumentation und einem klaren Blick für <mark>Qualität und Abhängigkeiten</mark>.</div>' +
    '<p>Ich komme aus der technischen Umsetzung digitaler Produkte. Mehr als zehn Jahre lang habe ich Websites, Shops und modulare Plattformen entwickelt und dabei zunehmend Verantwortung an den Schnittstellen übernommen: Anforderungen klären, technische Abhängigkeiten einordnen, unterschiedliche Perspektiven zusammenbringen, Tests strukturieren und Releases begleiten.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Wo komme ich her und wo will ich hin</p>' +
    '<p>Meine Entwicklungserfahrung bleibt mein Fundament. Mein Schwerpunkt verschiebt sich auf Analyse, Struktur und die Verbindung zwischen Fachseite und IT.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Ehrlich</p>' +
    '<div class="lead">Mein belastbarer Fit liegt in der Anforderungsanalyse, der Übersetzung zwischen Fachseite und technischer Umsetzung, der Qualitätssicherung sowie der Koordination unterschiedlicher Beteiligter. Reporting und Datenanalyse sind für mich kein langjähriger fachlicher Schwerpunkt. Das spreche ich offen an und zeige, welche übertragbare Erfahrung ich mitbringe und wie ich die fachliche Lücke strukturiert schließe.</div>';

  CONTENT.en[1] = '<div class="lead">I combine years of hands-on technical delivery experience with clean requirements work, traceable documentation, and a clear eye for <mark>quality and dependencies</mark>.</div>' +
    '<p>I come from technical delivery of digital products. For more than ten years, I\'ve built websites, shops, and modular platforms, taking on increasing responsibility at the interfaces along the way: clarifying requirements, assessing technical dependencies, bringing different perspectives together, structuring tests, and accompanying releases.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Where I Come From and Where I\'m Headed</p>' +
    '<p>My development background remains my foundation. My focus is shifting toward analysis, structure, and the connection between the business side and IT.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Honestly</p>' +
    '<div class="lead">My solid fit lies in requirements analysis, translating between business needs and technical delivery, quality assurance, and coordinating different stakeholders. Reporting and data analysis aren\'t a long-standing area of expertise for me. I address that openly and show what transferable experience I bring, and how I close that gap in a structured way.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre an E-Commerce-Projekten, Websites und technischen Plattformen gearbeitet. Bei deepblue war ich Teil eines Teams, das eine modulare Plattform für mehr als zehn Unilever-Marken betreut hat. Später habe ich bei Patrick &amp; Friends Shop-, Website- und Relaunch-Projekte von der Anforderungsklärung bis zum Go-live begleitet.</p>' +
       '<p>Mit der Zeit lag mein Schwerpunkt immer stärker an den Schnittstellen. Ich habe fachliche, gestalterische und technische Anforderungen geklärt, Machbarkeit und Abhängigkeiten mit Frontend, Backend und externen Partnern abgestimmt und Tests, Fehlerbehebung und Releases begleitet. Dadurch weiß ich aus eigener Erfahrung, welche Informationen ein Entwicklungsteam braucht und an welchen Stellen <mark>unklare Anforderungen später teuer werden</mark>.</p>' +
       '<p>Den Wechsel in Richtung Business Analysis und Requirements Engineering habe ich bewusst vorbereitet und meine Praxiserfahrung durch eine Weiterbildung im AI Project Management ergänzt — Requirements Engineering, Product Lifecycle, agile Delivery sowie Grundlagen zu Daten, MLOps und Cloud.</p>' +
       '<p>An der ausgeschriebenen Rolle reizt mich, dass sie Anforderungsanalyse, technische Konzeption, Qualitätssicherung und Projektkoordination verbindet. Reporting und Datenanalyse sind für mich fachlich noch kein langjähriger Schwerpunkt. Ich bringe aber die technische Denkweise, die strukturierte Anforderungsarbeit und die Testpraxis mit, um mich schnell und fundiert in die konkrete Reporting-Landschaft einzuarbeiten.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich verbinde mehr als zehn Jahre technische Erfahrung mit langjähriger Arbeit an Anforderungen, Abstimmung, Tests und Delivery. Ich kann fachliche Ziele in nachvollziehbare Spezifikationen übersetzen und technische Abhängigkeiten früh sichtbar machen.</p>' +
       '<p>Reporting ist für mich ein neues Fachgebiet, aber die zugrunde liegende <mark>Schnittstellen- und Qualitätsarbeit</mark> kenne ich sehr gut. Genau diese Erfahrung möchte ich künftig als Business Analyst und Requirements Engineer einsetzen.</p>' +
     '</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from frontend development and spent more than ten years working on e-commerce projects, websites, and technical platforms. At deepblue, I was part of a team that maintained a modular platform for more than ten Unilever brands. Later, at Patrick &amp; Friends, I accompanied shop, website, and relaunch projects from requirements clarification through to go-live.</p>' +
       '<p>Over time, my focus increasingly shifted to the interfaces. I clarified business, design, and technical requirements, aligned feasibility and dependencies with frontend, backend, and external partners, and accompanied testing, bug fixing, and releases. That\'s how I know, from first-hand experience, what information a development team needs and where <mark>unclear requirements get expensive later</mark>.</p>' +
       '<p>I deliberately prepared the shift toward business analysis and requirements engineering, rounding out my hands-on experience with AI Project Management training — requirements engineering, product lifecycle, agile delivery, plus foundations in data, MLOps, and cloud.</p>' +
       '<p>What appeals to me about the advertised role is that it combines requirements analysis, technical conception, quality assurance, and project coordination. Reporting and data analysis aren\'t yet a long-standing area of expertise for me. But I bring the technical mindset, structured requirements work, and testing practice to get up to speed quickly and solidly in the specific reporting landscape.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I combine more than ten years of technical experience with years of work on requirements, alignment, testing, and delivery. I can translate business goals into traceable specifications and surface technical dependencies early.</p>' +
       '<p>Reporting is a new field for me, but the underlying <mark>interface and quality work</mark> I know very well. That\'s exactly the experience I want to bring going forward as a Business Analyst and Requirements Engineer.</p>' +
     '</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Anforderungen bis zur Umsetzung durchdenken</div><div class="b">Ich betrachte eine Anforderung nicht als Textdokument, sondern als Grundlage für eine funktionierende Lösung. Bei Patrick &amp; Friends habe ich fachliche und gestalterische Wünsche geklärt, technische Voraussetzungen geprüft und die Umsetzung bis zu Tests und Release begleitet.</div></div>' +
    '<div class="c"><div class="t">Zwischen Fachseite und Entwicklung übersetzen</div><div class="b">Ich kann technische Zusammenhänge mit Entwicklerinnen und Entwicklern auf Augenhöhe besprechen und für andere Beteiligte verständlich einordnen — ohne wichtige technische Details zu verlieren.</div></div>' +
    '<div class="c"><div class="t">Qualität strukturiert absichern</div><div class="b">Tests, Fehlerbilder und Korrekturen waren fester Bestandteil meiner bisherigen Arbeit. Ich prüfe, welches Verhalten erwartet wird, welche Randfälle relevant sind und ob das Ergebnis zur ursprünglichen Anforderung passt.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Schwächen und sichere Antworten</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Ich spreche Unklarheiten und Risiken meistens direkt an. Das ist in technischen Projekten hilfreich, kann in einer neuen Runde aber härter wirken als beabsichtigt. Deshalb achte ich bewusst auf Zeitpunkt und Formulierung. Mein Ziel ist eine klare Entscheidung, nicht das Rechthaben.</li>' +
    '<li><b>Trockener Humor:</b> Mein Humor ist manchmal sehr trocken und gelegentlich sarkastisch. In einem vertrauten Team kann das verbinden. In neuen oder angespannten Situationen halte ich mich damit zurück.</li>' +
    '<li><b>Locker nur bei passender Gesprächsatmosphäre:</b> Meine ungefährlichste Schwäche ist Kinderschokolade. Die gefährdet höchstens den Vorrat im Büro.</li>' +
    '<li><b>Fachliche Lücke bei konkreter Nachfrage:</b> Meine bisherige Berufspraxis liegt nicht im Finanz- oder Reporting-Umfeld. Ich kenne Anforderungen, technische Systeme und Qualitätssicherung, aber nicht automatisch die fachlichen Kennzahlen, Datenmodelle oder regulatorischen Vorgaben des Kunden. Ich würde am Anfang gezielt Reporting-Ziele, Datenquellen, Berechnungslogiken, Verantwortlichkeiten und bestehende Kontrollen verstehen. Ich verschweige die Lücke nicht, kann aber klar zeigen, wie ich sie strukturiert schließe.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Thinking requirements through to delivery</div><div class="b">I don\'t treat a requirement as a text document — it\'s the basis for a working solution. At Patrick &amp; Friends, I clarified business and design requests, checked technical prerequisites, and accompanied delivery through testing and release.</div></div>' +
    '<div class="c"><div class="t">Translating between business and development</div><div class="b">I can discuss technical context with developers as an equal and frame it understandably for other stakeholders — without losing important technical detail.</div></div>' +
    '<div class="c"><div class="t">Securing quality in a structured way</div><div class="b">Tests, defect patterns, and fixes were a fixed part of my previous work. I check what behavior is expected, which edge cases matter, and whether the result matches the original requirement.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Weaknesses and Safe Answers</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> I usually address ambiguity and risk directly. That helps in technical projects, but can land harder than intended in a new group. So I\'m deliberate about timing and phrasing — my goal is a clear decision, not being right.</li>' +
    '<li><b>Dry humor:</b> my humor is sometimes very dry and occasionally sarcastic. With a team I trust it can be a connector. In new or tense situations I hold back.</li>' +
    '<li><b>The light answer, when the mood fits:</b> my least dangerous weakness is Kinderschokolade (chocolate) — it endangers, at most, the office supply.</li>' +
    '<li><b>A domain gap, only on explicit request:</b> my background so far isn\'t in finance or reporting. I know requirements, technical systems, and QA, but not automatically the client\'s specific metrics, data models, or regulatory requirements. Early on, I\'d deliberately get up to speed on reporting goals, data sources, calculation logic, ownership, and existing controls. I don\'t hide the gap — I show clearly how I close it in a structured way.</li>' +
    '</ul>';

  // ===== 4 · Michael Page & the Role =====
  CONTENT.de[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Was Michael Page in diesem Prozess macht</p>' +
    '<p>Michael Page ist eine Personalberatung und vermittelt Fach- und Führungskräfte an Kundenunternehmen. Der Berater prüft, ob Profil, Motivation, Gehalt und Rahmenbedingungen zur vakanten Stelle passen, und stellt geeignete Kandidatinnen und Kandidaten beim Kunden vor. Michael Page ist Vermittler und Ansprechpartner, aber voraussichtlich nicht der spätere Arbeitgeber.</p>' +
    '<p>Für mein Gespräch bedeutet das: Ich muss meinen Fit klar und ehrlich erklären — und gleichzeitig Informationen erfragen, die in der anonymisierten Anzeige fehlen: konkreter Arbeitgeber, Team, Reporting-Systeme, Datenquellen, regulatorische Anforderungen, Arbeitsmodell und genauer Verantwortungsumfang.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Was über den Kunden bekannt ist</p>' +
    '<ul class="tight">' +
    '<li>Unternehmen aus dem Finanzdienstleistungsumfeld in Hamburg</li>' +
    '<li>Unbefristete Festanstellung, Team Reporting</li>' +
    '<li>Schnittstellenrolle zwischen fachlichen Anforderungen, Datenanalyse und IT</li>' +
    '<li>Anspruchsvolle Reporting- und BI-Projekte mit Gestaltungsspielraum</li>' +
    '<li>Gehaltsrahmen laut Anzeige 81.000 bis 99.000 Euro brutto jährlich</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Was noch nicht bekannt ist</p>' +
    '<ul class="tight">' +
    '<li>Name, Größe und Geschäftsmodell des Kunden</li>' +
    '<li>Fachlicher Zweck des Reportings (Management-, Finanz-, Risiko- oder regulatorisches Reporting)</li>' +
    '<li>Genutzte BI-, Datenbank- und Datenintegrationswerkzeuge sowie erwartete SQL-/BI-Tool-Tiefe</li>' +
    '<li>Zusammensetzung und Arbeitsweise des Teams, Entscheidungsbefugnisse der Rolle</li>' +
    '<li>Remote-Anteil, Präsenzregelung, genaue Benefits, Grund der Besetzung</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Anforderungen der Stelle und meine Belege</p>' +
    '<table class="info">' +
    '<tr><th>Gesucht</th><th>Mein belastbarer Bezug</th></tr>' +
    '<tr><td class="k">Anforderungen im Reporting analysieren und dokumentieren</td><td>Langjährige Anforderungsanalyse und Dokumentation in digitalen Projekten; Reporting-Fachlichkeit muss ich aufbauen.</td></tr>' +
    '<tr><td class="k">Fachseite, Datenanalyse und IT verbinden</td><td>Erfahrung als Übersetzerin zwischen Kunden, Fachrollen, Design, Frontend, Backend und externen Partnern.</td></tr>' +
    '<tr><td class="k">Konzepte und technische Spezifikationen erstellen</td><td>Technische Konzeption, Machbarkeitsklärung, Abhängigkeiten und umsetzbare Arbeitspakete aus der Projektpraxis.</td></tr>' +
    '<tr><td class="k">Umsetzung begleiten und überwachen</td><td>Begleitung von Projekten von der Anforderung bis zu Test, Fehlerbehebung, Release und Go-live.</td></tr>' +
    '<tr><td class="k">Reporting-Systeme testen</td><td>Breite Test- und Qualitätssicherungserfahrung; noch keine langjährige Praxis mit spezifischen Reporting-Systemen.</td></tr>' +
    '<tr><td class="k">Reporting-Prozesse weiterentwickeln</td><td>Erfahrung mit wiederverwendbaren Strukturen und der Klärung wiederkehrender Anforderungen; fachlicher Transfer erforderlich.</td></tr>' +
    '<tr><td class="k">Probleme im Betrieb identifizieren und lösen</td><td>Fehleranalyse, Reproduktion, Abstimmung mit technischen Beteiligten und Nachverfolgung aus Web- und Shopprojekten.</td></tr>' +
    '<tr><td class="k">Projekte koordinieren</td><td>Koordination interner und externer Beteiligter, Prioritäten, Abhängigkeiten und Releases.</td></tr>' +
    '<tr><td class="k">Studium oder vergleichbarer Hintergrund</td><td>Kein klassisches Informatikstudium; IHK-Ausbildung, fachgebundene Hochschulreife, über zehn Jahre relevante technische Berufspraxis und Weiterbildung.</td></tr>' +
    '<tr><td class="k">Reporting und Datenanalyse</td><td>Grundlagen aus Weiterbildung; keine tiefe BI- oder Data-Analytics-Praxis behaupten.</td></tr>' +
    '</table>';

  CONTENT.en[4] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">What Michael Page Does in This Process</p>' +
    '<p>Michael Page is a recruitment agency that places specialists and managers with client companies. The consultant checks whether profile, motivation, salary, and working conditions fit the vacancy, and presents suitable candidates to the client. Michael Page is the intermediary and point of contact in this process — but likely not the eventual employer.</p>' +
    '<p>For my conversation, that means: I have to explain my fit clearly and honestly — and at the same time ask for information missing from the anonymized ad: the specific employer, team, reporting systems, data sources, regulatory requirements, working model, and exact scope of responsibility.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">What\'s Known About the Client</p>' +
    '<ul class="tight">' +
    '<li>A company in financial services, based in Hamburg</li>' +
    '<li>Permanent, full-time position; Reporting team</li>' +
    '<li>An interface role between business requirements, data analysis, and IT</li>' +
    '<li>Demanding reporting and BI projects with room to shape them</li>' +
    '<li>Salary range per the ad: €81,000–99,000 gross per year</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">What\'s Not Yet Known</p>' +
    '<ul class="tight">' +
    '<li>Name, size, and business model of the client</li>' +
    '<li>The functional purpose of the reporting (management, finance, risk, or regulatory reporting)</li>' +
    '<li>BI, database, and data integration tools in use, and the expected SQL/BI-tool depth</li>' +
    '<li>Team composition and working style; decision authority of the role</li>' +
    '<li>Remote share, on-site policy, exact benefits, reason the role is open</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Matching the Job Requirements to My Evidence</p>' +
    '<table class="info">' +
    '<tr><th>Requirement</th><th>My Solid Track Record</th></tr>' +
    '<tr><td class="k">Analyze and document reporting requirements</td><td>Years of requirements analysis and documentation in digital projects; I need to build up reporting domain expertise.</td></tr>' +
    '<tr><td class="k">Connect business, data analysis, and IT</td><td>Experience as a translator between clients, business roles, design, frontend, backend, and external partners.</td></tr>' +
    '<tr><td class="k">Create concepts and technical specifications</td><td>Technical conception, feasibility clarification, dependencies, and actionable work packages from project practice.</td></tr>' +
    '<tr><td class="k">Accompany and monitor delivery</td><td>Accompanied projects from requirement through testing, bug fixing, release, and go-live.</td></tr>' +
    '<tr><td class="k">Test reporting systems</td><td>Broad testing and QA experience; no long-standing practice with specific reporting systems yet.</td></tr>' +
    '<tr><td class="k">Evolve reporting processes</td><td>Experience with reusable structures and clarifying recurring requirements; domain transfer required.</td></tr>' +
    '<tr><td class="k">Identify and resolve operational issues</td><td>Defect analysis, reproduction, alignment with technical stakeholders, and follow-up from web and shop projects.</td></tr>' +
    '<tr><td class="k">Coordinate projects</td><td>Coordinating internal and external stakeholders, priorities, dependencies, and releases.</td></tr>' +
    '<tr><td class="k">Degree or comparable background</td><td>No classical computer science degree; vocational (IHK) training, subject-restricted university entrance qualification, more than ten years of relevant technical practice, and current further training.</td></tr>' +
    '<tr><td class="k">Reporting and data analysis</td><td>Foundations from further training; won\'t claim deep BI or data analytics practice.</td></tr>' +
    '</table>';

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Kennzahlen oder Ergebnisse nur nennen, wenn sie belegt sind. Wirkung sonst qualitativ beschreiben.</div>' +
    '<div class="macc"><button class="macc-head">1 · Wie machen Sie aus einer unklaren Anforderung eine umsetzbare Spezifikation <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Eine Anforderung ist erst umsetzbar, wenn Ziel, Nutzer, Daten oder Eingaben, erwartetes Verhalten und Abnahmekriterien geklärt sind.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Patrick &amp; Friends kamen Anforderungen für Shop-, Website- und Relaunch-Projekte teilweise aus Kundenbriefings oder Designs. Technische Voraussetzungen und Randfälle waren darin nicht immer vollständig beschrieben.</div>' +
    '<div class="row"><b>Aufgabe:</b> Frontend, Backend und weitere Beteiligte brauchten ein gemeinsames Verständnis und eine belastbare Grundlage für die Einschätzung und Umsetzung.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich sammelte offene Punkte, klärte die gewünschte Wirkung und machte Annahmen sichtbar. Anschließend prüfte ich Abhängigkeiten mit den zuständigen Personen und strukturierte die Anforderung in nachvollziehbare Arbeitspakete und prüfbare Ergebnisse.</div>' +
    '<div class="row"><b>Ergebnis:</b> Offene Entscheidungen und technische Rückfragen wurden früher sichtbar. Das Team arbeitete mit einem gemeinsamen Verständnis, und Tests konnten sich auf die geklärten Erwartungen beziehen.</div>' +
    '<div class="erg">Übertragung auf Reporting: Zusätzlich würde ich Datenquelle, Definition der Kennzahl, Filter, Zeitraum, Aktualität, Berechtigungen und erwartete Darstellung klären.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · Wie gehen Sie mit widersprüchlichen Anforderungen um <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich trenne Positionen vom eigentlichen Bedarf und mache die Folgen der Optionen sichtbar.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei deepblue arbeitete ich an einer modularen Plattform für mehr als zehn Unilever-Marken. Die Marken hatten individuelle Anforderungen, während die technische Grundlage gemeinsam und wartbar bleiben sollte.</div>' +
    '<div class="row"><b>Aufgabe:</b> Einzelwünsche mussten gegen Wiederverwendung, Konsistenz und technische Folgen abgewogen werden.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich klärte das Ziel hinter dem jeweiligen Wunsch und prüfte, ob eine gemeinsame oder konfigurierbare Lösung möglich war. Technische Abhängigkeiten und Auswirkungen auf weitere Marken machte ich transparent. Erst danach wurde zwischen Standardlösung und begründetem Sonderfall entschieden.</div>' +
    '<div class="row"><b>Ergebnis:</b> Unterschiedliche Markenauftritte konnten auf einer gemeinsamen modularen Grundlage umgesetzt werden. Die Lösung blieb für weitere Anforderungen nutzbar.</div>' +
    '<div class="erg">Übertragung auf Reporting: Ich würde zwischen allgemeiner Kennzahlenlogik, rollenabhängiger Sicht und echtem fachlichem Sonderfall unterscheiden.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · Wie sichern Sie die Qualität einer technischen Lösung <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Qualität beginnt bei klaren Erwartungen und endet nicht mit einem oberflächlich richtigen Ergebnis.</mark></div>' +
    '<div class="row"><b>Situation:</b> Bei Shop- und Website-Projekten mussten neue Funktionen und Änderungen vor dem Release geprüft und Fehler nachvollziehbar an die zuständigen Personen zurückgespielt werden.</div>' +
    '<div class="row"><b>Aufgabe:</b> Das erwartete Verhalten musste über verschiedene Ansichten, Inhalte und technische Abhängigkeiten hinweg abgesichert werden.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich leitete Tests aus der Anforderung ab, prüfte typische Abläufe und Randfälle, dokumentierte Fehler reproduzierbar und begleitete Korrekturen bis zur erneuten Prüfung. Bei Unklarheiten ging ich zur Anforderung oder zur fachlichen Entscheidung zurück.</div>' +
    '<div class="row"><b>Ergebnis:</b> Fehler und Abweichungen wurden nachvollziehbar bearbeitet. Releases basierten auf einem geklärten Soll-Verhalten statt nur auf einem visuellen Eindruck.</div>' +
    '<div class="erg">Übertragung auf Reporting: Ich würde unter anderem Datenvollständigkeit, Berechnungslogik, Filter, Zeitbezug, Berechtigungen und Abgleich mit einer fachlich freigegebenen Quelle testen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · Wie priorisieren Sie mehrere dringende Anforderungen <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich priorisiere nach Wirkung, Risiko, Termin und Abhängigkeiten, nicht nach Lautstärke.</mark></div>' +
    '<div class="row"><b>Situation:</b> In Agentur- und Plattformprojekten liefen Relaunches, Websites, Promotions und wiederkehrende Aufgaben teilweise parallel.</div>' +
    '<div class="row"><b>Aufgabe:</b> Das Team brauchte eine nachvollziehbare Reihenfolge, obwohl mehrere Beteiligte ihre Themen als dringend bewerteten.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich klärte zuerst feste Termine, Blocker und Risiken. Danach betrachtete ich Nutzen, Aufwand und technische Abhängigkeiten. Wenn nicht alles gleichzeitig möglich war, stellte ich Optionen und Folgen transparent dar und dokumentierte die Entscheidung.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Beteiligten konnten die Reihenfolge nachvollziehen. Zielkonflikte wurden nicht verdeckt an das Entwicklungsteam weitergereicht.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · Wie analysieren Sie ein Problem im laufenden Betrieb <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich trenne Beobachtung, Reproduktion, Ursache und Auswirkung, bevor ich über die Lösung entscheide.</mark></div>' +
    '<div class="row"><b>Situation:</b> In laufenden Shop- und Website-Projekten traten Fehler auf, deren Ursache nicht unmittelbar an der sichtbaren Stelle lag.</div>' +
    '<div class="row"><b>Aufgabe:</b> Das Problem musste eingegrenzt, reproduzierbar beschrieben und mit den richtigen technischen Beteiligten gelöst werden.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich dokumentierte Ausgangslage, Schritte, erwartetes und tatsächliches Verhalten. Danach prüfte ich Muster, betroffene Umgebungen und mögliche Abhängigkeiten und holte gezielt die technische Einschätzung ein. Korrektur und erneuter Test wurden nachvollziehbar festgehalten.</div>' +
    '<div class="row"><b>Ergebnis:</b> Die Bearbeitung basierte auf einem reproduzierbaren Fehlerbild. Rückfragen und unnötige Schleifen wurden reduziert.</div>' +
    '<div class="erg">Übertragung auf Reporting: Zusätzlich würde ich Datenquelle, Ladezeitpunkt, Transformation, Berechtigungen und betroffene Berichtszeiträume prüfen.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · Wie würden Sie eine neue Reporting-Anforderung bearbeiten <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Kernaussage:</b> <mark>Ich würde fachliche Definition, Datenherkunft und Nutzungskontext gemeinsam klären, bevor eine technische Lösung festgelegt wird.</mark></div>' +
    '<div class="row"><b>Situation:</b> Eine konkrete Reporting-Anforderung aus dem Finanzdienstleistungsumfeld habe ich noch nicht eigenverantwortlich umgesetzt. Die zugrunde liegende Anforderungs- und Testarbeit kenne ich aus digitalen Projekten.</div>' +
    '<div class="row"><b>Aufgabe:</b> Aus einem fachlichen Informationsbedarf müsste eine eindeutige, technisch umsetzbare und prüfbare Spezifikation entstehen.</div>' +
    '<div class="row"><b>Vorgehen:</b> Ich würde klären, wer welche Entscheidung mit dem Bericht trifft, wie Kennzahlen definiert sind, aus welchen Quellen die Daten kommen und welche Filter, Zeiträume, Aktualität und Berechtigungen gelten. Gemeinsam mit Datenanalyse und IT würde ich Machbarkeit und Datenqualität prüfen, Akzeptanzkriterien dokumentieren und fachliche Abnahmefälle vorbereiten.</div>' +
    '<div class="erg">Das ist ein Vorgehensvorschlag und kein bereits erzieltes Reporting-Ergebnis.</div>' +
    '</div></div></div>';

  CONTENT.en[5] = '<div class="lead">Only name figures or results when they\'re documented. Otherwise describe the impact qualitatively.</div>' +
    '<div class="macc"><button class="macc-head">1 · How do you turn an unclear requirement into an actionable specification <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>A requirement is only actionable once the goal, users, data or inputs, expected behavior, and acceptance criteria are clarified.</mark></div>' +
    '<div class="row"><b>Situation:</b> at Patrick &amp; Friends, requirements for shop, website, and relaunch projects sometimes came from client briefs or designs. Technical prerequisites and edge cases weren\'t always fully described.</div>' +
    '<div class="row"><b>Task:</b> frontend, backend, and other stakeholders needed a shared understanding and a solid basis for estimation and delivery.</div>' +
    '<div class="row"><b>Action:</b> I collected open points, clarified the intended effect, and surfaced assumptions. I then checked dependencies with the responsible people and structured the requirement into traceable work packages and verifiable outcomes.</div>' +
    '<div class="row"><b>Result:</b> open decisions and technical follow-up questions surfaced earlier. The team worked from a shared understanding, and tests could reference the clarified expectations.</div>' +
    '<div class="erg">Transfer to reporting: I\'d additionally clarify the data source, metric definition, filters, time range, freshness, permissions, and expected display.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">2 · How do you handle contradictory requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I separate positions from the actual need and make the consequences of each option visible.</mark></div>' +
    '<div class="row"><b>Situation:</b> at deepblue, I worked on a modular platform for more than ten Unilever brands. The brands had individual requirements, while the technical foundation was meant to stay shared and maintainable.</div>' +
    '<div class="row"><b>Task:</b> individual requests had to be weighed against reusability, consistency, and technical consequences.</div>' +
    '<div class="row"><b>Action:</b> I clarified the goal behind each request and checked whether a shared or configurable solution was possible. I made technical dependencies and the impact on other brands transparent. Only then was a decision made between a standard solution and a justified edge case.</div>' +
    '<div class="row"><b>Result:</b> different brand experiences could be delivered on a shared, modular foundation. The solution stayed usable for further requirements.</div>' +
    '<div class="erg">Transfer to reporting: I\'d distinguish between general metric logic, role-dependent views, and genuine domain-specific edge cases.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">3 · How do you secure the quality of a technical solution <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>Quality starts with clear expectations and doesn\'t end with a result that merely looks right on the surface.</mark></div>' +
    '<div class="row"><b>Situation:</b> on shop and website projects, new features and changes had to be checked before release, with defects traced back traceably to the responsible people.</div>' +
    '<div class="row"><b>Task:</b> expected behavior had to be secured across different views, content, and technical dependencies.</div>' +
    '<div class="row"><b>Action:</b> I derived tests from the requirement, checked typical flows and edge cases, documented defects reproducibly, and accompanied fixes through to re-testing. When unclear, I went back to the requirement or the business decision.</div>' +
    '<div class="row"><b>Result:</b> defects and deviations were handled traceably. Releases were based on clarified expected behavior, not just a visual impression.</div>' +
    '<div class="erg">Transfer to reporting: I\'d test things like data completeness, calculation logic, filters, time references, permissions, and reconciliation against a business-approved source.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">4 · How do you prioritize several urgent requirements <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I prioritize by impact, risk, deadline, and dependencies — not by volume.</mark></div>' +
    '<div class="row"><b>Situation:</b> in agency and platform projects, relaunches, websites, promotions, and recurring tasks sometimes ran in parallel.</div>' +
    '<div class="row"><b>Task:</b> the team needed a traceable order even though several stakeholders rated their topics as urgent.</div>' +
    '<div class="row"><b>Action:</b> I first clarified fixed deadlines, blockers, and risks. Then I looked at value, effort, and technical dependencies. When not everything was possible at once, I made options and consequences transparent and documented the decision.</div>' +
    '<div class="row"><b>Result:</b> stakeholders could follow the order. Trade-offs weren\'t quietly passed on to the development team.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">5 · How do you analyze a problem in live operations <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I separate observation, reproduction, cause, and impact before deciding on a solution.</mark></div>' +
    '<div class="row"><b>Situation:</b> in live shop and website projects, defects occurred whose cause wasn\'t immediately at the visibly affected spot.</div>' +
    '<div class="row"><b>Task:</b> the problem had to be scoped, described reproducibly, and resolved with the right technical stakeholders.</div>' +
    '<div class="row"><b>Action:</b> I documented the starting point, steps, and expected vs. actual behavior. Then I checked patterns, affected environments, and possible dependencies, and gathered technical assessment specifically. The fix and retest were tracked traceably.</div>' +
    '<div class="row"><b>Result:</b> the work was based on a reproducible defect pattern. Follow-up questions and unnecessary loops were reduced.</div>' +
    '<div class="erg">Transfer to reporting: I\'d additionally check data source, load time, transformation, permissions, and affected reporting periods.</div>' +
    '</div></div></div>' +
    '<div class="macc"><button class="macc-head">6 · How would you handle a new reporting requirement <span class="chev">▾</span></button>' +
    '<div class="macc-body"><div class="macc-body-inner">' +
    '<div class="kern"><b>Core message:</b> <mark>I\'d clarify the business definition, data origin, and usage context together before a technical solution is set.</mark></div>' +
    '<div class="row"><b>Situation:</b> I haven\'t yet independently delivered a concrete reporting requirement in the financial services space. The underlying requirements and testing work I know from digital projects.</div>' +
    '<div class="row"><b>Task:</b> a clear, technically actionable, and verifiable specification would need to emerge from a business information need.</div>' +
    '<div class="row"><b>Action:</b> I\'d clarify who makes which decision with the report, how metrics are defined, which sources the data comes from, and which filters, time ranges, freshness, and permissions apply. Together with data analysis and IT, I\'d check feasibility and data quality, document acceptance criteria, and prepare business sign-off cases.</div>' +
    '<div class="erg">This is a proposed approach, not an already-achieved reporting result.</div>' +
    '</div></div></div>';

  // ===== 6 · Tough Questions & Safe Answers =====
  CONTENT.de[6] = '<div class="lead">„Sie haben keine tiefe Reporting- oder BI-Erfahrung. Warum sollten wir Sie trotzdem vorstellen?“</div>' +
    '<p>Ich würde nicht behaupten, dass ich bereits eine erfahrene BI-Spezialistin bin. Mein belastbarer Beitrag liegt in der strukturierten Anforderungsarbeit, technischen Konzeption, Abstimmung und Qualitätssicherung. Ich habe viele Jahre erlebt, welche Folgen unklare Anforderungen in der Umsetzung haben, und kann mit technischen Teams auf Augenhöhe arbeiten. Ob das für den Kunden ausreicht, hängt davon ab, wie viel domänenspezifische Reporting-Erfahrung er am ersten Tag erwartet und welche Teile im Team abgedeckt sind. Genau das würde ich gern transparent klären.</p>' +
    '<div class="lead">„Haben Sie Erfahrung mit SQL, Power BI, Tableau oder anderen BI-Tools?“</div>' +
    '<p>Meine bisherige Hauptpraxis liegt in Web- und E-Commerce-Technologien, nicht in einem spezifischen BI-Stack. Aus der Weiterbildung bringe ich Grundlagen zu Daten, Python, Datenbanken, MLOps und Cloud mit. Ich würde im Gespräch keine operative Tiefe in SQL oder einem BI-Werkzeug behaupten, die ich nicht belegen kann. Entscheidend ist, welche Tool-Tiefe die Rolle tatsächlich verlangt und ob der Schwerpunkt auf Requirements Engineering oder eigener Datenanalyse liegt.</p>' +
    '<div class="lead">„Ihnen fehlt das geforderte Studium.“</div>' +
    '<p>Ich habe kein klassisches Studium der Wirtschaftsinformatik oder Informatik. Ich bringe eine abgeschlossene Ausbildung, die fachgebundene Hochschulreife, mehr als zehn Jahre technische Berufserfahrung und eine aktuelle Weiterbildung im AI Project Management mit. Meine praktische Erfahrung deckt viele Aufgaben der Rolle ab. Ob dieser Hintergrund als vergleichbar gilt, würde ich offen mit Michael Page und dem Kunden klären.</p>' +
    '<div class="lead">„Warum möchten Sie nicht mehr hauptsächlich entwickeln?“</div>' +
    '<p>Ich wende mich nicht von Technik ab. Ich setze sie künftig an einer anderen Stelle ein. Meine größte Wirkung liegt häufig vor und zwischen den Umsetzungsschritten: Anforderungen schärfen, Abhängigkeiten sichtbar machen, Menschen mit unterschiedlichen Perspektiven zusammenbringen und Qualität absichern. Genau darauf möchte ich meinen Schwerpunkt legen.</p>' +
    '<div class="lead">„Warum interessiert Sie Reporting?“</div>' +
    '<p>Reporting verbindet Fachlogik, Daten und technische Umsetzung. Eine Kennzahl ist nur dann hilfreich, wenn ihre Definition, Datenbasis und Darstellung stimmen und die Nutzer damit eine konkrete Entscheidung treffen können. Diese Verbindung aus präziser Anforderung, technischer Nachvollziehbarkeit und Qualität interessiert mich. Gleichzeitig möchte ich im Gespräch verstehen, welche Art von Reporting der Kunde betreibt und wie tief die Rolle selbst in Datenanalyse und Tools arbeitet.</p>' +
    '<div class="lead">„Wie würden Sie Ihren Erfolg messen?“</div>' +
    '<p>Ich würde den Erfolg an der Rolle und den aktuellen Problemen ausrichten. Mögliche Kriterien wären weniger Rückfragen und Nacharbeit durch klarere Anforderungen, nachvollziehbare Akzeptanzkriterien, kürzere Durchlaufzeiten von der Anforderung bis zur Abnahme, geringere Fehlerquote, stabilere Reporting-Prozesse und eine höhere Zufriedenheit der Nutzer. Vor einer Festlegung müsste ich wissen, welche Daten heute verfügbar sind und welches Problem der Kunde zuerst lösen möchte.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gespräch mit Michael Page</p>' +
    '<p>Worauf der Berater wahrscheinlich achtet: Kann ich meinen Lebenslauf und Rollenwechsel schlüssig erklären? Passe ich fachlich ausreichend zur Kundenanforderung? Bin ich beim Reporting-Schwerpunkt realistisch und lernfähig? Sind Gehalt, Starttermin, Standort und Arbeitsmodell grundsätzlich kompatibel? Kann Michael Page mein Profil glaubwürdig beim Kunden vertreten? Gibt es Risiken, die vor der Vorstellung geklärt werden müssen?</p>' +
    '<div class="lead">Meine Botschaft an den Berater: Mein Profil ist kein klassischer Reporting-Lebenslauf. Es ist ein technisch starkes Requirements-Engineering-Profil mit viel Umsetzungserfahrung. Ich bin besonders interessant, wenn der Kunde eine Person sucht, die Anforderungen strukturiert, technische Teams versteht, Tests sauber begleitet und sich in die Reporting-Domäne einarbeiten kann. Erwartet der Kunde dagegen vom ersten Tag an tiefe SQL-, Datenmodellierungs- oder BI-Tool-Expertise, sollte das offen benannt werden.</div>';

  CONTENT.en[6] = '<div class="lead">"You don\'t have deep reporting or BI experience. Why should we still present you?"</div>' +
    '<p>I wouldn\'t claim to already be an experienced BI specialist. My solid contribution lies in structured requirements work, technical conception, alignment, and quality assurance. I\'ve seen for years what consequences unclear requirements have in delivery, and I can work with technical teams as an equal. Whether that\'s enough for the client depends on how much domain-specific reporting experience they expect on day one, and which parts are already covered in the team. That\'s exactly what I\'d want to clarify transparently.</p>' +
    '<div class="lead">"Do you have experience with SQL, Power BI, Tableau, or other BI tools?"</div>' +
    '<p>My main practice so far is in web and e-commerce technologies, not a specific BI stack. From my further training, I bring foundations in data, Python, databases, MLOps, and cloud. I wouldn\'t claim operational depth in SQL or a BI tool that I can\'t back up. What matters is how much tool depth the role actually requires, and whether the focus is on requirements engineering or on doing data analysis myself.</p>' +
    '<div class="lead">"You\'re missing the required degree."</div>' +
    '<p>I don\'t have a classical degree in business informatics or computer science. I bring completed vocational training, a subject-restricted university entrance qualification, more than ten years of relevant technical experience, and current AI Project Management training. My practical experience covers many of the role\'s tasks. Whether this background counts as comparable, I\'d openly clarify with Michael Page and the client.</p>' +
    '<div class="lead">"Why don\'t you want to mainly develop anymore?"</div>' +
    '<p>I\'m not turning away from technology — I\'m applying it at a different point going forward. My biggest impact often lies before and between the delivery steps: sharpening requirements, surfacing dependencies, bringing people with different perspectives together, and securing quality. That\'s exactly where I want to put my focus.</p>' +
    '<div class="lead">"Why are you interested in reporting?"</div>' +
    '<p>Reporting connects business logic, data, and technical delivery. A metric is only useful if its definition, data basis, and presentation are right, and users can make a concrete decision with it. That combination of precise requirements, technical traceability, and quality interests me. At the same time, I want to understand in the conversation what kind of reporting the client runs, and how deep the role itself works in data analysis and tools.</p>' +
    '<div class="lead">"How would you measure your success?"</div>' +
    '<p>I\'d orient success around the role and its current problems. Possible criteria: fewer follow-up questions and rework through clearer requirements, traceable acceptance criteria, shorter turnaround from requirement to sign-off, a lower defect rate, more stable reporting processes, and higher user satisfaction. Before committing to that, I\'d need to know what data is available today and which problem the client wants to solve first.</p>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Talking with Michael Page</p>' +
    '<p>What the consultant is likely watching for: can I explain my CV and career shift coherently? Do I fit the client\'s requirement well enough on substance? Am I realistic and willing to learn about the reporting focus? Are salary, start date, location, and working model basically compatible? Can Michael Page credibly represent my profile to the client? Are there any risks that need clarifying before I\'m presented?</p>' +
    '<div class="lead">My message to the consultant: my profile isn\'t a classic reporting CV. It\'s a technically strong requirements engineering profile with a lot of delivery experience. I\'m especially interesting if the client is looking for someone who structures requirements, understands technical teams, accompanies testing cleanly, and can get up to speed in the reporting domain. If the client instead expects deep SQL, data modeling, or BI tool expertise from day one, that should be named openly.</div>';

  // ===== 7 · First 90 Days Plan =====
  CONTENT.de[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Erste 30 Tage · verstehen</p>' +
    '<ul class="tight">' +
    '<li>Fachlichen Zweck, Nutzer und wichtigste Reporting-Produkte kennenlernen.</li>' +
    '<li>Begriffe, Kennzahlen und Berechnungslogiken verstehen.</li>' +
    '<li>Datenquellen, Datenflüsse, Systeme und Verantwortlichkeiten grob kartieren.</li>' +
    '<li>Aktuelle Anforderungen, offene Probleme und Betriebsstörungen sichten.</li>' +
    '<li>Zusammenarbeit zwischen Fachseite, Datenanalyse, IT und externen Beteiligten verstehen.</li>' +
    '<li>Vorhandene Dokumentations-, Test- und Freigabeprozesse kennenlernen.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 31–60 · ordnen</p>' +
    '<ul class="tight">' +
    '<li>Anforderungen und Backlog nach Nutzen, Risiko und Abhängigkeiten strukturieren.</li>' +
    '<li>Wiederkehrende Unklarheiten und fehlende Definitionen sichtbar machen.</li>' +
    '<li>Akzeptanzkriterien und fachliche Testfälle für priorisierte Themen schärfen.</li>' +
    '<li>Zentrale Kennzahlen und Begriffe nachvollziehbar dokumentieren.</li>' +
    '<li>Rückfragen- und Entscheidungswege mit den Beteiligten stabilisieren.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Tage 61–90 · verbessern</p>' +
    '<ul class="tight">' +
    '<li>Erste Anforderung mit klarer fachlicher Definition und Abnahme begleiten.</li>' +
    '<li>Ein wiederkehrendes Problem in Anforderung, Test oder Betrieb gezielt verbessern.</li>' +
    '<li>Transparenz über Status, Risiken und offene Entscheidungen erhöhen.</li>' +
    '<li>Sinnvolle Qualitäts- und Prozesskennzahlen gemeinsam festlegen.</li>' +
    '<li>Wissen weniger personenabhängig dokumentieren.</li>' +
    '</ul>';

  CONTENT.en[7] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">First 30 Days · Understand</p>' +
    '<ul class="tight">' +
    '<li>Get to know the business purpose, users, and most important reporting products.</li>' +
    '<li>Understand terminology, metrics, and calculation logic.</li>' +
    '<li>Roughly map data sources, data flows, systems, and ownership.</li>' +
    '<li>Review current requirements, open problems, and operational incidents.</li>' +
    '<li>Understand collaboration between business, data analysis, IT, and external stakeholders.</li>' +
    '<li>Get to know existing documentation, testing, and sign-off processes.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 31–60 · Organize</p>' +
    '<ul class="tight">' +
    '<li>Structure requirements and backlog by value, risk, and dependencies.</li>' +
    '<li>Surface recurring ambiguities and missing definitions.</li>' +
    '<li>Sharpen acceptance criteria and business test cases for prioritized topics.</li>' +
    '<li>Document core metrics and terminology traceably.</li>' +
    '<li>Stabilize channels for follow-up questions and decisions with stakeholders.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Days 61–90 · Improve</p>' +
    '<ul class="tight">' +
    '<li>Accompany a first requirement through to clear business definition and sign-off.</li>' +
    '<li>Make a targeted improvement to one recurring issue in requirements, testing, or operations.</li>' +
    '<li>Increase transparency on status, risks, and open decisions.</li>' +
    '<li>Jointly define meaningful quality and process metrics.</li>' +
    '<li>Document knowledge so it\'s less dependent on individual people.</li>' +
    '</ul>';

  // ===== 8 · Questions for Michael Page =====
  CONTENT.de[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Unbedingt klären</p>' +
    '<ul class="tight">' +
    '<li>Welches Unternehmen steckt hinter der Anzeige und warum ist der Name bisher vertraulich?</li>' +
    '<li>Welche Art von Reporting verantwortet das Team: Management, Finance, Risiko, regulatorisch oder operativ?</li>' +
    '<li>Liegt der Schwerpunkt der Rolle stärker auf Requirements Engineering oder auf eigener Datenanalyse?</li>' +
    '<li>Welche BI-, Datenbank- und Datenintegrationswerkzeuge werden eingesetzt?</li>' +
    '<li>Welche praktische Tiefe in SQL, Datenmodellierung oder BI-Tools erwartet der Kunde vom ersten Tag an?</li>' +
    '<li>Warum ist die Stelle offen und was ist aktuell die größte Herausforderung im Team?</li>' +
    '<li>Wie groß ist das Reporting-Team und mit welchen internen und externen Rollen arbeitet es zusammen?</li>' +
    '<li>Wer wäre meine direkte Führungskraft und wie ist die Rolle organisatorisch verankert?</li>' +
    '<li>Wie laufen die nächsten Schritte und wie bereitet Michael Page mich auf das Kundengespräch vor?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Rahmenbedingungen</p>' +
    '<ul class="tight">' +
    '<li>Wie sind mobiles Arbeiten, Präsenz und Arbeitszeit geregelt?</li>' +
    '<li>Ist der veröffentlichte Gehaltsrahmen ein festes Band des Kunden, und welche Faktoren bestimmen die Einordnung?</li>' +
    '<li>Welche Benefits und gegebenenfalls variable Vergütung gehören zum Gesamtpaket?</li>' +
    '<li>Welcher Starttermin ist vorgesehen?</li>' +
    '<li>Gibt es Besonderheiten wie Hintergrundprüfung, regulatorische Anforderungen oder Referenzen?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Fragen für die spätere Fachrunde beim Kunden</p>' +
    '<ul class="tight">' +
    '<li>Woran würden Sie nach sechs Monaten erkennen, dass die Person in der Rolle erfolgreich ist?</li>' +
    '<li>Welche Reporting-Anforderungen verursachen heute die meiste Nacharbeit oder die meisten Missverständnisse?</li>' +
    '<li>Wie werden Kennzahlen und fachliche Definitionen heute dokumentiert und freigegeben?</li>' +
    '<li>Wo liegen aktuell die größten Datenqualitätsprobleme?</li>' +
    '<li>Wie verteilen sich Neuentwicklung, Weiterentwicklung und Fehler im laufenden Betrieb?</li>' +
    '<li>Wer entscheidet bei Zielkonflikten zwischen Fachbereich, Datenanalyse und IT?</li>' +
    '<li>Wie laufen Anforderungsaufnahme, Refinement, Umsetzung, Test und fachliche Abnahme konkret ab?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gehalt</p>' +
    '<div class="lead">Die Anzeige nennt einen Rahmen von 81.000 bis 99.000 Euro brutto jährlich. Meine Zielvorstellung liegt bei 88.000 Euro brutto jährlich, abhängig vom tatsächlichen Verantwortungsumfang, dem erwarteten Reporting- und Tool-Know-how sowie dem Gesamtpaket. Formulierung: „Die Anzeige nennt einen Rahmen von 81.000 bis 99.000 Euro. Auf Basis der beschriebenen Verantwortung liegt meine Vorstellung bei 88.000 Euro brutto jährlich. Für die endgültige Einordnung würde ich gern noch mehr über den Kunden, die fachliche Tiefe der Rolle und das Gesamtpaket erfahren.“</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">Falls der Berater die bisherige Gehaltshistorie erfragt: auf die Zielrolle zurückführen — entscheidend sind Aufgaben, Verantwortung und Marktwert dieser Position. Keine spontane Untergrenze nennen, bevor die tatsächlichen Anforderungen geklärt sind.</p>';

  CONTENT.en[8] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Must Clarify</p>' +
    '<ul class="tight">' +
    '<li>Which company is behind the ad, and why is the name confidential so far?</li>' +
    '<li>What kind of reporting does the team own: management, finance, risk, regulatory, or operational?</li>' +
    '<li>Is the role\'s focus more on requirements engineering or on doing data analysis myself?</li>' +
    '<li>Which BI, database, and data integration tools are in use?</li>' +
    '<li>What practical depth in SQL, data modeling, or BI tools does the client expect from day one?</li>' +
    '<li>Why is the role open, and what\'s currently the biggest challenge on the team?</li>' +
    '<li>How big is the reporting team, and which internal and external roles does it work with?</li>' +
    '<li>Who would be my direct manager, and how is the role organizationally anchored?</li>' +
    '<li>What are the next steps, and how does Michael Page prepare me for the client conversation?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Terms and Conditions</p>' +
    '<ul class="tight">' +
    '<li>How are remote work, on-site presence, and working hours regulated?</li>' +
    '<li>Is the published salary range a fixed band for the client, and what factors determine placement within it?</li>' +
    '<li>What benefits, and possibly variable pay, are part of the total package?</li>' +
    '<li>What start date is planned?</li>' +
    '<li>Are there any particulars such as background checks, regulatory requirements, or references?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Questions for the Later Client Round</p>' +
    '<ul class="tight">' +
    '<li>What would tell you, after six months, that the person in the role is succeeding?</li>' +
    '<li>Which reporting requirements currently cause the most rework or the most misunderstandings?</li>' +
    '<li>How are metrics and business definitions documented and approved today?</li>' +
    '<li>Where are the biggest data quality problems currently?</li>' +
    '<li>How is new development, enhancement, and defect work split in day-to-day operations?</li>' +
    '<li>Who decides on trade-offs between the business unit, data analysis, and IT?</li>' +
    '<li>How do requirements intake, refinement, delivery, testing, and business sign-off actually work?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary</p>' +
    '<div class="lead">The ad states a range of €81,000–99,000 gross per year. My target is €88,000 gross per year, depending on the actual scope of responsibility, the expected reporting and tool know-how, and the total package. Phrasing: "The ad states a range of €81,000 to €99,000. Based on the responsibility described, my expectation is €88,000 gross per year. For a final assessment, I\'d like to learn more about the client, the role\'s domain depth, and the total package."</div>' +
    '<p style="font-size:11.5px;color:var(--muted);margin-top:8px;">If the consultant asks about salary history: redirect to the target role — what matters is the tasks, responsibility, and market value of this position. Don\'t name a spontaneous floor before the actual requirements are clarified.</p>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">Meine drei Kernbotschaften</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>Ich übersetze fachliche Ziele in technisch nachvollziehbare und prüfbare Anforderungen.</mark></li>' +
    '<li>Ich kenne Umsetzung, Tests und Fehleranalyse aus mehr als zehn Jahren technischer Praxis.</li>' +
    '<li>Reporting ist mein neues Fachgebiet; Requirements Engineering und Qualitätssicherung sind es nicht.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Drei ehrliche Grenzen</p>' +
    '<ul class="tight">' +
    '<li>Keine langjährige BI- oder Reporting-Praxis</li>' +
    '<li>Keine belegte operative Tiefe in SQL, Power BI oder Tableau</li>' +
    '<li>Kein klassisches Informatik- oder Wirtschaftsinformatikstudium</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Drei Fragen, die ich sicher stellen möchte</p>' +
    '<ul class="tight">' +
    '<li>Wie viel eigene Datenanalyse und Tool-Tiefe erwartet der Kunde tatsächlich?</li>' +
    '<li>Welche Art von Reporting und welche Systeme stehen im Mittelpunkt?</li>' +
    '<li>Warum ist die Rolle offen, und woran wird Erfolg nach sechs Monaten gemessen?</li>' +
    '</ul>' +
    '<div class="lead">Letzter Gedanke: Das Gespräch ist auch eine Machbarkeitsprüfung. Nicht versuchen, jede Lücke wegzureden. Klar zeigen, welchen belastbaren Wert ich mitbringe, und herausfinden, ob der Kunde ein Requirements-Engineering-Profil mit Reporting-Lernkurve oder eine fertige BI-Spezialistin sucht.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: Stellenanzeige Michael Page, Referenz JN-092026-7102991, abgerufen 5. Oktober 2026; Michael Page Unternehmensprofil und Beschreibung der Personalberaterrolle; versendeter Lebenslauf, Anschreiben und Stellenbewertung.</p>';

  CONTENT.en[9] = '<p style="font-weight:800;color:var(--ink);margin-bottom:6px;">My Three Core Messages</p>' +
    '<ul class="tight checklist">' +
    '<li><mark>I translate business goals into technically traceable, verifiable requirements.</mark></li>' +
    '<li>I know delivery, testing, and defect analysis from more than ten years of technical practice.</li>' +
    '<li>Reporting is my new field; requirements engineering and quality assurance aren\'t.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Three Honest Limits</p>' +
    '<ul class="tight">' +
    '<li>No long-standing BI or reporting practice</li>' +
    '<li>No proven operational depth in SQL, Power BI, or Tableau</li>' +
    '<li>No classical computer science or business informatics degree</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Three Questions I Want to Ask Confidently</p>' +
    '<ul class="tight">' +
    '<li>How much of their own data analysis and tool depth does the client actually expect?</li>' +
    '<li>What kind of reporting and which systems are central?</li>' +
    '<li>Why is the role open, and what will success be measured against after six months?</li>' +
    '</ul>' +
    '<div class="lead">Final thought: this conversation is also a feasibility check. Don\'t try to talk away every gap. Clearly show the solid value I bring, and find out whether the client is looking for a requirements engineering profile with a reporting learning curve, or a finished BI specialist.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: Michael Page job posting, reference JN-092026-7102991, retrieved October 5, 2026; Michael Page company profile and description of the recruiter role; submitted CV, cover letter, and role assessment.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · Michael Page · Business Analyst/Requirements Engineer Team Reporting",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
