import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  // fixPassword = 'xw';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

 isPassInvalid () {
    const ps = this.form.controls.password.value;
    if (ps === '') {
      return false; }

    if (ps === '#001' && ps !== null) {
      return false; } else {
      return true; }
  // return (this.form.controls.password.value !== 'xw');
  }

  isUsernameInvalid () {
    const ps = this.form.controls.userName.value;
    if (ps === '') {
      return false; }

    if (ps === '!DFKI' && ps !== null) {
      return false; } else {
      return true; }
    // return (this.form.controls.password.value !== 'xw');
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
