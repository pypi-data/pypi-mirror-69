# Funding #

- https://prototypefund.de/2017/02/07/bewerbungstraining/

Förderung
- https://www.bmbf.de/foerderungen/bekanntmachung-1395.html
- https://www.bmbf.de/foerderungen/bekanntmachung-1225.html
- Softwaresysteme und Wissenstechnologien (PT-SW)
- http://www.software-sprint.de
- https://prototypefund.de

- offline commit in gegen der wel mit unsicher netzwverbindung
- demokratisierung der entwicklung via gh und giut

an:info@prototypefund.de

Sehr geehrte Damen und Herren,

ich möchte mich mit meinem Software-Projekt bewerben.
Wenn ich die Ausschreibung zur Richtlinie "Software-Sprint" des BMBF richtig verstehe, wird angeraten, sich z.B. an den Prototype Fund zu wenden, um bereits für die Antragsphase eine Begleitung zu erhalten.
Von daher meine Frage, wie fange ich nun an? Welche Informationen muss ich an wen senden, und welche Erfolgsaussichten hat mein Projekt?

Mit freundlichen Grüßen
Arne Bachmann


Topic: Software-Infrastruktur
Bedarf:
sos presentation: link to git not a vcs! https://blog.feld.me/posts/2018/01/git-is-not-revision-control/

Plattformen wie Github und Gitlab ganz konkret die wachsende Popularität von Git anerkennen und diese in den letzten Jahren auch maßgeblich mit gebildet haben und somit Git auch für Nutzergruppen außerhalb von Programmierern bekannt gemacht haben, so ist Git aber immer noch ein zwar sehr mächtiges aber auch komplexes Werkzeug, welches relativ gute Kenntnis der internet Datenrepräsentation erfordert, um die Nutzungskonzepte und Workflows nachvollziehen zu können. Die Usability ist nur mäßig hoch, da das Interface über die Jahres gewachsen, inkonsistent und verzweigt ist.

Andere VCS wie Subversion nutzen vordergründig einfachere semantische Konzepte (Ausnahme reps etc.), können aber dem wachsenden Bedarf an das Zusammenführen von Arbeiten in großen verteilten Teams durch die Voraussetzung zentrale Server nicht nachkommen.

Der Gesamt"markt" an Versionskontrollsystemen ist heute relativ überschaubar und es ist kaum noch Wettbewerb und Weiterentwicklung ersichtlich. Aufholbedarf haben besonders Einsteigerfreundlichkeit und Barrierefreiheit.
Der Markt ist grob unterteilt in einige kommerzielle Produkte oder Lösungen mit erweitertem kommerziellem Support, üblicherweise in Groupwares oder Onlineportalen eingebettet (Team Center, Office 365, Perforce/), die schwindenden Klassiker (Bazaar, Mercurial, CVS), den momentanen "Marktführer" Git, und Nischenlösungen mit sehr speziellen Entwicklungszielen wie Fossil.

Inspiration für SOS war die gute Anwendererfahrung mit SVN, die jedoch in dem Moment zusammenbricht, wo keine Netzverbindung besteht.
Dies ist beispielsweise auf Reisen, an entlegenden Orten und ländlichen Gegenden, in manchen sich entwickelnden Ländern, oder allgemein bei Ausfall von Infrastruktur der Fall. Hier helfen zwar klassische verteilte Versionskontrollsysteme, die jedoch aufgrund hoher Komplexität nicht für jede Nutzergruppe zu empfehlen sind.

Genau in dieses Spannungsfeld zielt die Entwicklung von SOS. Einziger bekannter Konkurrent ist Gitless, welches jedoch erhebliche Anstrengungen bei der Installation erfodert, viele Abhängigkeiten hat und damit ein mangelhafte initiale Anwendererfahrung.

die meisten softwareprojekte beginne ich, weil es eklatante lücken im angebot gibt, und ein sehr konkreter bedarf durch keine existierenden lösungen (zufriendenstellend) gedeckt wird.

https://prototypefund.de/2017/02/07/bewerbungstraining/
- Ziel: Vereinfachung der Softwareenticklung durch persönliches Produktivitätswerkzeug mit vereinfachter Semantik und schnellerer Erlernbarkeit
Inspiriert von guten Erfahrungen mit SVN, Fossil, und anderen VCS, gegen den Trend zu Git.
