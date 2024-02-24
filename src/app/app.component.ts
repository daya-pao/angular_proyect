import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { LibrosComponent } from './compartido/libros/libros.component';
import { InicioComponent } from './compartido/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent, FooterComponent,InicioComponent,LibrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba_1';
}
