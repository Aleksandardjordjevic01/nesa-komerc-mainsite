export const locales = ["sr", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sr";

export const translations = {
  sr: {
    hero: {
      headline1: "Toplota koja ukrašava",
      headline2: "vaš prostor",
      cta: "Pogledajte proizvode",
      about: "O nama",
    },
    aboutMap: {
      items: [
        {
          label: "30 godina iskustva",
          text: "Ponosni na kvalitet visokog standarda, dajemo garanciju na funkcionalnost i izdržljivost.",
        },
        {
          label: "Kontrola kvaliteta",
          text: "Zahvaljujući sopstvenim procesima upravljanja kvalitetom, naš stručni kadar garantuje kvalitet.",
        },
        {
          label: "Regionalni lider",
          text: "Nastojimo da konstantno pratimo razvoj modernih tehnologija savremenog globalnog tržišta.",
        },
        {
          label: "Sopstvena proizvodnja",
          text: "Celokupan proces proizvodnje odvija se u našim pogonima, što nam daje potpunu kontrolu nad kvalitetom.",
        },
      ],
    },
    highlights: {
      items: [
        {
          category: "Iskustvo",
          stat: "+30",
          subtitle: "Godina iskustva",
          description:
            "Od 1992. godine gradimo partnerstva zasnovana na kvalitetu. Svaki radijator koji napusti naš pogon nosi garanciju funkcionalnosti i dugotrajnosti.",
        },
        {
          category: "Kvalitet",
          stat: "100%",
          subtitle: "Kontrola kvaliteta",
          description:
            "Svaki proizvod prolazi višestepenu kontrolu pre isporuke. Sopstveni procesi upravljanja kvalitetom osiguravaju da standard nikada ne padne ispod najvišeg nivoa.",
        },
        {
          category: "Distribucija",
          stat: "7+",
          subtitle: "Zemalja u regionu",
          description:
            "Naši proizvodi prisutni su na tržištima širom Balkana. Pratimo razvoj globalnih tehnologija i primenjujemo ih u lokalnom kontekstu.",
        },
      ],
    },
    nav: {
      home: "Naslovna",
      production: "Proizvodnja",
      products: "Proizvodi",
      retail: "Maloprodaja",
      salesNetwork: "Prodajna mreža",
      about: "O nama",
      contact: "Kontakt",
      catalogues: "Katalozi",
    },
    aboutSection: {
      pill: "Naša kompanija",
      headlinePre: "Mi proizvodimo",
      headlineAccent: "TOPLOTU",
      body1:
        "Dugogodišnjim radom stvorili smo kompaniju koja je vodeći proizvođač grejnih tela kako u jugoistočnoj tako i u centralnoj Evropi. Ugled i tradicija obavezuju nas da nastavimo put ka ostvarivanju postavljenih ciljeva.",
      body2:
        "Znanje i iskustvo zaposlenih, savremena tehnologija rada i unapređeni procesi proizvodnje omogućavaju da plasiramo proizvode koji imaju prepoznatljiv kvalitet.",
      tagline: "Kod nas je uvek toplo.",
      stats: [
        { value: "1992", label: "Godina osnivanja" },
        { value: "Trstenik", label: "Sedište" },
        { value: "+30", label: "Godina iskustva" },
        { value: "7+", label: "Zemalja u regionu" },
      ],
    },
    carousel: {
      slides: [
        {
          title: "NK LUX",
          description:
            "Premium radijator za one koji očekuju više — prefinjena forma, vrhunska emisija toplote i elegancija koja traje u svakoj prostoriji.",
          cta: "Pogledajte proizvod",
          href: "/sr/proizvodi/nk-lux",
        },
        {
          title: "NK TERM 22",
          description:
            'Izrađen od čeličnih šavnih cevi (Č 0146), materijala DC01 po EN 10305-3 / EN 10305-5, „D" profila 30×40 mm i rebara od okruglih cevi Ø22 mm. Grejni fluid je topla voda, predaja toplote konvekcijom i zračenjem. Četiri priključka 1/2″.',
          cta: "Pogledajte proizvod",
          href: "/sr/proizvodi/nk-term",
        },
        {
          title: "NK STANDARD",
          description:
            "Cevasti radijator koji zauzima vrlo malo prostora. Osnovna namena je zagrevanje vazduha u kupatilima, ali je moguća primena i u radnim, dnevnim, dečijim sobama, kuhinjama i poslovnim prostorijama.",
          cta: "Pogledajte proizvod",
          href: "/sr/proizvodi/nk-standard",
        },
      ],
    },
    advantages: {
      pill: "Naše prednosti",
      title: "Samostalna proizvodnja radijatora",
      lead: "Kako je u pitanju namenska izrada, po želji kupaca radijatore izrađujemo u različitim dimenzijama i bojama. Mogu se poručiti sa dodatnim elektro-grejačem.",
      beforeLabel: "Izazov",
      afterLabel: "Rešenje",
      items: [
        {
          category: "Prilagodba",
          title: "Dimenzije i boje po meri",
          before:
            "Standardne dimenzije ne odgovaraju prostoru, a skupa adaptacija je neophodna.",
          after:
            "Radijator izrađen tačno po vašim merama, dostupan u svim bojama RAL palete.",
          metaKey: "Paleta",
          metaValue: "RAL standard",
          highlight: "Po meri kupca",
        },
        {
          category: "Proces",
          title: "Kompletan proizvodni proces",
          before:
            "Zavisnost od spoljnih dobavljača i nekontrolisani lanci isporuke.",
          after:
            "Celokupna proizvodnja od sirovine do gotovog radijatora u našim pogonima.",
          metaKey: "Lokacija",
          metaValue: "Svilajnac",
        },
        {
          category: "Inovacija",
          title: "Zaštićen patent",
          before:
            "Kopirana rešenja bez garancije originalnog dizajna i optimalne efikasnosti.",
          after:
            "Inovativni dizajn zaštićen patentom koji osigurava optimalan prenos toplote.",
          metaKey: "Status",
          metaValue: "Patentirano",
          highlight: "Originalni dizajn",
        },
        {
          category: "Tehnika",
          title: "Snaga od 500 do 2000 W",
          before:
            "Ograničen opseg snage koji ne pokriva sve tipove prostorija.",
          after:
            "Širok opseg snage prilagođen kupatilima, dnevnim sobama i kancelarijama.",
          metaKey: "Opseg snage",
          metaValue: "500 – 2000 W",
          highlight: "Svaki prostor",
        },
        {
          category: "Montaža",
          title: "Veoma jednostavna montaža",
          before:
            "Složena ugradnja koja zahteva specijalizovane majstore i poseban alat.",
          after:
            "Standardizovani priključci i uputstva — brza ugradnja bez specijalnog alata.",
          metaKey: "Priključci",
          metaValue: '4 × 1/2"',
          highlight: "Bez specijalnog alata",
        },
        {
          category: "Kvalitet",
          title: "Vrhunski kvalitet",
          before:
            "Nekontrolisani procesi, visoka stopa reklamacija i neizvesna trajnost.",
          after:
            "Višestepena kontrola od dimenzija do ispitivanja pod pritiskom pre svake otpreme.",
          metaKey: "Reklamacije",
          metaValue: "< 1%",
          highlight: "Garancija trajnosti",
        },
        {
          category: "Sertifikati",
          title: "Sertifikovani proizvodi",
          before:
            "Neusaglašenost sa EU standardima otežava izvoz i smanjuje poverenje kupaca.",
          after:
            "Svi relevantni evropski sertifikati — punopravna prisutnost na tržištu EU.",
          metaKey: "Tržišta",
          metaValue: "7+ zemalja",
          highlight: "EU sertifikat",
        },
        {
          category: "Logistika",
          title: "Napredan sistem prodaje i logistike",
          before:
            "Dugi rokovi isporuke, loša komunikacija i nedostatak praćenja narudžbine.",
          after:
            "Brza isporuka, transparentno praćenje i posvećen prodajni tim za svakog kupca.",
          metaKey: "Podrška",
          metaValue: "Svaki radni dan",
          highlight: "Brza isporuka",
        },
      ],
    },
    retail: {
      label: "Maloprodaja",
      title: "Sve za vodovod i grejanje na jednom mestu",
      body: "U našem maloprodajnom objektu možete pronaći kompletnu prateću opremu i materijal za vodovod i grejanje. Raspolažemo i modernom automatikom za grejanje koja vam omogućava da upravljate svojim grejanjem sa bilo koje udaljene lokacije.",
      cta: "Posetite maloprodaju",
      categories: [
        { name: "Vodovodni materijal", href: null },
        { name: "Oprema za grejanje", href: null },
        { name: "Oprema za kupatila", href: "https://nesakomerckeramika.com/" },
      ],
    },
    partners: {
      label: "Partneri",
      title: "Naša prodajna mreža",
    },
    footer: {
      tagline: "Kod nas je uvek toplo.",
      colNav: "Navigacija",
      colContact: "Kontakt",
      colLegal: "Kompanija",
      phone: "+381 35 8814 077",
      email: "office@nesa-komerc.com",
      address: "Svilajnac, Srbija",
      pib: "PIB: 101234567",
      mb: "MB: 07654321",
      copyright: "© 2026 Neša Komerc d.o.o. Sva prava zadržana.",
      links: {
        privacy: "Politika privatnosti",
        terms: "Uslovi korišćenja",
      },
    },
    testimonials: {
      items: [
        {
          quote: "Kvalitet Neša Komerc radijatora nadmašio je naša očekivanja.",
          body: "Ugradili smo ih u više objekata i nijedna reklamacija za tri godine. Preporuka bez rezerve.",
          name: "Marko Petrović",
          role: "Izvršni direktor, Petrović Gradnja",
        },
        {
          quote: "Saradnja koja traje već sedam godina.",
          body: "Pouzdani rokovi isporuke i konstantan kvalitet proizvoda čine ih idealnim partnerom za sve naše projekte.",
          name: "Jelena Nikolić",
          role: "Arhitekta, Studio N",
        },
        {
          quote: "Radijatori koji izgledaju i funkcionišu savršeno.",
          body: "Klijenti redovno pitaju koji su brand — dizajn se uklapa u svaki enterijer, a grejanje je besprekorno.",
          name: "Stefan Jovanović",
          role: "Vlasnik, Sanus Enterijeri",
        },
      ],
    },
    notfound: {
      title: "Stranica nije pronađena",
      body: "Stranica koju tražite ne postoji ili je premeštena. Proverite adresu ili se vratite na početnu stranicu.",
      prim: "Početna stranica",
      sec: "Kontaktirajte nas",
    },
    aboutHero: {
      badge: "O nama",
      title: "Svaka toplota počinje ovde",
      subtitle:
        "Od 1992. gradimo partnerstva zasnovana na kvalitetu, tradiciji i posvećenosti svakom kupcu.",
    },
    contactPage: {
      hero: {
        badge: "Kontakt",
        title: "Stupite u kontakt",
        subtitle: "Tu smo za sva vaša pitanja, ponude i saradnju. Odgovorićemo u najkraćem mogućem roku.",
      },
      info: {
        badge: "Kontakt informacije",
        addressLabel: "Adresa",
        address: "Stevana Sinđelića 30\n35210 Svilajnac, Srbija",
        phoneLabel: "Telefon",
        emailLabel: "Email",
        phones: ["+381 35 8814 077", "+381 35 8814 099"],
        emails: [
          "office@nesa-komerc.com",
          "sales@nesa-komerc.com",
          "teodora.obradovic@nesa-komerc.com",
        ],
      },
      form: {
        badge: "Pošaljite poruku",
        title: "Kako vam možemo pomoći?",
        labelName: "Ime i prezime",
        labelCompany: "Firma",
        labelPhone: "Telefon",
        labelEmail: "Email adresa",
        labelDepartment: "Odeljenje",
        labelMessage: "Poruka",
        placeholderName: "Vaše ime i prezime",
        placeholderCompany: "Naziv firme",
        placeholderPhone: "+381...",
        placeholderEmail: "vasa@email.com",
        placeholderMessage: "Opišite vašu potrebu...",
        submit: "Pošalji poruku",
        successTitle: "Poruka je poslata!",
        successBody: "Hvala na poruci. Kontaktiraćemo vas u najkraćem mogućem roku.",
        departments: [
          { value: "veleprodaja", label: "Veleprodaja" },
          { value: "maloprodaja", label: "Maloprodaja" },
          { value: "proizvodnja", label: "Proizvodnja" },
          { value: "direktor", label: "Direktor" },
          { value: "knjigovodstvo", label: "Knjigovodstvo" },
        ],
      },
      mapLabel: "Pronađite nas",
    },
    aboutPage: {
      company: {
        badge: "Neša Komerc d.o.o.",
        title: "Osnivanje i rast",
        body1:
          'Kompanija \"Neša Komerc\" d.o.o. je osnovana decembra 1992. godine, kada započinje i proizvodnju cevastih radijatora. Kompanija je postepenim napredovanjem i stalnim ulaganjem u novu tehnologiju prerasla u ozbiljnu industrijsku kompaniju.',
        body2:
          'Sedište kompanije je u Svilajncu u industrijskoj zoni, put za Požarevac, 110 km od Beograda. Danas se proizvodnja odvija u modernim industrijskim halama površine 6 000 m². U procesu proizvodnje zastupljena je najmodernija oprema renomiranih svetskih proizvođača (robotsko i tunelsko zavarivanje) i repromaterijal najpoznatijih evropskih firmi uz efikasnu organizaciju koja je potvrđena odgovarajućim sertifikatima.',
      },
      mission: {
        badge: "Misija i vizija",
        title: "Posvećenost kvalitetu i kupcima",
        body1:
          'Naša kompanija je maksimalno posvećena željama svojih kupaca i kvalitetu proizvoda za koje daje petogodišnju garanciju. Cevasti radijatori su izvanrednog kvaliteta, jedinstvenog dizajna koji poseduju sve ateste i sertifikate.',
        body2:
          '\"Neša-komerc\" d.o.o. jeste i biće nezavisno porodično preduzeće. Kompanija je usmerena ka ojačavanju liderske pozicije i osvajanju novih tržišta.',
        guarantee: "5 godina garancije",
      },
      team: {
        badge: "Naš tim",
        title: "Ljudi iza svake toplote",
        subtitle: "Stručni tim koji stoji iza svakog radijatora koji napusti naš pogon.",
        members: [
          { name: "Nenad Ognjanović", role: "Finansijski direktor - vlasnik", email: "office@nesa-komerc.com", phone: "035 8814 077", photo: "/team/team-01.jpg" },
          { name: "Jasna Ognjanović", role: "Komercijalni direktor", email: "ognjanovjasna71@gmail.com", phone: "062-320-076", photo: "/team/team-02.jpg" },
          { name: "Miroljub Ognjanović", role: "Generalni direktor", email: "office@nesa-komerc.com", phone: "035 8814 077", photo: "/team/team-03.jpg" },
          { name: "Teodora Obradović", role: "Komercijalista za domaće i ino tržište", email: "teodora.obradovic@nesa-komerc.com", phone: "063-10-27-316", photo: "/team/team-04.jpg" },
          { name: "Nikolina Prlić", role: "Finansijski referent", email: "knjigovodstvo@nesa-komerc.com", phone: "063-10-27-324", photo: "/team/team-05.png" },
          { name: "Marija Radosavljević", role: "Knjigovođa", email: "knjigovodstvo1@nesa-komerc.com", phone: "063-10-27-955", photo: "/team/team-06.jpg" },
          { name: "Ivana Rajčić", role: "Menadžer maloprodaje", email: "maloprodaja@nesa-komerc.com", phone: "063-10-27-319", photo: "/team/team-07.jpg" },
          { name: "Nataša Milošević", role: "Menadžer veleprodaje", email: "natasa.milosevic@nesa-komerc.com", phone: "063-10-67-444", photo: "/team/team-08.jpg" },
          { name: "Srđan Korunović", role: "Menadžer veleprodaje - magacioner", email: "veleprodaja@nesa-komerc.com", phone: "063-10-27-396", photo: "/team/team-09.jpg" },
          { name: "Dalibor Nedeljković", role: "Šef proizvodnje - inženjer", email: "dalibor.nedeljkovic@nesa-komerc.com", phone: "063-10-27-356", photo: "/team/team-10.png" },
          { name: "Ivan Luković", role: "Menadžer proizvodnje - QMS - kvaliteta", email: "ivan.lukovic@nesa-komerc.com", phone: "063-10-27-358", photo: "/team/team-11.jpg" },
          { name: "Nenad Jovanović", role: "Menadžer maloprodaje", email: "maloprodaja@nesa-komerc.com", phone: "063-10-27-362", photo: "/team/team-12.jpg" },
        ],
      },
    },
    salesNetworkPage: {
      hero: {
        badge: "Prodajna mreža",
        title: "Pronađite Neša Komerc partnera u vašem gradu",
        subtitle: "Pronađite ovlašćenog partnera Neša Komerc u vašem gradu.",
      },
      filterAll: "Svi gradovi",
      mapLabel: "Mapa prodajne mreže",
      partnersLabel: "Naši partneri",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      addressLabel: "Adresa",
      branchesLabel: "Predstavništva",
      noResults: "Nema partnera za odabrani grad.",
    },
    maloprodajaPage: {
      hero: {
        badge: "Maloprodaja",
        title: "Sve za grejanje i vodovod",
        subtitle: "Kompletan asortiman materijala za grejanje, vodovod i opreme — sve na jednom mestu u Svilajncu.",
      },
      heatingLabel: "Materijal za grejanje",
      heatingTitle: "Grejni sistemi i komponente",
      plumbingLabel: "Vodovodni materijal",
      plumbingTitle: "Vodovod i sanitarije",
      brandsLabel: "Brendovi",
      bathroomLabel: "Oprema za kupatilo",
      bathroomTitle: "Keramika, ogledala i armature",
      bathroomBody: "Kompletan program opreme za kupatilo — od pločica vrhunskog kvaliteta do armatura najpoznatijih svetskih proizvođača — dostupan je na našem specijalizovanom sajtu.",
      bathroomCta: "Posetite nesakomerckeramika.com",
      ctaLabel: "Dođite kod nas",
      ctaTitle: "Posetite naš maloprodajni salon",
      ctaBody: "Stevana Sinđelića 309, 35210 Svilajnac — radimo svakog radnog dana od 07:00 do 15:00.",
      ctaContact: "Pozovite nas",
    },
    productsPage: {
      hero: {
        badge: "Asortiman",
        title: "Naši proizvodi",
        subtitle: "Cevasti radijatori i prateći program pouzdano grejanje vašeg doma već više od tri decenije.",
      },
      badges: [
        { icon: "shield", label: "Sertifikovani kvalitet" },
        { icon: "zap", label: "100% Quality" },
        { icon: "star", label: "5 godina garancije" },
      ],
      sectionLabel: "Asortiman",
      sectionTitle: "Cevasti radijatori i oprema",
      cta: "Detaljnije",
      products: [
        {
          id: "nk-lux",
          name: "NK LUX",
          tag: "Premium",
          description: "Cevasti radijator prepoznatljivog dizajna sa zaobljenim profilom. Idealan za kupatila — pruža toplotu i prostor za sušenje peškira, uz elegantan izgled.",
          image: "/proizvodi/nk-lux.jpg",
          href: "/sr/proizvodi/nk-lux",
        },
        {
          id: "nk-term",
          name: "NK TERM 22",
          tag: "Novo",
          description: "Izrađen od čeličnih šavnih cevi (Č 0146), materijala DC01 po EN 10305-3/5, \"D\" profila 30×40 mm i rebara od okruglih cevi Ø22 mm.",
          image: "/proizvodi/nkterm.png",
          href: "/sr/proizvodi/nk-term",
        },
        {
          id: "nk-standard",
          name: "NK STANDARD",
          tag: "Bestseller",
          description: "Radijator \"NK STANDARD\" je cevasti radijator koji svojom veličinom i dizajnom zauzima very malo prostora. Idealan za kupatila i sve stambene prostore.",
          image: "/proizvodi/nkstandard.png",
          href: "/sr/proizvodi/nk-standard",
        },
        {
          id: "srednji-prikljucak",
          name: "Srednji priključak",
          tag: "Oprema",
          description: "Srednji priključak na cevastom radijatoru služi za povezivanje na cev ili pod, iz zida, a i za kombinaciju grejanja radijatorima i podnog grejanja.",
          image: "/proizvodi/prikljucak.png",
          href: "/sr/proizvodi/nk-standard",
        },
        {
          id: "sa-grejacem",
          name: "Sa grejačem",
          tag: "Opcija",
          description: "U ponudi imamo i sušače sa mogućnošću ugradnje elektičnog grejača, putem kombinovane vode i termofluom. Jačina grejača zavisi od dimenzija i jedne zadatke.",
          image: "/proizvodi/sagrejacem.png",
          href: "/sr/proizvodi/nk-lux",
        },
        {
          id: "prateci-program",
          name: "Prateći program",
          tag: "Program",
          description: "Naša ekspanzija posuda Neša KOMERC može biti iskorišćena za instalaciju posude na čelik ili rekel, drugi vertikalni površinu, fasci, šlit, dimenzije 80×165.",
          image: "/img5.png",
          href: "/sr/proizvodi/nk-standard",
        },
      ],
    },
    productionPage: {
      hero: {
        badge: "Naša proizvodnja",
        title: "Gde nastaje svaki radijator",
        subtitle: "Sopstveni pogon od 6 000 m², robotsko zavarivanje i višestepena kontrola kvaliteta sve pod jednim krovom u Svilajncu.",
      },
      stats: [
        { value: "1992", label: "Godina prve proizvodnje" },
        { value: "6 000 m²", label: "Površina pogona" },
        { value: "7+", label: "Zemalja izvoza" },
        { value: "5 god.", label: "Garancija na svaki proizvod" },
      ],
      process: {
        badge: "Kako to radimo",
        title: "Od sirovine do radijatora",
        subtitle: "Svaki korak pod punom kontrolom\nbez kompromisa.",
        steps: [
          { number: "01", title: "Izbor repromaterijala", body: "Koristimo čelične cevi i limove isključivo od renomiranih evropskih dobavljača sa pratećom dokumentacijom kvaliteta." },
          { number: "02", title: "Sečenje i savijanje", body: "CNC mašine precizno seku i savijaju cevi prema tačnim merama svakog modela — tolerancija ispod 0,5 mm." },
          { number: "03", title: "Robotsko zavarivanje", body: "Tunelski i robotski automati obezbeđuju homogen, ponovljiv zavar bez ljudske greške na svakom komadu." },
          { number: "04", title: "Lakiranje i završna obrada", body: "Elektrostatičko lakiranje u celoj RAL paleti. Debljina premaza kontroliše se meračem pre i posle sušenja." },
          { number: "05", title: "Ispitivanje pod pritiskom", body: "Svaki radijator prolazi hidro-test na 10 bar pre pakovanja — nula kompromisa, nula reklamacija." },
          { number: "06", title: "Pakovanje i isporuka", body: "Zaštitno pakovanje i striktna logistika osiguravaju da radijator stigne neoštećen — u roku, na pravu adresu." },
        ],
      },
      quality: {
        badge: "Sertifikovani kvalitet",
        title: "Stroge kontrole na svakom koraku",
        body: "Naši radijatori nose sve relevantne evropske sertifikate. Sistem menadžmenta kvalitetom po SRPS ISO 9001:2015 garantuje da svaki komad napušta pogon u skladu sa propisanim standardima.",
        pillars: [
          { icon: "shield", title: "Sertifikovan kvalitet", body: "Prečišćeni atesti za sve modele od 1992." },
          { icon: "zap", title: "Virtuelni materijali", body: "Čelik prve kategorije i EU premazi." },
          { icon: "cpu", title: "Striktni koder", body: "Svaki radijator dobija jedinstveni serijski kôd." },
        ],
      },
      gallery: {
        badge: "Galerija",
        title: "Pogled u proizvodnju",
        subtitle: "Trenutak iz naše pogone — od sirovog materijala do gotovog radijatora.",
      },
      certificates: {
        badge: "Naši sertifikati",
        title: "Usklađeni sa međunarodnim standardima",
        body: "Posvećenost kvalitetu potvrđena je priznatim sertifikatima. Kompanija poseduje sertifikat SRPS ISO 9001:2015 kao i SR EN 442-3:2014, koji su osnova za plasman na zahtevna inostrana tržišta.",
        items: [
          { title: "SRPS ISO 9001:2015", body: "Sistem menadžmenta kvalitetom koji reguliše sve interne procese od nabavke do isporuke." },
          { title: "SR EN 442-3:2014", body: "Evropski standard za cevaste radijatore koji potvrđuje tehničke karakteristike i bezbednost." },
          { title: "Atest mašinskog fakulteta", body: "Nezavisno ispitivanje termičkih i mehaničkih karakteristika od strane akreditovane institucije." },
        ],
      },
    },
  },
  en: {
    hero: {
      headline1: "Warmth that decorates",
      headline2: "your space",
      cta: "View products",
      about: "About us",
    },
    aboutMap: {
      items: [
        {
          label: "30 years of experience",
          text: "Proud of our high standards, we guarantee the functionality and durability of every product.",
        },
        {
          label: "Quality control",
          text: "Through our own quality management processes, our expert team ensures consistent excellence.",
        },
        {
          label: "Regional leader",
          text: "We continuously track advancements in modern technology across the global marketplace.",
        },
        {
          label: "Own manufacturing",
          text: "The entire production process takes place in our facilities, giving us full control over quality.",
        },
      ],
    },
    highlights: {
      items: [
        {
          category: "Experience",
          stat: "+30",
          subtitle: "Years of experience",
          description:
            "Since 1992 we have built partnerships grounded in quality. Every radiator leaving our facility carries a guarantee of performance and longevity.",
        },
        {
          category: "Quality",
          stat: "100%",
          subtitle: "Quality control",
          description:
            "Every product undergoes multi-stage inspection before delivery. Our internal quality management processes ensure standards never fall below the highest level.",
        },
        {
          category: "Distribution",
          stat: "7+",
          subtitle: "Countries in the region",
          description:
            "Our products are present across Balkan markets. We follow global technology trends and apply them in a local context.",
        },
      ],
    },
    nav: {
      home: "Home",
      production: "Production",
      products: "Products",
      retail: "Retail",
      salesNetwork: "Sales Network",
      about: "About Us",
      contact: "Contact",
      catalogues: "Catalogues",
    },
    aboutSection: {
      pill: "Our Company",
      headlinePre: "We produce",
      headlineAccent: "WARMTH",
      body1:
        "Through decades of work we have built a company that is the leading manufacturer of heating elements in both South-Eastern and Central Europe. Our reputation and tradition compel us to continue the path towards achieving our goals.",
      body2:
        "The knowledge and experience of our employees, modern production technology and improved manufacturing processes allow us to deliver products with a recognisable standard of quality.",
      tagline: "It’s always warm with us.",
      stats: [
        { value: "1992", label: "Founded" },
        { value: "Trstenik", label: "Headquarters" },
        { value: "+30", label: "Years of experience" },
        { value: "7+", label: "Countries in region" },
      ],
    },
    retail: {
      label: "Retail",
      title: "Everything for plumbing & heating in one place",
      body: "Our retail store carries a full range of accessories and materials for plumbing and heating systems. We also stock modern heating automation that lets you control your heating from any remote location.",
      cta: "Visit our store",
      categories: [
        { name: "Plumbing Materials", href: null },
        { name: "Heating Equipment", href: null },
        { name: "Bathroom Equipment", href: "https://nesakomerckeramika.com/" },
      ],
    },
    partners: {
      label: "Partners",
      title: "Our sales network",
    },
    footer: {
      tagline: "Where warmth meets quality.",
      colNav: "Navigation",
      colContact: "Contact",
      colLegal: "Company",
      phone: "+381 35 8814 077",
      email: "office@nesa-komerc.com",
      address: "Svilajnac, Serbia",
      pib: "VAT: 101234567",
      mb: "Reg: 07654321",
      copyright: "© 2026 Neša Komerc d.o.o. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
      },
    },
    testimonials: {
      items: [
        {
          quote:
            "The quality of Neša Komerc radiators exceeded our expectations.",
          body: "We installed them across multiple buildings and had zero complaints in three years. Highly recommended.",
          name: "Marko Petrović",
          role: "CEO, Petrović Construction",
        },
        {
          quote: "A partnership that has lasted seven years.",
          body: "Reliable delivery times and consistent product quality make them the ideal partner for all our projects.",
          name: "Jelena Nikolić",
          role: "Architect, Studio N",
        },
        {
          quote: "Radiators that look and perform perfectly.",
          body: "Clients regularly ask what brand they are — the design fits every interior and the heating is flawless.",
          name: "Stefan Jovanović",
          role: "Owner, Sanus Interiors",
        },
      ],
    },
    carousel: {
      slides: [
        {
          title: "NK LUX",
          description:
            "A premium radiator designed for those who expect more — refined lines, superior heat output and lasting elegance in every room.",
          cta: "View product",
          href: "/en/products/nk-lux",
        },
        {
          title: "NK TERM 22",
          description:
            'Made from welded steel pipes (Č 0146, DC01 to EN 10305-3 / EN 10305-5) with 30×40 mm "D" profiles and Ø22 mm round-tube fins. Hot water is the heating medium; heat transfer by convection and radiation. Four ½″ connections.',
          cta: "View product",
          href: "/en/products/nk-term",
        },
        {
          title: "NK STANDARD",
          description:
            "A tubular radiator with a compact footprint, engineered primarily for bathroom heating but equally at home in living rooms, children's rooms, kitchens and offices.",
          cta: "View product",
          href: "/en/products/nk-standard",
        },
      ],
    },
    advantages: {
      pill: "Our strengths",
      title: "Independent radiator manufacturing",
      lead: "As a custom manufacturer, we produce radiators in a wide range of dimensions and colours to suit each customer. An additional electric heater can be fitted on request.",
      beforeLabel: "Challenge",
      afterLabel: "Solution",
      items: [
        {
          category: "Customisation",
          title: "Custom dimensions & colours",
          before:
            "Standard dimensions do not fit the space, and costly adaptation is required.",
          after:
            "Radiator built to your exact measurements, available in every RAL palette colour.",
          metaKey: "Palette",
          metaValue: "RAL standard",
          highlight: "Built to order",
        },
        {
          category: "Process",
          title: "Complete production process",
          before:
            "Dependence on external suppliers and uncontrolled supply chains.",
          after:
            "Entire production from raw material to finished radiator in our own facility.",
          metaKey: "Location",
          metaValue: "Svilajnac",
        },
        {
          category: "Innovation",
          title: "Protected patent",
          before:
            "Copied solutions with no guarantee of original design or optimal efficiency.",
          after:
            "Innovative patent-protected design ensuring optimal heat transfer.",
          metaKey: "Status",
          metaValue: "Patented",
          highlight: "Original design",
        },
        {
          category: "Technical",
          title: "Power range 500–2000 W",
          before: "Limited power range that does not cover all room types.",
          after:
            "Wide power range suited to bathrooms, living rooms and offices alike.",
          metaKey: "Power range",
          metaValue: "500 – 2000 W",
          highlight: "Every room size",
        },
        {
          category: "Installation",
          title: "Very easy installation",
          before:
            "Complex installation requiring specialist tradespeople and special tools.",
          after:
            "Standardised connections and included instructions — fast, tool-free fitting.",
          metaKey: "Connections",
          metaValue: '4 × 1/2"',
          highlight: "No special tools",
        },
        {
          category: "Quality",
          title: "Premium quality",
          before:
            "Uncontrolled processes, high complaint rates and uncertain longevity.",
          after:
            "Multi-stage inspection from dimensional checks to pressure testing before every dispatch.",
          metaKey: "Complaints",
          metaValue: "< 1%",
          highlight: "Durability guaranteed",
        },
        {
          category: "Certifications",
          title: "Certified products",
          before:
            "Non-compliance with EU standards hinders exports and reduces buyer confidence.",
          after:
            "All relevant European certifications — full access to the EU market.",
          metaKey: "Markets",
          metaValue: "7+ countries",
          highlight: "EU certified",
        },
        {
          category: "Logistics",
          title: "Advanced sales & logistics",
          before:
            "Long delivery times, poor communication and no order tracking.",
          after:
            "Fast delivery, transparent tracking and a dedicated sales team for every order.",
          metaKey: "Support",
          metaValue: "Every business day",
          highlight: "Fast delivery",
        },
      ],
    },
    notfound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or has been moved. Check the address or return to the homepage.",
      prim: "Homepage",
      sec: "Contact us",
    },
    aboutHero: {
      badge: "About Us",
      title: "Every warmth starts here",
      subtitle:
        "Since 1992, we have been building partnerships grounded in quality, tradition and dedication to every customer.",
    },
    contactPage: {
      hero: {
        badge: "Contact",
        title: "Get in touch",
        subtitle: "We are here for all your questions, offers and partnerships. We will respond as soon as possible.",
      },
      info: {
        badge: "Contact information",
        addressLabel: "Address",
        address: "Stevana Sinđelića 30\n35210 Svilajnac, Serbia",
        phoneLabel: "Phone",
        emailLabel: "Email",
        phones: ["+381 35 8814 077", "+381 35 8814 099"],
        emails: [
          "office@nesa-komerc.com",
          "sales@nesa-komerc.com",
          "teodora.obradovic@nesa-komerc.com",
        ],
      },
      form: {
        badge: "Send a message",
        title: "How can we help?",
        labelName: "Full name",
        labelCompany: "Company",
        labelPhone: "Phone",
        labelEmail: "Email address",
        labelDepartment: "Department",
        labelMessage: "Message",
        placeholderName: "Your full name",
        placeholderCompany: "Company name",
        placeholderPhone: "+381...",
        placeholderEmail: "your@email.com",
        placeholderMessage: "Describe your need...",
        submit: "Send message",
        successTitle: "Message sent!",
        successBody: "Thank you for your message. We will get back to you as soon as possible.",
        departments: [
          { value: "wholesale", label: "Wholesale" },
          { value: "retail", label: "Retail" },
          { value: "production", label: "Production" },
          { value: "director", label: "Director" },
          { value: "accounting", label: "Accounting" },
        ],
      },
      mapLabel: "Find us",
    },
    aboutPage: {
      company: {
        badge: "Neša Komerc d.o.o.",
        title: "Foundation & Growth",
        body1:
          'Neša Komerc d.o.o. was founded in December 1992, when it also began manufacturing tubular radiators. Through steady progress and continuous investment in new technology, the company has grown into a serious industrial enterprise.',
        body2:
          'The company is headquartered in Svilajnac, in the industrial zone on the road to Požarevac, 110 km from Belgrade. Today, production takes place in modern industrial halls covering 6,000 m². The manufacturing process employs state-of-the-art equipment from renowned world manufacturers (robotic and tunnel welding) and raw materials from the most reputable European companies, backed by an efficient organisation confirmed by the relevant certificates.',
      },
      mission: {
        badge: "Mission & Vision",
        title: "Dedicated to quality and customers",
        body1:
          'Our company is fully committed to its customers\' needs and the quality of its products, which come with a five-year guarantee. The tubular radiators are of outstanding quality with a unique design, holding all required attestations and certificates.',
        body2:
          'Neša Komerc d.o.o. is and will remain an independent family business, focused on strengthening its leadership position and entering new markets.',
        guarantee: "5-year guarantee",
      },
      team: {
        badge: "Our Team",
        title: "The people behind every warmth",
        subtitle: "The expert team behind every radiator that leaves our facility.",
        members: [
          { name: "Nenad Ognjanović", role: "Financial Director - Owner", email: "office@nesa-komerc.com", phone: "035 8814 077", photo: "/team/team-01.jpg" },
          { name: "Jasna Ognjanović", role: "Commercial Director", email: "ognjanovjasna71@gmail.com", phone: "062-320-076", photo: "/team/team-02.jpg" },
          { name: "Miroljub Ognjanović", role: "General Director", email: "office@nesa-komerc.com", phone: "035 8814 077", photo: "/team/team-03.jpg" },
          { name: "Teodora Obradović", role: "Sales Representative - Domestic & International", email: "teodora.obradovic@nesa-komerc.com", phone: "063-10-27-316", photo: "/team/team-04.jpg" },
          { name: "Nikolina Prlić", role: "Financial Officer", email: "knjigovodstvo@nesa-komerc.com", phone: "063-10-27-324", photo: "/team/team-05.png" },
          { name: "Marija Radosavljević", role: "Accountant", email: "knjigovodstvo1@nesa-komerc.com", phone: "063-10-27-955", photo: "/team/team-06.jpg" },
          { name: "Ivana Rajčić", role: "Retail Manager", email: "maloprodaja@nesa-komerc.com", phone: "063-10-27-319", photo: "/team/team-07.jpg" },
          { name: "Nataša Milošević", role: "Wholesale Manager", email: "natasa.milosevic@nesa-komerc.com", phone: "063-10-67-444", photo: "/team/team-08.jpg" },
          { name: "Srđan Korunović", role: "Wholesale Manager - Warehouse", email: "veleprodaja@nesa-komerc.com", phone: "063-10-27-396", photo: "/team/team-09.jpg" },
          { name: "Dalibor Nedeljković", role: "Head of Production - Engineer", email: "dalibor.nedeljkovic@nesa-komerc.com", phone: "063-10-27-356", photo: "/team/team-10.png" },
          { name: "Ivan Luković", role: "Production Manager - QMS - Quality", email: "ivan.lukovic@nesa-komerc.com", phone: "063-10-27-358", photo: "/team/team-11.jpg" },
          { name: "Nenad Jovanović", role: "Retail Manager", email: "maloprodaja@nesa-komerc.com", phone: "063-10-27-362", photo: "/team/team-12.jpg" },
        ],
      },
    },
    salesNetworkPage: {
      hero: {
        badge: "Sales Network",
        title: "Authorised Neša Komerc Sales Partners",
        subtitle: "Find an authorised Neša Komerc partner in your city.",
      },
      filterAll: "All cities",
      mapLabel: "Sales network map",
      partnersLabel: "Our partners",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      branchesLabel: "Branches",
      noResults: "No partners found for the selected city.",
    },
    maloprodajaPage: {
      hero: {
        badge: "Retail",
        title: "Everything for heating & plumbing",
        subtitle: "A complete range of heating materials, plumbing supplies and equipment — all in one place in Svilajnac.",
      },
      heatingLabel: "Heating materials",
      heatingTitle: "Heating systems & components",
      plumbingLabel: "Plumbing materials",
      plumbingTitle: "Plumbing & sanitary",
      brandsLabel: "Brands",
      bathroomLabel: "Bathroom equipment",
      bathroomTitle: "Tiles, mirrors & fixtures",
      bathroomBody: "Our complete bathroom equipment range — from premium tiles to fixtures from the world's leading manufacturers — is available on our specialist website.",
      bathroomCta: "Visit nesakomerckeramika.com",
      ctaLabel: "Visit us",
      ctaTitle: "Visit our retail showroom",
      ctaBody: "Stevana Sinđelića 309, 35210 Svilajnac — open Monday–Friday, 07:00–15:00.",
      ctaContact: "Call us",
    },
    productsPage: {
      hero: {
        badge: "Range",
        title: "Our products",
        subtitle: "Tubular radiators and accessories — reliable home heating for over three decades.",
      },
      badges: [
        { icon: "shield", label: "Certified quality" },
        { icon: "zap", label: "100% Quality" },
        { icon: "star", label: "5-year warranty" },
      ],
      sectionLabel: "Range",
      sectionTitle: "Tubular radiators & equipment",
      cta: "Details",
      products: [
        {
          id: "nk-lux",
          name: "NK LUX",
          tag: "Premium",
          description: "A tubular radiator with a distinctive rounded profile. Ideal for bathrooms — provides warmth and a towel-drying space with an elegant look.",
          image: "/proizvodi/nk-lux.jpg",
          href: "/en/products/nk-lux",
        },
        {
          id: "nk-term",
          name: "NK TERM 22",
          tag: "New",
          description: "Made from seam steel tubes (Č 0146), DC01 material per EN 10305-3/5, \"D\" profile 30×40 mm and Ø22 mm round tube fins.",
          image: "/proizvodi/nkterm.png",
          href: "/en/products/nk-term",
        },
        {
          id: "nk-standard",
          name: "NK STANDARD",
          tag: "Bestseller",
          description: "A tubular radiator that takes up very little space. Primarily designed for bathrooms but equally at home in living rooms, offices, and kitchens.",
          image: "/proizvodi/nkstandard.png",
          href: "/en/products/nk-standard",
        },
        {
          id: "center-connection",
          name: "Centre connection",
          tag: "Accessory",
          description: "The centre connection on a tubular radiator is used for wall, floor or combined underfloor heating integration.",
          image: "/proizvodi/prikljucak.png",
          href: "/en/products/nk-standard",
        },
        {
          id: "with-heater",
          name: "With heater",
          tag: "Option",
          description: "We also supply dryers with an optional electric heater, via water/thermofluid combination. Heater output depends on radiator dimensions.",
          image: "/proizvodi/sagrejacem.png",
          href: "/en/products/nk-lux",
        },
        {
          id: "accessories",
          name: "Accessories",
          tag: "Programme",
          description: "The Neša Komerc accessory range can be used for vertical installations on steel or plastic surfaces, various dimensions available.",
          image: "/img5.png",
          href: "/en/products/nk-standard",
        },
      ],
    },
    productionPage: {
      hero: {
        badge: "Our production",
        title: "Where every radiator is born",
        subtitle: "Our own 6,000 m² facility, robotic welding and multi-stage quality control all under one roof in Svilajnac.",
      },
      stats: [
        { value: "1992", label: "Year production began" },
        { value: "6,000 m²", label: "Facility floor area" },
        { value: "7+", label: "Export countries" },
        { value: "5 yr.", label: "Warranty on every product" },
      ],
      process: {
        badge: "How we do it",
        title: "From raw material to radiator",
        subtitle: "Every step under full control — no compromises.",
        steps: [
          { number: "01", title: "Raw material selection", body: "We source steel tubes and sheets exclusively from reputable European suppliers, each with full quality documentation." },
          { number: "02", title: "Cutting & bending", body: "CNC machines precisely cut and bend tubes to the exact dimensions of each model — tolerance below 0.5 mm." },
          { number: "03", title: "Robotic welding", body: "Tunnel and robotic welders deliver a homogeneous, repeatable weld without human error on every single piece." },
          { number: "04", title: "Painting & finishing", body: "Electrostatic painting across the full RAL palette. Coating thickness is measured before and after curing." },
          { number: "05", title: "Pressure testing", body: "Every radiator undergoes a hydro-test at 10 bar before packaging — zero compromise, zero returns." },
          { number: "06", title: "Packaging & dispatch", body: "Protective packaging and strict logistics ensure the radiator arrives undamaged — on time, to the right address." },
        ],
      },
      quality: {
        badge: "Certified quality",
        title: "Strict checks at every stage",
        body: "Our radiators carry all relevant European certificates. The quality management system under SRPS ISO 9001:2015 guarantees that every piece leaves the facility in full compliance with prescribed standards.",
        pillars: [
          { icon: "shield", title: "Certified quality", body: "Cleared approvals for all models since 1992." },
          { icon: "zap", title: "Premium materials", body: "First-grade steel and EU-certified coatings." },
          { icon: "cpu", title: "Serial tracking", body: "Every radiator receives a unique serial code." },
        ],
      },
      gallery: {
        badge: "Gallery",
        title: "A look inside production",
        subtitle: "A moment from our facility — from raw material to finished radiator.",
      },
      certificates: {
        badge: "Our certificates",
        title: "Aligned with international standards",
        body: "Our commitment to quality is confirmed by recognised certificates. The company holds SRPS ISO 9001:2015 and SR EN 442-3:2014 — the foundation for entering demanding international markets.",
        items: [
          { title: "SRPS ISO 9001:2015", body: "Quality management system governing all internal processes from procurement to delivery." },
          { title: "SR EN 442-3:2014", body: "European standard for tubular radiators confirming technical characteristics and safety." },
          { title: "Faculty of Mechanical Engineering report", body: "Independent testing of thermal and mechanical characteristics by an accredited institution." },
        ],
      },
    },
  },
  de: {
    hero: {
      headline1: "Wärme, die Ihren Raum",
      headline2: "verschönert",
      cta: "Produkte ansehen",
      about: "Über uns",
    },
    aboutMap: {
      items: [
        {
          label: "30 Jahre Erfahrung",
          text: "Stolz auf unseren hohen Standard garantieren wir die Funktionalität und Langlebigkeit jedes Produkts.",
        },
        {
          label: "Qualitätskontrolle",
          text: "Durch eigene Qualitätsmanagementprozesse sichert unser Expertenteam gleichbleibende Spitzenqualität.",
        },
        {
          label: "Regionaler Marktführer",
          text: "Wir verfolgen kontinuierlich die Entwicklungen moderner Technologien auf dem globalen Markt.",
        },
        {
          label: "Eigene Fertigung",
          text: "Der gesamte Produktionsprozess findet in unseren Anlagen statt, was uns volle Kontrolle über die Qualität gibt.",
        },
      ],
    },
    highlights: {
      items: [
        {
          category: "Erfahrung",
          stat: "+30",
          subtitle: "Jahre Erfahrung",
          description:
            "Seit 1992 bauen wir Partnerschaften auf Basis von Qualität. Jeder Heizkörper, der unser Werk verlässt, trägt eine Garantie für Leistung und Langlebigkeit.",
        },
        {
          category: "Qualität",
          stat: "100%",
          subtitle: "Qualitätskontrolle",
          description:
            "Jedes Produkt durchläuft vor der Auslieferung eine mehrstufige Prüfung. Unsere internen Qualitätsmanagementprozesse stellen sicher, dass der Standard nie unter das höchste Niveau fällt.",
        },
        {
          category: "Distribution",
          stat: "7+",
          subtitle: "Länder in der Region",
          description:
            "Unsere Produkte sind auf den Märkten des gesamten Balkans präsent. Wir verfolgen globale Technologietrends und wenden sie im lokalen Kontext an.",
        },
      ],
    },
    nav: {
      home: "Startseite",
      production: "Produktion",
      products: "Produkte",
      retail: "Einzelhandel",
      salesNetwork: "Vertriebsnetz",
      about: "Über uns",
      contact: "Kontakt",
      catalogues: "Kataloge",
    },
    aboutSection: {
      pill: "Unser Unternehmen",
      headlinePre: "Wir produzieren",
      headlineAccent: "WÄRME",
      body1:
        "In jahrzehntelanger Arbeit haben wir ein Unternehmen aufgebaut, das der führende Hersteller von Heizelementen in Südost- und Mitteleuropa ist. Unser Ruf und unsere Tradition verpflichten uns, den Weg zur Erreichung unserer Ziele fortzusetzen.",
      body2:
        "Das Wissen und die Erfahrung unserer Mitarbeiter, moderne Produktionstechnologie und verbesserte Fertigungsprozesse ermöglichen es uns, Produkte mit einem unverkennbaren Qualitätsstandard zu liefern.",
      tagline: "Bei uns ist es immer warm.",
      stats: [
        { value: "1992", label: "Gegründet" },
        { value: "Trstenik", label: "Hauptsitz" },
        { value: "+30", label: "Jahre Erfahrung" },
        { value: "7+", label: "Länder in der Region" },
      ],
    },
    retail: {
      label: "Einzelhandel",
      title: "Alles für Sanitär & Heizung an einem Ort",
      body: "Unser Einzelhandelsgeschäft führt ein komplettes Sortiment an Zubehör und Materialien für Sanitär- und Heizungssysteme. Wir führen außerdem moderne Heizungsautomatik, mit der Sie Ihre Heizung von jedem entfernten Ort aus steuern können.",
      cta: "Unser Geschäft besuchen",
      categories: [
        { name: "Sanitärmaterial", href: null },
        { name: "Heizungsausstattung", href: null },
        { name: "Badausstattung", href: "https://nesakomerckeramika.com/" },
      ],
    },
    partners: {
      label: "Partner",
      title: "Unser Vertriebsnetz",
    },
    footer: {
      tagline: "Wo Wärme auf Qualität trifft.",
      colNav: "Navigation",
      colContact: "Kontakt",
      colLegal: "Unternehmen",
      phone: "+381 35 8814 077",
      email: "office@nesa-komerc.com",
      address: "Svilajnac, Serbien",
      pib: "USt-IdNr.: 101234567",
      mb: "Reg.-Nr.: 07654321",
      copyright: "© 2026 Neša Komerc d.o.o. Alle Rechte vorbehalten.",
      links: {
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
      },
    },
    testimonials: {
      items: [
        {
          quote:
            "Die Qualität der Neša-Komerc-Heizkörper hat unsere Erwartungen übertroffen.",
          body: "Wir haben sie in mehreren Gebäuden installiert und hatten in drei Jahren keine einzige Beanstandung. Sehr zu empfehlen.",
          name: "Marko Petrović",
          role: "Geschäftsführer, Petrović Construction",
        },
        {
          quote: "Eine Partnerschaft, die seit sieben Jahren besteht.",
          body: "Zuverlässige Lieferzeiten und gleichbleibende Produktqualität machen sie zum idealen Partner für all unsere Projekte.",
          name: "Jelena Nikolić",
          role: "Architektin, Studio N",
        },
        {
          quote: "Heizkörper, die perfekt aussehen und funktionieren.",
          body: "Kunden fragen regelmäßig, welche Marke das ist — das Design passt in jedes Interieur und die Heizleistung ist tadellos.",
          name: "Stefan Jovanović",
          role: "Inhaber, Sanus Interiors",
        },
      ],
    },
    carousel: {
      slides: [
        {
          title: "NK LUX",
          description:
            "Ein Premium-Heizkörper für alle, die mehr erwarten — feine Linien, hohe Heizleistung und bleibende Eleganz in jedem Raum.",
          cta: "Produkt ansehen",
          href: "/de/products/nk-lux",
        },
        {
          title: "NK TERM 22",
          description:
            'Aus geschweißten Stahlrohren (Č 0146, DC01 nach EN 10305-3 / EN 10305-5) mit 30×40 mm „D"-Profilen und Ø22 mm Rundrohr-Lamellen. Heizmedium ist Warmwasser; Wärmeübertragung durch Konvektion und Strahlung. Vier ½″-Anschlüsse.',
          cta: "Produkt ansehen",
          href: "/de/products/nk-term",
        },
        {
          title: "NK STANDARD",
          description:
            "Ein Röhrenheizkörper mit kompaktem Grundriss, vorrangig für die Badheizung konzipiert, aber ebenso zu Hause in Wohnzimmern, Kinderzimmern, Küchen und Büros.",
          cta: "Produkt ansehen",
          href: "/de/products/nk-standard",
        },
      ],
    },
    advantages: {
      pill: "Unsere Stärken",
      title: "Unabhängige Heizkörperfertigung",
      lead: "Als Auftragsfertiger produzieren wir Heizkörper in einer Vielzahl von Abmessungen und Farben, passend für jeden Kunden. Auf Wunsch kann ein zusätzlicher Elektroheizstab eingebaut werden.",
      beforeLabel: "Herausforderung",
      afterLabel: "Lösung",
      items: [
        {
          category: "Anpassung",
          title: "Maßgeschneiderte Abmessungen & Farben",
          before:
            "Standardabmessungen passen nicht in den Raum und erfordern kostspielige Anpassungen.",
          after:
            "Heizkörper nach Ihren genauen Maßen, in jeder Farbe der RAL-Palette erhältlich.",
          metaKey: "Palette",
          metaValue: "RAL-Standard",
          highlight: "Auf Bestellung gefertigt",
        },
        {
          category: "Prozess",
          title: "Kompletter Produktionsprozess",
          before:
            "Abhängigkeit von externen Lieferanten und unkontrollierten Lieferketten.",
          after:
            "Gesamte Produktion vom Rohmaterial bis zum fertigen Heizkörper im eigenen Werk.",
          metaKey: "Standort",
          metaValue: "Svilajnac",
        },
        {
          category: "Innovation",
          title: "Geschütztes Patent",
          before:
            "Kopierte Lösungen ohne Garantie für Originaldesign oder optimale Effizienz.",
          after:
            "Innovatives, patentgeschütztes Design für optimale Wärmeübertragung.",
          metaKey: "Status",
          metaValue: "Patentiert",
          highlight: "Originaldesign",
        },
        {
          category: "Technik",
          title: "Leistungsbereich 500–2000 W",
          before: "Begrenzter Leistungsbereich, der nicht alle Raumtypen abdeckt.",
          after:
            "Breiter Leistungsbereich, geeignet für Bäder, Wohnzimmer und Büros gleichermaßen.",
          metaKey: "Leistungsbereich",
          metaValue: "500 – 2000 W",
          highlight: "Jede Raumgröße",
        },
        {
          category: "Montage",
          title: "Sehr einfache Montage",
          before:
            "Komplexe Installation, die Fachhandwerker und Spezialwerkzeug erfordert.",
          after:
            "Standardisierte Anschlüsse und beiliegende Anleitung — schnelle, werkzeuglose Montage.",
          metaKey: "Anschlüsse",
          metaValue: '4 × 1/2"',
          highlight: "Kein Spezialwerkzeug",
        },
        {
          category: "Qualität",
          title: "Premium-Qualität",
          before:
            "Unkontrollierte Prozesse, hohe Reklamationsraten und ungewisse Langlebigkeit.",
          after:
            "Mehrstufige Prüfung von der Maßkontrolle bis zum Drucktest vor jedem Versand.",
          metaKey: "Reklamationen",
          metaValue: "< 1%",
          highlight: "Langlebigkeit garantiert",
        },
        {
          category: "Zertifizierungen",
          title: "Zertifizierte Produkte",
          before:
            "Nichteinhaltung der EU-Normen behindert den Export und mindert das Vertrauen der Käufer.",
          after:
            "Alle relevanten europäischen Zertifizierungen — voller Zugang zum EU-Markt.",
          metaKey: "Märkte",
          metaValue: "7+ Länder",
          highlight: "EU-zertifiziert",
        },
        {
          category: "Logistik",
          title: "Fortschrittlicher Vertrieb & Logistik",
          before:
            "Lange Lieferzeiten, schlechte Kommunikation und keine Auftragsverfolgung.",
          after:
            "Schnelle Lieferung, transparente Verfolgung und ein engagiertes Vertriebsteam für jeden Auftrag.",
          metaKey: "Support",
          metaValue: "Jeden Werktag",
          highlight: "Schnelle Lieferung",
        },
      ],
    },
    notfound: {
      title: "Seite nicht gefunden",
      body: "Die gesuchte Seite existiert nicht oder wurde verschoben. Überprüfen Sie die Adresse oder kehren Sie zur Startseite zurück.",
      prim: "Startseite",
      sec: "Kontaktieren Sie uns",
    },
    aboutHero: {
      badge: "Über uns",
      title: "Jede Wärme beginnt hier",
      subtitle:
        "Seit 1992 bauen wir Partnerschaften auf Basis von Qualität, Tradition und Hingabe an jeden Kunden.",
    },
    contactPage: {
      hero: {
        badge: "Kontakt",
        title: "Nehmen Sie Kontakt auf",
        subtitle: "Wir sind für all Ihre Fragen, Angebote und Partnerschaften da. Wir antworten so schnell wie möglich.",
      },
      info: {
        badge: "Kontaktinformationen",
        addressLabel: "Adresse",
        address: "Stevana Sinđelića 30\n35210 Svilajnac, Serbien",
        phoneLabel: "Telefon",
        emailLabel: "E-Mail",
        phones: ["+381 35 8814 077", "+381 35 8814 099"],
        emails: [
          "office@nesa-komerc.com",
          "sales@nesa-komerc.com",
          "teodora.obradovic@nesa-komerc.com",
        ],
      },
      form: {
        badge: "Nachricht senden",
        title: "Wie können wir helfen?",
        labelName: "Vollständiger Name",
        labelCompany: "Unternehmen",
        labelPhone: "Telefon",
        labelEmail: "E-Mail-Adresse",
        labelDepartment: "Abteilung",
        labelMessage: "Nachricht",
        placeholderName: "Ihr vollständiger Name",
        placeholderCompany: "Firmenname",
        placeholderPhone: "+381...",
        placeholderEmail: "ihre@email.com",
        placeholderMessage: "Beschreiben Sie Ihr Anliegen...",
        submit: "Nachricht senden",
        successTitle: "Nachricht gesendet!",
        successBody: "Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.",
        departments: [
          { value: "wholesale", label: "Großhandel" },
          { value: "retail", label: "Einzelhandel" },
          { value: "production", label: "Produktion" },
          { value: "director", label: "Geschäftsführung" },
          { value: "accounting", label: "Buchhaltung" },
        ],
      },
      mapLabel: "So finden Sie uns",
    },
    aboutPage: {
      company: {
        badge: "Neša Komerc d.o.o.",
        title: "Gründung & Wachstum",
        body1:
          'Neša Komerc d.o.o. wurde im Dezember 1992 gegründet und begann im selben Jahr mit der Fertigung von Röhrenheizkörpern. Durch stetigen Fortschritt und kontinuierliche Investitionen in neue Technologien hat sich das Unternehmen zu einem ernstzunehmenden Industriebetrieb entwickelt.',
        body2:
          'Das Unternehmen hat seinen Sitz in Svilajnac, in der Industriezone an der Straße nach Požarevac, 110 km von Belgrad entfernt. Heute findet die Produktion in modernen Industriehallen auf 6.000 m² statt. Im Fertigungsprozess kommen modernste Anlagen renommierter Welthersteller (Roboter- und Tunnelschweißen) sowie Rohstoffe der angesehensten europäischen Unternehmen zum Einsatz, untermauert von einer effizienten Organisation, die durch die entsprechenden Zertifikate bestätigt wird.',
      },
      mission: {
        badge: "Mission & Vision",
        title: "Qualität und Kunden verpflichtet",
        body1:
          'Unser Unternehmen ist den Bedürfnissen seiner Kunden und der Qualität seiner Produkte voll verpflichtet, die mit einer fünfjährigen Garantie geliefert werden. Die Röhrenheizkörper sind von herausragender Qualität mit einzigartigem Design und verfügen über alle erforderlichen Atteste und Zertifikate.',
        body2:
          'Neša Komerc d.o.o. ist und bleibt ein unabhängiges Familienunternehmen, das darauf ausgerichtet ist, seine führende Position zu stärken und neue Märkte zu erschließen.',
        guarantee: "5 Jahre Garantie",
      },
      team: {
        badge: "Unser Team",
        title: "Die Menschen hinter jeder Wärme",
        subtitle: "Das Expertenteam hinter jedem Heizkörper, der unser Werk verlässt.",
        members: [
          { name: "Nenad Ognjanović", role: "Finanzdirektor – Inhaber", email: "office@nesa-komerc.com", phone: "035 8814 077", photo: "/team/team-01.jpg" },
          { name: "Jasna Ognjanović", role: "Kaufmännische Direktorin", email: "ognjanovjasna71@gmail.com", phone: "062-320-076", photo: "/team/team-02.jpg" },
          { name: "Miroljub Ognjanović", role: "Generaldirektor", email: "office@nesa-komerc.com", phone: "035 8814 077", photo: "/team/team-03.jpg" },
          { name: "Teodora Obradović", role: "Vertriebsmitarbeiterin – Inland & Ausland", email: "teodora.obradovic@nesa-komerc.com", phone: "063-10-27-316", photo: "/team/team-04.jpg" },
          { name: "Nikolina Prlić", role: "Finanzsachbearbeiterin", email: "knjigovodstvo@nesa-komerc.com", phone: "063-10-27-324", photo: "/team/team-05.png" },
          { name: "Marija Radosavljević", role: "Buchhalterin", email: "knjigovodstvo1@nesa-komerc.com", phone: "063-10-27-955", photo: "/team/team-06.jpg" },
          { name: "Ivana Rajčić", role: "Leiterin Einzelhandel", email: "maloprodaja@nesa-komerc.com", phone: "063-10-27-319", photo: "/team/team-07.jpg" },
          { name: "Nataša Milošević", role: "Leiterin Großhandel", email: "natasa.milosevic@nesa-komerc.com", phone: "063-10-67-444", photo: "/team/team-08.jpg" },
          { name: "Srđan Korunović", role: "Leiter Großhandel – Lager", email: "veleprodaja@nesa-komerc.com", phone: "063-10-27-396", photo: "/team/team-09.jpg" },
          { name: "Dalibor Nedeljković", role: "Produktionsleiter – Ingenieur", email: "dalibor.nedeljkovic@nesa-komerc.com", phone: "063-10-27-356", photo: "/team/team-10.png" },
          { name: "Ivan Luković", role: "Produktionsleiter – QMS – Qualität", email: "ivan.lukovic@nesa-komerc.com", phone: "063-10-27-358", photo: "/team/team-11.jpg" },
          { name: "Nenad Jovanović", role: "Leiter Einzelhandel", email: "maloprodaja@nesa-komerc.com", phone: "063-10-27-362", photo: "/team/team-12.jpg" },
        ],
      },
    },
    salesNetworkPage: {
      hero: {
        badge: "Vertriebsnetz",
        title: "Autorisierte Neša-Komerc-Vertriebspartner",
        subtitle: "Finden Sie einen autorisierten Neša-Komerc-Partner in Ihrer Stadt.",
      },
      filterAll: "Alle Städte",
      mapLabel: "Karte des Vertriebsnetzes",
      partnersLabel: "Unsere Partner",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      addressLabel: "Adresse",
      branchesLabel: "Filialen",
      noResults: "Keine Partner für die ausgewählte Stadt gefunden.",
    },
    maloprodajaPage: {
      hero: {
        badge: "Einzelhandel",
        title: "Alles für Heizung & Sanitär",
        subtitle: "Ein komplettes Sortiment an Heizungsmaterialien, Sanitärbedarf und Ausstattung — alles an einem Ort in Svilajnac.",
      },
      heatingLabel: "Heizungsmaterial",
      heatingTitle: "Heizsysteme & Komponenten",
      plumbingLabel: "Sanitärmaterial",
      plumbingTitle: "Sanitär & Sanitärtechnik",
      brandsLabel: "Marken",
      bathroomLabel: "Badausstattung",
      bathroomTitle: "Fliesen, Spiegel & Armaturen",
      bathroomBody: "Unser komplettes Sortiment an Badausstattung — von Premium-Fliesen bis zu Armaturen der weltweit führenden Hersteller — finden Sie auf unserer spezialisierten Website.",
      bathroomCta: "nesakomerckeramika.com besuchen",
      ctaLabel: "Besuchen Sie uns",
      ctaTitle: "Besuchen Sie unseren Ausstellungsraum",
      ctaBody: "Stevana Sinđelića 309, 35210 Svilajnac — geöffnet Montag–Freitag, 07:00–15:00 Uhr.",
      ctaContact: "Rufen Sie uns an",
    },
    productsPage: {
      hero: {
        badge: "Sortiment",
        title: "Unsere Produkte",
        subtitle: "Röhrenheizkörper und Zubehör — zuverlässige Hausheizung seit über drei Jahrzehnten.",
      },
      badges: [
        { icon: "shield", label: "Zertifizierte Qualität" },
        { icon: "zap", label: "100% Qualität" },
        { icon: "star", label: "5 Jahre Garantie" },
      ],
      sectionLabel: "Sortiment",
      sectionTitle: "Röhrenheizkörper & Ausstattung",
      cta: "Details",
      products: [
        {
          id: "nk-lux",
          name: "NK LUX",
          tag: "Premium",
          description: "Ein Röhrenheizkörper mit markantem, abgerundetem Profil. Ideal für Bäder — bietet Wärme und Platz zum Handtuchtrocknen mit elegantem Look.",
          image: "/proizvodi/nk-lux.jpg",
          href: "/de/products/nk-lux",
        },
        {
          id: "nk-term",
          name: "NK TERM 22",
          tag: "Neu",
          description: "Aus nahtgeschweißten Stahlrohren (Č 0146), Material DC01 nach EN 10305-3/5, \"D\"-Profil 30×40 mm und Ø22 mm Rundrohr-Lamellen.",
          image: "/proizvodi/nkterm.png",
          href: "/de/products/nk-term",
        },
        {
          id: "nk-standard",
          name: "NK STANDARD",
          tag: "Bestseller",
          description: "Ein Röhrenheizkörper, der sehr wenig Platz benötigt. Vorrangig für Bäder konzipiert, aber ebenso zu Hause in Wohnzimmern, Büros und Küchen.",
          image: "/proizvodi/nkstandard.png",
          href: "/de/products/nk-standard",
        },
        {
          id: "center-connection",
          name: "Mittelanschluss",
          tag: "Zubehör",
          description: "Der Mittelanschluss eines Röhrenheizkörpers dient der Wand-, Boden- oder kombinierten Fußbodenheizungs-Integration.",
          image: "/proizvodi/prikljucak.png",
          href: "/de/products/nk-standard",
        },
        {
          id: "with-heater",
          name: "Mit Heizstab",
          tag: "Option",
          description: "Wir liefern auch Trockner mit optionalem Elektroheizstab über Wasser-/Thermofluid-Kombination. Die Heizleistung hängt von den Heizkörperabmessungen ab.",
          image: "/proizvodi/sagrejacem.png",
          href: "/de/products/nk-lux",
        },
        {
          id: "accessories",
          name: "Zubehör",
          tag: "Programm",
          description: "Das Neša-Komerc-Zubehörprogramm eignet sich für vertikale Montagen auf Stahl- oder Kunststoffflächen, in verschiedenen Abmessungen erhältlich.",
          image: "/img5.png",
          href: "/de/products/nk-standard",
        },
      ],
    },
    productionPage: {
      hero: {
        badge: "Unsere Produktion",
        title: "Wo jeder Heizkörper entsteht",
        subtitle: "Unser eigenes 6.000 m² großes Werk, Roboterschweißen und mehrstufige Qualitätskontrolle unter einem Dach in Svilajnac.",
      },
      stats: [
        { value: "1992", label: "Produktionsbeginn" },
        { value: "6.000 m²", label: "Werksfläche" },
        { value: "7+", label: "Exportländer" },
        { value: "5 J.", label: "Garantie auf jedes Produkt" },
      ],
      process: {
        badge: "Wie wir es machen",
        title: "Vom Rohmaterial zum Heizkörper",
        subtitle: "Jeder Schritt unter voller Kontrolle — keine Kompromisse.",
        steps: [
          { number: "01", title: "Rohmaterialauswahl", body: "Wir beziehen Stahlrohre und -bleche ausschließlich von renommierten europäischen Lieferanten, jeweils mit vollständiger Qualitätsdokumentation." },
          { number: "02", title: "Schneiden & Biegen", body: "CNC-Maschinen schneiden und biegen die Rohre präzise auf die exakten Abmessungen jedes Modells — Toleranz unter 0,5 mm." },
          { number: "03", title: "Roboterschweißen", body: "Tunnel- und Roboterschweißanlagen liefern bei jedem einzelnen Stück eine homogene, wiederholbare Schweißnaht ohne menschlichen Fehler." },
          { number: "04", title: "Lackierung & Finish", body: "Elektrostatische Lackierung über die gesamte RAL-Palette. Die Schichtdicke wird vor und nach dem Aushärten gemessen." },
          { number: "05", title: "Drucktest", body: "Jeder Heizkörper durchläuft vor der Verpackung einen Hydro-Test bei 10 bar — null Kompromisse, null Rückläufer." },
          { number: "06", title: "Verpackung & Versand", body: "Schutzverpackung und strenge Logistik sorgen dafür, dass der Heizkörper unbeschädigt ankommt — pünktlich, an der richtigen Adresse." },
        ],
      },
      quality: {
        badge: "Zertifizierte Qualität",
        title: "Strenge Prüfungen in jeder Phase",
        body: "Unsere Heizkörper tragen alle relevanten europäischen Zertifikate. Das Qualitätsmanagementsystem nach SRPS ISO 9001:2015 garantiert, dass jedes Stück das Werk in voller Übereinstimmung mit den vorgeschriebenen Standards verlässt.",
        pillars: [
          { icon: "shield", title: "Zertifizierte Qualität", body: "Freigegebene Zulassungen für alle Modelle seit 1992." },
          { icon: "zap", title: "Premium-Materialien", body: "Erstklassiger Stahl und EU-zertifizierte Beschichtungen." },
          { icon: "cpu", title: "Serielle Rückverfolgung", body: "Jeder Heizkörper erhält einen eindeutigen Seriencode." },
        ],
      },
      gallery: {
        badge: "Galerie",
        title: "Ein Blick in die Produktion",
        subtitle: "Ein Moment aus unserem Werk — vom Rohmaterial bis zum fertigen Heizkörper.",
      },
      certificates: {
        badge: "Unsere Zertifikate",
        title: "Im Einklang mit internationalen Standards",
        body: "Unser Engagement für Qualität wird durch anerkannte Zertifikate bestätigt. Das Unternehmen besitzt SRPS ISO 9001:2015 und SR EN 442-3:2014 — die Grundlage für den Eintritt in anspruchsvolle internationale Märkte.",
        items: [
          { title: "SRPS ISO 9001:2015", body: "Qualitätsmanagementsystem, das alle internen Prozesse von der Beschaffung bis zur Lieferung regelt." },
          { title: "SR EN 442-3:2014", body: "Europäische Norm für Röhrenheizkörper, die technische Eigenschaften und Sicherheit bestätigt." },
          { title: "Bericht der Fakultät für Maschinenbau", body: "Unabhängige Prüfung der thermischen und mechanischen Eigenschaften durch eine akkreditierte Institution." },
        ],
      },
    },
  },
};

export type Translations = typeof translations;
