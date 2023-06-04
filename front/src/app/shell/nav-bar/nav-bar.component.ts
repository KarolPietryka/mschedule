import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatMenu } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('growShrink', [
      state('grow', style({ height: '180px', /*backgroundColor: '#2b91d9'*/ })),//gray
    state('shrink', style({ height: '160px', /*backgroundColor: '#686a6b'*/ })),//blue
      transition('grow <=> shrink', [
        animate('0.5s ease-in-out')
      ])
    ]
  )]
})
export class NavBar implements OnInit {

  @ViewChild('menu') menu: MatMenu;

  public quotes: string[] = [
    "Driven by curiosity and coffee.", 
    "Design pattern orthodox.",
    "Dogs lover, hate frogs - but Pepe gets a pass.",
    "Disciple of Robert C. Martin's clean code philosophy.",
    "Reading Napoleon biography for fun.",
    "On a quest to master the enigmatic world of Haskell.",
    "Black Sabbath is best band ever. Ready to defend this stance.",
    "Unapologetically opinionated about the pineapple-on-pizza debate."];
  public currentQuote: string = this.quotes[0];
  private quoteIndex: number = 0;


  navbarState = 'shrink';

  constructor() { }

  toggleNavbar() {
    this.navbarState = this.navbarState === 'shrink' ? 'grow' : 'shrink';
  }

  ngOnInit(): void {
    setInterval(() => {
      this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
      this.currentQuote = this.quotes[this.quoteIndex];
    }, 6000);
  }


}
