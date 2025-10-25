
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center border-b-2 border-cyan-500/30 pb-6">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
        Engenharia de Controle e Automação
      </h1>
      <p className="mt-2 text-lg text-slate-400">
        Portal de Informações do Curso
      </p>
    </header>
  );
};

export default Header;
