# Memory Cards Game
This project was made as an assignment for the Odin Project's full stack JavaScript course. A full description of the assignment can be found [here](https://www.theodinproject.com/lessons/node-path-react-new-memory-card). This is a learning exercise, not an attempt to build an original game. I used the free [PokéAPI](https://pokeapi.co/docs/v2) to fetch the data for random Pokémon: promotional sprites, names, and a list of the Pokémon's types are currently used. I picked this API because it is free, reliable, and the images have a consistent size and aspect ratio, which made it easy to focus on the functionality rather than image manipulation. As a bit of extra fun, I have associated each Pokémon type to a hex code, so that each Pokémon's name is displayed over a background whose colour(s) match the type(s) of that Pokémon.

## Live Preview 
A live preview can be found [here](https://roxanoel.github.io/memory-cards-game/).

## Learning Outcomes
* Using React + Vite
* Deploying a React app to GitHub pages
* Fetching from an API
* Leveraging the useEffect() and useState() hooks
* Switching between page components based on a state variable
* Conditional rendering galore
* Generating CSS gradients with colours based on data.

# Known Caveats
* This app is not responsive, it is intended for most sizes above mobile, but won't display correctly on mobile.

# Opportunities for Improvement
* Adding a difficulty level
* Making the "winning" state more rewarding and appealing
* Adding sounds and animations to make it feel more game-like
