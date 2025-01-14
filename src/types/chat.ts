export interface Message {
  id: number;
  content: string;
  isAi: boolean;
  timestamp: string;
}

export interface Persona {
  id: number;
  title: string;
  description: string;
  fallback: string;
}