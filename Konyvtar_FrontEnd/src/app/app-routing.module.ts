import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './konyvtar/home/home.component';
import { KolcsonzokComponent } from './konyvtar/kolcsonzok/kolcsonzok.component';
import { KolcsonzesekComponent } from './konyvtar/kolcsonzesek/kolcsonzesek.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kolcsonzok', component: KolcsonzokComponent },
  { path: 'kolcsonzesek', component: KolcsonzesekComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
