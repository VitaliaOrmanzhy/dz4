const birthYear = parseInt(prompt('Введіть ваш рік народження'));
if (!birthYear) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else {
    alert(`${2023 - birthYear}`);
}

const city = prompt('Введіть ваше місто').trim();

if (!city) {
    alert('Шкода, що Ви не захотіли ввести своє місто');
} else {
    switch (city.toLowerCase()) {
        case 'київ' :
            alert('Ти живеш у столиці України');
            break;

        case 'лондон' :
            alert('Ти живеш у столиці Англії');
            break;
        
        case 'вашингтон' :
            alert('Ти живеш у столиці США');
            break;

        default:
            alert(`Ти живеш у місті ${city}`)
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