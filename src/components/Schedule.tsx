
import React from 'react';
import type { ClassSchedule } from '../types';

const scheduleData: ClassSchedule[] = [
  { id: 1, periodo: 1, subject: 'Cálculo I', day: 'Seg/Qua', time: '08:00-10:00', professor: 'Prof. Silva' },
  { id: 2, periodo: 1, subject: 'Algoritmos e Programação', day: 'Ter/Qui', time: '10:00-12:00', professor: 'Prof. Costa' },
  { id: 3, periodo: 1, subject: 'Introdução à Engenharia', day: 'Sex', time: '08:00-10:00', professor: 'Prof. Souza' },
  { id: 4, periodo: 3, subject: 'Cálculo III', day: 'Seg/Qua', time: '10:00-12:00', professor: 'Prof. Pereira' },
  { id: 5, periodo: 3, subject: 'Circuitos Elétricos I', day: 'Ter/Qui', time: '08:00-10:00', professor: 'Prof. Almeida' },
  { id: 6, periodo: 5, subject: 'Sistemas de Controle I', day: 'Seg/Qua', time: '14:00-16:00', professor: 'Prof. Lima' },
  { id: 7, periodo: 5, subject: 'Eletrônica Digital', day: 'Ter/Qui', time: '16:00-18:00', professor: 'Prof. Rocha' },
  { id: 8, periodo: 7, subject: 'Automação Industrial', day: 'Seg/Qua', time: '10:00-12:00', professor: 'Prof. Barbosa' },
];

const Schedule: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Grade de Horários</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="p-4 text-sm font-semibold text-slate-300 tracking-wider">Período</th>
              <th className="p-4 text-sm font-semibold text-slate-300 tracking-wider">Disciplina</th>
              <th className="p-4 text-sm font-semibold text-slate-300 tracking-wider">Dia</th>
              <th className="p-4 text-sm font-semibold text-slate-300 tracking-wider">Horário</th>
              <th className="p-4 text-sm font-semibold text-slate-300 tracking-wider">Professor(a)</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={item.id} className={`border-b border-slate-700 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}`}>
                <td className="p-4 whitespace-nowrap text-center">
                  <span className="bg-cyan-800 text-cyan-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {item.periodo}º
                  </span>
                </td>
                <td className="p-4 font-medium text-slate-100 whitespace-nowrap">{item.subject}</td>
                <td className="p-4 text-slate-400 whitespace-nowrap">{item.day}</td>
                <td className="p-4 text-slate-400 whitespace-nowrap">{item.time}</td>
                <td className="p-4 text-slate-400 whitespace-nowrap">{item.professor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
