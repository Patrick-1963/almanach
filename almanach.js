// ═══════════════════════════════════════════════════════
// ALMANACH DU JOUR — almanach.js v2.0
// Calculs locaux · Sans API externe
// Coordonnées : Guer, Bretagne (47.9°N, 2.1°O)
// ═══════════════════════════════════════════════════════

const LAT = 47.9;
const LON = -2.1;

let currentDate    = new Date();
let displayedMonth = currentDate.getMonth();
let displayedYear  = currentDate.getFullYear();

// ═══════════════════════════════════════════════════════
// ÉPHÉMÉRIDES — "En ce jour dans l'Histoire"
// Indexées "MM-DD", plusieurs événements par jour
// ═══════════════════════════════════════════════════════

const ephemerides = {
    "01-01": [
        { year: 45,   cat: "Histoire",  text: "Entrée en vigueur du calendrier julien de Jules César." },
        { year: 1801, cat: "Science",   text: "Giuseppe Piazzi découvre Cérès, le premier astéroïde connu." },
        { year: 1958, cat: "Europe",    text: "Entrée en vigueur du Traité de Rome — naissance de la CEE." },
    ],
    "01-02": [
        { year: 1492, cat: "Histoire",  text: "Chute de Grenade : fin de la Reconquista en Espagne." },
        { year: 1920, cat: "Science",   text: "Isaac Asimov naît à Petrovichi, en Russie." },
    ],
    "01-03": [
        { year: 1888, cat: "Science",   text: "L'observatoire Lick en Californie est inauguré, avec le plus grand réfracteur du monde." },
        { year: 1959, cat: "Politique", text: "L'Alaska devient le 49e État des États-Unis." },
    ],
    "01-04": [
        { year: 1643, cat: "Science",   text: "Naissance d'Isaac Newton à Woolsthorpe, Angleterre." },
        { year: 1903, cat: "Culture",   text: "Thomas Edison électrocute un éléphant pour prouver les dangers du courant alternatif." },
    ],
    "01-05": [
        { year: 1066, cat: "Histoire",  text: "Mort du roi Édouard le Confesseur d'Angleterre." },
        { year: 1896, cat: "Science",   text: "Première mention publique de la découverte des rayons X par Röntgen." },
    ],
    "01-06": [
        { year: 1412, cat: "France",    text: "Naissance présumée de Jeanne d'Arc à Domrémy." },
        { year: 1838, cat: "Science",   text: "Samuel Morse démontre pour la première fois son télégraphe électrique." },
    ],
    "01-07": [
        { year: 1610, cat: "Science",   text: "Galilée découvre les quatre plus grandes lunes de Jupiter." },
        { year: 1785, cat: "Aviation",  text: "Jean-Pierre Blanchard et John Jeffries traversent la Manche en ballon." },
    ],
    "01-08": [
        { year: 1642, cat: "Science",   text: "Mort de Galilée à Arcetri, Italie." },
        { year: 1935, cat: "Culture",   text: "Naissance d'Elvis Presley à Tupelo, Mississippi." },
        { year: 1942, cat: "Science",   text: "Naissance de Stephen Hawking à Oxford." },
    ],
    "01-09": [
        { year: 1349, cat: "Histoire",  text: "Massacre des juifs de Bâle lors de la Peste noire." },
        { year: 2007, cat: "Technologie", text: "Steve Jobs présente le premier iPhone lors de la Macworld Conference." },
    ],
    "01-10": [
        { year: 49,   cat: "Histoire",  text: "César franchit le Rubicon : début de la guerre civile romaine." },
        { year: 1863, cat: "Transport", text: "Inauguration du métro de Londres, premier au monde." },
    ],
    "01-11": [
        { year: 1569, cat: "France",    text: "Première loterie nationale organisée en Angleterre." },
        { year: 1787, cat: "Science",   text: "William Herschel découvre Titania et Obéron, lunes d'Uranus." },
    ],
    "01-12": [
        { year: 1895, cat: "Sport",     text: "Fondation de la Ligue nationale de hockey sur glace." },
        { year: 2010, cat: "Tragédie",  text: "Séisme dévastateur en Haïti — plus de 200 000 morts." },
    ],
    "01-13": [
        { year: 1128, cat: "Histoire",  text: "Le pape Honorius II approuve l'Ordre des Templiers." },
        { year: 1898, cat: "France",    text: "Émile Zola publie «J'accuse» dans L'Aurore pour défendre Dreyfus." },
    ],
    "01-14": [
        { year: 1301, cat: "Histoire",  text: "Mort d'André III, dernier roi de la lignée Árpád de Hongrie." },
        { year: 1742, cat: "Science",   text: "Edmond Halley, astronome de la comète, meurt à Greenwich." },
    ],
    "01-15": [
        { year: 1559, cat: "Histoire",  text: "Couronnement d'Élisabeth Ire d'Angleterre à l'abbaye de Westminster." },
        { year: 1929, cat: "Culture",   text: "Naissance de Martin Luther King Jr. à Atlanta, Géorgie." },
    ],
    "01-16": [
        { year: 1412, cat: "France",    text: "Naissance du Dauphin, futur Louis XI." },
        { year: 1920, cat: "Histoire",  text: "Entrée en vigueur de la prohibition aux États-Unis." },
    ],
    "01-17": [
        { year: 1706, cat: "Science",   text: "Naissance de Benjamin Franklin à Boston." },
        { year: 1961, cat: "Politique", text: "Discours d'adieu d'Eisenhower : il met en garde contre le «complexe militaro-industriel»." },
    ],
    "01-18": [
        { year: 1871, cat: "France",    text: "Proclamation de l'Empire allemand à Versailles." },
        { year: 1778, cat: "Science",   text: "James Cook découvre les îles Hawaï, qu'il nomme îles Sandwich." },
    ],
    "01-19": [
        { year: 1809, cat: "Culture",   text: "Naissance d'Edgar Allan Poe à Boston." },
        { year: 1915, cat: "Guerre",    text: "Premier bombardement aérien de villes anglaises par des zeppelins allemands." },
    ],
    "01-20": [
        { year: 1265, cat: "Histoire",  text: "Le premier Parlement anglais se réunit à Westminster." },
        { year: 1961, cat: "Politique", text: "Inauguration de John F. Kennedy comme 35e président des États-Unis." },
    ],
    "01-21": [
        { year: 1793, cat: "France",    text: "Exécution de Louis XVI sur la place de la Révolution à Paris." },
        { year: 1954, cat: "Science",   text: "Lancement du premier sous-marin nucléaire, l'USS Nautilus." },
    ],
    "01-22": [
        { year: 1506, cat: "Histoire",  text: "Fondation de la Garde suisse pontificane au Vatican." },
        { year: 1973, cat: "Science",   text: "Décès de Lyndon B. Johnson ; le même jour, arrêt Roe v. Wade." },
    ],
    "01-23": [
        { year: 1556, cat: "Tragédie",  text: "Séisme de Shaanxi, Chine — le plus meurtrier de l'Histoire (~830 000 morts)." },
        { year: 1849, cat: "Société",   text: "Elizabeth Blackwell est la première femme à obtenir un diplôme de médecine aux USA." },
    ],
    "01-24": [
        { year: 41,   cat: "Histoire",  text: "Caligula est assassiné à Rome par des membres de la Garde prétorienne." },
        { year: 1848, cat: "Histoire",  text: "Découverte de l'or en Californie : début de la ruée vers l'or." },
        { year: 1984, cat: "Technologie", text: "Présentation du premier Macintosh par Steve Jobs." },
    ],
    "01-25": [
        { year: 1533, cat: "France",    text: "Mariage secret d'Anne Boleyn et Henri VIII d'Angleterre." },
        { year: 1947, cat: "Culture",   text: "Al Capone, le célèbre parrain de Chicago, meurt d'une crise cardiaque." },
    ],
    "01-26": [
        { year: 1788, cat: "Histoire",  text: "Arrivée de la Première Flotte en Australie — fondation de Sydney." },
        { year: 1905, cat: "Science",   text: "Découverte du diamant Cullinan, le plus grand jamais trouvé (3 106 carats)." },
    ],
    "01-27": [
        { year: 1756, cat: "Culture",   text: "Naissance de Wolfgang Amadeus Mozart à Salzbourg." },
        { year: 1945, cat: "Histoire",  text: "Libération du camp d'Auschwitz-Birkenau par l'Armée rouge." },
    ],
    "01-28": [
        { year: 1547, cat: "Histoire",  text: "Mort d'Henri VIII d'Angleterre." },
        { year: 1986, cat: "Science",   text: "Explosion de la navette spatiale Challenger, 73 secondes après son décollage." },
    ],
    "01-29": [
        { year: 1616, cat: "Science",   text: "Willem Schouten et Jakob Le Maire découvrent le cap Horn." },
        { year: 1845, cat: "Culture",   text: "Publication du «Corbeau» d'Edgar Allan Poe." },
    ],
    "01-30": [
        { year: 1649, cat: "Histoire",  text: "Exécution du roi Charles Ier d'Angleterre." },
        { year: 1948, cat: "Histoire",  text: "Assassinat du Mahatma Gandhi à New Delhi." },
    ],
    "01-31": [
        { year: 1606, cat: "Histoire",  text: "Exécution de Guy Fawkes, impliqué dans la Conspiration des Poudres." },
        { year: 1958, cat: "Science",   text: "Les États-Unis lancent Explorer 1, leur premier satellite artificiel." },
    ],
    "02-01": [
        { year: 1884, cat: "Culture",   text: "Publication du premier fascicule de l'Oxford English Dictionary." },
        { year: 2003, cat: "Science",   text: "Désintégration de la navette Columbia lors de sa rentrée atmosphérique." },
    ],
    "02-02": [
        { year: 962,  cat: "Histoire",  text: "Couronnement d'Otton Ier, premier emperor du Saint-Empire romain." },
        { year: 1943, cat: "Guerre",    text: "Capitulation de la 6e armée allemande à Stalingrad — tournant de la Seconde Guerre mondiale." },
    ],
    "02-03": [
        { year: 1468, cat: "Culture",   text: "Mort de Johannes Gutenberg, inventeur de l'imprimerie à caractères mobiles." },
        { year: 1959, cat: "Culture",   text: "«The Day the Music Died» : crash fatal de Buddy Holly, Ritchie Valens et The Big Bopper." },
    ],
    "02-04": [
        { year: 1789, cat: "Politique", text: "George Washington est élu premier président des États-Unis." },
        { year: 2004, cat: "Technologie", text: "Mark Zuckerberg lance Facebook depuis sa chambre d'étudiant à Harvard." },
    ],
    "02-05": [
        { year: 1576, cat: "France",    text: "Henri III signe l'Édit de Beaulieu, accordant la liberté de culte aux protestants." },
        { year: 1850, cat: "Science",   text: "Première photographie de la Lune par Whipple et Bond." },
    ],
    "02-06": [
        { year: 1685, cat: "Culture",   text: "Naissance de Jean-Sébastien Bach à Eisenach." },
        { year: 1952, cat: "Histoire",  text: "Élisabeth II monte sur le trône à la mort de son père George VI." },
    ],
    "02-07": [
        { year: 1812, cat: "Culture",   text: "Naissance de Charles Dickens à Portsmouth." },
        { year: 1984, cat: "Science",   text: "Bruce McCandless effectue la première sortie spatiale sans attache." },
    ],
    "02-08": [
        { year: 1587, cat: "Histoire",  text: "Exécution de Marie Stuart, reine d'Écosse." },
        { year: 1828, cat: "Culture",   text: "Naissance de Jules Verne à Nantes." },
    ],
    "02-09": [
        { year: 1737, cat: "Culture",   text: "Naissance du poète Fabre d'Églantine, auteur des noms du calendrier républicain." },
        { year: 1964, cat: "Culture",   text: "Les Beatles font leur première apparition télévisée aux États-Unis, sur le Ed Sullivan Show." },
    ],
    "02-10": [
        { year: 1258, cat: "Histoire",  text: "Sac de Bagdad par les Mongols — fin du califat abbasside." },
        { year: 1996, cat: "Science",   text: "Deep Blue bat Kasparov pour la première fois aux échecs." },
    ],
    "02-11": [
        { year: 1847, cat: "Science",   text: "Naissance de Thomas Edison à Milan, Ohio." },
        { year: 1990, cat: "Politique", text: "Libération de Nelson Mandela après 27 ans de prison." },
    ],
    "02-12": [
        { year: 1809, cat: "Science",   text: "Naissance de Charles Darwin à Shrewsbury. Même jour : naissance d'Abraham Lincoln." },
        { year: 1961, cat: "Science",   text: "Lancement de Venera 1, première sonde vers Vénus." },
    ],
    "02-13": [
        { year: 1633, cat: "Science",   text: "Galilée arrive à Rome pour être jugé par l'Inquisition." },
        { year: 1945, cat: "Guerre",    text: "Début du bombardement de Dresde par les Alliés." },
    ],
    "02-14": [
        { year: 270,  cat: "Histoire",  text: "Mort supposée de saint Valentin, martyr chrétien." },
        { year: 1929, cat: "Histoire",  text: "Massacre de la Saint-Valentin à Chicago." },
        { year: 1990, cat: "Science",   text: "Voyager 1 prend la célèbre photo «Pale Blue Dot» — la Terre vue à 6 milliards de km." },
    ],
    "02-15": [
        { year: 1564, cat: "Science",   text: "Naissance de Galilée à Pise." },
        { year: 1971, cat: "Économie",  text: "Le Royaume-Uni adopte le système décimal pour sa monnaie." },
    ],
    "02-16": [
        { year: 1659, cat: "France",    text: "Premier chèque bancaire émis en Angleterre." },
        { year: 1923, cat: "Science",   text: "Howard Carter ouvre le sarcophage de Toutankhamon." },
    ],
    "02-17": [
        { year: 1600, cat: "Science",   text: "Giordano Bruno est brûlé vif à Rome pour hérésie." },
        { year: 1863, cat: "Société",   text: "Fondation de la Croix-Rouge Internationale à Genève." },
    ],
    "02-18": [
        { year: 1546, cat: "Culture",   text: "Mort de Martin Luther à Eisleben." },
        { year: 1930, cat: "Science",   text: "Clyde Tombaugh découvre Pluton à l'observatoire Lowell." },
    ],
    "02-19": [
        { year: 1473, cat: "Science",   text: "Naissance de Nicolas Copernic à Toruń, Pologne." },
        { year: 1945, cat: "Guerre",    text: "Début de la bataille d'Iwo Jima." },
    ],
    "02-20": [
        { year: 1792, cat: "France",    text: "Création du service postal des États-Unis." },
        { year: 1962, cat: "Science",   text: "John Glenn est le premier Américain à orbiter autour de la Terre." },
    ],
    "02-21": [
        { year: 1795, cat: "France",    text: "Le néerlandais cesse d'être langue officielle des Pays-Bas au profit du français." },
        { year: 1965, cat: "Politique", text: "Assassinat de Malcolm X à New York." },
    ],
    "02-22": [
        { year: 1732, cat: "Politique", text: "Naissance de George Washington à Westmoreland County, Virginie." },
        { year: 1997, cat: "Science",   text: "Annonce de la naissance de Dolly la brebis, premier mammifère cloné." },
    ],
    "02-23": [
        { year: 1455, cat: "Culture",   text: "Impression de la première Bible de Gutenberg." },
        { year: 1945, cat: "Guerre",    text: "Photographie emblématique du drapeau américain planté sur Iwo Jima." },
    ],
    "02-24": [
        { year: 1582, cat: "Science",   text: "Le pape Grégoire XIII publie la bulle instaurant le calendrier grégorien." },
        { year: 1848, cat: "France",    text: "Proclamation de la Deuxième République française à Paris." },
        { year: 1920, cat: "Politique", text: "Fondation du Parti national-socialiste (NSDAP) à Munich." },
    ],
    "02-25": [
        { year: 1570, cat: "Histoire",  text: "Le pape Pie V excommunie la reine Élisabeth Ire d'Angleterre." },
        { year: 1956, cat: "Politique", text: "Khrouchtchev dénonce les crimes de Staline lors du XXe congrès du PCUS." },
    ],
    "02-26": [
        { year: 1616, cat: "Science",   text: "L'Église catholique ordonne à Galilée d'abandonner la théorie héliocentrique." },
        { year: 1935, cat: "Science",   text: "Robert Watson-Watt réalise la première démonstration du radar." },
    ],
    "02-27": [
        { year: 1594, cat: "France",    text: "Sacre de Henri IV à Chartres." },
        { year: 1933, cat: "Politique", text: "Incendie du Reichstag à Berlin, utilisé par Hitler pour instaurer la dictature." },
    ],
    "02-28": [
        { year: 1784, cat: "Culture",   text: "John Wesley fonde l'Église méthodiste." },
        { year: 1953, cat: "Science",   text: "Watson et Crick annoncent leur découverte de la structure en double hélice de l'ADN." },
    ],
    "02-29": [
        { year: 1692, cat: "Histoire",  text: "Début des procès en sorcellerie de Salem." },
        { year: 1960, cat: "Tragédie",  text: "Séisme d'Agadir, Maroc — plus de 12 000 morts." },
    ],
    "03-01": [
        { year: 1872, cat: "Nature",    text: "Yellowstone devient le premier parc national au monde." },
        { year: 1954, cat: "Science",   text: "Les États-Unis font exploser leur première bombe à hydrogène à Bikini." },
    ],
    "03-02": [
        { year: 1791, cat: "Transport", text: "Claude Chappe démontre son télégraphe optique en France." },
        { year: 1969, cat: "Aviation",  text: "Premier vol du Concorde à Toulouse." },
    ],
    "03-03": [
        { year: 1847, cat: "Culture",   text: "Naissance d'Alexander Graham Bell à Édimbourg." },
        { year: 1875, cat: "Culture",   text: "Première représentation de Carmen de Bizet à l'Opéra-Comique de Paris." },
    ],
    "03-04": [
        { year: 1461, cat: "France",    text: "Edouard IV devient roi d'Angleterre après la bataille de Towton." },
        { year: 1877, cat: "Culture",   text: "Première de la 4e Symphonie de Brahms. Tchaïkovski y dirige aussi Swan Lake." },
    ],
    "03-05": [
        { year: 1770, cat: "Histoire",  text: "Massacre de Boston : cinq colons américains tués par des soldats britanniques." },
        { year: 1953, cat: "Politique", text: "Mort de Joseph Staline à Kountsevo." },
    ],
    "03-06": [
        { year: 1836, cat: "Histoire",  text: "Chute d'Alamo au Texas — les défenseurs sont massacrés." },
        { year: 1899, cat: "Science",   text: "L'aspirine est brevetée par Bayer sous le nom d'acide acétylsalicylique." },
        { year: 1930, cat: "Technologie", text: "Les premiers légumes surgelés sont mis en vente par Clarence Birdseye." },
    ],
    "03-07": [
        { year: 1876, cat: "Science",   text: "Alexander Graham Bell obtient le brevet du téléphone." },
        { year: 1965, cat: "Politique", text: "Bloody Sunday à Selma : les marcheurs pacifistes sont matraqués." },
    ],
    "03-08": [
        { year: 1618, cat: "Science",   text: "Kepler découvre sa troisième loi du mouvement planétaire." },
        { year: 1917, cat: "Politique", text: "Début de la révolution de Février en Russie." },
    ],
    "03-09": [
        { year: 1796, cat: "France",    text: "Mariage de Napoléon Bonaparte et Joséphine de Beauharnais." },
        { year: 1959, cat: "Culture",   text: "Première mise en vente de la poupée Barbie par Mattel." },
    ],
    "03-10": [
        { year: 241,  cat: "Histoire",  text: "Première guerre punique : victoire navale romaine aux Îles Égades." },
        { year: 1876, cat: "Science",   text: "Graham Bell passe le premier appel téléphonique : «Watson, come here!»" },
    ],
    "03-11": [
        { year: 1818, cat: "Culture",   text: "Publication de Frankenstein de Mary Shelley." },
        { year: 2011, cat: "Tragédie",  text: "Séisme et tsunami au Japon — catastrophe nucléaire de Fukushima." },
    ],
    "03-12": [
        { year: 1789, cat: "France",    text: "Le courrier de Paris à Versailles est régularisé par arrêté postal." },
        { year: 1912, cat: "Société",   text: "Fondation des Girl Scouts aux États-Unis." },
        { year: 1989, cat: "Technologie", text: "Tim Berners-Lee propose le World Wide Web au CERN." },
    ],
    "03-13": [
        { year: 1781, cat: "Science",   text: "William Herschel découvre Uranus — première planète découverte à l'ère moderne." },
        { year: 1881, cat: "Politique", text: "Assassinat du tsar Alexandre II de Russie." },
    ],
    "03-14": [
        { year: 1879, cat: "Science",   text: "Naissance d'Albert Einstein à Ulm, Bade-Wurtemberg." },
        { year: 1883, cat: "Politique", text: "Mort de Karl Marx à Londres." },
    ],
    "03-15": [
        { year: -44,  cat: "Histoire",  text: "Ides de mars : assassinat de Jules César au Sénat de Rome." },
        { year: 1493, cat: "Histoire",  text: "Retour de Christophe Colomb en Espagne après son premier voyage." },
    ],
    "03-16": [
        { year: 1802, cat: "France",    text: "Fondation de l'École militaire de West Point par Thomas Jefferson." },
        { year: 1968, cat: "Guerre",    text: "Massacre de Mỹ Lai au Vietnam : des soldats américains tuent des civils." },
    ],
    "03-17": [
        { year: 461,  cat: "Histoire",  text: "Mort supposée de saint Patrick, patron de l'Irlande." },
        { year: 1845, cat: "Science",   text: "Brevet du tube de colle en caoutchouc par Stephen Perry." },
    ],
    "03-18": [
        { year: 1314, cat: "France",    text: "Exécution de Jacques de Molay, dernier grand maître des Templiers." },
        { year: 1965, cat: "Science",   text: "Alexeï Leonov effectue la première sortie spatiale de l'Histoire." },
    ],
    "03-19": [
        { year: 1279, cat: "Histoire",  text: "Chute de la dernière résistance Song — la Chine entière sous contrôle mongol." },
        { year: 1932, cat: "Architecture", text: "Inauguration du pont du port de Sydney." },
    ],
    "03-20": [
        { year: 1602, cat: "Histoire",  text: "Fondation de la Compagnie néerlandaise des Indes orientales (VOC)." },
        { year: 1852, cat: "Culture",   text: "Publication de La Case de l'Oncle Tom de Harriet Beecher Stowe." },
    ],
    "03-21": [
        { year: 1685, cat: "Culture",   text: "Naissance de Jean-Sébastien Bach à Eisenach, Thuringe." },
        { year: 1960, cat: "Politique", text: "Massacre de Sharpeville en Afrique du Sud : 69 manifestants tués." },
    ],
    "03-22": [
        { year: 1895, cat: "Science",   text: "Lumière présente la première projection cinématographique publique de l'Histoire." },
        { year: 1945, cat: "Politique", text: "Fondation de la Ligue arabe au Caire." },
    ],
    "03-23": [
        { year: 1839, cat: "Culture",   text: "Première utilisation écrite de l'abréviation «OK» dans le Boston Morning Post." },
        { year: 1983, cat: "Politique", text: "Reagan propose l'Initiative de Défense Stratégique (Guerre des étoiles)." },
    ],
    "03-24": [
        { year: 1603, cat: "Histoire",  text: "Mort d'Élisabeth Ire d'Angleterre — fin de la dynastie Tudor." },
        { year: 1882, cat: "Science",   text: "Robert Koch annonce la découverte du bacille de la tuberculose." },
    ],
    "03-25": [
        { year: 1436, cat: "France",    text: "Reconquête de Paris par Charles VII — fin de l'occupation anglaise." },
        { year: 1957, cat: "Europe",    text: "Signature des Traités de Rome — fondation de la CEE et de l'Euratom." },
    ],
    "03-26": [
        { year: 1827, cat: "Culture",   text: "Mort de Ludwig van Beethoven à Vienne." },
        { year: 1979, cat: "Politique", text: "Signature du traité de paix entre Égypte et Israël à Washington." },
    ],
    "03-27": [
        { year: 1625, cat: "France",    text: "Mort de Jacques Ier d'Angleterre et VI d'Écosse." },
        { year: 1977, cat: "Transport", text: "Collision de deux Boeing 747 sur la piste de Ténériffe — 583 morts, accident aérien le plus meurtrier." },
    ],
    "03-28": [
        { year: 1854, cat: "Histoire",  text: "La France et la Grande-Bretagne déclarent la guerre à la Russie — début de la guerre de Crimée." },
        { year: 1979, cat: "Science",   text: "Accident nucléaire de Three Mile Island en Pennsylvanie." },
    ],
    "03-29": [
        { year: 1461, cat: "Histoire",  text: "Bataille de Towton : la plus sanglante jamais livrée sur le sol anglais." },
        { year: 1886, cat: "Science",   text: "Le pharmacien John Pemberton invente la formule du Coca-Cola à Atlanta." },
    ],
    "03-30": [
        { year: 1842, cat: "Science",   text: "Première utilisation de l'éther comme anesthésique lors d'une opération." },
        { year: 1853, cat: "Culture",   text: "Naissance de Vincent van Gogh à Zundert, Pays-Bas." },
    ],
    "03-31": [
        { year: 1889, cat: "France",    text: "Inauguration de la Tour Eiffel par Gustave Eiffel lors de l'Exposition Universelle." },
        { year: 1492, cat: "Histoire",  text: "Édit de Grenade : expulsion des Juifs d'Espagne." },
    ],
    "04-01": [
        { year: 1572, cat: "Histoire",  text: "Les Gueux de mer s'emparent de Brielle, début de la révolte des Pays-Bas." },
        { year: 1976, cat: "Technologie", text: "Fondation d'Apple Computer par Steve Jobs, Steve Wozniak et Ronald Wayne." },
    ],
    "04-02": [
        { year: 1513, cat: "Histoire",  text: "Juan Ponce de León débarque en Floride, qu'il prend pour une île." },
        { year: 1982, cat: "Histoire",  text: "L'Argentine envahit les îles Malouines — début de la guerre des Malouines." },
    ],
    "04-03": [
        { year: 1882, cat: "Histoire",  text: "Jesse James est abattu dans le dos par Robert Ford pour une prime." },
        { year: 1973, cat: "Technologie", text: "Premier appel passé depuis un téléphone portable, par Martin Cooper de Motorola." },
    ],
    "04-04": [
        { year: 1581, cat: "Histoire",  text: "Francis Drake achève le premier tour du monde sous commandement unique." },
        { year: 1968, cat: "Politique", text: "Assassinat de Martin Luther King Jr. à Memphis, Tennessee." },
    ],
    "04-05": [
        { year: 1614, cat: "Histoire",  text: "Mariage de Pocahontas et John Rolfe en Virginie." },
        { year: 1955, cat: "Politique", text: "Démission de Winston Churchill de son poste de Premier ministre britannique." },
    ],
    "04-06": [
        { year: 1320, cat: "Histoire",  text: "Déclaration d'Arbroath : l'indépendance de l'Écosse est proclamée." },
        { year: 1896, cat: "Sport",     text: "Inauguration des premiers Jeux olympiques modernes à Athènes." },
    ],
    "04-07": [
        { year: 1498, cat: "France",    text: "Mort de Charles VIII — début du règne de Louis XII." },
        { year: 1948, cat: "Santé",     text: "Fondation de l'Organisation mondiale de la santé (OMS)." },
    ],
    "04-08": [
        { year: 1513, cat: "Histoire",  text: "Juan Ponce de León débarque officiellement en Floride." },
        { year: 1904, cat: "Diplomatie", text: "Signature de l'Entente cordiale entre la France et la Grande-Bretagne." },
    ],
    "04-09": [
        { year: 1865, cat: "Histoire",  text: "Lee se rend à Grant à Appomattox — fin de la guerre de Sécession." },
        { year: 1940, cat: "Guerre",    text: "Invasion de la Norvège et du Danemark par l'Allemagne nazie." },
    ],
    "04-10": [
        { year: 1912, cat: "Transport", text: "Départ du Titanic de Southampton pour son voyage inaugural." },
        { year: 1971, cat: "Politique", text: "Diplomatie du ping-pong : une équipe américaine visite la Chine." },
    ],
    "04-11": [
        { year: 1814, cat: "France",    text: "Abdication de Napoléon Ier à Fontainebleau." },
        { year: 1961, cat: "Histoire",  text: "Ouverture du procès Eichmann à Jérusalem." },
    ],
    "04-12": [
        { year: 1204, cat: "Histoire",  text: "Sac de Constantinople lors de la 4e Croisade." },
        { year: 1961, cat: "Science",   text: "Youri Gagarine devient le premier homme dans l'espace à bord de Vostok 1." },
        { year: 1981, cat: "Science",   text: "Premier vol de la navette spatiale Columbia." },
    ],
    "04-13": [
        { year: 1598, cat: "France",    text: "Signature de l'Édit de Nantes par Henri IV — tolérance religieuse accordée aux protestants." },
        { year: 1796, cat: "France",    text: "Bonaparte remporte la bataille de Millesimo." },
    ],
    "04-14": [
        { year: 1912, cat: "Transport", text: "Le Titanic heurte l'iceberg à 23h40 en mer." },
        { year: 1865, cat: "Politique", text: "Abraham Lincoln est mortellement blessé par John Wilkes Booth." },
    ],
    "04-15": [
        { year: 1452, cat: "Culture",   text: "Naissance de Léonard de Vinci à Vinci, Toscane." },
        { year: 1912, cat: "Transport", text: "Le Titanic coule à 2h20 du matin — 1 517 morts." },
        { year: 1989, cat: "Sport",     text: "Catastrophe de Hillsborough : 96 supporters de Liverpool meurent écrasés." },
    ],
    "04-16": [
        { year: 1746, cat: "Histoire",  text: "Bataille de Culloden — écrasement du dernier soulèvement jacobite en Écosse." },
        { year: 1889, cat: "Culture",   text: "Naissance de Charlie Chaplin à Londres." },
    ],
    "04-17": [
        { year: 1521, cat: "Histoire",  text: "Luther comparaît devant la Diète de Worms et refuse de se rétracter." },
        { year: 1961, cat: "Politique", text: "Débarquement de la Baie des Cochons à Cuba — échec cuisant de la CIA." },
    ],
    "04-18": [
        { year: 1906, cat: "Tragédie",  text: "Séisme dévastateur de San Francisco — plus de 3 000 morts." },
        { year: 1955, cat: "Science",   text: "Mort d'Albert Einstein à Princeton." },
    ],
    "04-19": [
        { year: 1775, cat: "Histoire",  text: "Premiers coups de feu de la révolution américaine à Lexington." },
        { year: 1995, cat: "Tragédie",  text: "Attentat à la bombe contre le bâtiment fédéral d'Oklahoma City — 168 morts." },
    ],
    "04-20": [
        { year: 1303, cat: "France",    text: "Fondation de l'Université de Rome «La Sapienza»." },
        { year: 1999, cat: "Tragédie",  text: "Fusillade au lycée Columbine dans le Colorado — 15 morts." },
    ],
    "04-21": [
        { year: -753, cat: "Histoire",  text: "Date légendaire de la fondation de Rome par Romulus." },
        { year: 1509, cat: "Histoire",  text: "Henri VIII monte sur le trône d'Angleterre à 17 ans." },
    ],
    "04-22": [
        { year: 1500, cat: "Histoire",  text: "Pedro Álvares Cabral débarque au Brésil." },
        { year: 1970, cat: "Nature",    text: "Premier Jour de la Terre célébré aux États-Unis — naissance de l'écologisme moderne." },
    ],
    "04-23": [
        { year: 1564, cat: "Culture",   text: "Naissance présumée de William Shakespeare à Stratford-upon-Avon." },
        { year: 1616, cat: "Culture",   text: "Mort de William Shakespeare — même jour que Cervantes." },
    ],
    "04-24": [
        { year: 1800, cat: "Culture",   text: "Inauguration de la Bibliothèque du Congrès à Washington." },
        { year: 1990, cat: "Science",   text: "Lancement du télescope spatial Hubble." },
    ],
    "04-25": [
        { year: 1507, cat: "Science",   text: "Le continent américain est nommé «America» d'après Amerigo Vespucci." },
        { year: 1953, cat: "Science",   text: "Watson et Crick publient leur article sur la structure de l'ADN dans Nature." },
    ],
    "04-26": [
        { year: 1564, cat: "Culture",   text: "Baptême de William Shakespeare à Stratford." },
        { year: 1986, cat: "Science",   text: "Explosion du réacteur no 4 de Tchernobyl en Ukraine." },
    ],
    "04-27": [
        { year: 1521, cat: "Histoire",  text: "Magellan est tué aux Philippines lors de la bataille de Mactan." },
        { year: 1791, cat: "Science",   text: "Naissance de Samuel Morse à Charlestown, Massachusetts." },
    ],
    "04-28": [
        { year: 1789, cat: "Histoire",  text: "Mutinerie à bord du Bounty contre le capitaine Bligh." },
        { year: 1945, cat: "Guerre",    text: "Mussolini est capturé et exécuté par des partisans italiens." },
    ],
    "04-29": [
        { year: 1429, cat: "France",    text: "Jeanne d'Arc délivre Orléans des Anglais." },
        { year: 1945, cat: "Guerre",    text: "Libération du camp de concentration de Dachau par les Américains." },
    ],
    "04-30": [
        { year: 1789, cat: "Politique", text: "George Washington prête serment comme premier président des États-Unis." },
        { year: 1945, cat: "Guerre",    text: "Suicide d'Adolf Hitler dans son bunker à Berlin." },
    ],
    "05-01": [
        { year: 1886, cat: "Société",   text: "Grève générale à Chicago pour la journée de 8 heures — origine de la Fête du Travail." },
        { year: 1960, cat: "Politique", text: "Un avion espion U-2 américain est abattu au-dessus de l'URSS." },
    ],
    "05-02": [
        { year: 1519, cat: "Culture",   text: "Mort de Léonard de Vinci au château du Clos Lucé, Amboise." },
        { year: 1611, cat: "Culture",   text: "Publication de la Bible du roi Jacques en anglais." },
        { year: 2011, cat: "Politique", text: "Ben Laden est tué par les forces spéciales américaines au Pakistan." },
    ],
    "05-03": [
        { year: 1469, cat: "Culture",   text: "Naissance de Nicolas Machiavel à Florence." },
        { year: 1945, cat: "Tragédie",  text: "Naufrage du Cap Arcona — des milliers de déportés se noient dans la mer Baltique." },
    ],
    "05-04": [
        { year: 1626, cat: "Histoire",  text: "Peter Minuit achète Manhattan aux Indiens Lenape pour 24 dollars de marchandises." },
        { year: 1970, cat: "Politique", text: "Massacre de Kent State : quatre étudiants pacifistes tués par la garde nationale." },
    ],
    "05-05": [
        { year: 1821, cat: "France",    text: "Mort de Napoléon Ier à Sainte-Hélène." },
        { year: 1961, cat: "Science",   text: "Alan Shepard est le premier Américain dans l'espace." },
    ],
    "05-06": [
        { year: 1527, cat: "Histoire",  text: "Sac de Rome par les troupes de Charles Quint — fin de la Renaissance romaine." },
        { year: 1994, cat: "Transport", text: "Inauguration du tunnel sous la Manche reliant France et Angleterre." },
    ],
    "05-07": [
        { year: 1763, cat: "Histoire",  text: "Début de la révolte de Pontiac — résistance amérindienne." },
        { year: 1915, cat: "Guerre",    text: "Torpillage du Lusitania — 1 198 morts, dont 128 Américains." },
        { year: 1945, cat: "Guerre",    text: "Signature de la capitulation allemande à Reims." },
    ],
    "05-08": [
        { year: 1429, cat: "France",    text: "Jeanne d'Arc libère Orléans." },
        { year: 1945, cat: "Guerre",    text: "Capitulation de l'Allemagne nazie — Victoire en Europe (V-E Day)." },
        { year: 1886, cat: "Science",   text: "Première vente de Coca-Cola dans une pharmacie d'Atlanta." },
    ],
    "05-09": [
        { year: 1386, cat: "Histoire",  text: "Traité de Windsor entre l'Angleterre et le Portugal — la plus vieille alliance du monde." },
        { year: 1950, cat: "Europe",    text: "Robert Schuman propose sa «déclaration» qui fondera la CECA, ancêtre de l'UE." },
    ],
    "05-10": [
        { year: 1497, cat: "Histoire",  text: "Amerigo Vespucci part pour son premier voyage en Amérique." },
        { year: 1940, cat: "Guerre",    text: "Invasion de la Belgique, des Pays-Bas et de la France par l'Allemagne." },
        { year: 1869, cat: "Transport", text: "Achèvement du premier chemin de fer transcontinental américain." },
    ],
    "05-11": [
        { year: 330,  cat: "Histoire",  text: "Fondation de Constantinople (Istanbul) par l'Empereur Constantin." },
        { year: 1997, cat: "Science",   text: "Deep Blue bat Kasparov en match d'échecs — première défaite d'un champion du monde face à l'IA." },
    ],
    "05-12": [
        { year: 1820, cat: "Santé",     text: "Naissance de Florence Nightingale à Florence — fondatrice des soins infirmiers modernes." },
        { year: 1949, cat: "Politique", text: "Fin du blocus de Berlin par l'URSS." },
    ],
    "05-13": [
        { year: 1373, cat: "Histoire",  text: "Traité de Brétigny : la France perd une grande partie de son territoire." },
        { year: 1981, cat: "Politique", text: "Attentat contre le pape Jean-Paul II place Saint-Pierre." },
    ],
    "05-14": [
        { year: 1796, cat: "Santé",     text: "Jenner réalise la première vaccination contre la variole." },
        { year: 1948, cat: "Politique", text: "Déclaration d'indépendance de l'État d'Israël." },
    ],
    "05-15": [
        { year: 1800, cat: "France",    text: "Victoire de Napoléon à la bataille de Marengo." },
        { year: 1918, cat: "Transport", text: "Premier vol postal régulier aux États-Unis entre Washington et New York." },
    ],
    "05-16": [
        { year: 1763, cat: "Culture",   text: "Première rencontre entre Samuel Johnson et James Boswell à Londres." },
        { year: 1929, cat: "Culture",   text: "Première cérémonie des Oscars à Hollywood." },
    ],
    "05-17": [
        { year: 1792, cat: "Économie",  text: "Fondation de la Bourse de New York sous un platane à Wall Street." },
        { year: 1954, cat: "Société",   text: "Arrêt Brown v. Board of Education — la ségrégation scolaire déclarée inconstitutionnelle." },
    ],
    "05-18": [
        { year: 1804, cat: "France",    text: "Proclamation du Premier Empire : Napoléon devient Empereur des Français." },
        { year: 1980, cat: "Nature",    text: "Éruption volcanique du mont Saint Helens aux États-Unis." },
    ],
    "05-19": [
        { year: 1499, cat: "France",    text: "Anne de Bretagne épouse Louis XII — union définitive de la Bretagne à la France." },
        { year: 1536, cat: "Histoire",  text: "Exécution d'Anne Boleyn sur Tower Green à Londres." },
    ],
    "05-20": [
        { year: 1506, cat: "Histoire",  text: "Mort de Christophe Colomb à Valladolid." },
        { year: 1927, cat: "Aviation",  text: "Charles Lindbergh décolle de New York pour la première traversée de l'Atlantique en solo." },
    ],
    "05-21": [
        { year: 1471, cat: "France",    text: "Albrecht Dürer, peintre de la Renaissance allemande, naît à Nuremberg." },
        { year: 1927, cat: "Aviation",  text: "Lindbergh atterrit au Bourget après 33h30 de vol non-stop." },
    ],
    "05-22": [
        { year: 1813, cat: "Culture",   text: "Naissance de Richard Wagner à Leipzig." },
        { year: 1990, cat: "Technologie", text: "Microsoft lance Windows 3.0." },
    ],
    "05-23": [
        { year: 1498, cat: "Histoire",  text: "Exécution de Savonarole à Florence." },
        { year: 1707, cat: "Science",   text: "Naissance du naturaliste Carl von Linné en Suède." },
    ],
    "05-24": [
        { year: 1543, cat: "Science",   text: "Publication de «De revolutionibus» de Copernic — héliocentrisme." },
        { year: 1844, cat: "Science",   text: "Samuel Morse envoie le premier télégramme officiel : «What hath God wrought»." },
    ],
    "05-25": [
        { year: 1085, cat: "Histoire",  text: "Alphonse VI de Castille reconquiert Tolède aux Maures." },
        { year: 1977, cat: "Culture",   text: "Sortie de Star Wars — Episode IV de George Lucas." },
    ],
    "05-26": [
        { year: 1703, cat: "Culture",   text: "Naissance de Samuel Pepys, chroniqueur de la vie londonienne." },
        { year: 1940, cat: "Guerre",    text: "Début de l'évacuation de Dunkerque — 338 000 soldats sauvés." },
    ],
    "05-27": [
        { year: 1564, cat: "Culture",   text: "Mort de Jean Calvin à Genève." },
        { year: 1941, cat: "Guerre",    text: "Coulage du Bismarck par la Royal Navy en Atlantique Nord." },
    ],
    "05-28": [
        { year: 1871, cat: "France",    text: "Semaine sanglante — fin de la Commune de Paris." },
        { year: 1934, cat: "Société",   text: "Naissance des quintuplées Dionne, premières à survivre." },
    ],
    "05-29": [
        { year: 1453, cat: "Histoire",  text: "Prise de Constantinople par les Turcs ottomans — fin de l'Empire byzantin." },
        { year: 1953, cat: "Sport",     text: "Edmund Hillary et Tensing Norgay atteignent pour la première fois le sommet de l'Everest." },
    ],
    "05-30": [
        { year: 1431, cat: "France",    text: "Exécution de Jeanne d'Arc sur la place du Vieux-Marché à Rouen." },
        { year: 1913, cat: "Politique", text: "Signature du traité de Londres — fin de la Première Guerre balkanique." },
    ],
    "05-31": [
        { year: 1868, cat: "Sport",     text: "Première course automobile entre Paris et Versailles." },
        { year: 1916, cat: "Guerre",    text: "Bataille du Jutland — la plus grande bataille navale de la Première Guerre mondiale." },
    ],
    "06-01": [
        { year: 1495, cat: "Culture",   text: "Première mention écrite du whisky en Écosse." },
        { year: 1794, cat: "France",    text: "Première fête de l'Être Suprême organisée par Robespierre." },
    ],
    "06-02": [
        { year: 455,  cat: "Histoire",  text: "Les Vandales saccagent Rome." },
        { year: 1953, cat: "Histoire",  text: "Couronnement d'Élisabeth II à l'abbaye de Westminster." },
    ],
    "06-03": [
        { year: 1621, cat: "Histoire",  text: "La Compagnie néerlandaise des Indes occidentales reçoit son acte de fondation." },
        { year: 1989, cat: "Politique", text: "Massacre de la place Tiananmen à Pékin." },
    ],
    "06-04": [
        { year: 1783, cat: "France",    text: "Première démonstration publique du ballon à air chaud des frères Montgolfier à Annonay." },
        { year: 1940, cat: "Guerre",    text: "Fin de l'évacuation de Dunkerque." },
        { year: 1989, cat: "Politique", text: "Massacre de la Place Tiananmen à Pékin (même nuit que le 3)." },
    ],
    "06-05": [
        { year: 1783, cat: "France",    text: "Envol du premier ballon Montgolfier à Annonay." },
        { year: 1967, cat: "Guerre",    text: "Début de la guerre des Six Jours entre Israël et ses voisins arabes." },
    ],
    "06-06": [
        { year: 1944, cat: "Guerre",    text: "Débarquement en Normandie — Jour J — plus grande opération amphibie de l'Histoire." },
        { year: 1984, cat: "Jeux",      text: "Sortie du jeu Tetris conçu par Alexei Pajitnov." },
    ],
    "06-07": [
        { year: 1494, cat: "Histoire",  text: "Traité de Tordesillas : le monde partagé entre Espagne et Portugal." },
        { year: 1954, cat: "Science",   text: "Mort d'Alan Turing à Wilmslow — père de l'informatique." },
    ],
    "06-08": [
        { year: 793,  cat: "Histoire",  text: "Raid viking sur le monastère de Lindisfarne — début des invasions normandes." },
        { year: 1949, cat: "Culture",   text: "George Orwell publie «1984»." },
    ],
    "06-09": [
        { year: 68,   cat: "Histoire",  text: "Suicide de Néron — fin de la dynasty julio-claudienne." },
        { year: 1934, cat: "Culture",   text: "Première apparition officielle de Donald Duck dans «La Sagesse des poules»." },
    ],
    "06-10": [
        { year: 1190, cat: "Histoire",  text: "Noyade de Frédéric Barberousse dans la rivière Saleph lors de la 3e Croisade." },
        { year: 1944, cat: "Guerre",    text: "Massacre d'Oradour-sur-Glane : 643 civils tués par les SS." },
    ],
    "06-11": [
        { year: 1509, cat: "Histoire",  text: "Mariage de Henri VIII et Catherine d'Aragon." },
        { year: 1963, cat: "Politique", text: "Le moine bouddhiste Thích Quảng Đức s'immole par le feu à Saïgon." },
    ],
    "06-12": [
        { year: 1667, cat: "Science",   text: "Jean-Baptiste Denis réalise la première transfusion sanguine sur un humain." },
        { year: 1987, cat: "Politique", text: "Reagan à Berlin : «Mr. Gorbachev, tear down this wall!»" },
    ],
    "06-13": [
        { year: 1381, cat: "Histoire",  text: "Révolte des paysans anglais — Wat Tyler marche sur Londres." },
        { year: 1944, cat: "Guerre",    text: "Première utilisation des V1 allemands contre l'Angleterre." },
    ],
    "06-14": [
        { year: 1789, cat: "Histoire",  text: "Tiers État se déclare Assemblée Nationale — début de la Révolution française." },
        { year: 1940, cat: "Guerre",    text: "Entrée des troupes allemandes dans Paris." },
    ],
    "06-15": [
        { year: 1215, cat: "Histoire",  text: "Le roi Jean sans Terre signe la Magna Carta à Runnymede." },
        { year: 1752, cat: "Science",   text: "Franklin capture la foudre avec un cerf-volant — base de l'invention du paratonnerre." },
    ],
    "06-16": [
        { year: 1963, cat: "Science",   text: "Valentina Terechkova est la première femme dans l'espace, à bord de Vostok 6." },
        { year: 1976, cat: "Politique", text: "Émeutes de Soweto en Afrique du Sud contre l'apartheid." },
    ],
    "06-17": [
        { year: 1579, cat: "Histoire",  text: "Francis Drake revendique la Californie pour l'Angleterre." },
        { year: 1972, cat: "Politique", text: "Arrestation des cambrioleurs au Watergate — début du scandale." },
    ],
    "06-18": [
        { year: 1815, cat: "France",    text: "Bataille de Waterloo — défaite définitive de Napoléon Bonaparte." },
        { year: 1940, cat: "France",    text: "Appel du 18 juin du Général de Gaulle depuis Londres." },
        { year: 1983, cat: "Science",   text: "Sally Ride est la première Américaine dans l'espace." },
    ],
    "06-19": [
        { year: 1865, cat: "Histoire",  text: "Annonce de la fin de l'esclavage au Texas — origine de la fête du Juneteenth." },
        { year: 1953, cat: "Politique", text: "Exécution des époux Rosenberg aux États-Unis pour espionnage." },
    ],
    "06-20": [
        { year: 1791, cat: "France",    text: "Fuite de Varennes : arrestation de Louis XVI et Marie-Antoinette." },
        { year: 1837, cat: "Histoire",  text: "La reine Victoria monte sur le trône d'Angleterre à 18 ans." },
    ],
    "06-21": [
        { year: 1788, cat: "Politique", text: "La Constitution américaine entre en vigueur après ratification par 9 États." },
        { year: 1877, cat: "Histoire",  text: "Dix membres des «Molly Maguires» sont pendus en Pennsylvanie." },
    ],
    "06-22": [
        { year: 1633, cat: "Science",   text: "Galilée abjure ses convictions sur l'héliocentrisme sous la pression de l'Inquisition." },
        { year: 1941, cat: "Guerre",    text: "Opération Barbarossa : l'Allemagne envahit l'URSS." },
    ],
    "06-23": [
        { year: 1314, cat: "Histoire",  text: "Bataille de Bannockburn — victoire écossaise contre les Anglais." },
        { year: 1912, cat: "Science",   text: "Naissance d'Alan Turing à Londres." },
    ],
    "06-24": [
        { year: 1340, cat: "Histoire",  text: "Bataille de l'Écluse — victoire navale anglaise sur la France." },
        { year: 1948, cat: "Politique", text: "Début du blocus de Berlin-Ouest par l'URSS." },
    ],
    "06-25": [
        { year: 1876, cat: "Histoire",  text: "Bataille de Little Bighorn — défaite de Custer face aux Sioux de Sitting Bull." },
        { year: 1950, cat: "Guerre",    text: "Début de la guerre de Corée." },
        { year: 2009, cat: "Culture",   text: "Mort de Michael Jackson à Los Angeles." },
    ],
    "06-26": [
        { year: 1945, cat: "Politique", text: "Signature de la Charte des Nations Unies à San Francisco." },
        { year: 1963, cat: "Politique", text: "Kennedy à Berlin-Ouest : «Ich bin ein Berliner»." },
    ],
    "06-27": [
        { year: 1844, cat: "Histoire",  text: "Lynchage de Joseph Smith, fondateur du mormonisme." },
        { year: 1905, cat: "Politique", text: "Mutinerie du cuirassé Potemkine en mer Noire." },
    ],
    "06-28": [
        { year: 1914, cat: "Guerre",    text: "Assassinat de l'archiduc François-Ferdinand à Sarajevo — début de la Première Guerre mondiale." },
        { year: 1919, cat: "Politique", text: "Signature du Traité de Versailles mettant fin à la Première Guerre mondiale." },
    ],
    "06-29": [
        { year: 1613, cat: "Culture",   text: "Le Globe Theatre de Shakespeare est détruit par un incendie." },
        { year: 1995, cat: "Science",   text: "Première liaison entre la navette Atlantis et la station spatiale Mir." },
    ],
    "06-30": [
        { year: 1905, cat: "Science",   text: "Publication du premier article d'Einstein sur la relativité restreinte." },
        { year: 1908, cat: "Nature",    text: "Explosion de Toungouska en Sibérie — impact météoritique ou cométaire." },
    ],
    "07-01": [
        { year: 1867, cat: "Histoire",  text: "Naissance du Canada — Confédération des provinces britanniques." },
        { year: 1916, cat: "Guerre",    text: "Début de la bataille de la Somme — 60 000 soldats britanniques tombent le premier jour." },
        { year: 1997, cat: "Politique", text: "Hong Kong est rétrocédé à la Chine par le Royaume-Uni." },
    ],
    "07-02": [
        { year: 1776, cat: "Politique", text: "Le Congrès continental vote l'indépendance des États-Unis (officielle le 4)." },
        { year: 1937, cat: "Aviation",  text: "Disparition d'Amelia Earhart au-dessus du Pacifique." },
    ],
    "07-03": [
        { year: 1863, cat: "Guerre",    text: "Troisième jour de la bataille de Gettysburg — tournant de la guerre de Sécession." },
        { year: 1969, cat: "Science",   text: "Explosion de la fusée soviétique N1 — fin du programme lunaire soviétique." },
    ],
    "07-04": [
        { year: 1776, cat: "Politique", text: "Adoption de la Déclaration d'Indépendance des États-Unis." },
        { year: 1054, cat: "Science",   text: "Observation de la supernova qui deviendra la nébuleuse du Crabe." },
    ],
    "07-05": [
        { year: 1687, cat: "Science",   text: "Publication des «Principia Mathematica» d'Isaac Newton." },
        { year: 1946, cat: "Culture",   text: "Présentation du premier bikini par Louis Réard à Paris." },
        { year: 1948, cat: "Santé",     text: "Naissance du NHS, la Sécurité sociale britannique." },
    ],
    "07-06": [
        { year: 1415, cat: "Histoire",  text: "Exécution de Jan Hus à Constance — précurseur de la Réforme protestante." },
        { year: 1535, cat: "Histoire",  text: "Exécution de Thomas More par Henri VIII." },
    ],
    "07-07": [
        { year: 1307, cat: "France",    text: "Mort de Philippe IV le Bel qui a dissous l'Ordre des Templiers." },
        { year: 2005, cat: "Tragédie",  text: "Attentats de Londres dans le métro et un bus — 52 morts." },
    ],
    "07-08": [
        { year: 1497, cat: "Histoire",  text: "Vasco de Gama quitte Lisbonne pour l'Inde." },
        { year: 1947, cat: "Culture",   text: "Le journal de Roswell rapporte la découverte d'une «soucoupe volante»." },
    ],
    "07-09": [
        { year: 1776, cat: "Politique", text: "Les New-Yorkais renversent la statue du roi George III." },
        { year: 1810, cat: "France",    text: "Napoléon annexe les Pays-Bas à l'Empire français." },
    ],
    "07-10": [
        { year: 1943, cat: "Guerre",    text: "Débarquement allié en Sicile — début de la libération de l'Italie." },
        { year: 1962, cat: "Science",   text: "Lancement de Telstar, premier satellite de télécommunications." },
    ],
    "07-11": [
        { year: 1302, cat: "Histoire",  text: "Bataille des Éperons d'Or : victoire flamande sur la chevalerie française." },
        { year: 1979, cat: "Science",   text: "La station spatiale Skylab se désintègre en rentrant dans l'atmosphère." },
    ],
    "07-12": [
        { year: 100,  cat: "Histoire",  text: "Naissance de Jules César à Rome (date approximative)." },
        { year: 1804, cat: "Politique", text: "Duel fatal entre Alexander Hamilton et Aaron Burr." },
    ],
    "07-13": [
        { year: 1793, cat: "France",    text: "Assassinat de Marat par Charlotte Corday dans sa baignoire." },
        { year: 1977, cat: "Société",   text: "Grande panne d'électricité à New York — pillages massifs." },
    ],
    "07-14": [
        { year: 1789, cat: "France",    text: "Prise de la Bastille — début de la Révolution française." },
        { year: 1969, cat: "Culture",   text: "Lancement de la mission Apollo 11 vers la Lune." },
    ],
    "07-15": [
        { year: 1410, cat: "Histoire",  text: "Bataille de Grunwald — défaite des Chevaliers Teutoniques." },
        { year: 1799, cat: "Science",   text: "Découverte de la Pierre de Rosette en Égypte par des soldats français." },
    ],
    "07-16": [
        { year: 1439, cat: "Histoire",  text: "Le baisemain est interdit par décret en Angleterre pour limiter la Peste noire." },
        { year: 1945, cat: "Science",   text: "Premier essai atomique (Trinity) dans le désert du Nouveau-Mexique." },
        { year: 1969, cat: "Science",   text: "Décollage d'Apollo 11 depuis Cape Kennedy." },
    ],
    "07-17": [
        { year: 1453, cat: "France",    text: "Bataille de Castillon — dernière bataille de la Guerre de Cent Ans." },
        { year: 1975, cat: "Science",   text: "Rendez-vous spatial Apollo-Soyouz — coopération USA-URSS en orbite." },
    ],
    "07-18": [
        { year: 64,   cat: "Histoire",  text: "Grand incendie de Rome sous Néron." },
        { year: 1925, cat: "Politique", text: "Hitler publie le premier tome de «Mein Kampf»." },
        { year: 1936, cat: "Guerre",    text: "Début de la guerre civile espagnole." },
    ],
    "07-19": [
        { year: 1545, cat: "Histoire",  text: "Naufrage du Mary Rose, navire amiral d'Henri VIII." },
        { year: 1848, cat: "Société",   text: "Convention de Seneca Falls — première convention pour les droits des femmes." },
    ],
    "07-20": [
        { year: 1969, cat: "Science",   text: "Neil Armstrong pose le pied sur la Lune : «Un petit pas pour l'homme...»" },
        { year: 1944, cat: "Guerre",    text: "Attentat manqué contre Hitler à la Wolfsschanze." },
    ],
    "07-21": [
        { year: 1969, cat: "Science",   text: "Armstrong et Aldrin marchent sur la Lune — Buzz Aldrin les rejoint." },
        { year: 1861, cat: "Guerre",    text: "Première bataille de Bull Run — début de la guerre de Sécession." },
    ],
    "07-22": [
        { year: 1298, cat: "Histoire",  text: "Bataille de Falkirk — Edward Ier d'Angleterre écrase William Wallace." },
        { year: 1934, cat: "Histoire",  text: "John Dillinger, «ennemi public no 1», abattu par le FBI à Chicago." },
    ],
    "07-23": [
        { year: 1914, cat: "Guerre",    text: "L'Autriche adresse un ultimatum à la Serbie — engrenage vers la Grande Guerre." },
        { year: 1829, cat: "Science",   text: "Brevet de la première machine à écrire aux États-Unis." },
    ],
    "07-24": [
        { year: 1534, cat: "France",    text: "Jacques Cartier plante une croix à Gaspé — prise de possession du Canada." },
        { year: 1911, cat: "Histoire",  text: "Hiram Bingham «redécouvre» le Machu Picchu au Pérou." },
    ],
    "07-25": [
        { year: 1943, cat: "Guerre",    text: "Mussolini est destitué et arrêté." },
        { year: 1978, cat: "Science",   text: "Naissance de Louise Brown, premier «bébé éprouvette»." },
    ],
    "07-26": [
        { year: 1847, cat: "Politique", text: "Indépendance du Libéria." },
        { year: 1953, cat: "Histoire",  text: "Che Guevara et Fidel Castro attaquent la caserne Moncada." },
    ],
    "07-27": [
        { year: 1656, cat: "Culture",   text: "Excommunication de Spinoza par la communauté juive d'Amsterdam." },
        { year: 1953, cat: "Guerre",    text: "Signature de l'armistice en Corée." },
    ],
    "07-28": [
        { year: 1794, cat: "France",    text: "Exécution de Robespierre — fin de la Terreur révolutionnaire." },
        { year: 1914, cat: "Guerre",    text: "L'Autriche-Hongrie déclare la guerre à la Serbie — début de la Première Guerre mondiale." },
    ],
    "07-29": [
        { year: 1900, cat: "Politique", text: "Assassinat du roi d'Italie Humbert Ier à Monza." },
        { year: 1981, cat: "Culture",   text: "Mariage de Charles et Diana diffusé à la télévision dans le monde entier." },
    ],
    "07-30": [
        { year: 762,  cat: "Histoire",  text: "Fondation de Bagdad par le calife al-Mansur." },
        { year: 1975, cat: "Histoire",  text: "Disparition de Jimmy Hoffa, leader syndical américain." },
    ],
    "07-31": [
        { year: 1498, cat: "Histoire",  text: "Christophe Colomb débarque sur le continent américain (Venezuela)." },
        { year: 1790, cat: "Économie",  text: "Émission du premier brevet américain à Samuel Hopkins pour la fabrication de potasse." },
    ],
    "08-01": [
        { year: 1291, cat: "Histoire",  text: "Fondation de la Confédération suisse par le Pacte fédéral." },
        { year: 1944, cat: "Guerre",    text: "Début de l'Insurrection de Varsovie contre l'occupant nazi." },
        { year: 1981, cat: "Culture",   text: "Lancement de MTV — la première vidéo diffusée est «Video Killed the Radio Star»." },
    ],
    "08-02": [
        { year: 216,  cat: "Histoire",  text: "Bataille de Cannes — Hannibal écrase l'armée romaine." },
        { year: 1990, cat: "Guerre",    text: "Invasion du Koweït par l'Irak — début de la crise du Golfe." },
    ],
    "08-03": [
        { year: 1492, cat: "Histoire",  text: "Christophe Colomb quitte Palos de la Frontera pour son premier voyage." },
        { year: 1778, cat: "Culture",   text: "Inauguration de La Scala de Milan." },
    ],
    "08-04": [
        { year: 70,   cat: "Histoire",  text: "Les Romains détruisent le Temple de Jérusalem." },
        { year: 1944, cat: "Guerre",    text: "Anne Frank et sa famille sont arrêtées à Amsterdam." },
    ],
    "08-05": [
        { year: 1305, cat: "Histoire",  text: "William Wallace est capturé et exécuté par les Anglais." },
        { year: 1962, cat: "Culture",   text: "Mort de Marilyn Monroe à Los Angeles." },
    ],
    "08-06": [
        { year: 1945, cat: "Guerre",    text: "Bombe atomique larguée sur Hiroshima — 70 000 morts instantanément." },
        { year: 1991, cat: "Technologie", text: "Tim Berners-Lee publie la première page web au monde." },
    ],
    "08-07": [
        { year: 1420, cat: "France",    text: "Traité de Troyes : Henri V hérite de la couronne de France." },
        { year: 1959, cat: "Science",   text: "Explorer 6 prend la première photo de la Terre depuis l'espace." },
    ],
    "08-08": [
        { year: 1945, cat: "Guerre",    text: "L'URSS déclare la guerre au Japon." },
        { year: 1963, cat: "Histoire",  text: "Grand vol du train postal Glasgow-Londres — 2,6 millions de livres volés." },
    ],
    "08-09": [
        { year: 1945, cat: "Guerre",    text: "Bombe atomique larguée sur Nagasaki." },
        { year: 1974, cat: "Politique", text: "Démission de Richard Nixon après le scandale du Watergate." },
    ],
    "08-10": [
        { year: 1792, cat: "France",    text: "Prise des Tuileries — chute de la monarchie, début de la Première République." },
        { year: 1846, cat: "Science",   text: "Fondation de la Smithsonian Institution à Washington." },
    ],
    "08-11": [
        { year: 3114, cat: "Culture",   text: "Date zéro du calendrier maya (en calendrier grégorien proleptic)." },
        { year: 1919, cat: "Politique", text: "La Constitution de Weimar est signée en Allemagne." },
    ],
    "08-12": [
        { year: 30,   cat: "Histoire",  text: "Mort de Cléopâtre VII — fin de l'Égypte ptolémaïque." },
        { year: 2000, cat: "Tragédie",  text: "Naufrage du sous-marin nucléaire russe Koursk — 118 morts." },
    ],
    "08-13": [
        { year: 1961, cat: "Politique", text: "Début de la construction du mur de Berlin." },
        { year: 1521, cat: "Histoire",  text: "Cortés capture Tenochtitlán — fin de l'Empire aztèque." },
    ],
    "08-14": [
        { year: 1945, cat: "Guerre",    text: "Annonce de la capitulation japonaise — fin de la Seconde Guerre mondiale." },
        { year: 1941, cat: "Politique", text: "Signature de la Charte de l'Atlantique par Churchill et Roosevelt." },
    ],
    "08-15": [
        { year: 778,  cat: "France",    text: "Bataille de Roncevaux — mort de Roland, neveu de Charlemagne." },
        { year: 1945, cat: "Guerre",    text: "L'Empereur Hirohito annonce la capitulation du Japon à la radio." },
        { year: 1969, cat: "Culture",   text: "Début du festival de Woodstock." },
    ],
    "08-16": [
        { year: 1513, cat: "Histoire",  text: "Bataille des Éperons — Henri VIII bat les Français à Guinegatte." },
        { year: 1977, cat: "Culture",   text: "Mort d'Elvis Presley à Graceland." },
    ],
    "08-17": [
        { year: 1943, cat: "Guerre",    text: "Fin de la bataille de Sicile — l'île est libérée." },
        { year: 1999, cat: "Tragédie",  text: "Séisme d'Izmit en Turquie — 17 000 morts." },
    ],
    "08-18": [
        { year: 1587, cat: "Histoire",  text: "Naissance de Virginia Dare, premier enfant anglais né en Amérique." },
        { year: 1920, cat: "Société",   text: "19e amendement aux États-Unis — les femmes obtiennent le droit de vote." },
    ],
    "08-19": [
        { year: 14,   cat: "Histoire",  text: "Mort d'Auguste — premier Empereur romain." },
        { year: 1839, cat: "Science",   text: "Présentation officielle du daguerréotype — naissance de la photographie." },
    ],
    "08-20": [
        { year: 1968, cat: "Politique", text: "Invasion de la Tchécoslovaquie par les troupes du Pacte de Varsovie." },
        { year: 1998, cat: "Politique", text: "Frappes américaines en Afghanistan et au Soudan après les attentats des ambassades." },
    ],
    "08-21": [
        { year: 1911, cat: "Culture",   text: "La Joconde est volée au Louvre par Vincenzo Peruggia." },
        { year: 1959, cat: "Politique", text: "Hawaï devient le 50e État des États-Unis." },
    ],
    "08-22": [
        { year: 1485, cat: "Histoire",  text: "Bataille de Bosworth — mort de Richard III, début de la dynasty Tudor." },
        { year: 1849, cat: "Transport", text: "Première attaque aérienne de l'Histoire : des ballons autrichiens bombardent Venise." },
    ],
    "08-23": [
        { year: 1305, cat: "France",    text: "Prise de Rome par l'armée de Bourbon — Clément VII capitule." },
        { year: 1939, cat: "Guerre",    text: "Pacte germano-soviétique (Ribbentrop-Molotov) signé à Moscou." },
    ],
    "08-24": [
        { year: 79,   cat: "Tragédie",  text: "Éruption du Vésuve — ensevelissement de Pompéi et Herculanum." },
        { year: 410,  cat: "Histoire",  text: "Sac de Rome par les Wisigoths d'Alaric." },
        { year: 1572, cat: "France",    text: "Massacre de la Saint-Barthélemy — des milliers de protestants tués à Paris." },
    ],
    "08-25": [
        { year: 1875, cat: "Sport",     text: "Matthew Webb est le premier à traverser la Manche à la nage." },
        { year: 1944, cat: "France",    text: "Libération de Paris — De Gaulle descend les Champs-Élysées." },
        { year: 1989, cat: "Science",   text: "Voyager 2 effectue son survol le plus proche de Neptune." },
    ],
    "08-26": [
        { year: 1346, cat: "France",    text: "Bataille de Crécy — victoire anglaise, première utilisation du canon en Europe." },
        { year: 1789, cat: "France",    text: "Adoption de la Déclaration des droits de l'Homme et du Citoyen." },
        { year: 1920, cat: "Société",   text: "Ratification du 19e amendement — droit de vote pour les femmes aux USA." },
    ],
    "08-27": [
        { year: 1776, cat: "Histoire",  text: "Bataille de Long Island — première grande bataille de la Guerre d'Indépendance." },
        { year: 1883, cat: "Tragédie",  text: "Éruption du Krakatoa — entendue à 5000 km, 36 000 morts." },
    ],
    "08-28": [
        { year: 1963, cat: "Politique", text: "Marche sur Washington : Martin Luther King prononce «I Have a Dream»." },
        { year: 1789, cat: "France",    text: "La Déclaration des droits de l'Homme est adoptée par l'Assemblée." },
    ],
    "08-29": [
        { year: 1842, cat: "Histoire",  text: "Traité de Nankin — fin de la Première Guerre de l'Opium, Hong Kong cédée." },
        { year: 1949, cat: "Science",   text: "L'URSS fait exploser sa première bombe atomique." },
    ],
    "08-30": [
        { year: 1791, cat: "France",    text: "Fermeture de L'Encyclopédie de Diderot et d'Alembert." },
        { year: 1963, cat: "Politique", text: "Inauguration du «téléphone rouge» entre Washington et Moscou." },
    ],
    "08-31": [
        { year: 1888, cat: "Histoire",  text: "Première victime connue de Jack l'Éventreur à Whitechapel." },
        { year: 1997, cat: "Culture",   text: "Mort de Lady Diana dans le tunnel de l'Alma à Paris." },
    ],
    "09-01": [
        { year: 1715, cat: "France",    text: "Mort de Louis XIV après 72 ans de règne — le plus long de l'histoire de France." },
        { year: 1939, cat: "Guerre",    text: "L'Allemagne envahit la Pologne — début de la Seconde Guerre mondiale." },
    ],
    "09-02": [
        { year: 31,   cat: "Histoire",  text: "Bataille d'Actium — victoire d'Octave sur Marc Antoine et Cléopâtre." },
        { year: 1666, cat: "Histoire",  text: "Grand Incendie de Londres — 13 000 maisons détruites." },
        { year: 1945, cat: "Guerre",    text: "Capitulation du Japon signée sur l'USS Missouri — fin de la Seconde Guerre mondiale." },
    ],
    "09-03": [
        { year: 1189, cat: "Histoire",  text: "Couronnement de Richard Cœur de Lion en Angleterre." },
        { year: 1939, cat: "Guerre",    text: "La France et la Grande-Bretagne déclarent la guerre à l'Allemagne." },
    ],
    "09-04": [
        { year: 476,  cat: "Histoire",  text: "Romulus Augustule est déposé — fin de l'Empire romain d'Occident." },
        { year: 1886, cat: "Histoire",  text: "Geronimo se rend — fin des guerres apache." },
        { year: 1998, cat: "Technologie", text: "Fondation de Google par Larry Page et Sergey Brin." },
    ],
    "09-05": [
        { year: 1793, cat: "France",    text: "Début de la Terreur révolutionnaire — décret de la Convention." },
        { year: 1972, cat: "Sport",     text: "Massacre de Munich : 11 athlètes israéliens assassinés aux JO." },
    ],
    "09-06": [
        { year: 1522, cat: "Histoire",  text: "Victoria, seul navire survivant, rentre en Espagne après le premier tour du monde." },
        { year: 1901, cat: "Politique", text: "Assassinat du président McKinley aux États-Unis." },
    ],
    "09-07": [
        { year: 1533, cat: "Histoire",  text: "Naissance d'Élisabeth Ire d'Angleterre à Greenwich." },
        { year: 1940, cat: "Guerre",    text: "Début du Blitz — bombardements allemands massifs sur Londres." },
    ],
    "09-08": [
        { year: 1664, cat: "Histoire",  text: "Les Hollandais cèdent New Amsterdam (Manhattan) aux Anglais." },
        { year: 1966, cat: "Culture",   text: "Première diffusion de Star Trek à la télévision américaine." },
    ],
    "09-09": [
        { year: 9,    cat: "Histoire",  text: "Bataille de la forêt de Teutoburg — trois légions romaines anéanties." },
        { year: 1791, cat: "France",    text: "Washington D.C. reçoit son nom officiel." },
    ],
    "09-10": [
        { year: 1846, cat: "Science",   text: "Elias Howe brevète la machine à coudre." },
        { year: 1960, cat: "Sport",     text: "Abebe Bikila remporte le marathon des JO de Rome pieds nus." },
    ],
    "09-11": [
        { year: 1297, cat: "Histoire",  text: "Bataille de Stirling Bridge — victoire de William Wallace." },
        { year: 1973, cat: "Politique", text: "Coup d'État militaire au Chili — mort de Salvador Allende." },
        { year: 2001, cat: "Tragédie",  text: "Attaques terroristes contre les tours du World Trade Center et le Pentagone." },
    ],
    "09-12": [
        { year: 490,  cat: "Histoire",  text: "Bataille de Marathon — les Athéniens repoussent les Perses." },
        { year: 1962, cat: "Science",   text: "Kennedy annonce l'objectif d'envoyer un homme sur la Lune." },
    ],
    "09-13": [
        { year: 1759, cat: "France",    text: "Bataille des Plaines d'Abraham — fin de la Nouvelle-France." },
        { year: 1971, cat: "Politique", text: "Mort de Nikita Khrouchtchev à Moscou." },
    ],
    "09-14": [
        { year: 1321, cat: "Culture",   text: "Mort de Dante Alighieri à Ravenne." },
        { year: 1812, cat: "France",    text: "Napoléon entre dans Moscou — la ville est en flammes." },
    ],
    "09-15": [
        { year: 1254, cat: "Culture",   text: "Naissance de Marco Polo à Venise." },
        { year: 1935, cat: "Politique", text: "Les lois de Nuremberg instituent la discrimination raciale en Allemagne." },
    ],
    "09-16": [
        { year: 1620, cat: "Histoire",  text: "Le Mayflower quitte Plymouth pour l'Amérique avec les Pèlerins." },
        { year: 1810, cat: "Politique", text: "Miguel Hidalgo lance le cri d'indépendance du Mexique." },
    ],
    "09-17": [
        { year: 1787, cat: "Politique", text: "Signature de la Constitution des États-Unis à Philadelphie." },
        { year: 1944, cat: "Guerre",    text: "Opération Market Garden — plus grande opération aéroportée de l'Histoire." },
    ],
    "09-18": [
        { year: 1793, cat: "Culture",   text: "Pose de la première pierre du Capitole à Washington." },
        { year: 1961, cat: "Politique", text: "Mort de Dag Hammarskjöld dans un accident d'avion mystérieux." },
    ],
    "09-19": [
        { year: 1356, cat: "France",    text: "Bataille de Poitiers — victoire anglaise sur Jean le Bon." },
        { year: 1783, cat: "Science",   text: "Les Montgolfier font voler un mouton, un canard et un coq dans leur ballon." },
    ],
    "09-20": [
        { year: 1519, cat: "Histoire",  text: "Magellan quitte Séville pour son tour du monde." },
        { year: 1870, cat: "Italie",    text: "Les troupes italiennes entrent dans Rome — unification de l'Italie." },
    ],
    "09-21": [
        { year: 1792, cat: "France",    text: "Proclamation de la Première République française à Paris." },
        { year: 1937, cat: "Culture",   text: "Publication du «Hobbit» de J.R.R. Tolkien." },
    ],
    "09-22": [
        { year: 1792, cat: "France",    text: "L'An I de la République est proclamé — début du calendrier républicain." },
        { year: 1862, cat: "Politique", text: "Lincoln proclame l'Émancipation — annonce la libération des esclaves." },
    ],
    "09-23": [
        { year: 63,   cat: "Histoire",  text: "Naissance d'Auguste, premier Empereur romain." },
        { year: 1846, cat: "Science",   text: "Découverte de Neptune — prédite par calcul mathématique." },
    ],
    "09-24": [
        { year: 1789, cat: "Politique", text: "Le Congrès américain établit la Cour suprême." },
        { year: 1960, cat: "Transport", text: "Lancement du premier porte-avions nucléaire, l'USS Enterprise." },
    ],
    "09-25": [
        { year: 1066, cat: "Histoire",  text: "Bataille de Stamford Bridge — Harold bat les Norvégiens." },
        { year: 1962, cat: "Science",   text: "Rachid Mimouni né; premier satellite algérien." },
    ],
    "09-26": [
        { year: 1580, cat: "Histoire",  text: "Francis Drake boucle le premier tour du monde en tant que capitaine." },
        { year: 1983, cat: "Guerre",    text: "Stanislav Petrov évite une guerre nucléaire en reconnaissant une fausse alerte." },
    ],
    "09-27": [
        { year: 1825, cat: "Transport", text: "Inauguration du premier chemin de fer à vapeur public, Stockton-Darlington." },
        { year: 1940, cat: "Guerre",    text: "Signature du Pacte tripartite entre Allemagne, Italie et Japon." },
    ],
    "09-28": [
        { year: 1066, cat: "Histoire",  text: "Guillaume le Conquérant débarque en Angleterre à Pevensey." },
        { year: 1928, cat: "Science",   text: "Alexander Fleming découvre la pénicilline dans son laboratoire." },
    ],
    "09-29": [
        { year: 1066, cat: "Histoire",  text: "Guillaume le Conquérant marche sur Londres." },
        { year: 1938, cat: "Politique", text: "Accords de Munich — les démocraties cèdent les Sudètes à Hitler." },
    ],
    "09-30": [
        { year: 1452, cat: "Culture",   text: "Impression de la première Bible de Gutenberg (achevée)." },
        { year: 1938, cat: "Politique", text: "Chamberlain rentre de Munich avec sa «paix pour notre temps»." },
    ],
    "10-01": [
        { year: 331,  cat: "Histoire",  text: "Bataille de Gaugamèles — Alexandre le Grand écrase Darius III." },
        { year: 1949, cat: "Politique", text: "Mao Zedong proclame la République populaire de Chine." },
    ],
    "10-02": [
        { year: 1187, cat: "Histoire",  text: "Saladin prend Jérusalem aux Croisés." },
        { year: 1869, cat: "Politique", text: "Naissance du Mahatma Gandhi à Porbandar, Inde." },
    ],
    "10-03": [
        { year: 1283, cat: "France",    text: "Fondation de la Cour des Aides à Paris." },
        { year: 1990, cat: "Politique", text: "Réunification de l'Allemagne." },
    ],
    "10-04": [
        { year: 1582, cat: "Science",   text: "Passage au calendrier grégorien en France — on passe du 4 au 15 octobre." },
        { year: 1957, cat: "Science",   text: "Lancement du Spoutnik 1 — premier satellite artificiel." },
    ],
    "10-05": [
        { year: 1789, cat: "France",    text: "Marche des femmes sur Versailles — elles ramènent le roi à Paris." },
        { year: 1930, cat: "Aviation",  text: "Crash du R101 en France — fin des dirigeables civils en Grande-Bretagne." },
        { year: 2011, cat: "Technologie", text: "Mort de Steve Jobs à Palo Alto." },
    ],
    "10-06": [
        { year: 1536, cat: "Culture",   text: "William Tyndale est exécuté pour avoir traduit la Bible en anglais." },
        { year: 1973, cat: "Guerre",    text: "Début de la guerre du Kippour — Égypte et Syrie attaquent Israël." },
    ],
    "10-07": [
        { year: 1571, cat: "Histoire",  text: "Bataille de Lépante — victoire chrétienne sur les Ottomans." },
        { year: 2001, cat: "Guerre",    text: "Début de l'intervention militaire en Afghanistan." },
    ],
    "10-08": [
        { year: 1871, cat: "Tragédie",  text: "Grand Incendie de Chicago — 300 morts, 17 000 bâtiments détruits." },
        { year: 1967, cat: "Politique", text: "Che Guevara est capturé en Bolivie." },
    ],
    "10-09": [
        { year: 1000, cat: "Histoire",  text: "Leif Erikson aborde en Amérique du Nord (Vinland) avant Colomb." },
        { year: 1967, cat: "Politique", text: "Exécution du Che Guevara en Bolivie." },
    ],
    "10-10": [
        { year: 732,  cat: "France",    text: "Bataille de Poitiers — Charles Martel arrête l'avancée arabe en Europe." },
        { year: 1911, cat: "Politique", text: "Début de la Révolution chinoise — fin de la dynasty Qing." },
    ],
    "10-11": [
        { year: 1531, cat: "Culture",   text: "Mort de Zwingli, réformateur protestant, à la bataille de Kappel." },
        { year: 1899, cat: "Guerre",    text: "Début de la Guerre des Boers en Afrique du Sud." },
    ],
    "10-12": [
        { year: 1492, cat: "Histoire",  text: "Christophe Colomb aborde aux Bahamas — «découverte» de l'Amérique." },
        { year: 1810, cat: "Culture",   text: "Première Oktoberfest à Munich." },
    ],
    "10-13": [
        { year: 54,   cat: "Histoire",  text: "Mort de l'Empereur Claude — Néron prend le pouvoir." },
        { year: 1307, cat: "France",    text: "Arrestation des Templiers sur ordre de Philippe IV le Bel." },
    ],
    "10-14": [
        { year: 1066, cat: "Histoire",  text: "Bataille d'Hastings — Guillaume le Conquérant bat Harold II." },
        { year: 1947, cat: "Science",   text: "Chuck Yeager franchit le mur du son à bord du Bell X-1." },
    ],
    "10-15": [
        { year: 1582, cat: "France",    text: "Adoption du calendrier grégorien — on passe directement au 15 octobre." },
        { year: 1917, cat: "Histoire",  text: "Exécution de Mata Hari à Vincennes pour espionnage." },
    ],
    "10-16": [
        { year: 1793, cat: "France",    text: "Exécution de Marie-Antoinette sur la place de la Révolution." },
        { year: 1968, cat: "Sport",     text: "Salut du poing levé d'Tommie Smith et John Carlos aux JO de Mexico." },
    ],
    "10-17": [
        { year: 1604, cat: "Science",   text: "Kepler observe une supernova dans la constellation d'Ophiuchus." },
        { year: 1849, cat: "Culture",   text: "Mort de Frédéric Chopin à Paris." },
    ],
    "10-18": [
        { year: 1867, cat: "Histoire",  text: "Les États-Unis achètent l'Alaska à la Russie pour 7,2 millions de dollars." },
        { year: 1922, cat: "Culture",   text: "Fondation de la BBC." },
    ],
    "10-19": [
        { year: 202,  cat: "Histoire",  text: "Bataille de Zama — Scipion l'Africain écrase Hannibal, fin de la 2e Guerre punique." },
        { year: 1781, cat: "Histoire",  text: "Capitulation de Cornwallis à Yorktown — fin de la guerre d'Indépendance américaine." },
    ],
    "10-20": [
        { year: 1827, cat: "Histoire",  text: "Bataille de Navarin — fin de la domination ottomane en Grèce." },
        { year: 1973, cat: "Politique", text: "«Massacre du samedi soir» — Nixon fait limoger le procureur spécial du Watergate." },
    ],
    "10-21": [
        { year: 1805, cat: "Histoire",  text: "Bataille de Trafalgar — victoire et mort de Nelson face à la flotte franco-espagnole." },
        { year: 1879, cat: "Science",   text: "Edison réussit son premier test réussi d'ampoule à incandescence." },
    ],
    "10-22": [
        { year: 1797, cat: "Science",   text: "Premier saut en parachute de l'Histoire par André-Jacques Garnerin." },
        { year: 1962, cat: "Politique", text: "Kennedy annonce la crise des missiles de Cuba." },
    ],
    "10-23": [
        { year: 4004, cat: "Culture",   text: "Date fixée par l'évêque Ussher pour la Création du monde (-4004 av. J.-C.)." },
        { year: 1956, cat: "Politique", text: "Début de l'insurrection hongroise contre le régime soviétique." },
    ],
    "10-24": [
        { year: 1648, cat: "Politique", text: "Traité de Westphalie — fin de la Guerre de Trente Ans, naissance de la diplomatie moderne." },
        { year: 1945, cat: "Politique", text: "Naissance officielle des Nations Unies." },
    ],
    "10-25": [
        { year: 1415, cat: "France",    text: "Bataille d'Azincourt — victoire écrasante des Anglais sur la chevalerie française." },
        { year: 1854, cat: "Guerre",    text: "Charge de la Brigade légère à Balaklava." },
    ],
    "10-26": [
        { year: 1825, cat: "Transport", text: "Inauguration du canal Érié reliant les Grands Lacs à l'Atlantique." },
        { year: 1955, cat: "Politique", text: "Proclamation de la neutralité permanente de l'Autriche." },
    ],
    "10-27": [
        { year: 312,  cat: "Histoire",  text: "Victoire de Constantin au Pont Milvius — début de la christianisation de Rome." },
        { year: 1553, cat: "Culture",   text: "Exécution de Michel Servet, médecin et théologien espagnol, à Genève." },
    ],
    "10-28": [
        { year: 312,  cat: "Histoire",  text: "Constantin entre dans Rome — tournant dans l'Histoire du christianisme." },
        { year: 1886, cat: "Culture",   text: "Inauguration de la Statue de la Liberté à New York." },
        { year: 1962, cat: "Politique", text: "Fin de la crise des missiles de Cuba — accord Kennedy-Khrouchtchev." },
    ],
    "10-29": [
        { year: 1929, cat: "Économie",  text: "«Mardi noir» — krach boursier de Wall Street, début de la Grande Dépression." },
        { year: 1969, cat: "Science",   text: "Envoi du premier message sur l'ARPANET, ancêtre d'Internet." },
    ],
    "10-30": [
        { year: 1905, cat: "Politique", text: "Le tsar Nicolas II signe le Manifeste d'Octobre en Russie." },
        { year: 1938, cat: "Culture",   text: "La Guerre des Mondes d'Orson Welles sème la panique à la radio." },
    ],
    "10-31": [
        { year: 1517, cat: "Histoire",  text: "Martin Luther affiche ses 95 thèses à Wittenberg — début de la Réforme protestante." },
        { year: 1984, cat: "Politique", text: "Assassinat d'Indira Gandhi par ses gardes du corps sikh." },
    ],
    "11-01": [
        { year: 1755, cat: "Tragédie",  text: "Séisme et tsunami de Lisbonne — 60 000 morts, la ville rasée." },
        { year: 1512, cat: "Culture",   text: "Inauguration de la Chapelle Sixtine peinte par Michel-Ange." },
    ],
    "11-02": [
        { year: 1783, cat: "France",    text: "Washington s'adresse à ses troupes pour la dernière fois." },
        { year: 1917, cat: "Politique", text: "Déclaration Balfour — la Grande-Bretagne soutient un foyer national juif en Palestine." },
    ],
    "11-03": [
        { year: 1957, cat: "Science",   text: "Lancement de Spoutnik 2 avec la chienne Laïka." },
        { year: 1783, cat: "France",    text: "Washington congédie ses troupes après l'indépendance." },
    ],
    "11-04": [
        { year: 1922, cat: "Science",   text: "Howard Carter découvre l'entrée du tombeau de Toutankhamon." },
        { year: 1979, cat: "Politique", text: "Des étudiants iraniens prennent en otage le personnel de l'ambassade américaine à Téhéran." },
    ],
    "11-05": [
        { year: 1605, cat: "Histoire",  text: "Guy Fawkes est arrêté : la Conspiration des Poudres est déjouée." },
        { year: 1895, cat: "Transport", text: "George Selden reçoit le premier brevet pour une automobile à essence." },
    ],
    "11-06": [
        { year: 1860, cat: "Politique", text: "Abraham Lincoln est élu président des États-Unis." },
        { year: 1917, cat: "Politique", text: "Victoire des Bolcheviks — Lénine prend le pouvoir en Russie." },
    ],
    "11-07": [
        { year: 1867, cat: "Science",   text: "Naissance de Marie Curie à Varsovie." },
        { year: 1917, cat: "Politique", text: "Révolution d'Octobre : les Bolcheviks s'emparent du pouvoir." },
    ],
    "11-08": [
        { year: 1895, cat: "Science",   text: "Wilhelm Röntgen découvre les rayons X." },
        { year: 1923, cat: "Politique", text: "Putsch de Munich — tentative ratée d'Hitler de prendre le pouvoir." },
    ],
    "11-09": [
        { year: 1799, cat: "France",    text: "Coup d'État du 18 Brumaire — Napoléon s'empare du pouvoir." },
        { year: 1918, cat: "Allemagne", text: "Proclamation de la République de Weimar — abdication du Kaiser." },
        { year: 1989, cat: "Politique", text: "Chute du mur de Berlin." },
    ],
    "11-10": [
        { year: 1444, cat: "Histoire",  text: "Bataille de Varna — victoire ottomane sur les Croisés." },
        { year: 1775, cat: "Histoire",  text: "Fondation du Corps des Marines des États-Unis." },
    ],
    "11-11": [
        { year: 1918, cat: "Guerre",    text: "Armistice de la Première Guerre mondiale — à la 11e heure du 11e jour du 11e mois." },
        { year: 1620, cat: "Histoire",  text: "Signature du Mayflower Compact — premier document gouvernemental américain." },
    ],
    "11-12": [
        { year: 1035, cat: "France",    text: "Mort de Cnut le Grand, roi d'Angleterre, de Danemark et de Norvège." },
        { year: 1954, cat: "Histoire",  text: "Fermeture d'Ellis Island — fin de l'immigration de masse aux USA." },
    ],
    "11-13": [
        { year: 1002, cat: "Histoire",  text: "Massacre de la Saint-Brice — Æthelred II fait tuer tous les Danois d'Angleterre." },
        { year: 2015, cat: "Tragédie",  text: "Attentats de Paris — 130 morts au Bataclan et sur les terrasses." },
    ],
    "11-14": [
        { year: 1770, cat: "Science",   text: "James Bruce découvre la source du Nil Bleu en Éthiopie." },
        { year: 1832, cat: "Transport", text: "Premier tramway hippomobile aux États-Unis, à New York." },
    ],
    "11-15": [
        { year: 1859, cat: "Culture",   text: "Charles Dickens commence la publication de «Grandes Espérances»." },
        { year: 1920, cat: "Politique", text: "Première assemblée de la Société des Nations à Genève." },
    ],
    "11-16": [
        { year: 1532, cat: "Histoire",  text: "Pizarro capture l'Inca Atahualpa à Cajamarca — début de la conquête du Pérou." },
        { year: 1945, cat: "Science",   text: "Fondation de l'UNESCO à Londres." },
    ],
    "11-17": [
        { year: 1558, cat: "Histoire",  text: "Élisabeth Ire monte sur le trône d'Angleterre." },
        { year: 1869, cat: "Transport", text: "Inauguration du canal de Suez." },
    ],
    "11-18": [
        { year: 1626, cat: "Culture",   text: "Consécration de la Basilique Saint-Pierre de Rome." },
        { year: 1978, cat: "Tragédie",  text: "Massacre de Jonestown — 918 membres du Temple du Peuple se suicident." },
    ],
    "11-19": [
        { year: 1863, cat: "Politique", text: "Lincoln prononce le discours de Gettysburg." },
        { year: 1969, cat: "Science",   text: "Apollo 12 — Conrad et Bean marchent sur la Lune." },
    ],
    "11-20": [
        { year: 1945, cat: "Histoire",  text: "Ouverture du procès de Nuremberg des criminels de guerre nazis." },
        { year: 1789, cat: "France",    text: "Le New Jersey ratifie la Constitution américaine." },
    ],
    "11-21": [
        { year: 1783, cat: "Science",   text: "Première ascension en ballon à air chaud par Pilâtre de Rozier à Paris." },
        { year: 1980, cat: "Culture",   text: "330 millions de téléspectateurs regardent «Qui a tiré sur J.R.?» dans Dallas." },
    ],
    "11-22": [
        { year: 1963, cat: "Politique", text: "Assassinat de JFK à Dallas, Texas." },
        { year: 1718, cat: "Histoire",  text: "Mort de Barbe-Noire le pirate au large de la Caroline du Nord." },
    ],
    "11-23": [
        { year: 912,  cat: "France",    text: "Naissance de Guillaume III duc d'Aquitaine, premier troubadour connu." },
        { year: 1963, cat: "Culture",   text: "Première diffusion de Doctor Who sur la BBC." },
    ],
    "11-24": [
        { year: 1859, cat: "Science",   text: "Darwin publie «De l'origine des espèces»." },
        { year: 1963, cat: "Histoire",  text: "Lee Harvey Oswald est assassiné par Jack Ruby, en direct à la télévision." },
    ],
    "11-25": [
        { year: 1783, cat: "Histoire",  text: "Les derniers soldats britanniques quittent New York après l'Indépendance." },
        { year: 1952, cat: "Culture",   text: "Création de La Souricière d'Agatha Christie à Londres — plus longue pièce de l'Histoire." },
    ],
    "11-26": [
        { year: 1789, cat: "Culture",   text: "Premier Thanksgiving proclamé par George Washington." },
        { year: 1922, cat: "Science",   text: "Carter et Carnarvon ouvrent le tombeau de Toutankhamon." },
    ],
    "11-27": [
        { year: 1095, cat: "Histoire",  text: "Appel à la Première Croisade par le pape Urbain II à Clermont." },
        { year: 1978, cat: "Politique", text: "Assassinat du maire de San Francisco Harvey Milk." },
    ],
    "11-28": [
        { year: 1520, cat: "Histoire",  text: "Magellan entre dans le Pacifique via le détroit qui porte son nom." },
        { year: 1943, cat: "Guerre",    text: "Conférence de Téhéran entre Churchill, Roosevelt et Staline." },
    ],
    "11-29": [
        { year: 1314, cat: "France",    text: "Mort de Philippe IV le Bel à Fontainebleau." },
        { year: 1947, cat: "Politique", text: "L'ONU vote le plan de partage de la Palestine." },
    ],
    "11-30": [
        { year: 1667, cat: "Culture",   text: "Naissance de Jonathan Swift à Dublin." },
        { year: 1874, cat: "Politique", text: "Naissance de Winston Churchill à Blenheim Palace." },
    ],
    "12-01": [
        { year: 1640, cat: "Histoire",  text: "Restauration de l'indépendance portugaise après 60 ans sous domination espagnole." },
        { year: 1955, cat: "Société",   text: "Rosa Parks refuse de céder sa place dans un bus à Montgomery — début du boycott." },
    ],
    "12-02": [
        { year: 1804, cat: "France",    text: "Sacre de Napoléon à Notre-Dame de Paris — il se couronne lui-même." },
        { year: 1942, cat: "Science",   text: "Fermi réalise la première réaction nucléaire en chaîne contrôlée à Chicago." },
    ],
    "12-03": [
        { year: 1967, cat: "Science",   text: "Première greffe du cœur par Christiaan Barnard à Cape Town." },
        { year: 1984, cat: "Tragédie",  text: "Catastrophe industrielle de Bhopal, Inde — 3 000 morts, 200 000 blessés." },
    ],
    "12-04": [
        { year: 771,  cat: "France",    text: "Charlemagne devient seul maître du Royaume franc." },
        { year: 1791, cat: "Culture",   text: "Mort de Wolfgang Amadeus Mozart à Vienne, à 35 ans." },
    ],
    "12-05": [
        { year: 1360, cat: "France",    text: "Émission du premier franc par le roi Jean le Bon." },
        { year: 1848, cat: "Histoire",  text: "La ruée vers l'or en Californie est officiellement annoncée par Polk." },
    ],
    "12-06": [
        { year: 1240, cat: "Histoire",  text: "Les Mongols saccagent Kiev." },
        { year: 1917, cat: "Tragédie",  text: "Explosion du Mont-Blanc dans le port d'Halifax — 2 000 morts, plus grande explosion pré-nucléaire." },
    ],
    "12-07": [
        { year: 43,   cat: "Histoire",  text: "Assassinat de Cicéron par ordre de Marc-Antoine." },
        { year: 1941, cat: "Guerre",    text: "Attaque japonaise sur Pearl Harbor — les États-Unis entrent en guerre." },
        { year: 1972, cat: "Science",   text: "Apollo 17 lance — la photo «Blue Marble» est prise." },
    ],
    "12-08": [
        { year: 1542, cat: "Histoire",  text: "Naissance de Marie Stuart, reine d'Écosse." },
        { year: 1980, cat: "Culture",   text: "Assassinat de John Lennon devant son appartement à New York." },
    ],
    "12-09": [
        { year: 1868, cat: "Transport", text: "Premier feu de signalisation routière installé devant le Parlement britannique." },
        { year: 1905, cat: "France",    text: "Loi de séparation des Églises et de l'État en France." },
    ],
    "12-10": [
        { year: 1901, cat: "Science",   text: "Remise des premiers prix Nobel à Stockholm et Oslo." },
        { year: 1898, cat: "Politique", text: "Traité de Paris — fin de la guerre hispano-américaine, fin de l'Empire espagnol." },
    ],
    "12-11": [
        { year: 1792, cat: "France",    text: "Procès de Louis XVI devant la Convention nationale." },
        { year: 1994, cat: "Guerre",    text: "Début du conflit en Tchétchénie." },
    ],
    "12-12": [
        { year: 1889, cat: "France",    text: "Congrès de Tours : naissance du parti socialiste français." },
        { year: 1901, cat: "Science",   text: "Marconi reçoit le premier signal radio transatlantique." },
    ],
    "12-13": [
        { year: 1577, cat: "Histoire",  text: "Francis Drake quitte Plymouth pour son tour du monde." },
        { year: 2007, cat: "Politique", text: "Signature du Traité de Lisbonne, refondant l'Union européenne." },
    ],
    "12-14": [
        { year: 1503, cat: "Culture",   text: "Naissance présumée de Nostradamus à Saint-Rémy-de-Provence." },
        { year: 1911, cat: "Science",   text: "Roald Amundsen atteint le pôle Sud en premier." },
        { year: 1799, cat: "Histoire",  text: "Mort de George Washington à Mount Vernon." },
    ],
    "12-15": [
        { year: 1791, cat: "Politique", text: "Adoption des dix premiers amendements de la Constitution américaine — Bill of Rights." },
        { year: 1890, cat: "Histoire",  text: "Mort de Sitting Bull lors de son arrestation." },
    ],
    "12-16": [
        { year: 1773, cat: "Histoire",  text: "Boston Tea Party — des colons jettent du thé dans le port." },
        { year: 1944, cat: "Guerre",    text: "Début de la bataille des Ardennes — dernière offensive allemande." },
        { year: 1770, cat: "Culture",   text: "Naissance de Ludwig van Beethoven à Bonn." },
    ],
    "12-17": [
        { year: 1903, cat: "Science",   text: "Les frères Wright réalisent leur premier vol motorisé à Kitty Hawk." },
        { year: 1830, cat: "Politique", text: "Mort de Simón Bolívar, libérateur de l'Amérique du Sud." },
    ],
    "12-18": [
        { year: 1865, cat: "Politique", text: "Ratification du 13e amendement — abolition de l'esclavage aux États-Unis." },
        { year: 1737, cat: "Culture",   text: "Naissance d'Antonio Stradivari selon certaines sources — lutherie légendaire." },
    ],
    "12-19": [
        { year: 1154, cat: "France",    text: "Henri II est couronné roi d'Angleterre, fondant l'Empire Plantagenêt." },
        { year: 1998, cat: "Politique", text: "Mise en accusation de Bill Clinton par la Chambre des représentants." },
    ],
    "12-20": [
        { year: 1803, cat: "France",    text: "Cession de la Louisiane aux États-Unis par Napoléon pour 15 millions de dollars." },
        { year: 1989, cat: "Politique", text: "Invasion du Panama par les États-Unis pour capturer Noriega." },
    ],
    "12-21": [
        { year: 1620, cat: "Histoire",  text: "Les Pèlerins débarquent à Plymouth, Massachusetts." },
        { year: 1898, cat: "Science",   text: "Marie et Pierre Curie découvrent le radium." },
        { year: 1988, cat: "Tragédie",  text: "Attentat de Lockerbie — Boeing 747 détruit, 270 morts." },
    ],
    "12-22": [
        { year: 1792, cat: "France",    text: "La Convention adopte le calendrier républicain — vendémiaire, brumaire..." },
        { year: 1989, cat: "Politique", text: "Chute de Ceaușescu en Roumanie." },
    ],
    "12-23": [
        { year: 1688, cat: "Histoire",  text: "Fuite de Jacques II d'Angleterre — début de la Glorieuse Révolution." },
        { year: 1888, cat: "Culture",   text: "Van Gogh se coupe l'oreille à Arles après une dispute avec Gauguin." },
    ],
    "12-24": [
        { year: 1800, cat: "France",    text: "Attentat de la Machine infernale contre Napoléon rue Saint-Nicaise." },
        { year: 1914, cat: "Guerre",    text: "Trêve de Noël dans les tranchées — soldats français et allemands fraternisent." },
        { year: 1968, cat: "Science",   text: "Apollo 8 orbite autour de la Lune — «Earthrise», photo emblématique." },
    ],
    "12-25": [
        { year: 800,  cat: "France",    text: "Couronnement de Charlemagne comme Empereur d'Occident à Rome." },
        { year: 1066, cat: "Histoire",  text: "Couronnement de Guillaume le Conquérant roi d'Angleterre." },
        { year: 1991, cat: "Politique", text: "Dissolution de l'URSS — Gorbatchev démissionne." },
    ],
    "12-26": [
        { year: 1898, cat: "Science",   text: "Marie Curie annonce la découverte du radium." },
        { year: 2004, cat: "Tragédie",  text: "Séisme et tsunami en Asie du Sud-Est — 230 000 morts." },
    ],
    "12-27": [
        { year: 1571, cat: "Science",   text: "Naissance de Johannes Kepler à Weil der Stadt." },
        { year: 1831, cat: "Science",   text: "Darwin embarque sur le Beagle pour son voyage qui changera la biologie." },
    ],
    "12-28": [
        { year: 1895, cat: "Culture",   text: "Première projection publique payante du cinématographe Lumière à Paris, Grand Café." },
        { year: 1908, cat: "Tragédie",  text: "Séisme de Messine en Sicile — plus de 75 000 morts." },
    ],
    "12-29": [
        { year: 1170, cat: "Histoire",  text: "Assassinat de Thomas Becket dans la cathédrale de Canterbury." },
        { year: 1890, cat: "Histoire",  text: "Massacre de Wounded Knee — 300 Sioux tués par l'armée américaine." },
    ],
    "12-30": [
        { year: 1460, cat: "Histoire",  text: "Bataille de Wakefield — mort du duc d'York." },
        { year: 1922, cat: "Politique", text: "Fondation officielle de l'Union des Républiques socialistes soviétiques (URSS)." },
    ],
    "12-31": [
        { year: 1600, cat: "Histoire",  text: "Fondation de la Compagnie des Indes orientales britannique." },
        { year: 1879, cat: "Science",   text: "Edison présente publiquement pour la première fois son système d'éclairage électrique." },
        { year: 1999, cat: "Politique", text: "Vladimir Poutine nommé président par intérim de Russie." },
    ],
};

