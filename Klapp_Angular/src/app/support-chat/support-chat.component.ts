import { Component } from '@angular/core';

@Component({
  selector: 'app-support-chat',
  templateUrl: './support-chat.component.html',
  styleUrls: ['./support-chat.component.scss']
})
export class SupportChatComponent {
  isVisible = false;
  messages: string[] = ['Olá! Como posso ajudar você?'];
  newMessage: string = '';

  toggleChat() {
    this.isVisible = !this.isVisible;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}
