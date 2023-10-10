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

const Pokecard = () => {
  const pokemon = pokemonList[0];

  return (
    <div className="card-container">
      <figure className="card">
        {pokemon.imgSrc ? (
          <img
            src={pokemon.imgSrc}
            alt={pokemon.name}
            className="card-img"
            width="250px"
          />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default Pokecard;