function getEphemeridesForDay(date) {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return ephemerides[`${mm}-${dd}`] || [];
}

// Dictons simples (à compléter)

const dictons = {
    // ── JANVIER ──────────────────────────────────────────
    "01-01": "À la Saint-Basile, le froid est habile.",
    "01-02": "Premier janvier ensoleillé, fertile an bien engagé.",
    "01-03": "Neige de janvier enrichit le fermier.",
    "01-04": "À la Sainte-Geneviève, l'hiver se trêve ou se renouvelle.",
    "01-05": "Brouillard en janvier, gelée en mars.",
    "01-06": "L'Épiphanie au soleil annonce un bel été.",
    "01-07": "Givre en janvier, fleurs en mai.",
    "01-08": "Janvier venteux, année dangereuse.",
    "01-09": "Qui dort en janvier doit veiller en juillet.",
    "01-10": "Pluie de janvier, herbe en février.",
    "01-11": "Janvier sec et beau remplit cuves et tonneaux.",
    "01-12": "Froid de janvier, richesse pour le paysan.",
    "01-13": "Le givre de janvier fait la vigne gaie.",
    "01-14": "Glace en janvier, eau en mai.",
    "01-15": "Quand janvier est chaud, l'hiver n'est pas mort.",
    "01-16": "Soleil de janvier ne réchauffe pas le bûcheron.",
    "01-17": "À la Saint-Antoine, les jours croissent d'une heure bonne.",
    "01-18": "Neige en janvier, eau en abondance pour l'été.",
    "01-19": "Gel de janvier préserve le sol jusqu'au printemps.",
    "01-20": "À la Saint-Sébastien, le froid bat son plein.",
    "01-21": "Sainte-Agnès ensoleillée, vendanges assurées.",
    "01-22": "Pluie à la Saint-Vincent, l'été sera clément.",
    "01-23": "Gelée en janvier vaut fumier.",
    "01-24": "Janvier pluvieux, fermier soucieux.",
    "01-25": "Conversion de Paul : beau temps ce jour signe un bon blé.",
    "01-26": "Pluie en fin janvier annonce mars ensoleillé.",
    "01-27": "Le froid de janvier garde la santé tout l'an.",
    "01-28": "Janvier qui chante, février qui pleure.",
    "01-29": "Quand il tonne en janvier, l'année sera chère.",
    "01-30": "Brume en janvier, chaleur en juillet.",
    "01-31": "Dernier jour de janvier, sème l'espoir du printemps.",

    // ── FÉVRIER ──────────────────────────────────────────
    "02-01": "À la Chandeleur, l'hiver reprend vigueur.",
    "02-02": "Chandeleur éclairée, quarante jours de gelée.",
    "02-03": "À la Saint-Blaise, si le vent souffle, l'hiver s'apaise.",
    "02-04": "Pluie de février vaut du fumier.",
    "02-05": "Brouillard en février, gelée en mars.",
    "02-06": "Neige de février nourrit la prairie.",
    "02-07": "Si en février il fait jour clair, le berger craint pour son manger.",
    "02-08": "Quand il neige en février, le blé peut sommeiller.",
    "02-09": "Pluie de février vaut mieux que le blé.",
    "02-10": "Février trop doux, mars couvert de courroux.",
    "02-11": "À Notre-Dame de Lourdes, le froid parfois dure.",
    "02-12": "Soleil de février trompe le vieux et le marguillier.",
    "02-13": "Neige en février, herbe en mars.",
    "02-14": "Saint-Valentin, le printemps pointe son chemin.",
    "02-15": "En février, le jour croit de deux heures entières.",
    "02-16": "Si le coq chante en février, le froid reviendra.",
    "02-17": "Quand il tonne en février, les arbres gèlent en mars.",
    "02-18": "Bernadette sous la neige, été précoce que Dieu dirige.",
    "02-19": "Gelée de février préserve le jardin.",
    "02-20": "Beau temps en février, méfie-toi en mars.",
    "02-21": "Pluie de février remplit le grenier.",
    "02-22": "Février, le court mois — plus il est court, plus il est mauvais.",
    "02-23": "Si en février les grenouilles coassent, mars leur en fera voir.",
    "02-24": "Vents de février annoncent les fleurs d'avril.",
    "02-25": "Dégel en février, regels en mars.",
    "02-26": "Quand février est beau, l'été sera chaud.",
    "02-27": "Neige tardive de février, bonne farine en août.",
    "02-28": "Fin de février sans gel, printemps en retard.",
    "02-29": "L'année bissextile est toujours difficile.",

    // ── MARS ─────────────────────────────────────────────
    "03-01": "En mars, la bise fait la loi.",
    "03-02": "Mars qui pleure, avril qui rit.",
    "03-03": "La Saint-Guénolé en marée haute, beau mois de mars sans faute.",
    "03-04": "À la Saint-Casimir, le froid peut encore sévir.",
    "03-05": "Quand mars enragé entre, l'hiver n'est pas à rendre.",
    "03-06": "Giboulées de mars, bienvenues au printemps.",
    "03-07": "Le vent de mars sèche la terre et les fosses.",
    "03-08": "Pluie de mars, herbe et fleurs dans les champs.",
    "03-09": "Si le soleil brille à la mi-mars, il fait beau un bon temps.",
    "03-10": "Mars poudroie, avril larmoie, mai folâtre.",
    "03-11": "En mars, un jour de beau pour dix de pluie.",
    "03-12": "Quand mars commence en lion, il finit en mouton.",
    "03-13": "Si mars est chaud et sec, gare au gel d'avril.",
    "03-14": "Giboulée de mars, fleurs pour nos yeux.",
    "03-15": "Les larmes de mars enrichissent les prés.",
    "03-16": "Mars venteux, avril pluvieux, font le mai gracieux.",
    "03-17": "À la Saint-Patrick, les serpents sortent de leurs terriers.",
    "03-18": "Quand mars brouillasse, il faut bêcher à sa place.",
    "03-19": "Saint-Joseph fleuri, l'été est bien parti.",
    "03-20": "Quand l'hirondelle arrive, la rigueur de l'hiver part.",
    "03-21": "Premier jour du printemps : la terre se réveille.",
    "03-22": "Mars sec et beau remplit le tonneau.",
    "03-23": "La bourrasque de mars décrasse les arbres.",
    "03-24": "Si mars montre sa force, avril se couche.",
    "03-25": "À l'Annonciation, le coucou chante sa chanson.",
    "03-26": "Neige de mars, blé plein les greniers.",
    "03-27": "Quand l'alouette chante en mars, sème tes pois.",
    "03-28": "Soleil de mars n'est pas soleil d'été.",
    "03-29": "Si les bourgeons pointent en mars, l'été sera magnifique.",
    "03-30": "Brouillard à la fin mars, chaleur en été.",
    "03-31": "Mars finissant, printemps commençant.",

    // ── AVRIL ────────────────────────────────────────────
    "04-01": "Poisson d'avril, la nature rit.",
    "04-02": "Pluie d'avril, beauté pour mille.",
    "04-03": "Rosée d'avril vaut autant que fumée.",
    "04-04": "Avril fait les fleurs, mai les cueille.",
    "04-05": "Si le coucou chante avant les feuilles, été hâtif.",
    "04-06": "Quand il grêle en avril, le blé sera beau.",
    "04-07": "Pluie abondante en avril, greniers pleins en août.",
    "04-08": "En avril, ne te découvre pas d'un fil.",
    "04-09": "L'hirondelle en avril annonce l'été.",
    "04-10": "Fleur de cerisier sous la pluie d'avril, fruit certain.",
    "04-11": "Brouillard en avril, beau temps en mai.",
    "04-12": "Avril frais et gris remplit caves et logis.",
    "04-13": "Nuit froide d'avril ne tue pas le bourgeon.",
    "04-14": "Tonnerre d'avril, bonne récolte pour juillet.",
    "04-15": "Le soleil d'avril ne fait pas vieillir.",
    "04-16": "Vent du nord en avril, mai sera gentil.",
    "04-17": "Si la lune de Pâques est claire, les récoltes seront belles.",
    "04-18": "Quand fleurit l'aubépine, l'été sera fine.",
    "04-19": "Gel d'avril, vigne à péril.",
    "04-20": "Pluie d'avril et soleil de mai, tout va.",
    "04-21": "Neige d'avril engraisse les prés.",
    "04-22": "La caille chante en avril, l'été sera subtil.",
    "04-23": "Saint-Georges à cheval, la terre est prête au travail.",
    "04-24": "Brume d'avril, chaleur de juillet.",
    "04-25": "À la Saint-Marc, bel temps si tu sèmes.",
    "04-26": "Quand la vigne pleure en avril, bonne vendange.",
    "04-27": "Pluie froide d'avril, gel en mai possible.",
    "04-28": "Le rossignol chante : l'été approche à grands pas.",
    "04-29": "Vent d'est en avril, sécheresse en été.",
    "04-30": "Fin d'avril doux, mai sera comme un atout.",

    // ── MAI ──────────────────────────────────────────────
    "05-01": "Brin de muguet porté ce jour, bonheur pour toute l'année.",
    "05-02": "Rosée de mai vaut son pesant d'or.",
    "05-03": "Brouillard en mai, chaleur en juillet.",
    "05-04": "Qui sème par vent de mai récolte en abondance.",
    "05-05": "Un beau 5 mai annonce un été éclatant.",
    "05-06": "Pluie de mai à chaque pied de vigne en raie.",
    "05-07": "Mai pluvieux, grenier précieux.",
    "05-08": "Soleil du 8 mai, bel été bien engagé.",
    "05-09": "Quand la lune de mai est pleine, les blés seront en peine.",
    "05-10": "Gelée de mai, ruine du jardin.",
    "05-11": "Saints de glace, Mamert, Pancrace, ne passez pas sans menace.",
    "05-12": "Pancrace gèle encore la place.",
    "05-13": "Servais, troisième saint de glace, garde sa glace.",
    "05-14": "Après les saints de glace, il fait beau sans menace.",
    "05-15": "À la Saint-Isidore, le semeur peut encore semer.",
    "05-16": "Mai froid et pluvieux, été chaleureux.",
    "05-17": "Pascal fleuri, blé bien nourri.",
    "05-18": "Quand le lilas fleurit, l'été sourit.",
    "05-19": "Bonnes herbes de mai guérissent toute l'année.",
    "05-20": "Nuit de mai, rosée de fée.",
    "05-21": "Soleil de mai fait fleurir le rosier.",
    "05-22": "Pluie de Sainte-Rita, récolte qui durera.",
    "05-23": "Bourgeon de mai, raisin en septembre.",
    "05-24": "En mai, fais ce qu'il te plaît.",
    "05-25": "Sophie marque la fin des saints de glace, enfin.",
    "05-26": "Après la Saint-Sophie, plus de gel, tout rit.",
    "05-27": "Vent du midi en mai, chaleur sans remède.",
    "05-28": "Quand les orties poussent dru, l'été sera fourni.",
    "05-29": "Beau soir de mai, belle journée demain.",
    "05-30": "Sécheresse en mai, enfer en juillet.",
    "05-31": "Fin de mai en fleur, tout l'été en bonheur.",

    // ── JUIN ─────────────────────────────────────────────
    "06-01": "Juin orageux, grenier vide, cave creuse.",
    "06-02": "Pluie de juin gâte tout, soleil le sauve.",
    "06-03": "Quand juin est frais, juillet sera brûlant.",
    "06-04": "Brouillard de juin, beau soleil matin.",
    "06-05": "Vent du nord en juin, été tardif.",
    "06-06": "Tonnerre en juin, raisin malin.",
    "06-07": "Soleil voilé en juin, chaleur pour demain.",
    "06-08": "À la Saint-Médard, s'il pleut, quarante jours sans départ.",
    "06-09": "Pluie de la Saint-Médard dure quarante jours d'accord.",
    "06-10": "Beau temps le 10 juin, juillet sans nuage.",
    "06-11": "La Saint-Barnabé prend le soleil à grand pas.",
    "06-12": "Arc-en-ciel en juin, vendanges en chemin.",
    "06-13": "À la Saint-Antoine, le foin est en haleine.",
    "06-14": "Fenaison en juin, herbe et parfum.",
    "06-15": "Sécheresse de la mi-juin, été de feu.",
    "06-16": "Chaleur de juin signe l'été qui vient.",
    "06-17": "Quand le blé est en fleur en juin, la récolte est sûre.",
    "06-18": "Nuit courte de juin, le paysan n'a pas faim.",
    "06-19": "Rosée de juin nourrit la vigne.",
    "06-20": "Avant la Saint-Jean, ne te moque pas du temps.",
    "06-21": "Solstice d'été : le soleil atteint son sommet.",
    "06-22": "Après le solstice, les nuits reprennent leur place.",
    "06-23": "Feux de la Saint-Jean chassent les mauvais esprits.",
    "06-24": "Saint-Jean, pivot de l'été — le soleil reprend son trajet.",
    "06-25": "Après la Saint-Jean, l'été est à son zénith.",
    "06-26": "Pluie de fin juin, foin moisi.",
    "06-27": "Beau 27 juin, bel été jusqu'en août.",
    "06-28": "Quand la lavande fleurit, l'été tient ses promesses.",
    "06-29": "Pluie à la Saint-Pierre, vendanges singulières.",
    "06-30": "Fin de juin chaude, juillet torride.",

    // ── JUILLET ──────────────────────────────────────────
    "07-01": "Juillet sans orage, paille sans grain.",
    "07-02": "Tonnerre de juillet, récolte en danger.",
    "07-03": "Ciel rouge le soir, beau temps le lendemain.",
    "07-04": "Pluie de juillet sans éclairs, été mou.",
    "07-05": "Rosée matinale de juillet, chaleur le soir.",
    "07-06": "Grêle de juillet détruit en un instant.",
    "07-07": "Brouillard sur les collines en juillet, chaleur assurée.",
    "07-08": "Nuit étoilée de juillet, journée brillante.",
    "07-09": "Qui voit l'arc-en-ciel de juillet voit la pluie de la semaine.",
    "07-10": "Chaleur de juillet mûrit le blé.",
    "07-11": "Beau 11 juillet, belles nuits d'été.",
    "07-12": "Quand les fourmis s'affairent, la pluie n'est pas loin.",
    "07-13": "Orage de juillet refroidit pour trois jours.",
    "07-14": "Soleil du 14 juillet, été bien engagé.",
    "07-15": "Si saint Swithin pleure, quarante jours de pleurs.",
    "07-16": "Notre-Dame du Carmel, chaleur sous son manteau.",
    "07-17": "Juillet sec et chaud, vendanges bientôt.",
    "07-18": "Ciel en feu le soir de juillet, lendemain de chaleur.",
    "07-19": "Pluie de juillet ne dure que le temps d'un cri.",
    "07-20": "La canicule commence, la nature se tait.",
    "07-21": "Vent du sud en juillet, chaleur et sécheresse.",
    "07-22": "Marie-Madeleine pleure — si elle pleure, l'été s'achève.",
    "07-23": "Sainte-Brigitte en chaleur, août en labeur.",
    "07-24": "Nuit tiède en juillet, orages pour demain.",
    "07-25": "À la Saint-Jacques, la noix montre son écale.",
    "07-26": "Sainte-Anne ensoleillée, été tardif prolongé.",
    "07-27": "Quand la lune de juillet est ronde, les prés sont féconds.",
    "07-28": "Brume basse le matin de juillet, soleil à midi.",
    "07-29": "Sainte-Marthe rôtit, août sera brûlant.",
    "07-30": "Fin de juillet pluvieuse, août froid et paresseux.",
    "07-31": "Dernier jour de juillet : les hirondelles volent bas.",

    // ── AOÛT ─────────────────────────────────────────────
    "08-01": "Août, mois des moissons et des sueurs.",
    "08-02": "Pluie du 2 août, vendanges en retard.",
    "08-03": "Brouillard du matin en août, beau temps l'après-midi.",
    "08-04": "Curé d'Ars : si le soleil brille, la foi est forte.",
    "08-05": "Orages d'août appauvrissent le raisin.",
    "08-06": "Transfiguration ensoleillée, vendanges réussies.",
    "08-07": "Quand les moutons regardent le ciel, la pluie arrive.",
    "08-08": "Nuits fraîches d'août, automne hâtif.",
    "08-09": "Rosée abondante en août, automne doux.",
    "08-10": "À la Saint-Laurent, les étoiles filent en chantant.",
    "08-11": "Pluie à la Sainte-Claire, vendanges ordinaires.",
    "08-12": "Nuages en moutons d'août, beau temps partout.",
    "08-13": "Beau 13 août, belles vendanges à coup sûr.",
    "08-14": "La veille de l'Assomption, la vigne garde son sillon.",
    "08-15": "Assomption ensoleillée, vendanges bénies.",
    "08-16": "Si à la Saint-Armel il pleut, l'automne sera pluvieux.",
    "08-17": "Brume de la mi-août, brouillard de septembre.",
    "08-18": "Hélène en plein soleil, châtaignes en automne.",
    "08-19": "Vent du nord en août, hiver précoce.",
    "08-20": "À la Saint-Bernard, vendange de bonne part.",
    "08-21": "La noix mûrit avec le soleil d'août.",
    "08-22": "Pluie de fin août, vendanges en retard.",
    "08-23": "Rose de Lima en chaleur, automne en douceur.",
    "08-24": "À la Saint-Barthélemy, la noix est prête.",
    "08-25": "Saint-Louis au soleil, automne vermeil.",
    "08-26": "Les hirondelles se rassemblent : le départ est proche.",
    "08-27": "Sainte-Monique en pluie, septembre en grisaille.",
    "08-28": "Saint-Augustin pluvieux, automne copieux.",
    "08-29": "Décollation de Saint-Jean : les jours raccourcissent.",
    "08-30": "Nuits fraîches : la nature prépare sa retraite.",
    "08-31": "Dernier jour d'août : compte les étoiles filantes.",

    // ── SEPTEMBRE ────────────────────────────────────────
    "09-01": "Septembre chaud, vigne en or.",
    "09-02": "Pluie de septembre, vendanges en suspense.",
    "09-03": "Brouillard de septembre, givre d'octobre.",
    "09-04": "Vent du sud en septembre, automne tardif.",
    "09-05": "Belle journée de septembre vaut celle d'été.",
    "09-06": "Quand les araignées tissent en septembre, beau temps.",
    "09-07": "Rosée de septembre, vendanges en beauté.",
    "09-08": "Nativité de Marie : si beau temps, hiver doux.",
    "09-09": "Tonnerre en septembre, bonne vendange à se rendre.",
    "09-10": "Nuages rouges au coucher, beau temps le lendemain.",
    "09-11": "Brouillard au matin de septembre, soleil le soir.",
    "09-12": "Grillon qui chante fort en septembre, hiver tardif.",
    "09-13": "Feuille qui tombe tôt en septembre, hiver précoce.",
    "09-14": "Sainte-Croix ensoleillée, vendanges bien menées.",
    "09-15": "Mi-septembre : la vigne livre ses secrets.",
    "09-16": "Beau 16 septembre, bel octobre aussi.",
    "09-17": "Pluie après l'équinoxe, automne pluvieux.",
    "09-18": "Les hirondelles parties, l'été s'en va.",
    "09-19": "Automne précoce si les feuilles jaunissent tôt.",
    "09-20": "Quand le noyer perd ses feuilles tôt, hiver doux.",
    "09-21": "Équinoxe d'automne : la nuit reprend ses droits.",
    "09-22": "Après l'équinoxe, le vent change de cap.",
    "09-23": "Raisin vendangé à bonne heure, bon vin d'avenir.",
    "09-24": "Nuit claire de septembre, gelée d'octobre.",
    "09-25": "Les champignons d'automne poussent après la pluie.",
    "09-26": "Ciel laiteux en septembre, pluie dans la semaine.",
    "09-27": "Vendange bénie de Saint-Vincent, vin clément.",
    "09-28": "Brume sur les vignes, vendanges bien dignes.",
    "09-29": "À la Saint-Michel, règle tes comptes et tes tonneaux.",
    "09-30": "Fin septembre douce, octobre rousse.",

    // ── OCTOBRE ──────────────────────────────────────────
    "10-01": "Thérèse au soleil, bel automne vermeil.",
    "10-02": "Pluie d'octobre remplit les rivières.",
    "10-03": "Feuilles de chêne en octobre, hiver tardif.",
    "10-04": "François d'Assise : la nature chante ses louanges.",
    "10-05": "Gelée blanche en octobre, neige en novembre.",
    "10-06": "Vent du nord en octobre, hiver froid.",
    "10-07": "Arc-en-ciel d'automne, pluie jusqu'au soir.",
    "10-08": "Quand les noix sont nombreuses, l'hiver sera rude.",
    "10-09": "Brouillard de Denis, beau temps qui suit.",
    "10-10": "La Saint-Ghislain en beau temps, bel hiver tranquille.",
    "10-11": "Chaleur de la mi-octobre, été de la Saint-Martin proche.",
    "10-12": "Pluie fine d'octobre, bon blé pour l'hiver.",
    "10-13": "Araignée qui tisse en octobre, pas de gel avant un mois.",
    "10-14": "Soleil pâle d'octobre ne trompe pas.",
    "10-15": "Sainte-Thérèse-d'Ávila, dernier soleil avant la grisaille.",
    "10-16": "Edwige au beau temps, novembre sera clément.",
    "10-17": "Brume basse en octobre, givre en novembre.",
    "10-18": "Saint-Luc doux et beau, hiver sans beaucoup d'eau.",
    "10-19": "Vent de la Saint-René, feuilles arrachées.",
    "10-20": "Nuit étoilée d'octobre, gelée demain matin.",
    "10-21": "Quand les fourmis courent, la pluie n'est pas loin.",
    "10-22": "Rosée d'automne, beau temps encore.",
    "10-23": "Les baies rouges nombreuses : hiver rigoureux.",
    "10-24": "Ciel de plomb en octobre, pluie pour la semaine.",
    "10-25": "Les écureuils font des réserves : hiver long en vue.",
    "10-26": "Soleil d'or d'octobre, dernier souffle de l'été.",
    "10-27": "Feuilles collées au sol, pluie abondante à venir.",
    "10-28": "Simon et Jude : si vent, hiver venteux.",
    "10-29": "Chêne dégarni avant fin octobre, hiver hâtif.",
    "10-30": "Brouillard de fin octobre, gel en décembre.",
    "10-31": "La nuit de tous les saints, le vent parle plus fort.",

    // ── NOVEMBRE ─────────────────────────────────────────
    "11-01": "Toussaint ensoleillée, Noël sous la neige.",
    "11-02": "Défunts sous la brume, hiver gris qui s'assume.",
    "11-03": "Pluie de la Saint-Hubert, chasse à couvrir.",
    "11-04": "Vent de novembre, froid de décembre.",
    "11-05": "Si novembre est doux, décembre sera loup.",
    "11-06": "Brouillard de novembre, gelée de décembre.",
    "11-07": "Neige de novembre fond vite, celle de décembre reste.",
    "11-08": "Novembre pluvieux, printemps gracieux.",
    "11-09": "Brume du Théodore, hiver qui s'annonce encore.",
    "11-10": "Saint-Léon en beau temps, Noël sans tourment.",
    "11-11": "À la Saint-Martin, l'été revient un instant.",
    "11-12": "Été de la Saint-Martin dure trois jours et un grain.",
    "11-13": "Après la Saint-Martin, viennent les froids de saison.",
    "11-14": "Brouillard de novembre, soleil de décembre.",
    "11-15": "Saint-Albert en gelée, décembre bien glacé.",
    "11-16": "Vent du nord en novembre, hiver précoce et sévère.",
    "11-17": "Novembre pluvieux annonce mai fleurissant.",
    "11-18": "Premières glaces de novembre, dures jusqu'en avril.",
    "11-19": "Sainte-Élisabeth dans le froid, Noël blanc prêt pour toi.",
    "11-20": "Quand la buse crie haut, l'hiver sera rigoureux.",
    "11-21": "Neige avant la fin novembre, hiver long et tendre.",
    "11-22": "Sainte-Cécile musicienne, la bise joue sa rengaine.",
    "11-23": "Saint-Clément pluvieux, décembre nébuleux.",
    "11-24": "Givre de novembre, neige en décembre.",
    "11-25": "Sainte-Catherine : vent ce jour, hiver venteux.",
    "11-26": "Vent du sud fin novembre, hiver doux en vue.",
    "11-27": "Ciel rouge le soir, beau lendemain.",
    "11-28": "Froid de fin novembre, neige de Noël.",
    "11-29": "Saturnin sous la brume, décembre en assume.",
    "11-30": "Saint-André au froid sec, hiver bien net.",

    // ── DÉCEMBRE ─────────────────────────────────────────
    "12-01": "Décembre froid et clair, janvier l'est aussi.",
    "12-02": "Brouillard de décembre, dégel en janvier.",
    "12-03": "Vent de l'est en décembre, hiver long et tendre.",
    "12-04": "Sainte-Barbe au tonnerre, hiver doux, printemps sur terre.",
    "12-05": "Si décembre est doux, les mouches reviennent.",
    "12-06": "Saint-Nicolas en neige, hiver installé.",
    "12-07": "Ambroise sous la neige, Noël blanc qui se déploie.",
    "12-08": "Immaculée Conception : si neige, belle saison.",
    "12-09": "Gelée de décembre vaut fumier d'été.",
    "12-10": "Quand il neige début décembre, il neige à Noël.",
    "12-11": "Ciel étoilé en décembre, gel à venir.",
    "12-12": "Brouillard givrant de décembre, temps de rester au chaud.",
    "12-13": "Sainte-Lucie rallonge le jour d'un saut de puce.",
    "12-14": "Après la Sainte-Lucie, les jours croissent petit à petit.",
    "12-15": "Soleil de décembre pâlit mais redonnera force.",
    "12-16": "Tempête avant Noël, tempête après.",
    "12-17": "Quand décembre est chaud, janvier est froid.",
    "12-18": "Brume de décembre, clair de janvier.",
    "12-19": "Froid sec de la mi-décembre, beau temps à Noël.",
    "12-20": "Les plus longues nuits arrivent avant le solstice.",
    "12-21": "Solstice d'hiver : la nuit la plus longue, puis la lumière revient.",
    "12-22": "Après le solstice, le soleil reprend sa montée.",
    "12-23": "Ciel rouge la veille de Noël, hiver doux.",
    "12-24": "La nuit de Noël, même les animaux parlent.",
    "12-25": "Noël au balcon, Pâques aux tisons.",
    "12-26": "Noël sous la pluie, Pâques sous la neige.",
    "12-27": "Entre Noël et le jour de l'An, le temps donne son plan.",
    "12-28": "Les innocents pleurent : pluie pour la nouvelle année.",
    "12-29": "Brume de fin d'année, gel en janvier.",
    "12-30": "Dernier souffle de l'an, la nature fait son bilan.",
    "12-31": "Saint-Sylvestre : si doux, l'hiver n'est pas jaloux.",
};
const saints = {
    "01-01": "Marie, Mère de Dieu",
    "01-02": "Basile et Grégoire",
    "01-03": "Geneviève",
    "01-04": "Odilon",
    "01-05": "Édouard",
    "01-06": "Melchior, Gaspard et Balthazar",
    "01-07": "Raymond",
    "01-08": "Lucien",
    "01-09": "Alix",
    "01-10": "Guillaume",
    "01-11": "Paulin",
    "01-12": "Tatiana",
    "01-13": "Yvette",
    "01-14": "Nina",
    "01-15": "Rémi",
    "01-16": "Marcel",
    "01-17": "Antoine",
    "01-18": "Prisca",
    "01-19": "Marius",
    "01-20": "Sébastien",
    "01-21": "Agnès",
    "01-22": "Vincent",
    "01-23": "Barnard",
    "01-24": "François de Sales",
    "01-25": "Conversion de Paul",
    "01-26": "Timothée et Tite",
    "01-27": "Angèle",
    "01-28": "Thomas d'Aquin",
    "01-29": "Gildas",
    "01-30": "Martine",
    "01-31": "Marcelle",
    "02-01": "Ella",
    "02-02": "Présentation du Seigneur",
    "02-03": "Blaise",
    "02-04": "Véronique",
    "02-05": "Agathe",
    "02-06": "Gaston",
    "02-07": "Eugénie",
    "02-08": "Jacqueline",
    "02-09": "Apolline",
    "02-10": "Arnaud",
    "02-11": "N.-D. de Lourdes",
    "02-12": "Félix",
    "02-13": "Béatrice",
    "02-14": "Valentin",
    "02-15": "Claude",
    "02-16": "Julienne",
    "02-17": "Alexis",
    "02-18": "Bernadette",
    "02-19": "Gabin",
    "02-20": "Aimée",
    "02-21": "Damien",
    "02-22": "Isabelle",
    "02-23": "Lazare",
    "02-24": "Modeste",
    "02-25": "Roméo",
    "02-26": "Nestor",
    "02-27": "Honorine",
    "02-28": "Romain",
    "02-29": "Auguste",
    "03-01": "Aubin",
    "03-02": "Charles le Bon",
    "03-03": "Guénolé",
    "03-04": "Casimir",
    "03-05": "Olive",
    "03-06": "Colette",
    "03-07": "Félicité et Perpétue",
    "03-08": "Jean de Dieu",
    "03-09": "Françoise Romaine",
    "03-10": "Vivien",
    "03-11": "Rosine",
    "03-12": "Justine",
    "03-13": "Rodrigue",
    "03-14": "Mathilde",
    "03-15": "Louise",
    "03-16": "Bénédicte",
    "03-17": "Patrick",
    "03-18": "Cyrille de Jérusalem",
    "03-19": "Joseph",
    "03-20": "Herbert",
    "03-21": "Clémence",
    "03-22": "Léa",
    "03-23": "Victorien",
    "03-24": "Cécile",
    "03-25": "Annonciation",
    "03-26": "Larissa",
    "03-27": "Habib",
    "03-28": "Gontran",
    "03-29": "Gwladys",
    "03-30": "Amédée",
    "03-31": "Benjamin",
    "04-01": "Hugues",
    "04-02": "Sandrine",
    "04-03": "Richard",
    "04-04": "Isidore",
    "04-05": "Irène",
    "04-06": "Marcellin",
    "04-07": "Jean-Baptiste de la Salle",
    "04-08": "Julie",
    "04-09": "Gautier",
    "04-10": "Fulbert",
    "04-11": "Stanislas",
    "04-12": "Jules",
    "04-13": "Ida",
    "04-14": "Maxime",
    "04-15": "Paterne",
    "04-16": "Benoît-Joseph",
    "04-17": "Anicet",
    "04-18": "Parfait",
    "04-19": "Emma",
    "04-20": "Odette",
    "04-21": "Anselme",
    "04-22": "Alexandre",
    "04-23": "Georges",
    "04-24": "Fidèle",
    "04-25": "Marc",
    "04-26": "Alida",
    "04-27": "Zita",
    "04-28": "Valérie",
    "04-29": "Catherine de Sienne",
    "04-30": "Robert",
    "05-01": "Fête du Travail — Joseph artisan",
    "05-02": "Boris",
    "05-03": "Philippe et Jacques",
    "05-04": "Sylvain",
    "05-05": "Judith",
    "05-06": "Prudence",
    "05-07": "Gisèle",
    "05-08": "Victoire",
    "05-09": "Pacôme",
    "05-10": "Solange",
    "05-11": "Estelle",
    "05-12": "Achille",
    "05-13": "Rolande",
    "05-14": "Matthias",
    "05-15": "Denise",
    "05-16": "Honoré",
    "05-17": "Pascal",
    "05-18": "Éric",
    "05-19": "Yves",
    "05-20": "Bernardin",
    "05-21": "Constantin",
    "05-22": "Rita",
    "05-23": "Didier",
    "05-24": "Donatien",
    "05-25": "Sophie",
    "05-26": "Bérenger",
    "05-27": "Augustin de Cantorbéry",
    "05-28": "Germain",
    "05-29": "Aymar",
    "05-30": "Ferdinand",
    "05-31": "Visitation",
    "06-01": "Justin",
    "06-02": "Blandine",
    "06-03": "Kévin",
    "06-04": "Clotilde",
    "06-05": "Igor",
    "06-06": "Norbert",
    "06-07": "Gilbert",
    "06-08": "Médard",
    "06-09": "Diane",
    "06-10": "Landry",
    "06-11": "Barnabé",
    "06-12": "Guy",
    "06-13": "Antoine de Padoue",
    "06-14": "Élisée",
    "06-15": "Germaine",
    "06-16": "Jean-François Régis",
    "06-17": "Hervé",
    "06-18": "Léonce",
    "06-19": "Romuald",
    "06-20": "Silvère",
    "06-21": "Rodolphe",
    "06-22": "Alban",
    "06-23": "Audrey",
    "06-24": "Jean-Baptiste",
    "06-25": "Prosper",
    "06-26": "Anthelme",
    "06-27": "Fernand",
    "06-28": "Irénée",
    "06-29": "Pierre et Paul",
    "06-30": "Martial",
    "07-01": "Thierry",
    "07-02": "Martinien",
    "07-03": "Thomas",
    "07-04": "Florent",
    "07-05": "Antoine",
    "07-06": "Mariette",
    "07-07": "Raoul",
    "07-08": "Thibaut",
    "07-09": "Amandine",
    "07-10": "Ulrich",
    "07-11": "Benoît",
    "07-12": "Olivier",
    "07-13": "Henri et Joël",
    "07-14": "Fête Nationale",
    "07-15": "Donald",
    "07-16": "N.-D. du Carmel",
    "07-17": "Charlotte",
    "07-18": "Frédéric",
    "07-19": "Arsène",
    "07-20": "Marina",
    "07-21": "Victor",
    "07-22": "Marie-Madeleine",
    "07-23": "Brigitte",
    "07-24": "Christine",
    "07-25": "Jacques",
    "07-26": "Anne et Joachim",
    "07-27": "Nathalie",
    "07-28": "Samson",
    "07-29": "Marthe",
    "07-30": "Juliette",
    "07-31": "Ignace de Loyola",
    "08-01": "Alphonse",
    "08-02": "Julien Eymard",
    "08-03": "Lydie",
    "08-04": "Jean-Marie Vianney",
    "08-05": "Abel",
    "08-06": "Transfiguration",
    "08-07": "Gaétan",
    "08-08": "Dominique",
    "08-09": "Amour",
    "08-10": "Laurent",
    "08-11": "Claire",
    "08-12": "Clarisse",
    "08-13": "Hippolyte",
    "08-14": "Evrard",
    "08-15": "Assomption",
    "08-16": "Armel",
    "08-17": "Hyacinthe",
    "08-18": "Hélène",
    "08-19": "Jean-Eudes",
    "08-20": "Bernard",
    "08-21": "Christophe",
    "08-22": "Fabrice",
    "08-23": "Rose de Lima",
    "08-24": "Barthélemy",
    "08-25": "Louis",
    "08-26": "Natacha",
    "08-27": "Monique",
    "08-28": "Augustin",
    "08-29": "Sabine",
    "08-30": "Fiacre",
    "08-31": "Aristide",
    "09-01": "Gilles",
    "09-02": "Ingrid",
    "09-03": "Grégoire",
    "09-04": "Rosalie",
    "09-05": "Raïssa",
    "09-06": "Bertrand",
    "09-07": "Cloud",
    "09-08": "Nativité de Marie",
    "09-09": "Alain",
    "09-10": "Inès",
    "09-11": "Adelphe",
    "09-12": "Apollinaire",
    "09-13": "Aimé",
    "09-14": "La Sainte Croix",
    "09-15": "Roland",
    "09-16": "Edith",
    "09-17": "Renaud",
    "09-18": "Nadège",
    "09-19": "Émilie",
    "09-20": "Davy",
    "09-21": "Matthieu",
    "09-22": "Maurice",
    "09-23": "Constance",
    "09-24": "Thècle",
    "09-25": "Hermann",
    "09-26": "Côme et Damien",
    "09-27": "Vincentde Paul",
    "09-28": "Venceslas",
    "09-29": "Michel, Gabriel, Raphaël",
    "09-30": "Jérôme",
    "10-01": "Thérèse de l'Enfant Jésus",
    "10-02": "Anges gardiens",
    "10-03": "Gérard",
    "10-04": "François d'Assise",
    "10-05": "Fleur",
    "10-06": "Bruno",
    "10-07": "Serge",
    "10-08": "Pélagie",
    "10-09": "Denis",
    "10-10": "Ghislain",
    "10-11": "Firmin",
    "10-12": "Wilfrid",
    "10-13": "Géraud",
    "10-14": "Juste",
    "10-15": "Thérèse d'Ávila",
    "10-16": "Edwige",
    "10-17": "Ignace d'Antioche",
    "10-18": "Luc",
    "10-19": "René",
    "10-20": "Adeline",
    "10-21": "Céline",
    "10-22": "Élodie",
    "10-23": "Jean de Capistran",
    "10-24": "Florentin",
    "10-25": "Crépin",
    "10-26": "Dimitri",
    "10-27": "Émeline",
    "10-28": "Simon et Jude",
    "10-29": "Narcisse",
    "10-30": "Bienvenu",
    "10-31": "Quentin",
    "11-01": "Toussaint",
    "11-02": "Défunts",
    "11-03": "Hubert",
    "11-04": "Charles Borromée",
    "11-05": "Sylvie",
    "11-06": "Bertille",
    "11-07": "Carine",
    "11-08": "Geoffrey",
    "11-09": "Théodore",
    "11-10": "Léon",
    "11-11": "Martin",
    "11-12": "Christian",
    "11-13": "Brice",
    "11-14": "Sidoine",
    "11-15": "Albert",
    "11-16": "Marguerite d'Écosse",
    "11-17": "Élisabeth de Hongrie",
    "11-18": "Aude",
    "11-19": "Tanguy",
    "11-20": "Edmond",
    "11-21": "Présentation de Marie",
    "11-22": "Cécile",
    "11-23": "Clément",
    "11-24": "Flora",
    "11-25": "Catherine d'Alexandrie",
    "11-26": "Delphine",
    "11-27": "Sévrin",
    "11-28": "Jacques de la Marche",
    "11-29": "Saturnin",
    "11-30": "André",
    "12-01": "Florence",
    "12-02": "Viviane",
    "12-03": "François-Xavier",
    "12-04": "Barbara",
    "12-05": "Gérald",
    "12-06": "Nicolas",
    "12-07": "Ambroise",
    "12-08": "Immaculée Conception",
    "12-09": "Pierre Fourier",
    "12-10": "Romaric",
    "12-11": "Daniel",
    "12-12": "Jeanne de Chantal",
    "12-13": "Lucie",
    "12-14": "Odile",
    "12-15": "Ninon",
    "12-16": "Alice",
    "12-17": "Gaël",
    "12-18": "Gatien",
    "12-19": "Urbain",
    "12-20": "Abraham",
    "12-21": "Pierre Canisius",
    "12-22": "Françoise-Xavière",
    "12-23": "Armand",
    "12-24": "Adèle",
    "12-25": "Noël",
    "12-26": "Étienne",
    "12-27": "Jean",
    "12-28": "Innocents",
    "12-29": "David",
    "12-30": "Roger",
    "12-31": "Sylvestre",
};

