import { Component, Inject, forwardRef } from '@angular/core';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent {
  constructor(
    @Inject(forwardRef(() => Meta)) meta: Meta,
    @Inject(forwardRef(() => Title)) title: Title
  ) {
    title.setTitle('FÖRSKOLA | Föräldrakooperativet Kossan');

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
