import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-gestao',
  templateUrl: './painel-gestao.component.html',
  styleUrls: ['./painel-gestao.component.css']
})
export class PainelGestaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  acoes: string[] = [
    'Ações',
    'Ação 1',
    'Ação 2',
    'Ação 3',
  ]

}
