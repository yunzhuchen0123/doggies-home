import '../styles/dog-card.css';

function DogCard({ name, size, temperament, image }) {
  return (
    <article className="dog-card">
      <img src={image} alt={`${name} dog breed`} className="dog-card__image" />
      <div className="dog-card__content">
        <h3 className="dog-card__name">{name}</h3>
        <p className="dog-card__detail"><strong>Size:</strong> {size}</p>
        <p className="dog-card__detail"><strong>Temperament:</strong> {temperament}</p>
      </div>
    </article>
  );
}

export default DogCard;