function getSaintOfDay(date) {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return saints[`${mm}-${dd}`] || "—";
}

// ═══════════════════════════════════════════════════════
// CALENDRIER JARDINIER LUNAIRE (biodynamique, Maria Thun)
//
// Principe : la Lune traverse les 12 constellations du
// zodiaque en ~27,3 jours. Chaque constellation est
// associée à un élément, qui définit ce que la plante
// "préfère" ce jour-là.
//
// Racine  = Terre  (Taureau, Vierge, Capricorne)
// Fleur   = Air    (Gémeaux, Balance, Verseau)
// Feuille = Eau    (Cancer, Scorpion, Poissons)
// Fruit   = Feu    (Bélier, Lion, Sagittaire)
//
// La position de la Lune est calculée à partir de l'angle
// de phase et de la longitude écliptique — approximation
// suffisante pour un calendrier biodynamique.
// ═══════════════════════════════════════════════════════

const gardenConstellations = [
    { name: "Poissons",    type: "feuille", element: "Eau",  emoji: "🐟" },
    { name: "Bélier",      type: "fruit",   element: "Feu",  emoji: "🔥" },
    { name: "Taureau",     type: "racine",  element: "Terre",emoji: "🌱" },
    { name: "Gémeaux",     type: "fleur",   element: "Air",  emoji: "💨" },
    { name: "Cancer",      type: "feuille", element: "Eau",  emoji: "🌊" },
    { name: "Lion",        type: "fruit",   element: "Feu",  emoji: "🔥" },
    { name: "Vierge",      type: "racine",  element: "Terre",emoji: "🌿" },
    { name: "Balance",     type: "fleur",   element: "Air",  emoji: "🌸" },
    { name: "Scorpion",    type: "feuille", element: "Eau",  emoji: "🌿" },
    { name: "Sagittaire",  type: "fruit",   element: "Feu",  emoji: "🍎" },
    { name: "Capricorne",  type: "racine",  element: "Terre",emoji: "🥕" },
    { name: "Verseau",     type: "fleur",   element: "Air",  emoji: "🌼" },
];

