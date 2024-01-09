import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../Model/registration.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = 'https://localhost:7193/api/Registrations';

  constructor(private http: HttpClient) {}

  getRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.apiUrl);
  }

  addRegistration(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(this.apiUrl, registration);
  }

  updateRegistration(registration: Registration): Observable<Registration> {
    return this.http.put<Registration>(`${this.apiUrl}/${registration.id}`, registration);
  }

  deleteRegistration(registrationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${registrationId}`);
  }
}
