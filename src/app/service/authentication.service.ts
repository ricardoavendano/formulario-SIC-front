import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user/user.model';
import { Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Marca } from '../encuesta/marca';
import { MarcaPcDTO } from '../lista-encuesta/marcaPcDTO';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {

    apiURL = 'http://localhost:8081/encuesta';
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }  

    authenticate(user): Observable<User> {
        return this.http.post<User>(this.apiURL + '/login', JSON.stringify(user), this.httpOptions)
        .pipe(
          retry(0)
        )
        
      }

      createUser(user): Observable<User> {
        return this.http.post<User>(this.apiURL + '/login/create', JSON.stringify(user), this.httpOptions)
        .pipe(
          retry(0)
        )
        
      }

      getMarcasPc(): Observable<Marca> {
        return this.http.get<Marca>(this.apiURL + '/listar/encuesta/marcas')
        .pipe(
          retry(0)
        )
      }

      agregarEncuesta(encuesta): Observable<String> {
        return this.http.post<String>(this.apiURL + '/agregar/encuesta', JSON.stringify(encuesta), this.httpOptions)
        .pipe(
          retry(0)
        )
        
      }

      getEncuestasUsuario(): Observable<MarcaPcDTO> {
        return this.http.get<MarcaPcDTO>(this.apiURL + '/listar/encuesta/usuario/'+sessionStorage.getItem('idUsuario'))
        .pipe(
          retry(0)
        )
      }

      eliminarEncuesta(idEncuesta): Observable<String> {
        return this.http.get<String>(this.apiURL + '/listar/encuesta/eliminar/' + idEncuesta)
        .pipe(
          retry(0)
        )
        
      }
      
      handleError(error) {
        let errorMessage = '';
          if(error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
          } else {            
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
     }
  
    sessionStorageValue(idUsuario:string) {
      sessionStorage.setItem("idUsuario", idUsuario);
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('idUsuario')
      console.log(!(user === null))
      return !(user === null)
    }
  
    logOut() {
      sessionStorage.removeItem('idUsuario')
    }
}