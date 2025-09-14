import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddDbDataService {
  constructor(private http: HttpClient) {}

  updateData(api: string) {
    const apiUrl = `http://localhost:3000/update/${api}`;
    return this.http.get(apiUrl);
  }
}
