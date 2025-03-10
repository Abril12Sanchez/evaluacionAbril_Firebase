import { Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { TaxonomiaComponent } from './pages/taxonomia/taxonomia.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path:'libros', component: LibroComponent},
    {path:'productos', component: ProductoComponent},
    {path:'taxonomia', component: TaxonomiaComponent },
    {path:'about', component: AboutComponent },
    {path:'**', redirectTo:'about'}
];
