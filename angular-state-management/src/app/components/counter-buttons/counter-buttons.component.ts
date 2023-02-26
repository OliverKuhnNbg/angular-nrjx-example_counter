import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {

  onIncrement() {
    console.log('test btn press')
  }
  onDecrement() {
    console.log('test btn press')
  }
  onReset() {
    console.log('test btn press')
  }
}
