/* eslint-disable react/prop-types */
const Navbar = ({ setIndexPokemon, pokemonList }) => {
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

