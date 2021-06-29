import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgBracketsModule} from '../../projects/ng-brackets/src/lib/ng-brackets.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgBracketsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
