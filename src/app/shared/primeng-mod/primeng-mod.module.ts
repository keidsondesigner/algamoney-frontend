import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';


@NgModule({
  exports: [
    InputTextModule,
    CalendarModule,
    ButtonModule,
    SelectButtonModule,
    TableModule,
    TooltipModule,
    SidebarModule,
    InputTextareaModule,
    DropdownModule,
  ]
})
export class PrimengModModule { }
