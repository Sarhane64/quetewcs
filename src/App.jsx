
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

  const next = () => {
    if(indexPokemon < pokemonList.length - 1) {
      setIndexPokemon((current => current + 1))
    }
  }

  const precedent = () => {
    if(indexPokemon > 0) {
      setIndexPokemon((current => current - 1))
    }
  }

  const pokemon = pokemonList[indexPokemon]

  return (
    <div>
      <Pokecard pokemon={pokemon} />
      <Navbar precedent={precedent} next={next}/>
    </div>
  );
};

export default App;