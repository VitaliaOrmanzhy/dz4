const birthYear = parseInt(prompt('Введіть ваш рік народження'));
if (!birthYear) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
}

const city = prompt('Введіть ваше місто').trim();
let strToShow = `${2023 - birthYear}
Ти живеш у столиці `
let countryToShow = '';
let nameOfAthlete = '';

if (!city) {
    alert('Шкода, що Ви не захотіли ввести своє місто');
} else {
    switch (city.toLowerCase()) {
        case 'київ' :
            strToShow += 'України';
            break;

        case 'лондон' :
            strToShow += 'Англії';
            break;
        
        case 'вашингтон' :
            strToShow += 'США';
            break;

        default:
            strToShow = `${2023 - birthYear}
Ти живеш у місті ${city}`;
    }
}

const favSport = prompt('Введіть назву вашого улюбленого спорту').trim();

if (!favSport) {
    alert('Шкода, що Ви не захотіли ввести свій улюблений спорт');
} else {
    switch (favSport.toLowerCase()) {
        case 'бокс' :
            nameOfAthlete = 'Александром Усиком';
            break;
        
        case 'футбол' :
            nameOfAthlete = 'Криштіану Роналду';
            break;

        case 'баскетбол' :
            nameOfAthlete = 'Майклом Джорданом';
            break;
    }
}

if (city && favSport && birthYear) {
    alert(`${strToShow}
Круто! Хочеш стати ${nameOfAthlete}`);
}