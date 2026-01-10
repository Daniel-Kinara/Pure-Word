import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './MinistryCard.css';

const MinistryCard = ({ ministry }) => {
  return (
    <div className="ministry-card">
      <div className="ministry-icon">
        {ministry.icon}
      </div>
      <h3>{ministry.title}</h3>
      <p className="ministry-description">{ministry.description}</p>
      <Link to={ministry.link} className="ministry-link">
        Learn More <FiArrowRight />
      </Link>
    </div>
  );
};

export default MinistryCard;