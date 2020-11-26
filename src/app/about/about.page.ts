import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'about-page',
    templateUrl: 'about.page.html',
    styleUrls: ['about.page.scss']
})
export class AboutPage {

    constructor(private router: Router,
                private navCtrl: NavController) {
    }

    public openAboutPage(): Promise<boolean> {
        return this.router.navigate(['about']);
    }

    public logTopOutlet(): void {
        // @ts-ignore
        console.warn('navController top routerOutlet', this.navCtrl.topOutlet);
    }

    public back() {
        return this.navCtrl.pop();
    }

}
