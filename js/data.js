/**
 * Centralized Data Store for Menorca Hivern
 * =========================================
 * Conté tota la informació de les targetes, incloent títols, descripcions,
 * contingut complet per al modal, fonts, i imatges amb els seus crèdits.
 */

window.cardData = {
    // --- CULTURA - Prehistòria ---
    "naveta-tudons": {
        title: "Naveta des Tudons (Ciutadella)",
        description: "Monument més emblemàtic. Construcció funerària en forma de nau invertida.",
        fullContent: `<p>La <strong>Naveta des Tudons</strong> és el monument prehistòric més famós de Menorca i un dels més importants d'Europa. Es tracta d'una construcció funerària col·lectiva que va estar en ús entre el 1200 i el 750 aC.</p><p>La seva forma recorda a una nau (barca) invertida. Durant les excavacions dels anys 50 es van trobar les restes d'almenys 100 individus.</p>`,
        image: "https://www.menorca.es/documents/Imatges/8422img4.JPG",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Naveta_des_Tudons" },
            { name: "menorca.es", url: "https://www.menorca.es/es/Naveta_des_Tudons/8422" }
        ]
    },
    "poblat-son-catlar": {
        title: "Poblat de Son Catlar (Ciutadella)",
        description: "L'assentament talaiòtic més gran (3,75 ha) amb muralla conservada.",
        fullContent: `<p><strong>Son Catlar</strong> destaca per ser l'únic poblat talaiòtic de Menorca que conserva pràcticament intacta la seva muralla ciclòpia original, amb un perímetre de gairebé un quilòmetre.</p>`,
        image: "https://i0.wp.com/www.balearesantigua.com/wp-content/uploads/2019/12/IMG_2007-son-catlar-taula-scaled.jpg?fit=1200%2C764&ssl=1",
        imageAuthor: "Baleares Antigua",
        sources: [
            { name: "descobreixmenorca.com", url: "https://www.descobreixmenorca.com/es/cultura-talayotica/son-catlar/" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Poblado_de_Son_Catlar" }
        ]
    },
    "torre-en-galmes": {
        title: "Torre d'en Galmés (Alaior)",
        description: "Ciutat prehistòrica sobre un turó. Conserva tres talaiots i sales hipòstiles.",
        fullContent: `<p>La <strong>Torre d'en Galmés</strong> va ser una autèntica ciutat prehistòrica, possiblement la capital de l'illa. Situada dalt d'un turó, controlava gran part de la costa sud.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_torregalmes_900.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Poblado_talayotico_de_Torre_den_Galmes/8446" },
            { name: "descobreixmenorca.com", url: "https://www.descobreixmenorca.com/es/cultura-talayotica/torre-den-galmes/" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Torre_d%27en_Galmés" }
        ]
    },
    "torralba-salort": {
        title: "Torralba d'en Salort (Alaior)",
        description: "Famosa per la seva Taula espectacular, la més ben conservada de l'illa.",
        fullContent: `<p><strong>Torralba d'en Salort</strong> és coneguda principalment per la seva Taula, una de les més altes de Menorca. Les dimensions i la perfecció de la 'T' de pedra deixen bocabadats als visitants.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_torralba-1.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [
            { name: "torralbadensalort.com", url: "https://www.torralbadensalort.com/es/inicio" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Torralba_den_Salord" }
        ]
    },
    "necropolis-calescoves": {
        title: "Necròpolis de Calescoves (Alaior)",
        description: "Més de 90 coves artificials excavades als penya-segats.",
        fullContent: `<p>Un lloc màgic on els antics menorquins enterraven els seus morts aprofitant les parets naturals dels barrancs que desemboquen al mar.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_necropolis_calescoves.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [
            { name: "menorca.org", url: "https://www.menorca.org/es/arqueologia-de-menorca/necropolis-cales-coves-menorca/" },
            { name: "menorca.es", url: "https://www.menorca.es/es/Necropolis_de_Calescoves/8426" }
        ]
    },
    "talati-dalt": {
        title: "Talatí de Dalt (Maó)",
        description: "Poblat singular on una columna caiguda es recolza sobre la Taula.",
        fullContent: `<p>La imatge de la columna recolzada sobre la Taula és una de les més icòniques de la prehistòria menorquina. Aquesta peculiaritat és fruit de l'atzar del pas del temps.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_talati.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [
            { name: "descobreixmenorca.com", url: "https://www.descobreixmenorca.com/es/cultura-talayotica/talati-de-dalt/" },
            { name: "menorca.es", url: "https://www.menorca.es/es/Poblado_talayotico_de_Talati_de_Dalt/8442" }
        ]
    },
    "rafal-rubi": {
        title: "Navetes de Rafal Rubí (Alaior)",
        description: "Dues navetes d'enterrament molt pròximes.",
        fullContent: `<p>Les <strong>Navetes de Rafal Rubí</strong> són dues construccions funeràries col·lectives molt ben conservades, exemples perfectes d'aquesta arquitectura exclusiva de Menorca.</p>`,
        image: "https://www.menorca.es/documents/Imatges/263imgpub.JPG",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Navetas_de_Rafal_Rubi/8424" }
        ]
    },
    "trepuco": {
        title: "Poblat de Trepucó (Maó)",
        description: "Conserva una de les Taules més altes de l'illa.",
        fullContent: `<p><strong>Trepucó</strong> és un dels poblats més grans, excavat per l'arqueòloga Margaret Murray als anys 30. La seva taula central és monumental.</p>`,
        image: "https://www.menorca.es/documents/Imatges/8452img4.JPG",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Poblado_talayotico_de_Trepuco/8452" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Trepucó" }
        ]
    },
    "son-olivaret": {
        title: "Sepulcre de Son Olivaret (Ciutadella)",
        description: "Exemple de 'proto-naveta', transició entre dólmens i navetes.",
        fullContent: `<p>Aquest sepulcre és clau per entendre l'evolució de l'arquitectura funerària a l'Edat del Bronze a Menorca.</p>`,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj96wvSkMjmfOmJE2xCyo19Zr7ICHv81HHAqWzE-pwBu7F398NXkGdeS0xdW2GJXyDk675fdOvO3T5HHnlJv4Efn74AYVKY3KZssDHqPuy9cqUoj6gGSdw9RYz9sn0HX9TY0cIBNnOs288/s1600/DSC08606+Sepulcre+de+Son+Olivaret+%2528Ciutadella%2529+15-01-2017.JPG",
        imageAuthor: "Menorca Prehistòrica",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Sepulcro_de_Son_Olivaret" }
        ]
    },
    "necropolis-cala-morell": {
        title: "Necròpolis de Cala Morell (Ciutadella)",
        description: "Coves excavades als penya-segats imitant cases.",
        fullContent: `<p>Fascinant conjunt de coves amb columnes i patis picats a la roca, que imiten l'arquitectura de les cases dels vius.</p>`,
        image: "https://www.menorcadiferente.com/wp-content/uploads/2010/01/necropolis-cala-morell-ciutadella-menorca.jpg",
        imageAuthor: "Menorca Diferente",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Necrópolis_de_Cala_Morell" },
            { name: "menorca.es", url: "https://www.menorca.es/es/Necropolis_de_Cala_Morell/8425" },
            { name: "descobreixmenorca.com", url: "https://www.descobreixmenorca.com/es/cultura-talayotica/necropolis-de-cala-morell/" }
        ]
    },
    "poblat-cala-morell": {
        title: "Poblat de Cala Morell",
        description: "Assentament costaner pre-talaiòtic amb navetes d'habitació.",
        fullContent: `<p>Situat en un cap costaner rocós, aquest poblat conserva 'navetes d'habitació', cases allargades anteriors a l'època talaiòtica clàssica.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Vista_general_del_promontori_on_s%27ubica_el_poblat_prehist%C3%B2ric_de_Cala_Morell_%28Menorca%29.JPG/1200px-Vista_general_del_promontori_on_s%27ubica_el_poblat_prehist%C3%B2ric_de_Cala_Morell_%28Menorca%29.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Poblado_de_Cala_Morell" },
            { name: "menorcatalayotica.info", url: "https://www.menorcatalayotica.info/es/Poblado_costero_del_coll_de_Cala_Morell/10699" }
        ]
    },
    "torrellafuda": {
        title: "Torrellafuda (Ciutadella)",
        description: "Poblat romàntic dins un bosc d'alzines.",
        fullContent: `<p>L'entorn d'alzines dona a Torrellafuda un aire misteriós únic. Conserva muralles, talaiots i una taula trencada.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/58/E3_Taula_de_Torrellafuda_entre_l%27alzinar.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Poblado_talayotico_de_Torrellafuda/8447" },
            { name: "descobreixmenorca.com", url: "https://www.descobreixmenorca.com/es/cultura-talayotica/torrellafuda/" }
        ]
    },
    "torretrencada": {
        title: "Torretrencada (Ciutadella)",
        description: "Destaca per la Taula amb pilastra de reforç.",
        fullContent: `<p>La seva Taula és especial perquè té una pilastra posterior de reforç. També conserva una interessant sala hipòstila.</p>`,
        image: "https://www.menorca.es/documents/Imatges/8450img4.JPG",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Poblado_talayotico_de_Torretrencada/8450" },
            { name: "descobreixmenorca.com", url: "https://www.descobreixmenorca.com/es/cultura-talayotica/torretrencada/" }
        ]
    },
    "cornia-nou": {
        title: "Cornia Nou (Maó)",
        description: "Gran Talaiot Oest amb monumental escala exterior.",
        fullContent: `<p>Impressionant talaiot amb una gran escala de pedra que permet pujar fins al cim i gaudir de les vistes.</p>`,
        image: "https://www.menorcatalayotica.info/Documents/Imatges/10702img13.jpg",
        imageAuthor: "Menorca Talaiòtica",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Cornia_Nou" },
            { name: "menorca.es", url: "https://www.menorca.es/es/Talayots_de_Cornia_Nou/8462" }
        ]
    },
    "binialet": {
        title: "Binialet (Alaior)",
        description: "Concentració de monuments en espai reduït.",
        fullContent: `<p>Jaciment petit on es poden veure diverses estructures talaiòtiques integrades en el paisatge agrícola actual.</p>`,
        image: "https://www.menorcatalayotica.info/Documents/Imatges/10799img13.jpg",
        imageAuthor: "Menorca Talaiòtica",
        sources: [
            { name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" }
        ]
    },

    // --- ANTIGUITAT I EDAT MITJANA ---
    "basilica-son-bou": {
        title: "Basílica Paleocristiana de Son Bou (Alaior)",
        description: "Restes d'una església del s. V-VI dC a la platja.",
        fullContent: `<p>Testimoni de l'arribada del cristianisme. Es poden veure els fonaments de tres naus i la pica baptismal, situats a pocs metres del mar.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Basilica_Paleocristiana_de_Son_Bou.JPG",
        imageAuthor: "Wikimedia commons",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Basilica_de_Son_Bou/9974" },
            { name: "visitmenorca.com", url: "https://visitmenorca.com/menorca/basilica-paleocristiana-de-son-bou/" }
        ]
    },
    "sanisera": {
        title: "Ciutat de Sanisera (Es Mercadal)",
        description: "Ciutat romana al port de Sanitja.",
        fullContent: `<p>Antiga ciutat romana clau per al comerç marítim al nord de l'illa, situada al voltant del port natural de Sanitja.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePImzRSHa7wQ0ZJwPZ757OpwfagLTRBK5Bg&s",
        imageAuthor: "Viator imperi",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Sanisera" }
        ]
    },
    "castell-santa-agueda": {
        title: "Castell de Santa Àgueda (Ferreries)",
        description: "Fortificació islàmica al cim d'una muntanya.",
        fullContent: `<p>Últim reducte de la resistència musulmana el 1287. Les ruïnes del castell ofereixen vistes espectaculars de tota l'illa.</p>`,
        image: "https://doralauto.com/wp-content/uploads/2017/04/castillo-santa-agueda-menorca.jpg",
        imageAuthor: "Doral Auto",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Castillo_de_Santa_agueda/9802" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Castillo_de_Santa_Águeda" }
        ]
    },
    "catedral-menorca": {
        title: "Catedral de Santa Maria (Ciutadella)",
        description: "Gòtic català construït sobre l'antiga mesquita.",
        fullContent: `<p>Temple majestuós del segle XIV. El campanar s'aixeca sobre la base de l'antic minaret de la mesquita islàmica.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/02/apuntmenorca_ec_catedral.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Catedral_de_Santa_María_(Ciudadela)" },
            { name: "menorca.es", url: "https://www.menorca.es/es/Catedral_de_Menorca/9926" }
        ]
    },
    "bastio-sa-font": {
        title: "Bastió de Sa Font (Ciutadella)",
        description: "Muralles renaixentistes, seu del Museu Municipal.",
        fullContent: `<p>Imponent fortificació que defensava una de les portes de Ciutadella. Avui acull el Museu Municipal amb una gran col·lecció històrica.</p>`,
        image: "https://www.ajciutadella.org/WebEditor/Pagines/Image/turisme/arqdefensa/bastio.png",
        imageAuthor: "Ajuntament de ciutadella",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Bastion_de_la_Fuente/9843" },
            { name: "ajciutadella.org", url: "https://www.ajciutadella.org/Contingut.aspx?IdPub=7838" }
        ]
    },
    "santuari-toro": {
        title: "Santuari del Toro (Es Mercadal)",
        description: "Punt més alt de l'illa (358m).",
        fullContent: `<p>Centre espiritual de Menorca, amb el santuari de la Mare de Déu del Toro i les millors vistes panoràmiques de l'illa.</p>`,
        image: "https://www.menorca.es/documents/Imatges/2761imgpub.jpg",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Santuario_de_la_Mare_de_Deu_del_Toro/9964" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Santuario_de_la_Virgen_del_Toro" }
        ]
    },

    // --- EDAT MODERNA ---
    "fort-marlborough": {
        title: "Fort Marlborough (Es Castell)",
        description: "Fort britànic del s. XVIII excavat a la roca.",
        fullContent: `<p>Fascinant fortificació parcialment subterrània construïda pels britànics per defensar l'entrada del port de Maó.</p>`,
        image: "https://viuelport.com/wp-content/uploads/2025/04/Fort-Marlborough.webp",
        imageAuthor: "viuelport.com",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/en/Fort_Marlborough/8434" },
            { name: "descobreixmenorca.com", url: "https://www.descobreixmenorca.com/en/british-menorca/fort-marlborough/" }
        ]
    },
    "torre-fornells": {
        title: "Torre de Fornells (Es Mercadal)",
        description: "Una de les torres de defensa britàniques més grans.",
        fullContent: `<p>Construïda per vigilar el port de Fornells, és un exemple robust de l'arquitectura militar costanera del segle XIX.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqWyCPLnIO0bV9TDOmEGXXK0so-_7fnebyg&s",
        imageAuthor: "Menorca diferente",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Torre_de_Fornells/8876" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Torre_de_Fornells" }
        ]
    },
    "illa-rei": {
        title: "Illa del Rei (Maó)",
        description: "Antic hospital naval britànic i galeria d'art.",
        fullContent: `<p>Illot al mig del port de Maó que acull un històric hospital naval del s. XVIII i la prestigiosa galeria d'art Hauser & Wirth.</p>`,
        image: "https://www.menorca.es/documents/Imatges/8441img4.JPG",
        imageAuthor: "Menorca.info",
        sources: [
            { name: "menorca.es", url: "https://www.menorca.es/es/Isla_del_Rey/8441" }
        ]
    },
    "el-lazareto": {
        title: "El Lazareto (Maó)",
        description: "Fortalesa sanitària per a quarantenes.",
        fullContent: `<p>Immenses instal·lacions construïdes per aïllar vaixells i tripulacions sospitoses de malalties infeccioses al segle XIX.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Lazareto_EntradaPrincipal.jpg",
        imageAuthor: "Wikimedia commons",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Isla_del_Lazareto" },
            { name: "menorca.es", url: "https://www.menorca.es/es/LZLlatzeret/16771" }
        ]
    },
    "fortalesa-mola": {
        title: "Fortalesa de la Mola (Maó)",
        description: "Obra mestra de l'enginyeria militar del s. XIX.",
        fullContent: `<p>La fortalesa d'Isabel II és una de les més grans d'Europa, defensant l'entrada del port de Maó amb una arquitectura imponent.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Fortalesa_de_La_Mola_%28Menorca%2C_2_de_agosto_de_2014%29_35.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [
            { name: "fortalesalamola.com", url: "https://www.fortalesalamola.com/es/inicio" },
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/La_Mola" }
        ]
    },
    "teatre-principal": {
        title: "Teatre Principal de Maó",
        description: "El teatre d'òpera més antic d'Espanya (1829).",
        fullContent: `<p>Una joia cultural amb una acústica excepcional, construït per l'arquitecte Giovanni Palagi. Ofereix una programació estable de teatre i òpera.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX_XgIlxd0dQBvhbxKAmetjIaDsQ4qPUx5Q&s",
        imageAuthor: "Wikimedia commons",
        sources: [
            { name: "ca.wikipedia.org", url: "https://ca.wikipedia.org/wiki/Teatre_Principal_(Maó)" },
            { name: "teatremao.com", url: "https://teatremao.com" }
        ]
    },
    "pedreres-lithica": {
        title: "Pedreres de s'Hostal (Líthica)",
        description: "Laberint i jardins en antigues pedreres de marès.",
        fullContent: `<p>Pedrera de marès recuperada com a gran jardí i espai cultural.</p>`,
        image: "https://www.menorca.es/documents/Imatges/13955img13.jpg",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "lithica.es", url: "https://lithica.es/es/" },
            { name: "menorca.es", url: "https://www.menorca.es/es/Lithica_Un_lugar_magico_esculpido_en_la_roca/13958" }
        ]
    },

    // --- ESDEVENIMENTS ---
    "sant-antoni": {
        title: "Sant Antoni (17 de Gener)",
        description: "Diada de Menorca. Commemora la conquesta cristiana.",
        fullContent: `<p>La festa institucional més important, amb la processó dels Tres Tocs a Ciutadella i mercats de productes típics i productes nacionals. Aquest esdeveniment commemora la presa de l’illa per part d’Alfons III al 1278</p>`,
        images: [
            { url: "https://www.foodiesonmenorca.com/static/bloques/listados_noticias/noticias/7213.m.jpg?1736766869", author: "Foodies en Menorca" },
            { url: "https://men.gsstatic.es/menorca/vivir-menorca/2025/01/15/3150625/fira-sant-antoni-ciutadella-traslada-sala-multifuncional-por-mal-tiempo.jpg", author: "Menorca info" },
            { url: "https://men.gsstatic.es/sfAttachPlugin/getCachedContent/id/3630509/width/425/height/283", author: "Menorca info" }
        ],
        image: "https://www.foodiesonmenorca.com/static/bloques/listados_noticias/noticias/7213.m.jpg?1736766869",
        imageAuthor: "Menorca info",
        sources: [
            { name: "Fiestasmenorca.es – Tres Tocs", url: "https://fiestasmenorca.es/insulares/tres-tocs/" },
            { name: "Viquipèdia – Diada de Menorca", url: "https://ca.wikipedia.org/wiki/Diada_de_Menorca" },
            { name: "Ajuntament de Ciutadella", url: "https://www.ajciutadella.org/Contingut.aspx?IDIOMA=2&IdPub=7888" }
        ]
    },
    "matances-bujots": {
        title: "Matances de Bujots (Pasqua)",
        description: "Tiroteig de ninots de palla (bujots) en un acte satíric.",
        fullContent: `<p>Tradició ciutadellenca on bujots que representen personatges criticables són penjats i tirotejats com a revolució social.</p>`,
        image: "https://men.gsstatic.es/sfAttachPlugin/getCachedContent/id/2779653/width/425/height/283/crop/1",
        imageAuthor: "Menorca info",
        sources: [
            { name: "Fiestasmenorca.es – Matar es bujots", url: "https://fiestasmenorca.es/populares/matar-es-bujots/" }
        ]
    },
    "carnestoltes": {
        title: "Carnestoltes",
        description: "Rues i disfresses a tots els pobles.",
        fullContent: `<p>Dies de festa amb desfilades de carrosses (rues) i disfresses abans de la Quaresma.</p>`,
        image: "https://uh.gsstatic.es/sfAttachPlugin/3673631.jpg",
        imageAuthor: "Menorca info",
        sources: [
            { name: "Viquipèdia – Carnestoltes", url: "https://ca.wikipedia.org/wiki/Carnestoltes" },
            { name: "Fiestasmenorca.es – Carnaval", url: "https://fiestasmenorca.es/carnaval/" },
            { name: "Menorca.info – Carnaval", url: "https://www.menorca.info/menorca/vivir-menorca/2026/02/07/2565181/mao-ferreries-mercadal-presentan-programas-para-celebrar-carnaval.html" }
        ]
    },
    "dia-balears": {
        title: "Dia de les Illes Balears (1 març)",
        description: "Diada oficial de la comunitat autònoma",
        fullContent: `<p>Commemoració de l’Estatut d'Autonomia de 1983 amb mercats d'oficis, concerts i portes obertes a edificis històrics.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_the_Balearic_Islands.svg",
        imageAuthor: "Wikimedia Commons",
        sources: [
            { name: "Dia de les Illes Balears", url: "https://diada.caib.es/es" },
            { name: "Viquipèdia – Dia de les Illes Balears", url: "https://ca.wikipedia.org/wiki/Dia_de_les_Illes_Balears" }
        ]
    },
    "fira-camp": {
        title: "Fira del Camp (Alaior)",
        description: "Gran fira agrícola i ramadera.",
        fullContent: `<p>Concurs de vaca frisona, exposició de maquinària i venda de productes locals.</p>`,
        image: "https://men.gsstatic.es/sfAttachPlugin/1948171.jpg",
        imageAuthor: "Menorca info",
        sources: [
            { name: "Menorca.info – Fira del camp", url: "https://www.menorca.info/ocio/fiestas/fira-del-camp-alaior-2026.html" },
            { name: "Agenda Menorca – Fira del camp", url: "https://agenda.menorca.es/Contingut.aspx?IdPub=38281" }
        ]
    },

    // --- CAMÍ DE CAVALLS ---
    "etapa-1": {
        title: "Etapa 1: Maó – Es Grau",
        description: "10 km | Inici a Sa Mesquida fins al Parc Natural.",
        fullContent: `<p>Recorregut que surt del port de Maó, passa per Sa Mesquida i arriba al nucli d'Es Grau, porta d'entrada al Parc Natural.</p>`,
        image: "https://menorca.info/images/2021/05/29/lazareto.jpg",
        imageAuthor: "Menorca.info",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-2": {
        title: "Etapa 2: Es Grau – Favàritx",
        description: "8,6 km | Cor de la Reserva de Biosfera.",
        fullContent: `<p>Travessa s'Albufera des Grau i arriba al paisatge lunar del Cap de Favàritx.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOxDMdA1TOLpNyEf6apR0X_cTSX7v97tv2A&s",
        imageAuthor: "Turismo Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-3": {
        title: "Etapa 3: Favàritx – Arenal d’en Castell",
        description: "13,6 km | Costa nord salvatge.",
        fullContent: `<p>Etapa dura amb desnivells que recorre la costa més feréstega i verge del nord de l'illa.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWqUdL3KfXqV3iVJ6RtIW1hYzA-F8xkd1wA&s",
        imageAuthor: "Descobreix Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-4": {
        title: "Etapa 4: Arenal – Cala Tirant",
        description: "10,8 km | Passant per Sanisera i Sanitja.",
        fullContent: `<p>Combina trams urbans amb la visita a l'interessant port natural de Sanitja i les restes romanes.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbDVNNUvQF0mMgQknynOe6mfv_YmaF_8_9g&s",
        imageAuthor: "Wikimedia Commons",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-5": {
        title: "Etapa 5: Cala Tirant – Binimel·là",
        description: "9,6 km | Terra vermella i Cavalleria.",
        fullContent: `<p>Espectacular etapa dominada pel color vermell de les roques i la proximitat del Cap de Cavalleria.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEeldjGX2et6k9i61rereLjXRZrot7n2glw&s",
        imageAuthor: "Descobreix Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-6": {
        title: "Etapa 6: Binimel·là – Els Alocs",
        description: "8,9 km | Cala Pregonda i l'etapa reina.",
        fullContent: `<p>Inclou el pas per la famosa Cala Pregonda i és una de les etapes més exigents i boniques.</p>`,
        image: "https://www.menorcadiferente.com/wp-content/uploads/2009/09/Cala-Pregonda.jpgCrèdit Imatge: Menorca Diferent",
        imageAuthor: "Menorca Diferent",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-7": {
        title: "Etapa 7: Els Alocs – Algaiarens",
        description: "9,7 km | Cala Pilar i boscos d'alzines.",
        fullContent: `<p>Passa per la icònica Cala Pilar, amb la seva sorra vermella, i s'endinsa en boscos frondosos.</p>`,
        image: "https://www.civitatis.com/f/espana/menorca/guia/la-vall.jpg",
        imageAuthor: "Disfruta Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-8": {
        title: "Etapa 8: Algaiarens – Cala Morell",
        description: "5,4 km | Dels boscos a la pedra.",
        fullContent: `<p>Surt de les platges de La Vall per arribar a la urbanització i necròpolis de Cala Morell.</p>`,
        image: "https://www.menorcatalayotica.info/Documents/Imatges/13685img2720230203101501.jpg",
        imageAuthor: "Menorca Talaiotica",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-9": {
        title: "Etapa 9: Cala Morell – Punta Nati",
        description: "7 km | El desert de pedra.",
        fullContent: `<p>Immersió total en la 'Menorca seca', un paisatge de pedra infinita i barraques de bestiar.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6eLa7rv3N2ktVEpe9ZRYIL4fPG-SkYbq2A&s",
        imageAuthor: "Descobreix Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-10": {
        title: "Etapa 10: Punta Nati – Ciutadella",
        description: "10,5 km | Pont d'en Gil i arribada a ponent.",
        fullContent: `<p>Arribada espectacular a Ciutadella passant pel famós arc natural del Pont d'en Gil.</p>`,
        image: "https://www.miramarrentacar.com/blog/wp-content/uploads/2025/01/safarola.jpg",
        imageAuthor: "Picasa",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-11": {
        title: "Etapa 11: Ciutadella – Cap d’Artrutx",
        description: "13,2 km | Costa oest i posta de sol.",
        fullContent: `<p>Caminada plana vorejant la costa urbanitzada de ponent fins al far d'Artrutx.</p>`,
        image: "https://www.menorca.es/documents/Imatges/13718img13.jpg",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-12": {
        title: "Etapa 12: Cap d’Artrutx – Turqueta",
        description: "13,3 km | Entrada al sud verge.",
        fullContent: `<p>Deixem enrere la civilització per entrar de ple a les platges verges del sud com Son Saura.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhFAbDN41PtJIfgT_MUTkoc8BeKKUIi1JAA&s",
        imageAuthor: "Descobreix Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-13": {
        title: "Etapa 13: Turqueta – Cala Galdana",
        description: "6,4 km | Macarella i Macarelleta.",
        fullContent: `<p>El tram més famós, passant per les joies de la corona: Macarella i Macarelleta.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrnQSDrGPrMlG2HHC_X7gUeg1jtl01Y5akg&s",
        imageAuthor: "Descobreix Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-14": {
        title: "Etapa 14: Cala Galdana – Sant Tomàs",
        description: "10,8 km | Cala Mitjana i Trebalúger.",
        fullContent: `<p>Recorregut per barrancs i cales verges, incloent la preciosa Cala Mitjana.</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1kwxkhuvU1ilviCPL3f_D8XEaA9AVY4gJg&s",
        imageAuthor: "Descobreix Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-15": {
        title: "Etapa 15: Sant Tomàs – Son Bou",
        description: "6,4 km | La platja més llarga.",
        fullContent: `<p>Passejada vorejant la immensa platja de Son Bou i la seva zona humida.</p>`,
        image: "https://www.menorcadiferente.com/wp-content/uploads/2015/11/Cala-Talis.jpg",
        imageAuthor: "Menorca diferente",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-16": {
        title: "Etapa 16: Son Bou – Cala en Porter",
        description: "8 km | Penya-segats i Llucalari.",
        fullContent: `<p>Tram amb desnivell que puja als penya-segats i baixa al barranc de Llucalari.</p>`,
        image: "https://www.menorca.es/documents/Imatges/8426img4.JPG",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-17": {
        title: "Etapa 17: Cala en Porter – Binisafúller",
        description: "11,8 km | Calescoves.",
        fullContent: `<p>Visita obligada a la necròpolis de Calescoves durant el recorregut.</p>`,
        image: "https://piscinas-naturales.es/wp-content/uploads/2025/04/Es-Calo-Blanc-Menorca-Playas.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-18": {
        title: "Etapa 18: Binisafúller – Punta Prima",
        description: "8,1 km | Binibèquer Vell.",
        fullContent: `<p>Pas pel curiós poblat de pescadors de Binibèquer Vell.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2022/05/apuntmenorca_atractiusnaturals_illaaire.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-19": {
        title: "Etapa 19: Punta Prima – Cala Sant Esteve",
        description: "7,3 km | Fort Marlborough.",
        fullContent: `<p>Entrada al port de Maó passant per fortificacions històriques.</p>`,
        image: "https://www.menorca.org/static/bloques/galerias/fotos/970.p.jpg?1516009952",
        imageAuthor: "Menorca.org",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },
    "etapa-20": {
        title: "Etapa 20: Cala Sant Esteve – Maó",
        description: "6 km | Es Castell i el Port.",
        fullContent: `<p>Caminada urbana pel costat del mar, gaudint de les vistes del port de Maó.</p>`,
        image: "https://visitmenorca.com/wp-content/uploads/2014/01/Mao_2.jpg",
        imageAuthor: "VisitMenorca",
        sources: [
            { name: "Descobreixmenorca.com – Cami de Cavalls", url: "https://www.descobreixmenorca.com/es/cami-de-cavalls-2/" }
        ]
    },

    // --- GASTRONOMIA ---
    "mercat-gastronomia": {
        title: "Mercat Gastronòmic de Maó",
        description: "Producte local al Claustre del Carme.",
        fullContent: `<p>El lloc ideal per comprar i degustar formatge Maó, sobrassada, vins i altres productes de kilòmetre 0</p>`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXODRYKpbn4CuLhxz81Qodw12BHZ05Q9m3Q&s",
        imageAuthor: "Ajuntament de Maó",
        sources: [
            { name: "Illesbalears.travel - Mercat Gastronòmic", url: "https://www.illesbalears.travel/es/menorca/mercado-gastronomico-mercado-claustro-del-carmen" },
            { name: "Mercat des Claustre", url: "https://mercatdesclaustre.com/" }
        ]
    },

    // --- ALTRES NATURA ---
    "salbufera": {
        title: "S'Albufera des Grau",
        description: "Parc Natural i reserva d'aus.",
        fullContent: `<p>El cor de la Reserva de Biosfera, un espai per a l'observació d'aus, la natura i passejar en pau.</p>`,
        images: [
            { url: "https://sesbarquesdesgrau.com/wp-content/uploads/sites/35/2020/04/albufera_es_grau_2.jpg", author: "Ses barques des Grau" },
            { url: "https://www.menorcadiferente.com/wp-content/uploads/2021/01/Es-Grau-lengua-de-arena-en-conexion-con-la-Albufera-des-Grau-scaled.jpg", author: "Menorcadiferente" }
        ],
        image: "https://sesbarquesdesgrau.com/wp-content/uploads/sites/35/2020/04/albufera_es_grau_2.jpg",
        imageAuthor: "Ses barques des Grau",
        sources: [
            { name: "Viquipèdia – S'Albufera des Grau", url: "https://ca.wikipedia.org/wiki/S%27Albufera_des_Grau" },
            { name: "CAIB – Parc Natural", url: "https://www.caib.es/sites/espaisnaturalsprotegits/es/parc_natural_de_salbufera_des_grau/" },
            { name: "Menorca.es – S'Albufera des Grau", url: "https://www.menorca.es/Contingut.aspx?IDIOMA=1&IdPub=16970" }
        ]
    },
    "barranc-algendar": {
        title: "Barranc d'Algendar",
        description: "El 'Gran Canyó' de Menorca.",
        fullContent: `<p>Barranc espectacular amb parets de 80 metres i llegendes com la del Pas d'en Revull o la novia de l’algendar</p>`,
        image: "https://www.menorca.es/documents/Imatges/187imgpub.JPG",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "Viquipèdia – Barranc d'Algendar", url: "https://ca.wikipedia.org/wiki/Barranc_d%27Algendar" }
        ]
    },
    "cova-coloms": {
        title: "Sa Cova des Coloms",
        description: "La catedral natural de Menorca.",
        fullContent: `<p>Cova natural de gran mesura al barranc de Binigaus.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Cova_des_Coloms.jpg",
        imageAuthor: "Wikipedia",
        sources: [
            { name: "Menorca.es - Cova des coloms", url: "https://www.menorca.es/es/Cova_des_coloms/8841" },
            { name: "Wikipedia - Cueva des Coloms", url: "https://es.wikipedia.org/wiki/Cueva_des_Coloms" }
        ]
    },
    "el-toro-natura": {
        title: "El Toro",
        description: "La muntanya més alta de l’illa (358m).",
        fullContent: `<p>Mirador excepcional de tota l'illa situat al sobre de la muntanya del Toro, punt més alt de l’illa. Allà es troba el santuari de la patrona de Menorca, construït el 1670 sobre una antiga església gòtica.</p>`,
        images: [
            { url: "https://www.menorca.es/documents/Imatges/2761imgpub.jpg", author: "Menorca.es" },
            { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl0BBi-zfwM0xnMo13j8FQh0QxOIZpCBrkQ&s", author: "Viajablog" }
        ],
        image: "https://www.menorca.es/documents/Imatges/2761imgpub.jpg",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "Menorca.es - Santuario Mare del Toro", url: "https://www.menorca.es/es/Santuario_de_la_Mare_de_Deu_del_Toro/9964" },
            { name: "Viquipèdia – Monte Toro", url: "https://ca.wikipedia.org/wiki/Monte_Toro" }
        ]
    },
    "bassa-verda": {
        title: "Sa Bassa Verda",
        description: "Un llac temporal al bosc.",
        fullContent: `<p>Fenomen hidrològic d’interès, bassa que només apareix després de fortes pluges entre els pinars i alzinars d'Algaiarens.</p>`,
        image: "https://agenda.menorca.es/documents/documents/41974doc1420240422101705.jpg",
        imageAuthor: "Agenda Cultural de Menorca",
        sources: [
            { name: "Menorcablue.com – Sa Bassa Verda", url: "https://menorcablue.com/menorca-excursions/sa-bassa-verda-menorca-interior-belleza-natural/" },
            { name: "Menorca.info – Bassa Verda", url: "https://www.menorca.info/menorca/vivir-menorca/2025/05/06/2380581/otra-bassa-verda.html" }
        ]
    },
    "elefant-calamorell": {
        title: "L'Elefant de Cala Morell",
        description: "Roca amb forma d'elefant.",
        fullContent: `<p>Curiosa formació rocosa que sembla un elefant des de certs angles, situada a Cala Morell</p>`,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirXRJFmaLYux7_03AUPsWZRLfD1S7U8Z-y7mYEJwrcjlBCin9ah10N686LC6Ln4-b15VfcvJog2spZTY1Qy8MdKeKPyiqW1dmeb7Nk4jOmVH56f45en03dhTqcj6t1pxymYSo1l8ONRog/s1600/DSC09614+Punta+des+Campanar+-+Cala+Morell+%2528Ciutadella%2529+27-04-2019.JPG",
        imageAuthor: "Imatges de Menorca",
        sources: [
            { name: "Camidecavalls.com – Cala Morell", url: "https://camidecavalls.com/ca/Cala_Morell/9657" },
            { name: "Caminosnaturales.es", url: "https://caminosnaturales.es/es/red-de-caminos-naturales/poi-detalle/ID.04.02.09.20/76e17d75-316f-4067-bc11-2cb5cc3cb423" }
        ]
    },
    "pont-gil": {
        title: "Es Pont d'en Gil",
        description: "Arc natural sobre el mar.",
        fullContent: `<p>Espectacular pont de roca a prop de Ciutadella, ideal per a veure la posta de sol</p>`,
        image: "https://caminosnaturales.es/dam/caminos-naturales/caminos-naturales/Sector_IV_Balear/cami-cavalls/ContenidosCamideCavalls/Etapa10/1-Texto-y-fotos/DSC_0617.JPG",
        imageAuthor: "Caminosnaturales.es",
        sources: [
            { name: "Caminosnaturales.es - Pont d'en Gil", url: "https://caminosnaturales.es/es/red-de-caminos-naturales/poi-detalle/ID.04.02.10.23/d4e6f83c-a7b0-43ce-8b7c-c8003074cdd2" }
        ]
    },
    "formatge-mao": {
        title: "Formatge Maó-Menorca",
        description: "Elaborat amb llet de vaca frisona menorquina des de fa més de 300 anys.",
        fullContent: "<p>Elaborat amb llet de vaca frisona menorquina des de fa més de 300 anys.</p>",
        image: "https://www.menorca.es/documents/Imatges/3102imgpub.jpg",
        imageAuthor: "Menorca.es"
    },
    "gin-xoriguer": {
        title: "Gin Xoriguer",
        description: "Herència britànica del s. XVIII. L'únic gin amb Denominació Geogràfica Protegida d'Espanya.",
        fullContent: "<p>Herència britànica del s. XVIII. L'únic gin amb Denominació Geogràfica Protegida d'Espanya.</p>",
        image: "https://m.media-amazon.com/images/I/51IGLeNaYrL.jpg",
        imageAuthor: "Amazon"
    },
    "sobrassada-menorquina": {
        title: "Sobrassada Menorquina",
        description: "Embotit cru curat de carn de porc negre i pebre vermell.",
        fullContent: "<p>Embotit cru curat de carn de porc negre i pebre vermell.</p>",
        image: "https://www.embotitsraima.com/wordpress/wp-content/uploads/sobrassada_conjunt_embotits_raima.jpg",
        imageAuthor: "Embotits Raima"
    },
    "camaiot-botifarro": {
        title: "Camaiot i Botifarró",
        description: "Embotits cuits exclusius de l'hivern. El camaiot es fa amb cap de porc i espècies; el botifarró és la morcilla local, de sabor suau.",
        fullContent: "<p>Embotits cuits menorquins. El camaiot es fa amb cap de porc i espècies; el botifarró és la morcilla local, de sabor suau.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Camallot.jpg",
        imageAuthor: "Wikimedia commons"
    },
    "caldereta-llagosta": {
        title: "Caldereta de Llagosta",
        description: "El plat més emblemàtic. Llagosta fresca cuinada en brou de peix i tomàquet.",
        fullContent: "<p>El plat més emblemàtic. Llagosta fresca cuinada en brou de peix i tomàquet.</p>",
        image: "https://www.gastronomiaycia.com/wp-content/uploads/2010/04/caldereta_joanbagur1.jpg",
        imageAuthor: "Recetas de cocina"
    },
    "oliaigua-figues": {
        title: "Oliaigua amb Figues",
        description: "Sopa freda de pagès: tomàquet, ceba, all i oli, acompanyada amb figues fresques.",
        fullContent: "<p>Sopa freda de pagès: tomàquet, ceba, all i oli, acompanyada amb figues fresques. Plat humil i refrescant, l'ànima de la cuina menorquina.</p>",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaogA5Tmj68Q12_oy7RjHRpM618jy3WUg4Q&s",
        imageAuthor: "Descobreix Menorca"
    },
    "calamar-farcit": {
        title: "Calamar Farcit amb Salsa d'Ametlla",
        description: "Calamars sencers farcits de sobrassada, ou i pa ratllat, tancats amb escuradents i cuinats en una salsa espessa d'ametlla torrada, ceba, all, julivert i llet.",
        fullContent: "<p>Calamars sencers farcits de sobrassada, ou i pa ratllat, tancats amb escuradents i cuinats en una salsa espessa d'ametlla torrada, ceba, all, julivert i llet.</p>",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiebXi8MKIMKDthlzymykRUfDMimAMd4gOsHWKvJhXNRxtZOScVWspWXVFYrIHI7Sja-8U4PL5I-wMXTvDU_KvsgPb88Hcn85GMqaJaP4TMAF5jByOaOlwf7la2UaaudfDWiRz5lv-R-gO_/s400/P6241294%252C%252C%252C.jpg",
        imageAuthor: "Tiberis"
    },
    "arros-terra": {
        title: "Arròs de la Terra",
        description: "Malgrat el nom, no porta arròs: s'elabora amb blat trencat al morter de pedra (com el bulgur), cuit al forn amb sobrassada, botifarró i costelles de porc. D'arrel àrab, es preparava tradicionalment el dia de la matança del porc.",
        fullContent: "<p>Malgrat el nom, no porta arròs: s'elabora amb blat trencat al morter de pedra, cuit al forn amb sobrassada, botifarró i costelles de porc. D'arrel àrab, es preparava tradicionalment el dia de la matança del porc.</p>",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI1o95qkwDhOAU2uAsuROUqQEfCBm3SZHM0S0hr6hEGRDmrMRqlBM-ijJYso8Ayde6Cu8V7Os2nsKLqITEBZM1a754gn0hyphenhyphenFH8_BWP_8UtZyF8oXM6y7bUx4kaitI3iIUKyA-DUpJjrKFuGy544JCPMjLCdbweWVl4vMpxIKcBFFL0IymFMnuIIgo5YSWe/w1200-h630-p-k-no-nu/IMG20200621110757.jpg",
        imageAuthor: "Tiberis",
        sources: [
            { name: "es.wikipedia.org", url: "https://es.wikipedia.org/wiki/Arroz_de_la_tierra" }
        ]
    },
    "raja-forn": {
        title: "Raja al Forn",
        description: "La raja (ratjada) és el peix per excel·lència de Menorca. Es cou al forn sobre un llit de patates, tomàquet i ceba, condimentada amb all, julivert i pa ratllat.",
        fullContent: "<p>La raja (ratjada) és el peix per excel·lència de Menorca. Es cou al forn sobre un llit de patates, tomàquet i ceba, condimentada amb all, julivert i pa ratllat.</p>",
        image: "https://agroxerxa.menorca.es/documents/documents/10004doc2.jpg",
        imageAuthor: "AgroXerxa",
        sources: [
            { name: "Descobreixmenorca.com", url: "https://www.descobreixmenorca.com/es/cocina-de-menorca/raya-al-horno/" }
        ]
    },
    "maionesa": {
        title: "La Maionesa",
        description: "El 1756, durant l'ocupació francesa, el cuiner del duc de Richelieu va crear aquesta salsa a Maó amb ou i oli local, en absència de nata. La va batejar \"mahonnaise\" en honor a la ciutat. Avui la salsa és universal.",
        fullContent: "<p>El 1756, durant l'ocupació francesa, el cuiner del duc de Richelieu va crear aquesta salsa a Maó amb ou i oli local, en absència de nata. La va batejar \"mahonnaise\" en honor a la ciutat. Avui és universal.</p>",
        image: "https://www.rac1.cat/files/image_449_221/files/fp/uploads/2019/12/24/62b44a817507f.r_d.561-306.jpeg",
        imageAuthor: "RAC1",
        sources: [
            { name: "Wikipedia Mayonesa", url: "https://es.wikipedia.org/wiki/Mayonesa" }
        ]
    },
    "formatjades": {
        title: "Formatjades",
        description: "Pastes rodones farcides de sobrassada, formatge o carn.",
        fullContent: "<p>Pastes rodones farcides de sobrassada, formatge o carn.</p>",
        image: "https://cansibina.com/wp-content/uploads/2017/05/Formatjades-2-retocada-945x709.jpg",
        imageAuthor: "Els fogons de ca’n sibina"
    },
    "amargos-carquinyols": {
        title: "Amargos i Carquinyols",
        description: "Galetes d'ametlla amarga.",
        fullContent: "<p>Galetes i bescuits d'ametlla amarga. Els amargos, típics de Sant Joan; els carquinyols, perfectes per sucar en vi dolç o gin.</p>",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvZ19ocSmMjoEqNgSJhe2miERLml3Z5Ohm3lqd9GTb5lwJuAVrA2Kv-FAcMFJk_EYn1-uCe2HHAZ1Vqb4c1R7jxK9Z2q3DTtTBHke9DHBF6OpxvUUr23-r81HfnPyvUPkPTH8TA8tSiZ8/s1600/Carquinyols+2.jpg",
        imageAuthor: "Dulce y salado Menorca"
    },
    "ensaimada-menorquina": {
        title: "Ensaïmada Menorquina",
        description: "Pasta llevada, lleugerament dolça i esponjosa, coberta de sucre llustre. Menys greixosa que la mallorquina, es troba en les variants clàssica, amb sobrassada, cabell d'àngel o crema. Esmorzar de somni a qualsevol forn local.",
        fullContent: "<p>Pasta llevada, lleugerament dolça i esponjosa, coberta de sucre llustre. Menys greixosa (i més bona!) que la mallorquina, es troba en les variants clàssiques, amb sobrassada, cabell d'àngel o crema.</p>",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1C8vHmp4x13li7KyRvTCGJ_d9a2ohGjFt7V9DUH0iXKm8E2NvofFoazMUfzcH7f9qEb_pBB4avaux43Tvv5-conw8tSPs0gIL0rmyyakqoSzN8M53KqSJ2MDu8V4X_Lz0SAGl5c9axl8/s1600/Ensaimada+3.JPG",
        imageAuthor: "Dulce y salado Menorca",
        sources: [
            { name: "Dulce y Salados", url: "https://dulceysalados.blogspot.com/2016/07/ensaimada-menorquina.html" },
            { name: "Tiberis a casa", url: "https://tiberisacasa.blogspot.com/2014/08/coca-bamba-ensaimada-menorquina.html" }
        ]
    },
    "mercat-municipal-ciutadella": {
        title: "Mercat Municipal de Ciutadella",
        description: "Mercat tradicional al centre de Ciutadella. Fruita i verdura de temporada, carn, peix i formatge artesanal i local.",
        fullContent: "<p>Mercat tradicional al centre de Ciutadella. Fruita i verdura de temporada, peix de la llotja local i formatgers artesanals.</p>",
        image: "https://www.cometemenorca.com/static/uploads/mercat-des-peix-ciutadella.jpg",
        imageAuthor: "Comete Menorca"
    }
};


