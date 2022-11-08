import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  isshow() {
    this.Show = true;
  }
  close(){
    this.Show=false;
  }

 
}
