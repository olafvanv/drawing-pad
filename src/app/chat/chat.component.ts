import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: any[] = [];
  connection;
  message;


  constructor(private chatService: ChatService) { }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe(data =>{
      this.messages.push(data);
    })
  }

}
