import { Routes } from '@angular/router';
import { InicioComponent } from './compartido/inicio/inicio.component';
import { LibrosComponent } from './compartido/libros/libros.component';
import { NovedadesComponent } from './compartido/novedades/novedades.component';

export const routes: Routes = [
    {'path': '' , 'title':'' , component:InicioComponent},
    {'path': 'libro' , 'title':'libros' , component:LibrosComponent},
    {'path': 'novedad' , 'title':'Novedades' , component:NovedadesComponent}
];