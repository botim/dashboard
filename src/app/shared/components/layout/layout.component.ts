import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { TOKEN_STORAGE_KEY } from 'src/app/core';

interface NavItem {
  title: string;
  url?: string;
  fn?: () => void;
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
    },
    {
      title: 'NAV.LOGOUT',
      fn: () => {
        // TODO: call server to add the token to the blacklist
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        this._router.navigateByUrl('/login');
      }
    }
  ];

  private _breakpointSubscription: Subscription;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _router: Router
  ) {}

  ngOnInit() {
    this._breakpointSubscription = this._breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe(breakpointState => (this.isMobile = breakpointState.matches));
  }

  ngOnDestroy(): void {
    this._breakpointSubscription.unsubscribe();
  }
}
