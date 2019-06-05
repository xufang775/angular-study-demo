import {AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'input-focus',
  template: `
    <div class="parent">
      <h3>学生名字：</h3>
      <button (click)="add()">添加学生</button>
      <ul>
      <li *ngFor="let item of list;let i=index">
        学生{{i+1}}：<input #name type="text" name="name" [(ngModel)]="item.name"/>    {{item|json}}
      </li>
      </ul>
    </div>
  `,
  styles:[`
    .parent {background: palegreen;padding: 10px;}
    ul>li{list-style: none;}
  `],
  providers:[LoggerService]
})

export class InputFocusComponent implements OnInit,AfterViewInit {
  list:any[];
  @ViewChildren('name') infocus:any;
  constructor(
    public renderer:Renderer2,
    private el:ElementRef,
    private logger:LoggerService
  ) {
  }

  ngOnInit() {
    this.list = [{id:1,name:'xufang'}];
  }
  add(){
    this.list.push({id:this.list.length+1,name:''});
  }

  ngDoCheck(){
    console.log('DoCheck');
  }

  ngAfterContentInit() { console.log(`AfterContentInit`); this.log(); }
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { console.log(`AfterContentChecked`); }

  ngAfterViewInit() {
    console.log(`AfterViewInit`);
    // this.renderer
    // this.log();
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    console.log(`AfterViewChecked`);
    // this.log();
    if(this.infocus.last){
      // this.infocus.last.nativeElement.focus();
    }
  }

  ngOnDestroy() { console.log(`OnDestroy`); }

  log(){
    if(this.infocus){
      console.log(this.infocus);
      console.log(this.infocus.last);
      if(this.infocus.last){
        this.infocus.last.nativeElement.focus();
      }
      // let {last} = this.infocus.last;
      // console.log(last)
      // this.infocus.nativeElement.focus();
      // last.nativeElement.focus();
    }
  }
}
