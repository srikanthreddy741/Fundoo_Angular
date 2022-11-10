import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  title: any
  description: any

  constructor(public note: NoteService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


    ngOnInit(): void {
      console.log(this.data);
      this.title = this.data.title;
      this.description = this.data.description;
      
    }
  onNoClick(): void {
    console.log(this.title,this.description);
    let data ={ 
      title:this.title,
      description:this.description,
      
    }
    
    this.dialogRef.close();
  }
}
