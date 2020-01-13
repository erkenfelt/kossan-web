import { Component, Inject, forwardRef } from '@angular/core';
import { InterestMessage, SendMailService } from './send-mail.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.less'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('325ms ease-in-out',
          style({
            opacity: 1,
          }))
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('325ms ease-in-out',
          style({
            opacity: 0,
          }))
      ]),
    ])
  ]
})
export class InterestComponent {

  nameError = false;
  emailError = false;
  sendingEmail = false;
  emailSent = false;
  emailFailed = false;

  message: InterestMessage = {
    name: '',
    email: '',
    childName: '',
    birthYear: '',
    whenToStart: '',
    message: '',
  };

  constructor(
    @Inject(forwardRef(() => SendMailService)) private readonly sendMailService: SendMailService,
    @Inject(forwardRef(() => Meta)) meta: Meta,
    @Inject(forwardRef(() => Title)) title: Title
  ) {
    title.setTitle('INTRESSEANMÄLAN | Föräldrakooperativet Kossan');

    meta.addTags([
      { name: 'author', content: 'kossanlund.se'},
      {
        name: 'keywords',
        // tslint:disable-next-line:max-line-length
        content: 'förskola, lund, lediga platser, ansök, föräldrakooperativ, småskalig, medverka, reggio emilia, sliparelyckan, blandad åldersgrupp, egen kock'
      },
      {
        name: 'description',
        // tslint:disable-next-line:max-line-length
        content: 'Kossan är en småskalig förskola med max 20 barn som ligger i en egen villa på Sliparelyckan i nordvästa Lund. Vi har hög personaltäthet, blandad åldersgrupp och egen kock.'
      }
    ]);
  }

  sendEmail() {
    const message = { ...this.message };
    if (!message.name || !message.email || !this.isEmail(message.email)) {
      this.nameError = !message.name;
      this.emailError = !message.email || !this.isEmail(message.email);
      return;
    }

    this.sendingEmail = true;
    this.emailFailed = false;
    this.nameError = false;
    this.emailError = false;
    message.childName = message.childName ? message.childName : 'Inte angivet';
    message.birthYear = message.birthYear ? message.birthYear : 'Inte angivet';
    message.whenToStart = message.whenToStart ? message.whenToStart : 'Inte angivet';
    message.message = message.message ? message.message : 'Inget meddelande';

    this.sendMailService.sendEmail(message).subscribe(res => {
      if (res.status === 'success') {
        this.sendingEmail = false;
        this.emailSent = true;
        console.log('Success', res);
      } else {
        this.sendingEmail = false;
        this.emailFailed = true;
        this.emailSent = false;
        console.log('Failed', res);
      }
    }, error => {
      this.sendingEmail = false;
      this.emailFailed = true;
      this.emailSent = false;
      console.log('Error', error);
    });
  }

  private isEmail(email): boolean {
    // tslint:disable-next-line:max-line-length
    const emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailRegExp.test(email);
  }
}
