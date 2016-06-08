import { Component }       from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <button (click)="getCurrentTime()">get current time</button>
    <p>{{getData}}</p>
    <input [(ngModel)]="Lot" placeholder="please input!" (ngModelChange)="changeLot()">
    <p>{{Lot}}</p>
  `,
  directives: [
  ],
  providers: [
    AppService
  ],
})

export class AppComponent{
  constructor(private appService: AppService){}

  title = 'Tour of Heroes';
  getData: string;
  Lot: string;

  getCurrentTime(){
    this.appService.getCurrentTime()
    .then(res => {this.getData = JSON.stringify(res);console.log(res);});
  }

  changeLot(){
    console.log(this.Lot);
  }
}
