import React, { useState } from 'react';
import './RecipeCard.css';
import JobFunctionPill from './JobFunctionPill';
import { FaChartLine, FaUsers, FaCode, FaMoneyBill, FaBullhorn, FaHeadset, FaTruck, FaProjectDiagram, FaPaintBrush, FaSearch, FaHeart, FaHandshake } from 'react-icons/fa';

function RecipeCard({ recipe }) {
  const [likes, setLikes] = useState(recipe.likes);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const getIcon = (jobFunction) => {
    switch (jobFunction) {
      case 'Marketing':
        return <FaBullhorn />;
      case 'HR':
        return <FaUsers />;
      case 'Development':
        return <FaCode />;
      case 'Finance':
        return <FaMoneyBill />;
      case 'Support':
        return <FaHeadset />;
      case 'Logistics':
        return <FaTruck />;
      case 'Project Management':
        return <FaProjectDiagram />;
      case 'Design':
        return <FaPaintBrush />;
      case 'Research':
        return <FaSearch />;
      case 'Sales':
        return <FaHandshake />;
      default:
        return <FaChartLine />;
    }
  };

  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h3 className="recipe-title">{recipe.title}</h3>
        <JobFunctionPill jobFunction={recipe.jobFunction} icon={getIcon(recipe.jobFunction)} />
      </div>
      <div className="recipe-details">
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span className="recipe-author">By {recipe.author}</span>
          <span className="recipe-likes" onClick={handleLike}><FaHeart /> {likes}</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
