import { MarcaPcDTO } from './marcaPcDTO';
import { UsuarioDTO } from './usuarioDTO';

export class EncuestaDTO{
    idEncuesta: number;
    documento: number;
    email: string;
    comentario: string;
    idMarcaPcpk: MarcaPcDTO;
    idUsuarioPK: UsuarioDTO;
}