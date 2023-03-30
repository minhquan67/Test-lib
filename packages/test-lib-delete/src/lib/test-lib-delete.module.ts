import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  imports: [CommonModule, MyComponentComponent],
  exports:[MyComponentComponent]
})
export class TestLibDeleteModule {}
