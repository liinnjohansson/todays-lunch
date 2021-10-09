# todays-lunch

### Beskrivning av projektet
Applikation skapad för att visa dagens luncher i Borås 

### Script
För att bygga appen kör: **npm install**

För att köra appen kör: **npm start**

För att köra appen i en android-emulator kör: **expo start --android**

För att köra appen i en iOS-emulator kör: **expo start --ios**

För att köra appen i webben kör: **expo start --web**

### Komponenter som används i projektet

#### React Native-komponenter
- [Platform](https://reactnative.dev/docs/platform)
- [Text](https://docs.expo.dev/versions/v42.0.0/react-native/text/)
- [ImageBackground](https://docs.expo.dev/versions/v42.0.0/react-native/imagebackground/)
- [ScrollView](https://docs.expo.dev/versions/v42.0.0/react-native/scrollview/)
- [TouchableOpacity](https://docs.expo.dev/versions/v42.0.0/react-native/touchableopacity/)
- [Animated](https://docs.expo.dev/versions/v42.0.0/react-native/animated/)
- [Dimensions](https://docs.expo.dev/versions/v42.0.0/react-native/dimensions/)
- [StyleSheet](https://docs.expo.dev/versions/v42.0.0/react-native/stylesheet/)
- [Flatlist](https://docs.expo.dev/versions/v42.0.0/react-native/flatlist/)

#### Expo-komponenter
- [Linking](https://docs.expo.dev/versions/v42.0.0/sdk/linking/)
- [Location](https://docs.expo.dev/versions/v42.0.0/sdk/location/)
- [MapView](https://docs.expo.dev/versions/v42.0.0/sdk/map-view/)
- [SafeAreaContext](https://docs.expo.dev/versions/v42.0.0/sdk/safe-area-context/)
- [SplashScreen](https://docs.expo.dev/versions/v42.0.0/sdk/splash-screen/)
- [StatusBar](https://docs.expo.dev/versions/v42.0.0/react-native/statusbar/)
- [Constants](https://docs.expo.dev/versions/v42.0.0/sdk/constants/)
- [SecureStore](https://docs.expo.dev/versions/v42.0.0/sdk/securestore/)

#### Externa moduler
- [React Native Paper](https://reactnativepaper.com/)
- [React Native Navigation](https://reactnavigation.org/)

### Prototyper

![prototyp](https://user-images.githubusercontent.com/71378960/136589873-ff44c7af-3fb8-46dc-a683-a7c96e17d8ee.png)

### Utvecklingsmöjligheter och issues

#### Utveckling
- [Lägga till tema för navigationen och react native paper för att kunna ge en bra användarupplevelse i både light mode och dark mode.](https://github.com/liinnjohansson/todays-lunch/issues/66)
- [Navigationen ger inte önskvärt resultat när man går från meny till karta och vill gå tillbaka. Då hamnar användaren på startsidan istället för menyn.](https://github.com/liinnjohansson/todays-lunch/issues/55)
- [Weekday slider visar måndag by default, men hade varit önskvärt om den hade visat den aktuella dagen.](https://github.com/liinnjohansson/todays-lunch/issues/83)
- [Navigation till kartan från menyn är möjlig, men hade varit bättre om man fick se den valda restaurangen markerad direkt.](https://github.com/liinnjohansson/todays-lunch/issues/84)
- [Inforutan i menyn har texten "Gå till karta". Vi vill ha information om distansen och tiden (promenadavstånd) till vald restaurang istället.](https://github.com/liinnjohansson/todays-lunch/issues/85)
- [Möjlighet att kunna visa betyg för en restaurang.](https://github.com/liinnjohansson/todays-lunch/issues/86)
- [Kartan visar olika markers beroende på om en restaurang är gillad eller inte.](https://github.com/liinnjohansson/todays-lunch/issues/87)
- [Kartan visar endast de restauranger som är öppna på vald dag.](https://github.com/liinnjohansson/todays-lunch/issues/88)
- [Weekday slider finns på kartan.](https://github.com/liinnjohansson/todays-lunch/issues/89)
- [Weekday slider finns på menyn.](https://github.com/liinnjohansson/todays-lunch/issues/90)

#### Buggar och varningar
- [Bugg i datafilen för bistros](https://github.com/liinnjohansson/todays-lunch/issues/56)
- [Varning från MapViewDirections](https://github.com/liinnjohansson/todays-lunch/issues/82)
- [Varning pga Splashscreen](https://github.com/liinnjohansson/todays-lunch/issues/69)

## Uppfyllda krav:

Krav för godkänt:

1. JA
2. JA
3. JA
4. JA
5. JA
6. JA

Krav för väl godkänt:

1. JA
2. JA
3. JA
4. JA

## Krav för inlämningen:

Krav för godkänt:

1. Projektet använder minst 6 stycken RN-komponenter och minst 6 stycken Expo
   komponenter.
2. De utvalda komponenterna ska antecknas i er README tillsammans med en lista över
   genomförda krav.
3. Git & GitHub har använts
4. Projektmappen innehåller en README.md fil - (läs ovan för mer info)
5. Uppgiften lämnas in i tid!
6. Muntlig presentation är genomförd

Krav för väl godkänt:

1. Alla punkter för godkänt är uppfyllda
2. React Navigation används för att skapa en bättre upplevelse i appen.
3. Ytterligare en valfri extern modul används i projektet.
4. Prototyper för applikation tas fram innan den implementeras. Bilder på prototypen
   skall finnas i projektet vid inlämning.