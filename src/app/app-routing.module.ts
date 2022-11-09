import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { TrashComponent } from './Components/trash/trash.component';




const routes: Routes = [
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'resetpassword',component:ResetpasswordComponent},
{path:'dashboard',component:DashboardComponent,
children:[
  {path:'create',component: CreateNoteComponent},
  {path:'Notes',component:GetallnotesComponent},
  {path:'Archive',component:ArchiveComponent},
  {path:'Trash',component:TrashComponent},

  
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
