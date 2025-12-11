// const marvel=["m","a","r","v","e","l"]
// const dc=["d","c"]
// // marvel.push(dc)
// // console.log(marvel) //[ 'm', 'a', 'r', 'v', 'e', 'l', [ 'd', 'c' ] ]
// // console.log(marvel[6]) //[ 'd', 'c' ]
// //console.log(marvel.concat(dc))
// /*[
//   'm', 'a', 'r',
//   'v', 'e', 'l',
//   'd', 'c'
// ] */
// //SPREAD METHOD
// const all_heroes=[...marvel,...dc]
// console.log(all_heroes) //same as concat, preferred because can work with 3 values also
// const array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(array.flat(Infinity))
// /*[
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]*/
console.log((Array.isArray("MAria"))); //false
console.log(Array.from("Maria")) //[ 'M', 'a', 'r', 'i', 'a' ]
console.log(Array.from({name:"Maria"})) // [] , intresting case
 
let score1=100
let score2=200
let score3=300
console.lof(Array.of(score1.score2,score3)) //[100,200,300]