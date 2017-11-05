import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardsServiceProvider } from '../../providers/cards-service/cards-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cards: any = [];
  public card: any = [];
  public cardId: string;

  constructor(public navCtrl: NavController, public service: CardsServiceProvider) {

  }

  ionViewDidEnter() {
    this.service.getCards().subscribe(data => {
      this.cards = data.cards;
    });
  }

}
