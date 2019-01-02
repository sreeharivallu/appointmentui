import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { Observable, throwError } from 'rxjs';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  appointments: any;
  day:any;
  constructor(private httpService : HttpServiceService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAppointments();
    this.day = new Date();
  }

  getAppointments(ofDate?) {

    var appoinments_date;

    if(ofDate){
      appoinments_date = ofDate;
    }else{
      let date = new Date();
      appoinments_date = date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2);
    }
    this.spinner.show();    
    this.httpService.getData(appoinments_date).subscribe(appointments => {
      this.spinner.hide();
      this.appointments = appointments;
    })
  }

  onDateChange(event){
    console.log('event is', event.target.value);
    this.getAppointments(event.target.value);
  }
}
