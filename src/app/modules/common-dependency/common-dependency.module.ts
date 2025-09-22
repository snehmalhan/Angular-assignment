import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/common/header/header.component';
import { LeftPanelComponent } from 'src/app/components/common/left-panel/left-panel.component';
// import { MaterialModule } from './material/material.module';
import { NOTYF, notyfFactory } from 'src/app/utility/notyf.token';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import {
    NgbAccordionModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbModule,
    NgbNavModule,
    NgbProgressbarModule,
    NgbTooltip,
    NgbPagination
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        HeaderComponent,
        LeftPanelComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // MaterialModule,
        RouterModule,
        NgbModule,
        NgbNavModule,
        NgbTooltip,
        NgbPagination,
        NgbDatepickerModule,
        NgxSpinnerModule,
        NgbAccordionModule,
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        NgxSpinnerModule,
        HeaderComponent,
        LeftPanelComponent,
        NgbDatepickerModule,
        FormsModule,
        // MaterialModule,
    ],
    providers: [{ provide: NOTYF, useFactory: notyfFactory }],
})
export class CommonDependencyModule {}
