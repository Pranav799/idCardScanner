import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapCardComponent } from 'src/components/tap-card/tap-card.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { ErrorTapComponent } from 'src/components/error-tap/error-tap.component';
import { SucessfullTapComponent } from 'src/components/sucessfull-tap/sucessfull-tap.component';

@NgModule({
  declarations: [
    AppComponent,
    TapCardComponent,
    FooterComponent,
    ErrorTapComponent,
    SucessfullTapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
