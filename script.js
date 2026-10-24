document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-scroll').forEach((el) => {
        observer.observe(el);
    });

    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

const quizData = {
    lekce1: {
        title: "Tvorba statických WWW stránek",
        questions: [
            { q: "Jak se jmenuje způsob tvorby, kde píšeme vše od nuly?", options: ["Webové generátory", "Čisté kódování", "Redakční systémy"], correct: 1 },
            { q: "Která klávesa v prohlížeči standardně otevírá Vývojářské nástroje?", options: ["F5", "F12", "F1"], correct: 1 },
            { q: "Jaký program používáme k zobrazení hotové webové stránky?", options: ["Webový prohlížeč", "Textový editor", "Malování"], correct: 0 }
        ]
    },
    lekce2: {
        title: "Zdrojový kód HTML",
        questions: [
            { q: "Do kterého tagu umisťujeme veškerý viditelný obsah stránky?", options: ["<head>", "<title>", "<body>"], correct: 2 },
            { q: "Jak správně zapsat HTML komentář?", options: ["// komentář", "<!-- komentář -->", "/* komentář */"], correct: 1 },
            { q: "Co deklaruje tag <!DOCTYPE html>?", options: ["Jazyk stránky", "Použití moderního HTML5", "Název dokumentu"], correct: 1 }
        ]
    },
    lekce3: {
        title: "Kaskádové styly (CSS)",
        questions: [
            { q: "Jakým znakem v CSS vybíráme prvek podle třídy (class)?", options: ["Tečkou (.)", "Mřížkou (#)", "Zavináčem (@)"], correct: 0 },
            { q: "K čemu primárně slouží CSS?", options: ["K tvorbě struktury", "K designu a vzhledu", "K databázovým operacím"], correct: 1 },
            { q: "Jakým tagem propojíme externí CSS soubor s HTML?", options: ["<link>", "<style>", "<script>"], correct: 0 }
        ]
    },
    lekce4: {
        title: "Formátování textu a pozadí",
        questions: [
            { q: "Která CSS vlastnost mění barvu textu?", options: ["font-color", "text-style", "color"], correct: 2 },
            { q: "Jaký tag se používá pro hlavní nadpis stránky?", options: ["<h1>", "<header>", "<strong>"], correct: 0 },
            { q: "Jakou vlastností nastavíme barvu pozadí?", options: ["background-color", "bg-color", "color"], correct: 0 }
        ]
    },
    lekce5: {
        title: "Rozměry, okraje, rámečky",
        questions: [
            { q: "Která vlastnost definuje vnitřní okraj (mezi obsahem a rámečkem)?", options: ["margin", "padding", "border"], correct: 1 },
            { q: "Která vlastnost definuje vnější okraj (odsazení od okolních prvků)?", options: ["padding", "margin", "outline"], correct: 1 },
            { q: "Jaká vlastnost se používá pro šířku elementu?", options: ["height", "size", "width"], correct: 2 }
        ]
    },
    lekce6: {
        title: "Obrázky",
        questions: [
            { q: "Jaký tag se používá pro vložení obrázku?", options: ["<image>", "<img>", "<pic>"], correct: 1 },
            { q: "Který atribut určuje cestu ke zdroji obrázku?", options: ["href", "link", "src"], correct: 2 },
            { q: "K čemu slouží atribut 'alt' u obrázku?", options: ["Alternativní text pro čtečky a při chybě načtení", "Zarovnání obrázku", "Popisek při najetí myší"], correct: 0 }
        ]
    },
    lekce7: {
        title: "Odkazy",
        questions: [
            { q: "Jaký tag se používá pro vytvoření odkazu?", options: ["<link>", "<a>", "<href>"], correct: 1 },
            { q: "Který atribut obsahuje cílovou URL adresu odkazu?", options: ["src", "url", "href"], correct: 2 },
            { q: "Jak zařídíme, aby se odkaz otevřel v nové záložce?", options: ["target=\"_blank\"", "new-tab=\"true\"", "open=\"new\""], correct: 0 }
        ]
    },
    lekce8: {
        title: "Seznamy",
        questions: [
            { q: "Jaký tag definuje neuspořádaný (odrážkový) seznam?", options: ["<ol>", "<ul>", "<li>"], correct: 1 },
            { q: "Jaký tag definuje uspořádaný (číslovaný) seznam?", options: ["<ul>", "<list>", "<ol>"], correct: 2 },
            { q: "Který tag tvoří samotnou položku uvnitř seznamu?", options: ["<li>", "<item>", "<il>"], correct: 0 }
        ]
    },
    lekce9: {
        title: "Tabulky",
        questions: [
            { q: "Kterým tagem definujeme tabulkový řádek?", options: ["<td>", "<th>", "<tr>"], correct: 2 },
            { q: "Kterým tagem definujeme běžnou buňku tabulky?", options: ["<td>", "<tr>", "<table>"], correct: 0 },
            { q: "Jakým atributem v HTML sloučíme dvě buňky vedle sebe (sloupce)?", options: ["rowspan", "colspan", "merge"], correct: 1 }
        ]
    },
    lekce10: {
        title: "Možnosti zápisu CSS",
        questions: [
            { q: "Co je to 'inline' (řádkový) zápis CSS?", options: ["Styl zapsaný přímo do atributu style=\"...\" v tagu", "Styl v hlavičce <head>", "Styl v samostatném souboru"], correct: 0 },
            { q: "Kde by se měl nacházet tag <style>, pokud píšeme CSS přímo do HTML souboru?", options: ["V <body>", "V <head>", "Kdekoliv"], correct: 1 },
            { q: "Který způsob zápisu CSS je z hlediska pořádku a správy webu nejlepší?", options: ["Řádkový", "Hlavičkový", "Externí soubor"], correct: 2 }
        ]
    },
    lekce11: {
        title: "Tvorba layoutu webové stránky",
        questions: [
            { q: "Jaký univerzální tag nejčastěji používáme jako kontejner pro bloky rozvržení?", options: ["<span>", "<div>", "<block>"], correct: 1 },
            { q: "Která moderní vlastnost CSS slouží k tvorbě flexibilních layoutů?", options: ["float", "position: absolute", "display: flex"], correct: 2 },
            { q: "Co dělá vlastnost position: absolute?", options: ["Vystředí prvek", "Vytrhne prvek z toku a umístí ho přesně na souřadnice", "Připne prvek k obrazovce při scrollování"], correct: 1 }
        ]
    },
    lekce12: {
        title: "Tvorba tlačítek a navigace",
        questions: [
            { q: "Jaká vlastnost odstraní podtržení u odkazu v navigaci?", options: ["text-decoration: none", "underline: 0", "font-style: normal"], correct: 0 },
            { q: "Co se stane při použití pseudotřídy :hover?", options: ["Prvek zmizí", "Aplikuje se styl po najetí myší", "Odkaz se otevře v novém okně"], correct: 1 },
            { q: "Který element je ze své podstaty řádkový (inline)?", options: ["<div>", "<p>", "<a>"], correct: 2 }
        ]
    },
    lekce13: {
        title: "Publikování webu na internetu",
        questions: [
            { q: "Co je to webhosting?", options: ["Název webové stránky (např. google.com)", "Pronájem prostoru na serveru pro soubory webu", "Program pro psaní kódu"], correct: 1 },
            { q: "Jaký protokol se běžně používá pro přenos souborů na server?", options: ["HTTP", "FTP", "SMTP"], correct: 1 },
            { q: "Co dělá validátor zdrojového kódu (např. od W3C)?", options: ["Zrychluje web", "Překládá web do jiných jazyků", "Hledá syntaktické chyby a překlepy v HTML/CSS"], correct: 2 }
        ]
    }
};

