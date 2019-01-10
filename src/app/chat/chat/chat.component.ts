import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../message-model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages$: Observable<Array<Message>>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messages$ = this.chatService.getMessages();
  }

  addMessage(form: NgForm) {
    console.log(form);
    const message: Message = ({
      id: this.chatService.createId(),
      body: form.value.body,
      user: form.value.user
    });
    this.chatService.addMessage(message);
  }

}
