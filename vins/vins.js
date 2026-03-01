const Vins = {

    //"slug-du-vin": {

    // --- Synchronisation avec l'almanach ---
    // date: "",               // Format "MM-JJ" (ex : "01-03")

    // --- Identité du vin ---
    // name: "",               // Nom du vin (ex : "Cahors")
    // region: "",             // Région viticole (ex : "Sud-Ouest")
    // aoc: "",                // Appellation exacte (ex : "AOC Cahors")
    // cepage: "",             // Cépage ou assemblage (ex : "Malbec")
    // terroir: "",            // Sol, exposition, altitude, climat

    // --- Analyse visuelle ---
    // robe: "",               // Couleur, intensité, limpidité

    // --- Analyse olfactive ---
    // nez: "",                // Première impression olfactive
    // aromes: "",             // Arômes précis

    // --- Analyse gustative ---
    // bouche: "",             // Attaque, texture, équilibre
    // longueur: "",           // Courte / moyenne / longue / très longue
    // corps: "",              // Léger / moyen / ample / corsé
    // acidite: "",            // Faible / moyenne / marquée
    // tanins: "",             // Souples / fondus / présents / puissants (si rouge)

    // --- Informations œnologiques ---
    // millesimes: [],         // Millésimes recommandés
    // garde: "",              // Durée de garde conseillée
    // service: "",            // Température, carafage
    // alcool: "",             // Degré alcoolique
    // prix: "",               // Fourchette indicative

    // --- Accords mets-vins ---
    // accords: [],            // Liste de slugs de plats compatibles

    // --- Domaine ---
    // domaine: "",            // Nom du domaine ou château
    // proprietaire: "",       // Nom du propriétaire ou famille
    // anecdote: "",           // Petite histoire réelle sur le domaine
    // photo: "",              // Chemin vers l’image de la bouteille

    // --- Notes et distinctions ---
    // note_parker: "",        // Note Parker (ex : "92/100")
    // note_hachette: ""       // Note Hachette (ex : "★★★ Coup de cœur")
 // }

//};
"cahors-malbec": {

    date: "01-01",

    name: "Cahors",
    region: "Sud-Ouest",
    aoc: "AOC Cahors",
    cepage: "Malbec",
    terroir: "Terrasses du Lot, sols argilo-calcaires et graves ferrugineuses",

    robe: "Rouge profond, presque noir",
    nez: "Fruits noirs mûrs, violette, notes épicées",
    aromes: "Mûre, prune, cassis, réglisse, poivre noir",

    bouche: "Puissante, charpentée, tannique mais équilibrée",
    longueur: "Longue et persistante",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents et serrés",

    millesimes: ["2016", "2018", "2020"],
    garde: "5 à 12 ans",
    service: "16–18°C, carafage 1h conseillé",
    alcool: "13% vol",
    prix: "8–15 €",

    accords: ["lentilles-au-lard", "cassoulet", "boeuf-bourguignon"],

    domaine: "Château du Cèdre",
    proprietaire: "Famille Verhaeghe",
    anecdote: "Référence du Cahors moderne, le Château du Cèdre a contribué à hisser le Malbec local au niveau des grands vins du Sud-Ouest.",
    photo: "images/vins/cahors-malbec.jpg",

    note_parker: "90–94/100 selon les millésimes",
    note_hachette: "★★★ régulièrement distingué"
},
"bourgogne-pinot-noir": {

    date: "01-02",

    name: "Bourgogne rouge",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot noir",
    terroir: "Argilo-calcaires, coteaux bien exposés de la Côte de Beaune et Côte de Nuits",

    robe: "Rouge rubis clair",
    nez: "Cerise, framboise, notes florales et sous-bois léger",
    aromes: "Griotte, fraise, épices douces",

    bouche: "Souple, fraîche, tannins fins, grande buvabilité",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Marquée mais harmonieuse",
    tanins: "Fins et fondus",

    millesimes: ["2017", "2019", "2022"],
    garde: "3 à 6 ans",
    service: "14–16°C",
    alcool: "12.5% vol",
    prix: "12–25 €",

    accords: ["pot-au-feu", "poulet-roti", "oeufs-en-meurette"],

    domaine: "Domaine Joseph Drouhin",
    proprietaire: "Famille Drouhin",
    anecdote: "Maison emblématique de Beaune fondée en 1880, réputée pour son style élégant et précis du Pinot noir.",
    photo: "images/vins/bourgogne-pinot-noir.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"cotes-provence-rose": {

    date: "01-03",

    name: "Côtes-de-Provence rosé",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Cinsault, Syrah",
    terroir: "Schistes, calcaires, influence maritime de la Méditerranée",

    robe: "Rosé pâle, saumon clair",
    nez: "Fruits rouges délicats, agrumes, fleurs blanches",
    aromes: "Fraise, pamplemousse, pêche blanche",

    bouche: "Fraîche, légère, aromatique, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Vive et rafraîchissante",
    tanins: "Très faibles",

    millesimes: ["2022", "2023"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "8–18 €",

    accords: ["soupe-au-pistou", "tian-aubergines", "ratatouille"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Domaine emblématique de la presqu’île de Saint‑Tropez, pionnier du rosé pâle provençal devenu une référence mondiale.",
    photo: "images/vins/cotes-provence-rose.jpg",

    note_parker: "89–92/100 selon les cuvées",
    note_hachette: "★★★ fréquemment"
},
"vouvray-chenin": {

    date: "01-04",

    name: "Vouvray",
    region: "Val de Loire",
    aoc: "AOC Vouvray",
    cepage: "Chenin blanc",
    terroir: "Plateau calcaire (tuffeau), argiles à silex, coteaux exposés sud",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, coing, miel léger",
    aromes: "Pomme, poire, agrumes, notes miellées",

    bouche: "Fraîche, élégante, légèrement tendre selon les cuvées, finale vive",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Marquée mais équilibrée",
    tanins: "Aucun (vin blanc)",

    millesimes: ["2018", "2019", "2021"],
    garde: "5 à 15 ans selon le style",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–20 €",

    accords: ["blanquette-de-veau", "poissons-en-sauce", "fromages-de-chevre"],

    domaine: "Domaine Huet",
    proprietaire: "Anthony Hwang (famille Hwang)",
    anecdote: "Fondé en 1928, le Domaine Huet est l’un des plus grands noms du Vouvray, pionnier de la biodynamie et réputé pour ses Chenins d’une longévité exceptionnelle.",
    photo: "images/vins/vouvray-chenin.jpg",

    note_parker: "92–96/100 selon les cuvées",
    note_hachette: "★★★ régulièrement, plusieurs coups de cœur"
},
"champagne-brut": {

    date: "01-05",

    name: "Champagne brut Ruinart",
    region: "Champagne",
    aoc: "AOC Champagne",
    cepage: "Chardonnay, Pinot noir, Pinot meunier",
    terroir: "Craie du bassin parisien, coteaux de la Montagne de Reims et de la Côte des Blancs",

    robe: "Jaune pâle, bulles fines et persistantes",
    nez: "Agrumes, pomme verte, brioche, fleurs blanches",
    aromes: "Citron, amande, noisette, pain grillé",

    bouche: "Vive, élégante, bulles fines, finale fraîche et légèrement briochée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun (vin effervescent)",

    millesimes: ["NV", "2014", "2016"],
    garde: "2 à 8 ans selon les cuvées",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "25–45 €",

    accords: ["galette-des-rois", "aperitif", "fruits-de-mer"],

    domaine: "Maison Ruinart",
    proprietaire: "LVMH",
    anecdote: "Fondée en 1729, Ruinart est la plus ancienne maison de Champagne. Son style élégant et floral, dominé par le Chardonnay, en fait un accord parfait avec la frangipane.",
    photo: "images/vins/champagne-brut.jpg",

    note_parker: "90–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"muscat-beaumes-venise": {

    date: "01-06",

    name: "Muscat de Beaumes-de-Venise",
    region: "Vallée du Rhône",
    aoc: "AOC Muscat de Beaumes-de-Venise",
    cepage: "Muscat à petits grains",
    terroir: "Terrasses sableuses et marnes calcaires au pied des Dentelles de Montmirail",

    robe: "Or pâle brillant",
    nez: "Fruits exotiques, raisin frais, fleurs blanches",
    aromes: "Litchi, abricot, miel, rose",

    bouche: "Douce, aromatique, fraîche, très expressive",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Faible à moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "3 à 8 ans",
    service: "8–10°C",
    alcool: "15% vol (vin doux naturel)",
    prix: "12–20 €",

    accords: ["galette-briochee", "desserts-fruités", "fromages-bleus"],

    domaine: "Domaine des Bernardins",
    proprietaire: "Famille Castaud",
    anecdote: "Le Domaine des Bernardins est l’un des producteurs historiques du Muscat de Beaumes-de-Venise, à l’origine même de l’obtention de l’AOC en 1945.",
    photo: "images/vins/muscat-beaumes-venise.jpg",

    note_parker: "91–94/100 selon les cuvées",
    note_hachette: "★★★ souvent récompensé"
},
"apremont-jacquere": {

    date: "01-07",

    name: "Apremont",
    region: "Savoie",
    aoc: "AOC Vin de Savoie Apremont",
    cepage: "Jacquère",
    terroir: "Éboulis calcaires du Mont Granier, sols très drainants",

    robe: "Jaune pâle cristallin",
    nez: "Fleurs blanches, agrumes, pierre à fusil",
    aromes: "Citron, pomme verte, notes minérales",

    bouche: "Très fraîche, légère, vive, finale sèche et nette",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "11.5% vol",
    prix: "7–12 €",

    accords: ["gratin-dauphinois", "raclette", "fondue-savoyarde"],

    domaine: "Domaine Jean Perrier & Fils",
    proprietaire: "Famille Perrier",
    anecdote: "Installée depuis 1853, la famille Perrier est l’un des producteurs emblématiques de Savoie, réputée pour ses Jacquères fraîches et minérales.",
    photo: "images/vins/apremont-jacquere.jpg",

    note_parker: "Non noté régulièrement (appellation peu suivie)",
    note_hachette: "★★ souvent récompensé"
},
"madiran-tannat": {

    date: "01-08",

    name: "Madiran",
    region: "Sud-Ouest",
    aoc: "AOC Madiran",
    cepage: "Tannat majoritaire",
    terroir: "Croupes argilo-graveleuses et pentes pyrénéennes",

    robe: "Rouge sombre, presque opaque",
    nez: "Fruits noirs, épices, cacao, notes boisées",
    aromes: "Mûre, cassis, réglisse, vanille",

    bouche: "Très puissante, tannique, ample, structure imposante",
    longueur: "Longue",
    corps: "Très corsé",
    acidite: "Moyenne",
    tanins: "Puissants mais civilisés dans les cuvées modernes",

    millesimes: ["2015", "2016", "2018"],
    garde: "10 à 20 ans",
    service: "16–18°C, carafage 2h recommandé",
    alcool: "14% vol",
    prix: "12–25 €",

    accords: ["cassoulet", "magret-de-canard", "gibier-en-sauce"],

    domaine: "Château Montus",
    proprietaire: "Alain Brumont",
    anecdote: "Alain Brumont a révolutionné Madiran dans les années 1980, hissant le Tannat au niveau des grands vins rouges français.",
    photo: "images/vins/madiran-tannat.jpg",

    note_parker: "92–96/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"roussette-altesse": {

    date: "01-09",

    name: "Roussette de Savoie",
    region: "Savoie",
    aoc: "AOC Roussette de Savoie",
    cepage: "Altesse",
    terroir: "Éboulis calcaires, moraines glaciaires, coteaux ensoleillés",

    robe: "Jaune doré pâle",
    nez: "Fruits blancs mûrs, miel léger, fleurs de montagne",
    aromes: "Poire, coing, amande, notes miellées",

    bouche: "Ample, légèrement grasse, belle tension finale",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["tartiflette", "poissons-grillés", "volailles-creme"],

    domaine: "Domaine Dupasquier",
    proprietaire: "Famille Dupasquier",
    anecdote: "Le Domaine Dupasquier est l’un des plus anciens producteurs de Roussette, réputé pour ses vins d’Altesse d’une grande finesse.",
    photo: "images/vins/roussette-altesse.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ souvent distingué"
},
"beaujolais-gamay": {

    date: "01-10",

    name: "Beaujolais",
    region: "Beaujolais",
    aoc: "AOC Beaujolais",
    cepage: "Gamay",
    terroir: "Granites et schistes de la partie nord du Beaujolais",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges frais, violette, notes florales",
    aromes: "Fraise, framboise, groseille, légère touche épicée",

    bouche: "Souple, fraîche, fruitée, tannins très fins",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Vive",
    tanins: "Très fins",

    millesimes: ["2021", "2022", "2023"],
    garde: "À boire jeune",
    service: "12–14°C",
    alcool: "12.5% vol",
    prix: "7–12 €",

    accords: ["soupe-a-loignon", "charcuteries", "fromages-legers"],

    domaine: "Domaine des Terres Dorées",
    proprietaire: "Jean-Paul Brun",
    anecdote: "Jean-Paul Brun est l’un des vignerons les plus respectés du Beaujolais, connu pour son style pur, non maquillé, qui met en valeur le Gamay dans toute sa finesse.",
    photo: "images/vins/beaujolais-gamay.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"bourgogne-rouge-pinot": {

    date: "01-11",

    name: "Bourgogne rouge",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot noir",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte de Nuits",

    robe: "Rouge rubis profond",
    nez: "Cerise noire, sous-bois, épices douces",
    aromes: "Griotte, mûre, clou de girofle, notes fumées",

    bouche: "Équilibrée, tannins fins mais présents, texture soyeuse",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins mais structurants",

    millesimes: ["2017", "2019", "2020"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "13% vol",
    prix: "18–30 €",

    accords: ["boeuf-bourguignon", "coq-au-vin", "fromages-affines"],

    domaine: "Domaine Louis Jadot",
    proprietaire: "Maison Louis Jadot",
    anecdote: "Fondée en 1859, la Maison Jadot est l’un des piliers de la Bourgogne, réputée pour la constance et la typicité de ses Pinot noirs.",
    photo: "images/vins/bourgogne-rouge-pinot.jpg",

    note_parker: "88–91/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"riesling-alsace": {

    date: "01-12",

    name: "Riesling d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Riesling",
    cepage: "Riesling",
    terroir: "Marnes, calcaires et grès des coteaux alsaciens",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pamplemousse, pomme verte, minéralité marquée",

    bouche: "Sèche, tendue, très fraîche, finale citronnée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2018", "2019", "2021"],
    garde: "5 à 12 ans",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "12–20 €",

    accords: ["choucroute-garnie", "poissons-grilles", "fruits-de-mer"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Fondé en 1626, le Domaine Trimbach est l’un des plus anciens et prestigieux producteurs d’Alsace, célèbre pour ses Rieslings secs et droits.",
    photo: "images/vins/riesling-alsace.jpg",

    note_parker: "90–95/100 selon les cuvées",
    note_hachette: "★★★ souvent récompensé"
},
"jurancon-sec": {

    date: "01-13",

    name: "Jurançon sec",
    region: "Sud-Ouest",
    aoc: "AOC Jurançon sec",
    cepage: "Gros Manseng, Petit Manseng",
    terroir: "Coteaux pyrénéens, sols argilo-siliceux et poudingues",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fruits exotiques, fleurs blanches",
    aromes: "Pamplemousse, ananas, poire, notes minérales",

    bouche: "Vive, tendue, aromatique, finale légèrement saline",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "3 à 6 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["poule-au-pot", "poissons-grilles", "volailles-creme"],

    domaine: "Domaine Cauhapé",
    proprietaire: "Henri Ramonteu",
    anecdote: "Henri Ramonteu a hissé le Jurançon au rang des grands vins blancs français, grâce à un travail minutieux sur les Mansengs.",
    photo: "images/vins/jurancon-sec.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cassis-blanc": {

    date: "01-14",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la Méditerranée",

    robe: "Jaune pâle aux reflets verts",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes de Provence",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["brandade-de-morue", "bouillabaisse", "poissons-mediterraneens"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Le Clos Sainte Magdeleine est un domaine mythique de Cassis, réputé pour ses blancs salins et élégants produits face à la mer.",
    photo: "images/vins/cassis-blanc.jpg",

    note_parker: "89–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"irouleguy-rouge": {

    date: "01-15",

    name: "Irouléguy rouge",
    region: "Pays Basque",
    aoc: "AOC Irouléguy",
    cepage: "Tannat, Cabernet Franc, Cabernet Sauvignon",
    terroir: "Terrasses schisteuses et grès rouges des Pyrénées basques",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, épices, notes fumées",
    aromes: "Mûre, cassis, poivre, réglisse",

    bouche: "Structurée, fraîche, tannins présents mais élégants",
    longueur: "Moyenne à longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Présents mais équilibrés",

    millesimes: ["2018", "2019", "2021"],
    garde: "5 à 10 ans",
    service: "15–16°C",
    alcool: "13.5% vol",
    prix: "12–22 €",

    accords: ["garbure-bearnaise", "agneau-grille", "charcuteries-basques"],

    domaine: "Domaine Arretxea",
    proprietaire: "Famille Riouspeyrous",
    anecdote: "Le Domaine Arretxea est l’un des plus grands noms d’Irouléguy, pionnier de la biodynamie dans le Pays Basque.",
    photo: "images/vins/irouleguy-rouge.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ souvent récompensé"
},
"pinot-gris-alsace": {

    date: "01-16",

    name: "Pinot Gris d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Pinot Gris",
    cepage: "Pinot Gris",
    terroir: "Marnes, calcaires et grès des coteaux alsaciens",

    robe: "Jaune doré pâle",
    nez: "Fruits jaunes, miel léger, notes fumées",
    aromes: "Pêche, mirabelle, noisette, touche fumée typique",

    bouche: "Ample, légèrement grasse, belle fraîcheur en finale",
    longueur: "Moyenne à longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2018", "2019", "2021"],
    garde: "5 à 10 ans",
    service: "10–12°C",
    alcool: "13.5% vol",
    prix: "12–20 €",

    accords: ["quiche-lorraine", "volailles-creme", "poissons-fumes"],

    domaine: "Domaine Zind-Humbrecht",
    proprietaire: "Famille Humbrecht",
    anecdote: "Zind-Humbrecht est l’un des domaines les plus prestigieux d’Alsace, pionnier de la biodynamie et réputé pour la profondeur de ses Pinot Gris.",
    photo: "images/vins/pinot-gris-alsace.jpg",

    note_parker: "92–96/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cidre-brut-normand": {

    date: "01-17",

    name: "Cidre brut fermier",
    region: "Normandie",
    aoc: "Cidre AOP Pays d’Auge",
    cepage: "Pommes amères, douces-amères et acidulées",
    terroir: "Bocage normand, sols argilo-limoneux",

    robe: "Ambré doré, mousse fine",
    nez: "Pomme mûre, foin, notes rustiques",
    aromes: "Pomme cuite, caramel léger, épices douces",

    bouche: "Fraîche, sèche, légèrement tannique, finale longue",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Légers mais présents",

    millesimes: ["NV"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "5% vol",
    prix: "5–10 €",

    accords: ["tripes-mode-caen", "andouille", "fromages-normands"],

    domaine: "Ferme de la Galotière",
    proprietaire: "Famille Desfrièches",
    anecdote: "La Ferme de la Galotière est l’un des producteurs emblématiques du Pays d’Auge, réputé pour ses cidres fermiers authentiques et typés.",
    photo: "images/vins/cidre-brut-normand.jpg",

    note_parker: "Non noté (cidres rarement évalués)",
    note_hachette: "★★ souvent distingué"
},
"bandol-rouge": {

    date: "01-18",

    name: "Bandol rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire, Grenache, Cinsault",
    terroir: "Restanques calcaires, sols pierreux exposés plein sud",

    robe: "Rouge sombre, reflets violacés",
    nez: "Fruits noirs, garrigue, cuir, épices",
    aromes: "Mûre, prune, poivre, réglisse, notes animales nobles",

    bouche: "Puissante, charpentée, tannins serrés, grande profondeur",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Puissants mais nobles",

    millesimes: ["2015", "2016", "2019"],
    garde: "10 à 20 ans",
    service: "16–18°C, carafage 2h recommandé",
    alcool: "14.5% vol",
    prix: "20–40 €",

    accords: ["daube-provencale", "gibier", "agneau-confite"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Domaine Tempier est le domaine mythique de Bandol, révélé dans les années 1970 par Lulu et Lucien Peyraud, ambassadeurs du Mourvèdre provençal.",
    photo: "images/vins/bandol-rouge.jpg",

    note_parker: "93–97/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"bourgogne-aligote": {

    date: "01-19",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires légers des plaines et bas de coteaux bourguignons",

    robe: "Jaune pâle aux reflets verts",
    nez: "Agrumes, pomme verte, fleurs blanches",
    aromes: "Citron, poire, légère minéralité",

    bouche: "Vive, tendue, fraîche, finale citronnée",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "2 à 5 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "8–15 €",

    accords: ["flamiche-aux-poireaux", "fruits-de-mer", "salades"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "Le Domaine Goisot, situé à Saint-Bris, produit certains des Aligotés les plus réputés de Bourgogne, souvent comparés à des crus plus prestigieux.",
    photo: "images/vins/bourgogne-aligote.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"muscadet-sevre-maine": {

    date: "01-20",

    name: "Muscadet Sèvre-et-Maine sur lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss, micaschistes et roches volcaniques du vignoble nantais",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, pomme verte, notes iodées",
    aromes: "Citron, coquille d’huître, pierre humide",

    bouche: "Très fraîche, saline, finale tendue",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["soupe-potimarron", "huitres", "poissons-grilles"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Rémi Branger & Gwénaëlle Croix",
    anecdote: "Le Domaine de la Pépière est l’un des plus grands noms du Muscadet, reconnu pour ses vins d’une pureté minérale exceptionnelle.",
    photo: "images/vins/muscadet-sevre-maine.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cote-de-brouilly-gamay": {

    date: "01-21",

    name: "Côte-de-Brouilly",
    region: "Beaujolais",
    aoc: "AOC Côte-de-Brouilly",
    cepage: "Gamay",
    terroir: "Roche bleue (diorite), sols volcaniques du Mont Brouilly",

    robe: "Rouge rubis profond",
    nez: "Fruits rouges et noirs, violette, épices",
    aromes: "Cerise noire, mûre, poivre, minéralité volcanique",

    bouche: "Fraîche, structurée, tannins fins mais présents",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins mais perceptibles",

    millesimes: ["2019", "2020", "2022"],
    garde: "5 à 8 ans",
    service: "14–15°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["cervelas-lyonnais", "charcuteries", "quenelles"],

    domaine: "Château Thivin",
    proprietaire: "Famille Geoffray",
    anecdote: "Fondé en 1383, le Château Thivin est le plus ancien domaine du Mont Brouilly et une référence absolue du Gamay volcanique.",
    photo: "images/vins/cote-de-brouilly-gamay.jpg",

    note_parker: "91–94/100 selon les cuvées",
    note_hachette: "★★★ souvent récompensé"
},
"coteaux-du-layon": {

    date: "01-22",

    name: "Coteaux-du-Layon",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes, grès et roches volcaniques du Layon",

    robe: "Or pâle brillant",
    nez: "Fruits confits, miel, coing",
    aromes: "Abricot, poire, miel, agrumes confits",

    bouche: "Douce mais fraîche, équilibre remarquable, finale acidulée",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2018", "2020", "2021"],
    garde: "10 à 20 ans",
    service: "8–10°C",
    alcool: "11% vol",
    prix: "10–18 €",

    accords: ["endives-au-jambon", "foie-gras", "fromages-bleus"],

    domaine: "Domaine des Baumard",
    proprietaire: "Famille Baumard",
    anecdote: "Le Domaine des Baumard est l’un des maîtres du Chenin moelleux, reconnu pour ses vins d’une pureté et d’une longévité exceptionnelles.",
    photo: "images/vins/coteaux-du-layon.jpg",

    note_parker: "92–96/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-du-rhone-rouge": {

    date: "01-23",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat brillant",
    nez: "Fruits rouges, épices douces, garrigue",
    aromes: "Cerise, framboise, poivre, herbes sèches",

    bouche: "Souple, ronde, fruitée, tannins doux",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2021"],
    garde: "3 à 6 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "8–15 €",

    accords: ["poulet-roti", "grillades", "ratatouille"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "La Maison Guigal, fondée en 1946, est l’un des emblèmes du Rhône, réputée pour la constance et la qualité de ses vins, même en entrée de gamme.",
    photo: "images/vins/cotes-du-rhone-rouge.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"bordeaux-superieur": {

    date: "01-24",

    name: "Bordeaux Supérieur",
    region: "Bordeaux",
    aoc: "AOC Bordeaux Supérieur",
    cepage: "Merlot, Cabernet Sauvignon, Cabernet Franc",
    terroir: "Argilo-calcaires et graves de la rive droite",

    robe: "Rouge rubis profond",
    nez: "Fruits noirs, vanille, notes boisées légères",
    aromes: "Cassis, prune, épices douces",

    bouche: "Ronde, équilibrée, tannins souples, finale harmonieuse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples et fondus",

    millesimes: ["2018", "2019", "2020"],
    garde: "5 à 10 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "8–15 €",

    accords: ["hachis-parmentier", "viandes-grillees", "fromages-affines"],

    domaine: "Château Reignac",
    proprietaire: "Famille Vatelot",
    anecdote: "Château Reignac est célèbre pour produire l’un des meilleurs Bordeaux Supérieurs, souvent comparé à des crus bien plus prestigieux.",
    photo: "images/vins/bordeaux-superieur.jpg",

    note_parker: "90–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"entre-deux-mers": {

    date: "01-25",

    name: "Entre-Deux-Mers",
    region: "Bordeaux",
    aoc: "AOC Entre-Deux-Mers",
    cepage: "Sauvignon blanc, Sémillon, Muscadelle",
    terroir: "Coteaux argilo-calcaires entre Garonne et Dordogne",

    robe: "Jaune pâle aux reflets verts",
    nez: "Agrumes, buis, fleurs blanches",
    aromes: "Citron, pamplemousse, herbes fraîches",

    bouche: "Vive, fraîche, aromatique, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "7–12 €",

    accords: ["gratin-courgettes", "salades", "poissons-grilles"],

    domaine: "Château Bonnet",
    proprietaire: "Famille Lurton",
    anecdote: "Le Château Bonnet est l’un des domaines emblématiques de l’Entre‑Deux‑Mers, fondé au XVIe siècle et popularisé par André Lurton.",
    photo: "images/vins/entre-deux-mers.jpg",

    note_parker: "87–90/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"saumur-champigny": {

    date: "01-26",

    name: "Saumur-Champigny",
    region: "Val de Loire",
    aoc: "AOC Saumur-Champigny",
    cepage: "Cabernet Franc",
    terroir: "Tuffeau (calcaire tendre), argiles et sables",

    robe: "Rouge rubis brillant",
    nez: "Fruits rouges, poivron doux, violette",
    aromes: "Framboise, cerise, sous-bois, épices légères",

    bouche: "Souple, fraîche, tannins fins, finale digeste",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2022"],
    garde: "3 à 7 ans",
    service: "14–15°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["omelette-champignons", "charcuteries", "fromages-de-chevre"],

    domaine: "Domaine des Roches Neuves",
    proprietaire: "Thierry Germain",
    anecdote: "Thierry Germain, figure majeure de la biodynamie en Loire, produit des Cabernet Franc parmi les plus élégants de France.",
    photo: "images/vins/saumur-champigny.jpg",

    note_parker: "91–95/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-du-forez": {

    date: "01-27",

    name: "Côtes-du-Forez",
    region: "Loire volcanique",
    aoc: "AOC Côtes-du-Forez",
    cepage: "Gamay Saint‑Romain",
    terroir: "Basaltes et roches volcaniques du Massif Central",

    robe: "Rouge rubis profond",
    nez: "Fruits rouges, violette, notes minérales",
    aromes: "Cerise, framboise, poivre, pierre chaude",

    bouche: "Fraîche, fruitée, minérale, tannins fins",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "14–15°C",
    alcool: "12.5% vol",
    prix: "8–14 €",

    accords: ["saucisses-lentilles", "charcuteries", "plats-rustiques"],

    domaine: "Domaine Verdier-Logel",
    proprietaire: "Famille Verdier & Logel",
    anecdote: "Le domaine Verdier‑Logel est l’un des pionniers de la renaissance des vins volcaniques du Forez, en agriculture biologique depuis 1997.",
    photo: "images/vins/cotes-du-forez.jpg",

    note_parker: "Non noté régulièrement",
    note_hachette: "★★ souvent distingué"
},
"sancerre-blanc": {

    date: "01-28",

    name: "Sancerre blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes calcaires et terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, buis, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fraîches, minéralité marquée",

    bouche: "Vive, tendue, précise, finale longue et saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["poireaux-vinaigrette", "fromages-de-chevre", "fruits-de-mer"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Le Domaine Vacheron est l’un des plus grands noms de Sancerre, pionnier de la biodynamie et maître des terroirs de silex.",
    photo: "images/vins/sancerre-blanc.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"macon-villages": {

    date: "01-29",

    name: "Mâcon-Villages",
    region: "Bourgogne",
    aoc: "AOC Mâcon-Villages",
    cepage: "Chardonnay",
    terroir: "Calcaires du Mâconnais, sols pierreux et bien drainés",

    robe: "Jaune clair brillant",
    nez: "Fruits blancs, fleurs, légère touche beurrée",
    aromes: "Pomme, poire, noisette, beurre frais",

    bouche: "Souple, ronde, fraîche, finale douce et harmonieuse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["croque-monsieur", "volailles", "poissons-en-sauce"],

    domaine: "Domaine Leflaive (Mâcon-Verzé)",
    proprietaire: "Famille Leflaive",
    anecdote: "Le Domaine Leflaive, légende de Puligny-Montrachet, produit aussi des Mâconnais d’une pureté exemplaire, très recherchés.",
    photo: "images/vins/macon-villages.jpg",

    note_parker: "89–92/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-roussillon-villages": {

    date: "01-30",

    name: "Côtes-du-Roussillon Villages",
    region: "Roussillon",
    aoc: "AOC Côtes-du-Roussillon Villages",
    cepage: "Grenache, Syrah, Carignan",
    terroir: "Schistes, gneiss et argilo-calcaires des contreforts pyrénéens",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, épices, garrigue, notes fumées",
    aromes: "Mûre, cassis, poivre, réglisse, herbes sèches",

    bouche: "Puissante, chaleureuse, tannins présents mais mûrs",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents et ronds",

    millesimes: ["2018", "2019", "2020"],
    garde: "5 à 10 ans",
    service: "16–17°C",
    alcool: "14.5% vol",
    prix: "10–18 €",

    accords: ["chili-con-carne", "grillades", "plats-epices"],

    domaine: "Domaine Gauby",
    proprietaire: "Famille Gauby",
    anecdote: "Le Domaine Gauby est considéré comme le domaine phare du Roussillon, célèbre pour ses rouges profonds et d’une grande fraîcheur malgré la chaleur du climat.",
    photo: "images/vins/cotes-roussillon-villages.jpg",

    note_parker: "92–96/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cidre-doux-cornouaille": {

    date: "01-31",

    name: "Cidre doux AOP Cornouaille",
    region: "Bretagne",
    aoc: "AOP Cornouaille",
    cepage: "Pommes douces-amères traditionnelles bretonnes",
    terroir: "Sols granitiques et schisteux du sud-Finistère",

    robe: "Ambré clair, mousse fine et persistante",
    nez: "Pomme mûre, caramel léger, miel",
    aromes: "Pomme confite, poire, miel, touche florale",

    bouche: "Douce, fruitée, ronde, faible acidité, finale gourmande",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Faible",
    tanins: "Très légers",

    millesimes: ["NV"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "3–4% vol",
    prix: "6–10 €",

    accords: ["crepes", "desserts-fruités", "gateaux-beurre"],

    domaine: "Cidrerie Manoir du Kinkiz",
    proprietaire: "Famille Seznec",
    anecdote: "Le Manoir du Kinkiz, situé à Quimper, est l’un des producteurs emblématiques de Cornouaille. Il perpétue la tradition du cidre doux breton élaboré à partir de variétés anciennes de pommes.",
    photo: "images/vins/cidre-doux-cornouaille.jpg",

    note_parker: "Non noté (les cidres sont rarement évalués)",
    note_hachette: "★★★ régulièrement récompensé"
},
"champagne-demi-sec": {

    date: "02-01",

    name: "Champagne demi-sec",
    region: "Champagne",
    aoc: "AOC Champagne",
    cepage: "Chardonnay, Pinot noir, Pinot meunier",
    terroir: "Craie du bassin parisien, coteaux de la Marne et de la Côte des Blancs",

    robe: "Jaune pâle, bulles fines et persistantes",
    nez: "Agrumes confits, brioche, miel léger",
    aromes: "Orange, citron confit, amande, pain grillé",

    bouche: "Douce mais fraîche, bulles fines, finale gourmande",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "2 à 5 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "30–50 €",

    accords: ["crepes-suzette", "desserts-agrumes", "tarte-citron"],

    domaine: "Maison Moët & Chandon",
    proprietaire: "LVMH",
    anecdote: "Le demi-sec était autrefois le style de Champagne le plus consommé au XIXe siècle, apprécié pour son équilibre entre douceur et fraîcheur.",
    photo: "images/vins/champagne-demi-sec.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cidre-brut-artisanal": {

    date: "02-02",

    name: "Cidre brut artisanal",
    region: "Bretagne",
    aoc: "IGP Cidre de Bretagne",
    cepage: "Pommes douces-amères bretonnes",
    terroir: "Sols granitiques et schisteux du centre Bretagne",

    robe: "Ambré doré, mousse fine",
    nez: "Pomme fraîche, foin, caramel léger",
    aromes: "Pomme cuite, miel, épices douces",

    bouche: "Sèche, fruitée, légèrement tannique, très rafraîchissante",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Légers",

    millesimes: ["NV"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "4–5% vol",
    prix: "5–9 €",

    accords: ["crepes-chandeleur", "galettes-bretonnes", "desserts-pommes"],

    domaine: "Cidrerie Kerné",
    proprietaire: "Famille Bosser",
    anecdote: "Kerné, fondée en 1947 à Pouldreuzic, est l’une des cidreries artisanales les plus emblématiques de Bretagne.",
    photo: "images/vins/cidre-brut-artisanal.jpg",

    note_parker: "Non noté",
    note_hachette: "★★★ régulièrement"
},
"rivesaltes-ambre": {

    date: "02-03",

    name: "Rivesaltes ambré",
    region: "Roussillon",
    aoc: "AOC Rivesaltes",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes, argilo-calcaires et terrasses caillouteuses",

    robe: "Ambré profond",
    nez: "Pruneau, caramel, fruits secs",
    aromes: "Pruneau, figue, noix, miel, épices douces",

    bouche: "Douce, ample, chaleureuse, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["2000", "2005", "2010"],
    garde: "20 ans et plus",
    service: "10–12°C",
    alcool: "16% vol",
    prix: "12–25 €",

    accords: ["far-breton", "desserts-pruneaux", "fromages-bleus"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Le Domaine Cazes, fondé en 1895, est l’un des maîtres historiques des vins doux naturels du Roussillon.",
    photo: "images/vins/rivesaltes-ambre.jpg",

    note_parker: "90–95/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"bourgogne-blanc-chardonnay": {

    date: "02-04",

    name: "Bourgogne blanc",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte Chalonnaise",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, beurre frais, noisette",
    aromes: "Pomme, poire, citron, amande, légère touche beurrée",

    bouche: "Souple, ronde, fraîche, finale harmonieuse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "3 à 6 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["paupiettes-de-veau", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Faiveley",
    proprietaire: "Famille Faiveley",
    anecdote: "Fondé en 1825, le Domaine Faiveley est l’un des piliers de la Bourgogne, réputé pour ses blancs précis et élégants.",
    photo: "images/vins/bourgogne-blanc-chardonnay.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-auvergne-rouge": {

    date: "02-05",

    name: "Côtes-d’Auvergne rouge",
    region: "Auvergne",
    aoc: "AOC Côtes-d’Auvergne",
    cepage: "Gamay majoritaire, parfois Pinot noir",
    terroir: "Basaltes et sols volcaniques du Puy-de-Dôme",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges, violette, notes minérales",
    aromes: "Framboise, cerise, poivre, pierre chaude",

    bouche: "Fraîche, digeste, tannins fins, finale minérale",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "13–14°C",
    alcool: "12.5% vol",
    prix: "8–14 €",

    accords: ["soupe-au-chou", "charcuteries", "plats-rustiques"],

    domaine: "Domaine Miolanne",
    proprietaire: "Famille Miolanne",
    anecdote: "Les vins volcaniques d’Auvergne connaissent un renouveau spectaculaire, portés par des domaines dynamiques comme Miolanne.",
    photo: "images/vins/cotes-auvergne-rouge.jpg",

    note_parker: "Non noté régulièrement",
    note_hachette: "★★ souvent distingué"
},
"savennieres-chenin": {

    date: "02-06",

    name: "Savennières",
    region: "Val de Loire",
    aoc: "AOC Savennières",
    cepage: "Chenin blanc",
    terroir: "Schistes, grès et roches volcaniques de l’Anjou noir",

    robe: "Jaune doré pâle",
    nez: "Fruits blancs, cire d’abeille, fleurs, pierre chaude",
    aromes: "Pomme, coing, miel sec, minéralité intense",

    bouche: "Puissante, sèche, structurée, longue, grande tension",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2017", "2019", "2020"],
    garde: "10 à 20 ans",
    service: "11–13°C",
    alcool: "13.5% vol",
    prix: "20–35 €",

    accords: ["matelote-anguille", "poissons-gras", "fromages-de-chevre"],

    domaine: "Domaine du Closel",
    proprietaire: "Famille de Jessey",
    anecdote: "Le Closel est l’un des domaines historiques de Savennières, réputé pour ses Chenins secs d’une longévité exceptionnelle.",
    photo: "images/vins/savennieres-chenin.jpg",

    note_parker: "92–97/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"jasnieres-chenin": {

    date: "02-07",

    name: "Jasnières",
    region: "Vallée du Loir",
    aoc: "AOC Jasnières",
    cepage: "Chenin blanc",
    terroir: "Sols de tuffeau, argiles à silex, coteaux très pentus",

    robe: "Jaune pâle brillant",
    nez: "Pomme, poire, fleurs blanches, silex",
    aromes: "Pomme verte, citron, pierre à fusil, miel sec",

    bouche: "Très sèche, tendue, minérale, finale longue et saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2018", "2019", "2021"],
    garde: "10 à 20 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "12–22 €",

    accords: ["rillettes-du-mans", "poissons-grilles", "fromages-de-chevre"],

    domaine: "Domaine de Bellivière",
    proprietaire: "Éric Nicolas",
    anecdote: "Le Domaine de Bellivière a redonné vie à l’appellation Jasnières, aujourd’hui considérée comme l’un des plus grands terroirs de Chenin sec.",
    photo: "images/vins/jasnieres-chenin.jpg",

    note_parker: "92–96/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"pinot-gris-pintade": {

    date: "02-08",

    name: "Pinot Gris d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Pinot Gris",
    cepage: "Pinot Gris",
    terroir: "Marnes, calcaires, grès et coteaux bien exposés",

    robe: "Jaune doré clair",
    nez: "Fruits jaunes, miel, fumé léger",
    aromes: "Pêche, mirabelle, noisette, touche fumée",

    bouche: "Ample, légèrement grasse, très aromatique, finale fraîche",
    longueur: "Longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "5 à 10 ans",
    service: "10–12°C",
    alcool: "13.5% vol",
    prix: "12–22 €",

    accords: ["pintade-aux-choux", "volailles-creme", "poissons-fumes"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Domaine Weinbach, fondé en 1612, est l’un des domaines les plus prestigieux d’Alsace, réputé pour ses blancs d’une grande finesse.",
    photo: "images/vins/pinot-gris-pintade.jpg",

    note_parker: "92–95/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cassis-blanc-bouillabaisse": {

    date: "02-09",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la Méditerranée",

    robe: "Jaune pâle aux reflets verts",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes de Provence",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["bouillabaisse", "poissons-mediterraneens", "fruits-de-mer"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Le Clos Sainte Magdeleine, face à la mer, produit des blancs salins et élégants considérés comme les meilleurs de Cassis.",
    photo: "images/vins/cassis-blanc-bouillabaisse.jpg",

    note_parker: "89–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"bordeaux-superieur-parmentier": {

    date: "02-10",

    name: "Bordeaux Supérieur",
    region: "Bordeaux",
    aoc: "AOC Bordeaux Supérieur",
    cepage: "Merlot, Cabernet Sauvignon, Cabernet Franc",
    terroir: "Argilo-calcaires et graves de la rive droite",

    robe: "Rouge rubis profond",
    nez: "Fruits noirs, vanille, épices douces",
    aromes: "Cassis, prune, réglisse, notes boisées légères",

    bouche: "Ronde, équilibrée, tannins souples, finale harmonieuse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples et fondus",

    millesimes: ["2018", "2019", "2020"],
    garde: "5 à 10 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "8–15 €",

    accords: ["hachis-parmentier", "viandes-grillees", "fromages-affines"],

    domaine: "Château Reignac",
    proprietaire: "Famille Vatelot",
    anecdote: "Château Reignac est réputé pour produire l’un des meilleurs Bordeaux Supérieurs, souvent comparé à des crus bien plus prestigieux.",
    photo: "images/vins/bordeaux-superieur-parmentier.jpg",

    note_parker: "90–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"chablis-andouillette": {

    date: "02-11",

    name: "Chablis",
    region: "Bourgogne",
    aoc: "AOC Chablis",
    cepage: "Chardonnay",
    terroir: "Kimméridgien : marnes calcaires riches en fossiles marins",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, pierre à fusil, fleurs blanches",
    aromes: "Citron, pomme verte, minéralité iodée",

    bouche: "Très sèche, tendue, précise, finale longue et saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "15–25 €",

    accords: ["andouillette-troyes", "fruits-de-mer", "poissons-grilles"],

    domaine: "Domaine William Fèvre",
    proprietaire: "Famille Henriot",
    anecdote: "William Fèvre est l’un des maîtres de Chablis, célèbre pour ses vins d’une pureté minérale exceptionnelle.",
    photo: "images/vins/chablis-andouillette.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-villages-navarin": {

    date: "02-12",

    name: "Côtes-du-Rhône Villages",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône Villages",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat brillant",
    nez: "Fruits rouges et noirs, épices, garrigue",
    aromes: "Cerise noire, mûre, poivre, herbes sèches",

    bouche: "Souple, ronde, chaleureuse, tannins doux",
    longueur: "Moyenne à longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Fins et mûrs",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "10–18 €",

    accords: ["navarin-agneau", "ratatouille", "grillades"],

    domaine: "Domaine de la Janasse",
    proprietaire: "Famille Sabon",
    anecdote: "La Janasse, l’un des domaines phares du Rhône, produit des vins d’une grande finesse, même dans ses cuvées villages.",
    photo: "images/vins/cotes-rhone-villages-navarin.jpg",

    note_parker: "91–95/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cidre-de-glace": {

    date: "02-13",

    name: "Cidre de glace",
    region: "Québec / Normandie",
    aoc: "—",
    cepage: "Pommes à cidre concentrées par cryoconcentration",
    terroir: "Climats froids favorisant la concentration naturelle des sucres",

    robe: "Or ambré brillant",
    nez: "Pomme confite, caramel, miel",
    aromes: "Pomme rôtie, coing, sirop d’érable, fruits secs",

    bouche: "Douce, très aromatique, acidité vive qui équilibre le sucre",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "5 à 10 ans",
    service: "6–8°C",
    alcool: "9–11% vol",
    prix: "18–30 €",

    accords: ["tarte-tatin", "desserts-pommes", "fromages-bleus"],

    domaine: "Domaine Neige (Québec)",
    proprietaire: "François Pouliot",
    anecdote: "Le cidre de glace est né au Québec dans les années 1990. Sa concentration naturelle en sucre en fait un compagnon parfait des desserts caramélisés.",
    photo: "images/vins/cidre-de-glace.jpg",

    note_parker: "Non noté",
    note_hachette: "★★★ régulièrement pour les versions françaises"
},
"chablis-1er-cru-homard": {

    date: "02-14",

    name: "Chablis Premier Cru",
    region: "Bourgogne",
    aoc: "AOC Chablis Premier Cru",
    cepage: "Chardonnay",
    terroir: "Kimméridgien : marnes calcaires riches en fossiles marins",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, coquille d’huître, fleurs blanches",
    aromes: "Citron, pierre à fusil, beurre frais, minéralité iodée",

    bouche: "Tendue, puissante, saline, très longue",
    longueur: "Très longue",
    corps: "Moyen à ample",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2018", "2019", "2020"],
    garde: "8 à 12 ans",
    service: "11–13°C",
    alcool: "13% vol",
    prix: "25–45 €",

    accords: ["homard-armoricaine", "coquillages", "poissons-sauce"],

    domaine: "Domaine Louis Michel & Fils",
    proprietaire: "Famille Michel",
    anecdote: "Louis Michel est réputé pour ses Chablis non boisés, d’une pureté minérale exceptionnelle, parfaits avec les crustacés.",
    photo: "images/vins/chablis-1er-cru-homard.jpg",

    note_parker: "92–95/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"roussette-savoyarde": {

    date: "02-15",

    name: "Roussette de Savoie",
    region: "Savoie",
    aoc: "AOC Roussette de Savoie",
    cepage: "Altesse",
    terroir: "Éboulis calcaires, moraines glaciaires, coteaux ensoleillés",

    robe: "Jaune doré pâle",
    nez: "Fruits blancs mûrs, miel léger, fleurs de montagne",
    aromes: "Poire, coing, amande, notes miellées",

    bouche: "Ample, légèrement grasse, belle tension finale",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["fondue-savoyarde", "poissons-grilles", "volailles-creme"],

    domaine: "Domaine Dupasquier",
    proprietaire: "Famille Dupasquier",
    anecdote: "Le Domaine Dupasquier est l’un des plus anciens producteurs de Roussette, réputé pour ses vins d’Altesse d’une grande finesse.",
    photo: "images/vins/roussette-savoyarde.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ souvent distingué"
},
"bourgogne-blanc-moutarde": {

    date: "02-16",

    name: "Bourgogne blanc",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune clair brillant",
    nez: "Beurre frais, fleurs blanches, noisette",
    aromes: "Pomme, poire, citron, amande, légère touche boisée",

    bouche: "Ronde, ample, fraîche, finale beurrée mais tendue",
    longueur: "Moyenne à longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2021"],
    garde: "4 à 7 ans",
    service: "11–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["lapin-a-la-moutarde", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Chanson, fondé en 1750, est l’un des plus anciens négociants de Beaune, réputé pour ses blancs élégants et précis.",
    photo: "images/vins/bourgogne-blanc-moutarde.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"pouilly-fume-estragon": {

    date: "02-17",

    name: "Pouilly-Fumé",
    region: "Val de Loire",
    aoc: "AOC Pouilly-Fumé",
    cepage: "Sauvignon blanc",
    terroir: "Silex, marnes kimméridgiennes, calcaires durs",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, fumé minéral typique",

    bouche: "Vive, tendue, aromatique, finale longue et fumée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 8 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–28 €",

    accords: ["poulet-a-lestragon", "poissons-grilles", "fromages-de-chevre"],

    domaine: "Domaine Didier Dagueneau",
    proprietaire: "Famille Dagueneau",
    anecdote: "Didier Dagueneau a révolutionné le Pouilly-Fumé avec des vins d’une précision et d’une minéralité inégalées.",
    photo: "images/vins/pouilly-fume-estragon.jpg",

    note_parker: "92–97/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"apremont-raclette": {

    date: "02-18",

    name: "Apremont",
    region: "Savoie",
    aoc: "AOC Vin de Savoie Apremont",
    cepage: "Jacquère",
    terroir: "Éboulis calcaires du Mont Granier",

    robe: "Jaune pâle cristallin",
    nez: "Fleurs blanches, agrumes, pierre à fusil",
    aromes: "Citron, pomme verte, minéralité fraîche",

    bouche: "Très fraîche, légère, vive, finale sèche et nette",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "11.5% vol",
    prix: "7–12 €",

    accords: ["raclette", "fondue-savoyarde", "poissons-légers"],

    domaine: "Domaine Jean Perrier & Fils",
    proprietaire: "Famille Perrier",
    anecdote: "La famille Perrier, installée depuis 1853, est l’un des emblèmes des vins de Savoie.",
    photo: "images/vins/apremont-raclette.jpg",

    note_parker: "Non noté régulièrement",
    note_hachette: "★★ souvent récompensé"
},
"vin-jaune-jura": {

    date: "02-19",

    name: "Vin Jaune",
    region: "Jura",
    aoc: "AOC Château-Chalon / Côtes du Jura",
    cepage: "Savagnin",
    terroir: "Marnes grises du Lias, coteaux exposés sud-ouest",

    robe: "Or profond aux reflets ambrés",
    nez: "Noix, curry, morille, pomme sèche",
    aromes: "Noix fraîche, épices, pomme rôtie, notes oxydatives nobles",

    bouche: "Puissante, sèche, très longue, aromatique unique",
    longueur: "Exceptionnelle",
    corps: "Ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2011", "2012", "2015"],
    garde: "30 à 50 ans",
    service: "14–15°C",
    alcool: "14.5% vol",
    prix: "45–80 €",

    accords: ["coq-au-vin-jaune", "morilles", "comte-affine"],

    domaine: "Domaine Jean Macle",
    proprietaire: "Famille Macle",
    anecdote: "Le vin jaune vieillit 6 ans et 3 mois sous voile sans ouillage : un procédé unique au monde qui lui donne son goût de noix et d’épices.",
    photo: "images/vins/vin-jaune-jura.jpg",

    note_parker: "94–98/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"bourgueil-porc-pruneaux": {

    date: "02-20",

    name: "Bourgueil",
    region: "Val de Loire",
    aoc: "AOC Bourgueil",
    cepage: "Cabernet Franc",
    terroir: "Graviers, tuffeau, argiles légères",

    robe: "Rouge rubis brillant",
    nez: "Fruits rouges, poivron doux, violette",
    aromes: "Framboise, cerise, sous-bois, épices légères",

    bouche: "Souple, fraîche, tannins fins, finale fruitée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 8 ans",
    service: "14–15°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["roti-porc-pruneaux", "charcuteries", "fromages-de-chevre"],

    domaine: "Domaine Catherine & Pierre Breton",
    proprietaire: "Famille Breton",
    anecdote: "Les Breton sont des figures du Cabernet Franc naturel, produisant des vins d’une grande pureté aromatique.",
    photo: "images/vins/bourgueil-porc-pruneaux.jpg",

    note_parker: "89–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"riesling-flambee": {

    date: "02-21",

    name: "Riesling d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Riesling",
    cepage: "Riesling",
    terroir: "Marnes, calcaires, grès, coteaux ensoleillés",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pomme verte, minéralité marquée",

    bouche: "Sèche, tendue, très fraîche, finale citronnée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 12 ans",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "12–20 €",

    accords: ["tarte-flambee", "choucroute", "poissons-grilles"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Fondé en 1626, Trimbach est l’un des plus anciens domaines d’Alsace, maître des Rieslings secs et droits.",
    photo: "images/vins/riesling-flambee.jpg",

    note_parker: "90–95/100 selon les cuvées",
    note_hachette: "★★★ souvent récompensé"
},
"gewurztraminer-munster": {

    date: "02-22",

    name: "Gewurztraminer d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Gewurztraminer",
    cepage: "Gewurztraminer",
    terroir: "Marnes, calcaires, grès, coteaux ensoleillés",

    robe: "Jaune doré brillant",
    nez: "Litchi, rose, épices douces",
    aromes: "Fruits exotiques, miel, épices, notes florales intenses",

    bouche: "Ample, aromatique, légèrement douce, finale épicée",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible à moyenne",
    tanins: "Aucun",

    millesimes: ["2018", "2019", "2021"],
    garde: "5 à 10 ans",
    service: "10–12°C",
    alcool: "13.5% vol",
    prix: "12–22 €",

    accords: ["gratin-munster", "fromages-forts", "cuisine-epicee"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Gewurztraminer est l’un des cépages les plus aromatiques au monde, parfait pour les fromages puissants comme le munster.",
    photo: "images/vins/gewurztraminer-munster.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cidre-brut-kig-ha-farz": {

    date: "02-23",

    name: "Cidre brut fermier",
    region: "Bretagne",
    aoc: "IGP Cidre de Bretagne",
    cepage: "Pommes douces-amères traditionnelles",
    terroir: "Sols granitiques et schisteux du Finistère nord",

    robe: "Ambré doré, mousse fine",
    nez: "Pomme mûre, foin, caramel léger",
    aromes: "Pomme cuite, miel, épices douces",

    bouche: "Sèche, fruitée, légèrement tannique, très rafraîchissante",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Légers mais présents",

    millesimes: ["NV"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "4–5% vol",
    prix: "5–9 €",

    accords: ["kig-ha-farz", "galettes-bretonnes", "charcuteries"],

    domaine: "Cidrerie Manoir du Kinkiz",
    proprietaire: "Famille Seznec",
    anecdote: "Le kig ha farz se sert traditionnellement avec du cidre brut dans tout le Léon et le pays de Cornouaille.",
    photo: "images/vins/cidre-brut-kig-ha-farz.jpg",

    note_parker: "Non noté",
    note_hachette: "★★★ régulièrement"
},
"barbera-asti-marengo": {

    date: "02-24",

    name: "Barbera d’Asti",
    region: "Piémont (Italie)",
    aoc: "DOCG Barbera d’Asti",
    cepage: "Barbera",
    terroir: "Collines argilo-calcaires du Monferrato",

    robe: "Rouge rubis profond",
    nez: "Fruits rouges, violette, épices douces",
    aromes: "Cerise, prune, réglisse, pointe balsamique",

    bouche: "Vive, fruitée, acidité marquée, tannins souples",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Souples",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "10–18 €",

    accords: ["veau-marengo", "pâtes-tomate", "viandes-blanches"],

    domaine: "Vietti",
    proprietaire: "Famille Currado",
    anecdote: "La Barbera est l’un des cépages les plus acides d’Italie, ce qui en fait un compagnon idéal des sauces tomate.",
    photo: "images/vins/barbera-asti-marengo.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"chateauneuf-gigot-7h": {

    date: "02-25",

    name: "Châteauneuf-du-Pape",
    region: "Vallée du Rhône",
    aoc: "AOC Châteauneuf-du-Pape",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, sables, argiles rouges",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices, cuir",
    aromes: "Mûre, prune, poivre, réglisse, herbes sèches",

    bouche: "Ample, chaleureuse, tannins fondus, finale longue et épicée",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents mais soyeux",

    millesimes: ["2016", "2018", "2019"],
    garde: "10 à 20 ans",
    service: "16–18°C",
    alcool: "15% vol",
    prix: "25–50 €",

    accords: ["gigot-sept-heures", "gibier", "daubes"],

    domaine: "Domaine du Vieux Télégraphe",
    proprietaire: "Famille Brunier",
    anecdote: "Le plateau de La Crau, où se situe le domaine, est l’un des terroirs les plus célèbres de Châteauneuf-du-Pape.",
    photo: "images/vins/chateauneuf-gigot-7h.jpg",

    note_parker: "93–97/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"muscadet-pot-au-feu-mer": {

    date: "02-26",

    name: "Muscadet Sèvre-et-Maine sur lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss, micaschistes, roches volcaniques du vignoble nantais",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, pomme verte, notes iodées",
    aromes: "Citron, coquille d’huître, pierre humide",

    bouche: "Très fraîche, saline, tendue, finale nette",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["pot-au-feu-de-la-mer", "huitres", "fruits-de-mer"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Rémi Branger & Gwénaëlle Croix",
    anecdote: "Le Muscadet sur lie est élevé sur ses lies fines, ce qui lui donne sa texture légèrement perlante et sa grande fraîcheur.",
    photo: "images/vins/muscadet-pot-au-feu-mer.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-poulet-roti": {

    date: "02-27",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat brillant",
    nez: "Fruits rouges, épices douces, garrigue",
    aromes: "Cerise, framboise, poivre, herbes sèches",

    bouche: "Souple, ronde, fruitée, tannins doux",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2021"],
    garde: "3 à 6 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "8–15 €",

    accords: ["poulet-roti", "grillades", "ratatouille"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Guigal est l’un des producteurs les plus constants du Rhône, offrant une qualité remarquable même sur ses cuvées régionales.",
    photo: "images/vins/cotes-rhone-poulet-roti.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"biere-brune-carbonnade": {

    date: "02-28",

    name: "Bière brune belge",
    region: "Belgique",
    aoc: "Style Dubbel / Brune d’Abbaye",
    cepage: "— (orge maltée, levures d’abbaye)",
    terroir: "Brasseries traditionnelles belges",

    robe: "Brun acajou profond, mousse beige dense",
    nez: "Caramel, fruits secs, épices, malt torréfié",
    aromes: "Caramel brun, pruneau, pain grillé, épices douces",

    bouche: "Ronde, maltée, légèrement sucrée, amertume douce en finale",
    longueur: "Moyenne à longue",
    corps: "Moyen à ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "À boire jeune",
    service: "10–12°C",
    alcool: "6.5–8.5% vol",
    prix: "2–4 € la bouteille",

    accords: ["carbonnade-flamande", "plats-brasses", "fromages-lavés"],

    domaine: "Brasserie St‑Bernardus (exemple : St‑Bernardus Pater 6)",
    proprietaire: "Famille Claus",
    anecdote: "Les bières brunes belges, souvent issues de recettes monastiques, sont traditionnellement utilisées pour cuisiner la carbonnade.",
    photo: "images/vins/biere-brune-carbonnade.jpg",

    note_parker: "Non noté (bières rarement évaluées)",
    note_hachette: "—"
},
"pinot-noir-tourte-lorraine": {

    date: "02-29",

    name: "Pinot Noir d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Pinot Noir",
    cepage: "Pinot Noir",
    terroir: "Calcaires, grès, marnes, coteaux bien exposés",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges frais, épices douces",
    aromes: "Cerise, framboise, groseille, pointe poivrée",

    bouche: "Souple, fraîche, tannins fins, finale légère",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2022"],
    garde: "3 à 6 ans",
    service: "13–14°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["tourte-trois-viandes", "charcuteries", "volailles"],

    domaine: "Domaine Albert Mann",
    proprietaire: "Familles Barthelmé & Mann",
    anecdote: "Albert Mann est l’un des domaines les plus réputés d’Alsace, produisant des Pinots Noirs d’une finesse remarquable.",
    photo: "images/vins/pinot-noir-tourte-lorraine.jpg",

    note_parker: "89–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cassis-blanc-bourride": {

    date: "03-01",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la Méditerranée",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes de Provence",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["bourride-de-lotte", "poissons-mediterraneens", "fruits-de-mer"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Cassis fut l’une des premières AOC de France (1936). Ses blancs sont réputés pour leur salinité unique.",
    photo: "images/vins/cassis-blanc-bourride.jpg",

    note_parker: "89–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"sancerre-ravigote": {

    date: "03-02",

    name: "Sancerre blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes calcaires et terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, buis, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fraîches, minéralité marquée",

    bouche: "Vive, tendue, précise, finale longue et saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["tete-de-veau", "poissons-grilles", "fromages-de-chevre"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Les terroirs de silex de Sancerre donnent des Sauvignons à la minéralité fumée, parfaits avec les sauces vives.",
    photo: "images/vins/sancerre-ravigote.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-provence-blanc-blettes": {

    date: "03-03",

    name: "Côtes-de-Provence blanc",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Rolle (Vermentino), Ugni blanc, Clairette",
    terroir: "Schistes, calcaires et sables du littoral provençal",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, agrumes, herbes du maquis",
    aromes: "Citron, poire, fenouil, amande fraîche",

    bouche: "Fraîche, aromatique, légèrement ronde, finale herbacée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["gratin-blettes", "poissons-grilles", "salades-mediterraneennes"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Rolle, cépage roi des blancs provençaux, apporte fraîcheur et notes d’herbes aromatiques idéales avec les légumes du Sud.",
    photo: "images/vins/cotes-provence-blanc-blettes.jpg",

    note_parker: "88–91/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"muscadet-beurre-blanc": {

    date: "03-04",

    name: "Muscadet Sèvre-et-Maine sur lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss, micaschistes et roches volcaniques du vignoble nantais",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, pomme verte, notes iodées",
    aromes: "Citron, coquille d’huître, pierre humide",

    bouche: "Très fraîche, saline, tendue, finale nette",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["coquilles-saint-jacques", "huitres", "poissons-grilles"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Rémi Branger & Gwénaëlle Croix",
    anecdote: "Le beurre blanc est né par accident dans une auberge près de Nantes : un oubli de réduction au vin rouge devenu légende.",
    photo: "images/vins/muscadet-beurre-blanc.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"coteaux-aix-asperges": {

    date: "03-05",

    name: "Coteaux d’Aix-en-Provence blanc",
    region: "Provence",
    aoc: "AOC Coteaux d’Aix-en-Provence",
    cepage: "Rolle, Ugni blanc, Clairette",
    terroir: "Sols calcaires et argilo-sableux balayés par le mistral",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, citron, herbes fraîches",
    aromes: "Citron, poire, fenouil, amande",

    bouche: "Fraîche, vive, légèrement herbacée, finale nette",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12.5% vol",
    prix: "9–15 €",

    accords: ["omelette-asperges-sauvages", "salades-printanieres", "poissons-legers"],

    domaine: "Château Vignelaure",
    proprietaire: "Famille Van der Mersch",
    anecdote: "Le Rolle (Vermentino) est l’un des rares cépages capables de s’accorder avec les asperges grâce à son profil citronné et floral.",
    photo: "images/vins/coteaux-aix-asperges.jpg",

    note_parker: "87–90/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"bandol-pieds-paquets": {

    date: "03-06",

    name: "Bandol rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire, Grenache, Cinsault",
    terroir: "Restanques calcaires en terrasses face à la mer",

    robe: "Rouge sombre aux reflets violets",
    nez: "Fruits noirs, garrigue, cuir, épices",
    aromes: "Mûre, prune, poivre, réglisse, notes fumées",

    bouche: "Puissante, tannique mais mûre, longue et chaleureuse",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents et serrés",

    millesimes: ["2016", "2018", "2019"],
    garde: "10 à 20 ans",
    service: "16–17°C",
    alcool: "14.5% vol",
    prix: "20–40 €",

    accords: ["pieds-paquets", "daubes", "gibier"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Domaine Tempier est le domaine mythique de Bandol, révélé au monde par Kermit Lynch dans les années 1970.",
    photo: "images/vins/bandol-pieds-paquets.jpg",

    note_parker: "92–97/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"chablis-sole-meuniere": {

    date: "03-07",

    name: "Chablis",
    region: "Bourgogne",
    aoc: "AOC Chablis",
    cepage: "Chardonnay",
    terroir: "Marnes kimméridgiennes riches en fossiles marins",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre à fusil",
    aromes: "Citron, pomme verte, minéralité iodée",

    bouche: "Sèche, tendue, précise, finale longue et saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "15–25 €",

    accords: ["sole-meuniere", "coquillages", "poissons-grilles"],

    domaine: "Domaine William Fèvre",
    proprietaire: "Famille Henriot",
    anecdote: "La minéralité du Chablis provient de millions de petits fossiles marins, les exogyra virgula.",
    photo: "images/vins/chablis-sole-meuniere.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"coteaux-loir-bettes": {

    date: "03-08",

    name: "Coteaux-du-Loir blanc",
    region: "Vallée du Loir",
    aoc: "AOC Coteaux-du-Loir",
    cepage: "Chenin blanc majoritaire",
    terroir: "Argiles à silex, coteaux frais et pentus",

    robe: "Jaune clair brillant",
    nez: "Pomme, fleurs blanches, silex",
    aromes: "Citron, poire, pierre à fusil, miel sec",

    bouche: "Vive, tendue, minérale, finale fraîche",
    longueur: "Moyenne à longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "5 à 10 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["flamiche-aux-bettes", "légumes-printaniers", "poissons-legers"],

    domaine: "Domaine de Bellivière",
    proprietaire: "Éric Nicolas",
    anecdote: "Les sols de silex du Loir donnent aux Chenins une tension unique, parfaite avec les légumes légèrement amers.",
    photo: "images/vins/coteaux-loir-bettes.jpg",

    note_parker: "92–95/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"irouleguy-poulet-basquaise": {

    date: "03-09",

    name: "Irouléguy rouge",
    region: "Pays Basque",
    aoc: "AOC Irouléguy",
    cepage: "Tannat, Cabernet Franc, Cabernet Sauvignon",
    terroir: "Terrasses schisteuses et grès rouges des Pyrénées basques",

    robe: "Rouge rubis profond",
    nez: "Fruits rouges, épices, piment doux",
    aromes: "Cerise, framboise, poivre, herbes basques",

    bouche: "Fraîche, structurée, tannins fins, finale épicée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne à marquée",
    tanins: "Fins mais présents",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 10 ans",
    service: "15–16°C",
    alcool: "13.5% vol",
    prix: "12–22 €",

    accords: ["poulet-basquaise", "axoa", "charcuteries-basques"],

    domaine: "Domaine Arretxea",
    proprietaire: "Famille Riouspeyrous",
    anecdote: "Arretxea est l’un des domaines emblématiques d’Irouléguy, travaillant en biodynamie sur des terrasses spectaculaires.",
    photo: "images/vins/irouleguy-poulet-basquaise.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"beaujolais-villages-terrine": {

    date: "03-10",

    name: "Beaujolais-Villages",
    region: "Beaujolais",
    aoc: "AOC Beaujolais-Villages",
    cepage: "Gamay",
    terroir: "Granites et schistes des coteaux du nord Beaujolais",

    robe: "Rouge rubis brillant",
    nez: "Fruits rouges frais, violette",
    aromes: "Framboise, cerise, groseille, pointe épicée",

    bouche: "Souple, fraîche, fruitée, tannins très fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "2 à 5 ans",
    service: "13–14°C",
    alcool: "12.5% vol",
    prix: "8–14 €",

    accords: ["terrine-de-campagne", "charcuteries", "salades-composees"],

    domaine: "Domaine Dupeuble",
    proprietaire: "Famille Dupeuble",
    anecdote: "Le Gamay du nord Beaujolais donne des vins plus structurés que ceux du sud, parfaits avec les charcuteries.",
    photo: "images/vins/beaujolais-villages-terrine.jpg",

    note_parker: "88–91/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"sylvaner-soupe-orties": {

    date: "03-11",

    name: "Sylvaner d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Sylvaner",
    cepage: "Sylvaner",
    terroir: "Marnes, calcaires, grès, sols légers et drainants",

    robe: "Jaune pâle cristallin",
    nez: "Herbes fraîches, fleurs blanches, pomme verte",
    aromes: "Citron, herbes fines, légère minéralité",

    bouche: "Légère, fraîche, discrète, finale nette",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "2 à 4 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "8–12 €",

    accords: ["soupe-aux-orties", "salades", "poissons-legers"],

    domaine: "Domaine Mittnacht",
    proprietaire: "Famille Mittnacht",
    anecdote: "Le Sylvaner, longtemps sous-estimé, revient en force grâce à sa fraîcheur et sa polyvalence gastronomique.",
    photo: "images/vins/sylvaner-soupe-orties.jpg",

    note_parker: "Non noté régulièrement",
    note_hachette: "★★ souvent distingué"
},
"cote-rotie-cardons": {

    date: "03-12",

    name: "Côte-Rôtie",
    region: "Vallée du Rhône septentrional",
    aoc: "AOC Côte-Rôtie",
    cepage: "Syrah majoritaire, parfois Viognier",
    terroir: "Schistes et micaschistes des coteaux très pentus d’Ampuis",

    robe: "Rouge grenat sombre",
    nez: "Violette, fruits noirs, poivre, fumé",
    aromes: "Mûre, cassis, olive noire, épices, violette",

    bouche: "Élégante, profonde, tannins fins, finale longue et épicée",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Fins et serrés",

    millesimes: ["2017", "2018", "2019"],
    garde: "10 à 20 ans",
    service: "15–16°C",
    alcool: "13.5% vol",
    prix: "35–70 €",

    accords: ["gratin-cardons", "viandes-blanches-creme", "gibier-leger"],

    domaine: "Domaine Jamet",
    proprietaire: "Famille Jamet",
    anecdote: "La Côte‑Rôtie est surnommée *la reine du Rhône* pour son alliance unique de puissance et de finesse.",
    photo: "images/vins/cote-rotie-cardons.jpg",

    note_parker: "94–98/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"muscadet-moules": {

    date: "03-13",

    name: "Muscadet Sèvre-et-Maine sur lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss, micaschistes, roches volcaniques du vignoble nantais",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, pomme verte, notes iodées",
    aromes: "Citron, coquille d’huître, pierre humide",

    bouche: "Très fraîche, saline, tendue, finale nette",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["moules-marinieres", "fruits-de-mer", "poissons-grilles"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Rémi Branger & Gwénaëlle Croix",
    anecdote: "Le Muscadet est le vin traditionnel des marinières depuis des siècles, grâce à sa salinité naturelle.",
    photo: "images/vins/muscadet-moules.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"coteaux-layon-crecy": {

    date: "03-14",

    name: "Coteaux-du-Layon",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes, grès et roches volcaniques du Layon",

    robe: "Or pâle brillant",
    nez: "Fruits confits, miel, coing",
    aromes: "Abricot, poire, miel, agrumes confits",

    bouche: "Douce mais fraîche, équilibre remarquable, finale acidulée",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2018", "2020", "2021"],
    garde: "10 à 20 ans",
    service: "8–10°C",
    alcool: "11% vol",
    prix: "10–18 €",

    accords: ["potage-crecy", "foie-gras", "fromages-bleus"],

    domaine: "Domaine des Baumard",
    proprietaire: "Famille Baumard",
    anecdote: "Le Chenin moelleux, avec son équilibre sucre/acidité, sublime les légumes naturellement doux comme la carotte.",
    photo: "images/vins/coteaux-layon-crecy.jpg",

    note_parker: "92–96/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"brouilly-tartare": {

    date: "03-15",

    name: "Brouilly",
    region: "Beaujolais",
    aoc: "AOC Brouilly",
    cepage: "Gamay",
    terroir: "Granites, schistes et roches volcaniques du Mont Brouilly",

    robe: "Rouge rubis profond",
    nez: "Fruits rouges, violette, épices douces",
    aromes: "Cerise, framboise, poivre léger",

    bouche: "Souple, fraîche, fruitée, tannins très fins",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "13–14°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["steak-tartare", "charcuteries", "salades-composees"],

    domaine: "Château Thivin",
    proprietaire: "Famille Geoffray",
    anecdote: "Le Brouilly est l’un des crus les plus accessibles du Beaujolais, parfait pour les viandes crues ou peu cuites.",
    photo: "images/vins/brouilly-tartare.jpg",

    note_parker: "90–93/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"bourgogne-aligote-poireaux": {

    date: "03-16",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte Chalonnaise",

    robe: "Jaune clair brillant",
    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche, minéralité légère",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["gratin-poireaux-jambon", "salades", "poissons-legers"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "L’Aligoté, longtemps considéré comme un vin simple, connaît un renouveau spectaculaire grâce à des domaines exigeants.",
    photo: "images/vins/bourgogne-aligote-poireaux.jpg",

    note_parker: "88–91/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"irish-stout-colcannon": {

    date: "03-17",

    name: "Irish Stout",
    region: "Irlande",
    aoc: "— (style traditionnel)",
    cepage: "— (orge maltée torréfiée)",
    terroir: "Brasseries irlandaises historiques",

    robe: "Noir profond, mousse beige crémeuse",
    nez: "Café, cacao, malt torréfié",
    aromes: "Café, chocolat noir, caramel, légère amertume",

    bouche: "Crémeuse, douce-amère, légère, finale sèche",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "À boire jeune",
    service: "8–10°C",
    alcool: "4–5% vol",
    prix: "2–4 € la bouteille",

    accords: ["colcannon", "plats-irlandais", "viandes-fumees"],

    domaine: "Guinness (St. James’s Gate Brewery)",
    proprietaire: "Diageo",
    anecdote: "La Guinness est brassée à Dublin depuis 1759 et fait partie intégrante des célébrations de la Saint‑Patrick.",
    photo: "images/vins/irish-stout-colcannon.jpg",

    note_parker: "—",
    note_hachette: "—"
},
"bourgogne-blanc-fricassee": {

    date: "03-18",

    name: "Bourgogne blanc",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune clair brillant",
    nez: "Beurre frais, fleurs blanches, noisette",
    aromes: "Pomme, poire, citron, amande, légère touche boisée",

    bouche: "Ronde, ample, fraîche, finale beurrée mais tendue",
    longueur: "Moyenne à longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2021"],
    garde: "4 à 7 ans",
    service: "11–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["fricassee-poulet-champignons", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Les blancs de la Côte de Beaune sont réputés pour leur équilibre entre richesse et tension, parfaits avec les sauces crémées.",
    photo: "images/vins/bourgogne-blanc-fricassee.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cassis-rose-brandade-thon": {

    date: "03-19",

    name: "Cassis rosé",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Grenache, Cinsault, Mourvèdre",
    terroir: "Terrasses calcaires surplombant la Méditerranée",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges frais, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, touche saline",

    bouche: "Fraîche, élégante, légèrement iodée, finale nette",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 3 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["brandade-thon", "poissons-mediterraneens", "salades"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Cassis est l’une des rares appellations provençales où le rosé n’est pas majoritaire : les blancs dominent, mais les rosés sont d’une finesse remarquable.",
    photo: "images/vins/cassis-rose-brandade-thon.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"pouilly-fume-vichyssoise": {

    date: "03-20",

    name: "Pouilly-Fumé",
    region: "Val de Loire",
    aoc: "AOC Pouilly-Fumé",
    cepage: "Sauvignon blanc",
    terroir: "Silex, marnes kimméridgiennes, calcaires durs",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, minéralité fumée",

    bouche: "Vive, tendue, aromatique, finale longue et saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 8 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–28 €",

    accords: ["vichyssoise", "poireaux", "fromages-de-chevre"],

    domaine: "Domaine Didier Dagueneau",
    proprietaire: "Famille Dagueneau",
    anecdote: "Le fameux « goût de pierre à fusil » du Pouilly‑Fumé provient des sols de silex chauffés par le soleil.",
    photo: "images/vins/pouilly-fume-vichyssoise.jpg",

    note_parker: "92–97/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cerdon-pissenlit-lard": {

    date: "03-21",

    name: "Cerdon du Bugey",
    region: "Ain / Bugey",
    aoc: "AOC Bugey Cerdon",
    cepage: "Gamay, Poulsard",
    terroir: "Éboulis calcaires et marnes du Revermont",

    robe: "Rose framboise brillant, mousse fine",
    nez: "Fruits rouges frais, bonbon, fleurs",
    aromes: "Fraise, framboise, groseille, légère douceur",

    bouche: "Légère, fruitée, douce mais fraîche, très digeste",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "À boire jeune",
    service: "6–8°C",
    alcool: "7–8% vol",
    prix: "10–15 €",

    accords: ["salade-pissenlit-lard", "desserts-fruits-rouges", "apéritif"],

    domaine: "Domaine Renardat-Fache",
    proprietaire: "Famille Renardat-Fache",
    anecdote: "Le Cerdon est élaboré par méthode ancestrale : une seule fermentation interrompue par le froid, d’où son faible degré alcoolique.",
    photo: "images/vins/cerdon-pissenlit-lard.jpg",

    note_parker: "Non noté régulièrement",
    note_hachette: "★★★ souvent récompensé"
},
"savennieres-brochet": {

    date: "03-22",

    name: "Savennières",
    region: "Val de Loire",
    aoc: "AOC Savennières",
    cepage: "Chenin blanc",
    terroir: "Schistes, grès et roches volcaniques de l’Anjou noir",

    robe: "Jaune doré pâle",
    nez: "Fruits blancs, cire d’abeille, fleurs, pierre chaude",
    aromes: "Pomme, coing, miel sec, minéralité intense",

    bouche: "Puissante, sèche, structurée, longue, grande tension",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2017", "2019", "2020"],
    garde: "10 à 20 ans",
    service: "11–13°C",
    alcool: "13.5% vol",
    prix: "20–35 €",

    accords: ["brochet-beurre-blanc", "poissons-gras", "fromages-de-chevre"],

    domaine: "Domaine du Closel",
    proprietaire: "Famille de Jessey",
    anecdote: "Savennières produit certains des Chenins secs les plus puissants du monde, parfaits avec les sauces beurrées.",
    photo: "images/vins/savennieres-brochet.jpg",

    note_parker: "92–97/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"riesling-gravlax": {

    date: "03-23",

    name: "Riesling d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Riesling",
    cepage: "Riesling",
    terroir: "Marnes, calcaires, grès, coteaux ensoleillés",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pomme verte, minéralité marquée",

    bouche: "Sèche, tendue, très fraîche, finale citronnée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 12 ans",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "12–20 €",

    accords: ["saumon-gravlax", "poissons-fumes", "choucroute-de-la-mer"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Riesling sec est l’un des rares vins capables de tenir tête au sel et au sucre du gravlax.",
    photo: "images/vins/riesling-gravlax.jpg",

    note_parker: "90–95/100 selon les cuvées",
    note_hachette: "★★★ souvent récompensé"
},
"vermentino-corse-epinards": {

    date: "03-24",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites, schistes et coteaux maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, légère salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["tarte-epinards-ricotta", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le cépage blanc emblématique de la Méditerranée, particulièrement expressif en Corse.",
    photo: "images/vins/vermentino-corse-epinards.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"vin-jaune-morilles": {

    date: "03-25",

    name: "Vin Jaune",
    region: "Jura",
    aoc: "AOC Château-Chalon / Côtes du Jura",
    cepage: "Savagnin",
    terroir: "Marnes grises du Lias, coteaux exposés sud-ouest",

    robe: "Or profond aux reflets ambrés",
    nez: "Noix, curry, morille, pomme sèche",
    aromes: "Noix fraîche, épices, pomme rôtie, notes oxydatives nobles",

    bouche: "Puissante, sèche, très longue, aromatique unique",
    longueur: "Exceptionnelle",
    corps: "Ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2011", "2012", "2015"],
    garde: "30 à 50 ans",
    service: "14–15°C",
    alcool: "14.5% vol",
    prix: "45–80 €",

    accords: ["cotes-veau-morilles", "poulet-aux-morilles", "comte-affine"],

    domaine: "Domaine Jean Macle",
    proprietaire: "Famille Macle",
    anecdote: "Le vin jaune est élevé 6 ans et 3 mois sous voile, sans ouillage : un procédé unique au monde.",
    photo: "images/vins/vin-jaune-morilles.jpg",

    note_parker: "94–98/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-blanc-bouillon": {

    date: "03-26",

    name: "Côtes-du-Rhône blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne, Grenache blanc",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, abricot, miel léger",
    aromes: "Pêche, poire, amande, notes florales",

    bouche: "Souple, fraîche, aromatique, finale douce",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "8–15 €",

    accords: ["bouillon-poule", "volailles", "légumes-printaniers"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Les blancs du Rhône, souvent méconnus, offrent un rapport qualité-prix remarquable.",
    photo: "images/vins/cotes-rhone-blanc-bouillon.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"gewurztraminer-lentilles-corail": {

    date: "03-27",

    name: "Gewurztraminer d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Gewurztraminer",
    cepage: "Gewurztraminer",
    terroir: "Marnes, calcaires, grès, coteaux ensoleillés",

    robe: "Jaune doré brillant",
    nez: "Litchi, rose, épices douces",
    aromes: "Fruits exotiques, miel, épices, notes florales intenses",

    bouche: "Ample, aromatique, légèrement douce, finale épicée",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible à moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2022"],
    garde: "5 à 10 ans",
    service: "10–12°C",
    alcool: "13.5% vol",
    prix: "12–22 €",

    accords: ["creme-lentilles-corail", "cuisine-epicee", "fromages-forts"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Gewurztraminer est l’un des rares vins capables de tenir tête aux épices douces sans s’effacer.",
    photo: "images/vins/gewurztraminer-lentilles-corail.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"cotes-provence-rouge-gigot": {

    date: "03-28",

    name: "Côtes-de-Provence rouge",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Schistes, calcaires et sables du littoral provençal",

    robe: "Rouge grenat brillant",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, herbes de Provence, poivre",

    bouche: "Souple, fruitée, légèrement épicée, finale chaleureuse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2021"],
    garde: "4 à 7 ans",
    service: "15–16°C",
    alcool: "13.5% vol",
    prix: "10–18 €",

    accords: ["gigot-herbes-printemps", "grillades", "ratatouille"],

    domaine: "Château Sainte Roseline",
    proprietaire: "Famille Teillaud",
    anecdote: "Les rouges provençaux, souvent éclipsés par les rosés, offrent pourtant une finesse remarquable avec les herbes du Sud.",
    photo: "images/vins/cotes-provence-rouge-gigot.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"cotes-rhone-blanc-chartreuse": {

    date: "03-29",

    name: "Côtes-du-Rhône blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne, Grenache blanc",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, abricot, miel léger",
    aromes: "Pêche, poire, amande, notes florales",

    bouche: "Souple, fraîche, aromatique, finale douce",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "8–15 €",

    accords: ["chartreuse-legumes", "légumes-printaniers", "volailles"],

    domaine: "Domaine de la Janasse",
    proprietaire: "Famille Sabon",
    anecdote: "Les blancs du Rhône sont idéaux pour les plats végétaux grâce à leur texture douce et leurs arômes floraux.",
    photo: "images/vins/cotes-rhone-blanc-chartreuse.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★ régulièrement"
},
"sancerre-cabillaud-agrumes": {

    date: "03-30",

    name: "Sancerre blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes calcaires, terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, buis, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fraîches, minéralité marquée",

    bouche: "Vive, tendue, précise, finale longue et saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["cabillaud-beurre-agrumes", "poissons-grilles", "fromages-de-chevre"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Les sols de silex donnent aux Sancerres une tension parfaite pour les sauces citronnées.",
    photo: "images/vins/sancerre-cabillaud-agrumes.jpg",

    note_parker: "90–94/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"bourgogne-rouge-meurette": {

    date: "03-31",

    name: "Bourgogne rouge",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot Noir",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte de Nuits",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges, sous-bois, épices douces",
    aromes: "Cerise, framboise, groseille, pointe poivrée",

    bouche: "Souple, fraîche, tannins fins, finale élégante",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2022"],
    garde: "3 à 6 ans",
    service: "14–15°C",
    alcool: "13% vol",
    prix: "12–22 €",

    accords: ["oeufs-en-meurette", "volailles", "charcuteries"],

    domaine: "Domaine Tollot-Beaut",
    proprietaire: "Famille Tollot",
    anecdote: "Les œufs en meurette sont un plat emblématique des bistrots bourguignons, traditionnellement servis avec un Pinot Noir local.",
    photo: "images/vins/bourgogne-rouge-meurette.jpg",

    note_parker: "88–92/100 selon les cuvées",
    note_hachette: "★★★ régulièrement"
},
"muscadet-poisson-papillote": {

    date: "04-01",

    name: "Muscadet Sèvre-et-Maine sur lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss, micaschistes, roches volcaniques",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, pomme verte, notes iodées",
    aromes: "Citron, coquille d’huître, pierre humide",

    bouche: "Très fraîche, saline, tendue, finale nette",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "3 à 5 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["poisson-papillote", "fruits-de-mer", "poissons-grilles"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Rémi Branger & Gwénaëlle Croix",
    anecdote: "Le Muscadet est le vin traditionnel des poissons de Loire et de l’Atlantique, grâce à sa salinité naturelle.",
    photo: "images/vins/muscadet-poisson-papillote.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"pinot-blanc-asperges-blanches": {

    date: "04-02",

    name: "Pinot Blanc d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Pinot Blanc",
    cepage: "Pinot Blanc",
    terroir: "Marnes, calcaires, grès",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, pomme, herbes fines",
    aromes: "Pomme, poire, citron doux, légère minéralité",

    bouche: "Souple, fraîche, délicate, finale nette",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "9–10°C",
    alcool: "12.5% vol",
    prix: "9–15 €",

    accords: ["asperges-sauce-mousseline", "poissons-vapeur", "salades-printanieres"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Pinot Blanc est le vin traditionnel des asperges en Alsace, grâce à sa neutralité élégante.",
    photo: "images/vins/pinot-blanc-asperges-blanches.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"gigondas-agneau-paques": {

    date: "04-03",

    name: "Gigondas",
    region: "Vallée du Rhône",
    aoc: "AOC Gigondas",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Terrasses de cailloutis, argiles rouges, marnes",

    robe: "Rouge grenat profond",
    nez: "Garrigue, fruits noirs, épices",
    aromes: "Mûre, prune, poivre, herbes sèches",

    bouche: "Ample, chaleureuse, tannins mûrs, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents mais soyeux",

    millesimes: ["2018", "2019", "2020"],
    garde: "8 à 15 ans",
    service: "16–17°C",
    alcool: "14.5% vol",
    prix: "18–30 €",

    accords: ["agneau-de-paques", "gibier", "daubes"],

    domaine: "Domaine Santa Duc",
    proprietaire: "Famille Gras",
    anecdote: "Gigondas est surnommé « le petit Châteauneuf » pour sa puissance et sa garrigue aromatique.",
    photo: "images/vins/gigondas-agneau-paques.jpg",

    note_parker: "92–96/100",
    note_hachette: "★★★ régulièrement"
},
"cerdon-fraises-plougastel": {

    date: "04-04",

    name: "Cerdon du Bugey",
    region: "Ain / Bugey",
    aoc: "AOC Bugey Cerdon",
    cepage: "Gamay, Poulsard",
    terroir: "Éboulis calcaires du Revermont",

    robe: "Rose framboise brillant",
    nez: "Fraise fraîche, bonbon, fleurs",
    aromes: "Fraise, framboise, groseille, douceur légère",

    bouche: "Légère, fruitée, douce mais fraîche",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "À boire jeune",
    service: "6–8°C",
    alcool: "7–8% vol",
    prix: "10–15 €",

    accords: ["tarte-fraises-plougastel", "desserts-fruits-rouges", "apéritif"],

    domaine: "Domaine Renardat-Fache",
    proprietaire: "Famille Renardat-Fache",
    anecdote: "Le Cerdon est élaboré par méthode ancestrale, ce qui lui donne son faible degré alcoolique et sa douceur naturelle.",
    photo: "images/vins/cerdon-fraises-plougastel.jpg",

    note_parker: "—",
    note_hachette: "★★★ régulièrement"
},
"savagnin-ouille-morilles": {

    date: "04-05",

    name: "Arbois Savagnin ouillé",
    region: "Jura",
    aoc: "AOC Arbois",
    cepage: "Savagnin",
    terroir: "Marnes grises et bleues du Trias",

    robe: "Jaune doré pâle",
    nez: "Noisette, fleurs blanches, épices douces",
    aromes: "Pomme, coing, épices, minéralité marquée",

    bouche: "Ample, sèche, aromatique, finale longue",
    longueur: "Longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2021"],
    garde: "6 à 10 ans",
    service: "11–12°C",
    alcool: "13.5% vol",
    prix: "18–28 €",

    accords: ["fricassee-morilles", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Rijckaert",
    proprietaire: "Jean Rijckaert",
    anecdote: "Le Savagnin ouillé garde la pureté du cépage sans la note oxydative du vin jaune, idéal pour les sauces crémées.",
    photo: "images/vins/savagnin-ouille-morilles.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"savennieres-saumon-beurre-blanc": {

    date: "04-06",

    name: "Savennières",
    region: "Val de Loire",
    aoc: "AOC Savennières",
    cepage: "Chenin blanc",
    terroir: "Schistes et roches volcaniques de l’Anjou noir",

    robe: "Jaune doré pâle",
    nez: "Fruits blancs, cire, fleurs, pierre chaude",
    aromes: "Pomme, coing, miel sec, minéralité intense",

    bouche: "Sèche, puissante, longue, très structurée",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2018", "2019", "2020"],
    garde: "10 à 20 ans",
    service: "11–13°C",
    alcool: "13.5% vol",
    prix: "20–35 €",

    accords: ["saumon-beurre-blanc", "poissons-gras", "fromages-de-chevre"],

    domaine: "Domaine du Closel",
    proprietaire: "Famille de Jessey",
    anecdote: "Savennières produit certains des Chenins secs les plus puissants du monde.",
    photo: "images/vins/savennieres-saumon-beurre-blanc.jpg",

    note_parker: "92–97/100",
    note_hachette: "★★★ régulièrement"
},
"rivesaltes-ambre-souffle": {

    date: "04-07",

    name: "Rivesaltes Ambré",
    region: "Roussillon",
    aoc: "AOC Rivesaltes",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes, calcaires et terrasses caillouteuses",

    robe: "Ambré profond",
    nez: "Orange confite, caramel, fruits secs",
    aromes: "Miel, noix, écorces d’orange, épices douces",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "10 à 30 ans",
    service: "10–12°C",
    alcool: "16% vol",
    prix: "12–18 €",

    accords: ["souffle-grand-marnier", "desserts-agrumes", "tarte-orange"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Les Rivesaltes ambrés vieillissent longuement en fûts exposés à la chaleur, d’où leurs arômes d’orange confite.",
    photo: "images/vins/rivesaltes-ambre-souffle.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-asperges-vertes": {

    date: "04-08",

    name: "Vermentino (Rolle)",
    region: "Provence",
    aoc: "IGP Méditerranée / Côtes-de-Provence blanc",
    cepage: "Vermentino",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, légère salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["gratin-asperges-vertes", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Vermentino est le cépage blanc emblématique du littoral méditerranéen.",
    photo: "images/vins/vermentino-asperges-vertes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"chablis-roquette-saint-jacques": {

    date: "04-09",

    name: "Chablis",
    region: "Bourgogne",
    aoc: "AOC Chablis",
    cepage: "Chardonnay",
    terroir: "Marnes kimméridgiennes riches en fossiles marins",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre à fusil",
    aromes: "Citron, pomme verte, minéralité iodée",

    bouche: "Sèche, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "15–25 €",

    accords: ["salade-roquette-saint-jacques", "coquillages", "poissons-grilles"],

    domaine: "Domaine William Fèvre",
    proprietaire: "Famille Henriot",
    anecdote: "La minéralité du Chablis provient des exogyra virgula, fossiles marins présents dans les sols.",
    photo: "images/vins/chablis-roquette-saint-jacques.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"saint-emilion-agneau-flageolets": {

    date: "04-10",

    name: "Saint-Émilion Grand Cru",
    region: "Bordeaux",
    aoc: "AOC Saint-Émilion Grand Cru",
    cepage: "Merlot majoritaire, Cabernet Franc",
    terroir: "Calcaires, argiles, sables du plateau et des coteaux",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, épices, sous-bois",
    aromes: "Prune, cassis, tabac blond, vanille légère",

    bouche: "Veloutée, ample, tannins mûrs, finale longue",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Soyeux",

    millesimes: ["2016", "2018", "2019"],
    garde: "10 à 20 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "25–45 €",

    accords: ["agneau-flageolets", "gibier-leger", "viandes-roties"],

    domaine: "Château Fonroque",
    proprietaire: "Famille Guillard",
    anecdote: "Le Merlot de Saint‑Émilion est réputé pour sa texture veloutée, parfaite avec l’agneau.",
    photo: "images/vins/saint-emilion-agneau-flageolets.jpg",

    note_parker: "92–95/100",
    note_hachette: "★★★ régulièrement"
},
"quincy-epinards-chevre": {

    date: "04-11",

    name: "Quincy",
    region: "Val de Loire",
    aoc: "AOC Quincy",
    cepage: "Sauvignon blanc",
    terroir: "Sables et graves de la vallée du Cher",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, buis",
    aromes: "Citron, pamplemousse, pomme verte, minéralité légère",

    bouche: "Vive, fraîche, aromatique, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "3 à 5 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–16 €",

    accords: ["tarte-epinards-chevre", "fromages-de-chevre", "salades-printanieres"],

    domaine: "Domaine Jacques Rouzé",
    proprietaire: "Famille Rouzé",
    anecdote: "Quincy fut la deuxième AOC de France (1936), juste après Châteauneuf-du-Pape.",
    photo: "images/vins/quincy-epinards-chevre.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"soave-risotto-asperges": {

    date: "04-12",

    name: "Soave Classico",
    region: "Vénétie (Italie)",
    aoc: "DOC Soave Classico",
    cepage: "Garganega",
    terroir: "Basaltes volcaniques et calcaires des collines de Soave",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, amande, agrumes",
    aromes: "Citron, pêche blanche, amande, minéralité",

    bouche: "Fraîche, élégante, légèrement saline, finale longue",
    longueur: "Moyenne à longue",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "10–12°C",
    alcool: "12% vol",
    prix: "10–18 €",

    accords: ["risotto-asperges", "pâtes-creme", "poissons-legers"],

    domaine: "Pieropan",
    proprietaire: "Famille Pieropan",
    anecdote: "Le Soave Classico est l’un des meilleurs accords au monde avec les asperges.",
    photo: "images/vins/soave-risotto-asperges.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"coteaux-aix-omelette-asperges": {

    date: "04-13",

    name: "Coteaux d’Aix-en-Provence blanc",
    region: "Provence",
    aoc: "AOC Coteaux d’Aix-en-Provence",
    cepage: "Rolle, Ugni blanc, Clairette",
    terroir: "Sols calcaires et argilo-sableux",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, citron, herbes fraîches",
    aromes: "Citron, poire, fenouil, amande",

    bouche: "Fraîche, vive, légèrement herbacée, finale nette",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12.5% vol",
    prix: "9–15 €",

    accords: ["omelette-asperges", "salades-printanieres", "poissons-legers"],

    domaine: "Château Vignelaure",
    proprietaire: "Famille Van der Mersch",
    anecdote: "Le Rolle est l’un des rares cépages qui s’accorde naturellement avec les asperges.",
    photo: "images/vins/coteaux-aix-omelette-asperges.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"roussette-savoie-truite-amandes": {

    date: "04-14",

    name: "Roussette de Savoie",
    region: "Savoie",
    aoc: "AOC Roussette de Savoie",
    cepage: "Altesse",
    terroir: "Éboulis calcaires et moraines glaciaires",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, miel léger, pierre humide",
    aromes: "Pomme, poire, amande, minéralité",

    bouche: "Fraîche, élégante, légèrement saline, finale longue",
    longueur: "Moyenne à longue",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 7 ans",
    service: "10–12°C",
    alcool: "12% vol",
    prix: "10–18 €",

    accords: ["truite-aux-amandes", "poissons-grilles", "fromages-savoyards"],

    domaine: "Domaine Dupasquier",
    proprietaire: "Famille Dupasquier",
    anecdote: "L’Altesse est l’un des plus grands cépages blancs de montagne, trop méconnu.",
    photo: "images/vins/roussette-savoie-truite-amandes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"sancerre-veloute-oseille": {

    date: "04-15",

    name: "Sancerre blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes calcaires, terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fines, minéralité marquée",

    bouche: "Vive, tendue, précise, finale longue et saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["veloute-oseille", "poissons-vapeur", "fromages-de-chevre"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "L’oseille est l’un des légumes les plus difficiles à accorder : le Sauvignon est l’un des rares vins qui fonctionne.",
    photo: "images/vins/sancerre-veloute-oseille.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"reuilly-berrichon": {

    date: "04-16",

    name: "Reuilly rouge",
    region: "Val de Loire",
    aoc: "AOC Reuilly",
    cepage: "Pinot Noir",
    terroir: "Graviers, calcaires et argiles légères",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges frais, épices douces",
    aromes: "Cerise, framboise, groseille, pointe poivrée",

    bouche: "Souple, fraîche, tannins fins, finale élégante",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "13–14°C",
    alcool: "12.5% vol",
    prix: "10–16 €",

    accords: ["pate-paques-berrichon", "charcuteries", "volailles"],

    domaine: "Domaine Valéry Renaudat",
    proprietaire: "Valéry Renaudat",
    anecdote: "Reuilly est l’un des trois grands vignobles du Berry avec Quincy et Sancerre.",
    photo: "images/vins/reuilly-berrichon.jpg",

    note_parker: "—",
    note_hachette: "★★ régulièrement"
},
"cassis-blanc-brandade-cabillaud": {

    date: "04-17",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la mer",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes du maquis",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["brandade-cabillaud-herbes", "poissons-mediterraneens", "fruits-de-mer"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Cassis fut l’une des premières AOC de France (1936).",
    photo: "images/vins/cassis-blanc-brandade-cabillaud.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"cerdon-pissenlits-noix": {

    date: "04-18",

    name: "Cerdon du Bugey",
    region: "Ain / Bugey",
    aoc: "AOC Bugey Cerdon",
    cepage: "Gamay, Poulsard",
    terroir: "Éboulis calcaires du Revermont",

    robe: "Rose framboise brillant",
    nez: "Fruits rouges frais, fleurs",
    aromes: "Fraise, framboise, groseille, douceur légère",

    bouche: "Légère, fruitée, douce mais fraîche",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "À boire jeune",
    service: "6–8°C",
    alcool: "7–8% vol",
    prix: "10–15 €",

    accords: ["salade-pissenlits-noix", "desserts-fruits-rouges", "apéritif"],

    domaine: "Domaine Renardat-Fache",
    proprietaire: "Famille Renardat-Fache",
    anecdote: "La méthode ancestrale donne au Cerdon son faible degré alcoolique.",
    photo: "images/vins/cerdon-pissenlits-noix.jpg",

    note_parker: "—",
    note_hachette: "★★★ régulièrement"
},
"saint-veran-emince-veau": {

    date: "04-19",

    name: "Saint-Véran",
    region: "Bourgogne",
    aoc: "AOC Saint-Véran",
    cepage: "Chardonnay",
    terroir: "Calcaires et marnes du Mâconnais",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, beurre frais, agrumes",
    aromes: "Pomme, poire, citron, amande",

    bouche: "Ronde, fraîche, élégante, finale beurrée mais tendue",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 6 ans",
    service: "11–12°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["emince-veau-printanier", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Corsin",
    proprietaire: "Famille Corsin",
    anecdote: "Saint‑Véran est l’un des meilleurs rapports qualité‑prix de Bourgogne.",
    photo: "images/vins/saint-veran-emince-veau.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"pouilly-fume-poireaux-saumon": {

    date: "04-20",

    name: "Pouilly-Fumé",
    region: "Val de Loire",
    aoc: "AOC Pouilly-Fumé",
    cepage: "Sauvignon blanc",
    terroir: "Silex, marnes kimméridgiennes, calcaires durs",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, minéralité fumée",

    bouche: "Vive, tendue, aromatique, finale longue et saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 8 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–28 €",

    accords: ["tarte-poireaux-saumon", "poissons-fumes", "fromages-de-chevre"],

    domaine: "Domaine Didier Dagueneau",
    proprietaire: "Famille Dagueneau",
    anecdote: "Le fameux goût de « pierre à fusil » vient des sols de silex chauffés par le soleil.",
    photo: "images/vins/pouilly-fume-poireaux-saumon.jpg",

    note_parker: "92–97/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-poulet-ail": {

    date: "04-21",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat brillant",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, poivre, herbes sèches",

    bouche: "Souple, fruitée, légèrement épicée, tannins fins",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "8–15 €",

    accords: ["poulet-40-gousses-ail", "grillades", "plats-provencaux"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "L’ail confit devient doux et sucré : il s’accorde mieux avec des rouges souples qu’avec des blancs.",
    photo: "images/vins/cotes-rhone-poulet-ail.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"vouvray-cresson": {

    date: "04-22",

    name: "Vouvray sec",
    region: "Val de Loire",
    aoc: "AOC Vouvray",
    cepage: "Chenin blanc",
    terroir: "Tuffeau, argiles à silex, coteaux de Loire",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, pomme, miel léger",
    aromes: "Pomme, poire, citron, minéralité",

    bouche: "Vive, tendue, élégante, finale fraîche",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "5 à 10 ans",
    service: "10–11°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["soupe-au-cresson", "poissons-vapeur", "fromages-de-chevre"],

    domaine: "Domaine Huet",
    proprietaire: "Famille Hwang",
    anecdote: "Le Chenin sec est l’un des meilleurs accords avec les légumes verts poivrés comme le cresson.",
    photo: "images/vins/vouvray-cresson.jpg",

    note_parker: "92–96/100",
    note_hachette: "★★★ régulièrement"
},
"bandol-cotelettes-agneau": {

    date: "04-23",

    name: "Bandol rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rouge sombre aux reflets violets",
    nez: "Fruits noirs, garrigue, cuir, épices",
    aromes: "Mûre, prune, poivre, réglisse",

    bouche: "Puissante, tannique mais mûre, longue et épicée",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents et serrés",

    millesimes: ["2017", "2018", "2019"],
    garde: "10 à 20 ans",
    service: "16–17°C",
    alcool: "14.5% vol",
    prix: "20–40 €",

    accords: ["cotelettes-agneau-grillees", "daubes", "gibier"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Mourvèdre adore les grillades et les herbes de Provence : c’est l’accord régional parfait.",
    photo: "images/vins/bandol-cotelettes-agneau.jpg",

    note_parker: "92–97/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-provence-rose-nicoise": {

    date: "04-24",

    name: "Côtes-de-Provence rosé",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Cinsault, Tibouren",
    terroir: "Schistes, calcaires, sables du littoral",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, salinité",

    bouche: "Fraîche, sèche, élégante, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022", "2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["salade-nicoise", "poissons-mediterraneens", "apéritif"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Tibouren, cépage rare, apporte finesse et notes iodées idéales pour la cuisine niçoise.",
    photo: "images/vins/cotes-provence-rose-nicoise.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"txakoli-ceviche-daurade": {

    date: "04-25",

    name: "Txakoli",
    region: "Pays Basque (Espagne)",
    aoc: "DO Getariako Txakolina",
    cepage: "Hondarrabi Zuri",
    terroir: "Coteaux maritimes, sols sableux et calcaires",

    robe: "Jaune très pâle, reflets verts",
    nez: "Citron vert, pomme verte, herbes fraîches",
    aromes: "Citron, salinité, notes légèrement perlantes",

    bouche: "Très vive, saline, nerveuse, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "2 ans",
    service: "7–9°C",
    alcool: "11% vol",
    prix: "10–18 €",

    accords: ["ceviche-daurade", "poissons-crus", "fruits-de-mer"],

    domaine: "Ameztoi",
    proprietaire: "Famille Ameztoi",
    anecdote: "Le Txakoli est traditionnellement servi en hauteur pour réveiller sa légère effervescence.",
    photo: "images/vins/txakoli-ceviche-daurade.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
"bourgogne-blanc-choufleur": {

    date: "04-26",

    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, beurre frais, agrumes",
    aromes: "Pomme, poire, citron, amande",

    bouche: "Ronde, fraîche, élégante, finale beurrée mais tendue",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "11–12°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["gratin-choufleur-mornay", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Un Chardonnay non boisé respecte la délicatesse du chou‑fleur sans l’écraser.",
    photo: "images/vins/bourgogne-blanc-choufleur.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★★ régulièrement"
},
"muscat-rivesaltes-tarte-citron": {

    date: "04-27",

    name: "Muscat de Rivesaltes",
    region: "Roussillon",
    aoc: "AOC Muscat de Rivesaltes",
    cepage: "Muscat à petits grains, Muscat d’Alexandrie",
    terroir: "Schistes, calcaires, terrasses caillouteuses",

    robe: "Or pâle brillant",
    nez: "Fleurs blanches, raisin frais, agrumes",
    aromes: "Citron confit, miel, pêche blanche",

    bouche: "Douce, fraîche, aromatique, finale citronnée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "5 à 10 ans",
    service: "8–10°C",
    alcool: "15% vol",
    prix: "10–15 €",

    accords: ["tarte-citron-meringuee", "desserts-agrumes", "salades-fruitees"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Le Muscat est l’un des rares vins capables de tenir tête à l’acidité du citron.",
    photo: "images/vins/muscat-rivesaltes-tarte-citron.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"coteaux-aix-rose-pistou": {

    date: "04-28",

    name: "Coteaux d’Aix-en-Provence rosé",
    region: "Provence",
    aoc: "AOC Coteaux d’Aix-en-Provence",
    cepage: "Grenache, Cinsault, Syrah",
    terroir: "Sols calcaires et argilo-sableux",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, basilic",

    bouche: "Fraîche, sèche, aromatique, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022", "2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "9–15 €",

    accords: ["pasta-pistou-printemps", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Vignelaure",
    proprietaire: "Famille Van der Mersch",
    anecdote: "Le pistou provençal adore les rosés secs et herbacés.",
    photo: "images/vins/coteaux-aix-rose-pistou.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"vermentino-corse-pois-gourmands": {

    date: "04-29",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-pois-gourmands", "poissons-grilles", "salades-mediterraneennes"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le cépage roi de la Méditerranée, parfait avec les légumes verts.",
    photo: "images/vins/vermentino-corse-pois-gourmands.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"gros-plant-sardines": {

    date: "04-30",

    name: "Gros-Plant du Pays Nantais",
    region: "Val de Loire",
    aoc: "AOC Gros-Plant du Pays Nantais",
    cepage: "Folle Blanche",
    terroir: "Gneiss, schistes, roches volcaniques du littoral nantais",

    robe: "Jaune très pâle",
    nez: "Citron, pomme verte, iode",
    aromes: "Citron, salinité, herbes fraîches",

    bouche: "Très vive, sèche, saline, finale citronnée",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 ans",
    service: "8–10°C",
    alcool: "11% vol",
    prix: "6–10 €",

    accords: ["rillettes-sardines", "huitres", "fruits-de-mer"],

    domaine: "Domaine de la Grange",
    proprietaire: "Famille Perraud",
    anecdote: "Le Gros‑Plant est le vin le plus iodé de Loire, parfait avec les poissons bleus.",
    photo: "images/vins/gros-plant-sardines.jpg",

    note_parker: "—",
    note_hachette: "★★ régulièrement"
},
"sancerre-rose-radis": {

    date: "05-01",

    name: "Sancerre rosé",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Pinot Noir",
    terroir: "Caillottes calcaires et silex",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges frais, fleurs, herbes fines",
    aromes: "Fraise, groseille, framboise, pointe végétale",

    bouche: "Vive, sèche, élégante, finale fraîche",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Très fins",

    millesimes: ["2022", "2023"],
    garde: "2 ans",
    service: "9–10°C",
    alcool: "12.5% vol",
    prix: "12–20 €",

    accords: ["salade-radis-beurre", "crudites", "salades-printanieres"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Le rosé de Sancerre, rare, est l’un des meilleurs accords avec les légumes crus.",
    photo: "images/vins/sancerre-rose-radis.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-asperges-plancha": {

    date: "05-02",

    name: "Vermentino (Rolle)",
    region: "Provence / Languedoc",
    aoc: "IGP Méditerranée",
    cepage: "Vermentino",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, fenouil, herbes du maquis",
    aromes: "Citron, poire, herbes fraîches, salinité",

    bouche: "Fraîche, vive, légèrement herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 3 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "9–15 €",

    accords: ["asperges-plancha", "poissons-grilles", "salades-mediterraneennes"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Vermentino est l’un des rares vins qui s’accorde avec les asperges vertes grillées.",
    photo: "images/vins/vermentino-asperges-plancha.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"cerdon-tarte-fraises-creme": {

    date: "05-03",

    name: "Cerdon du Bugey",
    region: "Ain / Bugey",
    aoc: "AOC Bugey Cerdon",
    cepage: "Gamay, Poulsard",
    terroir: "Éboulis calcaires du Revermont",

    robe: "Rose framboise brillant",
    nez: "Fraise fraîche, bonbon, fleurs",
    aromes: "Fraise, framboise, groseille, douceur légère",

    bouche: "Légère, fruitée, douce mais fraîche",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "À boire jeune",
    service: "6–8°C",
    alcool: "7–8% vol",
    prix: "10–15 €",

    accords: ["tarte-fraises-creme", "desserts-fruits-rouges", "apéritif"],

    domaine: "Domaine Renardat-Fache",
    proprietaire: "Famille Renardat-Fache",
    anecdote: "Le Cerdon est l’accord le plus naturel avec les desserts aux fraises.",
    photo: "images/vins/cerdon-tarte-fraises-creme.jpg",

    note_parker: "—",
    note_hachette: "★★★ régulièrement"
},
"saint-veran-blanquette-legumes": {

    date: "05-04",

    name: "Saint-Véran",
    region: "Bourgogne",
    aoc: "AOC Saint-Véran",
    cepage: "Chardonnay",
    terroir: "Calcaires et marnes du Mâconnais",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, beurre frais, agrumes",
    aromes: "Pomme, poire, citron, amande",

    bouche: "Ronde, fraîche, élégante, finale beurrée mais tendue",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 6 ans",
    service: "11–12°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["blanquette-legumes", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Corsin",
    proprietaire: "Famille Corsin",
    anecdote: "Saint‑Véran est l’un des meilleurs rapports qualité‑prix de Bourgogne.",
    photo: "images/vins/saint-veran-blanquette-legumes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-poulet-herbes": {

    date: "05-05",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat brillant",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, poivre, herbes sèches",

    bouche: "Souple, fruitée, légèrement épicée, tannins fins",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "8–15 €",

    accords: ["poulet-roti-herbes-fraiches", "grillades", "plats-provencaux"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Les herbes fraîches du jardin s’accordent parfaitement avec les rouges du Rhône méridional.",
    photo: "images/vins/cotes-rhone-poulet-herbes.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"vermentino-corse-feves-menthe": {

    date: "05-06",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-feves-menthe", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le cépage roi de la Méditerranée, parfait avec les légumes verts crus.",
    photo: "images/vins/vermentino-corse-feves-menthe.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"chablis-1ercru-saint-pierre": {

    date: "05-07",

    name: "Chablis 1er Cru",
    region: "Bourgogne",
    aoc: "AOC Chablis 1er Cru",
    cepage: "Chardonnay",
    terroir: "Marnes kimméridgiennes riches en fossiles marins",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre à fusil",
    aromes: "Citron, pomme verte, minéralité iodée",

    bouche: "Sèche, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2021"],
    garde: "6 à 10 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "22–35 €",

    accords: ["saint-pierre-capres", "coquillages", "poissons-grilles"],

    domaine: "Domaine William Fèvre",
    proprietaire: "Famille Henriot",
    anecdote: "La minéralité du Chablis provient des exogyra virgula, fossiles marins présents dans les sols.",
    photo: "images/vins/chablis-1ercru-saint-pierre.jpg",

    note_parker: "92–95/100",
    note_hachette: "★★★ régulièrement"
},
"vinho-verde-petits-pois": {

    date: "05-08",

    name: "Vinho Verde",
    region: "Minho (Portugal)",
    aoc: "DOC Vinho Verde",
    cepage: "Loureiro, Arinto, Trajadura",
    terroir: "Granites et sols alluviaux atlantiques",

    robe: "Jaune très pâle, reflets verts",
    nez: "Citron vert, pomme verte, herbes fraîches",
    aromes: "Citron, salinité, légère effervescence",

    bouche: "Très vive, perlante, fraîche, finale citronnée",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "1 à 2 ans",
    service: "7–9°C",
    alcool: "10–11% vol",
    prix: "6–12 €",

    accords: ["veloute-petits-pois", "salades-vertes", "poissons-crus"],

    domaine: "Quinta da Aveleda",
    proprietaire: "Famille Guedes",
    anecdote: "Le Vinho Verde est traditionnellement servi très frais pour accentuer sa vivacité.",
    photo: "images/vins/vinho-verde-petits-pois.jpg",

    note_parker: "—",
    note_hachette: "—"
},
"aligote-omelette-herbes": {

    date: "05-09",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte Chalonnaise",

    robe: "Jaune clair brillant",
    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["omelette-fines-herbes", "salades", "poissons-legers"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "L’Aligoté connaît un renouveau spectaculaire grâce à des domaines exigeants.",
    photo: "images/vins/aligote-omelette-herbes.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"cotes-provence-blanc-artichauts": {

    date: "05-10",

    name: "Côtes-de-Provence blanc",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Rolle, Ugni blanc, Clairette",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, citron, herbes du maquis",
    aromes: "Citron, poire, fenouil, amande",

    bouche: "Fraîche, vive, légèrement herbacée, finale nette",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-artichauts-violets", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Vignelaure",
    proprietaire: "Famille Van der Mersch",
    anecdote: "L’artichaut neutralise de nombreux vins : le Rolle reste l’un des rares à tenir tête.",
    photo: "images/vins/cotes-provence-blanc-artichauts.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"riesling-carpe-juive": {

    date: "05-11",

    name: "Riesling d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Riesling",
    cepage: "Riesling",
    terroir: "Marnes, calcaires, grès, coteaux ensoleillés",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pomme verte, minéralité marquée",

    bouche: "Sèche, tendue, très fraîche, finale citronnée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 12 ans",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "12–20 €",

    accords: ["carpe-a-la-juive", "poissons-froids", "asperges"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Riesling est le roi des poissons froids et des gelées grâce à sa tension naturelle.",
    photo: "images/vins/riesling-carpe-juive.jpg",

    note_parker: "90–95/100",
    note_hachette: "★★★ régulièrement"
},
"soave-gnocchis-pesto": {

    date: "05-12",

    name: "Soave Classico",
    region: "Vénétie (Italie)",
    aoc: "DOC Soave Classico",
    cepage: "Garganega",
    terroir: "Basaltes volcaniques et calcaires des collines de Soave",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, amande, agrumes",
    aromes: "Citron, pêche blanche, amande, minéralité",

    bouche: "Fraîche, élégante, légèrement saline, finale longue",
    longueur: "Moyenne à longue",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 6 ans",
    service: "10–12°C",
    alcool: "12% vol",
    prix: "10–18 €",

    accords: ["gnocchis-pesto", "pâtes-creme", "poissons-legers"],

    domaine: "Pieropan",
    proprietaire: "Famille Pieropan",
    anecdote: "Le Soave est l’accord italien traditionnel des plats au basilic.",
    photo: "images/vins/soave-gnocchis-pesto.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"beaujolais-villages-foie-volaille": {

    date: "05-13",

    name: "Beaujolais-Villages",
    region: "Beaujolais",
    aoc: "AOC Beaujolais-Villages",
    cepage: "Gamay",
    terroir: "Granites et schistes du nord Beaujolais",

    robe: "Rouge rubis brillant",
    nez: "Fruits rouges frais, violette",
    aromes: "Framboise, cerise, groseille, pointe épicée",

    bouche: "Souple, fraîche, fruitée, tannins très fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "2 à 5 ans",
    service: "13–14°C",
    alcool: "12.5% vol",
    prix: "8–14 €",

    accords: ["terrine-foie-volaille", "charcuteries", "salades-composees"],

    domaine: "Domaine Dupeuble",
    proprietaire: "Famille Dupeuble",
    anecdote: "Le Gamay est le compagnon idéal des entrées charcutières.",
    photo: "images/vins/beaujolais-villages-foie-volaille.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"cotes-provence-rose-tomates": {

    date: "05-14",

    name: "Côtes-de-Provence rosé",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Cinsault, Tibouren",
    terroir: "Schistes, calcaires, sables du littoral",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, basilic",

    bouche: "Fraîche, sèche, élégante, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022", "2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["tarte-fine-tomates", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Tibouren apporte finesse et notes iodées idéales pour les plats provençaux.",
    photo: "images/vins/cotes-provence-rose-tomates.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"assyrtiko-quinoa-petits-pois": {

    date: "05-15",

    name: "Assyrtiko",
    region: "Santorin (Grèce)",
    aoc: "PDO Santorini",
    cepage: "Assyrtiko",
    terroir: "Sols volcaniques basaltiques très minéraux",

    robe: "Jaune pâle brillant",
    nez: "Citron, pierre chaude, herbes sèches",
    aromes: "Citron, salinité, pierre à fusil, herbes fines",

    bouche: "Très sèche, tendue, saline, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "18–28 €",

    accords: ["salade-quinoa-petits-pois", "fromages-frais", "poissons-crus"],

    domaine: "Domaine Sigalas",
    proprietaire: "Famille Sigalas",
    anecdote: "L’Assyrtiko est l’un des vins les plus salins du monde, parfait avec la feta.",
    photo: "images/vins/assyrtiko-quinoa-petits-pois.jpg",

    note_parker: "92–95/100",
    note_hachette: "—"
},
"champagne-rose-fraisier": {

    date: "05-16",

    name: "Champagne rosé",
    region: "Champagne",
    aoc: "AOC Champagne",
    cepage: "Pinot Noir, Chardonnay",
    terroir: "Craie, calcaires, sables du bassin champenois",

    robe: "Rose saumoné brillant",
    nez: "Fraise fraîche, brioche, agrumes",
    aromes: "Fraise, framboise, biscuit, pointe florale",

    bouche: "Fine, fraîche, élégante, bulles délicates",
    longueur: "Moyenne à longue",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Très fins",

    millesimes: ["NV"],
    garde: "2 à 4 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "25–45 €",

    accords: ["fraisier", "desserts-fruits-rouges", "apéritif"],

    domaine: "Ruinart",
    proprietaire: "LVMH",
    anecdote: "Le Champagne rosé est l’accord le plus élégant avec les desserts aux fraises.",
    photo: "images/vins/champagne-rose-fraisier.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"cassis-blanc-daurade": {

    date: "05-17",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la mer",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes du maquis",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["daurade-grille-herbes", "poissons-mediterraneens", "fruits-de-mer"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Cassis fut l’une des premières AOC de France (1936).",
    photo: "images/vins/cassis-blanc-daurade.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"bardolino-carpaccio-boeuf": {

    date: "05-18",

    name: "Bardolino",
    region: "Vénétie (Italie)",
    aoc: "DOC Bardolino",
    cepage: "Corvina, Rondinella, Molinara",
    terroir: "Collines morainiques autour du lac de Garde",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges frais, violette",
    aromes: "Cerise, framboise, épices douces",

    bouche: "Très légère, fraîche, fruitée, tannins imperceptibles",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 3 ans",
    service: "12–14°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["carpaccio-boeuf", "salades", "charcuteries"],

    domaine: "Guerrieri Rizzardi",
    proprietaire: "Famille Rizzardi",
    anecdote: "Bardolino est souvent décrit comme le ‘Beaujolais italien’.",
    photo: "images/vins/bardolino-carpaccio-boeuf.jpg",

    note_parker: "—",
    note_hachette: "—"
},
"manzanilla-gaspacho": {

    date: "05-19",

    name: "Manzanilla",
    region: "Andalousie (Espagne)",
    aoc: "DO Manzanilla-Sanlúcar de Barrameda",
    cepage: "Palomino Fino",
    terroir: "Albariza (craie blanche marine)",

    robe: "Jaune paille très clair",
    nez: "Amande, camomille, iode",
    aromes: "Amande fraîche, sel, pomme verte, herbes sèches",

    bouche: "Très sèche, saline, tranchante, finale longue",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "À boire jeune",
    service: "7–9°C",
    alcool: "15% vol",
    prix: "10–18 €",

    accords: ["gaspacho", "tapas", "poissons-crus"],

    domaine: "Bodegas Hidalgo-La Gitana",
    proprietaire: "Famille Hidalgo",
    anecdote: "La Manzanilla vieillit au bord de l’océan, d’où sa salinité unique.",
    photo: "images/vins/manzanilla-gaspacho.jpg",

    note_parker: "90–94/100",
    note_hachette: "—"
},
"cotes-roussillon-crapaudine": {

    date: "05-20",

    name: "Côtes-du-Roussillon rouge",
    region: "Roussillon",
    aoc: "AOC Côtes-du-Roussillon",
    cepage: "Grenache, Carignan, Syrah",
    terroir: "Schistes, gneiss, terrasses caillouteuses",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, poivre, herbes sèches",

    bouche: "Charnue, chaleureuse, tannins mûrs, finale épicée",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Présents mais souples",

    millesimes: ["2019", "2020", "2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "14.5% vol",
    prix: "8–15 €",

    accords: ["poulet-crapaudine", "grillades", "plats-provencaux"],

    domaine: "Domaine Gauby",
    proprietaire: "Famille Gauby",
    anecdote: "Le Roussillon produit certains des rouges méditerranéens les plus digestes grâce à son altitude.",
    photo: "images/vins/cotes-roussillon-crapaudine.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"muscat-beaumes-melon-porto": {

    date: "05-21",

    name: "Muscat de Beaumes-de-Venise",
    region: "Vallée du Rhône",
    aoc: "AOC Muscat de Beaumes-de-Venise",
    cepage: "Muscat à petits grains",
    terroir: "Terrasses sableuses et calcaires du Ventoux",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches, abricot",
    aromes: "Pêche, miel léger, agrumes confits",

    bouche: "Douce, fraîche, aromatique, finale fruitée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "3 à 5 ans",
    service: "8–10°C",
    alcool: "15% vol",
    prix: "12–18 €",

    accords: ["melon-porto-jambon", "desserts-fruits", "apéritif"],

    domaine: "Domaine des Bernardins",
    proprietaire: "Famille Castaud",
    anecdote: "Le Muscat à petits grains est l’un des cépages les plus aromatiques au monde.",
    photo: "images/vins/muscat-beaumes-melon-porto.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"roussette-savoie-ravioles": {

    date: "05-22",

    name: "Roussette de Savoie",
    region: "Savoie",
    aoc: "AOC Roussette de Savoie",
    cepage: "Altesse",
    terroir: "Éboulis calcaires et moraines glaciaires",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, miel léger, pierre humide",
    aromes: "Pomme, poire, amande, minéralité",

    bouche: "Fraîche, élégante, légèrement saline, finale longue",
    longueur: "Moyenne à longue",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 7 ans",
    service: "10–12°C",
    alcool: "12% vol",
    prix: "10–18 €",

    accords: ["ravioles-dauphine", "poissons-grilles", "fromages-savoyards"],

    domaine: "Domaine Dupasquier",
    proprietaire: "Famille Dupasquier",
    anecdote: "L’Altesse est l’un des plus grands cépages blancs de montagne, trop méconnu.",
    photo: "images/vins/roussette-savoie-ravioles.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"cahors-magret-cerises": {

    date: "05-23",

    name: "Cahors",
    region: "Sud-Ouest",
    aoc: "AOC Cahors",
    cepage: "Malbec majoritaire",
    terroir: "Terrasses calcaires et argilo-graveleuses du Lot",

    robe: "Rouge noir profond",
    nez: "Fruits noirs, violette, épices",
    aromes: "Cassis, mûre, cerise noire, poivre",

    bouche: "Puissante, fraîche, tannins serrés mais mûrs, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne à marquée",
    tanins: "Présents",

    millesimes: ["2018", "2019", "2020"],
    garde: "8 à 15 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "10–20 €",

    accords: ["magret-canard-cerises", "gibier", "viandes-roties"],

    domaine: "Château du Cèdre",
    proprietaire: "Famille Verhaeghe",
    anecdote: "Le Malbec de Cahors est surnommé ‘le vin noir’ depuis le Moyen Âge.",
    photo: "images/vins/cahors-magret-cerises.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"sylvaner-aspic-legumes": {

    date: "05-24",

    name: "Sylvaner d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Sylvaner",
    cepage: "Sylvaner",
    terroir: "Marnes, calcaires, grès, sols légers et drainants",

    robe: "Jaune pâle cristallin",
    nez: "Herbes fraîches, fleurs blanches, pomme verte",
    aromes: "Citron, herbes fines, légère minéralité",

    bouche: "Légère, fraîche, discrète, finale nette",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "2 à 4 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "8–12 €",

    accords: ["aspic-legumes", "salades", "poissons-legers"],

    domaine: "Domaine Mittnacht",
    proprietaire: "Famille Mittnacht",
    anecdote: "Le Sylvaner est le vin idéal des plats froids et des légumes croquants.",
    photo: "images/vins/sylvaner-aspic-legumes.jpg",

    note_parker: "—",
    note_hachette: "★★ souvent distingué"
},
"cotes-provence-rouge-agneau-romarin": {

    date: "05-25",

    name: "Côtes-de-Provence rouge",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Schistes, calcaires et sables du littoral provençal",

    robe: "Rouge grenat brillant",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, herbes de Provence, poivre",

    bouche: "Souple, fruitée, légèrement épicée, finale chaleureuse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019", "2020", "2021"],
    garde: "4 à 7 ans",
    service: "15–16°C",
    alcool: "13.5% vol",
    prix: "10–18 €",

    accords: ["grillades-agneau-romarin", "grillades", "ratatouille"],

    domaine: "Château Sainte Roseline",
    proprietaire: "Famille Teillaud",
    anecdote: "Les rouges provençaux sont parfaits avec les herbes grillées et les braises.",
    photo: "images/vins/cotes-provence-rouge-agneau-romarin.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"moscato-asti-fraises-basilic": {

    date: "05-26",

    name: "Moscato d’Asti",
    region: "Piémont (Italie)",
    aoc: "DOCG Moscato d’Asti",
    cepage: "Muscat blanc à petits grains",
    terroir: "Collines calcaires et marneuses d’Asti",

    robe: "Or pâle brillant",
    nez: "Fleurs blanches, raisin frais, pêche",
    aromes: "Fraise, miel léger, agrumes doux",

    bouche: "Douce, pétillante, très aromatique, faible alcool",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "1 à 2 ans",
    service: "6–8°C",
    alcool: "5–6% vol",
    prix: "8–14 €",

    accords: ["salade-fraises-basilic", "desserts-fruits-rouges", "tartes-fruits"],

    domaine: "Vietti",
    proprietaire: "Famille Currado",
    anecdote: "Le Moscato d’Asti est l’un des rares vins qui respecte totalement la fraise fraîche.",
    photo: "images/vins/moscato-asti-fraises-basilic.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
"languedoc-blanc-courgettes-chevre": {

    date: "05-27",

    name: "Languedoc blanc",
    region: "Languedoc",
    aoc: "AOC Languedoc",
    cepage: "Rolle, Grenache blanc, Clairette",
    terroir: "Calcaires, schistes et galets roulés",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, poire, herbes fraîches, amande",

    bouche: "Fraîche, souple, aromatique, finale douce",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "8–14 €",

    accords: ["terrine-courgettes-chevre", "salades-mediterraneennes", "poissons-legers"],

    domaine: "Domaine de l’Hortus",
    proprietaire: "Famille Orliac",
    anecdote: "Les blancs du Languedoc sont parfaits avec les légumes d’été et les fromages frais.",
    photo: "images/vins/languedoc-blanc-courgettes-chevre.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"bandol-rose-tomates-thon": {

    date: "05-28",

    name: "Bandol rosé",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Pêche blanche, fraise, salinité, herbes sèches",

    bouche: "Sèche, saline, élégante, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022", "2023"],
    garde: "2 à 3 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["salade-tomates-thon", "poissons-mediterraneens", "anchois"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Bandol rosé est l’un des rosés les plus gastronomiques du monde.",
    photo: "images/vins/bandol-rose-tomates-thon.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-fleurs-courgettes": {

    date: "05-29",

    name: "Vermentino (Rolle)",
    region: "Provence",
    aoc: "IGP Méditerranée / Côtes-de-Provence blanc",
    cepage: "Vermentino",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair aux reflets verts",
    nez: "Fleurs blanches, agrumes, herbes du maquis",
    aromes: "Citron, poire, fenouil, légère salinité",

    bouche: "Fraîche, aromatique, florale, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["pates-fleurs-courgettes", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Les fleurs de courgettes adorent les vins floraux et citronnés.",
    photo: "images/vins/vermentino-fleurs-courgettes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"pouilly-fume-oeufs-asperges": {

    date: "05-30",

    name: "Pouilly-Fumé",
    region: "Val de Loire",
    aoc: "AOC Pouilly-Fumé",
    cepage: "Sauvignon blanc",
    terroir: "Silex, calcaires durs, marnes kimméridgiennes",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, minéralité fumée",

    bouche: "Vive, tendue, aromatique, finale saline",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "4 à 8 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–28 €",

    accords: ["oeufs-cocotte-asperges", "poissons-fumes", "fromages-de-chevre"],

    domaine: "Domaine Didier Dagueneau",
    proprietaire: "Famille Dagueneau",
    anecdote: "Le fameux goût de pierre à fusil vient des sols de silex chauffés par le soleil.",
    photo: "images/vins/pouilly-fume-oeufs-asperges.jpg",

    note_parker: "92–97/100",
    note_hachette: "★★★ régulièrement"
},
"maury-clafoutis-cerises": {

    date: "05-31",

    name: "Maury rouge",
    region: "Roussillon",
    aoc: "AOC Maury",
    cepage: "Grenache noir",
    terroir: "Schistes noirs du haut Agly",

    robe: "Rouge grenat profond",
    nez: "Cerise noire, cacao, pruneau",
    aromes: "Cerise confite, chocolat, épices douces",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: ["NV"],
    garde: "10 à 20 ans",
    service: "12–14°C",
    alcool: "16% vol",
    prix: "12–20 €",

    accords: ["clafoutis-cerises", "desserts-chocolat", "fromages-bleus"],

    domaine: "Mas Amiel",
    proprietaire: "Famille Dauré",
    anecdote: "Maury est le vin naturel doux le plus adapté aux desserts aux fruits rouges cuits.",
    photo: "images/vins/maury-clafoutis-cerises.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"moscato-asti-fraises-rhubarbe": {

    date: "06-01",

    name: "Moscato d’Asti",
    region: "Piémont (Italie)",
    aoc: "DOCG Moscato d’Asti",
    cepage: "Muscat blanc à petits grains",
    terroir: "Collines calcaires et marneuses d’Asti",

    robe: "Or pâle brillant",
    nez: "Fleurs blanches, raisin frais, pêche",
    aromes: "Fraise, agrumes doux, miel léger",

    bouche: "Douce, pétillante, très aromatique, faible alcool",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "1 à 2 ans",
    service: "6–8°C",
    alcool: "5–6% vol",
    prix: "8–14 €",

    accords: ["salade-fraises-rhubarbe", "desserts-fruits-rouges", "tartes-fruits"],

    domaine: "Vietti",
    proprietaire: "Famille Currado",
    anecdote: "Le léger perlant du Moscato équilibre parfaitement l’acidité de la rhubarbe.",
    photo: "images/vins/moscato-asti-fraises-rhubarbe.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
"coteaux-aix-rose-taboule": {

    date: "06-02",

    name: "Coteaux d’Aix-en-Provence rosé",
    region: "Provence",
    aoc: "AOC Coteaux d’Aix-en-Provence",
    cepage: "Grenache, Cinsault, Syrah",
    terroir: "Calcaires et argilo-sableux",

    robe: "Rose pâle saumoné",
    nez: "Agrumes, fruits rouges, herbes du maquis",
    aromes: "Pamplemousse, fraise, basilic, salinité",

    bouche: "Fraîche, sèche, aromatique, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022", "2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "9–15 €",

    accords: ["taboule-maison", "salades-mediterraneennes", "crudites"],

    domaine: "Château Vignelaure",
    proprietaire: "Famille Van der Mersch",
    anecdote: "Le rosé provençal est l’accord naturel des plats citronnés et mentholés.",
    photo: "images/vins/coteaux-aix-rose-taboule.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"cotes-rhone-ratatouille": {

    date: "06-03",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache majoritaire",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat clair",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, herbes sèches",

    bouche: "Souple, fruitée, légère, finale épicée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020", "2021", "2022"],
    garde: "3 à 5 ans",
    service: "14–15°C",
    alcool: "13.5% vol",
    prix: "8–14 €",

    accords: ["ratatouille-nicoise", "plats-provencaux", "grillades"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Un rouge trop tannique écraserait les légumes : le Grenache léger est idéal.",
    photo: "images/vins/cotes-rhone-ratatouille.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"bandol-rose-pissaladiere": {

    date: "06-04",

    name: "Bandol rosé",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Pêche blanche, fraise, salinité, herbes sèches",

    bouche: "Sèche, saline, élégante, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022", "2023"],
    garde: "2 à 3 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["pissaladiere-tomates", "poissons-mediterraneens", "salades"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Bandol rosé est l’un des rosés les plus gastronomiques du monde.",
    photo: "images/vins/bandol-rose-pissaladiere.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"madiran-salade-landaise": {

    date: "06-05",

    name: "Madiran",
    region: "Sud-Ouest",
    aoc: "AOC Madiran",
    cepage: "Tannat majoritaire",
    terroir: "Argiles, galets, calcaires du Piémont pyrénéen",

    robe: "Rouge noir profond",
    nez: "Fruits noirs, épices, réglisse",
    aromes: "Cassis, mûre, cacao, poivre",

    bouche: "Puissante, fraîche, tannins assagis, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents mais polis",

    millesimes: ["2017", "2018", "2019"],
    garde: "8 à 15 ans",
    service: "16–17°C",
    alcool: "14.5% vol",
    prix: "12–20 €",

    accords: ["salade-landaise", "magret", "gibier"],

    domaine: "Château Montus",
    proprietaire: "Alain Brumont",
    anecdote: "Les Madiran modernes sont élevés pour assouplir le Tannat, autrefois très austère.",
    photo: "images/vins/madiran-salade-landaise.jpg",

    note_parker: "92–96/100",
    note_hachette: "★★★ régulièrement"
},
"saint-estephe-cote-boeuf": {

    date: "06-06",

    name: "Saint-Estèphe",
    region: "Bordeaux",
    aoc: "AOC Saint-Estèphe",
    cepage: "Cabernet Sauvignon, Merlot",
    terroir: "Graves profondes et argiles ferrugineuses",

    robe: "Rouge grenat sombre",
    nez: "Cassis, cèdre, fumée, graphite",
    aromes: "Cassis, mûre, tabac blond, épices",

    bouche: "Puissante, structurée, tannins fermes mais nobles",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents et serrés",

    millesimes: ["2016", "2018", "2019"],
    garde: "10 à 25 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "25–45 €",

    accords: ["cote-boeuf-feu-de-bois", "viandes-grillees", "gibier"],

    domaine: "Château Montrose",
    proprietaire: "Famille Bouygues",
    anecdote: "Saint‑Estèphe est l’appellation la plus charpentée du Médoc, parfaite pour les grillades.",
    photo: "images/vins/saint-estephe-cote-boeuf.jpg",

    note_parker: "93–98/100",
    note_hachette: "★★★ régulièrement"
},
"cerdon-tarte-fraise-frangipane": {

    date: "06-07",

    name: "Cerdon du Bugey",
    region: "Ain / Bugey",
    aoc: "AOC Bugey Cerdon",
    cepage: "Gamay, Poulsard",
    terroir: "Éboulis calcaires du Revermont",

    robe: "Rose framboise brillant",
    nez: "Fraise fraîche, bonbon, fleurs",
    aromes: "Fraise, framboise, groseille, douceur légère",

    bouche: "Légère, fruitée, douce mais fraîche",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022", "2023"],
    garde: "À boire jeune",
    service: "6–8°C",
    alcool: "7–8% vol",
    prix: "10–15 €",

    accords: ["tarte-fraise-frangipane", "desserts-fruits-rouges", "apéritif"],

    domaine: "Domaine Renardat-Fache",
    proprietaire: "Famille Renardat-Fache",
    anecdote: "Le Cerdon est l’accord le plus naturel avec les desserts aux fraises.",
    photo: "images/vins/cerdon-tarte-fraise-frangipane.jpg",

    note_parker: "—",
    note_hachette: "★★★ régulièrement"
},
"vouvray-petits-pois-lard": {

    date: "06-08",

    name: "Vouvray sec",
    region: "Val de Loire",
    aoc: "AOC Vouvray",
    cepage: "Chenin blanc",
    terroir: "Tuffeau, argiles à silex, coteaux de Loire",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, pomme, miel léger",
    aromes: "Pomme, poire, citron, minéralité",

    bouche: "Vive, tendue, élégante, finale fraîche",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020", "2021", "2022"],
    garde: "5 à 10 ans",
    service: "10–11°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["veloute-petits-pois-lard", "poissons-vapeur", "fromages-de-chevre"],

    domaine: "Domaine Huet",
    proprietaire: "Famille Hwang",
    anecdote: "Le Chenin sec équilibre parfaitement le gras du lard.",
    photo: "images/vins/vouvray-petits-pois-lard.jpg",

    note_parker: "92–96/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-roussillon-blanc-poivrons": {

    date: "06-09",

    name: "Côtes-du-Roussillon blanc",
    region: "Roussillon",
    aoc: "AOC Côtes-du-Roussillon",
    cepage: "Grenache blanc, Macabeu, Vermentino",
    terroir: "Schistes, gneiss, terrasses caillouteuses",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, poire, herbes du maquis, amande",

    bouche: "Fraîche, aromatique, légèrement grasse, finale saline",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["poivrons-farcis", "plats-mediterraneens", "poissons-grilles"],

    domaine: "Domaine Gauby",
    proprietaire: "Famille Gauby",
    anecdote: "Les blancs du Roussillon sont parfaits avec les légumes grillés.",
    photo: "images/vins/cotes-roussillon-blanc-poivrons.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-provence-blanc-poulet-citron": {

    date: "06-10",

    name: "Côtes-de-Provence blanc",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Rolle, Ugni blanc, Clairette",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair brillant",
    nez: "Citron, fleurs blanches, herbes du maquis",
    aromes: "Citron, poire, fenouil, amande",

    bouche: "Fraîche, vive, herbacée, finale nette",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["brochettes-poulet-citron", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Rolle est le cépage roi des grillades citronnées.",
    photo: "images/vins/cotes-provence-blanc-poulet-citron.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"bandol-rouge-tian": {

    date: "06-11",

    name: "Bandol rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, poivre, herbes sèches",

    bouche: "Souple pour un Bandol, fruitée, épicée, finale longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Fins (si jeune)",

    millesimes: ["2020", "2021"],
    garde: "5 à 10 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "18–30 €",

    accords: ["tian-provencal", "ratatouille", "grillades"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Un Bandol jeune, encore souple, respecte les légumes d’été.",
    photo: "images/vins/bandol-rouge-tian.jpg",

    note_parker: "92–96/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-corse-salade-riz": {

    date: "06-12",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021", "2022", "2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-riz-legumes-grilles", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le vin naturel des légumes grillés.",
    photo: "images/vins/vermentino-corse-salade-riz.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"cassis-blanc-rouget": {

    date: "06-13",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la mer",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes du maquis",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["rougets-provencaux", "poissons-mediterraneens", "fruits-de-mer"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Le rouget est l’un des rares poissons qui supporte les vins blancs puissants.",
    photo: "images/vins/cassis-blanc-rouget.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"muscat-rivesaltes-abricots": {

    date: "06-14",

    name: "Muscat de Rivesaltes",
    region: "Roussillon",
    aoc: "AOC Muscat de Rivesaltes",
    cepage: "Muscat à petits grains, Muscat d’Alexandrie",
    terroir: "Schistes, calcaires, terrasses caillouteuses",

    robe: "Or pâle brillant",
    nez: "Fleurs blanches, raisin frais, abricot",
    aromes: "Abricot confit, miel, pêche blanche",

    bouche: "Douce, fraîche, aromatique, finale fruitée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "5 à 10 ans",
    service: "8–10°C",
    alcool: "15% vol",
    prix: "10–15 €",

    accords: ["tarte-abricots", "desserts-agrumes", "salades-fruitees"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Le Muscat est l’accord naturel des fruits jaunes cuits.",
    photo: "images/vins/muscat-rivesaltes-abricots.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-roussillon-porc-miel-thym": {

    date: "06-15",

    name: "Côtes-du-Roussillon rouge",
    region: "Roussillon",
    aoc: "AOC Côtes-du-Roussillon",
    cepage: "Grenache, Carignan, Syrah",
    terroir: "Schistes, gneiss, terrasses caillouteuses",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, poivre, herbes sèches",

    bouche: "Charnue, chaleureuse, tannins mûrs, finale épicée",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: ["2019","2020","2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "14.5% vol",
    prix: "8–15 €",

    accords: ["cotes-porc-miel-thym", "grillades", "plats-provencaux"],

    domaine: "Domaine Gauby",
    proprietaire: "Famille Gauby",
    anecdote: "Le miel adore les rouges du Sud, surtout ceux à base de Grenache.",
    photo: "images/vins/cotes-roussillon-porc-miel-thym.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"assyrtiko-soupe-concombre": {

    date: "06-16",

    name: "Assyrtiko",
    region: "Santorin (Grèce)",
    aoc: "PDO Santorini",
    cepage: "Assyrtiko",
    terroir: "Sols volcaniques basaltiques très minéraux",

    robe: "Jaune pâle brillant",
    nez: "Citron, pierre chaude, herbes sèches",
    aromes: "Citron, salinité, pierre à fusil",

    bouche: "Très sèche, tendue, saline, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020","2021","2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "18–28 €",

    accords: ["soupe-froide-concombre", "salades-vertes", "poissons-crus"],

    domaine: "Domaine Sigalas",
    proprietaire: "Famille Sigalas",
    anecdote: "L’Assyrtiko est l’un des vins les plus salins du monde, parfait avec le yaourt.",
    photo: "images/vins/assyrtiko-soupe-concombre.jpg",

    note_parker: "92–95/100",
    note_hachette: "—"
},
"txakoli-anchois-marines": {

    date: "06-17",

    name: "Txakoli",
    region: "Pays Basque (Espagne)",
    aoc: "DO Getariako Txakolina",
    cepage: "Hondarrabi Zuri",
    terroir: "Coteaux maritimes, sols sableux et calcaires",

    robe: "Jaune très pâle, reflets verts",
    nez: "Citron vert, pomme verte, herbes fraîches",
    aromes: "Citron, salinité, légère effervescence",

    bouche: "Très vive, saline, nerveuse, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "7–9°C",
    alcool: "11% vol",
    prix: "10–18 €",

    accords: ["anchois-marines", "poissons-crus", "fruits-de-mer"],

    domaine: "Ameztoi",
    proprietaire: "Famille Ameztoi",
    anecdote: "Le Txakoli est traditionnellement servi en hauteur pour réveiller son perlant.",
    photo: "images/vins/txakoli-anchois-marines.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
"aligote-haricots-verts-amandes": {

    date: "06-18",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte Chalonnaise",

    robe: "Jaune clair brillant",
    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["salade-haricots-verts-amandes", "salades", "poissons-legers"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "L’Aligoté est parfait avec les légumes verts croquants.",
    photo: "images/vins/aligote-haricots-verts-amandes.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"vermentino-courgettes-farcies": {

    date: "06-19",

    name: "Vermentino (Rolle)",
    region: "Provence",
    aoc: "IGP Méditerranée / Côtes-de-Provence blanc",
    cepage: "Vermentino",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair aux reflets verts",
    nez: "Fleurs blanches, agrumes, herbes du maquis",
    aromes: "Citron, poire, fenouil, basilic",

    bouche: "Fraîche, aromatique, florale, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["courgettes-farcies-chevre", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Vermentino est le cépage roi des légumes d’été.",
    photo: "images/vins/vermentino-courgettes-farcies.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"cotes-provence-rose-tartare-tomates": {

    date: "06-20",

    name: "Côtes-de-Provence rosé",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Cinsault, Tibouren",
    terroir: "Schistes, calcaires, sables du littoral",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, salinité",

    bouche: "Fraîche, sèche, élégante, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["tartare-tomates", "salades-mediterraneennes", "poissons-crus"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Tibouren apporte une finesse iodée idéale pour les tomates crues.",
    photo: "images/vins/cotes-provence-rose-tartare-tomates.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-villages-barbecue": {

    date: "06-21",

    name: "Côtes-du-Rhône Villages",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône Villages",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, cerise noire, poivre, herbes sèches",

    bouche: "Charnue, fruitée, épicée, tannins souples",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2019","2020","2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "10–18 €",

    accords: ["brochettes-barbecue", "grillades", "plats-provencaux"],

    domaine: "Domaine de la Janasse",
    proprietaire: "Famille Sabon",
    anecdote: "Le Grenache adore les grillades et les herbes de Provence.",
    photo: "images/vins/cotes-rhone-villages-barbecue.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-corse-tarte-caprese": {

    date: "06-22",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["tarte-fine-caprese", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le vin naturel des plats caprese.",
    photo: "images/vins/vermentino-corse-tarte-caprese.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"picpoul-poulpe-grille": {

    date: "06-23",

    name: "Picpoul de Pinet",
    region: "Languedoc",
    aoc: "AOC Picpoul de Pinet",
    cepage: "Piquepoul blanc",
    terroir: "Terrasses calcaires et sables marins",

    robe: "Jaune pâle brillant",
    nez: "Citron, fleurs blanches, iode",
    aromes: "Citron, pomme verte, salinité",

    bouche: "Très vive, sèche, saline, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 ans",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "7–12 €",

    accords: ["salade-poulpe-grille", "fruits-de-mer", "poissons-crus"],

    domaine: "Domaine Félines Jourdan",
    proprietaire: "Famille Jourdan",
    anecdote: "Le Picpoul est surnommé « le Muscadet du Sud ».",
    photo: "images/vins/picpoul-poulpe-grille.jpg",

    note_parker: "—",
    note_hachette: "★★ régulièrement"
},
"rivesaltes-ambre-abricots": {

    date: "06-24",

    name: "Rivesaltes Ambré",
    region: "Roussillon",
    aoc: "AOC Rivesaltes",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes, calcaires et terrasses caillouteuses",

    robe: "Ambré profond",
    nez: "Orange confite, caramel, fruits secs",
    aromes: "Miel, noix, écorces d’orange, épices douces",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "10 à 30 ans",
    service: "10–12°C",
    alcool: "16% vol",
    prix: "12–18 €",

    accords: ["clafoutis-abricots", "desserts-agrumes", "tarte-abricots"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Les Rivesaltes ambrés vieillissent en fûts exposés à la chaleur, d’où leurs arômes d’orange confite.",
    photo: "images/vins/rivesaltes-ambre-abricots.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-provence-blanc-poulet-froid": {

    date: "06-25",

    name: "Côtes-de-Provence blanc",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Rolle, Ugni blanc, Clairette",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair brillant",
    nez: "Citron, fleurs blanches, herbes du maquis",
    aromes: "Citron, poire, fenouil, amande",

    bouche: "Fraîche, vive, herbacée, finale nette",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["poulet-salade-mediterraneenne", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Rolle est le cépage parfait pour les plats froids à l’huile d’olive.",
    photo: "images/vins/cotes-provence-blanc-poulet-froid.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"vermentino-corse-carpaccio-courgettes": {

    date: "06-26",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["carpaccio-courgettes", "salades-mediterraneennes", "poissons-crus"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le vin naturel des légumes crus citronnés.",
    photo: "images/vins/vermentino-corse-carpaccio-courgettes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"frascati-frittata-legumes": {

    date: "06-27",

    name: "Frascati Superiore",
    region: "Lazio (Italie)",
    aoc: "DOCG Frascati Superiore",
    cepage: "Malvasia del Lazio, Trebbiano",
    terroir: "Sols volcaniques autour de Rome",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, amande, agrumes",
    aromes: "Citron, pêche blanche, amande douce",

    bouche: "Légère, fraîche, florale, finale douce",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 3 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["frittata-legumes", "omelettes", "salades"],

    domaine: "Fontana Candida",
    proprietaire: "Famille Cotarella",
    anecdote: "Le Frascati est le vin traditionnel des trattorias romaines.",
    photo: "images/vins/frascati-frittata-legumes.jpg",

    note_parker: "—",
    note_hachette: "—"
},
"retsina-tzatziki": {

    date: "06-28",

    name: "Retsina",
    region: "Grèce",
    aoc: "Attiki / Grèce centrale",
    cepage: "Savatiano, Roditis",
    terroir: "Sols calcaires et sableux méditerranéens",

    robe: "Jaune pâle",
    nez: "Citron, résine de pin, herbes",
    aromes: "Citron, résine, pomme verte",

    bouche: "Très fraîche, citronnée, légèrement résineuse",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2022","2023"],
    garde: "1 à 2 ans",
    service: "7–9°C",
    alcool: "11.5% vol",
    prix: "6–10 €",

    accords: ["tzatziki", "crudites", "poissons-crus"],

    domaine: "Kourtaki",
    proprietaire: "Famille Kourtakis",
    anecdote: "La résine de pin était autrefois utilisée pour protéger le vin de l’oxydation.",
    photo: "images/vins/retsina-tzatziki.jpg",

    note_parker: "—",
    note_hachette: "—"
},
"sancerre-saint-jacques-agrumes": {

    date: "06-29",

    name: "Sancerre blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes calcaires, terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fines, minéralité marquée",

    bouche: "Vive, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020","2021","2022"],
    garde: "3 à 6 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["salade-saint-jacques-agrumes", "poissons-crus", "fromages-de-chevre"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Le Sauvignon est l’un des rares vins capables de suivre l’acidité des agrumes.",
    photo: "images/vins/sancerre-saint-jacques-agrumes.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"brachetto-glace-fraise": {

    date: "06-30",

    name: "Brachetto d’Acqui",
    region: "Piémont (Italie)",
    aoc: "DOCG Brachetto d’Acqui",
    cepage: "Brachetto",
    terroir: "Collines marneuses et calcaires",

    robe: "Rouge rubis clair pétillant",
    nez: "Fraise, rose, framboise",
    aromes: "Fraise confite, pétillance douce, rose",

    bouche: "Douce, légère, pétillante, très fruitée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "1 à 2 ans",
    service: "6–8°C",
    alcool: "5–6% vol",
    prix: "10–16 €",

    accords: ["glace-fraise-maison", "desserts-fruits-rouges", "tartes-fruits"],

    domaine: "Braida",
    proprietaire: "Famille Bologna",
    anecdote: "Le Brachetto est le pendant rouge du Moscato d’Asti.",
    photo: "images/vins/brachetto-glace-fraise.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
  "cotes-provence-rose-tomates-ancienne": {

    date: "07-01",

    name: "Côtes-de-Provence rosé",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Cinsault, Tibouren",
    terroir: "Schistes, calcaires, sables du littoral",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, salinité",

    bouche: "Fraîche, sèche, élégante, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["salade-tomates-ancienne", "salades-mediterraneennes", "poissons-crus"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Tibouren apporte une finesse iodée idéale pour les tomates crues.",
    photo: "images/vins/cotes-provence-rose-tomates-ancienne.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"coteaux-aix-rose-pistou": {

    date: "07-02",

    name: "Coteaux d’Aix-en-Provence rosé",
    region: "Provence",
    aoc: "AOC Coteaux d’Aix-en-Provence",
    cepage: "Grenache, Cinsault, Syrah",
    terroir: "Calcaires et argilo-sableux",

    robe: "Rose pâle saumoné",
    nez: "Agrumes, fruits rouges, herbes du maquis",
    aromes: "Pamplemousse, fraise, basilic",

    bouche: "Fraîche, sèche, aromatique, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "9–15 €",

    accords: ["pistou-ete", "ratatouille", "salades-mediterraneennes"],

    domaine: "Château Vignelaure",
    proprietaire: "Famille Van der Mersch",
    anecdote: "Le pistou provençal adore les rosés secs et herbacés.",
    photo: "images/vins/coteaux-aix-rose-pistou.jpg",

    note_parker: "87–90/100",
    note_hachette: "★★ régulièrement"
},
"corbieres-merguez-agneau": {

    date: "07-03",

    name: "Corbières rouge",
    region: "Languedoc",
    aoc: "AOC Corbières",
    cepage: "Carignan, Grenache, Syrah",
    terroir: "Schistes, calcaires, galets roulés",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, poivre, herbes sèches",

    bouche: "Charnue, chaleureuse, tannins mûrs, finale épicée",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Présents mais souples",

    millesimes: ["2019","2020","2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "14.5% vol",
    prix: "8–15 €",

    accords: ["grillades-merguez", "agneau-grille", "plats-epices"],

    domaine: "Château La Voulte-Gasparets",
    proprietaire: "Famille Reverdy",
    anecdote: "Le Carignan apporte la fraîcheur indispensable aux grillades épicées.",
    photo: "images/vins/corbieres-merguez-agneau.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"muscadet-taboule-libanais": {

    date: "07-04",

    name: "Muscadet Sèvre-et-Maine sur lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss, schistes, roches volcaniques",

    robe: "Jaune très pâle",
    nez: "Citron, pomme verte, iode",
    aromes: "Citron, salinité, herbes fraîches",

    bouche: "Très vive, sèche, saline, finale citronnée",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 3 ans",
    service: "8–10°C",
    alcool: "12% vol",
    prix: "7–12 €",

    accords: ["taboule-libanais", "crudites", "poissons-crus"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Marc Ollivier",
    anecdote: "Le Muscadet est l’un des vins les plus adaptés aux plats citronnés.",
    photo: "images/vins/muscadet-taboule-libanais.jpg",

    note_parker: "90–93/100",
    note_hachette: "★★★ régulièrement"
},
"rasteau-ambre-abricots-romarin": {

    date: "07-05",

    name: "Rasteau VDN Ambré",
    region: "Vallée du Rhône",
    aoc: "AOC Rasteau VDN",
    cepage: "Grenache blanc, Grenache gris",
    terroir: "Argiles et galets roulés du Haut-Vaucluse",

    robe: "Ambré doré",
    nez: "Abricot sec, miel, épices douces",
    aromes: "Abricot confit, romarin, orange confite",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "10 à 20 ans",
    service: "10–12°C",
    alcool: "16% vol",
    prix: "12–20 €",

    accords: ["tarte-abricots-romarin", "desserts-agrumes", "tarte-abricots"],

    domaine: "Domaine des Escaravailles",
    proprietaire: "Famille Ferran",
    anecdote: "Le romarin se marie étonnamment bien avec les vins doux ambrés.",
    photo: "images/vins/rasteau-ambre-abricots-romarin.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"bourgogne-chardonnay-cesar": {

    date: "07-06",

    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, beurre frais, agrumes",
    aromes: "Pomme, poire, citron, amande",

    bouche: "Ronde, fraîche, élégante, finale beurrée mais tendue",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2020","2021","2022"],
    garde: "3 à 5 ans",
    service: "11–12°C",
    alcool: "13% vol",
    prix: "12–20 €",

    accords: ["salade-cesar", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Un Chardonnay non boisé respecte la délicatesse du poulet et la salinité des anchois.",
    photo: "images/vins/bourgogne-chardonnay-cesar.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★★ régulièrement"
},
"irouleguy-piperade": {

    date: "07-07",

    name: "Irouléguy rouge",
    region: "Pays Basque",
    aoc: "AOC Irouléguy",
    cepage: "Tannat, Cabernet Franc, Cabernet Sauvignon",
    terroir: "Terrasses schisteuses et grès rouges pyrénéens",

    robe: "Rouge grenat profond",
    nez: "Fruits rouges, épices, piment doux",
    aromes: "Cerise, framboise, poivre, herbes basques",

    bouche: "Fraîche, structurée, épicée, tannins souples",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Présents mais fins",

    millesimes: ["2019","2020","2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "13.5% vol",
    prix: "12–20 €",

    accords: ["piperade", "jambon-bayonne", "omelette-piperade"],

    domaine: "Domaine Arretxea",
    proprietaire: "Famille Riouspeyrous",
    anecdote: "Le Tannat basque est plus frais et plus digeste que celui du Sud-Ouest.",
    photo: "images/vins/irouleguy-piperade.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"txakoli-ceviche-daurade": {

    date: "07-08",

    name: "Txakoli",
    region: "Pays Basque (Espagne)",
    aoc: "DO Getariako Txakolina",
    cepage: "Hondarrabi Zuri",
    terroir: "Coteaux maritimes, sols sableux et calcaires",

    robe: "Jaune très pâle, reflets verts",
    nez: "Citron vert, pomme verte, herbes fraîches",
    aromes: "Citron, salinité, légère effervescence",

    bouche: "Très vive, saline, nerveuse, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "7–9°C",
    alcool: "11% vol",
    prix: "10–18 €",

    accords: ["ceviche-daurade-tomates", "poissons-crus", "fruits-de-mer"],

    domaine: "Ameztoi",
    proprietaire: "Famille Ameztoi",
    anecdote: "Le Txakoli est traditionnellement versé de haut pour réveiller son perlant.",
    photo: "images/vins/txakoli-ceviche-daurade.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
"vermentino-crostinis-legumes": {

    date: "07-09",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["crostinis-legumes-grilles", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le vin naturel des légumes grillés.",
    photo: "images/vins/vermentino-crostinis-legumes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"banyuls-melon-porto": {

    date: "07-10",

    name: "Banyuls rouge",
    region: "Roussillon",
    aoc: "AOC Banyuls",
    cepage: "Grenache noir",
    terroir: "Schistes abrupts de la Côte Vermeille",

    robe: "Rouge grenat profond",
    nez: "Cerise noire, cacao, pruneau",
    aromes: "Cerise confite, chocolat, épices douces",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: ["NV"],
    garde: "10 à 20 ans",
    service: "12–14°C",
    alcool: "16% vol",
    prix: "12–20 €",

    accords: ["melon-glace-porto", "desserts-chocolat", "fromages-bleus"],

    domaine: "Domaine du Mas Blanc",
    proprietaire: "Famille Parcé",
    anecdote: "Le Banyuls est le vin doux naturel le plus adapté aux fruits frais sucrés.",
    photo: "images/vins/banyuls-melon-porto.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"aligote-poulet-froid": {

    date: "07-11",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte Chalonnaise",

    robe: "Jaune clair brillant",
    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["poulet-froid-mayonnaise", "salades", "poissons-legers"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "L’Aligoté est parfait pour les plats froids à base de volaille.",
    photo: "images/vins/aligote-poulet-froid.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"muscat-beaumes-figues-jambon": {

    date: "07-12",

    name: "Muscat de Beaumes-de-Venise",
    region: "Vallée du Rhône",
    aoc: "AOC Muscat de Beaumes-de-Venise",
    cepage: "Muscat à petits grains",
    terroir: "Terrasses sableuses et calcaires du Ventoux",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches, abricot",
    aromes: "Pêche, miel léger, figue fraîche",

    bouche: "Douce, fraîche, aromatique, finale fruitée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "3 à 5 ans",
    service: "8–10°C",
    alcool: "15% vol",
    prix: "12–18 €",

    accords: ["figues-jambon-sec", "desserts-fruits", "apéritif"],

    domaine: "Domaine des Bernardins",
    proprietaire: "Famille Castaud",
    anecdote: "Le Muscat est l’un des rares vins qui respecte la figue fraîche.",
    photo: "images/vins/muscat-beaumes-figues-jambon.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"gros-plant-sardines-grillees": {

    date: "07-13",

    name: "Gros-Plant du Pays Nantais",
    region: "Val de Loire",
    aoc: "AOC Gros-Plant du Pays Nantais",
    cepage: "Folle Blanche",
    terroir: "Gneiss, schistes, roches volcaniques du littoral nantais",

    robe: "Jaune très pâle",
    nez: "Citron, pomme verte, iode",
    aromes: "Citron, salinité, herbes fraîches",

    bouche: "Très vive, sèche, saline, finale citronnée",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 ans",
    service: "8–10°C",
    alcool: "11% vol",
    prix: "6–10 €",

    accords: ["sardines-grillees", "huitres", "fruits-de-mer"],

    domaine: "Domaine de la Grange",
    proprietaire: "Famille Perraud",
    anecdote: "Le Gros‑Plant est le vin le plus iodé de Loire, parfait avec les poissons bleus grillés.",
    photo: "images/vins/gros-plant-sardines-grillees.jpg",

    note_parker: "—",
    note_hachette: "★★ régulièrement"
},
"beaujolais-villages-charcuterie-fromages": {

    date: "07-14",

    name: "Beaujolais-Villages",
    region: "Beaujolais",
    aoc: "AOC Beaujolais-Villages",
    cepage: "Gamay",
    terroir: "Granites et schistes du nord Beaujolais",

    robe: "Rouge rubis brillant",
    nez: "Fruits rouges frais, violette",
    aromes: "Framboise, cerise, groseille, pointe épicée",

    bouche: "Souple, fraîche, fruitée, tannins très fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020","2021","2022"],
    garde: "2 à 5 ans",
    service: "13–14°C",
    alcool: "12.5% vol",
    prix: "8–14 €",

    accords: ["plateau-charcuterie-fromages", "terrines", "salades-composees"],

    domaine: "Domaine Dupeuble",
    proprietaire: "Famille Dupeuble",
    anecdote: "Le Gamay est le vin le plus polyvalent pour les grandes tablées.",
    photo: "images/vins/beaujolais-villages-charcuterie-fromages.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"moscato-asti-peches-basilic": {

    date: "07-15",

    name: "Moscato d’Asti",
    region: "Piémont (Italie)",
    aoc: "DOCG Moscato d’Asti",
    cepage: "Muscat blanc à petits grains",
    terroir: "Collines calcaires et marneuses d’Asti",

    robe: "Or pâle brillant",
    nez: "Fleurs blanches, raisin frais, pêche",
    aromes: "Pêche blanche, miel léger, agrumes doux",

    bouche: "Douce, pétillante, très aromatique, faible alcool",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022","2023"],
    garde: "1 à 2 ans",
    service: "6–8°C",
    alcool: "5–6% vol",
    prix: "8–14 €",

    accords: ["salade-peches-basilic", "desserts-fruits-rouges", "tartes-fruits"],

    domaine: "Vietti",
    proprietaire: "Famille Currado",
    anecdote: "Le Moscato respecte parfaitement la délicatesse des pêches.",
    photo: "images/vins/moscato-asti-peches-basilic.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
"bandol-rouge-tapenade": {

    date: "07-16",

    name: "Bandol rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, poivre, olives noires",

    bouche: "Puissante, épicée, tannins mûrs, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents",

    millesimes: ["2019","2020","2021"],
    garde: "8 à 15 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "18–30 €",

    accords: ["bruschetta-tapenade", "plats-provencaux", "grillades"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Mourvèdre adore les olives noires et les anchois.",
    photo: "images/vins/bandol-rouge-tapenade.jpg",

    note_parker: "92–96/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-blanc-gratin-courgettes": {

    date: "07-17",

    name: "Côtes-du-Rhône blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",
    nez: "Abricot, fleurs blanches, miel léger",
    aromes: "Pêche, abricot, amande, herbes sèches",

    bouche: "Ronde, aromatique, légèrement grasse, finale fraîche",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13.5% vol",
    prix: "10–18 €",

    accords: ["gratin-courgettes-chevre", "poissons-en-sauce", "volailles-creme"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Le Viognier apporte la rondeur parfaite pour accompagner le chèvre frais.",
    photo: "images/vins/cotes-rhone-blanc-gratin-courgettes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"sauvignon-touraine-mais-avocat": {

    date: "07-18",

    name: "Sauvignon blanc de Touraine",
    region: "Val de Loire",
    aoc: "AOC Touraine",
    cepage: "Sauvignon blanc",
    terroir: "Argiles à silex, calcaires, sables",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, buis",
    aromes: "Citron vert, pamplemousse, herbes fines",

    bouche: "Vive, tendue, aromatique, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 3 ans",
    service: "9–11°C",
    alcool: "12.5% vol",
    prix: "7–12 €",

    accords: ["salade-mais-avocat", "ceviches", "salades-mediterraneennes"],

    domaine: "Domaine François Chidaine",
    proprietaire: "Famille Chidaine",
    anecdote: "Le Sauvignon est parfait avec les plats citron vert + herbes.",
    photo: "images/vins/sauvignon-touraine-mais-avocat.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-fleurs-courgettes-farcies": {

    date: "07-19",

    name: "Vermentino (Rolle)",
    region: "Provence",
    aoc: "IGP Méditerranée / Côtes-de-Provence blanc",
    cepage: "Vermentino",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair aux reflets verts",
    nez: "Fleurs blanches, agrumes, herbes du maquis",
    aromes: "Citron, poire, fenouil, basilic",

    bouche: "Fraîche, florale, aromatique, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["fleurs-courgettes-farcies", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Les fleurs de courgettes adorent les vins floraux et citronnés.",
    photo: "images/vins/vermentino-fleurs-courgettes-farcies.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"riesling-saumon-mangue": {

    date: "07-20",

    name: "Riesling d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Riesling",
    cepage: "Riesling",
    terroir: "Marnes, calcaires, grès, coteaux ensoleillés",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pomme verte, minéralité marquée",

    bouche: "Sèche, tendue, très fraîche, finale citronnée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019","2020","2021"],
    garde: "5 à 12 ans",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "12–20 €",

    accords: ["tartare-saumon-mangue", "poissons-crus", "plats-exotiques"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Riesling sec est l’un des meilleurs vins pour les plats crus + fruits.",
    photo: "images/vins/riesling-saumon-mangue.jpg",

    note_parker: "90–95/100",
    note_hachette: "★★★ régulièrement"
},
"bandol-rose-pissaladiere-tapenade": {

    date: "07-21",

    name: "Bandol rosé",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Pêche blanche, fraise, salinité, olives noires",

    bouche: "Sèche, saline, élégante, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 à 3 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["pissaladiere-tapenade", "plats-provencaux", "poissons-mediterraneens"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Bandol rosé est l’un des rosés les plus gastronomiques du monde.",
    photo: "images/vins/bandol-rose-pissaladiere-tapenade.jpg",

    note_parker: "90–94/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-corse-tomates-burrata": {

    date: "07-22",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-tomates-burrata", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "La burrata adore les vins floraux et citronnés.",
    photo: "images/vins/vermentino-corse-tomates-burrata.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"vermentino-corse-tomates-burrata": {

    date: "07-22",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-tomates-burrata", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "La burrata adore les vins floraux et citronnés.",
    photo: "images/vins/vermentino-corse-tomates-burrata.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"vinho-verde-gazpacho-pasteque": {

    date: "07-24",

    name: "Vinho Verde",
    region: "Minho (Portugal)",
    aoc: "DOC Vinho Verde",
    cepage: "Loureiro, Arinto, Trajadura",
    terroir: "Granites et sols alluviaux atlantiques",

    robe: "Jaune très pâle, reflets verts",
    nez: "Citron vert, pomme verte, herbes fraîches",
    aromes: "Citron, salinité, légère effervescence",

    bouche: "Très vive, perlante, fraîche, finale citronnée",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2022","2023"],
    garde: "1 à 2 ans",
    service: "7–9°C",
    alcool: "10–11% vol",
    prix: "6–12 €",

    accords: ["gazpacho-pasteque", "salades-vertes", "poissons-crus"],

    domaine: "Quinta da Aveleda",
    proprietaire: "Famille Guedes",
    anecdote: "Le léger perlant du Vinho Verde équilibre parfaitement la pastèque.",
    photo: "images/vins/vinho-verde-gazpacho-pasteque.jpg",

    note_parker: "—",
    note_hachette: "—"
},
"cassis-blanc-poulpe-fenouil": {

    date: "07-25",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la mer",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes du maquis",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["salade-poulpe-fenouil", "poissons-mediterraneens", "fruits-de-mer"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Le fenouil et la mer appellent naturellement les blancs de Cassis.",
    photo: "images/vins/cassis-blanc-poulpe-fenouil.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-rhone-blanc-beignets-courgettes": {

    date: "07-26",

    name: "Côtes-du-Rhône blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",
    nez: "Abricot, fleurs blanches, miel léger",
    aromes: "Pêche, abricot, amande, herbes sèches",

    bouche: "Ronde, aromatique, légèrement grasse, finale fraîche",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13.5% vol",
    prix: "10–18 €",

    accords: ["beignets-courgettes", "poissons-en-sauce", "volailles-creme"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Le Viognier épouse parfaitement les fritures légères.",
    photo: "images/vins/cotes-rhone-blanc-beignets-courgettes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"aligote-sandwich-poulet-froid": {

    date: "07-27",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte Chalonnaise",

    robe: "Jaune clair brillant",
    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["sandwich-poulet-froid", "salades", "poissons-legers"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "L’Aligoté est le vin parfait des pique‑niques d’été.",
    photo: "images/vins/aligote-sandwich-poulet-froid.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"brachetto-sorbet-peche": {

    date: "07-28",

    name: "Brachetto d’Acqui",
    region: "Piémont (Italie)",
    aoc: "DOCG Brachetto d’Acqui",
    cepage: "Brachetto",
    terroir: "Collines marneuses et calcaires",

    robe: "Rouge rubis clair pétillant",
    nez: "Fraise, rose, framboise",
    aromes: "Pêche confite, fraise, pétillance douce",

    bouche: "Douce, légère, pétillante, très fruitée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "1 à 2 ans",
    service: "6–8°C",
    alcool: "5–6% vol",
    prix: "10–16 €",

    accords: ["sorbet-peche", "desserts-fruits-rouges", "tartes-fruits"],

    domaine: "Braida",
    proprietaire: "Famille Bologna",
    anecdote: "Le Brachetto est le pendant rouge du Moscato d’Asti.",
    photo: "images/vins/brachetto-sorbet-peche.jpg",

    note_parker: "88–92/100",
    note_hachette: "—"
},
"cotes-rhone-rouge-tomates-farcies": {

    date: "07-29",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache majoritaire",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat clair",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, herbes sèches",

    bouche: "Souple, fruitée, légère, finale épicée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020","2021","2022"],
    garde: "3 à 5 ans",
    service: "14–15°C",
    alcool: "13.5% vol",
    prix: "8–14 €",

    accords: ["tomates-farcies", "plats-provencaux", "grillades"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Un rouge trop tannique écraserait les tomates : le Grenache léger est idéal.",
    photo: "images/vins/cotes-rhone-rouge-tomates-farcies.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"bandol-rouge-daube-thon": {

    date: "07-30",

    name: "Bandol rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, poivre, olives noires",

    bouche: "Puissante, épicée, tannins mûrs, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents",

    millesimes: ["2019","2020","2021"],
    garde: "8 à 15 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "18–30 €",

    accords: ["daube-thon-rouge", "plats-provencaux", "gibiers-legers"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le thon rouge supporte étonnamment bien les rouges puissants.",
    photo: "images/vins/bandol-rouge-daube-thon.jpg",

    note_parker: "92–96/100",
    note_hachette: "★★★ régulièrement"
},
"aligote-haricots-verts-noisettes": {

    date: "07-31",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte Chalonnaise",

    robe: "Jaune clair brillant",
    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "9–11°C",
    alcool: "12% vol",
    prix: "8–14 €",

    accords: ["salade-haricots-noisettes", "salades", "poissons-legers"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "L’Aligoté est parfait avec les légumes verts croquants ou tièdes.",
    photo: "images/vins/aligote-haricots-verts-noisettes.jpg",

    note_parker: "88–91/100",
    note_hachette: "★★ régulièrement"
},
"cotes-provence-rose-tarte-tomate-chevre": {

    date: "08-01",

    name: "Côtes-de-Provence rosé",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Cinsault, Tibouren",
    terroir: "Schistes, calcaires, sables du littoral",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, salinité",

    bouche: "Fraîche, sèche, élégante, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["tarte-tomate-chevre", "salades-mediterraneennes", "poissons-crus"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le Tibouren apporte une finesse iodée idéale pour les tomates mûres.",
    photo: "images/vins/cotes-provence-rose-tarte-tomate-chevre.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★★ régulièrement"
},
"cotes-roussillon-blanc-soupe-poivrons": {

    date: "08-02",

    name: "Côtes-du-Roussillon blanc",
    region: "Roussillon",
    aoc: "AOC Côtes-du-Roussillon",
    cepage: "Grenache blanc, Macabeu, Vermentino",
    terroir: "Schistes, gneiss, terrasses caillouteuses",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, poire, herbes du maquis, amande",

    bouche: "Fraîche, aromatique, légèrement grasse, finale saline",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["soupe-froide-poivrons", "plats-mediterraneens", "poissons-grilles"],

    domaine: "Domaine Gauby",
    proprietaire: "Famille Gauby",
    anecdote: "Les blancs du Roussillon sont parfaits avec les légumes rôtis.",
    photo: "images/vins/cotes-roussillon-blanc-soupe-poivrons.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"vermentino-corse-brochettes-legumes": {

    date: "08-03",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["brochettes-legumes", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le vin naturel des légumes grillés.",
    photo: "images/vins/vermentino-corse-brochettes-legumes.jpg",

    note_parker: "88–92/100",
    note_hachette: "★★ régulièrement"
},
"vinho-verde-salade-pasteque": {

    date: "08-04",

    name: "Vinho Verde",
    region: "Minho (Portugal)",
    aoc: "DOC Vinho Verde",
    cepage: "Loureiro, Arinto, Trajadura",
    terroir: "Granites et sols alluviaux atlantiques",

    robe: "Jaune très pâle, reflets verts",
    nez: "Citron vert, pomme verte, herbes fraîches",
    aromes: "Citron, salinité, légère effervescence",

    bouche: "Très vive, perlante, fraîche, finale citronnée",
    longueur: "Courte à moyenne",
    corps: "Léger",
    acidite: "Très marquée",
    tanins: "Aucun",

    millesimes: ["2022","2023"],
    garde: "1 à 2 ans",
    service: "7–9°C",
    alcool: "10–11% vol",
    prix: "6–12 €",

    accords: ["salade-pasteque-menthe", "salades-vertes", "poissons-crus"],

    domaine: "Quinta da Aveleda",
    proprietaire: "Famille Guedes",
    anecdote: "Le perlant du Vinho Verde équilibre parfaitement la pastèque.",
    photo: "images/vins/vinho-verde-salade-pasteque.jpg"
},
"corbieres-aubergines-orientales": {

    date: "08-05",

    name: "Corbières rouge",
    region: "Languedoc",
    aoc: "AOC Corbières",
    cepage: "Carignan, Grenache, Syrah",
    terroir: "Schistes, calcaires, galets roulés",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, poivre, herbes sèches",

    bouche: "Charnue, chaleureuse, tannins mûrs, finale épicée",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: ["2019","2020","2021"],
    garde: "5 à 8 ans",
    service: "15–16°C",
    alcool: "14.5% vol",
    prix: "8–15 €",

    accords: ["aubergines-orientales", "agneau", "plats-epices"],

    domaine: "Château La Voulte-Gasparets",
    proprietaire: "Famille Reverdy",
    anecdote: "Le Carignan apporte la fraîcheur indispensable aux plats épicés.",
    photo: "images/vins/corbieres-aubergines-orientales.jpg",

    note_parker: "89–93/100",
    note_hachette: "★★★ régulièrement"
},
"coteaux-aix-rose-pistou-haricots": {

    date: "08-06",

    name: "Coteaux d’Aix-en-Provence rosé",
    region: "Provence",
    aoc: "AOC Coteaux d’Aix-en-Provence",
    cepage: "Grenache, Cinsault, Syrah",
    terroir: "Calcaires et argilo-sableux",

    robe: "Rose pâle saumoné",
    nez: "Agrumes, fruits rouges, herbes du maquis",
    aromes: "Pamplemousse, fraise, basilic",

    bouche: "Fraîche, sèche, aromatique, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "9–15 €",

    accords: ["pistou-haricots-frais", "salades-mediterraneennes", "ratatouille"],

    domaine: "Château Vignelaure",
    proprietaire: "Famille Van der Mersch",
    anecdote: "Le pistou provençal adore les rosés secs et herbacés.",
    photo: "images/vins/coteaux-aix-rose-pistou-haricots.jpg"
},
"vermentino-corse-salade-pates": {

    date: "08-07",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-pates-froides", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino est le vin naturel des plats froids à l’huile d’olive.",
    photo: "images/vins/vermentino-corse-salade-pates.jpg"
},
"cotes-rhone-ratatouille-froide": {

    date: "08-08",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache majoritaire",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat clair",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, herbes sèches",

    bouche: "Souple, fruitée, légère, finale épicée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020","2021","2022"],
    garde: "3 à 5 ans",
    service: "14–15°C",
    alcool: "13.5% vol",
    prix: "8–14 €",

    accords: ["ratatouille-pain-grille", "plats-provencaux", "grillades"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Servie froide, la ratatouille demande un rouge léger et très souple.",
    photo: "images/vins/cotes-rhone-ratatouille-froide.jpg"
},
"cotes-rhone-blanc-tian-aubergines": {

    date: "08-09",

    name: "Côtes-du-Rhône blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",
    nez: "Abricot, fleurs blanches, miel léger",
    aromes: "Pêche, abricot, amande, herbes sèches",

    bouche: "Ronde, aromatique, légèrement grasse, finale fraîche",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13.5% vol",
    prix: "10–18 €",

    accords: ["tian-aubergines", "poissons-en-sauce", "volailles-creme"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Le Viognier épouse parfaitement l’aubergine fondante.",
    photo: "images/vins/cotes-rhone-blanc-tian-aubergines.jpg"
},
"sauvignon-touraine-mais-coriandre": {

    date: "08-10",

    name: "Sauvignon blanc de Touraine",
    region: "Val de Loire",
    aoc: "AOC Touraine",
    cepage: "Sauvignon blanc",
    terroir: "Argiles à silex, calcaires, sables",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, buis",
    aromes: "Citron vert, pamplemousse, herbes fines",

    bouche: "Vive, tendue, aromatique, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 3 ans",
    service: "9–11°C",
    alcool: "12.5% vol",
    prix: "7–12 €",

    accords: ["salade-mais-coriandre", "ceviches", "salades-mediterraneennes"],

    domaine: "Domaine François Chidaine",
    proprietaire: "Famille Chidaine",
    anecdote: "Le Sauvignon est parfait avec les plats citron vert + herbes.",
    photo: "images/vins/sauvignon-touraine-mais-coriandre.jpg"
},
"muscat-beaumes-lavande-miel": {

    date: "08-11",

    name: "Muscat de Beaumes-de-Venise",
    region: "Vallée du Rhône",
    aoc: "AOC Muscat de Beaumes-de-Venise",
    cepage: "Muscat à petits grains",
    terroir: "Terrasses sableuses et calcaires du Ventoux",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches, lavande",
    aromes: "Miel, pêche, fleurs, épices douces",

    bouche: "Douce, fraîche, aromatique, finale florale",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "3 à 5 ans",
    service: "8–10°C",
    alcool: "15% vol",
    prix: "12–18 €",

    accords: ["glace-lavande-miel", "desserts-fruits", "apéritif"],

    domaine: "Domaine des Bernardins",
    proprietaire: "Famille Castaud",
    anecdote: "La lavande et le Muscat partagent la même aromatique florale.",
    photo: "images/vins/muscat-beaumes-lavande-miel.jpg"
},
"riesling-crevettes-gingembre": {

    date: "08-12",

    name: "Riesling d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace Riesling",
    cepage: "Riesling",
    terroir: "Marnes, calcaires, grès, coteaux ensoleillés",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pomme verte, minéralité marquée",

    bouche: "Sèche, tendue, très fraîche, finale citronnée",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2019","2020","2021"],
    garde: "5 à 12 ans",
    service: "8–10°C",
    alcool: "12.5% vol",
    prix: "12–20 €",

    accords: ["brochettes-crevettes-gingembre", "poissons-crus", "plats-exotiques"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Riesling sec est idéal pour les plats iodés + gingembre.",
    photo: "images/vins/riesling-crevettes-gingembre.jpg"
},
"muscat-rivesaltes-figues-roquette": {

    date: "08-13",

    name: "Muscat de Rivesaltes",
    region: "Roussillon",
    aoc: "AOC Muscat de Rivesaltes",
    cepage: "Muscat à petits grains, Muscat d’Alexandrie",
    terroir: "Schistes, calcaires, terrasses caillouteuses",

    robe: "Or pâle brillant",
    nez: "Fleurs blanches, raisin frais, abricot",
    aromes: "Figue fraîche, pêche, miel léger",

    bouche: "Douce, fraîche, aromatique, finale fruitée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "5 à 10 ans",
    service: "8–10°C",
    alcool: "15% vol",
    prix: "10–15 €",

    accords: ["salade-figues-roquette", "desserts-fruits", "apéritif"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Le Muscat respecte parfaitement la figue rôtie et le miel.",
    photo: "images/vins/muscat-rivesaltes-figues-roquette.jpg"
},
"bandol-rouge-daube-froide": {

    date: "08-14",

    name: "Bandol rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire, Grenache, Cinsault",
    terroir: "Restanques calcaires face à la mer",

    robe: "Rouge grenat profond",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, olives noires, poivre",

    bouche: "Puissante, épicée, tannins mûrs, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents",

    millesimes: ["2018","2019","2020"],
    garde: "10 à 20 ans",
    service: "16–17°C",
    alcool: "14% vol",
    prix: "18–30 €",

    accords: ["daube-froide-gelee", "plats-provencaux", "gibiers-legers"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Même froide, la daube demande un rouge méditerranéen structuré.",
    photo: "images/vins/bandol-rouge-daube-froide.jpg"
},
"gigondas-epaule-agneau": {

    date: "08-15",

    name: "Gigondas",
    region: "Vallée du Rhône Sud",
    aoc: "AOC Gigondas",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Terrasses caillouteuses du Dentelles de Montmirail",

    robe: "Rouge grenat sombre",
    nez: "Fruits noirs, garrigue, thym, poivre",
    aromes: "Mûre, prune, épices, herbes sèches",

    bouche: "Puissante, chaleureuse, tannins mûrs, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents mais polis",

    millesimes: ["2017","2018","2019"],
    garde: "10 à 20 ans",
    service: "16–17°C",
    alcool: "14.5% vol",
    prix: "18–30 €",

    accords: ["epaule-agneau-confite", "gibier", "plats-provencaux"],

    domaine: "Domaine Santa Duc",
    proprietaire: "Famille Gras",
    anecdote: "Gigondas est l’un des plus beaux accords avec l’agneau confit.",
    photo: "images/vins/gigondas-epaule-agneau.jpg"
},
"cassis-blanc-dorade-citron-vert": {

    date: "08-16",

    name: "Cassis blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Clairette, Marsanne, Ugni blanc",
    terroir: "Terrasses calcaires surplombant la mer",

    robe: "Jaune pâle brillant",
    nez: "Fenouil, agrumes, fleurs blanches",
    aromes: "Citron vert, pêche blanche, salinité",

    bouche: "Fraîche, saline, légèrement grasse, très aromatique",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["dorade-citron-vert", "poissons-mediterraneens", "fruits-de-mer"],

    domaine: "Clos Sainte Magdeleine",
    proprietaire: "Famille Sack-Zafiropulo",
    anecdote: "Le citron vert appelle un blanc très salin et structuré.",
    photo: "images/vins/cassis-blanc-dorade-citron-vert.jpg"
},
"rivesaltes-ambre-crumble-abricots": {

    date: "08-17",

    name: "Rivesaltes Ambré",
    region: "Roussillon",
    aoc: "AOC Rivesaltes",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes, calcaires, terrasses caillouteuses",

    robe: "Ambré profond",
    nez: "Orange confite, caramel, fruits secs",
    aromes: "Miel, noix, écorces d’orange, épices douces",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "10 à 30 ans",
    service: "10–12°C",
    alcool: "16% vol",
    prix: "12–18 €",

    accords: ["crumble-abricots-amandes", "desserts-agrumes", "tarte-abricots"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Les Rivesaltes ambrés vieillissent en chaleur, d’où leurs arômes d’orange confite.",
    photo: "images/vins/rivesaltes-ambre-crumble-abricots.jpg"
},
"sancerre-lentilles-saumon": {

    date: "08-18",

    name: "Sancerre blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes calcaires, terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fines, minéralité marquée",

    bouche: "Vive, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020","2021","2022"],
    garde: "3 à 6 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "15–25 €",

    accords: ["salade-lentilles-saumon", "poissons-crus", "fromages-de-chevre"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Le Sauvignon est l’un des rares vins capables de suivre le saumon fumé.",
    photo: "images/vins/sancerre-lentilles-saumon.jpg"
},
"assyrtiko-gaspacho-vert": {

    date: "08-19",

    name: "Assyrtiko",
    region: "Santorin (Grèce)",
    aoc: "PDO Santorini",
    cepage: "Assyrtiko",
    terroir: "Sols volcaniques basaltiques très minéraux",

    robe: "Jaune pâle brillant",
    nez: "Citron, pierre chaude, herbes sèches",
    aromes: "Citron, salinité, pierre à fusil",

    bouche: "Très sèche, tendue, saline, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020","2021","2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "18–28 €",

    accords: ["gaspacho-vert", "salades-vertes", "poissons-crus"],

    domaine: "Domaine Sigalas",
    proprietaire: "Famille Sigalas",
    anecdote: "L’Assyrtiko est l’un des vins les plus salins du monde, parfait avec le concombre.",
    photo: "images/vins/assyrtiko-gaspacho-vert.jpg"
},
"cotes-provence-rose-bruschetta": {

    date: "08-20",

    name: "Côtes-de-Provence rosé",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Grenache, Cinsault, Tibouren",
    terroir: "Schistes, calcaires, sables du littoral",

    robe: "Rose pâle saumoné",
    nez: "Fruits rouges, agrumes, herbes du maquis",
    aromes: "Fraise, pamplemousse, pêche blanche, salinité",

    bouche: "Fraîche, sèche, élégante, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["bruschetta-tomates", "salades-mediterraneennes", "poissons-crus"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "Le rosé provençal est l’accord naturel des tomates fraîches.",
    photo: "images/vins/cotes-provence-rose-bruschetta.jpg"
},
"vermentino-corse-salade-quinoa": {

    date: "08-21",

    name: "Vermentino de Corse",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino (Rolle)",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune clair aux reflets verts",
    nez: "Agrumes, herbes du maquis, fleurs blanches",
    aromes: "Citron, poire, fenouil, salinité",

    bouche: "Fraîche, aromatique, herbacée, finale saline",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["salade-quinoa-tomates-feta", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "La feta adore les vins floraux et citronnés.",
    photo: "images/vins/vermentino-corse-salade-quinoa.jpg"
},
"muscat-beaumes-peches-roties": {

    date: "08-22",

    name: "Muscat de Beaumes-de-Venise",
    region: "Vallée du Rhône",
    aoc: "AOC Muscat de Beaumes-de-Venise",
    cepage: "Muscat à petits grains",
    terroir: "Terrasses sableuses et calcaires du Ventoux",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches, abricot",
    aromes: "Pêche, miel, romarin, agrumes doux",

    bouche: "Douce, fraîche, aromatique, finale fruitée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "3 à 5 ans",
    service: "8–10°C",
    alcool: "15% vol",
    prix: "12–18 €",

    accords: ["peches-roties-miel", "desserts-fruits", "apéritif"],

    domaine: "Domaine des Bernardins",
    proprietaire: "Famille Castaud",
    anecdote: "Le romarin se marie étonnamment bien avec les vins doux naturels.",
    photo: "images/vins/muscat-beaumes-peches-roties.jpg"
},
"cotes-provence-blanc-terrine-legumes": {

    date: "08-23",

    name: "Côtes-de-Provence blanc",
    region: "Provence",
    aoc: "AOC Côtes-de-Provence",
    cepage: "Rolle, Ugni blanc, Clairette",
    terroir: "Schistes et calcaires du littoral",

    robe: "Jaune clair brillant",
    nez: "Citron, fleurs blanches, herbes du maquis",
    aromes: "Citron, poire, fenouil, amande",

    bouche: "Fraîche, vive, herbacée, finale nette",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne à marquée",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "2 à 4 ans",
    service: "10–12°C",
    alcool: "12.5% vol",
    prix: "10–18 €",

    accords: ["terrine-legumes-gelee", "salades-mediterraneennes", "poissons-grilles"],

    domaine: "Château Minuty",
    proprietaire: "Famille Matton-Farnet",
    anecdote: "La gelée froide appelle un vin très frais et citronné.",
    photo: "images/vins/cotes-provence-blanc-terrine-legumes.jpg"
},
"cotes-rhone-rouge-gratin-tomates": {

    date: "08-24",

    name: "Côtes-du-Rhône rouge",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Grenache majoritaire",
    terroir: "Galets roulés, argiles rouges, sables",

    robe: "Rouge grenat clair",
    nez: "Fruits rouges, garrigue, épices douces",
    aromes: "Cerise, framboise, herbes sèches",

    bouche: "Souple, fruitée, légère, finale épicée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Fins",

    millesimes: ["2020","2021","2022"],
    garde: "3 à 5 ans",
    service: "14–15°C",
    alcool: "13.5% vol",
    prix: "8–14 €",

    accords: ["gratin-tomates-anciennes", "plats-provencaux", "grillades"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Un rouge trop tannique écraserait les tomates : le Grenache léger est idéal.",
    photo: "images/vins/cotes-rhone-rouge-gratin-tomates.jpg"
},
"cotes-roussillon-blanc-poivrons-rotis": {

    date: "08-25",

    name: "Côtes-du-Roussillon blanc",
    region: "Roussillon",
    aoc: "AOC Côtes-du-Roussillon",
    cepage: "Grenache blanc, Macabeu, Vermentino",
    terroir: "Schistes, gneiss, terrasses caillouteuses",

    robe: "Jaune clair brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, poire, herbes du maquis, amande",

    bouche: "Fraîche, aromatique, légèrement grasse, finale saline",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2021","2022","2023"],
    garde: "3 à 5 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "10–18 €",

    accords: ["salade-poivrons-rotis", "plats-mediterraneens", "poissons-grilles"],

    domaine: "Domaine Gauby",
    proprietaire: "Famille Gauby",
    anecdote: "Les blancs du Roussillon sont parfaits avec les légumes rôtis.",
    photo: "images/vins/cotes-roussillon-blanc-poivrons-rotis.jpg"
},
"madiran-magret-froid": {

    date: "08-26",

    name: "Madiran",
    region: "Sud-Ouest",
    aoc: "AOC Madiran",
    cepage: "Tannat majoritaire",
    terroir: "Argiles, galets, coteaux pyrénéens",

    robe: "Rouge grenat sombre",
    nez: "Fruits noirs, violette, épices",
    aromes: "Mûre, cassis, réglisse, poivre",

    bouche: "Structurée, fraîche, tannins polis, finale longue",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents mais assouplis",

    millesimes: ["2016","2017","2018"],
    garde: "8 à 15 ans",
    service: "15–16°C",
    alcool: "14% vol",
    prix: "12–20 €",

    accords: ["magret-canard-salade", "charcuteries", "plats-sud-ouest"],

    domaine: "Château Montus",
    proprietaire: "Alain Brumont",
    anecdote: "Le Tannat assagi adore le canard froid.",
    photo: "images/vins/madiran-magret-froid.jpg"
},
"moscato-asti-tatin-nectarines": {

    date: "08-27",

    name: "Moscato d’Asti",
    region: "Piémont (Italie)",
    aoc: "DOCG Moscato d’Asti",
    cepage: "Muscat blanc à petits grains",
    terroir: "Collines calcaires et marneuses d’Asti",

    robe: "Or pâle brillant",
    nez: "Fleurs blanches, raisin frais, pêche",
    aromes: "Nectarine, miel léger, agrumes doux",

    bouche: "Douce, pétillante, très aromatique, faible alcool",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["2022","2023"],
    garde: "1 à 2 ans",
    service: "6–8°C",
    alcool: "5–6% vol",
    prix: "8–14 €",

    accords: ["tarte-tatin-nectarines", "desserts-fruits", "glaces"],

    domaine: "Vietti",
    proprietaire: "Famille Currado",
    anecdote: "Le pétillant léger du Moscato équilibre le caramel.",
    photo: "images/vins/moscato-asti-tatin-nectarines.jpg"
},
"assyrtiko-salade-grecque": {

    date: "08-28",

    name: "Assyrtiko",
    region: "Santorin (Grèce)",
    aoc: "PDO Santorini",
    cepage: "Assyrtiko",
    terroir: "Sols volcaniques basaltiques très minéraux",

    robe: "Jaune pâle brillant",
    nez: "Citron, pierre chaude, herbes sèches",
    aromes: "Citron, salinité, pierre à fusil",

    bouche: "Très sèche, tendue, saline, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: ["2020","2021","2022"],
    garde: "5 à 8 ans",
    service: "10–12°C",
    alcool: "13% vol",
    prix: "18–28 €",

    accords: ["salade-grecque", "poissons-crus", "plats-mediterraneens"],

    domaine: "Domaine Sigalas",
    proprietaire: "Famille Sigalas",
    anecdote: "La feta et l’Assyrtiko sont un accord naturel.",
    photo: "images/vins/assyrtiko-salade-grecque.jpg"
},
"irouleguy-rose-piperade-oeufs": {

    date: "08-29",

    name: "Irouléguy rosé",
    region: "Pays Basque",
    aoc: "AOC Irouléguy",
    cepage: "Tannat, Cabernet Franc, Cabernet Sauvignon",
    terroir: "Terrasses schisteuses pyrénéennes",

    robe: "Rose soutenu",
    nez: "Fruits rouges, épices douces",
    aromes: "Fraise, groseille, piment doux",

    bouche: "Sèche, fraîche, structurée, finale épicée",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Très fins",

    millesimes: ["2022","2023"],
    garde: "2 ans",
    service: "9–11°C",
    alcool: "13% vol",
    prix: "10–16 €",

    accords: ["piperade-oeufs", "charcuteries-basques", "poissons-grilles"],

    domaine: "Domaine Arretxea",
    proprietaire: "Famille Riouspeyrous",
    anecdote: "Le rosé basque a assez de structure pour suivre les œufs + piment.",
    photo: "images/vins/irouleguy-rose-piperade-oeufs.jpg"
},
"rasteau-ambre-figues-gratin": {

    date: "08-30",

    name: "Rasteau VDN Ambré",
    region: "Vallée du Rhône",
    aoc: "AOC Rasteau VDN",
    cepage: "Grenache blanc, Grenache gris",
    terroir: "Argiles et galets roulés du Haut-Vaucluse",

    robe: "Ambré doré",
    nez: "Figue sèche, miel, épices douces",
    aromes: "Figue rôtie, caramel, orange confite",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "10 à 20 ans",
    service: "10–12°C",
    alcool: "16% vol",
    prix: "12–20 €",

    accords: ["figues-gratin", "desserts-agrumes", "tarte-abricots"],

    domaine: "Domaine des Escaravailles",
    proprietaire: "Famille Ferran",
    anecdote: "Le Rasteau ambré sublime les figues chaudes.",
    photo: "images/vins/rasteau-ambre-figues-gratin.jpg"
},
"pineau-charentes-confiture-tomates-vertes": {

    date: "08-31",

    name: "Pineau des Charentes blanc",
    region: "Charentes",
    aoc: "AOC Pineau des Charentes",
    cepage: "Ugni blanc, Colombard, Montils",
    terroir: "Calcaires et argilo-calcaires charentais",

    robe: "Or clair brillant",
    nez: "Raisin frais, miel, coing",
    aromes: "Pomme verte, miel, fruits jaunes",

    bouche: "Douce, fraîche, aromatique, finale fruitée",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: ["NV"],
    garde: "5 à 10 ans",
    service: "8–10°C",
    alcool: "17% vol",
    prix: "10–15 €",

    accords: ["confiture-tomates-vertes", "desserts-fruits", "fromages"],

    domaine: "Domaine des Claires",
    proprietaire: "Famille Moreau",
    anecdote: "Le Pineau blanc respecte l’acidité naturelle des tomates vertes.",
    photo: "images/vins/pineau-charentes-confiture-tomates-vertes.jpg"
},


  // 09-01 — Tarte aux prunes de Damas → Pinot Gris d’Alsace (demi-sec)
  "pinot-gris-quetsches": {

    // --- Synchronisation avec l'almanach ---
    date: "09-01",

    // --- Identité du vin ---
    name: "Pinot Gris \"Cuvée Laurence\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Gris",
    terroir: "Collines calcaires et grès vosgiens",

    // --- Analyse visuelle ---
    robe: "Or pâle brillant",

    // --- Analyse olfactive ---
    nez: "Fruits jaunes mûrs, miel léger, touche fumée",
    aromes: "Prune, mirabelle, miel, épices douces",

    // --- Analyse gustative ---
    bouche: "Attaque douce, texture ample, équilibre entre sucrosité et fraîcheur",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    // --- Informations œnologiques ---
    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    // --- Accords mets-vins ---
    accords: ["tarte-quetsches", "desserts-fruits", "fromages-a-pate-persille"],

    // --- Domaine ---
    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "La cuvée Laurence est l’un des grands classiques du Pinot Gris demi-sec en Alsace.",
    photo: "images/vins/pinot-gris-quetsches.jpg",

    // --- Notes et distinctions ---
    note_parker: "",
    note_hachette: ""
  },

  // 09-02 — Salade de figues, noix et roquefort → Maury blanc
  "maury-blanc-figues-roquefort": {

    date: "09-02",

    name: "Maury Blanc Vintage",
    region: "Roussillon",
    aoc: "AOC Maury",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes noirs du Haut-Roussillon",

    robe: "Or profond",

    nez: "Abricot sec, miel, noix, fruits confits",
    aromes: "Figue, miel, fruits secs, épices douces",

    bouche: "Douce, ample, chaleureuse, finale longue sur les fruits secs",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["salade-figues-roquefort", "fromages-forts", "desserts-fruits"],

    domaine: "Mas Amiel",
    proprietaire: "Famille Amiel",
    anecdote: "Mas Amiel est le domaine emblématique des vins doux naturels de Maury.",
    photo: "images/vins/maury-blanc-figues-roquefort.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-03 — Velouté de champignons sauvages → Bourgogne Chardonnay
  "bourgogne-chardonnay-veloute-champignons": {

    date: "09-03",

    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune doré clair",

    nez: "Beurre frais, noisette, sous-bois léger",
    aromes: "Pomme, poire, crème, champignon blanc",

    bouche: "Ronde, beurrée, équilibrée par une belle fraîcheur",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["veloute-champignons-sauvages", "volailles-creme", "risotto"],

    domaine: "Domaine Joseph Drouhin",
    proprietaire: "Famille Drouhin",
    anecdote: "Joseph Drouhin est l’un des grands noms historiques de la Bourgogne.",
    photo: "images/vins/bourgogne-chardonnay-veloute-champignons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-04 — Poulet aux cèpes → Saint-Joseph blanc
  "saint-joseph-blanc-poulet-cepes": {

    date: "09-04",

    name: "Saint-Joseph Blanc \"Lyseras\"",
    region: "Vallée du Rhône Nord",
    aoc: "AOC Saint-Joseph",
    cepage: "Marsanne, Roussanne",
    terroir: "Granites et loess des coteaux ardéchois",

    robe: "Jaune doré clair",

    nez: "Abricot, miel, fleurs blanches, légère note de fruits secs",
    aromes: "Pêche, amande, crème, sous-bois",

    bouche: "Ample, aromatique, légèrement grasse, finale fraîche",
    longueur: "Longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["poulet-aux-cepes", "poissons-en-sauce", "risotto"],

    domaine: "Domaine Yves Cuilleron",
    proprietaire: "Yves Cuilleron",
    anecdote: "La cuvée Lyseras est une référence en Saint-Joseph blanc gastronomique.",
    photo: "images/vins/saint-joseph-blanc-poulet-cepes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-05 — Gigot de chevreuil aux airelles → Pinot Noir d’Alsace
  "pinot-noir-chevreuil-airelles": {

    date: "09-05",

    name: "Pinot Noir \"Les Saintes Claires\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Noir",
    terroir: "Calcaires et coteaux bien exposés",

    robe: "Rouge rubis clair",

    nez: "Fruits rouges, sous-bois, épices douces",
    aromes: "Griotte, framboise, airelle, terre humide",

    bouche: "Souple, fraîche, acidulée, tannins fins",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gigot-chevreuil-airelles", "volailles-sauce", "champignons"],

    domaine: "Domaine Albert Mann",
    proprietaire: "Famille Barthelmé",
    anecdote: "Les Saintes Claires est l’une des cuvées de Pinot Noir les plus réputées d’Alsace.",
    photo: "images/vins/pinot-noir-chevreuil-airelles.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-06 — Poêlée de girolles à la crème → Vin Jaune
  "vin-jaune-girolles-creme": {

    date: "09-06",

    name: "Château-Chalon",
    region: "Jura",
    aoc: "AOC Château-Chalon",
    cepage: "Savagnin",
    terroir: "Marnes bleues et grises jurassiennes",

    robe: "Or profond",

    nez: "Noix, curry doux, pomme sèche",
    aromes: "Noix, morille, crème, épices douces",

    bouche: "Puissante, sèche, très longue, aromatique",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["girolles-a-la-creme", "volaille-creme", "fromages-jurassiens"],

    domaine: "Domaine Tissot",
    proprietaire: "Famille Tissot",
    anecdote: "Les vins jaunes du Jura sont traditionnellement servis avec les champignons et les plats à la crème.",
    photo: "images/vins/vin-jaune-girolles-creme.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-07 — Tarte aux mirabelles → Gewurztraminer demi-sec
  "gewurztraminer-mirabelles": {

    date: "09-07",

    name: "Gewurztraminer \"Cuvée Laurence\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or brillant",

    nez: "Rose, litchi, miel, épices douces",
    aromes: "Mirabelle, miel, fruits jaunes, épices",

    bouche: "Moelleuse, ample, très aromatique, finale épicée",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-mirabelles", "desserts-fruits", "fromages-forts"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Gewurztraminer demi-sec est un accord classique avec les tartes aux fruits jaunes.",
    photo: "images/vins/gewurztraminer-mirabelles.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-08 — Gratin de courge au parmesan → Côtes-du-Rhône blanc
  "cotes-rhone-blanc-gratin-courge": {

    date: "09-08",

    name: "Côtes-du-Rhône Blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",

    nez: "Abricot, fleurs blanches, miel léger",
    aromes: "Pêche, abricot, amande, herbes sèches",

    bouche: "Ronde, aromatique, légèrement grasse, finale fraîche",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-courge-parmesan", "poissons-en-sauce", "volailles-creme"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Le Côtes-du-Rhône blanc de Guigal est une référence pour les accords avec les plats de courge.",
    photo: "images/vins/cotes-rhone-blanc-gratin-courge.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-09 — Omelette aux trompettes de la mort → Bourgogne Pinot Noir
  "pinot-noir-omelette-trompettes": {

    date: "09-09",

    name: "Bourgogne Pinot Noir",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot Noir",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte de Nuits",

    robe: "Rouge rubis clair",

    nez: "Griotte, sous-bois, épices douces",
    aromes: "Framboise, cerise, humus, champignon",

    bouche: "Souple, fraîche, délicate, tannins fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["omelette-trompettes-mort", "volailles", "champignons"],

    domaine: "Domaine Tollot-Beaut",
    proprietaire: "Famille Tollot",
    anecdote: "Les Bourgognes rouges légers sont des compagnons naturels des omelettes aux champignons.",
    photo: "images/vins/pinot-noir-omelette-trompettes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-10 — Civet de lièvre → Châteauneuf-du-Pape rouge
  "chateauneuf-lievre": {

    date: "09-10",

    name: "Châteauneuf-du-Pape \"La Crau\"",
    region: "Vallée du Rhône Sud",
    aoc: "AOC Châteauneuf-du-Pape",
    cepage: "Grenache, Syrah, Mourvèdre",
    terroir: "Galets roulés, sables, argiles rouges",

    robe: "Rouge grenat sombre",

    nez: "Fruits noirs, garrigue, cuir, épices",
    aromes: "Mûre, prune, poivre, cacao",

    bouche: "Puissante, chaleureuse, tannins mûrs, finale longue",
    longueur: "Très longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Puissants",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["civet-de-lievre", "gibiers", "plats-sauce"],

    domaine: "Domaine du Vieux Télégraphe",
    proprietaire: "Famille Brunier",
    anecdote: "La Crau est l’un des terroirs les plus célèbres de Châteauneuf-du-Pape.",
    photo: "images/vins/chateauneuf-lievre.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-11 — Potage cultivateur → Coteaux-du-Layon
  "coteaux-layon-potage-cultivateur": {

    date: "09-11",

    name: "Coteaux-du-Layon \"Saint-Lambert\"",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes et pentes ligériennes",

    robe: "Or clair",

    nez: "Pomme, miel, coing",
    aromes: "Pomme cuite, miel léger, fleurs blanches",

    bouche: "Douce, fraîche, légère, finale fruitée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["potage-cultivateur", "fromages", "desserts-fruits"],

    domaine: "Domaine Ogereau",
    proprietaire: "Famille Ogereau",
    anecdote: "Le Chenin moelleux léger accompagne très bien les potages de légumes doux.",
    photo: "images/vins/coteaux-layon-potage-cultivateur.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-12 — Salade de mâche, lardons & noix → Bourgogne Aligoté
  "aligote-mache-lardons-noix": {

    date: "09-12",

    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune clair brillant",

    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["salade-mache-lardons-noix", "salades", "poissons-legers"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "Les Aligotés de Goisot sont réputés pour leur tension et leur précision.",
    photo: "images/vins/aligote-mache-lardons-noix.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-13 — Tarte aux raisins muscats → Muscat de Rivesaltes
  "muscat-rivesaltes-tarte-raisins": {

    date: "09-13",

    name: "Muscat de Rivesaltes",
    region: "Roussillon",
    aoc: "AOC Muscat de Rivesaltes",
    cepage: "Muscat à petits grains, Muscat d’Alexandrie",
    terroir: "Schistes et calcaires du Roussillon",

    robe: "Or pâle brillant",

    nez: "Raisin frais, fleurs blanches, miel",
    aromes: "Muscat, pêche, agrumes doux",

    bouche: "Douce, fraîche, aromatique, finale florale",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-raisins-muscats", "desserts-fruits", "fromages-forts"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Le Muscat de Rivesaltes est l’accord naturel des desserts au raisin muscat.",
    photo: "images/vins/muscat-rivesaltes-tarte-raisins.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-14 — Perdrix aux choux → Pinot Noir de Bourgogne (village)
  "pinot-noir-perdrix-choux": {

    date: "09-14",

    name: "Chorey-lès-Beaune Rouge",
    region: "Bourgogne",
    aoc: "AOC Chorey-lès-Beaune",
    cepage: "Pinot Noir",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Rouge rubis profond",

    nez: "Griotte, sous-bois, épices douces",
    aromes: "Cerise, framboise, humus, champignon",

    bouche: "Souple, fraîche, élégante, tannins fins",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["perdrix-aux-choux", "volailles-sauce", "champignons"],

    domaine: "Domaine Tollot-Beaut",
    proprietaire: "Famille Tollot",
    anecdote: "Chorey-lès-Beaune offre des Pinots accessibles, parfaits pour les volailles et les choux braisés.",
    photo: "images/vins/pinot-noir-perdrix-choux.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-15 — Risotto aux cèpes & truffe noire → Barolo
  "barolo-risotto-cepes-truffe": {

    date: "09-15",

    name: "Barolo \"Albe\"",
    region: "Piémont",
    aoc: "DOCG Barolo",
    cepage: "Nebbiolo",
    terroir: "Marnes calcaires et sables des Langhe",

    robe: "Grenat clair",

    nez: "Rose séchée, goudron, sous-bois",
    aromes: "Truffe, cerise, cuir, épices",

    bouche: "Puissante, tannique, longue, très aromatique",
    longueur: "Très longue",
    corps: "Corsé",
    acidite: "Marquée",
    tanins: "Puissants",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["risotto-cepes-truffe", "gibiers", "viandes-sauce"],

    domaine: "G.D. Vajra",
    proprietaire: "Famille Vajra",
    anecdote: "Le Nebbiolo est le cépage roi des grands accords à la truffe.",
    photo: "images/vins/barolo-risotto-cepes-truffe.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-16 — Velouté de potimarron aux épices → Coteaux-du-Layon
  "coteaux-layon-potimarron": {

    date: "09-16",

    name: "Coteaux-du-Layon \"Saint-Lambert\"",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes et coteaux ligériens",

    robe: "Or clair",

    nez: "Pomme, miel, coing",
    aromes: "Pomme cuite, miel léger, épices douces",

    bouche: "Douce, fraîche, légère, finale fruitée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["veloute-potimarron-epices", "fromages", "desserts-fruits"],

    domaine: "Domaine Ogereau",
    proprietaire: "Famille Ogereau",
    anecdote: "Le Chenin moelleux épouse parfaitement les courges douces et les épices.",
    photo: "images/vins/coteaux-layon-potimarron.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-17 — Gratin de champignons au fromage → Vin Jaune / Savagnin
  "vin-jaune-gratin-champignons": {

    date: "09-17",

    name: "Arbois Savagnin \"En Spois\"",
    region: "Jura",
    aoc: "AOC Arbois",
    cepage: "Savagnin",
    terroir: "Marnes bleues et grises jurassiennes",

    robe: "Or profond",

    nez: "Noix, curry doux, pomme sèche",
    aromes: "Noix, morille, comté, épices douces",

    bouche: "Puissante, sèche, longue, aromatique",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-champignons-fromage", "volaille-creme", "fromages-jurassiens"],

    domaine: "Domaine Tissot",
    proprietaire: "Famille Tissot",
    anecdote: "Les Savagnins du Jura sont des accords mythiques avec les gratins de comté et de champignons.",
    photo: "images/vins/vin-jaune-gratin-champignons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-18 — Salade de betteraves rôties & chèvre → Sancerre blanc
  "sancerre-betteraves-chevre": {

    date: "09-18",

    name: "Sancerre Blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes calcaires, terres blanches",

    robe: "Jaune pâle brillant",

    nez: "Agrumes, herbes fraîches, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fines, minéralité",

    bouche: "Vive, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["salade-betteraves-chevre", "poissons-crus", "fromages-de-chevre"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Les Sancerres de Vacheron sont des références pour les accords avec les fromages de chèvre.",
    photo: "images/vins/sancerre-betteraves-chevre.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-19 — Pintade braisée aux raisins de vigne → Bourgogne blanc
  "bourgogne-blanc-pintade-raisins": {

    date: "09-19",

    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune doré clair",

    nez: "Beurre frais, pomme, fleurs blanches",
    aromes: "Poire, raisin blanc, noisette, crème",

    bouche: "Ronde, fraîche, élégante, finale beurrée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["pintade-raisins-vigne", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Les Bourgognes blancs beurrés accompagnent très bien les volailles aux fruits.",
    photo: "images/vins/bourgogne-blanc-pintade-raisins.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-20 — Soupe de potiron aux châtaignes → Coteaux-du-Layon
  "coteaux-layon-potiron-chataignes": {

    date: "09-20",

    name: "Coteaux-du-Layon \"Clos de Sainte-Catherine\"",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes ligériens",

    robe: "Or clair",

    nez: "Pomme, miel, coing",
    aromes: "Pomme cuite, miel léger, fruits jaunes",

    bouche: "Douce, fraîche, légère, finale fruitée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-potiron-chataignes", "fromages", "desserts-fruits"],

    domaine: "Domaine des Baumard",
    proprietaire: "Famille Baumard",
    anecdote: "Le Clos de Sainte-Catherine est l’une des cuvées les plus réputées de Coteaux-du-Layon.",
    photo: "images/vins/coteaux-layon-potiron-chataignes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-21 — Tarte fine aux coings & cannelle → Gewurztraminer Vendanges Tardives
  "gewurztraminer-vt-coings-cannelle": {

    date: "09-21",

    name: "Gewurztraminer Vendanges Tardives \"Furstentum\"",
    region: "Alsace",
    aoc: "AOC Alsace Grand Cru Furstentum",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or profond",

    nez: "Rose, miel, fruits confits",
    aromes: "Coing, épices douces, marmelade, litchi",

    bouche: "Riche, moelleuse, longue, très aromatique",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-coings-cannelle", "desserts-epices", "fromages-forts"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Les Vendanges Tardives de Gewurztraminer sont des accords classiques avec les desserts aux épices.",
    photo: "images/vins/gewurztraminer-vt-coings-cannelle.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-22 — Gratin d’endives au jambon → Pinot Gris sec
  "pinot-gris-endives-jambon": {

    date: "09-22",

    name: "Pinot Gris Réserve",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Gris",
    terroir: "Calcaires et grès vosgiens",

    robe: "Or pâle",

    nez: "Fruits jaunes, fumé léger, miel",
    aromes: "Poire, mirabelle, noisette, crème",

    bouche: "Ample, sèche, légèrement fumée, finale longue",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-endives-jambon", "volailles-creme", "poissons-en-sauce"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Pinot Gris sec est un accord classique avec l’endive cuite et la béchamel.",
    photo: "images/vins/pinot-gris-endives-jambon.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-23 — Lapin aux girolles → Saint-Joseph rouge
  "saint-joseph-rouge-lapin-girolles": {

    date: "09-23",

    name: "Saint-Joseph Rouge \"Les Pierres Sèches\"",
    region: "Vallée du Rhône Nord",
    aoc: "AOC Saint-Joseph",
    cepage: "Syrah",
    terroir: "Granites ardéchois",

    robe: "Rouge rubis profond",

    nez: "Violette, poivre, fruits noirs",
    aromes: "Mûre, cassis, poivre noir, sous-bois",

    bouche: "Élégante, fraîche, poivrée, tannins fins",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["lapin-aux-girolles", "volailles-sauce", "champignons"],

    domaine: "Domaine Yves Cuilleron",
    proprietaire: "Yves Cuilleron",
    anecdote: "Les Syrah septentrionales sont idéales avec les girolles et les viandes blanches.",
    photo: "images/vins/saint-joseph-rouge-lapin-girolles.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-24 — Crumble pommes & caramel beurre salé → Cidre doux
  "cidre-doux-crumble-pommes": {

    date: "09-24",

    name: "Cidre Doux AOP Pays d’Auge",
    region: "Normandie",
    aoc: "AOP Pays d’Auge",
    cepage: "Pommes douces et douces-amères",
    terroir: "Vergers sur sols argilo-calcaires",

    robe: "Or ambré",

    nez: "Pomme cuite, caramel, miel",
    aromes: "Pomme rôtie, caramel, vanille",

    bouche: "Douce, légère, fruitée, faible alcool",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["crumble-pommes-caramel", "desserts-pommes", "crepes"],

    domaine: "Cidrerie Dupont",
    proprietaire: "Famille Dupont",
    anecdote: "La cidrerie Dupont est une référence des cidres de garde du Pays d’Auge.",
    photo: "images/vins/cidre-doux-crumble-pommes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-25 — Côte de bœuf aux champignons poêlés → Saint-Estèphe
  "saint-estephe-cote-boeuf-champignons": {

    date: "09-25",

    name: "Saint-Estèphe",
    region: "Bordeaux",
    aoc: "AOC Saint-Estèphe",
    cepage: "Cabernet Sauvignon, Merlot",
    terroir: "Graves profondes et argiles du Médoc",

    robe: "Grenat sombre",

    nez: "Cassis, cèdre, sous-bois, graphite",
    aromes: "Cassis, mûre, champignon, poivre",

    bouche: "Puissante, structurée, tannins fermes, longue",
    longueur: "Très longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Puissants",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["cote-boeuf-champignons", "gibiers", "viandes-grillees"],

    domaine: "Château Montrose",
    proprietaire: "Famille Bouygues",
    anecdote: "Montrose est l’un des grands crus emblématiques de Saint-Estèphe.",
    photo: "images/vins/saint-estephe-cote-boeuf-champignons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-26 — Soupe de châtaignes au lard → Vermentino de Corse
  "vermentino-corse-soupe-chataignes": {

    date: "09-26",

    name: "Corse Blanc \"Fiumeseccu\"",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune doré",

    nez: "Fleurs sèches, miel, noisette",
    aromes: "Châtaigne, pomme cuite, herbes sèches",

    bouche: "Ample, légèrement oxydative, longue, aromatique",
    longueur: "Longue",
    corps: "Moyen à ample",
    acidite: "Faible à moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-chataignes-lard", "plats-automne", "fromages"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino corse accompagne traditionnellement les plats à base de châtaigne.",
    photo: "images/vins/vermentino-corse-soupe-chataignes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-27 — Tarte aux noix de Grenoble → Rivesaltes Ambré
  "rivesaltes-ambre-tarte-noix": {

    date: "09-27",

    name: "Rivesaltes Ambré",
    region: "Roussillon",
    aoc: "AOC Rivesaltes",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes et terrasses caillouteuses",

    robe: "Ambré profond",

    nez: "Noix, caramel, orange confite",
    aromes: "Noix grillée, miel, écorces d’orange",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-noix-grenoble", "desserts-agrumes", "fromages"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Les Rivesaltes ambrés sont des accords classiques avec les desserts aux noix.",
    photo: "images/vins/rivesaltes-ambre-tarte-noix.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-28 — Poulet rôti aux cèpes & pommes sarladaises → Pécharmant
  "pecharmant-poulet-cepes-sarladaises": {

    date: "09-28",

    name: "Pécharmant",
    region: "Sud-Ouest",
    aoc: "AOC Pécharmant",
    cepage: "Merlot, Cabernet Sauvignon, Cabernet Franc",
    terroir: "Graviers ferrugineux et argiles du Bergeracois",

    robe: "Grenat profond",

    nez: "Fruits noirs, sous-bois, épices",
    aromes: "Mûre, prune, champignon, poivre",

    bouche: "Charnue, structurée, tannins mûrs, finale longue",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Présents",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["poulet-cepes-sarladaises", "gibiers-legers", "plats-sud-ouest"],

    domaine: "Château de Tiregand",
    proprietaire: "Famille Saint-Exupéry",
    anecdote: "Le Pécharmant est un rouge traditionnel des tables du Périgord.",
    photo: "images/vins/pecharmant-poulet-cepes-sarladaises.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-29 — Salade de mâche & betteraves → Sancerre blanc
  "sancerre-mache-betteraves": {

    date: "09-29",

    name: "Sancerre Blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes, terres blanches",

    robe: "Jaune pâle brillant",

    nez: "Agrumes, herbes fines, pierre à fusil",
    aromes: "Citron, pamplemousse, herbes fraîches",

    bouche: "Vive, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["salade-mache-betteraves", "poissons-crus", "fromages-de-chevre"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "Les Sancerres de Vacheron sont recherchés pour leur pureté et leur minéralité.",
    photo: "images/vins/sancerre-mache-betteraves.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 09-30 — Velouté de topinambour → Savagnin ouillé
  "savagnin-ouille-topinambour": {

    date: "09-30",

    name: "Savagnin Ouillé \"Les Varrons\"",
    region: "Jura",
    aoc: "AOC Côtes-du-Jura",
    cepage: "Savagnin",
    terroir: "Marnes bleues jurassiennes",

    robe: "Jaune doré clair",

    nez: "Noisette, pomme, fleurs sèches",
    aromes: "Artichaut, pomme cuite, noix fraîche",

    bouche: "Tendue, aromatique, légèrement oxydative, longue",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["veloute-topinambour", "volailles-creme", "fromages-jurassiens"],

    domaine: "Domaine Labet",
    proprietaire: "Famille Labet",
    anecdote: "Les Savagnins ouillés du Jura sont réputés pour leur finesse et leur potentiel gastronomique.",
    photo: "images/vins/savagnin-ouille-topinambour.jpg",

    note_parker: "",
    note_hachette: ""
  },
// ── OCTOBRE ───────────────────────────────────────────



  // 10-01 — Soupe de courge à la crème de ciboulette → Coteaux-du-Layon
  "coteaux-layon-soupe-courge": {
    date: "10-01",
    name: "Coteaux-du-Layon \"Saint-Lambert\"",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes et coteaux ligériens",

    robe: "Or clair brillant",
    nez: "Pomme cuite, miel léger, fleurs blanches",
    aromes: "Coing, miel, fruits jaunes",

    bouche: "Douce, fraîche, légère, texture veloutée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-courge-ciboulette"],

    domaine: "Domaine Ogereau",
    proprietaire: "Famille Ogereau",
    anecdote: "Le Chenin moelleux léger est un accord classique avec les courges d’automne.",
    photo: "images/vins/coteaux-layon-soupe-courge.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-02 — Feuilleté de cèpes en croûte → Saint-Joseph blanc
  "saint-joseph-blanc-feuillete-cepes": {
    date: "10-02",
    name: "Saint-Joseph Blanc \"Lyseras\"",
    region: "Vallée du Rhône Nord",
    aoc: "AOC Saint-Joseph",
    cepage: "Marsanne, Roussanne",
    terroir: "Granites et loess ardéchois",

    robe: "Jaune doré clair",
    nez: "Abricot, miel, fleurs blanches",
    aromes: "Pêche, amande, crème, sous-bois",

    bouche: "Ample, aromatique, légèrement grasse, finale fraîche",
    longueur: "Longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["feuillete-cepes"],

    domaine: "Domaine Yves Cuilleron",
    proprietaire: "Yves Cuilleron",
    anecdote: "La Marsanne est l’un des meilleurs cépages pour accompagner les cèpes.",
    photo: "images/vins/saint-joseph-blanc-feuillete-cepes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-03 — Oie rôtie aux pommes → Pinot Gris d’Alsace (sec)
  "pinot-gris-oie-pommes": {
    date: "10-03",
    name: "Pinot Gris Réserve",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Gris",
    terroir: "Calcaires et grès vosgiens",

    robe: "Or pâle",
    nez: "Fruits jaunes, fumé léger, miel",
    aromes: "Poire, mirabelle, noisette, pomme rôtie",

    bouche: "Ample, sèche, légèrement fumée, finale longue",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["oie-rotie-pommes"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Pinot Gris sec est traditionnellement servi avec les volailles rôties alsaciennes.",
    photo: "images/vins/pinot-gris-oie-pommes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-04 — Potée auvergnate → Côtes-d’Auvergne rouge (Gamay)
  "cotes-auvergne-potee": {
    date: "10-04",
    name: "Côtes-d’Auvergne Rouge",
    region: "Auvergne",
    aoc: "AOC Côtes-d’Auvergne",
    cepage: "Gamay",
    terroir: "Sols volcaniques et basaltiques",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges, poivre, violette",
    aromes: "Cerise, framboise, épices douces",

    bouche: "Souple, fraîche, fruitée, tannins fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["potee-auvergnate"],

    domaine: "Domaine Miolanne",
    proprietaire: "Famille Miolanne",
    anecdote: "Les Gamays volcaniques sont parfaits pour les plats rustiques et fumés.",
    photo: "images/vins/cotes-auvergne-potee.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-05 — Tarte aux pommes normande → Cidre brut AOP Pays d’Auge
  "cidre-brut-tarte-pommes-normande": {
    date: "10-05",
    name: "Cidre Brut AOP Pays d’Auge",
    region: "Normandie",
    aoc: "AOP Pays d’Auge",
    cepage: "Pommes douces-amères",
    terroir: "Vergers sur sols argilo-calcaires",

    robe: "Or ambré",
    nez: "Pomme cuite, caramel, épices",
    aromes: "Pomme rôtie, vanille, calvados léger",

    bouche: "Brut, fruitée, légèrement tannique",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-pommes-normande"],

    domaine: "Cidrerie Dupont",
    proprietaire: "Famille Dupont",
    anecdote: "Le cidre brut équilibre parfaitement la crème et le calvados de la tarte normande.",
    photo: "images/vins/cidre-brut-tarte-pommes-normande.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-06 — Joue de bœuf braisée au vin rouge → Cahors
  "cahors-joue-boeuf": {
    date: "10-06",
    name: "Cahors",
    region: "Sud-Ouest",
    aoc: "AOC Cahors",
    cepage: "Malbec",
    terroir: "Terrasses calcaires et argiles du Lot",

    robe: "Noir profond",
    nez: "Mûre, cuir, épices, sous-bois",
    aromes: "Cassis, prune noire, cacao, poivre",

    bouche: "Puissante, tannique, longue, chaleureuse",
    longueur: "Très longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Puissants",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["joue-boeuf-braisee"],

    domaine: "Château du Cèdre",
    proprietaire: "Famille Verhaeghe",
    anecdote: "Le Malbec est le cépage historique des plats mijotés du Sud-Ouest.",
    photo: "images/vins/cahors-joue-boeuf.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-07 — Gratin de potiron au gorgonzola → Vin de Savoie (Jacquère)
  "savoie-gratin-potiron-gorgonzola": {
    date: "10-07",
    name: "Vin de Savoie \"Apremont\"",
    region: "Savoie",
    aoc: "AOC Vin de Savoie",
    cepage: "Jacquère",
    terroir: "Éboulis calcaires du Mont Granier",

    robe: "Jaune pâle",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Vive, légère, très fraîche, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-potiron-gorgonzola"],

    domaine: "Domaine Giachino",
    proprietaire: "Famille Giachino",
    anecdote: "La Jacquère savoyarde apporte la fraîcheur nécessaire pour équilibrer le gorgonzola.",
    photo: "images/vins/savoie-gratin-potiron-gorgonzola.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-08 — Saucisses aux lentilles du Puy → Côtes-d’Auvergne rouge
  "cotes-auvergne-saucisses-lentilles": {
    date: "10-08",
    name: "Côtes-d’Auvergne Rouge",
    region: "Auvergne",
    aoc: "AOC Côtes-d’Auvergne",
    cepage: "Gamay",
    terroir: "Sols volcaniques et basaltiques",

    robe: "Rouge rubis",
    nez: "Fruits rouges, poivre, violette",
    aromes: "Cerise, framboise, épices douces",

    bouche: "Souple, fruitée, fraîche, tannins fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["saucisses-lentilles"],

    domaine: "Domaine Miolanne",
    proprietaire: "Famille Miolanne",
    anecdote: "Les vins volcaniques d’Auvergne sont parfaits avec les lentilles du Puy.",
    photo: "images/vins/cotes-auvergne-saucisses-lentilles.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-09 — Salade tiède de foie de veau → Beaujolais Morgon
  "morgon-salade-foie-veau": {
    date: "10-09",
    name: "Morgon \"Côte du Py\"",
    region: "Beaujolais",
    aoc: "AOC Morgon",
    cepage: "Gamay",
    terroir: "Schistes et roches volcaniques du Mont du Py",

    robe: "Rouge rubis profond",
    nez: "Fruits noirs, violette, épices douces",
    aromes: "Mûre, cerise noire, poivre, sous-bois",

    bouche: "Souple, ample, légèrement épicée, tannins fins",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["salade-tiede-foie-veau"],

    domaine: "Domaine Jean Foillard",
    proprietaire: "Jean Foillard",
    anecdote: "Le Morgon Côte du Py est réputé pour sa profondeur et sa finesse, idéale avec le foie de veau.",
    photo: "images/vins/morgon-salade-foie-veau.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-10 — Gratin de macaroni au comté et truffe → Vin Jaune
  "vin-jaune-gratin-macaroni-truffe": {
    date: "10-10",
    name: "Château-Chalon",
    region: "Jura",
    aoc: "AOC Château-Chalon",
    cepage: "Savagnin",
    terroir: "Marnes bleues jurassiennes",

    robe: "Or profond",
    nez: "Noix, curry doux, pomme sèche",
    aromes: "Noix, morille, comté, truffe noire",

    bouche: "Puissante, sèche, très longue, aromatique",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-macaroni-comte-truffe"],

    domaine: "Domaine Tissot",
    proprietaire: "Famille Tissot",
    anecdote: "Le vin jaune est l’accord mythique du comté affiné et de la truffe.",
    photo: "images/vins/vin-jaune-gratin-macaroni-truffe.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-11 — Mousse de foie gras sur blinis → Monbazillac
  "monbazillac-foie-gras-blinis": {
    date: "10-11",
    name: "Monbazillac",
    region: "Sud-Ouest",
    aoc: "AOC Monbazillac",
    cepage: "Sémillon, Muscadelle, Sauvignon",
    terroir: "Argiles et calcaires du Bergeracois",

    robe: "Or brillant",
    nez: "Abricot confit, miel, fleurs blanches",
    aromes: "Miel, coing, fruits confits",

    bouche: "Moelleuse, ample, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["mousse-foie-gras-blinis"],

    domaine: "Château Tirecul La Gravière",
    proprietaire: "Famille De Conti",
    anecdote: "Monbazillac est l’accord traditionnel du foie gras dans le Sud-Ouest.",
    photo: "images/vins/monbazillac-foie-gras-blinis.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-12 — Crème de céleri rave aux noix → Sancerre blanc
  "sancerre-creme-celeri-noix": {
    date: "10-12",
    name: "Sancerre Blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes, terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fines, pierre à fusil",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Vive, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["creme-celeri-noix"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "La minéralité du Sancerre équilibre parfaitement la douceur du céleri.",
    photo: "images/vins/sancerre-creme-celeri-noix.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-13 — Confit de canard & pommes sarladaises → Pécharmant
  "pecharmant-confit-canard": {
    date: "10-13",
    name: "Pécharmant",
    region: "Sud-Ouest",
    aoc: "AOC Pécharmant",
    cepage: "Merlot, Cabernet Sauvignon, Cabernet Franc",
    terroir: "Graviers ferrugineux et argiles du Bergeracois",

    robe: "Grenat profond",
    nez: "Fruits noirs, sous-bois, épices",
    aromes: "Mûre, prune, champignon, poivre",

    bouche: "Charnue, structurée, tannins mûrs",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Présents",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["confit-canard-sarladaises"],

    domaine: "Château de Tiregand",
    proprietaire: "Famille Saint-Exupéry",
    anecdote: "Le Pécharmant est un rouge traditionnel des tables du Périgord.",
    photo: "images/vins/pecharmant-confit-canard.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-14 — Tarte au potiron → Gewurztraminer demi-sec
  "gewurztraminer-tarte-potiron": {
    date: "10-14",
    name: "Gewurztraminer \"Cuvée Laurence\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or brillant",
    nez: "Rose, litchi, miel, épices douces",
    aromes: "Potiron sucré, miel, fruits jaunes",

    bouche: "Moelleuse, ample, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-potiron"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Gewurztraminer est l’accord naturel des desserts aux courges sucrées.",
    photo: "images/vins/gewurztraminer-tarte-potiron.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-15 — Cassolette d’escargots au beurre de persil → Bourgogne blanc
  "bourgogne-blanc-escargots": {
    date: "10-15",
    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune doré clair",
    nez: "Beurre frais, noisette, fleurs blanches",
    aromes: "Pomme, poire, crème, herbes fines",

    bouche: "Ronde, fraîche, élégante",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["cassolette-escargots"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Le Chardonnay bourguignon est l’accord classique des escargots au beurre persillé.",
    photo: "images/vins/bourgogne-blanc-escargots.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-16 — Tourte à la viande & champignons → Pinot Noir d’Alsace
  "pinot-noir-tourte-viande-champignons": {
    date: "10-16",
    name: "Pinot Noir \"Les Saintes Claires\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Noir",
    terroir: "Calcaires et coteaux vosgiens",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges, sous-bois, épices douces",
    aromes: "Griotte, framboise, champignon, humus",

    bouche: "Souple, fraîche, acidulée, tannins fins",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tourte-viande-champignons"],

    domaine: "Domaine Albert Mann",
    proprietaire: "Famille Barthelmé",
    anecdote: "Le Pinot Noir alsacien est parfait pour les tourtes forestières.",
    photo: "images/vins/pinot-noir-tourte-viande-champignons.jpg",

    note_parker: "",
    note_hachette: ""
  },
  // 10-17 — Côtes de porc braisées aux pommes → Cidre brut fermier
  "cidre-brut-cotes-porc-pommes": {
    date: "10-17",
    name: "Cidre Brut AOP Pays d’Auge",
    region: "Normandie",
    aoc: "AOP Pays d’Auge",
    cepage: "Pommes douces-amères",
    terroir: "Vergers sur sols argilo-calcaires",

    robe: "Or ambré",
    nez: "Pomme fraîche, caramel léger, épices",
    aromes: "Pomme rôtie, miel, vanille",

    bouche: "Brut, fruitée, légèrement tannique, finale fraîche",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["cotes-porc-pommes-cidre"],

    domaine: "Cidrerie Dupont",
    proprietaire: "Famille Dupont",
    anecdote: "Le cidre brut est l’accord naturel des plats porc + pomme en Normandie.",
    photo: "images/vins/cidre-brut-cotes-porc-pommes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-18 — Salade de pommes, céleri et noix → Sancerre blanc
  "sancerre-salade-waldorf": {
    date: "10-18",
    name: "Sancerre Blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes, terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fines, pierre à fusil",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Vive, tendue, précise, finale saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["salade-waldorf"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "La fraîcheur du Sauvignon équilibre parfaitement la pomme et le céleri.",
    photo: "images/vins/sancerre-salade-waldorf.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-19 — Feuilleté au fromage de chèvre et noix → Savennières
  "savennieres-feuillete-chevre-noix": {
    date: "10-19",
    name: "Savennières",
    region: "Val de Loire",
    aoc: "AOC Savennières",
    cepage: "Chenin blanc",
    terroir: "Schistes et pentes ligériennes",

    robe: "Or brillant",
    nez: "Coing, miel, fleurs blanches",
    aromes: "Pomme, amande, fruits jaunes",

    bouche: "Sèche, puissante, minérale, longue",
    longueur: "Longue",
    corps: "Moyen à ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["feuillete-chevre-noix"],

    domaine: "Domaine Baumard",
    proprietaire: "Famille Baumard",
    anecdote: "Le Chenin sec de Savennières est un accord superbe avec le chèvre chaud.",
    photo: "images/vins/savennieres-feuillete-chevre-noix.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-20 — Marmite de poissons aux légumes d'automne → Muscadet Sèvre-et-Maine
  "muscadet-marmite-poissons": {
    date: "10-20",
    name: "Muscadet Sèvre-et-Maine Sur Lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss, orthogneiss et roches métamorphiques",

    robe: "Jaune pâle",
    nez: "Agrumes, iode, fleurs blanches",
    aromes: "Citron, pomme verte, salinité",

    bouche: "Très fraîche, saline, droite, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["marmite-poissons-automne"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Marc Ollivier",
    anecdote: "Le Muscadet est l’un des meilleurs vins pour les poissons mijotés.",
    photo: "images/vins/muscadet-marmite-poissons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-21 — Pintade aux marrons → Crozes-Hermitage rouge
  "crozes-hermitage-pintade-marrons": {
    date: "10-21",
    name: "Crozes-Hermitage Rouge",
    region: "Vallée du Rhône Nord",
    aoc: "AOC Crozes-Hermitage",
    cepage: "Syrah",
    terroir: "Alluvions caillouteux et argiles rouges",

    robe: "Rouge grenat",
    nez: "Violette, fruits noirs, poivre",
    aromes: "Mûre, cassis, épices, sous-bois",

    bouche: "Souple, poivrée, fraîche, tannins fins",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Présents mais fins",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["pintade-aux-marrons"],

    domaine: "Domaine Alain Graillot",
    proprietaire: "Famille Graillot",
    anecdote: "La Syrah septentrionale accompagne parfaitement les volailles rôties aux marrons.",
    photo: "images/vins/crozes-hermitage-pintade-marrons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-22 — Soupe de lentilles blondes au cumin → Côtes-du-Rhône blanc
  "cotes-rhone-blanc-lentilles-cumin": {
    date: "10-22",
    name: "Côtes-du-Rhône Blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",
    nez: "Abricot, fleurs blanches, miel léger",
    aromes: "Pêche, abricot, amande, herbes sèches",

    bouche: "Ronde, aromatique, légèrement grasse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-lentilles-cumin"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Les épices douces du cumin s’accordent très bien avec les blancs du Rhône.",
    photo: "images/vins/cotes-rhone-blanc-lentilles-cumin.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-23 — Rôti de veau aux champignons sauvages → Bourgogne blanc
  "bourgogne-blanc-roti-veau-champignons": {
    date: "10-23",
    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune doré clair",
    nez: "Beurre frais, noisette, fleurs blanches",
    aromes: "Pomme, poire, crème, champignon blanc",

    bouche: "Ronde, fraîche, élégante",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["roti-veau-champignons"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Le Chardonnay bourguignon est un accord classique des viandes blanches crémées.",
    photo: "images/vins/bourgogne-blanc-roti-veau-champignons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-24 — Tarte à l’oignon alsacienne → Riesling sec
  "riesling-tarte-oignon": {
    date: "10-24",
    name: "Riesling \"Cuvée Théo\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Riesling",
    terroir: "Calcaires et grès vosgiens",

    robe: "Jaune pâle",
    nez: "Agrumes, pierre humide, fleurs blanches",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Sèche, vive, précise, finale saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-oignon-alsacienne"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Riesling sec est l’accord traditionnel de la Zwiebelkuche alsacienne.",
    photo: "images/vins/riesling-tarte-oignon.jpg",

    note_parker: "",
    note_hachette: ""
  },
  // 10-25 — Hachis de bœuf aux pommes de terre → Bordeaux Supérieur
  "bordeaux-superieur-hachis-boeuf": {
    date: "10-25",
    name: "Bordeaux Supérieur",
    region: "Bordeaux",
    aoc: "AOC Bordeaux Supérieur",
    cepage: "Merlot, Cabernet Sauvignon",
    terroir: "Graves fines et argilo-calcaires",

    robe: "Grenat profond",
    nez: "Fruits noirs, sous-bois, épices douces",
    aromes: "Cassis, mûre, prune, poivre",

    bouche: "Souple, ronde, fruitée, tannins fondus",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Présents mais souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["hachis-boeuf-pommes-terre"],

    domaine: "Château Reignac",
    proprietaire: "Famille Vatelot",
    anecdote: "Un Bordeaux Supérieur fruité et rond accompagne parfaitement les plats familiaux.",
    photo: "images/vins/bordeaux-superieur-hachis-boeuf.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-26 — Velouté de panais aux épices → Coteaux-du-Layon
  "coteaux-layon-veloute-panais": {
    date: "10-26",
    name: "Coteaux-du-Layon \"Clos de Sainte-Catherine\"",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes ligériens",

    robe: "Or clair",
    nez: "Pomme cuite, miel, coing",
    aromes: "Fruits jaunes, miel léger, épices douces",

    bouche: "Douce, fraîche, légère, finale fruitée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["veloute-panais-epices"],

    domaine: "Domaine des Baumard",
    proprietaire: "Famille Baumard",
    anecdote: "Le Chenin moelleux épouse parfaitement les légumes doux comme le panais.",
    photo: "images/vins/coteaux-layon-veloute-panais.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-27 — Daube de sanglier → Bandol rouge
  "bandol-daube-sanglier": {
    date: "10-27",
    name: "Bandol Rouge",
    region: "Provence",
    aoc: "AOC Bandol",
    cepage: "Mourvèdre majoritaire",
    terroir: "Terrasses calcaires et argilo-sableuses",

    robe: "Grenat sombre",
    nez: "Fruits noirs, garrigue, cuir, épices",
    aromes: "Mûre, prune, poivre, herbes sèches",

    bouche: "Puissante, structurée, tannins fermes, finale longue",
    longueur: "Très longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Puissants",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["daube-sanglier"],

    domaine: "Domaine Tempier",
    proprietaire: "Famille Peyraud",
    anecdote: "Le Mourvèdre de Bandol est l’accord traditionnel des gibiers méditerranéens.",
    photo: "images/vins/bandol-daube-sanglier.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-28 — Gâteau basque à la crème → Irouléguy blanc
  "irouleguy-blanc-gateau-basque": {
    date: "10-28",
    name: "Irouléguy Blanc",
    region: "Pays Basque",
    aoc: "AOC Irouléguy",
    cepage: "Petit Manseng, Gros Manseng, Courbu",
    terroir: "Terrasses schisteuses et grès rouges",

    robe: "Jaune doré",
    nez: "Fruits exotiques, miel, fleurs blanches",
    aromes: "Ananas, poire, miel, agrumes doux",

    bouche: "Ronde, aromatique, légèrement sucrée, finale fraîche",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gateau-basque-creme"],

    domaine: "Domaine Arretxea",
    proprietaire: "Famille Riouspeyrous",
    anecdote: "Les blancs d’Irouléguy offrent un équilibre parfait entre fraîcheur et gourmandise.",
    photo: "images/vins/irouleguy-blanc-gateau-basque.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-29 — Choux braisés au lard fumé → Pinot Noir de Bourgogne
  "pinot-noir-choux-braises": {
    date: "10-29",
    name: "Bourgogne Pinot Noir",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot Noir",
    terroir: "Argilo-calcaires de la Côte de Beaune et Côte de Nuits",

    robe: "Rouge rubis clair",
    nez: "Griotte, sous-bois, épices douces",
    aromes: "Framboise, cerise, humus, champignon",

    bouche: "Souple, fraîche, délicate, tannins fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["choux-braises-lard"],

    domaine: "Domaine Tollot-Beaut",
    proprietaire: "Famille Tollot",
    anecdote: "Le Pinot Noir est l’accord naturel des plats au chou et au lard fumé.",
    photo: "images/vins/pinot-noir-choux-braises.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-30 — Soupe de butternut au lait de coco → Gewurztraminer
  "gewurztraminer-butternut-coco": {
    date: "10-30",
    name: "Gewurztraminer \"Cuvée Laurence\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or brillant",
    nez: "Rose, litchi, épices douces",
    aromes: "Fruits jaunes, miel, épices exotiques",

    bouche: "Moelleuse, ample, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-butternut-coco"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Gewurztraminer est idéal avec les plats légèrement exotiques et sucrés-salés.",
    photo: "images/vins/gewurztraminer-butternut-coco.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 10-31 — Soupe d’Halloween au potiron → Pinot Gris demi-sec
  "pinot-gris-soupe-halloween": {
    date: "10-31",
    name: "Pinot Gris \"Cuvée Laurence\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Gris",
    terroir: "Calcaires et grès vosgiens",

    robe: "Or pâle brillant",
    nez: "Fruits jaunes, miel, épices douces",
    aromes: "Potiron sucré, mirabelle, miel",

    bouche: "Douce, ample, légèrement épicée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-halloween-potiron"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Pinot Gris demi-sec accompagne parfaitement les soupes de courges sucrées.",
    photo: "images/vins/pinot-gris-soupe-halloween.jpg",

    note_parker: "",
    note_hachette: ""
  },
 // 11-01 — Ragoût de marrons à la saucisse → Vin de Corse rouge (Niellucciu)
  "corse-rouge-ragout-marrons": {
    date: "11-01",
    name: "Corse Rouge \"Fiumeseccu\"",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Niellucciu",
    terroir: "Schistes et coteaux granitiques",

    robe: "Rouge rubis sombre",
    nez: "Fruits noirs, herbes du maquis, épices",
    aromes: "Mûre, prune, poivre, garrigue",

    bouche: "Charnue, chaleureuse, légèrement épicée",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Présents mais souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["ragout-marrons-saucisse"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Niellucciu, cousin du Sangiovese, accompagne parfaitement les plats corses aux châtaignes.",
    photo: "images/vins/corse-rouge-ragout-marrons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-02 — Garbure aux haricots tarbais → Madiran
  "madiran-garbure": {
    date: "11-02",
    name: "Madiran",
    region: "Sud-Ouest",
    aoc: "AOC Madiran",
    cepage: "Tannat majoritaire",
    terroir: "Argiles et galets roulés du Piémont pyrénéen",

    robe: "Grenat profond",
    nez: "Fruits noirs, épices, sous-bois",
    aromes: "Cassis, mûre, poivre, réglisse",

    bouche: "Puissante, structurée, tannins fermes",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Puissants",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["garbure-haricots-tarbais"],

    domaine: "Château Montus",
    proprietaire: "Alain Brumont",
    anecdote: "Le Madiran est le vin historique des plats robustes du Piémont pyrénéen.",
    photo: "images/vins/madiran-garbure.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-03 — Andouille de Vire en croûte → Cidre brut fermier
  "cidre-brut-andouille-vire": {
    date: "11-03",
    name: "Cidre Brut AOP Pays d’Auge",
    region: "Normandie",
    aoc: "AOP Pays d’Auge",
    cepage: "Pommes douces-amères",
    terroir: "Vergers argilo-calcaires",

    robe: "Or ambré",
    nez: "Pomme fraîche, fumé léger, épices",
    aromes: "Pomme rôtie, caramel, notes fumées",

    bouche: "Brut, fruitée, légèrement tannique",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["andouille-vire-croute"],

    domaine: "Cidrerie Dupont",
    proprietaire: "Famille Dupont",
    anecdote: "Le cidre brut est l’accord naturel des charcuteries fumées normandes.",
    photo: "images/vins/cidre-brut-andouille-vire.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-04 — Flamme de joue de porc aux lentilles → Côtes-d’Auvergne rouge
  "cotes-auvergne-joue-porc": {
    date: "11-04",
    name: "Côtes-d’Auvergne Rouge",
    region: "Auvergne",
    aoc: "AOC Côtes-d’Auvergne",
    cepage: "Gamay",
    terroir: "Sols volcaniques et basaltiques",

    robe: "Rouge rubis",
    nez: "Fruits rouges, poivre, violette",
    aromes: "Cerise, framboise, épices douces",

    bouche: "Souple, fruitée, fraîche, tannins fins",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["joue-porc-lentilles"],

    domaine: "Domaine Miolanne",
    proprietaire: "Famille Miolanne",
    anecdote: "Les Gamays volcaniques sont parfaits pour les plats mijotés aux lentilles.",
    photo: "images/vins/cotes-auvergne-joue-porc.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-05 — Soufflé au Grand Marnier → Muscat de Rivesaltes
  "muscat-rivesaltes-souffle-grand-marnier": {
    date: "11-05",
    name: "Muscat de Rivesaltes",
    region: "Roussillon",
    aoc: "AOC Muscat de Rivesaltes",
    cepage: "Muscat à petits grains, Muscat d’Alexandrie",
    terroir: "Schistes et calcaires du Roussillon",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches, miel",
    aromes: "Muscat, agrumes doux, miel",

    bouche: "Douce, fraîche, aromatique",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["souffle-grand-marnier-2"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Le Muscat doux équilibre parfaitement l’alcool du Grand Marnier.",
    photo: "images/vins/muscat-rivesaltes-souffle-grand-marnier.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-06 — Côtes de marcassin aux airelles → Pinot Noir d’Alsace
  "pinot-noir-marcassin-airelles": {
    date: "11-06",
    name: "Pinot Noir \"Les Saintes Claires\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Noir",
    terroir: "Calcaires et coteaux vosgiens",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges, sous-bois, épices douces",
    aromes: "Griotte, framboise, airelle, humus",

    bouche: "Souple, fraîche, acidulée, tannins fins",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["cotes-marcassin-airelles"],

    domaine: "Domaine Albert Mann",
    proprietaire: "Famille Barthelmé",
    anecdote: "Le Pinot Noir alsacien est idéal avec les gibiers légers et les airelles.",
    photo: "images/vins/pinot-noir-marcassin-airelles.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-07 — Bœuf bourguignon aux champignons → Bourgogne rouge
  "bourgogne-rouge-boeuf-bourguignon": {
    date: "11-07",
    name: "Bourgogne Pinot Noir",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot Noir",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Rouge rubis profond",
    nez: "Griotte, sous-bois, épices",
    aromes: "Cerise, champignon, humus, poivre",

    bouche: "Souple, fraîche, élégante, tannins fins",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["boeuf-bourgogne-champignons"],

    domaine: "Domaine Tollot-Beaut",
    proprietaire: "Famille Tollot",
    anecdote: "Le Pinot Noir est l’accord historique du bœuf bourguignon.",
    photo: "images/vins/bourgogne-rouge-boeuf-bourguignon.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-08 — Tarte aux noix et caramel → Rivesaltes Ambré
  "rivesaltes-ambre-tarte-noix-caramel": {
    date: "11-08",
    name: "Rivesaltes Ambré",
    region: "Roussillon",
    aoc: "AOC Rivesaltes",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes et terrasses caillouteuses",

    robe: "Ambré profond",
    nez: "Noix, caramel, orange confite",
    aromes: "Noix grillée, miel, écorces d’orange",

    bouche: "Douce, chaleureuse, longue, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-noix-caramel"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Les Rivesaltes ambrés sont parfaits avec les desserts aux noix.",
    photo: "images/vins/rivesaltes-ambre-tarte-noix-caramel.jpg",

    note_parker: "",
    note_hachette: ""
  },
  // 11-09 — Gratin de chou romanesco au fromage → Vin de Savoie (Jacquère)
  "savoie-romanesco-fromage": {
    date: "11-09",
    name: "Vin de Savoie \"Apremont\"",
    region: "Savoie",
    aoc: "AOC Vin de Savoie",
    cepage: "Jacquère",
    terroir: "Éboulis calcaires du Mont Granier",

    robe: "Jaune pâle",
    nez: "Agrumes, fleurs blanches, pierre humide",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Vive, légère, très fraîche, finale saline",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-romanesco-fromage"],

    domaine: "Domaine Giachino",
    proprietaire: "Famille Giachino",
    anecdote: "La Jacquère savoyarde apporte la fraîcheur idéale pour équilibrer un gratin crémeux.",
    photo: "images/vins/savoie-romanesco-fromage.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-10 — Fricassée de lapin aux pruneaux → Chinon rouge
  "chinon-fricassee-lapin-pruneaux": {
    date: "11-10",
    name: "Chinon Rouge",
    region: "Val de Loire",
    aoc: "AOC Chinon",
    cepage: "Cabernet Franc",
    terroir: "Tuffeau, graviers et argiles ligériennes",

    robe: "Rouge rubis",
    nez: "Fruits rouges, poivron doux, sous-bois",
    aromes: "Framboise, cerise, pruneau, herbes fines",

    bouche: "Souple, fraîche, légèrement épicée",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["fricassee-lapin-pruneaux"],

    domaine: "Domaine Bernard Baudry",
    proprietaire: "Famille Baudry",
    anecdote: "Le Cabernet Franc ligérien accompagne parfaitement les viandes blanches mijotées aux fruits.",
    photo: "images/vins/chinon-fricassee-lapin-pruneaux.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-11 — Soupe de la Victoire → Bourgogne Aligoté
  "aligote-soupe-victoire": {
    date: "11-11",
    name: "Bourgogne Aligoté",
    region: "Bourgogne",
    aoc: "AOC Bourgogne Aligoté",
    cepage: "Aligoté",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune clair brillant",
    nez: "Citron, pomme verte, fleurs blanches",
    aromes: "Citron, poire, amande fraîche",

    bouche: "Vive, fraîche, tendue, finale citronnée",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-victoire"],

    domaine: "Domaine Goisot",
    proprietaire: "Famille Goisot",
    anecdote: "L’Aligoté apporte une fraîcheur idéale aux soupes de légumes racines.",
    photo: "images/vins/aligote-soupe-victoire.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-12 — Pied de cochon pané → Cidre brut fermier
  "cidre-brut-pied-cochon": {
    date: "11-12",
    name: "Cidre Brut AOP Pays d’Auge",
    region: "Normandie",
    aoc: "AOP Pays d’Auge",
    cepage: "Pommes douces-amères",
    terroir: "Vergers argilo-calcaires",

    robe: "Or ambré",
    nez: "Pomme fraîche, caramel, épices",
    aromes: "Pomme rôtie, miel, notes fumées",

    bouche: "Brut, fruitée, légèrement tannique",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["pied-cochon-pane"],

    domaine: "Cidrerie Dupont",
    proprietaire: "Famille Dupont",
    anecdote: "Le cidre brut équilibre parfaitement le gras et le croustillant du pied de cochon.",
    photo: "images/vins/cidre-brut-pied-cochon.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-13 — Crème brûlée à la vanille → Gewurztraminer Vendanges Tardives
  "gewurztraminer-vt-creme-brulee": {
    date: "11-13",
    name: "Gewurztraminer Vendanges Tardives \"Furstentum\"",
    region: "Alsace",
    aoc: "AOC Alsace Grand Cru Furstentum",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or profond",
    nez: "Rose, miel, fruits confits",
    aromes: "Vanille, miel, coing, épices douces",

    bouche: "Riche, moelleuse, très aromatique",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["creme-brulee-vanille"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Les Vendanges Tardives d’Alsace sont idéales avec les desserts crémeux et vanillés.",
    photo: "images/vins/gewurztraminer-vt-creme-brulee.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-14 — Terrine de chevreuil aux baies → Saint-Joseph rouge
  "saint-joseph-terrine-chevreuil": {
    date: "11-14",
    name: "Saint-Joseph Rouge \"Les Pierres Sèches\"",
    region: "Vallée du Rhône Nord",
    aoc: "AOC Saint-Joseph",
    cepage: "Syrah",
    terroir: "Granites ardéchois",

    robe: "Rouge grenat",
    nez: "Violette, fruits noirs, poivre",
    aromes: "Mûre, cassis, épices, sous-bois",

    bouche: "Élégante, fraîche, poivrée, tannins fins",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Présents mais fins",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["terrine-chevreuil"],

    domaine: "Domaine Yves Cuilleron",
    proprietaire: "Yves Cuilleron",
    anecdote: "La Syrah septentrionale accompagne parfaitement les terrines de gibier.",
    photo: "images/vins/saint-joseph-terrine-chevreuil.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-15 — Gratin de blettes au riz et parmesan → Vermentino de Corse
  "vermentino-gratin-blettes": {
    date: "11-15",
    name: "Corse Blanc \"Fiumeseccu\"",
    region: "Corse",
    aoc: "AOC Corse",
    cepage: "Vermentino",
    terroir: "Granites et schistes maritimes",

    robe: "Jaune doré",
    nez: "Fleurs sèches, miel, herbes du maquis",
    aromes: "Pomme cuite, herbes sèches, agrumes doux",

    bouche: "Ample, légèrement oxydative, aromatique",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Faible à moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-blettes-riz"],

    domaine: "Domaine Alzipratu",
    proprietaire: "Famille Acquaviva",
    anecdote: "Le Vermentino corse accompagne très bien les légumes méditerranéens.",
    photo: "images/vins/vermentino-gratin-blettes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-16 — Pot-au-feu à la joue de bœuf → Bourgogne rouge
  "bourgogne-rouge-pot-au-feu": {
    date: "11-16",
    name: "Bourgogne Pinot Noir",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot Noir",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Rouge rubis",
    nez: "Griotte, sous-bois, épices douces",
    aromes: "Cerise, framboise, humus, champignon",

    bouche: "Souple, fraîche, élégante, tannins fins",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["pot-au-feu-joue-boeuf"],

    domaine: "Domaine Tollot-Beaut",
    proprietaire: "Famille Tollot",
    anecdote: "Le Pinot Noir est un accord classique des viandes mijotées et des bouillons riches.",
    photo: "images/vins/bourgogne-rouge-pot-au-feu.jpg",

    note_parker: "",
    note_hachette: ""
  },
  // 11-17 — Tourte de perdrix aux cèpes → Saint-Joseph rouge
  "saint-joseph-tourte-perdrix": {
    date: "11-17",
    name: "Saint-Joseph Rouge \"Les Pierres Sèches\"",
    region: "Vallée du Rhône Nord",
    aoc: "AOC Saint-Joseph",
    cepage: "Syrah",
    terroir: "Granites ardéchois",

    robe: "Rouge grenat profond",
    nez: "Violette, fruits noirs, poivre",
    aromes: "Mûre, cassis, sous-bois, épices",

    bouche: "Élégante, fraîche, poivrée, tannins fins",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Présents mais fins",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tourte-perdrix-cepes"],

    domaine: "Domaine Yves Cuilleron",
    proprietaire: "Yves Cuilleron",
    anecdote: "La Syrah septentrionale est parfaite pour les gibiers à plumes et les cèpes.",
    photo: "images/vins/saint-joseph-tourte-perdrix.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-18 — Crème de topinambour à la truffe → Savagnin ouillé
  "savagnin-ouille-topinambour-truffe": {
    date: "11-18",
    name: "Savagnin Ouillé \"Les Varrons\"",
    region: "Jura",
    aoc: "AOC Côtes-du-Jura",
    cepage: "Savagnin",
    terroir: "Marnes bleues jurassiennes",

    robe: "Jaune doré clair",
    nez: "Noisette, pomme, fleurs sèches",
    aromes: "Artichaut, truffe, noix fraîche",

    bouche: "Tendue, aromatique, légèrement oxydative",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["creme-topinambour-truffe"],

    domaine: "Domaine Labet",
    proprietaire: "Famille Labet",
    anecdote: "Le Savagnin ouillé sublime les légumes racines et la truffe noire.",
    photo: "images/vins/savagnin-ouille-topinambour-truffe.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-19 — Brandade gratinée aux olives → Cassis blanc
  "cassis-blanc-brandade": {
    date: "11-19",
    name: "Cassis Blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Marsanne, Clairette, Ugni blanc",
    terroir: "Terrasses calcaires maritimes",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes de Provence",

    bouche: "Fraîche, saline, aromatique",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["brandade-gratinee-olives"],

    domaine: "Domaine du Paternel",
    proprietaire: "Famille Santini",
    anecdote: "Les blancs de Cassis sont des compagnons historiques de la morue et des plats méditerranéens.",
    photo: "images/vins/cassis-blanc-brandade.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-20 — Oie confite aux pommes et airelles → Pinot Gris d’Alsace (sec)
  "pinot-gris-oie-confite": {
    date: "11-20",
    name: "Pinot Gris Réserve",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Gris",
    terroir: "Calcaires et grès vosgiens",

    robe: "Or pâle",
    nez: "Fruits jaunes, fumé léger, miel",
    aromes: "Pomme rôtie, mirabelle, noisette",

    bouche: "Ample, sèche, légèrement fumée",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["oie-confite-pommes"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Pinot Gris sec est un accord traditionnel des volailles confites alsaciennes.",
    photo: "images/vins/pinot-gris-oie-confite.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-21 — Velouté de cèpes séchés au vin jaune → Vin Jaune
  "vin-jaune-veloute-cepes": {
    date: "11-21",
    name: "Château-Chalon",
    region: "Jura",
    aoc: "AOC Château-Chalon",
    cepage: "Savagnin",
    terroir: "Marnes bleues jurassiennes",

    robe: "Or profond",
    nez: "Noix, curry doux, pomme sèche",
    aromes: "Morille, noix, épices, cèpes séchés",

    bouche: "Puissante, sèche, très longue",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["veloute-cepes-seches-vin-jaune"],

    domaine: "Domaine Tissot",
    proprietaire: "Famille Tissot",
    anecdote: "Le vin jaune est l’accord mythique des cèpes, frais ou séchés.",
    photo: "images/vins/vin-jaune-veloute-cepes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-22 — Épaule de porc braisée à la bière → Bière ambrée artisanale
  "biere-ambree-epaule-porc": {
    date: "11-22",
    name: "Bière Ambrée Artisanale",
    region: "Nord / Alsace",
    aoc: "",
    cepage: "Orge maltée",
    terroir: "Brasseries artisanales du Nord",

    robe: "Ambrée cuivrée",
    nez: "Caramel, malt, épices douces",
    aromes: "Pain grillé, caramel, épices, légère amertume",

    bouche: "Ronde, maltée, légèrement épicée",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["epaule-porc-biere"],

    domaine: "Brasserie Thiriez",
    proprietaire: "Daniel Thiriez",
    anecdote: "Les bières ambrées du Nord sont idéales avec les plats mijotés à la bière.",
    photo: "images/vins/biere-ambree-epaule-porc.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-23 — Kig ha farz → Cidre brut breton
  "cidre-brut-kig-ha-farz": {
    date: "11-23",
    name: "Cidre Brut Breton",
    region: "Bretagne",
    aoc: "",
    cepage: "Pommes douces-amères bretonnes",
    terroir: "Vergers granitiques du Léon et du Trégor",

    robe: "Or ambré",
    nez: "Pomme fraîche, miel, épices",
    aromes: "Pomme rôtie, caramel léger, fruits jaunes",

    bouche: "Brut, fruitée, légèrement tannique",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["kig-ha-farz-automne"],

    domaine: "Cidrerie Coat-Albret",
    proprietaire: "Famille Bosser",
    anecdote: "Le cidre brut est l’accord traditionnel du Kig ha farz breton.",
    photo: "images/vins/cidre-brut-kig-ha-farz.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-24 — Cuisses de canard confites → Pécharmant
  "pecharmant-cuisses-canard": {
    date: "11-24",
    name: "Pécharmant",
    region: "Sud-Ouest",
    aoc: "AOC Pécharmant",
    cepage: "Merlot, Cabernet Sauvignon, Cabernet Franc",
    terroir: "Graviers ferrugineux et argiles du Bergeracois",

    robe: "Grenat profond",
    nez: "Fruits noirs, sous-bois, épices",
    aromes: "Mûre, prune, champignon, poivre",

    bouche: "Charnue, structurée, tannins mûrs",
    longueur: "Longue",
    corps: "Moyen à corsé",
    acidite: "Moyenne",
    tanins: "Présents",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["cuisses-canard-confites"],

    domaine: "Château de Tiregand",
    proprietaire: "Famille Saint-Exupéry",
    anecdote: "Le Pécharmant est un rouge traditionnel des plats confits du Périgord.",
    photo: "images/vins/pecharmant-cuisses-canard.jpg",

    note_parker: "",
    note_hachette: ""
  },
  // 11-25 — Soupe de Saint-Nicolas aux épices → Gewurztraminer
  "gewurztraminer-soupe-saint-nicolas": {
    date: "11-25",
    name: "Gewurztraminer \"Cuvée Laurence\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or brillant",
    nez: "Rose, litchi, épices douces",
    aromes: "Cannelle, miel, fruits jaunes",

    bouche: "Moelleuse, ample, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-saint-nicolas-epices"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Gewurztraminer est l’accord naturel des plats légèrement sucrés et épicés de l’Avent.",
    photo: "images/vins/gewurztraminer-soupe-saint-nicolas.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-26 — Bœuf en daube à la languedocienne → Minervois rouge
  "minervois-daube-languedocienne": {
    date: "11-26",
    name: "Minervois Rouge",
    region: "Languedoc",
    aoc: "AOC Minervois",
    cepage: "Syrah, Grenache, Mourvèdre",
    terroir: "Terrasses calcaires et schistes du Minervois",

    robe: "Grenat sombre",
    nez: "Fruits noirs, garrigue, épices",
    aromes: "Mûre, prune, thym, poivre",

    bouche: "Charnue, chaleureuse, structurée",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["daube-languedocienne"],

    domaine: "Château Maris",
    proprietaire: "Famille McCrea",
    anecdote: "Les rouges du Minervois sont parfaits pour les daubes mijotées aux olives.",
    photo: "images/vins/minervois-daube-languedocienne.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-27 — Foie gras poêlé aux figues sèches → Monbazillac
  "monbazillac-foie-gras-figues": {
    date: "11-27",
    name: "Monbazillac",
    region: "Sud-Ouest",
    aoc: "AOC Monbazillac",
    cepage: "Sémillon, Muscadelle, Sauvignon",
    terroir: "Argiles et calcaires du Bergeracois",

    robe: "Or brillant",
    nez: "Abricot confit, miel, fleurs blanches",
    aromes: "Miel, coing, figue sèche",

    bouche: "Moelleuse, ample, longue",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["foie-gras-figues-seches"],

    domaine: "Château Tirecul La Gravière",
    proprietaire: "Famille De Conti",
    anecdote: "Le Monbazillac est l’accord historique du foie gras poêlé.",
    photo: "images/vins/monbazillac-foie-gras-figues.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-28 — Suprêmes de pintade aux lardons et marrons → Crozes-Hermitage rouge
  "crozes-hermitage-pintade-marrons": {
    date: "11-28",
    name: "Crozes-Hermitage Rouge",
    region: "Vallée du Rhône Nord",
    aoc: "AOC Crozes-Hermitage",
    cepage: "Syrah",
    terroir: "Alluvions caillouteux et argiles rouges",

    robe: "Rouge grenat",
    nez: "Violette, fruits noirs, poivre",
    aromes: "Mûre, cassis, épices, sous-bois",

    bouche: "Souple, poivrée, fraîche, tannins fins",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Présents mais fins",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["supremes-pintade-marrons"],

    domaine: "Domaine Alain Graillot",
    proprietaire: "Famille Graillot",
    anecdote: "La Syrah septentrionale accompagne parfaitement les volailles rôties aux marrons.",
    photo: "images/vins/crozes-hermitage-pintade-marrons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-29 — Tarte aux poires Belle Hélène → Vouvray moelleux
  "vouvray-moelleux-belle-helene": {
    date: "11-29",
    name: "Vouvray Moelleux",
    region: "Val de Loire",
    aoc: "AOC Vouvray",
    cepage: "Chenin blanc",
    terroir: "Tuffeau et argiles blanches",

    robe: "Or clair brillant",
    nez: "Pomme, coing, miel",
    aromes: "Poire pochée, miel, fleurs blanches",

    bouche: "Douce, fraîche, élégante",
    longueur: "Longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["tarte-poires-belle-helene"],

    domaine: "Domaine Huet",
    proprietaire: "Famille Hwang",
    anecdote: "Le Vouvray moelleux sublime les desserts aux poires et au chocolat.",
    photo: "images/vins/vouvray-moelleux-belle-helene.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 11-30 — Poule au pot aux légumes d'hiver → Jurançon sec
  "jurancon-sec-poule-au-pot": {
    date: "11-30",
    name: "Jurançon Sec",
    region: "Sud-Ouest",
    aoc: "AOC Jurançon Sec",
    cepage: "Gros Manseng, Petit Manseng",
    terroir: "Pentes schisteuses et poudingues du piémont pyrénéen",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, ananas, fleurs blanches",
    aromes: "Citron, fruits exotiques, herbes fines",

    bouche: "Vive, aromatique, légèrement saline",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["poule-au-pot-hiver"],

    domaine: "Domaine Cauhapé",
    proprietaire: "Henri Ramonteu",
    anecdote: "Le Jurançon sec est l’accord traditionnel des volailles bouillies du Sud-Ouest.",
    photo: "images/vins/jurancon-sec-poule-au-pot.jpg",

    note_parker: "",
    note_hachette: ""
  },
  // 12-01 — Soupe au potiron et au lard → Coteaux-du-Layon
  "coteaux-layon-soupe-potiron-lard": {
    date: "12-01",
    name: "Coteaux-du-Layon \"Saint-Lambert\"",
    region: "Val de Loire",
    aoc: "AOC Coteaux-du-Layon",
    cepage: "Chenin blanc",
    terroir: "Schistes et coteaux ligériens",

    robe: "Or clair brillant",
    nez: "Pomme cuite, miel, coing",
    aromes: "Fruits jaunes, miel léger, épices douces",

    bouche: "Douce, fraîche, légère, texture veloutée",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-potiron-lard"],

    domaine: "Domaine Ogereau",
    proprietaire: "Famille Ogereau",
    anecdote: "Le Chenin moelleux léger épouse parfaitement les soupes de courges d’hiver.",
    photo: "images/vins/coteaux-layon-soupe-potiron-lard.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-02 — Gratin de céleri aux champignons → Bourgogne Chardonnay
  "bourgogne-blanc-gratin-celeri-champignons": {
    date: "12-02",
    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune doré clair",
    nez: "Beurre frais, noisette, sous-bois",
    aromes: "Pomme, crème, champignon blanc",

    bouche: "Ronde, fraîche, élégante",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["gratin-celeri-champignons"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Le Chardonnay bourguignon est parfait pour les gratins d’hiver aux légumes racines.",
    photo: "images/vins/bourgogne-blanc-gratin-celeri-champignons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-03 — Côtes de sanglier aux airelles → Pinot Noir d’Alsace
  "pinot-noir-sanglier-airelles": {
    date: "12-03",
    name: "Pinot Noir \"Les Saintes Claires\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Pinot Noir",
    terroir: "Calcaires et coteaux vosgiens",

    robe: "Rouge rubis clair",
    nez: "Fruits rouges, sous-bois, épices douces",
    aromes: "Griotte, framboise, airelle, humus",

    bouche: "Souple, fraîche, acidulée, tannins fins",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["cotes-sanglier-airelles"],

    domaine: "Domaine Albert Mann",
    proprietaire: "Famille Barthelmé",
    anecdote: "Le Pinot Noir alsacien est idéal pour les gibiers légers et les airelles.",
    photo: "images/vins/pinot-noir-sanglier-airelles.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-04 — Soupe des mineurs (Sainte-Barbe) → Bière brune artisanale
  "biere-brune-soupe-mineurs": {
    date: "12-04",
    name: "Bière Brune Artisanale",
    region: "Nord / Lorraine",
    aoc: "",
    cepage: "Orge maltée",
    terroir: "Brasseries artisanales du Nord",

    robe: "Brun foncé",
    nez: "Caramel, malt torréfié, cacao",
    aromes: "Pain grillé, caramel, épices douces",

    bouche: "Ronde, maltée, légèrement sucrée",
    longueur: "Moyenne",
    corps: "Moyen à ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-mineurs"],

    domaine: "Brasserie Thiriez",
    proprietaire: "Daniel Thiriez",
    anecdote: "Les bières brunes du Nord étaient traditionnellement servies aux mineurs.",
    photo: "images/vins/biere-brune-soupe-mineurs.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-05 — Feuilleté de Saint-Nicolas aux pralines → Gewurztraminer
  "gewurztraminer-feuillete-saint-nicolas": {
    date: "12-05",
    name: "Gewurztraminer \"Cuvée Laurence\"",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or brillant",
    nez: "Rose, litchi, épices douces",
    aromes: "Praline, miel, fruits jaunes",

    bouche: "Moelleuse, ample, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["feuillete-saint-nicolas"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Le Gewurztraminer est l’accord naturel des pâtisseries de l’Avent.",
    photo: "images/vins/gewurztraminer-feuillete-saint-nicolas.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-06 — Bredele alsaciens → Muscat d’Alsace
  "muscat-alsace-bredele": {
    date: "12-06",
    name: "Muscat d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Muscat à petits grains, Muscat ottonel",
    terroir: "Calcaires et grès vosgiens",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches",
    aromes: "Muscat, agrumes doux, miel",

    bouche: "Fraîche, aromatique, légère",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["bredele-alsaciens"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Muscat sec est l’accord traditionnel des biscuits de Noël en Alsace.",
    photo: "images/vins/muscat-alsace-bredele.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-07 — Soupe de haricots blancs au jambon → Côtes-du-Rhône blanc
  "cotes-rhone-blanc-haricots-jambon": {
    date: "12-07",
    name: "Côtes-du-Rhône Blanc",
    region: "Vallée du Rhône",
    aoc: "AOC Côtes-du-Rhône",
    cepage: "Viognier, Roussanne, Marsanne",
    terroir: "Galets roulés, argiles, sables",

    robe: "Jaune clair brillant",
    nez: "Abricot, fleurs blanches, miel léger",
    aromes: "Pêche, abricot, amande, herbes sèches",

    bouche: "Ronde, aromatique, légèrement grasse",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-haricots-blancs-jambon"],

    domaine: "E. Guigal",
    proprietaire: "Famille Guigal",
    anecdote: "Les blancs du Rhône équilibrent parfaitement les soupes riches au jambon cru.",
    photo: "images/vins/cotes-rhone-blanc-haricots-jambon.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-08 — Bugnes lyonnaises → Rivesaltes Ambré
  "rivesaltes-ambre-bugnes": {
    date: "12-08",
    name: "Rivesaltes Ambré",
    region: "Roussillon",
    aoc: "AOC Rivesaltes",
    cepage: "Grenache blanc, Grenache gris, Macabeu",
    terroir: "Schistes et terrasses caillouteuses",

    robe: "Ambré profond",
    nez: "Noix, caramel, orange confite",
    aromes: "Miel, écorces d’orange, fruits secs",

    bouche: "Douce, chaleureuse, longue",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["bugnes-lyonnaises"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Les vins doux ambrés sont parfaits avec les beignets et pâtisseries de l’Avent.",
    photo: "images/vins/rivesaltes-ambre-bugnes.jpg",

    note_parker: "",
    note_hachette: ""
  },
    // 12-09 — Soufflé au roquefort → Jurançon sec
  "jurancon-sec-souffle-roquefort": {
    date: "12-09",
    name: "Jurançon Sec",
    region: "Sud-Ouest",
    aoc: "AOC Jurançon Sec",
    cepage: "Gros Manseng, Petit Manseng",
    terroir: "Pentes schisteuses du piémont pyrénéen",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, ananas, fleurs blanches",
    aromes: "Citron, fruits exotiques, herbes fines",

    bouche: "Vive, aromatique, légèrement saline",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["souffle-roquefort"],

    domaine: "Domaine Cauhapé",
    proprietaire: "Henri Ramonteu",
    anecdote: "Le Jurançon sec équilibre parfaitement la puissance salée du roquefort.",
    photo: "images/vins/jurancon-sec-souffle-roquefort.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-10 — Filet de bœuf en croûte (Wellington) → Saint-Émilion Grand Cru
  "saint-emilion-wellington": {
    date: "12-10",
    name: "Saint-Émilion Grand Cru",
    region: "Bordeaux",
    aoc: "AOC Saint-Émilion Grand Cru",
    cepage: "Merlot, Cabernet Franc",
    terroir: "Calcaires et argiles de la rive droite",

    robe: "Grenat profond",
    nez: "Fruits noirs, truffe, sous-bois",
    aromes: "Prune, cassis, champignon, épices",

    bouche: "Ample, veloutée, tannins mûrs",
    longueur: "Longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Présents mais soyeux",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["filet-boeuf-en-croute"],

    domaine: "Château Fonroque",
    proprietaire: "Famille Guillard",
    anecdote: "Les rouges de Saint‑Émilion sont parfaits pour les viandes en croûte et les duxelles de champignons.",
    photo: "images/vins/saint-emilion-wellington.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-11 — Velouté de châtaignes au foie gras → Monbazillac
  "monbazillac-veloute-chataignes": {
    date: "12-11",
    name: "Monbazillac",
    region: "Sud-Ouest",
    aoc: "AOC Monbazillac",
    cepage: "Sémillon, Muscadelle, Sauvignon",
    terroir: "Argiles et calcaires du Bergeracois",

    robe: "Or brillant",
    nez: "Abricot confit, miel, fleurs blanches",
    aromes: "Coing, miel, fruits confits",

    bouche: "Moelleuse, ample, longue",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["veloute-chataignes-foie-gras"],

    domaine: "Château Tirecul La Gravière",
    proprietaire: "Famille De Conti",
    anecdote: "Le Monbazillac sublime les accords châtaigne + foie gras, classiques du Périgord.",
    photo: "images/vins/monbazillac-veloute-chataignes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-12 — Saumon gravlax → Sancerre blanc
  "sancerre-saumon-gravlax": {
    date: "12-12",
    name: "Sancerre Blanc",
    region: "Val de Loire",
    aoc: "AOC Sancerre",
    cepage: "Sauvignon blanc",
    terroir: "Silex, caillottes, terres blanches",

    robe: "Jaune pâle brillant",
    nez: "Agrumes, herbes fines, pierre à fusil",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Vive, tendue, précise, saline",
    longueur: "Longue",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["saumon-gravlax-fetes"],

    domaine: "Domaine Vacheron",
    proprietaire: "Famille Vacheron",
    anecdote: "La minéralité du Sancerre équilibre parfaitement le gras du saumon mariné.",
    photo: "images/vins/sancerre-saumon-gravlax.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-13 — Boule de neige suédoise (Sainte-Lucie) → Muscat d’Alsace
  "muscat-boule-neige": {
    date: "12-13",
    name: "Muscat d’Alsace",
    region: "Alsace",
    aoc: "AOC Alsace",
    cepage: "Muscat à petits grains, Muscat ottonel",
    terroir: "Calcaires et grès vosgiens",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches",
    aromes: "Muscat, agrumes doux, miel",

    bouche: "Légère, fraîche, aromatique",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["boule-neige-noix-coco"],

    domaine: "Domaine Trimbach",
    proprietaire: "Famille Trimbach",
    anecdote: "Le Muscat sec accompagne très bien les douceurs à la noix de coco.",
    photo: "images/vins/muscat-boule-neige.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-14 — Foie gras mi-cuit au torchon → Sauternes
  "sauternes-foie-gras-torchon": {
    date: "12-14",
    name: "Sauternes",
    region: "Bordeaux",
    aoc: "AOC Sauternes",
    cepage: "Sémillon, Sauvignon, Muscadelle",
    terroir: "Graves et sables du Sauternais",

    robe: "Or profond",
    nez: "Abricot confit, miel, cire d’abeille",
    aromes: "Coing, miel, fruits confits",

    bouche: "Riche, moelleuse, longue",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["foie-gras-mi-cuit-torchon"],

    domaine: "Château Suduiraut",
    proprietaire: "AXA Millésimes",
    anecdote: "Le Sauternes est l’accord mythique du foie gras mi‑cuit.",
    photo: "images/vins/sauternes-foie-gras-torchon.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-15 — Bûche roulée marron-chocolat → Maury
  "maury-buche-marron-chocolat": {
    date: "12-15",
    name: "Maury",
    region: "Roussillon",
    aoc: "AOC Maury",
    cepage: "Grenache noir",
    terroir: "Schistes noirs du Haut-Roussillon",

    robe: "Grenat profond",
    nez: "Cacao, fruits noirs, épices",
    aromes: "Chocolat, cerise noire, pruneau",

    bouche: "Douce, chaleureuse, très aromatique",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["buche-marron-chocolat"],

    domaine: "Mas Amiel",
    proprietaire: "Famille Dauré",
    anecdote: "Les vins doux naturels du Roussillon sont parfaits avec le chocolat.",
    photo: "images/vins/maury-buche-marron-chocolat.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-16 — Salade d’endives aux noix et roquefort → Jurançon sec
  "jurancon-sec-endives-roquefort": {
    date: "12-16",
    name: "Jurançon Sec",
    region: "Sud-Ouest",
    aoc: "AOC Jurançon Sec",
    cepage: "Gros Manseng, Petit Manseng",
    terroir: "Pentes schisteuses du piémont pyrénéen",

    robe: "Jaune pâle",
    nez: "Agrumes, ananas, fleurs blanches",
    aromes: "Citron, fruits exotiques, herbes fines",

    bouche: "Vive, aromatique, légèrement saline",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["salade-endives-noix-roquefort"],

    domaine: "Domaine Cauhapé",
    proprietaire: "Henri Ramonteu",
    anecdote: "Le Jurançon sec équilibre parfaitement l’amertume de l’endive et la puissance du roquefort.",
    photo: "images/vins/jurancon-sec-endives-roquefort.jpg",

    note_parker: "",
    note_hachette: ""
  },
    // 12-17 — Terrine de foie gras en bocal → Monbazillac
  "monbazillac-terrine-foie-gras": {
    date: "12-17",
    name: "Monbazillac",
    region: "Sud-Ouest",
    aoc: "AOC Monbazillac",
    cepage: "Sémillon, Muscadelle, Sauvignon",
    terroir: "Argiles et calcaires du Bergeracois",

    robe: "Or brillant",
    nez: "Abricot confit, miel, fleurs blanches",
    aromes: "Coing, miel, fruits confits",

    bouche: "Moelleuse, ample, longue",
    longueur: "Longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["terrine-foie-gras-bocal"],

    domaine: "Château Tirecul La Gravière",
    proprietaire: "Famille De Conti",
    anecdote: "Le Monbazillac est l’accord traditionnel des préparations de foie gras du Périgord.",
    photo: "images/vins/monbazillac-terrine-foie-gras.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-18 — Huîtres gratinées au champagne → Champagne brut
  "champagne-brut-huitres-gratinees": {
    date: "12-18",
    name: "Champagne Brut",
    region: "Champagne",
    aoc: "AOC Champagne",
    cepage: "Chardonnay, Pinot Noir, Pinot Meunier",
    terroir: "Craie et calcaires champenois",

    robe: "Or pâle brillant",
    nez: "Agrumes, brioche, fleurs blanches",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Vive, élégante, saline, bulles fines",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["huitres-gratinees-champagne"],

    domaine: "Champagne Jacquesson",
    proprietaire: "Famille Chiquet",
    anecdote: "Le champagne brut est l’accord naturel des huîtres, crues ou gratinées.",
    photo: "images/vins/champagne-brut-huitres-gratinees.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-19 — Chapon farci aux marrons et foie gras → Pomerol
  "pomerol-chapon-marrons": {
    date: "12-19",
    name: "Pomerol",
    region: "Bordeaux",
    aoc: "AOC Pomerol",
    cepage: "Merlot majoritaire",
    terroir: "Graves et argiles bleues de Pomerol",

    robe: "Grenat profond",
    nez: "Truffe, fruits noirs, sous-bois",
    aromes: "Prune, cassis, truffe noire, épices",

    bouche: "Veloutée, ample, tannins soyeux",
    longueur: "Très longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Soyeux",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["chapon-farci-marrons"],

    domaine: "Château La Pointe",
    proprietaire: "Famille d’Arfeuille",
    anecdote: "Les grands Merlots de Pomerol sont parfaits pour les volailles festives farcies.",
    photo: "images/vins/pomerol-chapon-marrons.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-20 — Velouté de lentilles noires au foie gras → Jurançon moelleux
  "jurancon-moelleux-lentilles-noires": {
    date: "12-20",
    name: "Jurançon Moelleux",
    region: "Sud-Ouest",
    aoc: "AOC Jurançon",
    cepage: "Petit Manseng",
    terroir: "Pentes schisteuses du piémont pyrénéen",

    robe: "Or brillant",
    nez: "Ananas, miel, fruits exotiques",
    aromes: "Mangue, miel, agrumes confits",

    bouche: "Douce, fraîche, aromatique",
    longueur: "Longue",
    corps: "Moyen à ample",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["veloute-lentilles-noires"],

    domaine: "Domaine Cauhapé",
    proprietaire: "Henri Ramonteu",
    anecdote: "Le Petit Manseng moelleux équilibre parfaitement le foie gras et les lentilles noires.",
    photo: "images/vins/jurancon-moelleux-lentilles-noires.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-21 — Soufflé chaud au Grand Marnier → Muscat de Rivesaltes
  "muscat-rivesaltes-souffle-noel": {
    date: "12-21",
    name: "Muscat de Rivesaltes",
    region: "Roussillon",
    aoc: "AOC Muscat de Rivesaltes",
    cepage: "Muscat à petits grains, Muscat d’Alexandrie",
    terroir: "Schistes et calcaires du Roussillon",

    robe: "Or pâle brillant",
    nez: "Raisin frais, fleurs blanches, miel",
    aromes: "Muscat, agrumes doux, miel",

    bouche: "Douce, fraîche, aromatique",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["souffle-grand-marnier-noel"],

    domaine: "Domaine Cazes",
    proprietaire: "Famille Cazes",
    anecdote: "Le Muscat doux équilibre parfaitement l’alcool du Grand Marnier flambé.",
    photo: "images/vins/muscat-rivesaltes-souffle-noel.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-22 — Pâté en croûte grand luxe → Bourgogne rouge
  "bourgogne-rouge-pate-croute": {
    date: "12-22",
    name: "Bourgogne Pinot Noir",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Pinot Noir",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Rouge rubis",
    nez: "Griotte, sous-bois, épices douces",
    aromes: "Cerise, framboise, humus, champignon",

    bouche: "Souple, fraîche, élégante",
    longueur: "Moyenne à longue",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["pate-en-croute-grand-luxe"],

    domaine: "Domaine Tollot-Beaut",
    proprietaire: "Famille Tollot",
    anecdote: "Le Pinot Noir est l’accord classique des charcuteries fines et pâtés en croûte.",
    photo: "images/vins/bourgogne-rouge-pate-croute.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-23 — Bouillabaisse de fêtes aux coquillages → Cassis blanc
  "cassis-blanc-bouillabaisse-fetes": {
    date: "12-23",
    name: "Cassis Blanc",
    region: "Provence",
    aoc: "AOC Cassis",
    cepage: "Marsanne, Clairette, Ugni blanc",
    terroir: "Terrasses calcaires maritimes",

    robe: "Jaune pâle brillant",
    nez: "Fleurs blanches, fenouil, agrumes",
    aromes: "Citron, pêche blanche, herbes de Provence",

    bouche: "Fraîche, saline, aromatique",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["bouillabaisse-fetes"],

    domaine: "Domaine du Paternel",
    proprietaire: "Famille Santini",
    anecdote: "Les blancs de Cassis sont les compagnons historiques de la bouillabaisse.",
    photo: "images/vins/cassis-blanc-bouillabaisse-fetes.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-24 — Huîtres et foie gras au réveillon → Champagne brut
  "champagne-brut-reveillon-huitres-foie-gras": {
    date: "12-24",
    name: "Champagne Brut",
    region: "Champagne",
    aoc: "AOC Champagne",
    cepage: "Chardonnay, Pinot Noir, Pinot Meunier",
    terroir: "Craie et calcaires champenois",

    robe: "Or pâle brillant",
    nez: "Brioche, agrumes, fleurs blanches",
    aromes: "Citron, pomme verte, minéralité",

    bouche: "Vive, élégante, saline, bulles fines",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["reveillon-huitres-foie-gras"],

    domaine: "Champagne Jacquesson",
    proprietaire: "Famille Chiquet",
    anecdote: "En France, le réveillon commence presque toujours par huîtres + foie gras + champagne.",
    photo: "images/vins/champagne-brut-reveillon-huitres-foie-gras.jpg",

    note_parker: "",
    note_hachette: ""
  },
  // 12-25 — Dinde de Noël farcie aux marrons → Pomerol
  "pomerol-dinde-noel": {
    date: "12-25",
    name: "Pomerol",
    region: "Bordeaux",
    aoc: "AOC Pomerol",
    cepage: "Merlot majoritaire",
    terroir: "Graves et argiles bleues de Pomerol",

    robe: "Grenat profond",
    nez: "Truffe, fruits noirs, sous-bois",
    aromes: "Prune, cassis, truffe noire, épices",

    bouche: "Veloutée, ample, tannins soyeux",
    longueur: "Très longue",
    corps: "Corsé",
    acidite: "Moyenne",
    tanins: "Soyeux",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["dinde-noel-farcie-marrons"],

    domaine: "Château La Pointe",
    proprietaire: "Famille d’Arfeuille",
    anecdote: "Les grands Merlots de Pomerol sont parfaits pour les volailles festives farcies.",
    photo: "images/vins/pomerol-dinde-noel.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-26 — Restes de Noël en hachis Parmentier → Bordeaux Supérieur
  "bordeaux-superieur-hachis-restes-noel": {
    date: "12-26",
    name: "Bordeaux Supérieur",
    region: "Bordeaux",
    aoc: "AOC Bordeaux Supérieur",
    cepage: "Merlot, Cabernet Sauvignon",
    terroir: "Graves fines et argilo-calcaires",

    robe: "Grenat profond",
    nez: "Fruits noirs, sous-bois, épices douces",
    aromes: "Cassis, mûre, prune, poivre",

    bouche: "Souple, ronde, fruitée, tannins fondus",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["hachis-restes-noel"],

    domaine: "Château Reignac",
    proprietaire: "Famille Vatelot",
    anecdote: "Un Bordeaux rond et fruité accompagne parfaitement les plats familiaux de lendemain de fête.",
    photo: "images/vins/bordeaux-superieur-hachis-restes-noel.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-27 — Galantine de volaille → Bourgogne blanc
  "bourgogne-blanc-galantine-volaille": {
    date: "12-27",
    name: "Bourgogne Chardonnay",
    region: "Bourgogne",
    aoc: "AOC Bourgogne",
    cepage: "Chardonnay",
    terroir: "Argilo-calcaires de la Côte de Beaune",

    robe: "Jaune doré clair",
    nez: "Beurre frais, noisette, fleurs blanches",
    aromes: "Pomme, poire, crème, herbes fines",

    bouche: "Ronde, fraîche, élégante",
    longueur: "Moyenne",
    corps: "Moyen",
    acidite: "Moyenne",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["galantine-volaille"],

    domaine: "Domaine Chanson",
    proprietaire: "Famille Bollinger",
    anecdote: "Le Chardonnay bourguignon est parfait pour les volailles froides et les charcuteries fines.",
    photo: "images/vins/bourgogne-blanc-galantine-volaille.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-28 — Soupe aux restes du réveillon → Cidre brut breton
  "cidre-brut-soupe-restes-reveillon": {
    date: "12-28",
    name: "Cidre Brut Breton",
    region: "Bretagne",
    aoc: "",
    cepage: "Pommes douces-amères bretonnes",
    terroir: "Vergers granitiques du Léon et du Trégor",

    robe: "Or ambré",
    nez: "Pomme fraîche, miel, épices",
    aromes: "Pomme rôtie, caramel léger, fruits jaunes",

    bouche: "Brut, fruitée, légèrement tannique",
    longueur: "Moyenne",
    corps: "Léger à moyen",
    acidite: "Faible",
    tanins: "Souples",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["soupe-restes-reveillon"],

    domaine: "Cidrerie Coat-Albret",
    proprietaire: "Famille Bosser",
    anecdote: "Le cidre brut est l’accord naturel des soupes riches et des plats de restes.",
    photo: "images/vins/cidre-brut-soupe-restes-reveillon.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-29 — Terrine de Saint-Jacques aux poireaux → Muscadet Sèvre-et-Maine
  "muscadet-terrine-saint-jacques": {
    date: "12-29",
    name: "Muscadet Sèvre-et-Maine Sur Lie",
    region: "Val de Loire",
    aoc: "AOC Muscadet Sèvre-et-Maine",
    cepage: "Melon de Bourgogne",
    terroir: "Gneiss et roches métamorphiques",

    robe: "Jaune pâle",
    nez: "Agrumes, iode, fleurs blanches",
    aromes: "Citron, pomme verte, salinité",

    bouche: "Très fraîche, saline, droite",
    longueur: "Moyenne",
    corps: "Léger",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["terrine-saint-jacques-poireaux"],

    domaine: "Domaine de la Pépière",
    proprietaire: "Marc Ollivier",
    anecdote: "Le Muscadet est l’un des meilleurs vins pour les Saint‑Jacques.",
    photo: "images/vins/muscadet-terrine-saint-jacques.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-30 — Foie gras poêlé au pain d’épice → Gewurztraminer Vendanges Tardives
  "gewurztraminer-vt-foie-gras-pain-epice": {
    date: "12-30",
    name: "Gewurztraminer Vendanges Tardives \"Furstentum\"",
    region: "Alsace",
    aoc: "AOC Alsace Grand Cru Furstentum",
    cepage: "Gewurztraminer",
    terroir: "Collines calcaires et grès vosgiens",

    robe: "Or profond",
    nez: "Rose, miel, fruits confits",
    aromes: "Pain d’épice, miel, coing, épices douces",

    bouche: "Riche, moelleuse, très aromatique",
    longueur: "Très longue",
    corps: "Ample",
    acidite: "Faible",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["foie-gras-pain-epice"],

    domaine: "Domaine Weinbach",
    proprietaire: "Famille Faller",
    anecdote: "Les Vendanges Tardives d’Alsace sont idéales avec le foie gras poêlé.",
    photo: "images/vins/gewurztraminer-vt-foie-gras-pain-epice.jpg",

    note_parker: "",
    note_hachette: ""
  },

  // 12-31 — Homard grillé au champagne → Champagne blanc de blancs
  "champagne-blanc-blancs-homard": {
    date: "12-31",
    name: "Champagne Blanc de Blancs",
    region: "Champagne",
    aoc: "AOC Champagne",
    cepage: "Chardonnay",
    terroir: "Craie de la Côte des Blancs",

    robe: "Or pâle brillant",
    nez: "Agrumes, craie, fleurs blanches",
    aromes: "Citron, pomme verte, minéralité crayeuse",

    bouche: "Vive, élégante, saline, bulles fines",
    longueur: "Longue",
    corps: "Léger à moyen",
    acidite: "Marquée",
    tanins: "Aucun",

    millesimes: [],
    garde: "",
    service: "",
    alcool: "",
    prix: "",

    accords: ["homard-grille-champagne"],

    domaine: "Champagne Agrapart",
    proprietaire: "Famille Agrapart",
    anecdote: "Le Chardonnay champenois sublime les crustacés grillés, surtout le homard.",
    photo: "images/vins/champagne-blanc-blancs-homard.jpg",

    note_parker: "",
    note_hachette: ""
  }
}
