import { Component, ViewChild } from '@angular/core';
import { SupportChatComponent } from '../support-chat/support-chat.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @ViewChild(SupportChatComponent) chatComponent!: SupportChatComponent;

  toggleChat() {
    this.chatComponent.toggleChat();
  }
}

// BIGEUS: modifiquei pra aparecer o chat
