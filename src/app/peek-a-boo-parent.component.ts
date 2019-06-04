import {Component, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'peek-a-boo-parent',
  template:`
    <div class="parent">
      <h2>Peek-A-Boo</h2>
      
      <button (click)="toggleChild()">
        {{hasChild ? '销毁' : '创建'}} PeekABooComponent
      </button>
      <button (click)="updateHero()" [hidden]="!hasChild" >修改英雄</button>
      
      <peek-a-boo *ngIf="hasChild" [name]="heroName"></peek-a-boo>
      
      <h4>-- 生命周期 Hook Log --</h4>
      <div *ngFor="let msg of hookLog">{{msg}}</div>
    </div>
  `,
  styles:[`.parent {background: moccasin}`],
  providers: [LoggerService]
})

export class PeekABooParentComponent {

  hasChild = false;
  hookLog:string[];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger:LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild(){
    this.hasChild = !this.hasChild;
    if(this.hasChild){
      this.heroName = 'Windstorm';
      this.logger.clear();    // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero(){
    this.heroName += '!';
    this.logger.tick();
  }

}
