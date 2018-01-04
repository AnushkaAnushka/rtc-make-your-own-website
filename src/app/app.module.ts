import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ThemeComponent } from './theme/theme.component';
import { LosGehtsComponent } from './los-gehts/los-gehts.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { ConfigComponent } from './config/config.component';
import { IntroComponent } from './intro/intro.component';
import { BilderBlockComponent } from './bilder-block/bilder-block.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ThemeComponent,
    LosGehtsComponent,
    HeaderComponent,
    QuoteComponent,
    ConfigComponent,
    IntroComponent,
    BilderBlockComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
