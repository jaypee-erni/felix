import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
// import { OutletComponent } from 'src/app/shared/component/outlet/outlet.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { SharedModule } from '../../shared/shared.module';
import { UsersSaveComponent } from './users-save/users-save.component';
import { UsersPaymentComponent } from './users-payment/users-payment.component';
import { UsersIncreaseComponent } from './users-increase/users-increase.component';
import { FinancialFitnessComponent } from './users-index/financial-fitness/financial-fitness.component';
import { AusgabenComponent } from './users-index/ausgaben/ausgaben.component';
import { SaveTab1Component } from './users-save/save-tab1/save-tab1.component';
import { SaveTab2Component } from './users-save/save-tab2/save-tab2.component';
import { SaveTab3Component } from './users-save/save-tab3/save-tab3.component';
import { PaymetTab1Component } from './users-payment/paymet-tab1/paymet-tab1.component';
import { PaymetTab2Component } from './users-payment/paymet-tab2/paymet-tab2.component';
import { PaymetTab3Component } from './users-payment/paymet-tab3/paymet-tab3.component';
import { IncreaseTab1Component } from './users-increase/increase-tab1/increase-tab1.component';
import { IncreaseTab2Component } from './users-increase/increase-tab2/increase-tab2.component';
import { IncreaseTab3Component } from './users-increase/increase-tab3/increase-tab3.component';
import { IncreaseTab4Component } from './users-increase/increase-tab4/increase-tab4.component';
import { DougnnutFinancialfitnessComponent } from '../../shared/component/charts/dougnnut-financialfitness/dougnnut-financialfitness.component';
//import { TitleTextComponent } from '../../shared/component/title-text/title-text.component';
//import { QuizComponent } from '../../shared/component/quiz/quiz.component';


@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
    ],
    entryComponents: [

    ],
    declarations: [
        UsersIndexComponent,
        UsersDetailComponent,
        UsersSaveComponent,
        UsersPaymentComponent,
        UsersIncreaseComponent,
        FinancialFitnessComponent,
        AusgabenComponent,
        SaveTab1Component,
        SaveTab2Component,
        SaveTab3Component,
        PaymetTab1Component,
        PaymetTab2Component,
        PaymetTab3Component,
        IncreaseTab1Component,
        IncreaseTab2Component,
        IncreaseTab3Component,
        IncreaseTab4Component,
        DougnnutFinancialfitnessComponent,
    ],
  })

export class UsersModule {}
