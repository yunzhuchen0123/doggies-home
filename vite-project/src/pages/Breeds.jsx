import { useState } from 'react';
import DogCard from '../components/DogCard';
import '../styles/breeds.css';

function Breeds() {
  const allDogs = [
    {
      id: 1,
      name: 'Bernedoodle',
      size: 'Large',
      temperament: 'Gentle, playful, intelligent',
      image: '/bernedoodle.jpg',
      energy: 'Medium'
    },
    {
      id: 2,
      name: 'Poodle',
      size: 'Small',
      temperament: 'Smart, active, elegant',
      image: '/poodle.jpg',
      energy: 'High'
    },
    {
      id: 3,
      name: 'Pomsky',
      size: 'Medium',
      temperament: 'Energetic, friendly, vocal',
      image: '/pomsky.jpg',
      energy: 'High'
    },
    {
      id: 4,
      name: 'Long-coat Dachshund',
      size: 'Small',
      temperament: 'Brave, curious, lively',
      image: '/Long-coat Dachshund.jpg',
      energy: 'Medium'
    },
    {
      id: 5,
      name: 'West Highland White Terrier',
      size: 'Small',
      temperament: 'Confident, independent, friendly',
      image: '/West Highland White Terrier.jpg',
      energy: 'Medium'
    },
    {
      id: 6,
      name: 'Goldendoodle',
      size: 'Large',
      temperament: 'Affectionate, loyal, playful',
      image: '/Goldendoodle.jpg',
      energy: 'Medium'
    }
  ];

  const [filterSize, setFilterSize] = useState('all');
  const [filterEnergy, setFilterEnergy] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  function getFilteredDogs() {
    let filtered = [...allDogs];

    if (filterSize !== 'all') {
      filtered = filtered.filter(dog => dog.size === filterSize);
    }

    if (filterEnergy !== 'all') {
      filtered = filtered.filter(dog => dog.energy === filterEnergy);
    }

    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'size') {
      const sizeOrder = { 'Small': 1, 'Medium': 2, 'Large': 3 };
      filtered.sort((a, b) => sizeOrder[a.size] - sizeOrder[b.size]);
    }

    return filtered;
  }

  const displayedDogs = getFilteredDogs();

  return (
    <div className="breeds">
      <h2 className="breeds__title">All Dog Breeds</h2>
      <p className="breeds__intro">
        Browse our complete collection of dog breeds. Use the filters below to find breeds that match your preferences!
      </p>

      <div className="breeds__filters">
        <div className="breeds__filter-group">
          <label htmlFor="size-filter" className="breeds__filter-label">
            Filter by Size:
          </label>
          <select 
            id="size-filter"
            className="breeds__filter-select"
            value={filterSize}
            onChange={(e) => setFilterSize(e.target.value)}
          >
            <option value="all">All Sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="breeds__filter-group">
          <label htmlFor="energy-filter" className="breeds__filter-label">
            Filter by Energy:
          </label>
          <select 
            id="energy-filter"
            className="breeds__filter-select"
            value={filterEnergy}
            onChange={(e) => setFilterEnergy(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="breeds__filter-group">
          <label htmlFor="sort-select" className="breeds__filter-label">
            Sort by:
          </label>
          <select 
            id="sort-select"
            className="breeds__filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="size">Size</option>
          </select>
        </div>
      </div>

      <div className="breeds__results">
        <p className="breeds__count">Showing {displayedDogs.length} breeds</p>
        <div className="breeds__grid">
          {displayedDogs.map(dog => (
            <DogCard 
              key={dog.id}
              name={dog.name}
              size={dog.size}
              temperament={dog.temperament}
              image={dog.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Breeds;