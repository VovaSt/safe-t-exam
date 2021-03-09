import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { MenuItem, MenuMap } from './menu.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();

  constructor(private router: Router) {
    this.dataSource.data = MenuMap;
    this.treeControl.dataNodes = MenuMap;
  }

  ngOnInit() { }

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;

  toogle(node) {
    this.treeControl.toggle(node);
    console.log(this.treeControl, node);
  }

  redirect(url) {
    console.log(url);
    this.router.navigate([url]);
  }

}
