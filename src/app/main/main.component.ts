import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  compactSize = 425;

  fold$: Subject<boolean> = new Subject<boolean>();
  compactView$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth < this.compactSize);

  constructor() { }

  ngOnInit(): void { }
}
