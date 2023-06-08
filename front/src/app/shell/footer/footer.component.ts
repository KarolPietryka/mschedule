import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'kp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class Footer implements OnInit {

  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faLinkedinIn, faGithub);
  }
  ngOnInit(): void {
  }

}
