import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8080/api/categoriaOportunidad';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCategories(): Observable<any> {
    const token = this.authService.getToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.apiUrl);
  }
}

