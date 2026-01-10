import { FiFilter } from 'react-icons/fi';
import './GalleryFilter.css';

const GalleryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="gallery-filter">
      <div className="filter-header">
        <FiFilter />
        <h3>Filter by Category</h3>
      </div>
      <div className="filter-options">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-option ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            <span className="filter-label">{category.label}</span>
            <span className="filter-count">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilter;