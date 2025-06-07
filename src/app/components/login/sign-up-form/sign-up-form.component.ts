import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {
  @Output() onSwitchSignIn: EventEmitter<any> = new EventEmitter();
  @Output() onSignUpSuccessful: EventEmitter<any> = new EventEmitter();
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly supabaseService = inject(SupabaseService);
  validateForm = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    confirmPassword: this.fb.control('', [Validators.required]),
  });


  switchToSignIn(): void {
    this.onSwitchSignIn.emit(true);
  }

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      const { error } = await this.supabaseService.signUpWithEmail({
        name: `${this.validateForm.value.firstName} ${this.validateForm.value.lastName}`,
        email: this.validateForm.value.email as string,
        password: this.validateForm.value.password as string,
      });
      if (error) {
        console.error('Login error:' + error.message);
      } else {
        this.onSignUpSuccessful.emit(true);
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
