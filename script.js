document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll(".animate-scroll").forEach((el) => {
        observer.observe(el);
    });

    const header = document.getElementById("header");

    const updateHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    const requestedQuiz = new URLSearchParams(window.location.search).get("kviz");

    if (requestedQuiz && document.getElementById("quizMenu") && quizData[requestedQuiz]) {
        startQuiz(requestedQuiz);
    }
});

const quizData = {
    lekce1: {
        title: "Tvorba statických WWW stránek",
        questions: [
            { 
                q: "Jak se jmenuje způsob tvorby, kde píšeme vše od nuly?", 
                options: ["Webové generátory", "Čisté kódování", "Redakční systémy"], 
                explanations: [
                    "Webové generátory (Wix, Webnode) fungují jako skládačky, kde se kód nepíše ručně.",
                    "Čisté kódování znamená psaní HTML, CSS a JS od nuly.",
                    "Redakční systémy (WordPress) sice stojí na kódu, ale uživatel pracuje v administraci."
                ],
                correct: 1 
            },
            { 
                q: "Která klávesa v prohlížeči standardně otevírá Vývojářské nástroje?", 
                options: ["F5", "F12", "F1"], 
                explanations: [
                    "F5 slouží k obnovení (reloadu) aktuální stránky.",
                    "F12 otevírá vývojářskou konzoli a nástroje pro ladění.",
                    "F1 obvykle otevírá nápovědu (Help) v aplikacích."
                ],
                correct: 1 
            },
            { 
                q: "Jaký program používáme k zobrazení hotové webové stránky?", 
                options: ["Webový prohlížeč", "Textový editor", "Malování"], 
                explanations: [
                    "Prohlížeč (Chrome, Firefox) interpretuje kód a ukáže web.",
                    "Textový editor (VS Code) slouží k PÍSANÍ kódu, nikoliv k jeho finálnímu zobrazení pro uživatele.",
                    "Malování je grafický editor pro tvorbu rastrových obrázků."
                ],
                correct: 0 
            }
        ]
    },
    lekce2: {
        title: "Zdrojový kód HTML",
        questions: [
            { 
                q: "Do kterého tagu umisťujeme veškerý viditelný obsah stránky?", 
                options: ["<head>", "<title>", "<body>"], 
                explanations: [
                    "<head> je skrytá hlavička pro metadata, linky na styly a titulek.",
                    "<title> definuje pouze text v záložce prohlížeče.",
                    "<body> je tělo dokumentu, kde leží veškerý obsah webu."
                ],
                correct: 2 
            },
            { 
                q: "Jak správně zapsat HTML komentář?", 
                options: ["// komentář", "<!-- komentář -->", "/* komentář */"], 
                explanations: [
                    "// se používá pro řádkové komentáře v JavaScriptu, v HTML nefunguje.",
                    "HTML komentář se zapisuje pomocí závorek a vykřičníků s pomlčkami.",
                    "/* */ se používá pro komentáře v CSS stylech, v HTML způsobuje chybu."
                ],
                correct: 1 
            },
            { 
                q: "Co deklaruje tag <!DOCTYPE html>?", 
                options: ["Jazyk stránky", "Použití moderního HTML5", "Název dokumentu"], 
                explanations: [
                    "Jazyk stránky se definuje atributem lang v tagu <html> (např. lang=\"cs\").",
                    "<!DOCTYPE html> říká prohlížeči, že používáme nejnovější standard HTML5.",
                    "Název dokumentu se nastavuje uvnitř hlavičky pomocí tagu <title>."
                ],
                correct: 1 
            }
        ]
    },
    lekce3: {
        title: "Kaskádové styly (CSS)",
        questions: [
            { 
                q: "Jakým znakem v CSS vybíráme prvek podle třídy (class)?", 
                options: ["Tečkou (.)", "Mřížkou (#)", "Zavináčem (@)"], 
                explanations: [
                    "Tečka (.) v CSS označuje selektor třídy (class).",
                    "Mřížka (#) se v CSS používá pro výběr podle unikátního ID.",
                    "Zavináč (@) se používá pro speciální pravidla, například @media pro responzivní design."
                ],
                correct: 0 
            },
            { 
                q: "K čemu primárně slouží CSS?", 
                options: ["K tvorbě struktury", "K designu a vzhledu", "K databázovým operacím"], 
                explanations: [
                    "Tvorba struktury (kostry) je úkolem jazyka HTML.",
                    "CSS dodává webu barvy, pozice, rozvržení a celkový vzhled.",
                    "Databázové operace řeší programovací jazyky na serveru (např. PHP, SQL, Python)."
                ],
                correct: 1 
            },
            { 
                q: "Jakým tagem propojíme externí CSS soubor s HTML?", 
                options: ["<link>", "<style>", "<script>"], 
                explanations: [
                    "Tag <link rel=\"stylesheet\" href=\"style.css\"> propojuje externí stylopis.",
                    "<style> se používá pro zápis CSS kódů přímo uvnitř HTML hlavičky, nikoliv pro externí soubor.",
                    "<script> se používá pro vkládání a propojování JavaScriptu."
                ],
                correct: 0 
            }
        ]
    },
    lekce4: {
        title: "Formátování textu a pozadí",
        questions: [
            { 
                q: "Která CSS vlastnost mění barvu textu?", 
                options: ["font-color", "text-style", "color"], 
                explanations: [
                    "font-color neexistuje, v CSS se pro barvu textu píše pouze zkrácený název.",
                    "text-style neexistuje, pro styl písma se používá font-style (např. italic).",
                    "Vlastnost color mění barvu samotného textu."
                ],
                correct: 2 
            },
            { 
                q: "Jaký tag se používá pro hlavní nadpis stránky?", 
                options: ["<h1>", "<header>", "<strong>"], 
                explanations: [
                    "<h1> je hlavní nadpis první úrovně (nejdůležitější na webu).",
                    "<header> je sémantický kontejner pro celou hlavičku stránky, nikoliv specifický nadpis.",
                    "<strong> je in-line tag pro zvýraznění (tučné zobrazení) důležitého textu v odstavci."
                ],
                correct: 0 
            },
            { 
                q: "Jakou vlastností nastavíme barvu pozadí?", 
                options: ["background-color", "bg-color", "color"], 
                explanations: [
                    "background-color spolehlivě mění barvu pozadí libovolného elementu.",
                    "bg-color je neplatná vlastnost, v CSS se tento tvar nepoužívá.",
                    "color mění barvu textu uvnitř elementu, nikoliv jeho pozadí."
                ],
                correct: 0 
            }
        ]
    },
    lekce5: {
        title: "Rozměry, okraje, rámečky",
        questions: [
            { 
                q: "Která vlastnost definuje vnitřní okraj (mezi obsahem a rámečkem)?", 
                options: ["margin", "padding", "border"], 
                explanations: [
                    "margin definuje vnější okraj (odsazení od okolních prvků zvenku).",
                    "padding vytváří vnitřní vycpávku uvnitř krabičky mezi obsahem a rámečkem.",
                    "border definuje samotný rámeček (čáru) obalující element."
                ],
                correct: 1 
            },
            { 
                q: "Která vlastnost definuje vnější okraj (odsazení od okolních prvků)?", 
                options: ["padding", "margin", "outline"], 
                explanations: [
                    "padding je vnitřní okraj, zvětšuje prostor uvnitř krabičky.",
                    "margin odtlačuje prvek od ostatních elementů zvenku.",
                    "outline vykresluje obrys kolem prvku, který nezabírá žádné místo v layoutu."
                ],
                correct: 1 
            },
            { 
                q: "Jaká vlastnost se používá pro šířku elementu?", 
                options: ["height", "size", "width"], 
                explanations: [
                    "height nastavuje výšku (height) elementu.",
                    "size není standardní CSS vlastnost pro rozměry bloků.",
                    "width určuje horizontální šířku elementu."
                ],
                correct: 2 
            }
        ]
    },
    lekce6: {
        title: "Obrázky",
        questions: [
            { 
                q: "Jaký tag se používá pro vložení obrázku?", 
                options: ["<image>", "<img>", "<pic>"], 
                explanations: [
                    "<image> je zastaralý a neplatný tag, v HTML se nepoužívá.",
                    "Nepárový tag <img> slouží k vložení obrázku.",
                    "<pic> neexistuje, pro pokročilý výběr obrázků se v moderním HTML používá tag <picture>."
                ],
                correct: 1 
            },
            { 
                q: "Který atribut určuje cestu ke zdroji obrázku?", 
                options: ["href", "link", "src"], 
                explanations: [
                    "href se používá u odkazů (tag <a>) pro určení cílové URL.",
                    "link je samostatný tag pro propojení CSS souborů, nikoliv atribut pro obrázky.",
                    "src (source) definuje cestu k souboru obrázku."
                ],
                correct: 2 
            },
            { 
                q: "K čemu slouží atribut 'alt' u obrázku?", 
                options: ["Alternativní text pro čtečky a při chybě načtení", "Zarovnání obrázku", "Popisek při najetí myší"], 
                explanations: [
                    "alt poskytuje textovou náhradu pro nevidomé a v případě výpadku načtení.",
                    "Zarovnání se řeší výhradně pomocí kaskádových stylů (CSS).",
                    "Popisek při najetí myší se v HTML standardně zapisuje pomocí atributu title."
                ],
                correct: 0 
            }
        ]
    },
    lekce7: {
        title: "Odkazy",
        questions: [
            { 
                q: "Jaký tag se používá pro vytvoření odkazu?", 
                options: ["<link>", "<a>", "<href>"], 
                explanations: [
                    "<link> slouží k připojení externích stylopisů do hlavičky dokumentu.",
                    "Tag <a> (anchor) definuje hypertextový odkaz.",
                    "<href> neexistuje, href je pouze atribut uvnitř tagu <a>."
                ],
                correct: 1 
            },
            { 
                q: "Který atribut obsahuje cílovou URL adresu odkazu?", 
                options: ["src", "url", "href"], 
                explanations: [
                    "src se používá pro zdrojové soubory obrázků, skriptů nebo rámů.",
                    "url je název hodnoty nebo CSS funkce, nikoliv HTML atribut.",
                    "href (hypertext reference) obsahuje cílovou adresu odkazu."
                ],
                correct: 2 
            },
            { 
                q: "Jak zařídíme, aby se odkaz otevřel v nové záložce?", 
                options: ["target=\"_blank\"", "new-tab=\"true\"", "open=\"new\""], 
                explanations: [
                    "Atribut target=\"_blank\" vynutí otevření odkazu v novém okně či záložce.",
                    "new-tab=\"true\" je vymyslený neplatný atribut, který prohlížeč ignoruje.",
                    "open=\"new\" se v HTML pro otevírání stránek nepoužívá."
                ],
                correct: 0 
            }
        ]
    },
    lekce8: {
        title: "Seznamy",
        questions: [
            { 
                q: "Jaký tag definuje neuspořádaný (odrážkový) seznam?", 
                options: ["<ol>", "<ul>", "<li>"], 
                explanations: [
                    "<ol> definuje uspořádaný (číslovaný) seznam (Ordered List).",
                    "<ul> (Unordered List) vytváří neuspořádaný odrážkový seznam.",
                    "<li> definuje pouze samotnou položku uvnitř seznamu, nikoliv jeho obal."
                ],
                correct: 1 
            },
            { 
                q: "Jaký tag definuje uspořádaný (číslovaný) seznam?", 
                options: ["<ul>", "<list>", "<ol>"], 
                explanations: [
                    "<ul> vytváří odrážkový neuspořádaný seznam.",
                    "<list> není platný HTML tag pro seznamy.",
                    "<ol> (Ordered List) tvoří číslovaný seznam."
                ],
                correct: 2 
            },
            { 
                q: "Který tag tvoří samotnou položku uvnitř seznamu?", 
                options: ["<li>", "<item>", "<il>"], 
                explanations: [
                    "<li> (List Item) označuje jednotlivé položky v <ul> i <ol>.",
                    "<item> není platný HTML tag pro položky seznamu.",
                    "<il> je častý překlep, správný tvar je li."
                ],
                correct: 0 
            }
        ]
    },
    lekce9: {
        title: "Tabulky",
        questions: [
            { 
                q: "Kterým tagem definujeme tabulkový řádek?", 
                options: ["<td>", "<th>", "<tr>"], 
                explanations: [
                    "<td> vymezuje běžnou datovou buňku uvnitř řádku.",
                    "<th> vymezuje buňku hlavičky tabulky.",
                    "<tr> (Table Row) definuje vodorovný řádek tabulky."
                ],
                correct: 2 
            },
            { 
                q: "Kterým tagem definujeme běžnou buňku tabulky?", 
                options: ["<td>", "<tr>", "<table>"], 
                explanations: [
                    "<td> (Table Data) představuje standardní buňku s daty.",
                    "<tr> tvoří celý řádek, nikoliv jednotlivou buňku.",
                    "<table> je hlavní obalovací element celé tabulky."
                ],
                correct: 0 
            },
            { 
                q: "Jakým atributem v HTML sloučíme dvě buňky vedle sebe (sloupce)?", 
                options: ["rowspan", "colspan", "merge"], 
                explanations: [
                    "rowspan sloučí buňky svisle přes více řádků dolů.",
                    "colspan (column span) roztáhne buňku přes více sloupců vodorovně.",
                    "merge je příkaz z tabulkových procesorů jako Excel, v HTML neexistuje."
                ],
                correct: 1 
            }
        ]
    },
    lekce10: {
        title: "Možnosti zápisu CSS",
        questions: [
            { 
                q: "Co je to 'inline' (řádkový) zápis CSS?", 
                options: ["Styl zapsaný přímo do atributu style=\"...\" v tagu", "Styl v hlavičce <head>", "Styl v samostatném souboru"], 
                explanations: [
                    "Inline zápis používá atribut style přímo u konkrétního HTML elementu.",
                    "Styl v hlavičce se zapisuje do tagu <style>, což je interní (embedded) zápis.",
                    "Samostatný soubor představuje externí CSS stylopis."
                ],
                correct: 0 
            },
            { 
                q: "Kde by se měl nacházet tag <style>, pokud píšeme CSS přímo do HTML souboru?", 
                options: ["V <body>", "V <head>", "Kdekoliv"], 
                explanations: [
                    "V <body> se nachází viditelný obsah, styly by sem patřit neměly.",
                    "Tag <style> se umísťuje dovnitř hlavičky <head> dokumentu.",
                    "Tag <style> patří do hlavičky. Mimo ni by kód nebyl validní a hůře by se spravoval."
                ],
                correct: 1 
            },
            { 
                q: "Který způsob zápisu CSS je z hlediska pořádku a správy webu nejlepší?", 
                options: ["Řádkový", "Hlavičkový", "Externí soubor"], 
                explanations: [
                    "Řádkový zápis je nepřehledný a znemožňuje hromadnou úpravu stylů.",
                    "Hlavičkový je fajn pro jednostránkové weby, ale pro velké projekty nevyhovuje.",
                    "Externí soubor dokonale odděluje design od obsahu a řídí tisíce stránek naráz."
                ],
                correct: 2 
            }
        ]
    },
    lekce11: {
        title: "Tvorba layoutu webové stránky",
        questions: [
            { 
                q: "Jaký univerzální tag nejčastěji používáme jako kontejner pro bloky rozvržení?", 
                options: ["<span>", "<div>", "<block>"], 
                explanations: [
                    "<span> je in-line element pro formátování menších částí textu v řádku.",
                    "<div> je univerzální blokový kontejner pro tvorbu struktury layoutu.",
                    "<block> není platný HTML tag."
                ],
                correct: 1 
            },
            { 
                q: "Která moderní vlastnost CSS slouží k tvorbě flexibilních layoutů?", 
                options: ["float", "position: absolute", "display: flex"], 
                explanations: [
                    "float sloužil k historickému plovoucímu umisťování a obtékání textu.",
                    "position: absolute vytrhne prvek z toku a umístí ho na pevné souřadnice.",
                    "display: flex zapíná moderní flexbox pro snadné zarovnávání a rozvržení."
                ],
                correct: 2 
            },
            { 
                q: "Co dělá vlastnost position: absolute?", 
                options: ["Vystředí prvek", "Vytrhne prvek z toku a umístí ho přesně na souřadnice", "Připne prvek k obrazovce při scrollování"], 
                explanations: [
                    "Vystředění prvků se provádí pomocí flexboxu nebo marginesů, nikoliv touto pozicí.",
                    "position: absolute vytrhne prvek z běžného toku a pozicuje ho vůči rodiči.",
                    "Připnutí k obrazovce při scrollování zajišťuje position: fixed."
                ],
                correct: 1 
            }
        ]
    },
    lekce12: {
        title: "Tvorba tlačítek a navigace",
        questions: [
            { 
                q: "Jaká vlastnost odstraní podtržení u odkazu v navigaci?", 
                options: ["text-decoration: none", "underline: 0", "font-style: normal"], 
                explanations: [
                    "text-decoration: none spolehlivě odstraní výchozí podtržení odkazů.",
                    "underline: 0 není platný CSS zápis.",
                    "font-style se používá pro nastavení kurzívy (italic), nikoliv pro dekoraci textu."
                ],
                correct: 0 
            },
            { 
                q: "Co se stane při použití pseudotřídy :hover?", 
                options: ["Prvek zmizí", "Aplikuje se styl po najetí myší", "Odkaz se otevře v novém okně"], 
                explanations: [
                    "Pro zmizení prvku se používá vlastnost display: none.",
                    ":hover definuje vzhled a chování prvku ve chvíli, kdy na něj uživatel najede kurzorem.",
                    "Otevírání v novém okně se řeší atributem target v HTML, nikoliv CSS pseudotřídou."
                ],
                correct: 1 
            },
            { 
                q: "Který element je ze své podstaty řádkový (inline)?", 
                options: ["<div>", "<p>", "<a>"], 
                explanations: [
                    "<div> je od přírody blokový element zabírající celou šířku řádku.",
                    "<p> (odstavec) je rovněž blokový element.",
                    "<a> (odkaz) je ze své podstaty in-line (řádkový) prvek."
                ],
                correct: 2 
            }
        ]
    },
    lekce13: {
        title: "Publikování webu na internetu",
        questions: [
            { 
                q: "Co je to webhosting?", options: ["Název webové stránky (např. google.com)", "Pronájem prostoru na serveru pro soubory webu", "Program pro psaní kódu"], 
                explanations: [
                    "Název webové stránky se odborně nazývá doména.",
                    "Webhosting je pronajatý diskový prostor na serveru připojeném k internetu.",
                    "Program pro psaní kódu je vývojový editor (např. VS Code)."
                ],
                correct: 1 
            },
            { 
                q: "Jaký protokol se běžně používá pro přenos souborů na server?", 
                options: ["HTTP", "FTP", "SMTP"], 
                explanations: [
                    "HTTP je protokol pro prohlížení webových stránek v prohlížeči.",
                    "FTP (File Transfer Protocol) slouží k nahrávání souborů na server.",
                    "SMTP je protokol pro odesílání e-mailových zpráv."
                ],
                correct: 1 
            },
            { 
                q: "Co dělá validátor zdrojového kódu (např. od W3C)?", 
                options: ["Zrychluje web", "Překládá web do jiných jazyků", "Hledá syntaktické chyby a překlepy v HTML/CSS"], 
                explanations: [
                    "Rychlost webu ovlivňuje optimalizace obrázků a rychlost hostingu, nikoliv validátor.",
                    "Překlad do cizích jazyků zajišťují překladače nebo lokalizační skripty.",
                    "Validátor kontroluje, zda kód odpovídá oficiálním standardům a hledá chyby."
                ],
                correct: 2 
            }
        ]
    }
};

