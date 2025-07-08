import { Component, OnDestroy, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login.component',
  imports: [ NzButtonModule, 
             NzTypographyModule,
             NzFormModule,
             NzInputModule,
             ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnDestroy{

  constructor(
    private httpUser:HttpClient,
    private router:Router
  ){}

  userForm =  new FormGroup({
      correo: new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',[Validators.required,Validators.minLength(4)]),
  })
  
  MenError = signal('')
  loginSubscription?:Subscription

  validarUsuario(){

    const { correo, pass } = this.userForm.value  

    try {

        this.loginSubscription = this.httpUser.post('http://localhost:3010/login',{ correo,
                                                                                    password: pass }) 
                                  .subscribe({
                                     next:data => this.router.navigate(['/dashboard']),
                                     error:err=>{                                    
                                          this.MenError.set(err.error.message)
                                     }
                                  })      

    } catch (error) {
      this.MenError.set('Error al conectarse al servidor')
    } 

  }
  
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }

}
