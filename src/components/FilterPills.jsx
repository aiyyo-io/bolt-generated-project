import React from 'react';
import './FilterPills.css';
import { FaChartLine, FaUsers, FaCode, FaMoneyBill, FaBullhorn, FaHeadset, FaTruck, FaProjectDiagram, FaPaintBrush, FaSearch, FaHandshake } from 'react-icons/fa';

function FilterPills({ selectedFilters, onFilterChange }) {
  const jobFunctions = [
    { name: 'Marketing', icon: <FaBullhorn /> },
    { name: 'HR', icon: <FaUsers /> },
    { name: 'Development', icon: <FaCode /> },
    { name: 'Finance', icon: <FaMoneyBill /> },
    { name: 'Support', icon: <FaHeadset /> },
    { name: 'Logistics', icon: <FaTruck /> },
    { name: 'Project Management', icon: <FaProjectDiagram /> },
    { name: 'Design', icon: <FaPaintBrush /> },
    { name: 'Research', icon: <FaSearch /> },
    { name: 'Sales', icon: <FaHandshake /> }
  ];

  return (
    <div className="filter-pills">
      {jobFunctions.map((jobFunction) => (
        <span
          key={jobFunction.name}
          className={`filter-pill ${selectedFilters.includes(jobFunction.name) ? 'active' : ''}`}
          onClick={() => onFilterChange(jobFunction.name)}
        >
          {jobFunction.icon} {jobFunction.name}
        </span>
      ))}
    </div>
  );
}

export default FilterPills;
