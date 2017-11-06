import { Component, Input } from '@angular/core';

@Component({
  selector: 'stock-info',
  templateUrl: '/stock-info.component.html',
  styleUrls: ['/stock-info.component.css']
})

export class stockInfoComponent{
  @Input() stock;
}
