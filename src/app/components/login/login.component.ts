import { Component, inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { User } from '../../types/user.type';
import { SupabaseService } from '../../services/supabase.service';

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
  private readonly supabaseService = inject(SupabaseService);
  isVisible = false;
  screen = SCREENS.SIGN_IN;
  user: User | null = null;

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

  async logout(): Promise<void> {
    const { error } = await this.supabaseService.signOut();
    if (error) {
      console.error('Logout error:', error.message);
    } else {
      this.user = null;
      console.log('User logged out successfully');
    }
  }

  ngOnInit() {
    this.fetchUser();
  }

  async fetchUser() {
    const { data } = await this.supabaseService.getUser();
    this.user = data.user;
  }

  async handleLoginSuccess(): Promise<void> {
    const { data } = await this.supabaseService.getUser();
    this.user = data.user;
    console.log('User logged in:', this.user);
    this.isVisible = false;
  }
}
