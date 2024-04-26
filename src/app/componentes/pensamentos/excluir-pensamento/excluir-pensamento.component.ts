import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service:PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe(pensamento => {
      this.pensamento = pensamento
    })
  }
  excluirPensamento(){
    if(this.pensamento.id === null){
      this.service.excluir(this.pensamento.id!).subscribe(() => {
        this.router.navigate(['/listarpensamentos'])
      })
    }
    else {
      alert('Não foi possível excluir o pensamento!')
    }
    }
    cancelar (){
      this.router.navigate(['/listarpensamentos'])
    }
}
