import { Component, ViewChild } from '@angular/core';
import { SupportChatComponent } from '../support-chat/support-chat.component';

@Component({
  selector: 'app-side-menu-prof',
  templateUrl: './side-menu-prof.component.html',
  styleUrl: './side-menu-prof.component.scss'
})
export class SideMenuProfComponent {
  @ViewChild(SupportChatComponent) chatComponent!: SupportChatComponent;

  toggleChat() {
    this.chatComponent.toggleChat();
  }
}