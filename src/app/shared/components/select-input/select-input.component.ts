import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';

export interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectInputComponent),
    multi: true
  }]
})
export class SelectInputComponent implements ControlValueAccessor {
  @Input() id          = '';
  @Input() label       = '';
  @Input() options: Option[] = [];
  @Input() placeholder = 'Sélectionner…';
  @Input() disabled    = false;

  value: string | null = null;
  private onChange: (v: any) => void = () => {};
  private onTouched: () => void      = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
