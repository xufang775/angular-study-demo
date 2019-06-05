import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {YearMonthComponent} from './year-month.component';

@NgModule({
  imports: [
    CommonModule, // 用用到一些内置的指令必须依赖这个，比如*ngIF, *ngFor
    FormsModule // 有用到表单元素必须引入这货
  ],
  declarations: [YearMonthComponent], // 声明年月组件
  exports: [YearMonthComponent] // 导出年月组件
})
export class OnlyYearMonthSelectModule { }
