import { Component, Input, OnInit,Output } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() childMessage:any;
  note:any;
//  @Output()  = new EventEmitter<any>();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '500px',
      
      data: note    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
