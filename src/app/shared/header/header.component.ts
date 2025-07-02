import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../../shared/components/back.button/back.button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    BackButtonComponent     
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header { }
