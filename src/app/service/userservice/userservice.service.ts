import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpservice } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class Userservice {

  constructor(private http:httpservice) { }

  register(data:any){
    
       let header={
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
  })
}
return this.http.postservice('https://localhost:44307/api/User/Register', data,false, header )
  }

  login(data:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 return this.http.postservice('https://localhost:44307/api/User/login', data,false, header )
    }

    forgetpassword(data:any){
      let header={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
      return this.http.postservice('https://localhost:44307/api/User/ForgetPassword?emailId=bandarisrikanth8096%40gmail.com',data,false,header)
    }
}
