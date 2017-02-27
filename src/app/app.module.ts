import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { CoreModule } from './core/core.module';
import { BundleModule } from '../modules/bundle.module';

import { MyApp } from './app.component';

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    CoreModule,
    BundleModule
  ],
  declarations: [MyApp],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
