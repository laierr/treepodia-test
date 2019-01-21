import { Component, OnInit } from '@angular/core';
import { Message } from '../Message';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let msg = new Message('aa','bb', 'cc','dd','ee');
    console.log(msg);
  }

}
