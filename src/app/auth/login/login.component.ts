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
    username : ['',Validators.required],
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
    console.log(this.loginForm.value)
  /* const {remember , ...data} = this.loginForm.value */
 /*  this.authService.loginUsuario(data)
            .subscribe(
              {
                next :resp => {
                  if(remember){
                    localStorage.setItem('email',this.loginForm.get('email')?.value)
                  }else{
                    localStorage.removeItem('email')
                  }
                  this.router.navigateByUrl('/')

                },
                error : (err :HttpErrorResponse) => {

                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.error.msg

                  })
                }
              }
            ) */
}

}
