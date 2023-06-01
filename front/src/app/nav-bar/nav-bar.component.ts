import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('growShrink', [
      state('grow', style({ height: '80px', backgroundColor: '#2b91d9' })),//gray
      state('shrink', style({ height: '60px', backgroundColor: '#686a6b' })),//blue
      transition('grow <=> shrink', [
        animate('0.5s ease-in-out')
      ])
    ]
  )]
})
export class NavBarComponent implements OnInit {

  @ViewChild('menu') menu: MatMenu;

  navbarState = 'shrink';

  constructor() { }

  toggleNavbar() {
    this.navbarState = this.navbarState === 'shrink' ? 'grow' : 'shrink';
  }

  ngOnInit(): void {
  }


}
