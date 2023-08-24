import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Thought from 'src/app/Thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API); // Pega toda a lista de pensamentos da API
  }

  create(thought: Thought): Observable<Thought> {
    // Precisa passar a url e o pensamento
    return this.http.post<Thought>(this.API, thought);
  }
}
