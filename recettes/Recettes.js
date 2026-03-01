// ═══════════════════════════════════════════════════════
// RECETTES DE L'ALMANACH
// ═══════════════════════════════════════════════════════
// Structure de chaque recette :
// {
//   name       : string   — Nom du plat
//   region     : string   — Région d'origine
//   anecdote   : string   — Texte court (repris de l'almanach)
//   tags       : string[] — [saison, type, difficulté]
//   prep       : string   — Temps de préparation
//   cuisson    : string   — Temps de cuisson
//   personnes  : number
//   difficulte : string   — Facile / Moyen / Élaboré
//   ingredients: [ { groupe, items: [{qty, name, note}] } ]
//   etapes     : [ { titre, texte, timer? } ]
//   conseils   : string[] — tableau de conseils/variantes
// }

const RECETTES = {
    'agneau-de-paques': {
        name:       'Agneau de Pâques au four',
        region:     'France entière',
        anecdote:   'L\'agneau pascal rôti au four avec ail et thym est la tradition de Pâques dans toutes les régions de France.',
        tags:       ["Printemps", "Plat principal", "Moyen"],
        prep:       '20 min',
        cuisson:    '1 h 30',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: 'Le gigot', items: [
                { qty: '1 (2 kg)', name: 'gigot d\'agneau', note: 'à l\'os' },
                { qty: '6 gousses', name: 'ail', note: '' },
                { qty: '2 branches', name: 'romarin frais', note: '' },
                { qty: '3 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
            { groupe: 'Les flageolets', items: [
                { qty: '500 g', name: 'flageolets en boîte', note: 'égouttés' },
                { qty: '1', name: 'oignon', note: '' },
                { qty: '2 gousses', name: 'ail', note: '' },
                { qty: '30 g', name: 'beurre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Piquer et mariner', texte: 'Éplucher l\'ail, couper en lamelles. Piquer le gigot en 20 endroits, glisser ail et romarin dans chaque incision. Frotter d\'huile d\'olive, sel et poivre. Reposer 1 h à température ambiante.', timer: '1 h de repos' },
            { titre: 'Rôtir', texte: 'Four à 220 °C. Enfourner 15 min pour saisir, puis baisser à 180 °C et poursuivre en arrosant toutes les 20 min.', timer: '1 h 15 à 180 °C' },
            { titre: 'Flageolets', texte: 'Faire suer l\'oignon et l\'ail dans le beurre. Ajouter les flageolets égouttés avec un verre d\'eau. Mijoter 15 min. Saler, poivrer.', timer: '15 min' },
            { titre: 'Reposer et servir', texte: 'Couvrir le gigot d\'aluminium, laisser reposer 10 min. Découper et servir avec les flageolets et le jus de cuisson déglacé.', timer: '10 min de repos' },
        ],
        conseils: [
            'Pour une cuisson rosée : 58 °C à cœur. À point : 65 °C. Utiliser une sonde pour un résultat parfait.',
            'Le gigot d\'agneau de Sisteron (AOP) est le plus réputé de France.',
        ],
    },

    'agneau-flageolets': {
        name:       'Agneau printanier aux flageolets',
        region:     'Ile-de-France / Berry',
        anecdote:   'Le gigot d\'agneau aux flageolets verts est le plat de Pâques classique depuis la cuisine bourgeoise du XIXe siècle.',
        tags:       ["Printemps", "Plat principal", "Facile"],
        prep:       '15 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: 'L\'agneau', items: [
                { qty: '8', name: 'côtelettes d\'agneau', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'écrasées' },
                { qty: '2 branches', name: 'thym', note: '' },
                { qty: '2 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
            { groupe: 'Les flageolets', items: [
                { qty: '2 boîtes', name: 'flageolets', note: 'égouttés (800 g)' },
                { qty: '1', name: 'échalote', note: 'ciselée' },
                { qty: '20 cl', name: 'bouillon de volaille', note: '' },
                { qty: '20 g', name: 'beurre', note: '' },
                { qty: '1 bouquet', name: 'persil plat', note: 'ciselé' },
            ]},
        ],
        etapes: [
            { titre: 'Mijoter les flageolets', texte: 'Faire suer l\'échalote dans le beurre. Ajouter les flageolets et le bouillon, mijoter 15 min. Parsemer de persil.', timer: '15 min' },
            { titre: 'Griller l\'agneau', texte: 'Frotter les côtelettes d\'ail, thym, huile, sel et poivre. Cuire à la poêle très chaude 3 min par face. Laisser reposer 2 min.', timer: '6-8 min' },
            { titre: 'Déglacer et dresser', texte: 'Déglacer la poêle avec un filet d\'eau. Verser le jus sur l\'agneau. Dresser sur les flageolets.' },
        ],
        conseils: [
            'Les flageolets de Paimpol AOP sont les meilleurs de France : petits, fondants et peu farineux.',
        ],
    },

    'aligot': {
        name:       'Aligot',
        region:     'Aubrac / Aveyron',
        anecdote:   'Pommes de terre et tome fraîche filant sur la cuillère, l\'aligot réchauffe les nuits de l\'Aubrac enneigé.',
        tags:       ["Hiver", "Accompagnement", "Moyen"],
        prep:       '20 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 kg', name: 'pommes de terre farineuses', note: 'type Bintje' },
                { qty: '400 g', name: 'tome fraîche de l\'Aubrac', note: 'ou tome de Cantal fraîche' },
                { qty: '150 g', name: 'crème fraîche épaisse', note: '' },
                { qty: '50 g', name: 'beurre demi-sel', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'écrasées' },
                { qty: '', name: 'sel', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les pommes de terre', texte: 'Éplucher et cuire les pommes de terre entières dans l\'eau bouillante salée jusqu\'à ce qu\'elles soient très tendres.', timer: '25-30 min' },
            { titre: 'Purée', texte: 'Passer au moulin à légumes (jamais au mixeur). Ajouter beurre, crème et ail. Travailler sur feu doux. La purée doit être très souple et bien chaude.' },
            { titre: 'Incorporer la tome', texte: 'Couper la tome en lamelles fines. Sur feu moyen, incorporer progressivement en remuant sans arrêt à la spatule en décrivant des 8. L\'aligot doit filer et se détacher des parois.', timer: '5-8 min de travail' },
        ],
        conseils: [
            'Le secret : purée très chaude + tome fraîche (non affinée). Travailler sans cesse pour obtenir le fil. Servir immédiatement avec des saucisses grillées.',
        ],
    },

    'anchois-marines': {
        name:       'Anchois marinés maison',
        region:     'Languedoc / Côte d\'Azur',
        anecdote:   'Les anchois frais de juin marinés dans le sel, l\'huile et le citron sont un trésor de la cuisine catalane.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '30 min',
        cuisson:    '0 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '500 g', name: 'anchois frais', note: 'très frais' },
                { qty: '3', name: 'citrons', note: 'jus' },
                { qty: '4 gousses', name: 'ail', note: 'finement émincé' },
                { qty: '1 bouquet', name: 'persil plat', note: 'ciselé' },
                { qty: '10 cl', name: 'huile d\'olive extra-vierge', note: '' },
                { qty: '1 c.c.', name: 'piment d\'Espelette', note: '' },
                { qty: '', name: 'fleur de sel', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Lever les filets', texte: 'Décapiter les anchois, ouvrir en deux et retirer l\'arête centrale avec les doigts. Rincer et bien sécher.' },
            { titre: 'Mariner au citron', texte: 'Disposer les filets dans un plat creux. Couvrir entièrement de jus de citron. Filmer et réfrigérer : les filets vont blanchir (cuisson à l\'acide).', timer: '2 h au réfrigérateur' },
            { titre: 'Assaisonner', texte: 'Égoutter les filets. Disposer sur le plat. Parsemer d\'ail, persil, piment d\'Espelette. Arroser d\'huile d\'olive. Fleur de sel. Servir frais.' },
        ],
        conseils: [
            'Acheter les anchois le matin même chez le poissonnier. Ce ceviche méditerranéen est parfait sur une tartine grillée frottée à l\'ail.',
        ],
    },

    'andouille-vire-croute': {
        name:       'Andouille de Vire en croûte',
        region:     'Normandie',
        anecdote:   'L\'andouille de Vire, fumée et ferme, cuite en croûte avec moutarde et herbes est une entrée charcutière normande.',
        tags:       ["Automne", "Entrée", "Facile"],
        prep:       '15 min',
        cuisson:    '25 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1', name: 'andouille de Vire', note: 'environ 400 g' },
                { qty: '1 rouleau', name: 'pâte feuilletée pur beurre', note: '' },
                { qty: '2 c.s.', name: 'moutarde à l\'ancienne', note: '' },
                { qty: '1', name: 'jaune d\'œuf', note: '' },
                { qty: '1 c.s.', name: 'lait', note: '' },
                { qty: 'quelques branches', name: 'thym frais', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Retirer la peau de l\'andouille. La couper en tranches épaisses ou laisser entière selon la présentation voulue.' },
            { titre: 'Enrouler', texte: 'Dérouler la pâte feuilletée. Badigeonner de moutarde à l\'ancienne. Déposer l\'andouille, parsemer de thym. Enrouler en soudant bien les bords avec un peu d\'eau.' },
            { titre: 'Dorer et cuire', texte: 'Badigeonner de jaune d\'œuf dilué dans le lait. Strier à la fourchette. Enfourner à 200 °C.', timer: '20-25 min à 200 °C' },
        ],
        conseils: [
            'Servir avec une salade verte et une sauce au cidre normand : réduire 15 cl de cidre brut avec une échalote, finir à la crème.',
        ],
    },

    'andouillette-troyes': {
        name:       'Andouillette de Troyes grillée',
        region:     'Champagne',
        anecdote:   'L\'andouillette de Troyes labellisée AAAAA est une institution charcutière française depuis le Moyen Âge.',
        tags:       ["Toute l'année", "Plat principal", "Facile"],
        prep:       '5 min',
        cuisson:    '15 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'andouillettes de Troyes AAAAA', note: '~200 g chacune' },
                { qty: '20 cl', name: 'vin blanc sec', note: 'Chablis ou Mâcon' },
                { qty: '20 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '2 c.s.', name: 'moutarde de Dijon', note: '' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '20 g', name: 'beurre', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Griller', texte: 'Inciser la peau en croix. Placer dans un plat et passer sous le gril du four 8-10 min en retournant à mi-cuisson.', timer: '8-10 min sous le gril' },
            { titre: 'Sauce moutarde', texte: 'Faire suer les échalotes dans le beurre. Déglacer au vin blanc, réduire de moitié. Ajouter crème et moutarde, laisser épaissir 3 min. Assaisonner.', timer: '8 min' },
            { titre: 'Servir', texte: 'Napper les andouillettes de sauce. Accompagner de pommes de terre vapeur ou de purée maison.' },
        ],
        conseils: [
            'Le label AAAAA est décerné par l\'Association Amicale des Amateurs d\'Andouillette Authentique. Exiger ce label chez le charcutier.',
        ],
    },

    'asperges-plancha': {
        name:       'Asperges vertes rôties à la plancha',
        region:     'Provence / Languedoc',
        anecdote:   'Les asperges vertes du Gard ou du Vaucluse passées rapidement à la plancha sont croustillantes et fumées.',
        tags:       ["Printemps", "Entrée", "Facile"],
        prep:       '10 min',
        cuisson:    '10 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '500 g', name: 'asperges vertes', note: 'calibre moyen' },
                { qty: '3 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '1', name: 'citron', note: 'zeste et jus' },
                { qty: '1 gousse', name: 'ail', note: 'émincée' },
                { qty: '', name: 'fleur de sel, poivre', note: '' },
                { qty: '', name: 'copeaux de parmesan', note: 'facultatif' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Couper les 3 derniers cm (partie ligneuse). Laver, sécher et badigeonner d\'huile d\'olive.' },
            { titre: 'Plancha', texte: 'Chauffer la plancha ou une poêle en fonte à feu très vif. Déposer les asperges en une couche. Cuire 3-4 min sans toucher, retourner, encore 3 min. Légèrement colorées mais encore croquantes.', timer: '6-8 min' },
            { titre: 'Assaisonner', texte: 'Dresser sur le plat. Parsemer d\'ail émincé. Arroser d\'huile d\'olive et de jus de citron. Zester par-dessus. Fleur de sel, poivre, copeaux de parmesan.' },
        ],
        conseils: [
            'La plancha très chaude crée une caramélisation qui apporte un léger goût fumé incomparable. Ne pas trop cuire : elles doivent rester légèrement croquantes.',
        ],
    },

    'asperges-sauce-mousseline': {
        name:       'Asperges blanches sauce mousseline',
        region:     'Val de Loire / Landes',
        anecdote:   'Les premières asperges blanches d\'Argenteuil ou des Landes arrivent en avril, fines et délicates.',
        tags:       ["Printemps", "Entrée", "Élaboré"],
        prep:       '20 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Les asperges', items: [
                { qty: '1 kg', name: 'asperges blanches', note: '' },
                { qty: '', name: 'gros sel', note: '' },
            ]},
            { groupe: 'Sauce mousseline', items: [
                { qty: '3', name: 'jaunes d\'œufs', note: '' },
                { qty: '3 c.s.', name: 'eau froide', note: '' },
                { qty: '200 g', name: 'beurre doux', note: '' },
                { qty: '1', name: 'citron', note: 'jus' },
                { qty: '10 cl', name: 'crème liquide entière', note: 'bien froide' },
                { qty: '', name: 'sel, poivre blanc', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Éplucher', texte: 'Éplucher les asperges du haut vers le bas avec un économe. Couper les extrémités ligneuses. Lier en botte.' },
            { titre: 'Cuire', texte: 'Plonger dans l\'eau bouillante salée, cuire 15-18 min. Une lame doit pénétrer sans résistance à 3 cm de la tête.', timer: '15-18 min' },
            { titre: 'Sabayon', texte: 'Fouetter jaunes et eau au bain-marie jusqu\'à obtenir un ruban épais et chaud. Le mélange doit tripler de volume.', timer: '5-8 min' },
            { titre: 'Monter', texte: 'Incorporer le beurre fondu en filet en fouettant hors du feu. Saler, poivrer, citronner. Monter la crème en chantilly ferme. Incorporer délicatement à la spatule.' },
            { titre: 'Dresser', texte: 'Égoutter les asperges sur un torchon. Dresser sur assiette chaude. Napper de sauce mousseline. Servir immédiatement.' },
        ],
        conseils: [
            'La sauce mousseline est une hollandaise allégée à la crème fouettée. Elle doit être servie immédiatement car elle retombe en reposant.',
        ],
    },

    'aspic-legumes': {
        name:       'Aspic de légumes printaniers',
        region:     'France entière',
        anecdote:   'Petits pois, carottes, asperges et œufs durs pris dans une gelée au bouillon : un plat de fête printanier.',
        tags:       ["Printemps", "Entrée", "Élaboré"],
        prep:       '30 min',
        cuisson:    '20 min',
        personnes:  6,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Légumes', items: [
                { qty: '150 g', name: 'petits pois', note: '' },
                { qty: '3', name: 'carottes', note: 'en dés' },
                { qty: '6', name: 'asperges vertes', note: 'en tronçons' },
                { qty: '4', name: 'œufs durs', note: 'en rondelles' },
                { qty: '1 bouquet', name: 'cerfeuil ou estragon', note: '' },
            ]},
            { groupe: 'Gelée', items: [
                { qty: '1 litre', name: 'bouillon de volaille', note: 'bien assaisonné' },
                { qty: '6 feuilles', name: 'gélatine', note: '' },
                { qty: '2 c.s.', name: 'porto blanc', note: 'facultatif' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les légumes', texte: 'Cuire chaque légume séparément à l\'eau bouillante salée en les gardant croquants. Refroidir dans l\'eau glacée. Égoutter et sécher.' },
            { titre: 'Préparer la gelée', texte: 'Ramollir la gélatine dans l\'eau froide 5 min. Chauffer le bouillon, y dissoudre la gélatine essorée. Ajouter le porto. Laisser tiédir jusqu\'à consistance sirupeuse.' },
            { titre: 'Monter l\'aspic', texte: 'Huiler un moule à cake. Verser 1 cm de gelée, réfrigérer jusqu\'à prise. Disposer légumes, œufs et herbes en couches. Couler la gelée entre chaque couche.', timer: '2 h minimum' },
            { titre: 'Démouler', texte: 'Tremper le moule 5 secondes dans l\'eau chaude. Retourner sur le plat de service. Servir tranché avec une vinaigrette à l\'estragon.' },
        ],
        conseils: [
            'Un bel aspic doit être parfaitement transparent. Clarifier le bouillon si nécessaire avec un blanc d\'œuf.',
        ],
    },

    'aubergines-orientales': {
        name:       'Aubergines en gratin à l\'orientale',
        region:     'Provence / Maroc',
        anecdote:   'Les aubergines farcies au ras-el-hanout, tomates et agneau haché rappellent les cuisines de l\'autre rive de la Méditerranée.',
        tags:       ["Été", "Plat principal", "Moyen"],
        prep:       '25 min',
        cuisson:    '40 min',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'aubergines rondes', note: '' },
                { qty: '400 g', name: 'agneau haché', note: 'ou bœuf' },
                { qty: '2', name: 'oignons', note: 'émincés' },
                { qty: '3 gousses', name: 'ail', note: 'écrasées' },
                { qty: '1 boîte', name: 'tomates concassées', note: '400 g' },
                { qty: '2 c.c.', name: 'ras-el-hanout', note: '' },
                { qty: '1 c.c.', name: 'cumin', note: '' },
                { qty: '1 c.c.', name: 'cannelle', note: '' },
                { qty: '1 bouquet', name: 'coriandre fraîche', note: '' },
                { qty: '4 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les aubergines', texte: 'Couper en deux, quadriller la chair, saler, laisser dégorger 20 min. Éponger, badigeonner d\'huile. Enfourner à 200 °C jusqu\'à ce que la chair soit tendre.', timer: '20 min à 200 °C' },
            { titre: 'Préparer la farce', texte: 'Faire dorer les oignons dans l\'huile, ajouter l\'ail et la viande. Bien saisir. Incorporer les épices, les tomates. Mijoter 15 min jusqu\'à absorption du jus.', timer: '15 min' },
            { titre: 'Farcir et gratiner', texte: 'Creuser légèrement les aubergines, incorporer la chair dans la farce. Farcir généreusement. Enfourner 10 min.', timer: '10 min' },
            { titre: 'Servir', texte: 'Parsemer de coriandre fraîche. Servir avec du riz blanc ou du pain pita.' },
        ],
        conseils: [
            'Le ras-el-hanout est un mélange de 20 à 30 épices. Demander un mélange orienté "viande" à votre épicier.',
        ],
    },

    'baeckeoffe': {
        name:       'Baeckeoffe',
        region:     'Alsace',
        anecdote:   'Plat du lundi de lessive : les femmes alsaciennes déposaient leur terrine chez le boulanger avant de partir travailler.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '30 min',
        cuisson:    '2 h 30',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: 'Viandes (mariner la veille)', items: [
                { qty: '400 g', name: 'épaule d\'agneau', note: 'en cubes' },
                { qty: '400 g', name: 'échine de porc', note: 'en cubes' },
                { qty: '400 g', name: 'paleron de bœuf', note: 'en cubes' },
                { qty: '75 cl', name: 'Riesling d\'Alsace', note: '' },
                { qty: '2', name: 'oignons', note: 'émincés' },
                { qty: '3 gousses', name: 'ail', note: '' },
                { qty: '5', name: 'baies de genièvre', note: '' },
                { qty: '1', name: 'bouquet garni', note: '' },
            ]},
            { groupe: 'La terrine', items: [
                { qty: '1,5 kg', name: 'pommes de terre', note: 'à chair ferme, en rondelles' },
                { qty: '2', name: 'poireaux', note: 'en rondelles' },
                { qty: '3', name: 'carottes', note: 'en rondelles' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner la veille', texte: 'Placer les viandes dans un bol avec le vin, oignons, ail, bouquet garni et genièvre. Couvrir et réfrigérer toute la nuit.', timer: '12 h de marinade' },
            { titre: 'Monter', texte: 'Beurrer une grande terrine en terre. Alterner couches de légumes et de viandes marinées en assaisonnant. Terminer par les pommes de terre. Mouiller avec la marinade filtrée jusqu\'à mi-hauteur.' },
            { titre: 'Luter et cuire', texte: 'Préparer une pâte à luter (farine + eau). Sceller le couvercle avec cette pâte. Enfourner à 180 °C.', timer: '2 h 30 à 180 °C' },
            { titre: 'Servir', texte: 'Casser le lut devant les convives. Servir directement à la terrine.' },
        ],
        conseils: [
            'Le lut (pâte de farine et eau) rend la terrine hermétique et concentre les arômes. Tradition alsacienne : les femmes portaient leur terrine chez le boulanger le lundi matin.',
        ],
    },

    'beignets-courgettes': {
        name:       'Beignets de courgettes',
        region:     'Nice / Provence',
        anecdote:   'Les beignets de courgettes à la ricotta et au basilic frits à l\'huile d\'olive sont une spécialité niçoise.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '15 min',
        cuisson:    '15 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '3', name: 'courgettes moyennes', note: '' },
                { qty: '150 g', name: 'ricotta', note: '' },
                { qty: '50 g', name: 'parmesan râpé', note: '' },
                { qty: '1 bouquet', name: 'basilic frais', note: 'ciselé' },
                { qty: '2', name: 'œufs', note: '' },
                { qty: '80 g', name: 'farine', note: '' },
                { qty: '', name: 'sel, poivre, muscade', note: '' },
                { qty: '', name: 'huile d\'olive', note: 'pour frire' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer les courgettes', texte: 'Râper grossièrement les courgettes. Saler et laisser dégorger 15 min. Presser dans un torchon pour éliminer l\'eau.', timer: '15 min' },
            { titre: 'Pâte', texte: 'Mélanger courgettes, ricotta, parmesan, œufs battus, farine et basilic. Assaisonner. La pâte doit être compacte.' },
            { titre: 'Frire', texte: 'Chauffer 2 cm d\'huile. Former des galettes à la cuillère. Faire dorer 2-3 min de chaque côté. Égoutter sur papier absorbant.', timer: '5-6 min par fournée' },
        ],
        conseils: [
            'Servir avec une sauce yaourt grec + ail + menthe + citron. Version plus légère possible au four à 200 °C sur plaque huilée.',
        ],
    },

    'blanquette-de-veau': {
        name:       'Blanquette de veau',
        region:     'Île-de-France',
        anecdote:   'L\'un des plats les plus aimés des Français depuis le XVIIIe siècle, douceur et onctuosité.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '30 min',
        cuisson:    '1 h 30',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: 'Le veau', items: [
                { qty: '1,2 kg', name: 'épaule de veau', note: 'en morceaux de 60 g' },
                { qty: '2', name: 'carottes', note: 'en tronçons' },
                { qty: '2', name: 'oignons', note: '(1 piqué d\'un clou de girofle)' },
                { qty: '1', name: 'poireau', note: 'blanc seulement' },
                { qty: '1', name: 'bouquet garni', note: '' },
                { qty: '', name: 'gros sel, poivre blanc', note: '' },
            ]},
            { groupe: 'La sauce', items: [
                { qty: '40 g', name: 'beurre', note: '' },
                { qty: '40 g', name: 'farine', note: '' },
                { qty: '20 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '2', name: 'jaunes d\'œufs', note: '' },
                { qty: '1', name: 'citron', note: 'jus' },
                { qty: '200 g', name: 'champignons de Paris', note: 'émincés' },
            ]},
        ],
        etapes: [
            { titre: 'Blanchir le veau', texte: 'Plonger le veau dans l\'eau froide, porter à ébullition 3 min. Égoutter et rincer. Cette étape garantit une sauce bien blanche.' },
            { titre: 'Cuire dans le bouillon', texte: 'Remettre le veau avec les légumes, bouquet garni, eau froide et sel. Porter à frémissement et cuire à couvert à feu doux.', timer: '1 h à feu doux' },
            { titre: 'Velouté', texte: 'Roux blanc avec beurre et farine. Mouiller avec 60 cl de bouillon filtré en fouettant. Épaissir 5 min. Ajouter les champignons.', timer: '15 min' },
            { titre: 'Lier à la crème', texte: 'Mélanger crème et jaunes d\'œufs. Incorporer hors du feu à la sauce. Ajouter le jus de citron. Ne plus faire bouillir.' },
            { titre: 'Servir', texte: 'Remettre le veau dans la sauce. Réchauffer doucement. Servir avec riz blanc ou pommes de terre vapeur.' },
        ],
        conseils: [
            'La liaison crème-jaunes d\'œufs donne onctuosité et brillance mais ne doit jamais bouillir après incorporation, sinon la sauce tranche.',
        ],
    },

    'blanquette-legumes': {
        name:       'Blanquette de légumes printaniers',
        region:     'Île-de-France',
        anecdote:   'Carottes fanes, navets nouveaux, asperges et petits pois cuisinés en blanquette végétale pour les jardins de mai.',
        tags:       ["Printemps", "Plat principal", "Facile"],
        prep:       '20 min',
        cuisson:    '25 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: 'Les légumes', items: [
                { qty: '3', name: 'carottes fanes', note: 'en bâtonnets' },
                { qty: '2', name: 'navets nouveaux', note: 'en quartiers' },
                { qty: '200 g', name: 'petits pois frais', note: '' },
                { qty: '200 g', name: 'asperges vertes', note: 'en tronçons' },
                { qty: '150 g', name: 'champignons de Paris', note: '' },
            ]},
            { groupe: 'Sauce', items: [
                { qty: '30 g', name: 'beurre', note: '' },
                { qty: '30 g', name: 'farine', note: '' },
                { qty: '50 cl', name: 'bouillon de légumes chaud', note: '' },
                { qty: '15 cl', name: 'crème fraîche', note: '' },
                { qty: '1', name: 'citron', note: 'jus' },
                { qty: '', name: 'sel, poivre, muscade', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les légumes', texte: 'Cuire chaque légume séparément à l\'eau bouillante salée en les gardant légèrement croquants. Égoutter.' },
            { titre: 'Sauce velouté', texte: 'Roux blanc avec beurre et farine. Mouiller au bouillon chaud en fouettant. Cuire 5 min. Ajouter crème, citron et muscade. Rectifier.', timer: '10 min' },
            { titre: 'Servir', texte: 'Réunir tous les légumes dans la sauce. Chauffer 2 min sans bouillir. Servir avec riz basmati.' },
        ],
        conseils: [
            'Version végétarienne complète. On peut enrichir avec des jaunes d\'œufs comme dans la blanquette de veau classique.',
        ],
    },

    'boeuf-bourgogne-champignons': {
        name:       'Bourgogne aux lardons et champignons',
        region:     'Bourgogne',
        anecdote:   'Le bœuf bourguignon aux champignons et aux lardons est le grand plat de l\'automne bourguignon.',
        tags:       ["Automne", "Plat principal", "Moyen"],
        prep:       '30 min',
        cuisson:    '3 h',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,2 kg', name: 'paleron de bœuf', note: 'en cubes' },
                { qty: '300 g', name: 'champignons sauvages mélangés', note: 'cèpes, girolles, trompettes' },
                { qty: '150 g', name: 'lardons fumés', note: '' },
                { qty: '75 cl', name: 'Bourgogne rouge', note: 'Pinot Noir' },
                { qty: '2', name: 'carottes', note: 'en rondelles' },
                { qty: '2', name: 'oignons', note: 'en quartiers' },
                { qty: '3 gousses', name: 'ail', note: '' },
                { qty: '1', name: 'bouquet garni', note: '' },
                { qty: '2 c.s.', name: 'farine', note: '' },
                { qty: '', name: 'huile, sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Saisir', texte: 'Faire revenir les lardons, réserver. Saisir les cubes de bœuf sur toutes les faces en plusieurs fois. Réserver.', timer: '15 min' },
            { titre: 'Déglacer et mijoter', texte: 'Faire revenir oignons et carottes. Saupoudrer de farine, remuer. Remettre bœuf et lardons. Verser le vin, ajouter ail et bouquet garni. Porter à ébullition, écumer, couvrir. Cuire à très feu doux.', timer: '2 h 30' },
            { titre: 'Champignons', texte: '30 min avant la fin, poêler vivement les champignons dans du beurre. Incorporer à la cocotte. Rectifier l\'assaisonnement.', timer: '30 min' },
        ],
        conseils: [
            'Encore meilleur réchauffé le lendemain. Préparer la veille pour le lendemain.',
        ],
    },

    'boeuf-bourguignon': {
        name:       'Bœuf bourguignon',
        region:     'Bourgogne',
        anecdote:   'Plat du dimanche par excellence, le bœuf bourguignon tire sa richesse du vin de Bourgogne et de la patience.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '30 min',
        cuisson:    '3 h',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,5 kg', name: 'paleron de bœuf', note: 'en cubes de 5 cm' },
                { qty: '200 g', name: 'lardons demi-sel', note: '' },
                { qty: '20', name: 'petits oignons grelots', note: '' },
                { qty: '300 g', name: 'champignons de Paris', note: '' },
                { qty: '75 cl', name: 'Bourgogne rouge (Pinot Noir)', note: '' },
                { qty: '30 cl', name: 'fond de veau', note: '' },
                { qty: '2', name: 'carottes', note: 'en rondelles' },
                { qty: '1', name: 'bouquet garni', note: '' },
                { qty: '2 c.s.', name: 'concentré de tomate', note: '' },
                { qty: '2 c.s.', name: 'farine', note: '' },
                { qty: '30 g', name: 'beurre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Saisir la viande', texte: 'Sécher les cubes. Saisir à feu vif dans l\'huile en petites quantités jusqu\'à coloration dorée sur toutes les faces. Réserver.' },
            { titre: 'Fond de cocotte', texte: 'Faire dorer lardons et oignons grelots, ajouter les carottes. Saupoudrer de farine, remuer 2 min.' },
            { titre: 'Mijoter', texte: 'Remettre la viande. Verser vin et fond, ajouter concentré de tomate et bouquet garni. Porter à ébullition, écumer, couvrir. Mijoter à feu très doux.', timer: '2 h 30 à 3 h' },
            { titre: 'Finir', texte: '20 min avant la fin, poêler les champignons au beurre. Incorporer. Retirer le bouquet garni. Rectifier.' },
        ],
        conseils: [
            'Ne jamais faire bouillir à gros bouillons : la viande durcirait. Un frémissement régulier suffit.',
            'Pour une sauce brillante, la lier légèrement à la fécule en fin de cuisson.',
        ],
    },

    'bouillabaisse': {
        name:       'Bouillabaisse',
        region:     'Marseille',
        anecdote:   'La bouillabaisse de Marseille est un rite : rougets, vive, saint-pierre, rouille et croûtons dans le bouillon safraný.',
        tags:       ["Été", "Plat principal", "Élaboré"],
        prep:       '45 min',
        cuisson:    '45 min',
        personnes:  6,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Poissons (au moins 4 espèces)', items: [
                { qty: '500 g', name: 'rouget grondin', note: 'en morceaux' },
                { qty: '500 g', name: 'vive', note: 'en morceaux' },
                { qty: '500 g', name: 'saint-pierre', note: 'en morceaux' },
                { qty: '400 g', name: 'congre', note: 'en tronçons' },
                { qty: '400 g', name: 'rascasse', note: '' },
            ]},
            { groupe: 'Le bouillon', items: [
                { qty: '3', name: 'tomates mûres', note: 'concassées' },
                { qty: '2', name: 'oignons', note: 'émincés' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '1', name: 'fenouil', note: 'émincé' },
                { qty: '1 généreuse pincée', name: 'safran', note: '' },
                { qty: '1 c.c.', name: 'piment de Cayenne', note: '' },
                { qty: '10 cl', name: 'huile d\'olive', note: '' },
                { qty: '1 zeste', name: 'd\'orange', note: '' },
            ]},
            { groupe: 'Rouille et croûtons', items: [
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '1', name: 'jaune d\'œuf', note: '' },
                { qty: '1 pincée', name: 'safran', note: '' },
                { qty: '15 cl', name: 'huile d\'olive', note: '' },
                { qty: '1', name: 'baguette', note: 'en tranches grillées' },
            ]},
        ],
        etapes: [
            { titre: 'Base', texte: 'Faire revenir oignons, ail, tomates, fenouil dans l\'huile. Ajouter safran, piment, zeste d\'orange. Suer 10 min.', timer: '10 min' },
            { titre: 'Cuire à gros bouillons', texte: 'Ajouter 2 litres d\'eau bouillante. Plonger les poissons fermes en premier (congre, grondin). Après 5 min, ajouter les plus délicats. La bouillabaisse doit cuire à gros bouillons — c\'est son secret.', timer: '15-20 min' },
            { titre: 'Rouille', texte: 'Piler l\'ail avec safran et piment dans un mortier. Ajouter jaune d\'œuf, monter à l\'huile d\'olive comme une mayonnaise.' },
            { titre: 'Servir', texte: 'Sortir les poissons sur un plat. Servir le bouillon en soupière avec croûtons et rouille à part.' },
        ],
        conseils: [
            'La charte de la bouillabaisse marseillaise (1980) exige au minimum 4 espèces de poissons de roche.',
            'La rouille se prépare à l\'avance et se conserve au réfrigérateur.',
        ],
    },

    'bouillabaisse-fetes': {
        name:       'Bouillabaisse de fêtes aux coquillages',
        region:     'Marseille / Bretagne',
        anecdote:   'La bouillabaisse enrichie des coquillages de fêtes — homard, langoustines — pour le réveillon.',
        tags:       ["Hiver", "Plat principal", "Élaboré"],
        prep:       '45 min',
        cuisson:    '45 min',
        personnes:  6,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Fruits de mer et poissons nobles', items: [
                { qty: '1', name: 'homard breton', note: 'coupé en deux' },
                { qty: '6', name: 'langoustines', note: '' },
                { qty: '300 g', name: 'saint-pierre', note: 'en filets' },
                { qty: '300 g', name: 'turbot', note: 'en filets' },
                { qty: '300 g', name: 'noix de Saint-Jacques', note: '' },
            ]},
            { groupe: 'Base du bouillon', items: [
                { qty: '1 kg', name: 'têtes et arêtes de poisson', note: 'pour le fumet' },
                { qty: '1 pincée généreuse', name: 'safran', note: '' },
                { qty: '20 cl', name: 'vin blanc sec', note: '' },
                { qty: '2', name: 'tomates', note: '' },
                { qty: '1', name: 'fenouil', note: 'émincé' },
                { qty: '2', name: 'oignons', note: '' },
                { qty: '', name: 'sel, poivre, huile d\'olive', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Fumet', texte: 'Faire revenir oignons, fenouil, tomates dans l\'huile. Ajouter arêtes et têtes, couvrir d\'eau froide, ajouter vin et safran. Cuire 30 min à frémissement, filtrer soigneusement.', timer: '30 min' },
            { titre: 'Cuire les fruits de mer', texte: 'Plonger le homard dans le fumet bouillant 8 min. Réserver. Langoustines : 4 min. Filets : 3 min. Saint-Jacques : 1 min. Toujours réserver au chaud.' },
            { titre: 'Finir et servir', texte: 'Mixer une partie des légumes dans le bouillon pour l\'épaissir. Rectifier assaisonnement et safran. Servir avec rouille et croûtons.' },
        ],
        conseils: [
            'Préparer le fumet la veille pour un meilleur résultat. Version grand luxe parfaite pour les réveillons.',
        ],
    },

    'bouillon-poule': {
        name:       'Bouillon de poule aux légumes',
        region:     'France entière',
        anecdote:   'Le grand-mère disait : un bon bouillon de poule guérit tout. Les légumes racines d\'hiver finissent leur carrière ici.',
        tags:       ["Hiver", "Plat principal", "Facile"],
        prep:       '20 min',
        cuisson:    '2 h',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (1,5 kg)', name: 'poule', note: 'ou poulet fermier' },
                { qty: '3', name: 'carottes', note: 'entières' },
                { qty: '2', name: 'navets', note: '' },
                { qty: '2', name: 'poireaux', note: '' },
                { qty: '1 branche', name: 'céleri', note: '' },
                { qty: '1', name: 'oignon piqué de clou de girofle', note: '' },
                { qty: '1', name: 'bouquet garni', note: '' },
                { qty: '10', name: 'grains de poivre', note: '' },
                { qty: '', name: 'gros sel', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Blanchir', texte: 'Plonger la poule dans l\'eau froide, porter à ébullition, égoutter et rincer. Cette étape clarifie le bouillon.', timer: '5 min' },
            { titre: 'Cuire', texte: 'Remettre la poule avec tous les légumes et aromates. Couvrir de 3 litres d\'eau froide. Porter à frémissement, écumer soigneusement. Saler légèrement. Cuire à feu doux à découvert.', timer: '2 h à feu doux' },
            { titre: 'Servir', texte: 'Sortir la poule et les légumes. Filtrer le bouillon. Servir le bouillon en entrée avec vermicelles. Présenter la poule entourée des légumes avec cornichons et gros sel.' },
        ],
        conseils: [
            'La poule donne un bouillon infiniment plus riche que le poulet. Demander au volailler.',
            'Le bouillon se congèle 3 mois : base précieuse pour soupes, risottos et sauces.',
        ],
    },

    'boule-neige-noix-coco': {
        name:       'Sainte-Lucie : boule de neige suédoise',
        region:     'Scandinavie / Alsace',
        anecdote:   'Pour la Sainte-Lucie, on prépare en Alsace des boules de neige à la noix de coco, souvenir des échanges nordiques.',
        tags:       ["Hiver", "Dessert", "Facile"],
        prep:       '20 min',
        cuisson:    '0 min',
        personnes:  20,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '200 g', name: 'chocolat blanc de qualité', note: '' },
                { qty: '20 cl', name: 'crème liquide entière', note: '' },
                { qty: '50 g', name: 'beurre doux', note: '' },
                { qty: '150 g', name: 'noix de coco râpée', note: '' },
                { qty: '1 c.c.', name: 'extrait de vanille', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Ganache', texte: 'Chauffer la crème et le beurre sans bouillir. Verser sur le chocolat blanc cassé en morceaux. Attendre 2 min, lisser. Ajouter la vanille. Réfrigérer pour que la ganache raffermisse.', timer: '2 h au réfrigérateur' },
            { titre: 'Former les boules', texte: 'Prélever des portions à la cuillère. Rouler rapidement entre les paumes (mains fraîches) pour former des boules régulières.' },
            { titre: 'Enrober', texte: 'Rouler chaque boule dans la noix de coco râpée. Déposer sur plaque recouverte de papier cuisson. Réfrigérer.', timer: '1 h minimum' },
        ],
        conseils: [
            'Se conservent 5 jours au réfrigérateur. Aromatiser avec du rhum, de la fleur d\'oranger ou du zeste de citron vert.',
        ],
    },

    'bourride-de-lotte': {
        name:       'Bourride de lotte',
        region:     'Languedoc',
        anecdote:   'La bourride est la grande soupe de poisson du Languedoc, liée à l\'aïoli, parfumée au safran.',
        tags:       ["Été", "Plat principal", "Élaboré"],
        prep:       '30 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'La bourride', items: [
                { qty: '800 g', name: 'queue de lotte', note: 'en médaillons' },
                { qty: '2', name: 'poireaux', note: 'en rondelles' },
                { qty: '2', name: 'fenouils', note: 'en lamelles' },
                { qty: '2', name: 'tomates', note: 'concassées' },
                { qty: '1 pincée', name: 'safran', note: '' },
                { qty: '1 litre', name: 'fumet de poisson', note: '' },
            ]},
            { groupe: 'Aïoli liant', items: [
                { qty: '6 gousses', name: 'ail', note: '' },
                { qty: '2', name: 'jaunes d\'œufs', note: '' },
                { qty: '20 cl', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Légumes', texte: 'Faire revenir poireaux et fenouil dans l\'huile d\'olive. Ajouter tomates, safran. Mouiller avec le fumet. Cuire 15 min à frémissement.', timer: '15 min' },
            { titre: 'Cuire la lotte', texte: 'Plonger les médaillons dans le bouillon frémissant. Cuire 8-10 min jusqu\'à ce que la chair s\'opacifie. Réserver au chaud.', timer: '8-10 min' },
            { titre: 'Préparer l\'aïoli', texte: 'Piler l\'ail avec le sel dans un mortier. Ajouter jaunes d\'œufs, monter à l\'huile d\'olive comme une mayonnaise.' },
            { titre: 'Lier la bourride', texte: 'Filtrer le bouillon. Le verser progressivement sur l\'aïoli en fouettant. Reverser dans la casserole et chauffer sans bouillir jusqu\'à légère épaisseur.', timer: '5 min' },
            { titre: 'Dresser', texte: 'Servir la lotte nappée de sauce avec des pommes de terre vapeur.' },
        ],
        conseils: [
            'Soupe de poisson du Languedoc, plus onctueuse que la bouillabaisse car liée à l\'aïoli. Ne jamais faire bouillir après l\'incorporation de l\'aïoli.',
        ],
    },

    'brandade-cabillaud-herbes': {
        name:       'Brandade de cabillaud aux herbes',
        region:     'Languedoc',
        anecdote:   'Le cabillaud frais en brandade aux herbes fraîches du jardin est une alternative légère et printanière.',
        tags:       ["Printemps", "Plat principal", "Facile"],
        prep:       '20 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '600 g', name: 'dos de cabillaud frais', note: 'sans peau' },
                { qty: '300 g', name: 'pommes de terre', note: 'cuites en purée' },
                { qty: '10 cl', name: 'huile d\'olive', note: '' },
                { qty: '10 cl', name: 'lait chaud', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'écrasées' },
                { qty: '1 bouquet', name: 'persil plat et ciboulette', note: 'ciselés' },
                { qty: '1', name: 'citron', note: 'zeste et jus' },
                { qty: '', name: 'sel, poivre blanc', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Pocher le cabillaud', texte: 'Pocher le cabillaud dans l\'eau frémissante salée avec l\'ail 8-10 min jusqu\'à ce qu\'il s\'effeuille facilement. Égoutter.', timer: '8-10 min' },
            { titre: 'Monter la brandade', texte: 'Écraser le poisson à la fourchette. Incorporer alternativement huile d\'olive tiède et lait chaud en travaillant à la spatule. Ajouter la purée de pommes de terre.' },
            { titre: 'Assaisonner', texte: 'Incorporer herbes, zeste et jus de citron. Rectifier l\'assaisonnement. Servir sur tartines grillées.' },
        ],
        conseils: [
            'Version fraîche et légère de la brandade, sans dessalage. Se prépare en 30 min. Idéale avec du pain grillé au four.',
        ],
    },

    'brandade-de-morue': {
        name:       'Brandade de morue',
        region:     'Languedoc / Provence',
        anecdote:   'La morue dessalée et pilée avec l\'huile d\'olive est un trésor de la cuisine méditerranéenne hivernale.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '30 min',
        cuisson:    '20 min',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '600 g', name: 'morue salée', note: 'à dessaler 24-48 h' },
                { qty: '30 cl', name: 'huile d\'olive', note: 'de qualité' },
                { qty: '10 cl', name: 'lait entier', note: '' },
                { qty: '3 gousses', name: 'ail', note: '' },
                { qty: '1 branche', name: 'thym, 1 feuille laurier', note: '' },
                { qty: '', name: 'poivre blanc', note: '(pas de sel, la morue en a assez)' },
            ]},
        ],
        etapes: [
            { titre: 'Dessaler la morue', texte: 'Rincer la morue. La placer dans un bain d\'eau froide, peau vers le haut, 24 à 48 h au réfrigérateur en changeant l\'eau 4-5 fois.', timer: '24-48 h de dessalage' },
            { titre: 'Pocher', texte: 'Cuire la morue dans l\'eau frémissante (jamais bouillante) avec thym et laurier 10 min. Égoutter. Effeuiller en retirant peau et arêtes.', timer: '10 min' },
            { titre: 'Monter la brandade', texte: 'Chauffer séparément l\'huile (tiède) et le lait (chaud). Écraser la morue avec l\'ail pilé. Incorporer alternativement huile et lait en montant vigoureusement à la spatule.' },
        ],
        conseils: [
            'La brandade de Nîmes originale est sans pommes de terre. Servie chaude avec des croûtons frits à l\'huile d\'olive.',
            'Pour une version plus légère, remplacer 1/3 de l\'huile par une purée de pommes de terre.',
        ],
    },

    'brandade-gratinee-olives': {
        name:       'Brandade gratinée aux olives',
        region:     'Nîmes / Languedoc',
        anecdote:   'La brandade de morue gratinée avec des olives noires de la région de Nîmes est un plat robuste et parfumé.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '30 min',
        cuisson:    '30 min',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '600 g', name: 'morue dessalée et effeuilléé', note: '' },
                { qty: '400 g', name: 'pommes de terre', note: 'cuites en purée' },
                { qty: '20 cl', name: 'huile d\'olive', note: '' },
                { qty: '10 cl', name: 'lait chaud', note: '' },
                { qty: '100 g', name: 'olives noires de Nîmes', note: 'dénoyautées et hachées' },
                { qty: '2 gousses', name: 'ail', note: '' },
                { qty: '50 g', name: 'chapelure', note: '' },
                { qty: '3 c.s.', name: 'parmesan râpé', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Brandade', texte: 'Préparer une brandade de morue classique (voir recette). Incorporer la purée de pommes de terre et les olives noires hachées.' },
            { titre: 'Gratiner', texte: 'Étaler dans un plat à gratin beurré. Mélanger chapelure et parmesan, parsemer. Arroser d\'un filet d\'huile d\'olive. Passer au gril ou au four à 200 °C.', timer: '15-20 min à 200 °C' },
        ],
        conseils: [
            'Les olives noires de la région de Nîmes (Lucques, Picholine) sont idéales. Leur légère amertume contraste avec l\'onctuosité de la brandade.',
        ],
    },

    'brandade-thon': {
        name:       'Brandade de thon fraîche',
        region:     'Provence',
        anecdote:   'Variante printanière de la brandade, au thon frais de mer plutôt qu\'à la morue salée.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '15 min',
        cuisson:    '10 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '400 g', name: 'thon frais', note: 'en pavé' },
                { qty: '250 g', name: 'pommes de terre', note: 'cuites en purée' },
                { qty: '8 cl', name: 'huile d\'olive', note: '' },
                { qty: '8 cl', name: 'lait chaud', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'écrasées' },
                { qty: '1 bouquet', name: 'basilic frais', note: '' },
                { qty: '1', name: 'citron', note: 'jus' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire le thon', texte: 'Pocher les pavés dans l\'eau frémissante salée avec l\'ail 6-8 min. Égoutter et émietter grossièrement.', timer: '6-8 min' },
            { titre: 'Monter', texte: 'Mélanger le thon émietté avec la purée chaude. Incorporer huile d\'olive et lait chaud en travaillant à la fourchette. Texture rustique, pas trop lisse.' },
            { titre: 'Assaisonner', texte: 'Ajouter basilic ciselé et jus de citron. Rectifier. Servir sur pain grillé avec quelques feuilles de roquette.' },
        ],
        conseils: [
            'Version estivale rapide. Le thon frais peut être remplacé par du thon en boîte à l\'huile d\'olive de qualité.',
        ],
    },

    'bredele-alsaciens': {
        name:       'Bredele alsaciens (biscuits de Noël)',
        region:     'Alsace',
        anecdote:   'Pour la Saint-Nicolas, la confection des bredele débute en Alsace. Anise, cannelle, vanille embaument la cuisine.',
        tags:       ["Hiver", "Dessert", "Moyen"],
        prep:       '45 min',
        cuisson:    '12 min',
        personnes:  50,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: 'Pâte de base', items: [
                { qty: '250 g', name: 'beurre doux', note: 'ramolli' },
                { qty: '250 g', name: 'sucre glace', note: '' },
                { qty: '2', name: 'œufs', note: '' },
                { qty: '500 g', name: 'farine', note: '' },
                { qty: '1 sachet', name: 'sucre vanillé', note: '' },
            ]},
            { groupe: 'Épices', items: [
                { qty: '2 c.c.', name: 'cannelle moulue', note: '' },
                { qty: '1 c.c.', name: 'anis en poudre', note: '' },
                { qty: '½ c.c.', name: 'cardamome', note: '' },
                { qty: '½ c.c.', name: 'clou de girofle moulu', note: '' },
            ]},
            { groupe: 'Décoration', items: [
                { qty: '', name: 'sucre glace', note: '' },
                { qty: '', name: 'amandes entières, dragées argentées', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Pétrir', texte: 'Crémer le beurre avec le sucre glace. Incorporer les œufs un à un, puis farine et épices. Former une boule, filmer et réfrigérer.', timer: '1 h au réfrigérateur' },
            { titre: 'Découper', texte: 'Sur un plan fariné, étaler la pâte à 4-5 mm. Découper avec des emporte-pièces (étoiles, sapins, cloches, cœurs). Déposer sur plaque beurrée.' },
            { titre: 'Cuire', texte: 'Four à 170 °C jusqu\'à légère coloration dorée sur les bords. Les bredele doivent rester clairs au centre. Refroidir sur grille.', timer: '10-12 min à 170 °C' },
            { titre: 'Décorer', texte: 'Une fois froids, décorer avec glaçage royal, amandes ou dragées argentées.' },
        ],
        conseils: [
            'Se conservent 3-4 semaines dans une boîte en métal. En Alsace, la confection débute à la Saint-Nicolas (6 décembre).',
        ],
    },

    'brochet-beurre-blanc': {
        name:       'Filet de brochet au beurre blanc',
        region:     'Val de Loire',
        anecdote:   'Le beurre blanc nantais est né sur les rives de la Loire. Il accompagne à merveille le brochet de rivière.',
        tags:       ["Printemps", "Plat principal", "Élaboré"],
        prep:       '20 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Le brochet', items: [
                { qty: '1 (1,5 kg)', name: 'brochet', note: 'vidé et écaillé' },
                { qty: '1 litre', name: 'court-bouillon', note: 'eau, vin blanc, carotte, oignon, bouquet garni' },
            ]},
            { groupe: 'Beurre blanc nantais', items: [
                { qty: '3', name: 'échalotes', note: 'ciselées finement' },
                { qty: '10 cl', name: 'Muscadet sec', note: '' },
                { qty: '5 cl', name: 'vinaigre de vin blanc', note: '' },
                { qty: '250 g', name: 'beurre doux', note: 'bien froid, en cubes' },
                { qty: '2 c.s.', name: 'crème fraîche épaisse', note: 'stabilisateur' },
                { qty: '', name: 'sel, poivre blanc', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Pocher le brochet', texte: 'Préparer le court-bouillon et amener à frémissement. Plonger le brochet et pocher 15-18 min. Ne jamais faire bouillir.', timer: '15-18 min' },
            { titre: 'Réduire la base', texte: 'Mettre échalotes, vin blanc et vinaigre dans une petite casserole. Réduire presque à sec (1-2 c.s. de liquide restant).', timer: '8 min' },
            { titre: 'Monter le beurre blanc', texte: 'Ajouter la crème fraîche. Sur feu très doux, incorporer le beurre froid cube par cube en fouettant constamment. Sauce crémeuse et nacrée. Ne jamais faire bouillir.', timer: '5-8 min' },
            { titre: 'Dresser', texte: 'Lever les filets du brochet. Napper de beurre blanc. Servir avec des pommes de terre vapeur et des épinards.' },
        ],
        conseils: [
            'Le beurre blanc est né en Loire-Atlantique. La crème fraîche stabilise la sauce et évite qu\'elle tranche.',
        ],
    },

    'brochettes-barbecue': {
        name:       'Barbecue de la fête de la musique',
        region:     'France entière',
        anecdote:   'Le 21 juin est la fête de la musique et le solstice d\'été. On sort le barbecue et on grille tout ce qu\'on aime.',
        tags:       ["Été", "Plat principal", "Facile"],
        prep:       '20 min',
        cuisson:    '15 min',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: 'Brochettes', items: [
                { qty: '500 g', name: 'épaule d\'agneau', note: 'en cubes' },
                { qty: '400 g', name: 'blanc de poulet', note: 'en cubes' },
                { qty: '300 g', name: 'merguez', note: 'en tronçons' },
                { qty: '2', name: 'poivrons', note: 'en carrés' },
                { qty: '2', name: 'oignons rouges', note: 'en quartiers' },
            ]},
            { groupe: 'Marinade', items: [
                { qty: '10 cl', name: 'huile d\'olive', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'écrasées' },
                { qty: '1', name: 'citron', note: 'jus' },
                { qty: '1 c.c.', name: 'cumin', note: '' },
                { qty: '1 c.c.', name: 'paprika fumé', note: '' },
                { qty: '1 bouquet', name: 'persil ou coriandre', note: 'ciselé' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner', texte: 'Mélanger la marinade. Enrober les viandes et légumes. Réfrigérer au moins 1 h, idéalement 4 h.', timer: '1-4 h de marinade' },
            { titre: 'Monter les brochettes', texte: 'Enfiler en alternant viandes et légumes. Ne pas trop serrer.' },
            { titre: 'Griller', texte: 'Cuire sur barbecue à braises incandescentes 12-15 min en retournant régulièrement.', timer: '12-15 min' },
        ],
        conseils: [
            'Tremper les brochettes de bois 30 min dans l\'eau pour éviter qu\'elles brûlent.',
        ],
    },

    'brochettes-crevettes-gingembre': {
        name:       'Brochettes de crevettes au gingembre',
        region:     'Bretagne / fusion',
        anecdote:   'Les crevettes roses marinées au gingembre, sésame et sauce soja grillées sur brochette de bois.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '15 min',
        cuisson:    '6 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '24', name: 'crevettes crues décortiquées', note: 'queue conservée' },
                { qty: '3 cm', name: 'gingembre frais', note: 'râpé' },
                { qty: '2 gousses', name: 'ail', note: 'écrasées' },
                { qty: '3 c.s.', name: 'sauce soja', note: '' },
                { qty: '2 c.s.', name: 'huile de sésame', note: '' },
                { qty: '1 c.s.', name: 'miel liquide', note: '' },
                { qty: '1', name: 'citron vert', note: 'jus et zeste' },
                { qty: '1 c.s.', name: 'graines de sésame', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner', texte: 'Mélanger gingembre, ail, sauce soja, huile de sésame, miel et jus de citron. Enrober les crevettes. Mariner 30 min.', timer: '30 min' },
            { titre: 'Griller', texte: 'Enfiler 3 crevettes par brochette. Cuire au barbecue ou plancha 2-3 min par face jusqu\'à ce qu\'elles soient roses et recourbées.', timer: '4-6 min' },
            { titre: 'Servir', texte: 'Parsemer de graines de sésame et zeste de citron vert. Servir aussitôt avec une sauce sweet chili.' },
        ],
        conseils: [
            'Ne pas trop cuire : dès que les crevettes forment un "C" et sont roses opaques, c\'est prêt. Trop cuites, elles deviennent caoutchouteuses.',
        ],
    },

    'brochettes-legumes': {
        name:       'Brochettes de légumes grillés',
        region:     'Méditerranée',
        anecdote:   'Courgettes, aubergines, poivrons, champignons sur la braise avec marinade à l\'huile d\'olive et herbes.',
        tags:       ["Été", "Accompagnement", "Facile"],
        prep:       '15 min',
        cuisson:    '12 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '2', name: 'courgettes', note: 'en rondelles épaisses' },
                { qty: '2', name: 'poivrons colorés', note: 'en carrés' },
                { qty: '1', name: 'aubergine', note: 'en cubes' },
                { qty: '200 g', name: 'champignons de Paris', note: 'entiers' },
                { qty: '1', name: 'oignon rouge', note: 'en quartiers' },
                { qty: '1 barquette', name: 'tomates cerises', note: '' },
                { qty: '5 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '2 branches', name: 'thym et romarin effeuillés', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Assaisonner', texte: 'Mélanger tous les légumes avec huile d\'olive, herbes, sel et poivre. Mariner 15 min.' },
            { titre: 'Monter les brochettes', texte: 'Enfiler en alternant les couleurs. Les tomates cerises en dernier.' },
            { titre: 'Griller', texte: 'Cuire sur barbecue ou plancha à feu vif 10-12 min en tournant régulièrement. Colorés mais encore légèrement fermes.', timer: '10-12 min' },
        ],
        conseils: [
            'Arroser d\'un filet de vinaigre balsamique en fin de cuisson. Accompagnent parfaitement tout barbecue.',
        ],
    },

    'brochettes-poulet-citron': {
        name:       'Brochettes de poulet mariné au citron',
        region:     'Provence',
        anecdote:   'Marinées au citron, ail et herbes toute la nuit, ces brochettes grillées sont les reines du barbecue de juin.',
        tags:       ["Été", "Plat principal", "Facile"],
        prep:       '15 min',
        cuisson:    '12 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '600 g', name: 'filet de poulet', note: 'en cubes de 3 cm' },
                { qty: '2', name: 'citrons non traités', note: 'jus et zeste' },
                { qty: '3 gousses', name: 'ail', note: 'écrasées' },
                { qty: '1 c.c.', name: 'curcuma', note: '' },
                { qty: '1 c.c.', name: 'cumin', note: '' },
                { qty: '5 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '1 bouquet', name: 'coriandre ou persil', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner', texte: 'Mélanger huile, jus et zeste de citron, ail, épices. Enrober le poulet. Couvrir et réfrigérer.', timer: '2-12 h de marinade' },
            { titre: 'Brochettes', texte: 'Enfiler le poulet sur les brochettes.' },
            { titre: 'Cuire', texte: 'Cuire sur barbecue chaud ou plancha, 3 min par face (4 faces) jusqu\'à légère coloration.', timer: '12 min' },
            { titre: 'Servir', texte: 'Parsemer de coriandre ciselée. Servir avec pain pita, taboulé ou riz.' },
        ],
        conseils: [
            'La marinade au citron attendrit légèrement la chair. Une nuit de marinade donne le meilleur résultat.',
        ],
    },

    'bruschetta-tapenade': {
        name:       'Tapenade sur bruschetta',
        region:     'Provence',
        anecdote:   'La tapenade aux olives noires de la Région de Nîmes écrasées avec câpres, anchois et huile d\'olive est généreuse.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '15 min',
        cuisson:    '5 min',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: 'Tapenade', items: [
                { qty: '200 g', name: 'olives noires dénoyautées', note: 'Nyons ou Kalamata' },
                { qty: '50 g', name: 'câpres', note: 'égouttées' },
                { qty: '4', name: 'filets d\'anchois à l\'huile', note: '' },
                { qty: '1 gousse', name: 'ail', note: '' },
                { qty: '8 cl', name: 'huile d\'olive de qualité', note: '' },
                { qty: '1 c.s.', name: 'jus de citron', note: '' },
                { qty: '1 c.c.', name: 'thym frais effeuillé', note: '' },
            ]},
            { groupe: 'Bruschetta', items: [
                { qty: '1', name: 'baguette de campagne', note: 'en tranches épaisses' },
                { qty: '1 gousse', name: 'ail', note: 'pour frotter' },
            ]},
        ],
        etapes: [
            { titre: 'Tapenade', texte: 'Mixer (ou écraser au mortier) olives, câpres, anchois et ail. Ajouter l\'huile en filet. Garder une texture grossière. Assaisonner avec citron et thym.' },
            { titre: 'Griller le pain', texte: 'Griller les tranches sur barbecue ou sous le gril du four.', timer: '3-4 min' },
            { titre: 'Assembler', texte: 'Frotter chaque tranche avec la gousse d\'ail crue. Tartiner généreusement de tapenade. Servir aussitôt.' },
        ],
        conseils: [
            'La tapenade se conserve 2 semaines au réfrigérateur couverte d\'huile d\'olive. "Tapena" signifie câpre en occitan : c\'est l\'ingrédient secret.',
        ],
    },

    'bruschetta-tomates': {
        name:       'Bruschetta aux tomates et basilic',
        region:     'Provence / Côte d\'Azur',
        anecdote:   'Le pain grillé à l\'ail avec tomates fraîches hachées, basilic et huile d\'olive est le symbole de l\'été.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '10 min',
        cuisson:    '5 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'tomates mûres à chair ferme', note: '' },
                { qty: '1', name: 'baguette de campagne', note: 'en tranches' },
                { qty: '2 gousses', name: 'ail', note: '' },
                { qty: '10 feuilles', name: 'basilic frais', note: '' },
                { qty: '4 c.s.', name: 'huile d\'olive extra-vierge', note: '' },
                { qty: '', name: 'fleur de sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer les tomates', texte: 'Couper en dés. Égoutter 5 min dans une passoire. Assaisonner avec sel, poivre et basilic grossièrement ciselé.' },
            { titre: 'Griller le pain', texte: 'Griller les tranches sous le gril ou sur barbecue.', timer: '3-4 min' },
            { titre: 'Assembler', texte: 'Frotter énergiquement chaque tranche avec l\'ail cru. Arroser d\'huile d\'olive. Déposer les tomates. Servir immédiatement.' },
        ],
        conseils: [
            'La qualité des tomates et de l\'huile d\'olive est tout. En été avec des tomates du jardin, c\'est un chef-d\'œuvre de simplicité.',
        ],
    },

    'buche-marron-chocolat': {
        name:       'Bûche roulée au marron et chocolat',
        region:     'France entière',
        anecdote:   'La bûche de Noël se prépare à partir de la mi-décembre. La version marron-chocolat est la plus gourmande.',
        tags:       ["Hiver", "Dessert", "Élaboré"],
        prep:       '45 min',
        cuisson:    '12 min',
        personnes:  10,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Biscuit roulé', items: [
                { qty: '4', name: 'œufs séparés', note: '' },
                { qty: '120 g', name: 'sucre', note: '' },
                { qty: '80 g', name: 'farine', note: '' },
                { qty: '20 g', name: 'cacao non sucré', note: '' },
            ]},
            { groupe: 'Crème marron', items: [
                { qty: '300 g', name: 'crème de marrons Clément Faugier', note: '' },
                { qty: '200 g', name: 'beurre doux ramolli', note: '' },
                { qty: '2 c.s.', name: 'rhum brun', note: 'facultatif' },
            ]},
            { groupe: 'Ganache chocolat', items: [
                { qty: '200 g', name: 'chocolat noir 70%', note: '' },
                { qty: '20 cl', name: 'crème liquide entière', note: '' },
                { qty: '30 g', name: 'beurre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Biscuit', texte: 'Battre jaunes et sucre jusqu\'au blanchiment. Incorporer farine et cacao tamisés. Monter les blancs en neige ferme, incorporer délicatement. Étaler sur plaque beurrée. Enfourner à 200 °C.', timer: '10-12 min à 200 °C' },
            { titre: 'Rouler', texte: 'Dès la sortie du four, retourner sur un torchon humide. Retirer le papier. Rouler le biscuit chaud dans le torchon. Laisser refroidir.', timer: '30 min' },
            { titre: 'Crème marron', texte: 'Battre le beurre mou en crème. Incorporer crème de marrons et rhum. Dérouler le biscuit, étaler la crème, rouler à nouveau. Réfrigérer.', timer: '1 h au réfrigérateur' },
            { titre: 'Ganache', texte: 'Porter la crème à ébullition, verser sur le chocolat cassé. Lisser, ajouter le beurre. Laisser tiédir jusqu\'à consistance nappante.' },
            { titre: 'Décorer', texte: 'Couper les extrémités en biais. Napper de ganache. Strier à la fourchette pour imiter l\'écorce. Décorer avec marrons glacés ou cacao.' },
        ],
        conseils: [
            'Peut être préparée 2 jours à l\'avance. Sortir 30 min avant de servir.',
        ],
    },

    'bugnes-lyonnaises': {
        name:       'Bugnes lyonnaises',
        region:     'Lyon',
        anecdote:   'La fête des Lumières de Lyon, le 8 décembre, se célèbre aussi avec les bugnes frites saupoudrées de sucre glace.',
        tags:       ["Hiver", "Dessert", "Moyen"],
        prep:       '30 min',
        cuisson:    '15 min',
        personnes:  8,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '500 g', name: 'farine', note: '' },
                { qty: '3', name: 'œufs', note: '' },
                { qty: '80 g', name: 'beurre doux ramolli', note: '' },
                { qty: '60 g', name: 'sucre', note: '' },
                { qty: '1 sachet', name: 'levure chimique', note: '' },
                { qty: '1 c.s.', name: 'rhum brun ou fleur d\'oranger', note: '' },
                { qty: '1 c.c.', name: 'zeste de citron', note: '' },
                { qty: '1 pincée', name: 'sel', note: '' },
                { qty: '', name: 'huile neutre pour friture', note: '' },
                { qty: '', name: 'sucre glace', note: 'pour saupoudrer' },
            ]},
        ],
        etapes: [
            { titre: 'Pétrir', texte: 'Mélanger farine, sucre, sel, levure. Ajouter œufs, beurre mou, rhum et zeste. Pétrir jusqu\'à obtenir une pâte souple. Filmer et reposer.', timer: '1 h de repos' },
            { titre: 'Découper', texte: 'Étaler la pâte très finement (2 mm). Découper des losanges de 8x4 cm. Faire une fente au centre et glisser une extrémité à travers pour la forme classique.' },
            { titre: 'Frire', texte: 'Chauffer l\'huile à 170 °C. Frire en petites quantités 1-2 min de chaque côté jusqu\'à légère dorure. Égoutter.', timer: '1-2 min par face' },
            { titre: 'Sucrer', texte: 'Saupoudrer abondamment de sucre glace encore chaud.' },
        ],
        conseils: [
            'Le secret des bugnes lyonnaises : la pâte très fine. Elles se distinguent des merveilles bordelaises qui sont plus gonflées.',
        ],
    },

    'cabillaud-beurre-agrumes': {
        name:       'Dos de cabillaud au beurre d\'agrumes',
        region:     'Bretagne / Pays de Loire',
        anecdote:   'Le cabillaud de l\'Atlantique en fin de saison est excellent avec un beurre blanc aux zestes de citron.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '15 min',
        cuisson:    '15 min',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: 'Le poisson', items: [
                { qty: '4 (150 g)', name: 'dos de cabillaud', note: '' },
                { qty: '1 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
            { groupe: 'Beurre d\'agrumes', items: [
                { qty: '150 g', name: 'beurre doux', note: 'en cubes froids' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '5 cl', name: 'vin blanc sec', note: '' },
                { qty: '1', name: 'orange non traitée', note: 'jus et zeste' },
                { qty: '1', name: 'citron non traité', note: 'jus et zeste' },
                { qty: '1', name: 'pamplemousse', note: 'jus uniquement' },
                { qty: '', name: 'sel, poivre blanc', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Beurre d\'agrumes', texte: 'Réduire échalotes, vin blanc et jus d\'agrumes jusqu\'à obtenir 3 c.s. Sur feu doux, incorporer le beurre froid cube par cube en fouettant. Assaisonner, ajouter les zestes. Tenir au chaud.' },
            { titre: 'Cuire le cabillaud', texte: 'Assaisonner les dos. Chauffer l\'huile dans une poêle anti-adhésive. Cuire côté peau 4-5 min, retourner, encore 3 min. Doit s\'effeuiller.', timer: '7-8 min' },
            { titre: 'Dresser', texte: 'Poser le cabillaud sur assiette chaude. Napper de beurre d\'agrumes. Servir avec riz basmati.' },
        ],
        conseils: [
            'Le beurre d\'agrumes se prépare à la dernière minute. Le tenir à peine chaud au bain-marie.',
        ],
    },

    'carbonnade-flamande': {
        name:       'Carbonnade flamande',
        region:     'Nord / Flandres',
        anecdote:   'Bœuf mijoté à la bière brune du Nord, pain d\'épice et moutarde : le plat flamand par excellence.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '25 min',
        cuisson:    '2 h 30',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,2 kg', name: 'paleron ou joue de bœuf', note: 'en tranches épaisses' },
                { qty: '75 cl', name: 'bière brune du Nord', note: 'Ch\'ti, Leffe brune…' },
                { qty: '3', name: 'oignons', note: 'en lamelles' },
                { qty: '2 c.s.', name: 'farine', note: '' },
                { qty: '2 tranches', name: 'pain d\'épice', note: 'tartinées de moutarde forte' },
                { qty: '1 c.s.', name: 'cassonade brune', note: '' },
                { qty: '1', name: 'bouquet garni', note: '' },
                { qty: '2 c.s.', name: 'beurre', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Saisir la viande', texte: 'Saler et poivrer les tranches. Faire dorer dans le beurre à feu vif sur les deux faces. Réserver.' },
            { titre: 'Fondre les oignons', texte: 'Dans la même cocotte, faire fondre les oignons avec la cassonade à feu doux 15 min jusqu\'à légère caramélisation. Saupoudrer de farine.', timer: '15 min' },
            { titre: 'Mijoter', texte: 'Remettre la viande. Verser la bière, ajouter le bouquet garni. Poser les tranches de pain d\'épice moutardées sur la viande (elles vont fondre et épaissir la sauce). Couvrir et cuire à très feu doux.', timer: '2 h' },
        ],
        conseils: [
            'Le pain d\'épice moutardé est la signature de la carbonnade. Il épaissit la sauce avec des notes sucrées-amères.',
            'Servir avec des frites belges ou de la purée. Encore meilleur le lendemain.',
        ],
    },

    'carpaccio-boeuf': {
        name:       'Carpaccio de bœuf à la roquette',
        region:     'Île-de-France / Provence',
        anecdote:   'Le carpaccio de bœuf cru tranché finement, huile d\'olive et parmesan, est frais et léger pour les beaux jours.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '20 min',
        cuisson:    '0 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '400 g', name: 'filet de bœuf', note: 'de qualité, bien froid' },
                { qty: '60 g', name: 'parmesan', note: 'en copeaux' },
                { qty: '2 poignées', name: 'roquette', note: '' },
                { qty: '2 c.s.', name: 'câpres', note: 'égouttées' },
                { qty: '4 c.s.', name: 'huile d\'olive extra-vierge', note: '' },
                { qty: '1', name: 'citron', note: 'jus' },
                { qty: '', name: 'fleur de sel, poivre du moulin', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Trancher', texte: 'Placer le filet 30 min au congélateur (plus facile à trancher). Trancher en carpaccio très fin (2 mm) au couteau bien aiguisé.' },
            { titre: 'Disposer', texte: 'Déposer les tranches en rosette sur les assiettes en les faisant légèrement se chevaucher. Appuyer avec le plat de la main pour aplatir encore.' },
            { titre: 'Assaisonner', texte: 'Arroser d\'huile d\'olive et de jus de citron. Fleur de sel et poivre. Parsemer de câpres, copeaux de parmesan et roquette.' },
        ],
        conseils: [
            'Inventé en 1950 au Harry\'s Bar de Venise. Le rouge vif du bœuf rappelle les peintures du peintre Vittore Carpaccio.',
        ],
    },

    'carpaccio-courgettes': {
        name:       'Carpaccio de courgettes au citron',
        region:     'Provence / Côte d\'Azur',
        anecdote:   'Les courgettes crues à la mandoline, huile d\'olive, citron et parmesan sont une entrée fraîche et légère.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '15 min',
        cuisson:    '0 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'courgettes longues bien fermes', note: 'petites de préférence' },
                { qty: '80 g', name: 'parmesan ou pecorino', note: 'en copeaux' },
                { qty: '1 bouquet', name: 'menthe fraîche', note: '' },
                { qty: '4 c.s.', name: 'huile d\'olive extra-vierge', note: '' },
                { qty: '2', name: 'citrons', note: 'jus' },
                { qty: '', name: 'fleur de sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Trancher', texte: 'Laver les courgettes. Les trancher à la mandoline ou au couteau en fines rondelles de 2 mm maximum.' },
            { titre: 'Assaisonner', texte: 'Disposer sur les assiettes en les chevauchant. Arroser d\'huile d\'olive et de jus de citron. Saler, poivrer.' },
            { titre: 'Finir', texte: 'Parsemer de copeaux de fromage et feuilles de menthe fraîche. Servir immédiatement ou après 10 min de marinade.' },
        ],
        conseils: [
            'Les petites courgettes du jardin ont moins de graines et plus de saveur. Ce plat se marie très bien avec des gambas poêlées.',
        ],
    },

    'carpe-a-la-juive': {
        name:       'Carpe à la juive',
        region:     'Alsace / Lorraine',
        anecdote:   'Recette séculaire de la cuisine juive alsacienne, la carpe à la juive se sert froide dans sa gelée au safran.',
        tags:       ["Hiver", "Plat principal", "Élaboré"],
        prep:       '30 min',
        cuisson:    '45 min',
        personnes:  6,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (2 kg)', name: 'carpe', note: 'vidée et écaillée' },
                { qty: '2', name: 'oignons', note: 'en lamelles' },
                { qty: '2', name: 'carottes', note: 'en rondelles' },
                { qty: '1 branche', name: 'céleri', note: '' },
                { qty: '1 pincée', name: 'safran', note: '' },
                { qty: '1 c.c.', name: 'sucre', note: '' },
                { qty: '3 c.s.', name: 'huile neutre', note: '' },
                { qty: '50 cl', name: 'eau', note: '' },
                { qty: '1', name: 'citron', note: 'en rondelles' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer la carpe', texte: 'Couper la carpe en tronçons de 5 cm. Saler légèrement et réserver 30 min.' },
            { titre: 'Cuire', texte: 'Faire dorer les oignons dans l\'huile. Ajouter carottes et céleri, cuire 5 min. Disposer les tronçons de carpe, ajouter safran, sucre et eau. Cuire à frémissement.', timer: '20-25 min' },
            { titre: 'Refroidir en gelée', texte: 'Retirer délicatement les tronçons. Réduire le bouillon à feu vif pour le concentrer et le faire gélifier naturellement. Verser sur les poissons avec les légumes. Laisser prendre au frais.', timer: '12 h au réfrigérateur' },
            { titre: 'Servir', texte: 'Servir froid en gelée avec rondelles de citron et raifort.' },
        ],
        conseils: [
            'Plat de la cuisine ashkénaze, traditionnel pour Pessah et Roch Hachana. La gelée naturelle provient de la peau et des arêtes de la carpe.',
        ],
    },

    'cassolette-escargots': {
        name:       'Cassolette d\'escargots au beurre de persil',
        region:     'Bourgogne',
        anecdote:   'Les escargots de Bourgogne dans leur beurre à l\'ail et au persil sont un classique festif des repas d\'automne.',
        tags:       ["Automne", "Entrée", "Moyen"],
        prep:       '15 min',
        cuisson:    '15 min',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '48', name: 'escargots de Bourgogne', note: 'en boîte, égouttés' },
                { qty: '150 g', name: 'beurre doux', note: 'à température ambiante' },
                { qty: '4 gousses', name: 'ail', note: 'écrasées' },
                { qty: '1 bouquet', name: 'persil plat', note: 'finement ciselé' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '5 cl', name: 'Bourgogne blanc', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Beurre bourguignon', texte: 'Mélanger beurre mou, ail, persil, échalotes, sel et poivre à la fourchette jusqu\'à homogénéité.' },
            { titre: 'Préparer les cassolettes', texte: 'Répartir les escargots dans des cassolettes individuelles. Arroser chacun d\'un trait de vin blanc.' },
            { titre: 'Gratiner', texte: 'Déposer généreusement de beurre persillé sur chaque escargot. Passer sous le gril préchauffé au maximum jusqu\'à ce que le beurre bouillonne.', timer: '8-10 min sous le gril' },
        ],
        conseils: [
            'Servir avec une baguette fraîche pour saucer le beurre. Le beurre d\'escargot se prépare en grande quantité et se congèle facilement.',
        ],
    },

    'cassoulet': {
        name:       'Cassoulet',
        region:     'Languedoc',
        anecdote:   'Plat emblématique du Languedoc, le cassoulet mijote des heures pour marier haricots blancs, confit et saucisse.',
        tags:       ["Hiver", "Plat principal", "Élaboré"],
        prep:       '30 min',
        cuisson:    '3 h',
        personnes:  8,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Les viandes', items: [
                { qty: '4', name: 'cuisses de canard confites', note: '' },
                { qty: '400 g', name: 'saucisses de Toulouse', note: '' },
                { qty: '300 g', name: 'lard demi-sel en lardons', note: '' },
                { qty: '300 g', name: 'épaule de porc', note: 'en cubes' },
            ]},
            { groupe: 'Haricots et aromates', items: [
                { qty: '1 kg', name: 'haricots blancs secs', note: 'Tarbais ou lingots, trempés 12 h' },
                { qty: '1 boîte', name: 'tomates concassées', note: '' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '2', name: 'oignons', note: '' },
                { qty: '1', name: 'bouquet garni', note: '' },
                { qty: '1,5 litre', name: 'fond de veau ou bouillon', note: '' },
                { qty: '50 g', name: 'chapelure', note: 'pour la croûte' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les haricots', texte: 'Égoutter les haricots trempés. Cuire 45 min dans l\'eau bouillante avec bouquet garni et oignons. Ils doivent être à peine cuits. Réserver dans leur jus.', timer: '45 min' },
            { titre: 'Faire revenir les viandes', texte: 'Faire dorer lardons puis porc puis saucisses dans la graisse de canard. Réserver. Faire revenir l\'ail.' },
            { titre: 'Monter le cassoulet', texte: 'Dans un grand plat en terre, alterner couches de haricots et de viandes. Terminer par les haricots. Mouiller avec le fond jusqu\'à hauteur. Ajouter les tomates. Enfoncer confits et saucisses.' },
            { titre: 'Cuire et croûter', texte: 'Saupoudrer de chapelure. Enfourner à 150 °C. Quand la croûte se forme, l\'enfoncer dans les haricots et en reformer une nouvelle. Répéter 3-4 fois.', timer: '2 h à 150 °C' },
        ],
        conseils: [
            'La querelle Castelnaudary-Carcassonne-Toulouse sur la vraie recette est ancestrale. À Castelnaudary : seulement confit, saucisse et porc. À Toulouse : on ajoute du mouton.',
        ],
    },

    'cervelas-lyonnais': {
        name:       'Cervelas lyonnais rôti',
        region:     'Lyon',
        anecdote:   'La charcuterie est reine à Lyon. Le cervelas aux truffes ou aux pistaches est une institution des bouchons.',
        tags:       ["Hiver", "Entrée", "Facile"],
        prep:       '10 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '2', name: 'cervelas de Lyon', note: 'aux pistaches ou aux truffes' },
                { qty: '20 cl', name: 'vin blanc du Beaujolais', note: '' },
                { qty: '20 cl', name: 'crème fraîche', note: '' },
                { qty: '2 c.s.', name: 'moutarde à l\'ancienne', note: '' },
                { qty: '1', name: 'échalote', note: 'ciselée' },
                { qty: '20 g', name: 'beurre', note: '' },
                { qty: '1 bouquet', name: 'persil plat', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Griller', texte: 'Inciser les cervelas en croix sur les 2/3 de la longueur pour les faire fleurir. Passer sous le gril du four à 200 °C en retournant à mi-cuisson.', timer: '15-20 min au four' },
            { titre: 'Sauce moutarde', texte: 'Faire revenir l\'échalote dans le beurre. Déglacer au vin blanc, réduire. Ajouter crème et moutarde. Épaissir 3 min.', timer: '5 min' },
            { titre: 'Dresser', texte: 'Napper les cervelas de sauce. Parsemer de persil ciselé. Servir avec salade de mâche ou pommes de terre vapeur.' },
        ],
        conseils: [
            'Le cervelas de Lyon est l\'emblème de la charcuterie lyonnaise. Avec truffes et pistaches, c\'est un produit de fête.',
        ],
    },

    'ceviche-daurade': {
        name:       'Ceviche de daurade',
        region:     'Pays Basque / fusion',
        anecdote:   'Le poisson cru mariné au citron vert, à la coriandre et au piment doux est arrivé au Pays Basque avec les surfeurs.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '20 min',
        cuisson:    '0 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '400 g', name: 'filet de daurade royale', note: 'très frais, peau retirée' },
                { qty: '4', name: 'citrons verts', note: 'jus' },
                { qty: '1', name: 'piment rouge frais', note: 'épépiné, finement haché' },
                { qty: '1', name: 'oignon rouge', note: 'finement émincé' },
                { qty: '1 bouquet', name: 'coriandre fraîche', note: '' },
                { qty: '1', name: 'avocat mûr', note: 'en dés' },
                { qty: '', name: 'fleur de sel', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Découper', texte: 'Couper la daurade en dés de 1,5 cm. Déposer dans un bol en verre.' },
            { titre: 'Mariner', texte: 'Couvrir de jus de citron vert. Ajouter le piment et l\'oignon rouge. La chair va blanchir progressivement. Réfrigérer.', timer: '15-20 min au réfrigérateur' },
            { titre: 'Finir', texte: 'Égoutter légèrement. Ajouter avocat, coriandre ciselée et fleur de sel. Mélanger délicatement. Servir immédiatement en verrine ou assiette fraîche.' },
        ],
        conseils: [
            'Le poisson doit être d\'une fraîcheur irréprochable. Acheter le matin même chez le poissonnier.',
        ],
    },

    'ceviche-daurade-tomates': {
        name:       'Ceviche de daurade aux tomates',
        region:     'Pays Basque / Atlantique',
        anecdote:   'La daurade de l\'Atlantique en ceviche avec tomates anciennes et basilic est fraîche et estivale.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '20 min',
        cuisson:    '0 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '400 g', name: 'filet de daurade', note: 'très frais' },
                { qty: '3', name: 'citrons verts', note: 'jus' },
                { qty: '200 g', name: 'tomates cerises colorées', note: 'coupées en deux' },
                { qty: '1', name: 'oignon rouge', note: 'émincé' },
                { qty: '1', name: 'piment doux rouge', note: 'en dés' },
                { qty: '1 bouquet', name: 'basilic frais', note: '' },
                { qty: '3 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'fleur de sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Couper la daurade en dés. Couvrir de jus de citron vert, ajouter oignon et piment. Mariner 20 min au réfrigérateur.', timer: '20 min' },
            { titre: 'Assembler', texte: 'Égoutter légèrement. Mélanger avec les tomates cerises, l\'huile d\'olive et le basilic. Assaisonner.' },
            { titre: 'Servir', texte: 'Dresser en verrines ou assiettes avec quelques feuilles de basilic. Servir immédiatement.' },
        ],
        conseils: [
            'Version méditerranéenne du ceviche avec les tomates du jardin d\'été. Parfait pour un apéritif dînatoire.',
        ],
    },

    'chapon-farci-marrons': {
        name:       'Chapon farci aux marrons et foie gras',
        region:     'France entière',
        anecdote:   'Le chapon, volaille royale de Noël, se commande chez le volailler et se farcit aux marrons et foie gras.',
        tags:       ["Hiver", "Plat principal", "Élaboré"],
        prep:       '45 min',
        cuisson:    '3 h',
        personnes:  8,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Le chapon', items: [
                { qty: '1 (3,5 kg)', name: 'chapon de Bresse ou Label Rouge', note: 'à commander' },
                { qty: '50 g', name: 'beurre doux', note: '' },
                { qty: '30 cl', name: 'fond de volaille', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
            { groupe: 'La farce', items: [
                { qty: '400 g', name: 'chair à saucisse de qualité', note: '' },
                { qty: '200 g', name: 'marrons cuits', note: 'en boîte ou sous vide' },
                { qty: '100 g', name: 'foie de volaille', note: 'haché' },
                { qty: '50 g', name: 'foie gras mi-cuit', note: 'en dés' },
                { qty: '1', name: 'échalote', note: 'ciselée' },
                { qty: '1 c.s.', name: 'cognac', note: '' },
                { qty: '1 bouquet', name: 'persil et thym effeuillés', note: '' },
                { qty: '', name: 'sel, poivre, muscade', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer la farce', texte: 'Faire revenir l\'échalote dans le beurre. Mélanger avec chair à saucisse, foie de volaille haché, marrons émiettés, foie gras, cognac et herbes. Assaisonner généreusement.' },
            { titre: 'Farcir le chapon', texte: 'Sortir le chapon 1 h avant. Glisser du beurre sous la peau de la poitrine. Farcir la cavité sans trop tasser. Brider soigneusement.' },
            { titre: 'Rôtir', texte: 'Badigeonner de beurre fondu. Saler, poivrer. Enfourner à 160 °C en arrosant toutes les 30 min du jus de cuisson.', timer: '3 h à 160 °C' },
            { titre: 'Reposer et servir', texte: 'Laisser reposer 20 min sous aluminium. Déglacer le plat au fond de volaille. Servir avec haricots verts et marrons dorés.', timer: '20 min de repos' },
        ],
        conseils: [
            'Le chapon (coq castré) a une chair incomparablement savoureuse. Commander chez un volailler au moins 2 semaines avant Noël.',
            'Sonde de cuisson conseillée : 72 °C à cœur dans la cuisse.',
        ],
    },

    'chartreuse-legumes': {
        name:       'Chartreuse de légumes',
        region:     'Île-de-France',
        anecdote:   'Ce mille-feuille de légumes de printemps aux couleurs vives était le plat favori des moines chartreux.',
        tags:       ["Printemps", "Entrée", "Élaboré"],
        prep:       '45 min',
        cuisson:    '30 min',
        personnes:  6,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: '', items: [
                { qty: '2', name: 'carottes', note: 'en tranches fines dans la longueur' },
                { qty: '2', name: 'courgettes', note: 'en tranches fines dans la longueur' },
                { qty: '3', name: 'feuilles de chou vert', note: 'blanchies' },
                { qty: '200 g', name: 'petits pois cuits', note: '' },
                { qty: '200 g', name: 'haricots verts fins', note: 'cuits' },
                { qty: '4', name: 'œufs', note: '' },
                { qty: '20 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '100 g', name: 'chèvre frais', note: 'ou ricotta' },
                { qty: '', name: 'sel, poivre, muscade', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire et tapisser', texte: 'Cuire les tranches de carottes et courgettes à la vapeur. Tapisser un moule à cake beurré avec les feuilles de chou, puis alterner les légumes en bandes colorées.' },
            { titre: 'Appareil', texte: 'Battre les œufs avec la crème, le chèvre émietté, sel, poivre et muscade. Verser sur les légumes.' },
            { titre: 'Cuire au bain-marie', texte: 'Couvrir de papier aluminium. Enfourner au bain-marie à 170 °C.', timer: '35-40 min au bain-marie' },
            { titre: 'Démouler et servir', texte: 'Laisser tiédir avant de démouler. Trancher et servir avec un coulis de tomates ou une vinaigrette aux herbes.' },
        ],
        conseils: [
            'La chartreuse tire son nom des moines chartreux qui cultivaient des légumes. Plat aussi beau que bon, parfait pour impressionner.',
        ],
    },

    'choucroute-garnie': {
        name:       'Choucroute garnie',
        region:     'Alsace',
        anecdote:   'La choucroute alsacienne réunit choux fermentés, charcuteries variées et pommes de terre dans un festin hivernal.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '20 min',
        cuisson:    '2 h',
        personnes:  8,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: 'La choucroute', items: [
                { qty: '1,5 kg', name: 'choucroute crue', note: 'bien rincée et essorée' },
                { qty: '75 cl', name: 'Riesling d\'Alsace', note: '' },
                { qty: '2', name: 'oignons', note: 'émincés' },
                { qty: '2 gousses', name: 'ail', note: '' },
                { qty: '10', name: 'baies de genièvre', note: '' },
                { qty: '5', name: 'clous de girofle', note: '' },
                { qty: '1 bouquet garni', name: 'thym, laurier', note: '' },
                { qty: '150 g', name: 'graisse d\'oie ou saindoux', note: '' },
            ]},
            { groupe: 'Les viandes', items: [
                { qty: '600 g', name: 'palette de porc fumée', note: '' },
                { qty: '400 g', name: 'lard fumé', note: 'en bloc' },
                { qty: '6', name: 'saucisses de Strasbourg ou Francfort', note: '' },
                { qty: '4', name: 'saucisses de Montbéliard', note: '' },
                { qty: '800 g', name: 'pommes de terre', note: 'en rondelles' },
            ]},
        ],
        etapes: [
            { titre: 'Faire revenir', texte: 'Faire fondre la graisse d\'oie dans une cocotte. Faire revenir les oignons. Ajouter la choucroute, l\'ail, les épices, le bouquet garni. Bien mélanger.' },
            { titre: 'Mouiller et cuire', texte: 'Enfoncer la palette et le lard dans la choucroute. Couvrir de Riesling et d\'un peu d\'eau. Couvrir hermétiquement et cuire à feu très doux.', timer: '1 h 30' },
            { titre: 'Ajouter les pommes de terre', texte: 'Poser les pommes de terre sur la choucroute. Poursuivre la cuisson.', timer: '30 min' },
            { titre: 'Réchauffer les saucisses', texte: '10 min avant de servir, plonger les saucisses dans la choucroute chaude sans faire bouillir pour qu\'elles chauffent uniformément.', timer: '10 min' },
            { titre: 'Dresser', texte: 'Dresser la choucroute sur un grand plat, disposer les viandes découpées et les saucisses par-dessus. Servir bien chaud avec moutarde à l\'ancienne.' },
        ],
        conseils: [
            'Bien rincer la choucroute pour adoucir l\'acidité. La choucroute se réchauffer admirablement le lendemain, encore meilleure.',
        ],
    },

    'choux-braises-lard': {
        name:       'Choux braisés au lard fumé',
        region:     'Alsace / Auvergne',
        anecdote:   'Le chou nouveau de l\'automne braisé avec lardons fumés et baies de genièvre est un plat terroir délicieux.',
        tags:       ["Automne", "Accompagnement", "Facile"],
        prep:       '15 min',
        cuisson:    '40 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (1 kg)', name: 'chou vert nouveau', note: 'en quartiers' },
                { qty: '200 g', name: 'lardons fumés', note: '' },
                { qty: '1', name: 'oignon', note: 'émincé' },
                { qty: '2 gousses', name: 'ail', note: '' },
                { qty: '5', name: 'baies de genièvre', note: 'légèrement écrasées' },
                { qty: '20 cl', name: 'bouillon de volaille', note: '' },
                { qty: '1 c.s.', name: 'saindoux ou beurre', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Faire revenir', texte: 'Faire revenir les lardons dans le saindoux ou beurre. Ajouter l\'oignon et l\'ail. Faire dorer légèrement.', timer: '5 min' },
            { titre: 'Braiser', texte: 'Ajouter les quartiers de chou, les baies de genièvre. Mouiller avec le bouillon. Saler, poivrer. Couvrir et cuire à feu doux jusqu\'à ce que le chou soit tendre mais encore légèrement ferme.', timer: '35-40 min' },
        ],
        conseils: [
            'Le chou braisé accompagne à merveille les gibiers d\'automne (perdrix, faisan) et les viandes fumées. Les baies de genièvre apportent une note résinée caractéristique.',
        ],
    },

    'civet-de-lievre': {
        name:       'Civet de lièvre',
        region:     'Champagne / Ardennes',
        anecdote:   'La saison de chasse en battue s\'ouvre. Le civet de lièvre mijoté au vin rouge est un plat de gibier classique.',
        tags:       ["Automne", "Plat principal", "Élaboré"],
        prep:       '30 min',
        cuisson:    '2 h',
        personnes:  6,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Le lièvre', items: [
                { qty: '1', name: 'lièvre découpé en morceaux', note: '(commander chez le giboyeur)' },
                { qty: '75 cl', name: 'vin rouge puissant', note: 'Cahors, Madiran ou Gevrey-Chambertin' },
                { qty: '1', name: 'oignon', note: 'piqué de clous de girofle' },
                { qty: '3 gousses', name: 'ail', note: '' },
                { qty: '1', name: 'bouquet garni', note: '' },
                { qty: '5', name: 'baies de genièvre', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
            { groupe: 'La sauce', items: [
                { qty: '150 g', name: 'lardons fumés', note: '' },
                { qty: '20', name: 'petits oignons grelots', note: '' },
                { qty: '200 g', name: 'champignons de Paris', note: '' },
                { qty: '2 c.s.', name: 'farine', note: '' },
                { qty: '1', name: 'foie du lièvre', note: 'pour lier la sauce' },
                { qty: '10 cl', name: 'crème fraîche', note: '' },
                { qty: '2 c.s.', name: 'huile', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner', texte: 'Placer les morceaux de lièvre dans le vin avec oignon, ail, bouquet garni, genièvre. Mariner 12 h au réfrigérateur.', timer: '12 h de marinade' },
            { titre: 'Saisir et mijoter', texte: 'Égoutter et sécher les morceaux. Les saisir dans l\'huile avec les lardons. Saupoudrer de farine. Mouiller avec la marinade filtrée. Porter à ébullition, écumer. Ajouter oignons grelots et champignons. Couvrir et mijoter.', timer: '1 h 30' },
            { titre: 'Lier la sauce', texte: 'Mixer le foie du lièvre avec la crème. Incorporer hors du feu à la sauce. Ne plus faire bouillir. Rectifier l\'assaisonnement.' },
        ],
        conseils: [
            'La liaison au foie est la signature du civet. Elle donne à la sauce son onctuosité et sa couleur brun-roux caractéristique.',
            'Servir avec des tagliatelles fraîches ou des pommes de terre vapeur.',
        ],
    },

    'clafoutis-abricots': {
        name:       'Clafoutis aux abricots',
        region:     'Auvergne / Limousin',
        anecdote:   '\'Variante de l\'été du clafoutis',
        tags:       ["Été", "Dessert", "Facile"],
        prep:       '15 min',
        cuisson:    '40 min',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '500 g', name: 'abricots frais', note: 'dénoyautés, coupés en deux' },
                { qty: '3', name: 'œufs', note: '' },
                { qty: '120 g', name: 'sucre', note: '' },
                { qty: '80 g', name: 'farine', note: '' },
                { qty: '30 cl', name: 'lait entier', note: '' },
                { qty: '10 cl', name: 'crème liquide', note: '' },
                { qty: '30 g', name: 'beurre doux', note: 'fondu' },
                { qty: '1 c.c.', name: 'extrait d\'amande amère', note: '' },
                { qty: '', name: 'sucre glace', note: 'pour servir' },
            ]},
        ],
        etapes: [
            { titre: 'Appareil', texte: 'Fouetter œufs et sucre jusqu\'au blanchiment. Incorporer la farine, puis lait, crème et beurre fondu. Ajouter l\'extrait d\'amande amère.' },
            { titre: 'Dresser et cuire', texte: 'Beurrer et sucrer un plat à gratin. Disposer les demi-abricots face bombée vers le bas. Verser l\'appareil. Enfourner à 180 °C.', timer: '35-40 min à 180 °C' },
            { titre: 'Servir', texte: 'Saupoudrer de sucre glace tiède. Se déguste tiède ou à température ambiante.' },
        ],
        conseils: [
            'L\'extrait d\'amande amère intensifie le goût de l\'abricot. Ne pas trop cuire : le clafoutis doit rester légèrement tremblotant au centre.',
        ],
    },

    'clafoutis-cerises': {
        name:       'Clafoutis aux cerises',
        region:     'Limousin',
        anecdote:   'Le clafoutis limousin aux cerises noires entières avec leurs noyaux est LE dessert de fin mai et juin.',
        tags:       ["Été", "Dessert", "Facile"],
        prep:       '15 min',
        cuisson:    '40 min',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '500 g', name: 'cerises noires', note: 'non dénoyautées (tradition)' },
                { qty: '3', name: 'œufs', note: '' },
                { qty: '120 g', name: 'sucre', note: '' },
                { qty: '80 g', name: 'farine', note: '' },
                { qty: '30 cl', name: 'lait entier', note: '' },
                { qty: '10 cl', name: 'crème liquide', note: '' },
                { qty: '30 g', name: 'beurre doux', note: 'fondu + pour le plat' },
                { qty: '1 sachet', name: 'sucre vanillé', note: '' },
                { qty: '', name: 'sucre glace', note: 'pour servir' },
            ]},
        ],
        etapes: [
            { titre: 'Appareil', texte: 'Fouetter œufs, sucre et sucre vanillé. Incorporer la farine, puis lait, crème et beurre fondu. Laisser reposer 15 min.', timer: '15 min de repos' },
            { titre: 'Cuire', texte: 'Beurrer et sucrer généreusement un plat à gratin. Disposer les cerises entières. Verser l\'appareil par-dessus. Enfourner à 180 °C.', timer: '35-40 min à 180 °C' },
            { titre: 'Servir', texte: 'Saupoudrer de sucre glace. Servir tiède, dans le plat.' },
        ],
        conseils: [
            'Le clafoutis aux cerises est traditionnellement préparé avec les noyaux : ils parfument le gâteau à la cuisson. Les amateurs enlèvent quand même les noyaux pour les enfants.',
        ],
    },

    'colcannon': {
        name:       'Colcannon (Saint-Patrick)',
        region:     'Irlande / Bretagne',
        anecdote:   '\'Pour la Saint-Patrick',
        tags:       ["Hiver", "Accompagnement", "Facile"],
        prep:       '15 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '800 g', name: 'pommes de terre farineuses', note: '' },
                { qty: '400 g', name: 'chou frisé', note: 'finement émincé' },
                { qty: '4', name: 'oignons nouveaux', note: 'ou 1 poireau, émincé' },
                { qty: '100 g', name: 'beurre demi-sel', note: '' },
                { qty: '15 cl', name: 'lait chaud', note: 'ou crème' },
                { qty: '', name: 'sel, poivre, muscade', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les pommes de terre', texte: 'Cuire les pommes de terre entières avec leur peau dans l\'eau bouillante salée. Éplucher à chaud.', timer: '25 min' },
            { titre: 'Cuire le chou', texte: 'Blanchir le chou 3 min à l\'eau bouillante. Égoutter. Faire fondre dans 30 g de beurre avec les oignons nouveaux 5 min.', timer: '8 min' },
            { titre: 'Assembler', texte: 'Écraser les pommes de terre au moulin. Incorporer le reste du beurre et le lait chaud. Ajouter le chou et les oignons. Bien mélanger. Assaisonner.' },
            { titre: 'Servir', texte: 'Dresser en dôme. Faire un puits au centre et déposer une noisette de beurre qui fond doucement.' },
        ],
        conseils: [
            'Plat national irlandais, traditionnellement servi à Halloween avec une pièce de monnaie cachée dedans. Simple et réconfortant.',
        ],
    },

    'confit-canard-sarladaises': {
        name:       'Confit de canard aux pommes de terre sarladaises',
        region:     'Périgord',
        anecdote:   'Le confit de canard cuit dans sa propre graisse avec les pommes sarladaises est un plat périgourdin complet.',
        tags:       ["Automne", "Plat principal", "Moyen"],
        prep:       '20 min',
        cuisson:    '1 h 30',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: 'Le canard confit', items: [
                { qty: '4', name: 'cuisses de canard confites', note: 'en conserve ou maison' },
            ]},
            { groupe: 'Pommes sarladaises', items: [
                { qty: '1 kg', name: 'pommes de terre', note: 'à chair ferme (Charlotte ou Ratte)' },
                { qty: '3 c.s.', name: 'graisse de canard', note: '(récupérée du confit)' },
                { qty: '3 gousses', name: 'ail', note: 'émincées' },
                { qty: '1 bouquet', name: 'persil plat', note: 'ciselé' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Pommes sarladaises', texte: 'Éplucher et trancher les pommes de terre en rondelles de 3 mm (mandoline ou couteau). Faire chauffer la graisse de canard dans une grande poêle. Faire revenir les pommes de terre à feu moyen en retournant régulièrement jusqu\'à coloration dorée.', timer: '30-40 min' },
            { titre: 'Ajouter ail et persil', texte: '5 min avant la fin de cuisson, ajouter l\'ail et le persil. Saler et poivrer généreusement.', timer: '5 min' },
            { titre: 'Réchauffer le confit', texte: 'Mettre les cuisses de canard dans un plat, côté peau vers le haut. Enfourner à 200 °C jusqu\'à ce que la peau soit croustillante et la chair bien chaude.', timer: '20-25 min à 200 °C' },
            { titre: 'Dresser', texte: 'Dresser la cuisse de canard sur un lit de pommes sarladaises. Servir immédiatement.' },
        ],
        conseils: [
            'Les pommes sarladaises ne se font qu\'à la graisse de canard, jamais à l\'huile. La graisse récupérée du confit est idéale.',
        ],
    },

    'confiture-tomates-vertes': {
        name:       'Confiture de tomates vertes',
        region:     'France entière',
        anecdote:   '\'Avant les premières gelées',
        tags:       ["Automne", "Condiment", "Facile"],
        prep:       '20 min',
        cuisson:    '1 h',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 kg', name: 'tomates vertes', note: 'non mûres' },
                { qty: '700 g', name: 'sucre cristallisé', note: '' },
                { qty: '2', name: 'citrons non traités', note: 'jus et zeste' },
                { qty: '1 c.c.', name: 'vanille en poudre', note: 'ou 1 gousse' },
                { qty: '1 pincée', name: 'cannelle', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Macérer', texte: 'Couper les tomates vertes en dés. Les mélanger avec le sucre, le jus et zeste des citrons. Laisser macérer une nuit.', timer: '12 h de macération' },
            { titre: 'Cuire', texte: 'Verser dans une bassine à confiture ou une grande casserole. Ajouter la vanille et la cannelle. Cuire à feu vif en remuant régulièrement, écumer soigneusement.', timer: '45-60 min' },
            { titre: 'Vérifier et mettre en pots', texte: 'Vérifier la prise : une goutte sur assiette froide doit figer. Verser en pots stérilisés, fermer et retourner jusqu\'au refroidissement.' },
        ],
        conseils: [
            'Cette confiture originale est idéale en fin de saison pour utiliser les tomates qui n\'ont pas eu le temps de mûrir. Un régal sur du fromage blanc ou du pain de campagne.',
        ],
    },

    'coq-au-vin-jaune': {
        name:       'Coq au vin jaune',
        region:     'Franche-Comté / Jura',
        anecdote:   '\'Le vin jaune du Jura',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '30 min',
        cuisson:    '1 h 30',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (1,8 kg)', name: 'poulet ou coq fermier', note: 'découpé en 8 morceaux' },
                { qty: '1 bouteille', name: 'Vin Jaune du Jura', note: 'ou Savagnin' },
                { qty: '300 g', name: 'morilles fraîches ou séchées', note: 'réhydratées' },
                { qty: '20 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '2 gousses', name: 'ail', note: '' },
                { qty: '30 g', name: 'beurre', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Saisir le poulet', texte: 'Faire dorer les morceaux de poulet dans le beurre sur toutes les faces. Réserver. Faire suer les échalotes et l\'ail.', timer: '10 min' },
            { titre: 'Déglacer et cuire', texte: 'Remettre le poulet. Verser les 3/4 du vin jaune. Ajouter les morilles. Couvrir et mijoter à feu doux.', timer: '45-60 min' },
            { titre: 'Finir la sauce', texte: 'Retirer le poulet. Ajouter la crème fraîche et le reste du vin jaune dans la cocotte. Réduire 10 min à feu vif jusqu\'à obtenir une sauce onctueuse. Rectifier. Remettre le poulet.', timer: '10 min' },
        ],
        conseils: [
            'Le vin jaune (né sous voile dans les caves du Jura) apporte des notes de noix et d\'épices incomparables. Ne pas substituer par un autre vin.',
        ],
    },

    'coquilles-saint-jacques': {
        name:       'Coquilles Saint-Jacques au beurre blanc',
        region:     'Bretagne / Normandie',
        anecdote:   'Les coquilles Saint-Jacques de la baie de Saint-Brieuc sont à leur sommet en hiver et début de printemps.',
        tags:       ["Hiver", "Entrée", "Moyen"],
        prep:       '20 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '12', name: 'noix de Saint-Jacques avec corail', note: '' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '20 cl', name: 'vin blanc sec', note: '' },
                { qty: '20 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '50 g', name: 'beurre doux', note: '' },
                { qty: '200 g', name: 'champignons de Paris', note: 'émincés' },
                { qty: '', name: 'sel, poivre, muscade', note: '' },
                { qty: '', name: 'chapelure', note: 'pour gratiner' },
            ]},
        ],
        etapes: [
            { titre: 'Duxelles de champignons', texte: 'Faire revenir les échalotes dans 20 g de beurre. Ajouter les champignons, cuire jusqu\'à évaporation complète du jus. Déglacer au vin blanc, réduire de moitié.', timer: '10 min' },
            { titre: 'Lier à la crème', texte: 'Ajouter la crème fraîche. Laisser réduire jusqu\'à consistance nappante. Assaisonner.' },
            { titre: 'Poêler les Saint-Jacques', texte: 'Saisir les noix dans 30 g de beurre très chaud, 1 min par face. Elles doivent rester nacrées à cœur. Saler, poivrer.', timer: '2 min' },
            { titre: 'Gratiner', texte: 'Disposer les noix dans les coquilles. Napper de sauce aux champignons. Saupoudrer de chapelure. Passer sous le gril 3-4 min.', timer: '3-4 min sous le gril' },
        ],
        conseils: [
            'Ne jamais trop cuire les Saint-Jacques : elles doivent rester légèrement nacrées à cœur. La surcuisson les rend caoutchouteuses et sèches.',
        ],
    },

    'cote-boeuf-champignons': {
        name:       'Côte de bœuf aux champignons poêlés',
        region:     'Bourgogne / Charolais',
        anecdote:   'Le bœuf charolais de septembre avec les champignons sauvages de la forêt : le duo gagnant de l\'automne.',
        tags:       ["Toute l'année", "Plat principal", "Facile"],
        prep:       '10 min',
        cuisson:    '20 min',
        personnes:  3,
        difficulte: 'Facile',
        ingredients: [
            { groupe: 'La côte de bœuf', items: [
                { qty: '1 (1 kg)', name: 'côte de bœuf', note: 'maturée, 4 cm d\'épaisseur' },
                { qty: '2 c.s.', name: 'huile neutre', note: '' },
                { qty: '30 g', name: 'beurre', note: '' },
                { qty: '2 branches', name: 'thym', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'en chemise écrasées' },
            ]},
            { groupe: 'Poêlée de champignons', items: [
                { qty: '400 g', name: 'cèpes ou champignons forestiers', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'émincées' },
                { qty: '1 bouquet', name: 'persil plat', note: '' },
                { qty: '30 g', name: 'beurre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Sortir la viande', texte: 'Sortir la côte de bœuf 1 h avant. La sécher soigneusement. Saler généreusement.', timer: '1 h à température ambiante' },
            { titre: 'Saisir', texte: 'Chauffer l\'huile dans une grande poêle en fonte à feu vif jusqu\'à légère fumée. Saisir la côte 3 min par face pour bien former la croûte. Ajouter beurre, ail et thym, arroser 2 min.', timer: '8-10 min' },
            { titre: 'Finir au four', texte: 'Enfourner à 180 °C, cuire selon l\'épaisseur. Viser 52 °C à cœur pour saignant, 57 °C pour à point.', timer: '8-10 min à 180 °C' },
            { titre: 'Reposer', texte: 'Couvrir de papier aluminium et reposer autant de temps que la cuisson.', timer: '10 min de repos' },
            { titre: 'Champignons', texte: 'Poêler les champignons au beurre à feu vif. Ajouter l\'ail et le persil en fin de cuisson. Saler, poivrer.' },
        ],
        conseils: [
            'Le repos est obligatoire : la viande se détend et les jus se redistribuent. Couper toujours perpendiculairement à la fibre.',
        ],
    },

    'cote-boeuf-feu-de-bois': {
        name:       'Côte de bœuf au feu de bois',
        region:     'Bretagne / Bourgogne',
        anecdote:   '\'En cette date de souvenir solennel',
        tags:       ["Été", "Plat principal", "Facile"],
        prep:       '10 min',
        cuisson:    '20 min',
        personnes:  3,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (1 kg)', name: 'côte de bœuf', note: 'à température ambiante' },
                { qty: '', name: 'fleur de sel, poivre du moulin', note: '' },
                { qty: '2 branches', name: 'romarin', note: '' },
                { qty: '3 gousses', name: 'ail', note: 'en chemise' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer les braises', texte: 'Attendre que les braises soient bien incandescentes et recouvertes d\'une fine pellicule de cendre blanche. Pas de flamme vive.' },
            { titre: 'Griller', texte: 'Déposer la côte sur la grille à bonne hauteur. Cuire 5-7 min par face selon l\'épaisseur en la retournant une seule fois. Déposer le romarin et l\'ail sur la grille à côté pour les effluves.', timer: '10-14 min' },
            { titre: 'Reposer et servir', texte: 'Laisser reposer 10 min sur une planche de bois. Découper en tranches épaisses perpendiculaires à la fibre. Fleur de sel et poivre du moulin au moment de servir.', timer: '10 min de repos' },
        ],
        conseils: [
            'Le feu de bois de chêne ou de hêtre donne le meilleur goût. Éviter le bois résineux (pin) qui communique un goût âcre.',
        ],
    },

    'cotelettes-agneau-bretonne': {
        name:       'Côtelettes d\'agneau à la bretonne',
        region:     'Bretagne',
        anecdote:   'Les haricots bretons cuits à la graisse d\'agneau accompagnent les côtelettes dans ce plat roboratif.',
        tags:       ["Printemps", "Plat principal", "Facile"],
        prep:       '10 min',
        cuisson:    '10 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '8', name: 'côtelettes d\'agneau de pré-salé', note: '' },
                { qty: '3 gousses', name: 'ail', note: 'écrasées' },
                { qty: '1 bouquet', name: 'persil plat', note: 'ciselé' },
                { qty: '1 c.c.', name: 'herbes de Provence', note: '' },
                { qty: '3 c.s.', name: 'beurre demi-sel breton', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Frotter les côtelettes avec l\'ail écrasé. Assaisonner de sel, poivre et herbes de Provence.' },
            { titre: 'Cuire', texte: 'Faire fondre le beurre dans une poêle bien chaude. Cuire les côtelettes 3-4 min par face selon l\'épaisseur. Elles doivent rester rosées à cœur.', timer: '6-8 min' },
            { titre: 'Arroser et servir', texte: 'En fin de cuisson, ajouter le persil ciselé dans la poêle. Arroser les côtelettes du beurre parfumé. Servir aussitôt avec des haricots verts et des flageolets.' },
        ],
        conseils: [
            'L\'agneau de pré-salé (Mont-Saint-Michel, baie de Somme) a une chair naturellement salée par les herbes marines. Ne pas trop saler.',
        ],
    },

    'cotelettes-agneau-grillees': {
        name:       'Côtelettes d\'agneau grillées aux herbes',
        region:     'Provence',
        anecdote:   '\'Les côtelettes d\'agneau de Sisteron',
        tags:       ["Été", "Plat principal", "Facile"],
        prep:       '10 min',
        cuisson:    '10 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '8', name: 'côtelettes d\'agneau', note: '' },
                { qty: '1', name: 'citron', note: 'jus' },
                { qty: '4 branches', name: 'romarin frais', note: '' },
                { qty: '3 gousses', name: 'ail', note: 'émincées' },
                { qty: '4 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner', texte: 'Mélanger huile d\'olive, jus de citron, ail et romarin. Enrober les côtelettes. Mariner au moins 30 min.', timer: '30 min' },
            { titre: 'Griller', texte: 'Cuire sur barbecue ou grille bien chaude 3-4 min par face. Elles doivent être bien marquées et rester rosées à cœur.', timer: '6-8 min' },
            { titre: 'Reposer', texte: 'Laisser reposer 3 min avant de servir. Accompagner de tzatziki ou d\'une salade de tomates.', timer: '3 min de repos' },
        ],
        conseils: [
            'Les côtelettes d\'agneau grillées sont l\'une des meilleures choses qui soit. La clé : une belle grille très chaude pour la marque et un cœur rosé.',
        ],
    },

    'cotes-marcassin-airelles': {
        name:       'Côtes de marcassin aux airelles',
        region:     'Alsace / Champagne-Ardenne',
        anecdote:   'Le jeune marcassin est tendre et délicat. Ses côtes grillées avec airelles et poivre de Sichuan.',
        tags:       ["Automne", "Plat principal", "Élaboré"],
        prep:       '20 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'côtes de marcassin', note: '' },
                { qty: '200 g', name: 'airelles fraîches ou surgelées', note: '' },
                { qty: '2 c.s.', name: 'sucre', note: '' },
                { qty: '10 cl', name: 'vin rouge corsé', note: '' },
                { qty: '15 cl', name: 'fond de gibier', note: 'ou fond de veau' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '30 g', name: 'beurre', note: '' },
                { qty: '1 c.s.', name: 'gelée de groseilles', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Sauce aux airelles', texte: 'Faire revenir les échalotes dans le beurre. Ajouter les airelles et le sucre. Verser le vin et le fond. Laisser réduire et épaissir 15 min. Ajouter la gelée de groseilles. Réserver.', timer: '15 min' },
            { titre: 'Cuire les côtes', texte: 'Assaisonner les côtes. Les saisir dans du beurre bien chaud 3-4 min par face. Laisser reposer 3 min.', timer: '8 min' },
            { titre: 'Dresser', texte: 'Napper les côtes de sauce aux airelles. Accompagner de chou rouge braisé et de spätzle ou de purée de pommes de terre.' },
        ],
        conseils: [
            'Le marcassin est le sanglier de moins d\'un an : sa chair est plus tendre et plus fine. Les airelles équilibrent la puissance du gibier avec leur acidité.',
        ],
    },

    'cotes-porc-miel-thym': {
        name:       'Côtes de porc grillées au miel et thym',
        region:     'Provence',
        anecdote:   'Le thym sauvage des collines provençales avec le miel de lavande parfument cette cuisson simple sur les braises.',
        tags:       ["Toute l'année", "Plat principal", "Facile"],
        prep:       '10 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'côtes de porc dans l\'échine', note: 'épaisses' },
                { qty: '2 c.s.', name: 'miel liquide', note: 'de fleurs' },
                { qty: '2 c.s.', name: 'moutarde de Dijon', note: '' },
                { qty: '4 branches', name: 'thym frais', note: '' },
                { qty: '2 gousses', name: 'ail', note: 'écrasées' },
                { qty: '2 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Marinade miel-thym', texte: 'Mélanger miel, moutarde, ail, thym effeuillé et huile d\'olive. Enrober généreusement les côtes de porc. Laisser mariner 30 min minimum.', timer: '30 min' },
            { titre: 'Cuire', texte: 'Cuire à la poêle ou au barbecue à feu moyen 8-10 min par face. Le miel caramélise et forme une belle croûte dorée.', timer: '15-20 min' },
            { titre: 'Reposer et servir', texte: 'Laisser reposer 3 min. Servir avec des pommes de terre sautées ou une salade verte.', timer: '3 min' },
        ],
        conseils: [
            'Surveiller attentivement la cuisson : le miel peut brûler rapidement à trop haute température. Un feu moyen est préférable.',
        ],
    },

    'cotes-porc-pommes-cidre': {
        name:       'Côtes de porc braisées aux pommes',
        region:     'Normandie / Bretagne',
        anecdote:   'Le porc breton avec les pommes reinettes de Normandie dans une sauce au cidre : le mariage du terroir.',
        tags:       ["Automne", "Plat principal", "Facile"],
        prep:       '15 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'côtes de porc', note: '' },
                { qty: '3', name: 'pommes Reinette', note: 'évidées et coupées en quartiers' },
                { qty: '20 cl', name: 'cidre brut normand', note: '' },
                { qty: '20 cl', name: 'crème fraîche', note: '' },
                { qty: '1', name: 'oignon', note: 'émincé' },
                { qty: '30 g', name: 'beurre demi-sel', note: '' },
                { qty: '1 c.s.', name: 'calvados', note: 'facultatif' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Dorer la viande', texte: 'Faire dorer les côtes de porc dans le beurre, 3 min par face. Réserver. Faire fondre l\'oignon dans la même poêle.' },
            { titre: 'Cuire les pommes', texte: 'Ajouter les quartiers de pommes. Les faire dorer légèrement. Flamber au calvados si souhaité.' },
            { titre: 'Mijoter', texte: 'Remettre les côtes. Verser le cidre. Couvrir et mijoter 15 min à feu doux.', timer: '15 min' },
            { titre: 'Finir la sauce', texte: 'Retirer les côtes. Ajouter la crème dans le jus de cuisson, réduire 3 min. Napper les côtes et les pommes. Servir avec des pommes de terre vapeur.', timer: '3 min' },
        ],
        conseils: [
            'La Reinette ou la Golden tient bien à la cuisson. La Granny Smith apportera une note plus acidulée qui contraste agréablement avec le gras du porc.',
        ],
    },

    'cotes-sanglier-airelles': {
        name:       'Côtes de sanglier aux airelles',
        region:     'Lorraine / Alsace',
        anecdote:   'La saison de chasse ferme fin novembre. Les dernières pièces de sanglier se cuisinent aux airelles et genièvre.',
        tags:       ["Automne", "Plat principal", "Élaboré"],
        prep:       '20 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'côtes de sanglier', note: 'marinées la veille' },
                { qty: '75 cl', name: 'vin rouge corsé', note: 'pour la marinade' },
                { qty: '2', name: 'carottes', note: 'en dés' },
                { qty: '2', name: 'oignons', note: 'en dés' },
                { qty: 'bouquet garni', name: 'thym, laurier, genièvre', note: '' },
                { qty: '200 g', name: 'airelles', note: '' },
                { qty: '2 c.s.', name: 'confiture d\'airelles', note: 'ou gelée de groseilles' },
                { qty: '15 cl', name: 'fond de gibier', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner', texte: 'Placer les côtes dans le vin rouge avec carottes, oignons, bouquet garni et genièvre. Couvrir et réfrigérer 12 h.', timer: '12 h de marinade' },
            { titre: 'Saisir et cuire', texte: 'Égoutter et sécher les côtes. Les saisir vivement dans du beurre sur les deux faces. Déglacer avec un peu de marinade filtrée. Cuire à couvert à feu moyen.', timer: '15-20 min' },
            { titre: 'Sauce gibier-airelles', texte: 'Faire réduire 20 cl de marinade filtrée avec le fond de gibier. Ajouter les airelles et la confiture. Laisser épaissir. Rectifier l\'assaisonnement.', timer: '10 min' },
            { titre: 'Dresser', texte: 'Napper les côtes de sauce. Accompagner de purée de céleri ou de marrons et de chou rouge braisé.' },
        ],
        conseils: [
            'La marinade attendrit la chair du sanglier et atténue son goût sauvage. Ne pas jeter la marinade : elle sert de base à la sauce.',
        ],
    },

    'cotes-veau-morilles': {
        name:       'Côtes de veau aux morilles',
        region:     'Franche-Comté',
        anecdote:   'Les morilles printanières du Jura sont l\'un des trésors mycologiques les plus recherchés de France.',
        tags:       ["Printemps", "Plat principal", "Élaboré"],
        prep:       '15 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'côtes de veau première', note: 'épaisses' },
                { qty: '30 g', name: 'morilles séchées', note: 'réhydratées 30 min dans l\'eau tiède' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '10 cl', name: 'vin jaune ou porto blanc', note: '' },
                { qty: '25 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '30 g', name: 'beurre', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les côtes', texte: 'Faire dorer les côtes dans le beurre 4-5 min par face. Elles doivent rester rosées. Réserver au chaud.', timer: '8-10 min' },
            { titre: 'Sauce morilles', texte: 'Faire suer les échalotes dans la même poêle. Ajouter les morilles égouttées (conserver le liquide de trempage filtré). Déglacer au vin jaune.', timer: '5 min' },
            { titre: 'Finir', texte: 'Ajouter la crème et 5 cl du liquide de trempage des morilles filtré. Laisser réduire jusqu\'à consistance onctueuse. Rectifier.', timer: '5 min' },
            { titre: 'Dresser', texte: 'Napper les côtes de sauce aux morilles. Accompagner de tagliatelles fraîches ou de riz.' },
        ],
        conseils: [
            'Le liquide de trempage des morilles est très parfumé mais souvent sableux. Le filtrer soigneusement à travers un linge fin.',
        ],
    },

    'courgettes-farcies-chevre': {
        name:       'Courgettes farcies au chèvre et basilic',
        region:     'Provence',
        anecdote:   '\'Les courgettes rondes de Nice farcies au chèvre',
        tags:       ["Été", "Plat principal", "Facile"],
        prep:       '20 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'courgettes rondes', note: 'ou 4 longues coupées en deux' },
                { qty: '200 g', name: 'fromage de chèvre frais', note: '' },
                { qty: '2', name: 'œufs', note: '' },
                { qty: '1 bouquet', name: 'basilic frais', note: '' },
                { qty: '1 gousse', name: 'ail', note: '' },
                { qty: '50 g', name: 'parmesan râpé', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Vider les courgettes', texte: 'Couper un chapeau aux courgettes rondes ou les couper en deux pour les longues. Évider délicatement avec une cuillère, conserver la pulpe.' },
            { titre: 'Préparer la farce', texte: 'Hacher grossièrement la pulpe et la faire revenir 5 min à la poêle pour évaporer l\'eau. Mélanger avec le chèvre écrasé, les œufs battus, l\'ail haché, le basilic et la moitié du parmesan. Assaisonner.' },
            { titre: 'Farcir et cuire', texte: 'Farcir les courgettes. Parsemer du reste de parmesan. Placer dans un plat huilé. Enfourner à 180 °C.', timer: '25-30 min à 180 °C' },
        ],
        conseils: [
            'Bien faire revenir la pulpe de courgette pour éliminer l\'eau : sinon la farce serait trop liquide. Peut se servir tiède ou à température ambiante.',
        ],
    },

    'creme-brulee-vanille': {
        name:       'Crème brûlée à la vanille de Tahiti',
        region:     'France entière',
        anecdote:   'La crème brûlée dorée au chalumeau avec la vanille de Tahiti est le dessert d\'élégance de l\'automne français.',
        tags:       ["Toute l'année", "Dessert", "Moyen"],
        prep:       '15 min',
        cuisson:    '40 min',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '60 cl', name: 'crème liquide entière', note: '' },
                { qty: '6', name: 'jaunes d\'œufs', note: '' },
                { qty: '100 g', name: 'sucre semoule', note: '' },
                { qty: '2', name: 'gousses de vanille', note: 'fendues et grattées' },
                { qty: '6 c.s.', name: 'cassonade', note: 'pour brûler' },
            ]},
        ],
        etapes: [
            { titre: 'Infuser', texte: 'Chauffer la crème avec les gousses de vanille et leurs graines sans faire bouillir. Laisser infuser 15 min hors du feu.', timer: '15 min d\'infusion' },
            { titre: 'Appareil', texte: 'Fouetter les jaunes avec le sucre jusqu\'au blanchiment. Verser la crème chaude (gousses retirées) en filet sur les jaunes en fouettant doucement. Écumer si nécessaire.' },
            { titre: 'Cuire au bain-marie', texte: 'Verser dans des ramequins. Enfourner au bain-marie à 100 °C. La crème est cuite quand elle est prise sur les bords mais encore légèrement tremblotante au centre. Réfrigérer.', timer: '40-50 min à 100 °C' },
            { titre: 'Brûler le caramel', texte: 'Au moment de servir, saupoudrer de cassonade. Brûler au chalumeau de cuisine en faisant des cercles réguliers jusqu\'à obtenir une croûte caramel dorée.' },
        ],
        conseils: [
            'La basse température (100 °C) est le secret d\'une crème brûlée soyeuse. Trop chaude, elle serait granuleuse.',
        ],
    },

    'creme-celeri-noix': {
        name:       'Crème de céleri rave aux noix',
        region:     'France entière',
        anecdote:   '\'Le céleri rave',
        tags:       ["Automne", "Entrée", "Facile"],
        prep:       '15 min',
        cuisson:    '25 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (500 g)', name: 'céleri-rave', note: 'épluché et coupé en dés' },
                { qty: '1', name: 'pomme Granny Smith', note: 'épluchée, en dés' },
                { qty: '1', name: 'oignon', note: 'émincé' },
                { qty: '1 litre', name: 'bouillon de volaille', note: '' },
                { qty: '15 cl', name: 'crème fraîche', note: '' },
                { qty: '50 g', name: 'cerneaux de noix', note: 'pour la garniture' },
                { qty: '2 c.s.', name: 'huile de noix', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire', texte: 'Faire revenir l\'oignon dans l\'huile de noix. Ajouter le céleri et la pomme. Couvrir de bouillon et cuire jusqu\'à tendreté.', timer: '20 min' },
            { titre: 'Mixer', texte: 'Mixer finement. Ajouter la crème, rectifier la consistance avec le bouillon. Assaisonner.' },
            { titre: 'Servir', texte: 'Verser dans les bols. Garnir de cerneaux de noix concassés et d\'un filet d\'huile de noix.' },
        ],
        conseils: [
            'L\'huile de noix apporte une dimension aromatique précieuse. La pomme Granny Smith équilibre l\'amertume du céleri avec son acidité.',
        ],
    },

    'creme-lentilles-corail': {
        name:       'Crème de lentilles corail au curry',
        region:     'Sud-Ouest / fusion',
        anecdote:   'Les lentilles corail arrivent en France avec les épices du monde. Un plat de Carême riche en protéines végétales.',
        tags:       ["Automne", "Entrée", "Facile"],
        prep:       '10 min',
        cuisson:    '25 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '200 g', name: 'lentilles corail', note: '' },
                { qty: '1', name: 'oignon', note: 'émincé' },
                { qty: '1', name: 'carotte', note: 'en dés' },
                { qty: '2 gousses', name: 'ail', note: '' },
                { qty: '1 c.c.', name: 'cumin', note: '' },
                { qty: '1 c.c.', name: 'coriandre en poudre', note: '' },
                { qty: '1 pincée', name: 'piment doux', note: '' },
                { qty: '1 boîte', name: 'lait de coco', note: '40 cl' },
                { qty: '1 litre', name: 'bouillon de légumes', note: '' },
                { qty: '1', name: 'citron vert', note: 'jus' },
                { qty: '', name: 'sel, huile d\'olive', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Faire revenir', texte: 'Faire revenir l\'oignon, l\'ail et la carotte dans l\'huile d\'olive. Ajouter les épices. Cuire 2 min.' },
            { titre: 'Cuire les lentilles', texte: 'Ajouter les lentilles corail (pas besoin de trempage), le bouillon et le lait de coco. Cuire jusqu\'à ce que les lentilles soient fondantes.', timer: '20 min' },
            { titre: 'Mixer et assaisonner', texte: 'Mixer finement. Ajouter le jus de citron vert. Rectifier la consistance et l\'assaisonnement. Servir avec une cuillerée de crème fraîche et de coriandre fraîche.' },
        ],
        conseils: [
            'Les lentilles corail ne nécessitent aucun trempage et cuisent très rapidement. Cette crème est nourrissante et économique.',
        ],
    },

    'creme-topinambour-truffe': {
        name:       'Crème de topinambour à la truffe',
        region:     'Île-de-France / Périgord',
        anecdote:   'Le topinambour fin d\'automne avec quelques copeaux de truffe noire du Périgord : la paire inattendue.',
        tags:       ["Hiver", "Entrée", "Élaboré"],
        prep:       '20 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: '', items: [
                { qty: '600 g', name: 'topinambours', note: 'épluchés et coupés en dés' },
                { qty: '1', name: 'oignon', note: '' },
                { qty: '1 litre', name: 'bouillon de volaille', note: '' },
                { qty: '20 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '1 petite', name: 'truffe noire du Périgord (15-20 g)', note: 'ou huile de truffe' },
                { qty: '30 g', name: 'beurre', note: '' },
                { qty: '', name: 'sel, poivre blanc', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les topinambours', texte: 'Faire revenir l\'oignon dans le beurre. Ajouter les topinambours. Couvrir de bouillon. Cuire jusqu\'à tendreté complète.', timer: '25 min' },
            { titre: 'Mixer et crémer', texte: 'Mixer très finement. Passer au chinois pour une texture soyeuse. Ajouter la crème, rectifier. La soupe doit être veloutée.' },
            { titre: 'Incorporer la truffe', texte: 'Râper ou émincer finement la truffe. En réserver quelques lamelles pour la garniture. Incorporer le reste dans la soupe chaude. Laisser infuser 5 min hors du feu.', timer: '5 min d\'infusion' },
            { titre: 'Servir', texte: 'Verser dans des assiettes chaudes. Garnir de lamelles de truffe et d\'un filet de crème.' },
        ],
        conseils: [
            'Le topinambour est souvent sous-estimé. Sa saveur d\'artichaut se marie divinement avec la truffe. Utiliser une truffe fraîche en saison (décembre-mars).',
        ],
    },

    'crepes-chandeleur': {
        name:       'Crêpes à la Chandeleur',
        region:     'Bretagne',
        anecdote:   'La Chandeleur célèbre la lumière revenue. On tient une pièce d\'or en retournant la crêpe pour s\'assurer prospérité.',
        tags:       ["Hiver", "Dessert", "Facile"],
        prep:       '15 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '250 g', name: 'farine de froment', note: '' },
                { qty: '3', name: 'œufs', note: '' },
                { qty: '50 cl', name: 'lait entier', note: '' },
                { qty: '2 c.s.', name: 'beurre fondu', note: '+ pour la poêle' },
                { qty: '1 c.s.', name: 'sucre', note: '' },
                { qty: '1 pincée', name: 'sel', note: '' },
                { qty: '1 c.s.', name: 'rhum brun ou fleur d\'oranger', note: 'facultatif' },
            ]},
        ],
        etapes: [
            { titre: 'Pâte', texte: 'Mélanger farine, sucre et sel. Creuser un puits, ajouter les œufs. Incorporer le lait progressivement en fouettant pour éviter les grumeaux. Ajouter beurre fondu et rhum. Laisser reposer.', timer: '1 h de repos' },
            { titre: 'Cuire les crêpes', texte: 'Chauffer une poêle à crêpes beurrée à feu moyen-vif. Verser une petite louche de pâte, incliner pour étaler. Cuire 1 min 30 jusqu\'à ce que les bords se décollent, retourner et cuire encore 30 secondes.', timer: '2 min par crêpe' },
            { titre: 'Servir', texte: 'Servir avec beurre et sucre, confiture, Nutella ou sucre-citron. La tradition : tenir une pièce d\'or dans la main gauche tout en faisant sauter la crêpe de la main droite.' },
        ],
        conseils: [
            'Le repos de la pâte est essentiel : le gluten se détend et les crêpes sont plus moelleuses. La première crêpe est toujours ratée — c\'est la crêpe du cuisinier.',
        ],
    },

    'crepes-suzette': {
        name:       'Crêpes Suzette',
        region:     'Bretagne / Paris',
        anecdote:   '\'À l\'approche de la Chandeleur',
        tags:       ["Hiver", "Dessert", "Élaboré"],
        prep:       '30 min',
        cuisson:    '30 min',
        personnes:  4,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'Crêpes (recette de base)', items: [
                { qty: '250 g', name: 'farine', note: '' },
                { qty: '3', name: 'œufs', note: '' },
                { qty: '50 cl', name: 'lait', note: '' },
                { qty: '30 g', name: 'beurre fondu', note: '' },
            ]},
            { groupe: 'Beurre Suzette', items: [
                { qty: '100 g', name: 'beurre doux', note: 'ramolli' },
                { qty: '80 g', name: 'sucre glace', note: '' },
                { qty: '2', name: 'oranges non traitées', note: 'zeste et jus' },
                { qty: '1', name: 'citron non traité', note: 'zeste' },
                { qty: '5 cl', name: 'Grand Marnier ou Cointreau', note: '' },
            ]},
            { groupe: 'Flambée', items: [
                { qty: '5 cl', name: 'Grand Marnier ou cognac', note: 'pour flamber' },
            ]},
        ],
        etapes: [
            { titre: 'Crêpes', texte: 'Préparer une pâte à crêpes classique. Laisser reposer 1 h. Cuire des crêpes fines. Réserver.', timer: '1 h de repos' },
            { titre: 'Beurre Suzette', texte: 'Travailler le beurre ramolli avec le sucre glace, les zestes d\'orange et de citron, le jus d\'orange et le Grand Marnier. Réfrigérer.' },
            { titre: 'Flamber et servir', texte: 'Dans une grande poêle, faire fondre le beurre Suzette. Plier les crêpes en quatre et les faire chauffer dans le beurre. Verser le Grand Marnier chauffé, flamber en penchant légèrement la poêle. Servir immédiatement flambé.', timer: '5 min' },
        ],
        conseils: [
            'La légende veut que la crêpe Suzette fut inventée accidentellement en 1895 par Auguste Escoffier pour le Prince de Galles. Le flambage est spectaculaire mais surtout parfumé.',
        ],
    },

    'crostinis-legumes-grilles': {
        name:       'Crostinis aux légumes grillés',
        region:     'Provence / Côte d\'Azur',
        anecdote:   'Les légumes du soleil grillés sur pain croustillant frotté à l\'ail sont un en-cas parfait pour l\'apéritif.',
        tags:       ["Été", "Entrée", "Facile"],
        prep:       '20 min',
        cuisson:    '15 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1', name: 'baguette de campagne', note: 'en tranches épaisses biseautées' },
                { qty: '1', name: 'courgette', note: 'en lanières' },
                { qty: '1', name: 'poivron rouge', note: 'en lanières' },
                { qty: '1', name: 'aubergine', note: 'en tranches' },
                { qty: '100 g', name: 'ricotta', note: '' },
                { qty: '1 bouquet', name: 'basilic frais', note: '' },
                { qty: '4 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre, ail', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Griller les légumes', texte: 'Badigeonner les légumes d\'huile d\'olive, sel et poivre. Griller à la plancha ou au gril du four jusqu\'à légère coloration.', timer: '10-12 min' },
            { titre: 'Griller le pain', texte: 'Griller les tranches de baguette. Frotter avec de l\'ail cru.' },
            { titre: 'Assembler', texte: 'Tartiner chaque crostini de ricotta. Déposer les légumes grillés. Garnir de feuilles de basilic et d\'un filet d\'huile d\'olive.' },
        ],
        conseils: [
            'Les crostini sont parfaits à l\'apéritif. Varier les garnitures : tapenade + poivrons, ricotta + tomates séchées, pesto + courgettes.',
        ],
    },

    'crumble-abricots-amandes': {
        name:       'Crumble abricots amandes',
        region:     'Provence / Roussillon',
        anecdote:   '\'Les derniers abricots de la saison',
        tags:       ["Été", "Dessert", "Facile"],
        prep:       '15 min',
        cuisson:    '35 min',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: 'Les fruits', items: [
                { qty: '800 g', name: 'abricots mûrs', note: 'dénoyautés, coupés en deux' },
                { qty: '3 c.s.', name: 'sucre', note: '' },
                { qty: '1 c.s.', name: 'jus de citron', note: '' },
            ]},
            { groupe: 'Le crumble', items: [
                { qty: '150 g', name: 'farine', note: '' },
                { qty: '100 g', name: 'beurre froid', note: 'en dés' },
                { qty: '80 g', name: 'cassonade', note: '' },
                { qty: '80 g', name: 'amandes effilées', note: '' },
                { qty: '1 pincée', name: 'sel', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer les fruits', texte: 'Mélanger les abricots avec le sucre et le jus de citron. Verser dans un plat à gratin beurré.' },
            { titre: 'Crumble', texte: 'Mélanger farine, cassonade, sel et beurre froid du bout des doigts jusqu\'à obtenir une texture sableuse grossière. Incorporer les amandes effilées.' },
            { titre: 'Cuire', texte: 'Répartir le crumble sur les fruits. Enfourner à 180 °C jusqu\'à ce que la surface soit dorée et les fruits bouillonnants.', timer: '30-35 min à 180 °C' },
            { titre: 'Servir', texte: 'Déguster tiède avec une boule de glace vanille ou de la crème fraîche.' },
        ],
        conseils: [
            'Ne pas trop travailler le crumble : la texture doit rester irrégulière et sableuse. C\'est ce qui lui donne son croustillant.',
        ],
    },

    'crumble-pommes-caramel': {
        name:       'Crumble de pommes et caramel au beurre salé',
        region:     'Bretagne / Normandie',
        anecdote:   'Les premières pommes de l\'automne en crumble avec caramel au beurre salé breton : un dessert chaleureux.',
        tags:       ["Automne", "Dessert", "Facile"],
        prep:       '20 min',
        cuisson:    '40 min',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: 'Les pommes caramelisées', items: [
                { qty: '1 kg', name: 'pommes Reinette ou Boskoop', note: 'épluchées, en quartiers' },
                { qty: '80 g', name: 'beurre demi-sel', note: '' },
                { qty: '100 g', name: 'cassonade', note: '' },
                { qty: '1 c.c.', name: 'cannelle', note: '' },
            ]},
            { groupe: 'Le crumble', items: [
                { qty: '150 g', name: 'farine', note: '' },
                { qty: '100 g', name: 'beurre froid en dés', note: '' },
                { qty: '80 g', name: 'cassonade', note: '' },
                { qty: '50 g', name: 'flocons d\'avoine', note: '' },
                { qty: '1 pincée', name: 'sel', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Caraméliser les pommes', texte: 'Dans une grande poêle, faire fondre le beurre avec la cassonade. Ajouter les pommes et la cannelle. Cuire 10 min à feu moyen jusqu\'à légère caramélisation. Verser dans le plat à gratin.', timer: '10 min' },
            { titre: 'Crumble avoiné', texte: 'Mélanger farine, cassonade, flocons d\'avoine, sel et beurre froid du bout des doigts jusqu\'à texture sableuse.' },
            { titre: 'Cuire', texte: 'Répartir le crumble sur les pommes. Enfourner à 180 °C.', timer: '25-30 min à 180 °C' },
            { titre: 'Servir', texte: 'Tiède avec une crème anglaise légère ou une boule de glace vanille.' },
        ],
        conseils: [
            'Les flocons d\'avoine apportent un croustillant supplémentaire. Les pommes acides (Boskoop, Reinette) tiennent mieux à la cuisson que la Golden.',
        ],
    },

    'cuisses-canard-confites': {
        name:       'Cuisses de canard confites',
        region:     'Périgord / Gascogne',
        anecdote:   'Le confit de canard cuit dans sa propre graisse est la recette de conservation ancestrale du Sud-Ouest.',
        tags:       ["Automne", "Plat principal", "Moyen"],
        prep:       '20 min',
        cuisson:    '2 h',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '4', name: 'cuisses de canard', note: '' },
                { qty: '1 kg', name: 'graisse de canard', note: 'ou d\'oie' },
                { qty: '30 g', name: 'gros sel', note: '' },
                { qty: '4 gousses', name: 'ail', note: 'en chemise' },
                { qty: '2 branches', name: 'thym', note: '' },
                { qty: '2 feuilles', name: 'laurier', note: '' },
                { qty: '5', name: 'baies de genièvre', note: '' },
                { qty: '1 c.c.', name: 'poivre concassé', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Saler les cuisses', texte: 'Frotter les cuisses avec le gros sel, le poivre, le thym effeuillé et le laurier. Couvrir et réfrigérer 12 h minimum.', timer: '12 h de salaison' },
            { titre: 'Rincer et sécher', texte: 'Rincer soigneusement les cuisses sous l\'eau froide. Bien sécher avec du papier absorbant.' },
            { titre: 'Confire', texte: 'Dans une cocotte, faire fondre la graisse à feu doux. Plonger les cuisses avec l\'ail et les baies de genièvre. La graisse doit recouvrir entièrement les cuisses. Cuire à très feu doux (la graisse ne doit pas bouillir, à peine frémir).', timer: '2 h à feu très doux' },
            { titre: 'Conserver ou servir', texte: 'Pour servir : débarrasser les cuisses de leur graisse, les faire revenir côté peau dans une poêle chaude jusqu\'à obtenir une peau croustillante.', timer: '10 min pour dorer la peau' },
        ],
        conseils: [
            'Le confit maison se conserve 3 semaines au réfrigérateur sous graisse. La salaison préalable est indispensable pour le goût et la conservation.',
        ],
    },

    'daube-froide-gelee': {
        name:       'Daube froide en gelée',
        region:     'Provence',
        anecdote:   '\'La daube provençale de la veille est encore meilleure froide',
        tags:       ["Été", "Plat principal", "Moyen"],
        prep:       '20 min',
        cuisson:    '3 h',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,2 kg', name: 'joue de bœuf', note: 'en gros morceaux' },
                { qty: '75 cl', name: 'vin blanc sec', note: '' },
                { qty: '1', name: 'pied de veau', note: 'pour la gelée naturelle' },
                { qty: '2', name: 'carottes', note: 'en rondelles' },
                { qty: '2', name: 'oignons', note: '' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '1 bouquet garni', name: '', note: '' },
                { qty: '1', name: 'bouquet de persil', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire la daube', texte: 'Dans une cocotte, faire revenir les légumes. Ajouter la viande, le pied de veau, le bouquet garni. Couvrir de vin blanc. Saler, poivrer. Mijoter à couvert.', timer: '2 h 30 à 3 h' },
            { titre: 'Effilocher et monter', texte: 'Retirer la viande et l\'effilocher à la fourchette. Filtrer le bouillon, le faire réduire de moitié s\'il est trop liquide. Disposer la viande dans un moule à cake avec les carottes et le persil haché. Couler le bouillon dessus.' },
            { titre: 'Réfrigérer', texte: 'Laisser prendre en gelée au réfrigérateur au minimum 12 h.', timer: '12 h au réfrigérateur' },
            { titre: 'Démouler et servir', texte: 'Démouler et servir tranché avec cornichons, tomates et vinaigrette. Plat idéal l\'été.' },
        ],
        conseils: [
            'Le pied de veau apporte le collagène qui gélifie naturellement le bouillon. Sans lui, ajouter de la gélatine (6 feuilles pour 50 cl de bouillon).',
        ],
    },

    'daube-languedocienne': {
        name:       'Bœuf en daube à la languedocienne',
        region:     'Languedoc',
        anecdote:   'La daube languedocienne aux olives noires et au thym de garrigue mijote toute une journée pour fondre sur la langue.',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '25 min',
        cuisson:    '3 h',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,2 kg', name: 'paleron de bœuf', note: 'en cubes' },
                { qty: '75 cl', name: 'vin rouge du Languedoc', note: 'Faugères, Saint-Chinian' },
                { qty: '100 g', name: 'olives noires', note: '' },
                { qty: '2', name: 'tomates', note: 'concassées' },
                { qty: '1 zeste', name: 'd\'orange', note: '' },
                { qty: '2', name: 'oignons', note: '' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '1 bouquet garni', name: 'thym, laurier, romarin', note: '' },
                { qty: '2 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Saisir', texte: 'Faire dorer les cubes de bœuf dans l\'huile d\'olive. Ajouter oignons et ail. Déglacer au vin rouge.' },
            { titre: 'Mijoter', texte: 'Ajouter tomates, zeste d\'orange, bouquet garni. Couvrir et cuire à feu très doux.', timer: '2 h 30' },
            { titre: 'Ajouter les olives', texte: '30 min avant la fin, incorporer les olives noires. Rectifier l\'assaisonnement.', timer: '30 min' },
        ],
        conseils: [
            'Le zeste d\'orange et les olives noires sont la signature de la daube languedocienne, qui la distingue de la daube provençale. Réchauffée le lendemain, elle est encore meilleure.',
        ],
    },

    'daube-provencale': {
        name:       'Daube provençale',
        region:     'Provence',
        anecdote:   '\'La daube se prépare la veille et se déguste réchauffée — encore meilleure le lendemain',
        tags:       ["Hiver", "Plat principal", "Moyen"],
        prep:       '25 min',
        cuisson:    '3 h',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,2 kg', name: 'joue ou paleron de bœuf', note: 'en cubes' },
                { qty: '75 cl', name: 'Côtes du Rhône ou Bandol rouge', note: '' },
                { qty: '100 g', name: 'olives vertes et noires', note: '' },
                { qty: '3', name: 'tomates', note: 'concassées' },
                { qty: '1 zeste', name: 'd\'orange', note: '' },
                { qty: '2', name: 'carottes', note: '' },
                { qty: '2', name: 'oignons', note: '' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '2 branches', name: 'thym, 2 feuilles laurier', note: '' },
                { qty: '5', name: 'baies de genièvre', note: '' },
                { qty: '2 c.s.', name: 'huile d\'olive', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner (optionnel)', texte: 'Mariner la viande dans le vin rouge avec les légumes et aromates 12 h au réfrigérateur pour plus de saveur.', timer: '12 h (optionnel)' },
            { titre: 'Saisir', texte: 'Faire dorer les cubes dans l\'huile d\'olive. Ajouter les légumes, tomates, zeste d\'orange. Couvrir de vin et de la marinade. Ajouter olives et aromates.' },
            { titre: 'Mijoter', texte: 'Couvrir hermétiquement et cuire à feu très doux ou au four à 150 °C. La daube ne doit jamais bouillir.', timer: '3 h à feu doux' },
        ],
        conseils: [
            'En Provence, la daube se prépare traditionnellement dans une daubière en terre cuite. Le fond bombé concentre la chaleur sur les parois, évitant l\'ébullition.',
        ],
    },

    'daube-sanglier': {
        name:       'Daube de sanglier',
        region:     'Corse / Languedoc',
        anecdote:   '\'La saison de chasse bat son plein. Le sanglier mariné au vin rouge et aux aromates',
        tags:       ["Automne", "Plat principal", "Élaboré"],
        prep:       '30 min',
        cuisson:    '3 h 30',
        personnes:  6,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,5 kg', name: 'épaule de sanglier', note: 'en cubes' },
                { qty: '1 bouteille', name: 'vin rouge tannique', note: 'Cahors, Madiran' },
                { qty: '10 cl', name: 'cognac', note: '' },
                { qty: '2', name: 'carottes', note: '' },
                { qty: '2', name: 'oignons', note: '' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '100 g', name: 'lardons fumés', note: '' },
                { qty: '2 c.s.', name: 'farine', note: '' },
                { qty: 'bouquet garni + genièvre', name: '', note: '' },
                { qty: '', name: 'huile, sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Mariner', texte: 'Placer le sanglier dans le vin rouge avec carottes, oignons, ail, bouquet garni et genièvre. Réfrigérer 24 h minimum.', timer: '24 h de marinade' },
            { titre: 'Saisir', texte: 'Égoutter et sécher la viande. Faire revenir les lardons puis saisir la viande sur toutes les faces. Flamber au cognac.' },
            { titre: 'Mijoter', texte: 'Saupoudrer de farine, ajouter les légumes de la marinade. Mouiller avec la marinade filtrée. Couvrir et cuire à feu très doux.', timer: '3 h' },
        ],
        conseils: [
            'La longue marinade est obligatoire pour le sanglier : elle attendrit la chair et atténue le goût sauvage. Servir avec une purée de céleri et des airelles.',
        ],
    },

    'daube-thon-rouge': {
        name:       'Daube de thon rouge',
        region:     'Provence / Languedoc',
        anecdote:   '\'Le thon rouge de Méditerranée mijoté comme une daube de bœuf',
        tags:       ["Été", "Plat principal", "Moyen"],
        prep:       '20 min',
        cuisson:    '45 min',
        personnes:  4,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '600 g', name: 'thon rouge frais', note: 'en cubes épais' },
                { qty: '50 cl', name: 'vin blanc sec', note: '' },
                { qty: '3', name: 'tomates mûres', note: 'concassées' },
                { qty: '2', name: 'oignons', note: '' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '1 zeste', name: 'd\'orange', note: '' },
                { qty: '10', name: 'olives noires', note: '' },
                { qty: '2 branches', name: 'thym, 1 feuille laurier', note: '' },
                { qty: '4 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Faire revenir', texte: 'Faire revenir oignons et ail dans l\'huile d\'olive. Ajouter les tomates, le zeste d\'orange et les aromates. Cuire 10 min.', timer: '10 min' },
            { titre: 'Cuire le thon', texte: 'Ajouter les cubes de thon. Mouiller avec le vin blanc. Couvrir et cuire à feu très doux : le thon doit rester rosé à cœur.', timer: '15-20 min à feu très doux' },
            { titre: 'Finir', texte: 'Ajouter les olives noires 5 min avant la fin. Rectifier l\'assaisonnement. Servir avec du riz ou des pâtes.', timer: '5 min' },
        ],
        conseils: [
            'Ne pas trop cuire le thon : une daube de thon trop cuite devient sèche et sans intérêt. Il doit rester légèrement rosé à cœur.',
        ],
    },

    'daurade-grille-herbes': {
        name:       'Daurade royale grillée aux herbes',
        region:     'Méditerranée / Provence',
        anecdote:   '\'La daurade de Méditerranée grillée entière avec fenouil',
        tags:       ["Été", "Plat principal", "Facile"],
        prep:       '15 min',
        cuisson:    '20 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '2 (600 g chacune)', name: 'daurades royales', note: 'vidées et écaillées' },
                { qty: '4 branches', name: 'thym frais', note: '' },
                { qty: '2 branches', name: 'romarin', note: '' },
                { qty: '1 bouquet', name: 'basilic', note: '' },
                { qty: '1', name: 'citron', note: 'en rondelles' },
                { qty: '4 gousses', name: 'ail', note: 'en chemise' },
                { qty: '4 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'fleur de sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Inciser la chair des daurades en biais sur les deux faces. Farcir la cavité avec thym, romarin, basilic, citron et ail. Arroser d\'huile d\'olive, saler et poivrer.' },
            { titre: 'Griller', texte: 'Cuire sur barbecue ou plancha bien chaude (ou gril du four) 8-10 min par face. La peau doit être croustillante et légèrement carbonisée.', timer: '16-20 min' },
            { titre: 'Servir', texte: 'Servir immédiatement avec un filet d\'huile d\'olive et des quartiers de citron. Accompagner d\'une ratatouille ou d\'une salade méditerranéenne.' },
        ],
        conseils: [
            'La daurade royale (dorada) est supérieure à la daurade de ferme. Demander au poissonnier de l\'écailler mais pas de fileter.',
        ],
    },

    'dinde-noel-farcie-marrons': {
        name:       'Dinde de Noël farcie aux marrons',
        region:     'France entière',
        anecdote:   'La dinde rôtie farcie aux marrons et aux herbes est le plat de Noël traditionnel de toutes les familles françaises.',
        tags:       ["Hiver", "Plat principal", "Élaboré"],
        prep:       '1 h',
        cuisson:    '3 h 30',
        personnes:  10,
        difficulte: 'Élaboré',
        ingredients: [
            { groupe: 'La dinde', items: [
                { qty: '1 (4-5 kg)', name: 'dinde fermière Label Rouge', note: '' },
                { qty: '100 g', name: 'beurre doux', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
            { groupe: 'La farce aux marrons', items: [
                { qty: '500 g', name: 'chair à saucisse', note: '' },
                { qty: '400 g', name: 'marrons cuits', note: 'grossièrement émiettés' },
                { qty: '200 g', name: 'foie de volaille', note: 'haché' },
                { qty: '1', name: 'oignon', note: 'ciselé' },
                { qty: '1 c.s.', name: 'cognac', note: '' },
                { qty: '1 bouquet', name: 'persil et thym effeuillés', note: '' },
                { qty: '1', name: 'œuf', note: '' },
                { qty: '', name: 'sel, poivre, muscade', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer la farce', texte: 'Faire revenir l\'oignon dans du beurre. Mélanger avec chair à saucisse, foie haché, marrons, cognac, herbes, œuf. Assaisonner généreusement.' },
            { titre: 'Farcir la dinde', texte: 'Sortir la dinde 2 h avant. Glisser du beurre sous la peau de la poitrine. Farcir la cavité et le cou sans trop tasser. Brider.' },
            { titre: 'Rôtir', texte: 'Badigeonner de beurre fondu. Saler, poivrer. Enfourner à 160 °C en arrosant toutes les 30 min. Compter environ 40 min par kg.', timer: '3 h 30 à 160 °C' },
            { titre: 'Reposer', texte: 'Laisser reposer 30 min sous aluminium. Déglacer le plat avec un verre de fond de volaille.', timer: '30 min de repos' },
        ],
        conseils: [
            'Pour vérifier la cuisson, piquer la cuisse : le jus doit ressortir clair. Une sonde indiquant 75 °C dans la cuisse est la méthode la plus fiable.',
            'Préparer la farce la veille pour plus de saveur.',
        ],
    },

    'dorade-citron-vert': {
        name:       'Grillades de dorade au citron vert',
        region:     'Méditerranée',
        anecdote:   '\'La dorade de Méditerranée entière sur le gril avec citron vert',
        tags:       ["Été", "Plat principal", "Facile"],
        prep:       '15 min',
        cuisson:    '20 min',
        personnes:  2,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (500 g)', name: 'dorade royale', note: 'vidée, écaillée' },
                { qty: '2', name: 'citrons verts', note: 'jus et rondelles' },
                { qty: '2 gousses', name: 'ail', note: 'émincées' },
                { qty: '2 branches', name: 'coriandre fraîche', note: '' },
                { qty: '1 piment vert doux', name: '', note: 'épépiné, émincé' },
                { qty: '3 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'fleur de sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Inciser la dorade sur les deux faces. Farcir la cavité avec coriandre, ail, rondelles de citron vert et piment. Arroser de jus de citron vert et d\'huile d\'olive.' },
            { titre: 'Cuire en papillote ou gril', texte: 'Soit envelopper dans du papier aluminium et cuire au four à 200 °C 20 min. Soit griller 8-10 min par face. La peau doit être croustillante.', timer: '20 min au four ou 16-20 min au gril' },
            { titre: 'Servir', texte: 'Dresser avec les jus de cuisson et des quartiers de citron vert. Accompagner de riz basmati et d\'une salade de mangue.' },
        ],
        conseils: [
            'La dorade en papillote préserve les arômes du citron vert et de la coriandre. Pour une peau croustillante, finir 5 min sous le gril en ouvrant la papillote.',
        ],
    },

    'emince-veau-printanier': {
        name:       'Émincé de veau printanier',
        region:     'Île-de-France',
        anecdote:   '\'Les légumes nouveaux — petits pois',
        tags:       ["Printemps", "Plat principal", "Facile"],
        prep:       '15 min',
        cuisson:    '15 min',
        personnes:  4,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '600 g', name: 'escalope de veau', note: 'en fines lanières' },
                { qty: '200 g', name: 'asperges vertes', note: 'en tronçons' },
                { qty: '150 g', name: 'petits pois frais', note: '' },
                { qty: '8', name: 'petits oignons nouveaux', note: '' },
                { qty: '20 cl', name: 'crème fraîche épaisse', note: '' },
                { qty: '10 cl', name: 'vin blanc sec', note: '' },
                { qty: '2', name: 'échalotes', note: 'ciselées' },
                { qty: '30 g', name: 'beurre', note: '' },
                { qty: '', name: 'sel, poivre, estragon frais', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Cuire les légumes', texte: 'Blanchir rapidement asperges et petits pois à l\'eau bouillante salée (3 min). Égoutter et rafraîchir.', timer: '3 min' },
            { titre: 'Saisir le veau', texte: 'Dans une poêle bien chaude, saisir les lanières de veau dans le beurre 2-3 min à feu vif. Elles doivent rester rosées. Réserver.' },
            { titre: 'Sauce et réunion', texte: 'Dans la même poêle, faire suer les échalotes et les oignons nouveaux. Déglacer au vin blanc, réduire. Ajouter la crème. Réunir veau et légumes. Chauffer 1 min. Ajouter l\'estragon ciselé.', timer: '5 min' },
        ],
        conseils: [
            'L\'émincé de veau doit être saisi très rapidement à feu très vif pour rester tendre. Un veau trop cuit devient caoutchouteux.',
        ],
    },

    'epaule-agneau-confite': {
        name:       'Agneau en épaule confite à l\'ail',
        region:     'Provence',
        anecdote:   '\'Pour l\'Assomption',
        tags:       ["Printemps", "Plat principal", "Moyen"],
        prep:       '20 min',
        cuisson:    '4 h',
        personnes:  6,
        difficulte: 'Moyen',
        ingredients: [
            { groupe: '', items: [
                { qty: '1 (1,5 kg)', name: 'épaule d\'agneau', note: 'entière avec os' },
                { qty: '1 tête entière', name: 'd\'ail', note: '+ 6 gousses supplémentaires' },
                { qty: '3 branches', name: 'romarin', note: '' },
                { qty: '3 branches', name: 'thym', note: '' },
                { qty: '20 cl', name: 'vin blanc sec', note: '' },
                { qty: '4 c.s.', name: 'huile d\'olive', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Piquer l\'épaule avec les 6 gousses d\'ail coupées en lamelles, le romarin et le thym. Frotter généreusement d\'huile d\'olive, sel et poivre.' },
            { titre: 'Confiture', texte: 'Placer dans un plat à rôtir avec la tête d\'ail entière. Verser le vin blanc. Couvrir hermétiquement de papier aluminium (ou avec un couvercle). Enfourner à 150 °C.', timer: '3 h 30 à 4 h à 150 °C' },
            { titre: 'Dorer et servir', texte: 'Retirer le papier aluminium, monter le four à 220 °C et faire dorer l\'épaule 15 min. La chair doit se détacher à la fourchette.', timer: '15 min à 220 °C' },
        ],
        conseils: [
            'La cuisson lente et à couvert est le secret : l\'épaule doit être si confite que l\'os se détache seul. Servir avec des flageolets ou des légumes printaniers.',
        ],
    },

    'epaule-porc-biere': {
        name:       'Épaule de porc braisée à la bière',
        region:     'Nord / Alsace',
        anecdote:   'L\'épaule de porc braisée lentement à la bière brune et aux baies de genièvre : le plat du Nord en novembre.',
        tags:       ["Hiver", "Plat principal", "Facile"],
        prep:       '15 min',
        cuisson:    '3 h',
        personnes:  6,
        difficulte: 'Facile',
        ingredients: [
            { groupe: '', items: [
                { qty: '1,5 kg', name: 'épaule de porc', note: 'avec os, ficelée' },
                { qty: '75 cl', name: 'bière blonde ou ambrée', note: '' },
                { qty: '2', name: 'oignons', note: 'en quartiers' },
                { qty: '4 gousses', name: 'ail', note: '' },
                { qty: '2 c.s.', name: 'moutarde à l\'ancienne', note: '' },
                { qty: '2 branches', name: 'thym', note: '' },
                { qty: '2 feuilles', name: 'laurier', note: '' },
                { qty: '1 c.c.', name: 'cumin', note: '' },
                { qty: '', name: 'sel, poivre', note: '' },
            ]},
        ],
        etapes: [
            { titre: 'Préparer', texte: 'Frotter l\'épaule de porc avec la moutarde, le cumin, sel et poivre. Faire dorer sur toutes les faces dans une cocotte.', timer: '10 min' },
            { titre: 'Mijoter à la bière', texte: 'Ajouter oignons, ail, thym, laurier. Verser la bière. Couvrir et cuire à feu très doux.', timer: '2 h 30 à 3 h' },
            { titre: 'Réduire et servir', texte: 'Retirer l\'épaule. Faire réduire le jus de cuisson 10 min à feu vif pour le concentrer. Servir l\'épaule effilochée avec ce jus et de la choucroute ou des pommes de terre.', timer: '10 min' },
        ],
        conseils: [
            'L\'épaule de porc est l\'un des morceaux les moins chers et les plus savoureux. La bière apporte amertume et rondeur à la sauce.',
        ],
    },

'far-breton': {
    name:       'Far breton aux pruneaux',
    region:     'Bretagne',
    anecdote:   'Flan épais et moelleux, le far breton varie d’un village à l’autre : certains le préfèrent nature, d’autres généreusement garni de pruneaux.',
    tags:       ["Hiver", "Dessert", "Facile"],
    prep:       '15 min',
    cuisson:    '50 min',
    personnes:  6,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Pâte à far",
            items: [
                { qty: "4", name: "œufs", note: "" },
                { qty: "150 g", name: "sucre", note: "" },
                { qty: "200 g", name: "farine", note: "tamisée" },
                { qty: "1 L", name: "lait entier", note: "tiédi" },
                { qty: "1 c. à soupe", name: "rhum ambré", note: "optionnel mais traditionnel" },
                { qty: "1", name: "gousse de vanille", note: "ou extrait" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "200 g", name: "pruneaux dénoyautés", note: "" },
                { qty: "20 g", name: "beurre", note: "pour le moule" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pruneaux",
            texte: "Faire tremper les pruneaux 10 minutes dans de l’eau chaude ou du thé pour les réhydrater.",
            timer: "10 min"
        },
        {
            titre: "Préparer la pâte",
            texte: "Mélanger œufs et sucre. Ajouter la farine, puis incorporer progressivement le lait tiède, la vanille et le rhum. La pâte doit être fluide.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Beurrer généreusement un plat. Disposer les pruneaux au fond puis verser la pâte par-dessus.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 180°C pendant 45 à 50 minutes jusqu’à ce que le far soit doré et légèrement tremblotant au centre.",
            timer: "50 min"
        },
        {
            titre: "Refroidissement",
            texte: "Laisser tiédir dans le plat. Le far peut se servir tiède ou froid.",
            timer: "—"
        }
    ],

    conseils: [
        "Pour un far plus ferme, réduire le lait à 800 ml.",
        "Pour un goût plus breton, remplacer le rhum par un peu de lambig.",
        "Les pruneaux peuvent être remplacés par des raisins secs trempés dans le rhum."
    ]
},

'feuillete-cepes': {
    name:       'Feuilleté de cèpes en croûte',
    region:     'Périgord / Gascogne',
    anecdote:   'Les cèpes de Bordeaux enfermés dans une croûte feuilletée dorée offrent une entrée automnale raffinée, typique des auberges gasconnes.',
    tags:       ["Automne", "Hiver", "Entrée", "Moyen"],
    prep:       '25 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Champignons",
            items: [
                { qty: "400 g", name: "cèpes frais", note: "ou surgelés de bonne qualité" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "1 poignée", name: "persil", note: "ciselé" }
            ]
        },
        {
            groupe: "Crème & liaison",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "1 c. à soupe", name: "farine", note: "pour lier légèrement" }
            ]
        },
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "pur beurre" },
                { qty: "1", name: "jaune d’œuf", note: "pour la dorure" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les cèpes",
            texte: "Nettoyer les cèpes sans les mouiller. Les couper en morceaux. Faire revenir échalote et ail dans le beurre, puis ajouter les cèpes et les faire dorer.",
            timer: "10 min"
        },
        {
            titre: "Lier la garniture",
            texte: "Saupoudrer de farine, mélanger, puis ajouter la crème. Laisser épaissir légèrement. Ajouter le persil, saler et poivrer.",
            timer: "5 min"
        },
        {
            titre: "Assembler le feuilleté",
            texte: "Étaler la pâte feuilletée. Déposer la garniture au centre et refermer en chausson ou en petit pâté individuel. Dorer au jaune d’œuf.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 200°C pendant 20 à 25 minutes jusqu’à obtenir une croûte bien dorée et gonflée.",
            timer: "25 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, accompagné d’une petite salade ou d’un mesclun.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un trait d’armagnac ou de madère dans la garniture pour une version plus gastronomique.",
        "Les cèpes doivent être bien dorés pour développer tout leur parfum.",
        "On peut remplacer une partie des cèpes par des girolles ou des champignons de Paris bruns."
    ]
},


'feuillete-chevre-noix': {
    name:       'Feuilleté au fromage de chèvre et noix',
    region:     'Loire / Périgord',
    anecdote:   'Le mariage du chèvre chaud et des noix fraîches, enfermé dans une pâte feuilletée dorée, est une entrée automnale simple et raffinée.',
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '20 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Garniture",
            items: [
                { qty: "1", name: "bûche de chèvre", note: "ou 4 petits crottins" },
                { qty: "60 g", name: "noix", note: "concassées" },
                { qty: "2 c. à soupe", name: "miel", note: "liquide" },
                { qty: "1 c. à soupe", name: "crème fraîche", note: "optionnelle" },
                { qty: "1 pincée", name: "thym", note: "ou romarin" }
            ]
        },
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "pur beurre" },
                { qty: "1", name: "jaune d’œuf", note: "pour la dorure" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la garniture",
            texte: "Couper le chèvre en 4 tranches épaisses. Mélanger les noix concassées avec le miel et un peu de thym.",
            timer: "5 min"
        },
        {
            titre: "Assembler les feuilletés",
            texte: "Découper la pâte en 4 carrés. Déposer une tranche de chèvre au centre, ajouter une cuillerée de mélange noix–miel, poivrer légèrement.",
            timer: "5 min"
        },
        {
            titre: "Fermer les feuilletés",
            texte: "Replier les coins de la pâte vers le centre pour former un petit paquet. Souder les bords et badigeonner de jaune d’œuf.",
            timer: "3 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 200°C pendant 15 à 20 minutes jusqu’à ce que la pâte soit bien dorée et gonflée.",
            timer: "20 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, accompagné d’une salade verte ou de roquette.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un filet de miel juste avant de servir pour renforcer le contraste sucré-salé.",
        "Remplacer les noix par des noisettes ou des amandes pour varier.",
        "Un petit trait de vinaigre balsamique réduit fonctionne très bien avec le chèvre chaud."
    ]
},


'feuillete-saint-nicolas': {
    name:       'Feuilleté de Saint-Nicolas aux pralines',
    region:     'Alsace / Lorraine',
    anecdote:   'La veille de la Saint-Nicolas, on prépare de petits feuilletés sucrés en forme de bonhommes, garnis de pralines roses ou d’amandes.',
    tags:       ["Hiver", "Dessert", "Facile"],
    prep:       '20 min',
    cuisson:    '20 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "pur beurre" },
                { qty: "1", name: "jaune d’œuf", note: "pour la dorure" }
            ]
        },
        {
            groupe: "Garniture sucrée",
            items: [
                { qty: "80 g", name: "pralines roses concassées", note: "" },
                { qty: "20 g", name: "beurre", note: "fondu" },
                { qty: "1 c. à soupe", name: "sucre", note: "" },
                { qty: "1 pincée", name: "cannelle", note: "optionnelle" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la garniture",
            texte: "Mélanger les pralines concassées avec le beurre fondu, le sucre et la cannelle.",
            timer: "5 min"
        },
        {
            titre: "Façonner les feuilletés",
            texte: "Étaler la pâte et découper 4 formes de bonhommes (ou des rectangles). Déposer une cuillerée de garniture au centre.",
            timer: "7 min"
        },
        {
            titre: "Refermer",
            texte: "Replier légèrement la pâte ou ajouter un second morceau de pâte par-dessus. Souder les bords et badigeonner de jaune d’œuf.",
            timer: "3 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 190°C pendant 15 à 20 minutes jusqu’à ce que les feuilletés soient bien dorés.",
            timer: "20 min"
        },
        {
            titre: "Servir",
            texte: "Laisser tiédir et déguster au goûter ou en dessert.",
            timer: "—"
        }
    ],

    conseils: [
        "Remplacer les pralines par un mélange amandes–sucre pour une version plus douce.",
        "Ajouter quelques raisins secs trempés dans du rhum pour une touche lorraine.",
        "Découper la pâte avec un emporte‑pièce en forme de Saint‑Nicolas pour respecter la tradition."
    ]
},


'figues-gratin': {
    name:       'Figues fraîches en gratin',
    region:     'Languedoc / Corse',
    anecdote:   'Les figues violettes de fin août, gratinées avec miel et fromage blanc, offrent un dessert simple et élégant.',
    tags:       ["Été", "Automne", "Dessert", "Facile"],
    prep:       '10 min',
    cuisson:    '12 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "8", name: "figues fraîches", note: "violettes, mûres" }
            ]
        },
        {
            groupe: "Appareil à gratin",
            items: [
                { qty: "200 g", name: "fromage blanc", note: "ou ricotta" },
                { qty: "2 c. à soupe", name: "miel", note: "" },
                { qty: "1", name: "œuf", note: "" },
                { qty: "1 sachet", name: "sucre vanillé", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "1 poignée", name: "amandes effilées", note: "ou pistaches concassées" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les figues",
            texte: "Laver les figues, les inciser en croix et les disposer dans un plat à gratin.",
            timer: "3 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger fromage blanc, œuf, miel et sucre vanillé. Verser autour et légèrement sur les figues.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Parsemer d’amandes effilées et enfourner 10 à 12 minutes à 200°C jusqu’à légère coloration.",
            timer: "12 min"
        },
        {
            titre: "Servir",
            texte: "Servir tiède, éventuellement avec une boule de glace vanille.",
            timer: "—"
        }
    ],

    conseils: [
        "Remplacer le fromage blanc par de la ricotta pour un gratin plus crémeux.",
        "Ajouter un filet de miel juste avant de servir.",
        "Les figues peuvent être remplacées par des abricots en début d’été."
    ]
},

'figues-jambon-sec': {
    name:       'Figues fraîches au jambon sec',
    region:     'Languedoc / Corse',
    anecdote:   'Les premières figues violettes associées au jambon sec corse offrent un mariage sucré-salé typique de l’été méditerranéen.',
    tags:       ["Été", "Entrée", "Facile"],
    prep:       '10 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "8", name: "figues fraîches", note: "violettes, mûres" }
            ]
        },
        {
            groupe: "Charcuterie",
            items: [
                { qty: "8 tranches", name: "jambon sec", note: "corse ou languedocien" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "miel", note: "optionnel" },
                { qty: "1 poignée", name: "noix", note: "concassées" },
                { qty: "", name: "poivre", note: "du moulin" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les figues",
            texte: "Laver les figues et les inciser en croix sans les couper entièrement.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Ouvrir légèrement les figues, ajouter un filet de miel et quelques noix.",
            timer: "3 min"
        },
        {
            titre: "Envelopper",
            texte: "Enrouler chaque figue dans une tranche de jambon sec.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Poivrer légèrement et servir frais en entrée.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de roquette pour une assiette plus complète.",
        "Remplacer le miel par du vinaigre balsamique réduit pour une version plus acidulée.",
        "Parfait avec un vin blanc sec ou un rosé léger."
    ]
},


'filet-boeuf-en-croute': {
    name:       'Filet de bœuf en croûte (Beef Wellington)',
    region:     'Île-de-France / fusion',
    anecdote:   'Le filet de bœuf en croûte, garni de duxelles de champignons et enveloppé de pâte feuilletée, est un grand classique des repas de fête.',
    tags:       ["Hiver", "Plat principal", "Festif"],
    prep:       '30 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Difficile',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "600 g", name: "filet de bœuf", note: "pièce entière" }
            ]
        },
        {
            groupe: "Duxelles",
            items: [
                { qty: "300 g", name: "champignons de Paris", note: "hachés très fin" },
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" }
            ]
        },
        {
            groupe: "Enrobage",
            items: [
                { qty: "4 tranches", name: "jambon cru", note: "ou pancetta" },
                { qty: "1", name: "pâte feuilletée", note: "pur beurre" },
                { qty: "1", name: "jaune d’œuf", note: "pour la dorure" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir le filet",
            texte: "Saler et poivrer le filet. Le saisir sur toutes les faces dans une poêle chaude avec un peu de beurre. Laisser refroidir.",
            timer: "8 min"
        },
        {
            titre: "Préparer la duxelles",
            texte: "Faire revenir échalotes et champignons jusqu’à évaporation complète de l’eau. Ajouter le persil. Laisser refroidir.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler les tranches de jambon, étaler la duxelles dessus, poser le filet au centre et rouler serré.",
            timer: "5 min"
        },
        {
            titre: "Envelopper dans la pâte",
            texte: "Enrober le tout dans la pâte feuilletée, souder les bords et dorer au jaune d’œuf.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 200°C pendant 20 à 25 minutes selon la cuisson souhaitée.",
            timer: "25 min"
        },
        {
            titre: "Repos",
            texte: "Laisser reposer 5 minutes avant de découper.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Pour éviter que la pâte ne détrempe, laisser refroidir complètement la duxelles.",
        "Ajouter une fine couche de moutarde sur le filet avant l’enrobage pour plus de parfum.",
        "Servir avec une sauce madère ou un jus corsé."
    ]
},


'flamiche-aux-bettes': {
    name:       'Flamiche aux bettes',
    region:     'Picardie',
    anecdote:   'Version printanière de la flamiche picarde, où les bettes remplacent les poireaux pour une saveur plus végétale et légèrement amère.',
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "500 g", name: "bettes", note: "côtes et feuilles séparées" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "3", name: "œufs", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "10 cl", name: "lait", note: "" },
                { qty: "80 g", name: "fromage râpé", note: "emmental ou comté" }
            ]
        },
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "ou feuilletée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "noix de muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les bettes",
            texte: "Couper les côtes en petits dés et les feuilles en lanières. Faire revenir l’oignon puis ajouter les bettes jusqu’à tendreté.",
            timer: "10 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Battre les œufs avec la crème, le lait, le fromage, sel, poivre et muscade.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Foncer un moule avec la pâte. Répartir les bettes puis verser l’appareil par-dessus.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 180°C pendant 30 à 35 minutes jusqu’à coloration dorée.",
            timer: "35 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud ou tiède avec une salade.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques lardons pour une version plus rustique.",
        "Remplacer les bettes par des poireaux pour revenir à la flamiche traditionnelle.",
        "Une pâte feuilletée donne une version plus légère et croustillante."
    ]
},


'flamiche-aux-poireaux': {
    name:       'Flamiche aux poireaux',
    region:     'Picardie',
    anecdote:   'Tarte fondante aux poireaux d’hiver, la flamiche est un classique réconfortant des tables picardes.',
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "600 g", name: "poireaux", note: "blancs et un peu de vert" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "3", name: "œufs", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "10 cl", name: "lait", note: "" },
                { qty: "80 g", name: "fromage râpé", note: "emmental ou maroilles pour une version plus typée" }
            ]
        },
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "ou feuilletée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "noix de muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les poireaux",
            texte: "Laver soigneusement les poireaux, les émincer et les faire fondre avec l’oignon dans un peu de beurre jusqu’à tendreté.",
            timer: "12 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Battre les œufs avec la crème, le lait, le fromage, sel, poivre et muscade.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Foncer un moule avec la pâte. Répartir les poireaux puis verser l’appareil par-dessus.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 180°C pendant 30 à 35 minutes jusqu’à ce que la flamiche soit dorée.",
            timer: "35 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud ou tiède avec une salade.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques lardons pour une version plus rustique.",
        "Remplacer une partie du fromage par du maroilles pour une flamiche plus typée.",
        "Bien égoutter les poireaux pour éviter que la pâte ne détrempe."
    ]
},


 'fleurs-courgettes-farcies': {
    name:       'Fleurs de courgettes farcies',
    region:     'Nice / Côte d\'Azur',
    anecdote:   'Les fleurs de courgettes, trésor des jardins niçois, se farcissent délicatement avant d’être poêlées à l’huile d’olive.',
    tags:       ["Été", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fleurs",
            items: [
                { qty: "8 à 12", name: "fleurs de courgettes", note: "fraîches, non abîmées" }
            ]
        },
        {
            groupe: "Farce",
            items: [
                { qty: "200 g", name: "ricotta", note: "" },
                { qty: "50 g", name: "parmesan", note: "râpé" },
                { qty: "1", name: "œuf", note: "" },
                { qty: "1 poignée", name: "basilic", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Cuisson",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les fleurs",
            texte: "Retirer délicatement le pistil des fleurs sans les déchirer. Les rincer rapidement et les sécher.",
            timer: "5 min"
        },
        {
            titre: "Préparer la farce",
            texte: "Mélanger ricotta, parmesan, œuf, basilic, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Farcir les fleurs",
            texte: "Remplir chaque fleur avec une cuillerée de farce et refermer délicatement les pétales.",
            timer: "3 min"
        },
        {
            titre: "Cuisson",
            texte: "Poêler doucement les fleurs dans l’huile d’olive 3 à 4 minutes de chaque côté.",
            timer: "8 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, simplement ou avec un filet de citron.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de zeste de citron dans la farce pour une version plus fraîche.",
        "Les fleurs doivent être très fraîches : elles se conservent mal.",
        "On peut remplacer la ricotta par du fromage de chèvre frais."
    ]
},


'foie-gras-figues-seches': {
    name:       'Foie gras poêlé aux figues sèches',
    region:     'Périgord / Gascogne',
    anecdote:   'Le foie gras poêlé accompagné de figues sèches caramélisées est une entrée festive emblématique du Sud-Ouest.',
    tags:       ["Hiver", "Entrée", "Gastronomique"],
    prep:       '15 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Foie gras",
            items: [
                { qty: "4", name: "tranches de foie gras cru", note: "1,5 à 2 cm d’épaisseur" },
                { qty: "1 pincée", name: "fleur de sel", note: "" },
                { qty: "1 pincée", name: "poivre du moulin", note: "" }
            ]
        },
        {
            groupe: "Figues & Garniture",
            items: [
                { qty: "8", name: "figues sèches", note: "coupées en deux" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "1 c. à soupe", name: "miel", note: "" },
                { qty: "5 cl", name: "vin doux", note: "type Sauternes ou Monbazillac" }
            ]
        },
        {
            groupe: "Accompagnement (optionnel)",
            items: [
                { qty: "4", name: "tranches de pain d’épices", note: "ou brioche légèrement grillée" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les figues",
            texte: "Faire fondre le beurre dans une petite poêle. Ajouter les figues coupées, les faire revenir 2 minutes, puis ajouter le miel et le vin doux. Laisser caraméliser doucement jusqu’à obtenir une petite réduction sirupeuse.",
            timer: "6 min"
        },
        {
            titre: "Poêler le foie gras",
            texte: "Chauffer une poêle bien chaude sans matière grasse. Saisir les tranches de foie gras 1 minute de chaque côté jusqu’à coloration dorée. Déposer sur du papier absorbant pour retirer l’excès de gras.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Saler et poivrer immédiatement les tranches de foie gras encore chaudes pour fixer les arômes.",
            timer: "1 min"
        },
        {
            titre: "Dresser",
            texte: "Déposer une tranche de foie gras dans chaque assiette, ajouter les figues caramélisées et un filet de réduction. Servir avec du pain d’épices grillé.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Le foie gras doit être très froid avant cuisson pour éviter qu’il ne fonde trop vite.",
        "Utiliser une poêle en fonte ou en acier pour une meilleure saisie.",
        "Le vin doux peut être remplacé par un porto ou un balsamique réduit."
    ],
},


'foie-gras-mi-cuit-torchon': {
    name:       'Foie gras mi-cuit au torchon',
    region:     'Périgord / Gascogne',
    anecdote:   'Le foie gras mi-cuit au torchon se prépare idéalement une à deux semaines avant Noël pour développer toute sa finesse.',
    tags:       ["Hiver", "Entrée", "Gastronomique"],
    prep:       '25 min',
    cuisson:    '15 min',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Foie gras",
            items: [
                { qty: "1", name: "foie gras cru de canard", note: "500 à 600 g, dénervé" },
                { qty: "8 g", name: "sel fin", note: "soit 12 g/kg" },
                { qty: "2 g", name: "poivre", note: "fraîchement moulu" },
                { qty: "1 pincée", name: "sucre", note: "" },
                { qty: "2 cl", name: "Cognac ou Armagnac", note: "facultatif mais traditionnel" }
            ]
        },
        {
            groupe: "Matériel",
            items: [
                { qty: "1", name: "torchon propre", note: "ou gaze alimentaire" },
                { qty: "1", name: "ficelle de cuisine", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Assaisonner le foie gras",
            texte: "Séparer les deux lobes, retirer les veines si nécessaire. Mélanger sel, poivre et sucre. Assaisonner uniformément les lobes et arroser d’un filet de Cognac ou d’Armagnac.",
            timer: "5 min"
        },
        {
            titre: "Former le boudin",
            texte: "Superposer les lobes pour former un cylindre régulier. Les envelopper fermement dans un film alimentaire, puis rouler pour chasser l’air. Serrer les extrémités comme un bonbon.",
            timer: "5 min"
        },
        {
            titre: "Enrouler dans le torchon",
            texte: "Retirer le film, placer le foie gras au centre du torchon, rouler très serré et ficeler solidement les extrémités.",
            timer: "5 min"
        },
        {
            titre: "Cuisson au bouillon",
            texte: "Porter une grande casserole d’eau à 80–85°C (sans bouillir). Plonger le foie gras torché 12 à 15 minutes selon l’épaisseur. Retirer et plonger immédiatement dans l’eau glacée.",
            timer: "15 min"
        },
        {
            titre: "Repos et maturation",
            texte: "Égoutter, sécher, resserrer la ficelle si besoin. Réserver au réfrigérateur au moins 48 h avant dégustation, idéalement 5 à 7 jours.",
            timer: "48 h"
        },
        {
            titre: "Service",
            texte: "Sortir 10 minutes avant de trancher. Couper avec une lame chaude et servir avec pain brioché ou pain d’épices.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Un foie gras de 500–600 g est idéal pour une cuisson homogène.",
        "La température de l’eau ne doit jamais bouillir : 80–85°C maximum.",
        "Plus le repos est long, plus les arômes se développent.",
        "Pour une coupe nette, tremper la lame du couteau dans l’eau chaude."
    ],
},

'foie-gras-pain-epice': {
    name:       'Foie gras poêlé au pain d\'épice',
    region:     'Périgord / Alsace',
    anecdote:   'Le foie gras poêlé servi sur un toast de pain d’épice grillé est un classique des fêtes, alliant douceur, épices et fondant.',
    tags:       ["Hiver", "Entrée", "Gastronomique"],
    prep:       '15 min',
    cuisson:    '5 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Foie gras",
            items: [
                { qty: "4", name: "tranches de foie gras cru", note: "1,5 à 2 cm d’épaisseur" },
                { qty: "1 pincée", name: "fleur de sel", note: "" },
                { qty: "1 pincée", name: "poivre du moulin", note: "" }
            ]
        },
        {
            groupe: "Pain d’épice",
            items: [
                { qty: "4", name: "tranches de pain d’épice", note: "grillées ou toastées" }
            ]
        },
        {
            groupe: "Accompagnement",
            items: [
                { qty: "1 c. à soupe", name: "miel", note: "ou sirop d’érable" },
                { qty: "1", name: "pomme", note: "coupée en lamelles et poêlée (optionnel)" },
                { qty: "1 filet", name: "vinaigre balsamique réduit", note: "optionnel" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le pain d’épice",
            texte: "Toaster les tranches de pain d’épice dans une poêle sèche ou au grille-pain jusqu’à légère caramélisation.",
            timer: "2 min"
        },
        {
            titre: "Poêler le foie gras",
            texte: "Chauffer une poêle bien chaude sans matière grasse. Saisir les tranches de foie gras 45 secondes à 1 minute par face jusqu’à coloration dorée. Déposer sur du papier absorbant.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Saler et poivrer immédiatement les tranches encore chaudes pour fixer les arômes.",
            timer: "1 min"
        },
        {
            titre: "Dresser",
            texte: "Déposer une tranche de foie gras sur chaque toast de pain d’épice. Ajouter un filet de miel ou de balsamique réduit. Servir aussitôt.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Le foie gras doit être très froid avant cuisson pour éviter qu’il ne fonde trop vite.",
        "Une poêle en acier ou en fonte donne une meilleure coloration.",
        "Le pain d’épice peut être remplacé par de la brioche légèrement grillée.",
        "Ajouter quelques lamelles de pomme poêlée apporte une touche fruitée très appréciée."
    ],
},


'fondue-savoyarde': {
    name:       'Fondue savoyarde',
    region:     'Savoie',
    anecdote:   'Beaufort, comté et emmental fondus au vin blanc : la fondue est le plat convivial des chalets savoyards.',
    tags:       ["Hiver", "Plat principal", "Convivial"],
    prep:       '15 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fromages",
            items: [
                { qty: "200 g", name: "Beaufort", note: "râpé ou coupé en petits dés" },
                { qty: "200 g", name: "Comté", note: "fruité, râpé" },
                { qty: "200 g", name: "Emmental de Savoie", note: "râpé" }
            ]
        },
        {
            groupe: "Base de cuisson",
            items: [
                { qty: "1", name: "gousse d’ail", note: "coupée en deux pour frotter le caquelon" },
                { qty: "25 cl", name: "vin blanc sec", note: "Apremont ou Roussette de Savoie" },
                { qty: "1 c. à café", name: "maïzena", note: "diluée dans un peu de vin" },
                { qty: "1 c. à soupe", name: "kirsch", note: "facultatif mais traditionnel" }
            ]
        },
        {
            groupe: "Accompagnement",
            items: [
                { qty: "1", name: "baguette ou pain de campagne", note: "coupé en cubes" },
                { qty: "1 pincée", name: "poivre", note: "fraîchement moulu" },
                { qty: "1", name: "salade verte", note: "optionnelle" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le caquelon",
            texte: "Frotter l’intérieur du caquelon avec la gousse d’ail coupée en deux pour parfumer légèrement la fondue.",
            timer: "1 min"
        },
        {
            titre: "Chauffer le vin",
            texte: "Verser le vin blanc dans le caquelon et chauffer doucement jusqu’à frémissement, sans faire bouillir.",
            timer: "3 min"
        },
        {
            titre: "Faire fondre les fromages",
            texte: "Ajouter progressivement les fromages en remuant en forme de huit avec une spatule en bois jusqu’à obtenir une texture lisse et homogène.",
            timer: "5 min"
        },
        {
            titre: "Lier et parfumer",
            texte: "Ajouter la maïzena diluée pour stabiliser la fondue. Incorporer le kirsch hors du feu. Poivrer légèrement.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Placer le caquelon sur son réchaud. Tremper les cubes de pain dans la fondue bien chaude et déguster immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Utiliser un vin blanc sec savoyard pour une saveur authentique.",
        "Remuer en forme de huit évite que le fromage ne file.",
        "Si la fondue est trop liquide, ajouter un peu de fromage ; si elle est trop épaisse, ajouter un peu de vin.",
        "Ne jamais faire bouillir le vin : cela durcit les fromages."
    ],
},


'fraisier': {
    name:       'Fraisier classique',
    region:     'Île-de-France',
    anecdote:   'Gâteau emblématique du mois de mai, le fraisier marie fraises françaises et crème mousseline dans une génoise légère.',
    tags:       ["Printemps", "Été", "Dessert", "Difficile"],
    prep:       '45 min',
    cuisson:    '15 min',
    personnes:  6,
    difficulte: 'Difficile',

    ingredients: [
        {
            groupe: "Génoise",
            items: [
                { qty: "4", name: "œufs", note: "" },
                { qty: "120 g", name: "sucre", note: "" },
                { qty: "120 g", name: "farine", note: "tamisée" }
            ]
        },
        {
            groupe: "Crème mousseline",
            items: [
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "1", name: "gousse de vanille", note: "" },
                { qty: "4", name: "jaunes d’œufs", note: "" },
                { qty: "120 g", name: "sucre", note: "" },
                { qty: "50 g", name: "maïzena", note: "" },
                { qty: "200 g", name: "beurre", note: "mou" }
            ]
        },
        {
            groupe: "Fraises & sirop",
            items: [
                { qty: "500 g", name: "fraises", note: "gariguettes ou mara des bois" },
                { qty: "10 cl", name: "eau", note: "" },
                { qty: "50 g", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "liqueur de fraise", note: "optionnelle" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "100 g", name: "pâte d’amande", note: "rose ou nature" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la génoise",
            texte: "Fouetter œufs et sucre au bain-marie jusqu’à ce que le mélange blanchisse. Retirer du feu, fouetter jusqu’à refroidissement puis incorporer la farine. Cuire 12–15 min à 180°C.",
            timer: "15 min"
        },
        {
            titre: "Préparer la crème pâtissière",
            texte: "Chauffer le lait avec la vanille. Blanchir jaunes et sucre, ajouter la maïzena, puis verser le lait chaud. Cuire jusqu’à épaississement. Laisser tiédir.",
            timer: "10 min"
        },
        {
            titre: "Transformer en mousseline",
            texte: "Incorporer 100 g de beurre dans la crème tiède. Laisser refroidir complètement puis ajouter les 100 g restants au fouet.",
            timer: "10 min"
        },
        {
            titre: "Préparer le sirop",
            texte: "Porter à ébullition eau et sucre. Ajouter la liqueur hors du feu.",
            timer: "5 min"
        },
        {
            titre: "Montage",
            texte: "Couper la génoise en deux. Imbiber la première moitié, disposer les fraises coupées contre le cercle, garnir de mousseline, ajouter des fraises au centre, recouvrir de mousseline puis de la seconde génoise imbibée.",
            timer: "10 min"
        },
        {
            titre: "Finition",
            texte: "Étaler la pâte d’amande et la poser sur le dessus. Réfrigérer 2 h avant de servir.",
            timer: "—"
        }
    ],

    conseils: [
        "Utiliser des fraises bien parfumées : la qualité du fruit fait le gâteau.",
        "La mousseline doit être parfaitement froide avant le montage.",
        "Pour une découpe nette, passer le couteau sous l’eau chaude."
    ]
},


   'fricassee-lapin-cidre': {
    name:       'Fricassée de lapin au cidre',
    region:     'Normandie',
    anecdote:   'Le lapin fermier mijoté au cidre brut et à la crème fraîche est un classique des fermes normandes.',
    tags:       ["Hiver", "Plat principal", "Tradition"],
    prep:       '20 min',
    cuisson:    '1 h 10',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1", name: "lapin découpé", note: "1,2 à 1,5 kg" },
                { qty: "150 g", name: "lardons fumés", note: "" }
            ]
        },
        {
            groupe: "Légumes & aromates",
            items: [
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "200 g", name: "champignons de Paris", note: "émincés" },
                { qty: "1", name: "branche de thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        },
        {
            groupe: "Liquides & liaison",
            items: [
                { qty: "40 cl", name: "cidre brut", note: "normand" },
                { qty: "10 cl", name: "bouillon de volaille", note: "" },
                { qty: "20 cl", name: "crème fraîche épaisse", note: "" },
                { qty: "1 c. à soupe", name: "moutarde", note: "facultatif" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 filet", name: "huile ou beurre", note: "pour la cuisson" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Dorer le lapin",
            texte: "Faire chauffer un peu de beurre ou d’huile dans une cocotte. Dorer les morceaux de lapin sur toutes les faces. Réserver.",
            timer: "10 min"
        },
        {
            titre: "Faire revenir la garniture",
            texte: "Dans la même cocotte, faire revenir les lardons, les oignons, l’ail et les champignons jusqu’à légère coloration.",
            timer: "8 min"
        },
        {
            titre: "Déglacer au cidre",
            texte: "Remettre le lapin, ajouter le cidre, le bouillon, le thym et le laurier. Porter à frémissement.",
            timer: "2 min"
        },
        {
            titre: "Mijoter",
            texte: "Couvrir et laisser cuire à feu doux 45 minutes. Retourner les morceaux à mi-cuisson.",
            timer: "45 min"
        },
        {
            titre: "Lier la sauce",
            texte: "Retirer le couvercle, ajouter la crème fraîche et la moutarde. Laisser réduire quelques minutes jusqu’à obtenir une sauce nappante.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement. Servir bien chaud avec des pommes de terre vapeur ou du riz.",
            timer: "—"
        }
    ],

    conseils: [
        "Un cidre brut donne une sauce plus parfumée et moins sucrée.",
        "Le lapin ne doit jamais bouillir : une cuisson douce garantit une viande tendre.",
        "Ajouter un peu de moutarde renforce la note normande.",
        "Les champignons peuvent être remplacés par des pommes poêlées pour une version plus rustique."
    ],
},


 'fricassee-lapin-pruneaux': {
    name:       'Fricassée de lapin aux pruneaux',
    region:     'Touraine / Bourgogne',
    anecdote:   'Le lapin mijoté au vin et aux pruneaux est un classique du Val de Loire, mêlant douceur et caractère.',
    tags:       ["Hiver", "Plat principal", "Tradition"],
    prep:       '20 min',
    cuisson:    '1 h 15',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1", name: "lapin découpé", note: "1,2 à 1,5 kg" },
                { qty: "150 g", name: "lardons fumés", note: "" }
            ]
        },
        {
            groupe: "Fruits & garniture",
            items: [
                { qty: "200 g", name: "pruneaux dénoyautés", note: "trempés 15 min dans de l’eau tiède" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "carotte", note: "coupée en rondelles" }
            ]
        },
        {
            groupe: "Liquides & aromates",
            items: [
                { qty: "25 cl", name: "vin blanc sec", note: "ou rouge léger type Gamay" },
                { qty: "10 cl", name: "bouillon de volaille", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1", name: "branche de thym", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 filet", name: "huile ou beurre", note: "pour la cuisson" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Dorer le lapin",
            texte: "Faire chauffer un peu d’huile ou de beurre dans une cocotte. Dorer les morceaux de lapin sur toutes les faces. Réserver.",
            timer: "10 min"
        },
        {
            titre: "Faire revenir la garniture",
            texte: "Dans la même cocotte, faire revenir les lardons, les oignons, l’ail et la carotte jusqu’à légère coloration.",
            timer: "8 min"
        },
        {
            titre: "Déglacer et ajouter les pruneaux",
            texte: "Remettre le lapin, ajouter le vin, le bouillon, le thym, le laurier et les pruneaux égouttés. Porter à frémissement.",
            timer: "2 min"
        },
        {
            titre: "Mijoter",
            texte: "Couvrir et laisser cuire à feu doux 45 à 50 minutes. Les pruneaux vont fondre et parfumer la sauce.",
            timer: "50 min"
        },
        {
            titre: "Réduire la sauce",
            texte: "Retirer le couvercle et laisser réduire quelques minutes pour obtenir une sauce nappante.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement. Servir avec des pâtes fraîches, de la purée ou des pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Les pruneaux peuvent être trempés dans du thé ou du vin pour plus de parfum.",
        "Un vin rouge léger donne une sauce plus ronde, un vin blanc une sauce plus fine.",
        "Ne pas faire bouillir : la viande de lapin durcit si la cuisson est trop vive.",
        "Ajouter une cuillère de crème fraîche en fin de cuisson pour une version plus onctueuse."
    ],
},


'fricassee-morilles': {
    name:       'Fricassée de morilles à la crème',
    region:     'Franche-Comté / Lorraine',
    anecdote:   'Avril est le mois des morilles : ces champignons coniques et parfumés se poêlent simplement avec crème et échalotes.',
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '20 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Champignons",
            items: [
                { qty: "300 g", name: "morilles fraîches", note: "ou 40 g de morilles séchées réhydratées" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "20 g", name: "beurre", note: "" }
            ]
        },
        {
            groupe: "Crème & liquide",
            items: [
                { qty: "15 cl", name: "crème fraîche", note: "" },
                { qty: "5 cl", name: "vin blanc", note: "optionnel" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "persil", note: "ciselé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les morilles",
            texte: "Nettoyer soigneusement les morilles. Si elles sont séchées, les réhydrater 30 minutes dans de l’eau tiède puis bien rincer.",
            timer: "10 min"
        },
        {
            titre: "Faire revenir",
            texte: "Faire fondre le beurre, ajouter échalotes et ail, puis les morilles. Faire dorer quelques minutes.",
            timer: "5 min"
        },
        {
            titre: "Déglacer et crémer",
            texte: "Ajouter le vin blanc, laisser réduire, puis incorporer la crème. Laisser mijoter doucement.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Assaisonner, parsemer de persil et servir avec volaille, pâtes fraîches ou riz.",
            timer: "—"
        }
    ],

    conseils: [
        "Les morilles doivent toujours être bien cuites : crues, elles sont toxiques.",
        "Ajouter un peu de fond de volaille pour une sauce plus corsée.",
        "Parfait avec une volaille rôtie ou un risotto."
    ]
},


'fricassee-poulet-champignons': {
    name:       'Fricassée de poulet aux champignons',
    region:     'Bourgogne',
    anecdote:   'Les champignons séchés de l’hiver réhydratés donnent à cette fricassée bourguignonne une profondeur aromatique incomparable.',
    tags:       ["Hiver", "Plat principal", "Tradition"],
    prep:       '20 min',
    cuisson:    '50 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier découpé", note: "1,3 à 1,5 kg" }
            ]
        },
        {
            groupe: "Champignons",
            items: [
                { qty: "300 g", name: "champignons de Paris", note: "émincés" },
                { qty: "20 g", name: "champignons séchés", note: "réhydratés 20 min dans de l’eau chaude" }
            ]
        },
        {
            groupe: "Légumes & aromates",
            items: [
                { qty: "2", name: "échalotes", note: "finement ciselées" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "carotte", note: "coupée en petits dés" },
                { qty: "1", name: "branche de thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        },
        {
            groupe: "Liquides & liaison",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "type Bourgogne aligoté" },
                { qty: "15 cl", name: "bouillon de volaille", note: "" },
                { qty: "15 cl", name: "crème fraîche épaisse", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 filet", name: "huile ou beurre", note: "pour la cuisson" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Dorer le poulet",
            texte: "Faire chauffer un peu de beurre ou d’huile dans une cocotte. Dorer les morceaux de poulet sur toutes les faces. Réserver.",
            timer: "10 min"
        },
        {
            titre: "Faire revenir les légumes",
            texte: "Dans la même cocotte, faire revenir échalotes, ail et carotte jusqu’à légère coloration.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les champignons",
            texte: "Ajouter les champignons frais et les champignons séchés réhydratés. Faire revenir jusqu’à évaporation de l’eau de végétation.",
            timer: "8 min"
        },
        {
            titre: "Déglacer et mijoter",
            texte: "Remettre le poulet, ajouter le vin blanc, le bouillon, le thym et le laurier. Couvrir et laisser mijoter à feu doux 25 à 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Lier la sauce",
            texte: "Ajouter la crème fraîche, mélanger et laisser réduire quelques minutes pour obtenir une sauce onctueuse.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement. Servir avec du riz, des pâtes fraîches ou des pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Les champignons séchés apportent une profondeur aromatique incomparable.",
        "Un vin blanc bourguignon sec donne une sauce plus fine et parfumée.",
        "Ne pas faire bouillir après ajout de la crème pour éviter qu’elle ne tranche.",
        "Ajouter un filet de jus de citron en fin de cuisson pour réveiller les saveurs."
    ],
},


'frittata-legumes': {
    name:       'Frittata aux légumes d\'été',
    region:     'Provence / Côte d\'Azur',
    anecdote:   'La frittata italienne, omelette épaisse aux légumes de saison, est idéale chaude ou froide au pique-nique.',
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '20 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "8", name: "œufs", note: "" },
                { qty: "10 cl", name: "lait ou crème", note: "" },
                { qty: "50 g", name: "parmesan râpé", note: "" }
            ]
        },
        {
            groupe: "Légumes d’été",
            items: [
                { qty: "1", name: "courgette", note: "coupée en dés" },
                { qty: "1", name: "poivron rouge", note: "coupé en lanières" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "2", name: "tomates", note: "coupées en dés, épépinées" }
            ]
        },
        {
            groupe: "Assaisonnement & aromates",
            items: [
                { qty: "1 filet", name: "huile d’olive", note: "" },
                { qty: "1 pincée", name: "sel & poivre", note: "" },
                { qty: "1 c. à café", name: "herbes de Provence", note: "" },
                { qty: "quelques feuilles", name: "basilic frais", note: "optionnel" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Faire revenir courgette, poivron et oignon dans l’huile d’olive 8 à 10 minutes jusqu’à ce qu’ils soient tendres. Ajouter les tomates en fin de cuisson.",
            timer: "10 min"
        },
        {
            titre: "Battre les œufs",
            texte: "Dans un saladier, battre les œufs avec le lait (ou la crème), le parmesan, le sel, le poivre et les herbes de Provence.",
            timer: "2 min"
        },
        {
            titre: "Assembler",
            texte: "Verser les légumes dans la poêle, puis ajouter le mélange d’œufs. Mélanger légèrement pour répartir les légumes.",
            timer: "1 min"
        },
        {
            titre: "Cuire la frittata",
            texte: "Cuire à feu doux 8 à 10 minutes sans remuer, jusqu’à ce que les bords soient pris. Terminer 2 minutes sous le gril du four pour dorer le dessus.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Laisser tiédir quelques minutes. Servir chaud, tiède ou froid, avec une salade.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop cuire les œufs : la frittata doit rester moelleuse.",
        "Ajouter de la feta ou de la mozzarella pour une version plus gourmande.",
        "Les légumes peuvent varier selon la saison : épinards, asperges, brocoli…",
        "Idéale en pique-nique car elle se mange très bien froide."
    ],
},


'galantine-volaille': {
    name:       'Galantine de volaille',
    region:     'Île-de-France / Lyonnais',
    anecdote:   'Entre Noël et le Nouvel An, on prépare la galantine : volaille désossée, farcie, roulée en ballotine et servie froide.',
    tags:       ["Hiver", "Plat principal", "Charcuterie"],
    prep:       '45 min',
    cuisson:    '1 h 20',
    personnes:  6,
    difficulte: 'Difficile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier entier", note: "désossé entièrement" },
                { qty: "200 g", name: "chair de volaille", note: "ou farce fine" },
                { qty: "100 g", name: "foie de volaille", note: "haché" }
            ]
        },
        {
            groupe: "Garniture de farce",
            items: [
                { qty: "80 g", name: "pistaches", note: "non salées" },
                { qty: "80 g", name: "jambon blanc", note: "coupé en dés" },
                { qty: "1", name: "échalote", note: "finement ciselée" },
                { qty: "1", name: "œuf", note: "" },
                { qty: "5 cl", name: "crème liquide", note: "" },
                { qty: "1 c. à soupe", name: "cognac ou armagnac", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 c. à café", name: "sel", note: "" },
                { qty: "1/2 c. à café", name: "poivre", note: "" },
                { qty: "1 pincée", name: "quatre-épices", note: "" }
            ]
        },
        {
            groupe: "Matériel",
            items: [
                { qty: "1", name: "torchon propre", note: "ou film alimentaire résistant" },
                { qty: "1", name: "ficelle de cuisine", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la volaille",
            texte: "Désosser entièrement le poulet en gardant la peau intacte. Étaler la volaille à plat, peau vers le bas.",
            timer: "20 min"
        },
        {
            titre: "Préparer la farce",
            texte: "Mélanger la chair de volaille, le foie haché, l’échalote, l’œuf, la crème, le cognac, les pistaches et le jambon. Assaisonner de sel, poivre et quatre-épices.",
            timer: "10 min"
        },
        {
            titre: "Former la galantine",
            texte: "Étaler la farce sur la volaille. Rouler fermement en ballotine, puis envelopper dans un torchon et ficeler solidement les extrémités.",
            timer: "10 min"
        },
        {
            titre: "Cuisson au bouillon",
            texte: "Plonger la galantine dans un grand bouillon frémissant (sans bouillir). Cuire 1 h 10 à 1 h 20 selon la taille.",
            timer: "1 h 20"
        },
        {
            titre: "Refroidissement",
            texte: "Égoutter, laisser tiédir puis placer au réfrigérateur au moins 12 h pour raffermir et développer les saveurs.",
            timer: "12 h"
        },
        {
            titre: "Service",
            texte: "Servir froid, en tranches, avec cornichons, salade ou chutney.",
            timer: "—"
        }
    ],

    conseils: [
        "La galantine est meilleure le lendemain : les saveurs se développent.",
        "Bien serrer la ballotine pour éviter que la farce ne se disperse.",
        "On peut remplacer les pistaches par des noisettes ou des abricots secs.",
        "Servir avec un bon pain de campagne et un vin blanc sec."
    ],
},


'galette-briochee': {
    name:       'Galette des Rois briochée',
    region:     'Sud de la France',
    anecdote:   'Dans le Midi, la galette des Rois est une brioche en couronne, parfumée à la fleur d’oranger et garnie de fruits confits.',
    tags:       ["Hiver", "Dessert", "Moyen"],
    prep:       '25 min',
    cuisson:    '25 min',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Pâte briochée",
            items: [
                { qty: "300 g", name: "farine", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "80 g", name: "beurre", note: "mou" },
                { qty: "50 g", name: "sucre", note: "" },
                { qty: "10 cl", name: "lait", note: "tiède" },
                { qty: "1 sachet", name: "levure boulangère", note: "" },
                { qty: "2 c. à soupe", name: "fleur d’oranger", note: "" },
                { qty: "1", name: "fève", note: "" }
            ]
        },
        {
            groupe: "Garniture & finition",
            items: [
                { qty: "80 g", name: "fruits confits", note: "en dés" },
                { qty: "1", name: "jaune d’œuf", note: "pour la dorure" },
                { qty: "2 c. à soupe", name: "sucre perlé", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Mélanger farine, sucre et levure. Ajouter œufs, lait tiède et fleur d’oranger. Incorporer le beurre et pétrir jusqu’à obtenir une pâte souple.",
            timer: "10 min"
        },
        {
            titre: "Première pousse",
            texte: "Laisser lever 1 h dans un endroit tiède jusqu’à ce que la pâte double de volume.",
            timer: "60 min"
        },
        {
            titre: "Façonner",
            texte: "Dégazer, incorporer les fruits confits, former une couronne et glisser la fève.",
            timer: "5 min"
        },
        {
            titre: "Deuxième pousse",
            texte: "Laisser lever encore 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Cuisson",
            texte: "Dorer au jaune d’œuf, parsemer de sucre perlé et cuire 20 à 25 minutes à 180°C.",
            timer: "25 min"
        }
    ],

    conseils: [
        "Ajouter des zestes d’orange pour renforcer le parfum.",
        "Pour une brioche plus moelleuse, laisser lever la pâte au réfrigérateur toute une nuit.",
        "Ne pas oublier la fève !"
    ]
},

'galette-des-rois': {
    name:       'Galette des Rois frangipane',
    region:     'Paris / Nord',
    anecdote:   'La galette des Rois, garnie de frangipane, est dégustée à l’Épiphanie. Qui trouvera la fève ?',
    tags:       ["Hiver", "Dessert", "Moyen"],
    prep:       '25 min',
    cuisson:    '30 min',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "2", name: "pâtes feuilletées", note: "pur beurre" }
            ]
        },
        {
            groupe: "Crème d’amande",
            items: [
                { qty: "100 g", name: "beurre", note: "mou" },
                { qty: "100 g", name: "sucre", note: "" },
                { qty: "100 g", name: "poudre d’amande", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "1 c. à soupe", name: "rhum", note: "optionnel" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "1", name: "jaune d’œuf", note: "pour la dorure" },
                { qty: "1", name: "fève", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la frangipane",
            texte: "Mélanger beurre mou, sucre et poudre d’amande. Ajouter les œufs et le rhum.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Dérouler une pâte, étaler la frangipane au centre en laissant 2 cm de bord. Glisser la fève.",
            timer: "5 min"
        },
        {
            titre: "Fermer la galette",
            texte: "Recouvrir avec la seconde pâte, souder les bords, dorer au jaune d’œuf et dessiner des motifs.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 180°C pendant 30 minutes jusqu’à ce que la galette soit bien dorée.",
            timer: "30 min"
        }
    ],

    conseils: [
        "Pour une frangipane plus légère, ajouter 2 cuillères de crème pâtissière.",
        "Laisser tiédir avant de découper pour éviter que la frangipane ne coule.",
        "Ne pas oublier la fève !"
    ]
},


'galettes-sarrasin': {
    name:       'Galettes de sarrasin complètes',
    region:     'Bretagne',
    anecdote:   'La galette de blé noir, garnie d’œuf, de jambon et de fromage, est l’âme de la cuisine bretonne.',
    tags:       ["Toute saison", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '20 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Pâte à galette",
            items: [
                { qty: "250 g", name: "farine de sarrasin", note: "" },
                { qty: "50 cl", name: "eau", note: "" },
                { qty: "1", name: "œuf", note: "pour lier" },
                { qty: "1 pincée", name: "sel", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "4", name: "œufs", note: "" },
                { qty: "4 tranches", name: "jambon blanc", note: "" },
                { qty: "120 g", name: "fromage râpé", note: "emmental" },
                { qty: "20 g", name: "beurre", note: "pour la cuisson" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Mélanger farine, sel, œuf et eau jusqu’à obtenir une pâte fluide. Laisser reposer 1 h.",
            timer: "10 min"
        },
        {
            titre: "Cuire les galettes",
            texte: "Verser une louche de pâte dans une poêle chaude beurrée. Cuire 1 minute de chaque côté.",
            timer: "10 min"
        },
        {
            titre: "Garnir",
            texte: "Déposer jambon, fromage et casser un œuf au centre. Replier les bords.",
            timer: "5 min"
        },
        {
            titre: "Finaliser",
            texte: "Cuire jusqu’à ce que le fromage fonde et que le blanc d’œuf soit pris.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter une noisette de beurre salé pour une version plus bretonne.",
        "Remplacer le jambon par de l’andouille de Guémené pour une variante locale.",
        "La pâte gagne en souplesse après 1 h de repos : ne pas zapper cette étape."
    ]
},


'garbure-bearnaise': {
    name:       'Garbure béarnaise',
    region:     'Béarn',
    anecdote:   'Soupe paysanne épaisse au confit de canard, au chou et aux légumes d’hiver : le cœur chaud des Pyrénées.',
    tags:       ["Hiver", "Plat principal", "Rustique"],
    prep:       '25 min',
    cuisson:    '1 h 30',
    personnes:  6,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "2 cuisses", name: "confit de canard", note: "" },
                { qty: "150 g", name: "lard", note: "ou poitrine salée" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "1/2", name: "chou vert", note: "émincé" },
                { qty: "4", name: "pommes de terre", note: "en morceaux" },
                { qty: "3", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "poireaux", note: "en tronçons" },
                { qty: "1", name: "oignon", note: "piqué d’un clou de girofle" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "1,5 L", name: "bouillon", note: "de volaille ou eau" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "thym, laurier" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les viandes",
            texte: "Faire fondre légèrement la graisse du confit. Réserver les cuisses et conserver un peu de graisse pour la cuisson.",
            timer: "5 min"
        },
        {
            titre: "Faire revenir les légumes",
            texte: "Dans une grande marmite, faire revenir oignon, poireaux, carottes et lard dans la graisse du confit.",
            timer: "10 min"
        },
        {
            titre: "Cuire la garbure",
            texte: "Ajouter chou, pommes de terre, bouquet garni et bouillon. Cuire 1 h à feu doux.",
            timer: "60 min"
        },
        {
            titre: "Ajouter le confit",
            texte: "Ajouter les cuisses de confit et poursuivre la cuisson 20 à 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "La garbure est encore meilleure réchauffée le lendemain.",
        "On peut ajouter des haricots blancs pour une version plus riche.",
        "Traditionnellement, on termine par un ‘chabrot’ : un peu de vin rouge dans le fond de l’assiette."
    ]
},


'garbure-haricots-tarbais': {
    name:       'Garbure aux haricots tarbais',
    region:     'Hautes-Pyrénées',
    anecdote:   'Le haricot tarbais, tendre et fondant, donne à cette garbure pyrénéenne son velouté incomparable.',
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       '20 min',
    cuisson:    '1 h 45',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Légumineuses",
            items: [
                { qty: "300 g", name: "haricots tarbais", note: "trempés 12 h" }
            ]
        },
        {
            groupe: "Viandes",
            items: [
                { qty: "1", name: "manchon de canard confit", note: "" },
                { qty: "150 g", name: "poitrine salée", note: "" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "poireaux", note: "en tronçons" },
                { qty: "2", name: "pommes de terre", note: "en morceaux" },
                { qty: "1", name: "oignon", note: "piqué d’un clou de girofle" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "1,5 L", name: "bouillon", note: "ou eau" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les haricots",
            texte: "Égoutter les haricots trempés, les mettre dans une marmite avec le bouillon et porter à frémissement 45 minutes.",
            timer: "45 min"
        },
        {
            titre: "Ajouter légumes et viandes",
            texte: "Ajouter carottes, poireaux, pommes de terre, oignon, poitrine salée et manchon de canard.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Ajouter le bouquet garni et cuire encore 50 à 60 minutes à feu doux.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Retirer le bouquet garni, rectifier l’assaisonnement et servir bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Les haricots tarbais ne doivent jamais bouillir fort : ils éclatent.",
        "Pour une texture plus veloutée, écraser quelques haricots en fin de cuisson.",
        "Ajouter un morceau de jarret ou de jambonneau pour une version plus riche."
    ]
},


'gaspacho': {
    name:       'Gaspacho andalou',
    region:     'Espagne / Languedoc',
    anecdote:   'La soupe froide de tomates, poivrons et concombre est adoptée dès mai dans le Languedoc quand la chaleur revient.',
    tags:       ["Été", "Entrée", "Froid"],
    prep:       '15 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "800 g", name: "tomates bien mûres", note: "" },
                { qty: "1", name: "poivron rouge", note: "" },
                { qty: "1", name: "concombre", note: "" },
                { qty: "1", name: "gousse d’ail", note: "" },
                { qty: "1/2", name: "oignon", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "2 c. à soupe", name: "vinaigre de Xérès", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "1 poignée", name: "croûtons", note: "maison" },
                { qty: "", name: "huile d’olive", note: "filet final" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Éplucher le concombre, épépiner le poivron, couper les légumes en morceaux.",
            timer: "5 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer tomates, poivron, concombre, ail et oignon avec huile, vinaigre, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Affiner",
            texte: "Passer au tamis pour une texture plus lisse si souhaité. Réfrigérer 1 h.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Servir très frais avec croûtons et un filet d’huile d’olive.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de mie de pain pour un gaspacho plus épais.",
        "Remplacer le poivron rouge par du vert pour une version plus herbacée.",
        "Toujours servir très froid : c’est la clé du goût."
    ]
},


'gaspacho-vert': {
    name:       'Gaspacho vert au concombre',
    region:     'Provence / Espagne',
    anecdote:   'Concombre, avocat, basilic et citron vert donnent à ce gaspacho vert une fraîcheur incomparable.',
    tags:       ["Été", "Entrée", "Froid"],
    prep:       '15 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes & fruits",
            items: [
                { qty: "2", name: "concombres", note: "épluchés" },
                { qty: "1", name: "avocat", note: "mûr" },
                { qty: "1", name: "poivron vert", note: "" },
                { qty: "1 poignée", name: "basilic", note: "" },
                { qty: "1", name: "gousse d’ail", note: "" }
            ]
        },
        {
            groupe: "Liquides & assaisonnement",
            items: [
                { qty: "1", name: "citron vert", note: "jus" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "10 cl", name: "eau froide", note: "ajuster selon texture" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "", name: "graines", note: "courge ou sésame" },
                { qty: "", name: "basilic", note: "feuilles entières" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Couper concombres, avocat et poivron en morceaux.",
            timer: "5 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer tous les ingrédients avec eau, huile, citron, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Affiner",
            texte: "Ajuster la texture avec un peu d’eau. Réfrigérer 1 h.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Servir très frais avec quelques graines et du basilic.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de yaourt grec pour une texture plus crémeuse.",
        "Remplacer le basilic par de la coriandre pour une version plus exotique.",
        "Un filet d’huile d’olive au moment de servir renforce les arômes."
    ]
},


'gateau-basque-creme': {
    name:       'Gâteau basque à la crème',
    region:     'Pays Basque',
    anecdote:   'Pâte sablée dorée et crème pâtissière vanillée : le gâteau basque est la fierté des villages labourdins.',
    tags:       ["Toute saison", "Dessert", "Moyen"],
    prep:       '25 min',
    cuisson:    '40 min',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Pâte sablée",
            items: [
                { qty: "300 g", name: "farine", note: "" },
                { qty: "150 g", name: "beurre", note: "mou" },
                { qty: "150 g", name: "sucre", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "1", name: "jaune d’œuf", note: "pour la dorure" },
                { qty: "1 pincée", name: "sel", note: "" }
            ]
        },
        {
            groupe: "Crème pâtissière",
            items: [
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "1", name: "gousse de vanille", note: "" },
                { qty: "3", name: "jaunes d’œufs", note: "" },
                { qty: "80 g", name: "sucre", note: "" },
                { qty: "40 g", name: "maïzena", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Mélanger beurre et sucre, ajouter les œufs puis la farine et le sel. Former une boule et réserver 1 h au frais.",
            timer: "10 min"
        },
        {
            titre: "Préparer la crème",
            texte: "Chauffer le lait avec la vanille. Blanchir jaunes et sucre, ajouter la maïzena, puis verser le lait chaud. Cuire jusqu’à épaississement.",
            timer: "10 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Étaler la moitié de la pâte dans un moule beurré. Verser la crème refroidie.",
            timer: "5 min"
        },
        {
            titre: "Fermer le gâteau",
            texte: "Recouvrir avec le reste de pâte, souder les bords et dorer au jaune d’œuf.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 35 à 40 minutes à 180°C jusqu’à belle coloration.",
            timer: "40 min"
        }
    ],

    conseils: [
        "Pour une version traditionnelle, ajouter un trait de rhum dans la crème.",
        "La pâte doit être bien froide pour être manipulée facilement.",
        "Se déguste encore meilleur le lendemain."
    ]
},

'gazpacho-pasteque': {
    name:       'Gazpacho de pastèque et feta',
    region:     'Languedoc / Provence',
    anecdote:   'La pastèque mixée avec concombre, citron et feta émiettée donne une soupe froide d’été très désaltérante.',
    tags:       ["Été", "Entrée", "Froid"],
    prep:       '15 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fruits & légumes",
            items: [
                { qty: "600 g", name: "pastèque", note: "sans pépins" },
                { qty: "1", name: "concombre", note: "épluché" },
                { qty: "1", name: "poivron rouge", note: "" },
                { qty: "1", name: "gousse d’ail", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "citron vert", note: "jus" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "80 g", name: "feta", note: "émiettée" },
                { qty: "1 poignée", name: "menthe", note: "ciselée" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les ingrédients",
            texte: "Couper pastèque, concombre et poivron en morceaux.",
            timer: "5 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer fruits et légumes avec citron, huile, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Affiner",
            texte: "Ajuster la texture avec un peu d’eau si nécessaire. Réfrigérer 1 h.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Servir très frais, parsemé de feta et de menthe.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de piment d’Espelette pour relever.",
        "Remplacer la feta par de la mozzarella pour une version plus douce.",
        "Toujours servir bien froid pour conserver la fraîcheur."
    ]
},

'gigot-chevreuil-airelles': {
    name:       'Gigot de chevreuil aux airelles',
    region:     'Alsace / Lorraine',
    anecdote:   'Plat de chasse emblématique, le chevreuil aux airelles mêle la finesse du gibier et l’acidité des baies sauvages.',
    tags:       ["Automne", "Hiver", "Plat principal", "Gibier"],
    prep:       '25 min',
    cuisson:    '1 h 30',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1,2 kg", name: "gigot de chevreuil", note: "désossé ou non" },
                { qty: "2 c. à soupe", name: "huile", note: "" }
            ]
        },
        {
            groupe: "Légumes & aromates",
            items: [
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "" },
                { qty: "1", name: "bouquet garni", note: "thym, laurier" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "20 cl", name: "vin rouge", note: "" },
                { qty: "20 cl", name: "fond de gibier", note: "" },
                { qty: "150 g", name: "airelles", note: "fraîches ou en bocal" },
                { qty: "1 c. à soupe", name: "gelée de groseille", note: "optionnelle" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir le gigot",
            texte: "Chauffer l’huile dans une cocotte et saisir le gigot sur toutes les faces.",
            timer: "10 min"
        },
        {
            titre: "Ajouter légumes et aromates",
            texte: "Ajouter carottes, oignons, ail et bouquet garni. Faire revenir quelques minutes.",
            timer: "5 min"
        },
        {
            titre: "Déglacer et cuire",
            texte: "Verser le vin rouge, laisser réduire, puis ajouter le fond de gibier. Couvrir et cuire 1 h 15 à feu doux.",
            timer: "75 min"
        },
        {
            titre: "Ajouter les airelles",
            texte: "Incorporer les airelles et la gelée de groseille. Cuire encore 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Retirer le bouquet garni, rectifier l’assaisonnement et servir avec spaetzle ou purée.",
            timer: "—"
        }
    ],

    conseils: [
        "Mariner le gigot 12 h dans vin rouge + aromates pour une viande plus tendre.",
        "Les airelles fraîches donnent une acidité plus vive que celles en bocal.",
        "Ne pas trop cuire : le chevreuil sèche vite."
    ]
},


'gigot-herbes-printemps': {
    name:       'Rôti de gigot aux herbes de printemps',
    region:     'Provence',
    anecdote:   'Le gigot d’agneau parfumé au romarin, thym et ail est le plat pascal traditionnel du Sud.',
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '1 h 20',
    personnes:  6,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1,5 kg", name: "gigot d’agneau", note: "avec os" }
            ]
        },
        {
            groupe: "Herbes & aromates",
            items: [
                { qty: "4", name: "gousses d’ail", note: "en éclats" },
                { qty: "2 branches", name: "romarin", note: "" },
                { qty: "2 branches", name: "thym", note: "" },
                { qty: "1", name: "citron", note: "zeste" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" }
            ]
        },
        {
            groupe: "Légumes d’accompagnement",
            items: [
                { qty: "6", name: "pommes de terre", note: "en quartiers" },
                { qty: "3", name: "carottes", note: "en tronçons" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le gigot",
            texte: "Inciser la viande et y glisser des éclats d’ail. Badigeonner d’huile d’olive, romarin, thym, sel et poivre.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Déposer pommes de terre et carottes autour du gigot dans un plat.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner à 200°C pendant 20 min, puis baisser à 170°C et cuire encore 1 h en arrosant régulièrement.",
            timer: "80 min"
        },
        {
            titre: "Repos",
            texte: "Laisser reposer 10 minutes avant de découper.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Servir avec les légumes rôtis et un jus déglacé au citron.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques tomates cerises en fin de cuisson pour une touche provençale.",
        "Pour une viande plus parfumée, laisser mariner 2 h dans huile + herbes.",
        "Le gigot rosé est idéal : surveiller la cuisson."
    ]
},


'gigot-sept-heures': {
    name:       "Gigot d'agneau de 7 heures",
    region:     'Provence',
    anecdote:   "Confit longuement au four, le gigot devient si tendre qu'il se mange à la cuillère : la récompense de la patience.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       '20 min',
    cuisson:    '7 h',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1,8 à 2 kg", name: "gigot d’agneau", note: "avec os" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" }
            ]
        },
        {
            groupe: "Légumes & aromates",
            items: [
                { qty: "4", name: "carottes", note: "en tronçons" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "4", name: "gousses d’ail", note: "écrasées" },
                { qty: "2", name: "branches de céleri", note: "" },
                { qty: "1", name: "bouquet garni", note: "thym, laurier" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "25 cl", name: "vin blanc", note: "" },
                { qty: "25 cl", name: "bouillon", note: "de volaille ou légumes" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir le gigot",
            texte: "Faire chauffer l’huile dans une cocotte et saisir le gigot sur toutes ses faces.",
            timer: "10 min"
        },
        {
            titre: "Ajouter légumes et aromates",
            texte: "Ajouter carottes, oignons, ail, céleri et bouquet garni. Faire revenir quelques minutes.",
            timer: "5 min"
        },
        {
            titre: "Mouiller et couvrir",
            texte: "Verser vin blanc et bouillon. Couvrir hermétiquement (couvercle + pâte morte si nécessaire).",
            timer: "5 min"
        },
        {
            titre: "Cuisson longue",
            texte: "Cuire 7 heures à 120°C sans ouvrir le four. La viande doit être confite et se détacher toute seule.",
            timer: "7 h"
        },
        {
            titre: "Servir",
            texte: "Servir avec les légumes confits et arroser de jus réduit.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques pruneaux pour une touche sucrée provençale.",
        "La cocotte doit être parfaitement hermétique pour éviter l’évaporation.",
        "Le gigot peut être préparé la veille : il n’en sera que meilleur."
    ]
},

'girolles-a-la-creme': {
    name:       'Poêlée de girolles à la crème',
    region:     'Vosges / Alsace',
    anecdote:   "Les girolles d’automne, dorées au beurre puis nappées de crème, sont un classique forestier des Vosges.",
    tags:       ["Automne", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Champignons",
            items: [
                { qty: "400 g", name: "girolles fraîches", note: "nettoyées" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "1 poignée", name: "persil", note: "ciselé" }
            ]
        },
        {
            groupe: "Crème",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les girolles",
            texte: "Nettoyer les girolles sans les tremper dans l’eau. Les couper si elles sont grosses.",
            timer: "5 min"
        },
        {
            titre: "Poêler",
            texte: "Faire fondre le beurre, ajouter échalote et ail, puis les girolles. Faire sauter à feu vif.",
            timer: "5 min"
        },
        {
            titre: "Crémer",
            texte: "Ajouter la crème, laisser réduire légèrement, saler, poivrer.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de persil et servir chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne jamais laver les girolles à grande eau : elles se gorgent d’humidité.",
        "Ajouter un trait de vin blanc pour une version plus alsacienne.",
        "Délicieux avec une volaille rôtie ou sur des pâtes fraîches."
    ]
},


'glace-fraise-maison': {
    name:       'Glace maison à la fraise',
    region:     'France entière',
    anecdote:   "Les fraises de fin de saison, très parfumées, donnent une glace maison d'une fraîcheur incomparable.",
    tags:       ["Été", "Dessert", "Froid"],
    prep:       '15 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "400 g", name: "fraises", note: "bien mûres" },
                { qty: "100 g", name: "sucre", note: "" },
                { qty: "20 cl", name: "crème liquide", note: "froide" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les fraises",
            texte: "Équeuter et mixer les fraises avec le sucre et le citron.",
            timer: "5 min"
        },
        {
            titre: "Ajouter la crème",
            texte: "Incorporer la crème froide et mixer à nouveau pour obtenir un mélange homogène.",
            timer: "3 min"
        },
        {
            titre: "Turbiner",
            texte: "Verser dans une sorbetière et turbiner jusqu’à prise complète.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Déguster immédiatement ou placer au congélateur 1 h pour raffermir.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques feuilles de basilic pour une version plus fraîche.",
        "Remplacer une partie des fraises par des framboises pour un goût plus acidulé.",
        "Si tu n’as pas de sorbetière, congeler en remuant toutes les 30 minutes."
    ]
},


'glace-lavande-miel': {
    name:       'Glace maison à la lavande et miel',
    region:     'Provence',
    anecdote:   "La lavande de Haute-Provence infusée dans la crème, adoucie par le miel, donne une glace florale et délicate.",
    tags:       ["Été", "Dessert", "Froid"],
    prep:       '20 min',
    cuisson:    '5 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "30 cl", name: "crème liquide", note: "" },
                { qty: "20 cl", name: "lait", note: "" },
                { qty: "80 g", name: "miel", note: "de lavande si possible" },
                { qty: "1 c. à soupe", name: "fleurs de lavande", note: "alimentaires" },
                { qty: "3", name: "jaunes d’œufs", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Infuser la lavande",
            texte: "Chauffer lait et crème avec les fleurs de lavande. Couper le feu et laisser infuser 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Préparer la crème",
            texte: "Filtrer, ajouter le miel. Blanchir les jaunes, verser le mélange chaud dessus, puis cuire comme une crème anglaise.",
            timer: "10 min"
        },
        {
            titre: "Refroidir",
            texte: "Laisser refroidir complètement au réfrigérateur.",
            timer: "60 min"
        },
        {
            titre: "Turbiner",
            texte: "Verser dans une sorbetière et turbiner jusqu’à prise.",
            timer: "30 min"
        }
    ],

    conseils: [
        "Ne pas surdoser la lavande : le parfum devient vite trop puissant.",
        "Ajouter quelques zestes de citron pour une note plus vive.",
        "Servir avec des abricots rôtis ou des pêches pochées."
    ]
},


'gnocchis-pesto': {
    name:       'Gnocchis de pommes de terre au pesto',
    region:     'Provence / fusion',
    anecdote:   'Les gnocchis maison, moelleux et légers, nappés de pesto au basilic frais, annoncent le printemps.',
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       '30 min',
    cuisson:    '15 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Gnocchis",
            items: [
                { qty: "800 g", name: "pommes de terre farineuses", note: "type bintje" },
                { qty: "200 g", name: "farine", note: "à ajuster selon texture" },
                { qty: "1", name: "œuf", note: "" },
                { qty: "1 pincée", name: "sel", note: "" }
            ]
        },
        {
            groupe: "Pesto",
            items: [
                { qty: "1 bouquet", name: "basilic frais", note: "" },
                { qty: "40 g", name: "pignons de pin", note: "" },
                { qty: "50 g", name: "parmesan", note: "râpé" },
                { qty: "1 gousse", name: "ail", note: "" },
                { qty: "8 cl", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les pommes de terre",
            texte: "Cuire les pommes de terre avec la peau, puis les éplucher et les écraser encore chaudes.",
            timer: "20 min"
        },
        {
            titre: "Former la pâte",
            texte: "Ajouter farine, œuf et sel. Mélanger sans trop travailler pour garder des gnocchis légers.",
            timer: "5 min"
        },
        {
            titre: "Façonner les gnocchis",
            texte: "Former des boudins, couper en petits tronçons et rouler sur une fourchette pour marquer.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Plonger les gnocchis dans l’eau bouillante salée. Ils sont cuits lorsqu’ils remontent.",
            timer: "3 min"
        },
        {
            titre: "Préparer le pesto",
            texte: "Mixer basilic, pignons, ail, parmesan et huile. Assaisonner.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Mélanger les gnocchis chauds avec le pesto et servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop fariner : les gnocchis deviendraient durs.",
        "Remplacer les pignons par des amandes ou des noix de cajou.",
        "Ajouter un peu d’eau de cuisson pour lier le pesto."
    ]
},


'gratin-asperges-vertes': {
    name:       "Gratin d'asperges vertes au parmesan",
    region:     'Provence',
    anecdote:   "Les asperges vertes, plus rustiques que les blanches, se prêtent parfaitement à un gratin rapide au parmesan.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '20 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "600 g", name: "asperges vertes", note: "parées" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "60 g", name: "parmesan", note: "râpé" },
                { qty: "1", name: "gousse d’ail", note: "hachée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les asperges",
            texte: "Couper la base dure et blanchir les asperges 3 minutes dans l’eau bouillante salée.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer les asperges dans un plat, napper de crème, ail et parmesan.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 15 à 20 minutes à 200°C jusqu’à légère coloration.",
            timer: "20 min"
        },
        {
            titre: "Servir",
            texte: "Arroser d’un filet d’huile d’olive et servir chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de zeste de citron pour une touche fraîche.",
        "Remplacer le parmesan par du pecorino pour un goût plus marqué.",
        "Parfait en accompagnement d’un poisson grillé."
    ]
},


'gratin-blettes': {
    name:       'Gratin de blettes au fromage',
    region:     'Provence / Nice',
    anecdote:   "Les premières blettes de mars, fondantes et légèrement sucrées, se marient parfaitement avec un gratin au fromage.",
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '30 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "800 g", name: "blettes", note: "côtes et feuilles séparées" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "100 g", name: "fromage râpé", note: "emmental ou parmesan" },
                { qty: "1", name: "gousse d’ail", note: "hachée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les blettes",
            texte: "Séparer côtes et feuilles. Blanchir les côtes 5 minutes et les feuilles 2 minutes. Égoutter.",
            timer: "7 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer blettes dans un plat, mélanger crème, œufs, ail et fromage, puis verser sur les légumes.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 25 à 30 minutes à 190°C jusqu’à coloration dorée.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, avec un filet d’huile d’olive.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de muscade pour relever la crème.",
        "Remplacer le fromage par du chèvre frais pour une version plus provençale.",
        "Bien égoutter les blettes pour éviter un gratin trop humide."
    ]
},


'gratin-blettes-riz': {
    name:       'Gratin de blettes au riz et parmesan',
    region:     'Provence / Nice',
    anecdote:   "Plat familial niçois, le gratin de blettes au riz est nourrissant, parfumé et parfait en automne.",
    tags:       ["Automne", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "600 g", name: "blettes", note: "côtes et feuilles" }
            ]
        },
        {
            groupe: "Riz",
            items: [
                { qty: "150 g", name: "riz", note: "cuit à l’avance" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "2", name: "œufs", note: "" },
                { qty: "15 cl", name: "crème fraîche", note: "" },
                { qty: "80 g", name: "parmesan", note: "râpé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les blettes",
            texte: "Blanchir les côtes 5 minutes et les feuilles 2 minutes. Égoutter et hacher grossièrement.",
            timer: "7 min"
        },
        {
            titre: "Mélanger",
            texte: "Mélanger blettes, riz cuit, œufs, crème et la moitié du parmesan. Assaisonner.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Verser dans un plat, parsemer du reste de parmesan et enfourner 25 à 30 minutes à 190°C.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, légèrement arrosé d’huile d’olive.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter des pignons pour une touche niçoise traditionnelle.",
        "Remplacer le riz par du quinoa pour une version plus légère.",
        "Parfait accompagné d’une salade de tomates ou de roquette."
    ]
},


'gratin-cardons': {
    name:       'Gratin de cardons à la moelle',
    region:     'Lyon',
    anecdote:   "Plat emblématique des réveillons lyonnais, le cardon gratiné à la moelle est un héritage des bouchons.",
    tags:       ["Hiver", "Plat principal", "Traditionnel"],
    prep:       '25 min',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Légume",
            items: [
                { qty: "1 kg", name: "cardons", note: "frais ou en bocal" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "2", name: "os à moelle", note: "moelle extraite" },
                { qty: "60 g", name: "gruyère", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les cardons",
            texte: "Égoutter les cardons (ou les cuire 30 min dans de l’eau citronnée s’ils sont frais).",
            timer: "10 min"
        },
        {
            titre: "Préparer la béchamel",
            texte: "Faire fondre le beurre, ajouter la farine, puis le lait. Cuire jusqu’à épaississement. Assaisonner.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger cardons et béchamel. Ajouter la moelle en petits morceaux.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Verser dans un plat, parsemer de gruyère et enfourner 20 minutes à 200°C.",
            timer: "20 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien chaud, en accompagnement d’une volaille ou d’un rôti.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un trait de jus de citron dans la béchamel pour réveiller le plat.",
        "La moelle peut être remplacée par un peu de crème pour une version plus douce.",
        "Les cardons frais doivent être épluchés soigneusement pour retirer les fils."
    ]
},


'gratin-celeri-champignons': {
    name:       'Gratin de céleri aux champignons',
    region:     'Île-de-France / Bourgogne',
    anecdote:   "Le céleri rave, longtemps oublié, retrouve sa place dans ce gratin rustique aux champignons et fromage fondu.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "céleri rave", note: "épluché et coupé en dés" },
                { qty: "250 g", name: "champignons de Paris", note: "émincés" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1", name: "gousse d’ail", note: "hachée" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "80 g", name: "gruyère", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le céleri",
            texte: "Cuire les dés de céleri 10 minutes dans l’eau bouillante salée.",
            timer: "10 min"
        },
        {
            titre: "Poêler les champignons",
            texte: "Faire revenir champignons, échalote et ail dans un peu d’huile.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger céleri, champignons et crème. Assaisonner.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Verser dans un plat, parsemer de gruyère et enfourner 20 minutes à 200°C.",
            timer: "20 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, avec une salade d’endives ou un rôti.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques noisettes concassées pour une touche croquante.",
        "Remplacer le gruyère par du comté pour une version plus bourguignonne.",
        "Le céleri peut être cuit à la vapeur pour un goût plus doux."
    ]
},


'gratin-champignons-fromage': {
    name:       'Gratin de champignons au fromage',
    region:     'Auvergne / Franche-Comté',
    anecdote:   "Mélange de champignons de culture et de sous-bois, gratinés au comté ou au cantal : un plat simple et très parfumé.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '25 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Champignons",
            items: [
                { qty: "300 g", name: "champignons de Paris", note: "émincés" },
                { qty: "200 g", name: "champignons sauvages", note: "girolles, pleurotes, cèpes selon saison" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "20 g", name: "beurre", note: "" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "80 g", name: "comté ou cantal", note: "râpé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "persil", note: "ciselé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Poêler les champignons",
            texte: "Faire fondre le beurre, ajouter échalote et ail, puis les champignons. Cuire jusqu’à évaporation de l’eau.",
            timer: "10 min"
        },
        {
            titre: "Ajouter la crème",
            texte: "Incorporer la crème, saler, poivrer et laisser réduire légèrement.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Verser dans un plat, parsemer de fromage et enfourner 10 minutes à 200°C.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de persil et servir chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un trait de vin blanc pour une version plus jurassienne.",
        "Mélanger plusieurs champignons pour plus de profondeur aromatique.",
        "Servir avec une salade ou du riz pilaf."
    ]
},

'gratin-choufleur-mornay': {
    name:       'Gratin de chou-fleur sauce Mornay',
    region:     'Normandie / Paris',
    anecdote:   "Le chou-fleur de Bretagne nappé de sauce Mornay gratinée est un classique des tables familiales.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '30 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légume",
            items: [
                { qty: "1", name: "chou-fleur", note: "détaillé en fleurettes" }
            ]
        },
        {
            groupe: "Sauce Mornay",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "80 g", name: "gruyère", note: "râpé" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le chou-fleur",
            texte: "Cuire les fleurettes 10 minutes dans l’eau bouillante salée. Égoutter.",
            timer: "10 min"
        },
        {
            titre: "Préparer la sauce Mornay",
            texte: "Faire une béchamel avec beurre, farine et lait. Ajouter le gruyère et la muscade.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer le chou-fleur dans un plat et napper de sauce Mornay.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Enfourner 15 minutes à 200°C jusqu’à coloration.",
            timer: "15 min"
        }
    ],

    conseils: [
        "Ajouter quelques lardons pour une version plus gourmande.",
        "Remplacer le gruyère par du cheddar pour une touche anglo-normande.",
        "Parfait avec une viande blanche ou une salade verte."
    ]
},

'gratin-courge-parmesan': {
    name:       'Gratin de courge au parmesan',
    region:     'Île-de-France / Provence',
    anecdote:   "La courge butternut ou le potimarron, rôtis puis gratinés au parmesan et à la sauge, annoncent les premiers froids.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légume",
            items: [
                { qty: "800 g", name: "courge (butternut ou potimarron)", note: "en tranches fines" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "80 g", name: "parmesan", note: "râpé" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "6 feuilles", name: "sauge", note: "fraîche" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la courge",
            texte: "Éplucher si nécessaire, couper en tranches fines et disposer dans un plat huilé.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger crème, ail, sauge ciselée, sel et poivre. Verser sur la courge et parsemer de parmesan.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 30 à 35 minutes à 190°C jusqu’à ce que la courge soit fondante et gratinée.",
            timer: "35 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, avec une salade ou une volaille rôtie.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques noisettes concassées pour une touche croquante.",
        "Remplacer la sauge par du romarin pour une version plus provençale.",
        "Le potimarron n’a pas besoin d’être épluché."
    ]
},


'gratin-courgettes-chevre': {
    name:       'Gratin de courgettes au chèvre',
    region:     'Provence',
    anecdote:   "Les courgettes de juillet, gorgées de soleil, deviennent fondantes et parfumées avec du chèvre frais et du thym.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '25 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "700 g", name: "courgettes", note: "en rondelles" }
            ]
        },
        {
            groupe: "Fromage & aromates",
            items: [
                { qty: "150 g", name: "chèvre frais", note: "" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "1 c. à café", name: "thym", note: "ou herbes de Provence" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "2", name: "œufs", note: "" },
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "40 g", name: "parmesan", note: "râpé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les courgettes",
            texte: "Faire revenir les rondelles de courgettes 5 minutes dans un peu d’huile pour les faire dégorger.",
            timer: "5 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger œufs, crème, chèvre émietté, ail et thym.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer les courgettes dans un plat, verser l’appareil et parsemer de parmesan.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 20 à 25 minutes à 190°C jusqu’à coloration.",
            timer: "25 min"
        }
    ],

    conseils: [
        "Ajouter quelques tomates cerises pour une version plus estivale.",
        "Remplacer le chèvre par de la feta pour une touche méditerranéenne.",
        "Bien faire dégorger les courgettes pour éviter un gratin trop aqueux."
    ]
},

'gratin-dauphinois': {
    name:       'Gratin dauphinois',
    region:     'Dauphiné',
    anecdote:   "Le vrai gratin dauphinois ne contient ni fromage ni œufs : uniquement pommes de terre, crème et ail.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '1 h',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 kg", name: "pommes de terre", note: "variété fondante (Charlotte, Monalisa…)" }
            ]
        },
        {
            groupe: "Crème & lait",
            items: [
                { qty: "40 cl", name: "crème fraîche", note: "" },
                { qty: "20 cl", name: "lait", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "muscade", note: "optionnelle" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pommes de terre",
            texte: "Éplucher et couper en fines rondelles régulières (2–3 mm). Ne pas rincer pour conserver l’amidon.",
            timer: "10 min"
        },
        {
            titre: "Chauffer la crème",
            texte: "Faire chauffer crème, lait, ail, sel, poivre et muscade sans faire bouillir.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer les rondelles en couches dans un plat frotté à l’ail. Verser le mélange crème-lait.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 1 h à 160–170°C jusqu’à ce que les pommes de terre soient fondantes.",
            timer: "60 min"
        }
    ],

    conseils: [
        "Ne jamais ajouter de fromage : ce n’est plus un dauphinois.",
        "Utiliser des pommes de terre riches en amidon pour une texture crémeuse.",
        "Laisser reposer 10 minutes avant de servir pour une tenue parfaite."
    ]
},


'gratin-endives-jambon': {
    name:       "Gratin d'endives au jambon",
    region:     'Nord / Flandres',
    anecdote:   "Les chicons braisés, roulés dans du jambon et nappés de béchamel gratinée sont un pilier de la cuisine du Nord.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "6", name: "endives", note: "retirer le cône amer" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "6 tranches", name: "jambon blanc", note: "" }
            ]
        },
        {
            groupe: "Sauce béchamel",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "80 g", name: "gruyère", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les endives",
            texte: "Faire braiser les endives 20 minutes dans un peu de beurre ou les cuire à la vapeur. Bien les égoutter.",
            timer: "20 min"
        },
        {
            titre: "Préparer la béchamel",
            texte: "Faire fondre le beurre, ajouter la farine puis le lait. Cuire jusqu’à épaississement. Assaisonner.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Enrouler chaque endive dans une tranche de jambon et disposer dans un plat. Napper de béchamel.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Parsemer de gruyère et enfourner 15 minutes à 200°C.",
            timer: "15 min"
        }
    ],

    conseils: [
        "Bien égoutter les endives pour éviter un gratin trop aqueux.",
        "Ajouter un trait de jus de citron dans la béchamel pour équilibrer l’amertume.",
        "Remplacer le jambon par de la dinde pour une version plus légère."
    ]
},


'gratin-macaroni': {
    name:       'Gratin de macaroni',
    region:     'Savoie',
    anecdote:   'Les macaronis gratinés au comté et à la crème de Savoie réchauffent les longues soirées de montagne.',
    tags:       ["Hiver", "Plat principal", "Familial"],
    prep:       '15 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Pâtes",
            items: [
                { qty: "300 g", name: "macaroni", note: "" }
            ]
        },
        {
            groupe: "Fromages",
            items: [
                { qty: "200 g", name: "comté", note: "râpé" },
                { qty: "50 g", name: "emmental", note: "râpé (optionnel)" }
            ]
        },
        {
            groupe: "Appareil à gratin",
            items: [
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "20 cl", name: "lait", note: "" },
                { qty: "1", name: "œuf", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Beurrage",
            items: [
                { qty: "1 noix", name: "beurre", note: "pour le plat" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les pâtes",
            texte: "Faire cuire les macaroni dans une grande casserole d’eau salée, 2 minutes de moins que le temps indiqué. Égoutter.",
            timer: "8 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger la crème, le lait, l’œuf, la muscade, le sel et le poivre. Ajouter la moitié du comté.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Beurrer un plat à gratin. Mélanger les pâtes avec l’appareil et verser dans le plat. Parsemer du reste de comté.",
            timer: "2 min"
        },
        {
            titre: "Gratiner",
            texte: "Enfourner à 200°C pendant 20 à 25 minutes, jusqu’à ce que le dessus soit bien doré.",
            timer: "25 min"
        },
        {
            titre: "Servir",
            texte: "Laisser reposer 5 minutes avant de servir pour que le gratin se tienne.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter quelques lardons revenus pour une version plus montagnarde.",
        "Remplacer le comté par du beaufort pour un goût plus puissant.",
        "Cuire les pâtes al dente pour éviter qu’elles ne ramollissent au four.",
        "Un peu de chapelure sur le dessus donne un gratin encore plus croustillant."
    ],
},


'gratin-macaroni-comte-truffe': {
    name:       'Gratin de macaroni au comté et truffe',
    region:     'Franche-Comté',
    anecdote:   "Macaronis fondants, comté affiné et lamelles de truffe noire : un gratin simple mais luxueux.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       '20 min',
    cuisson:    '25 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Pâtes",
            items: [
                { qty: "300 g", name: "macaronis", note: "" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "30 g", name: "beurre", note: "" },
                { qty: "30 g", name: "farine", note: "" },
                { qty: "40 cl", name: "lait", note: "" },
                { qty: "150 g", name: "comté", note: "râpé" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Truffe",
            items: [
                { qty: "10 g", name: "truffe noire", note: "en lamelles ou copeaux" },
                { qty: "1 c. à café", name: "huile de truffe", note: "optionnelle" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les pâtes",
            texte: "Cuire les macaronis al dente dans l’eau salée. Égoutter.",
            timer: "8 min"
        },
        {
            titre: "Préparer la sauce",
            texte: "Faire fondre le beurre, ajouter la farine, puis le lait. Cuire jusqu’à épaississement. Ajouter comté, sel, poivre et muscade.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger pâtes et sauce. Ajouter la moitié de la truffe.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Verser dans un plat, parsemer du reste de comté et enfourner 10 minutes à 200°C.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Ajouter les lamelles de truffe restantes ou un filet d’huile de truffe.",
            timer: "—"
        }
    ],

    conseils: [
        "Utiliser un comté affiné 18 à 24 mois pour un goût plus puissant.",
        "Ne pas trop cuire les pâtes : elles finiront de cuire au four.",
        "La truffe se met toujours en fin de cuisson pour préserver son parfum."
    ]
},


'gratin-munster': {
    name:       'Gratin de pommes de terre au munster',
    region:     'Alsace / Vosges',
    anecdote:   "Le munster fermier fond sur les pommes de terre chaudes et embaume toute la maison : un gratin rustique et généreux.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 kg", name: "pommes de terre", note: "en rondelles" }
            ]
        },
        {
            groupe: "Fromage",
            items: [
                { qty: "250 g", name: "munster fermier", note: "coupé en tranches" }
            ]
        },
        {
            groupe: "Crème & aromates",
            items: [
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "cumin", note: "optionnel, très alsacien" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les pommes de terre",
            texte: "Cuire les rondelles 10 minutes dans l’eau bouillante salée. Égoutter.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer une couche de pommes de terre, ajouter ail, crème, sel, poivre et quelques tranches de munster. Répéter.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 20 à 25 minutes à 200°C jusqu’à ce que le fromage soit fondu et doré.",
            timer: "25 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud, avec une salade verte ou une saucisse fumée.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de cumin pour une version très traditionnelle.",
        "Utiliser un munster fermier affiné pour un goût plus puissant.",
        "Ne pas trop saler : le fromage l’est déjà."
    ]
},


'gratin-poireaux-jambon': {
    name:       'Gratin de poireaux au jambon',
    region:     'Picardie / Nord',
    anecdote:   "Les poireaux d’hiver, encore en pleine terre, se marient parfaitement avec le jambon et une béchamel gratinée.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "6", name: "poireaux", note: "blancs et verts tendres" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "4 tranches", name: "jambon blanc", note: "" }
            ]
        },
        {
            groupe: "Sauce béchamel",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "80 g", name: "gruyère", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les poireaux",
            texte: "Couper les poireaux en tronçons et les cuire 12 minutes à la vapeur ou dans l’eau bouillante salée. Bien égoutter.",
            timer: "12 min"
        },
        {
            titre: "Préparer la béchamel",
            texte: "Faire fondre le beurre, ajouter la farine puis le lait. Cuire jusqu’à épaississement. Assaisonner et ajouter la muscade.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Enrouler une portion de poireaux dans chaque tranche de jambon. Disposer dans un plat et napper de béchamel.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Parsemer de gruyère et enfourner 15 minutes à 200°C.",
            timer: "15 min"
        }
    ],

    conseils: [
        "Bien égoutter les poireaux pour éviter un gratin trop aqueux.",
        "Ajouter un trait de jus de citron dans la béchamel pour équilibrer la douceur du poireau.",
        "Remplacer le jambon par de la dinde pour une version plus légère."
    ]
},


'gratin-potiron-gorgonzola': {
    name:       'Gratin de potiron au gorgonzola',
    region:     'Savoie / fusion',
    anecdote:   'Le potiron doux d\'automne marié au gorgonzola crémeux donne un gratin audacieux et réconfortant.',
    tags:       ["Automne", "Plat principal", "Végétarien"],
    prep:       '20 min',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légume principal",
            items: [
                { qty: "800 g", name: "potiron", note: "coupé en dés" }
            ]
        },
        {
            groupe: "Fromage & crème",
            items: [
                { qty: "150 g", name: "gorgonzola", note: "doux ou piquant selon goût" },
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "10 cl", name: "lait", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "1 pincée", name: "muscade", note: "" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Optionnel",
            items: [
                { qty: "40 g", name: "noix concassées", note: "pour le croquant" },
                { qty: "30 g", name: "parmesan", note: "pour gratiner" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le potiron",
            texte: "Cuire les dés de potiron à la vapeur ou au four jusqu’à ce qu’ils soient tendres. Égoutter si nécessaire.",
            timer: "20 min"
        },
        {
            titre: "Préparer la sauce",
            texte: "Faire fondre le gorgonzola dans une casserole avec la crème et le lait. Ajouter l’ail, la muscade, le sel et le poivre.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Déposer le potiron dans un plat à gratin. Verser la sauce au gorgonzola par-dessus. Mélanger légèrement.",
            timer: "2 min"
        },
        {
            titre: "Gratiner",
            texte: "Parsemer de noix et de parmesan. Enfourner à 200°C pendant 15 minutes jusqu’à ce que le dessus soit doré.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Laisser reposer 5 minutes avant de servir pour que le gratin se tienne.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Le potimarron fonctionne aussi très bien et n’a pas besoin d’être épluché.",
        "Pour une version plus légère, remplacer la crème par du lait concentré non sucré.",
        "Ajouter des épinards ou du brocoli pour un gratin plus complet.",
        "Le gorgonzola doux donne un résultat crémeux, le piquant apporte plus de caractère."
    ],
},


'gratin-romanesco-fromage': {
    name:       'Gratin de chou romanesco au fromage',
    region:     'Bretagne / Île-de-France',
    anecdote:   "Le chou romanesco, géométrique et vert tendre, se prête parfaitement à un gratin automnal au comté.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '30 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légume",
            items: [
                { qty: "1", name: "chou romanesco", note: "détaillé en fleurettes" }
            ]
        },
        {
            groupe: "Sauce Mornay",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "100 g", name: "comté", note: "râpé" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le romanesco",
            texte: "Cuire les fleurettes 8 minutes dans l’eau bouillante salée. Égoutter.",
            timer: "8 min"
        },
        {
            titre: "Préparer la sauce Mornay",
            texte: "Faire une béchamel avec beurre, farine et lait. Ajouter le comté et la muscade.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer le romanesco dans un plat et napper de sauce Mornay.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Enfourner 12 à 15 minutes à 200°C jusqu’à coloration.",
            timer: "15 min"
        }
    ],

    conseils: [
        "Ajouter quelques noisettes concassées pour une touche croquante.",
        "Remplacer le comté par du cheddar pour une version plus douce.",
        "Le romanesco doit rester légèrement croquant pour garder sa texture."
    ]
},


'gratin-tomates-anciennes': {
    name:       'Gratin de tomates anciennes',
    region:     'Provence',
    anecdote:   "Les tomates cœur-de-bœuf ou ananas, simplement gratinées avec herbes et parmesan, incarnent l’été provençal.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '25 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "grosses tomates anciennes", note: "cœur-de-bœuf, ananas…" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "60 g", name: "chapelure", note: "" },
                { qty: "50 g", name: "parmesan", note: "râpé" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "1 c. à café", name: "herbes de Provence", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les tomates",
            texte: "Couper les tomates en deux, retirer un peu de jus et saler légèrement.",
            timer: "5 min"
        },
        {
            titre: "Préparer la garniture",
            texte: "Mélanger chapelure, parmesan, ail, herbes et huile d’olive.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Déposer la garniture sur les tomates et poivrer.",
            timer: "3 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 20 à 25 minutes à 190°C jusqu’à ce que le dessus soit doré.",
            timer: "25 min"
        }
    ],

    conseils: [
        "Ajouter quelques câpres ou olives noires pour une touche méditerranéenne.",
        "Choisir des tomates très mûres pour un goût optimal.",
        "Servir avec un poisson grillé ou une salade de roquette."
    ]
},


'grillades-agneau-romarin': {
    name:       "Grillades d'agneau au romarin",
    region:     'Provence / Languedoc',
    anecdote:   "Le premier barbecue de l'année : côtelettes d’agneau grillées, romarin jeté sur les braises, parfum du Sud.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '10 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "12", name: "côtelettes d’agneau", note: "ou tranches de gigot" }
            ]
        },
        {
            groupe: "Marinade",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "3", name: "brins de romarin", note: "frais" },
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1", name: "citron", note: "jus" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Mariner l’agneau",
            texte: "Mélanger huile, ail, citron, romarin, sel et poivre. Enrober les côtelettes et laisser reposer 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Griller",
            texte: "Saisir les côtelettes 3 à 4 minutes par face sur barbecue ou grill bien chaud.",
            timer: "8 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de romarin frais et servir avec légumes grillés.",
            timer: "—"
        }
    ],

    conseils: [
        "Jeter quelques brins de romarin directement sur les braises pour parfumer la fumée.",
        "Ne pas trop cuire : l’agneau doit rester rosé.",
        "Ajouter un filet de citron juste avant de servir."
    ]
},


'grillades-merguez': {
    name:       'Grillades de merguez et agneau',
    region:     'Maghreb / France entière',
    anecdote:   "Merguez épicées et morceaux d’agneau grillés : le duo incontournable des barbecues d’été.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '10 min',
    cuisson:    '12 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "8", name: "merguez", note: "" },
                { qty: "600 g", name: "épaule d’agneau", note: "coupée en cubes" }
            ]
        },
        {
            groupe: "Marinade pour l’agneau",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à café", name: "paprika", note: "" },
                { qty: "1 c. à café", name: "cumin", note: "" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Mariner l’agneau",
            texte: "Mélanger huile, épices, ail, sel et poivre. Enrober les cubes d’agneau et laisser reposer 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Former les brochettes",
            texte: "Enfiler les cubes d’agneau sur des piques.",
            timer: "5 min"
        },
        {
            titre: "Griller",
            texte: "Cuire merguez et brochettes 10 à 12 minutes en retournant régulièrement.",
            timer: "12 min"
        },
        {
            titre: "Servir",
            texte: "Servir avec semoule, salade ou légumes grillés.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas piquer les merguez pour éviter qu’elles ne sèchent.",
        "Ajouter un peu de harissa dans la marinade pour une version plus relevée.",
        "Alterner agneau et poivrons sur les brochettes pour plus de couleur."
    ]
},


'hachis-boeuf-pommes-terre': {
    name:       'Hachis de bœuf aux pommes de terre',
    region:     'France entière',
    anecdote:   "Plat familial d’automne, le hachis mêle viande mijotée et purée de pommes de terre au beurre.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "400 g", name: "bœuf haché", note: "" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "1", name: "carotte", note: "en petits dés" }
            ]
        },
        {
            groupe: "Purée",
            items: [
                { qty: "700 g", name: "pommes de terre", note: "chair farineuse" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "10 cl", name: "lait", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "muscade", note: "optionnelle" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la purée",
            texte: "Cuire les pommes de terre 20 minutes, écraser avec beurre et lait. Assaisonner.",
            timer: "20 min"
        },
        {
            titre: "Cuire la viande",
            texte: "Faire revenir oignon et carotte, ajouter le bœuf haché, saler, poivrer et cuire 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la viande dans un plat, couvrir de purée et lisser.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Enfourner 10 minutes à 200°C pour dorer légèrement.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Ajouter un peu de concentré de tomate dans la viande pour plus de profondeur.",
        "Parsemer de chapelure pour un dessus plus croustillant.",
        "Remplacer le bœuf par un mélange bœuf/porc pour une version plus moelleuse."
    ]
},

'hachis-parmentier': {
    name:       'Hachis Parmentier',
    region:     'Île-de-France',
    anecdote:   "Antoine Parmentier popularisa la pomme de terre au XVIIIe siècle. Ce gratin lui rend hommage.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "400 g", name: "bœuf haché", note: "" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "1", name: "gousse d’ail", note: "hachée" }
            ]
        },
        {
            groupe: "Purée",
            items: [
                { qty: "800 g", name: "pommes de terre", note: "chair farineuse" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "15 cl", name: "lait", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "60 g", name: "gruyère", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la purée",
            texte: "Cuire les pommes de terre 20 minutes, écraser avec beurre et lait. Assaisonner.",
            timer: "20 min"
        },
        {
            titre: "Préparer la viande",
            texte: "Faire revenir oignon et ail, ajouter le bœuf, saler, poivrer et cuire 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la viande dans un plat, couvrir de purée et parsemer de gruyère.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Enfourner 10 à 15 minutes à 200°C jusqu’à coloration.",
            timer: "15 min"
        }
    ],

    conseils: [
        "Ajouter un peu de vin rouge dans la viande pour une version plus riche.",
        "Incorporer un jaune d’œuf dans la purée pour plus d’onctuosité.",
        "Utiliser un reste de pot-au-feu effiloché pour une version traditionnelle."
    ]
},


'hachis-restes-noel': {
    name:       'Restes de Noël en hachis Parmentier',
    region:     'France entière',
    anecdote:   'Le 26 décembre, les restes de dinde ou de chapon se transforment en hachis Parmentier familial et généreux.',
    tags:       ["Hiver", "Plat principal", "Familial"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Restes de viande",
            items: [
                { qty: "400 g", name: "restes de dinde ou chapon", note: "effilochés ou hachés grossièrement" },
                { qty: "1 louche", name: "jus de rôti", note: "ou un peu de bouillon" }
            ]
        },
        {
            groupe: "Purée maison",
            items: [
                { qty: "800 g", name: "pommes de terre", note: "type Bintje" },
                { qty: "20 cl", name: "lait", note: "ou crème" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "1 filet", name: "huile ou beurre", note: "pour la cuisson" }
            ]
        },
        {
            groupe: "Gratin",
            items: [
                { qty: "50 g", name: "fromage râpé", note: "comté, emmental ou parmesan" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la purée",
            texte: "Cuire les pommes de terre dans l’eau salée. Les écraser avec le lait, le beurre, la muscade, le sel et le poivre.",
            timer: "20 min"
        },
        {
            titre: "Préparer la viande",
            texte: "Faire revenir l’oignon et l’ail dans un peu de beurre. Ajouter les restes de dinde effilochée et le jus de rôti. Laisser mijoter 5 minutes.",
            timer: "7 min"
        },
        {
            titre: "Assembler",
            texte: "Dans un plat à gratin, étaler la viande au fond puis recouvrir de purée. Lisser la surface.",
            timer: "3 min"
        },
        {
            titre: "Gratiner",
            texte: "Parsemer de fromage râpé et enfourner 15 minutes à 200°C jusqu’à ce que le dessus soit doré.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Laisser reposer 5 minutes avant de servir pour que le hachis se tienne.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter quelques marrons émiettés pour rester dans l’esprit de Noël.",
        "Un peu de crème dans la viande rend le hachis encore plus moelleux.",
        "Les restes de farce peuvent être mélangés à la viande pour plus de goût.",
        "Servir avec une salade verte pour équilibrer le plat."
    ],
},


'homard-armoricaine': {
    name:       "Homard à l'armoricaine",
    region:     'Bretagne',
    anecdote:   "Flambé au cognac puis mijoté dans une sauce tomate relevée, le homard à l’armoricaine est un classique des fêtes bretonnes.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       '25 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Homard",
            items: [
                { qty: "2", name: "homards bretons", note: "environ 600 g chacun" }
            ]
        },
        {
            groupe: "Base aromatique",
            items: [
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "carotte", note: "en dés" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "10 cl", name: "cognac", note: "pour flamber" },
                { qty: "20 cl", name: "vin blanc", note: "" },
                { qty: "30 cl", name: "coulis de tomate", note: "" },
                { qty: "1 c. à soupe", name: "concentré de tomate", note: "" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le homard",
            texte: "Couper les homards vivants en deux dans la longueur. Récupérer les sucs.",
            timer: "5 min"
        },
        {
            titre: "Saisir et flamber",
            texte: "Faire revenir les morceaux dans l’huile. Ajouter cognac et flamber.",
            timer: "5 min"
        },
        {
            titre: "Ajouter aromates et vin",
            texte: "Ajouter échalotes, ail, carotte, oignon. Déglacer au vin blanc.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Ajouter coulis, concentré, bouquet garni. Cuire 20 minutes à feu doux.",
            timer: "20 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir avec riz ou pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter une pointe de piment d’Espelette pour relever.",
        "Ne pas trop cuire : le homard devient sec rapidement.",
        "Un bon cognac améliore nettement la sauce."
    ]
},


'homard-grille-champagne': {
    name:       'Homard grillé au champagne',
    region:     'Bretagne / Normandie',
    anecdote:   "Pour les réveillons, le homard grillé arrosé de beurre au champagne est un incontournable des côtes bretonnes.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       '20 min',
    cuisson:    '15 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Homard",
            items: [
                { qty: "2", name: "homards bretons", note: "600 g chacun" }
            ]
        },
        {
            groupe: "Beurre au champagne",
            items: [
                { qty: "120 g", name: "beurre demi-sel", note: "fondu" },
                { qty: "10 cl", name: "champagne brut", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le homard",
            texte: "Couper les homards en deux dans la longueur. Retirer la poche de sable.",
            timer: "5 min"
        },
        {
            titre: "Préparer le beurre",
            texte: "Mélanger beurre fondu, champagne, échalote et persil.",
            timer: "5 min"
        },
        {
            titre: "Griller",
            texte: "Badigeonner les homards et griller 12 à 15 minutes au four ou barbecue.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Arroser de beurre au champagne restant et servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Utiliser un champagne brut pour éviter une sauce trop sucrée.",
        "Ajouter un peu de zeste de citron pour une note plus vive.",
        "Servir avec des tagliatelles fraîches ou du riz sauvage."
    ]
},


'huitres-gratinees-champagne': {
    name:       "Huîtres gratinées au champagne",
    region:     "Bretagne / Normandie",
    anecdote:   "Les huîtres de décembre, grasses et iodées, deviennent une entrée de fête lorsqu’elles sont nappées d’un sabayon au champagne.",
    tags:       ["Hiver", "Entrée", "Festif"],
    prep:       "20 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Huîtres",
            items: [
                { qty: "12", name: "huîtres creuses n°3", note: "ou plates n°2" }
            ]
        },
        {
            groupe: "Sabayon au champagne",
            items: [
                { qty: "10 cl", name: "champagne brut", note: "" },
                { qty: "3", name: "jaunes d’œufs", note: "" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "1 c. à soupe", name: "crème fraîche", note: "optionnelle" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "2 c. à soupe", name: "chapelure", note: "" },
                { qty: "", name: "poivre", note: "" },
                { qty: "1 c. à soupe", name: "persil", note: "ciselé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Ouvrir les huîtres",
            texte: "Ouvrir les huîtres, jeter la première eau et conserver la seconde. Les disposer dans un plat rempli de gros sel.",
            timer: "5 min"
        },
        {
            titre: "Préparer le sabayon",
            texte: "Fouetter jaunes et champagne au bain-marie jusqu’à épaississement. Ajouter beurre et crème.",
            timer: "8 min"
        },
        {
            titre: "Gratiner",
            texte: "Napper chaque huître de sabayon, parsemer de chapelure et poivre. Gratiner 2 à 3 minutes sous le gril.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de persil et servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop cuire : le sabayon doit juste dorer.",
        "Un champagne brut évite une sauce trop sucrée.",
        "Ajouter une pointe de zeste de citron pour plus de fraîcheur."
    ]
},


'joue-boeuf-braisee': {
    name:       "Joue de bœuf braisée au vin rouge",
    region:     "Bourgogne / Languedoc",
    anecdote:   "Longuement mijotée, la joue de bœuf devient fondante et nappée d’une sauce au vin rouge riche et parfumée.",
    tags:       ["Automne", "Hiver", "Plat principal", "Mijoté"],
    prep:       "20 min",
    cuisson:    "3 h",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1 kg", name: "joues de bœuf", note: "parées" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "50 cl", name: "vin rouge", note: "corsé (Bourgogne, Corbières…)" },
                { qty: "20 cl", name: "fond de veau", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "2 c. à soupe", name: "huile", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir la viande",
            texte: "Faire dorer les joues dans l’huile chaude sur toutes les faces.",
            timer: "10 min"
        },
        {
            titre: "Ajouter aromates",
            texte: "Ajouter carottes, oignons, ail et bouquet garni. Faire revenir quelques minutes.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Verser le vin rouge, laisser réduire de moitié, puis ajouter le fond de veau.",
            timer: "10 min"
        },
        {
            titre: "Mijoter",
            texte: "Couvrir et cuire 2 h 30 à feu doux jusqu’à ce que la viande soit fondante.",
            timer: "150 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir avec purée ou pâtes fraîches.",
            timer: "—"
        }
    ],

    conseils: [
        "Préparer la veille : la sauce n’en sera que meilleure.",
        "Ajouter quelques lardons fumés pour une version plus rustique.",
        "Un vin tannique donne une sauce plus profonde."
    ]
},


'joue-porc-lentilles': {
    name:       'Joue de porc aux lentilles',
    region:     'Île-de-France / Auvergne',
    anecdote:   "La joue de porc mijotée longuement avec les lentilles vertes du Puy est un classique de bistrot, fondant et parfumé.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       '20 min',
    cuisson:    '2 h',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "800 g", name: "joues de porc", note: "parées" }
            ]
        },
        {
            groupe: "Légumineuses",
            items: [
                { qty: "250 g", name: "lentilles vertes du Puy", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" },
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "20 cl", name: "vin blanc", note: "" },
                { qty: "60 cl", name: "bouillon", note: "de volaille ou légumes" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "2 c. à soupe", name: "huile", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir les joues",
            texte: "Faire dorer les joues de porc dans l’huile chaude sur toutes les faces.",
            timer: "10 min"
        },
        {
            titre: "Ajouter aromates et vin",
            texte: "Ajouter carottes, oignon, ail et bouquet garni. Déglacer au vin blanc.",
            timer: "10 min"
        },
        {
            titre: "Mijoter",
            texte: "Ajouter le bouillon, couvrir et cuire 1 h 30 à feu doux.",
            timer: "90 min"
        },
        {
            titre: "Cuire les lentilles",
            texte: "Cuire les lentilles 25 minutes dans de l’eau non salée. Égoutter.",
            timer: "25 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger lentilles et joues dans la cocotte. Cuire encore 10 minutes.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Ajouter quelques lardons fumés pour renforcer le goût.",
        "Les lentilles ne doivent jamais cuire dans l’eau salée : elles durcissent.",
        "Préparer la veille pour une sauce encore meilleure."
    ]
},


'kig-ha-farz': {
    name:       'Kig ha farz',
    region:     'Bretagne',
    anecdote:   "Le kig ha farz, pot-au-feu breton accompagné de farz noir cuit en baluchon, est un plat unique au monde.",
    tags:       ["Hiver", "Plat principal", "Traditionnel"],
    prep:       '25 min',
    cuisson:    '3 h',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "600 g", name: "paleron de bœuf", note: "" },
                { qty: "400 g", name: "lard demi-sel", note: "" },
                { qty: "1", name: "saucisse bretonne", note: "type andouille ou saucisse fumée" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "carottes", note: "" },
                { qty: "4", name: "pommes de terre", note: "" },
                { qty: "2", name: "poireaux", note: "" },
                { qty: "1", name: "navet", note: "" }
            ]
        },
        {
            groupe: "Farz noir",
            items: [
                { qty: "300 g", name: "farine de sarrasin", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "30 g", name: "beurre fondu", note: "" },
                { qty: "40 cl", name: "lait", note: "" },
                { qty: "", name: "sel", note: "" },
                { qty: "", name: "sucre", note: "une pincée (optionnel)" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le bouillon",
            texte: "Mettre viandes et légumes dans une grande marmite, couvrir d’eau, ajouter bouquet garni. Cuire 2 h à feu doux.",
            timer: "120 min"
        },
        {
            titre: "Préparer le farz",
            texte: "Mélanger farine, œufs, beurre, lait et sel. Verser dans un sac en toile et nouer.",
            timer: "10 min"
        },
        {
            titre: "Cuire le farz",
            texte: "Plonger le sac dans la marmite et cuire 1 h supplémentaire.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Émietter le farz (le « gwell »), servir avec viandes, légumes et bouillon.",
            timer: "—"
        }
    ],

    conseils: [
        "Le farz doit être bien serré dans son sac pour garder sa texture.",
        "Ajouter un peu de beurre salé fondu sur le farz au moment de servir.",
        "Le kig ha farz est encore meilleur réchauffé."
    ]
},


'kig-ha-farz-automne': {
    name:       'Kig ha farz',
    region:     'Bretagne',
    anecdote:   "Pot-au-feu breton accompagné de farz noir cuit en baluchon dans le bouillon : un plat unique, nourrissant et convivial.",
    tags:       ["Automne", "Hiver", "Plat principal", "Traditionnel"],
    prep:       '25 min',
    cuisson:    '3 h',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "600 g", name: "paleron de bœuf", note: "" },
                { qty: "400 g", name: "lard demi-sel", note: "" },
                { qty: "1", name: "saucisse bretonne", note: "type andouille ou saucisse fumée" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "carottes", note: "" },
                { qty: "4", name: "pommes de terre", note: "" },
                { qty: "2", name: "poireaux", note: "" },
                { qty: "1", name: "navet", note: "" }
            ]
        },
        {
            groupe: "Farz noir",
            items: [
                { qty: "300 g", name: "farine de sarrasin", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "30 g", name: "beurre fondu", note: "" },
                { qty: "40 cl", name: "lait", note: "" },
                { qty: "", name: "sel", note: "" },
                { qty: "", name: "sucre", note: "une pincée (optionnel)" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le bouillon",
            texte: "Mettre viandes et légumes dans une grande marmite, couvrir d’eau froide, ajouter bouquet garni. Cuire 2 h à feu doux.",
            timer: "120 min"
        },
        {
            titre: "Préparer le farz",
            texte: "Mélanger farine, œufs, beurre fondu, lait, sel et sucre. Verser dans un sac en toile, nouer solidement.",
            timer: "10 min"
        },
        {
            titre: "Cuire le farz",
            texte: "Plonger le sac dans la marmite et cuire 1 h supplémentaire avec le pot-au-feu.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Émietter le farz (le « gwell »), servir avec viandes, légumes et bouillon.",
            timer: "—"
        }
    ],

    conseils: [
        "Le farz doit être bien serré dans son sac pour garder sa texture.",
        "Ajouter un peu de beurre salé fondu sur le farz au moment de servir.",
        "Le kig ha farz est encore meilleur réchauffé."
    ]
},


'lapin-a-la-moutarde': {
    name:       'Lapin à la moutarde',
    region:     'Bourgogne / Dijon',
    anecdote:   'La moutarde de Dijon, forte et parfumée, est l\'alliée naturelle du lapin en sauce crémeuse.',
    tags:       ["Hiver", "Plat principal", "Tradition"],
    prep:       '20 min',
    cuisson:    '55 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1", name: "lapin découpé", note: "1,2 à 1,5 kg" },
                { qty: "3 c. à soupe", name: "moutarde de Dijon", note: "forte" }
            ]
        },
        {
            groupe: "Garniture aromatique",
            items: [
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "branche de thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "type Bourgogne aligoté" },
                { qty: "20 cl", name: "crème fraîche", note: "épaisse" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 filet", name: "huile ou beurre", note: "pour la cuisson" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Badigeonner le lapin",
            texte: "Enduire généreusement les morceaux de lapin de moutarde de Dijon. Laisser reposer 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Dorer la viande",
            texte: "Faire chauffer beurre ou huile dans une cocotte. Dorer les morceaux de lapin sur toutes les faces.",
            timer: "10 min"
        },
        {
            titre: "Faire revenir les aromates",
            texte: "Ajouter échalotes et ail dans la cocotte. Faire revenir 2 minutes.",
            timer: "2 min"
        },
        {
            titre: "Déglacer et mijoter",
            texte: "Verser le vin blanc, ajouter thym et laurier. Couvrir et laisser mijoter à feu doux 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Ajouter la crème",
            texte: "Incorporer la crème fraîche, mélanger et laisser réduire 5 minutes pour obtenir une sauce onctueuse.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement. Servir avec des tagliatelles, du riz ou des pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Pour une sauce plus corsée, ajouter une cuillère de moutarde en fin de cuisson.",
        "Le lapin ne doit jamais bouillir : une cuisson douce garantit une viande tendre.",
        "Un vin blanc bourguignon sec donne une sauce plus fine.",
        "Ajouter une cuillère de moutarde à l’ancienne pour une texture plus rustique."
    ],
},

'lapin-aux-girolles': {
    name:       'Lapin aux girolles',
    region:     'Alsace / Périgord',
    anecdote:   'Le lapin de garenne de l\'arrière-saison avec les girolles du sous-bois : le mariage automnal parfait.',
    tags:       ["Automne", "Plat principal", "Tradition"],
    prep:       '20 min',
    cuisson:    '55 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1", name: "lapin découpé", note: "1,2 à 1,5 kg" }
            ]
        },
        {
            groupe: "Champignons",
            items: [
                { qty: "300 g", name: "girolles fraîches", note: "ou surgelées de bonne qualité" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Aromates & garniture",
            items: [
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "branche de thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "type Alsace Riesling" },
                { qty: "10 cl", name: "bouillon de volaille", note: "" },
                { qty: "15 cl", name: "crème fraîche", note: "épaisse" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 filet", name: "huile ou beurre", note: "pour la cuisson" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Dorer le lapin",
            texte: "Faire chauffer beurre ou huile dans une cocotte. Dorer les morceaux de lapin sur toutes les faces. Réserver.",
            timer: "10 min"
        },
        {
            titre: "Faire revenir les girolles",
            texte: "Dans la même cocotte, faire revenir les girolles et l’échalote jusqu’à évaporation de l’eau de végétation.",
            timer: "8 min"
        },
        {
            titre: "Ajouter les aromates",
            texte: "Ajouter l’ail, le thym et le laurier. Mélanger 1 minute.",
            timer: "1 min"
        },
        {
            titre: "Déglacer et mijoter",
            texte: "Remettre le lapin, verser le vin blanc et le bouillon. Couvrir et laisser mijoter 30 minutes à feu doux.",
            timer: "30 min"
        },
        {
            titre: "Ajouter la crème",
            texte: "Incorporer la crème fraîche et laisser réduire 5 minutes pour obtenir une sauce onctueuse.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement. Servir avec des pâtes fraîches, du riz ou des pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas laver les girolles à grande eau : les brosser ou les essuyer pour préserver leur parfum.",
        "Un Riesling sec donne une sauce plus fine et aromatique.",
        "Ajouter une cuillère de moutarde douce pour une version plus relevée.",
        "Les girolles peuvent être remplacées par des cèpes ou des pleurotes selon la saison."
    ],
},

'lentilles-au-lard': {
    name:       'Lentilles au lard',
    region:     'Auvergne',
    anecdote:   "Tradition du Nouvel An : manger des lentilles porterait bonheur et prospérité pour l'année à venir.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumineuses",
            items: [
                { qty: "300 g", name: "lentilles vertes du Puy", note: "" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "200 g", name: "lard fumé", note: "en lardons ou en morceaux" },
                { qty: "1", name: "saucisse de Morteau", note: "ou Montbéliard (optionnel)" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "80 cl", name: "eau", note: "ou bouillon léger" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les lentilles",
            texte: "Rincer les lentilles sans les faire tremper. Les mettre dans une cocotte avec carottes, oignon, ail et bouquet garni.",
            timer: "5 min"
        },
        {
            titre: "Ajouter le lard",
            texte: "Ajouter les lardons ou morceaux de lard fumé. Couvrir d’eau ou de bouillon.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Porter à ébullition puis cuire 35 à 40 minutes à feu doux. Ajouter la saucisse entière à mi-cuisson si utilisée.",
            timer: "40 min"
        },
        {
            titre: "Servir",
            texte: "Retirer bouquet garni et oignon. Trancher la saucisse et servir avec les lentilles fumantes.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne salez qu’en fin de cuisson : le lard est déjà salé.",
        "Un filet de vinaigre de vin juste avant de servir réveille le plat.",
        "Les lentilles vertes du Puy tiennent mieux à la cuisson que les autres variétés."
    ]
},


'magret-canard-cerises': {
    name:       'Magret de canard aux cerises',
    region:     'Périgord / Gascogne',
    anecdote:   'Les premières cerises de mai se cuisinent en sauce avec le magret de canard du Périgord dans un équilibre parfait.',
    tags:       ["Printemps", "Plat principal", "Gastronomique"],
    prep:       '15 min',
    cuisson:    '20 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "2", name: "magrets de canard", note: "350–400 g chacun" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Sauce aux cerises",
            items: [
                { qty: "300 g", name: "cerises fraîches ou griottes", note: "dénoyautées" },
                { qty: "10 cl", name: "vin rouge", note: "ou porto pour une sauce plus sucrée" },
                { qty: "1 c. à soupe", name: "miel", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 g", name: "beurre", note: "pour monter la sauce" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les magrets",
            texte: "Inciser la peau en croisillons sans entailler la chair. Saler et poivrer.",
            timer: "3 min"
        },
        {
            titre: "Saisir côté peau",
            texte: "Déposer les magrets côté peau dans une poêle froide. Chauffer progressivement et laisser fondre la graisse 8 à 10 minutes jusqu’à coloration dorée.",
            timer: "10 min"
        },
        {
            titre: "Cuire côté chair",
            texte: "Retourner les magrets et cuire 3 à 4 minutes selon la cuisson désirée. Réserver sous aluminium.",
            timer: "4 min"
        },
        {
            titre: "Préparer la sauce",
            texte: "Dans la même poêle, faire revenir l’échalote. Ajouter cerises, miel, vinaigre balsamique et vin rouge. Laisser réduire jusqu’à consistance sirupeuse.",
            timer: "6 min"
        },
        {
            titre: "Monter la sauce",
            texte: "Hors du feu, ajouter une noix de beurre pour lisser la sauce.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Trancher les magrets et napper de sauce aux cerises. Servir avec une purée, du riz ou des légumes rôtis.",
            timer: "—"
        }
    ],

    conseils: [
        "Commencer la cuisson des magrets dans une poêle froide permet de fondre la graisse sans brûler la peau.",
        "Le porto donne une sauce plus douce, le vin rouge une sauce plus corsée.",
        "Ajouter une pointe de gingembre ou de cannelle pour une note épicée.",
        "Conserver la graisse de canard pour rôtir des pommes de terre."
    ],
},


'magret-canard-salade': {
    name:       'Magret de canard froid en salade',
    region:     'Périgord / Gascogne',
    anecdote:   'Le magret grillé puis refroidi, tranché en lamelles sur une salade croquante, est un classique des tables du Sud-Ouest.',
    tags:       ["Été", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '12 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1", name: "magret de canard", note: "350–400 g" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Salade",
            items: [
                { qty: "150 g", name: "salade verte", note: "mâche ou jeunes pousses" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 poignée", name: "cerneaux de noix", note: "" },
                { qty: "8", name: "tomates cerises", note: "coupées en deux" }
            ]
        },
        {
            groupe: "Vinaigrette",
            items: [
                { qty: "2 c. à soupe", name: "huile de noix ou olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1 c. à café", name: "moutarde de Dijon", note: "" },
                { qty: "1 c. à café", name: "miel", note: "optionnel" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le magret",
            texte: "Inciser la peau en croisillons. Déposer le magret côté peau dans une poêle froide et laisser fondre la graisse 8 minutes. Retourner et cuire 3 à 4 minutes côté chair.",
            timer: "12 min"
        },
        {
            titre: "Refroidir",
            texte: "Laisser tiédir puis placer au réfrigérateur au moins 1 heure pour faciliter la découpe.",
            timer: "1 h"
        },
        {
            titre: "Préparer la salade",
            texte: "Mélanger la salade, les tomates cerises, l’échalote et les noix dans un saladier.",
            timer: "3 min"
        },
        {
            titre: "Préparer la vinaigrette",
            texte: "Fouetter huile, vinaigre, moutarde et miel. Saler et poivrer.",
            timer: "2 min"
        },
        {
            titre: "Assembler",
            texte: "Trancher finement le magret froid. Disposer sur la salade et arroser de vinaigrette.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Cuire le magret à l’avance pour une salade encore plus fraîche.",
        "Ajouter des lamelles de pommes ou de poires pour une touche fruitée.",
        "Remplacer les noix par des pignons ou des amandes grillées.",
        "Une pointe de moutarde à l’ancienne dans la vinaigrette apporte du caractère."
    ],
},


'marmite-poissons-automne': {
    name:       "Marmite de poissons aux légumes d'automne",
    region:     "Bretagne / Normandie",
    anecdote:   "Cabillaud, lieu, saint-pierre ou morue fraîche mijotés avec poireaux, carottes et navets : une marmite de saison, simple et iodée.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       "20 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poissons",
            items: [
                { qty: "400 g", name: "cabillaud", note: "en morceaux" },
                { qty: "300 g", name: "saint-pierre ou lieu jaune", note: "en morceaux" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "poireaux", note: "émincés" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "navet", note: "en dés" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "" },
                { qty: "40 cl", name: "fumet de poisson", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir les légumes",
            texte: "Faire suer oignon, poireaux, carottes et navet dans un filet d’huile.",
            timer: "8 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, fumet et bouquet garni. Laisser mijoter 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Cuire les poissons",
            texte: "Ajouter les morceaux de poisson et cuire 8 à 10 minutes à feu doux.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir avec pommes vapeur ou pain de campagne.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques moules en fin de cuisson pour une version plus marine.",
        "Ne pas trop cuire le poisson : il doit rester nacré.",
        "Un filet de crème fraîche peut adoucir la sauce."
    ]
},


'matelote-anguille': {
    name:       "Matelote d'anguille",
    region:     "Val de Loire",
    anecdote:   "L’anguille de Loire mijotée au vin blanc, aux oignons et aux champignons est un plat de rivière ancestral.",
    tags:       ["Hiver", "Plat principal", "Traditionnel"],
    prep:       "20 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "1 kg", name: "anguille", note: "coupée en tronçons" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "200 g", name: "champignons de Paris", note: "émincés" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "30 cl", name: "vin blanc sec", note: "" },
                { qty: "20 cl", name: "fumet de poisson", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 c. à soupe", name: "beurre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir aromates",
            texte: "Faire suer oignons, ail et champignons dans le beurre.",
            timer: "8 min"
        },
        {
            titre: "Ajouter l’anguille",
            texte: "Ajouter les tronçons d’anguille et les faire légèrement dorer.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, fumet et bouquet garni. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Cuire 25 à 30 minutes à feu doux jusqu’à ce que la sauce épaississe.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Retirer le bouquet garni et servir avec pommes vapeur ou riz.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de crème en fin de cuisson pour une sauce plus douce.",
        "Remplacer l’anguille par du sandre pour une version plus légère.",
        "Un vin blanc sec du Val de Loire (Sancerre, Muscadet) est idéal."
    ]
},


'melon-glace-porto': {
    name:       'Melon glacé au porto rouge',
    region:     'Charentes / Languedoc',
    anecdote:   "Le melon charentais, légèrement sucré, se creuse et se remplit d’un porto rouge glacé : une entrée fraîche et élégante.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       '10 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "2", name: "melons charentais", note: "bien mûrs" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "20 cl", name: "porto rouge", note: "bien frais" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "1 c. à soupe", name: "sucre", note: "optionnel" },
                { qty: "quelques feuilles", name: "menthe", note: "pour servir" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les melons",
            texte: "Couper les melons en deux, retirer les graines et former des billes avec une cuillère parisienne.",
            timer: "5 min"
        },
        {
            titre: "Glacer",
            texte: "Placer les billes de melon 20 minutes au congélateur pour les raffermir.",
            timer: "20 min"
        },
        {
            titre: "Assembler",
            texte: "Remettre les billes dans les coques de melon et arroser de porto rouge bien frais.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Décorer de menthe et servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Utiliser un porto ruby pour une couleur plus vive.",
        "Ajouter un trait de jus de citron pour plus de fraîcheur.",
        "Mettre le porto au congélateur 15 minutes avant pour un effet glacé optimal."
    ]
},

'melon-porto-jambon': {
    name:       'Melon au porto et jambon de Bayonne',
    region:     'Pays Basque / Charentes',
    anecdote:   "Le melon charentais servi avec jambon de Bayonne est l’une des entrées d’été les plus emblématiques du Sud-Ouest.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       '10 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "2", name: "melons charentais", note: "bien frais" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "8 tranches", name: "jambon de Bayonne", note: "finement tranché" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "10 cl", name: "porto rouge", note: "" },
                { qty: "quelques feuilles", name: "menthe ou basilic", note: "optionnel" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le melon",
            texte: "Couper les melons en deux, retirer les graines et détailler en quartiers ou en billes.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Arroser légèrement de porto rouge et laisser reposer 5 minutes au frais.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Disposer le melon dans les assiettes et ajouter les tranches de jambon de Bayonne.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop imbiber le melon : le porto doit rester discret.",
        "Choisir un jambon de Bayonne affiné pour plus de parfum.",
        "Ajouter quelques feuilles de basilic pour une touche provençale."
    ]
},


'moules-marinieres': {
    name:       'Moules marinières',
    region:     'Bretagne / Normandie',
    anecdote:   "Les moules de bouchot, cuites au vin blanc avec échalotes et persil, sont un classique du bord de mer.",
    tags:       ["Été", "Automne", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Moules",
            items: [
                { qty: "2 kg", name: "moules de bouchot", note: "grattées et lavées" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "3", name: "échalotes", note: "ciselées" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "bouquet de persil", note: "haché" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "type muscadet" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "30 g", name: "beurre demi-sel", note: "" },
                { qty: "", name: "poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les moules",
            texte: "Gratter les coquilles, retirer le byssus et rincer plusieurs fois. Écarter les moules cassées ou ouvertes.",
            timer: "5 min"
        },
        {
            titre: "Faire revenir les aromates",
            texte: "Faire fondre le beurre dans une grande cocotte, ajouter échalotes et ail, faire suer sans coloration.",
            timer: "5 min"
        },
        {
            titre: "Cuire les moules",
            texte: "Ajouter les moules, verser le vin blanc, poivrer, couvrir et cuire 5 minutes en secouant la cocotte.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Ajouter le persil haché et servir immédiatement avec frites ou pain de campagne.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas saler : les moules et le beurre le sont déjà.",
        "Ajouter un trait de crème pour une version « marinière-crème ».",
        "Un muscadet ou un gros-plant accompagne parfaitement ce plat."
    ]
},


'mousse-foie-gras-blinis': {
    name:       'Mousse de foie gras sur blinis',
    region:     'Périgord / Gascogne',
    anecdote:   'La mousse de foie gras maison servie sur des blinis chauds ouvre les repas d\'automne dans le Sud-Ouest.',
    tags:       ["Automne", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '—',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Mousse de foie gras",
            items: [
                { qty: "150 g", name: "foie gras mi-cuit", note: "coupé en dés" },
                { qty: "10 cl", name: "crème liquide entière", note: "bien froide" },
                { qty: "1 c. à soupe", name: "porto ou cognac", note: "optionnel" },
                { qty: "1 pincée", name: "poivre", note: "du moulin" }
            ]
        },
        {
            groupe: "Blinis",
            items: [
                { qty: "12", name: "blinis", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Décoration",
            items: [
                { qty: "1 c. à café", name: "fleur de sel", note: "" },
                { qty: "quelques", name: "baies roses", note: "concassées" },
                { qty: "—", name: "ciboulette", note: "finement ciselée" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Monter la crème",
            texte: "Fouetter la crème bien froide jusqu’à obtenir une texture souple, pas trop ferme.",
            timer: "3 min"
        },
        {
            titre: "Mixer le foie gras",
            texte: "Mixer le foie gras avec le porto (ou cognac) et le poivre jusqu’à obtenir une crème lisse.",
            timer: "2 min"
        },
        {
            titre: "Incorporer la crème",
            texte: "Ajouter délicatement la crème fouettée au foie gras pour obtenir une mousse aérienne.",
            timer: "2 min"
        },
        {
            titre: "Réfrigérer",
            texte: "Placer la mousse au réfrigérateur au moins 1 heure pour qu’elle se raffermisse.",
            timer: "1 h"
        },
        {
            titre: "Chauffer les blinis",
            texte: "Réchauffer les blinis quelques minutes au four ou à la poêle.",
            timer: "3 min"
        },
        {
            titre: "Dresser",
            texte: "Déposer une quenelle ou une cuillère de mousse sur chaque blini. Ajouter fleur de sel, baies roses et ciboulette.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Utiliser une crème très froide pour une mousse plus légère.",
        "Ajouter un peu de foie gras en petits dés dans la mousse pour une texture plus gourmande.",
        "Servir les blinis tièdes pour un contraste agréable avec la mousse froide.",
        "La mousse peut être préparée la veille : elle n’en sera que meilleure."
    ],
},


'navarin-agneau': {
    name:       "Navarin d'agneau printanier",
    region:     "Île-de-France",
    anecdote:   "Le navarin, mijoté d’agneau et de légumes nouveaux, est un classique du printemps, même servi en hiver.",
    tags:       ["Printemps", "Hiver", "Plat principal", "Mijoté"],
    prep:       "25 min",
    cuisson:    "1 h 45",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "800 g", name: "épaule d’agneau", note: "coupée en morceaux" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "carottes nouvelles", note: "" },
                { qty: "4", name: "navets nouveaux", note: "" },
                { qty: "200 g", name: "petits pois", note: "frais ou surgelés" },
                { qty: "6", name: "pommes de terre grenaille", note: "" },
                { qty: "2", name: "oignons nouveaux", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "" },
                { qty: "40 cl", name: "bouillon", note: "de volaille ou légumes" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir l’agneau",
            texte: "Faire dorer les morceaux d’agneau dans l’huile chaude sur toutes les faces.",
            timer: "10 min"
        },
        {
            titre: "Ajouter aromates et vin",
            texte: "Ajouter oignons, ail et bouquet garni. Déglacer au vin blanc et laisser réduire.",
            timer: "10 min"
        },
        {
            titre: "Mijoter",
            texte: "Ajouter bouillon, carottes, navets et pommes de terre. Cuire 1 h 15 à feu doux.",
            timer: "75 min"
        },
        {
            titre: "Ajouter les petits pois",
            texte: "Ajouter les petits pois et cuire encore 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter une cuillère de concentré de tomate pour une version plus colorée.",
        "Les légumes nouveaux cuisent plus vite : surveiller la cuisson.",
        "Un peu de menthe fraîche en fin de cuisson apporte une touche printanière."
    ]
},

'oeufs-cocotte-asperges': {
    name:       "Œufs cocotte aux asperges",
    region:     "Île-de-France",
    anecdote:   "Les œufs cocotte, cuits doucement à la crème avec des pointes d’asperges, sont une entrée printanière élégante.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "12 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "12", name: "asperges vertes", note: "pointes coupées" }
            ]
        },
        {
            groupe: "Œufs & crème",
            items: [
                { qty: "4", name: "œufs", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les asperges",
            texte: "Cuire les pointes d’asperges 3 minutes dans l’eau bouillante salée. Égoutter.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Répartir crème, asperges et un œuf dans chaque ramequin. Assaisonner.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire au bain-marie 10 à 12 minutes à 180°C jusqu’à ce que le blanc soit pris.",
            timer: "12 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement avec du pain grillé.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de parmesan râpé pour une version plus gourmande.",
        "Remplacer les asperges vertes par des blanches en saison.",
        "Cuire juste ce qu’il faut : le jaune doit rester coulant."
    ]
},


'oeufs-en-meurette': {
    name:       'Œufs en meurette',
    region:     'Bourgogne',
    anecdote:   "Œufs pochés servis dans une sauce au vin rouge, lardons et champignons : une entrée bourguignonne emblématique.",
    tags:       ["Hiver", "Entrée", "Traditionnel"],
    prep:       '20 min',
    cuisson:    '25 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Œufs",
            items: [
                { qty: "4", name: "œufs extra-frais", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "150 g", name: "lardons fumés", note: "" },
                { qty: "150 g", name: "champignons de Paris", note: "émincés" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "1", name: "gousse d’ail", note: "hachée" }
            ]
        },
        {
            groupe: "Sauce au vin",
            items: [
                { qty: "50 cl", name: "vin rouge de Bourgogne", note: "" },
                { qty: "20 cl", name: "fond de veau", note: "" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "20 g", name: "farine", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la garniture",
            texte: "Faire revenir lardons, oignon, ail et champignons dans une poêle.",
            timer: "8 min"
        },
        {
            titre: "Préparer la sauce",
            texte: "Faire un roux avec beurre et farine. Ajouter vin rouge, fond de veau, laurier et laisser réduire 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Pocher les œufs",
            texte: "Pocher les œufs 3 minutes dans une eau frémissante vinaigrée.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Déposer un œuf dans chaque assiette, napper de sauce au vin et ajouter la garniture.",
            timer: "—"
        }
    ],

    conseils: [
        "Servir avec des croûtons frottés à l’ail.",
        "Utiliser un vin rouge léger mais tannique (Bourgogne, gamay).",
        "Ne pas trop pocher les œufs : le jaune doit rester coulant."
    ]
},


'oie-confite-pommes': {
    name:       'Oie confite aux pommes et airelles',
    region:     'Alsace / Bretagne',
    anecdote:   "L’oie confite lentement dans sa graisse, servie avec pommes reinettes et airelles, est un plat de fête généreux.",
    tags:       ["Hiver", "Plat principal", "Festif"],
    prep:       '25 min',
    cuisson:    '2 h 30',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1", name: "oie découpée", note: "cuisses et morceaux" }
            ]
        },
        {
            groupe: "Fruits",
            items: [
                { qty: "4", name: "pommes reinettes", note: "coupées en quartiers" },
                { qty: "150 g", name: "airelles", note: "fraîches ou en bocal" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "2 c. à soupe", name: "graisse d’oie", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Confire l’oie",
            texte: "Faire revenir les morceaux dans la graisse d’oie, puis couvrir et cuire 1 h 30 à feu doux.",
            timer: "90 min"
        },
        {
            titre: "Ajouter aromates et fruits",
            texte: "Ajouter oignons, ail, pommes et airelles. Cuire encore 45 minutes.",
            timer: "45 min"
        },
        {
            titre: "Finition",
            texte: "Retirer le bouquet garni, rectifier l’assaisonnement et servir bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Servir avec du chou rouge braisé pour une version alsacienne complète.",
        "Les pommes reinettes tiennent mieux à la cuisson que les variétés plus sucrées.",
        "L’oie confite est encore meilleure réchauffée le lendemain."
    ]
},


'oie-rotie-pommes': {
    name:       'Oie rôtie aux pommes',
    region:     'Alsace / Bretagne',
    anecdote:   'L\'oie rôtie aux pommes est un plat d\'automne royal, souvenir des grandes tablées paysannes d\'Alsace.',
    tags:       ["Automne", "Plat principal", "Tradition"],
    prep:       '25 min',
    cuisson:    '2 h',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "oie entière", note: "3 à 3,5 kg, vidée" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "6", name: "pommes", note: "type Reine des Reinettes ou Boskoop" },
                { qty: "2", name: "oignons", note: "coupés en quartiers" },
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "2", name: "branches de thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        },
        {
            groupe: "Arrosage & cuisson",
            items: [
                { qty: "10 cl", name: "cidre brut", note: "ou bouillon" },
                { qty: "—", name: "graisse d’oie", note: "récupérée pendant la cuisson" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer l’oie",
            texte: "Saler et poivrer l’intérieur et l’extérieur de l’oie. Piquer légèrement la peau pour aider la graisse à fondre.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Farcir l’oie avec 3 pommes coupées en quartiers, l’ail, le thym et le laurier. Déposer les oignons et les autres pommes autour dans le plat.",
            timer: "5 min"
        },
        {
            titre: "Démarrer la cuisson",
            texte: "Enfourner à 180°C pendant 30 minutes. Récupérer la graisse fondue et arroser régulièrement.",
            timer: "30 min"
        },
        {
            titre: "Rôtir longuement",
            texte: "Poursuivre la cuisson 1 h 30 en arrosant toutes les 20 minutes. Ajouter un peu de cidre en cours de cuisson pour déglacer.",
            timer: "1 h 30"
        },
        {
            titre: "Repos",
            texte: "Sortir l’oie du four et laisser reposer 10 minutes avant de découper.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Servir l’oie découpée avec les pommes rôties et un peu de jus dégraissé.",
            timer: "—"
        }
    ],

    conseils: [
        "L’oie rend beaucoup de graisse : la récupérer pour rôtir des pommes de terre, c’est un délice.",
        "Les pommes acidulées tiennent mieux à la cuisson.",
        "Arroser souvent permet une peau croustillante et une viande moelleuse.",
        "On peut ajouter quelques marrons en fin de cuisson pour une version plus festive."
    ],
},


'omelette-asperges': {
    name:       'Omelette aux asperges et ciboulette',
    region:     'France entière',
    anecdote:   'L\'omelette baveuse aux premières asperges et à la ciboulette fraîche du jardin est le déjeuner printanier idéal.',
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       '10 min',
    cuisson:    '12 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "8", name: "œufs", note: "" },
                { qty: "1 c. à soupe", name: "crème fraîche", note: "ou lait" },
                { qty: "—", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "300 g", name: "asperges vertes", note: "coupées en tronçons" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1 botte", name: "ciboulette", note: "finement ciselée" },
                { qty: "1 filet", name: "huile d’olive", note: "ou beurre" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les asperges",
            texte: "Faire revenir les tronçons d’asperges dans un peu d’huile ou de beurre 5 à 6 minutes jusqu’à ce qu’ils soient tendres mais encore croquants. Ajouter l’échalote en fin de cuisson.",
            timer: "6 min"
        },
        {
            titre: "Battre les œufs",
            texte: "Battre les œufs avec la crème, le sel, le poivre et la ciboulette.",
            timer: "2 min"
        },
        {
            titre: "Verser dans la poêle",
            texte: "Ajouter les asperges aux œufs ou verser les œufs directement dans la poêle sur les asperges selon la texture souhaitée.",
            timer: "1 min"
        },
        {
            titre: "Cuire l’omelette",
            texte: "Cuire à feu doux 3 à 4 minutes. Laisser baveuse ou retourner pour une cuisson plus ferme.",
            timer: "4 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de ciboulette fraîche et servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Les asperges vertes n’ont pas besoin d’être épluchées si elles sont fines.",
        "Ajouter un peu de parmesan pour une version plus gourmande.",
        "Cuire à feu doux pour garder l’omelette moelleuse.",
        "Les asperges blanches fonctionnent aussi, mais doivent être épluchées."
    ],
},

'omelette-trompettes-mort': {
    name:       'Omelette aux trompettes de la mort',
    region:     'Périgord / Auvergne',
    anecdote:   'Les trompettes de la mort, champignons noirs et parfumés, donnent une saveur boisée unique à cette omelette rustique.',
    tags:       ["Automne", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Champignons",
            items: [
                { qty: "200 g", name: "trompettes de la mort fraîches", note: "ou 30 g séchées réhydratées" }
            ]
        },
        {
            groupe: "Base de l’omelette",
            items: [
                { qty: "8", name: "œufs", note: "" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "2 c. à soupe", name: "huile", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 poignée", name: "persil frais", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les champignons",
            texte: "Nettoyer soigneusement les trompettes de la mort. Les faire revenir dans une poêle avec l’huile jusqu’à évaporation complète de l’eau.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les aromates",
            texte: "Incorporer l’ail et le persil. Mélanger et laisser légèrement colorer.",
            timer: "2 min"
        },
        {
            titre: "Cuire l’omelette",
            texte: "Battre les œufs, saler, poivrer. Ajouter le beurre dans la poêle, verser les œufs et cuire selon la texture souhaitée.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Plier l’omelette, laisser reposer quelques secondes et servir bien chaude.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Les trompettes séchées ont un parfum encore plus intense.",
        "Ajouter une pointe de crème dans les œufs pour une omelette plus moelleuse.",
        "Parfait avec une salade verte ou des pommes de terre sautées."
    ]
},


'pasta-pistou-printemps': {
    name:       'Pasta au pistou de printemps',
    region:     'Provence',
    anecdote:   "Dès que le basilic pointe, le pistou — mélange de basilic, ail et huile d’olive — vient napper les premières pâtes du printemps.",
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '10 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Pâtes",
            items: [
                { qty: "400 g", name: "pâtes courtes", note: "penne, fusilli, trofie…" }
            ]
        },
        {
            groupe: "Pistou",
            items: [
                { qty: "1 gros bouquet", name: "basilic frais", note: "" },
                { qty: "2", name: "gousses d’ail", note: "" },
                { qty: "8 cl", name: "huile d’olive", note: "fruitée" },
                { qty: "40 g", name: "parmesan", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Légumes de printemps",
            items: [
                { qty: "150 g", name: "petits pois", note: "frais ou surgelés" },
                { qty: "150 g", name: "haricots verts fins", note: "coupés" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les légumes",
            texte: "Cuire petits pois et haricots 5 minutes dans l’eau bouillante salée. Égoutter.",
            timer: "5 min"
        },
        {
            titre: "Cuire les pâtes",
            texte: "Cuire les pâtes al dente dans une grande quantité d’eau salée.",
            timer: "10 min"
        },
        {
            titre: "Préparer le pistou",
            texte: "Mixer basilic, ail, huile d’olive, parmesan, sel et poivre jusqu’à texture lisse.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger pâtes chaudes, légumes et pistou. Ajouter un peu d’eau de cuisson si nécessaire.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ne jamais chauffer le pistou : il perdrait son parfum.",
        "Ajouter quelques tomates cerises pour une version plus colorée.",
        "Remplacer le parmesan par du pecorino pour un goût plus vif."
    ]
},


'pate-en-croute-grand-luxe': {
    name:       'Pâté en croûte grand luxe',
    region:     'Alsace / Lorraine / Lyon',
    anecdote:   "Le pâté en croûte aux ris de veau, foie gras et pistaches est une pièce maîtresse de la charcuterie festive.",
    tags:       ["Hiver", "Plat principal", "Festif"],
    prep:       '45 min',
    cuisson:    '1 h 15',
    personnes:  8,
    difficulte: 'Difficile',

    ingredients: [
        {
            groupe: "Farce",
            items: [
                { qty: "300 g", name: "veau haché", note: "" },
                { qty: "300 g", name: "porc haché", note: "" },
                { qty: "150 g", name: "ris de veau", note: "blanchis et coupés" },
                { qty: "150 g", name: "foie gras", note: "en cubes" },
                { qty: "80 g", name: "pistaches", note: "non salées" },
                { qty: "1", name: "œuf", note: "" },
                { qty: "5 cl", name: "cognac", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Croûte",
            items: [
                { qty: "400 g", name: "pâte brisée ou pâte à pâté en croûte", note: "" },
                { qty: "1", name: "jaune d’œuf", note: "pour dorer" }
            ]
        },
        {
            groupe: "Gelée",
            items: [
                { qty: "25 cl", name: "bouillon", note: "" },
                { qty: "2 feuilles", name: "gélatine", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la farce",
            texte: "Mélanger viandes, ris de veau, foie gras, pistaches, œuf, cognac, sel et poivre.",
            timer: "10 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Tapisser un moule à pâté avec la pâte en laissant dépasser les bords.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Remplir de farce en tassant légèrement. Refermer avec un couvercle de pâte et dorer au jaune.",
            timer: "10 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 1 h 15 à 180°C. Laisser refroidir.",
            timer: "75 min"
        },
        {
            titre: "Ajouter la gelée",
            texte: "Faire fondre la gélatine dans le bouillon tiède et verser dans la cheminée du pâté refroidi.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Laisser reposer 24 h au frais pour une tenue parfaite.",
        "Utiliser un foie gras mi-cuit pour une texture plus fondante.",
        "Servir avec un chutney d’oignons ou de figues."
    ]
},


'pate-paques-berrichon': {
    name:       'Pâté de Pâques berrichon',
    region:     'Berry',
    anecdote:   "Le pâté berrichon, en croûte avec œufs durs cachés à l’intérieur, est la grande tradition pascale du Berry.",
    tags:       ["Printemps", "Plat principal", "Traditionnel"],
    prep:       '30 min',
    cuisson:    '1 h',
    personnes:  6,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Farce",
            items: [
                { qty: "400 g", name: "chair à saucisse", note: "" },
                { qty: "300 g", name: "veau haché", note: "" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "œuf", note: "pour lier" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Œufs",
            items: [
                { qty: "4", name: "œufs durs", note: "entiers, écalés" }
            ]
        },
        {
            groupe: "Croûte",
            items: [
                { qty: "2 pâtes", name: "pâte feuilletée ou brisée", note: "" },
                { qty: "1", name: "jaune d’œuf", note: "pour dorer" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la farce",
            texte: "Mélanger viandes, oignon, ail, persil, œuf, sel et poivre.",
            timer: "10 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Tapisser un moule à cake avec une pâte en laissant dépasser les bords.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Déposer une couche de farce, aligner les œufs durs, recouvrir du reste de farce.",
            timer: "10 min"
        },
        {
            titre: "Fermer et cuire",
            texte: "Recouvrir avec la seconde pâte, souder les bords, dorer au jaune d’œuf et cuire 1 h à 180°C.",
            timer: "60 min"
        }
    ],

    conseils: [
        "Laisser tiédir avant de découper pour une meilleure tenue.",
        "Ajouter un peu de muscade dans la farce pour une note plus chaude.",
        "Servir avec une salade de jeunes pousses."
    ]
},


'pates-fleurs-courgettes': {
    name:       'Pâtes aux courgettes fleurs et ricotta',
    region:     'Provence / Côte d’Azur',
    anecdote:   "Les fleurs de courgettes, farcies ou simplement sautées, sont un trésor de la cuisine niçoise.",
    tags:       ["Été", "Printemps", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '12 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Pâtes",
            items: [
                { qty: "350 g", name: "tagliatelles ou linguine", note: "" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "8", name: "fleurs de courgettes", note: "fraîches" },
                { qty: "2", name: "courgettes", note: "en demi-lunes fines" }
            ]
        },
        {
            groupe: "Crème & fromage",
            items: [
                { qty: "150 g", name: "ricotta", note: "" },
                { qty: "10 cl", name: "crème liquide", note: "" },
                { qty: "40 g", name: "parmesan", note: "râpé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Retirer le pistil des fleurs, les couper en lanières. Faire revenir courgettes 5 minutes dans l’huile.",
            timer: "5 min"
        },
        {
            titre: "Cuire les pâtes",
            texte: "Cuire les pâtes al dente dans une grande quantité d’eau salée.",
            timer: "10 min"
        },
        {
            titre: "Préparer la sauce",
            texte: "Mélanger ricotta, crème, sel, poivre et parmesan.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger pâtes chaudes, courgettes, fleurs et sauce ricotta. Ajouter un peu d’eau de cuisson si nécessaire.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ne pas trop cuire les fleurs : elles doivent rester délicates.",
        "Ajouter du zeste de citron pour une touche fraîche.",
        "Remplacer la ricotta par de la burrata pour une version plus crémeuse."
    ]
},


'paupiettes-de-veau': {
    name:       'Paupiettes de veau',
    region:     'Île-de-France',
    anecdote:   "Les paupiettes mijotées aux carottes et champignons sont un classique des cuisines bourgeoises parisiennes.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       '20 min',
    cuisson:    '45 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "4", name: "paupiettes de veau", note: "" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "carottes", note: "en rondelles" },
                { qty: "200 g", name: "champignons de Paris", note: "émincés" },
                { qty: "1", name: "oignon", note: "ciselé" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "15 cl", name: "vin blanc sec", note: "" },
                { qty: "20 cl", name: "bouillon", note: "de volaille" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "2 c. à soupe", name: "huile", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir les paupiettes",
            texte: "Faire dorer les paupiettes dans l’huile chaude sur toutes les faces.",
            timer: "8 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter oignon, carottes et champignons. Faire revenir quelques minutes.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Verser vin blanc et bouillon, ajouter bouquet garni. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Couvrir et cuire 30 minutes à feu doux.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Retirer le bouquet garni et servir avec riz ou pâtes fraîches.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter une cuillère de crème en fin de cuisson pour une sauce plus onctueuse.",
        "Remplacer le vin blanc par du cidre pour une version normande.",
        "Les paupiettes se réchauffent très bien : la sauce n’en sera que meilleure."
    ]
},


'peches-roties-miel': {
    name:       'Pêches rôties au miel et romarin',
    region:     'Provence / Languedoc',
    anecdote:   "Les pêches de vigne rôties au miel et romarin sont un dessert provençal simple, parfumé et ensoleillé.",
    tags:       ["Été", "Dessert", "Facile"],
    prep:       '10 min',
    cuisson:    '25 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "4", name: "pêches de vigne", note: "ou pêches jaunes" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "miel", note: "de fleurs" },
                { qty: "2", name: "brins de romarin", note: "" },
                { qty: "20 g", name: "beurre", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "", name: "glace vanille", note: "optionnelle" },
                { qty: "", name: "amandes effilées", note: "optionnelles" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pêches",
            texte: "Couper les pêches en deux et retirer les noyaux.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Déposer dans un plat, arroser de miel, ajouter beurre et romarin.",
            timer: "2 min"
        },
        {
            titre: "Rôtir",
            texte: "Cuire 20 à 25 minutes à 180°C jusqu’à ce que les pêches soient tendres et caramélisées.",
            timer: "25 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud avec glace vanille ou amandes effilées.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un trait de jus de citron pour équilibrer le miel.",
        "Utiliser du miel de lavande pour une version très provençale.",
        "Les pêches trop mûres cuisent plus vite : surveiller la caramélisation."
    ]
},


'perdrix-aux-choux': {
    name:       'Perdrix aux choux',
    region:     'Alsace / Champagne',
    anecdote:   "La perdrix de septembre mijotée avec choux braisés et lard fumé est un pilier de la cuisine de chasse alsacienne.",
    tags:       ["Automne", "Hiver", "Plat principal", "Traditionnel"],
    prep:       '25 min',
    cuisson:    '1 h 15',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "2", name: "perdrix", note: "vidées et bridées" }
            ]
        },
        {
            groupe: "Chou & légumes",
            items: [
                { qty: "1 petit", name: "chou vert", note: "émincé" },
                { qty: "150 g", name: "lard fumé", note: "en lardons" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "15 cl", name: "vin blanc d’Alsace", note: "riesling ou sylvaner" },
                { qty: "20 cl", name: "bouillon", note: "volaille ou légumes" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "2 c. à soupe", name: "graisse d’oie ou huile", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir les perdrix",
            texte: "Faire dorer les perdrix dans la graisse chaude sur toutes les faces.",
            timer: "10 min"
        },
        {
            titre: "Faire revenir le chou",
            texte: "Ajouter lardons, oignon, carottes et chou. Faire suer 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, bouillon et bouquet garni. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Couvrir et cuire 45 à 50 minutes à feu doux.",
            timer: "50 min"
        },
        {
            titre: "Servir",
            texte: "Retirer le bouquet garni et servir avec pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques baies de genièvre pour une touche plus sauvage.",
        "Remplacer la perdrix par du faisan pour une version plus généreuse.",
        "Le chou est encore meilleur légèrement caramélisé avant mouillage."
    ]
},


'pied-cochon-pane': {
    name:       'Pied de cochon pané',
    region:     'Sainte-Menehould / Champagne',
    anecdote:   "À Sainte-Menehould, le pied de cochon est cuit si longuement que l’os devient tendre et se mange. Pané puis grillé, c’est une spécialité unique.",
    tags:       ["Hiver", "Plat principal", "Traditionnel"],
    prep:       '30 min',
    cuisson:    '3 h',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "4", name: "pieds de cochon", note: "fendus et blanchis" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "2", name: "carottes", note: "" },
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" },
                { qty: "2", name: "gousses d’ail", note: "" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Panure",
            items: [
                { qty: "2", name: "œufs", note: "battus" },
                { qty: "100 g", name: "chapelure", note: "" },
                { qty: "50 g", name: "farine", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "2 c. à soupe", name: "huile ou graisse d’oie", note: "pour griller" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les pieds",
            texte: "Plonger les pieds dans une grande marmite avec légumes et bouquet garni. Couvrir d’eau et cuire 2 h 30 à feu doux.",
            timer: "150 min"
        },
        {
            titre: "Paner",
            texte: "Égoutter, laisser tiédir. Passer dans farine, œufs battus puis chapelure.",
            timer: "10 min"
        },
        {
            titre: "Griller",
            texte: "Faire dorer à la poêle ou au four jusqu’à croûte croustillante.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Servir avec salade, pommes vapeur ou lentilles.",
            timer: "—"
        }
    ],

    conseils: [
        "Laisser reposer les pieds une nuit au frais pour qu’ils se tiennent mieux au panage.",
        "Ajouter un peu de moutarde dans l’œuf pour une panure plus parfumée.",
        "Traditionnellement, on les sert avec un verre de champagne brut."
    ]
},


'pieds-paquets': {
    name:       'Pieds-paquets marseillais',
    region:     'Marseille',
    anecdote:   "Les pieds et paquets d’agneau mijotés au vin blanc et à la tomate sont un pilier de la cuisine marseillaise traditionnelle.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       '30 min',
    cuisson:    '3 h',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "4", name: "pieds d’agneau", note: "fendus et blanchis" },
                { qty: "12", name: "paquets", note: "tripes d’agneau farcies" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "3", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "carotte", note: "en dés" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "" },
                { qty: "40 cl", name: "coulis de tomate", note: "" },
                { qty: "1 c. à soupe", name: "concentré de tomate", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir aromates",
            texte: "Faire suer oignons, ail et carotte dans l’huile d’olive.",
            timer: "8 min"
        },
        {
            titre: "Ajouter pieds et paquets",
            texte: "Déposer pieds et paquets dans la cocotte et les faire légèrement colorer.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, coulis, concentré et bouquet garni. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter longuement",
            texte: "Couvrir et cuire 2 h 30 à feu doux, jusqu’à sauce épaisse et pieds fondants.",
            timer: "150 min"
        },
        {
            titre: "Servir",
            texte: "Servir avec pâtes fraîches ou pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un zeste d’orange pour une touche provençale.",
        "Les pieds doivent cuire longtemps pour devenir fondants.",
        "Préparer la veille : le plat gagne en profondeur."
    ]
},


'pintade-aux-choux': {
    name:       'Pintade aux choux',
    region:     'Champagne / Lorraine',
    anecdote:   "La pintade fermière mijotée avec chou braisé et lard fumé est un plat rustique du Nord-Est.",
    tags:       ["Hiver", "Plat principal", "Traditionnel"],
    prep:       '20 min',
    cuisson:    '1 h 15',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "pintade", note: "coupée en morceaux" }
            ]
        },
        {
            groupe: "Chou & légumes",
            items: [
                { qty: "1 petit", name: "chou vert", note: "émincé" },
                { qty: "150 g", name: "lard fumé", note: "en lardons" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "15 cl", name: "vin blanc sec", note: "" },
                { qty: "20 cl", name: "bouillon", note: "volaille ou légumes" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "2 c. à soupe", name: "graisse d’oie ou huile", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir la pintade",
            texte: "Faire dorer les morceaux de pintade dans la graisse chaude.",
            timer: "10 min"
        },
        {
            titre: "Ajouter le chou",
            texte: "Ajouter lardons, oignon, carottes et chou. Faire suer 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, bouillon et bouquet garni. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Couvrir et cuire 45 à 50 minutes à feu doux.",
            timer: "50 min"
        },
        {
            titre: "Servir",
            texte: "Retirer le bouquet garni et servir avec pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques baies de genièvre pour une note plus sauvage.",
        "Le chou peut être légèrement caramélisé avant mouillage pour plus de profondeur.",
        "Une pointe de crème en fin de cuisson adoucit la sauce."
    ]
},


'pintade-aux-marrons': {
    name:       'Pintade aux marrons',
    region:     'Périgord / Ardèche',
    anecdote:   "Les marrons frais d’octobre farcis dans la pintade rôtie sont un plat de fête du début d’automne.",
    tags:       ["Automne", "Hiver", "Plat principal", "Traditionnel"],
    prep:       '20 min',
    cuisson:    '1 h 20',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "pintade fermière", note: "vidée" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "300 g", name: "marrons cuits", note: "frais, sous vide ou en bocal" },
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "1", name: "pomme reinette", note: "en dés (optionnel)" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "15 cl", name: "vin blanc", note: "" },
                { qty: "10 cl", name: "bouillon", note: "volaille" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1", name: "branche de thym", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Farcir la pintade",
            texte: "Mélanger marrons, échalotes et pomme. Farcir la pintade et la ficeler.",
            timer: "10 min"
        },
        {
            titre: "Saisir",
            texte: "Faire dorer la pintade dans le beurre sur toutes les faces.",
            timer: "10 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, bouillon et thym. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Rôtir",
            texte: "Cuire 1 h à 180°C en arrosant régulièrement.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Découper et servir avec les marrons et le jus réduit.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un trait d’armagnac dans la farce pour une version périgourdine.",
        "Les marrons sous vide tiennent mieux à la cuisson que les frais.",
        "Servir avec une purée de céleri ou de potimarron."
    ]
},


 'pintade-raisins-vigne': {
    name:       'Pintade braisée aux raisins de vigne',
    region:     'Bourgogne / Champagne',
    anecdote:   "Pendant les vendanges, la pintade mijotée avec raisins frais et leur jus est un plat de saison remarquable.",
    tags:       ["Automne", "Plat principal", "Mijoté"],
    prep:       '20 min',
    cuisson:    '1 h 10',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "pintade", note: "coupée en morceaux" }
            ]
        },
        {
            groupe: "Fruits",
            items: [
                { qty: "300 g", name: "raisins de vigne", note: "blancs ou noirs, égrenés" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "15 cl", name: "vin blanc sec", note: "" },
                { qty: "10 cl", name: "bouillon", note: "volaille" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "30 g", name: "beurre", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir la pintade",
            texte: "Faire dorer les morceaux dans le beurre.",
            timer: "10 min"
        },
        {
            titre: "Ajouter aromates",
            texte: "Ajouter échalotes et ail. Faire revenir 3 minutes.",
            timer: "3 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, bouillon et bouquet garni. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Cuire 45 minutes à feu doux.",
            timer: "45 min"
        },
        {
            titre: "Ajouter les raisins",
            texte: "Ajouter les raisins et cuire encore 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Servir avec riz pilaf ou pommes vapeur.",
            timer: "—"
        }
    ],

    conseils: [
        "Utiliser des raisins de vigne bien mûrs pour une sauce plus parfumée.",
        "Ajouter une pointe de miel si les raisins sont très acides.",
        "Un vin blanc bourguignon sec accompagne parfaitement ce plat."
    ]
},

'piperade': {
    name:       'Piperade basquaise',
    region:     'Pays Basque',
    anecdote:   "La piperade, mélange de poivrons rouges, tomates et piment d’Espelette, se déguste seule, avec œufs ou jambon.",
    tags:       ["Été", "Automne", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "poivrons rouges", note: "émincés" },
                { qty: "2", name: "poivrons verts", note: "émincés" },
                { qty: "4", name: "tomates", note: "pelées et concassées" },
                { qty: "2", name: "oignons", note: "émincés" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à café", name: "piment d’Espelette", note: "" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir les oignons",
            texte: "Faire suer les oignons dans l’huile d’olive sans coloration.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les poivrons",
            texte: "Ajouter les poivrons et cuire 10 minutes à feu moyen.",
            timer: "10 min"
        },
        {
            titre: "Ajouter tomates et ail",
            texte: "Incorporer tomates, ail, sel, poivre et piment d’Espelette.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Cuire à feu doux 15 minutes jusqu’à texture fondante.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Servir seule, avec jambon de Bayonne ou œufs.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de sucre si les tomates sont très acides.",
        "La piperade est encore meilleure réchauffée.",
        "Ne pas trop cuire les poivrons : ils doivent rester légèrement fermes."
    ]
},


'piperade-oeufs': {
    name:       'Piperade aux œufs brouillés',
    region:     'Pays Basque',
    anecdote:   "La piperade de fin d’été, confite et parfumée, se marie parfaitement avec des œufs brouillés crémeux.",
    tags:       ["Été", "Automne", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Piperade",
            items: [
                { qty: "3", name: "poivrons rouges", note: "émincés" },
                { qty: "2", name: "poivrons verts", note: "émincés" },
                { qty: "4", name: "tomates", note: "pelées et concassées" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à café", name: "piment d’Espelette", note: "" }
            ]
        },
        {
            groupe: "Œufs",
            items: [
                { qty: "6", name: "œufs", note: "" },
                { qty: "1 c. à soupe", name: "beurre", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la piperade",
            texte: "Faire revenir oignons, poivrons, tomates, ail et piment comme dans la recette classique.",
            timer: "20 min"
        },
        {
            titre: "Cuire les œufs",
            texte: "Battre les œufs, saler, poivrer. Cuire doucement au beurre jusqu’à texture crémeuse.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger délicatement œufs brouillés et piperade chaude.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement avec pain grillé ou jambon de Bayonne.",
            timer: "—"
        }
    ],

    conseils: [
        "Cuire les œufs à feu très doux pour qu’ils restent crémeux.",
        "Ajouter un filet d’huile d’olive juste avant de servir.",
        "Une pointe de vinaigre de cidre réveille la piperade."
    ]
},


'pissaladiere': {
    name:       'Pissaladière',
    region:     'Nice / Provence',
    anecdote:   "Tarte niçoise aux oignons confits, anchois et olives noires, née sur les quais du port de Nice.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '45 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "1", name: "pâte à pain", note: "ou pâte à pizza" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "1 kg", name: "oignons", note: "émincés" },
                { qty: "12", name: "filets d’anchois", note: "à l’huile ou au sel" },
                { qty: "20", name: "olives noires de Nice", note: "" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à café", name: "thym", note: "" },
                { qty: "", name: "poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Confire les oignons",
            texte: "Faire revenir les oignons dans l’huile d’olive avec le thym. Cuire 25 minutes à feu doux jusqu’à consistance fondante.",
            timer: "25 min"
        },
        {
            titre: "Préparer la pâte",
            texte: "Étaler la pâte à pain sur une plaque légèrement huilée.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Étaler les oignons confits, disposer anchois et olives en croisillons.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 15 à 20 minutes à 200°C.",
            timer: "20 min"
        }
    ],

    conseils: [
        "Ne pas saler : les anchois s’en chargent.",
        "Ajouter un filet d’huile d’olive juste avant de servir.",
        "La pissaladière se déguste tiède ou froide."
    ]
},


'pissaladiere-tapenade': {
    name:       'Pissaladière à la tapenade',
    region:     'Nice',
    anecdote:   "Version estivale enrichie de tapenade et d’olives de Nice, idéale pour les pique-niques.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "1", name: "pâte à pain", note: "" },
                { qty: "3 c. à soupe", name: "tapenade noire", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "800 g", name: "oignons", note: "émincés" },
                { qty: "10", name: "filets d’anchois", note: "" },
                { qty: "15", name: "olives de Nice", note: "" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à café", name: "thym", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Confire les oignons",
            texte: "Faire revenir les oignons dans l’huile d’olive avec le thym pendant 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Préparer la pâte",
            texte: "Étaler la pâte et la badigeonner de tapenade.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Ajouter les oignons confits, puis disposer anchois et olives.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 15 à 20 minutes à 200°C.",
            timer: "20 min"
        }
    ],

    conseils: [
        "La tapenade remplace le pissalat traditionnel, aujourd’hui rare.",
        "Utiliser des oignons doux pour une saveur plus ronde.",
        "Servir avec une salade de roquette au citron."
    ]
},

'pissaladiere-tomates': {
    name:       'Pissaladière aux tomates confites',
    region:     'Nice',
    anecdote:   "Variante estivale où les tomates cerises confites apportent une touche sucrée et ensoleillée à la pissaladière traditionnelle.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '45 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "1", name: "pâte à pain", note: "ou pâte à pizza" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "700 g", name: "oignons", note: "émincés" },
                { qty: "300 g", name: "tomates cerises", note: "entières ou coupées" },
                { qty: "10", name: "filets d’anchois", note: "" },
                { qty: "15", name: "olives de Nice", note: "" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à café", name: "thym", note: "" },
                { qty: "", name: "poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Confire les oignons",
            texte: "Faire revenir les oignons dans l’huile d’olive avec le thym pendant 25 minutes à feu doux.",
            timer: "25 min"
        },
        {
            titre: "Confire les tomates",
            texte: "Ajouter les tomates cerises et laisser compoter 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Préparer la pâte",
            texte: "Étaler la pâte à pain sur une plaque légèrement huilée.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Étaler la garniture, puis disposer anchois et olives.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 15 à 20 minutes à 200°C.",
            timer: "20 min"
        }
    ],

    conseils: [
        "Ne pas saler : les anchois suffisent.",
        "Ajouter un filet d’huile d’olive juste avant de servir.",
        "Les tomates cerises confites apportent une douceur qui équilibre les anchois."
    ]
},


'pistou-ete': {
    name:       "Pistou soupe d'été",
    region:     'Provence / Nice',
    anecdote:   "La soupe au pistou, riche en légumes frais, haricots et pâtes, est un incontournable des tables familiales provençales.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '40 min',
    personnes:  6,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "courgettes", note: "en dés" },
                { qty: "3", name: "carottes", note: "en rondelles" },
                { qty: "200 g", name: "haricots verts", note: "coupés" },
                { qty: "200 g", name: "haricots blancs frais", note: "" },
                { qty: "200 g", name: "haricots rouges frais", note: "" },
                { qty: "2", name: "pommes de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Pâtes",
            items: [
                { qty: "100 g", name: "vermicelles ou petites pâtes", note: "" }
            ]
        },
        {
            groupe: "Pistou",
            items: [
                { qty: "1 gros bouquet", name: "basilic", note: "" },
                { qty: "3", name: "gousses d’ail", note: "" },
                { qty: "6 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "50 g", name: "parmesan", note: "râpé" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "1,5 litre", name: "eau ou bouillon", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les légumes",
            texte: "Porter le bouillon à ébullition, ajouter tous les légumes sauf les courgettes. Cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Ajouter pâtes et courgettes",
            texte: "Ajouter les pâtes et les courgettes. Cuire encore 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Préparer le pistou",
            texte: "Mixer basilic, ail, huile d’olive et parmesan jusqu’à texture lisse.",
            timer: "5 min"
        },
        {
            titre: "Finition",
            texte: "Hors du feu, incorporer le pistou. Ne pas faire bouillir après ajout.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ne jamais cuire le pistou : il perdrait son parfum.",
        "Ajouter des tomates fraîches en dés pour une version encore plus estivale.",
        "Servir avec du parmesan râpé et du pain grillé."
    ]
},


'pistou-haricots-frais': {
    name:       'Pistou de haricots frais',
    region:     'Provence / Nice',
    anecdote:   "Les haricots demi-secs écrasés au mortier avec basilic, ail et huile d’olive donnent un pistou rustique et parfumé.",
    tags:       ["Été", "Entrée", "Traditionnel"],
    prep:       '20 min',
    cuisson:    '35 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Légumineuses",
            items: [
                { qty: "400 g", name: "haricots demi-secs frais", note: "écossés" }
            ]
        },
        {
            groupe: "Pistou",
            items: [
                { qty: "1 gros bouquet", name: "basilic", note: "" },
                { qty: "3", name: "gousses d’ail", note: "" },
                { qty: "8 cl", name: "huile d’olive", note: "fruitée" },
                { qty: "30 g", name: "parmesan", note: "râpé (optionnel)" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les haricots",
            texte: "Cuire les haricots 30 à 35 minutes dans de l’eau non salée jusqu’à tendreté.",
            timer: "35 min"
        },
        {
            titre: "Préparer le pistou",
            texte: "Écraser basilic et ail au mortier, ajouter progressivement l’huile d’olive puis le parmesan.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Écraser grossièrement les haricots cuits et mélanger avec le pistou.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir tiède ou froid sur pain grillé.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas saler l’eau de cuisson : les haricots durciraient.",
        "Le mortier donne une texture plus authentique que le mixeur.",
        "Ajouter un filet d’huile d’olive juste avant de servir."
    ]
},


'plateau-charcuterie-fromages': {
    name:       'Plateau de charcuterie et fromages',
    region:     'France entière',
    anecdote:   "Pour les grandes tablées, on assemble charcuteries régionales, fromages affinés et bon pain : un tour de France gourmand.",
    tags:       ["Toute saison", "Plat convivial", "Facile"],
    prep:       '15 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Charcuteries",
            items: [
                { qty: "100 g", name: "saucisson sec", note: "" },
                { qty: "100 g", name: "jambon cru", note: "Bayonne, Auvergne…" },
                { qty: "100 g", name: "pâté ou terrine", note: "" }
            ]
        },
        {
            groupe: "Fromages",
            items: [
                { qty: "100 g", name: "fromage de chèvre", note: "" },
                { qty: "100 g", name: "comté ou beaufort", note: "" },
                { qty: "100 g", name: "camembert ou brie", note: "" }
            ]
        },
        {
            groupe: "Accompagnements",
            items: [
                { qty: "1", name: "baguette", note: "ou pain de campagne" },
                { qty: "1 poignée", name: "cornichons", note: "" },
                { qty: "1 poignée", name: "fruits secs", note: "noix, amandes…" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les tranches",
            texte: "Couper charcuteries et fromages en tranches ou portions régulières.",
            timer: "5 min"
        },
        {
            titre: "Disposer",
            texte: "Alterner charcuteries, fromages et accompagnements sur une grande planche.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Servir à température ambiante avec pain frais.",
            timer: "—"
        }
    ],

    conseils: [
        "Sortir fromages et charcuteries 30 minutes avant pour révéler les arômes.",
        "Ajouter confiture de figues ou miel pour les fromages.",
        "Varier selon les régions : rosette lyonnaise, tomme de Savoie, bleu d’Auvergne…"
    ]
},


'poisson-papillote': {
    name:       "Poisson d'avril en papillote",
    region:     "Bretagne",
    anecdote:   "Pour le 1er avril, les poissons du marché sont glissés en papillote avec herbes fraîches et citron.",
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "4 filets", name: "poisson blanc", note: "cabillaud, lieu, merlan…" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "citron", note: "en rondelles" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "quelques brins", name: "persil ou aneth", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les papillotes",
            texte: "Déposer chaque filet sur une feuille de papier cuisson. Ajouter échalote, herbes et rondelles de citron.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Arroser d’huile d’olive, saler et poivrer.",
            timer: "2 min"
        },
        {
            titre: "Cuisson",
            texte: "Fermer hermétiquement les papillotes et cuire 18 à 20 minutes à 180°C.",
            timer: "20 min"
        },
        {
            titre: "Servir",
            texte: "Ouvrir à table pour profiter des arômes.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un trait de vin blanc dans chaque papillote pour plus de parfum.",
        "Remplacer le persil par de l’aneth pour une note plus nordique.",
        "Servir avec riz ou pommes vapeur."
    ]
},


'poivrons-farcis': {
    name:       "Poivrons farcis à la méditerranéenne",
    region:     "Provence / Languedoc",
    anecdote:   "Les poivrons colorés de juin farcis de riz, tomates et herbes sont un classique du Midi.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "poivrons", note: "rouges ou jaunes" },
                { qty: "2", name: "tomates", note: "en dés" },
                { qty: "1", name: "oignon", note: "ciselé" }
            ]
        },
        {
            groupe: "Farce",
            items: [
                { qty: "150 g", name: "riz cuit", note: "" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "1 c. à soupe", name: "herbes de Provence", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les poivrons",
            texte: "Couper les poivrons en deux, retirer graines et membranes.",
            timer: "5 min"
        },
        {
            titre: "Préparer la farce",
            texte: "Mélanger riz, tomates, oignon, ail, herbes, huile d’olive, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Remplir les demi-poivrons de farce.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 35 à 40 minutes à 180°C.",
            timer: "40 min"
        }
    ],

    conseils: [
        "Ajouter un peu de feta émiettée pour une version plus grecque.",
        "Les poivrons rouges sont plus doux et sucrés que les verts.",
        "Servir avec une salade de roquette au citron."
    ]
},


'pot-au-feu': {
    name:       'Pot-au-feu',
    region:     'Île-de-France',
    anecdote:   "Plat familial mijoté longuement, traditionnellement servi après les fêtes pour réchauffer et réconforter.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       "25 min",
    cuisson:    "3 h",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "600 g", name: "paleron de bœuf", note: "" },
                { qty: "400 g", name: "gîte ou macreuse", note: "" },
                { qty: "1", name: "os à moelle", note: "optionnel" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "carottes", note: "" },
                { qty: "4", name: "poireaux", note: "" },
                { qty: "3", name: "navets", note: "" },
                { qty: "4", name: "pommes de terre", note: "" },
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Blanchir la viande",
            texte: "Plonger les viandes dans l’eau froide, porter à ébullition et écumer.",
            timer: "10 min"
        },
        {
            titre: "Mijoter",
            texte: "Ajouter oignon, bouquet garni, sel et poivre. Cuire 1 h 30 à feu doux.",
            timer: "90 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter carottes, poireaux, navets puis pommes de terre. Cuire encore 1 h.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Servir viandes et légumes avec bouillon, moutarde, cornichons et gros sel.",
            timer: "—"
        }
    ],

    conseils: [
        "Le bouillon est encore meilleur le lendemain.",
        "Ajouter un os à moelle pour un goût plus riche.",
        "Servir le bouillon en entrée avec vermicelles."
    ]
},


'pot-au-feu-de-la-mer': {
    name:       'Pot-au-feu de la mer',
    region:     'Bretagne / Normandie',
    anecdote:   "Poissons nobles et légumes du marché mijotent dans un bouillon iodé inspiré des ports bretons.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poissons & fruits de mer",
            items: [
                { qty: "400 g", name: "cabillaud", note: "ou lieu, merlu" },
                { qty: "300 g", name: "saumon", note: "" },
                { qty: "200 g", name: "moules", note: "nettoyées" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "poireaux", note: "en tronçons" },
                { qty: "2", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "oignon", note: "" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "fumet de poisson", note: "" },
                { qty: "10 cl", name: "vin blanc sec", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "quelques brins", name: "persil", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les légumes",
            texte: "Porter fumet et vin blanc à ébullition. Ajouter carottes, poireaux, pommes de terre et oignon. Cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Ajouter les poissons",
            texte: "Ajouter cabillaud et saumon en morceaux. Cuire 10 minutes à feu doux.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les moules",
            texte: "Ajouter les moules et cuire 5 minutes jusqu’à ouverture.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Servir dans des assiettes creuses avec persil frais.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un filet de crème pour une version plus normande.",
        "Les poissons doivent cuire doucement pour rester nacrés.",
        "Servir avec du pain grillé frotté à l’ail."
    ]
},


'pot-au-feu-joue-boeuf': {
    name:       'Pot-au-feu à la joue de bœuf',
    region:     'Île-de-France / Bourgogne',
    anecdote:   "La joue de bœuf, tendre et gélatineuse, donne un pot-au-feu raffiné et très parfumé.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       "25 min",
    cuisson:    "3 h",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1 kg", name: "joue de bœuf", note: "parée" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "carottes", note: "" },
                { qty: "3", name: "poireaux", note: "" },
                { qty: "3", name: "navets", note: "" },
                { qty: "4", name: "pommes de terre", note: "" },
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Blanchir la viande",
            texte: "Plonger la joue dans l’eau froide, porter à ébullition et écumer soigneusement.",
            timer: "10 min"
        },
        {
            titre: "Mijoter",
            texte: "Ajouter oignon, bouquet garni, sel et poivre. Cuire 1 h 30 à feu doux.",
            timer: "90 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter carottes, poireaux, navets puis pommes de terre. Cuire encore 1 h 15.",
            timer: "75 min"
        },
        {
            titre: "Servir",
            texte: "Servir viande et légumes avec bouillon, cornichons, moutarde et gros sel.",
            timer: "—"
        }
    ],

    conseils: [
        "La joue de bœuf devient fondante après longue cuisson : ne pas écourter.",
        "Ajouter un os à moelle pour un bouillon plus riche.",
        "Le bouillon se sert en entrée avec vermicelles."
    ]
},

'potage-crecy': {
    name:       'Potage Crécy aux carottes',
    region:     'Île-de-France',
    anecdote:   "Les carottes de Crécy, réputées pour leur douceur, donnent un velouté d’un orange éclatant.",
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "600 g", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "pomme de terre", note: "pour la texture" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "1 litre", name: "bouillon de volaille ou légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer oignon et carottes dans un peu de beurre sans coloration.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter pomme de terre et bouillon. Cuire 20 à 25 minutes.",
            timer: "25 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement jusqu’à texture veloutée. Ajuster la consistance avec un peu de bouillon.",
            timer: "5 min"
        },
        {
            titre: "Finition",
            texte: "Ajouter crème, sel et poivre. Servir chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter une pointe de cumin pour une note chaude.",
        "Remplacer la crème par un filet d’huile d’olive pour une version plus légère.",
        "Servir avec croûtons maison ou herbes fraîches."
    ]
},


'potage-cultivateur': {
    name:       "Potage cultivateur aux légumes d'automne",
    region:     "France entière",
    anecdote:   "Soupe paysanne composée des légumes du potager de fin de saison : carottes, navets, poireaux, pommes de terre.",
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "navets", note: "en dés" },
                { qty: "2", name: "poireaux", note: "en tronçons" },
                { qty: "2", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "1 litre", name: "bouillon de légumes ou volaille", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 poignée", name: "croûtons", note: "maison" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir les légumes",
            texte: "Faire suer oignon, carottes, navets et poireaux dans un peu de beurre.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter pommes de terre et bouillon. Cuire 25 à 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer plus ou moins finement selon la texture souhaitée.",
            timer: "5 min"
        },
        {
            titre: "Finition",
            texte: "Ajouter crème, sel et poivre. Servir avec croûtons.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de céleri-rave pour une note plus rustique.",
        "Garder quelques légumes en morceaux pour une version moins mixée.",
        "Un filet d’huile de noix apporte une touche automnale."
    ]
},


'potee-auvergnate': {
    name:       "Potée auvergnate",
    region:     "Auvergne",
    anecdote:   "Plat d’automne réunissant chou, légumes du jardin et charcuteries fumées du cochon.",
    tags:       ["Automne", "Hiver", "Plat principal", "Mijoté"],
    prep:       "20 min",
    cuisson:    "1 h 30",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "400 g", name: "palette fumée", note: "" },
                { qty: "300 g", name: "lard fumé", note: "" },
                { qty: "2", name: "saucisses auvergnates", note: "" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "chou vert", note: "émincé" },
                { qty: "4", name: "carottes", note: "" },
                { qty: "3", name: "navets", note: "" },
                { qty: "4", name: "pommes de terre", note: "" },
                { qty: "1", name: "poireau", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Blanchir le chou",
            texte: "Plonger le chou 5 minutes dans l’eau bouillante puis égoutter.",
            timer: "5 min"
        },
        {
            titre: "Cuire les viandes",
            texte: "Mettre palette et lard dans une grande marmite, couvrir d’eau et cuire 45 minutes.",
            timer: "45 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter chou, carottes, navets, poireau et pommes de terre. Ajouter bouquet garni.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Cuire encore 40 minutes. Ajouter les saucisses 15 minutes avant la fin.",
            timer: "40 min"
        },
        {
            titre: "Servir",
            texte: "Servir viandes et légumes bien chauds avec un peu de bouillon.",
            timer: "—"
        }
    ],

    conseils: [
        "Un peu de moutarde forte accompagne très bien la potée.",
        "Le chou peut être légèrement caramélisé avant cuisson pour plus de profondeur.",
        "Le bouillon est délicieux servi en entrée."
    ]
},

'poule-au-pot': {
    name:       'Poule au pot',
    region:     'Béarn / Gascogne',
    anecdote:   "Henri IV rêvait d’une poule au pot sur chaque table le dimanche. Ce plat généreux en est l’héritier direct.",
    tags:       ["Automne", "Hiver", "Plat principal", "Mijoté"],
    prep:       "20 min",
    cuisson:    "2 h 15",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poule fermière", note: "vidée et bridée" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "carottes", note: "" },
                { qty: "3", name: "poireaux", note: "" },
                { qty: "3", name: "navets", note: "" },
                { qty: "2", name: "pommes de terre", note: "" },
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Farce (optionnelle, version royale)",
            items: [
                { qty: "200 g", name: "chair à saucisse", note: "" },
                { qty: "1", name: "œuf", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la poule",
            texte: "Si farce : mélanger chair, œuf, échalote et persil. Farcir la poule et la ficeler.",
            timer: "10 min"
        },
        {
            titre: "Cuire la poule",
            texte: "Placer la poule dans une grande marmite, couvrir d’eau froide, ajouter oignon et bouquet garni. Porter à frémissement et écumer.",
            timer: "20 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter carottes, poireaux et navets. Cuire 1 h 30 à feu doux.",
            timer: "90 min"
        },
        {
            titre: "Finaliser",
            texte: "Ajouter les pommes de terre et cuire encore 25 minutes.",
            timer: "25 min"
        },
        {
            titre: "Servir",
            texte: "Servir poule, légumes et bouillon avec moutarde et cornichons.",
            timer: "—"
        }
    ],

    conseils: [
        "La farce rend la poule plus moelleuse et parfumée.",
        "Le bouillon peut être servi en entrée avec vermicelles.",
        "Une poule fermière nécessite une cuisson longue pour devenir fondante."
    ]
},


'poule-au-pot-hiver': {
    name:       "Poule au pot aux légumes d'hiver",
    region:     "Béarn / Gascogne",
    anecdote:   "Quand l’hiver s’installe, la poule au pot réchauffe les tables gasconnes avec ses légumes rustiques.",
    tags:       ["Hiver", "Plat principal", "Mijoté"],
    prep:       "20 min",
    cuisson:    "2 h 30",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poule fermière", note: "vidée et bridée" }
            ]
        },
        {
            groupe: "Légumes d’hiver",
            items: [
                { qty: "1/2", name: "chou vert", note: "émincé" },
                { qty: "4", name: "carottes", note: "" },
                { qty: "3", name: "navets", note: "" },
                { qty: "2", name: "panais", note: "" },
                { qty: "2", name: "poireaux", note: "" },
                { qty: "2", name: "pommes de terre", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" },
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la poule",
            texte: "Placer la poule dans une grande marmite, couvrir d’eau froide, ajouter oignon et bouquet garni. Porter à frémissement et écumer.",
            timer: "20 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter carottes, navets, panais, poireaux et chou. Cuire 1 h 45 à feu doux.",
            timer: "105 min"
        },
        {
            titre: "Finaliser",
            texte: "Ajouter les pommes de terre et cuire encore 25 minutes.",
            timer: "25 min"
        },
        {
            titre: "Servir",
            texte: "Servir poule, légumes et bouillon bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Le chou apporte une note plus rustique et hivernale.",
        "Une poule plus âgée donne un bouillon plus riche mais demande une cuisson plus longue.",
        "Servir avec pain grillé et moutarde forte."
    ]
},


'poulet-40-gousses-ail': {
    name:       'Poulet aux 40 gousses d\'ail',
    region:     'Provence',
    anecdote:   'Ce plat emblématique de Provence révèle un ail confit, doux et crémeux, loin de son piquant habituel. Un classique rustique et parfumé.',
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '1 h 30',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier entier", note: "1,4 à 1,8 kg" }
            ]
        },
        {
            groupe: "Ail & aromates",
            items: [
                { qty: "40", name: "gousses d’ail", note: "non épluchées" },
                { qty: "4 brins", name: "thym", note: "" },
                { qty: "2 feuilles", name: "laurier", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "4 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        },
        {
            groupe: "Accompagnement (optionnel)",
            items: [
                { qty: "1", name: "citron", note: "en quartiers" },
                { qty: "", name: "pain grillé", note: "pour tartiner l’ail confit" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulet",
            texte: "Préchauffer le four à 180°C. Saler et poivrer généreusement le poulet, puis le masser avec l’huile d’olive.",
            timer: "5 min"
        },
        {
            titre: "Disposer les aromates",
            texte: "Déposer les 40 gousses d’ail non épluchées dans une cocotte. Ajouter le thym et le laurier. Poser le poulet par-dessus.",
            timer: "5 min"
        },
        {
            titre: "Cuisson lente",
            texte: "Couvrir la cocotte et enfourner 1 h 15. L’ail va confire doucement et parfumer la viande.",
            timer: "75 min"
        },
        {
            titre: "Dorer le poulet",
            texte: "Retirer le couvercle et poursuivre la cuisson 15 minutes pour obtenir une peau bien dorée.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Laisser reposer 5 minutes. Servir le poulet avec les gousses d’ail confites à tartiner sur du pain.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Les gousses d’ail confites se dégustent comme une crème, simplement pressées hors de leur peau.",
        "Ajouter un verre de vin blanc dans la cocotte pour une sauce plus riche.",
        "Parfait avec des pommes de terre rôties ou du riz."
    ]
},

'poulet-a-lestragon': {
    name:       'Poulet à l\'estragon',
    region:     'Île-de-France',
    anecdote:   'Plat emblématique de la cuisine bourgeoise française, le poulet à l’estragon doit sa finesse à cette herbe au parfum anisé, parfaite avec une sauce crémeuse.',
    tags:       ["Printemps", "Plat principal", "Moyen"],
    prep:       '20 min',
    cuisson:    '1 h 10',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier", note: "1,4 à 1,8 kg, découpé en morceaux" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "échalotes", note: "finement ciselées" },
                { qty: "1 bouquet", name: "estragon frais", note: "garder quelques feuilles pour la finition" }
            ]
        },
        {
            groupe: "Liquides & sauce",
            items: [
                { qty: "10 cl", name: "vin blanc sec", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "épaisse ou liquide" },
                { qty: "10 cl", name: "bouillon de volaille", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile", note: "" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir le poulet",
            texte: "Faire chauffer l’huile et le beurre dans une cocotte. Dorer les morceaux de poulet sur toutes les faces. Saler et poivrer.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les aromates",
            texte: "Retirer légèrement le poulet, ajouter les échalotes et les faire revenir. Ajouter ensuite la moitié de l’estragon ciselé.",
            timer: "5 min"
        },
        {
            titre: "Déglacer et mijoter",
            texte: "Verser le vin blanc, laisser réduire de moitié. Ajouter le bouillon, remettre le poulet, couvrir et laisser mijoter doucement.",
            timer: "40 min"
        },
        {
            titre: "Préparer la sauce",
            texte: "Ajouter la crème fraîche, mélanger délicatement et poursuivre la cuisson à découvert pour épaissir la sauce.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer du reste d’estragon frais juste avant de servir. Accompagner de riz ou de pommes de terre.",
            timer: "5 min"
        }
    ],

    conseils: [
        "L’estragon frais est indispensable : l’estragon sec perd son parfum.",
        "Ajouter une pointe de moutarde dans la sauce pour une version plus relevée.",
        "Le plat est encore meilleur réchauffé le lendemain."
    ]
},

'poulet-aux-cepes': {
    name:       'Poulet aux cèpes',
    region:     'Périgord / Gascogne',
    anecdote:   'Plat emblématique du Sud-Ouest, où le parfum puissant du cèpe de Bordeaux sublime la chair du poulet fermier dans une sauce onctueuse.',
    tags:       ["Automne", "Hiver", "Plat principal", "Moyen"],
    prep:       '25 min',
    cuisson:    '1 h 15',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier", note: "1,4 à 1,8 kg, découpé en morceaux" }
            ]
        },
        {
            groupe: "Champignons",
            items: [
                { qty: "400 g", name: "cèpes frais", note: "ou 50 g séchés réhydratés" },
                { qty: "20 g", name: "beurre", note: "pour les faire sauter" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "2 gousses", name: "ail", note: "hachées" },
                { qty: "1 branche", name: "thym", note: "" },
                { qty: "1 feuille", name: "laurier", note: "" }
            ]
        },
        {
            groupe: "Liquides & sauce",
            items: [
                { qty: "10 cl", name: "vin blanc sec", note: "" },
                { qty: "15 cl", name: "bouillon de volaille", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "épaisse ou liquide" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile", note: "" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les cèpes",
            texte: "Nettoyer les cèpes sans les laver à grande eau. Les couper en morceaux et les faire sauter au beurre jusqu’à légère coloration.",
            timer: "10 min"
        },
        {
            titre: "Saisir le poulet",
            texte: "Dans une cocotte, faire chauffer l’huile et dorer les morceaux de poulet sur toutes les faces. Saler et poivrer.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les aromates",
            texte: "Ajouter les échalotes, l’ail, le thym et le laurier. Mélanger et laisser suer quelques minutes.",
            timer: "5 min"
        },
        {
            titre: "Déglacer et mijoter",
            texte: "Verser le vin blanc et laisser réduire. Ajouter le bouillon, couvrir et laisser mijoter doucement.",
            timer: "40 min"
        },
        {
            titre: "Incorporer les cèpes",
            texte: "Ajouter les cèpes sautés dans la cocotte, puis la crème. Mélanger et laisser épaissir la sauce à feu doux.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement. Servir bien chaud avec des pâtes fraîches, du riz ou des pommes de terre.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Les cèpes séchés donnent un parfum encore plus intense : conserver l’eau de réhydratation pour le bouillon.",
        "Ne pas laver les cèpes à grande eau : ils se gorgent d’eau et perdent leur goût.",
        "Un peu de persil frais ajouté au moment de servir apporte une touche de fraîcheur."
    ]
},

'poulet-basquaise': {
    name:       'Poulet basquaise',
    region:     'Pays Basque',
    anecdote:   'Plat emblématique du Pays Basque, où le poulet mijote dans une piperade colorée à base de poivrons, tomates et piment d’Espelette.',
    tags:       ["Été", "Automne", "Plat principal", "Moyen"],
    prep:       '25 min',
    cuisson:    '1 h 10',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier", note: "1,4 à 1,8 kg, découpé en morceaux" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "poivrons", note: "rouge, vert et jaune" },
                { qty: "4", name: "tomates", note: "bien mûres" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "3 gousses", name: "ail", note: "hachées" }
            ]
        },
        {
            groupe: "Aromates & épices",
            items: [
                { qty: "1 c. à café", name: "piment d’Espelette", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1 branche", name: "thym", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "10 cl", name: "vin blanc sec", note: "" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la piperade",
            texte: "Faire revenir les oignons dans l’huile d’olive. Ajouter les poivrons émincés, puis l’ail. Laisser fondre doucement.",
            timer: "15 min"
        },
        {
            titre: "Ajouter les tomates",
            texte: "Incorporer les tomates concassées, le thym, le laurier et le piment d’Espelette. Laisser mijoter pour obtenir une piperade épaisse.",
            timer: "10 min"
        },
        {
            titre: "Saisir le poulet",
            texte: "Dans une autre poêle, dorer les morceaux de poulet sur toutes les faces. Saler et poivrer.",
            timer: "10 min"
        },
        {
            titre: "Mijoter",
            texte: "Ajouter le poulet dans la piperade, déglacer la poêle avec le vin blanc et verser dans la cocotte. Couvrir et laisser mijoter.",
            timer: "35 min"
        },
        {
            titre: "Finaliser",
            texte: "Retirer le couvercle et laisser réduire légèrement la sauce si nécessaire. Rectifier l’assaisonnement.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien chaud avec du riz, des pâtes fraîches ou des pommes de terre vapeur.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Le vrai secret du basquaise : une piperade bien confite.",
        "Ajouter un peu de jambon de Bayonne en fin de cuisson pour une version plus typée.",
        "Les poivrons doivent être cuits mais encore légèrement fermes."
    ]
},


'poulet-cepes-sarladaises': {
    name:       'Poulet rôti aux cèpes et pommes sarladaises',
    region:     'Périgord',
    anecdote:   'Un classique du Périgord : le poulet rôti, les cèpes sautés et les pommes de terre sarladaises à la graisse de canard forment un trio irrésistible.',
    tags:       ["Automne", "Hiver", "Plat principal", "Moyen"],
    prep:       '25 min',
    cuisson:    '1 h 30',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier entier", note: "1,4 à 1,8 kg" },
                { qty: "30 g", name: "beurre", note: "pour le badigeonner" }
            ]
        },
        {
            groupe: "Pommes sarladaises",
            items: [
                { qty: "800 g", name: "pommes de terre", note: "variété ferme" },
                { qty: "2 c. à soupe", name: "graisse de canard", note: "" },
                { qty: "2 gousses", name: "ail", note: "hachées" },
                { qty: "1 poignée", name: "persil", note: "ciselé" }
            ]
        },
        {
            groupe: "Cèpes",
            items: [
                { qty: "300 g", name: "cèpes frais", note: "ou 40 g séchés réhydratés" },
                { qty: "20 g", name: "beurre", note: "pour les faire sauter" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" },
                { qty: "1 branche", name: "thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Rôtir le poulet",
            texte: "Préchauffer le four à 180°C. Saler, poivrer et badigeonner le poulet de beurre. Ajouter thym et laurier dans le plat. Enfourner et arroser régulièrement.",
            timer: "1 h 20"
        },
        {
            titre: "Préparer les pommes sarladaises",
            texte: "Éplucher et couper les pommes de terre en rondelles. Les faire revenir dans la graisse de canard jusqu’à coloration, puis ajouter ail et persil en fin de cuisson.",
            timer: "25 min"
        },
        {
            titre: "Sauter les cèpes",
            texte: "Nettoyer les cèpes, les couper en morceaux et les faire sauter au beurre avec l’échalote. Saler, poivrer et laisser légèrement dorer.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Sortir le poulet du four et le laisser reposer. Mélanger les cèpes aux pommes sarladaises ou servir séparément selon préférence.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Découper le poulet et servir avec les pommes sarladaises aux cèpes. Parfait avec un verre de Bergerac.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Les cèpes séchés donnent un parfum plus intense : conserver l’eau de réhydratation pour déglacer.",
        "Ne pas trop remuer les pommes sarladaises pour éviter qu’elles ne se cassent.",
        "Ajouter un peu de graisse de canard sur le poulet en cours de cuisson pour un goût encore plus périgourdin."
    ]
},

'poulet-crapaudine': {
    name:       'Poulet en crapaudine',
    region:     'Berry / Normandie',
    anecdote:   'Le poulet ouvert en crapaudine, aplati et grillé, permet une cuisson rapide et une peau ultra croustillante, idéale au barbecue ou au four.',
    tags:       ["Été", "Printemps", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '45 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier entier", note: "1,4 à 1,8 kg" }
            ]
        },
        {
            groupe: "Marinade",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "3 gousses", name: "ail", note: "hachées" },
                { qty: "1 c. à soupe", name: "paprika", note: "" },
                { qty: "1 c. à café", name: "thym", note: "ou herbes de Provence" },
                { qty: "1", name: "citron", note: "jus" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "1 poignée", name: "persil frais", note: "ciselé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulet",
            texte: "Poser le poulet sur une planche, dos vers le haut. Couper l’os du dos avec des ciseaux de cuisine, puis ouvrir et aplatir fermement avec la paume de la main.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger huile, ail, paprika, thym, citron, sel et poivre. Badigeonner généreusement le poulet sur toutes les faces.",
            timer: "5 min"
        },
        {
            titre: "Cuisson au four ou barbecue",
            texte: "Cuire à 200°C ou sur grill moyen. Disposer le poulet peau vers le haut, puis retourner à mi-cuisson pour bien griller la peau.",
            timer: "35 min"
        },
        {
            titre: "Repos",
            texte: "Laisser reposer quelques minutes pour que les jus se redistribuent.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de persil frais et servir avec des pommes de terre, une salade ou des légumes grillés.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Pour une peau encore plus croustillante, ajouter un filet d’huile sur la peau avant d’enfourner.",
        "La cuisson crapaudine est parfaite au barbecue : chaleur indirecte puis grill final.",
        "On peut ajouter du piment d’Espelette pour une version plus relevée."
    ]
},


'poulet-froid-mayonnaise': {
    name:       'Poulet froid mayonnaise',
    region:     'France entière',
    anecdote:   'Plat familial par excellence : le poulet rôti de la veille, servi froid avec une mayonnaise maison et quelques crudités, est un incontournable des pique-niques français.',
    tags:       ["Été", "Printemps", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '1 h 15',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet rôti", note: "cuit la veille, refroidi" }
            ]
        },
        {
            groupe: "Mayonnaise maison",
            items: [
                { qty: "1", name: "jaune d’œuf", note: "à température ambiante" },
                { qty: "15 cl", name: "huile neutre", note: "tournesol ou colza" },
                { qty: "1 c. à café", name: "moutarde", note: "" },
                { qty: "1 c. à café", name: "vinaigre ou jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        },
        {
            groupe: "Accompagnements",
            items: [
                { qty: "2", name: "tomates", note: "en quartiers" },
                { qty: "1", name: "salade verte", note: "" },
                { qty: "4", name: "œufs durs", note: "coupés en quartiers" },
                { qty: "1 poignée", name: "cornichons", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le poulet (la veille)",
            texte: "Rôtir le poulet au four à 180°C pendant environ 1 h 15. Laisser refroidir complètement puis réserver au réfrigérateur.",
            timer: "75 min"
        },
        {
            titre: "Préparer la mayonnaise",
            texte: "Mélanger jaune d’œuf, moutarde, sel et poivre. Monter progressivement avec l’huile jusqu’à obtenir une mayonnaise ferme. Ajouter vinaigre ou citron.",
            timer: "10 min"
        },
        {
            titre: "Découper le poulet",
            texte: "Sortir le poulet froid, retirer la peau si souhaité, puis découper en morceaux : blancs, cuisses, ailes.",
            timer: "5 min"
        },
        {
            titre: "Préparer les accompagnements",
            texte: "Couper tomates et œufs, laver la salade, disposer cornichons et crudités dans un plat.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Disposer le poulet froid dans un grand plat, entouré de crudités. Servir avec la mayonnaise maison.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Un poulet rôti la veille est plus facile à découper et plus savoureux froid.",
        "Ajouter des herbes fraîches (ciboulette, estragon) dans la mayonnaise pour plus de parfum.",
        "Parfait avec des pommes de terre vapeur ou une salade de riz."
    ]
},


'poulet-grille-citron': {
    name:       'Poulet grillé au citron et herbes',
    region:     'Provence',
    anecdote:   'Mariné longuement dans le citron, l’ail et les herbes de Provence, le poulet grillé révèle des parfums méditerranéens incomparables, surtout cuit au barbecue.',
    tags:       ["Été", "Printemps", "Plat principal", "Facile"],
    prep:       '15 min (+ marinade 4 h)',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier", note: "1,4 à 1,8 kg, découpé ou en crapaudine" }
            ]
        },
        {
            groupe: "Marinade citron & herbes",
            items: [
                { qty: "2", name: "citrons", note: "jus + zestes" },
                { qty: "4 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "4 gousses", name: "ail", note: "hachées" },
                { qty: "1 c. à soupe", name: "herbes de Provence", note: "" },
                { qty: "1 c. à café", name: "paprika", note: "" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "1 poignée", name: "persil frais", note: "ciselé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la marinade",
            texte: "Mélanger jus de citron, zestes, huile d’olive, ail, herbes de Provence, paprika, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Mariner le poulet",
            texte: "Badigeonner le poulet de marinade, masser et laisser reposer au frais au moins 4 heures (idéalement une nuit).",
            timer: "240 min"
        },
        {
            titre: "Cuisson grillée",
            texte: "Cuire au barbecue ou au four à 200°C. Commencer peau vers le haut, puis retourner pour bien griller la peau.",
            timer: "35 min"
        },
        {
            titre: "Repos",
            texte: "Laisser reposer quelques minutes pour que les jus se redistribuent.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de persil frais et servir avec légumes grillés, salade ou pommes de terre.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Plus la marinade est longue, plus le poulet est parfumé.",
        "Pour une peau ultra croustillante, ajouter un filet d’huile juste avant la cuisson.",
        "Le barbecue donne un goût incomparable, mais le four fonctionne très bien aussi."
    ]
},


'poulet-roti': {
    name:       'Poulet rôti du dimanche',
    region:     'France entière',
    anecdote:   'Plat dominical par excellence, le poulet rôti réunit les familles françaises autour d’un repas simple, généreux et parfumé.',
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '1 h 20',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier entier", note: "1,4 à 1,8 kg" },
                { qty: "30 g", name: "beurre", note: "pour le badigeonner" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "4 gousses", name: "ail", note: "écrasées" },
                { qty: "2", name: "échalotes", note: "coupées en deux" },
                { qty: "1 branche", name: "thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        },
        {
            groupe: "Accompagnement",
            items: [
                { qty: "800 g", name: "pommes de terre", note: "coupées en quartiers" },
                { qty: "2 c. à soupe", name: "huile", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulet",
            texte: "Préchauffer le four à 200°C. Saler, poivrer et badigeonner le poulet de beurre. Ajouter ail, échalotes, thym et laurier dans le plat.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les pommes de terre",
            texte: "Mélanger les pommes de terre avec l’huile, sel et poivre. Les disposer autour du poulet.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 1 h 20 en arrosant régulièrement avec le jus de cuisson. Retourner les pommes de terre à mi-cuisson.",
            timer: "80 min"
        },
        {
            titre: "Repos",
            texte: "Sortir le poulet du four et laisser reposer quelques minutes pour que les jus se redistribuent.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Découper le poulet et servir avec les pommes de terre rôties et le jus de cuisson.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter un peu de beurre sur la peau en cours de cuisson pour un croustillant parfait.",
        "Un filet de vin blanc dans le plat donne un jus plus parfumé.",
        "Les restes sont délicieux froids avec une salade."
    ]
},


'poulet-roti-herbes-fraiches': {
    name:       'Poulet rôti aux herbes fraîches',
    region:     'France entière',
    anecdote:   'Le thym, le romarin, le persil et l’estragon glissés sous la peau du poulet parfument la chair en profondeur et donnent une peau magnifiquement dorée.',
    tags:       ["Printemps", "Été", "Plat principal", "Facile"],
    prep:       '15 min',
    cuisson:    '1 h 20',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet fermier entier", note: "1,4 à 1,8 kg" },
                { qty: "40 g", name: "beurre", note: "ramolli" }
            ]
        },
        {
            groupe: "Herbes fraîches",
            items: [
                { qty: "4 brins", name: "thym", note: "" },
                { qty: "2 brins", name: "romarin", note: "" },
                { qty: "1 poignée", name: "persil plat", note: "ciselé" },
                { qty: "4 brins", name: "estragon", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "4 gousses", name: "ail", note: "écrasées" },
                { qty: "2", name: "échalotes", note: "coupées en deux" }
            ]
        },
        {
            groupe: "Accompagnement",
            items: [
                { qty: "800 g", name: "pommes de terre", note: "en quartiers" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulet",
            texte: "Préchauffer le four à 200°C. Mélanger le beurre avec les herbes ciselées. Soulever délicatement la peau du poulet et glisser le beurre aux herbes dessous.",
            timer: "10 min"
        },
        {
            titre: "Assaisonner et garnir",
            texte: "Saler et poivrer le poulet. Déposer ail et échalotes dans le plat. Ajouter quelques herbes entières dans la cavité.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les pommes de terre",
            texte: "Mélanger les pommes de terre avec l’huile d’olive, sel et poivre. Les disposer autour du poulet.",
            timer: "5 min"
        },
        {
            titre: "Cuisson",
            texte: "Enfourner 1 h 20 en arrosant régulièrement avec le jus. Retourner les pommes de terre à mi-cuisson.",
            timer: "80 min"
        },
        {
            titre: "Repos",
            texte: "Sortir le poulet du four et laisser reposer quelques minutes pour que les jus se redistribuent.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Découper le poulet et servir avec les pommes de terre rôties et le jus parfumé aux herbes.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Glisser le beurre sous la peau est la clé d’un poulet très parfumé.",
        "Ajouter un filet de citron en fin de cuisson pour une touche de fraîcheur.",
        "Les herbes fraîches sont indispensables : le romarin sec devient amer."
    ]
},


'poulet-salade-mediterraneenne': {
    name:       'Poulet froid en salade méditerranéenne',
    region:     'Provence',
    anecdote:   'Le poulet rôti refroidi et effiloché, mêlé aux légumes du soleil, olives et herbes fraîches, compose une salade estivale simple et parfumée.',
    tags:       ["Été", "Entrée", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '1 h 15',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "1", name: "poulet rôti", note: "cuit la veille, effiloché" }
            ]
        },
        {
            groupe: "Légumes & garniture",
            items: [
                { qty: "2", name: "tomates", note: "en dés" },
                { qty: "1", name: "poivron rouge", note: "en lanières" },
                { qty: "1", name: "concombre", note: "en demi-rondelles" },
                { qty: "1", name: "oignon rouge", note: "émincé finement" },
                { qty: "100 g", name: "olives noires", note: "type Kalamata" },
                { qty: "1 poignée", name: "persil ou basilic", note: "frais, ciselé" }
            ]
        },
        {
            groupe: "Vinaigrette méditerranéenne",
            items: [
                { qty: "4 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "2 c. à soupe", name: "jus de citron", note: "" },
                { qty: "1 c. à café", name: "moutarde", note: "" },
                { qty: "1 c. à café", name: "origan", note: "" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulet",
            texte: "Effilocher le poulet rôti froid en retirant la peau. Conserver les morceaux tendres et réguliers.",
            timer: "5 min"
        },
        {
            titre: "Couper les légumes",
            texte: "Couper tomates, poivron, concombre et oignon rouge. Ajouter les olives et les herbes fraîches.",
            timer: "10 min"
        },
        {
            titre: "Préparer la vinaigrette",
            texte: "Mélanger huile d’olive, citron, moutarde, origan, sel et poivre jusqu’à obtenir une sauce homogène.",
            timer: "3 min"
        },
        {
            titre: "Assembler la salade",
            texte: "Mélanger délicatement le poulet effiloché avec les légumes et la vinaigrette. Rectifier l’assaisonnement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien frais, idéalement après 30 minutes au réfrigérateur pour que les saveurs se mêlent.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter de la feta ou de la mozzarella pour une version plus gourmande.",
        "Un filet de vinaigre balsamique apporte une touche sucrée-acidulée.",
        "Parfaite avec du pain grillé ou des croûtons maison."
    ]
},


'quiche-lorraine': {
    name:       'Quiche lorraine',
    region:     'Lorraine',
    anecdote:   "Née dans les cuisines de Nancy au XVIe siècle, la quiche lorraine est l’une des recettes françaises les plus emblématiques.",
    tags:       ["Toute saison", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "1", name: "pâte brisée", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "200 g", name: "lardons fumés", note: "" },
                { qty: "3", name: "œufs", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "10 cl", name: "lait", note: "" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "noix de muscade", note: "optionnelle" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Foncer un moule avec la pâte brisée et la piquer à la fourchette.",
            timer: "5 min"
        },
        {
            titre: "Cuire les lardons",
            texte: "Faire revenir les lardons à sec jusqu’à légère coloration. Égoutter.",
            timer: "5 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Battre œufs, crème, lait, sel, poivre et muscade.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Répartir les lardons sur la pâte puis verser l’appareil.",
            timer: "2 min"
        },
        {
            titre: "Cuisson",
            texte: "Cuire 30 à 35 minutes à 180°C jusqu’à coloration dorée.",
            timer: "35 min"
        }
    ],

    conseils: [
        "La vraie quiche lorraine ne contient pas de fromage.",
        "Précuire légèrement la pâte pour éviter qu’elle ne détrempe.",
        "Servir tiède avec une salade verte."
    ]
},


'raclette': {
    name:       'Raclette savoyarde',
    region:     'Savoie / Haute-Savoie',
    anecdote:   'La raclette tire son nom du geste ancestral consistant à racler le fromage fondu directement sur les pommes de terre. Un rituel convivial des montagnes savoyardes.',
    tags:       ["Hiver", "Plat principal", "Convivial"],
    prep:       '20 min',
    cuisson:    '30 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Fromage",
            items: [
                { qty: "600 à 800 g", name: "fromage à raclette", note: "nature ou fumé" }
            ]
        },
        {
            groupe: "Accompagnements chauds",
            items: [
                { qty: "1,2 kg", name: "pommes de terre", note: "à chair ferme, cuites vapeur" }
            ]
        },
        {
            groupe: "Charcuteries",
            items: [
                { qty: "150 g", name: "jambon cru", note: "" },
                { qty: "150 g", name: "jambon blanc", note: "" },
                { qty: "150 g", name: "rosette ou saucisson", note: "" },
                { qty: "150 g", name: "viande des Grisons", note: "optionnel" }
            ]
        },
        {
            groupe: "Légumes & condiments",
            items: [
                { qty: "1 bocal", name: "cornichons", note: "" },
                { qty: "1 bocal", name: "oignons au vinaigre", note: "" },
                { qty: "1", name: "poivron", note: "en lamelles, optionnel" },
                { qty: "1", name: "salade verte", note: "pour alléger le repas" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pommes de terre",
            texte: "Cuire les pommes de terre à la vapeur ou à l’eau jusqu’à ce qu’elles soient tendres. Les garder au chaud.",
            timer: "25 min"
        },
        {
            titre: "Disposer les accompagnements",
            texte: "Préparer les assiettes de charcuteries, couper le fromage en tranches et disposer cornichons et oignons au vinaigre.",
            timer: "10 min"
        },
        {
            titre: "Chauffer l’appareil à raclette",
            texte: "Installer l’appareil au centre de la table et le préchauffer.",
            timer: "5 min"
        },
        {
            titre: "Faire fondre le fromage",
            texte: "Chaque convive fait fondre son fromage dans les coupelles puis le verse sur les pommes de terre.",
            timer: "Variable"
        },
        {
            titre: "Servir",
            texte: "Accompagner de charcuteries, de salade et de condiments. Le repas se prolonge au rythme des coupelles.",
            timer: "—"
        }
    ],

    conseils: [
        "Un vin blanc de Savoie (Apremont, Roussette) accompagne parfaitement la raclette.",
        "Varier les fromages : raclette fumée, morbier, bleu de Bonneval.",
        "Ajouter des champignons poêlés ou des légumes grillés pour une version plus légère."
    ]
},

'ragout-marrons-saucisse': {
    name:       'Ragoût de marrons à la saucisse',
    region:     'Ardèche / Corse',
    anecdote:   "À la Toussaint, les châtaignes sont à leur apogée. Ce ragoût simple et nourrissant réunit marrons et saucisses.",
    tags:       ["Automne", "Hiver", "Plat principal", "Mijoté"],
    prep:       "20 min",
    cuisson:    "50 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "4", name: "saucisses", note: "Toulouse, Corse ou campagne" },
                { qty: "150 g", name: "lardons fumés", note: "optionnels" }
            ]
        },
        {
            groupe: "Marrons",
            items: [
                { qty: "400 g", name: "marrons cuits", note: "frais, sous vide ou en bocal" }
            ]
        },
        {
            groupe: "Légumes & aromates",
            items: [
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "20 cl", name: "vin blanc sec", note: "" },
                { qty: "30 cl", name: "bouillon", note: "volaille ou légumes" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir les viandes",
            texte: "Faire dorer les saucisses (et lardons si utilisés) dans une cocotte.",
            timer: "8 min"
        },
        {
            titre: "Ajouter aromates",
            texte: "Ajouter oignon, carottes et ail. Faire revenir quelques minutes.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, bouillon et bouquet garni. Saler légèrement, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Cuire 25 minutes à feu doux.",
            timer: "25 min"
        },
        {
            titre: "Ajouter les marrons",
            texte: "Ajouter les marrons et cuire encore 10 minutes sans trop remuer.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien chaud avec pain de campagne.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop remuer après ajout des marrons : ils s’écrasent facilement.",
        "Un filet d’huile d’olive corse apporte une belle profondeur.",
        "Ajouter un peu de tomate pour une version plus méridionale."
    ]
},

'ratatouille-nicoise': {
    name:       'Ratatouille niçoise',
    region:     'Nice / Provence',
    anecdote:   "La vraie ratatouille se prépare en cuisant chaque légume séparément avant de les réunir pour préserver leurs saveurs.",
    tags:       ["Été", "Plat principal", "Traditionnel"],
    prep:       "20 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "aubergines", note: "en dés" },
                { qty: "2", name: "courgettes", note: "en rondelles" },
                { qty: "2", name: "poivrons", note: "rouge et jaune" },
                { qty: "4", name: "tomates", note: "pelées et concassées" },
                { qty: "2", name: "oignons", note: "émincés" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à café", name: "thym", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les aubergines",
            texte: "Faire revenir les aubergines dans un peu d’huile jusqu’à légère coloration. Réserver.",
            timer: "8 min"
        },
        {
            titre: "Cuire les courgettes",
            texte: "Faire revenir les courgettes de la même manière. Réserver.",
            timer: "6 min"
        },
        {
            titre: "Cuire les poivrons",
            texte: "Faire revenir les poivrons jusqu’à ce qu’ils s’attendrissent.",
            timer: "6 min"
        },
        {
            titre: "Faire suer oignons et ail",
            texte: "Ajouter oignons et ail, cuire 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Ajouter tomates",
            texte: "Ajouter les tomates concassées, sel, poivre et thym. Cuire 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Ajouter tous les légumes réservés et laisser mijoter 10 minutes.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Ne pas couvrir complètement pour éviter l’excès d’eau.",
        "Un repos de 1 heure hors feu améliore les saveurs.",
        "Servir avec un filet d’huile d’olive crue."
    ]
},


'ratatouille-pain-grille': {
    name:       'Ratatouille froide sur pain grillé',
    region:     'Provence',
    anecdote:   "La ratatouille froide de la veille, servie sur pain grillé frotté à l’ail, est un brunch provençal simple et parfait.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "4 grandes tranches", name: "pain de campagne", note: "ou pain grillé" },
                { qty: "1", name: "gousse d’ail", note: "pour frotter le pain" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "400 g", name: "ratatouille froide", note: "préparée la veille" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "quelques feuilles", name: "basilic", note: "frais" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Griller le pain",
            texte: "Griller les tranches de pain puis les frotter légèrement avec la gousse d’ail.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner la ratatouille",
            texte: "Égoutter légèrement la ratatouille si elle est très juteuse. Ajouter un filet d’huile d’olive.",
            timer: "2 min"
        },
        {
            titre: "Dresser",
            texte: "Déposer une généreuse cuillerée de ratatouille sur chaque tranche de pain.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Ajouter quelques feuilles de basilic et servir bien frais.",
            timer: "—"
        }
    ],

    conseils: [
        "La ratatouille est meilleure le lendemain : les saveurs se fondent.",
        "Ajouter un peu de tapenade pour une version plus méditerranéenne.",
        "Parfait avec un verre de rosé bien frais."
    ]
},

'ravioles-dauphine': {
    name:       'Ravioles du Dauphiné',
    region:     'Drôme / Isère',
    anecdote:   "Ces petites ravioles farcies au comté et persil se dégustent traditionnellement pochées dans un bouillon chaud.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Ravioles",
            items: [
                { qty: "4 plaques", name: "ravioles du Dauphiné", note: "type Romans" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de volaille ou légumes", note: "" },
                { qty: "1", name: "échalote", note: "facultative" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "quelques brins", name: "ciboulette", note: "ciselée" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Chauffer le bouillon",
            texte: "Porter le bouillon à frémissement sans ébullition forte.",
            timer: "5 min"
        },
        {
            titre: "Pocher les ravioles",
            texte: "Plonger les ravioles encore en plaques. Elles se détachent seules en 1 minute.",
            timer: "2 min"
        },
        {
            titre: "Finaliser",
            texte: "Ajouter un peu de crème si souhaité. Mélanger délicatement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement avec ciboulette fraîche.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne jamais faire bouillir les ravioles : elles se délitent.",
        "Servir dans des assiettes creuses bien chaudes.",
        "Ajouter quelques légumes très fins (poireau, carotte) pour une version plus complète."
    ]
},


'reveillon-huitres-foie-gras': {
    name:       'Huîtres et foie gras au réveillon',
    region:     'France entière',
    anecdote:   'En France, le réveillon commence souvent par un duo emblématique : huîtres fraîches et foie gras, accompagnés d’un verre de champagne.',
    tags:       ["Hiver", "Entrée", "Festif"],
    prep:       '20 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Huîtres",
            items: [
                { qty: "24", name: "huîtres creuses n°3", note: "ou fines de claire" },
                { qty: "1", name: "citron", note: "en quartiers" },
                { qty: "1", name: "échalote", note: "pour la sauce mignonette" },
                { qty: "5 cl", name: "vinaigre de vin rouge", note: "" }
            ]
        },
        {
            groupe: "Foie gras",
            items: [
                { qty: "250 g", name: "foie gras de canard", note: "mi-cuit, en tranches" },
                { qty: "1", name: "baguette", note: "grillée ou pain d’épices" },
                { qty: "1 pincée", name: "fleur de sel", note: "" },
                { qty: "", name: "poivre du moulin", note: "" }
            ]
        },
        {
            groupe: "Accompagnements",
            items: [
                { qty: "1", name: "salade verte", note: "optionnelle" },
                { qty: "1 poignée", name: "cornichons", note: "pour le foie gras" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Ouvrir les huîtres",
            texte: "Ouvrir les huîtres juste avant de servir. Les disposer sur un lit de glace ou de gros sel pour les stabiliser.",
            timer: "10 min"
        },
        {
            titre: "Préparer la mignonette",
            texte: "Hacher finement l’échalote et la mélanger avec le vinaigre de vin rouge. Servir dans un petit bol.",
            timer: "3 min"
        },
        {
            titre: "Préparer le foie gras",
            texte: "Couper le foie gras en tranches régulières. Disposer avec du pain grillé ou du pain d’épices.",
            timer: "5 min"
        },
        {
            titre: "Dresser",
            texte: "Présenter les huîtres avec citron et mignonette. Ajouter les tranches de foie gras, la fleur de sel, le poivre et les accompagnements.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien frais, idéalement avec un verre de champagne ou un vin blanc sec.",
            timer: "—"
        }
    ],

    conseils: [
        "Sortir le foie gras du réfrigérateur 10 minutes avant pour qu’il soit fondant.",
        "Les huîtres doivent être ouvertes au dernier moment pour conserver toute leur fraîcheur.",
        "Un pain d’épices légèrement toasté accompagne merveilleusement le foie gras."
    ]
},


'rillettes-du-mans': {
    name:       'Rillettes du Mans',
    region:     'Sarthe',
    anecdote:   "Fondantes et savoureuses, les rillettes du Mans se dégustent traditionnellement sur pain grillé dans toute la Sarthe.",
    tags:       ["Automne", "Hiver", "Entrée", "Traditionnel"],
    prep:       "20 min",
    cuisson:    "3 h",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1 kg", name: "poitrine de porc", note: "avec un peu de gras" },
                { qty: "500 g", name: "échine de porc", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la viande",
            texte: "Couper les viandes en gros cubes. Saler, poivrer et ajouter l’ail.",
            timer: "10 min"
        },
        {
            titre: "Cuisson lente",
            texte: "Mettre dans une cocotte à feu très doux. Cuire 3 heures en remuant régulièrement.",
            timer: "180 min"
        },
        {
            titre: "Effilocher",
            texte: "Écraser la viande à la fourchette pour obtenir une texture filandreuse.",
            timer: "5 min"
        },
        {
            titre: "Finition",
            texte: "Rectifier l’assaisonnement et conserver au frais.",
            timer: "—"
        }
    ],

    conseils: [
        "La cuisson doit être très douce pour que la viande fonde.",
        "Un peu de graisse de canard peut enrichir la texture.",
        "Servir sur pain grillé avec cornichons."
    ]
},


'rillettes-sardines': {
    name:       'Rillettes de sardines fraîches',
    region:     'Bretagne / Pays de Loire',
    anecdote:   "La sardine fraîche de mai est la meilleure : en rillettes avec beurre demi-sel, elle devient un incontournable des tartines.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "5 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "300 g", name: "sardines fraîches", note: "écaillées et levées en filets" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "80 g", name: "beurre demi-sel", note: "mou" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "quelques brins", name: "persil", note: "haché" },
                { qty: "", name: "poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire légèrement les sardines",
            texte: "Poêler les filets 2 minutes ou les cuire à la vapeur. Laisser refroidir.",
            timer: "5 min"
        },
        {
            titre: "Écraser",
            texte: "Écraser les sardines avec le beurre mou.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter échalote, citron, persil et poivre. Mélanger.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Servir sur pain grillé ou blinis.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de moutarde pour une version plus relevée.",
        "Les sardines en boîte peuvent dépanner, mais les fraîches sont incomparables.",
        "Un filet d’huile d’olive améliore la texture."
    ]
},


'risotto-asperges': {
    name:       'Risotto aux asperges et parmesan',
    region:     'Provence / fusion italienne',
    anecdote:   "Plat d’inspiration italienne adopté en Provence, sublimé par les asperges vertes de la plaine de Crau.",
    tags:       ["Printemps", "Plat principal", "Moyen"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "300 g", name: "riz arborio ou carnaroli", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 litre", name: "bouillon de légumes", note: "chaud" }
            ]
        },
        {
            groupe: "Asperges",
            items: [
                { qty: "400 g", name: "asperges vertes", note: "en tronçons, pointes réservées" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "vin blanc sec", note: "" },
                { qty: "40 g", name: "parmesan", note: "râpé" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les asperges",
            texte: "Cuire les tronçons 5 minutes dans l’eau salée. Réserver les pointes crues.",
            timer: "5 min"
        },
        {
            titre: "Faire revenir l’échalote",
            texte: "Faire suer l’échalote dans l’huile d’olive sans coloration.",
            timer: "3 min"
        },
        {
            titre: "Nacrer le riz",
            texte: "Ajouter le riz et mélanger jusqu’à ce qu’il devienne translucide.",
            timer: "2 min"
        },
        {
            titre: "Déglacer",
            texte: "Verser le vin blanc et laisser évaporer.",
            timer: "2 min"
        },
        {
            titre: "Cuisson du risotto",
            texte: "Ajouter le bouillon chaud louche par louche pendant 15 minutes en remuant.",
            timer: "15 min"
        },
        {
            titre: "Ajouter asperges et parmesan",
            texte: "Incorporer asperges, beurre et parmesan. Mélanger hors du feu.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Décorer avec les pointes d’asperges crues.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas rincer le riz : l’amidon est essentiel à la texture.",
        "Ajouter un filet de citron pour réveiller les asperges.",
        "Les pointes crues apportent un contraste croquant."
    ]
},


'risotto-cepes-truffe': {
    name:       'Risotto aux cèpes et truffe noire',
    region:     'Périgord / Provence',
    anecdote:   "Les cèpes de septembre et une lamelle de truffe noire transforment ce risotto en plat de grande occasion.",
    tags:       ["Automne", "Hiver", "Plat principal", "Festif"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "300 g", name: "riz arborio ou carnaroli", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 litre", name: "bouillon de volaille", note: "chaud" }
            ]
        },
        {
            groupe: "Champignons",
            items: [
                { qty: "250 g", name: "cèpes frais", note: "émincés" },
                { qty: "20 g", name: "cèpes secs", note: "réhydratés" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "vin blanc sec", note: "" },
                { qty: "40 g", name: "parmesan", note: "râpé" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "1 petite", name: "truffe noire", note: "en lamelles" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Sauter les cèpes",
            texte: "Faire revenir les cèpes frais dans un peu de beurre jusqu’à légère coloration.",
            timer: "5 min"
        },
        {
            titre: "Faire suer l’échalote",
            texte: "Dans une autre casserole, faire suer l’échalote dans un peu d’huile.",
            timer: "3 min"
        },
        {
            titre: "Nacrer le riz",
            texte: "Ajouter le riz et mélanger jusqu’à ce qu’il devienne translucide.",
            timer: "2 min"
        },
        {
            titre: "Déglacer",
            texte: "Verser le vin blanc et laisser évaporer.",
            timer: "2 min"
        },
        {
            titre: "Cuisson du risotto",
            texte: "Ajouter le bouillon chaud louche par louche pendant 15 minutes.",
            timer: "15 min"
        },
        {
            titre: "Ajouter cèpes et parmesan",
            texte: "Incorporer les cèpes, le beurre et le parmesan hors du feu.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Ajouter les lamelles de truffe juste avant de servir.",
            timer: "—"
        }
    ],

    conseils: [
        "Les cèpes secs renforcent le parfum des frais.",
        "Ne jamais cuire la truffe : elle perd son arôme.",
        "Un filet d’huile de truffe peut compléter si la truffe est rare."
    ]
},


'roti-porc-pruneaux': {
    name:       'Rôti de porc aux pruneaux',
    region:     'Touraine',
    anecdote:   "Les pruneaux de Tours apportent douceur et parfum à ce grand classique sucré-salé du Val de Loire.",
    tags:       ["Automne", "Hiver", "Plat principal", "Mijoté"],
    prep:       "15 min",
    cuisson:    "1 h 15",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1 kg", name: "rôti de porc dans l’échine", note: "" }
            ]
        },
        {
            groupe: "Fruits",
            items: [
                { qty: "200 g", name: "pruneaux dénoyautés", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1", name: "branche de thym", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "15 cl", name: "vin blanc", note: "" },
                { qty: "20 cl", name: "bouillon", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir le rôti",
            texte: "Faire dorer le rôti sur toutes ses faces dans une cocotte.",
            timer: "8 min"
        },
        {
            titre: "Ajouter aromates",
            texte: "Ajouter oignons, ail, thym et laurier. Faire revenir 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc, bouillon et pruneaux. Saler légèrement, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Cuire 1 h à feu doux en arrosant régulièrement.",
            timer: "60 min"
        },
        {
            titre: "Servir",
            texte: "Découper le rôti et servir avec les pruneaux et le jus réduit.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter une cuillère de miel pour renforcer la douceur.",
        "Les pruneaux peuvent être réhydratés dans du thé ou du vin blanc.",
        "Servir avec purée de céleri ou pommes vapeur."
    ]
},

'roti-veau-champignons': {
    name:       'Rôti de veau aux champignons sauvages',
    region:     'Île-de-France / Bourgogne',
    anecdote:   "Le veau de lait rôti avec les derniers champignons d’automne donne un plat délicat et parfumé.",
    tags:       ["Automne", "Hiver", "Plat principal", "Mijoté"],
    prep:       "15 min",
    cuisson:    "1 h 10",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "800 g", name: "rôti de veau", note: "dans la noix ou quasi" }
            ]
        },
        {
            groupe: "Champignons",
            items: [
                { qty: "300 g", name: "champignons sauvages", note: "cèpes, girolles, trompettes…" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1", name: "branche de thym", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "10 cl", name: "vin blanc", note: "" },
                { qty: "15 cl", name: "bouillon", note: "" },
                { qty: "10 cl", name: "crème fraîche", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir le rôti",
            texte: "Faire dorer le rôti de veau dans un peu de beurre.",
            timer: "8 min"
        },
        {
            titre: "Ajouter aromates",
            texte: "Ajouter échalotes, ail et thym. Faire revenir 3 minutes.",
            timer: "3 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter vin blanc et bouillon. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Couvrir et cuire 45 minutes à feu doux.",
            timer: "45 min"
        },
        {
            titre: "Ajouter les champignons",
            texte: "Ajouter les champignons et cuire encore 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Crémage",
            texte: "Ajouter la crème et laisser épaissir 5 minutes.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ne pas trop cuire le veau : il doit rester moelleux.",
        "Les champignons sauvages peuvent être mélangés pour plus de parfum.",
        "Un trait de jus de citron équilibre la sauce."
    ]
},


'rougets-provencaux': {
    name:       'Filets de rouget à la provençale',
    region:     'Provence / Marseille',
    anecdote:   "Le rouget barbet de roche, emblématique de Méditerranée, se marie parfaitement aux tomates, olives et huile d’olive.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "12 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "8", name: "filets de rouget", note: "sans arêtes" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "2", name: "tomates", note: "concassées" },
                { qty: "1 poignée", name: "olives noires", note: "type Nyons" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la garniture",
            texte: "Faire revenir ail, tomates et olives 5 minutes dans l’huile d’olive.",
            timer: "5 min"
        },
        {
            titre: "Cuire les rougets",
            texte: "Déposer les filets côté peau dans une poêle chaude. Cuire 2 minutes, puis 1 minute côté chair.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Déposer les filets sur la garniture provençale. Parsemer de persil.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement avec riz ou légumes grillés.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop cuire le rouget : il devient sec rapidement.",
        "Ajouter un filet de citron juste avant de servir.",
        "Les olives de Nyons apportent une note douce et fruitée."
    ]
},


'saint-pierre-capres': {
    name:       'Filet de saint-pierre aux câpres',
    region:     'Bretagne / Normandie',
    anecdote:   "Le saint-pierre, poisson noble de l’Atlantique, se marie parfaitement à une sauce citronnée aux câpres.",
    tags:       ["Printemps", "Été", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "12 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "4", name: "filets de saint-pierre", note: "" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "2 c. à soupe", name: "câpres", note: "égouttées" },
                { qty: "1", name: "citron", note: "jus" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 filet", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le poisson",
            texte: "Faire chauffer un filet d’huile. Cuire les filets 3 minutes côté peau, 1 minute côté chair.",
            timer: "4 min"
        },
        {
            titre: "Préparer la sauce",
            texte: "Faire fondre le beurre avec échalote, câpres et jus de citron. Cuire 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Napper",
            texte: "Verser la sauce sur les filets juste avant de servir.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Le saint-pierre doit rester nacré : cuisson courte.",
        "Ajouter un peu de persil ou d’aneth pour la fraîcheur.",
        "Servir avec pommes vapeur ou légumes verts."
    ]
},


'salade-artichauts-violets': {
    name:       'Salade composée aux artichauts violets',
    region:     'Provence',
    anecdote:   "L’artichaut violet poivrade, dégusté cru en mai, se tranche finement et s’arrose de citron et d’huile d’olive.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Artichauts",
            items: [
                { qty: "6", name: "artichauts violets poivrade", note: "fins et jeunes" },
                { qty: "1", name: "citron", note: "pour éviter l’oxydation" }
            ]
        },
        {
            groupe: "Légumes & herbes",
            items: [
                { qty: "1 poignée", name: "roquette", note: "" },
                { qty: "1", name: "fenouil", note: "émincé très fin" },
                { qty: "quelques feuilles", name: "basilic", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "fruitée" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les artichauts",
            texte: "Retirer les feuilles dures, couper les tiges, tourner les artichauts et les émincer très finement. Arroser immédiatement de citron.",
            timer: "8 min"
        },
        {
            titre: "Assembler la salade",
            texte: "Mélanger artichauts, fenouil et roquette.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, citron, sel et poivre. Mélanger délicatement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Ajouter quelques feuilles de basilic et servir frais.",
            timer: "—"
        }
    ],

    conseils: [
        "Les artichauts doivent être très jeunes pour être dégustés crus.",
        "Ajouter copeaux de parmesan pour une version plus gourmande.",
        "Un filet d’huile d’olive de Nyons sublime le plat."
    ]
},


'salade-betteraves-chevre': {
    name:       'Salade de betteraves rôties au chèvre',
    region:     'Loire / Bretagne',
    anecdote:   "Les betteraves nouvelles rôties au four avec thym, servies tièdes avec chèvre frais et noix, sont un classique d’automne.",
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "1 h",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "betteraves crues", note: "moyennes" },
                { qty: "1", name: "oignon rouge", note: "en lamelles" }
            ]
        },
        {
            groupe: "Fromage & fruits secs",
            items: [
                { qty: "120 g", name: "chèvre frais", note: "" },
                { qty: "1 poignée", name: "noix", note: "concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1", name: "branche de thym", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Rôtir les betteraves",
            texte: "Envelopper les betteraves dans du papier cuisson avec huile d’olive, sel, poivre et thym. Cuire 1 h à 180°C.",
            timer: "60 min"
        },
        {
            titre: "Couper",
            texte: "Laisser tiédir puis couper en quartiers.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger betteraves, oignon rouge, noix et chèvre émietté.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive et balsamique. Mélanger délicatement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Les betteraves rôties développent une douceur incomparable.",
        "Remplacer le chèvre par de la feta pour une version plus salée.",
        "Ajouter un peu de miel dans l’assaisonnement pour un contraste sucré."
    ]
},


'salade-cesar': {
    name:       'Salade César maison',
    region:     'Côte d\'Azur / fusion',
    anecdote:   'La version française de la célèbre salade César, avec poulet grillé, croûtons maison et anchois de Collioure pour une touche méditerranéenne.',
    tags:       ["Été", "Entrée", "Plat principal", "Facile"],
    prep:       '20 min',
    cuisson:    '15 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "2", name: "blancs de poulet", note: "grillés ou poêlés" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "cœurs de laitue romaine", note: "lavés et séchés" },
                { qty: "10", name: "tomates cerises", note: "optionnel" }
            ]
        },
        {
            groupe: "Croûtons maison",
            items: [
                { qty: "4 tranches", name: "pain de campagne", note: "coupé en dés" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 gousse", name: "ail", note: "écrasée" }
            ]
        },
        {
            groupe: "Sauce César",
            items: [
                { qty: "1", name: "jaune d’œuf", note: "" },
                { qty: "1 c. à café", name: "moutarde", note: "" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "3", name: "filets d’anchois", note: "de Collioure" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "10 cl", name: "huile d’olive", note: "" },
                { qty: "30 g", name: "parmesan", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "40 g", name: "parmesan", note: "en copeaux" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulet",
            texte: "Saler, poivrer et griller les blancs de poulet dans une poêle ou au grill. Laisser tiédir puis couper en lamelles.",
            timer: "10 min"
        },
        {
            titre: "Préparer les croûtons",
            texte: "Mélanger les dés de pain avec l’huile d’olive et l’ail. Faire dorer au four ou à la poêle jusqu’à ce qu’ils soient croustillants.",
            timer: "8 min"
        },
        {
            titre: "Préparer la sauce César",
            texte: "Mixer jaune d’œuf, moutarde, ail, anchois et citron. Ajouter l’huile en filet pour émulsionner, puis le parmesan râpé.",
            timer: "5 min"
        },
        {
            titre: "Assembler la salade",
            texte: "Mélanger la laitue avec la sauce. Ajouter poulet, croûtons et tomates cerises.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Parsemer de copeaux de parmesan et servir immédiatement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Pour une version plus authentique, ajouter un peu de Worcestershire dans la sauce.",
        "Les croûtons maison font toute la différence : ne pas les brûler.",
        "Le poulet peut être remplacé par des crevettes grillées."
    ]
},

'salade-endives-noix-roquefort': {
    name:       "Salade d'endives aux noix et roquefort",
    region:     "Nord / Aveyron",
    anecdote:   "L’endive croquante, le roquefort crémeux et les noix fraîches composent une salade d’hiver simple et parfaite.",
    tags:       ["Hiver", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "endives", note: "émincées" },
                { qty: "1", name: "pomme", note: "en dés, optionnelle" }
            ]
        },
        {
            groupe: "Fromage & fruits secs",
            items: [
                { qty: "120 g", name: "roquefort", note: "émietté" },
                { qty: "1 poignée", name: "noix", note: "concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile de noix", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de cidre", note: "" },
                { qty: "1 c. à café", name: "moutarde douce", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les endives",
            texte: "Retirer le cône amer à la base puis émincer finement.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger endives, noix, roquefort et pomme si utilisée.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger huile, vinaigre, moutarde, sel et poivre. Verser sur la salade.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement juste après assaisonnement.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques raisins secs pour une touche sucrée.",
        "L’huile de noix sublime le roquefort.",
        "Retirer le cœur amer des endives pour une salade plus douce."
    ]
},


'salade-feves-menthe': {
    name:       "Salade de fèves fraîches à la menthe",
    region:     "Provence",
    anecdote:   "Les premières fèves de mai se dégustent crues ou juste blanchies, avec huile d’olive, sel et menthe fraîche.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "2 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "400 g", name: "fèves fraîches écossées", note: "" }
            ]
        },
        {
            groupe: "Herbes & assaisonnement",
            items: [
                { qty: "1 petit bouquet", name: "menthe fraîche", note: "ciselée" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Blanchir les fèves (optionnel)",
            texte: "Plonger 2 minutes dans l’eau bouillante puis retirer la peau. Pour une version crue, sauter cette étape.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger fèves, huile d’olive, citron, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Ajouter la menthe",
            texte: "Incorporer la menthe ciselée juste avant de servir.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement en entrée ou en accompagnement.",
            timer: "—"
        }
    ],

    conseils: [
        "Les fèves très jeunes peuvent se manger crues, simplement écossées.",
        "Ajouter copeaux de parmesan pour une version plus gourmande.",
        "Un filet d’huile d’olive de Provence fait toute la différence."
    ]
},


'salade-figues-roquefort': {
    name:       'Salade de figues, noix et roquefort',
    region:     'Languedoc / Aveyron',
    anecdote:   "La figue violette de fin de saison, associée au roquefort et aux noix fraîches, forme une trilogie emblématique du Sud.",
    tags:       ["Automne", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits & légumes",
            items: [
                { qty: "6", name: "figues violettes", note: "mûres mais fermes" },
                { qty: "1 poignée", name: "roquette", note: "" }
            ]
        },
        {
            groupe: "Fromage & fruits secs",
            items: [
                { qty: "120 g", name: "roquefort", note: "émietté" },
                { qty: "1 poignée", name: "noix", note: "concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1 c. à café", name: "miel", note: "optionnel" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les figues",
            texte: "Laver puis couper les figues en quartiers.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer roquette, figues, roquefort et noix dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger huile, balsamique, miel, sel et poivre. Verser sur la salade.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement pour préserver la fraîcheur des figues.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques grains de raisin pour une touche sucrée supplémentaire.",
        "Le miel équilibre parfaitement la puissance du roquefort.",
        "Utiliser des figues bien mûres mais encore fermes pour éviter qu’elles ne s’écrasent."
    ]
},

'salade-figues-roquette': {
    name:       'Salade de figues rôties et roquette',
    region:     'Languedoc / Provence',
    anecdote:   "Les figues violettes rôties au miel de lavande, servies sur roquette avec noix et parmesan, sont un classique provençal.",
    tags:       ["Automne", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "15 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "6", name: "figues violettes", note: "coupées en deux" },
                { qty: "1 c. à soupe", name: "miel de lavande", note: "" }
            ]
        },
        {
            groupe: "Salade",
            items: [
                { qty: "1 poignée", name: "roquette", note: "" },
                { qty: "1 poignée", name: "noix", note: "concassées" },
                { qty: "30 g", name: "parmesan", note: "en copeaux" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Rôtir les figues",
            texte: "Déposer les figues sur une plaque, arroser de miel et cuire 12 à 15 minutes à 180°C.",
            timer: "15 min"
        },
        {
            titre: "Préparer la salade",
            texte: "Disposer roquette, noix et copeaux de parmesan dans les assiettes.",
            timer: "2 min"
        },
        {
            titre: "Ajouter les figues",
            texte: "Déposer les figues tièdes sur la roquette.",
            timer: "1 min"
        },
        {
            titre: "Assaisonner",
            texte: "Verser huile d’olive, balsamique, sel et poivre.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Le miel de lavande apporte une note provençale incomparable.",
        "Ne pas trop cuire les figues : elles doivent rester entières.",
        "Ajouter quelques feuilles de basilic pour une version plus fraîche."
    ]
},


'salade-fraises-basilic': {
    name:       'Salade de fraises au basilic',
    region:     'Provence / Languedoc',
    anecdote:   "La fraise et le basilic forment un duo inattendu mais sublime, relevé par quelques gouttes de balsamique.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "400 g", name: "fraises", note: "gariguettes ou ciflorettes" }
            ]
        },
        {
            groupe: "Herbes & assaisonnement",
            items: [
                { qty: "6 feuilles", name: "basilic frais", note: "ciselé" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1 c. à soupe", name: "miel", note: "ou sucre" },
                { qty: "1 c. à soupe", name: "huile d’olive douce", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les fraises",
            texte: "Laver rapidement, équeuter puis couper en deux ou en quartiers.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger fraises, miel, balsamique et huile d’olive.",
            timer: "2 min"
        },
        {
            titre: "Ajouter le basilic",
            texte: "Incorporer le basilic juste avant de servir.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement dans les 10 minutes pour préserver les arômes.",
            timer: "—"
        }
    ],

    conseils: [
        "Un tour de poivre noir sublime la fraise.",
        "Ajouter quelques zestes de citron pour plus de fraîcheur.",
        "Servir avec une boule de faisselle pour une version plus gourmande."
    ]
},

'salade-fraises-rhubarbe': {
    name:       'Salade de fraises et rhubarbe',
    region:     'Bretagne / Nord',
    anecdote:   "La rhubarbe acidulée et les fraises sucrées se complètent dans ce dessert de début juin.",
    tags:       ["Printemps", "Été", "Dessert", "Facile"],
    prep:       "15 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "300 g", name: "fraises", note: "mûres" },
                { qty: "2 tiges", name: "rhubarbe", note: "coupée en petits dés" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "miel", note: "optionnel" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Attendrir la rhubarbe",
            texte: "Faire compoter la rhubarbe 8 à 10 minutes avec sucre et un filet d’eau. Laisser refroidir.",
            timer: "10 min"
        },
        {
            titre: "Préparer les fraises",
            texte: "Laver, équeuter et couper les fraises en morceaux.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger fraises, rhubarbe refroidie, miel et jus de citron.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, éventuellement avec un peu de menthe.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop cuire la rhubarbe : elle doit garder un peu de tenue.",
        "Ajouter quelques amandes effilées grillées pour du croquant.",
        "Un trait de sirop de sureau fonctionne très bien avec la fraise."
    ]
},
'salade-grecque': {
    name:       'Salade grecque classique',
    region:     "Côte d'Azur / Grèce",
    anecdote:   "Tomates, concombre, oignons rouges, olives de Kalamata et feta : la salade grecque qui parle à toute la Méditerranée.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "tomates", note: "mûres" },
                { qty: "1", name: "concombre", note: "en demi-rondelles" },
                { qty: "1", name: "oignon rouge", note: "émincé" },
                { qty: "1", name: "poivron vert", note: "en lanières" }
            ]
        },
        {
            groupe: "Fromage & olives",
            items: [
                { qty: "150 g", name: "feta", note: "en cubes" },
                { qty: "1 poignée", name: "olives de Kalamata", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de vin rouge", note: "" },
                { qty: "1 c. à café", name: "origan séché", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Couper tomates, concombre, poivron et émincer l’oignon rouge.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger les légumes avec olives et feta.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, vinaigre, origan, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement sans mélanger trop vigoureusement pour garder les morceaux entiers.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne jamais émietter la feta : en Grèce, elle se sert en gros morceaux.",
        "Ajouter un peu de câpres pour une version plus iodée.",
        "Choisir des tomates très mûres pour un maximum de saveur."
    ]
},


'salade-haricots-noisettes': {
    name:       'Salade de haricots verts tièdes aux noisettes',
    region:     'Provence / Périgord',
    anecdote:   "Les haricots verts fins et croquants, encore tièdes, se marient parfaitement aux noisettes grillées.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "400 g", name: "haricots verts fins", note: "équeutés" }
            ]
        },
        {
            groupe: "Fruits secs",
            items: [
                { qty: "1 poignée", name: "noisettes", note: "torréfiées et concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de cidre", note: "" },
                { qty: "1 c. à café", name: "moutarde", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les haricots",
            texte: "Cuire les haricots 8 à 10 minutes dans l’eau bouillante salée. Égoutter et garder tièdes.",
            timer: "10 min"
        },
        {
            titre: "Préparer la vinaigrette",
            texte: "Mélanger huile, vinaigre, moutarde, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger haricots tièdes, vinaigrette et noisettes.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir tiède pour conserver le croquant des haricots.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu d’ail rôti pour une note provençale.",
        "Les noisettes peuvent être remplacées par des amandes grillées.",
        "Un filet de citron apporte une belle fraîcheur."
    ]
},


'salade-haricots-verts-amandes': {
    name:       'Salade de haricots verts aux amandes',
    region:     'Provence',
    anecdote:   "Les haricots verts fins de plein champ arrivent en juin : croquants, ils se marient parfaitement aux amandes grillées et à l’estragon.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "8 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "400 g", name: "haricots verts fins", note: "équeutés" }
            ]
        },
        {
            groupe: "Fruits secs",
            items: [
                { qty: "1 poignée", name: "amandes effilées", note: "grillées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de cidre", note: "" },
                { qty: "1 c. à café", name: "estragon frais", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les haricots",
            texte: "Cuire les haricots 7 à 8 minutes dans l’eau bouillante salée. Égoutter et rafraîchir rapidement.",
            timer: "8 min"
        },
        {
            titre: "Préparer la vinaigrette",
            texte: "Mélanger huile d’olive, vinaigre, estragon, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger haricots tièdes, vinaigrette et amandes grillées.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir tiède ou à température ambiante.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques tomates cerises pour une version plus colorée.",
        "Les amandes peuvent être remplacées par des pignons torréfiés.",
        "Un filet de citron renforce la fraîcheur."
    ]
},


'salade-landaise': {
    name:       'Salade landaise',
    region:     'Landes / Gascogne',
    anecdote:   "Gésiers confits, magret séché et foie gras poêlé : la salade landaise est un repas complet du Sud-Ouest.",
    tags:       ["Été", "Entrée", "Gourmande"],
    prep:       "15 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Charcuteries & foie gras",
            items: [
                { qty: "200 g", name: "gésiers de canard confits", note: "" },
                { qty: "100 g", name: "magret de canard séché", note: "en tranches" },
                { qty: "80 g", name: "foie gras", note: "à poêler" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "salade verte", note: "mélange ou frisée" },
                { qty: "2", name: "tomates", note: "en quartiers" },
                { qty: "1", name: "oignon rouge", note: "émincé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile de noix", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de framboise", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les gésiers",
            texte: "Faire revenir les gésiers confits dans leur graisse 3 à 4 minutes.",
            timer: "4 min"
        },
        {
            titre: "Poêler le foie gras",
            texte: "Saisir le foie gras 30 secondes par face dans une poêle très chaude.",
            timer: "1 min"
        },
        {
            titre: "Assembler la salade",
            texte: "Disposer salade, tomates, oignon, magret séché et gésiers tièdes.",
            timer: "3 min"
        },
        {
            titre: "Ajouter le foie gras",
            texte: "Déposer les tranches de foie gras poêlé sur le dessus.",
            timer: "1 min"
        },
        {
            titre: "Assaisonner",
            texte: "Verser huile de noix, vinaigre, sel et poivre.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter quelques croûtons pour plus de texture.",
        "Le vinaigre de framboise équilibre parfaitement le gras du canard.",
        "Servir immédiatement pour garder le contraste chaud-froid."
    ]
},


'salade-lentilles-saumon': {
    name:       'Salade de lentilles tièdes au saumon fumé',
    region:     'Auvergne / Bretagne',
    anecdote:   "Les lentilles vertes du Puy, associées au saumon fumé et à une vinaigrette à l’estragon, composent une salade complète et équilibrée.",
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "250 g", name: "lentilles vertes du Puy", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Poisson",
            items: [
                { qty: "150 g", name: "saumon fumé", note: "en lanières" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de cidre", note: "" },
                { qty: "1 c. à café", name: "estragon frais", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les lentilles",
            texte: "Rincer les lentilles puis les cuire 20 à 25 minutes avec laurier. Égoutter et garder tièdes.",
            timer: "25 min"
        },
        {
            titre: "Préparer la vinaigrette",
            texte: "Mélanger huile, vinaigre, estragon, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger lentilles tièdes, échalote et vinaigrette. Ajouter le saumon fumé au dernier moment.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Servir tiède ou à température ambiante.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques câpres pour une note plus iodée.",
        "Un peu de moutarde douce dans la vinaigrette fonctionne très bien.",
        "Les lentilles doivent rester légèrement fermes."
    ]
},

'salade-mache-betteraves': {
    name:       'Salade de mâche et betteraves',
    region:     'Nantes / Bretagne',
    anecdote:   "La mâche nantaise, douce et tendre, se marie parfaitement aux betteraves rôties et à la vinaigrette à la noisette.",
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "1 h",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 grosse", name: "betterave crue", note: "ou 2 petites" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 poignée", name: "mâche nantaise", note: "" }
            ]
        },
        {
            groupe: "Fruits secs",
            items: [
                { qty: "1 poignée", name: "noisettes", note: "torréfiées et concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile de noisette", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de cidre", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Rôtir la betterave",
            texte: "Envelopper la betterave dans du papier cuisson, arroser d’un filet d’huile, saler, poivrer. Cuire 1 h à 180°C.",
            timer: "60 min"
        },
        {
            titre: "Couper",
            texte: "Laisser tiédir puis couper en dés.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger mâche, betterave, échalote et noisettes.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile de noisette, vinaigre, sel et poivre.",
            timer: "2 min"
        }
    ],

    conseils: [
        "La mâche doit être ajoutée au dernier moment pour rester croquante.",
        "Remplacer la noisette par de la noix pour une version plus rustique.",
        "Ajouter un peu de fromage frais pour une salade plus complète."
    ]
},


'salade-mache-lardons-noix': {
    name:       'Salade de mâche aux lardons et noix',
    region:     'Bretagne / Nantais',
    anecdote:   "La mâche nantaise, tendre et légèrement sucrée, se marie parfaitement aux lardons chauds et aux noix fraîches.",
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "8 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 grosse poignée", name: "mâche nantaise", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Charcuterie & fruits secs",
            items: [
                { qty: "150 g", name: "lardons fumés", note: "" },
                { qty: "1 poignée", name: "noix", note: "concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile de noix", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de cidre", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les lardons",
            texte: "Faire revenir les lardons à feu moyen jusqu’à ce qu’ils soient dorés. Égoutter légèrement.",
            timer: "6 min"
        },
        {
            titre: "Assembler la salade",
            texte: "Mélanger mâche, échalote et noix dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Ajouter les lardons",
            texte: "Verser les lardons encore chauds sur la salade.",
            timer: "1 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile de noix, vinaigre, sel et poivre. Mélanger délicatement.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter un œuf poché pour une version plus complète.",
        "Les noix peuvent être remplacées par des noisettes torréfiées.",
        "Servir immédiatement pour garder le contraste chaud-froid."
    ]
},


'salade-mais-avocat': {
    name:       'Salade de maïs grillé et avocat',
    region:     'Languedoc / fusion',
    anecdote:   "Le maïs doux grillé sur les braises, mélangé à l’avocat, la coriandre et le citron vert, évoque l’été dans un bol.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes & fruits",
            items: [
                { qty: "2 épis", name: "maïs frais", note: "grillés puis égrainés" },
                { qty: "1", name: "avocat", note: "en dés" },
                { qty: "1", name: "poivron rouge", note: "en petits dés" },
                { qty: "1", name: "oignon rouge", note: "émincé" }
            ]
        },
        {
            groupe: "Herbes & assaisonnement",
            items: [
                { qty: "1 petit bouquet", name: "coriandre", note: "ciselée" },
                { qty: "1", name: "citron vert", note: "jus" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Griller le maïs",
            texte: "Griller les épis 8 à 10 minutes en les retournant. Égrainer une fois tièdes.",
            timer: "10 min"
        },
        {
            titre: "Préparer les légumes",
            texte: "Couper avocat, poivron et oignon rouge.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger maïs, avocat, poivron, oignon et coriandre.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, jus de citron vert, sel et poivre.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter un peu de piment frais pour une version plus relevée.",
        "Le citron vert empêche l’avocat de noircir.",
        "Servir bien frais pour un maximum de contraste."
    ]
},


'salade-mais-coriandre': {
    name:       'Salade de maïs, avocat et coriandre',
    region:     'Languedoc / fusion',
    anecdote:   "Le maïs doux de plein champ, l’avocat et la coriandre fraîche composent une salade colorée parfaite pour les repas en terrasse.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes & fruits",
            items: [
                { qty: "2 épis", name: "maïs frais", note: "grillés puis égrainés" },
                { qty: "1", name: "avocat", note: "en dés" },
                { qty: "1", name: "poivron rouge", note: "en petits dés" },
                { qty: "1", name: "oignon rouge", note: "émincé" }
            ]
        },
        {
            groupe: "Herbes & assaisonnement",
            items: [
                { qty: "1 petit bouquet", name: "coriandre", note: "ciselée" },
                { qty: "1", name: "citron vert", note: "jus" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Griller le maïs",
            texte: "Griller les épis 8 à 10 minutes en les retournant régulièrement. Égrainer une fois tièdes.",
            timer: "10 min"
        },
        {
            titre: "Préparer les légumes",
            texte: "Couper avocat, poivron et oignon rouge.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger maïs, avocat, poivron, oignon et coriandre.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, jus de citron vert, sel et poivre.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter un peu de piment frais pour une version plus relevée.",
        "Le citron vert empêche l’avocat de noircir.",
        "Servir bien frais pour un maximum de contraste."
    ]
},


'salade-nicoise': {
    name:       'Salade niçoise',
    region:     'Nice / Côte d\'Azur',
    anecdote:   "La vraie salade niçoise se prépare sans cuisson : thon cru ou mariné, anchois, olives, tomates et œufs durs.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "tomates", note: "mûres" },
                { qty: "1", name: "concombre", note: "en demi-rondelles" },
                { qty: "1", name: "poivron vert", note: "en lanières" },
                { qty: "1", name: "oignon nouveau", note: "émincé" }
            ]
        },
        {
            groupe: "Protéines & olives",
            items: [
                { qty: "150 g", name: "thon cru", note: "en dés ou mariné" },
                { qty: "6", name: "anchois", note: "au sel ou à l’huile" },
                { qty: "1 poignée", name: "olives de Nice", note: "" },
                { qty: "2", name: "œufs durs", note: "coupés en quartiers" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de vin", note: "" },
                { qty: "1 c. à café", name: "basilic", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Couper tomates, concombre, poivron et émincer l’oignon.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Disposer légumes, thon cru, anchois, olives et œufs durs.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, vinaigre, basilic, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement pour préserver la fraîcheur des légumes.",
            timer: "—"
        }
    ],

    conseils: [
        "Jamais de haricots verts ni de pommes de terre dans la version traditionnelle.",
        "Le thon peut être remplacé par du thon mariné au citron.",
        "Les olives de Nice sont indispensables pour l’authenticité."
    ]
},


'salade-pasteque-menthe': {
    name:       'Salade de pastèque et menthe',
    region:     'Provence / Languedoc',
    anecdote:   "La pastèque, la feta, la menthe et l’huile d’olive composent l’une des salades les plus rafraîchissantes de l’été.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits & fromage",
            items: [
                { qty: "500 g", name: "pastèque", note: "en dés" },
                { qty: "150 g", name: "feta", note: "en cubes" }
            ]
        },
        {
            groupe: "Herbes & assaisonnement",
            items: [
                { qty: "1 petit bouquet", name: "menthe fraîche", note: "ciselée" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "", name: "poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pastèque",
            texte: "Couper la pastèque en dés réguliers.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger pastèque, feta et menthe dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, citron et poivre. Mélanger délicatement.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien frais.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas saler : la feta apporte déjà suffisamment de sel.",
        "Ajouter quelques olives noires pour une version plus méditerranéenne.",
        "Un filet de miel fonctionne très bien si la pastèque n’est pas très sucrée."
    ]
},


'salade-pates-froides': {
    name:       "Salade de pâtes froides aux légumes d'été",
    region:     'France entière',
    anecdote:   "Les pâtes froides aux légumes grillés, olives et herbes sont un classique des repas de vacances.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "12 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "300 g", name: "pâtes courtes", note: "farfalle, penne…" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "courgette", note: "grillée et coupée en dés" },
                { qty: "1", name: "poivron rouge", note: "grillé et coupé en lanières" },
                { qty: "10", name: "tomates cerises", note: "coupées en deux" },
                { qty: "1 poignée", name: "olives noires", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1 c. à café", name: "basilic", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les pâtes",
            texte: "Cuire les pâtes al dente, rincer à l’eau froide et égoutter.",
            timer: "12 min"
        },
        {
            titre: "Préparer les légumes",
            texte: "Griller courgette et poivron, puis couper en morceaux.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger pâtes, légumes, tomates cerises et olives.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, balsamique, basilic, sel et poivre.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter mozzarella ou feta pour une version plus complète.",
        "Les légumes peuvent être rôtis au four si on ne souhaite pas les griller.",
        "Un peu de pesto dans l’assaisonnement donne une variante très parfumée."
    ]
},


'salade-peches-basilic': {
    name:       'Salade de pêches au basilic',
    region:     'Languedoc / Provence',
    anecdote:   "Les pêches de vigne et pêches plates de juillet, associées au basilic et au balsamique, composent un dessert fin et parfumé.",
    tags:       ["Été", "Dessert", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "4", name: "pêches mûres", note: "de vigne ou plates" }
            ]
        },
        {
            groupe: "Herbes & assaisonnement",
            items: [
                { qty: "6 feuilles", name: "basilic frais", note: "ciselé" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1 c. à soupe", name: "miel", note: "ou sucre" },
                { qty: "1 c. à soupe", name: "huile d’olive douce", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pêches",
            texte: "Laver, dénoyauter et couper les pêches en quartiers.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger pêches, miel, balsamique et huile d’olive.",
            timer: "2 min"
        },
        {
            titre: "Ajouter le basilic",
            texte: "Incorporer le basilic juste avant de servir.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, éventuellement avec quelques amandes grillées.",
            timer: "—"
        }
    ],

    conseils: [
        "Un tour de poivre noir sublime la pêche.",
        "Ajouter quelques framboises pour une version plus acidulée.",
        "Remplacer le balsamique par du citron pour une variante plus légère."
    ]
},


'salade-pissenlit-lard': {
    name:       'Salade de pissenlit au lard chaud',
    region:     'Lyonnais / Bourgogne',
    anecdote:   "Les premiers pissenlits sauvages du printemps, cueillis à l’aube, se marient parfaitement aux lardons fumés chauds.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "6 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 grosse poignée", name: "pissenlits frais", note: "jeunes feuilles" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Charcuterie",
            items: [
                { qty: "150 g", name: "lardons fumés", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "vinaigre de vin", note: "" },
                { qty: "2 c. à soupe", name: "huile", note: "de noix ou neutre" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les lardons",
            texte: "Faire revenir les lardons jusqu’à ce qu’ils soient bien dorés. Garder la graisse de cuisson.",
            timer: "5 min"
        },
        {
            titre: "Préparer la salade",
            texte: "Disposer pissenlits et échalote dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Déglacer",
            texte: "Verser le vinaigre dans la poêle chaude pour déglacer la graisse des lardons.",
            timer: "1 min"
        },
        {
            titre: "Assaisonner",
            texte: "Verser lardons et vinaigrette chaude sur les pissenlits. Mélanger immédiatement.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Les pissenlits doivent être jeunes pour éviter l’amertume.",
        "Ajouter un œuf poché pour une version plus complète.",
        "Un peu de croûtons maison apporte du croquant."
    ]
},


'salade-pissenlits-noix': {
    name:       'Salade de pissenlits aux noix',
    region:     'Lyonnais / Bourgogne',
    anecdote:   "Les pissenlits blanchis sous les tuiles ou récoltés à l’ombre sont plus tendres. Avec noix et vinaigrette chaude, c’est un classique du début de printemps.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "5 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 grosse poignée", name: "pissenlits frais", note: "jeunes feuilles" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Fruits secs",
            items: [
                { qty: "1 poignée", name: "noix", note: "concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile", note: "de noix ou neutre" },
                { qty: "2 c. à soupe", name: "vinaigre de vin", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la salade",
            texte: "Disposer pissenlits et échalote dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Chauffer la vinaigrette",
            texte: "Faire chauffer l’huile dans une petite poêle, puis ajouter le vinaigre pour déglacer.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Verser la vinaigrette chaude sur les pissenlits. Ajouter les noix et mélanger immédiatement.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Les pissenlits doivent être jeunes pour éviter l’amertume.",
        "Ajouter un œuf dur ou poché pour une version plus complète.",
        "Un peu de lardons chauds peut enrichir la salade."
    ]
},


'salade-pois-gourmands': {
    name:       'Salade de pois gourmands aux copeaux de parmesan',
    region:     'Provence',
    anecdote:   "Les premiers pois gourmands tendres croquent sous la dent, simplement relevés d’huile d’olive et de citron.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "3 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "300 g", name: "pois gourmands", note: "équeutés" }
            ]
        },
        {
            groupe: "Fromage",
            items: [
                { qty: "30 g", name: "parmesan", note: "en copeaux" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Blanchir les pois gourmands",
            texte: "Cuire 2 à 3 minutes dans l’eau bouillante salée. Rafraîchir immédiatement dans l’eau glacée.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger pois gourmands, huile d’olive, citron, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Ajouter les copeaux de parmesan juste avant de servir.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques feuilles de menthe pour une version plus fraîche.",
        "Les pois gourmands doivent rester croquants.",
        "Un filet de miel peut adoucir l’acidité du citron."
    ]
},


'salade-poivrons-rotis': {
    name:       'Salade de poivrons rôtis',
    region:     'Languedoc / Espagne',
    anecdote:   "Les poivrons rouges et jaunes rôtis, pelés puis marinés à l’ail et à l’huile d’olive, se dégustent froids en été.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "poivrons rouges", note: "" },
                { qty: "2", name: "poivrons jaunes", note: "" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "gousses d’ail", note: "émincées" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de vin", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Rôtir les poivrons",
            texte: "Cuire les poivrons entiers 35 à 40 min à 200°C jusqu’à ce que la peau noircisse.",
            timer: "40 min"
        },
        {
            titre: "Peler et couper",
            texte: "Laisser tiédir, retirer la peau et les graines, puis couper en lanières.",
            timer: "5 min"
        },
        {
            titre: "Mariner",
            texte: "Mélanger poivrons, ail, huile d’olive, vinaigre, sel et poivre. Laisser reposer 30 min.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais ou à température ambiante.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter des câpres ou des anchois pour une version plus espagnole.",
        "Un peu de piment d’Espelette relève délicatement la marinade.",
        "Se conserve très bien 48 h au frais."
    ]
},


'salade-poulpe-fenouil': {
    name:       'Salade de poulpe au fenouil',
    region:     'Provence / Marseille',
    anecdote:   "Le poulpe bouilli puis refroidi, associé au fenouil cru, au citron et aux herbes, donne une salade marine fraîche et légère.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "500 g", name: "poulpe cuit", note: "coupé en morceaux" }
            ]
        },
        {
            groupe: "Légumes & herbes",
            items: [
                { qty: "1", name: "bulbe de fenouil", note: "émincé très fin" },
                { qty: "1 petit bouquet", name: "persil", note: "ciselé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "citron", note: "jus" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulpe",
            texte: "Si le poulpe n’est pas déjà cuit, le faire bouillir 40 à 45 minutes jusqu’à tendreté. Laisser refroidir.",
            timer: "45 min"
        },
        {
            titre: "Couper",
            texte: "Couper le poulpe en morceaux et émincer finement le fenouil.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger poulpe, fenouil, persil, huile d’olive, citron, sel et poivre.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement après 30 minutes de repos.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu d’ail haché pour une version plus marseillaise.",
        "Le fenouil doit être très fin pour rester croquant et léger.",
        "Un filet d’huile d’olive très fruitée sublime le poulpe."
    ]
},


'salade-poulpe-grille': {
    name:       'Salade de poulpe grillé',
    region:     'Provence / Côte d\'Azur',
    anecdote:   "Le poulpe de roche méditerranéen, battu puis grillé sur les braises, se déguste avec citron, persil et ail.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "500 g", name: "poulpe cuit", note: "tentacules entiers" }
            ]
        },
        {
            groupe: "Aromates",
            items: [
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 petit bouquet", name: "persil", note: "ciselé" },
                { qty: "1", name: "citron", note: "jus" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Attendrir et cuire le poulpe",
            texte: "Si le poulpe n’est pas déjà cuit, le faire bouillir 40 à 45 minutes jusqu’à tendreté. Laisser refroidir.",
            timer: "45 min"
        },
        {
            titre: "Griller",
            texte: "Badigeonner d’huile d’olive et griller les tentacules 3 à 4 minutes par face pour les marquer.",
            timer: "8 min"
        },
        {
            titre: "Couper et assaisonner",
            texte: "Couper en morceaux puis mélanger avec ail, persil, citron, huile d’olive, sel et poivre.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Servir tiède ou froid, idéalement après 20 minutes de repos.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de piment ou de paprika fumé pour une touche ibérique.",
        "Le poulpe doit être très tendre avant de passer au grill.",
        "Un filet d’huile d’olive très fruitée sublime le plat."
    ]
},

'salade-quinoa-petits-pois': {
    name:       'Salade de quinoa aux petits pois et feta',
    region:     'Île-de-France / fusion',
    anecdote:   "Le quinoa, devenu incontournable, se marie parfaitement aux légumes de mai pour une salade fraîche et complète.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "15 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "200 g", name: "quinoa", note: "rincé" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "150 g", name: "petits pois frais ou surgelés", note: "" },
                { qty: "1", name: "oignon nouveau", note: "ciselé" }
            ]
        },
        {
            groupe: "Fromage & herbes",
            items: [
                { qty: "120 g", name: "feta", note: "émiettée" },
                { qty: "1 petit bouquet", name: "menthe", note: "ciselée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le quinoa",
            texte: "Cuire 12 à 15 minutes dans l’eau bouillante salée. Égoutter et laisser tiédir.",
            timer: "15 min"
        },
        {
            titre: "Cuire les petits pois",
            texte: "Blanchir 2 minutes dans l’eau bouillante puis rafraîchir.",
            timer: "2 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger quinoa, petits pois, oignon nouveau, feta et menthe.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, citron, sel et poivre.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter des zestes de citron pour plus de fraîcheur.",
        "Remplacer la menthe par de la coriandre pour une version plus orientale.",
        "Les petits pois crus très jeunes fonctionnent aussi très bien."
    ]
},


'salade-quinoa-tomates-feta': {
    name:       'Salade de quinoa, tomates et feta',
    region:     'Méditerranée',
    anecdote:   "Le quinoa frais avec tomates anciennes, feta, olives et herbes est léger et complet pour l’été.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "15 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "200 g", name: "quinoa", note: "rincé" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "tomates anciennes", note: "coupées en quartiers" },
                { qty: "1 poignée", name: "olives noires", note: "" }
            ]
        },
        {
            groupe: "Fromage & herbes",
            items: [
                { qty: "150 g", name: "feta", note: "en cubes" },
                { qty: "1 petit bouquet", name: "basilic", note: "ciselé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le quinoa",
            texte: "Cuire 12 à 15 minutes dans l’eau bouillante salée. Égoutter et laisser tiédir.",
            timer: "15 min"
        },
        {
            titre: "Préparer les légumes",
            texte: "Couper les tomates et rassembler olives et feta.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger quinoa, tomates, olives, feta et basilic.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, balsamique, sel et poivre.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter des zestes de citron pour plus de fraîcheur.",
        "Remplacer le basilic par de la menthe pour une version plus vive.",
        "Les tomates anciennes apportent une belle variété de textures."
    ]
},


'salade-radis-beurre': {
    name:       'Salade aux radis et beurre',
    region:     'Île-de-France',
    anecdote:   "Le muguet et les radis annoncent le 1er mai. Croquants, ils se dégustent au sel, au beurre ou en salade.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 botte", name: "radis roses", note: "coupés en fines rondelles" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "20 g", name: "beurre doux", note: "en petits dés" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les radis",
            texte: "Laver puis couper les radis en fines rondelles.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger radis, échalote et petits dés de beurre.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, citron, sel et poivre. Mélanger délicatement.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement juste après assaisonnement.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de ciboulette pour une note plus herbacée.",
        "Le beurre doit être bien froid pour garder sa texture.",
        "Servir avec du pain de campagne pour une entrée très francilienne."
    ]
},


'salade-riz-legumes-grilles': {
    name:       'Salade de riz aux légumes grillés',
    region:     'Méditerranée',
    anecdote:   "Le riz froid aux courgettes, poivrons et tomates grillées est un classique des pique-niques du bord de mer.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "250 g", name: "riz long", note: "cuit et refroidi" }
            ]
        },
        {
            groupe: "Légumes grillés",
            items: [
                { qty: "1", name: "courgette", note: "grillée et coupée en dés" },
                { qty: "1", name: "poivron rouge", note: "grillé et coupé en lanières" },
                { qty: "1", name: "poivron jaune", note: "grillé et coupé en lanières" },
                { qty: "8", name: "tomates cerises", note: "coupées en deux" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "" },
                { qty: "1 c. à café", name: "basilic", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le riz",
            texte: "Cuire le riz 12 à 15 minutes, rincer à l’eau froide et égoutter.",
            timer: "15 min"
        },
        {
            titre: "Griller les légumes",
            texte: "Griller courgette et poivrons, puis couper en morceaux.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger riz, légumes grillés et tomates cerises.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, balsamique, basilic, sel et poivre.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter des olives noires pour une version plus méditerranéenne.",
        "Un peu de feta émiettée apporte du crémeux.",
        "Les légumes peuvent être rôtis au four si on ne souhaite pas les griller."
    ]
},


'salade-roquette-saint-jacques': {
    name:       'Salade de roquette aux St-Jacques poêlées',
    region:     'Provence / Bretagne',
    anecdote:   "La roquette jeune de printemps et les Saint-Jacques poêlées forment un mariage iodé et poivré exquis.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "5 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "1 grosse poignée", name: "roquette", note: "jeune" }
            ]
        },
        {
            groupe: "Fruits de mer",
            items: [
                { qty: "8", name: "noix de Saint-Jacques", note: "sans corail" }
            ]
        },
        {
            groupe: "Assaisonnement & aromates",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1", name: "citron", note: "jus" },
                { qty: "1", name: "gousse d’ail", note: "hachée" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la roquette",
            texte: "Laver et essorer la roquette. Disposer dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Poêler les Saint-Jacques",
            texte: "Chauffer un filet d’huile. Saisir les Saint-Jacques 1 minute par face. Saler, poivrer.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Mélanger huile d’olive, citron et ail. Verser sur la roquette.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Déposer les Saint-Jacques chaudes sur la roquette et servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas surcuire les Saint-Jacques : elles doivent rester nacrées.",
        "Ajouter quelques copeaux de parmesan pour une version plus gourmande.",
        "Un filet d’huile de noisette fonctionne très bien avec la roquette."
    ]
},

'salade-saint-jacques-agrumes': {
    name:       'Salade de Saint-Jacques aux agrumes',
    region:     'Bretagne',
    anecdote:   "Pour la Saint-Pierre, les Saint-Jacques d’été se dégustent en salade fraîche aux agrumes.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "3 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits de mer",
            items: [
                { qty: "8", name: "noix de Saint-Jacques", note: "sans corail" }
            ]
        },
        {
            groupe: "Agrumes",
            items: [
                { qty: "1", name: "orange", note: "en suprêmes" },
                { qty: "1", name: "pamplemousse", note: "en suprêmes" },
                { qty: "1", name: "citron", note: "jus" }
            ]
        },
        {
            groupe: "Assaisonnement & herbes",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 petit bouquet", name: "ciboulette", note: "ciselée" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les agrumes",
            texte: "Prélever les suprêmes d’orange et de pamplemousse. Récupérer un peu de jus.",
            timer: "5 min"
        },
        {
            titre: "Poêler les Saint-Jacques",
            texte: "Saisir les Saint-Jacques 1 minute par face dans une poêle très chaude. Saler, poivrer.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger agrumes, jus de citron, huile d’olive et ciboulette.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Déposer les Saint-Jacques tièdes sur la salade d’agrumes. Servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas surcuire les Saint-Jacques : elles doivent rester nacrées.",
        "Ajouter quelques grains de grenade pour une touche colorée.",
        "Un filet d’huile d’olive très fruitée sublime les agrumes."
    ]
},


'salade-tiede-foie-veau': {
    name:       'Salade tiède de foie de veau',
    region:     'Lyon / Île-de-France',
    anecdote:   "Le foie de veau rosé et fondant, servi sur salade tiède avec lardons croustillants, est un classique des bouchons lyonnais.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "8 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "300 g", name: "foie de veau", note: "en fines tranches" },
                { qty: "100 g", name: "lardons fumés", note: "" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "salade verte", note: "frisée ou laitue" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "vinaigre de vin", note: "" },
                { qty: "3 c. à soupe", name: "huile", note: "de noix ou neutre" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la salade",
            texte: "Disposer la salade et l’échalote dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Cuire les lardons",
            texte: "Faire revenir les lardons jusqu’à ce qu’ils soient croustillants.",
            timer: "4 min"
        },
        {
            titre: "Poêler le foie de veau",
            texte: "Saisir les tranches 1 minute par face pour les garder rosées.",
            timer: "2 min"
        },
        {
            titre: "Déglacer",
            texte: "Verser le vinaigre dans la poêle chaude pour déglacer et former une vinaigrette chaude.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Verser la vinaigrette chaude, ajouter foie et lardons sur la salade. Mélanger délicatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Le foie doit rester rosé pour rester tendre.",
        "Ajouter des croûtons maison pour plus de texture.",
        "Un filet d’huile de noix renforce le caractère lyonnais."
    ]
},


'salade-tomates-ancienne': {
    name:       "Salade de tomates à l'ancienne",
    region:     "Provence",
    anecdote:   "En juillet, les tomates cœur-de-bœuf sont au sommet : sel, huile d’olive, basilic — rien d’autre.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Tomates",
            items: [
                { qty: "4", name: "tomates cœur-de-bœuf", note: "bien mûres" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "6 feuilles", name: "basilic frais", note: "ciselé" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "fruitée" },
                { qty: "", name: "fleur de sel", note: "" },
                { qty: "", name: "poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Couper les tomates",
            texte: "Couper les tomates en tranches épaisses ou en quartiers.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, fleur de sel, poivre et basilic.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement ou laisser reposer 10 minutes pour que le jus se mêle à l’huile.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne jamais réfrigérer les tomates : elles perdent leur parfum.",
        "Ajouter un trait de vinaigre de vin vieux pour une version plus vive.",
        "Les variétés anciennes multicolores donnent une assiette superbe."
    ]
},


'salade-tomates-burrata': {
    name:       "Salade de tomates cerise et burrata",
    region:     "Provence / Côte d'Azur",
    anecdote:   "La burrata crémeuse avec tomates cerises colorées, basilic et huile d’olive fruitée est l’un des plats les plus photogéniques de l’été.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Tomates",
            items: [
                { qty: "300 g", name: "tomates cerises", note: "mélange de couleurs" }
            ]
        },
        {
            groupe: "Fromage",
            items: [
                { qty: "1", name: "burrata", note: "250 g" }
            ]
        },
        {
            groupe: "Herbes & assaisonnement",
            items: [
                { qty: "1 petit bouquet", name: "basilic", note: "frais" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "fruitée" },
                { qty: "1 c. à soupe", name: "vinaigre balsamique", note: "optionnel" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les tomates",
            texte: "Couper les tomates cerises en deux.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, sel, poivre et basilic ciselé.",
            timer: "2 min"
        },
        {
            titre: "Ajouter la burrata",
            texte: "Déposer la burrata au centre, arroser d’un filet d’huile d’olive.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement, avec un peu de balsamique si désiré.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas couper la burrata : la laisser s’ouvrir naturellement à la dégustation.",
        "Ajouter quelques olives noires de Nice pour une touche plus méditerranéenne.",
        "Un filet de pesto maison fonctionne très bien en variante."
    ]
},


'salade-tomates-thon': {
    name:       'Salade de tomates au thon et anchois',
    region:     'Languedoc / Côte d\'Azur',
    anecdote:   "Tomates anciennes, thon de Méditerranée et anchois de Collioure : la salade du littoral languedocien.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Tomates",
            items: [
                { qty: "4", name: "tomates anciennes", note: "mûres et juteuses" }
            ]
        },
        {
            groupe: "Poissons",
            items: [
                { qty: "1 boîte", name: "thon à l’huile d’olive", note: "égoutté" },
                { qty: "6", name: "anchois de Collioure", note: "au sel ou à l’huile" }
            ]
        },
        {
            groupe: "Assaisonnement & herbes",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de vin", note: "" },
                { qty: "1 petit bouquet", name: "basilic", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les tomates",
            texte: "Couper les tomates en quartiers ou en tranches épaisses.",
            timer: "3 min"
        },
        {
            titre: "Ajouter thon et anchois",
            texte: "Émietter le thon sur les tomates et disposer les anchois.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter huile d’olive, vinaigre, basilic, poivre et très peu de sel (les anchois sont salés).",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement avec du pain grillé.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques câpres pour une version plus iodée.",
        "Les tomates anciennes multicolores donnent une assiette superbe.",
        "Un filet de citron peut remplacer le vinaigre pour une version plus vive."
    ]
},


'salade-waldorf': {
    name:       'Salade de pommes, céleri et noix',
    region:     'Normandie / France entière',
    anecdote:   "La salade Waldorf, mêlant céleri branche, pommes croquantes, noix et mayonnaise légère, est parfaite en entrée d’automne.",
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits & légumes",
            items: [
                { qty: "2", name: "pommes", note: "type Gala ou Reine des Reinettes" },
                { qty: "2 branches", name: "céleri", note: "émincé finement" }
            ]
        },
        {
            groupe: "Fruits secs",
            items: [
                { qty: "1 poignée", name: "noix", note: "concassées" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "mayonnaise", note: "légère" },
                { qty: "1 c. à soupe", name: "yaourt nature", note: "pour alléger" },
                { qty: "1 c. à café", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les fruits et légumes",
            texte: "Couper les pommes en dés et émincer le céleri.",
            timer: "3 min"
        },
        {
            titre: "Mélanger",
            texte: "Mélanger pommes, céleri et noix dans un saladier.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter mayonnaise, yaourt, citron, sel et poivre. Mélanger délicatement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement après 10 minutes de repos.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques raisins secs pour une version plus traditionnelle.",
        "Le yaourt allège la sauce tout en gardant l’onctuosité.",
        "Des noix de pécan fonctionnent très bien aussi."
    ]
},


'sandwich-poulet-froid': {
    name:       'Poulet rôti froid en sandwich',
    region:     'France entière',
    anecdote:   'Le reste de poulet rôti du dimanche se transforme en sandwich simple et délicieux pour le déjeuner du lundi.',
    tags:       ["Été", "Printemps", "Plat principal", "Facile"],
    prep:       '10 min',
    cuisson:    '0 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "250 g", name: "poulet rôti froid", note: "effiloché ou en lamelles" }
            ]
        },
        {
            groupe: "Pain",
            items: [
                { qty: "1", name: "baguette", note: "ou 4 petits pains" }
            ]
        },
        {
            groupe: "Condiments",
            items: [
                { qty: "2 c. à soupe", name: "moutarde", note: "ou mayonnaise" },
                { qty: "1 poignée", name: "cornichons", note: "coupés en rondelles" }
            ]
        },
        {
            groupe: "Crudités",
            items: [
                { qty: "1", name: "tomate", note: "en rondelles" },
                { qty: "4 feuilles", name: "laitue", note: "" },
                { qty: "1/2", name: "oignon rouge", note: "émincé finement" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le poulet",
            texte: "Effilocher ou couper en lamelles le poulet rôti froid. Retirer la peau si souhaité.",
            timer: "3 min"
        },
        {
            titre: "Préparer le pain",
            texte: "Couper la baguette en deux dans la longueur. Tartiner de moutarde ou de mayonnaise.",
            timer: "2 min"
        },
        {
            titre: "Garnir le sandwich",
            texte: "Ajouter la laitue, les rondelles de tomate, l’oignon rouge et les cornichons. Disposer le poulet par-dessus.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Refermer la baguette et presser légèrement pour maintenir la garniture.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Couper en parts et servir immédiatement ou emballer pour un repas à emporter.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter un filet de jus de citron pour une touche de fraîcheur.",
        "Un peu de mayonnaise mélangée à des herbes fraîches fonctionne très bien.",
        "Parfait avec une salade verte ou des chips maison."
    ]
},


'sardines-grillees': {
    name:       'Sardines grillées au feu de bois',
    region:     'Bretagne / Languedoc',
    anecdote:   "La veille du 14 juillet, les sardines grillées dans la rue ou sur la plage sont une tradition estivale incontournable.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "12", name: "sardines fraîches", note: "vidées ou entières selon tradition" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1", name: "citron", note: "en quartiers" },
                { qty: "", name: "gros sel", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les sardines",
            texte: "Rincer rapidement les sardines et les sécher. Les laisser entières pour une cuisson traditionnelle.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Badigeonner légèrement d’huile d’olive et saupoudrer de gros sel.",
            timer: "2 min"
        },
        {
            titre: "Griller",
            texte: "Cuire 3 à 4 minutes par face sur braises vives ou grill très chaud.",
            timer: "8 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement avec citron et pain grillé.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas trop manipuler les sardines : elles sont fragiles.",
        "Un peu de fenouil sec sur les braises parfume délicatement.",
        "Servir avec une salade de tomates ou de pommes de terre."
    ]
},

'saucisses-lentilles': {
    name:       'Saucisses aux lentilles du Puy',
    region:     'Auvergne',
    anecdote:   "Les lentilles vertes du Puy AOP avec saucisses fumées de montagne : un plat de bistrot qui réchauffe l’âme.",
    tags:       ["Automne", "Hiver", "Plat principal", "Moyen"],
    prep:       "10 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "250 g", name: "lentilles vertes du Puy", note: "" },
                { qty: "1", name: "carotte", note: "en dés" },
                { qty: "1", name: "oignon", note: "piqué d’un clou de girofle" },
                { qty: "1", name: "feuille de laurier", note: "" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "4", name: "saucisses fumées", note: "type Montbéliard ou Morteau" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les lentilles",
            texte: "Rincer les lentilles. Les cuire 25 minutes avec carotte, oignon et laurier.",
            timer: "25 min"
        },
        {
            titre: "Cuire les saucisses",
            texte: "Pocher les saucisses 20 minutes dans l’eau frémissante ou les faire revenir légèrement.",
            timer: "20 min"
        },
        {
            titre: "Assembler",
            texte: "Égoutter légèrement les lentilles, retirer l’oignon et le laurier, puis ajouter les saucisses.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien chaud, poivré généreusement.",
            timer: "—"
        }
    ],

    conseils: [
        "Un filet de vinaigre de vin en fin de cuisson relève le plat.",
        "Ajouter un peu de poitrine fumée pour une version plus riche.",
        "Les lentilles doivent rester légèrement fermes."
    ]
},


'saumon-beurre-blanc': {
    name:       'Saumon de Loire au beurre blanc',
    region:     'Val de Loire',
    anecdote:   "Bien que le saumon sauvage soit rare, la tradition du saumon au beurre blanc nantais reste vivace en Anjou.",
    tags:       ["Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "12 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "4 pavés", name: "saumon", note: "de Loire ou d’élevage de qualité" }
            ]
        },
        {
            groupe: "Beurre blanc",
            items: [
                { qty: "2", name: "échalotes", note: "finement ciselées" },
                { qty: "10 cl", name: "vin blanc sec", note: "Muscadet idéalement" },
                { qty: "150 g", name: "beurre", note: "bien froid, coupé en dés" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire le saumon",
            texte: "Pocher ou cuire à la vapeur 10 à 12 minutes pour garder le saumon moelleux.",
            timer: "12 min"
        },
        {
            titre: "Préparer la réduction",
            texte: "Faire réduire échalotes et vin blanc jusqu’à quasi-évaporation.",
            timer: "5 min"
        },
        {
            titre: "Monter le beurre blanc",
            texte: "Hors du feu, incorporer le beurre froid en fouettant. Saler, poivrer.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Napper le saumon de beurre blanc juste avant de servir.",
            timer: "—"
        }
    ],

    conseils: [
        "Le beurre doit être très froid pour réussir l’émulsion.",
        "Un filet de citron peut être ajouté au moment du service.",
        "Servir avec pommes vapeur ou riz nature."
    ]
},


'saumon-gravlax': {
    name:       'Saumon gravlax maison',
    region:     'Scandinavie / Alsace',
    anecdote:   "La mode du saumon mariné à l’aneth et au sel venu du Nord s’est installée sur les tables alsaciennes depuis les années 80.",
    tags:       ["Entrée", "Plat principal", "Moyen"],
    prep:       "15 min",
    cuisson:    "0 min (marinade 24–36 h)",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "500 g", name: "saumon frais", note: "sans peau, qualité sashimi" }
            ]
        },
        {
            groupe: "Marinade",
            items: [
                { qty: "50 g", name: "gros sel", note: "" },
                { qty: "30 g", name: "sucre", note: "" },
                { qty: "1 petit bouquet", name: "aneth", note: "haché" },
                { qty: "1 c. à café", name: "poivre noir", note: "concassé" },
                { qty: "1", name: "citron", note: "zeste" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la marinade",
            texte: "Mélanger sel, sucre, aneth, poivre et zeste de citron.",
            timer: "3 min"
        },
        {
            titre: "Enrober le saumon",
            texte: "Déposer la moitié du mélange dans un plat, poser le saumon dessus, recouvrir du reste.",
            timer: "2 min"
        },
        {
            titre: "Mariner",
            texte: "Filmer, poser un poids dessus et laisser mariner 24 à 36 h au réfrigérateur.",
            timer: "24 h"
        },
        {
            titre: "Rincer et trancher",
            texte: "Rincer rapidement, sécher, puis trancher très finement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Plus la marinade est longue, plus le saumon sera ferme.",
        "Servir avec moutarde suédoise ou crème citronnée.",
        "Toujours utiliser un saumon très frais pour cette préparation."
    ]
},


'saumon-gravlax-fetes': {
    name:       'Saumon fumé maison en gravlax',
    region:     'Bretagne / Normandie',
    anecdote:   "Le saumon de l’Atlantique mariné 48 h au sel, sucre et aneth donne un gravlax exceptionnel pour les fêtes.",
    tags:       ["Hiver", "Entrée", "Plat principal", "Moyen"],
    prep:       "15 min",
    cuisson:    "0 min (marinade 48 h)",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "600 g", name: "saumon frais", note: "qualité sashimi, sans peau" }
            ]
        },
        {
            groupe: "Marinade",
            items: [
                { qty: "60 g", name: "gros sel", note: "" },
                { qty: "40 g", name: "sucre", note: "" },
                { qty: "1 petit bouquet", name: "aneth", note: "haché" },
                { qty: "1 c. à café", name: "poivre noir", note: "concassé" },
                { qty: "1", name: "citron", note: "zeste" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la marinade",
            texte: "Mélanger sel, sucre, aneth, poivre et zeste de citron.",
            timer: "3 min"
        },
        {
            titre: "Enrober le saumon",
            texte: "Déposer la moitié du mélange dans un plat, poser le saumon dessus, recouvrir du reste.",
            timer: "2 min"
        },
        {
            titre: "Mariner",
            texte: "Filmer, poser un poids dessus et laisser mariner 48 h au réfrigérateur.",
            timer: "48 h"
        },
        {
            titre: "Rincer et trancher",
            texte: "Rincer rapidement, sécher, puis trancher très finement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Plus la marinade est longue, plus le saumon sera ferme.",
        "Servir avec crème citronnée ou moutarde à l’aneth.",
        "Toujours utiliser un saumon très frais pour cette préparation."
    ]
},


'sole-meuniere': {
    name:       'Sole meunière',
    region:     'Normandie / Paris',
    anecdote:   "La sole meunière, beurrée et citronnée, est un plat emblématique des grandes tables parisiennes depuis le XIXe siècle.",
    tags:       ["Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "10 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "4", name: "soles entières", note: "ébarbées et prêtes à cuire" }
            ]
        },
        {
            groupe: "Assaisonnement & cuisson",
            items: [
                { qty: "50 g", name: "farine", note: "pour enrober" },
                { qty: "80 g", name: "beurre", note: "doux ou demi-sel" },
                { qty: "1", name: "citron", note: "en jus" },
                { qty: "1 petit bouquet", name: "persil", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les soles",
            texte: "Saler, poivrer et fariner légèrement les soles.",
            timer: "3 min"
        },
        {
            titre: "Poêler",
            texte: "Faire fondre le beurre et cuire les soles 3 à 4 minutes par face jusqu’à coloration dorée.",
            timer: "8 min"
        },
        {
            titre: "Arroser",
            texte: "Ajouter le jus de citron et parsemer de persil.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement avec pommes vapeur ou riz blanc.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas brûler le beurre : il doit être noisette, pas noir.",
        "Une sole fraîche se reconnaît à ses yeux brillants et sa chair ferme.",
        "On peut remplacer le citron par un trait de vinaigre de cidre pour une version normande."
    ]
},


'sorbet-peche': {
    name:       'Sorbet maison à la pêche',
    region:     'Languedoc / Provence',
    anecdote:   "Les pêches de vigne rouges, très parfumées, donnent un sorbet d’été d’une pureté exceptionnelle.",
    tags:       ["Été", "Dessert", "Facile"],
    prep:       "15 min",
    cuisson:    "5 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Fruits",
            items: [
                { qty: "600 g", name: "pêches mûres", note: "de vigne ou jaunes" }
            ]
        },
        {
            groupe: "Sucre & eau",
            items: [
                { qty: "120 g", name: "sucre", note: "" },
                { qty: "10 cl", name: "eau", note: "pour le sirop" },
                { qty: "1", name: "citron", note: "jus" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pêches",
            texte: "Peler les pêches (ébouillantage rapide si besoin), retirer les noyaux et couper en morceaux.",
            timer: "5 min"
        },
        {
            titre: "Faire le sirop",
            texte: "Chauffer eau et sucre 3 minutes jusqu’à dissolution complète.",
            timer: "3 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer pêches, sirop et jus de citron jusqu’à texture lisse.",
            timer: "2 min"
        },
        {
            titre: "Turbiner ou congeler",
            texte: "Passer en sorbetière ou congeler en remuant toutes les 30 minutes pendant 3 h.",
            timer: "3 h"
        }
    ],

    conseils: [
        "Ajouter une cuillère de miel si les pêches manquent de sucre.",
        "Un trait de verveine ou basilic apporte une note herbacée subtile.",
        "Pour une texture plus souple, ajouter un blanc d’œuf monté en neige avant congélation."
    ]
},


'souffle-au-fromage': {
    name:       'Soufflé au fromage',
    region:     'Île-de-France',
    anecdote:   "Né dans les grandes cuisines parisiennes du XIXe siècle, le soufflé reste un symbole de maîtrise culinaire.",
    tags:       ["Plat principal", "Moyen"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "25 cl", name: "lait", note: "entier de préférence" }
            ]
        },
        {
            groupe: "Fromage & œufs",
            items: [
                { qty: "100 g", name: "gruyère ou comté", note: "râpé" },
                { qty: "4", name: "œufs", note: "blancs montés séparément" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "noix de muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la béchamel",
            texte: "Faire fondre le beurre, ajouter la farine, cuire 1 min puis verser le lait. Fouetter jusqu’à épaississement.",
            timer: "5 min"
        },
        {
            titre: "Ajouter le fromage",
            texte: "Incorporer le fromage râpé hors du feu, puis les jaunes d’œufs.",
            timer: "3 min"
        },
        {
            titre: "Incorporer les blancs",
            texte: "Ajouter délicatement les blancs montés en neige ferme.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser dans un moule beurré et cuire 20 à 25 min à 190°C sans ouvrir le four.",
            timer: "25 min"
        }
    ],

    conseils: [
        "Ne jamais ouvrir le four pendant la cuisson.",
        "Beurrer le moule en remontant du bas vers le haut pour aider le soufflé à monter.",
        "Servir immédiatement : un soufflé n’attend pas."
    ]
},


'souffle-grand-marnier': {
    name:       'Soufflé au Grand Marnier',
    region:     'Île-de-France',
    anecdote:   "Le soufflé sucré, aérien et parfumé à la liqueur d’orange, est un dessert emblématique des grandes tables parisiennes.",
    tags:       ["Hiver", "Dessert", "Moyen"],
    prep:       "15 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "25 cl", name: "lait", note: "entier" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "60 g", name: "sucre", note: "" }
            ]
        },
        {
            groupe: "Œufs & parfum",
            items: [
                { qty: "4", name: "œufs", note: "blancs montés séparément" },
                { qty: "4 c. à soupe", name: "Grand Marnier", note: "" },
                { qty: "1", name: "orange", note: "zeste fin" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la base",
            texte: "Faire fondre le beurre, ajouter la farine, cuire 1 min. Verser le lait et fouetter jusqu’à épaississement.",
            timer: "5 min"
        },
        {
            titre: "Ajouter sucre et jaunes",
            texte: "Hors du feu, ajouter sucre, jaunes d’œufs, Grand Marnier et zeste.",
            timer: "3 min"
        },
        {
            titre: "Incorporer les blancs",
            texte: "Ajouter délicatement les blancs montés en neige ferme.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser dans des ramequins beurrés et sucrés. Cuire 18 à 20 min à 190°C sans ouvrir le four.",
            timer: "20 min"
        }
    ],

    conseils: [
        "Beurrer les ramequins en remontant du bas vers le haut pour aider le soufflé à monter.",
        "Servir immédiatement : un soufflé n’attend pas.",
        "Ajouter une cuillère de crème anglaise à l’orange pour accompagner."
    ]
},


'souffle-grand-marnier-2': {
    name:       'Soufflé au Grand Marnier',
    region:     'Île-de-France',
    anecdote:   "Quand la nuit tombe tôt en novembre, un soufflé chaud et parfumé à l’orange réchauffe les cœurs.",
    tags:       ["Hiver", "Dessert", "Moyen"],
    prep:       "15 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "25 cl", name: "lait", note: "" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "50 g", name: "sucre", note: "" }
            ]
        },
        {
            groupe: "Œufs & parfum",
            items: [
                { qty: "4", name: "œufs", note: "blancs montés séparément" },
                { qty: "3 c. à soupe", name: "Grand Marnier", note: "" },
                { qty: "1", name: "orange", note: "zeste" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la base",
            texte: "Réaliser un roux avec beurre et farine, ajouter le lait et fouetter jusqu’à épaississement.",
            timer: "5 min"
        },
        {
            titre: "Ajouter sucre et jaunes",
            texte: "Incorporer sucre, jaunes d’œufs, Grand Marnier et zeste.",
            timer: "3 min"
        },
        {
            titre: "Incorporer les blancs",
            texte: "Ajouter délicatement les blancs montés en neige.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser dans des ramequins beurrés et sucrés. Cuire 18 à 20 min à 190°C.",
            timer: "20 min"
        }
    ],

    conseils: [
        "Ne jamais ouvrir le four pendant la cuisson.",
        "Sucrer les parois des ramequins pour une montée régulière.",
        "Servir aussitôt, avec un peu de sucre glace."
    ]
},


'souffle-grand-marnier-noel': {
    name:       'Soufflé chaud au Grand Marnier',
    region:     'Île-de-France',
    anecdote:   "Le solstice d’hiver, la nuit la plus longue : un grand soufflé flambé au Grand Marnier réchauffe la table.",
    tags:       ["Hiver", "Dessert", "Moyen"],
    prep:       "15 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "25 cl", name: "lait", note: "entier" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "60 g", name: "sucre", note: "" }
            ]
        },
        {
            groupe: "Œufs & parfum",
            items: [
                { qty: "4", name: "œufs", note: "blancs montés séparément" },
                { qty: "4 c. à soupe", name: "Grand Marnier", note: "" },
                { qty: "1", name: "orange", note: "zeste fin" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la base",
            texte: "Faire fondre le beurre, ajouter la farine, cuire 1 min. Verser le lait et fouetter jusqu’à épaississement.",
            timer: "5 min"
        },
        {
            titre: "Ajouter sucre et jaunes",
            texte: "Hors du feu, ajouter sucre, jaunes d’œufs, Grand Marnier et zeste.",
            timer: "3 min"
        },
        {
            titre: "Incorporer les blancs",
            texte: "Ajouter délicatement les blancs montés en neige ferme.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser dans des ramequins beurrés et sucrés. Cuire 18 à 20 min à 190°C sans ouvrir le four.",
            timer: "20 min"
        }
    ],

    conseils: [
        "Flamber au Grand Marnier juste à la sortie du four pour un effet spectaculaire.",
        "Servir immédiatement : un soufflé n’attend pas.",
        "Un peu de sucre glace ou de crème anglaise à l’orange accompagne très bien."
    ]
},

'souffle-roquefort': {
    name:       'Soufflé au roquefort',
    region:     'Aveyron / Île-de-France',
    anecdote:   "Le roquefort des caves de Combalou, fondu dans un soufflé chaud et aérien, porte le fromage à son sommet.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "40 g", name: "farine", note: "" },
                { qty: "25 cl", name: "lait", note: "entier" }
            ]
        },
        {
            groupe: "Fromage & œufs",
            items: [
                { qty: "120 g", name: "roquefort", note: "émietté" },
                { qty: "4", name: "œufs", note: "blancs montés séparément" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "poivre", note: "" },
                { qty: "1 pincée", name: "noix de muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la béchamel",
            texte: "Faire fondre le beurre, ajouter la farine, cuire 1 min puis verser le lait. Fouetter jusqu’à épaississement.",
            timer: "5 min"
        },
        {
            titre: "Ajouter le roquefort",
            texte: "Incorporer le roquefort hors du feu, puis les jaunes d’œufs.",
            timer: "3 min"
        },
        {
            titre: "Incorporer les blancs",
            texte: "Ajouter délicatement les blancs montés en neige ferme.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser dans un moule beurré et cuire 20 à 25 min à 190°C sans ouvrir le four.",
            timer: "25 min"
        }
    ],

    conseils: [
        "Le roquefort étant salé, ne pas ajouter de sel.",
        "Servir immédiatement avec une salade de mâche.",
        "Un trait de noix concassées sur le dessus apporte du croquant."
    ]
},


'soupe-a-loignon': {
    name:       "Soupe à l'oignon gratinée",
    region:     "Lyon / Paris",
    anecdote:   "Née dans les bouchons lyonnais puis adoptée par les Halles de Paris comme remède contre le froid et la fatigue.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "800 g", name: "oignons jaunes", note: "émincés finement" },
                { qty: "1 litre", name: "bouillon de bœuf ou volaille", note: "" },
                { qty: "40 g", name: "beurre", note: "" },
                { qty: "1 c. à soupe", name: "farine", note: "" }
            ]
        },
        {
            groupe: "Gratin",
            items: [
                { qty: "8 tranches", name: "baguette", note: "grillées" },
                { qty: "120 g", name: "gruyère", note: "râpé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Caraméliser les oignons",
            texte: "Faire fondre le beurre et cuire les oignons 20 minutes à feu doux jusqu’à coloration dorée.",
            timer: "20 min"
        },
        {
            titre: "Singer et mouiller",
            texte: "Ajouter la farine, mélanger 1 minute puis verser le bouillon. Laisser mijoter 15 minutes.",
            timer: "15 min"
        },
        {
            titre: "Gratiner",
            texte: "Verser la soupe dans des bols, ajouter les tranches de pain et recouvrir de gruyère.",
            timer: "3 min"
        },
        {
            titre: "Passer au four",
            texte: "Gratiner 5 minutes sous le gril jusqu’à ce que le fromage soit doré.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Plus les oignons sont caramélisés, meilleure est la soupe.",
        "Un trait de vin blanc sec dans les oignons apporte de la profondeur.",
        "Utiliser un bouillon maison pour un goût plus authentique."
    ]
},

'soupe-au-chou': {
    name:       "Soupe au chou",
    region:     "Auvergne",
    anecdote:   "Le chou d’hiver au lard fumé et aux pommes de terre est la soupe paysanne par excellence de l’Auvergne.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1/2", name: "chou vert", note: "émincé" },
                { qty: "3", name: "pommes de terre", note: "en dés" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "150 g", name: "lard fumé", note: "en lardons" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon", note: "de volaille ou de légumes" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir le lard",
            texte: "Dorer les lardons dans une cocotte.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter oignon, carottes, pommes de terre et chou. Mélanger 2 minutes.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 30 minutes à feu doux.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un talon de jambon pour une version plus riche.",
        "Un peu de poivre noir fraîchement moulu relève parfaitement le chou.",
        "Servir avec du pain de campagne grillé."
    ]
},


'soupe-au-cresson': {
    name:       'Soupe au cresson',
    region:     'Île-de-France / Normandie',
    anecdote:   "Le cresson de Méréville, cultivé dans des sources claires, donne une soupe verte et légèrement poivrée.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "2 bottes", name: "cresson", note: "feuilles et tiges tendres" },
                { qty: "2", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "1 litre", name: "bouillon de volaille ou légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le cresson",
            texte: "Laver soigneusement le cresson et retirer les grosses tiges.",
            timer: "3 min"
        },
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu de beurre, ajouter pommes de terre et cresson.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 15 minutes jusqu’à tendreté.",
            timer: "15 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter crème si désiré, rectifier l’assaisonnement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter quelques feuilles de cresson crues au moment du service pour renforcer le goût.",
        "Un filet de citron apporte une belle fraîcheur.",
        "Servir avec des croûtons frottés à l’ail."
    ]
},

'soupe-au-pistou': {
    name:       'Soupe au pistou',
    region:     'Provence',
    anecdote:   "Réchauffée en hiver, la soupe au pistou rappelle l’été provençal et ses herbes gorgées de soleil.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "carottes", note: "en dés" },
                { qty: "2", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "courgette", note: "en dés" },
                { qty: "150 g", name: "haricots verts", note: "coupés" },
                { qty: "150 g", name: "haricots blancs cuits", note: "" },
                { qty: "150 g", name: "haricots rouges cuits", note: "" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1,2 litre", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Pistou",
            items: [
                { qty: "1 bouquet", name: "basilic", note: "" },
                { qty: "2", name: "gousses d’ail", note: "" },
                { qty: "4 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "50 g", name: "parmesan", note: "râpé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les légumes",
            texte: "Mettre carottes, pommes de terre et haricots verts dans le bouillon. Cuire 25 minutes.",
            timer: "25 min"
        },
        {
            titre: "Ajouter les autres légumes",
            texte: "Ajouter courgette et haricots cuits. Cuire encore 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Préparer le pistou",
            texte: "Mixer basilic, ail, huile d’olive et parmesan jusqu’à obtenir une pâte.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Verser le pistou dans les assiettes ou directement dans la soupe hors du feu.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne jamais cuire le pistou : il perdrait son parfum.",
        "Ajouter des pâtes courtes (coquillettes) pour une version plus traditionnelle.",
        "Un filet d’huile d’olive fruitée renforce la touche provençale."
    ]
},


'soupe-aux-orties': {
    name:       'Soupe aux orties',
    region:     'Alsace / Champagne',
    anecdote:   "Les premières pousses d’orties de mars donnent une soupe étonnante, douce et minérale, gratuite au bord des chemins.",
    tags:       ["Printemps", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes & plantes",
            items: [
                { qty: "2 grosses poignées", name: "jeunes orties", note: "gants indispensables" },
                { qty: "2", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les orties",
            texte: "Laver soigneusement les orties avec des gants, retirer les tiges dures.",
            timer: "3 min"
        },
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu de beurre, ajouter pommes de terre et orties.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 12 à 15 minutes.",
            timer: "15 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter crème si désiré, rectifier l’assaisonnement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Les jeunes pousses d’orties (4–6 feuilles) sont les plus tendres.",
        "Un filet de citron renforce la note végétale.",
        "Servir avec des croûtons frottés à l’ail."
    ]
},


'soupe-butternut-coco': {
    name:       'Soupe de butternut au lait de coco',
    region:     'France entière / fusion',
    anecdote:   "La butternut et le lait de coco forment un mariage doux et exotique qui réchauffe les soirées d’avant novembre.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "courge butternut", note: "épluchée et en cubes" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "carotte", note: "en rondelles" }
            ]
        },
        {
            groupe: "Liquide",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" },
                { qty: "20 cl", name: "lait de coco", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 c. à café", name: "gingembre", note: "râpé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu d’huile, ajouter carotte et butternut.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 20 minutes jusqu’à tendreté.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter le lait de coco et le gingembre.",
            timer: "2 min"
        },
        {
            titre: "Réchauffer",
            texte: "Réchauffer doucement sans faire bouillir.",
            timer: "3 min"
        }
    ],

    conseils: [
        "Ajouter une pointe de curry pour une version plus épicée.",
        "Un filet de citron vert apporte une note fraîche.",
        "Servir avec des graines de courge grillées."
    ]
},


'soupe-chataignes-lard': {
    name:       'Soupe de châtaignes au lard',
    region:     'Ardèche / Corse',
    anecdote:   "La châtaigne d’Ardèche ou de Corse — farine des pauvres autrefois — donne une soupe veloutée et nourrissante.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "300 g", name: "châtaignes cuites", note: "ou sous vide" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "carotte", note: "en dés" },
                { qty: "1", name: "pomme de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de volaille ou légumes", note: "" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "100 g", name: "lard fumé", note: "en lardons" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir le lard",
            texte: "Dorer les lardons dans une cocotte. Réserver quelques morceaux pour la finition.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter oignon, carotte et pomme de terre. Faire suer 3 minutes.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter les châtaignes et le bouillon. Cuire 20 minutes à feu doux.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème si désiré, rectifier l’assaisonnement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud avec les lardons réservés.",
            timer: "—"
        }
    ],

    conseils: [
        "Pour une version plus corsée, ajouter un peu de châtaigne grillée en topping.",
        "Un filet d’huile de noisette sublime la châtaigne.",
        "Servir avec du pain de campagne grillé."
    ]
},

'soupe-courge-ciboulette': {
    name:       'Soupe de courge à la crème de ciboulette',
    region:     'France entière',
    anecdote:   "Octobre annonce les courges : un velouté orange et crémeux, relevé d’une touche verte de ciboulette.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "courge (butternut ou potimarron)", note: "en cubes" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "pomme de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "1 petit bouquet", name: "ciboulette", note: "ciselée" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu de beurre ou d’huile.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter courge et pomme de terre, verser le bouillon et cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème et rectifier l’assaisonnement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud avec ciboulette fraîche.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter une pointe de muscade pour une note chaleureuse.",
        "Remplacer la crème par du fromage frais pour une version plus légère.",
        "Quelques graines de courge grillées apportent du croquant."
    ]
},


'soupe-froide-concombre': {
    name:       'Soupe froide de concombre au yaourt',
    region:     'Languedoc / fusion',
    anecdote:   "D’inspiration grecque, cette soupe froide au concombre, yaourt et menthe est parfaite pour les journées chaudes.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "2", name: "concombres", note: "épluchés et épépinés" },
                { qty: "300 g", name: "yaourt grec", note: "" },
                { qty: "1", name: "gousse d’ail", note: "hachée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 petit bouquet", name: "menthe", note: "ciselée" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Mixer",
            texte: "Mixer concombre, yaourt, ail, citron et huile d’olive jusqu’à texture lisse.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter sel, poivre et menthe ciselée. Mélanger.",
            timer: "1 min"
        },
        {
            titre: "Réfrigérer",
            texte: "Laisser reposer au frais au moins 1 heure.",
            timer: "1 h"
        },
        {
            titre: "Servir",
            texte: "Servir très froid, avec un filet d’huile d’olive.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de concombre râpé pour une texture plus rustique.",
        "Remplacer la menthe par de l’aneth pour une version plus nordique.",
        "Un peu de piment doux relève subtilement la soupe."
    ]
},

'soupe-froide-poivrons': {
    name:       'Soupe froide aux poivrons rouges',
    region:     'Languedoc / Pays Basque',
    anecdote:   "Les poivrons rouges rôtis mixés avec tomate, huile d’olive et cumin donnent une soupe froide veloutée et colorée.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "poivrons rouges", note: "rôtis et pelés" },
                { qty: "2", name: "tomates", note: "pelées ou en dés" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à café", name: "cumin", note: "" },
                { qty: "1 c. à soupe", name: "vinaigre de Xérès", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Rôtir les poivrons",
            texte: "Cuire les poivrons 20 minutes au four à 220°C, puis les peler et retirer les graines.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer poivrons, tomates, oignon, huile d’olive, cumin et vinaigre.",
            timer: "2 min"
        },
        {
            titre: "Réfrigérer",
            texte: "Laisser reposer au frais au moins 1 heure.",
            timer: "1 h"
        },
        {
            titre: "Servir",
            texte: "Servir très froid, avec un filet d’huile d’olive.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de piment d’Espelette pour une touche basque.",
        "Un morceau de pain trempé dans la soupe avant mixage donne plus de corps.",
        "Servir avec des dés de feta pour une version plus complète."
    ]
},


'soupe-halloween-potiron': {
    name:       "Soupe d'Halloween au potiron",
    region:     "France entière",
    anecdote:   "Le jour de la citrouille ! On vide la courge et on en fait une soupe à la crème dans son écorce sculptée.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1 petit", name: "potiron", note: "ou citrouille, évidé" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "2", name: "pommes de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la citrouille",
            texte: "Découper un chapeau, retirer les graines et prélever la chair.",
            timer: "5 min"
        },
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu de beurre, ajouter la chair de potiron et les pommes de terre.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 15 minutes jusqu’à tendreté.",
            timer: "15 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter crème et muscade, rectifier l’assaisonnement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Verser la soupe dans la coque sculptée pour un effet Halloween.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de gingembre pour une note plus vive.",
        "Griller les graines de citrouille pour les servir en topping.",
        "Un filet d’huile de noisette sublime le potiron."
    ]
},


'soupe-haricots-blancs-jambon': {
    name:       "Soupe de haricots blancs au jambon",
    region:     "Languedoc / Provence",
    anecdote:   "Les haricots blancs de conservation avec le jambon cru et les herbes de saison : le plat du froid retour.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "300 g", name: "haricots blancs cuits", note: "ou en bocal" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "pommes de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes ou volaille", note: "" }
            ]
        },
        {
            groupe: "Viande & herbes",
            items: [
                { qty: "100 g", name: "jambon cru", note: "en lamelles" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1 branche", name: "thym", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu d’huile d’olive.",
            timer: "3 min"
        },
        {
            titre: "Ajouter légumes et herbes",
            texte: "Ajouter carottes, pommes de terre, laurier et thym. Mélanger 2 minutes.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Ajouter les haricots",
            texte: "Ajouter les haricots blancs et le jambon. Cuire encore 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un filet d’huile d’olive fruitée au moment du service.",
        "Un peu de piment d’Espelette apporte une touche basque.",
        "Remplacer le jambon par du lard fumé pour une version plus rustique."
    ]
},


'soupe-lentilles-cumin': {
    name:       'Soupe de lentilles blondes au cumin',
    region:     'Languedoc / Provence',
    anecdote:   "Les lentilles blondes, plus douces que les vertes, en soupe épicée au cumin et au citron réchauffent les soirées.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "250 g", name: "lentilles blondes", note: "rincées" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "2", name: "carottes", note: "en dés" },
                { qty: "1", name: "pomme de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon & épices",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" },
                { qty: "1 c. à café", name: "cumin", note: "moulu" },
                { qty: "1", name: "citron", note: "jus" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans l’huile d’olive, ajouter carottes et pomme de terre.",
            timer: "5 min"
        },
        {
            titre: "Ajouter lentilles et épices",
            texte: "Ajouter les lentilles et le cumin, mélanger 1 minute.",
            timer: "1 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 25 minutes à feu doux.",
            timer: "25 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter le jus de citron, rectifier sel et poivre.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter un peu de coriandre fraîche pour une note plus orientale.",
        "Mixer partiellement pour une texture plus veloutée.",
        "Un filet d’huile d’olive fruitée au moment du service est idéal."
    ]
},


'soupe-mineurs': {
    name:       'Sainte-Barbe : soupe des mineurs',
    region:     'Nord / Lorraine',
    anecdote:   "Pour la Sainte-Barbe, patronne des mineurs, la tradition est une soupe épaisse de légumes et charcuterie.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "pommes de terre", note: "en dés" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "poireau", note: "émincé" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Charcuterie",
            items: [
                { qty: "150 g", name: "lard fumé", note: "en lardons" },
                { qty: "100 g", name: "jambon blanc ou cru", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon & herbes",
            items: [
                { qty: "1,2 litre", name: "bouillon de légumes ou volaille", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1 branche", name: "thym", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir le lard",
            texte: "Dorer les lardons dans une cocotte.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter oignon, poireau, carottes et pommes de terre. Mélanger 3 minutes.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon, ajouter thym et laurier. Cuire 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Ajouter le jambon",
            texte: "Ajouter le jambon en dés et laisser mijoter 5 minutes.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter un peu de chou émincé pour une version plus lorraine.",
        "Un morceau de saucisse fumée peut remplacer le jambon.",
        "Servir avec du pain noir ou de campagne."
    ]
},


'soupe-potimarron': {
    name:       'Soupe de potimarron',
    region:     'Bretagne / Normandie',
    anecdote:   "Le potimarron de conservation réchauffe les hivers bretons dans cette veloutée douce et parfumée.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "1", name: "potimarron", note: "non épluché, simplement épépiné" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "pomme de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le potimarron",
            texte: "Couper le potimarron en morceaux sans l’éplucher, retirer les graines.",
            timer: "3 min"
        },
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu de beurre, ajouter potimarron et pomme de terre.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 20 minutes jusqu’à tendreté.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter crème et muscade, rectifier l’assaisonnement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Le potimarron n’a pas besoin d’être épluché : sa peau devient fondante.",
        "Ajouter un filet d’huile de noisette pour renforcer la note douce et automnale.",
        "Servir avec des graines de courge grillées."
    ]
},

'soupe-potiron-chataignes': {
    name:       'Soupe de potiron aux châtaignes',
    region:     'Bretagne / Ardèche',
    anecdote:   "Les châtaignes fraîches tombent en même temps que les potirons grossissent : ensemble, elles font une soupe veloutée et nourrissante.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes & fruits",
            items: [
                { qty: "600 g", name: "chair de potiron", note: "en cubes" },
                { qty: "200 g", name: "châtaignes cuites", note: "ou sous vide" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "pomme de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu d’huile ou de beurre.",
            timer: "3 min"
        },
        {
            titre: "Ajouter légumes et châtaignes",
            texte: "Ajouter potiron, pomme de terre et châtaignes. Mélanger 2 minutes.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 25 minutes à feu doux.",
            timer: "25 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème si désiré, rectifier l’assaisonnement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter quelques éclats de châtaignes grillées au moment du service.",
        "Une pointe de cannelle ou de muscade apporte une note chaleureuse.",
        "Servir avec du pain de campagne grillé."
    ]
},


'soupe-potiron-lard': {
    name:       'Soupe au potiron et au lard',
    region:     'Auvergne / France entière',
    anecdote:   "Décembre s’ouvre. Les courges de conservation sortent du cellier pour les soupes qui réchauffent.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "600 g", name: "chair de potiron", note: "en cubes" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "pomme de terre", note: "en dés" }
            ]
        },
        {
            groupe: "Viande",
            items: [
                { qty: "120 g", name: "lard fumé", note: "en lardons" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes ou volaille", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir le lard",
            texte: "Dorer les lardons dans une cocotte. Réserver quelques morceaux pour le service.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter oignon, potiron et pomme de terre. Faire suer 3 minutes.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon et cuire 20 minutes à feu doux.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème si désiré, rectifier l’assaisonnement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir chaud avec les lardons réservés.",
            timer: "—"
        }
    ],

    conseils: [
        "Un filet d’huile de noisette renforce la douceur du potiron.",
        "Ajouter une pointe de muscade pour une note chaleureuse.",
        "Servir avec du pain de campagne grillé."
    ]
},

'soupe-restes-reveillon': {
    name:       'Soupe aux restes du réveillon',
    region:     'France entière',
    anecdote:   "Les carcasses de volaille, les légumes de la farce et les restes font la plus riche soupe de l’année.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Restes & base",
            items: [
                { qty: "1", name: "carcasse de volaille rôtie", note: "poulet, chapon ou dinde" },
                { qty: "200 g", name: "restes de légumes", note: "farce, légumes rôtis, marrons…" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "poireau", note: "émincé" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1,5 litre", name: "eau", note: "pour faire un bouillon maison" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1 branche", name: "thym", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le bouillon",
            texte: "Mettre la carcasse dans une grande marmite avec l’eau, le laurier et le thym. Laisser frémir 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Filtrer",
            texte: "Retirer la carcasse, filtrer le bouillon et récupérer les petits morceaux de viande.",
            timer: "5 min"
        },
        {
            titre: "Ajouter légumes et restes",
            texte: "Ajouter carottes, pommes de terre, poireau et restes de légumes. Cuire 15 minutes.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter des pâtes courtes ou du riz pour une soupe plus complète.",
        "Un peu de crème ou de beurre en fin de cuisson apporte du velouté.",
        "Les restes de marrons ou de farce donnent un parfum exceptionnel."
    ]
},


'soupe-saint-nicolas-epices': {
    name:       'Soupe de Saint-Nicolas aux épices',
    region:     'Alsace / Lorraine',
    anecdote:   "Pour la Sainte-Catherine et l’Avent, on prépare les premières douceurs épicées : une soupe chaleureuse aux épices de Noël.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "10 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "500 g", name: "courge (butternut ou potiron)", note: "en cubes" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Épices de Noël",
            items: [
                { qty: "1/2 c. à café", name: "cannelle", note: "" },
                { qty: "1 pincée", name: "gingembre", note: "moulu" },
                { qty: "1 pincée", name: "muscade", note: "" },
                { qty: "1", name: "orange", note: "zeste fin" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu de beurre, ajouter carottes et courge.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon, ajouter les épices et cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter crème et zeste d’orange, rectifier l’assaisonnement.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter un filet de jus d’orange pour une note encore plus festive.",
        "Servir avec des croûtons au pain d’épices pour une version alsacienne.",
        "Une pointe de miel adoucit la soupe si la courge est peu sucrée."
    ]
},

'soupe-victoire': {
    name:       'Soupe de la Victoire aux légumes du terroir',
    region:     'France entière',
    anecdote:   "Pour l’armistice, une soupe de légumes racines — carottes, navets, poireaux, choux — en souvenir des repas simples et nourrissants.",
    tags:       ["Hiver", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes racines",
            items: [
                { qty: "3", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "navets", note: "en dés" },
                { qty: "2", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "poireau", note: "émincé" },
                { qty: "1/4", name: "chou vert", note: "émincé" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "1 litre", name: "bouillon de légumes ou volaille", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "1 branche", name: "thym", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer poireau et carottes dans un peu de beurre.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter navets, pommes de terre et chou. Mélanger 2 minutes.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Verser le bouillon, ajouter thym et laurier. Cuire 25 à 30 minutes.",
            timer: "30 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement et servir bien chaud.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un morceau de lard fumé pour une version plus rustique.",
        "Mixer partiellement pour une texture entre soupe et velouté.",
        "Servir avec du pain de campagne grillé."
    ]
},


'steak-bordelaise': {
    name:       'Steak à la bordelaise',
    region:     'Bordeaux',
    anecdote:   "La sauce bordelaise au vin rouge et à la moelle est l’une des grandes sauces de Bordeaux, ville du vin.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "10 min",
    cuisson:    "15 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "4", name: "steaks de bœuf", note: "faux-filet ou rumsteck" }
            ]
        },
        {
            groupe: "Sauce bordelaise",
            items: [
                { qty: "40 cl", name: "vin rouge", note: "Bordeaux de préférence" },
                { qty: "2", name: "échalotes", note: "ciselées" },
                { qty: "150 g", name: "moelle de bœuf", note: "en dés" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la sauce",
            texte: "Faire suer les échalotes dans le beurre, ajouter le vin rouge et réduire de moitié.",
            timer: "10 min"
        },
        {
            titre: "Ajouter la moelle",
            texte: "Incorporer la moelle dans la réduction chaude, mélanger délicatement.",
            timer: "2 min"
        },
        {
            titre: "Cuire les steaks",
            texte: "Saisir les steaks à feu vif selon la cuisson désirée. Saler, poivrer.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Napper les steaks de sauce bordelaise et servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "La moelle doit juste fondre, sans bouillir.",
        "Un Bordeaux corsé donne une sauce plus profonde.",
        "Servir avec des pommes de terre sautées ou un gratin dauphinois."
    ]
},


'steak-tartare': {
    name:       'Steak tartare',
    region:     'Paris / Lyon',
    anecdote:   "Le tartare cru à la moutarde, cornichons et câpres est un classique des brasseries françaises depuis la Belle Époque.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "15 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "600 g", name: "bœuf haché au couteau", note: "très frais" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2", name: "jaunes d’œufs", note: "" },
                { qty: "2 c. à soupe", name: "moutarde forte", note: "" },
                { qty: "2 c. à soupe", name: "câpres", note: "hachées" },
                { qty: "4", name: "cornichons", note: "hachés" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" },
                { qty: "1 c. à soupe", name: "sauce Worcestershire", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer l’assaisonnement",
            texte: "Mélanger jaunes d’œufs, moutarde, câpres, cornichons, échalote, persil et Worcestershire.",
            timer: "5 min"
        },
        {
            titre: "Incorporer la viande",
            texte: "Ajouter le bœuf haché au couteau et mélanger délicatement.",
            timer: "2 min"
        },
        {
            titre: "Assaisonner",
            texte: "Saler, poivrer et ajuster la moutarde ou la sauce selon le goût.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Former des portions et servir avec frites et salade.",
            timer: "—"
        }
    ],

    conseils: [
        "Toujours utiliser une viande très fraîche, hachée au dernier moment.",
        "Ajouter un peu de Tabasco pour une version plus relevée.",
        "Servir avec des frites maison pour un vrai esprit brasserie."
    ]
},


'supremes-pintade-marrons': {
    name:       'Suprêmes de pintade aux lardons et marrons',
    region:     'Périgord / Ardèche',
    anecdote:   'Plat d’automne par excellence, la pintade aux marrons annonce les repas festifs et rappelle les saveurs des sous-bois.',
    tags:       ["Automne", "Hiver", "Plat principal", "Moyen"],
    prep:       '20 min',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Moyen',

    ingredients: [
        {
            groupe: "Volaille",
            items: [
                { qty: "4", name: "suprêmes de pintade", note: "avec peau" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "150 g", name: "lardons fumés", note: "" },
                { qty: "200 g", name: "marrons cuits", note: "sous vide ou en bocal" },
                { qty: "200 g", name: "champignons de Paris", note: "émincés (optionnel)" },
                { qty: "2", name: "échalotes", note: "ciselées" }
            ]
        },
        {
            groupe: "Liquides & sauce",
            items: [
                { qty: "10 cl", name: "vin blanc sec", note: "" },
                { qty: "15 cl", name: "bouillon de volaille", note: "" },
                { qty: "10 cl", name: "crème fraîche", note: "épaisse ou liquide" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 branche", name: "thym", note: "" },
                { qty: "1", name: "feuille de laurier", note: "" },
                { qty: "", name: "sel & poivre", note: "à ajuster" },
                { qty: "1 c. à soupe", name: "huile", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir les suprêmes",
            texte: "Faire chauffer l’huile dans une cocotte. Saisir les suprêmes côté peau jusqu’à coloration dorée. Retourner et cuire 2 minutes de l’autre côté.",
            timer: "8 min"
        },
        {
            titre: "Ajouter lardons et échalotes",
            texte: "Retirer les suprêmes. Faire revenir les lardons et les échalotes dans la cocotte jusqu’à légère coloration.",
            timer: "5 min"
        },
        {
            titre: "Déglacer et mijoter",
            texte: "Ajouter le vin blanc, laisser réduire de moitié. Ajouter le bouillon, le thym et le laurier. Remettre les suprêmes et couvrir.",
            timer: "15 min"
        },
        {
            titre: "Ajouter marrons et crème",
            texte: "Incorporer les marrons (et les champignons si utilisés). Ajouter la crème et laisser mijoter doucement pour épaissir la sauce.",
            timer: "10 min"
        },
        {
            titre: "Servir",
            texte: "Rectifier l’assaisonnement. Servir les suprêmes nappés de sauce, accompagnés de purée, pâtes fraîches ou légumes d’hiver.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Les marrons en bocal sont parfaits : ils ne s’écrasent pas et gardent leur parfum.",
        "Ajouter un peu de cognac ou d’armagnac pour une version plus festive.",
        "La pintade peut être remplacée par du poulet fermier, mais la saveur sera plus douce."
    ]
},


'taboule-libanais': {
    name:       'Taboulé libanais',
    region:     'Liban / Provence',
    anecdote:   "Le vrai taboulé est vert : beaucoup de persil, peu de boulgour, citron, menthe et tomate. Frais et léger.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "20 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Herbes & base",
            items: [
                { qty: "3 bottes", name: "persil plat", note: "haché finement" },
                { qty: "1/2 botte", name: "menthe fraîche", note: "hachée" },
                { qty: "50 g", name: "boulgour fin", note: "trempé 10 min" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "tomates", note: "en petits dés" },
                { qty: "2", name: "oignons nouveaux", note: "ciselés" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2", name: "citrons", note: "jus" },
                { qty: "4 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les herbes",
            texte: "Laver et sécher persil et menthe, puis hacher très finement.",
            timer: "10 min"
        },
        {
            titre: "Ajouter légumes et boulgour",
            texte: "Mélanger tomates, oignons nouveaux et boulgour égoutté.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter jus de citron, huile d’olive, sel et poivre. Mélanger délicatement.",
            timer: "2 min"
        },
        {
            titre: "Reposer",
            texte: "Laisser reposer 30 minutes au frais pour que les saveurs se mêlent.",
            timer: "30 min"
        }
    ],

    conseils: [
        "Le taboulé libanais est une salade d’herbes, pas une salade de semoule.",
        "Ajouter le citron juste avant de servir pour garder les herbes bien vertes.",
        "Servir avec du pain pita ou des mezzés."
    ]
},

'taboule-maison': {
    name:       'Taboulé maison',
    region:     'Languedoc / Provence',
    anecdote:   "Avec le retour de la chaleur, le taboulé frais au citron, menthe et légumes croquants prend le dessus.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "20 min",
    cuisson:    "5 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "200 g", name: "semoule de couscous", note: "grain moyen" },
                { qty: "20 cl", name: "eau chaude", note: "pour gonfler la semoule" }
            ]
        },
        {
            groupe: "Légumes & herbes",
            items: [
                { qty: "3", name: "tomates", note: "en dés" },
                { qty: "1", name: "concombre", note: "en petits cubes" },
                { qty: "1", name: "poivron", note: "en dés" },
                { qty: "1 botte", name: "persil", note: "haché" },
                { qty: "1/2 botte", name: "menthe", note: "hachée" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2", name: "citrons", note: "jus" },
                { qty: "4 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la semoule",
            texte: "Verser l’eau chaude sur la semoule, couvrir et laisser gonfler 5 minutes. Égrainer à la fourchette.",
            timer: "5 min"
        },
        {
            titre: "Ajouter légumes et herbes",
            texte: "Incorporer tomates, concombre, poivron, persil et menthe.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter citron, huile d’olive, sel et poivre. Mélanger.",
            timer: "2 min"
        },
        {
            titre: "Reposer",
            texte: "Laisser reposer au frais au moins 1 heure.",
            timer: "1 h"
        }
    ],

    conseils: [
        "Ajouter des raisins secs ou de la feta pour varier.",
        "Un peu de zeste de citron renforce la fraîcheur.",
        "Servir bien frais, idéalement le lendemain."
    ]
},


'tartare-saumon-mangue': {
    name:       'Tartare de saumon à la mangue',
    region:     'Bretagne / fusion',
    anecdote:   "Le saumon cru de l’Atlantique avec la mangue et la coriandre compose un tartare frais et exotique pour l’été.",
    tags:       ["Été", "Entrée", "Moyen"],
    prep:       "20 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "400 g", name: "saumon très frais", note: "qualité sashimi, sans peau" }
            ]
        },
        {
            groupe: "Fruits & légumes",
            items: [
                { qty: "1", name: "mangue mûre", note: "en petits dés" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1", name: "citron vert", note: "jus et zeste" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "sauce soja", note: "optionnelle" },
                { qty: "1 petit bouquet", name: "coriandre", note: "hachée" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le saumon",
            texte: "Couper le saumon en petits dés réguliers. Garder bien froid.",
            timer: "5 min"
        },
        {
            titre: "Ajouter la mangue",
            texte: "Mélanger délicatement saumon, mangue et échalote.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter citron vert, huile d’olive, soja, sel, poivre et coriandre.",
            timer: "2 min"
        },
        {
            titre: "Reposer",
            texte: "Laisser reposer 10 minutes au frais avant de servir.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Ajouter un peu de gingembre frais râpé pour une touche plus exotique.",
        "Remplacer la mangue par de l’ananas pour une variante plus acidulée.",
        "Servir avec des toasts grillés ou du riz vinaigré."
    ]
},


'tartare-tomates': {
    name:       'Tartare de tomates aux herbes',
    region:     'Provence',
    anecdote:   "À la veille de l’été, les premières tomates anciennes se dégustent en tartare cru avec basilic, câpres et huile d’olive.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "4", name: "tomates anciennes", note: "chair ferme, en petits dés" },
                { qty: "1", name: "échalote", note: "ciselée" }
            ]
        },
        {
            groupe: "Herbes & condiments",
            items: [
                { qty: "1 botte", name: "basilic", note: "haché" },
                { qty: "1 c. à soupe", name: "câpres", note: "hachées" },
                { qty: "1", name: "citron", note: "jus" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les tomates",
            texte: "Couper les tomates en petits dés réguliers. Égoutter légèrement si elles sont très juteuses.",
            timer: "5 min"
        },
        {
            titre: "Ajouter herbes et condiments",
            texte: "Mélanger tomates, échalote, basilic et câpres.",
            timer: "3 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter citron, huile d’olive, sel et poivre. Mélanger délicatement.",
            timer: "2 min"
        },
        {
            titre: "Servir",
            texte: "Servir frais, idéalement dans un cercle pour une belle présentation.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter un peu de zeste de citron pour renforcer la fraîcheur.",
        "Remplacer le basilic par de la menthe pour une version plus estivale.",
        "Servir avec du pain grillé ou en accompagnement d’un poisson froid."
    ]
},


  'tarte-abricots': {
    name:       'Tarte aux abricots',
    region:     'Provence / Roussillon',
    anecdote:   "Les abricots du Roussillon, les plus précoces de France, font une tarte rustique parfumée et légèrement acidulée.",
    tags:       ["Été", "Dessert", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "600 g", name: "abricots", note: "mûrs mais fermes" },
                { qty: "60 g", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "poudre d’amande", note: "pour absorber le jus" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les abricots",
            texte: "Laver, dénoyauter et couper les abricots en deux.",
            timer: "5 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Étaler la pâte dans un moule, piquer le fond et saupoudrer de poudre d’amande.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Disposer les abricots côté chair vers le haut, saupoudrer de sucre.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C jusqu’à coloration dorée.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Ajouter un filet de miel de lavande à la sortie du four.",
        "Pour une tarte plus gourmande, ajouter quelques amandes effilées.",
        "Les abricots très juteux nécessitent un peu plus de poudre d’amande."
    ]
},


'tarte-abricots-romarin': {
    name:       'Tarte aux abricots et romarin',
    region:     'Provence',
    anecdote:   "L’abricot du Luberon avec une branche de romarin dans la tarte : la magie aromatique de la Provence.",
    tags:       ["Été", "Dessert", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "600 g", name: "abricots", note: "mûrs mais fermes" },
                { qty: "70 g", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "poudre d’amande", note: "" },
                { qty: "1 branche", name: "romarin frais", note: "effeuillé finement" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les abricots",
            texte: "Laver, dénoyauter et couper les abricots en deux.",
            timer: "5 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Étaler la pâte sablée, piquer le fond et saupoudrer de poudre d’amande.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Disposer les abricots, parsemer de sucre et de romarin.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C jusqu’à ce que les abricots soient fondants.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Le romarin doit être dosé avec parcimonie : quelques aiguilles suffisent.",
        "Ajouter un filet d’huile d’olive douce pour une touche provençale authentique.",
        "Servir tiède avec une boule de glace vanille ou lavande."
    ]
},


'tarte-citron-meringuee': {
    name:       'Tarte au citron meringuée',
    region:     'Languedoc / Nice',
    anecdote:   "Le citron de Menton, dernier citron d’hiver, finit sa saison dans cette tarte acidulée surmontée de meringue.",
    tags:       ["Hiver", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Crème citron",
            items: [
                { qty: "3", name: "citrons", note: "jus + zeste" },
                { qty: "120 g", name: "sucre", note: "" },
                { qty: "3", name: "œufs", note: "" },
                { qty: "80 g", name: "beurre", note: "en dés" }
            ]
        },
        {
            groupe: "Meringue",
            items: [
                { qty: "3", name: "blancs d’œufs", note: "" },
                { qty: "100 g", name: "sucre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la pâte",
            texte: "Foncer un moule avec la pâte sablée, piquer le fond et cuire à blanc 15 minutes à 180°C.",
            timer: "15 min"
        },
        {
            titre: "Préparer la crème citron",
            texte: "Fouetter œufs, sucre, jus et zeste. Chauffer doucement jusqu’à épaississement, puis incorporer le beurre.",
            timer: "10 min"
        },
        {
            titre: "Garnir",
            texte: "Verser la crème citron dans le fond de tarte précuit.",
            timer: "2 min"
        },
        {
            titre: "Monter la meringue",
            texte: "Monter les blancs en neige, ajouter le sucre et fouetter jusqu’à consistance ferme.",
            timer: "5 min"
        },
        {
            titre: "Dorer",
            texte: "Recouvrir la tarte de meringue et dorer 8 à 10 minutes à 180°C.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Pour une meringue brillante, ajouter une cuillère de sucre glace en fin de montage.",
        "Utiliser des citrons de Menton pour une acidité douce et parfumée.",
        "Passer un coup de chalumeau pour une finition plus régulière."
    ]
},


'tarte-coings-cannelle': {
    name:       'Tarte fine aux coings et cannelle',
    region:     'Normandie / Île-de-France',
    anecdote:   "Le coing jaune d’automne, dur mais parfumé, se transforme en tarte fine avec une touche de cannelle.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "pour une tarte fine" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "3", name: "coings", note: "épluchés et précuits" },
                { qty: "60 g", name: "sucre", note: "" },
                { qty: "1 c. à café", name: "cannelle", note: "" },
                { qty: "20 g", name: "beurre", note: "fondu" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Précuire les coings",
            texte: "Couper les coings en lamelles et les cuire 15 minutes dans l’eau citronnée.",
            timer: "15 min"
        },
        {
            titre: "Préparer la pâte",
            texte: "Étaler la pâte feuilletée sur une plaque, piquer le fond.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Disposer les lamelles de coings, saupoudrer de sucre et de cannelle, arroser de beurre fondu.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 25 minutes à 190°C jusqu’à ce que les bords soient dorés.",
            timer: "25 min"
        }
    ],

    conseils: [
        "Ajouter un filet de miel juste après cuisson pour sublimer le parfum du coing.",
        "Les coings doivent être précuits : crus, ils restent trop fermes.",
        "Servir tiède avec une crème fraîche épaisse ou une boule de glace vanille."
    ]
},


'tarte-epinards-chevre': {
    name:       'Tarte aux épinards et chèvre frais',
    region:     'Berry / Poitou',
    anecdote:   "Le chèvre frais du Poitou sur les épinards du jardin : les deux premières récoltes du potager printanier réunies.",
    tags:       ["Printemps", "Plat principal", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "500 g", name: "épinards frais", note: "équeutés" },
                { qty: "200 g", name: "chèvre frais", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "15 cl", name: "crème fraîche", note: "" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "", name: "sel, poivre, muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les épinards",
            texte: "Laver et équeuter les épinards. Les faire tomber 2 minutes dans une poêle.",
            timer: "5 min"
        },
        {
            titre: "Faire revenir l’oignon",
            texte: "Faire suer l’oignon dans un peu de beurre, puis ajouter les épinards égouttés.",
            timer: "5 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger œufs, crème, sel, poivre et muscade. Ajouter le chèvre émietté.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la pâte, répartir les épinards puis verser l’appareil au chèvre.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Ajouter quelques noix concassées pour une touche croquante.",
        "Remplacer le chèvre frais par un crottin affiné pour un goût plus marqué.",
        "Les épinards surgelés fonctionnent aussi, bien égouttés."
    ]
},


'tarte-epinards-ricotta': {
    name:       'Tarte aux épinards et ricotta',
    region:     'Provence / Nice',
    anecdote:   "Les épinards printaniers cueillis avant la montée en graines font une tarte légère aux herbes niçoises.",
    tags:       ["Printemps", "Plat principal", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "500 g", name: "épinards frais", note: "équeutés" },
                { qty: "250 g", name: "ricotta", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "basilic ou origan", note: "haché" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les épinards",
            texte: "Laver, équeuter et faire tomber les épinards 2 minutes dans une poêle.",
            timer: "5 min"
        },
        {
            titre: "Faire revenir l’échalote",
            texte: "Faire suer l’échalote dans l’huile d’olive puis ajouter les épinards.",
            timer: "5 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger ricotta, œufs, herbes, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la pâte, répartir les épinards puis verser l’appareil à la ricotta.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Ajouter un peu de parmesan râpé pour une version plus italienne.",
        "Les herbes niçoises (origan, basilic, marjolaine) parfument très bien la tarte.",
        "Servir avec une salade de roquette citronnée."
    ]
},

'tarte-fine-caprese': {
    name:       'Tarte fine aux tomates cerise et mozzarella',
    region:     'Provence',
    anecdote:   "La caprese en tarte fine : tomates cerises, mozzarella, basilic frais sur pâte feuilletée croustillante.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "pure beurre" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "300 g", name: "tomates cerise", note: "entières ou coupées en deux" },
                { qty: "200 g", name: "mozzarella", note: "en tranches ou billes" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 bouquet", name: "basilic frais", note: "ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Étaler la pâte feuilletée sur une plaque, la piquer à la fourchette.",
            timer: "3 min"
        },
        {
            titre: "Disposer la garniture",
            texte: "Répartir échalote, tomates cerise, sel, poivre et un filet d’huile d’olive.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 20 à 25 minutes à 200°C jusqu’à ce que la pâte soit dorée.",
            timer: "25 min"
        },
        {
            titre: "Ajouter la mozzarella",
            texte: "Déposer la mozzarella à la sortie du four pour qu’elle fonde légèrement, puis ajouter le basilic.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter un filet de pesto pour renforcer la note caprese.",
        "Utiliser de la burrata pour une version plus crémeuse.",
        "Bien égoutter la mozzarella pour éviter de détremper la pâte."
    ]
},

'tarte-fine-tomates': {
    name:       'Tarte fine aux tomates et basilic',
    region:     'Provence',
    anecdote:   "Les premières tomates de serre en mai sur une pâte feuilletée dorée avec basilic frais : le goût de l’été promis.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "4", name: "tomates", note: "en fines rondelles" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 bouquet", name: "basilic", note: "frais, ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Étaler la pâte feuilletée sur une plaque et la piquer à la fourchette.",
            timer: "3 min"
        },
        {
            titre: "Garnir",
            texte: "Disposer les rondelles de tomates, ajouter échalote, sel, poivre et huile d’olive.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 20 à 25 minutes à 200°C jusqu’à ce que les bords soient dorés.",
            timer: "25 min"
        },
        {
            titre: "Finaliser",
            texte: "Ajouter le basilic frais juste avant de servir.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Ajouter un peu de moutarde fine sur le fond pour une version plus relevée.",
        "Utiliser des tomates anciennes pour plus de parfum.",
        "Servir avec une salade de roquette citronnée."
    ]
},

'tarte-flambee': {
    name:       'Tarte flambée (Flammekueche)',
    region:     'Alsace',
    anecdote:   "Fine tarte à la crème fraîche, aux lardons et aux oignons, cuite sur pierre brûlante dans le four du boulanger.",
    tags:       ["Automne", "Hiver", "Plat principal", "Facile"],
    prep:       "20 min",
    cuisson:    "12 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "250 g", name: "farine", note: "" },
                { qty: "10 cl", name: "eau", note: "" },
                { qty: "2 c. à soupe", name: "huile", note: "" },
                { qty: "1 pincée", name: "sel", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "200 g", name: "crème fraîche épaisse", note: "" },
                { qty: "100 g", name: "fromage blanc", note: "" },
                { qty: "2", name: "oignons", note: "émincés finement" },
                { qty: "150 g", name: "lardons fumés", note: "" },
                { qty: "", name: "sel, poivre, muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Mélanger farine, eau, huile et sel. Étaler très finement.",
            timer: "10 min"
        },
        {
            titre: "Préparer la garniture",
            texte: "Mélanger crème et fromage blanc. Assaisonner de sel, poivre et muscade.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la crème sur la pâte, ajouter oignons et lardons.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 10 à 12 minutes à 250°C, idéalement sur pierre chaude.",
            timer: "12 min"
        }
    ],

    conseils: [
        "La pâte doit être extrêmement fine : c’est la signature de la flammekueche.",
        "Ajouter un peu de fromage râpé pour une version gratinée (non traditionnelle).",
        "Servir immédiatement, bien chaude."
    ]
},


'tarte-fraise-frangipane': {
    name:       "Tarte à la fraise sur crème d'amande",
    region:     'France entière',
    anecdote:   "La fraise gariguette de juin sur frangipane légère est une tarte de saison qui marie douceur et acidité.",
    tags:       ["Printemps", "Été", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "" }
            ]
        },
        {
            groupe: "Crème d’amande",
            items: [
                { qty: "80 g", name: "beurre", note: "mou" },
                { qty: "80 g", name: "sucre", note: "" },
                { qty: "80 g", name: "poudre d’amande", note: "" },
                { qty: "1", name: "œuf", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "400 g", name: "fraises", note: "gariguettes ou mara des bois" },
                { qty: "1 c. à soupe", name: "confiture de fraise", note: "pour napper" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la pâte",
            texte: "Foncer le moule, piquer la pâte et cuire à blanc 10 minutes à 180°C.",
            timer: "10 min"
        },
        {
            titre: "Préparer la crème d’amande",
            texte: "Mélanger beurre, sucre, poudre d’amande et œuf. Étaler sur le fond précuit.",
            timer: "5 min"
        },
        {
            titre: "Cuire la crème",
            texte: "Cuire 15 minutes à 180°C jusqu’à légère coloration.",
            timer: "15 min"
        },
        {
            titre: "Garnir",
            texte: "Laisser refroidir, disposer les fraises et napper légèrement de confiture.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter un zeste de citron dans la crème d’amande pour plus de fraîcheur.",
        "Utiliser des fraises bien sèches pour éviter de détremper la tarte.",
        "Servir le jour même pour conserver le croquant de la pâte."
    ]
},


'tarte-fraises-creme': {
    name:       'Tarte aux fraises et crème pâtissière',
    region:     'Île-de-France / Bretagne',
    anecdote:   "Les fraises de France en mai sont à leur pic de saveur. Dans une tarte crème pâtissière, elles sont royales.",
    tags:       ["Printemps", "Été", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Crème pâtissière",
            items: [
                { qty: "50 cl", name: "lait", note: "" },
                { qty: "4", name: "jaunes d’œufs", note: "" },
                { qty: "100 g", name: "sucre", note: "" },
                { qty: "40 g", name: "maïzena", note: "" },
                { qty: "1", name: "gousse de vanille", note: "ou extrait" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "400 g", name: "fraises", note: "gariguettes ou mara des bois" },
                { qty: "1 c. à soupe", name: "confiture de fraise", note: "pour napper" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la pâte",
            texte: "Foncer un moule, piquer le fond et cuire à blanc 15 minutes à 180°C.",
            timer: "15 min"
        },
        {
            titre: "Préparer la crème pâtissière",
            texte: "Chauffer le lait avec la vanille. Fouetter jaunes, sucre et maïzena, puis verser le lait chaud et remettre à épaissir.",
            timer: "10 min"
        },
        {
            titre: "Garnir",
            texte: "Verser la crème refroidie dans le fond de tarte.",
            timer: "2 min"
        },
        {
            titre: "Disposer les fraises",
            texte: "Couper les fraises et les disposer harmonieusement. Napper légèrement de confiture.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter un zeste de citron dans la crème pour plus de fraîcheur.",
        "Utiliser des fraises bien sèches pour éviter de détremper la tarte.",
        "Servir le jour même pour conserver le croquant de la pâte."
    ]
},


'tarte-fraises-plougastel': {
    name:       'Tarte aux fraises de Plougastel',
    region:     'Bretagne',
    anecdote:   "Les premières fraises de Plougastel, douces et parfumées, arrivent en serre sous les pluies d’avril breton.",
    tags:       ["Printemps", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "" }
            ]
        },
        {
            groupe: "Crème légère",
            items: [
                { qty: "25 cl", name: "lait", note: "" },
                { qty: "2", name: "jaunes d’œufs", note: "" },
                { qty: "50 g", name: "sucre", note: "" },
                { qty: "20 g", name: "maïzena", note: "" },
                { qty: "10 cl", name: "crème fouettée", note: "à incorporer après refroidissement" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "400 g", name: "fraises de Plougastel", note: "entières ou coupées" },
                { qty: "1 c. à soupe", name: "gelée de groseille", note: "pour napper" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la pâte",
            texte: "Foncer un moule, piquer la pâte et cuire à blanc 15 minutes à 180°C.",
            timer: "15 min"
        },
        {
            titre: "Préparer la crème légère",
            texte: "Faire une petite crème pâtissière, laisser refroidir puis incorporer la crème fouettée.",
            timer: "10 min"
        },
        {
            titre: "Garnir",
            texte: "Étaler la crème dans le fond de tarte refroidi.",
            timer: "2 min"
        },
        {
            titre: "Disposer les fraises",
            texte: "Ajouter les fraises et napper légèrement de gelée de groseille.",
            timer: "5 min"
        }
    ],

    conseils: [
        "La gelée de groseille apporte une belle brillance et une pointe d’acidité.",
        "Choisir des fraises de même taille pour une présentation régulière.",
        "Servir bien frais."
    ]
},


'tarte-mirabelles': {
    name:       'Tarte aux mirabelles',
    region:     'Lorraine',
    anecdote:   "La mirabelle de Lorraine, or et sucrée, est à son apogée fin août-début septembre. En tarte, elle est divine.",
    tags:       ["Fin d'été", "Dessert", "Facile"],
    prep:       "20 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "600 g", name: "mirabelles", note: "dénoyautées" },
                { qty: "40 g", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "poudre d’amande", note: "pour absorber le jus" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les mirabelles",
            texte: "Laver, sécher et dénoyauter les mirabelles.",
            timer: "5 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Étaler la pâte, la piquer et saupoudrer de poudre d’amande.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Disposer les mirabelles serrées, côté peau vers le bas. Saupoudrer de sucre.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 25 à 30 minutes à 180°C jusqu’à coloration dorée.",
            timer: "30 min"
        }
    ],

    conseils: [
        "Ajouter un voile de cannelle pour une version plus automnale.",
        "Les mirabelles très juteuses nécessitent un peu plus de poudre d’amande.",
        "Servir tiède avec une boule de glace vanille ou de la crème épaisse."
    ]
},


'tarte-noix-caramel': {
    name:       'Tarte aux noix et caramel',
    region:     'Dauphiné / Périgord',
    anecdote:   "Les noix de Grenoble ou du Périgord dans un caramel au beurre salé : la tarte de l’automne par excellence.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "200 g", name: "cerneaux de noix", note: "grossièrement concassés" },
                { qty: "120 g", name: "sucre", note: "pour le caramel" },
                { qty: "20 cl", name: "crème liquide", note: "" },
                { qty: "40 g", name: "beurre demi-sel", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la pâte",
            texte: "Foncer un moule, piquer la pâte et cuire à blanc 10 minutes à 180°C.",
            timer: "10 min"
        },
        {
            titre: "Préparer le caramel",
            texte: "Faire fondre le sucre à sec jusqu’à caramel blond. Ajouter beurre puis crème hors du feu.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les noix",
            texte: "Incorporer les noix concassées dans le caramel encore chaud.",
            timer: "2 min"
        },
        {
            titre: "Garnir et cuire",
            texte: "Verser sur la pâte précuite et cuire 15 minutes à 180°C.",
            timer: "15 min"
        }
    ],

    conseils: [
        "Ajouter une pincée de fleur de sel pour sublimer le caramel.",
        "Remplacer une partie des noix par des noisettes pour une version plus douce.",
        "Servir légèrement tiède pour une texture parfaite."
    ]
},


'tarte-noix-grenoble': {
    name:       'Tarte aux noix de Grenoble',
    region:     'Dauphiné / Isère',
    anecdote:   "Les noix de Grenoble AOP tombent en septembre. Dans une tarte au caramel et aux noix, elles sont sublimes.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "200 g", name: "cerneaux de noix de Grenoble", note: "concassés" },
                { qty: "120 g", name: "sucre", note: "pour le caramel" },
                { qty: "20 cl", name: "crème liquide", note: "" },
                { qty: "40 g", name: "beurre demi-sel", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la pâte",
            texte: "Foncer un moule, piquer la pâte et cuire à blanc 10 minutes à 180°C.",
            timer: "10 min"
        },
        {
            titre: "Préparer le caramel",
            texte: "Faire fondre le sucre à sec jusqu’à caramel blond. Hors du feu, ajouter beurre puis crème.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les noix",
            texte: "Incorporer les noix concassées dans le caramel chaud.",
            timer: "2 min"
        },
        {
            titre: "Garnir et cuire",
            texte: "Verser sur la pâte précuite et cuire 15 minutes à 180°C.",
            timer: "15 min"
        }
    ],

    conseils: [
        "Une pincée de fleur de sel sublime le caramel.",
        "Pour une version plus douce, remplacer une partie des noix par des noisettes.",
        "Servir légèrement tiède pour une texture idéale."
    ]
},

'tarte-oignon-alsacienne': {
    name:       "Tarte à l'oignon alsacienne",
    region:     'Alsace',
    anecdote:   "La Zwiebelkuche alsacienne aux oignons dorés, crème et lardons est le plat de la saison des vendanges tardives.",
    tags:       ["Automne", "Plat principal", "Moyen"],
    prep:       "25 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "600 g", name: "oignons", note: "émincés" },
                { qty: "150 g", name: "lardons fumés", note: "" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "1 c. à soupe", name: "farine", note: "pour lier" },
                { qty: "", name: "sel, poivre, muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les oignons",
            texte: "Faire revenir les oignons à feu doux 15 minutes jusqu’à légère coloration.",
            timer: "15 min"
        },
        {
            titre: "Ajouter les lardons",
            texte: "Ajouter les lardons et cuire encore 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger œufs, crème, farine, sel, poivre et muscade.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la pâte, répartir oignons et lardons, puis verser l’appareil.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Les oignons doivent être bien fondants pour éviter l’amertume.",
        "Servir avec un verre de blanc sec alsacien (riesling ou sylvaner).",
        "Pour une version plus rustique, ajouter un peu de cumin."
    ]
},

'tarte-poireaux-saumon': {
    name:       'Tarte aux poireaux et saumon fumé',
    region:     'Bretagne / Normandie',
    anecdote:   "Les derniers poireaux d’hiver accompagnent le saumon fumé dans une tarte salée qui sent bon le bord de mer.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "3", name: "poireaux", note: "blancs émincés" },
                { qty: "150 g", name: "saumon fumé", note: "en lanières" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "15 cl", name: "crème fraîche", note: "" },
                { qty: "1 c. à soupe", name: "moutarde douce", note: "optionnelle" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les poireaux",
            texte: "Laver et émincer les poireaux. Les faire fondre 10 minutes dans un peu de beurre.",
            timer: "10 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger œufs, crème, sel et poivre. Ajouter la moutarde si désiré.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la pâte, répartir les poireaux puis le saumon fumé. Verser l’appareil.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Ajouter un peu d’aneth pour une touche nordique.",
        "Remplacer le saumon fumé par du saumon frais poché pour une version plus douce.",
        "Bien égoutter les poireaux pour éviter de détremper la pâte."
    ]
},


'tarte-poires-belle-helene': {
    name:       'Tarte aux poires Belle Hélène',
    region:     'Île-de-France',
    anecdote:   "Les poires pochées au sirop sur fond de crème d’amande avec coulis de chocolat : la Belle Hélène en tarte.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "30 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "" }
            ]
        },
        {
            groupe: "Poires pochées",
            items: [
                { qty: "4", name: "poires", note: "conférence ou comice" },
                { qty: "1 litre", name: "eau", note: "" },
                { qty: "150 g", name: "sucre", note: "" },
                { qty: "1", name: "gousse de vanille", note: "" }
            ]
        },
        {
            groupe: "Crème d’amande",
            items: [
                { qty: "80 g", name: "beurre", note: "mou" },
                { qty: "80 g", name: "sucre", note: "" },
                { qty: "80 g", name: "poudre d’amande", note: "" },
                { qty: "1", name: "œuf", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "80 g", name: "chocolat noir", note: "fondu pour napper" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Pocher les poires",
            texte: "Faire frémir eau, sucre et vanille. Pocher les poires 15 minutes et laisser refroidir.",
            timer: "15 min"
        },
        {
            titre: "Préparer la crème d’amande",
            texte: "Mélanger beurre, sucre, poudre d’amande et œuf. Étaler sur la pâte précuite 10 minutes.",
            timer: "10 min"
        },
        {
            titre: "Garnir",
            texte: "Couper les poires en éventail et les disposer sur la crème d’amande.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 25 minutes à 180°C.",
            timer: "25 min"
        },
        {
            titre: "Napper",
            texte: "Napper de chocolat fondu juste avant de servir.",
            timer: "2 min"
        }
    ],

    conseils: [
        "Ajouter un trait de poire Williams dans le sirop pour parfumer.",
        "Choisir des poires mûres mais fermes pour une belle tenue.",
        "Servir tiède pour que le chocolat reste souple."
    ]
},


'tarte-pommes-normande': {
    name:       'Tarte aux pommes normande',
    region:     'Normandie',
    anecdote:   "La tarte normande aux pommes, crème fraîche et calvados est l'emblème de l'automne en pays de cidre.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Pommes",
            items: [
                { qty: "4", name: "pommes", note: "reinettes ou boskoop" }
            ]
        },
        {
            groupe: "Appareil normand",
            items: [
                { qty: "2", name: "œufs", note: "" },
                { qty: "20 cl", name: "crème fraîche", note: "" },
                { qty: "60 g", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "calvados", note: "optionnel mais traditionnel" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pommes",
            texte: "Éplucher et couper les pommes en lamelles.",
            timer: "5 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Étaler la pâte, la piquer et disposer les pommes en rosace.",
            timer: "5 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger œufs, crème, sucre et calvados. Verser sur les pommes.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C jusqu’à coloration dorée.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Ajouter un voile de cannelle pour une version plus chaleureuse.",
        "Utiliser de la crème crue normande pour un goût plus riche.",
        "Servir tiède avec une boule de glace vanille ou un trait de crème fraîche."
    ]
},

'tarte-potiron': {
    name:       'Tarte au potiron',
    region:     'France entière',
    anecdote:   "Le potiron d’octobre en tarte sucrée ou salée est le pendant français du pumpkin pie américain.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "400 g", name: "chair de potiron cuite", note: "réduite en purée" },
                { qty: "2", name: "œufs", note: "" },
                { qty: "15 cl", name: "crème liquide", note: "" },
                { qty: "80 g", name: "sucre", note: "" },
                { qty: "1 c. à café", name: "cannelle", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le potiron",
            texte: "Cuire le potiron à la vapeur ou au four puis l’écraser en purée.",
            timer: "15 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger purée de potiron, œufs, crème, sucre et épices.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Étaler la pâte, verser l’appareil et lisser la surface.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 35 à 40 minutes à 180°C.",
            timer: "40 min"
        }
    ],

    conseils: [
        "Ajouter un peu de zeste d’orange pour une note plus fraîche.",
        "Pour une version salée, retirer le sucre et ajouter fromage et herbes.",
        "Servir avec une cuillerée de crème fouettée légèrement sucrée."
    ]
},


'tarte-quetsches': {
    name:       'Tarte aux prunes de Damas',
    region:     'Lorraine / Alsace',
    anecdote:   "La quetsche de Lorraine, prune violette et acidulée, fait la meilleure tarte de septembre.",
    tags:       ["Fin d'été", "Dessert", "Facile"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "maison ou du commerce" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "600 g", name: "quetsches", note: "dénoyautées, coupées en deux" },
                { qty: "40 g", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "poudre d’amande", note: "pour absorber le jus" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les prunes",
            texte: "Laver, sécher et dénoyauter les quetsches. Les couper en deux.",
            timer: "5 min"
        },
        {
            titre: "Foncer le moule",
            texte: "Étaler la pâte, la piquer et saupoudrer de poudre d’amande.",
            timer: "5 min"
        },
        {
            titre: "Garnir",
            texte: "Disposer les prunes serrées, côté peau vers le bas. Saupoudrer de sucre.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes à 180°C.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Ajouter une pincée de cannelle pour une version alsacienne.",
        "Les quetsches très juteuses nécessitent un peu plus de poudre d’amande.",
        "Servir tiède avec une cuillerée de crème fraîche."
    ]
},


'tarte-raisins-muscats': {
    name:       'Tarte aux raisins muscats',
    region:     'Languedoc / Alsace',
    anecdote:   "Les premiers raisins muscats de la vendange précoce dans une tarte à la crème pâtissière légère.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "25 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte sablée", note: "" }
            ]
        },
        {
            groupe: "Crème pâtissière légère",
            items: [
                { qty: "25 cl", name: "lait", note: "" },
                { qty: "2", name: "jaunes d’œufs", note: "" },
                { qty: "50 g", name: "sucre", note: "" },
                { qty: "20 g", name: "maïzena", note: "" },
                { qty: "1", name: "gousse de vanille", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "400 g", name: "raisins muscats", note: "égrainés, coupés en deux et épépinés" },
                { qty: "1 c. à soupe", name: "gelée de raisin ou de groseille", note: "pour napper" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la pâte",
            texte: "Foncer un moule, piquer la pâte et cuire à blanc 10 minutes à 180°C.",
            timer: "10 min"
        },
        {
            titre: "Préparer la crème pâtissière",
            texte: "Chauffer le lait avec la vanille. Fouetter jaunes, sucre et maïzena, verser le lait chaud et épaissir.",
            timer: "10 min"
        },
        {
            titre: "Garnir",
            texte: "Étaler la crème refroidie dans le fond de tarte.",
            timer: "2 min"
        },
        {
            titre: "Disposer les raisins",
            texte: "Répartir les raisins coupés en deux, puis napper légèrement de gelée.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Bien épépiner les raisins pour éviter l’amertume.",
        "Choisir des muscats bien mûrs pour un parfum intense.",
        "Servir frais pour une texture plus légère."
    ]
},


'tarte-tatin': {
    name:       'Tarte Tatin',
    region:     'Sologne / Loir-et-Cher',
    anecdote:   "Les sœurs Tatin auraient inventé cette tarte renversée par accident dans leur auberge de Lamotte-Beuvron.",
    tags:       ["Automne", "Dessert", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte brisée", note: "ou feuilletée selon tradition familiale" }
            ]
        },
        {
            groupe: "Caramel & pommes",
            items: [
                { qty: "6", name: "pommes", note: "reinettes ou golden, fermes" },
                { qty: "120 g", name: "sucre", note: "" },
                { qty: "80 g", name: "beurre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les pommes",
            texte: "Éplucher et couper les pommes en quartiers.",
            timer: "5 min"
        },
        {
            titre: "Faire le caramel",
            texte: "Dans un moule allant au feu, faire fondre le sucre jusqu’à caramel blond puis ajouter le beurre.",
            timer: "10 min"
        },
        {
            titre: "Disposer les pommes",
            texte: "Placer les quartiers serrés dans le caramel, côté bombé vers le bas.",
            timer: "5 min"
        },
        {
            titre: "Cuire les pommes",
            texte: "Laisser compoter 10 minutes à feu doux.",
            timer: "10 min"
        },
        {
            titre: "Ajouter la pâte",
            texte: "Recouvrir avec la pâte, rentrer les bords et piquer légèrement.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 25 minutes à 180°C.",
            timer: "25 min"
        }
    ],

    conseils: [
        "Démouler encore chaud pour éviter que le caramel ne fige.",
        "Ajouter une pointe de fleur de sel dans le caramel pour plus de relief.",
        "Servir avec une crème fraîche épaisse ou une boule de vanille."
    ]
},


'tarte-tatin-nectarines': {
    name:       'Tarte tatin aux nectarines',
    region:     'Languedoc / Provence',
    anecdote:   "Les nectarines de fin août caramélisées à la tarte tatin inversée : le dessert estival par excellence.",
    tags:       ["Été", "Dessert", "Moyen"],
    prep:       "20 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "ou brisée" }
            ]
        },
        {
            groupe: "Caramel & fruits",
            items: [
                { qty: "5", name: "nectarines", note: "mûres mais fermes" },
                { qty: "100 g", name: "sucre", note: "" },
                { qty: "60 g", name: "beurre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les nectarines",
            texte: "Laver, dénoyauter et couper les nectarines en quartiers.",
            timer: "5 min"
        },
        {
            titre: "Faire le caramel",
            texte: "Faire fondre le sucre jusqu’à caramel blond puis ajouter le beurre.",
            timer: "8 min"
        },
        {
            titre: "Disposer les fruits",
            texte: "Placer les quartiers dans le caramel, côté peau vers le bas.",
            timer: "3 min"
        },
        {
            titre: "Ajouter la pâte",
            texte: "Recouvrir avec la pâte et rentrer les bords.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 25 à 30 minutes à 180°C.",
            timer: "30 min"
        }
    ],

    conseils: [
        "Ajouter un peu de romarin frais pour une touche provençale.",
        "Les nectarines rendent moins de jus que les pommes : la tarte sera plus caramélisée.",
        "Servir tiède avec une boule de glace au yaourt ou à la vanille."
    ]
},


'tarte-tomate-chevre': {
    name:       'Tarte à la tomate et au chèvre',
    region:     'Provence',
    anecdote:   "Août est le mois des tomates. Sur une tarte feuilletée moutardée avec chèvre frais, elles sont royales.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "1", name: "pâte feuilletée", note: "pure beurre" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "4", name: "tomates", note: "en rondelles épaisses" },
                { qty: "150 g", name: "chèvre frais", note: "ou bûchette" },
                { qty: "2 c. à soupe", name: "moutarde", note: "douce ou forte" },
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 bouquet", name: "basilic", note: "frais, ciselé" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la pâte",
            texte: "Étaler la pâte feuilletée dans un moule, la piquer et badigeonner de moutarde.",
            timer: "3 min"
        },
        {
            titre: "Disposer les tomates",
            texte: "Répartir les rondelles de tomates, saler légèrement et ajouter l’échalote.",
            timer: "5 min"
        },
        {
            titre: "Ajouter le chèvre",
            texte: "Émietter ou trancher le chèvre et le répartir sur les tomates.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Arroser d’un filet d’huile d’olive et cuire 25 à 30 minutes à 200°C.",
            timer: "30 min"
        },
        {
            titre: "Finaliser",
            texte: "Ajouter le basilic frais juste avant de servir.",
            timer: "1 min"
        }
    ],

    conseils: [
        "Égoutter légèrement les tomates pour éviter de détremper la pâte.",
        "Ajouter un filet de miel pour une touche sucrée-salée provençale.",
        "Remplacer le chèvre par de la feta pour une version plus méditerranéenne."
    ]
},


'tartiflette': {
    name:       'Tartiflette',
    region:     'Savoie',
    anecdote:   'Créée dans les années 1980 pour promouvoir le reblochon, la tartiflette est devenue un incontournable des tables d’hiver.',
    tags:       ["Hiver", "Plat principal", "Convivial"],
    prep:       '20 min',
    cuisson:    '40 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "1 kg", name: "pommes de terre", note: "à chair ferme" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "200 g", name: "lardons fumés", note: "" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "10 cl", name: "vin blanc de Savoie", note: "" }
            ]
        },
        {
            groupe: "Fromage",
            items: [
                { qty: "1", name: "reblochon", note: "entier, coupé en deux dans l’épaisseur" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire les pommes de terre",
            texte: "Cuire les pommes de terre à l’eau ou à la vapeur jusqu’à ce qu’elles soient tendres. Les laisser tiédir puis les couper en rondelles.",
            timer: "20 min"
        },
        {
            titre: "Préparer la garniture",
            texte: "Faire revenir les lardons et les oignons jusqu’à légère coloration. Déglacer avec le vin blanc et laisser réduire.",
            timer: "10 min"
        },
        {
            titre: "Assembler",
            texte: "Dans un plat à gratin, alterner pommes de terre et garniture. Poivrer légèrement. Déposer le reblochon côté croûte vers le haut.",
            timer: "5 min"
        },
        {
            titre: "Gratiner",
            texte: "Enfourner à 200°C jusqu’à ce que le fromage soit fondu et doré.",
            timer: "15 min"
        },
        {
            titre: "Servir",
            texte: "Servir bien chaud avec une salade verte.",
            timer: "—"
        }
    ],

    conseils: [
        "Un vin blanc de Savoie (Apremont, Roussette) dans la garniture donne un parfum authentique.",
        "Ne pas trop saler : les lardons et le reblochon le sont déjà.",
        "Pour une version plus riche, ajouter un peu de crème fraîche."
    ]
},


'terrine-chevreuil': {
    name:       'Terrine de chevreuil aux baies',
    region:     'Ardennes / Bourgogne',
    anecdote:   "La terrine de chevreuil aux baies sauvages de la forêt est l'entrée du chasseur en novembre.",
    tags:       ["Automne", "Hiver", "Entrée", "Moyen"],
    prep:       "20 min",
    cuisson:    "1 h 15",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "500 g", name: "chevreuil", note: "épaule ou cuissot, haché" },
                { qty: "300 g", name: "porc", note: "échine ou poitrine, hachée" },
                { qty: "200 g", name: "foie de volaille", note: "haché" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "10 cl", name: "vin rouge", note: "ou marc de Bourgogne" },
                { qty: "1 c. à soupe", name: "baies de genièvre", note: "écrasées" },
                { qty: "1 c. à café", name: "poivre", note: "" },
                { qty: "1 c. à café", name: "sel", note: "" },
                { qty: "1", name: "œuf", note: "pour lier" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "100 g", name: "lard", note: "fines tranches pour tapisser la terrine" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Mélanger les viandes",
            texte: "Mélanger chevreuil, porc et foie avec oignon, ail, vin, baies, sel et poivre.",
            timer: "10 min"
        },
        {
            titre: "Ajouter l’œuf",
            texte: "Incorporer l’œuf pour lier l’ensemble.",
            timer: "2 min"
        },
        {
            titre: "Monter la terrine",
            texte: "Tapisser la terrine de lard, remplir de farce et tasser légèrement.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire au bain-marie 1 h 15 à 160°C.",
            timer: "1 h 15"
        },
        {
            titre: "Reposer",
            texte: "Laisser refroidir puis reposer 24 h au frais avant dégustation.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques cranberries ou airelles pour une touche acidulée.",
        "Un repos de 48 h développe encore mieux les arômes.",
        "Servir avec cornichons et pain de campagne."
    ]
},

'terrine-courgettes-chevre': {
    name:       'Terrine de courgettes au chèvre',
    region:     'Provence',
    anecdote:   "Les premières courgettes allongées de mai avec du chèvre frais du Luberon font une terrine estivale légère.",
    tags:       ["Printemps", "Été", "Entrée", "Facile"],
    prep:       "20 min",
    cuisson:    "40 min",
    personnes:  6,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "600 g", name: "courgettes", note: "râpées ou en petits dés" },
                { qty: "1", name: "oignon", note: "ciselé" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "200 g", name: "chèvre frais", note: "" },
                { qty: "3", name: "œufs", note: "" },
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "1 c. à soupe", name: "herbes de Provence", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les courgettes",
            texte: "Faire revenir courgettes et oignon 10 minutes pour éliminer l’excès d’eau.",
            timer: "10 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger œufs, crème, chèvre émietté, herbes, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Mélanger légumes et appareil, puis verser dans un moule chemisé.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 35 à 40 minutes à 180°C.",
            timer: "40 min"
        },
        {
            titre: "Refroidir",
            texte: "Laisser refroidir complètement avant de démouler.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques tomates séchées pour une note plus méditerranéenne.",
        "Servir bien frais avec un filet d’huile d’olive citronnée.",
        "La terrine se tient mieux après une nuit au réfrigérateur."
    ]
},


'terrine-de-campagne': {
    name:       'Terrine de campagne',
    region:     'Périgord / Berry',
    anecdote:   "La terrine de campagne maison, aux herbes et aux épices, est la charcuterie de Carême avant les fêtes de printemps.",
    tags:       ["Printemps", "Entrée", "Moyen"],
    prep:       "20 min",
    cuisson:    "1 h 15",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "500 g", name: "échine de porc", note: "hachée" },
                { qty: "300 g", name: "gorge de porc", note: "hachée" },
                { qty: "200 g", name: "foie de porc", note: "haché" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" },
                { qty: "1 c. à café", name: "thym", note: "" },
                { qty: "1 c. à café", name: "poivre", note: "" },
                { qty: "1 c. à soupe", name: "sel", note: "" },
                { qty: "1", name: "œuf", note: "pour lier" },
                { qty: "5 cl", name: "cognac ou armagnac", note: "optionnel" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "100 g", name: "lard", note: "fines tranches pour tapisser la terrine" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Mélanger les viandes",
            texte: "Mélanger échine, gorge et foie avec oignon, ail, herbes, sel, poivre et cognac.",
            timer: "10 min"
        },
        {
            titre: "Ajouter l’œuf",
            texte: "Incorporer l’œuf pour lier la farce.",
            timer: "2 min"
        },
        {
            titre: "Monter la terrine",
            texte: "Tapisser la terrine de lard, remplir de farce et tasser légèrement.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire au bain-marie 1 h 15 à 160°C.",
            timer: "1 h 15"
        },
        {
            titre: "Reposer",
            texte: "Laisser refroidir puis reposer 24 h au frais avant dégustation.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques pistaches pour une version plus festive.",
        "Un repos de 48 h développe encore mieux les arômes.",
        "Servir avec cornichons, moutarde et pain de campagne."
    ]
},


'terrine-foie-gras-bocal': {
    name:       'Terrine de foie gras en bocal',
    region:     'Périgord / Gascogne',
    anecdote:   "La terrine de foie gras stérilisée en bocal se prépare début décembre. Elle sera parfaite à Noël.",
    tags:       ["Hiver", "Entrée", "Moyen"],
    prep:       "20 min",
    cuisson:    "1 h",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Foie gras",
            items: [
                { qty: "500 g", name: "foie gras cru de canard", note: "déveiné" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "7 g", name: "sel", note: "" },
                { qty: "2 g", name: "poivre", note: "" },
                { qty: "1 pincée", name: "sucre", note: "" },
                { qty: "1 c. à soupe", name: "armagnac", note: "ou cognac" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Assaisonner",
            texte: "Assaisonner le foie gras de sel, poivre, sucre et armagnac. Laisser reposer 1 h au frais.",
            timer: "1 h"
        },
        {
            titre: "Remplir les bocaux",
            texte: "Tasser le foie gras dans des bocaux stérilisés en laissant 1 cm de vide.",
            timer: "5 min"
        },
        {
            titre: "Stériliser",
            texte: "Cuire les bocaux 1 h à 100°C dans un stérilisateur ou une grande marmite.",
            timer: "1 h"
        },
        {
            titre: "Refroidir",
            texte: "Laisser refroidir complètement puis stocker dans un endroit frais et sombre.",
            timer: "—"
        }
    ],

    conseils: [
        "Attendre au moins 3 semaines avant dégustation : les arômes se développent.",
        "Utiliser un foie gras de qualité extra pour une texture parfaite.",
        "Servir avec pain brioché et chutney d’oignons."
    ]
},


'terrine-foie-volaille': {
    name:       'Terrine de foie de volaille',
    region:     'Périgord / Lyon',
    anecdote:   "Le foie de volaille en terrine aux herbes fraîches et aux baies est une entrée printanière de choix.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "20 min",
    cuisson:    "45 min",
    personnes:  6,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Foies & viandes",
            items: [
                { qty: "400 g", name: "foies de volaille", note: "parés" },
                { qty: "200 g", name: "chair à saucisse", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" },
                { qty: "1 c. à café", name: "thym", note: "" },
                { qty: "1 c. à café", name: "poivre", note: "" },
                { qty: "1 c. à café", name: "sel", note: "" },
                { qty: "1", name: "œuf", note: "pour lier" },
                { qty: "5 cl", name: "porto ou cognac", note: "optionnel" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "100 g", name: "lard", note: "fines tranches pour tapisser la terrine" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les foies",
            texte: "Couper les foies en morceaux et les mélanger à la chair à saucisse.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Ajouter échalote, ail, herbes, sel, poivre et porto. Incorporer l’œuf.",
            timer: "5 min"
        },
        {
            titre: "Monter la terrine",
            texte: "Tapisser la terrine de lard, remplir de farce et tasser légèrement.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire au bain-marie 45 minutes à 160°C.",
            timer: "45 min"
        },
        {
            titre: "Reposer",
            texte: "Laisser refroidir puis reposer 12 h au frais avant dégustation.",
            timer: "—"
        }
    ],

    conseils: [
        "Ajouter quelques baies roses pour une note florale.",
        "Un repos de 24 h développe mieux les arômes.",
        "Servir avec pain grillé et cornichons."
    ]
},


'terrine-legumes-gelee': {
    name:       'Terrine de légumes en gelée',
    region:     'Provence / Île-de-France',
    anecdote:   "Les légumes de l’été — tomates, poivrons, courgettes — pris en terrine de gelée au basilic pour les buffets froids.",
    tags:       ["Été", "Entrée", "Moyen"],
    prep:       "25 min",
    cuisson:    "10 min",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "courgettes", note: "en dés" },
                { qty: "2", name: "poivrons", note: "rouge et jaune, en lanières" },
                { qty: "2", name: "tomates", note: "épépinées, en quartiers" },
                { qty: "1", name: "oignon rouge", note: "émincé" }
            ]
        },
        {
            groupe: "Gelée",
            items: [
                { qty: "50 cl", name: "bouillon de légumes", note: "" },
                { qty: "4 feuilles", name: "gélatine", note: "ou 2 g d’agar-agar" },
                { qty: "1 c. à soupe", name: "basilic", note: "frais, ciselé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Blanchir courgettes et poivrons 2 minutes. Égoutter et refroidir.",
            timer: "5 min"
        },
        {
            titre: "Préparer la gelée",
            texte: "Chauffer le bouillon, y dissoudre la gélatine ramollie. Ajouter le basilic.",
            timer: "5 min"
        },
        {
            titre: "Monter la terrine",
            texte: "Alterner couches de légumes dans un moule, verser la gelée chaude.",
            timer: "5 min"
        },
        {
            titre: "Prise au froid",
            texte: "Laisser prendre 4 h au réfrigérateur.",
            timer: "4 h"
        }
    ],

    conseils: [
        "Ajouter quelques olives noires pour une note provençale.",
        "Utiliser de l’agar-agar pour une version végétarienne.",
        "Servir bien frais avec une vinaigrette citronnée."
    ]
},


 'terrine-saint-jacques-poireaux': {
    name:       'Terrine de saint-jacques aux poireaux',
    region:     'Bretagne / Normandie',
    anecdote:   "Les Saint-Jacques d'hiver en terrine avec le vert des poireaux : une entrée raffinée pour le réveillon du 31.",
    tags:       ["Hiver", "Entrée", "Moyen"],
    prep:       "20 min",
    cuisson:    "35 min",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "300 g", name: "noix de Saint-Jacques", note: "sans corail" },
                { qty: "200 g", name: "poireaux", note: "blancs émincés" }
            ]
        },
        {
            groupe: "Appareil",
            items: [
                { qty: "2", name: "œufs", note: "" },
                { qty: "20 cl", name: "crème liquide", note: "" },
                { qty: "1 c. à soupe", name: "ciboulette", note: "ciselée" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1 c. à soupe", name: "jus de citron", note: "" },
                { qty: "1 c. à soupe", name: "beurre", note: "pour les poireaux" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les poireaux",
            texte: "Faire fondre les poireaux 10 minutes dans le beurre jusqu'à ce qu'ils soient tendres.",
            timer: "10 min"
        },
        {
            titre: "Préparer les Saint-Jacques",
            texte: "Couper les noix en deux dans l'épaisseur, saler, poivrer et citronner.",
            timer: "5 min"
        },
        {
            titre: "Préparer l’appareil",
            texte: "Mélanger œufs, crème, ciboulette, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Alterner poireaux et Saint-Jacques dans un moule, puis verser l’appareil.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 30 à 35 minutes au bain-marie à 160°C.",
            timer: "35 min"
        }
    ],

    conseils: [
        "Servir avec un coulis de poireaux ou une sauce citronnée.",
        "Ne pas trop cuire les Saint-Jacques pour conserver leur moelleux.",
        "Laisser reposer 2 h au frais pour une meilleure tenue."
    ]
},


'tete-de-veau': {
    name:       'Tête de veau ravigote',
    region:     'Lyon / Paris',
    anecdote:   "Plat canaille par excellence, la tête de veau sauce ravigote est un hommage à la cuisine populaire française.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "30 min",
    cuisson:    "2 h 30",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "1.2 kg", name: "tête de veau roulée", note: "avec langue si possible" }
            ]
        },
        {
            groupe: "Bouillon",
            items: [
                { qty: "2", name: "carottes", note: "" },
                { qty: "1", name: "poireau", note: "" },
                { qty: "1", name: "oignon", note: "piqué de clous de girofle" },
                { qty: "1", name: "bouquet garni", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Sauce ravigote",
            items: [
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1 c. à soupe", name: "câpres", note: "" },
                { qty: "1 c. à soupe", name: "cornichons", note: "hachés" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" },
                { qty: "1 c. à soupe", name: "vinaigre", note: "" },
                { qty: "3 c. à soupe", name: "huile", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Cuire la tête de veau",
            texte: "Plonger la tête dans l’eau froide avec légumes et bouquet garni. Cuire 2 h 30 à frémissement.",
            timer: "2 h 30"
        },
        {
            titre: "Préparer la sauce ravigote",
            texte: "Mélanger échalote, câpres, cornichons, persil, vinaigre et huile.",
            timer: "5 min"
        },
        {
            titre: "Dresser",
            texte: "Égoutter la tête, couper en tranches et servir avec la ravigote.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Servir avec pommes vapeur ou légumes racines.",
        "Ajouter un œuf dur haché dans la ravigote pour une version plus riche.",
        "La tête doit cuire doucement pour rester moelleuse."
    ]
},


 'tian-aubergines': {
    name:       "Tian d'aubergines au parmesan",
    region:     'Provence',
    anecdote:   "L'aubergine d'août, au four à l'huile d'olive et au parmesan, fond et caramélise en un tian savoureux.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "40 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "3", name: "aubergines", note: "en rondelles fines" },
                { qty: "2", name: "tomates", note: "en rondelles" },
                { qty: "2", name: "oignons", note: "émincés" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "60 g", name: "parmesan", note: "râpé" },
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à café", name: "herbes de Provence", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Couper aubergines et tomates en rondelles. Émincer les oignons.",
            timer: "5 min"
        },
        {
            titre: "Assembler",
            texte: "Dans un plat huilé, alterner aubergines, tomates et oignons en couches serrées.",
            timer: "5 min"
        },
        {
            titre: "Assaisonner",
            texte: "Arroser d’huile d’olive, saler, poivrer, parsemer d’herbes et de parmesan.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 35 à 40 minutes à 180°C jusqu’à ce que les légumes soient fondants.",
            timer: "40 min"
        }
    ],

    conseils: [
        "Ajouter un filet de miel pour accentuer la caramélisation.",
        "Remplacer le parmesan par du pecorino pour une version plus corsée.",
        "Servir avec une salade de roquette citronnée."
    ]
},


'tian-provencal': {
    name:       'Tian provençal',
    region:     'Provence',
    anecdote:   "Le tian de légumes d'été superposés en spirale et cuits au four à l'huile d'olive est un plat aussi beau que bon.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "20 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "aubergines", note: "en rondelles" },
                { qty: "2", name: "courgettes", note: "en rondelles" },
                { qty: "3", name: "tomates", note: "en rondelles" },
                { qty: "1", name: "oignon", note: "émincé" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "3 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à café", name: "herbes de Provence", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les légumes",
            texte: "Couper tous les légumes en rondelles régulières.",
            timer: "10 min"
        },
        {
            titre: "Assembler en spirale",
            texte: "Dans un plat huilé, disposer les rondelles en spirale : aubergine, courgette, tomate, puis recommencer.",
            timer: "10 min"
        },
        {
            titre: "Assaisonner",
            texte: "Arroser d’huile d’olive, saler, poivrer et parsemer d’herbes.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 40 à 45 minutes à 180°C.",
            timer: "45 min"
        }
    ],

    conseils: [
        "Ajouter quelques gousses d’ail entières pour parfumer.",
        "Parsemer de parmesan ou de feta avant cuisson pour une version plus gourmande.",
        "Idéal en accompagnement d’un poisson grillé ou d’un poulet rôti."
    ]
},


'tomates-farcies': {
    name:       'Tomates farcies à la provençale',
    region:     'Provence',
    anecdote:   "Les tomates farcies au veau haché, ail, persil et riz cuisent lentement au four : le plat de l'été par excellence.",
    tags:       ["Été", "Plat principal", "Facile"],
    prep:       "15 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Légumes",
            items: [
                { qty: "6", name: "grosses tomates", note: "bien mûres" }
            ]
        },
        {
            groupe: "Farce",
            items: [
                { qty: "300 g", name: "veau haché", note: "" },
                { qty: "200 g", name: "chair à saucisse", note: "" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "2 c. à soupe", name: "persil", note: "haché" },
                { qty: "2 c. à soupe", name: "riz cru", note: "pour absorber le jus" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "2 c. à soupe", name: "huile d’olive", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les tomates",
            texte: "Couper un chapeau, vider les tomates et conserver la pulpe.",
            timer: "5 min"
        },
        {
            titre: "Préparer la farce",
            texte: "Mélanger viandes, oignon, ail, persil, riz, pulpe de tomate, sel et poivre.",
            timer: "5 min"
        },
        {
            titre: "Farcir",
            texte: "Remplir les tomates, replacer les chapeaux et arroser d’huile d’olive.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 40 à 45 minutes à 180°C.",
            timer: "45 min"
        }
    ],

    conseils: [
        "Ajouter un peu de thym pour renforcer la note provençale.",
        "Le riz absorbe le jus et évite que la farce ne soit trop humide.",
        "Servir avec un riz pilaf ou une salade verte."
    ]
},

'tourte-perdrix-cepes': {
    name:       'Tourte de perdrix aux cèpes',
    region:     'Languedoc / Ariège',
    anecdote:   "La perdrix rouge de montagne en tourte avec les cèpes de l'automne pyrénéen : un plat de chasse raffiné.",
    tags:       ["Automne", "Plat principal", "Moyen"],
    prep:       "25 min",
    cuisson:    "45 min",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Pâte",
            items: [
                { qty: "2", name: "pâtes feuilletées", note: "dessus + dessous" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "2", name: "perdrix", note: "désossées et coupées en morceaux" },
                { qty: "200 g", name: "cèpes", note: "frais ou surgelés" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "10 cl", name: "vin blanc", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Dorure",
            items: [
                { qty: "1", name: "jaune d’œuf", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la garniture",
            texte: "Faire revenir échalote, cèpes et morceaux de perdrix 10 minutes. Déglacer au vin blanc, ajouter la crème et réduire.",
            timer: "15 min"
        },
        {
            titre: "Monter la tourte",
            texte: "Étaler une pâte dans un moule, garnir du mélange, recouvrir de la seconde pâte et sceller les bords.",
            timer: "5 min"
        },
        {
            titre: "Dorer",
            texte: "Badigeonner de jaune d’œuf.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 35 à 40 minutes à 180°C.",
            timer: "40 min"
        }
    ],

    conseils: [
        "Ajouter quelques marrons pour une version encore plus automnale.",
        "Les cèpes séchés réhydratés fonctionnent très bien.",
        "Servir avec une salade de mâche ou des légumes rôtis."
    ]
},

'tourte-trois-viandes': {
    name:       'Tourte aux trois viandes',
    region:     'Lorraine',
    anecdote:   "Ce jour ne vient qu'une fois tous les 4 ans. L'occasion d'une tourte festive aux viandes de Lorraine.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "25 min",
    cuisson:    "45 min",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viandes",
            items: [
                { qty: "300 g", name: "porc", note: "échine hachée" },
                { qty: "300 g", name: "veau", note: "haché" },
                { qty: "200 g", name: "volaille", note: "poulet ou dinde haché" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" },
                { qty: "1 c. à café", name: "thym", note: "" },
                { qty: "10 cl", name: "vin blanc", note: "pour parfumer" },
                { qty: "1", name: "œuf", note: "pour lier" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Pâte",
            items: [
                { qty: "2", name: "pâtes feuilletées", note: "dessus + dessous" }
            ]
        },
        {
            groupe: "Dorure",
            items: [
                { qty: "1", name: "jaune d’œuf", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la farce",
            texte: "Mélanger les trois viandes avec oignon, ail, persil, thym, vin blanc, œuf, sel et poivre.",
            timer: "10 min"
        },
        {
            titre: "Monter la tourte",
            texte: "Étaler une pâte dans un moule, garnir de farce, recouvrir de la seconde pâte et sceller les bords.",
            timer: "10 min"
        },
        {
            titre: "Dorer",
            texte: "Badigeonner de jaune d’œuf.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 40 à 45 minutes à 180°C.",
            timer: "45 min"
        }
    ],

    conseils: [
        "Ajouter quelques champignons sautés pour une version plus forestière.",
        "Un peu de muscade renforce la note lorraine.",
        "Servir avec une salade verte ou des pommes vapeur."
    ]
},


'tourte-viande-champignons': {
    name:       'Tourte à la viande et aux champignons',
    region:     'Lorraine / Alsace',
    anecdote:   "La tourte lorraine à la viande de porc marinée dans le vin blanc, aux champignons et aux herbes.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "25 min",
    cuisson:    "45 min",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "500 g", name: "porc", note: "échine coupée en petits dés" },
                { qty: "10 cl", name: "vin blanc", note: "pour la marinade" }
            ]
        },
        {
            groupe: "Champignons",
            items: [
                { qty: "200 g", name: "champignons de Paris", note: "émincés" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "2", name: "gousses d’ail", note: "hachées" },
                { qty: "1 c. à soupe", name: "persil", note: "haché" },
                { qty: "1 c. à café", name: "thym", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Pâte",
            items: [
                { qty: "2", name: "pâtes feuilletées", note: "dessus + dessous" }
            ]
        },
        {
            groupe: "Dorure",
            items: [
                { qty: "1", name: "jaune d’œuf", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Mariner la viande",
            texte: "Mélanger le porc avec vin blanc, sel, poivre, ail et oignon. Laisser reposer 1 h.",
            timer: "1 h"
        },
        {
            titre: "Préparer la garniture",
            texte: "Faire revenir les champignons puis les mélanger à la viande marinée.",
            timer: "10 min"
        },
        {
            titre: "Monter la tourte",
            texte: "Étaler une pâte, garnir du mélange, recouvrir de la seconde pâte et sceller.",
            timer: "10 min"
        },
        {
            titre: "Dorer",
            texte: "Badigeonner de jaune d’œuf.",
            timer: "2 min"
        },
        {
            titre: "Cuire",
            texte: "Cuire 35 à 45 minutes à 180°C.",
            timer: "45 min"
        }
    ],

    conseils: [
        "Ajouter quelques cèpes pour une version plus parfumée.",
        "La marinade au vin blanc est essentielle pour la saveur lorraine.",
        "Servir avec une salade de mâche ou des légumes rôtis."
    ]
},


'tripes-mode-caen': {
    name:       'Tripes à la mode de Caen',
    region:     'Normandie',
    anecdote:   "Pour la Saint-Antoine, patron des charcutiers, les tripes normandes mijotent avec cidre et calvados.",
    tags:       ["Hiver", "Plat principal", "Long"],
    prep:       "30 min",
    cuisson:    "5 h",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Tripes",
            items: [
                { qty: "1.5 kg", name: "tripes de bœuf", note: "panses, feuillet, bonnet" },
                { qty: "500 g", name: "pied de veau", note: "coupé en deux" }
            ]
        },
        {
            groupe: "Légumes & aromates",
            items: [
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "3", name: "gousses d’ail", note: "" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "25 cl", name: "cidre brut", note: "" },
                { qty: "5 cl", name: "calvados", note: "" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les tripes",
            texte: "Rincer les tripes et les couper en larges bandes.",
            timer: "10 min"
        },
        {
            titre: "Assembler dans la terrine",
            texte: "Alterner tripes, pied de veau, légumes, bouquet garni, sel et poivre.",
            timer: "10 min"
        },
        {
            titre: "Mouiller",
            texte: "Verser cidre et calvados, compléter à hauteur avec de l’eau.",
            timer: "5 min"
        },
        {
            titre: "Cuire longuement",
            texte: "Couvrir et cuire 5 h au four à 150°C.",
            timer: "5 h"
        }
    ],

    conseils: [
        "Les tripes doivent cuire très longtemps pour devenir fondantes.",
        "Le pied de veau apporte la gélatine indispensable à la sauce.",
        "Servir avec des pommes vapeur ou du pain de campagne."
    ]
},


'tripous-aveyron': {
    name:       'Haggis écossais (influence)',
    region:     'Écosse / Aveyron',
    anecdote:   "Pour la Saint-Burns, on cuisine en France les abats façon tripous de l'Aveyron, cousins du haggis.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "30 min",
    cuisson:    "3 h",
    personnes:  6,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Abats & viandes",
            items: [
                { qty: "300 g", name: "foie de mouton", note: "haché" },
                { qty: "300 g", name: "cœur de mouton", note: "haché" },
                { qty: "300 g", name: "poumons de mouton", note: "hachés" }
            ]
        },
        {
            groupe: "Céréales & liants",
            items: [
                { qty: "150 g", name: "flocons d’avoine", note: "grillés à sec" },
                { qty: "100 g", name: "suif de bœuf", note: "haché" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "1 c. à café", name: "poivre", note: "" },
                { qty: "1 c. à café", name: "sel", note: "" },
                { qty: "1 c. à café", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Enveloppe",
            items: [
                { qty: "1", name: "panse de mouton", note: "lavée et retournée" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer la farce",
            texte: "Mélanger abats hachés, avoine grillée, suif, oignon et épices.",
            timer: "10 min"
        },
        {
            titre: "Remplir la panse",
            texte: "Garnir la panse aux trois quarts et la ficeler.",
            timer: "10 min"
        },
        {
            titre: "Cuire",
            texte: "Plonger dans l’eau frémissante et cuire 2 h 30 à 3 h.",
            timer: "3 h"
        }
    ],

    conseils: [
        "Percer légèrement la panse pour éviter qu’elle n’éclate.",
        "Servir avec purée de navets et pommes de terre.",
        "Les flocons d’avoine grillés donnent la texture typique du haggis."
    ]
},


'truite-aux-amandes': {
    name:       'Filet de truite aux amandes',
    region:     'Savoie / Auvergne',
    anecdote:   'La truite meunière aux amandes dorées est un grand classique des auberges de montagne, simple et délicat.',
    tags:       ["Printemps", "Été", "Plat principal", "Facile"],
    prep:       '10 min',
    cuisson:    '15 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Poisson",
            items: [
                { qty: "4", name: "filets de truite", note: "avec peau" },
                { qty: "40 g", name: "farine", note: "pour fariner les filets" }
            ]
        },
        {
            groupe: "Amandes & beurre",
            items: [
                { qty: "60 g", name: "amandes effilées", note: "" },
                { qty: "50 g", name: "beurre", note: "pour la cuisson" },
                { qty: "20 g", name: "beurre", note: "pour les amandes" }
            ]
        },
        {
            groupe: "Assaisonnement & accompagnement",
            items: [
                { qty: "1", name: "citron", note: "en quartiers" },
                { qty: "", name: "sel & poivre", note: "à ajuster" },
                { qty: "1 poignée", name: "persil", note: "ciselé" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les filets",
            texte: "Saler et poivrer les filets de truite. Les fariner légèrement des deux côtés.",
            timer: "3 min"
        },
        {
            titre: "Cuire la truite",
            texte: "Faire fondre le beurre dans une poêle. Cuire les filets côté peau d’abord, puis retourner délicatement. Retirer quand la chair est juste cuite.",
            timer: "8 min"
        },
        {
            titre: "Dorer les amandes",
            texte: "Dans une petite poêle, faire fondre le beurre et ajouter les amandes effilées. Les faire dorer en remuant.",
            timer: "3 min"
        },
        {
            titre: "Assembler",
            texte: "Déposer les filets dans les assiettes, napper de beurre aux amandes et parsemer de persil.",
            timer: "1 min"
        },
        {
            titre: "Servir",
            texte: "Servir immédiatement avec du riz, des pommes vapeur ou des légumes verts.",
            timer: "—"
        }
    ],

    conseils: [
        "Ne pas surcuire la truite : elle doit rester moelleuse.",
        "Ajouter un filet de citron juste avant de servir pour réveiller les saveurs.",
        "Les amandes doivent être dorées mais jamais brûlées."
    ]
},


'tzatziki': {
    name:       'Tzatziki et crudités',
    region:     'Provence / Méditerranée',
    anecdote:   "Le concombre mariné au yaourt grec et à l'ail, servi avec des crudités du jardin : l'apéritif de l'été.",
    tags:       ["Été", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "0 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Tzatziki",
            items: [
                { qty: "1", name: "concombre", note: "râpé et égoutté" },
                { qty: "250 g", name: "yaourt grec", note: "" },
                { qty: "2", name: "gousses d’ail", note: "écrasées" },
                { qty: "1 c. à soupe", name: "huile d’olive", note: "" },
                { qty: "1 c. à soupe", name: "aneth", note: "ou menthe, ciselée" },
                { qty: "1 c. à café", name: "jus de citron", note: "" },
                { qty: "", name: "sel & poivre", note: "" }
            ]
        },
        {
            groupe: "Crudités",
            items: [
                { qty: "2", name: "carottes", note: "en bâtonnets" },
                { qty: "1", name: "poivron", note: "en lanières" },
                { qty: "1", name: "concombre", note: "en rondelles" },
                { qty: "8", name: "radis", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer le concombre",
            texte: "Râper le concombre, saler légèrement et laisser dégorger 10 minutes. Presser pour retirer l’eau.",
            timer: "10 min"
        },
        {
            titre: "Mélanger le tzatziki",
            texte: "Mélanger yaourt, ail, huile, citron, herbes, sel et poivre. Ajouter le concombre.",
            timer: "5 min"
        },
        {
            titre: "Servir",
            texte: "Réserver au frais 30 minutes et servir avec les crudités.",
            timer: "30 min"
        }
    ],

    conseils: [
        "Plus le concombre est égoutté, plus le tzatziki sera onctueux.",
        "Ajouter un filet d’huile d’olive juste avant de servir.",
        "Parfait avec du pain pita grillé."
    ]
},


'veau-marengo': {
    name:       'Sauté de veau Marengo',
    region:     'Provence / Empire',
    anecdote:   "Selon la légende, ce ragoût fut improvisé par le cuisinier de Napoléon après la bataille de Marengo en 1800.",
    tags:       ["Hiver", "Plat principal", "Moyen"],
    prep:       "20 min",
    cuisson:    "1 h 20",
    personnes:  4,
    difficulte: "Moyen",

    ingredients: [
        {
            groupe: "Viande",
            items: [
                { qty: "800 g", name: "veau", note: "épaule en morceaux" }
            ]
        },
        {
            groupe: "Légumes",
            items: [
                { qty: "2", name: "oignons", note: "émincés" },
                { qty: "2", name: "carottes", note: "en rondelles" },
                { qty: "2", name: "gousses d’ail", note: "hachées" }
            ]
        },
        {
            groupe: "Sauce",
            items: [
                { qty: "20 cl", name: "vin blanc", note: "" },
                { qty: "20 cl", name: "bouillon", note: "" },
                { qty: "400 g", name: "tomates concassées", note: "" },
                { qty: "1", name: "bouquet garni", note: "" }
            ]
        },
        {
            groupe: "Garniture",
            items: [
                { qty: "150 g", name: "champignons de Paris", note: "émincés" },
                { qty: "8", name: "olives noires", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Saisir la viande",
            texte: "Faire dorer les morceaux de veau dans un peu d’huile.",
            timer: "10 min"
        },
        {
            titre: "Ajouter les légumes",
            texte: "Ajouter oignons, carottes et ail. Faire revenir 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Déglacer au vin blanc, ajouter bouillon, tomates et bouquet garni.",
            timer: "5 min"
        },
        {
            titre: "Mijoter",
            texte: "Couvrir et cuire 1 h à feu doux.",
            timer: "1 h"
        },
        {
            titre: "Ajouter la garniture",
            texte: "Ajouter champignons et olives, cuire encore 10 minutes.",
            timer: "10 min"
        }
    ],

    conseils: [
        "Servir avec des pâtes fraîches ou du riz.",
        "Un trait de jus de citron en fin de cuisson réveille la sauce.",
        "Le plat est encore meilleur réchauffé le lendemain."
    ]
},


'veloute-cepes-seches-vin-jaune': {
    name:       'Velouté de cèpes séchés au vin jaune',
    region:     'Franche-Comté',
    anecdote:   "Les cèpes séchés de l'automne réhydratés, liés au vin jaune du Jura, font un velouté intense et parfumé.",
    tags:       ["Hiver", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "30 g", name: "cèpes séchés", note: "réhydratés 20 min" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "30 g", name: "beurre", note: "" },
                { qty: "75 cl", name: "bouillon de volaille", note: "" },
                { qty: "10 cl", name: "vin jaune", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "1 poignée", name: "croûtons", note: "maison" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Réhydrater les cèpes",
            texte: "Faire tremper les cèpes 20 minutes dans de l’eau tiède. Égoutter en conservant l’eau.",
            timer: "20 min"
        },
        {
            titre: "Faire revenir",
            texte: "Faire fondre le beurre, ajouter échalote et cèpes, faire revenir 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Mouiller",
            texte: "Ajouter bouillon et un peu de l’eau de trempage filtrée. Cuire 15 minutes.",
            timer: "15 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement puis ajouter le vin jaune et la crème.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Le vin jaune doit être ajouté en fin de cuisson pour préserver son parfum.",
        "Un filet d’huile de noix sublime le velouté.",
        "Servir avec croûtons et quelques cèpes poêlés."
    ]
},


'veloute-champignons-sauvages': {
    name:       'Velouté de champignons sauvages',
    region:     'Périgord / Auvergne',
    anecdote:   "Les premières pluies de septembre font sortir les cèpes et les girolles. Un velouté crémeux en capture l'essence.",
    tags:       ["Automne", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "400 g", name: "champignons sauvages", note: "cèpes, girolles, trompettes…" },
                { qty: "1", name: "pomme de terre", note: "pour la texture" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "30 g", name: "beurre", note: "" },
                { qty: "75 cl", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "" },
                { qty: "1 poignée", name: "croûtons", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Préparer les champignons",
            texte: "Nettoyer les champignons sans les laver. Couper les plus gros.",
            timer: "5 min"
        },
        {
            titre: "Faire revenir",
            texte: "Faire fondre le beurre, ajouter échalote, champignons et pomme de terre. Faire revenir 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter le bouillon et cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème et rectifier l’assaisonnement.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter quelques champignons poêlés en topping pour la texture.",
        "Un trait d’huile de noisette renforce la note forestière.",
        "Servir avec du pain grillé frotté à l’ail."
    ]
},


'veloute-chataignes-foie-gras': {
    name:       'Velouté de châtaignes au foie gras',
    region:     'Périgord / Ardèche',
    anecdote:   'Les châtaignes d’automne, mixées en velouté et servies avec quelques dés de foie gras, offrent un luxe simple et chaleureux du Sud-Ouest.',
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '25 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base du velouté",
            items: [
                { qty: "400 g", name: "châtaignes cuites", note: "sous vide ou en bocal" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "1", name: "gousse d’ail", note: "" },
                { qty: "20 g", name: "beurre", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "60 cl", name: "bouillon de volaille", note: "" },
                { qty: "10 cl", name: "crème fraîche", note: "liquide" }
            ]
        },
        {
            groupe: "Foie gras",
            items: [
                { qty: "120 g", name: "foie gras de canard mi-cuit", note: "en petits dés" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" },
                { qty: "1 pincée", name: "noix de muscade", note: "optionnelle" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir les aromates",
            texte: "Faire fondre le beurre dans une casserole. Ajouter oignon, échalote et ail, puis faire suer sans coloration.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les châtaignes",
            texte: "Incorporer les châtaignes et mélanger pour les enrober de beurre et d’aromates.",
            timer: "2 min"
        },
        {
            titre: "Mouiller et cuire",
            texte: "Verser le bouillon de volaille, saler légèrement et laisser mijoter jusqu’à ce que les châtaignes soient très tendres.",
            timer: "15 min"
        },
        {
            titre: "Mixer le velouté",
            texte: "Mixer finement, ajouter la crème et rectifier l’assaisonnement (sel, poivre, muscade).",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Verser le velouté dans des bols et ajouter quelques dés de foie gras au centre. Servir immédiatement.",
            timer: "—"
        }
    ],

    conseils: [
        "Pour une version plus festive, ajouter un filet d’huile de truffe juste avant de servir.",
        "Le foie gras doit être ajouté au dernier moment pour fondre légèrement sans disparaître.",
        "Un peu de céleri branche dans la cuisson apporte une note végétale très agréable."
    ]
},

'veloute-lentilles-noires': {
    name:       'Velouté de lentilles noires (beluga) au foie gras',
    region:     'Périgord / Berry',
    anecdote:   'Les lentilles beluga, surnommées “caviar végétal”, donnent un velouté profond et élégant, sublimé par quelques tranches de foie gras mi-cuit.',
    tags:       ["Automne", "Hiver", "Entrée", "Facile"],
    prep:       '15 min',
    cuisson:    '30 min',
    personnes:  4,
    difficulte: 'Facile',

    ingredients: [
        {
            groupe: "Base du velouté",
            items: [
                { qty: "200 g", name: "lentilles noires beluga", note: "rincées" },
                { qty: "1", name: "oignon", note: "émincé" },
                { qty: "1", name: "carotte", note: "en dés" },
                { qty: "1", name: "gousse d’ail", note: "" },
                { qty: "20 g", name: "beurre", note: "" }
            ]
        },
        {
            groupe: "Liquides",
            items: [
                { qty: "80 cl", name: "bouillon de volaille", note: "" },
                { qty: "10 cl", name: "crème fraîche", note: "liquide" }
            ]
        },
        {
            groupe: "Foie gras",
            items: [
                { qty: "120 g", name: "foie gras de canard mi-cuit", note: "en dés ou fines tranches" }
            ]
        },
        {
            groupe: "Assaisonnement",
            items: [
                { qty: "", name: "sel & poivre", note: "à ajuster" },
                { qty: "1 pincée", name: "piment d’Espelette", note: "optionnel" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir les aromates",
            texte: "Faire fondre le beurre dans une casserole. Ajouter oignon, carotte et ail, puis faire suer sans coloration.",
            timer: "5 min"
        },
        {
            titre: "Ajouter les lentilles",
            texte: "Incorporer les lentilles beluga et mélanger pour les enrober.",
            timer: "2 min"
        },
        {
            titre: "Cuire le velouté",
            texte: "Verser le bouillon, saler légèrement et laisser mijoter jusqu’à ce que les lentilles soient tendres.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement avec la crème. Ajuster la texture avec un peu de bouillon si nécessaire. Rectifier l’assaisonnement.",
            timer: "3 min"
        },
        {
            titre: "Servir",
            texte: "Verser dans des bols et ajouter quelques dés ou tranches de foie gras. Saupoudrer de piment d’Espelette.",
            timer: "—"
        }
    ],

    conseils: [
        "Le velouté doit rester épais et soyeux : ajouter la crème en fin de mixage pour plus d’onctuosité.",
        "Le foie gras doit être ajouté au dernier moment pour fondre légèrement sans disparaître.",
        "Un filet d’huile de noisette apporte une note très élégante."
    ]
},


'veloute-oseille': {
    name:       "Velouté d'oseille",
    region:     "Île-de-France / Berry",
    anecdote:   "L'oseille pousse généreusement en avril. Ce velouté acide et crémeux est l'une des grandes soupes françaises.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "200 g", name: "oseille fraîche", note: "équeutée" },
                { qty: "1", name: "pomme de terre", note: "pour la texture" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "75 cl", name: "bouillon de volaille ou légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnel" },
                { qty: "1 poignée", name: "croûtons", note: "maison" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire fondre l’oseille",
            texte: "Faire revenir l’oignon dans le beurre, ajouter l’oseille et laisser fondre 2 minutes.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter la pomme de terre en dés et le bouillon. Cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème si désiré et rectifier l’assaisonnement.",
            timer: "5 min"
        }
    ],

    conseils: [
        "L’oseille étant acide, la crème adoucit le velouté.",
        "Ajouter quelques feuilles d’oseille fraîches au moment de servir.",
        "Servir avec des croûtons frottés à l’ail."
    ]
},


'veloute-panais-epices': {
    name:       "Velouté de panais aux épices",
    region:     "Nord / Bretagne",
    anecdote:   "Le panais, légume oublié reparu dans les potagers, fait un velouté doux et sucré aux épices douces.",
    tags:       ["Hiver", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "500 g", name: "panais", note: "épluchés et en morceaux" },
                { qty: "1", name: "pomme de terre", note: "" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "75 cl", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Épices",
            items: [
                { qty: "1/2 c. à café", name: "cannelle", note: "" },
                { qty: "1/2 c. à café", name: "cumin", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnel" },
                { qty: "1 poignée", name: "croûtons", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire fondre le beurre, ajouter oignon, panais et pomme de terre. Faire revenir 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter le bouillon et les épices. Cuire 20 à 25 minutes.",
            timer: "25 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème et rectifier l’assaisonnement.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Les épices douces subliment la saveur naturellement sucrée du panais.",
        "Ajouter un filet d’huile de noisette pour une note gourmande.",
        "Servir avec des graines torréfiées (courge, tournesol)."
    ]
},

'veloute-petits-pois': {
    name:       'Velouté de petits pois à la menthe',
    region:     'France entière',
    anecdote:   "Le 8 mai est férié : les petits pois du jardin arrivent ! Ce velouté vert vif est le symbole du printemps en force.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "15 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "500 g", name: "petits pois frais ou surgelés", note: "" },
                { qty: "1", name: "pomme de terre", note: "pour la texture" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "75 cl", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "6 feuilles", name: "menthe fraîche", note: "" },
                { qty: "10 cl", name: "crème fraîche", note: "optionnel" },
                { qty: "1 poignée", name: "croûtons", note: "maison" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire suer l’oignon dans un peu de beurre sans coloration.",
            timer: "3 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter petits pois, pomme de terre et bouillon. Cuire 12 minutes.",
            timer: "12 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement avec la menthe. Ajouter la crème si désiré.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Ajouter la menthe au dernier moment pour préserver son parfum.",
        "Un filet de citron réveille la couleur et la saveur.",
        "Servir avec des croûtons ou un trait d’huile d’olive."
    ]
},


'veloute-petits-pois-lard': {
    name:       'Velouté de petits pois au lard',
    region:     'Île-de-France',
    anecdote:   "Les petits pois d'été dans leurs cosses, fraîchement écossés, font la meilleure soupe verte qui soit.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "10 min",
    cuisson:    "20 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "500 g", name: "petits pois frais ou surgelés", note: "" },
                { qty: "1", name: "pomme de terre", note: "" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "75 cl", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Lard",
            items: [
                { qty: "100 g", name: "lardons fumés", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnel" },
                { qty: "1 poignée", name: "croûtons", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir le lard",
            texte: "Faire dorer les lardons dans une casserole. Ajouter l’oignon et faire suer.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter petits pois, pomme de terre et bouillon. Cuire 15 minutes.",
            timer: "15 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement. Ajouter la crème si désiré.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Réserver quelques lardons grillés pour le service.",
        "Un peu de ciboulette fraîche apporte une belle note herbacée.",
        "Servir avec du pain grillé frotté à l’ail."
    ]
},


'veloute-potimarron-epices': {
    name:       'Velouté de potimarron aux épices douces',
    region:     'France entière',
    anecdote:   "Le potimarron, doux et noisette, se récolte en septembre. Ce velouté épicé au cumin réchauffe les soirées fraîches.",
    tags:       ["Automne", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "1", name: "potimarron", note: "non épluché, épépiné, en cubes" },
                { qty: "1", name: "pomme de terre", note: "pour la texture" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "75 cl", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Épices",
            items: [
                { qty: "1/2 c. à café", name: "cumin", note: "" },
                { qty: "1/2 c. à café", name: "cannelle", note: "" },
                { qty: "1 pincée", name: "muscade", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnel" },
                { qty: "1 poignée", name: "croûtons", note: "maison" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire fondre le beurre, ajouter oignon, potimarron et pomme de terre. Faire revenir 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter le bouillon et les épices. Cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème et rectifier l’assaisonnement.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Le potimarron n’a pas besoin d’être épluché : la peau donne du goût.",
        "Un filet d’huile de noisette sublime le velouté.",
        "Ajouter quelques graines torréfiées pour la texture."
    ]
},


'veloute-topinambour': {
    name:       'Velouté de topinambour',
    region:     'Île-de-France / Nord',
    anecdote:   "Le topinambour retrouve grâce en cuisine moderne. Ce légume oublié fait un velouté délicat au goût d'artichaut.",
    tags:       ["Hiver", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "25 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "600 g", name: "topinambours", note: "épluchés et en morceaux" },
                { qty: "1", name: "pomme de terre", note: "" },
                { qty: "1", name: "échalote", note: "ciselée" },
                { qty: "20 g", name: "beurre", note: "" },
                { qty: "75 cl", name: "bouillon de légumes", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "10 cl", name: "crème fraîche", note: "optionnel" },
                { qty: "1 poignée", name: "croûtons", note: "" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire fondre le beurre, ajouter échalote, topinambours et pomme de terre. Faire revenir 5 minutes.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter le bouillon et cuire 20 minutes.",
            timer: "20 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème et rectifier l’assaisonnement.",
            timer: "5 min"
        }
    ],

    conseils: [
        "Un filet d’huile de truffe ou quelques copeaux de truffe subliment ce velouté.",
        "Les topinambours s’oxydent vite : les plonger dans de l’eau citronnée après épluchage.",
        "Servir avec des noisettes torréfiées."
    ]
},


'vichyssoise': {
    name:       'Vichyssoise tiède',
    region:     'Île-de-France / Val de Loire',
    anecdote:   "La vichyssoise, soupe de poireaux et pommes de terre, se sert tiède à l'équinoxe de printemps.",
    tags:       ["Printemps", "Entrée", "Facile"],
    prep:       "15 min",
    cuisson:    "30 min",
    personnes:  4,
    difficulte: "Facile",

    ingredients: [
        {
            groupe: "Base",
            items: [
                { qty: "3", name: "poireaux", note: "blancs émincés" },
                { qty: "3", name: "pommes de terre", note: "en dés" },
                { qty: "1", name: "oignon", note: "ciselé" },
                { qty: "30 g", name: "beurre", note: "" },
                { qty: "75 cl", name: "bouillon de volaille", note: "" }
            ]
        },
        {
            groupe: "Finition",
            items: [
                { qty: "15 cl", name: "crème liquide", note: "" },
                { qty: "1 pincée", name: "ciboulette", note: "ciselée" }
            ]
        }
    ],

    etapes: [
        {
            titre: "Faire revenir",
            texte: "Faire fondre le beurre, ajouter oignon et poireaux. Cuire 5 minutes sans coloration.",
            timer: "5 min"
        },
        {
            titre: "Cuire",
            texte: "Ajouter pommes de terre et bouillon. Cuire 20 à 25 minutes à feu doux.",
            timer: "25 min"
        },
        {
            titre: "Mixer",
            texte: "Mixer finement, ajouter la crème et rectifier l’assaisonnement.",
            timer: "5 min"
        },
        {
            titre: "Servir tiède",
            texte: "Laisser tiédir avant de servir, parsemer de ciboulette.",
            timer: "—"
        }
    ],

    conseils: [
        "La vichyssoise se sert traditionnellement tiède, jamais brûlante.",
        "Pour une texture très lisse, passer au chinois après mixage.",
        "Un filet d’huile d’olive ou quelques croûtons apportent du contraste."
    ]
},
}

// Accès global
if (typeof module !== 'undefined') module.exports = RECETTES;