data_action = [
    {
        title: "Attacco",
        optional: "Standard rule",
        icon: "crossed-swords",
        subtitle: "Esegui un attacco (mischia/distanza)",
        description: "Esegui un attacco in mischia o a distanza.",
        reference: "PHB, pgs. 192, 194-196.",
        bullets: [
            "Se il totale del tiro per colpire + modificatori è pari o superiore alla Classe Armatura (CA) del bersaglio, l'attacco colpisce.",
            "Quando un personaggio attacca con un'arma, <b>tira il dado o i dadi di danno + il modificatore di caratteristica + eventuali altri modificatori</b> per i danni totali inflitti contro il bersaglio o i bersagli.",
            "Il modificatore di caratteristica usato per un <b>attacco in mischia è Forza</b>, mentre per un <b>attacco a distanza è Destrezza</b>.",
            "Le armi dotate della proprietà <b>accurata</b> o da <b>lancio</b> violano questa regola.",
            "Quando si ottiene un <b>20 al tiro per colpire</b>, il personaggio segna un colpo critico e l'attacco <b>colpisce a prescindere</b>, oltre a tirare i dadi due volte per i danni.",
            "Quando si ottiene un <b>1 al tiro per colpire</b>, l'attacco <b>manca a prescindere</b> da qualsiasi modificatore o CA del bersaglio.",
            "Certe caratteristiche, come <i>Attacco Extra</i> del guerriero, permettono di eseguire più di un singolo attacco con questa azione. Ognuno di questi attacchi ha tiri separati e può colpire creature diverse. Puoi muoverti tra i vari attacchi.",
            "Quando l'attacco viene eseguito con un'arma da mischia <b>leggera</b>, un azione bonus può essere usata per attaccare con l'arma nell'altra mano (vedi l'azione bonus <i>Attacco con l'altra mano</i>).",
            "Puoi sostituire uno dei tuoi attacchi in mischia con una <i>Presa</i> o una <i>Spinta</i>.",
            "Alcune condizioni danno vantaggio all'attacco: attacchi contro bersagli accecati, paralizzati, pietrificati, immobilizzati, storditi o incoscienti; attacchi in mischia contro bersagli proni; attacchi da parte di attaccanti invisibili o nascosti.",
            "Alcune condizioni danno svantaggio all'attacco: attacchi contro bersagli invisibili o nascosti; attacchi a distanza contro bersagli proni; attacchi da parte di attaccanti accecati, spaventati, avvelenati o immobilizzati."
        ]
    },
    {
        title: "Tramortire",
        optional: "Standard rule",
        icon: "sword-brandish",
        subtitle: "Colpo non letale",
        description: "Esegui un colpo non letale per neutralizzare un avversario.",
        reference: "PHB, pg. 198.",
        bullets: [
            "Quando un attaccante porta una creatura a 0 punti ferita con un <b>attacco in mischia</b>, può decidere di tramortirla.",
            "L'attaccante può fare questa scelta nel momento in cui infligge i danni.",
            "La creatura cade <i>Priva di sensi</i> ed è stabile.",
            "Gli <b>attacchi a distanza</b> e la maggior parte degli incantesimi non possono <i>Tramortire</i> una creatura, poiché non soddisfano il requisito attacco in mischia.",
            "Alcuni incantesimi specifici in mischia sono l'eccezione (come <i>Stretta Folgorante</i>."
        ]
    },
    {
        title: "Presa",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "Attacco speciale in mischia",
        description: "Tentativo di afferrare una creatura o portarla a terra.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Puoi usare un'azione di <i>Attacco</i> per eseguire un'azione speciale in mischia, la <i>Presa</i>. Se sei in grado di eseguire attacchi molteplici utilizzando l'azione di Attacco, la Presa ne rimpiazza uno di essi.",
            "L'obiettivo di una Presa può essere al massimo più grande di una taglia rispetto a colui che la tenta, e deve essere a portata.",
            "Usando almeno una mano libera, cerchi di prendere l'obiettivo facendo un check su Forza (Atletica) contestato da un check di Forza (Atletica) o uno su Destrezza (Acrobazia) (il bersaglio sceglie quello da utilizzare).",
            "Se hai successo, poni il bersaglio nella condizione di preso e la sua velocità diventa 0."
        ]
    },
    {
        title: "Spinta",
        optional: "Standard rule",
        icon: "hand",
        subtitle: "Attacco speciale in mischia",
        description: "Spingi una creatura, facendola cadere a terra o allontanandola da te.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Usando l'azione di <i>Attacco</i>, puoi fare un attacco speciale in mischia per spingere una creature. Se sei in grado di fare più attacchi usando una singola azione d'<i>Attacco</i>, questo attacco ne rimpiazza uno di essi.",
            "L'obiettivo della <i>Spinta</i> può essere al massimo più grande di una taglia rispetto a colui che la tenta, e deve essere a portata.",
            "Fai un check su Forza (Atletica) contestato da un check avversario su Forza(Atletica) o uno su Destrezza (Acrobazia) (il bersaglio sceglie quello da utilizzare).",
            "Se il tuo check è superiore, o lo butti a terra o lo spingi di 1,5m."
        ]
    },
    {
        title: "Spingere lateralmente*",
        optional: "Optional rule",
        icon: "push",
        subtitle: "Attacco speciale in mischia",
        description: "Spingi una creatura, sia per buttarla a terra o per spingerla lateralmente da te.",
        reference: "PHB, pg. 195; DMG, pg. 272",
        bullets: [
            "(Regola opzionale):",
            "Con questa opzione, una creatura usa l'attacco speciale di spinta per costringere un bersaglio a spostarsi di lato.",
            "L'attaccante subisce svantaggio alla sua prova di Forza (Atletica) quando lo fa.",
            "Se la prova ha successo, l'attaccante sposta il bersaglio di 1,5m in uno spazio diverso entro la sua portata."
        ]
    },
    {
        title: "Lancia un Incantesimo",
        optional: "Standard rule",
        icon: "magic-swirl",
        subtitle: "Tempo di lancio di 1 un'azione",
        description: "Lancia un incantesimo il cui tempo di lancio è di 1 azione.",
        reference: "PHB, pgs. 110, 192, 201-205.",
        bullets: [
            "Quando un personaggio lancia un incantesimo, <b>spende uno slot incantesimo</b> di livello pari o superiore a quell'incantesimo.",
            "Quando un incantatore lancia un incantesimo usando uno <b>slot di livello superiore</b> rispetto a quello dell'incantesimo, l'incantesimo assume il livello superiore con <b>effetti più potenti</b> in occasione di quel lancio.",
            "Non puoi lanciare un incantesimo con l'<i>Azione</i> e uno diverso con l'<i>Azione Bonus</i>, eccetto se l'<i>Azione</i> è usata per lanciare un Trucchetto.",
            "Un Trucchetto è un incantesimo che può essere lanciato a volontà, senza usare uno slot incantesimo e senza essere preparato in anticipo.",
            "L'obiettivo dell'incantesimo deve essere entro il raggio dello stesso. Per prendere di mira qualcosa non devi avere nessun ostacolo tra te e quel qualcosa, per questo non può essere dietro <i>Copertura Totale</i>.",
            "Gli incantesimi con componenti materiali non consumano il materiale a meno che non sia esplicitamente detto e, se non detto, puoi assumere che il costo è così basso che non va ad intaccare le scorte nella tua borsa dei componenti.",
            "Alcuni incantesimi ti richiedono di mantenere la <i>Concentrazione</i> per poter mantenere la magia attiva. Se perdi la <i>Concentrazione</i> l'incantesimo finisce. Puoi perdere la <i>Concentrazione</i> per un incantesimo quando ne lanci un altro che richiede anch'esso <i>Concentrazione</i> o quando sei incapacitato. Ogni volta che ricevi del danno devi fare un tiro salvezza su Costituzione per mantenere la <i>Concentrazione</i>. La CD del tiro è uguale a 10 o la metà del danno ricevuto, qualsiasi sia il numero più alto.",
            "Lo stregone può utilizzare un'opzione di Metamagia per cambiare il tempo di lancio di un incantesimo pari a 1 azione in 1 azione bonus per quel lancio.",
            "Alcuni personaggi e mostri sono dotati di capacità speciali che consentono loro di lanciare incantesimi senza usare slot incantesimo."
        ]
    },
    {
        title: "Scatto",
        optional: "Standard rule",
        icon: "sprint",
        subtitle: "Raddoppia la tua velocità di mov.",
        description: "Ottieni del movimento extra per il turno corrente.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Raddoppia la tua velocità, dopo aver applicato i modificatori."
        ]
    },
    {
        title: "Disingaggio",
        optional: "Standard rule",
        icon: "journey",
        subtitle: "Previeni gli attacchi di opportunità",
        description: "Il tuo movimento non provoca attacchi d'opportunità per il resto del turno.",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Schivata",
        optional: "Standard rule",
        icon: "dodging",
        subtitle: "Aumenta la difesa",
        description: "Ti concentri completamente per schivare gli attacchi.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Fino all'inizio del prossimo turno, ogni tiro per colpire fatto contro di te è fatto con <i>Svantaggio</i>, se puoi vedere l'attaccante. Inoltre, ogni tiro salvezza fatto con Destrezza viene effettuato con <i>Vantaggio</i>.",
            "Perdi i benefici di questa azione se sei <i>incapacitato</i> o i la tua velocità scende a 0."
        ]
    },
    {
        title: "Liberati",
        optional: "Standard rule",
        icon: "manacles",
         subtitle: "Liberati da una presa",
        description: "Cerca di liberarti da una presa.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Per liberarti da una presa devi fare un check su Forza (Atletica) o Destrezza (Acrobazia) contestato da un check su Forza (Atletica) di chi effettua la presa.",
            "Liberarti da altre condizioni che contengono il tuo movimento (come ad esempio delle catene) può richiedere un check su Destrezza o Forza."
        ]
    },
    {
        title: "Aiuta",
        optional: "Standard rule",
        icon: "all-for-one",
        subtitle: "Fornisce vantaggio ad un alleato",
        description: "Garantisce vantaggio ad un alleato in una prova.",
        reference: "PHB, pg. 192.",
        bullets: [
            "L'obiettivo ottiene <i>vantaggio</i> sul prossimo check che fa per eseguire un'azione con il tuo aiuto.",
            "Alternativamente, l'obiettivo ottiene <i>vantaggio</i> nel prossimo tiro per colpire fatto contro una creature a 1,5m da te.",
            "Il <i>vantaggio</i> garantito in questo modo permane fino all'inizio del prossimo turno."
        ]
    },
    {
        title: "Usa Oggetto",
        optional: "Standard rule",
        icon: "snatch",
        subtitle: "Interagisci, usa abilità speciali",
        description: "Interagisci con un secondo oggetto o usa l'abilità speciale di un secondo oggetto.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Puoi interagire con un oggetto utilizzando un'<i>Azione Libera</i> durante il tuo turno (come sfoderare un'arma o aprire una porta). Se vuoi interagire con un secondo oggetto usa questa <i>azione</i>.",
            "Quando un oggetto richiede un'<i>Azione</i> per essere utilizzato, usa questa azione."
        ]
    },
    {
        title: "Usa Pozione*",
        optional: "Optional rule",
        icon: "health-potion",
        subtitle: "Bevi o usa una pozione su qualcuno",
        description: "Usa la tua azione per somministrare una pozione a una creatura adiacente consenziente o Priva di sensi.",
        reference: "DMG, pg. 140.",
        bullets: [
            "(Regola Opzionale):",
            "Utilizzare un'azione completa su sé stessi ripristina la quantità massima possibile di punti ferita dati dalla pozione.",
            "Per somministrare una pozione devi trovarti entro 1,5m dalla creatura bersaglio.",
            "Questa azione viene spesso utilizzata per riportare in vita un alleato morente (0 PV) e farlo entrare in combattimento."            
        ]
    },
    {
        title: "Negoziare*",
        optional: "Optional rule",
        icon: "conversation",
        subtitle: "Negozia durante il combattimento",
        description: "Usa la tua azione per calmare un combattimento e iniziare una conversazione di un minuto con una creatura ostile.",
        reference: "PHB, pgs. 185-186, DMG, pgs. 244-245., TCE, pg. 148.",
        bullets: [
            "(Regola Opzionale):",
            "Questa azione sociale fornisce una meccanica formale per cercare di uscire da un combattimento già iniziato parlando",
            "Il successo mette in pausa il conflitto, dandoti la possibilità di negoziare tramite una prova di abilità sociale contestata.",
            "Effettua una prova di Carisma (Inganno, Intimidazione o Persuasione) contestata dalla prova di Saggezza (Intuizione) del bersaglio.",
            "Hai svantaggio alla prova se tu o i tuoi compagni state combattendo contro la creatura.",
            "In caso di successo, il bersaglio cessa le ostilità per 1 minuto. Il colloquio termina se tu o i tuoi alleati fate qualcosa di dannoso nei suoi confronti.",
            "Un colloquio riuscito fornisce una finestra cruciale per risolvere il conflitto senza ulteriore violenza.Se il colloquio fallisce, la creatura è immune a ulteriori tentativi da parte tua per 24 ore, quindi sfrutta la tua unica possibilità."
        ]
    },
    {
        title: "Scudo e Armatura",
        optional: "Standard rule",
        icon: "layered-armor",
        subtitle: "Equipaggia o rimuovi scudo/armatura",
         description: "Equipaggia o rimuovi lo scudo/armatura.",
         reference: "PHB, pgs. 144-146.",
         bullets: [
            "Uno scudo utilizza sempre un'azione per essere equipaggiato o rimosso.",
            "L'armatura richiede diversi minuti per essere equipaggiata o tolta.",
            "L'armatura Leggera, Media e Pesante richiedono: 1min, 5min, 10min per essere <b>indossate</b>.",
            "L'armatura Leggera, Media e Pesante richiedono: 1min, 1min, 5min per essere <b>rimosse</b>."
         ]
    },
    {
        title: "Nasconditi",
        optional: "Standard rule",
        icon: "hood",
        subtitle: "Tenta di nasconderti",
        description: "Tenta di nasconderti.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Non puoi nasconderti da una creatura che può vederti.",
            "Per fare questa azione devi avere una delle seguenti condizioni: una copertura totale, un'area completamente oscurata, essere invisibile o comunque non essere visibile al nemico.",
            "Se fai del rumore (come avvisare qualcuno gridando o facendo cadere un vaso), ti farai scoprire.",
            "Quando cerchi di nasconderti, fai un check su Destrezza (Furtività) a annotati il risultato. Fino a quando sei scoperto o smetti di nasconderti, il totale di quel check è contestato da Saggezza (Percezione) di qualunque creatore che cerca attivamente la tua presenza.",
            "Una creatura ti nota anche se non ti sta cercando a meno che il tuo check di Furtività non supera la sua Percezione Passiva.",
            "Fuori dal combattimento, puoi anche usare un check su Destrezza (Furtività) per azioni come nasconderti da dei nemici, superare delle guardie senza farti notare, andare via senza farti notare o avvicinarti furtivamente a qualcuno senza essere visto o sentito."
        ]
    },
    {
        title: "Cercare",
        optional: "Standard rule",
        icon: "magnifying-glass",
        subtitle: "Cerca qualcosa",
        description: "Dedica la tua attenzione a cercare qualcosa.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Usa la tua azione per concentrare la tua attenzione sulla ricerca di qualcosa di nascosto, come una trappola, una porta segreta o una creatura nascosta.",
            "Mentre il tuo punteggio di Percezione passiva riflette la tua consapevolezza generale, l'azione Cercare rappresenta uno sforzo mirato e deliberato.",
            "Quando si esegue questa azione, il DM solitamente chiederà una prova di Saggezza (Percezione) per trovare oggetti o creature nascoste, oppure una prova di Intelligenza (Investigazione) per dedurre indizi da prove fisiche."
        ]
    },
    {
        title: "Prepararsi",
        optional: "Standard rule",
        icon: "stopwatch",
        subtitle: "Scegli di scatenare un'azione",
        description: "Scegli una causa scatenante e un'azione di risposta.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Prima devi decidere che circostanza percepibile scatenerà la tua reazione.",
            "Poi devi scegliere l'azione che eseguirai in risposta alla causa scatenante o, in alternativa, di muoverti di un valore uguale alla tua velocità.",
            "Quando l'evento scatenante si verifica puoi decidere di eseguire la tua reazione subito o ignorarlo.",
            "Quando prepari un incantesimo, lo puoi lanciare normalmente ma conservare la tua energia, che verrà rilasciata nel momento in cui accade l'evento. Un incantesimo, per essere preparato, deve avere un tempo di lancio di 1 <i>Azione</i> e mantenere la magia in attesa dell'evento richiede concentrazione."
        ]
    },
    {
        title: "Usa un tratto, talento o privilegio",
        optional: "Standard rule",
        icon: "embrassed-energy",
        subtitle: "Certi attributi usano un'azione",
        description: "Usa una caratteristiche della classe o della razza che usa un'azione per essere eseguita.",
        reference: "Vedi le pagine relative alla classe/razza per più informazioni.",
        bullets: [

        ]
    },
    {
        title: "Stabilizza una creatura",
        optional: "Standard rule",
        icon: "first-aid",
        subtitle: "Soccorri una creatura morente",
        description: "Fai sì che una creatura morente non abbia bisogno di effettuare Tiri salvezza contro morte.",
        reference: "PHB, pg. 197.",
        bullets: [
            "Fai un check su Saggezza (Medicina) con CD 10.",
            "Se hai successo, la creatura è stabile e non ha più bisogno di fare dei tiri salvezza per evitare la morte.",
            "Una creatura stabilizzata rigenera 1 punto salute dopo 1d4 ore."
        ]
    },
    {
        title: "Improvvisa",
        optional: "Standard rule",
        icon: "juggler",
        subtitle: "Qualsiasi altra azione",
        description: "Fai una qualunque azione che puoi immaginare.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quando descrivi un'<i>azione</i> non descritta da nessun'altra parte nelle regole, il DM ti dirà se è essa è possibile o meno e che tipo di tiro dovrai fare, se devi farlo, per determinarne il successo o fallimento."
        ]
    },
    {
        title: "Disarmare*",
        optional: "Optional rule",
        icon: "sword-break",
        subtitle: "Fai perdere la presa a un nemico",
        description: "Una creatura può usare un attacco con un'arma per far cadere un'arma o un altro oggetto dalla presa di un bersaglio.",
        reference: "DMG, page 271.",
        bullets: [
            "(Regola Opzionale):",
            "L'attaccante effettua un tiro per colpire contrapposto alla prova di Forza (Atletica) o Destrezza (Acrobazia) del bersaglio.",
            "Se l'attaccante vince la contesa, l'attacco non infligge danni o altri effetti nocivi, ma il difensore lascia cadere l'oggetto.",
            "L'attaccante subisce svantaggio al tiro per colpire se il bersaglio tiene l'oggetto con due o più mani.",
            "Il bersaglio subisce vantaggio alla sua prova di caratteristica se è più grande della creatura attaccante, o svantaggio se è più piccolo."
        ]
    },
    {
        title: "Oltrepassare*",
        optional: "Optional rule",
        icon: "shield-bash",
        subtitle: "Attraversare uno spazio ostile",
        description: "Quando una creatura cerca di muoversi attraverso lo spazio di una creatura ostile, chi muove può tentare di farsi strada travolgendo la creatura ostile.",
        reference: "DMG, page 271.",
        bullets: [
            "(Regola Opzionale):",
            "Come azione bonus, chi muove effettua una prova di Forza (Atletica) contesa dalla prova di Forza (Atletica) della creatura ostile.",
            "La creatura che tenta di travolgere ha vantaggio a questa prova se è più grande della creatura ostile, o svantaggio se è più piccola.",
            "Se chi muove vince la contesa, può muoversi attraverso lo spazio della creatura ostile una volta in questo turno."
        ]
    },
    {
        title: "Rotolare*",
        optional: "Optional rule",
        icon: "tumble",
        subtitle: "Rotolare attraverso uno spazio ostile",
        description: "Una creatura può tentare di rotolare attraverso lo spazio di una creatura ostile, chinandosi e zigzagando oltre l'avversario.",
        reference: "DMG, page 272.",
        bullets: [
            "(Regola Opzionale):",
            "Come azione, la creatura che rotola effettua una prova di Destrezza (Acrobazia) contesa dalla prova di Destrezza (Acrobazia) della creatura ostile.",
            "Se la creatura che rotola vince la contesa, può muoversi attraverso lo spazio della creatura ostile una volta in questo turno."
        ]
    },
    {
        title: "Marcare*",
        optional: "Optional rule",
        icon: "cross-mark",
        subtitle: "Vantaggio su attacchi d'opportunità",
        description: "Questa opzione rende più facile per i combattenti in mischia infastidirsi a vicenda con attacchi di opportunità.",
        reference: "DMG, page 271.",
        bullets: [
            "(Regola Opzionale):",
            "Quando una creatura effettua un attacco in mischia, può anche marchiare il suo bersaglio.",
            "Fino alla fine del turno successivo dell'attaccante, qualsiasi attacco di opportunità che effettua contro il bersaglio marchiato ottiene vantaggio.",
            "L'attacco di opportunità non consuma la reazione dell'attaccante.",
            "L'attaccante non può effettuare l'attacco se qualcosa, come la condizione Incapacitato o l'incantesimo <i>stretta folgorante</i>, gli impedisce di effettuare reazioni.",
            "L'attaccante è limitato a un attacco di opportunità per turno."
        ]
    },
    {
        title: "Arrampicati su una creatura*",
        optional: "Optional rule",
        icon: "mountain-climbing",
        subtitle: "Arrampica una creatura più grossa",
        description: "Se una creatura vuole saltare addosso a un'altra creatura, può farlo afferrandola. Un avversario di dimensioni adeguate può essere considerato terreno ai fini del salto sulla sua schiena o dell'aggrapparsi a un suo arto.",
        reference: "DMG, page 271.",
        bullets: [
            "(Regola Opzionale):",
            "Dopo aver effettuato le eventuali prove di caratteristica necessarie per portarsi in posizione e salire sulla creatura più grande, la creatura più piccola usa la sua azione per effettuare una prova di Forza (Atletica) o Destrezza (Acrobazia) contrapposta alla prova di Destrezza (Acrobazia) del bersaglio.",
            "Se vince la contesa, la creatura più piccola si muove con successo nello spazio della creatura bersaglio e si aggrappa al suo corpo.",
            "La creatura più piccola si muove con il bersaglio e ha vantaggio ai tiri per colpire contro di esso."
        ]
    },
     {
        title: "Colpo Mirato**",
        optional: "Homebrew rule",
        icon: "archery-target",
        subtitle: "Colpisci un punto specifico del corpo",
        description: "Consente a un attaccante di subire una penalità al tiro per colpire per avere la possibilità di infliggere uno specifico effetto debilitante sul nemico.",
        reference: "",
        bullets: [
            "(Regola Homebrew):",
            "I colpi mirati introducono complessità tattica, consentendo ai giocatori di mirare a effetti che vanno oltre il semplice danno. I dettagli delle penalità e degli effetti sono determinati dal DM, ma generalmente comportano una penalità alla precisione per un effetto debilitante.",
            "L'attaccante dichiara il suo bersaglio (ad esempio, un braccio, una gamba o la testa) e subisce una penalità al tiro per colpire, in genere -5.",
            "In caso di successo, l'attacco può impartire un effetto speciale, come costringere il bersaglio a lasciare cadere un oggetto (braccio), ridurne la velocità (gamba) o conferirgli svantaggio al suo prossimo attacco (testa).",
            "Questo sistema offre più opzioni tattiche, consentendo ai personaggi di neutralizzare strategicamente gli avversari anziché limitarsi a ridurre i punti ferita. Può rallentare il combattimento."
        ]
    },
    {
        title: "Fendere**",
        optional: "Homebrew rule",
        icon: "axe-swing",
        subtitle: "Riversi il danno in eccesso",
        description: "Permette ai danni in mischia in eccesso causati da un colpo mortale di essere trasferiti a un nemico adiacente.",
        reference: "Homebrew, adattatato da DMG, pg.272.",
        bullets: [
            "(Regola Homebrew):",
            "Questa regola popolare fa sì che i personaggi marziali si sentano più potenti quando affrontano orde di nemici deboli, consentendo a un tiro di danno massiccio di avere un impatto significativo anche se il bersaglio iniziale era quasi morto. Permette di reindirizzare i danni in eccesso causati da un colpo fatale.",
            "Quando il tuo attacco in mischia riduce una creatura a 0 punti ferita, puoi applicare qualsiasi danno in eccesso a un'altra creatura entro 1,5m dal bersaglio originale e entro la tua portata.",
            "Questo in genere richiede un nuovo tiro di attacco contro la seconda creatura.",
            "Questo effetto è solitamente limitato a un bersaglio aggiuntivo per turno per mantenere l'equilibrio del gioco."
        ]
    },
    {
        title: "Presenza Intimidatoria**",
        optional: "Homebrew rule",
        icon: "sharp-smile",
        subtitle: "Spaventi il nemico senza un'arma",
        description: "Spaventa una creatura con una prova di Carisma contrapposta.",
        reference: "",
        bullets: [
            "(Regola Homebrew):",
            "Questo fornisce un modo non magico per i personaggi carismatici o terrificanti di imporre la condizione Spaventato, usando la forza della loro personalità come arma. Mette a confronto la tua forza di personalità con la determinazione mentale di un bersaglio.",
            "Come azione, scegli una creatura che puoi vedere entro 9m.",
            "Effettua una prova di Carisma (Intimidazione) contrapposta alla prova di Saggezza (Intuizione) del bersaglio.",
            "Se vinci la sfida, il bersaglio è spaventato da te fino alla fine del tuo prossimo turno.",
            "Il successo impone la condizione Spaventato, dando al bersaglio svantaggio ai tiri per colpire e alle prove di caratteristica mentre può vederti, e impedendogli di avvicinarsi. Questa può essere una potente opzione di controllo, soprattutto per le classi che non hanno accesso agli effetti di paura magica."
        ]
    }
]