let currentQuizId = null;
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let selectedOptionIndex = null;

function startQuiz(quizId) {
    currentQuizId = quizId;
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    
    document.getElementById('quizMenu').classList.add('hidden');
    document.getElementById('quizActive').classList.add('active');
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('questionArea').style.display = 'block';
    document.getElementById('btnAbort').style.display = 'inline-block';
    
    document.getElementById('quizTitle').innerText = quizData[quizId].title;
    
    loadQuestion();
}

function loadQuestion() {
    const data = quizData[currentQuizId];
    const currentQ = data.questions[currentQuestionIndex];
    const total = data.questions.length;
    
    selectedOptionIndex = null;
    document.getElementById('quizProgress').innerText = `Otázka ${currentQuestionIndex + 1} z ${total}`;
    document.getElementById('questionText').innerText = currentQ.q;
    
    const optionsArea = document.getElementById('optionsArea');
    optionsArea.innerHTML = '';
    
    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => selectOption(index, btn);
        optionsArea.appendChild(btn);
    });
    
    document.getElementById('feedbackText').className = 'quiz-feedback';
    document.getElementById('feedbackText').innerText = '';
    
    document.getElementById('btnVerify').style.display = 'inline-block';
    document.getElementById('btnNext').style.display = 'none';
}

function selectOption(index, element) {
    if (document.getElementById('btnNext').style.display !== 'none') return;
    
    selectedOptionIndex = index;
    document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

function verifyAnswer() {
    if (selectedOptionIndex === null) return;
    
    const data = quizData[currentQuizId];
    const currentQ = data.questions[currentQuestionIndex];
    const feedback = document.getElementById('feedbackText');
    
    const isCorrect = (selectedOptionIndex === currentQ.correct);
    
    document.getElementById('btnVerify').style.display = 'none';
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === currentQ.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedOptionIndex && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        feedback.innerText = "Správně! Dobrá práce.";
        feedback.className = 'quiz-feedback correct';
        correctAnswersCount++;
    } else {
        feedback.innerText = "Špatně. Správná odpověď je vyznačena zeleně.";
        feedback.className = 'quiz-feedback wrong';
    }
    
    if (currentQuestionIndex >= data.questions.length - 1) {
        document.getElementById('btnNext').innerText = "Dokončit";
    } else {
        document.getElementById('btnNext').innerText = "Další otázka →";
    }
    document.getElementById('btnNext').style.display = 'inline-block';
}

function nextQuestion() {
    const data = quizData[currentQuizId];
    currentQuestionIndex++;
    
    if (currentQuestionIndex < data.questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const total = quizData[currentQuizId].questions.length;
    document.getElementById('questionArea').style.display = 'none';
    document.getElementById('btnAbort').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    
    document.getElementById('quizProgress').innerText = "Hotovo";
    document.getElementById('finalScore').innerText = `Skóre: ${correctAnswersCount} / ${total}`;
}

function closeQuiz() {
    document.getElementById('quizActive').classList.remove('active');
    document.getElementById('quizMenu').classList.remove('hidden');
    currentQuizId = null;
}