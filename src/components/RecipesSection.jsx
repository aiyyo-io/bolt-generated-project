import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import FilterPills from './FilterPills';
import Leaderboard from './Leaderboard';
import './RecipesSection.css';

function RecipesSection() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  const featuredRecipes = [
    { id: 1, title: 'Friday Update Email', description: 'Analyze campaign performance automatically.', jobFunction: 'Marketing', author: 'Jane Doe', likes: 120 },
    { id: 2, title: 'Employee Engagement Insights', description: 'Gain insights into employee engagement.', jobFunction: 'HR', author: 'John Smith', likes: 85 },
    { id: 3, title: 'Code Review Automation', description: 'Automate code reviews for faster development.', jobFunction: 'Development', author: 'Alice Brown', likes: 210 },
  ];

  const allRecipes = [
    { id: 4, title: 'Quarterly Report Generation', description: 'Generate quarterly financial reports.', jobFunction: 'Finance', author: 'Bob Johnson', likes: 50 },
    { id: 5, title: 'Lead Scoring Optimization', description: 'Optimize lead scoring for better conversions.', jobFunction: 'Sales', author: 'Jane Doe', likes: 95 },
    { id: 6, title: 'Customer Query Resolution', description: 'Resolve customer queries efficiently.', jobFunction: 'Support', author: 'Chris Green', likes: 160 },
    { id: 7, title: 'Supply Chain Forecasting', description: 'Forecast supply chain demand accurately.', jobFunction: 'Logistics', author: 'David White', likes: 75 },
    { id: 8, title: 'Project Timeline Estimation', description: 'Estimate project timelines effectively.', jobFunction: 'Project Management', author: 'Emily Black', likes: 110 },
    { id: 9, title: 'UI/UX Design Evaluation', description: 'Evaluate UI/UX designs for usability.', jobFunction: 'Design', author: 'Frank Gray', likes: 180 },
    { id: 10, title: 'Market Research Analysis', description: 'Analyze market research data for insights.', jobFunction: 'Research', author: 'Grace Lee', likes: 65 },
    { id: 11, title: 'Salary Benchmarking', description: 'Benchmark salaries against industry standards.', jobFunction: 'HR', author: 'John Smith', likes: 45 },
    { id: 12, title: 'Financial Risk Assessment', description: 'Assess financial risks and mitigation strategies.', jobFunction: 'Finance', author: 'Bob Johnson', likes: 90 },
    { id: 13, title: 'Codebase Refactoring', description: 'Refactor codebase for improved maintainability.', jobFunction: 'Development', author: 'Alice Brown', likes: 140 },
    { id: 14, title: 'Project Status Reporting', description: 'Generate project status reports for stakeholders.', jobFunction: 'Project Management', author: 'Emily Black', likes: 105 },
  ];

  const filteredRecipes = selectedFilters.length > 0
    ? allRecipes.filter(recipe => selectedFilters.includes(recipe.jobFunction))
    : allRecipes;

  return (
    <div className="recipes-section">
      <div className="recipes-list">
        <h2 className="mb-3">Featured Recipes</h2>
        <div className="featured-recipes">
          {featuredRecipes.map((recipe) => (
            <Link to="/friday-update" key={recipe.id} className="recipe-link">
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
        <div className="all-recipes-header">
          <h2 className="mb-3">All Recipes</h2>
          <a href="#" className="see-all-link">See all</a>
        </div>
        <FilterPills selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
        <div className="all-recipes">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
      <Leaderboard />
    </div>
  );
}

export default RecipesSection;
