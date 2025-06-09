import { Component } from '@angular/core';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderMobileComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
