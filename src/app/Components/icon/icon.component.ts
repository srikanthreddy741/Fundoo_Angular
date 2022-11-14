import { Component, OnInit,Input } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() notecard: any;
  noteId: any;
  isArchive =false; 
  Trash: boolean = false;
  colorId:any;
  
  
  colorsArr =[{Colorcode:"pink"},{Colorcode:"yellow"},{Colorcode:"orange"},{Colorcode:"rgb(255,99,71)"},{Colorcode:"rgb(152,251,152)"},{Colorcode:"Teal"},{Colorcode:"rgb(106,90,205)"},{Colorcode:"rgb(240,230,140)"},{Colorcode:"rgb(238,130,238)"},{Colorcode:"rgb(255,160,122)"}];

  constructor(private note:NoteService) { }

  ngOnInit(): void {
  
  }
  
  onArchive(){
    let data ={ 
      noteId:this.notecard.noteId,
      
    }
    console.log(data);
    this.note.archivenote(this.notecard.noteId).subscribe((Response: any) => {
      console.log("Note Archived Successfull",Response);
    
    })
  }
  trash() {
   
    this.note.trashNote(this.notecard.noteId).subscribe((response: any) => {
      console.log("Note Trash successfull",response);
      
    })
  }

  getNoteColor(color :any){
      this.colorId=this.notecard.color=color;

    this.note.getColorNote(this.notecard.noteId).subscribe((response:any)=>{
      console.log("color note Sucessfull",response);
      
    })
  }
  

  }

