import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { CasinoComponentComponent } from './casino-component/casino-component.component';
import { ExploreComponentComponent } from './explore-component/explore-component.component';
import { FormsComponentComponent } from './forms-component/forms-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponentComponent,
    CasinoComponentComponent,
    ExploreComponentComponent,
    FormsComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
