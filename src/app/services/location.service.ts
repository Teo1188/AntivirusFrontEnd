import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = 'http://localhost:8080/api/ubicacionRegion';
  constructor(private http: HttpClient, private authService: AuthService) { }

  getLocations(): Observable<any> {
    const token = this.authService.getToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.apiUrl);
  }

}