import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  successMessage = '';
  constructor() { }

  ngOnInit() {
        this.successMessage = MessageService.successMessage;
        alert(this.successMessage)
  }

}
