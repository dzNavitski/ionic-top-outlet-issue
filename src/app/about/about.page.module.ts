import {AboutPage} from './about.page';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AboutPageRoutingModule} from './about-routing.page.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule
    ],
    declarations: [AboutPage],
    bootstrap: [AboutPage],
})
export class AboutModule {}
