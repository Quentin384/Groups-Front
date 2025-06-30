import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppInputComponent),
    multi: true
  }]
})
export class AppInputComponent implements ControlValueAccessor {
  @Input() id          = '';
  @Input() label       = '';
  @Input() type        = 'text';
  @Input() placeholder = '';
  @Input() minlength?  : number;
  @Input() maxlength?  : number;
  @Input() min?        : number;
  @Input() max?        : number;

  value: string = '';

  private onChange: (v: any) => void = () => {};
  private onTouched: () => void      = () => {};

  writeValue(obj: any): void {
    this.value = obj != null ? String(obj) : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    const output = this.type === 'number'
      ? (input.value === '' ? null : +input.value)
      : input.value;
    this.onChange(output);
  }

  onBlur(): void {
    this.onTouched();
  }
}
