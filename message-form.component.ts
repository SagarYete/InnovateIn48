import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { SmartbotServiceService } from 'src/app/services/smartbot-service.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Input('message')
  private message : Message;
  @Input('messages')
  private messages : Message[];

  constructor(private smartBotService: SmartbotServiceService) {

  }
  ngOnInit() {
  }
  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    let response : string;
    response = this.smartBotService.getResponse(this.message.content);

      this.messages.push(
        new Message(response, 'assets/images/bot.png', new Date())
      );

    this.message = new Message('', 'assets/images/user.png');
  }
}