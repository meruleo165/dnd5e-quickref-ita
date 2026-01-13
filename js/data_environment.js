data_environment_obscurance = [
    {
        title: "Leggermente oscurato",
        optional: "Standard rule",
        icon: "dust-cloud",
        subtitle: "Svantaggio a Percezione",
        description: "Luce fioca, nebbia rarefatta, fogliame moderato.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Le creature hanno <b>svantaggio alle prove di Saggezza (Percezione)</b> basate sulla vista."
        ]
    },
    {
        title: "Pesantemente oscurato",
        optional: "Standard rule",
        icon: "fog",
        subtitle: "Effettivamente cieco",
        description: "Oscurità, fitta nebbia, fogliame denso.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Una creatura in un'area pesantemente oscurata è soggetta a tutti gli effetti della <b>condizione di Accecato</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Luce intensa",
        optional: "Standard rule",
        icon: "star-pupil",
        subtitle: "Visione normale",
        description: "La luce intensa permette alla maggior parte delle creature di vedere normalmente.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Anche le giornate più smorte forniscono comunque luce intensa, così come torce, lanterne, fuochi e altre fonti di illuminazione entro un raggio specifico."
        ]
    },
    {
        title: "Luce fioca",
        optional: "Standard rule",
        icon: "semi-closed-eye",
        subtitle: "Leggermente oscurato",
        description: "Luce fioca, equivalente alla condizione di ombra.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crea un'area <b>leggermente oscurata</b>.",
            "Una zona di luce fioca si trova solitamente a metà tra una fonte di luce intensa, come una torcia, e l'oscurità circostante.",
            "Anche la luce tenue del crepuscolo e dell'alba conta come luce fioca. Una luna piena particolarmente splendente potrebbe proiettare luce fioca nell'area."
        ]
    },
    {
        title: "Oscurità",
        optional: "Standard rule",
        icon: "worried-eyes",
        subtitle: "Pesantemente oscurato",
        description: "L'oscurità crea un'area pesantemente oscurata.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crea un'area <b>pesantemente oscurata</b>.",
            "I personaggi si ritrovano immersi nell'oscurità di notte (anche nella maggior parte delle notti di luna), all'interno di un dungeon o di una cripta sotterranea priva di fonti di luce o in un'area di oscurità magica."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vista cieca",
        optional: "Standard rule",
        icon: "echo-ripples",
        subtitle: "Percepire senza vista",
        description: "Percepire l'ambiente circostante senza fare affidamento sulla vista, entro un certo raggio.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Le creature prive di occhi, come le melme, e le creature dotate di un radar innato o di senti amplificati, come i pipistrelli e i draghi puri, sono dotate di questo senso."
        ]
    },
    {
        title: "Scurovisione",
        optional: "Standard rule",
        icon: "night-vision",
        subtitle: "Visione limitata nell'oscurità",
        description: "Una creatura con Scurovisione può vedere meglio al buio o in condizioni di scarsa illuminazione, entro un certo raggio.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Entro un raggio specificato, una creatura con Scurovisione può <b>vedere nell'oscurità come se l'oscurità fosse luce fioca</b>, quindi le aree di oscurità sono solo leggermente oscurate per quanto riguarda quella creatura.",
            "Tuttavia, la creatura non può distinguere i colori nell'oscurità, solo le sfumature di grigio.",
            "Molte creature nei mondi di D&D, specialmente quelle che vivono sottoterra, hanno Scurovisione."
        ]
    },
    {
        title: "Vista pura",
        optional: "Standard rule",
        icon: "eye-shield",
        subtitle: "Vedere nell'oscurità",
        description: "Una creatura con Vista pura può vedere tutto nella sua vera forma, indipendentemente dall'ambiente.",
        reference: "PHB, pg. 185.",
        bullets: [
            "Una creatura con Vista pura può, entro un raggio specifico, vedere nell'oscurità normale e magica, vedere le creature e gli oggetti invisibili, individuare automaticamente le illusioni visive e superare i tiri salvezza contro di esse e percepire la forma originale di un mutaforma o di una creatura trasformata magicamente.",
            "Inoltre, la creatura può proiettare la sua vista sul Piano Etereo."
        ]
    }
]

