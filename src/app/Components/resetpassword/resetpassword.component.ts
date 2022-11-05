import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted = false;


constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
  this.resetpasswordForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    })
}
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.resetpasswordForm.invalid) {
      return;
  }
}

onReset() {
  this.submitted = false;
  this.resetpasswordForm.reset();
}
}

