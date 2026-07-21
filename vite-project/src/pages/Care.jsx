import { useState } from 'react';
import '../styles/care.css';

function Care() {
  const [openAccordion, setOpenAccordion] = useState(null);

  function toggleAccordion(id) {
    setOpenAccordion(openAccordion === id ? null : id);
  }

  const careTopics = [
    {
      id: 1,
      title: 'Feeding Guidelines',
      content: 'Feed your dog high-quality dog food appropriate for their age, size, and activity level. Adult dogs typically eat twice daily, while puppies need more frequent meals. Always provide fresh water and avoid foods toxic to dogs like chocolate, grapes, and onions.'
    },
    {
      id: 2,
      title: 'Exercise Requirements',
      content: 'Different breeds have different exercise needs. Small breeds may need 30 minutes daily, while large active breeds need up to 2 hours. Regular exercise keeps dogs physically healthy and mentally stimulated. Include walks, playtime, and training sessions.'
    },
    {
      id: 3,
      title: 'Grooming Tips',
      content: 'Brush your dog regularly to prevent matting and reduce shedding. Long-haired breeds need daily brushing, while short-haired breeds need weekly grooming. Bathe your dog monthly or as needed, trim nails regularly, and clean ears to prevent infections.'
    },
    {
      id: 4,
      title: 'Health Care',
      content: 'Schedule annual vet checkups for adult dogs and more frequent visits for puppies and seniors. Keep vaccinations current, use preventive medications for fleas, ticks, and heartworms. Watch for signs of illness like changes in appetite, behavior, or energy levels.'
    },
    {
      id: 5,
      title: 'Training Basics',
      content: 'Start training early using positive reinforcement methods. Teach basic commands like sit, stay, come, and down. Socialize puppies with people, other dogs, and various environments. Be consistent, patient, and reward good behavior with treats and praise.'
    },
    {
      id: 6,
      title: 'Living Environment',
      content: 'Provide a safe, comfortable space for your dog with a bed, toys, and access to water. Puppy-proof your home by removing hazards. Ensure adequate space for your dog to move around. Consider your living situation when choosing a breed that fits your lifestyle.'
    }
  ];

  return (
    <div className="care">
      <h2 className="care__title">Dog Care Guide</h2>
      <p className="care__intro">
        Learn everything you need to know about taking care of your furry companion. 
        Click on each topic below to expand and read more detailed information.
      </p>

      <div className="care__accordion">
        {careTopics.map(topic => (
          <div key={topic.id} className="accordion-item">
            <button
              className={openAccordion === topic.id ? 'accordion-item__button accordion-item__button--active' : 'accordion-item__button'}
              onClick={() => toggleAccordion(topic.id)}
              aria-expanded={openAccordion === topic.id}
            >
              <span className="accordion-item__title">{topic.title}</span>
              <span className="accordion-item__icon">
                {openAccordion === topic.id ? '−' : '+'}
              </span>
            </button>
            {openAccordion === topic.id && (
              <div className="accordion-item__content">
                <p className="accordion-item__text">{topic.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="care__tip">
        <h3 className="care__tip-title">Pro Tip</h3>
        <p className="care__tip-text">
          Every dog is unique! While these guidelines are helpful, always consult with your veterinarian 
          for advice specific to your dog's breed, age, and health condition.
        </p>
      </div>
    </div>
  );
}

export default Care;