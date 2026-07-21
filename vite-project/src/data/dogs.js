// Single source of truth for all breed data.
// Home and Breeds both read from here so the two pages can never disagree.

export const SIZES = ['Small', 'Medium', 'Large'];
export const ENERGY_LEVELS = ['Low', 'Medium', 'High'];

const BASE = import.meta.env.BASE_URL;

const dogs = [
  {
    id: 1,
    name: 'Bernedoodle',
    size: 'Large',
    energy: 'Medium',
    temperament: 'Gentle, playful, intelligent',
    image: `${BASE}bernedoodle.jpg`
  },
  {
    id: 2,
    name: 'Poodle',
    size: 'Small',
    energy: 'High',
    temperament: 'Smart, active, elegant',
    image: `${BASE}poodle.jpg`
  },
  {
    id: 3,
    name: 'Pomsky',
    size: 'Medium',
    energy: 'High',
    temperament: 'Energetic, friendly, vocal',
    image: `${BASE}pomsky.jpg`
  },
  {
    id: 4,
    name: 'Long-coat Dachshund',
    size: 'Small',
    energy: 'Medium',
    temperament: 'Brave, curious, lively',
    image: `${BASE}Long-coat Dachshund.jpg`
  },
  {
    id: 5,
    name: 'West Highland White Terrier',
    size: 'Small',
    energy: 'Medium',
    temperament: 'Confident, independent, friendly',
    image: `${BASE}West Highland White Terrier.jpg`
  },
  {
    id: 6,
    name: 'Goldendoodle',
    size: 'Large',
    energy: 'Medium',
    temperament: 'Affectionate, loyal, playful',
    image: `${BASE}Goldendoodle.jpg`
  }
];

export default dogs;