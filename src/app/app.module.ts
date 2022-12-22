import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './Component/small-card/title/title.component';
import { BigCardComponent } from './Component/big-card/big-card.component';
import { SmallCardComponent } from './Component/small-card/small-card.component';
import { HomeComponent } from './screens/home/home.component';
import { MenuBarComponent } from './Component/menu-bar/menu-bar.component';
import { ContentComponent } from './screens/content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    MenuBarComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
