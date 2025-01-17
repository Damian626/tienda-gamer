import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from "./@shared/header/header.component";
import { FooterComponent } from "./@shared/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  constructor() {}
}
