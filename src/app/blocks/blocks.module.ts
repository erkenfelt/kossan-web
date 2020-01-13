import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullSliderComponent } from './full-slider/full-slider.component';
import { FeatureComponent } from './feature/feature.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CardComponent,
    FeatureComponent,
    FullSliderComponent,
    InputComponent,
  ],
  exports: [
    CardComponent,
    FeatureComponent,
    FullSliderComponent,
    InputComponent,
  ],
})
export class BlocksModule { }
