import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  formIsValid = false;

  form = this.fb.group({
    firstName: new FormControl,
    lastName: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    comment: new FormControl
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }
  
  onSubmit() {
    this.formIsValid = this.form.valid;
  }

}
