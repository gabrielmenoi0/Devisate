import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'informatica', loadChildren: './informatica/informatica.module#InformaticaPageModule' },
  { path: 'ds', loadChildren: './ds/ds.module#DsPageModule' },
  { path: 'adm', loadChildren: './adm/adm.module#AdmPageModule' },
  { path: 'infonet', loadChildren: './infonet/infonet.module#InfonetPageModule' },
  { path: 'logistica', loadChildren: './logistica/logistica.module#LogisticaPageModule' },
  { path: 'sj', loadChildren: './sj/sj.module#SjPageModule' },
  { path: 'st', loadChildren: './st/st.module#StPageModule' },
  { path: 'tecadm', loadChildren: './tecadm/tecadm.module#TecadmPageModule' },
  { path: 'tecds', loadChildren: './tecds/tecds.module#TecdsPageModule' },
  { path: 'enfermagem', loadChildren: './enfermagem/enfermagem.module#EnfermagemPageModule' },
  { path: 'contabilidade', loadChildren: './contabilidade/contabilidade.module#ContabilidadePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
