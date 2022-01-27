import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { matchValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.scss']
})
export class FormsComponentComponent implements OnInit {

  purchaseForm!: FormGroup;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
