import {Component, OnInit} from '@angular/core';
import {TesttService} from "../../testt.service";
import {Baza} from "../baza";

@Component({
  selector: 'app-historija',
  templateUrl: './historija.component.html',
  styleUrls: ['./historija.component.css']
})
export class HistorijaComponent implements OnInit {
  public lista: Baza[] = [];

  constructor(private testtService: TesttService) {
  }

  ngOnInit() {
    this.testtService.getFromDatabase().subscribe(data => {
      this.lista = data;
      this.lista.forEach(datas => {
        let x = new Date(datas.vrijeme);
        datas.vrijeme = x.toDateString() + ' ' + x.toTimeString();
      });
    });
  }

}
