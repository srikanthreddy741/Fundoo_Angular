import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList: any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }
getArchiveNotes(){
  this.note.getNote().subscribe((response:any)=>{
   this.archiveList=response.data;
   console.log(this.archiveList);
   this.archiveList.reverse();
   this.archiveList=this.archiveList.filter((object:any)=>{
    return object.archive==true;
   })
   console.log("Archive notes "+this.archiveList);
  })
}
}
