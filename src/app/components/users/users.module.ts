import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { OutletComponent } from 'src/app/shared/component/outlet/outlet.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
    ],
    entryComponents: [

    ],
    declarations: [
        UsersIndexComponent, UsersDetailComponent
    ],
  })

export class UsersModule {}
