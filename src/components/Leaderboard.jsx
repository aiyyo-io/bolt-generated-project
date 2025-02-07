import React, { useState } from 'react';
import './Leaderboard.css';
import { FaUserCircle } from 'react-icons/fa';

function Leaderboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const contributors = [
    { id: 1, name: 'Aaliyah Khan', prompts: 52, likes: 480 },
    { id: 2, name: 'Raj Patel', prompts: 45, likes: 420 },
    { id: 3, name: 'Isabella Rossi', prompts: 40, likes: 390 },
    { id: 4, name: 'Kenzo Tanaka', prompts: 38, likes: 375 },
    { id: 5, name: 'Sofia Hernandez', prompts: 35, likes: 350 },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className="leaderboard">
      <div className="leaderboard-header">
        <h2 className="leaderboard-title">Top Contributors</h2>
        <button className="leaderboard-toggle" onClick={toggleCollapse} aria-expanded={!isCollapsed}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      {!isCollapsed && (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Prompts</th>
              <th scope="col">Likes</th>
            </tr>
          </thead>
          <tbody>
            {contributors.map((contributor) => (
              <tr key={contributor.id}>
                <td><FaUserCircle size={20} aria-hidden="true" /></td>
                <td>{contributor.name}</td>
                <td>{contributor.prompts}</td>
                <td>{contributor.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </aside>
  );
}

export default Leaderboard;
