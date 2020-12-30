import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'players';
  items: MenuItem[];

  constructor(private _primeNGConfig: PrimeNGConfig) {

  }

  ngOnInit() {
    this._primeNGConfig.ripple = true;

    this.items = [
      {
        label: 'Sports',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'NBA',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'LA Lakers',
                icon: 'pi pi-fw pi-plus'
              },
              {
                label: 'LA Clippers',
                icon: 'pi pi-fw pi-plus'
              },
              {
                label: 'Toronto',
                icon: 'pi pi-fw pi-plus'
              },
              {
                label: 'Miami Heat',
                icon: 'pi pi-fw pi-plus'
              }
            ]
          }
        ]
      },
      
    ];
  }
}
