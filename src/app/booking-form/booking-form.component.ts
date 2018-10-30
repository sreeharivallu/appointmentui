import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  booking: any = {};
  loadingStart:boolean;
  @ViewChild('f') form: any;

  constructor(private httpService : HttpServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private spinner: NgxSpinnerService ) { 
              this.loadingStart = false;
  }

  ngOnInit() {
  }

  onSubmit(){

    console.log('booking form is',this.booking);
    let date = new Date(this.booking.appointment_datetime);
    this.booking.appointment_datetime = date.getFullYear() + '-' +
    ('00' + (date.getMonth()+1)).slice(-2) + '-' +
    ('00' + date.getDate()).slice(-2) + ' ' + 
    ('00' + date.getHours()).slice(-2) + ':' + 
    ('00' + date.getMinutes()).slice(-2) + ':' + 
    ('00' + date.getSeconds()).slice(-2);
    //new Date(this.booking.appointment_datetime).toLocaleString();
    this.spinner.show();
    this.httpService.postData(this.booking).subscribe(bookedData => {
      this.spinner.hide();
      console.log('bookedData is', bookedData);
      this.router.navigate(['/appointment_confirmed']);
      //this.form.reset();
    })
    
  }

}
