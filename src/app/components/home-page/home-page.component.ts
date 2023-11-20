import { Component, OnInit, AfterViewInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  testCounter = ['presenza nazionale','professionalità ed esperienza', 'supporto totale',4,5,6];
  count = [0, 0, 0];

  pageWidth: number = 0;
  pageHeight: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.getPageDimensions();

    // Aggiungi un listener per aggiornare le dimensioni quando la finestra viene ridimensionata
    this.renderer.listen('window', 'resize', () => {
      this.getPageDimensions();
    });
  }

  getPageDimensions() {
    // Ottieni l'elemento del corpo della pagina
    const body = this.el.nativeElement.ownerDocument.body;

    // Ottieni le dimensioni della pagina
    this.pageWidth = body.scrollWidth;
    this.pageHeight = body.scrollHeight;
  }
}
