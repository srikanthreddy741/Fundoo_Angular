import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archivelist:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getallarchive();
  }
  getallarchive(){
    this.note.getNote().subscribe((response:any)=>{
    console.log(response)
    this.archivelist=response.filter((a:any)=>{
  
    })
    console.log(this.archivelist);  
  })
  
  }
}
