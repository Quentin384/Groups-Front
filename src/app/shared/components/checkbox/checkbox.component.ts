import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppCheckboxComponent),
    multi: true
  }]
})
export class AppCheckboxComponent implements ControlValueAccessor {
  @Input() id        = '';
  @Input() label     = '';
  @Input() disabled  = false;

  checked = false;
  private onChange: (v: boolean) => void = () => {};
  private onTouched: () => void         = () => {};

  writeValue(value: any): void {
    this.checked = !!value;
  }

  registerOnChange(fn: (v: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onToggle(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.onChange(this.checked);
  }

  onBlur(): void {
    this.onTouched();
  }
}