const gardenAdvice = {
    racine: {
        label: "Jour Racine 🥕",
        class: "jour-racine",
        advice: "Idéal pour semer, planter ou récolter les légumes-racines : carottes, betteraves, pommes de terre, radis, navets.",
    },
    fleur: {
        label: "Jour Fleur 🌸",
        class: "jour-fleur",
        advice: "Parfait pour s'occuper des plantes à fleurs, cueillir des fleurs, planter des fleurs vivaces et tailler les rosiers.",
    },
    feuille: {
        label: "Jour Feuille 🌿",
        class: "jour-feuille",
        advice: "Favorable aux légumes-feuilles : laitues, épinards, choux, poireaux, persil. Bon pour arroser et traiter le feuillage.",
    },
    fruit: {
        label: "Jour Fruit 🍎",
        class: "jour-fruit",
        advice: "Excellent pour semer et récolter les légumes-fruits : tomates, concombres, courgettes, haricots, pois, céréales.",
    },
};

function getGardenData(date, moonPhaseAngle) {
    // Longitude écliptique approchée de la Lune (0-360°)
    const JD  = getJulianDay(date);
    const T   = (JD - 2451545.0) / 36525;
    const L0  = normalizeAngle(218.3164477 + 481267.88123421 * T);
    const Mm  = normalizeAngle(134.9633964 + 477198.8675055 * T);
    const D   = normalizeAngle(297.8501921 + 445267.1114034 * T);
    const Lsun = normalizeAngle(280.46646 + 36000.76983 * T +
                 (1.914602 - 0.004817 * T) * Math.sin(toRad(357.52911 + 35999.05029 * T)));

    const moonLon = normalizeAngle(
        L0
        + 6.289 * Math.sin(toRad(Mm))
        + 1.274 * Math.sin(toRad(2 * D - Mm))
        + 0.658 * Math.sin(toRad(2 * D))
    );

    // Quelle constellation ? (30° par constellation, en partant du Bélier à 0°)
    // Méridien vernal (0° Bélier) ≈ longitude solaire au printemps
    // On utilise une approximation constante calibrée
    const constellationIndex = Math.floor(((moonLon + 15) % 360) / 30);
    const constellation = gardenConstellations[constellationIndex % 12];

    // Tendance : lune montante ou descendante ?
    // Montante : la Lune monte dans le ciel (ascendante) de Capricorne à Cancer
    // Descendante : de Cancer à Capricorne
    const moonDecl = normalizeAngle(moonLon);
    const ascending = (moonDecl >= 270 || moonDecl < 90);

    const advice = gardenAdvice[constellation.type];

    return {
        dayType:   advice.label,
        dayClass:  advice.class,
        advice:    advice.advice,
        moonPos:   `${constellation.emoji} ${constellation.name} (${constellation.element})`,
        trend:     ascending
            ? "🌙↑ Lune montante — sève vers le haut, bonne récolte des parties aériennes"
            : "🌙↓ Lune descendante — sève vers les racines, planter et transplanter",
    };
}


