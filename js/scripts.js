function addArrayElement(arrayName, elementName) {
    if (arrayName.indexOf(elementName) === -1) {
        arrayName.push(elementName);
        console.log('Tablica po dodaniu nowego elementu = [' + arrayName + ']');
    } else {
        console.log('Błąd! W tablicy istnieje już element o takiej wartości!');
    }
}

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log('Tablica allNames = [' + allNames + ']');

var newName = 'Marian';

/*var indexOfNewName = allNames.indexOf(newName);
console.log(indexOfNewName);*/

addArrayElement(allNames, newName);
console.log('Próba dodania po raz kolejny tego samego elementu.');
addArrayElement(allNames, newName);