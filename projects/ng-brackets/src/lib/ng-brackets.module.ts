import {NgModule} from '@angular/core';
import {NgBracketsComponent} from './components/ng-brackets.component';
import {CommonModule} from '@angular/common';

/** @deprecated */
@NgModule({
  declarations: [NgBracketsComponent],
  imports: [CommonModule],
  exports: [NgBracketsComponent]
})
export class NgBracketsModule {
}
