import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTableComponent } from './components/table/ng-table.component';
import { NgTableFilteringDirective } from './components/table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './components/table/ng-table-paging.directive';
import { NgTableSortingDirective } from './components/table/ng-table-sorting.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective],
  exports: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective]
})
export class Ng2TableModule {
}
export * from './components/table/ng-table.component';