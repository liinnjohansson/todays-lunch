export interface BistroData {
  id: string;
  title: string;
  address: Address;
  imageUrl: string;
  lunchOfTheWeekDefault: LunchOfTheWeekDefault;
  lunchOfTheWeekOffer?: LunchOfTheWeekOffer[];
  likedBistro: boolean;
}

interface LunchOfTheWeekDefault {
  bistroId: string;
  tags: Tags;
  monday?: TodaysLunch;
  tuesday?: TodaysLunch;
  wednesday?: TodaysLunch;
  thursday?: TodaysLunch;
  friday?: TodaysLunch;
}

/**
 * Intended to work as a function that override the default menu a bistro have registered by week number. 
 * The overridable functions exist to minimize the administration work for Bistros.
 */ 
interface LunchOfTheWeekOffer extends LunchOfTheWeekDefault {
  weekNumber: number;
  // year: number; // TODO: Lägg till senare ifall det behövs. Note. David sa att lägga till saker är enkelt, att ta bort och förändra är svårare!
}

interface Tags {
  outdoorSeating: boolean;
  coffeeIncluded: boolean;
  saladBuffet: boolean;
}

interface TodaysLunch {
  dishes: string[];
  lunchStart: number;
  lunchEnd: number;
  priceFrom: number;
}

/**
 * Format of interface intended to work in UI by registerd Bistro-admin-user
 * The latitude and longitude should be fetched by API when user have filled in other address info. Before the info is saved to the server.
 * The saved latitude and longitude info will give easy access to Bistro in the app's Map function.  
 * Ex. API to use in mention Bistro-admin function: https://developers.google.com/maps/documentation/geocoding/overview
 */ 
interface Address {
  // id: string,   //TODO: Lägg till om vi upptäcker att det behövs!
  streetAddress: string,
  city: string,
  zipCode: number,
  country: string,
  phone: string[],
  latitude: number,
  longitude: number,
}

