import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-card',
    templateUrl: 'card.html'
})
export class CreateCardPage {

    guestName: string = '';
    phoneNumber: string = '';

    constructor(public http: Http, public navParams: NavParams, public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

    doPostCard() {
        // set URL for http service
        const URL = 'http://sale-card.herokuapp.com/card/create';

        // set header for http service
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // set data for http service
        let data = JSON.stringify({
            guestName: this.guestName,
            phoneNumber: this.phoneNumber
        });

        // validate input
        if (this.guestName === '' || this.guestName === '') {
            let arlert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Guest name or Phone number is empty',
                buttons: ['OK']
            });
            arlert.present();
            return;
        }
        // creating loading mask
        let loadingMask = this.loadingCtrl.create({
            content: 'Creating...'
        });
        loadingMask.present();

        // call api
        this.http.post(URL, data, { headers: headers }).map(res => res.json()).subscribe(
            data => {

                if (data.status === '0') {

                    loadingMask.dismiss();

                    let arlert = this.alertCtrl.create({
                        title: 'OK',
                        subTitle: data.data.cardCode,
                        buttons: ['OK']
                    });

                    arlert.present();
                } else {
                    // TO-DO: switch case for data.status to get error
                    // call function createMessage
                }

            }, err => {
                let arlert = this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Time out',
                        buttons: ['OK']
                    });

                    arlert.present();

            });
    };

    createMessage(string) {

    }
}
