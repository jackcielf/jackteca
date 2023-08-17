import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrls: ['./card-thought.component.css']
})
export class CardThoughtComponent implements OnInit {
  pensamento = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo3',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
