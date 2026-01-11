data_action = [
    {
        title: "Attacco",
        optional: "Standard rule",
        icon: "crossed-swords",
        subtitle: "Esegui un attacco (mischia/distanza)",
        description: "Esegui un attacco in mischia o a distanza.",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certe caratteristiche, come <i>Attacco Extra</i> del guerriero, permettono di eseguire più di un singolo attacco con questa azione. Ognuno di questi attacchi ha tiri separati e può colpire creature diverse. Puoi muoverti tra i vari attacchi.",
            "Quando l'attacco viene eseguito con una arma ravvicinita leggera, un azione bonus puà essere usata per attaccare con l'arma nell'altra mano (vedi l'azione bonus <i>Attacco Secondario</i>).",
            "Puoi sostituire uno dei tuoi attacchi melee con una <i>Presa</i> o una <i>Spinta</i>.",
            "Alcune condizioni danno vantaggio all'attacco: attacchi contro bersagli accecati, paralizzati, pietrificati, immobilizzati, storditi o incoscienti; attacchi in mischia contro bersagli proni; attacchi da parte di attaccanti invisibili o nascosti.",
            "Alcune condizioni danno svantaggio all'attacco: attacchi contro bersagli invisibili o nascosti; attacchi a distanza contro bersagli proni; attacchi da parte di attaccanti accecati, spaventati, avvelenati o immobilizzati."
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
        icon: "hand",
        subtitle: "Attacco speciale in mischia",
        description: "Spingi una creatura, sia per buttarla a terra o per spingerla lateralmente da te.",
        reference: "PHB, pg. 195. / DMG, page 272",
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
        reference: "PHB, pg. 192.",
        bullets: [
            "Non puoi lanciare un incantesimo con l'<i>Azione</i> e uno diverso con l'<i>Azione Bonus</i>, eccetto se l'<i>Azione</i> è usata per lanciare un Trucchetto.",
            "L'obiettivo dell'incantesimo deve essere entro il raggio dello stesso. Per prendere di mira qualcosa non devi avere nessun ostacolo tra te e quel qualcosa, per questo non può essere dietro <i>Copertura Totale</i>.",
            "Gli incantesimi con componenti materiali non consumano il materiale a meno che non sia esplicitamente detto e, se non detto, puoi assumere che il costo è così basso che non va ad intaccare le scorte nella tua borsa dei componenti.",
            "Alcuni incantesimi ti richiedono di mantenere la <i>Concentrazione</i> per poter mantenere la magia attiva. Se perdi la <i>Concentrazione</i> l'incantesimo finisce. Puoi perdere la <i>Concentrazione</i> per un incantesimo quando ne lanci un altro che richiede anch'esso <i>Concentrazione</i> o quando sei incapacitato. Ogni volta che ricevi del danno devi fare un tiro salvezza su Costituzione per mantenere la <i>Concentrazione</i>. La <i>Classe Difficoltà</i> del tiro è uguale a 10 o la metà del danno ricevuto, qualsiasi sia il numero più alto."
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
        title: "Dodge",
        optional: "Standard rule",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        optional: "Standard rule",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        optional: "Standard rule",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Use Object",
        optional: "Standard rule",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        optional: "Standard rule",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        optional: "Standard rule",
        icon: "hood",
        subtitle: "Attempt to hide",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        optional: "Standard rule",
        icon: "magnifying-glass",
        subtitle: "Attempt to find something",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        optional: "Standard rule",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        optional: "Standard rule",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        optional: "Standard rule",
        icon: "first-aid",
        subtitle: "Aid a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        optional: "Standard rule",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Disarm*",
        optional: "Optional rule",
        icon: "sword-break",
        subtitle: "Knock item out of enemy's grasp",
        description: "A creature can use a weapon attack to knock a weapon or another item from a target's grasp.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "The attacker makes an attack roll contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check.",
            "If the attacker wins the contest, the attack causes no damage or other ill effect, but the defender drops the item.",
            "The attacker has disadvantage on its attack roll if the target is holding the item with two or more hands.",
            "The target has advantage on its ability check if it is larger than the attacking creature, or disadvantage if it is smaller."

        ]
    },
    {
        title: "Overrun*",
        optional: "Optional rule",
        icon: "shield-bash",
        subtitle: "Run through a hostile space",
        description: "When a creature tries to move through a hostile creature's space, the mover can try to force its way through by overrunning the hostile creature.",
        reference: "DMG, page 272",
        bullets: [
            "(Optional Rule):",
            "As an action, the mover makes a Strength (Athletics) check contested by the hostile creature's Strength (Athletics) check.",
            "The creature attempting the overrun has advantage on this check if it is larger than the hostile creature, or disadvantage if it is smaller.",
            "If the mover wins the contest, it can move through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Tumble*",
        optional: "Optional rule",
        icon: "tumble",
        subtitle: "Tumble through a hostile space",
        description: "A creature can try to tumble through a hostile creature's space, ducking and weaving past the opponent.",
        reference: "DMG, page 272",
        bullets: [
            "(Optional Rule):",
            "As an action, the tumbler makes a Dexterity (Acrobatics) check contested by the hostile creature's Dexterity (Acrobatics) check.",
            "If the tumbler wins the contest, it can move through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Mark*",
        optional: "Optional rule",
        icon: "cross-mark",
        subtitle: "Give Advantage on Opportunity Attacks",
        description: "This option makes it easier for melee combatants to harry each other with opportunity attacks.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "When a creature makes a melee attack, it can also mark its target.",
            "Until the end of the attacker's next turn, any opportunity attack it makes against the marked target has advantage.",
            "The opportunity attack doesn't expend the attacker's reaction",
            "The attacker can't make the attack if anything, such as the incapacitated condition or the shocking grasp spell, is preventing it from taking reactions.",
            "The attacker is limited to one opportunity attack per turn.",
        ]
    },
    {
        title: "Climb onto a bigger creature*",
        optional: "Optional rule",
        icon: "mountain-climbing",
        subtitle: "Climb a bigger creature",
        description: "If one creature wants to jump onto another creature, it can do so by grappling. A suitably large opponent can be treated as terrain for the purpose of jumping onto its back or clinging to a limb.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "After making any ability checks necessary to get into position and onto the larger creature, the smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target's Dexterity (Acrobatics) check.",
            "If it wins the contest, the smaller creature successfully moves into the target creature's space.",
            "The smaller creature moves with the target and has advantage on attack rolls against it.",
        ]
    }
]
