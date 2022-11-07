import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class httpservice {

  constructor(private httpclient:HttpClient) { }

  postservice(url:any,data:any, token:boolean=false, options:any){
   // console.log(data)
   return this.httpclient.post(url,data,token && options)
  
  }

  getservice(url:any, token:boolean=false, options:any){
    return this.httpclient.get(url,token && options)
  }
  
  putService(url:any , updateNote: any, token: boolean = false, options: any) {
    return this.httpclient.put(url, updateNote, token && options)
  }

  }

