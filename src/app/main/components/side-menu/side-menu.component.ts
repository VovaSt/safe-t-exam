import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem, MenuMap } from './menu.model';
import { filter, map, skip, startWith } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, AfterViewInit {

  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();

  activeRoute$: Observable<string>;
  foldedSize = 1024;
  compactSize = 425;

  private folded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth < this.foldedSize);
  folded$ = this.folded.asObservable();

  private compact: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth < this.compactSize);
  compact$ = this.compact.asObservable();

  @Input() fold$: Observable<boolean>;

  @Output() compactView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('tree') tree;

  constructor(private router: Router) {
    this.dataSource.data = MenuMap;
    this.treeControl.dataNodes = MenuMap;
  }

  ngOnInit() {
    this.activeRoute$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).url),
      startWith(`/${window.location.href.split('/').slice(-1)[0]}`));

    this.fold$.subscribe(value => {
      if (!value) {
        this.folded.next(false);
        this.compact.next(false);
      } else {
        if (window.innerWidth < this.compactSize) {
          this.compact.next(true)
        } else if (window.innerWidth < this.foldedSize) {
          this.folded.next(true);
        }
      }
    });

    this.compact$.pipe(skip(1)).subscribe(value => this.compactView.emit(value));
  }

  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;

  redirect(url) {
    this.router.navigate([url]);
  }

  toogleNode(node) {
    this.treeControl.toggle(node);
  }

  toggleFold(fold: boolean) {
    if (this.compact.value) {
      this.compact.next(fold);
    } else {
      this.folded.next(fold);
    }
  }

  onResize(event) {
    this.folded.next(event.target.innerWidth < this.foldedSize);
    this.compact.next(event.target.innerWidth < this.compactSize);
  }
}
