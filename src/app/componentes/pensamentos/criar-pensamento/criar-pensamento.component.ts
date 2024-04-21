import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: "Aprendendo Angular",
    autoria: "Devos",
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }
  criarPensamento() {
    alert('Pensamento criado com sucesso!');

  }
  pensamentoCancelado() {
    alert('Pensamento cancelado, com sucesso!');
  }


}
