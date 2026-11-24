// Job-specific interview prep content.
// One file per job: sidebar facts (DE/EN), the 9 box titles, and the 9 modal bodies (DE/EN).
// Layout, chrome, and interaction logic all live in /assets/dashboard-template.js — never duplicate them here.

window.DASHBOARD_DATA = (function(){

  var FACTS = {
    de: {
      roleSubtitle: "Senior E-Commerce Manager · GRANIT PARTS · Stellenreferenz 4137<br>FRICKE Gruppe · Videointerview mit Christoph Wege und Cathaline Ronstedt (via Michael Page)",
      role: "Senior E-Commerce Manager (B2B-Webshop)",
      location: "Heeslingen · laut FRICKE nur einige mobile Tage pro Monat (Michael Page: Hamburg – mit Hanna klären)",
      interviewDate: "25. November 2026, 15:00 Uhr · Microsoft Teams",
      salaryAd: "nicht angegeben",
      salaryAsk: "ab 70.000 € (so von Hanna / Michael Page vorgestellt)",
      salaryMin: "nicht selbst nennen – erst nach Budgetrahmen und Gesamtpaket fragen",
      introTitle: "Interviewvorbereitung",
      introText: 'Mehr als zehn Jahre technische E-Commerce- und Plattformpraxis, kombiniert mit Anforderungsübersetzung, UX-Verständnis und Releases. Nächster Schritt: <mark>Produktverantwortung, Roadmap und datenbasierte Weiterentwicklung</mark>.'
    },
    en: {
      roleSubtitle: "Senior E-Commerce Manager · GRANIT PARTS · Ref. 4137<br>FRICKE Group · Video interview with Christoph Wege and Cathaline Ronstedt (via Michael Page)",
      role: "Senior E-Commerce Manager (B2B web shop)",
      location: "Heeslingen · per FRICKE only a few mobile days per month (Michael Page: Hamburg – clarify with Hanna)",
      interviewDate: "Nov 25, 2026, 3:00 PM · Microsoft Teams",
      salaryAd: "not stated",
      salaryAsk: "from €70,000 (as presented by Hanna / Michael Page)",
      salaryMin: "don't name one – first ask about budget range and overall package",
      introTitle: "Interview Prep",
      introText: 'More than ten years of technical e-commerce and platform practice, combined with requirements translation, UX understanding, and releases. Next step: <mark>product ownership, roadmap, and data-driven development</mark>.'
    }
  };

  var TITLES = {
    1: {de:"Meine Positionierung in einem Satz", en:"My Positioning in One Sentence"},
    2: {de:"Elevator Pitch", en:"Elevator Pitch"},
    3: {de:"Stärken und Schwächen", en:"Strengths and Weaknesses"},
    4: {de:"FRICKE, GRANIT & die Rolle", en:"FRICKE, GRANIT & the Role"},
    5: {de:"STAR-Antworten", en:"STAR Answers"},
    6: {de:"Kritische & fachliche Fragen", en:"Tough & Domain Questions"},
    7: {de:"Plan für die ersten 90 Tage", en:"First 90 Days Plan"},
    8: {de:"Fragen an FRICKE & Hanna", en:"Questions for FRICKE & Hanna"},
    9: {de:"Mentale Checkliste", en:"Mental Checklist"}
  };

  var H = function(t, first){ return '<p style="font-weight:800;color:var(--ink);margin:' + (first ? '0 0 6px' : '14px 0 6px') + ';">' + t + '</p>'; };
  var TERM = function(t){ return '<p style="font-weight:800;color:var(--sage-dark);margin:12px 0 4px;">' + t + '</p>'; };
  var MORE = function(label, body){ return '<div class="macc"><button class="macc-head">' + label + ' <span class="chev">▾</span></button><div class="macc-body"><div class="macc-body-inner">' + body + '</div></div></div>'; };
  var QA = function(q, a){ return '<div class="lead">' + q + '</div><p>' + a + '</p>'; };
  var STAR = function(head, kern, kLabel, rows){
    return '<div class="macc"><button class="macc-head">' + head + ' <span class="chev">▾</span></button>' +
      '<div class="macc-body"><div class="macc-body-inner">' +
      '<div class="kern"><b>' + kLabel + ':</b> <mark>' + kern + '</mark></div>' +
      rows.map(function(r){ return '<div class="row"><b>' + r[0] + ':</b> ' + r[1] + '</div>'; }).join('') +
      '</div></div></div>';
  };

  var CONTENT = { de: {}, en: {} };

  // ===== 1 · Positioning =====
  CONTENT.de[1] = '<div class="lead">Ich komme nicht als klassische Vertriebs- oder Marketingmanagerin. Mein Wert liegt in mehr als zehn Jahren technischer E-Commerce- und Plattformpraxis, kombiniert mit Anforderungsübersetzung, UX-Verständnis, Stakeholder-Abstimmung, Qualitätssicherung und Releases.</div>' +
    '<p>Den nächsten Schritt möchte ich bewusst in Richtung Produktverantwortung, Roadmap und datenbasierter Weiterentwicklung gehen.</p>' +
    H('Meine Positionierung') +
    '<ul class="tight">' +
    '<li><b>Herkunft:</b> Mehr als zehn Jahre E-Commerce, Frontend, Agentur und digitale Plattformen.</li>' +
    '<li><b>Stärke:</b> Technik, UX und Anforderungen so verbinden, dass Fachbereiche und Devs mit einer klaren Grundlage arbeiten.</li>' +
    '<li><b>Ziel:</b> Produktverantwortung, Roadmap und datenbasierte Weiterentwicklung zum Schwerpunkt machen.</li>' +
    '<li><b>Ehrlich:</b> Keine jahrelange alleinige B2B-Produkt-, Marktplatz- oder KPI-Gesamtverantwortung behaupten.</li>' +
    '</ul>' +
    H('Das Gespräch') +
    '<p>Erstes Videointerview mit fachlichem Verantwortlichen und Recruiting – voraussichtlich zweigeteilt:</p>' +
    '<ul class="tight">' +
    '<li><b>Christoph Wege</b>, Head of E-Commerce: fachlicher Entscheider. Fokus vermutlich B2B-Shop, Roadmap, Suche, KPIs, Priorisierung und Zusammenarbeit. Bei ihm zählen konkrete, pragmatische Antworten.</li>' +
    '<li><b>Cathaline Ronstedt</b>, Head of Recruiting: Motivation, Werdegang, Kommunikation, Rahmenbedingungen und kulturelle Passung. Wichtig: klare Erklärung des Rollenwechsels, ehrliche Grenzen, Konsistenz bei Gehalt, Verfügbarkeit und Arbeitsort.</li>' +
    '</ul>' +
    '<div class="erg">Nicht als fertige B2B-Produktchefin verkaufen. Aber auch nicht klein machen: Shop-, Plattform- und technische Schnittstellenpraxis sind langjährig.</div>';

  CONTENT.en[1] = '<div class="lead">I\'m not coming in as a classic sales or marketing manager. My value lies in more than ten years of technical e-commerce and platform practice, combined with requirements translation, UX understanding, stakeholder alignment, quality assurance, and releases.</div>' +
    '<p>I want to take the next step deliberately toward product ownership, roadmap, and data-driven development.</p>' +
    H('My Positioning') +
    '<ul class="tight">' +
    '<li><b>Origin:</b> More than ten years of e-commerce, frontend, agency, and digital platforms.</li>' +
    '<li><b>Strength:</b> Connecting tech, UX, and requirements so business teams and devs work from a clear basis.</li>' +
    '<li><b>Goal:</b> Make product ownership, roadmap, and data-driven development my focus.</li>' +
    '<li><b>Honest:</b> Don\'t claim years of sole B2B product, marketplace, or KPI ownership.</li>' +
    '</ul>' +
    H('The Conversation') +
    '<p>First video interview with the hiring manager and recruiting – likely two halves:</p>' +
    '<ul class="tight">' +
    '<li><b>Christoph Wege</b>, Head of E-Commerce: the domain decision-maker. Likely focus: B2B shop, roadmap, search, KPIs, prioritization, collaboration. Concrete, pragmatic answers count with him.</li>' +
    '<li><b>Cathaline Ronstedt</b>, Head of Recruiting: motivation, career path, communication, conditions, and cultural fit. Key: a clear explanation of the role change, honest limits, consistency on salary, availability, and location.</li>' +
    '</ul>' +
    '<div class="erg">Don\'t sell myself as a finished B2B head of product. But don\'t undersell either: shop, platform, and technical interface practice go back many years.</div>';

  // ===== 2 · Elevator Pitch =====
  CONTENT.de[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Hauptversion (60–90 Sek.)</button>' +
      '<button class="mtab" data-tab="kurz">Kurzversion (30 Sek.)</button>' +
      '<button class="mtab" data-tab="weg">Woher · wohin</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>Ich komme ursprünglich aus der Frontend-Entwicklung und habe mehr als zehn Jahre in Agenturen an Websites, Onlineshops, Relaunches und digitalen Plattformen gearbeitet. Dabei ging es für mich schon lange nicht mehr nur um Code. Ich habe Anforderungen geklärt, technische Machbarkeit eingeordnet, Arbeitspakete strukturiert und Kunden, Design, Backend und Frontend zusammengebracht. Außerdem habe ich Tests, Korrekturen, Releases und Go-lives begleitet.</p>' +
       '<p>Besonders liegt mir die Verbindung aus Nutzerperspektive, technischer Realität und klarer Umsetzung. Ich verstehe, was hinter einer Shopfunktion steckt, erkenne Abhängigkeiten früh und kann Anforderungen so formulieren, <mark>dass Devs und Fachbereiche mit derselben Grundlage arbeiten</mark>.</p>' +
       '<p>Bei FRICKE reizt mich, dass der B2B-Webshop ein zentraler Vertriebskanal mit großer fachlicher und technischer Tiefe ist. Die Rolle verbindet Produktstrategie, Customer Journey, Anforderungen, Entwicklung, Kennzahlen und Roll-outs. Genau dort kann ich meine E-Commerce-Erfahrung einbringen und die Verantwortung für Roadmap und datenbasierte Produktentscheidungen gezielt weiter ausbauen.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>Ich komme aus der Frontend-Entwicklung und habe mehr als zehn Jahre an Shops, Websites, Relaunches und Plattformen gearbeitet. Mein Schwerpunkt hat sich immer stärker auf Anforderungen, Machbarkeit, Abstimmung, Qualität und Releases verlagert. Ich verstehe Devs und kann gleichzeitig Nutzerbedarf und fachliche Ziele in klare Aufgaben übersetzen.</p>' +
       '<div class="lead">Bei FRICKE reizt mich, diese Erfahrung in einem relevanten B2B-Webshop einzubringen und Roadmap sowie Produktwirkung gezielt weiterzuentwickeln.</div>' +
       H('Warum FRICKE') +
       '<p>Der B2B-Shop ist ein zentraler Vertriebskanal mit echtem Nutzwert für Fachhändler und Werkstätten. Suche, große Sortimente, technische Produktdaten, Kundenkonto und zuverlässige Roll-outs sind anspruchsvoll. Genau diese Verbindung aus E-Commerce, Plattform und technischer Tiefe passt zu mir.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="weg" data-group="pitch">' +
       '<p style="font-weight:800;color:var(--ink);margin:0 0 6px;">Wo ich herkomme</p>' +
       '<ul class="tight">' +
       '<li>Mehr als zehn Jahre Erfahrung mit digitalen Produkten, Websites und Onlineshops.</li>' +
       '<li>Senior-Frontend-Erfahrung mit Shopify, Shopware, Spryker, WordPress, Vue und React.</li>' +
       '<li>Agenturprojekte für Kunden wie ALDI Süd, Möbel Martin, KORO, FOODIST und LOUIS.</li>' +
       '<li>Anforderungen zwischen Kunden, Design, Backend, Frontend und externen Partnern übersetzt.</li>' +
       '<li>Usability, Barrierefreiheit, technische Machbarkeit und Qualität gemeinsam betrachtet.</li>' +
       '<li>Tests, Releases und Go-lives strukturiert begleitet.</li>' +
       '<li>Modulare Plattform für mehr als zehn Unilever-Marken im DACH-Raum mitbetreut.</li>' +
       '</ul>' +
       '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Wo ich hinwill</p>' +
       '<ul class="tight">' +
       '<li>Produktverantwortung für einen relevanten E-Commerce-Kanal übernehmen.</li>' +
       '<li>Kundenbedürfnisse und Unternehmensziele in eine priorisierte Roadmap übersetzen.</li>' +
       '<li>Den gesamten Weg von Problem und Anforderung bis Feature, Roll-out und Wirkung begleiten.</li>' +
       '<li>Meine technische Tiefe nutzen, ohne wieder hauptsächlich selbst zu entwickeln.</li>' +
       '<li>Den Umgang mit Business-KPIs und B2B-spezifischen Produktentscheidungen systematisch ausbauen.</li>' +
       '</ul>' +
     '</div>';

  CONTENT.en[2] = '<div class="mtabs" data-group="pitch">' +
      '<button class="mtab active" data-tab="haupt">Main Version (60–90 sec.)</button>' +
      '<button class="mtab" data-tab="kurz">Short Version (30 sec.)</button>' +
      '<button class="mtab" data-tab="weg">Where from · where to</button>' +
     '</div>' +
     '<div class="mtabpanel active" data-panel="haupt" data-group="pitch">' +
       '<p>I originally come from frontend development and spent more than ten years in agencies working on websites, online shops, relaunches, and digital platforms. For a long time it hasn\'t been only about code for me. I clarified requirements, assessed technical feasibility, structured work packages, and brought clients, design, backend, and frontend together. I also accompanied testing, fixes, releases, and go-lives.</p>' +
       '<p>What suits me most is combining the user perspective, technical reality, and clear delivery. I understand what\'s behind a shop feature, spot dependencies early, and can write requirements so <mark>devs and business teams work from the same basis</mark>.</p>' +
       '<p>What appeals to me about FRICKE is that the B2B web shop is a central sales channel with real business and technical depth. The role combines product strategy, customer journey, requirements, development, metrics, and roll-outs. That\'s exactly where I can bring my e-commerce experience and deliberately expand ownership of roadmap and data-driven product decisions.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="kurz" data-group="pitch">' +
       '<p>I come from frontend development and spent more than ten years on shops, websites, relaunches, and platforms. My focus has shifted more and more to requirements, feasibility, alignment, quality, and releases. I understand devs and can at the same time turn user needs and business goals into clear tasks.</p>' +
       '<div class="lead">At FRICKE I want to bring this experience to a relevant B2B web shop and deliberately grow roadmap and product impact.</div>' +
       H('Why FRICKE') +
       '<p>The B2B shop is a central sales channel with real value for dealers and workshops. Search, huge assortments, technical product data, customer accounts, and reliable roll-outs are demanding. That combination of e-commerce, platform, and technical depth fits me.</p>' +
     '</div>' +
     '<div class="mtabpanel" data-panel="weg" data-group="pitch">' +
       '<p style="font-weight:800;color:var(--ink);margin:0 0 6px;">Where I Come From</p>' +
       '<ul class="tight">' +
       '<li>More than ten years with digital products, websites, and online shops.</li>' +
       '<li>Senior frontend experience with Shopify, Shopware, Spryker, WordPress, Vue, and React.</li>' +
       '<li>Agency projects for clients such as ALDI Süd, Möbel Martin, KORO, FOODIST, and LOUIS.</li>' +
       '<li>Translated requirements between clients, design, backend, frontend, and external partners.</li>' +
       '<li>Looked at usability, accessibility, feasibility, and quality together.</li>' +
       '<li>Accompanied testing, releases, and go-lives in a structured way.</li>' +
       '<li>Co-maintained a modular platform for more than ten Unilever brands in DACH.</li>' +
       '</ul>' +
       '<p style="font-weight:800;color:var(--ink);margin:14px 0 6px;">Where I Want to Go</p>' +
       '<ul class="tight">' +
       '<li>Take product ownership for a relevant e-commerce channel.</li>' +
       '<li>Translate customer needs and company goals into a prioritized roadmap.</li>' +
       '<li>Accompany the whole path from problem and requirement to feature, roll-out, and impact.</li>' +
       '<li>Use my technical depth without mainly developing myself again.</li>' +
       '<li>Systematically build up working with business KPIs and B2B-specific product decisions.</li>' +
       '</ul>' +
     '</div>';

  // ===== 3 · Strengths and Weaknesses =====
  CONTENT.de[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Technische Anforderungen verständlich machen</div><div class="b">Ich erkenne früh, welche Abhängigkeiten hinter einer scheinbar einfachen Shopanforderung liegen. Bei Patrick &amp; Friends habe ich Anforderungen mit Kunden, Design, Backend und Frontend geklärt und in handhabbare Arbeitspakete übersetzt. Das reduziert Missverständnisse und schafft eine belastbare Grundlage für Aufwand und Umsetzung.</div></div>' +
    '<div class="c"><div class="t">Nutzererlebnis und Machbarkeit verbinden</div><div class="b">Ich betrachte Oberflächen nicht nur visuell. Zustände, Inhalte, responsives Verhalten, Barrierefreiheit, Daten und technische Grenzen gehören für mich zusammen. So arbeite ich mit UX und Devs auf Augenhöhe und vertrete gleichzeitig die Nutzerperspektive.</div></div>' +
    '<div class="c"><div class="t">Qualität bis zum Roll-out mitdenken</div><div class="b">Ich höre nicht bei der Übergabe einer Anforderung auf. Tests, Korrekturen, Abnahme, Release und Kommunikation gehören zum Produktprozess – passend zu FRICKEs Erwartung, Features technisch vorzubereiten und Fachbereiche beim Roll-out mitzunehmen.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Schwächen</p>' +
    '<ul class="tight">' +
    '<li><b>Direktheit:</b> Ich spreche Unklarheiten und Risiken eher direkt an. Das ist in Projekten hilfreich, kann aber je nach Situation härter wirken als beabsichtigt. Deshalb achte ich bewusst auf Zeitpunkt, Kontext und Formulierung: klar in der Sache und respektvoll gegenüber der Person.</li>' +
    '<li><b>Trockener Humor und Sarkasmus:</b> Gehört zu mir und kann Spannung aus Situationen nehmen. Bei neuen Kontakten oder in angespannten Momenten halte ich ihn zunächst zurück, bis ich Menschen und Rahmen einschätzen kann.</li>' +
    '<li><b>Nur bei lockerer Atmosphäre:</b> Meine ungefährlichste Schwäche ist Kinderschokolade. Sie gefährdet höchstens den Bürovorrat. Nur als kurzer menschlicher Abschluss, nicht als einzige Schwäche.</li>' +
    '</ul>';

  CONTENT.en[3] = '<div class="card3">' +
    '<div class="c"><div class="t">Making technical requirements understandable</div><div class="b">I spot early which dependencies sit behind a seemingly simple shop requirement. At Patrick &amp; Friends, I clarified requirements with clients, design, backend, and frontend and turned them into manageable work packages. That reduces misunderstandings and creates a solid basis for effort and delivery.</div></div>' +
    '<div class="c"><div class="t">Connecting user experience and feasibility</div><div class="b">I don\'t look at interfaces only visually. States, content, responsive behavior, accessibility, data, and technical limits belong together for me. That lets me work with UX and devs as an equal while representing the user perspective.</div></div>' +
    '<div class="c"><div class="t">Thinking quality through to roll-out</div><div class="b">I don\'t stop at handing over a requirement. Testing, fixes, acceptance, release, and communication are part of the product process – matching FRICKE\'s expectation to prepare features technically and bring business teams along at roll-out.</div></div>' +
    '</div>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Weaknesses</p>' +
    '<ul class="tight">' +
    '<li><b>Directness:</b> I tend to address ambiguity and risk directly. Helpful in projects, but depending on the situation it can land harder than intended. So I\'m deliberate about timing, context, and phrasing: clear on the matter, respectful toward the person.</li>' +
    '<li><b>Dry humor and sarcasm:</b> part of who I am and can take tension out of situations. With new contacts or in tense moments I hold it back until I can read the people and the setting.</li>' +
    '<li><b>Only when the mood is relaxed:</b> my least dangerous weakness is Kinderschokolade. It endangers, at most, the office supply. Only as a short human closer, never as the only weakness.</li>' +
    '</ul>';

  // ===== 4 · FRICKE, GRANIT & the Role =====
  CONTENT.de[4] = H('FRICKE Gruppe', true) +
    '<p>Familiengeführtes Handels- und Dienstleistungsunternehmen mit Hauptsitz in Heeslingen, gegründet 1923. 2026 rund 4.000 Mitarbeitende an 107 Standorten in 30 Ländern. Geschäftsbereiche: Landmaschinen, Gartentechnik, Nutzfahrzeuge und Ersatzteile.</p>' +
    H('GRANIT PARTS') +
    '<p>Die Stelle gehört zur Wilhelm Fricke SE und damit zu GRANIT PARTS – einem der führenden europäischen Großhändler für Ersatzteile und Komponenten für Land- und Baumaschinen, Garten-, Kommunal- und Forsttechnik sowie Nutzfahrzeuge. Kunden sind vor allem <b>Fachhändler und Werkstätten</b>.</p>' +
    '<p>Der B2B-Webshop ist daher kein klassischer Endkundenshop: Produktfindbarkeit, technische Artikeldaten, Verfügbarkeit, schnelle Bestellung, Kundenkonten, Konditionen, Logistik und verlässlicher Service sind besonders wichtig.</p>' +
    H('Die Rolle') +
    '<p>Zentrale Verbindung zwischen Fachbereichen, UX und technischer Entwicklung: Produktstrategie und Roadmap; Anforderungen und Akzeptanzkriterien; Optimierung von Suche, Produktdarstellung, Warenkorb, Checkout und Kundenkonto; KPI-Definition; Tests; Stakeholder-Kommunikation; Releases und Feature-Roll-outs.</p>' +
    H('Was FRICKE aktuell beschäftigen dürfte') +
    '<ul class="tight">' +
    '<li><b>Produktsuche und große Sortimente:</b> Kunden suchen über Artikelnummern, technische Merkmale, Maschinen oder Vergleichsteile. Die Suche muss Tippfehler, komplexe Nummernlogiken und unterschiedliche Suchmuster beherrschen. FRICKE hat die Suche bereits weiterentwickelt → nicht fragen, ob Suche wichtig ist, sondern welche nächsten Potenziale gesehen werden.</li>' +
    '<li><b>Vom Webshop zum digitalen Service:</b> Über den GRANIT Partnershop bieten Fachhändler ihren Kunden einen Shop im eigenen Auftritt an. Die Plattform soll den Händler nicht umgehen, sondern seine Kundenbeziehung stärken. Produktentscheidungen müssen GRANIT, Fachhändler und deren Endkunden zusammenbringen.</li>' +
    '<li><b>Internationalisierung und Roll-out:</b> Neue Funktionen müssen mit unterschiedlichen Märkten, Sprachen, Prozessen und Teams funktionieren → transparente Prioritäten, saubere Akzeptanzkriterien, strukturierte Roll-outs.</li>' +
    '<li><b>Daten und Wirkung:</b> Features sollen anhand von Nutzungsdaten, Tests, Kundenfeedback und KPIs bewertet werden. Offen sagen: starke qualitative und technische Analyse; eigenständige Verantwortung für kommerzielle Produkt-KPIs ist ein Ausbaugebiet.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">Mein Fit zur Stelle</p>' +
    '<table class="info">' +
    '<tr><th>Erwartung</th><th>Mein belegbarer Beitrag</th></tr>' +
    '<tr><td class="k">B2B-Webshop technisch weiterentwickeln</td><td>Langjährige E-Commerce- und Storefront-Erfahrung mit Shopify, Shopware und Spryker sowie tiefes Frontend-Verständnis</td></tr>' +
    '<tr><td class="k">Kundenbedürfnisse in Produktanforderungen übersetzen</td><td>Anforderungen strukturiert, Machbarkeit und Abhängigkeiten geklärt und in umsetzbare Arbeitspakete übertragen</td></tr>' +
    '<tr><td class="k">Customer Journey optimieren</td><td>Usability, Barrierefreiheit, responsive Oberflächen, Produktdarstellung und Shopprozesse</td></tr>' +
    '<tr><td class="k">Zusammenarbeit mit Entwicklung und UX steuern</td><td>Langjährige Schnittstellenarbeit zwischen Kunden, Design, Backend, Frontend und externen Partnern</td></tr>' +
    '<tr><td class="k">Features abnehmen und Releases begleiten</td><td>Qualitätssicherung, Korrekturen, Akzeptanz, Releases und Go-lives praktisch begleitet</td></tr>' +
    '<tr><td class="k">Stakeholder informieren und priorisieren</td><td>Ziele, offene Entscheidungen, Aufwand und Folgen nachvollziehbar gemacht</td></tr>' +
    '<tr><td class="k">Plattformdenken und Skalierung</td><td>Modulare Whitelabel-Plattform für mehr als zehn Unilever-Marken mitbetreut</td></tr>' +
    '<tr><td class="k">Roadmap und KPI-Verantwortung</td><td>Methodisches Fundament vorhanden; eigenständige kommerzielle Gesamtverantwortung gezielt ausbauen</td></tr>' +
    '</table>' +

    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Begriffe, die ich für dieses Gespräch kennen sollte</p>' +

    TERM('B2B- vs. B2C-Shop') +
    '<ul class="tight">' +
    '<li>Kunden sind Firmen mit Kundenkonto, oft mehreren Benutzern und Rollen</li>' +
    '<li>Individuelle Preise und Konditionen, Kauf auf Rechnung</li>' +
    '<li>Schnellbestellung per Artikelnummer, Listen-Upload, Nachbestellung</li>' +
    '<li>Ziel: Effizienz für Wiederkäufer, nicht Inspiration</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p>Im B2B kommen Kunden meist mit einem konkreten Bedarf: Eine Werkstatt braucht ein bestimmtes Teil für eine bestimmte Maschine, möglichst schnell. Wichtig sind deshalb <b>Suche und Teilefindung</b> (Artikelnummer, OE-Nummer, Vergleichsnummer, Maschinentyp), <b>Verfügbarkeit und Liefertermin</b>, <b>kundenspezifische Preise</b>, <b>Merklisten und Schnellerfassung</b>, <b>Bestellhistorie</b> sowie Freigaben und Rollen im Kundenkonto. Häufig hängen ERP und PIM direkt am Shop.</p>' +
      '<p><b>Was das für die Produktrolle heißt:</b> Erfolg misst sich weniger an Inspirations- oder Warenkorbgröße, sondern an Bestellgeschwindigkeit, Suchtrefferqualität, Anteil Online-Bestellungen und entlastetem Kundenservice.</p>' +
      '<div class="erg">Ehrlich bleiben: Shop-Praxis ja, B2B-Fachlogik als Ausbaugebiet benennen.</div>') +

    TERM('Such-KPIs') +
    '<ul class="tight">' +
    '<li>Nulltreffer-Rate: Anteil Suchen ohne Ergebnis</li>' +
    '<li>Suchabbrüche und Verfeinerungen</li>' +
    '<li>Klickrate auf Ergebnisse, Position des geklickten Treffers</li>' +
    '<li>Conversion nach Suche</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p>Nulltreffer-Listen zeigen direkt, wo Synonyme, Tippfehlertoleranz oder Nummernlogiken fehlen. Werden Ergebnisse geklickt, aber selten gekauft, stimmt oft die Relevanz oder die Produktdarstellung nicht. Ergänzend wichtig: Feedback aus Vertrieb und Kundenservice – welche Teile finden Kunden nicht und rufen deshalb an?</p>' +
      '<div class="erg">Passt zur fachlichen Frage „Wie würden Sie die Suche verbessern?“ in Box 6.</div>') +

    TERM('Akzeptanzkriterien') +
    '<ul class="tight">' +
    '<li>Prüfbare Bedingungen, wann eine Story fertig ist</li>' +
    '<li>Oft im Format Gegeben – Wenn – Dann</li>' +
    '<li>Grundlage für Test und Abnahme</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p>Beispiel: <i>Gegeben</i> ein eingeloggter Händler mit Sonderkondition, <i>wenn</i> er eine Artikelnummer in die Schnellbestellung eingibt, <i>dann</i> sieht er seinen individuellen Preis und die Verfügbarkeit im Lager. Dazu gehören auch Randfälle: Artikel nicht verfügbar, Nummer ungültig, Ersatzartikel vorhanden.</p>' +
      '<div class="erg">Brücke zu mir: Zustände und Randfälle früh klären ist genau STAR 1.</div>') +

    TERM('Feature-Roll-out') +
    '<ul class="tight">' +
    '<li>Schrittweise Einführung statt Big Bang</li>' +
    '<li>Feature Flags, Pilotmärkte oder Pilotkunden</li>' +
    '<li>Monitoring und Rückfallplan</li>' +
    '<li>Fachbereiche und Kundenservice vorher informieren</li>' +
    '</ul>' +
    MORE('Ausführlicher erklärt',
      '<p>Mit <b>Feature Flags</b> lässt sich eine Funktion ausliefern, aber nur für bestimmte Kunden oder Märkte aktivieren. So kann man mit einem Pilotmarkt starten, Fehler und Nutzung beobachten und dann ausweiten. Bei internationalen Roll-outs zusätzlich: Übersetzungen, lokale Prozesse und Ansprechpartner je Markt.</p>' +
      '<div class="erg">Passt zur Frage „Wie stellen Sie einen erfolgreichen Roll-out sicher?“ in Box 6.</div>');

  CONTENT.en[4] = H('FRICKE Group', true) +
    '<p>Family-run trading and services company headquartered in Heeslingen, founded in 1923. In 2026 about 4,000 employees at 107 locations in 30 countries. Business areas: agricultural machinery, garden technology, commercial vehicles, and spare parts.</p>' +
    H('GRANIT PARTS') +
    '<p>The role belongs to Wilhelm Fricke SE and thus to GRANIT PARTS – one of Europe\'s leading wholesalers of spare parts and components for agricultural and construction machinery, garden, municipal, and forestry technology, and commercial vehicles. Customers are mainly <b>dealers and workshops</b>.</p>' +
    '<p>So the B2B web shop isn\'t a classic consumer shop: findability, technical item data, availability, fast ordering, customer accounts, terms, logistics, and reliable service matter most.</p>' +
    H('The Role') +
    '<p>Central link between business teams, UX, and technical development: product strategy and roadmap; requirements and acceptance criteria; optimizing search, product display, cart, checkout, and customer account; KPI definition; testing; stakeholder communication; releases and feature roll-outs.</p>' +
    H('What Likely Keeps FRICKE Busy') +
    '<ul class="tight">' +
    '<li><b>Product search and huge assortments:</b> customers search by item numbers, technical attributes, machines, or cross-reference parts. Search must handle typos, complex number logic, and different search patterns. FRICKE has already improved search → don\'t ask whether search matters, ask which next opportunities they see.</li>' +
    '<li><b>From web shop to digital service:</b> via the GRANIT Partnershop, dealers offer their customers a shop under their own brand. The platform is meant to strengthen, not bypass, the dealer\'s customer relationship. Product decisions must align GRANIT, dealers, and their end customers.</li>' +
    '<li><b>Internationalization and roll-out:</b> new features must work across markets, languages, processes, and teams → transparent priorities, clean acceptance criteria, structured roll-outs.</li>' +
    '<li><b>Data and impact:</b> features are to be evaluated by usage data, tests, customer feedback, and KPIs. Say openly: strong qualitative and technical analysis; independent ownership of commercial product KPIs is an area to grow.</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 8px;">My Fit for the Role</p>' +
    '<table class="info">' +
    '<tr><th>Expectation</th><th>My documented contribution</th></tr>' +
    '<tr><td class="k">Develop the B2B web shop technically</td><td>Many years of e-commerce and storefront experience with Shopify, Shopware, and Spryker plus deep frontend understanding</td></tr>' +
    '<tr><td class="k">Translate customer needs into product requirements</td><td>Structured requirements, clarified feasibility and dependencies, turned them into actionable work packages</td></tr>' +
    '<tr><td class="k">Optimize the customer journey</td><td>Usability, accessibility, responsive interfaces, product display, and shop processes</td></tr>' +
    '<tr><td class="k">Steer collaboration with development and UX</td><td>Many years of interface work between clients, design, backend, frontend, and external partners</td></tr>' +
    '<tr><td class="k">Accept features and accompany releases</td><td>Hands-on QA, fixes, acceptance, releases, and go-lives</td></tr>' +
    '<tr><td class="k">Inform stakeholders and prioritize</td><td>Made goals, open decisions, effort, and consequences traceable</td></tr>' +
    '<tr><td class="k">Platform thinking and scaling</td><td>Co-maintained a modular white-label platform for more than ten Unilever brands</td></tr>' +
    '<tr><td class="k">Roadmap and KPI ownership</td><td>Methodical foundation in place; deliberately expand independent commercial ownership</td></tr>' +
    '</table>' +

    '<p style="font-weight:800;color:var(--ink);margin:18px 0 4px;">Terms I Should Know for This Conversation</p>' +

    TERM('B2B vs. B2C Shop') +
    '<ul class="tight">' +
    '<li>Customers are companies with accounts, often multiple users and roles</li>' +
    '<li>Individual prices and terms, purchase on invoice</li>' +
    '<li>Quick order by item number, list upload, reorder</li>' +
    '<li>Goal: efficiency for repeat buyers, not inspiration</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p>In B2B, customers usually arrive with a concrete need: a workshop needs a specific part for a specific machine, fast. So what matters is <b>search and part finding</b> (item number, OE number, cross-reference, machine type), <b>availability and delivery date</b>, <b>customer-specific prices</b>, <b>saved lists and quick entry</b>, <b>order history</b>, plus approvals and roles in the account. ERP and PIM are often connected directly to the shop.</p>' +
      '<p><b>What it means for the product role:</b> success is measured less by inspiration or basket size and more by ordering speed, search result quality, share of online orders, and relief for customer service.</p>' +
      '<div class="erg">Stay honest: shop practice yes, B2B domain logic named as an area to grow.</div>') +

    TERM('Search KPIs') +
    '<ul class="tight">' +
    '<li>Zero-result rate: share of searches without results</li>' +
    '<li>Search exits and refinements</li>' +
    '<li>Click-through on results, position of the clicked hit</li>' +
    '<li>Conversion after search</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p>Zero-result lists show directly where synonyms, typo tolerance, or number logic are missing. If results get clicked but rarely bought, relevance or product display is often off. Also important: feedback from sales and customer service – which parts can\'t customers find, so they call instead?</p>' +
      '<div class="erg">Fits the domain question "How would you improve search?" in box 6.</div>') +

    TERM('Acceptance Criteria') +
    '<ul class="tight">' +
    '<li>Testable conditions for when a story is done</li>' +
    '<li>Often in Given – When – Then format</li>' +
    '<li>Basis for testing and sign-off</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p>Example: <i>Given</i> a logged-in dealer with special terms, <i>when</i> they enter an item number in quick order, <i>then</i> they see their individual price and warehouse availability. Edge cases belong too: item unavailable, invalid number, replacement item exists.</p>' +
      '<div class="erg">Bridge to me: clarifying states and edge cases early is exactly STAR 1.</div>') +

    TERM('Feature Roll-out') +
    '<ul class="tight">' +
    '<li>Gradual introduction instead of big bang</li>' +
    '<li>Feature flags, pilot markets, or pilot customers</li>' +
    '<li>Monitoring and fallback plan</li>' +
    '<li>Inform business teams and customer service beforehand</li>' +
    '</ul>' +
    MORE('Explained in more detail',
      '<p>With <b>feature flags</b> a feature can be shipped but only switched on for certain customers or markets. That allows starting with a pilot market, watching errors and usage, then expanding. For international roll-outs also: translations, local processes, and contacts per market.</p>' +
      '<div class="erg">Fits the question "How do you ensure a successful roll-out?" in box 6.</div>');

  // ===== 5 · STAR Answers =====
  CONTENT.de[5] = '<div class="lead">Zwei Beispiele parat haben: <b>2 modulare Plattform</b> und <b>1 Shopanforderungen</b>. Kennzahlen nur nennen, wenn sie belegt sind.</div>' +
    STAR('1 · Anforderungen für einen Shop klären', 'Ich kläre zuerst Ziel, Nutzerfall und Zustände, bevor über Lösung oder Aufwand gesprochen wird.', 'Kernaussage', [
      ['Situation', 'Briefings oder Designs enthielten noch offene Zustände und technische Fragen, während Aufwand und Umsetzung bereits geplant werden sollten.'],
      ['Aufgabe', 'Eine gemeinsame und belastbare Grundlage für Kunden, Design und Devs schaffen.'],
      ['Vorgehen', 'Ich habe Ziel, Nutzerfall, Inhalte, Zustände und Abhängigkeiten geklärt, Annahmen markiert und daraus Arbeitspakete und Prüfkriterien formuliert.'],
      ['Ergebnis', 'Offene Entscheidungen wurden früher sichtbar und die Beteiligten konnten mit demselben Verständnis weiterarbeiten.']
    ]) +
    STAR('2 · Mehrere Marken auf einer Plattform (deepblue)', 'Gemeinsame Logik, konfigurierbare Unterschiede und echte Sonderfälle trennen – Plattformdenken.', 'Kernaussage', [
      ['Situation', 'Bei deepblue wurde eine modulare Plattform für mehr als zehn Unilever-Marken im DACH-Raum betreut.'],
      ['Aufgabe', 'Unterschiedliche Markenanforderungen mit Wiederverwendbarkeit und konsistenter Qualität verbinden.'],
      ['Vorgehen', 'Ich habe gemeinsame Logik, konfigurierbare Unterschiede und echte Sonderfälle voneinander getrennt und Anforderungen entsprechend eingeordnet.'],
      ['Ergebnis', 'Unterschiedliche Markenauftritte blieben auf einer gemeinsamen technischen Grundlage möglich.']
    ]) +
    '<div class="erg">Brücke zu FRICKE: Dieselbe Logik gilt für den GRANIT Partnershop und internationale Märkte – gemeinsame Plattform, konfigurierbare Unterschiede je Händler oder Land.</div>' +
    STAR('3 · UX und Entwicklung verbinden', 'Design und Technik nicht als Übergabe, sondern als gemeinsame Klärung.', 'Kernaussage', [
      ['Situation', 'Visuelle Konzepte für Shops und Websites mussten zu Daten, CMS, responsivem Verhalten und technischen Grenzen passen.'],
      ['Aufgabe', 'Nutzererlebnis und realistische Umsetzung zusammenbringen.'],
      ['Vorgehen', 'Ich habe Designs auf Zustände, Inhalte, Barrierefreiheit und Abhängigkeiten geprüft, offene Punkte gemeinsam geklärt und Entscheidungen in Aufgaben übersetzt.'],
      ['Ergebnis', 'Technische Fragen wurden früher erkannt und Nacharbeit in der Umsetzung reduziert.']
    ]) +
    STAR('4 · Zusatzwünsche bei festem Termin', 'Eine nachvollziehbare Entscheidung statt eines stillen Ja.', 'Kernaussage', [
      ['Situation', 'Vor einem geplanten Go-live kamen weitere Wünsche hinzu, während bereits Abhängigkeiten und ein Termin bestanden.'],
      ['Aufgabe', 'Den notwendigen Umfang schützen und trotzdem nachvollziehbar mit den Wünschen umgehen.'],
      ['Vorgehen', 'Ich habe Muss und Kann getrennt, Aufwand und Risiko mit den Devs geprüft und Optionen mit Folgen für Termin, Qualität und Umfang dargestellt.'],
      ['Ergebnis', 'Der Go-live konnte auf einen klaren Kern ausgerichtet werden; weitere Wünsche blieben dokumentiert und planbar.']
    ]) +
    STAR('5 · Risiko vor einem Release', 'Entscheidungen auf Basis eines klaren Fehlerbilds.', 'Kernaussage', [
      ['Situation', 'Kurz vor einem Release musste ein Fehler hinsichtlich Auswirkung und Dringlichkeit bewertet werden.'],
      ['Aufgabe', 'Eine belastbare Entscheidung zwischen Korrektur, Workaround und Verschiebung ermöglichen.'],
      ['Vorgehen', 'Ich habe Soll und Ist, Reproduktionsschritte, betroffene Bereiche und Abhängigkeiten dokumentiert und die Optionen transparent gemacht.'],
      ['Ergebnis', 'Das Team konnte auf Basis eines klaren Fehlerbilds entscheiden; Korrektur und Retest wurden nachvollziehbar verfolgt.']
    ]) +
    STAR('6 · Unterschiedliche Stakeholder koordinieren', 'Entscheidungen und nächste Schritte für alle Beteiligten klar halten.', 'Kernaussage', [
      ['Situation', 'In Agenturprojekten hatten Kunden, Design, Backend, Frontend und externe Partner unterschiedliche Informationsbedürfnisse und Abhängigkeiten.'],
      ['Aufgabe', 'Entscheidungen und nächste Schritte für alle Beteiligten klar halten.'],
      ['Vorgehen', 'Ich habe offene Fragen und Zuständigkeiten sichtbar gemacht, technische Einschätzungen eingeholt und Entscheidungen in verständlicher Form zurückgespielt.'],
      ['Ergebnis', 'Abstimmungen wurden verbindlicher und das Team konnte auf einer klareren Grundlage weiterarbeiten.']
    ]);

  CONTENT.en[5] = '<div class="lead">Have two examples ready: <b>2 modular platform</b> and <b>1 shop requirements</b>. Only name figures when documented.</div>' +
    STAR('1 · Clarifying requirements for a shop', 'I clarify goal, use case, and states first, before discussing solution or effort.', 'Core message', [
      ['Situation', 'Briefs or designs still had open states and technical questions while effort and delivery were already being planned.'],
      ['Task', 'Create a shared, solid basis for clients, design, and devs.'],
      ['Action', 'I clarified goal, use case, content, states, and dependencies, flagged assumptions, and derived work packages and acceptance criteria.'],
      ['Result', 'Open decisions surfaced earlier and everyone could continue with the same understanding.']
    ]) +
    STAR('2 · Several brands on one platform (deepblue)', 'Separate shared logic, configurable differences, and genuine edge cases – platform thinking.', 'Core message', [
      ['Situation', 'At deepblue, a modular platform for more than ten Unilever brands in DACH was maintained.'],
      ['Task', 'Combine different brand requirements with reusability and consistent quality.'],
      ['Action', 'I separated shared logic, configurable differences, and genuine edge cases and categorized requirements accordingly.'],
      ['Result', 'Different brand experiences stayed possible on a shared technical foundation.']
    ]) +
    '<div class="erg">Bridge to FRICKE: the same logic applies to the GRANIT Partnershop and international markets – one platform, configurable differences per dealer or country.</div>' +
    STAR('3 · Connecting UX and development', 'Design and tech not as a handover, but as a joint clarification.', 'Core message', [
      ['Situation', 'Visual concepts for shops and websites had to fit data, CMS, responsive behavior, and technical limits.'],
      ['Task', 'Bring user experience and realistic delivery together.'],
      ['Action', 'I checked designs for states, content, accessibility, and dependencies, clarified open points together, and turned decisions into tasks.'],
      ['Result', 'Technical questions were spotted earlier and rework during delivery was reduced.']
    ]) +
    STAR('4 · Extra requests with a fixed deadline', 'A traceable decision instead of a silent yes.', 'Core message', [
      ['Situation', 'Before a planned go-live, more requests came in while dependencies and a date already existed.'],
      ['Task', 'Protect the necessary scope and still handle the requests transparently.'],
      ['Action', 'I separated must from nice-to-have, checked effort and risk with the devs, and laid out options with consequences for timeline, quality, and scope.'],
      ['Result', 'Go-live could focus on a clear core; further requests stayed documented and plannable.']
    ]) +
    STAR('5 · Risk before a release', 'Decisions based on a clear defect picture.', 'Core message', [
      ['Situation', 'Shortly before a release, a defect had to be assessed for impact and urgency.'],
      ['Task', 'Enable a solid decision between fix, workaround, and postponement.'],
      ['Action', 'I documented expected vs. actual, reproduction steps, affected areas, and dependencies and made the options transparent.'],
      ['Result', 'The team could decide on a clear defect picture; fix and retest were tracked traceably.']
    ]) +
    STAR('6 · Coordinating different stakeholders', 'Keep decisions and next steps clear for everyone involved.', 'Core message', [
      ['Situation', 'In agency projects, clients, design, backend, frontend, and external partners had different information needs and dependencies.'],
      ['Task', 'Keep decisions and next steps clear for everyone involved.'],
      ['Action', 'I made open questions and responsibilities visible, gathered technical assessments, and fed decisions back in an understandable way.'],
      ['Result', 'Alignments became more binding and the team could work from a clearer basis.']
    ]);

  // ===== 6 · Tough & Domain Questions =====
  CONTENT.de[6] = H('Kritische Fragen', true) +
    QA('„Sie haben noch keinen B2B-Webshop als Product Owner verantwortet.“',
      'Das stimmt. Ich würde nicht behaupten, bereits jahrelang die alleinige Produktverantwortung für einen B2B-Webshop getragen zu haben. Ich bringe aber mehr als zehn Jahre Shop-, Plattform- und Agenturerfahrung mit und kenne Anforderungen, technische Abhängigkeiten, UX, Qualität und Releases sehr gut. Die B2B-spezifische Fachlogik und die formale Roadmap-Verantwortung möchte ich bei FRICKE gezielt vertiefen.') +
    QA('„Welche Marktplatzerfahrung haben Sie?“',
      'Meine belegte Erfahrung liegt stärker bei Onlineshops, Storefronts und digitalen Plattformen als bei der eigenständigen Steuerung eines Marktplatzes. Ich kenne aber die technischen und organisatorischen Fragen hinter Produktdaten, Schnittstellen, modularen Plattformen und unterschiedlichen Beteiligten. Das würde ich nicht als fertige Marktplatzexpertise verkaufen, sondern als belastbare Grundlage.') +
    QA('„Welche Erfahrung haben Sie mit KPIs?“',
      'Ich habe Qualität, Nutzerführung, technische Fehlerbilder und Umsetzungsergebnisse ausgewertet und Entscheidungen daraus abgeleitet. Eine langjährige alleinige Verantwortung für Umsatz-, Conversion- oder Deckungsbeitragsziele würde ich nicht behaupten. Ich möchte verstehen, welche KPIs FRICKE heute für Suche, Checkout, Kundenkonto und Roll-outs nutzt und wie Produktentscheidungen daran gemessen werden.') +
    QA('„Sie haben kein klassisches wirtschaftliches Studium.“',
      'Ich habe eine IHK-Ausbildung in Mediengestaltung, eine fachgebundene Hochschulreife, mehr als zehn Jahre relevante Berufspraxis und eine Weiterbildung im AI Project Management. Meine vergleichbare Qualifikation entsteht vor allem aus der Verbindung von E-Commerce-Praxis, technischem Verständnis, Nutzerperspektive und Delivery-Erfahrung.') +
    QA('„Warum Senior E-Commerce Manager?“',
      'Seniorität bringe ich aus der Tiefe meiner Digital- und E-Commerce-Erfahrung mit. Neu ist nicht der Shop- oder Projektalltag, sondern der formale Schwerpunkt auf Roadmap, KPIs und Produktverantwortung. Ich kann technisch und fachlich schnell belastbar mitarbeiten und benenne gleichzeitig offen, welche Verantwortung ich ausbaue.') +
    QA('„Warum möchten Sie nicht mehr entwickeln?“',
      'Ich wende mich nicht von Technik ab. Ich möchte sie anders einsetzen: um bessere Anforderungen und Entscheidungen zu ermöglichen, Risiken früh zu erkennen und Devs die nötige Klarheit zu geben. Die verbindende Arbeit zwischen Nutzerbedarf, Fachbereich, UX und Entwicklung liegt mir heute mehr als die alleinige Umsetzung im Code.') +
    '<p style="font-weight:800;color:var(--ink);margin:18px 0 6px;">Wahrscheinliche fachliche Fragen (Christoph Wege)</p>' +
    QA('„Wie würden Sie Anforderungen aus mehreren Fachbereichen priorisieren?“',
      'Ich würde zuerst das gemeinsame Ziel und den betroffenen Nutzerfall klären. Danach bewerte ich Nutzen, Dringlichkeit, Reichweite, Aufwand, Risiko und Abhängigkeiten. Unterschiedliche Interessen mache ich sichtbar und führe eine Entscheidung herbei. Wichtig ist, dass die Priorisierung dokumentiert ist und Stakeholder die Gründe nachvollziehen können.') +
    QA('„Wie würden Sie die Produktsuche verbessern?“',
      'Ich würde qualitative und quantitative Signale verbinden: häufige Suchbegriffe, Nulltreffer, Suchabbrüche, Klicks auf Ergebnisse, Conversion nach Suche sowie Feedback aus Vertrieb und Kundenservice. Daraus entstehen konkrete Problemgruppen. Änderungen würde ich mit klaren Erfolgskriterien testen und danach auswerten.') +
    QA('„Wie formulieren Sie eine gute User Story?“',
      'Die Story braucht einen verständlichen Nutzer, ein Ziel und einen Nutzen. Entscheidend sind für mich zusätzlich Kontext, Regeln, Abhängigkeiten, relevante Zustände und überprüfbare Akzeptanzkriterien. Eine Story ist nicht gut, weil sie formal korrekt klingt, sondern wenn UX, Devs, Fachbereich und Test dasselbe Verständnis haben.') +
    QA('„Ein Fachbereich stuft alles als dringend ein – was tun Sie?“',
      'Ich frage nach der konkreten Auswirkung: Welcher Kunde, welcher Prozess und welches Ergebnis sind betroffen. Danach stelle ich die neuen Anforderungen den bereits vereinbarten Zielen gegenüber. Wenn alles dringend ist, fehlt eine Entscheidung. Meine Aufgabe ist es, Optionen und Folgen transparent zu machen, nicht still alles ins Backlog zu übernehmen.') +
    QA('„Wie stellen Sie einen erfolgreichen Roll-out sicher?“',
      'Technische Fertigstellung allein reicht nicht. Ich kläre Abnahme, betroffene Prozesse, Kommunikation, Schulungsbedarf, Verantwortlichkeiten, Monitoring und einen Rückfallplan. Nach dem Roll-out prüfe ich Fehler, Nutzung und Feedback anhand vorher vereinbarter Kriterien.');

  CONTENT.en[6] = H('Tough Questions', true) +
    QA('"You haven\'t owned a B2B web shop as product owner yet."',
      'That\'s right. I wouldn\'t claim years of sole product ownership for a B2B web shop. But I bring more than ten years of shop, platform, and agency experience and know requirements, technical dependencies, UX, quality, and releases very well. I want to deepen the B2B-specific domain logic and formal roadmap ownership at FRICKE.') +
    QA('"What marketplace experience do you have?"',
      'My documented experience lies more in online shops, storefronts, and digital platforms than in independently running a marketplace. But I know the technical and organizational questions behind product data, integrations, modular platforms, and multiple parties. I wouldn\'t sell that as finished marketplace expertise, but as a solid foundation.') +
    QA('"What experience do you have with KPIs?"',
      'I\'ve evaluated quality, user guidance, technical defect patterns, and delivery results and derived decisions from them. I wouldn\'t claim long-standing sole responsibility for revenue, conversion, or contribution-margin targets. I\'d like to understand which KPIs FRICKE uses today for search, checkout, customer account, and roll-outs, and how product decisions are measured against them.') +
    QA('"You don\'t have a classic business degree."',
      'I have an IHK apprenticeship in media design, a subject-specific university entrance qualification, more than ten years of relevant practice, and AI Project Management training. My equivalent qualification comes mainly from combining e-commerce practice, technical understanding, user perspective, and delivery experience.') +
    QA('"Why Senior E-Commerce Manager?"',
      'Seniority comes from the depth of my digital and e-commerce experience. What\'s new isn\'t day-to-day shop or project work, but the formal focus on roadmap, KPIs, and product ownership. I can contribute solidly on tech and business quickly while openly naming which responsibility I\'m expanding.') +
    QA('"Why don\'t you want to develop anymore?"',
      'I\'m not turning away from tech. I want to use it differently: to enable better requirements and decisions, spot risks early, and give devs the clarity they need. The bridging work between user needs, business, UX, and development suits me more today than coding alone.') +
    '<p style="font-weight:800;color:var(--ink);margin:18px 0 6px;">Likely Domain Questions (Christoph Wege)</p>' +
    QA('"How would you prioritize requirements from several business teams?"',
      'First I\'d clarify the shared goal and the affected use case. Then I assess value, urgency, reach, effort, risk, and dependencies. I make differing interests visible and bring about a decision. What matters is that prioritization is documented and stakeholders can follow the reasons.') +
    QA('"How would you improve product search?"',
      'I\'d combine qualitative and quantitative signals: frequent search terms, zero results, search exits, clicks on results, conversion after search, plus feedback from sales and customer service. That yields concrete problem groups. I\'d test changes with clear success criteria and evaluate them afterwards.') +
    QA('"How do you write a good user story?"',
      'The story needs an understandable user, a goal, and a benefit. Beyond that, context, rules, dependencies, relevant states, and testable acceptance criteria are decisive. A story isn\'t good because it sounds formally correct, but when UX, devs, business, and QA share the same understanding.') +
    QA('"A business team rates everything as urgent – what do you do?"',
      'I ask about the concrete impact: which customer, which process, which outcome is affected. Then I set the new requirements against the already agreed goals. If everything is urgent, a decision is missing. My job is to make options and consequences transparent, not to silently put everything into the backlog.') +
    QA('"How do you ensure a successful roll-out?"',
      'Technical completion alone isn\'t enough. I clarify acceptance, affected processes, communication, training needs, responsibilities, monitoring, and a fallback plan. After roll-out I check errors, usage, and feedback against criteria agreed beforehand.');

  // ===== 7 · First 90 Days Plan =====
  CONTENT.de[7] = H('Erste 30 Tage · verstehen', true) +
    '<p>Geschäftsmodell, B2B-Kunden, Sortiment, Shop, Partnershop, Team, Systemlandschaft und Entscheidungswege verstehen. Bestehende Roadmap, KPIs, Research, Backlog und Release-Prozess kennenlernen. Gespräche mit Vertrieb, Kundenservice, UX und Entwicklung führen.</p>' +
    H('Tag 31–60 · strukturieren') +
    '<p>Erste Themen eigenständig strukturieren. Anforderungen und Akzeptanzkriterien schärfen, offene Entscheidungen transparent machen und einen kleineren Feature- oder Optimierungsbereich durch die Abstimmung begleiten.</p>' +
    H('Tag 61–90 · verantworten') +
    '<p>Verantwortung für einen klar abgegrenzten Roadmap-Bereich übernehmen, Priorisierung und Erfolgskriterien nachvollziehbar machen und gemeinsam mit dem Team Verbesserungen im Produktprozess ableiten.</p>';

  CONTENT.en[7] = H('First 30 Days · Understand', true) +
    '<p>Understand the business model, B2B customers, assortment, shop, Partnershop, team, system landscape, and decision paths. Learn the existing roadmap, KPIs, research, backlog, and release process. Talk to sales, customer service, UX, and development.</p>' +
    H('Days 31–60 · Structure') +
    '<p>Structure first topics independently. Sharpen requirements and acceptance criteria, make open decisions transparent, and take a smaller feature or optimization area through alignment.</p>' +
    H('Days 61–90 · Own') +
    '<p>Take ownership of a clearly scoped roadmap area, make prioritization and success criteria traceable, and derive product process improvements together with the team.</p>';

  // ===== 8 · Questions for FRICKE & Hanna =====
  CONTENT.de[8] = '<div class="lead">Heute (24. November) mit Hanna klären: Michael Page nannte Hamburg, mobiles Arbeiten und flexible Zeiten. FRICKE nennt Heeslingen und nur einige mobile Tage pro Monat. Das ist keine Nebensache.</div>' +
    H('Fragen an Hanna (Michael Page)') +
    '<ol class="tight">' +
    '<li>Ist FRICKE informiert, dass ich in Hamburg wohne, und welches Präsenzmodell wurde mit dem Kunden besprochen?</li>' +
    '<li>Wie viele Tage pro Woche oder Monat werden tatsächlich in Heeslingen erwartet?</li>' +
    '<li>Ist das Zielgehalt ab 70.000 € von FRICKE bestätigt oder nur meine gegenüber Michael Page genannte Vorstellung?</li>' +
    '<li>Wie genau hat Hanna meinen fachlichen Hintergrund beim Kunden positioniert?</li>' +
    '<li>Welche Rückfragen oder Vorbehalte gab es von FRICKE zu B2B, Marktplätzen, KPIs oder formaler Produktverantwortung?</li>' +
    '<li>Ist bekannt, welche Schwerpunkte Christoph Wege im Gespräch setzen wird?</li>' +
    '<li>Wie läuft der Prozess nach dem ersten Gespräch weiter?</li>' +
    '</ol>' +
    H('Fragen an FRICKE – priorisiert') +
    '<ul class="tight">' +
    '<li>Was sind aktuell die drei wichtigsten Ziele für den B2B-Webshop?</li>' +
    '<li>Welche Herausforderung soll die neue Person als Erstes lösen?</li>' +
    '<li>Wie werden Roadmap-Entscheidungen getroffen und wer trägt die finale Priorisierungsverantwortung?</li>' +
    '<li>Welche KPIs nutzt ihr für Suche, Produktdarstellung, Warenkorb, Checkout und Kundenkonto?</li>' +
    '<li>Wie ist die Präsenzregelung in Heeslingen konkret ausgestaltet?</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">Für das erste Gespräch vier bis fünf auswählen.</p>' +
    H('Weitere Fragen') +
    '<ul class="tight">' +
    '<li>Wie ist das E-Commerce-Team aufgebaut und wie arbeiten Produkt, UX, Entwicklung, Vertrieb und Kundenservice zusammen?</li>' +
    '<li>Welche Rolle spielen der GRANIT Partnershop und weitere digitale Vertriebskanäle in dieser Position?</li>' +
    '<li>Welche nächsten Potenziale seht ihr bei der Suche nach der letzten Weiterentwicklung?</li>' +
    '<li>Wie international ist die Rolle im Alltag und welche Teams oder Märkte sind beteiligt?</li>' +
    '<li>Wie sieht ein typischer Feature-Roll-out bei euch aus?</li>' +
    '<li>Was erwarten Sie von der Person in den ersten sechs Monaten?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Gehalt, Verfügbarkeit, Arbeitsort</p>' +
    '<table class="info">' +
    '<tr><th>Thema</th><th>Linie</th></tr>' +
    '<tr><td class="k">Gehalt</td><td><b>ab 70.000 € brutto jährlich</b> – so von Hanna bei FRICKE vorgestellt</td></tr>' +
    '<tr><td class="k">Untergrenze</td><td>nicht selbst nennen; bei Frage nach Schmerzgrenze zuerst nach Budgetrahmen und Gesamtpaket fragen</td></tr>' +
    '<tr><td class="k">Start</td><td>kurzfristig, nach Absprache</td></tr>' +
    '<tr><td class="k">Arbeitsort</td><td>Heeslingen, laut FRICKE nur einige mobile Tage pro Monat → vorher mit Hanna klären</td></tr>' +
    '</table>' +
    '<div class="lead">Gehalt: „Meine Gehaltsvorstellung liegt, wie mit Michael Page besprochen, bei einem Jahreszielgehalt ab 70.000 Euro brutto. Für die abschließende Einordnung sind für mich Verantwortungsumfang und Gesamtpaket relevant.“</div>' +
    '<div class="lead">Start: „Ich bin kurzfristig verfügbar. Den konkreten Starttermin können wir gerne gemeinsam abstimmen.“</div>' +
    '<div class="erg">Nicht selbstständig auf eine niedrigere Zahl zurückgehen. Im Interview keine unrealistische tägliche Pendelbereitschaft nach Heeslingen zusagen.</div>';

  CONTENT.en[8] = '<div class="lead">Clarify with Hanna today (Nov 24): Michael Page named Hamburg, mobile work, and flexible hours. FRICKE names Heeslingen and only a few mobile days per month. This is not a side issue.</div>' +
    H('Questions for Hanna (Michael Page)') +
    '<ol class="tight">' +
    '<li>Does FRICKE know I live in Hamburg, and which on-site model was discussed with the client?</li>' +
    '<li>How many days per week or month are actually expected in Heeslingen?</li>' +
    '<li>Is the target salary from €70,000 confirmed by FRICKE or only my expectation stated to Michael Page?</li>' +
    '<li>How exactly did Hanna position my background with the client?</li>' +
    '<li>Were there questions or reservations from FRICKE about B2B, marketplaces, KPIs, or formal product ownership?</li>' +
    '<li>Is it known which focus Christoph Wege will set in the conversation?</li>' +
    '<li>What happens in the process after the first interview?</li>' +
    '</ol>' +
    H('Questions for FRICKE – Prioritized') +
    '<ul class="tight">' +
    '<li>What are currently the three most important goals for the B2B web shop?</li>' +
    '<li>Which challenge should the new person solve first?</li>' +
    '<li>How are roadmap decisions made, and who has final prioritization responsibility?</li>' +
    '<li>Which KPIs do you use for search, product display, cart, checkout, and customer account?</li>' +
    '<li>How exactly is the on-site arrangement in Heeslingen set up?</li>' +
    '</ul>' +
    '<p style="font-size:11.5px;color:var(--muted);">Pick four or five for the first conversation.</p>' +
    H('More Questions') +
    '<ul class="tight">' +
    '<li>How is the e-commerce team set up, and how do product, UX, development, sales, and customer service work together?</li>' +
    '<li>What role do the GRANIT Partnershop and other digital sales channels play in this position?</li>' +
    '<li>Which next opportunities do you see in search after the latest improvement?</li>' +
    '<li>How international is the role day to day, and which teams or markets are involved?</li>' +
    '<li>What does a typical feature roll-out look like for you?</li>' +
    '<li>What do you expect from the person in the first six months?</li>' +
    '</ul>' +
    '<p style="font-weight:800;color:var(--ink);margin:16px 0 6px;">Salary, Availability, Location</p>' +
    '<table class="info">' +
    '<tr><th>Topic</th><th>Line</th></tr>' +
    '<tr><td class="k">Salary</td><td><b>from €70,000 gross per year</b> – as presented to FRICKE by Hanna</td></tr>' +
    '<tr><td class="k">Floor</td><td>don\'t name one; if asked for a minimum, first ask about budget range and overall package</td></tr>' +
    '<tr><td class="k">Start</td><td>short notice, by arrangement</td></tr>' +
    '<tr><td class="k">Location</td><td>Heeslingen, per FRICKE only a few mobile days per month → clarify with Hanna beforehand</td></tr>' +
    '</table>' +
    '<div class="lead">Salary: "As discussed with Michael Page, my salary expectation is a target annual salary from €70,000 gross. For the final assessment, scope of responsibility and the overall package matter to me."</div>' +
    '<div class="lead">Start: "I\'m available at short notice. We can agree on the concrete start date together."</div>' +
    '<div class="erg">Don\'t go down to a lower figure on my own. In the interview, don\'t commit to unrealistic daily commuting to Heeslingen.</div>';

  // ===== 9 · Mental Checklist =====
  CONTENT.de[9] = H('Letzter Check', true) +
    '<ul class="tight checklist">' +
    '<li>Teams-Link, Kamera und Mikrofon prüfen.</li>' +
    '<li>Christoph Wege und Cathaline Ronstedt korrekt ansprechen.</li>' +
    '<li>Pitch einmal laut sprechen.</li>' +
    '<li>Zwei STAR-Beispiele auswählen: modulare Plattform und Shopanforderungen.</li>' +
    '<li>B2B-, Marktplatz- und KPI-Erfahrung nicht größer darstellen als belegt.</li>' +
    '<li>70.000 € und kurzfristige Verfügbarkeit konsistent nennen.</li>' +
    '<li>Präsenzmodell Heeslingen vorher mit Hanna klären.</li>' +
    '<li>Vier eigene Fragen markieren.</li>' +
    '</ul>' +
    H('Ehrliche Grenzen') +
    '<ul class="tight">' +
    '<li>Noch keine jahrelange alleinige Verantwortung für einen B2B-Webshop</li>' +
    '<li>Keine fertige Marktplatzexpertise</li>' +
    '<li>Keine langjährige alleinige Umsatz-, Conversion- oder Deckungsbeitragsverantwortung</li>' +
    '</ul>' +
    '<div class="lead">Nicht als fertige B2B-Produktchefin verkaufen. Aber auch nicht klein machen: Shop-, Plattform- und technische Schnittstellenpraxis sind langjährig. Die neue Verantwortung klar als bewussten nächsten Schwerpunkt erklären.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Quellen: offizielle Stellenanzeige Senior E-Commerce Manager, Referenz 4137; FRICKE Karriere- und Unternehmensseiten; Lebenslauf für die Michael-Page-Position E-Commerce Manager; Bewertung zur Michael-Page-Referenz JN 102026 7125596; Vorbereitungsmail von Hanna Dunzel und Einladung von FRICKE.</p>';

  CONTENT.en[9] = H('Final Check', true) +
    '<ul class="tight checklist">' +
    '<li>Check Teams link, camera, and microphone.</li>' +
    '<li>Address Christoph Wege and Cathaline Ronstedt correctly.</li>' +
    '<li>Say the pitch out loud once.</li>' +
    '<li>Pick two STAR examples: modular platform and shop requirements.</li>' +
    '<li>Don\'t present B2B, marketplace, or KPI experience as bigger than documented.</li>' +
    '<li>State €70,000 and short-notice availability consistently.</li>' +
    '<li>Clarify the Heeslingen on-site model with Hanna beforehand.</li>' +
    '<li>Mark four of my own questions.</li>' +
    '</ul>' +
    H('Honest Limits') +
    '<ul class="tight">' +
    '<li>No years of sole ownership of a B2B web shop yet</li>' +
    '<li>No finished marketplace expertise</li>' +
    '<li>No long-standing sole revenue, conversion, or contribution-margin ownership</li>' +
    '</ul>' +
    '<div class="lead">Don\'t sell myself as a finished B2B head of product. But don\'t undersell either: shop, platform, and technical interface practice go back many years. Explain the new responsibility clearly as a deliberate next focus.</div>' +
    '<p style="font-size:10.5px;color:var(--muted);margin-top:12px;">Sources: official job posting Senior E-Commerce Manager, ref. 4137; FRICKE careers and company pages; CV for the Michael Page E-Commerce Manager position; assessment for Michael Page ref. JN 102026 7125596; preparation email from Hanna Dunzel and invitation from FRICKE.</p>';

  return {
    documentTitle: "Interview Dashboard · Daniela Klein · FRICKE · Senior E-Commerce Manager",
    facts: FACTS,
    titles: TITLES,
    content: CONTENT
  };
})();
