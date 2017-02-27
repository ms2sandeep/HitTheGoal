import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './constant.config';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    exports: [
        AngularFireModule,
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}