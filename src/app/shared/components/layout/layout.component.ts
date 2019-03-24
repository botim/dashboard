import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

interface NavItem {
  title: string;
  url: string;
}

@Component({
  selector: 'btm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public isMobile: boolean;
  public navItems: NavItem[] = [
    {
      title: 'NAV.REPORTS',
      url: '/reports'
    }
  ];

  private _breakpointSubscription: Subscription;

  constructor(private _breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this._breakpointSubscription = this._breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe(breakpointState => (this.isMobile = breakpointState.matches));
  }

  ngOnDestroy(): void {
    this._breakpointSubscription.unsubscribe();
  }
}
