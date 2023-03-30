import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'package-ts-test-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent {}
