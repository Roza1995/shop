import { BorderedBoxDirective } from './directives/bordered-box.directive';
import { LoaderComponent } from './../shared/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFormDirective } from './directives/show-form.directive';
import { BlockCopyPasteDirective } from './directives/block-copy-paste.directive';





@NgModule({
  declarations: [
    LoaderComponent,
    BorderedBoxDirective,
    ShowFormDirective,
    BlockCopyPasteDirective
   ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    BorderedBoxDirective,
    ShowFormDirective,
    BlockCopyPasteDirective,
   ],
  
})
export class SharedModule { }
