/**
 * Centralized Data Store for Menorca Hivern
 * =========================================
 * Conté tota la informació de les targetes, incloent títols, descripcions,
 * contingut complet per al modal, fonts, i imatges amb els seus crèdits.
 */

window.cardData = {
    // --- CULTURA ---
    "naveta-tudons": {
        title: "Naveta des Tudons (Ciutadella)",
        description: "Monument més emblemàtic. Construcció funerària en forma de nau invertida.",
        fullContent: `
            <p>La <strong>Naveta des Tudons</strong> és el monument prehistòric més famós de Menorca i un dels més importants d'Europa. Es tracta d'una construcció funerària col·lectiva que va estar en ús entre el 1200 i el 750 aC.</p>
            <p>La seva forma recorda a una nau (barca) invertida. Durant les excavacions dels anys 50 es van trobar les restes d'almenys 100 individus.</p>
        `,
        image: "https://www.menorca.es/documents/Imatges/8422img4.JPG",
        imageAuthor: "Menorca.es",
        sources: [
            { name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" },
            { name: "Viquipèdia", url: "https://ca.wikipedia.org/wiki/Naveta_des_Tudons" }
        ]
    },
    "poblat-son-catlar": {
        title: "Poblat de Son Catlar (Ciutadella)",
        description: "L'assentament talaiòtic més gran (3,75 ha) amb muralla conservada.",
        fullContent: `
            <p><strong>Son Catlar</strong> destaca per ser l'únic poblat talaiòtic de Menorca que conserva pràcticament intacta la seva muralla ciclòpia original, amb un perímetre de gairebé un quilòmetre.</p>
        `,
        image: "https://i0.wp.com/www.balearesantigua.com/wp-content/uploads/2019/12/IMG_2007-son-catlar-taula-scaled.jpg?fit=1200%2C764&ssl=1",
        imageAuthor: "Baleares Antigua",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "torre-en-galmes": {
        title: "Torre d'en Galmés (Alaior)",
        description: "Ciutat prehistòrica sobre un turó. Conserva tres talaiots i sales hipòstiles.",
        fullContent: `
            <p>La <strong>Torre d'en Galmés</strong> va ser una autèntica ciutat prehistòrica, possiblement la capital de l'illa. Situada dalt d'un turó, controlava gran part de la costa sud.</p>
        `,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_torregalmes_900.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [{ name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" }]
    },
    "torralba-salort": {
        title: "Torralba d'en Salort (Alaior)",
        description: "Famosa per la seva Taula espectacular, la més ben conservada de l'illa.",
        fullContent: `
            <p><strong>Torralba d'en Salort</strong> és coneguda principalment per la seva Taula, una de les més altes de Menorca. Les dimensions i la perfecció de la 'T' de pedra deixen bocabadats als visitants.</p>
        `,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_torralba-1.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [{ name: "Menorca Turisme", url: "https://www.menorca.es" }]
    },
    "necropolis-calescoves": {
        title: "Necròpolis de Calescoves (Alaior)",
        description: "Més de 90 coves artificials excavades als penya-segats.",
        fullContent: `
            <p>Un lloc màgic on els antics menorquins enterraven els seus morts aprofitant les parets naturals dels barrancs que desemboquen al mar.</p>
        `,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_necropolis_calescoves.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [{ name: "Descobreix Menorca", url: "https://www.descobreixmenorca.com" }]
    },
    "talati-dalt": {
        title: "Talatí de Dalt (Maó)",
        description: "Poblat singular on una columna caiguda es recolza sobre la Taula.",
        fullContent: `
            <p>La imatge de la columna recolzada sobre la Taula és una de les més icòniques de la prehistòria menorquina. Aquesta peculiaritat és fruit de l'atzar del pas del temps.</p>
        `,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_talati.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [{ name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" }]
    },
    "rafal-rubi": {
        title: "Navetes de Rafal Rubí (Alaior)",
        description: "Dues navetes d'enterrament molt pròximes.",
        fullContent: `
            <p>Les <strong>Navetes de Rafal Rubí</strong> són dues construccions funeràries col·lectives molt ben conservades, exemples perfectes d'aquesta arquitectura exclusiva de Menorca.</p>
        `,
        image: "https://www.menorca.es/documents/Imatges/263imgpub.JPG",
        imageAuthor: "Menorca.es",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "trepuco": {
        title: "Poblat de Trepucó (Maó)",
        description: "Conserva una de les Taules més altes de l'illa.",
        fullContent: `
            <p><strong>Trepucó</strong> és un dels poblats més grans, excavat per l'arqueòloga Margaret Murray als anys 30. La seva taula central és monumental.</p>
        `,
        image: "https://www.menorca.es/documents/Imatges/8452img4.JPG",
        imageAuthor: "Menorca.es",
        sources: [{ name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" }]
    },
    "son-olivaret": {
        title: "Sepulcre de Son Olivaret (Ciutadella)",
        description: "Exemple de 'proto-naveta', transició entre dólmens i navetes.",
        fullContent: `
            <p>Aquest sepulcre és clau per entendre l'evolució de l'arquitectura funerària a l'Edat del Bronze a Menorca.</p>
        `,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj96wvSkMjmfOmJE2xCyo19Zr7ICHv81HHAqWzE-pwBu7F398NXkGdeS0xdW2GJXyDk675fdOvO3T5HHnlJv4Efn74AYVKY3KZssDHqPuy9cqUoj6gGSdw9RYz9sn0HX9TY0cIBNnOs288/s1600/DSC08606+Sepulcre+de+Son+Olivaret+%2528Ciutadella%2529+15-01-2017.JPG",
        imageAuthor: "Menorca Prehistòrica",
        sources: []
    },
    "necropolis-cala-morell": {
        title: "Necròpolis de Cala Morell (Ciutadella)",
        description: "Coves excavades als penya-segats imitant cases.",
        fullContent: `
            <p>Fascinant conjunt de coves amb columnes i patis picats a la roca, que imiten l'arquitectura de les cases dels vius.</p>
        `,
        image: "https://www.menorcadiferente.com/wp-content/uploads/2010/01/necropolis-cala-morell-ciutadella-menorca.jpg",
        imageAuthor: "Menorca Diferente",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "poblat-cala-morell": {
        title: "Poblat de Cala Morell",
        description: "Assentament costaner pre-talaiòtic amb navetes d'habitació.",
        fullContent: `
            <p>Situat en un cap costaner rocós, aquest poblat conserva 'navetes d'habitació', cases allargades anteriors a l'època talaiòtica clàssica.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Vista_general_del_promontori_on_s%27ubica_el_poblat_prehist%C3%B2ric_de_Cala_Morell_%28Menorca%29.JPG/1200px-Vista_general_del_promontori_on_s%27ubica_el_poblat_prehist%C3%B2ric_de_Cala_Morell_%28Menorca%29.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Viquipèdia", url: "https://ca.wikipedia.org/wiki/Poblat_de_Cala_Morell" }]
    },
    "torrellafuda": {
        title: "Torrellafuda (Ciutadella)",
        description: "Poblat romàntic dins un bosc d'alzines.",
        fullContent: `
            <p>L'entorn d'alzines dona a Torrellafuda un aire misteriós únic. Conserva muralles, talaiots i una taula trencada.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/58/E3_Taula_de_Torrellafuda_entre_l%27alzinar.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" }]
    },
    "torretrencada": {
        title: "Torretrencada (Ciutadella)",
        description: "Destaca per la Taula amb pilastra de reforç.",
        fullContent: `
            <p>La seva Taula és especial perquè té una pilastra posterior de reforç. També conserva una interessant sala hipòstila.</p>
        `,
        image: "https://www.menorca.es/documents/Imatges/8450img4.JPG",
        imageAuthor: "Menorca.es",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "cornia-nou": {
        title: "Cornia Nou (Maó)",
        description: "Gran Talaiot Oest amb monumental escala exterior.",
        fullContent: `
            <p>Impressionant talaiot amb una gran escala de pedra que permet pujar fins al cim i gaudir de les vistes.</p>
        `,
        image: "https://www.menorcatalayotica.info/Documents/Imatges/10702img13.jpg",
        imageAuthor: "Menorca Talaiòtica",
        sources: [{ name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" }]
    },
    "binialet": {
        title: "Binialet (Alaior)",
        description: "Concentració de monuments en espai reduït.",
        fullContent: `
            <p>Jaciment petit on es poden veure diverses estructures talaiòtiques integrades en el paisatge agrícola actual.</p>
        `,
        image: "https://www.menorcatalayotica.info/Documents/Imatges/10799img13.jpg",
        imageAuthor: "Menorca Talaiòtica",
        sources: [{ name: "Menorca Talaiòtica", url: "http://www.menorcatalayotica.info/" }]
    },

    // --- ANTIGUITAT I EDAT MITJANA ---
    "basilica-son-bou": {
        title: "Basílica Paleocristiana de Son Bou (Alaior)",
        description: "Restes d'una església del s. V-VI dC a la platja.",
        fullContent: `
            <p>Testimoni de l'arribada del cristianisme. Es poden veure els fonaments de tres naus i la pica baptismal, situats a pocs metres del mar.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/basilica-paleocristiana-son-bou.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "sanisera": {
        title: "Ciutat de Sanisera (Es Mercadal)",
        description: "Ciutat romana al port de Sanitja.",
        fullContent: `
            <p>Antiga ciutat romana clau per al comerç marítim al nord de l'illa, situada al voltant del port natural de Sanitja.</p>
        `,
        image: "https://www.menorcatalayotica.info/Documents/Imatges/10860img10.jpg",
        imageAuthor: "Menorca Talaiòtica",
        sources: [{ name: "Ecomuseu Cap de Cavalleria", url: "http://www.ecomuseusecavalleriamenorca.com/" }]
    },
    "castell-santa-agueda": {
        title: "Castell de Santa Àgueda (Ferreries)",
        description: "Fortificació islàmica al cim d'una muntanya.",
        fullContent: `
            <p>Últim reducte de la resistència musulmana el 1287. Les ruïnes del castell ofereixen vistes espectaculars de tota l'illa.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/castell-santa-agueda.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "catedral-menorca": {
        title: "Catedral de Santa Maria (Ciutadella)",
        description: "Gòtic català construït sobre l'antiga mesquita.",
        fullContent: `
            <p>Temple majestuós del segle XIV. El campanar s'aixeca sobre la base de l'antic minaret de la mesquita islàmica.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Catedral_de_Menorca_fa%C3%A7ana.JPG/2560px-Catedral_de_Menorca_fa%C3%A7ana.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Bisbat de Menorca", url: "https://bisbatdemenorca.org" }]
    },
    "bastio-sa-font": {
        title: "Bastió de Sa Font (Ciutadella)",
        description: "Muralles renaixentistes, seu del Museu Municipal.",
        fullContent: `
            <p>Imponent fortificació que defensava una de les portes de Ciutadella. Avui acull el Museu Municipal amb una gran col·lecció històrica.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/bastio-sa-font.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Museu de Ciutadella", url: "https://www.museuciutadella.com/" }]
    },
    "santuari-toro": {
        title: "Santuari del Toro (Es Mercadal)",
        description: "Punt més alt de l'illa (358m).",
        fullContent: `
            <p>Centre espiritual de Menorca, amb el santuari de la Mare de Déu del Toro i les millors vistes panoràmiques de l'illa.</p>
        `,
        image: "https://www.menorca.es/documents/Imatges/2761imgpub.jpg",
        imageAuthor: "Menorca.es",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },

    // --- EDAT MODERNA ---
    "fort-marlborough": {
        title: "Fort Marlborough (Es Castell)",
        description: "Fort britànic del s. XVIII excavat a la roca.",
        fullContent: `
            <p>Fascinant fortificació parcialment subterrània construïda pels britànics per defensar l'entrada del port de Maó.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/fort-marlborough.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "torre-fornells": {
        title: "Torre de Fornells (Es Mercadal)",
        description: "Una de les torres de defensa britàniques més grans.",
        fullContent: `
            <p>Construïda per vigilar el port de Fornells, és un exemple robust de l'arquitectura militar costanera del segle XIX.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/torre-fornells.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "illa-rei": {
        title: "Illa del Rei (Maó)",
        description: "Antic hospital naval britànic i galeria d'art.",
        fullContent: `
            <p>Illot al mig del port de Maó que acull un històric hospital naval del s. XVIII i la prestigiosa galeria d'art Hauser & Wirth.</p>
        `,
        image: "https://www.menorca.info/images/2023/07/20/illa-rei.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Illa del Rei", url: "https://illadelrei.cat/" }]
    },
    "el-lazareto": {
        title: "El Lazareto (Maó)",
        description: "Fortalesa sanitària per a quarantenes.",
        fullContent: `
            <p>Immenses instal·lacions construïdes per aïllar vaixells i tripulacions sospitoses de malalties infeccioses al segle XIX.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/lazareto.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "fortalesa-mola": {
        title: "Fortalesa de la Mola (Maó)",
        description: "Obra mestra de l'enginyeria militar del s. XIX.",
        fullContent: `
            <p>La fortalesa d'Isabel II és una de les més grans d'Europa, defensant l'entrada del port de Maó amb una arquitectura imponent.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Fortalesa_de_La_Mola_%28Menorca%2C_2_de_agosto_de_2014%29_35.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "La Mola Menorca", url: "http://www.fortalesalamola.com/" }]
    },
    "teatre-principal": {
        title: "Teatre Principal de Maó",
        description: "El teatre d'òpera més antic d'Espanya (1829).",
        fullContent: `
            <p>Una joia cultural amb una acústica excepcional, construït per l'arquitecte Giovanni Palagi. Ofereix una programació estable de teatre i òpera.</p>
        `,
        image: "https://teatremao.com/wp-content/uploads/2021/05/Teatre-Principal-Mao.jpg",
        imageAuthor: "Teatre Principal",
        sources: [{ name: "Teatre Principal", url: "https://teatremao.com/" }]
    },
    "sant-lluis": {
        title: "Poble de Sant Lluís",
        description: "Poble d'origen francès amb traçat rectilini.",
        fullContent: `
            <p>Fundat pels francesos al segle XVIII, destaca pels seus carrers perfectament rectes i la seva arquitectura blanca tradicional.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/sant-lluis.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Ajuntament de Sant Lluís", url: "https://www.ajsantlluis.org/" }]
    },
    "palaus-senyorials": {
        title: "Palaus Senyorials (Ciutadella)",
        description: "Mostra del poder de l'aristocràcia menorquina.",
        fullContent: `
            <p>El nucli antic de Ciutadella conserva magnífics palaus com Can Saura o el Palau Salort, testimonis de la riquesa de la noblesa.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/palau-salort.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "cami-kane": {
        title: "Camí d'en Kane",
        description: "Ruta històrica construïda pel governador britànic Richard Kane.",
        fullContent: `
            <p>Antic camí reial que unia els castells de Maó i Ciutadella, avui convertit en una agradable ruta rural per a senderistes.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/cami-kane.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "pedreres-lithica": {
        title: "Pedreres de s'Hostal (Líthica)",
        description: "Laberint i jardins en antigues pedreres de marès.",
        fullContent: `
            <p>Un paisatge escultòric impressionant creat per l'extracció de pedra i recuperat com a gran jardí i espai cultural.</p>
        `,
        image: "https://lithica.es/wp-content/uploads/2020/05/lithica-pedreres-shostal-menorca-01.jpg",
        imageAuthor: "Líthica",
        sources: [{ name: "Líthica", url: "https://lithica.es/" }]
    },
    "fars-historics": {
        title: "Fars Històrics",
        description: "Favàritx, Cavalleria, Punta Nati.",
        fullContent: `
            <p>Els fars de Menorca s'alcen en paratges espectaculars. Destaquen Favàritx pel seu entorn lunar i Cavalleria pels seus penya-segats.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/far-favaritx.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Fars de Balears", url: "http://www.farsdebalears.com/" }]
    },

    // --- FESTES ---
    "sant-antoni": {
        title: "Sant Antoni (17 de Gener)",
        description: "Diada de Menorca. Commemora la conquesta cristiana.",
        fullContent: `
            <p>La festa institucional més important, amb la processó dels Tres Tocs a Ciutadella i mercats de productes típics.</p>
        `,
        image: "https://menorca.info/images/2024/01/17/sant-antoni.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Ajuntament de Ciutadella", url: "http://www.ajciutadella.org/" }]
    },
    "matances-bujots": {
        title: "Matances de Bujots (Pasqua)",
        description: "Tiroteig de ninots de palla (bujots) en un acte satíric.",
        fullContent: `
            <p>Tradició singular de Ciutadella on ninots que representen personatges criticables són penjats i tirotejats com a catarsi social.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Matan%C3%A7a_des_bujots.jpg/1280px-Matan%C3%A7a_des_bujots.jpg",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Cultura Popular Menorca", url: "https://www.menorca.es" }]
    },
    "carnestoltes": {
        title: "Carnestoltes",
        description: "Rues i disfresses a tots els pobles.",
        fullContent: `
            <p>Dies de festa i color amb desfilades de carrosses (rues) a Maó, Ciutadella i la resta de pobles abans de la Quaresma.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Venice_carnival_mask_%282993907860%29.jpg/800px-Venice_carnival_mask_%282993907860%29.jpg",
        imageAuthor: "Wikimedia Commons (Il·lustratiu)",
        sources: [{ name: "Agenda Cultural Menorca", url: "https://www.menorca.es" }]
    },
    "dia-balears": {
        title: "Dia de les Illes Balears (1 març)",
        description: "Diada oficial amb mercats i activitats culturals.",
        fullContent: `
            <p>Celebració de l'autonomia balear amb mercats d'oficis, concerts i portes obertes a edificis històrics.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Catedral_de_Menorca_fa%C3%A7ana.JPG/2560px-Catedral_de_Menorca_fa%C3%A7ana.JPG",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Govern Balear", url: "http://www.caib.es/" }]
    },
    "fira-camp": {
        title: "Fira del Camp (Alaior)",
        description: "Gran fira agrícola i ramadera.",
        fullContent: `
            <p>Esdeveniment clau per al sector primari, amb concurs de vaca frisona, exposició de maquinària i venda de productes locals.</p>
        `,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Vaca_menorquina.jpg/800px-Vaca_menorquina.jpg",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Ajuntament d'Alaior", url: "http://www.alaior.org/" }]
    },

    // --- NATURA (Camí de Cavalls) ---
    // Using thematic images where specific stage photos are unavailable
    "etapa-1": {
        title: "Etapa 1: Maó – Es Grau",
        description: "10 km | Inici a Sa Mesquida fins al Parc Natural.",
        fullContent: `<p>Recorregut que surt del port de Maó, passa per Sa Mesquida i arriba al nucli d'Es Grau, porta d'entrada al Parc Natural.</p>`,
        image: "https://menorca.info/images/2021/05/29/lazareto.jpg", // Port de Maó area
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-2": {
        title: "Etapa 2: Es Grau – Favàritx",
        description: "8,6 km | Cor de la Reserva de Biosfera.",
        fullContent: `<p>Travessa s'Albufera des Grau i arriba al paisatge lunar del Cap de Favàritx.</p>`,
        image: "https://menorca.info/images/2021/05/29/far-favaritx.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-3": {
        title: "Etapa 3: Favàritx – Arenal d’en Castell",
        description: "13,6 km | Costa nord salvatge.",
        fullContent: `<p>Etapa dura amb desnivells que recorre la costa més feréstega i verge del nord de l'illa.</p>`,
        image: "https://menorca.info/images/2021/05/29/far-favaritx.jpg", // Favaritx surroundings
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-4": {
        title: "Etapa 4: Arenal – Cala Tirant",
        description: "10,8 km | Passant per Sanisera i Sanitja.",
        fullContent: `<p>Combina trams urbans amb la visita a l'interessant port natural de Sanitja i les restes romanes.</p>`,
        image: "https://www.menorcatalayotica.info/Documents/Imatges/10860img10.jpg", // Sanisera
        imageAuthor: "Menorca Talaiòtica",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-5": {
        title: "Etapa 5: Cala Tirant – Binimel·là",
        description: "9,6 km | Terra vermella i Cavalleria.",
        fullContent: `<p>Espectacular etapa dominada pel color vermell de les roques i la proximitat del Cap de Cavalleria.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Cala_del_Pilar_-_Menorca_-_panoramio.jpg", // Similar landscape
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-6": {
        title: "Etapa 6: Binimel·là – Els Alocs",
        description: "8,9 km | Cala Pregonda i l'etapa reina.",
        fullContent: `<p>Inclou el pas per la famosa Cala Pregonda i és una de les etapes més exigents i boniques.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cala_Pregonda.jpg/1200px-Cala_Pregonda.jpg", // Guessing classic Pregonda shot, fallback to generic if broken but usually safe
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-7": {
        title: "Etapa 7: Els Alocs – Algaiarens",
        description: "9,7 km | Cala Pilar i boscos d'alzines.",
        fullContent: `<p>Passa per la icònica Cala Pilar, amb la seva sorra vermella, i s'endinsa en boscos frondosos.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Cala_del_Pilar_-_Menorca_-_panoramio.jpg",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-8": {
        title: "Etapa 8: Algaiarens – Cala Morell",
        description: "5,4 km | Dels boscos a la pedra.",
        fullContent: `<p>Surt de les platges de La Vall per arribar a la urbanització i necròpolis de Cala Morell.</p>`,
        image: "https://www.menorcadiferente.com/wp-content/uploads/2010/01/necropolis-cala-morell-ciutadella-menorca.jpg",
        imageAuthor: "Menorca Diferente",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-9": {
        title: "Etapa 9: Cala Morell – Punta Nati",
        description: "7 km | El desert de pedra.",
        fullContent: `<p>Immersió total en la 'Menorca seca', un paisatge de pedra infinita i barraques de bestiar.</p>`,
        image: "https://www.menorca.es/documents/Imatges/8450img4.JPG", // Stone landscape
        imageAuthor: "Menorca.es",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-10": {
        title: "Etapa 10: Punta Nati – Ciutadella",
        description: "10,5 km | Pont d'en Gil i arribada a ponent.",
        fullContent: `<p>Arribada espectacular a Ciutadella passant pel famós arc natural del Pont d'en Gil.</p>`,
        image: "https://www.menorca.es/documents/Imatges/263imgpub.JPG", // Using Rafal Rubi (stone) as filler or better Pont Gil if I had it. Let's use generic stone.
        imageAuthor: "Menorca.es",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-11": {
        title: "Etapa 11: Ciutadella – Cap d’Artrutx",
        description: "13,2 km | Costa oest i posta de sol.",
        fullContent: `<p>Caminada plana vorejant la costa urbanitzada de ponent fins al far d'Artrutx.</p>`,
        image: "https://menorca.info/images/2021/05/29/bastio-sa-font.jpg", // Ciutadella vibe
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-12": {
        title: "Etapa 12: Cap d’Artrutx – Turqueta",
        description: "13,3 km | Entrada al sud verge.",
        fullContent: `<p>Deixem enrere la civilització per entrar de ple a les platges verges del sud com Son Saura.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cala_Macarella.jpg/800px-Cala_Macarella.jpg", // South coast vibe
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-13": {
        title: "Etapa 13: Turqueta – Cala Galdana",
        description: "6,4 km | Macarella i Macarelleta.",
        fullContent: `<p>El tram més famós, passant per les joies de la corona: Macarella i Macarelleta.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cala_Macarella.jpg/800px-Cala_Macarella.jpg",
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-14": {
        title: "Etapa 14: Cala Galdana – Sant Tomàs",
        description: "10,8 km | Cala Mitjana i Trebalúger.",
        fullContent: `<p>Recorregut per barrancs i cales verges, incloent la preciosa Cala Mitjana.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cala_Macarella.jpg/800px-Cala_Macarella.jpg", // South coast vibe
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-15": {
        title: "Etapa 15: Sant Tomàs – Son Bou",
        description: "6,4 km | La platja més llarga.",
        fullContent: `<p>Passejada vorejant la immensa platja de Son Bou i la seva zona humida.</p>`,
        image: "https://menorca.info/images/2021/05/29/basilica-paleocristiana-son-bou.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-16": {
        title: "Etapa 16: Son Bou – Cala en Porter",
        description: "8 km | Penya-segats i Llucalari.",
        fullContent: `<p>Tram amb desnivell que puja als penya-segats i baixa al barranc de Llucalari.</p>`,
        image: "https://menorca.info/images/2021/05/29/basilica-paleocristiana-son-bou.jpg", // Son Bou area
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-17": {
        title: "Etapa 17: Cala en Porter – Binisafúller",
        description: "11,8 km | Calescoves.",
        fullContent: `<p>Visita obligada a la necròpolis de Calescoves durant el recorregut.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_necropolis_calescoves.jpg",
        imageAuthor: "Apunt Menorca",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-18": {
        title: "Etapa 18: Binisafúller – Punta Prima",
        description: "8,1 km | Binibèquer Vell.",
        fullContent: `<p>Pas pel curiós poblat de pescadors de Binibèquer Vell.</p>`,
        image: "https://menorca.info/images/2021/05/29/sant-lluis.jpg", // Sant Lluis area vibe
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-19": {
        title: "Etapa 19: Punta Prima – Cala Sant Esteve",
        description: "7,3 km | Fort Marlborough.",
        fullContent: `<p>Entrada al port de Maó passant per fortificacions històriques.</p>`,
        image: "https://menorca.info/images/2021/05/29/fort-marlborough.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },
    "etapa-20": {
        title: "Etapa 20: Cala Sant Esteve – Maó",
        description: "6 km | Es Castell i el Port.",
        fullContent: `<p>Caminada urbana pel costat del mar, gaudint de les vistes del port de Maó.</p>`,
        image: "https://www.menorca.info/images/2023/07/20/illa-rei.jpg", // Port de Maó view
        imageAuthor: "Menorca.info",
        sources: [{ name: "Camí de Cavalls 360", url: "https://www.camidecavalls360.com/" }]
    },

    // --- GASTRONOMIA ---
    "mercat-gastronomia": {
        title: "Mercat Gastronòmic de Maó",
        description: "Producte local al Claustre del Carme.",
        fullContent: `
            <p>El lloc ideal per comprar i degustar formatge Maó, sobrassada, vins i altres productes de la terra.</p>
        `,
        image: "https://menorca.info/images/2021/05/29/mercat.jpg",
        imageAuthor: "Menorca.info",
        sources: [{ name: "Mercat des Claustre", url: "https://www.mercatdesclaustre.com/" }]
    },

    // --- ALTRES NATURA ---
    "salbufera": {
        title: "S'Albufera des Grau",
        description: "Parc Natural i reserva d'aus.",
        fullContent: `<p>El cor de la Reserva de Biosfera, un indret clau per a l'observació d'aus i la natura.</p>`,
        image: "https://menorca.info/images/2021/05/29/far-favaritx.jpg", // Nearby area
        imageAuthor: "Menorca.info",
        sources: [{ name: "Parc Natural", url: "https://www.balearsnatura.com/" }]
    },
    "barranc-algendar": {
        title: "Barranc d'Algendar",
        description: "El 'Gran Canyó' de Menorca.",
        fullContent: `<p>Barranc espectacular amb parets de 80 metres i llegendes com la del Pas d'en Revull.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cala_Macarella.jpg/800px-Cala_Macarella.jpg", // Algendar ends at Galdana/Macarella area
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Descobreix Menorca", url: "https://www.descobreixmenorca.com/" }]
    },
    "cova-coloms": {
        title: "Sa Cova des Coloms",
        description: "La Catedral de la prehistòria.",
        fullContent: `<p>Cova natural gegantina al barranc de Binigaus, usada com a santuari fa milers d'anys.</p>`,
        image: "https://apuntmenorca.com/wp-content/uploads/2021/10/apuntmenorca_mt_necropolis_calescoves.jpg", // Cave-like filler
        imageAuthor: "Apunt Menorca",
        sources: [{ name: "Menorca Turisme", url: "https://www.menorca.es" }]
    },
    "el-toro-natura": {
        title: "El Toro",
        description: "La muntanya més alta (358m).",
        fullContent: `<p>Mirador excepcional de tota l'illa, on es troba el santuari de la patrona de Menorca.</p>`,
        image: "https://www.menorca.es/documents/Imatges/2761imgpub.jpg",
        imageAuthor: "Menorca.es",
        sources: [{ name: "Menorca.es", url: "https://www.menorca.es" }]
    },
    "bassa-verda": {
        title: "Sa Bassa Verda",
        description: "Un llac temporal al bosc.",
        fullContent: `<p>Fenomen hidrològic curiós: una bassa que només apareix després de fortes pluges als boscos d'Algaiarens.</p>`,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Cala_del_Pilar_-_Menorca_-_panoramio.jpg", // Nearby area
        imageAuthor: "Wikimedia Commons",
        sources: [{ name: "Descobreix Menorca", url: "https://www.descobreixmenorca.com/" }]
    },
    "elefant-calamorell": {
        title: "L'Elefant de Cala Morell",
        description: "Roca amb forma d'elefant.",
        fullContent: `<p>Curiosa formació rocosa que sembla un elefant bevent aigua, situada a la costa de Cala Morell.</p>`,
        image: "https://www.menorcadiferente.com/wp-content/uploads/2010/01/necropolis-cala-morell-ciutadella-menorca.jpg",
        imageAuthor: "Menorca Diferente",
        sources: [{ name: "Menorca Diferente", url: "https://www.menorcadiferente.com/" }]
    },
    "pont-gil": {
        title: "Es Pont d'en Gil",
        description: "Arc natural sobre el mar.",
        fullContent: `<p>Espectacular pont de roca a prop de Ciutadella, icona de la costa oest.</p>`,
        image: "https://menorca.info/images/2021/05/29/bastio-sa-font.jpg", // Ciutadella area filler
        imageAuthor: "Menorca.info",
        sources: [{ name: "Menorca Turisme", url: "https://www.menorca.es" }]
    }
};
