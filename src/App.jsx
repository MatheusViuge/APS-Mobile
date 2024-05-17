import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { DetalhesChamado } from './components/DetalhesChamado';
import { Chamados } from './components/Chamados';
import { AbrirChamado } from './components/AbrirChamado';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/novo_chamado">Criar chamado</NavLink></li>
              <li><NavLink to="/chamados">Buscar Chamado</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chamados/:id" element={<DetalhesChamado />} />
            <Route path="/chamados" element={<Chamados />}/>
            <Route path="/novo_chamado" element={<AbrirChamado />}/>
            <Route path="*" element={<PaginaNaoEncontrada />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada(){
  return(
    <>
      <h1>404</h1>
      <p>página não encontrada!</p>
    </>
  )
}

export default App;
