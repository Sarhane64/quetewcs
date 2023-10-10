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

export default Pokecard;

