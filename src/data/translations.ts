// format: [english word, german word]
// when german word is missing, put "?"" there.
export const translations: [string, string][] = [
	["script", "Skript"],
	["margin", "äußerer Abstand"],
	["padding", "innerer Abstand"],
	["div (HTML)", "Teilungselement / Behälter"],
	["container", "Behälter"],
	["span", "Bereich"],
	["inline", "inzeilig"],
	["database", "Datenbank"],
	["background color", "Hintergrundfarbe"],
	["table", "Tabelle"],
	["promise", "Versprechen"],
	["async", "asynchron"],
	["await", "erwarten"],
	["flex box", "Flexbox"],
	["grid", "Gitter / Raster"],
	["for loop", "Zählschleife"],
	["while loop", "Kopfgesteuerte Schleife"],
	["for each loop", "Mengenschleife"],
	["opacity", "Deckkraft"],
	["input", "Eingabe"],
	["flex direction", "Flex-Ausrichtung"],
	["row", "Zeile"],
	["column", "Spalte"],
	["border-radius", "Rahmenabrundung"],
	["border", "Rahmen"],
	["hover", "Mauszeiger drüber bewegen"],
	["event listener", "Ereignisüberwacher"],
	["event handling", "Ereignisbehandlung"],
	["event", "Ereignis"],
	["body (HTML)", "HTML-Körper"],
	["head (HTML)", "HTML-Kopf"],
	["do while loop", "Fußgesteuerte Schleife"],
	["map", "Abbildung"],
	["array", "Feld / Liste"],
	["object", "Objekt"],
	["function", "Funktion"],
	["method", "Methode"],
	["side effect", "Seiteneffekt"],
	["CSS style", "CSS-Stil"],
	["checkbox", "Kontrollkästchen"],
	["menu", "Menü"],
	["button", "Schaltfläche / Taste"],
	["radio button", "Optionsfeld"],
	["mouse", "Maus"],
	["keyboard", "Tastatur"],
	["click", "Klick"],
	["focus", "Fokus"],
	["loop", "Schleife"],
	["cursor", "Eingabemarke"],
	["associative array", "assoziatives Datenfeld"],
	["string", "Zeichenkette"],
	["integer", "ganze Zahl"],
	["Boolean", "boolescher Ausdruck"],
	["truthy", "?"],
	["falsy", "?"],
	["undefined", "undefiniert"],
	["null", "Nullwert"],
	["true", "wahr"],
	["false", "falsch"],
	["center", "Mitte"],
	["mount", "zusammenbauen"],
	["dispatch", "versenden"],
	["custom event", "benutzerdefiniertes Ereignis"],
	["tag", "Etikett / Schildchen"],
	["class", "Klasse"],
	["select menu", "Auswahlmenü"],
	["ternary operator", "Ternärer Operator"],
	["arrow function", "Pfeilfunktion"],
	["assignment", "Zuweisung"],
	["window", "Fenster"],
	["interface", "Schnittstelle"],
	["setTimeout", "Verzögerter Aufruf"],
	["if statement", "bedingte Anweisung"],
	["if else statement", "Verzweigung"],
	["switch statement", "Fallunterscheidung"],
	["icon", "Bildchen / Piktogramm / Symbol"],
	["display property", "Anzeigeart"],
	["font size", "Schriftgröße"],
	["font family", "Schriftfamilie"],
	["font color", "Schriftfarbe"],
	["font weight", "Schriftstärke"],
	["width", "Breite"],
	["height", "Höhe"],
	["aspect ratio", "Seitenverhältnis"],
	["outline", "Außenlinie"],
	["easing", "Entspannung"],
	["ease in", "weicher Start"],
	["ease out", "weiches Ende"],
	["keyframes", "Schlüsselbild"],
	["file", "Datei"],
	["folder", "Ordner"],
	["variable", "Variable"],
	["constant", "Konstante"],
	["enum", "Aufzählungstyp"],
	["key", "Schlüssel"],
	["value", "Wert"],
	["spread operator", "Ausbreitungs-Operator"],
	["rest operator", "Rest-Operator"],
	["API", "Programmierschnittstelle"],
	["nullish coalescing operator", "Null-Koaleszenz-Operator"],
	["code", "Code"],
	["component", "Komponente"],
	["compile", "kompilieren"],
	["execute", "ausführen"],
	["root", "Wurzel"],
	["box-sizing", "Box-Bemessung"],
	["pointer", "Zeiger"],
	["text align", "Textausrichtung"],
	["transition", "Übergang"],
	["animation", "Animation"],
	["inset", "Einsatz"],
	["box shadow", "Schlagschatten"],
	["text shadow", "Textschatten"],
	["gap", "Lücke"],
	["local storage", "lokale Speicherung"],
	["browser", "Browser"],
	["debounce", "entprellen"],
	["throttle", "drosseln"],
	["callback function", "Rückruffunktion"],
	["link", "Verknüpfung"],
	["store", "Speicher"],
	["canvas", "Leinwand"],
	["backspace key", "Rücktaste"],
	["popup window", "aufklappbares Fenster"],
	["child", "Kind"],
	["parent", "Elter"],
	["parent element", "Elterelement"],
	["parent component", "Elterkomponente"],
	["props / properties", "Eigenschaften"],
	["counter", "Zähler"],
	["sibling", "Geschwister"],
	["adjacent", "benachbart / anliegend"],
	["development", "Entwicklung"],
	["production", "Produktion"],
	["minified", "minifiziert"],
	["template", "Vorlage"],
	["devtools", "Entwicklerwerkzeuge"],
	["slot", "Einschub"],
	["state", "Zustand"],
	["library", "Bibliothek"],
	["cache", "Zwischenspeicher"],
	["server", "?"],
	["service", "Dienst"],
	["client", "Klient"],
	["life cycle", "Lebenszyklus"],
	["build", "Erstellung"],
	["build tool", "Erstellungswerkzeug"],
	["build process", "Erstellungsprozess"],
	["log", "protokollieren / aufzeichnen"],
	["update", "Aktualisierung"],
	["source", "Quelle"],
	["source code", "Quellcode"],
	["public", "öffentlich"],
	["user", "Nutzer"],
	["model", "Modell"],
	["view", "Darstellung / Präsentation"],
	["controller", "Steuerung"],
	["provider", "Anbieter"],
	["layout", "Entwurf / Aufmachung"],
	["default", "Standard"],
	["fetch", "abrufen"],
	["destructuring", "Destrukturierung"],
	["terminal", "Konsole"],
	["refactoring", "Refaktorierung"],
	["endpoint", "Endpunkt"],
	["computer", "Rechner"],
	["middleware", "Zwischenanwendung"],
	["letter spacing", "Zeichenabstand"],
	["viewport", "Anzeigebereich"],
	["dependency", "Abhängigkeit"],
	["dev dependency", "Entwicklungsabhängigkeit"],
	["bundle", "Bündel"],
	["scaffold", "Grundgerüst"],
	["concatenate", "verbinden / verknüpfen"],
	["backtick", "Gravis / Abwärtsakzent"],
	["support", "Unterstützung"],
	["property", "Eigenschaft"],
	["breakpoint", "Umbruchpunkt"],
	["media query", "Medienabfrage"],
	["responsive", "responsiv"],
	["landscape (orientiation)", "Querformat"],
	["portrait (orientation)", "Hochformat"],
	["device", "Gerät"],
	["port", "?"],
	["host", "?"],
	["router", "Router"],
	["literal", "Literal"],
	["static", "statisch"],
	["asset", "?"],
	["hydration", "Hydrierung"],
	["form", "Formular"],
	["progressive enhancement", "Progressive Verbesserung"],
	["application / app", "Anwendung"],
	["browsergame", "Browserspiel"],
	["buffer", "Puffer"],
	["content management system / CMS", "Inhaltsverwaltungssystem"],
	["user experience / UX", "Nutzererfahrung / Benutzererlebnis"],
	["test-driven development", "Testgetriebene Entwicklung"],
	["technical dept", "Technische Schulden"],
	["continuous integration", "Fortlaufende Integration"],
	["software engineer", "Software-Techniker"],
	["software engineering", "Software-Technik"],
	[
		"integrated development environment / IDE",
		"Integrierte Entwicklungsumgebung",
	],
	["deployment", "Verteilung"],
	["delivery", "Auslieferung"],
];

export const numberOfTranslations = translations.length;
export const numberOfMissingTranslations = translations.filter(
	(t) => t[1] == "?"
).length;
