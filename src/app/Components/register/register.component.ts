import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from 'src/app/service/userservice/userservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;


  constructor(private formBuilder: FormBuilder,private user : Userservice) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: ['', Validators.required],
      })
  }
  onSubmit() {
    this.submitted = true;

     if (this.registerForm.valid) {
      console.log("valid data",this.registerForm.value);
      console.log("do api call");
      //do api call
      let fundo={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      this.user.register(fundo).subscribe((result:any)=>{
        console.log(result);
      })
    }else{
      console.log("invalid data",this.registerForm.value);
      console.log("no api call");

    
     }
}

// onReset() {
//     this.submitted = false;
//     this.registerForm.reset();
// }

  }