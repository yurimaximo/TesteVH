import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraduacaoComponent } from './components/graduacao/graduacao.component';
import { PosGraduacaoComponent } from './components/pos-graduacao/pos-graduacao.component';
import { SelecaoModalidadeComponent } from './components/selecao-modalidade/selecao-modalidade.component';

@NgModule({
  declarations: [
    AppComponent,
    GraduacaoComponent,
    PosGraduacaoComponent,
    SelecaoModalidadeComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
