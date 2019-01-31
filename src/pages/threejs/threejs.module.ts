import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThreejsPage } from './threejs';

@NgModule({
  declarations: [
    ThreejsPage,
  ],
  imports: [
    IonicPageModule.forChild(ThreejsPage),
  ],
})
export class ThreejsPageModule {}
