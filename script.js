let age = ''; 
let cityStr = '';
let sportStr = '';

const ifUserDidntAnswer = ['Шкода, що ви не захотіли ввести свій рік народження', 'Шкода, що ви не захотіли ввести своє місто', 'Шкода, що ви не захотіли ввести свій улюблений вид спорту' ]

const birthYear = parseInt(prompt('Введіть ваш рік народження'));

if (birthYear) {
    age = 2023 - birthYear;
} else {
    alert(ifUserDidntAnswer[0]);
}

const city = prompt('Введіть ваше місто');

if (city) {
    switch (city.toLowerCase().trim()) {
        case 'київ' :
            cityStr = 'Ти живеш у столиці України';
            break;

        case 'лондон' :
            cityStr = 'Ти живеш у столиці Англії';
            break;
        
        case 'вашингтон' :
            cityStr = 'Ти живеш у столиці США';
            break;

        default:
            cityStr = `Ти живеш у місті ${city}`;
    }
} else {
    alert(ifUserDidntAnswer[1]);
}

const favSport = prompt('Введіть назву вашого улюбленого спорту');

if (favSport) {
    switch (favSport.toLowerCase().trim()) {
        case 'бокс' :
            sportStr = 'Круто! Хочеш стати Александром Усиком';
            break;
        
        case 'футбол' :
            sportStr = 'Круто! Хочеш стати Криштіану Роналду';
            break;

        case 'баскетбол' :
            sportStr = 'Круто! Хочеш стати Майклом Джорданом';
            break;
    }
} else {
    alert(ifUserDidntAnswer[2]);
}

if (birthYear || city || favSport) {
    alert(`${age}
${cityStr}
${sportStr}`);
}
