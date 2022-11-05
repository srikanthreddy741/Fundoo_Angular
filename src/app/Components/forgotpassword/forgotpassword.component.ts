import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from 'src/app/service/userservice/userservice.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;


constructor(private formBuilder: FormBuilder, private user:Userservice) { }

ngOnInit() {
  this.forgotpasswordForm = this.formBuilder.group({
    Emailid: ['', [Validators.required, Validators.email]],
    })
}
onSubmit() {
  this.submitted = true;

 if (this.forgotpasswordForm.valid) {
      console.log("valid data",this.forgotpasswordForm.value);
      console.log("do api call");
      let fundo={
        Email:this.forgotpasswordForm.value.Email
      }
      this.user.forgetpassword(fundo).subscribe((result:any)=>{
        console.log(result);
      })
    }
    else{
      console.log("No api call")
    }
  }
}

// onReset() {
//   this.submitted = false;
//   this.forgotpasswordForm.reset();
// }

