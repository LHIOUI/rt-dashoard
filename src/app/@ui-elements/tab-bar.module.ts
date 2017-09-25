import {
  Component,
  OnInit,
  Input,
  NgModule,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rt-tabbar',
  template: '<div class="tab-container"><ng-content></ng-content></div>',
})
export class TabBar implements OnInit {
  public items: TabBarItem[] = [];
  constructor() {}

  ngOnInit() {}
  deselectOthers(selectedItem: TabBarItem) {
    console.log(this.items.length);
    this.items.forEach(item => {
      if (item !== selectedItem) {
        item.deselect();
      }
    });
  }
  addItem(item: TabBarItem) {
    if (this.items.indexOf(item) === -1) {
      this.items.push(item);
    }
  }
}

@Component({
  selector: 'rt-tabbar-item',
  template: `<a class="tab-element" [ngClass]="{'active':isActive}" (click)="onClick($event)">{{text}}</a>`,
})
export class TabBarItem implements OnInit {
  @Input() isActive = false;
  @Input() text = '';
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor(private tabBar: TabBar) {
    this.tabBar.addItem(this);
  }
  onClick(event) {
    this.isActive = true;
    this.tabBar.deselectOthers(this);
    this.onSelect.emit();
    event.preventDefault();
  }
  select() {
    this.isActive = true;
  }
  deselect() {
    this.isActive = false;
  }
  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule],
  exports: [TabBarItem, TabBar],
  declarations: [TabBarItem, TabBar],
})
export class RtTabBarModule {}
