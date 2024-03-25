import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getKolcsonzok(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Kolcsonzok`);
  }

  getKolcsonzokById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Kolcsonzok/${id}`);
  }

  getKolcsonzesek(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Kolcsonzesek`);
  }

  createKolcsonzes(kolcsonzes: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Kolcsonzesek`, kolcsonzes);
  }

  updateKolcsonzes(id: number, kolcsonzes: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Kolcsonzesek/${id}`, kolcsonzes);
  }

  deleteKolcsonzes(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Kolcsonzesek/${id}`);
  }
}
