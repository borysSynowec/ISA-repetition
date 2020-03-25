// FOR LOOP
// TODO.1: Przy użyciu pętli FOR, wyświetl w konsoli wszystkie napoje z listy
// UWAGA: Wyświetlone nazwy mają być wypisane wielkimi literami.

var drinksNames = ['Vodka', 'Whisky', 'Prosseco', 'Beer', 'Vine', 'Gin'];
for (let i = 0; i < drinksNames.length; i++) {
  drinksNames[i] = drinksNames[i].toUpperCase();
  console.log(drinksNames[i]);
}


// TODO.2: Przy użyciu pętli FOR, przypisz do zmiennej totalPrice sumę elementów tablicy prices
// Wykorzystaj operator +=
let totalPrice = 0
let prices = [19.99, 40.00, 35.99, 3.20, 16.50, 23.30];
for (i = 0; i < prices.length; i++) {
  totalPrice += prices[i];
};
console.log(totalPrice)

// TODO.3: Napisz funkcję, która zwróci sumę cen drinków z tablicy drinks
let drinks = [
  { name: 'Vodka  ', price: 19.99 },
  { name: 'Whisky ', price: 40.00 },
  { name: 'Prosseco', price: 35.99 },
  { name: 'Beer  ', price: 3.20 },
  { name: '  Vine', price: 16.50 },
  { name: 'Gin ', price: 23.30 }
];

totalDrinksPrice = 0;
for (i = 0; i < drinks.length; i++) {
  totalDrinksPrice += drinks[i].price;
};
console.log(totalDrinksPrice);


// TODO.4: Puść pętlę po tablicy drinks i zaokrąglij w niej ceny do całości

let totalDrinksPriceFixed = 0
for (i = 0; i < drinks.length; i++) {
  totalDrinksPriceFixed += drinks[i].price;
  totalDrinksPriceFixed = totalDrinksPrice.toFixed(1);
}
console.log(totalDrinksPriceFixed)

// TODO.5. Za pomocą pętli, doklej jednostkę PLN do cen

let ddrinks = [
  { name: 'Vodka  ', price: 19.99 },
  { name: 'Whisky ', price: 40.00 },
  { name: 'Prosseco', price: 35.99 },
  { name: 'Beer  ', price: 3.20 },
  { name: '  Vine', price: 16.50 },
  { name: 'Gin ', price: 23.30 }]
  ;
for (i = 0; i < drinks.length; i++) {
  ddrinks[i].price = ddrinks[i].price + ' PLN'
}
console.log(ddrinks)


// TODO.6: Za pomocą pętli, oczyść nazwy drinków z white-spaces

for (i = 0; i < drinks.length; i++) {
  let newDrinks = drinks[i].name.trim()
  console.log(newDrinks);
}


// TODO.7: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *



let dddrinks = [
  { name: 'Vodka  ', price: 19.99 },
  { name: 'Whisky ', price: 40.00 },
  { name: 'Prosseco', price: 35.99 },
  { name: 'Beer  ', price: 3.20 },
  { name: '  Vine', price: 16.50 },
  { name: 'Gin ', price: 23.30 }]
  ;

for (i = 0; i < dddrinks.length; i++) {

  dddrinks[i]['id'] = i+1
}
console.log(dddrinks)




// TODO.8: Napisz funkcję, która policzy średnią cenę drinka w tablicy drinks

const avaragePrice = (drinks) => {
  let totalPrice = 0
  for (i = 0; i < drinks.length; i++) {
    totalPrice += drinks[i].price;
  }
  return 'avarage price is: ' + (totalPrice / drinks.length).toFixed(2);
}
console.log(avaragePrice(drinks));







