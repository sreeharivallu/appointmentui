import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';


/*Services*/
import { HttpServiceService } from './services/http-service.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';
/*Services*/

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    AppointmentsComponent,
    AppointmentConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DlDateTimePickerDateModule,
    NgxSpinnerModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
