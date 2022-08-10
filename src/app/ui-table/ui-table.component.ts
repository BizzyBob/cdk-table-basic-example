import { DataSource } from '@angular/cdk/table';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.css']
})
export class UiTableComponent {
  @Input() dataSource: DataSource<any>;
  @Input() displayedColumns: string[];
  @Input() columnDefs: Array<{name: string, key: string}>;
}
