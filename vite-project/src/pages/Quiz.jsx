import { useState } from 'react';
import '../styles/quiz.css';

function Quiz() {
  const [livingSpace, setLivingSpace] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [experience, setExperience] = useState('');
  const [hasChildren, setHasChildren] = useState('');
  const [groomingTime, setGroomingTime] = useState('');
  const [otherPets, setOtherPets] = useState('');
  const [otherPetsDetail, setOtherPetsDetail] = useState('');
  const [result, setResult] = useState('');
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!livingSpace) {
      newErrors.livingSpace = 'Please select your living space';
    }
    if (!activityLevel) {
      newErrors.activityLevel = 'Please select your activity level';
    }
    if (!experience) {
      newErrors.experience = 'Please select your experience level';
    }
    if (!hasChildren) {
      newErrors.hasChildren = 'Please indicate if you have children';
    }
    if (!groomingTime) {
      newErrors.groomingTime = 'Please select grooming time commitment';
    }
    if (!otherPets) {
      newErrors.otherPets = 'Please indicate if you have other pets';
    }
    if (otherPets === 'yes' && !otherPetsDetail.trim()) {
      newErrors.otherPetsDetail = 'Please specify what type of pets you have';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let recommendation = '';

    if (livingSpace === 'apartment' && activityLevel === 'low') {
      recommendation = 'A Long-coat Dachshund or West Highland White Terrier would be perfect for you! These small breeds adapt well to apartment living and have moderate exercise needs.';
    } else if (activityLevel === 'high' && experience === 'experienced') {
      recommendation = 'A Poodle or Pomsky would be great! These energetic breeds love activity and benefit from experienced owners who can provide proper training.';
    } else if (hasChildren === 'yes' && livingSpace === 'house') {
      recommendation = 'A Goldendoodle or Bernedoodle would be wonderful! These friendly, gentle breeds are great with children and thrive in homes with yards.';
    } else if (groomingTime === 'high') {
      recommendation = 'Consider a Poodle, Goldendoodle, or Bernedoodle! These breeds have beautiful coats that require regular grooming, which you are ready to provide.';
    } else {
      recommendation = 'Based on your answers, a Goldendoodle could be a great match! This versatile breed adapts well to various lifestyles and is friendly with families.';
    }

    setResult(recommendation);
  }

  return (
    <div className="quiz">
      <h2 className="quiz__title">Find Your Perfect Dog Match</h2>
      <p className="quiz__intro">
        Answer these questions to discover which dog breed is the best fit for your lifestyle!
      </p>

      <form className="quiz__form" onSubmit={handleSubmit}>
        <div className="quiz__field">
          <label htmlFor="living-space" className="quiz__label">
            What is your living space?
          </label>
          <select
            id="living-space"
            className={errors.livingSpace ? 'quiz__select quiz__select--error' : 'quiz__select'}
            value={livingSpace}
            onChange={(e) => setLivingSpace(e.target.value)}
            aria-invalid={errors.livingSpace ? 'true' : 'false'}
            aria-describedby={errors.livingSpace ? 'err-livingSpace' : undefined}
          >
            <option value="">Select an option</option>
            <option value="apartment">Apartment</option>
            <option value="house">House with yard</option>
            <option value="house-large">Large house with large yard</option>
          </select>
          {errors.livingSpace && (
            <span className="quiz__error" id="err-livingSpace">{errors.livingSpace}</span>
          )}
        </div>

        <div className="quiz__field">
          <label htmlFor="activity-level" className="quiz__label">
            What is your activity level?
          </label>
          <select
            id="activity-level"
            className={errors.activityLevel ? 'quiz__select quiz__select--error' : 'quiz__select'}
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            aria-invalid={errors.activityLevel ? 'true' : 'false'}
            aria-describedby={errors.activityLevel ? 'err-activityLevel' : undefined}
          >
            <option value="">Select an option</option>
            <option value="low">Low - I prefer relaxing at home</option>
            <option value="medium">Medium - I enjoy daily walks</option>
            <option value="high">High - I love outdoor activities</option>
          </select>
          {errors.activityLevel && (
            <span className="quiz__error" id="err-activityLevel">{errors.activityLevel}</span>
          )}
        </div>

        <div className="quiz__field">
          <label htmlFor="experience" className="quiz__label">
            What is your experience with dogs?
          </label>
          <select
            id="experience"
            className={errors.experience ? 'quiz__select quiz__select--error' : 'quiz__select'}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            aria-invalid={errors.experience ? 'true' : 'false'}
            aria-describedby={errors.experience ? 'err-experience' : undefined}
          >
            <option value="">Select an option</option>
            <option value="first-time">First-time owner</option>
            <option value="some">Some experience</option>
            <option value="experienced">Very experienced</option>
          </select>
          {errors.experience && (
            <span className="quiz__error" id="err-experience">{errors.experience}</span>
          )}
        </div>

        <div className="quiz__field">
          <label htmlFor="children" className="quiz__label">
            Do you have children at home?
          </label>
          <select
            id="children"
            className={errors.hasChildren ? 'quiz__select quiz__select--error' : 'quiz__select'}
            value={hasChildren}
            onChange={(e) => setHasChildren(e.target.value)}
            aria-invalid={errors.hasChildren ? 'true' : 'false'}
            aria-describedby={errors.hasChildren ? 'err-hasChildren' : undefined}
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.hasChildren && (
            <span className="quiz__error" id="err-hasChildren">{errors.hasChildren}</span>
          )}
        </div>

        <div className="quiz__field">
          <label htmlFor="grooming" className="quiz__label">
            How much time can you dedicate to grooming?
          </label>
          <select
            id="grooming"
            className={errors.groomingTime ? 'quiz__select quiz__select--error' : 'quiz__select'}
            value={groomingTime}
            onChange={(e) => setGroomingTime(e.target.value)}
            aria-invalid={errors.groomingTime ? 'true' : 'false'}
            aria-describedby={errors.groomingTime ? 'err-groomingTime' : undefined}
          >
            <option value="">Select an option</option>
            <option value="low">Minimal - Just occasional brushing</option>
            <option value="medium">Moderate - Weekly grooming</option>
            <option value="high">High - Daily grooming is fine</option>
          </select>
          {errors.groomingTime && (
            <span className="quiz__error" id="err-groomingTime">{errors.groomingTime}</span>
          )}
        </div>

        <div className="quiz__field">
          <label htmlFor="other-pets" className="quiz__label">
            Do you have other pets?
          </label>
          <select
            id="other-pets"
            className={errors.otherPets ? 'quiz__select quiz__select--error' : 'quiz__select'}
            value={otherPets}
            onChange={(e) => setOtherPets(e.target.value)}
            aria-invalid={errors.otherPets ? 'true' : 'false'}
            aria-describedby={errors.otherPets ? 'err-otherPets' : undefined}
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.otherPets && (
            <span className="quiz__error" id="err-otherPets">{errors.otherPets}</span>
          )}
        </div>

        {otherPets === 'yes' && (
          <div className="quiz__field">
            <label htmlFor="other-pets-detail" className="quiz__label">
              What type of pets do you have?
            </label>
            <input
              type="text"
              id="other-pets-detail"
              className={errors.otherPetsDetail ? 'quiz__input quiz__input--error' : 'quiz__input'}
              value={otherPetsDetail}
              onChange={(e) => setOtherPetsDetail(e.target.value)}
              placeholder="e.g., cats, birds, etc."
              aria-invalid={errors.otherPetsDetail ? 'true' : 'false'}
              aria-describedby={errors.otherPetsDetail ? 'err-otherPetsDetail' : undefined}
            />
            {errors.otherPetsDetail && (
              <span className="quiz__error" id="err-otherPetsDetail">{errors.otherPetsDetail}</span>
            )}
          </div>
        )}

        <button type="submit" className="quiz__submit">
          Find My Match
        </button>
      </form>

      {result && (
        <div className="quiz__result" aria-live="polite">
          <h2 className="quiz__result-title">Your Perfect Match</h2>
          <p className="quiz__result-text">{result}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;