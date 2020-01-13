import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(forwardRef(() => Router)) private readonly router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
      }
    });
  }
}
