import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'rt-add-rmpm',
  templateUrl: './add-rmpm.component.html',
  styleUrls: ['./add-rmpm.component.css'],
})
export class AddRmpmComponent implements OnInit {
  codes = [{ id: 0 }];
  constructor(private router: Router) {}
  addCode(event) {
    this.codes.push({ id: this.codes.length });
    event.preventDefault();
  }
  remove(code) {
    if (this.codes.length > 1) {
      this.codes.splice(this.codes.indexOf(code), 1);
    }
  }
  onSubmit(f: NgForm) {
    console.log(f);
    if (f.valid) {
      this.router.navigate(['/dashboard']);
    }
  }
  ngOnInit() {}
}
