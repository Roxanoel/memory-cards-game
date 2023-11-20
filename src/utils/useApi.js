import { Pokedex } from "pokeapi-js-wrapper"

//const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex({cacheImages: true})

// To retrieve a random pokemon; there are 1232 entries in pokemon, can also use the getPokemonsList call
const MIN_ID = 1   // ids start at 1
const MAX_ID = 1000   // to make sure it won't overflow, always round down

function getRandomPokemons(amount) {
    // build an array of random id's, specified length, none can be repeated
    const randomIds = []
    while(randomIds.length < amount){
        var idCandidate = Math.floor(Math.random() * (MAX_ID - MIN_ID +1)) + MIN_ID
        if(randomIds.indexOf(idCandidate) === -1) randomIds.push(idCandidate)
    }
    // get pokemon data for all these IDs 
    // return the data
    return randomIds
}

export { getRandomPokemons }