import { Pokedex } from "pokeapi-js-wrapper"

//const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex({cacheImages: true})

// To retrieve a random pokemon; there are 1232 entries in pokemon, can also use the getPokemonsList call
const MIN_ID = 1   // ids start at 1
const MAX_ID = 1000   // to make sure it won't overflow, always round down

function getPokedex() {
    return P
}

function getRandomPokemons(amount) {
    // build an array of random id's, specified length, none can be repeated
    const randomIds = []
    for (let i = 0; i < amount; i++) {
        // generate random id between min and max
        const randId = Math.floor(Math.random() * (MAX_ID - MIN_ID +1)) + MIN_ID
        // check if it's already contained in the array, if so generate another one
        // once it's unique, add to array
        randomIds.push(randId)
    }
    // get pokemon data for all these IDs 
    // return the data
    return randomIds
}

export { getPokedex, getRandomPokemons }