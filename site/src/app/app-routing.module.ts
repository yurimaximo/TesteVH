import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduacaoComponent } from './components/graduacao/graduacao.component';
import { PosGraduacaoComponent } from './components/pos-graduacao/pos-graduacao.component';
import { SelecaoModalidadeComponent } from './components/selecao-modalidade/selecao-modalidade.component';

const routes: Routes = [
  {path:'',component:SelecaoModalidadeComponent},
  {path:'graduacao',component:GraduacaoComponent},
  {path:'pos-graduacao', component:PosGraduacaoComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
