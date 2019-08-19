import { NgModule } from '@angular/core';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { OutletComponent } from 'src/app/shared/component/outlet/outlet.component';
import { SuppliersIndexComponent } from './suppliers-index/suppliers-index.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        SuppliersRoutingModule,
        SharedModule,
    ],
    entryComponents: [

    ],
    declarations: [
        SuppliersIndexComponent,
    ],
  })

export class SuppliersModule {}