export const bistros: BistroData[] = [
  {
    id: "1",
    title: "The Company",
    address: {
      streetAddress: "Skaraborgsvägen 3c",
      city: "Borås",
      zipCode: 50630,
      country: "sweden",
      phone: ["033125250"],
      latitude: 57.72575042973964,
      longitude: 12.938124023619977,
    },
    imageUrl:
      "https://www.hb.se/globalassets/pagefiles/135491/studenter-pa-campus-hosten-2016-foto-ulrika-goransson-7_761x367.jpg?width=1600&quality=95&mode=min&format=webp&v=289233",
    lunchOfTheWeekDefault: {
      bistroId: "1",
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
    lunchOfTheWeekOffer: [{
      weekNumber: 39,
      bistroId: "1",
      tags: {
        outdoorSeating: false,
        coffeeIncluded: true,
        saladBuffet: true,
      },
      monday: {
        dishes: [
          "Dagens kött: Oxfärsbiff med stekt lök, grönpepparsås och stekt potatis",
          "Dagens fisk: Mandelpanerad fiskfilé med skirat smör och potatismos",
          "Dagens gröna: Biff med stekt lök, kokt potatis och vegansk gräddsås",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan räksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med tonfisk i krämig purjolökssås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      tuesday: {
        dishes: [
          "Dagens kött: Fläsk med löksås eller bruna bönor och kokt potatis eller raggmunk och lingon",
          "Dagens fisk: Fiskgratäng på husets vis med potatismos",
          "Dagens gröna: Biff med stekt lök, kokt potatis och vegansk gräddsås",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan räksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med tonfisk i krämig purjolökssås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      wednesday: {
        dishes: [
          "Dagens kött: Ostgratinerad falukorvmed potatismos och tomatsås",
          "Dagens fisk: Strömming på Freddans vis, skirat smör, gröna ärtor, lingon och potatismos",
          "Dagens gröna: Biff med stekt lök, kokt potatis och vegansk gräddsås",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan räksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med tonfisk i krämig purjolökssås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      thursday: {
        dishes: [
          "Dagens kött: Ugnsbakad kycklingfilé med rostad potatis och mangoraja",
          "Dagens fisk: Husets mustiga fiskgryta med räkor, aioli och kokt potatis",
          "Dagens gröna: Biff med stekt lök, kokt potatis och vegansk gräddsås",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan räksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med tonfisk i krämig purjolökssås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
      friday: {
        dishes: [
          "Dagens kött: Fläskschnitzel, Bearnaise eller rödvinssås, citron, ärtor och stekt potatis",
          "Dagens fisk: Vitvinspocherad fiskfilé med ägg och persiljesås",
          "Dagens gröna: Biff med stekt lök, kokt potatis och vegansk gräddsås",
          "Alltid: Köttbullar, gräddsås, lingon, pressgurka och potatismos",
          "Sallad: välj mellan räksallad, kycklingsallad och tofusallad",
          "Pasta: Pasta med tonfisk i krämig purjolökssås",
        ],
        lunchStart: 11.3,
        lunchEnd: 14.0,
        priceFrom: 109,
      },
    }],
    likedBistro: false,
  },
  {
    id: "2",
    title: "Viskan",
    address: {
      streetAddress: "Södra Strandgatan 6",
      city: "Borås",
      zipCode: 50335,
      country: "sweden",
      phone: ["033102580"],
      latitude: 57.72011024824524,
      longitude: 12.939488649852242,
    },
    imageUrl: "https://cafeviskan.se/wp-content/uploads/2019/04/catering_viskan.jpg",
    lunchOfTheWeekDefault: {
      bistroId: "2",
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
    address: {
      streetAddress: "Österlånggatan 35",
      city: "Borås",
      zipCode: 50331,
      country: "sweden",
      phone: ["0333236313"],
      latitude: 57.72126858453907,
      longitude: 12.941070078046462,
    },
    imageUrl: "https://thetownhouse.se/uploads/2018/11/img_1958-o.jpg",
    lunchOfTheWeekDefault: {
      bistroId: "3",
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
    address: {
      streetAddress: "Lilla Brogatan 14",
      city: "Borås",
      zipCode: 50330,
      country: "sweden",
      phone: ["0337221177"],
      latitude: 57.72002214821148,
      longitude: 12.938943407626931,
    },
    imageUrl: "https://prod-wolt-venue-images-cdn.wolt.com/5ed77be3eabef0179336d458/2d0f66c2-de07-11ea-b628-eefcf45c554c_balthazar_menu_05.jpg",
    lunchOfTheWeekDefault: {
      bistroId: "4",
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
    address: {
      streetAddress: "Teaterbron 1",
      city: "Borås",
      zipCode: 50338,
      country: "sweden",
      phone: ["033108801"],
      latitude: 57.719282152914666,
      longitude: 12.939873194328353,
    },
    imageUrl: "https://www.orangerietiboras.se/media/1061/fisksoppa_orangeriet.jpg?width=1440",
    lunchOfTheWeekDefault: {
      bistroId: "5",
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
    address: {
      streetAddress: "Hötorget 1",
      city: "Borås",
      zipCode: 50332,
      country: "sweden",
      phone: ["033200088"],
      latitude: 57.72248083924043,
      longitude: 12.940607107623883,
    },
    imageUrl: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/p720x720/54278617_308630833132964_6402904040484634624_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ILaKkG0m4MkAX8PVE2M&_nc_ht=scontent-arn2-1.xx&oh=ca3d3e0a6eb8436b7f4766071eefd22e&oe=617648D9",
    lunchOfTheWeekDefault: {
      bistroId: "6",
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
    address: {
      streetAddress: "Stora Brogatan 20",
      city: "Borås",
      zipCode: 50330,
      country: "sweden",
      phone: ["0765219173"],
      latitude: 57.72058430511784,
      longitude: 12.939410394990757,
    },
    imageUrl:
      "http://cdn3.cdnme.se/3927310/8-3/espresso-house-kalmar-1-sallad-sommarsallad-getostsallad-getost-chevre-bagel-lufttorkad-skinka-uteservering_5962495b9606ee53033aaca2.jpg",
    lunchOfTheWeekDefault: {
      bistroId: "7",
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
    address: {
      streetAddress: "Regementsgatan 10",
      city: "Borås",
      zipCode: 50431,
      country: "sweden",
      phone: ["033120750"],
      latitude: 57.71272127496498,
      longitude: 12.922860678736146,
    },
    imageUrl:
      "https://cdn2.cdnme.se/978332/8-3/mobiluppladdning_5d03d150e087c311d45e5dd8.jpg",
    lunchOfTheWeekDefault: {
      bistroId: "8",
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
  {
    id: "9",
    title: "Tonys Restaurang",
    address: {
      streetAddress: "Hestra ringväg",
      city: "Borås",
      zipCode: 50470,
      country: "sweden",
      phone: ["0723208519"],
      latitude: 57.7253120130719,
      longitude: 12.898007377354368,
    },
    imageUrl:
      "https://gastrogate.com/files/32716/tonysborasomoss1.png",
    lunchOfTheWeekDefault: {
      bistroId: "9",
      tags: {
        outdoorSeating: true,
        coffeeIncluded: true,
        saladBuffet: false,
      },
      monday: {
        dishes: [
          "SVENSK HÖGREVSBURGARE MED MIXAD POMMES & TRYFFELMAJONNÄS - CHÈVRE BURGER: Dressing, Sallad, Tomat, Cheddarost, Bacon, Bourbonsås.",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 90,
      },
      tuesday: {
        dishes: [
          "PIZZA - ITALIANO: Mozzarella, Prosciutto Crudo, Parmesan, Rucola, Solkyssta tomater, Basilikaolja",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 90,
      },
      wednesday: {
        dishes: [
          "SALLAD - CAESARSALLAD: Slungad romansallad i TONYS egengjorda ceasardressing, kyckling, bacon, krutonger, parmesan, tomat, rödlök.",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 90,
      },
      thursday: {
        dishes: [
          "PIZZA - CHEVRÉ: Lammfärs, Vitlök, Rosmarin, Rostade Valnötter, Chevréost, Honung, Ruccola.",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 90,
      },
      friday: {
        dishes: [
          "SALLAD - CHEVRÉSALLAD: Salladsmix, ljummen chevréost, valnötter, skivat päron, valnötter, granatäpple samt honung smaktsatt med färsk citron.",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 90,
      },
    },
    likedBistro: true,
  },
  {
    id: "10",
    title: "Lunch Esset (Hedin)",
    address: {
      streetAddress: "Pickesjövägen 2",
      city: "Borås",
      zipCode: 50431,
      country: "sweden",
      phone: ["033137137"],
      latitude: 57.7149003242743,
      longitude: 12.910951773015443,
    },
    imageUrl:
      "https://receptfavoriter.se/sites/default/files/xkycklinggratang_med_fetaost_tillbehor_1060.jpg.pagespeed.ic.CbUEukaTft.webp",
    lunchOfTheWeekDefault: {
      bistroId: "10",
      tags: {
        outdoorSeating: false,
        coffeeIncluded: true,
        saladBuffet: true,
      },
      monday: {
        dishes: [
          "Fläskfilégryta med champinjoner, purjolök och cocktailtomat serveras med kokt ris.", 
          "Lättpanerad koljafilé med rostade rödbetor, skirat smör och kapris serveras med dillslungad färskpotatis.",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 79,
      },
      tuesday: {
        dishes: [
          "Klassisk köttfärslimpa med champinjonsås, staktpotatis och gelé samt ångade bukettgrönsaker.",
          "Fransk fiskgratäng med purjolök, riven ost och räkor serveras med potatismos och frästa rotfrukter."
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 79,
      },
      wednesday: {
        dishes: [
          "Fetaostfylld kycklingfilé med gräddig oreganosås, råstekt potatis smaksatt med vitlök och tomat & löksallad.",
          "Panerad torskfilé med skagenröra, koktpotatis och smörade morötter."
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 79,
      },
      thursday: {
        dishes: [
          "Krämig fisk- och skaldjurssoppa samt pannkakor sylt & grädde.",
          "Rödvinsbräserad fläskklubba med potatispuré smaksatt med tryffel serveras med bacon & lök samt friterad persilja.",
          "Mannerströmming med brynt smör, rårörda lingon och potatismos samt gröna ärtor."
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 79,
      },
      friday: {
        dishes: [
          "Helstekt fläskfilé Black & White (rödvinssås & bearnaisesås) serveras med rostad klyftpotatis och grillade grönsaker.",
          "Grillad laxfilé med citronhollandaise, dillkokt potatis och gröna ärtor samt citronmarinerade räkor med örter.",
        ],
        lunchStart: 11.0,
        lunchEnd: 14.0,
        priceFrom: 79,
      },
    },
    likedBistro: true,
  },
];
