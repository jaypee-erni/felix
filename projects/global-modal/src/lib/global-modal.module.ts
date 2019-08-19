import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { PortalModule } from '@angular/cdk/portal';
import { GlobalModalComponent } from './global-modal.component';


@NgModule({
  declarations: [GlobalModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    PortalModule,
  ],
  exports: [GlobalModalComponent],
  entryComponents: [GlobalModalComponent],
})
export class GlobalModalModule { }