// ═══════════════════════════════════════════════════════
// JOURS FÉRIÉS FRANÇAIS
// ═══════════════════════════════════════════════════════

function getJoursFeries(year) {
    // Calcul de Pâques (algorithme de Meeus/Jones/Butcher)
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day   = ((h + l - 7 * m + 114) % 31) + 1;
    const paques = new Date(year, month - 1, day);

    const addDays = (d, n) => {
        const r = new Date(d);
        r.setDate(r.getDate() + n);
        return r;
    };

    return [
        { date: new Date(year, 0, 1),   label: "Jour de l'An" },
        { date: addDays(paques, 1),      label: "Lundi de Pâques" },
        { date: new Date(year, 4, 1),   label: "Fête du Travail" },
        { date: new Date(year, 4, 8),   label: "Victoire 1945" },
        { date: addDays(paques, 39),     label: "Ascension" },
        { date: addDays(paques, 50),     label: "Lundi de Pentecôte" },
        { date: new Date(year, 6, 14),  label: "Fête Nationale" },
        { date: new Date(year, 7, 15),  label: "Assomption" },
        { date: new Date(year, 10, 1),  label: "Toussaint" },
        { date: new Date(year, 10, 11), label: "Armistice" },
        { date: new Date(year, 11, 25), label: "Noël" },
    ];
}

