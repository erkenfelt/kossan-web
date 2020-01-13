import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InterestMessage {
  name: string;
  email: string;
  childName: string;
  birthYear: string;
  whenToStart: string;
  message: string;
}

export interface ResponseMessage {
  status: string,
  from: string,
}

@Injectable()
export class SendMailService {
  private emailUrl = '/assets/php/email.php';

  constructor(
    @Inject(forwardRef(() => HttpClient)) private readonly http: HttpClient,
  ) { }

  sendEmail(message: InterestMessage): Observable<ResponseMessage> {
    console.log('Sending email', message);
    return this.http.post<ResponseMessage>(this.emailUrl, message);
  }
}
