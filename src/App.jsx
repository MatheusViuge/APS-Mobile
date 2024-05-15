import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/novo">Criar chamado</NavLink></li>
              <li><NavLink to="/chamados">Buscar Chamado</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
