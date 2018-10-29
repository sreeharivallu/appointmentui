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
    this.booking.appointment_datetime = new Date(this.booking.appointment_datetime).toLocaleString();
    this.spinner.show();
    this.httpService.postData(this.booking).subscribe(bookedData => {
      this.spinner.hide();
      console.log('bookedData is', bookedData);
      this.router.navigate(['/appointment_confirmed']);
      //this.form.reset();
    })
    
  }

}
