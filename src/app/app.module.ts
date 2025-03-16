import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCardComponent } from './shared/components/molecules/user-card/user-card.component';
import { UserGridComponent } from './shared/components/organisms/user-grid/user-grid.component';
import { UserDetailsComponent } from './modules/user/user-details/user-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserGridComponent,
    UserDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
