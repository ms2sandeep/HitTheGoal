import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeaderComponent } from './header.component/header.component'

@NgModule({
    imports: [IonicModule],
    declarations: [HeaderComponent],
    exports: [IonicModule, HeaderComponent]
})
export class SharedModule { }