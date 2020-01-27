const request = require('request');
var rp = require('request-promise')

// const pokemonRp =(name) =>{
// //return new Promise((resolve, reject) => {
//         rp(`https://pokeapi.co/api/v2/pokemon/${name}`).promise()
//            .then(function (response) {
//                // Process html...
//                 resolve(response)
//            })
//            .catch(function (err) {
//                // Crawling failed...
//                reject(err)
//            });
    
// //});
// }

// pokemonRp('pikachu')
// .then((data) => console.log(data) )
// .catch((razon)=> console.log(eror))

// // const Pokemon = name =>{

//     return new Promise((resolve, reject) => {
//     request(`https://pokeapi.co/api/v2/pokemon/${name}/`,((error,response,body) =>{
      
//             if(response.statusCode === 200){
//                 resolve(body)

//             }else{
//                 reject('Error')
//             }
//         }));
//     });
//       //  console.log(error);
// }

// Pokemon('pikachu')
//  .then((data) => console.log(data) )
//  .catch((razon)=> console.log(eror))


var PokeApi = require('pokeapi');
var api = PokeApi.v1();
console.log(api)
api.get('pokemon', 1)
    .then(function(bulbasaur) {
    console.log("Here's Bulbasaur:", bulbasaur);
    api.get(bulbasaur.moves)
    .then(function(moves) {
	    console.log("Full move list:" + moves);
    })
}, function(err) {
    console.log('ERROR', err);
});