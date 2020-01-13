import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {

  @Input()
  header: string;

  @Input()
  subheader: string = '';

  @Input()
  text: string;

  @Input()
  email: string;

  @Input()
  horizontal: boolean;

  @Input()
  flat: boolean;

}