function isFerie(date) {
    const feries = getJoursFeries(date.getFullYear());
    return feries.find(f =>
        f.date.getDate()  === date.getDate() &&
        f.date.getMonth() === date.getMonth()
    );
}


// ═══════════════════════════════════════════════════════
// INITIALISATION
// ═══════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
    initCalendar();
    updateDayView(currentDate);
    document.getElementById("prev-month").addEventListener("click", () => changeMonth(-1));
    document.getElementById("next-month").addEventListener("click", () => changeMonth(1));
});


// ═══════════════════════════════════════════════════════
// CALENDRIER
// ═══════════════════════════════════════════════════════

function initCalendar() {
    renderCalendar(displayedYear, displayedMonth);
}

function changeMonth(delta) {
    displayedMonth += delta;
    if (displayedMonth < 0)  { displayedMonth = 11; displayedYear--; }
    if (displayedMonth > 11) { displayedMonth = 0;  displayedYear++; }
    renderCalendar(displayedYear, displayedMonth);
}

function renderCalendar(year, month) {
    const tbody = document.getElementById("calendar-body");
    tbody.innerHTML = "";

    const firstDay      = new Date(year, month, 1);
    const startWeekday  = (firstDay.getDay() + 6) % 7; // Lundi = 0
    const daysInMonth   = new Date(year, month + 1, 0).getDate();

    document.getElementById("calendar-title").textContent =
        firstDay.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

    let day = 1;
    for (let row = 0; row < 6; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < 7; col++) {
            const td = document.createElement("td");
            if ((row === 0 && col < startWeekday) || day > daysInMonth) {
                td.innerHTML = "";
            } else {
                const btn       = document.createElement("button");
                const thisDate  = new Date(year, month, day);
                const ferie     = isFerie(thisDate);

                btn.textContent = day;
                btn.title       = ferie ? ferie.label : "";

                if (isSameDate(thisDate, new Date())) btn.classList.add("today");
                if (isSameDate(thisDate, currentDate)) btn.classList.add("selected");
                if (ferie) btn.classList.add("ferie");

                btn.addEventListener("click", () => {
                    currentDate = thisDate;
                    updateDayView(currentDate);
                    document.querySelectorAll("#calendar-body button.selected")
                        .forEach(b => b.classList.remove("selected"));
                    btn.classList.add("selected");
                });
                td.appendChild(btn);
                day++;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        if (day > daysInMonth) break;
    }
}

function isSameDate(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth()    === d2.getMonth()    &&
           d1.getDate()     === d2.getDate();
}


// ═══════════════════════════════════════════════════════
// VUE DU JOUR
// ═══════════════════════════════════════════════════════

function updateDayView(date) {

    // ── Date & méta ──────────────────────────────────
    const dateStr = date.toLocaleDateString("fr-FR", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
    document.getElementById("date-display").textContent = capitalize(dateStr);

    const dow    = getDayOfYear(date);
    const week   = getWeekNumber(date);
    const season = getSeason(date);
    const ferie  = isFerie(date);

    let metaLine = `Semaine ${week} — Jour ${dow} de l'année — ${season}`;
    if (ferie) metaLine += ` — 🇫🇷 ${ferie.label}`;
    document.getElementById("meta-date").textContent = metaLine;

    // ── Soleil ────────────────────────────────────────
    const sun = getSunTimes(date, LAT, LON);
    document.getElementById("sunrise").textContent   = sun.sunrise;
    document.getElementById("sunset").textContent    = sun.sunset;
    document.getElementById("day-length").textContent = sun.dayLength;

    // ── Lune ─────────────────────────────────────────
    const moon = getMoonData(date);
    document.getElementById("moon-phase").textContent       = moon.phaseName;
    document.getElementById("moon-illumination").textContent = moon.illumination + " %";
    document.getElementById("moon-age").textContent         = moon.age + " j";

    updateMoonIcon(moon.illumination, moon.phaseName, moon.phaseAngle);

    const nextFull = getNextMoonPhase(date, 180);
    document.getElementById("next-full-moon").textContent =
        nextFull.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });

    // ── Jardinier ─────────────────────────────────────
    const garden = getGardenData(date, moon.phaseAngle);
    const dtElem = document.getElementById("garden-day-type");
    dtElem.textContent = garden.dayType;
    dtElem.className   = "val " + garden.dayClass;
    document.getElementById("garden-advice").textContent   = garden.advice;
    document.getElementById("garden-moon-pos").textContent = garden.moonPos;
    document.getElementById("garden-trend").textContent    = garden.trend;

    // ── Saint ─────────────────────────────────────────
    document.getElementById("saint").textContent = getSaintOfDay(date);

    // ── Dicton ────────────────────────────────────────
    document.getElementById("dicton").textContent = getDictonForDay(date);

    // ── Marées ────────────────────────────────────────
    renderTides(date);

    // ── Éphémérides ───────────────────────────────────
    renderEphemerides(date);
}

