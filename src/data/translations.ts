export type rating =
	| 0 // translation is missing
	| 1 // translation is guessed
	| 2 // translation is official, not used often
	| 3; // translation is official, used often

type englishWord = string;
type germanWord = string;

type translation = [englishWord, germanWord, rating];

export const translations: translation[] = [
	["script", "Skript", 3],
	["margin", "äußerer Abstand", 2],
	["padding", "innerer Abstand", 2],
	["div (HTML)", "Teilungselement / Behälter", 1],
	["container", "Behälter", 2],
	["span", "Bereich", 1],
	["inline", "inzeilig", 2],
	["database", "Datenbank", 3],
	["background color", "Hintergrundfarbe", 3],
	["table", "Tabelle", 3],
	["promise", "Versprechen", 2],
	["async", "asynchron", 3],
	["await", "erwarten", 3],
	["flex box", "Flexbox", 3],
	["grid", "Gitter / Raster", 2],
	["for loop", "Zählschleife", 2],
	["while loop", "Kopfgesteuerte Schleife", 2],
	["for each loop", "Mengenschleife", 2],
	["opacity", "Deckkraft", 2],
	["input", "Eingabe", 2],
	["flex direction", "Flex-Ausrichtung", 2],
	["row", "Zeile", 3],
	["column", "Spalte", 3],
	["border-radius", "Rahmenabrundung", 2],
	["border", "Rahmen", 2],
	["hover", "Mauszeiger drüber bewegen", 2],
	["event listener", "Ereignisüberwacher", 2],
	["event handling", "Ereignisbehandlung", 2],
	["event", "Ereignis", 2],
	["body (HTML)", "HTML-Körper", 2],
	["head (HTML)", "HTML-Kopf", 2],
	["do while loop", "Fußgesteuerte Schleife", 2],
	["map", "Abbildung", 2],
	["array", "Feld / Liste", 2],
	["object", "Objekt", 3],
	["function", "Funktion", 3],
	["method", "Methode", 3],
	["side effect", "Seiteneffekt", 3],
	["CSS style", "CSS-Stil", 2],
	["checkbox", "Kontrollkästchen", 2],
	["menu", "Menü", 3],
	["button", "Schaltfläche / Taste", 2],
	["radio button", "Optionsfeld", 2],
	["mouse", "Maus", 3],
	["keyboard", "Tastatur", 3],
	["click", "Klick", 3],
	["focus", "Fokus", 3],
	["loop", "Schleife", 3],
	["cursor", "Eingabemarke", 2],
	["associative array", "assoziatives Datenfeld", 2],
	["string", "Zeichenkette", 2],
	["integer", "ganze Zahl", 3],
	["Boolean", "boolescher Ausdruck", 2],
	["truthy", "wahrmäßig", 1],
	["falsy", "falschmäßig", 1],
	["undefined", "undefiniert", 2],
	["null", "Nullwert", 2],
	["true", "wahr", 3],
	["false", "falsch", 3],
	["center", "Mitte", 3],
	["mount", "zusammenbauen", 1],
	["dispatch", "versenden", 2],
	["custom event", "benutzerdefiniertes Ereignis", 1],
	["tag", "Etikett / Schildchen", 1],
	["class", "Klasse", 3],
	["select menu", "Auswahlmenü", 2],
	["ternary operator", "Ternärer Operator", 3],
	["arrow function", "Pfeilfunktion", 2],
	["assignment", "Zuweisung", 3],
	["window", "Fenster", 3],
	["interface", "Schnittstelle", 2],
	["setTimeout", "Verzögerter Aufruf", 2],
	["if statement", "bedingte Anweisung", 2],
	["if else statement", "Verzweigung", 2],
	["switch statement", "Fallunterscheidung", 2],
	["icon", "Bildchen / Piktogramm / Symbol", 2],
	["display property", "Anzeigeart", 1],
	["font size", "Schriftgröße", 3],
	["font family", "Schriftfamilie", 3],
	["font color", "Schriftfarbe", 3],
	["font weight", "Schriftstärke", 3],
	["width", "Breite", 3],
	["height", "Höhe", 3],
	["aspect ratio", "Seitenverhältnis", 3],
	["outline", "Außenlinie", 2],
	["easing", "Entspannung", 1],
	["ease in", "weicher Start", 1],
	["ease out", "weiches Ende", 1],
	["keyframes", "Schlüsselbild", 2],
	["file", "Datei", 3],
	["folder", "Ordner", 3],
	["variable", "Variable", 3],
	["constant", "Konstante", 3],
	["enum", "Aufzählungstyp", 2],
	["key", "Schlüssel", 2],
	["value", "Wert", 2],
	["spread operator", "Ausbreitungs-Operator", 2],
	["rest operator", "Rest-Operator", 2],
	["API", "Programmierschnittstelle", 2],
	["nullish coalescing operator", "Null-Koaleszenz-Operator", 2],
	["code", "Code", 3],
	["component", "Komponente", 3],
	["compile", "kompilieren", 3],
	["execute", "ausführen", 3],
	["root", "Wurzel", 2],
	["box-sizing", "Box-Bemessung", 1],
	["pointer", "Zeiger", 2],
	["text align", "Textausrichtung", 3],
	["transition", "Übergang", 3],
	["animation", "Animation", 3],
	["inset", "Einsatz", 2],
	["box shadow", "Schlagschatten", 2],
	["text shadow", "Textschatten", 2],
	["gap", "Lücke", 2],
	["local storage", "lokale Speicherung", 1],
	["browser", "Browser", 3],
	["debounce", "entprellen", 2],
	["throttle", "drosseln", 2],
	["callback function", "Rückruffunktion", 2],
	["link", "Verknüpfung", 2],
	["store", "Speicher", 2],
	["canvas", "Leinwand", 2],
	["backspace key", "Rücktaste", 2],
	["popup window", "aufklappbares Fenster", 2],
	["child", "Kind", 2],
	["parent", "Elter", 2],
	["parent element", "Elterelement", 2],
	["parent component", "Elterkomponente", 2],
	["props / properties", "Eigenschaften", 2],
	["counter", "Zähler", 2],
	["sibling", "Geschwister", 3],
	["adjacent", "benachbart / anliegend", 3],
	["development", "Entwicklung", 2],
	["production", "Produktion", 2],
	["minified", "minifiziert", 2],
	["template", "Vorlage", 2],
	["devtools", "Entwicklerwerkzeuge", 2],
	["slot", "Einschub", 1],
	["state", "Zustand", 2],
	["library", "Bibliothek", 2],
	["cache", "Zwischenspeicher", 2],
	["server", "", 0],
	["service", "Dienst", 2],
	["client", "Klient", 2],
	["life cycle", "Lebenszyklus", 2],
	["build", "Erstellung", 2],
	["build tool", "Erstellungswerkzeug", 2],
	["build process", "Erstellungsprozess", 2],
	["log", "protokollieren / aufzeichnen", 2],
	["update", "Aktualisierung", 2],
	["source", "Quelle", 2],
	["source code", "Quellcode", 2],
	["public", "öffentlich", 2],
	["user", "Nutzer", 2],
	["model", "Modell", 2],
	["view", "Darstellung / Präsentation", 1],
	["controller", "Steuerung", 1],
	["provider", "Anbieter", 2],
	["layout", "Entwurf / Aufmachung", 1],
	["default", "Standard", 2],
	["fetch", "abrufen", 1],
	["destructuring", "Destrukturierung", 2],
	["terminal", "Konsole", 2],
	["refactoring", "Refaktorierung", 2],
	["endpoint", "Endpunkt", 2],
	["computer", "Rechner", 2],
	["middleware", "Zwischenanwendung", 2],
	["letter spacing", "Zeichenabstand", 2],
	["viewport", "Anzeigebereich", 2],
	["dependency", "Abhängigkeit", 2],
	["dev dependency", "Entwicklungsabhängigkeit", 1],
	["bundle", "Bündel", 1],
	["scaffold", "Grundgerüst", 1],
	["concatenate", "verbinden / verknüpfen", 2],
	["backtick", "Gravis / Abwärtsakzent", 2],
	["support", "Unterstützung", 2],
	["property", "Eigenschaft", 2],
	["breakpoint (CSS)", "Umbruchpunkt", 1],
	["breakpoint (general)", "Haltepunkt", 2],
	["media query", "Medienabfrage", 1],
	["responsive", "responsiv", 2],
	["landscape (orientiation)", "Querformat", 3],
	["portrait (orientation)", "Hochformat", 3],
	["device", "Gerät", 3],
	["port", "", 0],
	["host", "", 0],
	["router", "Router", 3],
	["literal", "Literal", 2],
	["static", "statisch", 3],
	["asset", "", 0],
	["hydration", "Hydrierung", 2],
	["form", "Formular", 3],
	["progressive enhancement", "Progressive Verbesserung", 2],
	["application / app", "Anwendung", 2],
	["browsergame", "Browserspiel", 2],
	["buffer", "Puffer", 2],
	[
		"content management system / CMS",
		"Inhaltsverwaltungssystem",
		2,
	],
	["user experience / UX", "Nutzererfahrung / Benutzererlebnis", 2],
	["technical dept", "Technische Schulden", 2],
	["continuous integration", "Fortlaufende Integration", 2],
	["software engineer", "Softwaretechniker", 2],
	["software engineering", "Softwaretechnik", 2],
	[
		"integrated development environment / IDE",
		"Integrierte Entwicklungsumgebung",
		3,
	],
	["deployment", "Verteilung", 2],
	["delivery", "Auslieferung", 2],
	["scoped", "geltungsbeschränkt", 1],
	["framework", "Programmiergerüst", 1],
	["header", "Kopf / Kopfbereich / Kopfzeile", 2],
	["footer", "Fußzeile", 2],
	["infer", "inferieren", 2],
	["hydrate", "hydrieren", 2],
	["directive", "Direktive / Anweisung", 2],
	["decorator", "Dekorator", 2],
	["lifecycle", "Lebenszyklus", 2],
	["submit", "abschicken", 2],
	["submission", "Einreichung", 1],
	["syntactic sugar", "syntaktischer Zucker", 2],
	["commit", "Festschreibung", 2],
	["commit message", "Festschreibungsnachricht", 2],
	["branch", "Zweig", 2],
	["repository", "Repositorium", 2],
	["merge", "zusammenfügen", 2],
	["software", "", 0],
	["hardware", "", 0],
	["return", "zurückgeben", 2],
	["return value", "Rückgabewert", 2],
	["higher order function", "Funktion höherer Ordnung", 3],
	["bug", "Programmfehler / Softwarefehler", 2],
	["patch", "Nachbesserung", 1],
	["download", "herunterladen", 2],
	["track", "verfolgen", 2],
	["referrer", "Verweiser", 1],
	["request (to a server)", "Anfrage", 2],
	["response (from a server)", "Antwort", 2],
	["error", "Fehler", 3],
	["exception", "Ausnahme", 2],
	["throw (an error)", "(einen Fehler) werfen", 2],
	["unit", "Einheit / Komponente", 2],
	["unit test", "Modultest / Komponententest", 2],
	["integration test", "Integrationstest", 2],
	["end-to-end test", "Ende-zu-Ende Test", 2],
	["test suite", "Testreihe", 1],
	["edge case", "Randfall", 2],
	["mock object", "Attrappe / Pseudo-Objekt", 1],
	["mock data", "Scheindaten", 1],
	[
		"test-driven development (TDD)",
		"Testgetriebene Entwicklung",
		2,
	],
	[
		"behavior-driven development (BDD)",
		"Verhaltensgetriebene Entwicklung",
		2,
	],
	["domain", "Domäne", 2],
	["Frontend", "Oberbau", 2],
	["Backend", "Unterbau", 2],
	["scrolling", "Bildlauf", 2],
	["to scroll", "", 0],
	["infinity scroll", "Unendlicher Bildlauf", 1],
	["scrollbar", "Bildlaufleiste", 2],
];

export const numberOfTranslations = translations.length;
export const numberOfMissingTranslations = translations.filter(
	(t) => t[2] === 0
).length;
