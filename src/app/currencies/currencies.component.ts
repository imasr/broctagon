import { Component, OnInit } from '@angular/core';
import { ApiTickerService } from '../api-ticker.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: "app-currencies",
  templateUrl: "./currencies.component.html",
  styleUrls: ["./currencies.component.css"]
})
export class CurrenciesComponent implements OnInit {
  limit = 100;
  start = 0;
  currency: any;
  currentyType = 'usd';

  constructor(private apiService: ApiTickerService, private router: Router) {}

  ngOnInit() {
    const data = `?start=${this.start}&limit=${this.limit}`;
    this.apiService.currencies(data).subscribe(res => {
      this.currency = res;
    });
  }

}
