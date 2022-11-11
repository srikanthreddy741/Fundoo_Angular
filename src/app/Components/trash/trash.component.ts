import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList: any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }

  TrashList() {
    console.log('Get trash list successful');
    this.note.getNote().subscribe((response: any) => {
      console.log(response);
      this.trashList = response.data;
      this.trashList.reverse();
      this.trashList = this.trashList.filter((object: any) => {
        return object.trash == true;
      })
      console.log("trash list", this.trashList);
    })
  }
}