let currentQuizId = null;
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let selectedOptionIndex = null;
let answered = false;

function shuffle(items) {
    const result = items.slice();

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function createElement(tag, className, text) {
    const node = document.createElement(tag);

    if (className) {
        node.className = className;
    }

    if (text !== undefined) {
        node.textContent = text;
    }

    return node;
}

function startQuiz(quizId) {
    if (!quizData[quizId]) {
        return;
    }

    currentQuizId = quizId;
    currentQuestionIndex = 0;
    correctAnswersCount = 0;

    document.getElementById("quizMenu").classList.add("hidden");
    document.getElementById("quizActive").classList.add("active");
    document.getElementById("resultArea").style.display = "none";
    document.getElementById("questionArea").style.display = "block";
    document.getElementById("btnAbort").style.display = "inline-block";
    document.getElementById("quizTitle").textContent = quizData[quizId].title;
    document.getElementById("btnLesson").setAttribute("href", quizId + ".html");

    loadQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadQuestion() {
    const question = quizData[currentQuizId].questions[currentQuestionIndex];
    const total = quizData[currentQuizId].questions.length;

    selectedOptionIndex = null;
    answered = false;

    document.getElementById("quizProgress").textContent = "Otázka " + (currentQuestionIndex + 1) + " z " + total;
    document.getElementById("questionText").textContent = question.q;

    const optionsArea = document.getElementById("optionsArea");
    optionsArea.textContent = "";

    shuffle(question.options.map((_, index) => index)).forEach((index) => {
        const button = createElement("button", "quiz-option", question.options[index]);
        button.type = "button";
        button.dataset.index = String(index);
        button.addEventListener("click", () => selectOption(index, button));
        optionsArea.appendChild(button);
    });

    const feedback = document.getElementById("feedbackText");
    feedback.className = "quiz-feedback";
    feedback.textContent = "";

    const verifyButton = document.getElementById("btnVerify");
    verifyButton.style.display = "inline-block";
    verifyButton.disabled = true;

    document.getElementById("btnNext").style.display = "none";
}

function selectOption(index, element) {
    if (answered) {
        return;
    }

    selectedOptionIndex = index;

    document.querySelectorAll(".quiz-option").forEach((option) => {
        option.classList.remove("selected");
    });

    element.classList.add("selected");
    document.getElementById("btnVerify").disabled = false;
}

function createFeedbackItem(label, answerText, explanation, variant) {
    const item = createElement("div", "feedback-item " + variant);

    item.appendChild(createElement("div", "feedback-label", label));
    item.appendChild(createElement("div", "feedback-answer", answerText));
    item.appendChild(createElement("div", "feedback-body", explanation));

    return item;
}

function verifyAnswer() {
    if (selectedOptionIndex === null || answered) {
        return;
    }

    answered = true;

    const questions = quizData[currentQuizId].questions;
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === question.correct;

    document.getElementById("btnVerify").style.display = "none";

    document.querySelectorAll(".quiz-option").forEach((option) => {
        const index = Number(option.dataset.index);

        option.classList.remove("selected");
        option.classList.add("disabled");

        if (index === question.correct) {
            option.classList.add("correct");
        } else if (index === selectedOptionIndex) {
            option.classList.add("wrong");
        }
    });

    const feedback = document.getElementById("feedbackText");
    feedback.textContent = "";

    if (isCorrect) {
        correctAnswersCount++;
        feedback.className = "quiz-feedback correct";
        feedback.appendChild(createElement("div", "feedback-title", "Správně!"));
        feedback.appendChild(createElement("div", "feedback-body", question.explanations[question.correct]));
    } else {
        feedback.className = "quiz-feedback wrong";
        feedback.appendChild(createElement("div", "feedback-title", "Špatně"));
        feedback.appendChild(createFeedbackItem(
            "Vaše odpověď",
            question.options[selectedOptionIndex],
            question.explanations[selectedOptionIndex],
            "chosen"
        ));
        feedback.appendChild(createFeedbackItem(
            "Správná odpověď",
            question.options[question.correct],
            question.explanations[question.correct],
            "right"
        ));
    }

    const nextButton = document.getElementById("btnNext");
    nextButton.textContent = currentQuestionIndex >= questions.length - 1 ? "Dokončit" : "Další otázka →";
    nextButton.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData[currentQuizId].questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const total = quizData[currentQuizId].questions.length;
    const ratio = correctAnswersCount / total;

    let message = "Zkuste si lekci projít ještě jednou a kvíz zopakovat.";

    if (ratio === 1) {
        message = "Výborně, všechny odpovědi byly správně!";
    } else if (ratio >= 0.6) {
        message = "Dobrá práce. Chyby si můžete projít v lekci.";
    }

    document.getElementById("questionArea").style.display = "none";
    document.getElementById("btnAbort").style.display = "none";
    document.getElementById("resultArea").style.display = "block";
    document.getElementById("quizProgress").textContent = "Hotovo";
    document.getElementById("finalScore").textContent = "Skóre: " + correctAnswersCount + " / " + total;
    document.getElementById("resultMessage").textContent = message;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartQuiz() {
    startQuiz(currentQuizId);
}

function closeQuiz() {
    document.getElementById("quizActive").classList.remove("active");
    document.getElementById("quizMenu").classList.remove("hidden");
    currentQuizId = null;

    try {
        window.history.replaceState(null, "", window.location.pathname);
    } catch {
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}
