import DogCard from '../components/DogCard';
import '../styles/home.css';

function Home() {
  const dogs = [
    {
      id: 1,
      name: 'Bernedoodle',
      size: 'Small to Large',
      temperament: 'Gentle, playful, intelligent',
      image: '/bernedoodle.jpg'
    },
    {
      id: 2,
      name: 'Poodle',
      size: 'small',
      temperament: 'Smart, active, elegant',
      image: '/poodle.jpg'
    },
    {
      id: 3,
      name: 'Pomsky',
      size: 'Small to Medium',
      temperament: 'Energetic, friendly, vocal',
      image: '/pomsky.jpg'
    },
    {
      id: 4,
      name: 'Long-coat Dachshund',
      size: 'Small',
      temperament: 'Brave, curious, lively',
      image: '/Long-coat Dachshund.jpg'
    },
    {
      id: 5,
      name: 'West Highland White Terrier',
      size: 'Small',
      temperament: 'Confident, independent, friendly',
      image: '/West Highland White Terrier.jpg'
    },
    {
      id: 6,
      name: 'Goldendoodle',
      size: 'Medium to Large',
      temperament: 'Affectionate, loyal, playful',
      image: '/Goldendoodle.jpg'
    }
  ];

  return (
    <div className="home">
      <section className="home__hero">
        <h2 className="home__title">Discover Your Perfect Furry Friend</h2>
        <p className="home__description">
          Welcome to Pawfect Pups! We are dedicated to helping you find the perfect dog breed that matches your lifestyle and personality. 
          Explore our featured breeds below and learn everything you need to know about these adorable companions.
        </p>
      </section>

      <section className="home__featured">
        <h2 className="home__section-title">Featured Breeds</h2>
        <div className="home__cards">
          {dogs.map(dog => (
            <DogCard 
              key={dog.id}
              name={dog.name}
              size={dog.size}
              temperament={dog.temperament}
              image={dog.image}
            />
          ))}
        </div>
      </section>

      <section className="home__cta">
        <h2 className="home__cta-title">Ready to Learn More?</h2>
        <p className="home__cta-text">
          Browse our complete breed gallery, read our care guides, or take our quiz to find your perfect match!
        </p>
      </section>
    </div>
  );
}

export default Home;