import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { literalMap } from '@angular/compiler';


@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  public libros = [
    {titulo: 'Amor imposible', autor: 'Elle Kennedy', portada: 'assets/img/amor_imposible.jpg',categoria:'Romatico'},
    {titulo: 'Cuentos fantasticos',autor: 'E.T.A Hoffmann', portada: 'assets/img/Cuentos_fantasticos.png',categoria:'Fantasía'},
    {titulo: '24 Besos',autor: 'Caroline March',portada: 'assets/img/portada_24-besos.jpg',categoria: 'amor'},
    {titulo: 'Sanatorio de la provenza',autor: 'Rosa Blasco',portada: 'assets/img/sanatorio-de-la-provenza.jpg',categoria: 'Ficción'},
    {titulo: 'Maldito selfi',autor: 'Lorenzo Silva',portada: 'assets/img/maldito-selfi.jpg',categoria: 'Ficción'},
    
    {titulo: 'El Arte de la Guerra',autor: 'Sun Tzu',portada: 'assets/img/El_arte_de_la_guerra.png',categoria: 'Ficción'},
    {titulo: 'Interpretacion  de sueños',autor: 'Sigmund Freud',portada: 'assets/img/La_interpretacion_de_los_suenos.png',categoria: 'Fantasía'},
    {titulo: 'Don Quijote De la mancha',autor: 'Miguel de Cervantes',portada: 'assets/img/librodonquijote.png',categoria: 'Infantil'},
    {titulo: 'Orgullo y prejuicio',autor: 'Jane Austen',portada: 'assets/img/Orgullo_y_prejuicio-Jane_Austen-md.png',categoria:'Clásico'},
    {titulo: 'El guardián invisible',autor: 'Dolores Redondo',portada: 'assets/img/el-guardian-invisible.jpg',categoria: 'Infantil'},
  
    {titulo: 'Cien años de soledad' , autor: 'Gabriel García Márquez',portada:'assets/img/cienaños.jpg',categoria:'Ficción'},
    {titulo: 'El Alquimista' ,autor: 'Paulo Coelho',portada:'assets/img/alquimista.webp',categoria: 'Ficción'},
    {titulo: 'Harry Potter la piedra filosofal' ,autor: 'J.K. Rowling',portada:'assets/img/harrypotter.jpg',categoria:'Fantasía'},
    {titulo: 'La Odisea',autor: 'Homero',portada:'assets/img/odisea.jpg',categoria: 'Clásico'},
    {titulo: 'El principito' ,autor: 'Antoine de Saint-Exupéry',portada:'assets/img/cienaños.jpg',categoria:'Infantil'}
  ];
  Busqueda: string = '';
  Categoriaselecionada: string = '';
  librosFiltro: any[] = [];
  

  onSearchClick() {
    this.librosFiltro = this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(this.Busqueda.toLowerCase()) &&
      (this.Categoriaselecionada === '' || libro.categoria.toLowerCase() === this.Categoriaselecionada.toLowerCase())
    );
  };
}