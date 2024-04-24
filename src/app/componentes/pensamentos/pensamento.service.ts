import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamentos';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

    private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pensamento[]>(this.API);
  }
}
