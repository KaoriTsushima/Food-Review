import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() onLoginSuccessful: EventEmitter<any> = new EventEmitter();
  @Output() onSwitchSignUp: EventEmitter<any> = new EventEmitter();
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly supabaseService = inject(SupabaseService);
  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required])
  });

  switchToSignUp(): void {
    this.onSwitchSignUp.emit(true);
  }

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      const { error } = await this.supabaseService.signInWithEmail({
        email: this.validateForm.value.email as string,
        password: this.validateForm.value.password as string,
      });
      if (error) {
        console.error('Login error:' + error.message);
      } else {
        this.onLoginSuccessful.emit(true);
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
