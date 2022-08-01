import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css'],
})
export class CPanelComponent {
  // #region Variables
  listItems: { rout: string; class: string; displayName: string }[] = [
    {
      rout: '/cpanel/dashboard',
      class: '',
      displayName: 'Dashboard',
    },
    {
      rout: '/cpanel/users',
      class: 'bi-people-fill',
      displayName: 'Usuarios',
    },
    {
      rout: '/cpanel/libros',
      class: 'bi-book',
      displayName: 'Libros',
    },
    {
      rout: '/cpanel/noticias',
      class: 'bi-newspaper',
      displayName: 'Noticias',
    },
    {
      rout: '/cpanel/sugerencias',
      class: 'bi-journal-richtext',
      displayName: 'Sugerencias',
    },
  ];
  //#endregion

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