function renderEphemerides(date) {
    const list  = document.getElementById("ephemerides-list");
    const items = getEphemeridesForDay(date);

    if (!items.length) {
        list.innerHTML = `<p style="text-align:center; color:var(--ink-muted); padding:1rem; font-style:italic;">
            Aucune éphéméride enregistrée pour ce jour.
        </p>`;
        return;
    }

    list.innerHTML = items
        .sort((a, b) => a.year - b.year)
        .map(item => `
            <div class="ephem-item">
                <div class="ephem-year">${item.year < 0 ? Math.abs(item.year) + " av. J.-C." : item.year}</div>
                <div class="ephem-text">
                    <span class="ephem-cat">${item.cat}</span>
                    ${item.text}
                </div>
            </div>
        `).join("");
}


// ═══════════════════════════════════════════════════════
// UTILITAIRES
// ═══════════════════════════════════════════════════════

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date - start) / 86400000);
}

function getWeekNumber(date) {
    const tmp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = (tmp.getUTCDay() + 6) % 7;
    tmp.setUTCDate(tmp.getUTCDate() - dayNum + 3);
    const firstThursday = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 4));
    return 1 + Math.round((tmp - firstThursday) / (7 * 86400000));
}

function getSeason(date) {
    const m = date.getMonth() + 1, d = date.getDate();
    if ((m === 12 && d >= 21) || m < 3 || (m === 3 && d < 20)) return "Hiver ❄️";
    if ((m === 3 && d >= 20)  || m < 6 || (m === 6 && d < 21)) return "Printemps 🌱";
    if ((m === 6 && d >= 21)  || m < 9 || (m === 9 && d < 23)) return "Été ☀️";
    return "Automne 🍂";
}


