
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { Encuesta } from './encuesta';
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  Marcas: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadMarcas();
  }

  loadMarcas() {
    return this.restApi.getMarcasPc().subscribe((data: {}) => {
      this.Marcas = data;
    });
  }

  agregarEncuesta(documento:number, email:string, comentario:string, marcaPc:number) {
    const encuesta = new Encuesta();
    encuesta.documento = documento;
    encuesta.email = email;
    encuesta.comentario = comentario;
    encuesta.marcapc = marcaPc;
    encuesta.idUsuario = sessionStorage.getItem('idUsuario');

    if (window.confirm('Esta seguro de ingresar esta informacion')){
      this.restApi.agregarEncuesta(encuesta).subscribe(data => {
        this.loadMarcas()
      })
    }
  }  
}
