import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  //#region Variables
  listSection: string[] = [
    'Nosotros',
    'Términos',
    'Condiciones',
    'Aviso legal',
  ];
  public isLoged: boolean;
  //#endregion

  constructor(private router: ActivatedRoute) {
    this.isLoged = false;
  }

  ngOnInit(): void {
    this.isLoged = this.router.snapshot.params['logged'];
    console.log(this.isLoged);
  }
}
