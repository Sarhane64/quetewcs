
import { useState } from 'react';
import Pokecard from './components/Pokecard';
import Navbar from './components/Navbar.jsx';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  const [indexPokemon, setIndexPokemon] = useState(0)

  const pokemon = pokemonList[indexPokemon]

  return (
    <div>
      <Pokecard pokemon={pokemon} />
      <Navbar setIndexPokemon={setIndexPokemon} pokemonList={pokemonList}/>
    </div>
  );
};

export default App;