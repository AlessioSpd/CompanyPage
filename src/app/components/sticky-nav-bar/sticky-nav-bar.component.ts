import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-nav-bar',
  templateUrl: './sticky-nav-bar.component.html',
  styleUrls: ['./sticky-nav-bar.component.scss']
})
export class StickyNavBarComponent {

  scrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    scrollPosition >= 300 ? this.scrolled = true : this.scrolled = false;
  }
}
