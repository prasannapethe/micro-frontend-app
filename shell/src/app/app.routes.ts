import { Routes } from '@angular/router';
import { Home } from './home/home';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'

        },
    {
        path: 'mf1',
        /**
         * Load the App component from the mfe1 remote.
         */
        loadComponent: () => loadRemoteModule({
            remoteName: 'mf1',
            exposedModule: './Component'}).then(m => m.App)
        }
    ];
