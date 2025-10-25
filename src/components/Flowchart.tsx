
import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

const Flowchart: React.FC = () => {
  const imageUrl = "https://placehold.co/1200x800/1e293b/94a3b8?text=Fluxograma+do+Curso";

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Fluxograma do Curso</h2>
      <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
        Visualize a sequência recomendada de disciplinas e seus pré-requisitos para planejar sua jornada acadêmica.
      </p>
      <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 shadow-lg">
        <img 
          src={imageUrl}
          alt="Fluxograma do Curso de Engenharia de Controle e Automação"
          className="rounded-md w-full h-auto object-contain"
        />
      </div>
       <a
        href={imageUrl}
        download="fluxograma-controle-automacao.png"
        className="mt-8 inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
      >
        <DownloadIcon />
        <span className="ml-2.5">Baixar Fluxograma</span>
      </a>
    </div>
  );
};

export default Flowchart;
