import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* MODULO DE MATERIAL */
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule
  ]
})
export class AuthModule { }
