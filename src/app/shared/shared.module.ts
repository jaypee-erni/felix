import { NgModule } from '@angular/core';
import { MaterialModule } from '../core/material/material.module';
import { ModalsModule } from './modals/modals.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


/** Components */
import { OutletComponent } from './component/outlet/outlet.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

/** Services */
import { UsersService } from './services/users/users.service';
import { ApiService } from '../core/http/api.service';
import { BasicTableComponent } from './component/basic-table/basic-table.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { TitleTextComponent } from './component/title-text/title-text.component';
import { IconMessageComponent } from './component/icon-message/icon-message.component';
import { ProductBlockComponent } from './component/product-block/product-block.component';

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
        BasicTableComponent,
        TitleTextComponent,
        IconMessageComponent,
        QuizComponent,
        ProductBlockComponent,
    ],
    providers: [UsersService, ApiService],
    declarations: [OutletComponent, SidebarComponent, BasicTableComponent,
        ToolbarComponent, TitleTextComponent, IconMessageComponent, QuizComponent,
        ProductBlockComponent],
    entryComponents: [],
    bootstrap: []
  })
  export class SharedModule {}