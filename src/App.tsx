
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import Flowchart from './components/Flowchart';
import Documents from './components/Documents';
import type { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('horarios');

  const renderContent = () => {
    switch (activeTab) {
      case 'horarios':
        return <Schedule />;
      case 'fluxograma':
        return <Flowchart />;
      case 'documentos':
        return <Documents />;
      default:
        return <Schedule />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <main className="mt-8">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="mt-6 bg-slate-800/50 rounded-xl shadow-2xl p-6 sm:p-8 border border-slate-700 min-h-[60vh]">
            {renderContent()}
          </div>
        </main>
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Desenvolvido para facilitar a vida acadêmica.</p>
          <p>&copy; {new Date().getFullYear()} Alunos de Engenharia de Controle e Automação.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
