import { Component, OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AppService } from './app.service';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <button (click)="getCurrentTime()">get current time</button>
    <p>{{getData}}</p>
    <input [(ngModel)]="Lot" placeholder="please input!" (ngModelChange)="changeLot()">
    <p>{{Lot | exponentialStrength: 10}}</p>
  `,
  directives: [
  ],
  providers: [
    AppService
  ],
  pipes:[
    ExponentialStrengthPipe
  ]
})

export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  constructor(private appService: AppService){}

  title = 'Tour of Heroes';
  getData: string;
  Lot: string;

  ngOnInit(){
    console.log('init');
  }

  ngOnChanges(){
    console.log('change');
  }

  ngDoCheck(){
    console.log('check');
  }

  ngOnDestroy(){
    console.log('destroy');
  }

  ngAfterContentInit(){
    console.log('after content init');
  }

  ngAfterContentChecked(){
    console.log('after content checked');
  }

  ngAfterViewInit(){
    console.log('after view init');
  }

  ngAfterViewChecked(){
    console.log('after view checked');
  }

  getCurrentTime(){
    this.appService.getCurrentTime()
    .then(res => {this.getData = JSON.stringify(res);console.log(res);});
  }

  changeLot(){
    console.log(this.Lot);
  }
}
