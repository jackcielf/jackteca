import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Thought from 'src/app/Thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thought';

  constructor(private http: HttpClient) {}

  // Lista o array de pensamento
  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API); // Pega toda a lista de pensamentos da API
  }

  // Cria um pensamento
  create(thought: Thought): Observable<Thought> {
    // Precisa passar a url e o pensamento
    return this.http.post<Thought>(this.API, thought);
  }

  // Deleta um pensamento a partir do ID
  delete(id: number): Observable<Thought> {
    const url = '${this.API}/${id}';
    return this.http.delete<Thought>(url);
  }

  // Procura um pensamento pelo ID
  searchId(id: number): Observable<Thought> {
    const url = '${this.API}/${id}';
    return this.http.get<Thought>(url);
  }
}
