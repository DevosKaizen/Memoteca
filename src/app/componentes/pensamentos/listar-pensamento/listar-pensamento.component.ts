import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos = [
    {
      conteudo: 'passo informaçoes para o conponente filho',
      autoria:'Pai',
      modelo:'modelo3',
    },
    {
      conteudo: '"Na vastidão do universo, nossa existência é um breve lampejo de consciência. Em meio ao mistério e à incerteza, buscamos significado. Somos estrelas cadentes na noite cósmica, deixando rastros de questionamentos na eternidade.Na vastidão do universo, nossa existência é um breve lampejo de consciência. Em meio ao mistério e à incerteza, buscamos significado. Somos estrelas cadentes na noite cósmica, deixando rastros de questionamentos na eternidade"',
      autoria:'IA GPT',
      modelo:'modelo3',
    },
    {
      conteudo: 'minha propriedade é decorada com @Input()',
      autoria:'Componente filho',
      modelo:'modelo3',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
