import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit,OnDestroy {

  constructor(private auth :  AuthenticationService,
              private formBuilder: FormBuilder) { }

  loginForm: FormGroup;

  ngOnInit(){
    console.log("Auth componenet opened");
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required,Validators.email],
      password: ['',Validators.required],
    });
  }

  onSubmit() {
    this.auth.authenticate(this.loginForm.value.username,this.loginForm.value.password);
  }

  ngOnDestroy() {
    this.auth._authSubscribtion.unsubscribe();
  }

}
