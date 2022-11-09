import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpservice } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private http: httpservice) {
    this.token = localStorage.getItem('token')
}
CreateNotes(data: any) {
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token 
    })
  }
  return this.http.postservice("https://localhost:44307/api/Note/CreateNotes", data, true, header)
}
getNote(){

  let header= {
    headers: new HttpHeaders({

      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
    return this.http.getservice("https://localhost:44307/api/Note/GetNote", true,header)

}
}