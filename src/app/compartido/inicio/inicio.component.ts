import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const bookImage = document.getElementById("book-image") as HTMLElement;
    if (bookImage) {
        bookImage.classList.add("loaded");
    }
  }

  public librosLeido = [
    {titulo:'Maldito Selfi', Autor:'Lorenzo Silva',portada:'assets/img/maldito-selfi.jpg'},
    {titulo:'Alquimista', Autor:'',portada:'assets/img/alquimista.webp'},
    {titulo:'24 besos', Autor:'Lorenzo Silva',portada:'assets/img/portada_24-besos.jpg'},
    {titulo:'Odisea', Autor:'Lorenzo Silva',portada:'assets/img/odisea.jpg'}
  ]

  

}
