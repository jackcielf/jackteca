import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrls: ['./card-thought.component.css']
})
export class CardThoughtComponent implements OnInit {
  @Input() pensamento = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo3',
  };

  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';

  }

}
