data_condition = [
	{
        title: "Tipi di danno",
        optional: "Standard rule",
        icon: "shield-impact",
        subtitle: "Resistenza e vulnerabilità",
        description: "Alcune creature e oggetti sono difficilmente o facilmente danneggiabili con certi tipi di danno.",
        reference: "PHB, pg. 197.",
        bullets: [
            "Se una creatura o un oggetto è dotato di <b>resistenza</b> a un tipo di danno, i danni di quel tipo contro di esso sono dimezzati.",
            "Se una creatura o un oggetto è dotato di <b>vulnerabilità</b> a un tipo di danni, i danni di quel tipo contro di esso sono raddoppiati.",
            "La resistenza e la vulnerabilità si applicano dopo tutti gli altri modificatori ai danni."
        ]
    },
    {
        title: "Accecato",
        optional: "Standard rule",
        icon: "one-eyed",
        subtitle: "Non puoi vedere",
        description: "Non puoi vedere.",
        reference: "PHB, pg. 290.",
        bullets: [
            "Fallisci automaticamente qualsiasi prova di caratteristica che richieda la vista.",
            "Hai svantaggio ai tiri per colpire.",
            "I tiri per colpire contro di te hanno vantaggio."
        ]
    },
    {
        title: "Affascinato",
        optional: "Standard rule",
        icon: "smitten",
        subtitle: "Sei affascinato",
        description: "Sei affascinato da un'altra creatura.",
        reference: "PHB, pg. 290.",
        bullets: [
            "Non puoi attaccare o bersagliare la creatura che ti ha affascinato con capacità o effetti magici dannosi.",
            "La creatura che ti ha affascinato ha vantaggio alle prove di caratteristica per interagire socialmente con te."
        ]
    },
    {
        title: "Assordato",
        optional: "Standard rule",
        icon: "elf-ear",
        subtitle: "Non riesci a sentire",
        description: "Non riesci a sentire.",
        reference: "PHB, pg. 290.",
        bullets: [
            "Fallisci automaticamente qualsiasi prova di caratteristica che richieda l'udito."
        ]
    },
    {
        title: "Indebolimento",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "Sei indebolito",
        description: "L'indebolimento è misurato in sei livelli.",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Livello</th><th></th><th></th><th style='text-align:left'>Effetto</th></tr><tr><td>1</td><td></td><td></td><td>Svantaggio alle prove di caratteristica</td></tr><tr><td>2</td><td></td><td></td><td>Velocità dimezzata</td></tr><tr><td>3</td><td></td><td></td><td>Svantaggio ai tiri per colpire e ai tiri salvezza</td></tr><tr><td>4</td><td></td><td></td><td>Massimo dei punti ferita dimezzato</td></tr><tr><td>5</td><td></td><td></td><td>Velocità ridotta a 0</td></tr><tr><td>6</td><td></td><td></td><td>Morte</td></tr></table>",
            "Soffri degli effetti del tuo attuale livello di esaurimento e di tutti i livelli inferiori.",
            "Terminare un riposo lungo riduce il tuo livello di esaurimento di 1, a condizione che tu abbia anche mangiato e bevuto.",
            "Inoltre, essere resuscitati riduce il livello di esaurimento di una creatura di 1."
        ]
    },
    {
        title: "Spaventato",
        optional: "Standard rule",
        icon: "screaming",
        subtitle: "Sei spaventato",
        description: "Sei spaventato.",
        reference: "PHB, pg. 292.",
        bullets: [
            "Hai svantaggio alle prove di caratteristica e ai tiri per colpire mentre la fonte della tua paura è entro la linea di vista.",
            "Non puoi avvicinarti volontariamente alla fonte della tua paura."
        ]
    },
    {
        title: "Afferrato",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "Sei afferrato",
        description: "Sei afferrato.",
        reference: "PHB, pg. 290.",
        bullets: [
            "La tua velocità diventa 0 e non puoi beneficiare di alcun bonus alla tua velocità.",
            "La condizione termina se il tuo lottatore è incapacitato.",
            "La condizione termina anche se vieni rimosso dalla portata del tuo lottatore."
        ]
    },
    {
        title: "Incapacitato",
        optional: "Standard rule",
        icon: "internal-injury",
        subtitle: "Non puoi effettuare azioni o reazioni",
        description: "Non puoi effettuare azioni o reazioni.",
        reference: "PHB, pg. 291.",
        bullets: [
        ]
    },
    {
        title: "Invisibile",
        optional: "Standard rule",
        icon: "invisible",
        subtitle: "Non puoi essere visto",
        description: "Non puoi essere visto senza l'aiuto della magia o di sensi speciali.",
        reference: "PHB, pg. 291.",
        bullets: [
            "Per nasconderti, sei pesantemente oscurato.",
            "Puoi comunque essere individuato da qualsiasi rumore tu faccia o dalle tracce che lasci.",
            "Hai vantaggio ai tiri per colpire.",
            "I tiri per colpire contro di te hanno svantaggio.",
            "Un bersaglio invisibile non può essere bersagliato da un incantesimo che richieda la vista."
        ]
    },
    {
        title: "Paralizzato",
        optional: "Standard rule",
        icon: "bolt-spell-cast",
        subtitle: "Sei paralizzato",
        description: "Non puoi fare nulla.",
        reference: "PHB, pg. 291.",
	bullets: [
            "Sei incapacitato e non puoi muoverti o parlare.",
            "I tiri per colpire contro di te hanno vantaggio.",
            "Qualsiasi attacco che ti colpisce è un colpo critico se l'attaccante si trova entro 1,5m da te.",
            "Fallisci automaticamente i tiri salvezza su Forza e Destrezza."
        ]
    },
    {
        title: "Pietrificato",
        optional: "Standard rule",
        icon: "stone-pile",
        subtitle: "Vieni trasformato in pietra",
        description: "Vieni trasformato, insieme a qualsiasi effetto non magico oggetti che indossi o trasporti, in una sostanza solida inanimata (solitamente pietra).",
        reference: "PHB, pg. 291.",
        bullets: [
            "Il tuo peso viene decuplicato e smetti di invecchiare.",
            "Sei incapacitato, non puoi muoverti o parlare e non sei consapevole di ciò che ti circonda.",
            "I tiri per colpire contro di te hanno vantaggio.",
            "Fallisci automaticamente i tiri salvezza su Forza e Destrezza.",
            "Hai resistenza a tutti i danni.",
            "Sei immune a veleni e malattie, sebbene un veleno o una malattia già presenti nel tuo organismo vengano solo sospesi, non neutralizzati."
        ]
    },
    {
        title: "Avvelenato",
        optional: "Standard rule",
        icon: "poison-bottle",
        subtitle: "Sei avvelenato",
        description: "Sei avvelenato.",
        reference: "PHB, pg. 290.",
        bullets: [
            "Hai svantaggio ai tiri per colpire e alle prove di caratteristica."
        ]
    },
    {
        title: "Prono",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "Sei prono",
        description: "Sei prono.",
        reference: "PHB, pg. 292.",
        bullets: [
            "La tua unica opzione di movimento è strisciare, a meno che tu non ti alzi in piedi.",
            "Hai svantaggio ai tiri per colpire.",
            "I tiri per colpire contro di te hanno vantaggio se l'attaccante si trova entro 1,5m da te, altrimenti il ​​tiro per colpire ha svantaggio."
        ]
    },
    {
        title: "Trattenuto",
        optional: "Standard rule",
        icon: "imprisoned",
        subtitle: "Sei trattenuto",
        description: "Sei trattenuto.",
        reference: "PHB, pg. 292.",
        bullets: [
            "La tua velocità diventa 0 e non puoi beneficiare di alcun bonus alla tua velocità.",
            "Hai svantaggio ai tiri per colpire.",
            "I tiri per colpire contro di te hanno vantaggio.",
            "Hai svantaggio ai tiri salvezza su Destrezza."
        ]
    },
    {
        title: "Stordito",
        optional: "Standard rule",
        icon: "knocked-out-stars",
        subtitle: "Sei stordito",
        description: "Sei stordito.",
        reference: "PHB, pg. 292.",
        bullets: [
            "Sei incapacitato, non puoi muoverti e puoi parlare solo a fatica.",
            "I tiri per colpire contro di te hanno vantaggio.",
            "Fallisci automaticamente i tiri salvezza su Forza e Destrezza."
        ]
    },
    {
        title: "Privo di sensi",
        optional: "Standard rule",
        icon: "coma",
        subtitle: "Sei privo di sensi",
        description: "Sei privo di sensi.",
        reference: "PHB, pg. 292.",
        bullets: [
            "Sei incapacitato, non puoi muoverti o parlare e non sei consapevole di ciò che ti circonda.",
            "Lasci cadere qualsiasi cosa tu stia impugnando e cadi prono.",
            "I tiri per colpire contro di te hanno vantaggio.",
            "Qualsiasi attacco che ti colpisce è un colpo critico se l'attaccante si trova entro 1,5m da te.",
            "Fallisci automaticamente i tiri salvezza su Forza e Destrezza.",
        ]
    },
	 {
        title: "Follia*",
        optional: "Optional rule",
        icon: "architect-mask",
        subtitle: "La tua mente è danneggiata",
        description: "Ricevi un trauma mentale con effetti psicologici a breve, lungo termine e indefiniti.",
        reference: "DMG, pgs. 258-260.",
        bullets: [
            "Un personaggio potrebbe acquisire una forma di follia a seguito di eventi traumatici, come vedere un'aberrazione proveniente dal Reame Remoto o leggere conoscenze proibite. La follia è classificata in base alla sua durata, con ogni livello che comporta cambiamenti più profondi:",
            "Follia temporanea (dura 1d10 minuti): effetti come essere Stordito, Paralizzato dalla paura, o parlare incoerentemente.",
            "Follia duratura (dura 1d10 x 10 ore): effetti come sviluppare una fobia, avere le allucinazioni, o soffrire di estrema paranoia.",
            "Follia indeterminata: il personaggio ottiene un nuovo difetto, curabile solo con potenti magie come Ristorare Superiore.",
            "Queste regole aggiungono un tocco di orrore e profondità psicologica, creando conseguenze che vanno oltre il danno fisico. Il DM può usare le tabelle del DMG per aggiungere un tocco di originalità agli incontri con gli orrori cosmici."
        ]
    },
	{
        title: "Sanguinamento**",
        optional: "Homebrew rule",
        icon: "bleeding-eye",
        subtitle: "Subisci danni nel tempo",
        description: "Subisci danni persistenti ad ogni turno fino a che la ferita non viene trattata.",
        reference: "",
        bullets: [
            "Questa regola aggiunge un effetto di danni nel tempo, spesso innescato da colpi critici con armi taglienti o perforanti. Rende il combattimento più pericoloso e sottolinea la necessità di cure o pronto soccorso in combattimento. Una creatura sanguinante subisce danni all'inizio del suo turno, ma la condizione può essere interrotta in diversi modi:",
            "Una creatura sanguinante subisce in genere 1d4 danni necrotici o taglienti all'inizio di ogni suo turno. Il dado di danno può aumentare per ferite più gravi.",
            "Qualsiasi quantità di guarigione magica che ripristina i punti ferita pone fine alla condizione.",
            "Una creatura può usare la sua azione per effettuare una prova di Saggezza (Medicina) (ad esempio, CD 12) per tamponare la ferita, terminando la condizione in caso di successo.",
            "Questo aggiunge un consumo di risorse agli incontri, poiché il gruppo deve spendere azioni o incantesimi per gestire i danni in corso, creando un senso di urgenza."
        ]
    },
    {
        title: "Morte",
        optional: "Standard rule",
        icon: "dead-head",
        subtitle: "Stai morendo",
        description: "Sei sceso a zero punti ferita e stai morendo.",
        reference: "PHB, pg. 197.",
        bullets: [
            "Se vieni ridotto a 0 punti ferita da danni che non ti uccidono, cadi Privo di sensi e stai morendo.",
            "Se ricevi cure, riprendi immediatamente conoscenza e non stai più morendo, ma rimani Prono.",
            "Quando muori, all'inizio di ogni tuo turno effettui un tiro salvezza su morte. Tira un d20 e non aggiungere modificatori.",
            "Un 10 o più è un successo, 9 o meno è un fallimento.",
            "Al terzo successo, diventi stabile.",
            "Al terzo fallimento, muori.",
            "Un 1 conta come due fallimenti.",
            "Un 20 ti fa recuperare immediatamente 1 punto ferita.",
            "Puoi anche essere stabilizzato da un alleato che effettua l'azione Stabilizzare e supera una prova di Saggezza (Medicina) con CD 10.",
            "Una volta stabilizzato, recuperi 1 punto ferita dopo 1d4 ore."
        ]
    },
    {
        title: "Morte alt.**",
        optional: "Homebrew rule",
        icon: "dead-head",
        subtitle: "Stai morendo",
        description: "Sei sceso a zero punti ferita e stai morendo.",
        reference: "Homebrew adattato da Daggerheart; PHB, pg. 197; DGM, pgs. 272-273.",
        bullets: [
            "Se vieni ridotto a 0 punti ferita da danni che non ti uccidono, cadi Privo di sensi e stai morendo.",
            "Puoi scegliere fra tre opzioni:",
"Morte Standard: Effettui un tiro salvezza seguendo le regole di <i>Morte</i>.",
            "Sacrificio Eroico: Quando i PG non possono più resistere, possono affrontare una "fiammata di gloria", un'azione finale epica prima che il personaggio esca di scena. La prossima azione ha successo automatico e risulta come critico.",
"Lesioni persistenti (guardare <i>Effetti Ambientali</i>: Sostituire la morte immediata con menomazioni permanenti o lunghe convalescenze (es. perdita di un arto, cicatrici, o riduzione delle caratteristiche)."
        ]
    }
]
