import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CoopComponent } from './coop/coop.component';
import { EmployeesComponent } from './employees/employees.component';
import { ContactComponent } from './contact/contact.component';
import { InterestComponent } from './interest/interest.component';
import { BlocksModule } from '../blocks/blocks.module';
import { SendMailService } from './interest/send-mail.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgSKhQ6y-lwCB07UVb0T0Lq4pzXOdGeyc'
    }),

    BlocksModule,
  ],
  declarations: [
    HomeComponent,
    InfoComponent,
    CoopComponent,
    EmployeesComponent,
    ContactComponent,
    InterestComponent,
  ],
  exports: [
    HomeComponent,
    InfoComponent,
  ],
  providers: [
    SendMailService,
  ]
})
export class PagesModule { }
