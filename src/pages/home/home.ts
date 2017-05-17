import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PayPage } from '../pay/pay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doRedirectPay() {
  	this.navCtrl.setRoot(PayPage);
  }

}
