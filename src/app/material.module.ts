import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [MatDividerModule, MatIconModule, MatProgressSpinnerModule],
})
export class MaterialModule {}
