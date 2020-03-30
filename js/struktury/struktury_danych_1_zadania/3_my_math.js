/* 1. TODO: stworz obiekt MyMath który posiada trzy metody: do liczenia wierzchołka Y, wierzchołka X oraz delty. Metody
wzory:  peekY = - delta/4a
        peekX = - a / 2b
        delta = b * b - 4 * a * c

        Wykorzystaj stworzony obiekt i wywołaj jego metody z odpowiednimi parametrami, sprwadz czy zwraca dobre wartości
 */

MyMath = {
        a: 3,
        b: 2,
        c: 1,


        peekZ: function () { return -(this.a) / 2 * (this.b) },  
        peekY: function () { return -(this.delta()) / 4 * (this.a) },
        delta: function () { return 2 * (this.b) - 4 * (this.a * this.c) },
}
console.log(MyMath.peekZ())
console.log(MyMath.peekY())
console.log(MyMath.delta())