import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup = this.fb.group({
    username : ['',[Validators.required, Validators.minLength(4)]],
    password : ['',Validators.required],
    confirmPassword : ['',Validators.required],
    nombre : ['',Validators.required],
    apellido : ['',Validators.required],
    email : ['',Validators.required],
    telefono : ['',Validators.required],
  })
  constructor(
    private fb: FormBuilder,
    private router :Router,
    private authService : AuthService,
    private toastr : ToastrService

  ) { }

  ngOnInit(): void {
  }


  register(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
  }
}
