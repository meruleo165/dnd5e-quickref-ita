data_outdoor = [
    {
        title: "Riposo",
        optional: "Standard rule",
        icon: "night-sleep",
        subtitle: "Tempo di riposare",
        description: "Gli avventurieri possono concedersi dei riposi brevi nell'arco della giornata e un riposo lungo alla conclusione della giornata.",
        reference: "PHB, pg. 186.",
        bullets: [
            "<b>Riposo Breve</b>: dura almeno 1 ora, un personaggio può spendere uno o più Dadi Vita alla fine di un riposo breve, fino al massimo dei suoi Dadi Vita, che equivale al suo livello del personaggio.",
            "<b>Riposo Lungo</b>: dura almeno 8 ore (6 ore di sonno e 2 ore di attività poco impegnative), un personaggio alla fine di un Riposo Lungo recupera tutti i punti ferita perduti. Recupera anche i Dadi Vita spesi, fino a un numero pari alla metà del totale del suo personaggio.",
            "Per ogni Dado Vita speso, il giocatore tira il dado e aggiunge al risultato il modificatore di Costituzione del personaggio, che recupera un numero di punti ferita pari al totale."
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
            "<b>Variante Eroismo epico</b>: un riposo breve dura 5 minuti, mentre un riposo lungo dura 1 ora. Questa è la scelta ideale per partite ad alta azione e dal ritmo serrato, in cui le risorse si ripristinano rapidamente.",
            "<b>Variante Realismo crudo</b>: un riposo breve dura 8 ore, mentre un riposo lungo dura 7 giorni. Questo rende gli incontri più pericolosi e incoraggia una gestione oculata delle risorse."
        ]
    },
    {
        title: "Cibo e Acqua",
        optional: "Standard rule",
        icon: "meat",
        subtitle: "Rischio di Indebolimento",
        description: "I personaggi che non mangiano o non bevono subiscono gli effetti dell'indebolimento",
        reference: "PHB, pg. 185; DMG, pgs. 111-112.",
        bullets: [
            "Un personaggio può fare a meno del cibo per un numero di giorni pari a 3 + il suo modificatore di Costituzione (fino a un minimo di 1). Alla fine di ogni giornata oltre quel limite, un personaggio subisce automaticamente un livello di <i>Indebolimento</i>.",
            "Un personaggio che beve soltanto la metà dell'ammontare di acqua richiesto deve superare un tiro salvezza su Costituzione con CD 15, altrimenti subisce un livello di <i>Indebolimento</i> alla fine della giornata."
        ]
    },
    {
        title: "Fabbricare Oggetti",
        optional: "Standard rule",
        icon: "power-ring",
        subtitle: "Attività fuori servizio",
        description: "Fabbrica oggetti non magici, magici, equipaggiamento o opere d'arte.",
        reference: "PHB, pg. 187; DMG, pgs. 128-129; XGE, pgs. 131-132.",
        bullets: [
            "Work in Progress. è troppa roba."
        ]
    },
    {
        title: "Addestrarsi",
        optional: "Standard rule",
        icon: "archive-register",
        subtitle: "Attività fuori servizio",
        description: "Un personaggio può apprendere un nuovo linguaggio o addestrarsi nell'utilizzo di un tipo di strumenti.",
        reference: "PHB, pg. 187;  DMG, pg. 131; XGE, 126-127.",
        bullets: [
            "Il personaggio deve trovare un istruttore disposto a insegnargli ciò che vuole apprendere (lingue, strumenti) al costo di 250 giorni e 1 mo al giorno.",
            "Addestramento (XGE): Solitamente servono almeno dieci settimane lavorative, ma questo periodo è ridotto di un numero di settimane lavorative pari al modificatore di Intelligenza del personaggio. L'addestramento ha un costo di 25 mo per settimana lavorativa.",
            "Non è possibile addestrarsi per ottenere una competenza ad armi o armature, poiché ottenibili solo dalla propria classe, talenti o multiclasse.",
            "Dopo avere speso il denaro e impiegato l'ammontare di tempo richiesto, il personaggio apprende il linguaggio o ottiene la competenza nel nuovo strumento."
        ]
    },
    {
        title: "Addestrarsi**",
        optional: "Homebrew rule",
        icon: "archive-register",
        subtitle: "Attività fuori servizio",
        description: "Un personaggio può insegnare un nuovo linguaggio o spiegare l'utilizzo di un tipo di strumenti.",
        reference: "",
        bullets: [
            "(Regola Homebrew):",
            "Una volta al giorno, se sei competente in un linguaggio o in un tipo di strumenti, puoi iniziare a insegnare quella competenza a un compagno di avventure disponibile nell'arco di 30 minuti.",
            "Sia l'insegnante che lo studente tirano 1d20. Prendi il risultato più basso + il modificatore di intelligenza dello studente e aggiungilo al <i>voto dello studente</i> per quella competenza.",
            "Il dado dell'insegnante rappresenta quanto bene ha insegnato, e il dado dello studente rappresenta quanto bene ha imparato. Anche se lo studente ottiene un risultato alto, non può imparare più di quanto insegnato nella lezione.",
            "Una volta che il <i>voto dello studente</i> raggiunge la CD appropriata, lo studente ottiene quella competenza.",
            "Si raccomanda una CD di 250 per un nuovo linguaggio, e una CD di 150 per un tipo di strumenti."
        ]
    },
    {
        title: "Pergamene Magiche*",
        optional: "Optional rule",
        icon: "scroll-quill",
        subtitle: "Crea o copia una pergamena",
        description: "Le pergamene magiche possono essere copiate o create.",
        reference: "PHB, pg. 83; DMG, pg. 140, 191; XGE, pg. 133; TCE, pgs. 53-55.",
        bullets: [
            "(Regola Opzionale):",
            "Un incantesimo da mago su una pergamena può essere copiato proprio come gli incantesimi nei libri degli incantesimi. Quando un incantesimo viene copiato da una pergamena, chi lo copia deve superare una prova di Intelligenza (Arcano) con una CD pari a 10 + il livello dell'incantesimo.",
            "Se la prova riesce, l'incantesimo è copiato con successo. Che la prova abbia successo o meno, la pergamena viene distrutta.",
            "Per trascrivere una pergamena magica, è richiesto un ammontare di tempo e denaro dipendente dall'incantesimo che il personaggio vuole trascrivere, come indicato nella tabella Costi delle Pergamene Magiche.",
            "Il personaggio deve avere competenza nell'abilità Arcano e deve fornire le eventuali componenti materiali richieste per lanciare l'incantesimo.",
            "Il personaggio deve avere preparato l'incantesimo o averlo tra i propri incantesimi conosciuti, al fine di scrivere una pergamena che lo contenga.",
            "Se l'incantesimo trascritto è un trucchetto, la versione sulla pergamena funziona come se l'incantatore fosse di 1° livello."
        ]
    }
  ]
