import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const SCREENS = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up'
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzButtonModule, NzModalModule, LoginFormComponent, CommonModule, SignUpFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isVisible = false;
  screen = SCREENS.SIGN_IN;

  showModal(): void {
    this.isVisible = true;
  }

  showSignUp(): void {
    this.screen = SCREENS.SIGN_UP;
    console.log('Switching to Sign Up screen');
  }

  showSignIn(): void {
    this.screen = SCREENS.SIGN_IN;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
