import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { matchValidator } from './validators/custom.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Grand-Theft-Auto-V';

  // 
  // Bar Button
  // 

  active:boolean = false;

  toggleButton() {
    this.active = !this.active;
  };

  //

  constructor(private fb: FormBuilder) { }

  purchaseForm!: FormGroup;
  userForm!: FormGroup;


  ngOnInit(): void {

    // 
    // Form I
    // 

    this.purchaseForm = this.fb.group({
      platform: ['', Validators.required],
      edition: ['', Validators.required],
      market: ['', Validators.required],
      check: ['']
    });

    // 
    // Form II
    // 

      this.userForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(4)]],
        lastName: ['', [Validators.required, Validators.minLength(5)]],
        country: ['', Validators.required],
        yourMessage: ['', [Validators.required, Validators.minLength(10)]]
      }, {validators: matchValidator})
  }

  // 
  // Form Buttons
  // 

  onOrder() {
    alert('Order Sent')
  }

  onSubmit() {
    alert('Message Sent')
  }



}


