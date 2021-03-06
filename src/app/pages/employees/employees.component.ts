import { Component, Inject, forwardRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent {
  constructor(
    @Inject(forwardRef(() => Meta)) meta: Meta,
    @Inject(forwardRef(() => Title)) title: Title
  ) {
    title.setTitle('PERSONAL | Föräldrakooperativet Kossan');

    meta.addTags([
      { name: 'author', content: 'kossanlund.se'},
      {
        name: 'keywords',
        content: 'förskola, lund, föräldrakooperativ, småskalig, medverka, reggio emilia, sliparelyckan, blandad åldersgrupp, egen kock'},
      {
        name: 'description',
        content:
          'Kossan är en småskalig förskola med max 20 barn som ligger i en egen villa på Sliparelyckan i nordvästa Lund. '
          + 'Vi har hög personaltäthet, blandad åldersgrupp och egen kock.'
      }
    ]);
  }
}
