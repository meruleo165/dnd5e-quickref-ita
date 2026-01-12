data_environment_obscurance = [
    {
        title: "Leggermente oscurato",
        optional: "Standard rule",
        icon: "dustcloud",
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
        icon: "echoripples",
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
        icon: "semi-closed-eye",
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
        description: "Privo d'aria, puoi sopravvivere per un tempo limitato prima di scendere a 0 punti ferita e iniziare a morire.",
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
        icon: "shield",
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
        title: "Freddo estremo",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Caldo estremo",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Vento forte",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Alta quota",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Fiancheggiamento",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Lesioni persistenti",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Danni massicci",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Morale",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Varianti al riposo",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Pavimento scivoloso",
        optional: "Standard rule",
        icon: "shield",
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
        title: "Trappole",
        optional: "Standard rule",
        icon: "shield",
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
]
