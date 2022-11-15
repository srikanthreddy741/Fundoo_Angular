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
updateNote(data:any, noteId:any){
  // console.log(this.token);
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.http.putService('https://localhost:44307/api/Note/UpdateNote?noteId='+noteId,data,true,header);
 }

archivenote(data: any){

   console.log(data,this.token);
  
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
 return this.http.putService('https://localhost:44307/api/Note/Archive?noteId='+data,{}, true,header)
}
trashNote(data: any) {

  console.log(data);

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+ this.token
    })
  }
  return this.http.putService('https://localhost:44307/api/Note/Trash?noteId='+data,null, true, header)
}

getColourNote(data: any){

  let header= {
    headers: new HttpHeaders({

      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
    return this.http.putService("https://localhost:44307/api/Note/NoteColour?noteId=&colour="+data,null,true,header)

}
deletenote(data:any){

  let header= {
    headers: new HttpHeaders({

      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
    return this.http.putService('https://localhost:44307/api/Note/DeleteNote?noteId='+data,{},true,header)
}
unArchive(data:any){

  let header= {
    headers: new HttpHeaders({

      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
  return this.http.putService("https://localhost:44307/api/Note/Archive?noteId="+data,{}, true,header)
}

restoretrash(data: any) {

  console.log(data);

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+ this.token
    })
  }
  return this.http.putService('https://localhost:44307/api/Note/Trash?noteId='+data,{}, true, header)
}
}

