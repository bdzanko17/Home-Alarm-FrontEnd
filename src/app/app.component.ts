import {Component, DoCheck, Input, KeyValueDiffer, KeyValueDiffers, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TesttService} from '../testt.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'benjo';
  subscription: Subscription;
  intervalId: number;

  constructor(private testtService: TesttService, private router: Router, private location: Location) {

  }


  ngOnInit(): void {
    this.testtService.gett().subscribe(data => {
      this.title = data;
    });
    this.intervalId = setInterval(() => {
      this.test();
    }, 5000);

  }

  test() {
    this.testtService.gett().subscribe(data => {
      this.title = data;
    });
    location.reload();
  }

  isHomeRoute(){
    return this.router.url==='/';
  }

}
