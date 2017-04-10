import { ModuleWithProviders } from '@angular/core';
// Importa o modulo de rotas do Angular 2
import { Routes, RouterModule }   from '@angular/router';

// Importa seus componentes criados
import { SearchComponent } from './search/search.component';

// Cria nossas Rotas
const appRoutes: Routes = [
{ path: 'search', pathMatch: 'full', component: SearchComponent }
];

// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);