import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from 'src/app/service/userservice/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;


constructor(private formBuilder: FormBuilder,private user : Userservice) { }

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    Emailid: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    })
}
onSubmit() {
  this.submitted = true;

  if (this.loginForm.valid) {
    console.log("valid data",this.loginForm.value);
    console.log("do api call");
    //do api call
    let fundo={
      email:this.loginForm.value.Emailid,
      password:this.loginForm.value.Password
    }
    this.user.register(fundo).subscribe((result:any)=>{
      console.log(fundo);
    })
  }else{
    console.log("invalid data",this.loginForm.value);
    console.log("no api call");

}
}

// onReset() {
//   this.submitted = false;
//   this.loginForm.reset();
// }
}
