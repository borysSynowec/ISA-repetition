// 1. TODO. Wyłap kraje, których powierzchnia jest większa niż 1000000 km2 lub mniejsza niż 30000 km2
console.log('1/////////////')

countriesArea = countries.filter(function(country){
    return country.area > 1000000 || country.area < 3000 
})
console.log(countriesArea)

// 2. TODO. Wyłap kraje, których powierzchnia jest mniejsza niż 5000000 km2 i liczba ludności większa od 10 mln.
console.log('2/////////////')

countries_Area_Pop = countries.filter(function(country){
    return country.area < 5000000 && country.population > 10000000
})
console.log(countries_Area_Pop)

// 3. TODO. Wyłap kraje, które mają co najmniej 10 sasiądów
console.log('3/////////////')

countries_Three_Neighbours = countries.filter(function(country){
    return country.borders.length > 10
})
console.log(countries_Three_Neighbours)

// 4. TODO. Wyłap kraje, których region to europa
console.log('4/////////////')

countries_europe = countries.filter(function(country){
    return country.region == 'Europe'
})
console.log(countries_europe)

// 5. TODO. Wyłap kraje, których stolica zaczna się na literę przekazaną w parametrze
console.log('5/////////////')

countries_capital_parameter = countries.filter(function(country){
    return 
})


// 7. TODO. Wyłap kraje, które za sasiąda mają Niemców
console.log('7/////////////')

countries_neighbour_germany = countries.filter(function(country){
    return country.borders.includes('DEU')
})
console.log(countries_neighbour_germany)

// 8. TODO: Sprawdź, czy czy jakikolwiek kraj ma stolicę na literę "Y"
console.log('8/////////////')

countries_startsWith_Y = countries.filter(function(country){
    return country.capital.charAt(0) == 'Y' // LUB METODA startsWith()
})
console.log(countries_startsWith_Y)

// 9. TODO: Sprawdź, czy wszystkie kraje mają populację powyżej 50 tys.
console.log('9/////////////')

countries_population_bigger50 = countries.filter(function(country){
   return country.population < 50000
})
console.log(countries_population_bigger50)

//10. wyfiltruj kraje, ktore maja za sasiada rosje i powierzchnie większa niz 300 000 km2
console.log('10/////////////')

countries_russiaNeighbour_big = countries.filter(function(country){
    return country.borders.includes('RUS') && country.area > 300000
})
console.log(countries_russiaNeighbour_big)

