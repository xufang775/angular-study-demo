import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

class Hero{
  name:string;
  constructor(name:string){
    this.name = name;
  }
}

@Component({
  selector: 'on-changes',
  template: `
    <div class="hero">
    <p>{{hero.name}} can {{power}}</p>
    <h4>-- Change Log --</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
    </div>
  `,
  styles:[`
    .hero {background: LightYellow; padding: 8px; margin-top: 8px}
    p {background: Yellow; padding: 8px; margin-top: 8px}
  `]
})

export class OnChangesComponent implements OnChanges {
  @Input() hero:Hero;
  @Input() power:string;
  changeLog:string[] = [];

  ngOnChanges(changes:SimpleChanges){
    for(let propName in changes){
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`)
    }
  }
  reset(){ this.changeLog = [];}
}

@Component({
  selector:`on-changes-parent`,
  template:`
    <div class="parent">
      <h2>{{title}}</h2>
      <table>
        <tr><td>Power:</td><td><input type="text" [(ngModel)]="power" /></td></tr>
        <tr><td>Hero.name</td><td><input type="text" [(ngModel)]="hero.name" /></td></tr>
      </table>
      <p>
      <button (click)="reset()">清空日志</button>
        <on-changes [hero]="hero" [power]="power"></on-changes>
      </p>
    </div>
  `,
  styles:[`.parent {background: Lavender;}`]
})
export class OnChangesParentComponent{
  hero:Hero;
  power:string;
  title='OnChanges';
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor(){
    this.reset();
  }
  reset(){
    this.hero = new Hero('xufang');

    this.power = '学习';
    if(this.childView){
      this.childView.reset();
    }
  }
}