// Alias pour compatibilité : getDictonForDay appelle le dictionnaire indexé MM-DD
function getDictonForDay(date) {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return dictons[mm + "-" + dd] || "Le temps qu'il fait est celui qu'il faut.";
}
// ------------------------------
// SOLEIL (NOAA)
// ------------------------------

function getSunTimes(date, lat, lon) {
    const JD = getJulianDay(date);
    const T = (JD - 2451545.0) / 36525;

    const L0 = (280.46646 + T * (36000.76983 + T * 0.0003032)) % 360;
    const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
    const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);

    const C = (1.914602 - T * (0.004817 + 0.000014 * T)) * Math.sin(toRad(M))
            + (0.019993 - 0.000101 * T) * Math.sin(toRad(2 * M))
            + 0.000289 * Math.sin(toRad(3 * M));

    const trueLong = L0 + C;
    const omega = 125.04 - 1934.136 * T;
    const lambda = trueLong - 0.00569 - 0.00478 * Math.sin(toRad(omega));

    const epsilon0 = 23 + (26 + ((21.448 - T * (46.815 + T * (0.00059 - T * 0.001813)))) / 60) / 60;
    const epsilon = epsilon0 + 0.00256 * Math.cos(toRad(omega));

    const decl = toDeg(Math.asin(Math.sin(toRad(epsilon)) * Math.sin(toRad(lambda))));
    const eqTime = getEquationOfTime(T, L0, e, M);
    const ha = getHourAngle(lat, decl);

    if (ha === null) return { sunrise: "—", sunset: "—", dayLength: "—" };

    const sunriseMinutes = 720 - 4 * (lon + ha) - eqTime;
    const sunsetMinutes  = 720 - 4 * (lon - ha) - eqTime;

    return {
        sunrise: minutesToHHMM(sunriseMinutes),
        sunset: minutesToHHMM(sunsetMinutes),
        dayLength: minutesToHHMM(sunsetMinutes - sunriseMinutes, true)
    };
}

function getEquationOfTime(T, L0, e, M) {
    const y = Math.tan(toRad((23.439 - 0.00000036 * T) / 2));
    const y2 = y * y;

    return 4 * toDeg(
        y2 * Math.sin(2 * toRad(L0))
        - 2 * e * Math.sin(toRad(M))
        + 4 * e * y2 * Math.sin(toRad(M)) * Math.cos(2 * toRad(L0))
        - 0.5 * y2 * y2 * Math.sin(4 * toRad(L0))
        - 1.25 * e * e * Math.sin(2 * toRad(M))
    );
}

function getHourAngle(lat, decl) {
    const cosH = (Math.cos(toRad(90.833)) - Math.sin(toRad(lat)) * Math.sin(toRad(decl)))
               / (Math.cos(toRad(lat)) * Math.cos(toRad(decl)));

    if (cosH > 1 || cosH < -1) return null;
    return toDeg(Math.acos(cosH));
}

// ------------------------------
// LUNE (Meeus simplifié)
// ------------------------------

function getMoonData(date) {
    const JD = getJulianDay(date);
    const T = (JD - 2451545.0) / 36525;

    const L0 = normalizeAngle(218.3164477 + 481267.88123421 * T);
    const Mmoon = normalizeAngle(134.9633964 + 477198.8675055 * T);
    const Msun = normalizeAngle(357.5291092 + 35999.0502909 * T);
    const F = normalizeAngle(93.2720950 + 483202.0175233 * T);
    const D = normalizeAngle(297.8501921 + 445267.1114034 * T);

    const lon = L0
        + 6.289 * Math.sin(toRad(Mmoon))
        + 1.274 * Math.sin(toRad(2 * D - Mmoon))
        + 0.658 * Math.sin(toRad(2 * D))
        - 0.186 * Math.sin(toRad(Msun));

    const Lsun = getSunEclipticLongitude(T);
    const phaseAngle = normalizeAngle(lon - Lsun);

    const illumination = Math.round((1 - Math.cos(toRad(phaseAngle))) * 50 * 100) / 100;
    const age = Math.round((29.53058867 * phaseAngle / 360) * 10) / 10;

    return {
        age,
        illumination,
        phaseAngle: Math.round(phaseAngle * 10) / 10,
        phaseName: getMoonPhaseName(phaseAngle)
    };
}

function getSunEclipticLongitude(T) {
    const L0 = 280.46646 + 36000.76983 * T;
    const M = 357.52911 + 35999.05029 * T;
    const C = (1.914602 - 0.004817 * T) * Math.sin(toRad(M))
            + 0.019993 * Math.sin(toRad(2 * M));
    return normalizeAngle(L0 + C);
}

function getMoonPhaseName(a) {
    if (a < 22.5 || a >= 337.5) return "Nouvelle lune";
    if (a < 67.5) return "Premier croissant";
    if (a < 112.5) return "Premier quartier";
    if (a < 157.5) return "Gibbeuse croissante";
    if (a < 202.5) return "Pleine lune";
    if (a < 247.5) return "Gibbeuse décroissante";
    if (a < 292.5) return "Dernier quartier";
    return "Dernier croissant";
}

// ------------------------------
// PROCHAINE PLEINE LUNE
// ------------------------------

function getNextMoonPhase(date, targetPhase) {
    const synodicMonth = 29.53058867;
    const JD = getJulianDay(date);
    let k = Math.floor((JD - 2451550.1) / synodicMonth);

    while (true) {
        const phaseJD = meanPhase(k, targetPhase);
        if (phaseJD > JD) return julianToDate(phaseJD);
        k++;
    }
}

function meanPhase(k, phaseAngle) {
    const T = k / 1236.85;
    let JD = 2451550.09765 + 29.530588853 * k;

    if (phaseAngle === 0) JD -= 0.40720;
    else JD += 0.40614;

    return JD;
}

function julianToDate(JD) {
    return new Date((JD - 2440587.5) * 86400000);
}

// ------------------------------
// ICÔNE DE LUNE (canvas)
// ------------------------------
//
// Principe astronomique :
//   phaseAngle  0°  = Nouvelle lune  (face sombre vers nous)
//   phaseAngle 90°  = Premier quartier (moitié droite éclairée)
//   phaseAngle 180° = Pleine lune    (face entièrement éclairée)
//   phaseAngle 270° = Dernier quartier (moitié gauche éclairée)
//
// On dessine sur un canvas circulaire :
//   1. Fond sombre = face non éclairée
//   2. Un grand demi-cercle éclairé (côté droit 0→180°, gauche 180→360°)
//   3. Une ellipse centrale dont l'aplatissement et l'orientation
//      traduisent la largeur du croissant / gibbosité.

function updateMoonIcon(illumination, phaseName, phaseAngle) {
    const canvas = document.getElementById("moon-icon");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R  = Math.min(cx, cy) - 2;

    ctx.clearRect(0, 0, W, H);

    // --- 1. Cercle de clipping ---
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // --- 2. Fond sombre (face non éclairée) ---
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, W, H);

    // --- 3. Déterminer côté éclairé et forme du terminateur ---
    // Phase croissante (0→180°) : côté DROIT éclairé
    // Phase décroissante (180→360°) : côté GAUCHE éclairé
    const waxing = phaseAngle < 180;

    // Le terminateur est une ellipse dont l'axe X va de +R (pleine)
    // à -R (nouvelle) en passant par 0 (quartier).
    // cos(phaseAngle) donne exactement cette valeur :
    //   0°  → cos=+1  → ellipse à droite aplatit le croissant côté éclairé
    //   90° → cos=0   → demi-cercle pur = quartier
    //   180°→ cos=-1  → pleine lune (terminateur sorti du disque)
    const terminatorX = Math.cos(toRad(phaseAngle)); // de +1 à -1

    // --- 4. Dessin de la face éclairée ---
    // On dessine un demi-cercle éclairé + une ellipse pour le terminateur.
    // La face éclairée occupe la moitié droite (waxing) ou gauche (waning).

    const lightColor  = "#f0e68c";
    const glowColor   = "#fffacd";

    // Chemin = demi-cercle éclairé + ellipse terminateur
    // On construit le chemin en deux arcs pour remplir la zone illuminée.

    ctx.beginPath();

    if (waxing) {
        // Demi-cercle DROIT éclairé : de -π/2 à +π/2 (côté droit)
        ctx.arc(cx, cy, R, -Math.PI / 2, Math.PI / 2, false);

        // Terminateur = ellipse allant de bas (cy+R) à haut (cy-R)
        // largeur = terminatorX * R (négatif = terminateur à gauche du centre = croissant fin)
        // Si terminatorX > 0 : gibbeuse → le terminateur recule vers la gauche
        // Si terminatorX < 0 : croissant → le terminateur pousse vers la droite
        const tx = cx + terminatorX * R;
        ctx.bezierCurveTo(
            tx, cy + R,   // point bas
            tx, cy - R,   // point haut
            cx, cy - R    // rejoint le haut du demi-cercle
        );
    } else {
        // Demi-cercle GAUCHE éclairé : de π/2 à 3π/2 (côté gauche)
        ctx.arc(cx, cy, R, Math.PI / 2, Math.PI * 1.5, false);

        const tx = cx + terminatorX * R; // terminatorX est négatif donc tx < cx
        ctx.bezierCurveTo(
            tx, cy - R,
            tx, cy + R,
            cx, cy + R
        );
    }

    ctx.closePath();

    // Remplissage lumineux avec dégradé
    const grad = ctx.createRadialGradient(cx - R * 0.2, cy - R * 0.2, 0, cx, cy, R);
    grad.addColorStop(0, glowColor);
    grad.addColorStop(0.6, lightColor);
    grad.addColorStop(1, "#c8b45a");
    ctx.fillStyle = grad;
    ctx.fill();

    // --- 5. Texture de surface (cratères subtils) ---
    ctx.globalAlpha = 0.07;
    ctx.fillStyle = "#000";
    [[cx - R*0.25, cy - R*0.1, R*0.12],
     [cx + R*0.15, cy + R*0.2, R*0.09],
     [cx - R*0.1,  cy + R*0.3, R*0.07]].forEach(([x, y, r]) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    // --- 6. Reflet doux sur le bord ---
    const rim = ctx.createLinearGradient(cx - R, cy, cx + R, cy);
    rim.addColorStop(0,   "rgba(255,255,255,0.0)");
    rim.addColorStop(0.4, "rgba(255,255,255,0.0)");
    rim.addColorStop(0.85,"rgba(255,255,255,0.08)");
    rim.addColorStop(1,   "rgba(255,255,255,0.0)");
    ctx.fillStyle = rim;
    ctx.fillRect(0, 0, W, H);

    ctx.restore();

    // --- 7. Bordure ---
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 1;
    ctx.stroke();
}

// ------------------------------
// MATHS
// ------------------------------

function getJulianDay(date) { return (date / 86400000) + 2440587.5; }
function toRad(d) { return d * Math.PI / 180; }
function toDeg(r) { return r * 180 / Math.PI; }
function normalizeAngle(a) { a = a % 360; return a < 0 ? a + 360 : a; }

function minutesToHHMM(mins, withH = false) {
    const m = Math.round(mins);
    const h = Math.floor(m / 60);
    const mm = Math.abs(m % 60).toString().padStart(2, "0");
    return withH ? `${h}h${mm}` : `${h}:${mm}`;
}

// ═══════════════════════════════════════════════════════
// MARÉES BRETONNES — Calcul harmonique local (sans API)
//
// Méthode : superposition des composantes harmoniques
// tidales principales, calibrées sur les données SHOM
// pour 4 ports bretons de référence.
//
// Composantes utilisées :
//   M2  — semi-diurne principale lunaire    (12h25)
//   S2  — semi-diurne principale solaire    (12h00)
//   N2  — semi-diurne elliptique lunaire    (12h39)
//   K2  — semi-diurne luni-solaire          (11h58)
//   K1  — diurne luni-solaire               (23h56)
//   O1  — diurne principale lunaire         (25h49)
//   P1  — diurne principale solaire         (24h04)
//   Q1  — diurne elliptique lunaire         (26h52)
//
// Amplitudes (en mètres) et phases (en degrés)
// issues des annuaires SHOM pour chaque port.
// ═══════════════════════════════════════════════════════

const TIDAL_PORTS = {
    "Brest": {
        label: "Brest",
        lat: 48.383, lon: -4.495,
        // [amplitude m, phase °]
        M2: [2.345, 118.5],
        S2: [0.770, 156.2],
        N2: [0.462, 98.3],
        K2: [0.211, 157.8],
        K1: [0.095, 205.4],
        O1: [0.070, 181.2],
        P1: [0.031, 202.5],
        Q1: [0.014, 160.3],
        ZO: 3.80,  // niveau moyen au-dessus du zéro hydrographique (m)
    },
    "Saint-Malo": {
        label: "Saint-Malo",
        lat: 48.649, lon: -2.026,
        M2: [3.720, 102.4],
        S2: [1.280, 139.6],
        N2: [0.735, 82.1],
        K2: [0.350, 141.2],
        K1: [0.110, 198.7],
        O1: [0.085, 175.3],
        P1: [0.036, 196.0],
        Q1: [0.018, 153.8],
        ZO: 6.20,
    },
    "Quiberon": {
        label: "Quiberon",
        lat: 47.484, lon: -3.115,
        M2: [1.920, 126.3],
        S2: [0.625, 163.4],
        N2: [0.378, 106.2],
        K2: [0.172, 165.0],
        K1: [0.085, 209.1],
        O1: [0.062, 184.5],
        P1: [0.028, 206.3],
        Q1: [0.012, 163.2],
        ZO: 3.05,
    },
    "Lorient": {
        label: "Lorient",
        lat: 47.750, lon: -3.367,
        M2: [1.970, 124.8],
        S2: [0.642, 161.7],
        N2: [0.388, 104.7],
        K2: [0.176, 163.5],
        K1: [0.087, 207.8],
        O1: [0.064, 183.1],
        P1: [0.029, 204.9],
        Q1: [0.013, 162.0],
        ZO: 3.10,
    },
};

// Port actif (modifiable via le sélecteur)
let activePort = "Brest";

// Périodes harmoniques en secondes
const TIDAL_PERIODS = {
    M2: 44712.0,
    S2: 43200.0,
    N2: 45570.0,
    K2: 43082.0,
    K1: 86164.0,
    O1: 92950.0,
    P1: 86637.0,
    Q1: 96726.0,
};

// Fréquences angulaires en rad/s
const TIDAL_OMEGA = {};
for (const [key, period] of Object.entries(TIDAL_PERIODS)) {
    TIDAL_OMEGA[key] = (2 * Math.PI) / period;
}

/**
 * Calcule la hauteur d'eau (m) à un instant t (timestamp Unix en s)
 * pour le port donné, par superposition harmonique.
 */
function tidalHeight(port, tUnix) {
    const p = TIDAL_PORTS[port];
    let h = p.ZO;
    for (const comp of ["M2","S2","N2","K2","K1","O1","P1","Q1"]) {
        const [amp, phaseDeg] = p[comp];
        const phase = phaseDeg * Math.PI / 180;
        h += amp * Math.cos(TIDAL_OMEGA[comp] * tUnix - phase);
    }
    return h;
}

/**
 * Trouve les extrema (pleine mer / basse mer) sur 24h
 * à partir de minuit du jour donné.
 * Résolution : 1 minute, puis affinement par dichotomie.
 */
function getTidesForDay(port, date) {
    const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    const t0 = midnight.getTime() / 1000;
    const STEP = 60;       // 1 minute en secondes
    const DURATION = 86400; // 24h

    // 1. Calcul de la hauteur chaque minute
    const samples = [];
    for (let dt = 0; dt <= DURATION; dt += STEP) {
        samples.push({ dt, h: tidalHeight(port, t0 + dt) });
    }

    // 2. Détection des extrema (changement de sens de la dérivée)
    const extrema = [];
    for (let i = 1; i < samples.length - 1; i++) {
        const prev = samples[i - 1].h;
        const curr = samples[i].h;
        const next = samples[i + 1].h;

        const isMax = curr >= prev && curr >= next;
        const isMin = curr <= prev && curr <= next;

        if (isMax || isMin) {
            // Affinage par recherche du vrai extremum dans la minute
            let tExact = t0 + samples[i].dt;
            let hExact = curr;

            for (let frac = -60; frac <= 60; frac += 5) {
                const hTest = tidalHeight(port, tExact + frac);
                if ((isMax && hTest > hExact) || (isMin && hTest < hExact)) {
                    hExact = hTest;
                    tExact = tExact + frac;
                }
            }

            const eventDate = new Date(tExact * 1000);
            extrema.push({
                type: isMax ? "PM" : "BM",   // Pleine Mer / Basse Mer
                time: eventDate,
                height: Math.round(hExact * 100) / 100,
            });
        }
    }

    // Dédupliquer les extrema trop proches (< 30 min)
    const filtered = [];
    for (const e of extrema) {
        if (!filtered.length || (e.time - filtered[filtered.length-1].time) > 1800000) {
            filtered.push(e);
        }
    }

    return filtered;
}

/**
 * Coefficient de marée (0–120+) à partir de la phase lunaire.
 * Les grandes marées (coefficient > 95) ont lieu aux nouvelles
 * et pleines lunes ; les mortes-eaux (< 45) aux quartiers.
 *
 * Formule empirique basée sur la composante M2+S2 :
 * coeff ≈ 100 × (M2 + S2×cos(2×phaseAngle)) / M2
 */
function tidalCoefficient(port, phaseAngle) {
    const p    = TIDAL_PORTS[port];
    const M2   = p.M2[0];
    const S2   = p.S2[0];
    const rad  = phaseAngle * Math.PI / 180;
    // Amplitude de la marée du moment
    const amp  = M2 + S2 * Math.cos(2 * rad);
    // Normalisée sur l'amplitude maxi (PM + S2 en phase)
    const max  = M2 + S2;
    const coeff = Math.round((amp / max) * 120);
    return Math.max(20, Math.min(120, coeff));
}

function coeffLabel(c) {
    if (c >= 100) return { text: "Très grande marée", color: "#8b3a2a" };
    if (c >= 80)  return { text: "Grande marée",       color: "#9a5c20" };
    if (c >= 60)  return { text: "Marée moyenne",      color: "#4a6741" };
    if (c >= 40)  return { text: "Morte-eau",          color: "#3a6b8a" };
    return              { text: "Très petite marée",   color: "#5a5a8a" };
}

function formatTideTime(date) {
    return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

/**
 * Rendu HTML du bloc marées
 */
function renderTides(date) {
    const container = document.getElementById("tides-block");
    if (!container) return;

    const moon   = getMoonData(date);
    const coeff  = tidalCoefficient(activePort, moon.phaseAngle);
    const cLabel = coeffLabel(coeff);
    const tides  = getTidesForDay(activePort, date);

    // Hauteur actuelle (si le jour affiché est aujourd'hui)
    const isToday = isSameDate(date, new Date());
    const nowUnix = Date.now() / 1000;
    const currentH = isToday
        ? Math.round(tidalHeight(activePort, nowUnix) * 100) / 100
        : null;

    // Prochaine marée (si aujourd'hui)
    let nextTide = null;
    if (isToday) {
        nextTide = tides.find(t => t.time > new Date());
    }

    // Sélecteur de port
    const portOptions = Object.entries(TIDAL_PORTS)
        .map(([key, p]) =>
            `<option value="${key}" ${key === activePort ? "selected" : ""}>${p.label}</option>`
        ).join("");

    // Tableau des marées du jour
    const tidesRows = tides.map(t => `
        <div class="tide-row ${t.type === 'PM' ? 'tide-pm' : 'tide-bm'}">
            <span class="tide-type">${t.type === 'PM' ? '▲ Pleine Mer' : '▽ Basse Mer'}</span>
            <span class="tide-time">${formatTideTime(t.time)}</span>
            <span class="tide-height">${t.height.toFixed(2)} m</span>
        </div>
    `).join("") || `<p class="no-tide">Données indisponibles pour ce jour.</p>`;

    // Jauge de hauteur actuelle
    let gaugeHTML = "";
    if (currentH !== null) {
        const port    = TIDAL_PORTS[activePort];
        const maxH    = port.ZO + port.M2[0] + port.S2[0] + port.N2[0];
        const pct     = Math.max(0, Math.min(100, (currentH / maxH) * 100));
        const rising  = isRisingTide(activePort, nowUnix);
        gaugeHTML = `
            <div class="tide-now">
                <div class="tide-now-label">
                    Niveau actuel : <strong>${currentH.toFixed(2)} m</strong>
                    <span class="tide-arrow">${rising ? "↑ montante" : "↓ descendante"}</span>
                </div>
                <div class="tide-gauge">
                    <div class="tide-gauge-fill" style="width:${pct}%"></div>
                    <div class="tide-gauge-label">${Math.round(pct)}%</div>
                </div>
                ${nextTide ? `
                <div class="tide-next">
                    Prochaine : <strong>${nextTide.type === 'PM' ? '▲ Pleine Mer' : '▽ Basse Mer'}</strong>
                    à <strong>${formatTideTime(nextTide.time)}</strong>
                    (${nextTide.height.toFixed(2)} m)
                </div>` : ""}
            </div>
        `;
    }

    container.innerHTML = `
        <div class="tides-header">
            <div class="tides-port-select">
                <label for="port-select">⚓ Port :</label>
                <select id="port-select">${portOptions}</select>
            </div>
            <div class="tide-coeff" style="color:${cLabel.color}">
                <span class="coeff-number">${coeff}</span>
                <span class="coeff-label">${cLabel.text}</span>
            </div>
        </div>
        ${gaugeHTML}
        <div class="tides-table">
            ${tidesRows}
        </div>
        <p class="tides-source">Calcul harmonique SHOM · Composantes M2 S2 N2 K2 K1 O1 P1 Q1</p>
    `;

    // Écouter le changement de port
    document.getElementById("port-select").addEventListener("change", e => {
        activePort = e.target.value;
        renderTides(date);
    });
}

/**
 * Détermine si la marée monte ou descend à l'instant t
 */
function isRisingTide(port, tUnix) {
    const h1 = tidalHeight(port, tUnix - 300);
    const h2 = tidalHeight(port, tUnix + 300);
    return h2 > h1;
}