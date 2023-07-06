const birthYear = parseInt(prompt('Введіть ваш рік народження'));
if (!birthYear) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
}

const city = prompt('Введіть ваше місто').trim();
const strToShow = `${2023 - birthYear}
Ти живеш у столиці `

if (!city) {
    alert('Шкода, що Ви не захотіли ввести своє місто');
} else {
    switch (city.toLowerCase()) {
        case 'київ' :
            alert(`${strToShow}України`);
            break;

        case 'лондон' :
            alert(`${strToShow}Англії`);
            break;
        
        case 'вашингтон' :
            alert(`${strToShow}США`);
            break;

        default:
            alert(`${strToShow}${city}`)
    }
}

const favSport = prompt('Введіть назву вашого улюбленого спорту').trim();

if (!favSport) {
    alert('Шкода, що Ви не захотіли ввести свій улюблений спорт');
} else {
    switch (favSport.toLowerCase()) {
        case 'бокс' :
            alert('Круто! Хочеш стати Александром Усиком?');
            break;
        
        case 'футбол' :
            alert('Круто! Хочеш стати Криштіану Роналду?');
            break;

        case 'баскетбол' :
            alert('Круто! Хочеш стати Майклом Джорданом?');
            break;
    }
}