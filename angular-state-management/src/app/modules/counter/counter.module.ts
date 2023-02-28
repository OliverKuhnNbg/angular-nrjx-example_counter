import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { CounterButtonsComponent } from 'src/app/components/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from 'src/app/components/counter-output/counter-output.component';
import { customerFeatureKey, reducer } from 'src/app/store/customer.reducer';



@NgModule({
  declarations: [CounterButtonsComponent, CounterOutputComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports: [
    CounterButtonsComponent,
    CounterOutputComponent
  ]
})
export class CounterModule { }
