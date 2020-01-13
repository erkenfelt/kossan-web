import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent {

  @Input()
  jollyIcon: string;

  @Input()
  title: string;

  @Input()
  text: string;

}
