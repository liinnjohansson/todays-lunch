export interface BistroData {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  lunchOfTheWeek: LunchOfTheWeek;
  likedBistro: boolean;
}

interface LunchOfTheWeek {
  id: string;
  weekNumber: number; //(borde ta år också ? Format: 202139, 202140 - eller fungernade datum format ?)
  tags: Tags;
  monday?: TodaysLunch;
  tuesday?: TodaysLunch;
  wednesday?: TodaysLunch;
  thursday?: TodaysLunch;
  friday?: TodaysLunch;
}

interface TodaysLunch {
  dishes: string[];
  lunchStart: number;
  lunchEnd: number;
  priceFrom: number;
}

interface Tags {
  outdoorSeating: boolean;
  coffeeIncluded: boolean;
  saladBuffet: boolean;
}

// interface Location {
//   id: string,
//   address: string,
//   city: string,
//   zipCode: number,
//   phone: number[],
// }

export const bistros: BistroData[] = [
  {
    id: "1",
    title: "The Company",
    location: "Skaraborgsvägen 3c",
    imageUrl:
      "https://www.hb.se/globalassets/pagefiles/135491/studenter-pa-campus-hosten-2016-foto-ulrika-goransson-7_761x367.jpg?width=1600&quality=95&mode=min&format=webp&v=289233",
    lunchOfTheWeek: {
      id: "A",
      weekNumber: 39,
      tags: {
        outdoorSeating: false,
        coffeeIncluded: true,
        saladBuffet: true,
      },
      monday: {
        dishes: [
          "Dagens kött: Rödvinsbrässerad oxstek med ugnsrostade grönsaker och gräddsås, gelé och stekt potatis",
          "Dagens fisk: Stekt sejfilé med brynta champinjoner, skirat smör och kokt potatis",
          "Dagens gröna: Chili SIN carne med ris",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan tonfisksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med kyckling i krämig pastasås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      tuesday: {
        dishes: [
          "Dagens kött: Fläsk med löksås eller bruna bönor och kokt potatis eller raggmunk och lingon",
          "Dagens fisk: Fiskgratäng på husets vis med potatismos",
          "Dagens gröna: Quornstroganoff med ris och örtcrème",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan tonfisksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med kyckling i krämig pastasås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      wednesday: {
        dishes: [
          "Dagens kött: Fläskytterfilé med BBQ sås, purjolökpotatis och stekta haricoverts",
          "Dagens fisk: Strömming på Freddans vis, skirat smör, gröna ärtor, lingon och potatismos",
          "Dagens gröna: Falafel med risonisallad och tzatziki",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan tonfisksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med kyckling i krämig pastasås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      thursday: {
        dishes: [
          "Dagens kött: Köttfärslimpa med bacon, skysås, lingon och stekt potatis",
          "Dagens fisk: Husets mustiga fiskgryta med räkor, aioli och kokt potatis",
          "Dagens gröna: Paj med sojafärs, bönor samt aioli",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan tonfisksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med kyckling i krämig pastasås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      friday: {
        dishes: [
          "Dagens kött: Fläskschnitzel, Bearnaise eller rödvinssås, citron, ärtor och stekt potatis",
          "Dagens fisk: Ungsbakad fiskfilé, dillkräm, gröna ärtor, citron och kokt potatis",
          "Dagens gröna: Höstgryta med sojaprotein och ris",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan tonfisksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med kyckling i krämig pastasås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
    },
    likedBistro: false,
  },
  {
    id: "2",
    title: "Viskan",
    location: "Södra Strandgatan 6",
    imageUrl: "",
    lunchOfTheWeek: {
      id: "B",
      weekNumber: 39,
      tags: {
        outdoorSeating: true,
        coffeeIncluded: true,
        saladBuffet: true,
      },
      monday: {
        dishes: [
          "Gnocchi serverad med en krämig pesto, parmaskinka samt ruccola och parmesan",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      tuesday: {
        dishes: [
          "Kyckling i rödcurrysås serveras med koriander och lime samt ris och rostade sesamfrön",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      wednesday: {
        dishes: [
          "Lågtempererad fläskfilé serveras med citronmarinerade rotfrukter samt örtsås",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      thursday: {
        dishes: [
          "Grekiska nötfärsbiffar med fetaost serveras med rostad broccoli, olivbakad potatis och tzatziki",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      friday: {
        dishes: [
          "Nattbakad högrev serveras med dragonmajonnäs, vinägerkokt lök samt rostade rotfrukter och potatis",
        ],
        lunchStart: 12.0,
        lunchEnd: 15.0,
        priceFrom: 109,
      },
    },
    likedBistro: false,
  },
  {
    id: "3",
    title: "Townhouse",
    location: "Österlånggatan 35",
    imageUrl: "",
    lunchOfTheWeek: {
      id: "C",
      weekNumber: 39,
      tags: {
        outdoorSeating: false,
        coffeeIncluded: true,
        saladBuffet: true,
      },
      monday: {
        dishes: [
          "RIMMAD SEJFILÉ aquavitsås, sockerärtor, citronslungad potatis, råmarinerad broccoli",
          "RÖDVINSBAKAD KYCKLING rosmarinaioli, svamp-& baconfräs, rödvinssky, friterad potatis",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 125,
      },
      tuesday: {
        dishes: [
          "BOHUS krämig fiskgratäng, havskräftsås, dillslungad potatis, handskalade räkor, citron",
          "HÖGREVSBIFF kantarellmixad gräddsås, lingon, persiljehack, friterad rotfruktscrisp",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 125,
      },
      wednesday: {
        dishes: [
          "CHILIBAKAD KOLJA fräst pak choi, brynt nöt- & sojasmör, ingefärscreme, slungad potatis",
          "GRILLAD KARRÉ chipoteglaze, cole slaw, friterad potatis, rostad majs, rödvinssky",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 125,
      },
      thursday: {
        dishes: [
          "PANKOSTEKT TORSK avokadocreme, syrad lök, dillslungad tomat, klyftpotatis",
          "MAJSKYCKLING saltbakad palsternacka, palsternackspuré, balsamico- & hallonsky, örtsallad",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 125,
      },
      friday: {
        dishes: [
          "PESTOBAKAD LAX soltorkad tomatrisotto, brynt smör, rostad mandel, bakad tomat",
          "GRILLAD HJORT potatisterrin, granmarinerade lingon, rosmarinsky, pepparrotscreme, picklad kantarell",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 125,
      },
    },
    likedBistro: false,
  },
  {
    id: "4",
    title: "Balthazar",
    location: "Lilla Brogatan 14,",
    imageUrl: "",
    lunchOfTheWeek: {
      id: "D",
      weekNumber: 39,
      tags: {
        outdoorSeating: false,
        coffeeIncluded: true,
        saladBuffet: false,
      },
      monday: {
        dishes: [
          "GRILLAD SVENSK GÅRDSKYCKLING Serveras med klyftpotatis, rödvinsky smaksatt med smör och tryffel samt svartpepparrostade morötter",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 139,
      },
      tuesday: {
        dishes: [
          "KLASSISK BIFF RYDBERG Serveras med krispig potatis, äggula samt pepparrotscrème",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 139,
      },
      wednesday: {
        dishes: [
          "GRILLAD FLANKSTEK Serveras med gräddstuvad spetskål, rostad morot och palsternacka samt grillad sparris och ett kryddsmör",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 139,
      },
      thursday: {
        dishes: [
          "WALLENBERGARE PÅ KALVFÄRS Serveras med potatispuré, lingon samt skirat smör och ärtor",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 139,
      },
      friday: {
        dishes: [
          "PANERAD SCHNITZEL Serveras med ärtor och citron samt stekt potatis och béarnaise",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 139,
      },
    },
    likedBistro: false,
  },
  {
    id: "5",
    title: "Orangeriet",
    location: "Teaterbron 1",
    imageUrl: "",
    lunchOfTheWeek: {
      id: "E",
      weekNumber: 39,
      tags: {
        outdoorSeating: false,
        coffeeIncluded: true,
        saladBuffet: false,
      },
      monday: {
        dishes: [
          "Mustig höstgryta på högrev, champinjoner, rotfrukter, rött vin serveras med potatismos samt persilja",
          "Lättpanerad fiskfilé serveras med tartarsås, dillrostad potatis samt citronmarinerad morot",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.3,
        priceFrom: 105,
      },
      tuesday: {
        dishes: [
          "Pannbiff med stekt lök serveras med gräddsås, kokt potatis samt lingonsylt",
          "Rimmad fiskfilé bakad i ugn med färskost serveras med vitvinssås samt potatismos toppad med dillolja",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
      wednesday: {
        dishes: [
          "Schnitzel serveras med bearnaisesås, rödvinssås, stekt potatis samt gröna ärtor",
          "Vitvinspocherad fiskfilé* serveras med citronsås samt potatisstomp smaksatt med grana padano",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
      thursday: {
        dishes: [
          "Ärtsoppa med fläsk serveras med hemmagjorda pannkakor, sylt och grädde",
          "Tri tip (kalv) serveras med rökig rödvinssås samt potatis- och rotfruktsgratäng toppad med ruccolasallad",
          "Laxfilé serveras med gräslökshollandaise, kokt potatis samt bakad tomat",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
      friday: {
        dishes: [
          "Grillad fläskfilé serveras med grönpepparsås samt rostade potatishalvor med bacon och paprika",
          "Panerad fiskfilé* serveras med skagenröra, dillkokt potatis samt citron",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
    },
    likedBistro: false,
  },
  {
    id: "6",
    title: "Qui Vietnamese Street Food",
    location: "Hötorget 1",
    imageUrl: "",
    lunchOfTheWeek: {
      id: "F",
      weekNumber: 39,
      tags: {
        outdoorSeating: false,
        coffeeIncluded: true,
        saladBuffet: true,
      },
      monday: {
        dishes: [
          "Biff nudelsoppa - Nudelsoppa med ryggbiff & nötköttbullar toppas med färska örter",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
      tuesday: {
        dishes: [
          "Kyckling nudelsoppa Nudelsoppa med  kycklingfilé. toppas med örter",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
      wednesday: {
        dishes: [
          "Fläsk nudelsoppa med räkor Nudelsoppa med fläsk och räkor. Toppas med örter & vaktelägg",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
      thursday: {
        dishes: [
          " Nudelsallad med biff & vårrulle Nudlesallad med ryggbiff och vårrulle, toppas med jordnötter och Quis dressing",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
      friday: {
        dishes: [
          "Biffsallad med glasnudlar (finns även med räkor) Fräsch & syrlig sallad med ryggbiff och glasnudlar, toppas med jordnötter",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 105,
      },
    },
    likedBistro: false,
  },
  {
    id: "7",
    title: "Espresso House",
    location: "Stora Brogatan 20",
    imageUrl:
      "http://cdn3.cdnme.se/3927310/8-3/espresso-house-kalmar-1-sallad-sommarsallad-getostsallad-getost-chevre-bagel-lufttorkad-skinka-uteservering_5962495b9606ee53033aaca2.jpg",
    lunchOfTheWeek: {
      id: "G",
      weekNumber: 39,
      tags: {
        outdoorSeating: true,
        coffeeIncluded: false,
        saladBuffet: false,
      },
      monday: {
        dishes: ["Sallad med avokado."],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 85,
      },
      tuesday: {
        dishes: ["Varma mackor."],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 85,
      },
      wednesday: {
        dishes: ["Paj."],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 85,
      },
      thursday: {
        dishes: ["Pankakor med ärtsoppa. Sallat och bröd ingår."],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 85,
      },
      friday: {
        dishes: ["Sallad med avokado."],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 85,
      },
    },
    likedBistro: true,
  },
  {
    id: "8",
    title: "Herkules Pizzeria",
    location: "Regementsgatan 10",
    imageUrl:
      "https://cdn2.cdnme.se/978332/8-3/mobiluppladdning_5d03d150e087c311d45e5dd8.jpg",
    lunchOfTheWeek: {
      id: "H",
      weekNumber: 39,
      tags: {
        outdoorSeating: true,
        coffeeIncluded: true,
        saladBuffet: true,
      },
      monday: {
        dishes: [
          "Ugnsgrillad Biffar toppades med ost serveras med stekt potatis rödvinssås och lingon",
          "Lätt panerad smörstekt Torskfilé, toppades med grillad tomater lök, paprika, samt dillcitron sås och kokt potatis.",
          "Pasta med köttfärssås",
          "Fransk pasta (räkor, kyckling, lök, svamp och pastasås.)",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 98,
      },
      tuesday: {
        dishes: [
          "Stekt fläsk med raggmunk och lingon eller löksås och kokt potatis",
          "Grillad Falukorv med stekt potatis och stekt ägg",
          "Ugnsbakade laxfilé toppad med ost zucchini tomater rödlök och varmdillsås",
          "Schweizer pasta med ost rökt skinka köttfärssås.",
          "Pasta med gorgonzola (skinka, svamp och pastasås)",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 98,
      },
      wednesday: {
        dishes: [
          "Schnitzel med stekt potatis, stekta rödvinssås och gröna ärtor",
          "Herkules Köttbullar med stekt potatis ELLER äkta potatismos samt gräddsås.",
          "Smörstekt strömming med hemlagat potatismos och lingon",
          "Schweizer pasta med ost rökt skinka köttfärssås.",
          "Pasta med kyckling (Kycklingfilé , lök, svamp och pastasås)",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 98,
      },
      thursday: {
        dishes: [
          "Barbecue Grillad fläsknoisette med friterad klyft potatis, Tzatziki samt rödvinsås och Herkules bearnaisesås",
          "Lätt panerad smörstekt Torskfilé, toppades med grillad tomater lök, paprika, samt persiljesås, koktägg och kokt potatis.",
          "Pasta med köttfärssås",
          "Huset pasta (fläskfilé lök, svamp och pastasås.)",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 98,
      },
      friday: {
        dishes: [
          "Marinerad grillspett av Fläskkarré och kycklingfilé, samt stekt potatis, Tzatziki och Barbecuesås.",
          "Friterad ströbröd panerad rödspätta med räkremouladsås kokt potatis.",
          "Schweizer pasta med ost rökt skinka köttfärssås.",
          "Huset pasta (kycklingfilé lök, svamp och pastasås",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 98,
      },
    },
    likedBistro: false,
  },
];
