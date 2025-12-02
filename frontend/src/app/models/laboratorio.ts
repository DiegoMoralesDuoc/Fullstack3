import { Usuario } from './usuario';

export interface Laboratorio {
  id: number;
  nombre: string;
  region: string;
  comuna: string;
  direccion: string;
  tipoanalisis: string;
  jefe?: Usuario;
}