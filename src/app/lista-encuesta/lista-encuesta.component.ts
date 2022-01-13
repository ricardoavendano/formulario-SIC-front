import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-encuesta',
  templateUrl: './lista-encuesta.component.html',
  styleUrls: ['./lista-encuesta.component.css']
})
export class ListaEncuestaComponent implements OnInit {

  EncuestaDTO: any = [];
  constructor(private router: Router, public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadEncuestasUsuario();
  }
  
  loadEncuestasUsuario() {
    return this.restApi.getEncuestasUsuario().subscribe((data: {}) => {
      this.EncuestaDTO = data;
    });
  }

  eliminarEncuesta(idEncuesta:number){
    if (window.confirm('Esta seguro de eliminar esta encuesta')){
      this.restApi.eliminarEncuesta(idEncuesta).subscribe(data => {
        //this.loadCompra();
        this.router.navigate(['encuesta']);
      })
    }
  }

}
