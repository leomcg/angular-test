import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonClass: string = '';
  @Input() type: string = 'button';
  @Input() disabled = false;
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    console.log('hello');
    if (!this.disabled && this.type === 'submit') {
      this.submit.emit();
    }
  }
}
