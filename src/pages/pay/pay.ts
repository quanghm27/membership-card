import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
    selector: 'page-pay',
    templateUrl: 'pay.html',
})
export class PayPage {

    checkCardFlg: boolean = true;
    cardCode: string = '';
    productCodes = [];
    visible = true;
    products = [];

    constructor(public alertCtrl: AlertController) {
        this.products = [
            { name: 'elt1' },
            { name: 'elt2' },
            { name: 'elt3' },
        ]
    }

    doCheckCard() {
        if (this.cardCode === '') {
            let alert = this.createMessage('Error', 'Card code cannot null');
            alert.present();
            return;
        }

        if (this.cardCode === '1') {
            this.checkCardFlg = false;
        } else {
            let alert = this.createMessage('Error', 'Card code not exist');
            alert.present();
        }
    }

    doCheckProducts() {
        console.log(this.productCodes);
    }

    createMessage(title, subTitle) {

        let arlert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });

        return arlert;
    }

    doScan() {
        // TO-DO
    }

    // method add
    doAddProduct() {
        this.products.push({ name: 'elt4' });
    }

    // method remove
    doRemoveProduct(product) {
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }
}
