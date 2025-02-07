import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipesSection from './components/RecipesSection';
import FridayUpdateForm from './components/FridayUpdateForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<RecipesSection />} />
            <Route path="/friday-update" element={<FridayUpdateForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
