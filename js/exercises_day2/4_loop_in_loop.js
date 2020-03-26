var attractions = [
    ['Eifel', 'Chiński Mur', 'Pałac Kultury'],
    ['Piramidy', 'Molo', 'Zamek Krzyżacki'],
    ['Skansen', 'Wawel', 'Starówka']
];

// TODO.1: za pomocą pętli w pętli, wyświetl wszystkie nazwy atrakcji

//1//

const attracitonsList = () => {

    return attractions[0].toString() + attractions[1].toString() + attractions[2].toString()
}
console.log(attracitonsList())

/////////////////////////////////
//2//
for (i = 0; i < attractions.length; i++) {
    console.log(attractions[i].toString());

}

///////////////////////////////////
//3//
    
const attracitonsList2 = () => {
      return attractions.flat(Infinity).toString()
}
    
///////////////////////////