import Pokecard from './components/Pokecard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  const pokemon = pokemonList[0  ]; 
  return (
    <div>
      <Pokecard pokemon={pokemon} /> 
    </div>
  );
};

export default App;