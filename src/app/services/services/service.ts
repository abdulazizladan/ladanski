import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private httpClient: HttpClient) {}

  getServices(): Observable<any[]> {
    return this.httpClient.get<any[]>('/services.json');
  }

  getServiceById(id: string): Observable<any | undefined> {
    return this.getServices().pipe(
      map((services) => services.find(s => s.id === id))
    );
  }
}
