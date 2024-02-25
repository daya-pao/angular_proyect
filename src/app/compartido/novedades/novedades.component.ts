import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {

  public Testimonio =[
    {
      nombre:'Angelica sanchez',
      testimonio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum nesciunt non. Cum illo assumenda, sed dignissimos modi ducimus consequatur sit non natus quo, officia odio et beatae harum omnis.'
    },
    {
      nombre:'Roberto perez',
      testimonio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum nesciunt non. Cum illo assumenda, sed dignissimos modi ducimus consequatur sit non natus quo, officia odio et beatae harum omnis.'
    },
    {
      nombre:'El lector de Moda',
      testimonio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum nesciunt non. Cum illo assumenda, sed dignissimos modi ducimus consequatur sit non natus quo, officia odio et beatae harum omnis.'
    },
    {
      nombre:'Critico molina',
      testimonio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum nesciunt non. Cum illo assumenda, sed dignissimos modi ducimus consequatur sit non natus quo, officia odio et beatae harum omnis.'
    }

  ]

}
