import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingFormComponent } from './booking-form/booking-form.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';

const routes: Routes = [
  { path: 'new_appointment', component: BookingFormComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'appointment_confirmed', component: AppointmentConfirmationComponent},
  { path: '**', component: BookingFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
