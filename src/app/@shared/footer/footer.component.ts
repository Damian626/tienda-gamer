import { Component} from '@angular/core';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonFooter, IonTitle]
})
export class FooterComponent{

  constructor() { }

}
