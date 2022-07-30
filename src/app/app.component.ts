import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu-lateral';

  enlaces :any[] = [
    {
      nombre:'Registrar',
      link: ['registrar-link']
    },
    {
      nombre:'Registrar',
      link: ['registrar-link']
    },
    {
      nombre:'Registrar',
      link: ['registrar-link']
    }
  ]

}
