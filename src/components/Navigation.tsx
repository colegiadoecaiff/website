
import React from 'react';
import type { Tab } from '../types';
import { CalendarIcon } from './icons/CalendarIcon';
import { FlowchartIcon } from './icons/FlowchartIcon';
import { DocumentIcon } from './icons/DocumentIcon';

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

interface NavButtonProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, icon, isActive, onClick }) => {
  const baseClasses = "flex items-center justify-center w-full sm:w-auto px-4 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  const activeClasses = "bg-cyan-500 text-white shadow-lg scale-105";
  const inactiveClasses = "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span className="ml-2.5">{label}</span>
    </button>
  );
};

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'horarios', label: 'Horários', icon: <CalendarIcon /> },
    { id: 'fluxograma', label: 'Fluxograma', icon: <FlowchartIcon /> },
    { id: 'documentos', label: 'Documentos', icon: <DocumentIcon /> },
  ];

  return (
    <nav className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
      {tabs.map((tab) => (
        <NavButton
          key={tab.id}
          label={tab.label}
          icon={tab.icon}
          isActive={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id as Tab)}
        />
      ))}
    </nav>
  );
};

export default Navigation;
