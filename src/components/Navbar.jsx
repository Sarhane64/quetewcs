/* eslint-disable react/prop-types */
  

const Navbar = ({indexPokemon, setIndexPokemon,pokemonList}) => {
    
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
    return (
        <div>
            <button onClick={next} >Next</button>
            <button onClick={precedent}>Precedent</button>
        </div>
    );
};



export default Navbar;