import {Component, OnDestroy, OnInit} from '@angular/core';
import {TesttService} from '../../testt.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnDestroy {
  intervalId: number;
  title;
  upaljeno = false;

  constructor(private testtService: TesttService, private router: Router) {
  }

  ngOnInit() {
    this.testtService.gett().subscribe(data => {
      this.title = data;
      if (data === 'Alarm je Upaljen') {
        this.upaljeno = true;
      }
    });
    this.intervalId = setInterval(() => {
      this.checkStatus();
    }, 10000);
  }

  checkStatus() {
    this.testtService.gett().subscribe(data => {
      this.title = data;
      if (data === 'Alarm je Upaljen') {
        this.router.navigateByUrl('/status');
        this.upaljeno = true;
      }
      console.log('benjo');
    });
  }

  ugasi() {
    this.testtService.postt().subscribe(test => {
      console.log(test.stat);
      this.title = test.stat;
      this.upaljeno = false;
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
