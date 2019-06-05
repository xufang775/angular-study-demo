import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {fadeIn} from './fade-in';

@Component({
  selector: 'year-month-select',
  templateUrl: './year-month.component.html',
  styleUrls:['./year-month.component.css'],
  animations:[fadeIn]
})

export class YearMonthComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public range: any;
  @Output() public result = new EventEmitter();
  public isExpand = false;
  public selectYear: any;
  public selectMonth: any;
  public selectYearRange: Array<any> = [];
  public selectMonthRange: Array<any> = [];
  public selected: any;
  constructor(
    private _el: ElementRef
  ) { }

  ngOnInit() {
    this.getCurrentDate();
  }

  // 获取当前的年月
  getCurrentDate(): void {
    const TODAY = new Date();
    this.selectYear = TODAY.getFullYear();
    this.selectMonth = TODAY.getMonth() < 9 ? '0' + (TODAY.getMonth() + 1) : String(TODAY.getMonth() + 1);
    this.selectYearRange.push(
      {
        date: this.selectYear,
        active: true,
        type: 'year'
      }
    );
    this.selectMonthRange.push(
      {
        date: this.selectMonth,
        active: true,
        type: 'month'
      }
    );
    this.selectYearRange = this.getRangeYear(this.selectYear, this.range.before, this.range.after);
    this.selectMonthRange = this.getRangeMonth(this.selectMonth);
    console.log(this.selectYearRange, this.selectMonthRange);
  }

  // 需要生成的日期范围
  getRangeYear(year: number, before: number = 5, after: number = 10): any {
    // console.log(year, before, after);

    let _beforeYear = year;
    let _afterYear = year;

    for (let i = 0; i < before; i++) {
      this.selectYearRange.unshift(
        {
          date: --_beforeYear,
          active: false,
          type: 'year'
        }
      );
    }
    for (let j = 0; j < after; j++) {
      this.selectYearRange.push(
        {
          date: ++_afterYear,
          active: false,
          type: 'year'
        }
      );
    }
    return this.selectYearRange;
  }

  // 月份范围
  getRangeMonth(month): any {
    for (let i = 0; i < 12; i++) {
      const temp = i < 9 ? '0' + (i + 1) : '' + (i + 1);
      if (month !== temp) {
        this.selectMonthRange.push(
          {
            date: temp,
            active: false,
            type: 'month'
          });
      }
    }
    this.selectMonthRange.sort(this.compare('date'));
    return this.selectMonthRange;
  }

  // 数组对象排序
  compare(property) {
    return function (a, b) {
      const value1 = a[property];
      const value2 = b[property];
      return value1 - value2;
    };
  }

  // 年份或者月份选择
  actValue(list: any, index: number) {

    list.forEach((v, i) => {
      if (i === index) {
        v.active = true;
        if (v.type === 'year') {
          console.log(v.date);
          this.selectYear = v.date;
        }
        if (v.type === 'month') {
          console.log(v.date);
          this.selectMonth = v.date;
        }

      } else {
        v.active = false;
      }
    });
    this.emitResult();
  }



  // 获取结果集
  emitResult(e?: any) {
    if (e) { // 双击则关闭弹出
      this.isExpand = false;
    }
    this.selected = this.selectYear + '-' + this.selectMonth;
    this.result.emit(this.selected);

  }


  // 监听全局点击事件
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._el.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isExpand = false;
      this.emitResult();
    }

  }
}
