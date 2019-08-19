import { NgModule } from '@angular/core';
import { MaterialModule } from '../core/material/material.module';
import { ModalsModule } from './modals/modals.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


/** Components */
import { OutletComponent } from './component/outlet/outlet.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';

/** Services */
import { UsersService } from './services/users/users.service';
import { ApiService } from '../core/http/api.service';

@NgModule({
    imports: [
        CommonModule,
        ModalsModule,
        RouterModule,
        MaterialModule,
        FormsModule, ReactiveFormsModule,
    ],
    exports: [
        MaterialModule,
        FormsModule, ReactiveFormsModule,
    ],
    providers: [UsersService, ApiService],
    declarations: [OutletComponent, SidebarComponent, SnackbarComponent],
    entryComponents: [SnackbarComponent],
    bootstrap: []
  })
  export class SharedModule {}