import '../styles/about.css';

function About() {
  return (
    <div className="about">
      <h2 className="about__title">About Pawfect Pups</h2>
      
      <section className="about__section">
        <h3 className="about__heading">Our Mission</h3>
        <p className="about__text">
          At Pawfect Pups, we believe that every person deserves to find their perfect canine companion. 
          Our mission is to provide comprehensive, accurate, and helpful information about different dog breeds 
          to help you make an informed decision when choosing your new furry family member.
        </p>
      </section>

      <section className="about__section">
        <h3 className="about__heading">What We Offer</h3>
        <p className="about__text">
          We provide detailed information about various popular dog breeds, including their temperaments, 
          care requirements, and living needs. Our interactive quiz helps match you with breeds that fit 
          your lifestyle, while our care guides ensure you have the knowledge to provide the best possible 
          home for your dog.
        </p>
      </section>

      <section className="about__section">
        <h3 className="about__heading">Why Choose Us</h3>
        <p className="about__text">
          Our team consists of dog lovers and experts who understand the joy and responsibility of dog ownership. 
          We continuously update our information to reflect the latest in dog care and breed knowledge. 
          Whether you are a first-time dog owner or an experienced handler, we have resources to help you.
        </p>
      </section>

      <section className="about__section">
        <h3 className="about__heading">Get Started</h3>
        <p className="about__text">
          Ready to begin your journey? Browse our breed gallery, read through our care guides, 
          or take our quiz to find your perfect match. We are here to support you every step of the way 
          as you welcome a new furry friend into your life!
        </p>
      </section>
    </div>
  );
}

export default About;