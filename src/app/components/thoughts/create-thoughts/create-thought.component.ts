import { Component, OnInit } from '@angular/core';
import Thought from '../../../Thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {}

  createThought() {
    console.log('chamou');
    this.service.create(this.thought).subscribe();
  }

  cancelThought() {}
}
