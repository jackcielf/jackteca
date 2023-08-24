import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CardThoughtComponent } from './components/thoughts/card-thought/card-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ListThoughtsComponent,
    CardThoughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
