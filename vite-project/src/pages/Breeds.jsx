import { useState, useMemo } from 'react';
import DogCard from '../components/DogCard';
import dogs, { SIZES, ENERGY_LEVELS } from '../data/dogs';
import '../styles/breeds.css';

const SIZE_ORDER = { Small: 1, Medium: 2, Large: 3 };

function Breeds() {
  const [filterSize, setFilterSize] = useState('all');
  const [filterEnergy, setFilterEnergy] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const displayedDogs = useMemo(() => {
    let filtered = dogs.filter(dog => {
      const sizeMatch = filterSize === 'all' || dog.size === filterSize;
      const energyMatch = filterEnergy === 'all' || dog.energy === filterEnergy;
      return sizeMatch && energyMatch;
    });

    filtered = [...filtered];

    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'size') {
      filtered.sort((a, b) => SIZE_ORDER[a.size] - SIZE_ORDER[b.size]);
    }

    return filtered;
  }, [filterSize, filterEnergy, sortBy]);

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
            {SIZES.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
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
            {ENERGY_LEVELS.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
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
        <p className="breeds__count" aria-live="polite">
          Showing {displayedDogs.length} {displayedDogs.length === 1 ? 'breed' : 'breeds'}
        </p>

        {displayedDogs.length === 0 ? (
          <p className="breeds__empty">
            No breeds match those filters. Try widening your search!
          </p>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Breeds;
