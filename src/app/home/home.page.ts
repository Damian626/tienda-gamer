import { Component } from '@angular/core';
import { IonToolbar, IonTitle, IonContent, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,  IonToolbar, IonContent],
})
export class HomePage {
  constructor() {}
}