data_environment_cover = [
    {
        title: "Mezza copertura",
        optional: "Standard rule",
        icon: "broken-shield",
        subtitle: "Mura basse, mobili, creature",
        description: "Un bersaglio ha mezza copertura se un ostacolo blocca almeno metà del suo corpo.",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'ostacolo potrebbe essere un muretto, un grosso mobile, un tronco d'albero esile o una creatura (amica o nemica che sia)",
            "Un bersaglio con mezza copertura ha un <b>bonus di +2 alla CA e ai tiri salvezza su Destrezza</b>.",
            "Se un bersaglio si trova dietro più fonti di copertura, si applica solo il grado di copertura più protettivo."
        ]
    },
    {
        title: "Tre quarti di copertura",
        optional: "Standard rule",
        icon: "cracked-shield",
        subtitle: "Saracinesca, feritoia",
        description: "Un bersaglio ha tre quarti di copertura se circa tre quarti di esso sono coperti da un ostacolo.",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'ostacolo potrebbe essere una saracinesca, una feritoia per frecce o un grosso tronco d'albero.",
            "Un bersaglio con tre quarti di copertura ha un <b>bonus di +5 alla CA e ai tiri salvezza su Destrezza</b>.",
            "Se un bersaglio si trova dietro più fonti di copertura, si applica solo il grado di copertura più protettivo."
        ]
    },
    {
        title: "Copertura totale",
        optional: "Standard rule",
        icon: "shield",
        subtitle: "Completamente occultato",
        description: "Un bersaglio ha copertura totale se è completamente occultato da un ostacolo",
        reference: "PHB, pg. 196.",
        bullets: [
            "Un bersaglio con copertura totale <b>non può essere bersagliato direttamente</b> da un attacco o da un incantesimo, anche se certi incantesimi possono raggiungere tale bersaglio includendolo in un'area di effetto.",
            "Se un bersaglio si trova dietro più fonti di copertura, si applica solo il grado di copertura più protettivo si applica la copertura."
        ]
    }
]
data_environment_hazard = [
    {
        title: "Cadere",
        optional: "Standard rule",
        icon: "falling",
        subtitle: "1d6 per 3m (max 20d6)",
        description: "Una creatura subisce 1d6 danni contundenti per ogni 3m di caduta, fino a un massimo di 20d6, e atterra prona.",
        reference: "PHB, pg. 183.; XGE, pg. 77.",
        bullets: [
            "Cadere è un rischio significativo, con un danno massimo di 20d6, che rappresenta la velocità terminale. Le regole per la caduta includono anche specifiche per le creature volanti e la velocità di discesa.",
            "Velocità di caduta (XGE): Una creatura cade istantaneamente per 150m. Se alla fine del suo turno sta ancora cadendo, scende di altri 150m.",
            "Creature volanti: Se una creatura volante viene gettata prona, la sua velocità scende a 0 o è altrimenti privata della capacità di muoversi, cade a meno che non possa librarsi o venga salvata dalla magia.",
            "La regola della caduta istantanea di 150m significa che anche con un incantesimo come <i>Caduta Morbida</i>, che ha un tempo di lancio di 1 reazione, una creatura cadrà per una distanza significativa prima che l'incantesimo possa essere lanciato."
        ]
    },
    {
        title: "Soffocamento",
        optional: "Standard rule",
        icon: "drowning",
        subtitle: "Trattenere il respiro",
        description: "Priva d'aria, una creatura può sopravvivere per un tempo limitato prima di scendere a 0 punti ferita e iniziare a morire.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Una creatura può trattenere il respiro per un numero di minuti pari a 1 + il suo modificatore di Costituzione (minimo 30 secondi). Quando rimane senza fiato, entra in un conto alla rovescia mortale:",
            "Dopo essere rimasto senza fiato, puoi sopravvivere per un numero di round pari al tuo modificatore di Costituzione (minimo 1 round).",
            "All'inizio del suo turno successivo, la creatura scende a 0 punti ferita e inizia a morire.",
            "Una creatura che soffoca non può recuperare punti ferita finché non viene stabilizzata o non può respirare di nuovo."  
        ]
    },
    {
        title: "Combattere sott'acqua",
        optional: "Standard rule",
        icon: "at-sea",
        subtitle: "Combattere in acqua",
        description: "Combattere mentre si è completamente immersi è difficile per le creature senza una velocità di nuoto, il che impone penalità alla maggior parte degli attacchi con armi.",
        reference: "PHB, pg. 198.",
        bullets: [
            "L'acqua ostacola il movimento e la forza dei colpi. Qualsiasi creatura completamente immersa che non abbia una velocità di nuoto naturale è soggetta alle seguenti regole:",
            "Attacchi in Mischia: Una creatura senza una velocità di nuotare subisce svantaggio ai tiri per colpire con armi da mischia, a meno che l'arma non sia un giavellotto, una lancia, un pugnale, una spada corta o un tridente.",
            "Attacchi a Distanza: Gli attacchi con armi a distanza mancano automaticamente i bersagli oltre la normale gittata dell'arma. Entro la normale gittata, il tiro per colpire subisce svantaggio a meno che non si tratti di una balestra, una rete o un'arma da lancio come un giavellotto (lancia, tridente, dardo).",
            "Qualsiasi creatura o oggetto completamente immerso nell'acqua ha resistenza ai danni da fuoco."
        ]
    },
    {
        title: "Freddo estremo*",
        optional: "Optional rule",
        icon: "thermometer-cold",
        subtitle: "Rischio di Indebolimento",
        description: "Quando esposta a freddo estremo, una creatura può subire livelli di Indebolimento.",
        reference: "DMG, pg. 110.",
        bullets: [
            "(Regola Opzionale):",
            "L'esposizione prolungata a temperature pari o inferiori a -17 °C deve effettuare tiri salvezza su Costituzione per resistere all'accumulo di livelli di Indebolimento.",
            "Quando esposta a freddo estremo, una creatura deve superare un tiro salvezza su Costituzione con CD 10 alla fine di ogni ora o subire un livello di Indebolimento.",
            "Le creature con resistenza o immunità ai danni da freddo superano automaticamente il tiro salvezza, così come quelle che indossano un equipaggiamento adatto al freddo o quelle naturalmente adattate ai climi freddi."
        ]
    },
    {
        title: "Caldo estremo*",
        optional: "Optional rule",
        icon: "thermometer-hot",
        subtitle: "Rischio di Indebolimento",
        description: "Quando esposta a caldo estremo, una creatura può subire livelli di Indebolimento.",
        reference: "DMG, pg. 110.",
        bullets: [
            "(Regola Opzionale):",
            "L'esposizione prolungata a temperature pari o superiori a 37 °C deve effettuare tiri salvezza su Costituzione per resistere all'accumulo di livelli di Indebolimento.",
            "Quando esposta a calore estremo, una creatura deve effettuare un tiro salvezza su Costituzione alla fine di ogni ora o subire un livello di Indebolimento.",
            "La CD è 5 per la prima ora e aumenta di 1 per ogni ora aggiuntiva.",
            "Le creature che indossano armature medie, armature pesanti o abiti pesanti subiscono svantaggio al tiro salvezza.",
            "Le creature con resistenza o immunità ai danni da fuoco superano automaticamente il tiro salvezza, così come quelle naturalmente adattate ai climi caldi."
        ]
    },
    {
        title: "Vento forte*",
        optional: "Optional rule",
        icon: "windsock",
        subtitle: "Influenza attacchi e percezione",
        description: "L'esposizione al vento forte impone penalità agli attacchi con armi a distanza e alle prove di Percezione.",
        reference: "DMG, pg. 110.",
        bullets: [
            "(Regola Opzionale):",
            "Il vento forte impone svantaggio agli attacchi con armi a distanza e alle prove di Saggezza (Percezione) basate sull'udito.",
            "Il vento forte estingue le fiamme scoperte, disperde la nebbia e rende quasi impossibile volare, se non tramite mezzi magici.",
            "Una creatura volante colta da un vento forte deve atterrare alla fine del suo turno o cadere.",
            "Un vento forte in un deserto può generare una tempesta di sabbia che impone svantaggio alle prove di Saggezza (Percezione) basate sulla vista."
        ]
    },
    {
        title: "Alta quota*",
        optional: "Optional rule",
        icon: "mountain-climbing",
        subtitle: "Rischio di Indebolimento",
        description: "Quando esposta all'alta quota, una creatura non abituata può subire livelli di Indebolimento.",
        reference: "DMG, pg. 110.",
        bullets: [
            "(Regola Opzionale):",
            "Quando viaggia ad altitudini pari o superiori a 3.000 metri, una creatura deve effettuare un tiro salvezza su Costituzione con CD 10 per ogni ora di viaggio oltre le 8 ore giornaliere. In caso di fallimento, subisce un livello di Esaurimento.",
            "Le creature acclimatate ad altitudini elevate superano automaticamente questo tiro salvezza. Una creatura può acclimatarsi trascorrendo 30 giorni a quell'altitudine."
        ]
    },
    {
        title: "Precipitazioni abbondanti*",
        optional: "Optional rule",
        icon: "raining",
        subtitle: "Influenza percezione e fuoco",
        description: "Pioggia battente o nevicata oscurano leggermente l'area, impongono svantaggio alle prove di vista o udito e spengono le fiamme scoperte.",
        reference: "DMG, pg. 110.",
        bullets: [
            "(Regola Opzionale):",
            "La pioggia battente e la nevicata abbondante creano un'area leggermente oscurata, imponendo svantaggio alle prove di Saggezza (Percezione) basate sulla vista.",
            "La pioggia battente impone svantaggio anche alle prove di Saggezza (Percezione) basate sull'udito.",
            "La pioggia battente spegne le fiamme libere, come candele e torce."
        ]
    },
    {
        title: "Fiancheggiamento*",
        optional: "Optional rule",
        icon: "confrontation",
        subtitle: "Vantaggio dato dal posizionamento",
        description: "Due alleati su lati opposti di un nemico ottengono vantaggio sui loro attacchi in mischia contro di esso.",
        reference: "DMG, pgs. 251-252.",
        bullets: [
            "(Regola Opzionale):",
            "Quando una creatura e almeno uno dei suoi alleati sono adiacenti a un nemico e su lati o angoli opposti dello spazio nemico, lo fiancheggiano e ognuno di loro ottiene vantaggio sui tiri per colpire in mischia contro di esso.",
            "Una creatura non può fiancheggiare un nemico che non è in grado di vedere e non può fiancheggiare nessuno finché è incapacitata.",
            "Una creatura non può essere fiancheggiata se è informe o ha una caratteristica che la rende inattaccabile.",
            "Una variante comune conferisce un bonus di +2 ai tiri per colpire invece del vantaggio per ridurre la frequenza del vantaggio.",
            "Il vantaggio diventa significativamente più comune sia per i giocatori che per i mostri."
        ]
    },
    {
        title: "Lesioni persistenti*",
        optional: "Optional rule",
        icon: "sword-break",
        subtitle: "Ferite di battaglia persistenti",
        description: "Quando subisce un colpo critico o scende a 0 PV, una creatura potrebbe subire una lesione persistente.",
        reference: "DMG, pgs. 272-273.",
        bullets: [
            "(Regola Opzionale):",
            "Questa regola è adatta alle campagne che desiderano un'atmosfera più cruda e pericolosa, in cui le cicatrici della battaglia siano più di semplici punti ferita persi.",
            "Per determinare la natura della lesione si tira sulla tabella Lesioni Persistenti."
            "Esempi includono: Perdita di un Occhio (svantaggio sugli attacchi a distanza e sulla Percezione basata sulla vista), Zoppicare (velocità ridotta di 1,5m) o una Cicatrice Orribile (svantaggio su Persuasione, vantaggio su Intimidire).",
            "Queste ferite spesso richiedono magie potenti come Guarigione o Rigenerazione o tempi di recupero significativi per guarire."
        ]
    },
    {
        title: "Danni massicci*",
        optional: "Optional rule",
        icon: "internal-injury",
        subtitle: "Rischio di Trauma",
        description: "Quando una creatura subisce danni ingenti, deve effettuare un tiro salvezza o subire un effetto casuale.",
        reference: "DMG, pg. 273.",
        bullets: [
            "(Regola Opzionale):",
            "Quando una creatura subisce danni pari o superiori alla metà dei suoi PF massimi da una singola fonte, deve superare un tiro salvezza su Costituzione con CD 15.",
            "In caso di fallimento, la creatura subisce un effetto casuale dalla tabella Traumi, come barcollare, scendere a 0 o rimanere stordita.",
            "Un tiro salvezza fallito può avere un impatto devastante, potenzialmente stordendo un personaggio o riducendone la velocità a zero in un momento critico."
        ]
    },
    {
        title: "Morale*",
        optional: "Optional rule",
        icon: "terror",
        subtitle: "Il nemico fuggirà o si arrenderà?",
        description: "Alcuni combattenti potrebbero fuggire via o arrendersi quando le sorti dello scontro volgono al peggio.",
        reference: "DMG, pg. 273.",
        bullets: [
            "(Regola Opzionale):",
            "Il DM può richiedere una prova di morale quando si verificano determinati eventi:",
            "Inneschi di una prova di morale: il gruppo nemico viene sorpreso, ridotto a metà del suo numero o il suo leader viene sconfitto.",
            "Il DM effettua un tiro salvezza su Saggezza con CD 10 per la creatura o il capo del gruppo. In caso di fallimento, il gruppo si disperde.",
            "La CD potrebbe essere modificata dalla situazione (ad esempio, più alta se i PG sono terrificanti, più bassa se i mostri stanno difendendo la loro tana).",
            "Questo può portare a esiti più dinamici, come inseguimenti, situazioni con ostaggi o nemici che tornano più tardi con rinforzi."
        ]
    },
    {
        title: "Trappole*",
        optional: "Optional rule",
        icon: "tripwire",
        subtitle: "Combattere in acqua",
        description: "Combattere mentre si è completamente immersi è difficile per le creature senza una velocità di nuoto, il che impone penalità alla maggior parte degli attacchi con armi.",
        reference: "PHB, pg. 198.",
        bullets: [
            "(Regola Opzionale):",
            "L'acqua ostacola il movimento e la forza dei colpi. Qualsiasi creatura completamente immersa che non abbia una velocità di nuoto naturale è soggetta alle seguenti regole:",
            "Attacchi in Mischia: Una creatura senza una velocità di nuotare subisce svantaggio ai tiri per colpire con armi da mischia, a meno che l'arma non sia un giavellotto, una lancia, un pugnale, una spada corta o un tridente.",
            "Attacchi a Distanza: Gli attacchi con armi a distanza mancano automaticamente i bersagli oltre la normale gittata dell'arma. Entro la normale gittata, il tiro per colpire subisce svantaggio a meno che non si tratti di una balestra, una rete o un'arma da lancio come un giavellotto (lancia, tridente, dardo).",
            "Qualsiasi creatura o oggetto completamente immerso nell'acqua ha resistenza ai danni da fuoco."
        ]
    },
]
data_environment_outdoor = [
    {
        title: "Riposo",
        optional: "Standard rule",
        icon: "night-sleep",
        subtitle: "Tempo di riposare",
        description: "Gli avventurieri possono concedersi dei riposi brevi nell'arco della giornata e un riposo lungo alla conclusione della giornata.",
        reference: "PHB, pg. 186.",
        bullets: [
            "",
            "<b>Riposo Breve</b>: dura almeno 1 ora, un personaggio può spendere uno o più Dadi Vita alla fine di un riposo breve",
            "Eroismo Epico: un riposo breve dura 5 minuti, mentre un riposo lungo dura 1 ora. Questa è la scelta ideale per partite ad alta azione e dal ritmo serrato, in cui le risorse si ripristinano rapidamente.",
            "Realismo Crudo: un riposo breve dura 8 ore, mentre un riposo lungo dura 7 giorni. Questo rende gli incontri più pericolosi e incoraggia una gestione oculata delle risorse."
        ]
    },
    {
        title: "Varianti al riposo*",
        optional: "Optional rule",
        icon: "night-sleep",
        subtitle: "Cambia il ritmo di gioco",
        description: "Modifica la durata dei riposi brevi e lunghi, alterando radicalmente il ritmo di una campagna.",
        reference: "PHB, pg. 186; DMG, pg. 267.",
        bullets: [
            "(Regola Opzionale):",
            "<b>Riposo Breve</b>: dura almeno 1 ora, un personaggio può spendere uno o più Dadi Vita alla fine di un riposo breve",
            "Eroismo Epico: un riposo breve dura 5 minuti, mentre un riposo lungo dura 1 ora. Questa è la scelta ideale per partite ad alta azione e dal ritmo serrato, in cui le risorse si ripristinano rapidamente.",
            "Realismo Crudo: un riposo breve dura 8 ore, mentre un riposo lungo dura 7 giorni. Questo rende gli incontri più pericolosi e incoraggia una gestione oculata delle risorse."
        ]
    },
]
