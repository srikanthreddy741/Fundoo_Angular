import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() notecard: any;
  noteId: any;
  isArchive: boolean = false;
  isTrash: boolean = false;
  colorId: any;


  colorsArr = [{ Colorcode: "#f28b82" }, { Colorcode: "#fbbc04" }, { Colorcode: "#fff475" }, { Colorcode: "#ccff90" }, { Colorcode: "#a7ffeb" }, { Colorcode: "#cbf0f8" }, { Colorcode: "#aecbfa" }, { Colorcode: "#d7aefb" }, { Colorcode: "#fdcfe8" }, { Colorcode: "#e6c9a8" }, { Colorcode: "#e8eaed" }, { Colorcode: "white" }];

  constructor(private note: NoteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let componentNote = this.activatedRoute.snapshot.component;
    if (componentNote == TrashComponent) {
      this.isTrash = true;
    }

    if (componentNote == ArchiveComponent) {
      this.isArchive = true;
    }

  }

  onArchive() {
    let data = {
      noteId: this.notecard.noteId,

    }
    console.log(data);
    this.note.archivenote(this.notecard.noteId).subscribe((Response: any) => {
      console.log("Note Archived Successfull", Response);

    })
  }
  trash() {

    this.note.trashNote(this.notecard.noteId).subscribe((response: any) => {
      console.log("Note Trash successfull", response);

    })
  }

  getNoteColour(colour:any)
  {
    this.noteId = this.notecard.colour = colour;
    let Data = {
      colour: colour,
      noteId:this.notecard.noteId,      
    };
    this.note.getColourNote(Data).subscribe((response: any) => {
      console.log(response);
     
      console.log("colour", Data)
    })
  }
  restore() {
    let data = {
      noteId: this.notecard.noteId,
      trash:false,
    }
  this.note.archivenote(data).subscribe((response: any) => {
    console.log("Note is removed from trash");

    console.log(response);

  })
  }
unarchive(){
  this.note.unArchive(this.notecard.noteId).subscribe((response: any) => {
    console.log("unarchive note sucessfull", response);
})

}
deletenotes() {
 
  this.note.deletenote(this.notecard.noteId).subscribe((response: any) => {
    console.log("Note is deleted");

    console.log(this.notecard = response);

  })
}
}
