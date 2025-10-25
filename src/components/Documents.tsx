
import React from 'react';
import type { DocumentLink } from '../types';
import { DownloadIcon } from './icons/DownloadIcon';

const documentsData: DocumentLink[] = [
  { id: 1, title: 'Projeto Pedagógico do Curso (PPC)', description: 'O documento oficial que norteia todo o curso, com ementas, carga horária e objetivos.', url: '#' },
  { id: 2, title: 'Regulamento de Atividades Complementares', description: 'Normas e procedimentos para a validação de horas de atividades complementares.', url: '#' },
  { id: 3, title: 'Normas para Trabalho de Conclusão de Curso (TCC)', description: 'Diretrizes para a elaboração e apresentação do TCC.', url: '#' },
  { id: 4, title: 'Calendário Acadêmico 2024.2', description: 'Datas importantes, feriados e prazos para o semestre letivo atual.', url: '#' },
  { id: 5, title: 'Formulário de Matrícula', description: 'Modelo de formulário para solicitação de matrícula em disciplinas.', url: '#' },
];

const Documents: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Documentos Importantes</h2>
      <div className="space-y-4">
        {documentsData.map(doc => (
          <div key={doc.id} className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-transform transform hover:scale-[1.02] hover:border-cyan-500/50">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-100">{doc.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{doc.description}</p>
            </div>
            <a 
              href={doc.url} 
              download 
              className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out bg-slate-600 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500"
            >
              <DownloadIcon />
              <span className="ml-2">Baixar</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
