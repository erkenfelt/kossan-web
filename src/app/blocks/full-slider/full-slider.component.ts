import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-full-slider',
  templateUrl: './full-slider.component.html',
  styleUrls: ['./full-slider.component.less'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(
          '725ms ease-in-out',
          style({
            opacity: 1
          })
        ),
        animate(
          '10s ease-out',
          style({
            transform: 'scale(1.1)'
          })
        )
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate(
          '725ms ease-in-out',
          style({
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class FullSliderComponent implements OnInit {
  firstSlide = true;
  secondSlide = false;
  thirdSlide = false;

  ngOnInit() {
    setInterval(() => {
      const first = this.firstSlide;
      const second = this.secondSlide;
      const third = this.thirdSlide;
      this.firstSlide = third;
      this.secondSlide = first;
      this.thirdSlide = second;
    }, 10000);
  }
}
