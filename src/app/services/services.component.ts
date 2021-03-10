import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  type: string;
  ip: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'github', type: 'Application', ip: '140.82.121.3' },
  { name: 'sub-network A', type: 'Subnetwork', ip: '10.10.10.1-10.10.10.250' },
];
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'ip'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
