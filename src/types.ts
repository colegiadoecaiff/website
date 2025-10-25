
export type Tab = 'horarios' | 'fluxograma' | 'documentos';

export interface ClassSchedule {
  id: number;
  subject: string;
  day: string;
  time: string;
  professor: string;
  periodo: number;
}

export interface DocumentLink {
  id: number;
  title: string;
  description: string;
  url: string;
}
