import { Component } from '@angular/core';

import { LoggerService }  from './logger.service';

@Component({
  selector: 'spy-parent',
  template: `
    <div class="parent">
      <h2>Spy Directive</h2>
    
      <input [(ngModel)]="newName" (keyup.enter)="addHero()">
      <button (click)="addHero()">Add Hero</button>
      <button (click)="reset()">Reset Heroes</button>
    
      <p></p>
      <div *ngFor="let hero of heroes" mySpy class="heroes">
        {{hero}}
      </div>
      <h4>-- Spy Lifecycle Hook Log --</h4>
      <div *ngFor="let msg of logger.logs">{{msg}}</div>
    </div>
  `,
  styles: [
    '.parent {background: khaki;}',
    '.heroes {background: LightYellow; padding: 0 8px}'
  ],
  providers:  [LoggerService]
})
export class SpyParentComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- reset --');
    this.heroes = [];
    this.logger.tick();
  }
}
