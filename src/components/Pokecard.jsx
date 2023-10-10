import PropTypes from 'prop-types'

const Pokecard = (props) => {
  const { name, imgSrc } = props.pokemon;

  return (
    <div className="card-container">
      <figure className="card">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            className="card-img"
            width="250px"
          />
        ) : (
          <p>???</p>
        )}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

Pokecard.propTypes = {
  pokemon: PropTypes.shape({
  imgSrc: PropTypes.string, 
  name: PropTypes.string.isRequired,
  }).isRequired
};


export default Pokecard;

