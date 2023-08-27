import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup = this.fb.group({
    username : [localStorage.getItem('username') || '',[Validators.required, Validators.minLength(4)]],
    password : ['',Validators.required],
    remember : ['']
  })
  constructor(
    private fb: FormBuilder,
    private router :Router,
    private authService : AuthService,
    private toastr : ToastrService

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
                    this.toastr.success("Credenciales correcta","Redirigiendo a la pantalla principal");
                    localStorage.setItem('token',this.loginForm.get('token')?.value)
                  }else{
                    localStorage.removeItem('token')
                  }
                  this.router.navigateByUrl('/')

                },
                error : (errrorr :HttpErrorResponse) => {
                    this.toastr.error("Credenciales incorrectas", "El username y/o password son incorrectos");
                    console.log(errrorr);

                }
              }
            )
}

}
