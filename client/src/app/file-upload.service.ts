import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = 'http://localhost:5011';
 
  constructor(private http: HttpClient) { }
 
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.apiUrl, formData);
  }
 
  retrieveDataFromDatabase(): Observable<any> {
    const dataEndpoint = 'http://localhost:5011/api/Retrieve/';
    return this.http.get(dataEndpoint);
  }
}