import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {

  private apiUrl = 'http://localhost:8080/api/instituciones';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getInstituciones(): Observable<any> {
    const token = this.authService.getToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.apiUrl);
  }

}
