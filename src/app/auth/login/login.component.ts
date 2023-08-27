import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup = this.fb.group({
    username : [localStorage.getItem('username') || '',Validators.required],
    password : ['',Validators.required],
    remember : ['']
  })
  constructor(
    private fb: FormBuilder,
    private router :Router,
    private authService : AuthService

  ) { }

  ngOnInit(): void {

  }

  campoValido(campo : string){
    if( this.loginForm.get(campo)?.invalid && this.loginForm.touched){
         return true;
    }else{
       return false
    }
 }


 login(){
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
  }

  const {remember , ...data} = this.loginForm.value
  this.authService.loginUsuario(data)
            .subscribe(
              {
                next :resp => {

                  if(remember){
                    console.log('ojito!')
                    localStorage.setItem('username',this.loginForm.get('username')?.value)
                  }else{
                    localStorage.removeItem('username')
                  }
                  this.router.navigateByUrl('/')

                },
                error : (errrorr :HttpErrorResponse) => {

                    console.log(errrorr);

                }
              }
            )
}

}
