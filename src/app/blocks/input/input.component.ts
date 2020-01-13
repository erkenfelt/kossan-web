import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {

  @Output()
  readonly valueChange = new EventEmitter<string>();

  @Input()
  get value(): string { return this.internalValue; }
  set value(value: string) {
    if (this.internalValue !== value) {
      this.internalValue = value;
      this.valueChange.emit(value);
    }
  }

  @Input()
  name: string = '';

  @Input()
  label: string = '';

  @Input()
  error: boolean = false;

  private internalValue: string = '';

}

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-input',
//   templateUrl: './input.component.html',
//   styleUrls: ['./input.component.less']
// })
// export class InputComponent {

//   @Input()
//   value: string;
//   // get value(): string { return this.internalValue; }
//   // set value(value: string) {
//   //   console.log('input value', value);
//   //   this.internalValue = value;
//   // }

//   @Input()
//   label: string;

//   @Input()
//   name: string;

//   @Input()
//   error: boolean;

// }
