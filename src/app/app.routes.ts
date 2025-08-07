import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';

export const routes: Routes = [



    {path: "home", component:HomeComponent},
    {path: "registro", component:RegistroUsuarioComponent},
    {path:"login", component:LoginComponent},

    {path:"",
        canActivateChild:[AuthGuard],
        children:[
    
    {path:"productos", component:ProductosComponent},
    {path:"Cerrar", component:CerrarSesionComponent},

    ]
    },
    {path:"nosotros", component:NosotrosComponent},
    {path:"", redirectTo:"/home", pathMatch:"full"}

];
