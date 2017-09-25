import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../@core';
@Component({
  selector: 'rt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.authService.connect(f.value['uid'], f.value['psw']);
      this.router.navigate(['/dashboard']);
    }
  }
}
