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
  listIconsSM: { icon: string; link: string }[] = [
    { icon: 'facebook-f', link: 'https://www.facebook.com' },
    { icon: 'twitter', link: 'https://twitter.com' },
    { icon: 'instagram', link: 'https://www.instagram.com' },
    {
      icon: 'github',
      link: 'https://github.com/DAWA-7/SOF-S-MA-7-1--G1--2P-Project--Front-End',
    },
  ];
  // public isLoged: boolean;
  //#endregion

  constructor(private router: ActivatedRoute) {
    // this.isLoged = false;
  }

  ngOnInit(): void {
    // this.isLoged = this.router.snapshot.params['logged'];
    // console.log(this.isLoged);
  }
}
