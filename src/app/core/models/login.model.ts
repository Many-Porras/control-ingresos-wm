export interface LoginRequest {
  numeroDocumentoUsuario: string;
  passwordUsuario: string;
  idPerfil?: number;
  idRol?: number;
}

export interface UsuarioLoginResponse {
  idUsuario: number;
  nombreUsuario: string;
  apellidoUsuario: string;
  numeroDocumentoUsuario: string;
  idRol: number;
  nombreRol: string;
  idPerfil: number;
  nombrePerfil: string;
  fechaCreacion: Date;
}
