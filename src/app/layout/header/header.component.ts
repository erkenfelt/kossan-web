import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Inject, forwardRef } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('225ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => void', [
        animate('225ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  menuOpened = false;

  constructor(
    @Inject(forwardRef(() => ChangeDetectorRef)) private readonly cd: ChangeDetectorRef,
    @Inject(forwardRef(() => Router)) private readonly route: Router,
  ) { }

  ngOnInit() {
    this.route.events.subscribe(url => {
      this.menuOpened = false;
    });
  }

  onMenuClicked() {
    this.menuOpened = !this.menuOpened;
    this.cd.markForCheck();
  }

}
