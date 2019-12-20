import {Component, OnInit} from '@angular/core';
import {TesttService} from '../testt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private testtService: TesttService) {
  }
  title = 'benjo';
    ngOnInit(): void {

      this.testtService.gett().subscribe(data => this.title = data);
    }



}
