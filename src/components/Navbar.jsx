import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Navbar = ({ setIndexPokemon, pokemonList,indexPokemon }) => {

  useEffect(() => {
    if(indexPokemon === 3) {
      alert("pikachu")
    }
  },[indexPokemon, pokemonList]);

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          key={index} 
          onClick={() => setIndexPokemon(index)}>
          {pokemon.name} 
        </button>
      ))}
    </div>
  );
};

export default Navbar;


