import { Component ,OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { literalMap } from '@angular/compiler';
import { FooterComponent } from '../../footer/footer.component';


@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule,FooterComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{

  libros: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchLibros();
  }

  fetchLibros() {
    this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=30&key=AIzaSyCYJ8IOND5esjZx-IlnV2YuhVRPfwyH0wg')
      .subscribe((data: any) => {
        console.log(data);
        this.libros = data.items; 
      });
  }


  /* Busqueda: string = '';
  Categoriaselecionada: string = '';
  librosFiltro: any[] = [];
  

  onSearchClick() {
    this.librosFiltro = this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(this.Busqueda.toLowerCase()) &&
      (this.Categoriaselecionada === '' || libro.categoria.toLowerCase() === this.Categoriaselecionada.toLowerCase())
    );
  };  */
}