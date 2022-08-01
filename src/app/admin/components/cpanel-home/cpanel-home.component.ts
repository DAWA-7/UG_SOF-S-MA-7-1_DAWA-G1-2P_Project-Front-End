import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-cpanel-home',
  templateUrl: './cpanel-home.component.html',
  styleUrls: ['./cpanel-home.component.css']
})
export class CPanelHomeComponent  {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Ventas totales', cols: 1, rows: 1 },
          { title: 'Ventas Anuales', cols: 1, rows: 1 },
          { title: 'Mensuales', cols: 1, rows: 1 },
          { title: 'Diarias', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Ventas totales', cols: 1, rows: 1 },
        { title: 'Ventas Anuales', cols: 1, rows: 1 },
        { title: 'Mensuales', cols: 1, rows: 1 },
        { title: 'Diarias', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
