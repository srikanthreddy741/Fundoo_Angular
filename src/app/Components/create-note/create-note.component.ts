import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/service/noteservice/note.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createnoteForm !:FormGroup
  Show = false;
  title: any;
  description: any;
  constructor(private formBuilder:FormBuilder,private note :NoteService) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  isshow() {
    this.Show = true;
  }
  close() {
    this.Show=false;

    console.log(this.createnoteForm.value.title, this.createnoteForm.value.description)
    let data={
      title:this.createnoteForm.value.title,
      description:this.createnoteForm.value.description,
    }
     this.note.CreateNotes(data).subscribe((result: any) => console.log(result))
  }
}


